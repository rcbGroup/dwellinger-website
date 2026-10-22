// /api/tenders/govt — Government tender discovery for Dwellinger contractors.
//
// Scans the UK Government's Contracts Finder (OCDS search API) for open
// construction tenders matching keywords relevant to residential/commercial build.
// No API key required — Contracts Finder is a public service.
//
// GET  -> returns cached results (4h)
// POST -> forces a fresh scan
// POST body { draft: true, tender: {...} } -> AI bid response via OpenAI

import { NextRequest, NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

const CF_OCDS = 'https://www.contractsfinder.service.gov.uk/Published/Notices/OCDS/Search'

const KEYWORDS = [
  'construction',
  'refurbishment',
  'residential renovation',
  'building maintenance',
  'extensions',
  'loft conversion',
  'fit-out',
  'planned maintenance',
  'void works',
  'HMO conversion',
  'groundworks',
  'principal contractor',
]

const VALUE_MIN = 10_000
const VALUE_MAX = 2_000_000

export type GovTender = {
  id: string
  title: string
  buyer: string
  value: number | null
  currency: string
  description: string
  url: string
  publishedDate: string
  closingDate: string
  matchedKeyword: string
  matchScore: number
}

function scoreKeywords(tender: GovTender, allKeywords: string[]): number {
  const blob = `${tender.title} ${tender.description} ${tender.buyer}`.toLowerCase()
  const hits = allKeywords.filter(kw => blob.includes(kw.toLowerCase())).length
  return Math.min(100, Math.round((hits / allKeywords.length) * 100) + 30)
}

function parseRelease(result: any, keyword: string): GovTender | null {
  try {
    const release = Array.isArray(result?.releases) ? result.releases[0] : result?.releases || result
    const tender = release?.tender || {}
    const ocid = result?.ocid || release?.ocid || tender?.id
    if (!ocid) return null

    const valueAmount =
      typeof tender?.value?.amount === 'number'
        ? tender.value.amount
        : typeof tender?.minValue?.amount === 'number'
          ? tender.minValue.amount
          : null

    if (valueAmount !== null && (valueAmount < VALUE_MIN || valueAmount > VALUE_MAX)) return null

    const buyer =
      release?.buyer?.name ||
      (Array.isArray(release?.parties)
        ? release.parties.find((p: any) => p?.roles?.includes('buyer'))?.name
        : '') ||
      'Public sector buyer'

    return {
      id: String(ocid),
      title: (tender?.title || release?.title || 'Untitled tender').trim(),
      buyer,
      value: valueAmount,
      currency: tender?.value?.currency || 'GBP',
      description: (tender?.description || '').slice(0, 600),
      url: `https://www.contractsfinder.service.gov.uk/notice/${encodeURIComponent(String(ocid))}`,
      publishedDate: release?.date || '',
      closingDate: tender?.tenderPeriod?.endDate || '',
      matchedKeyword: keyword,
      matchScore: 50,
    }
  } catch {
    return null
  }
}

async function searchKeyword(keyword: string): Promise<GovTender[]> {
  const body = {
    searchCriteria: { keyword, statuses: ['Open'], stages: ['tender'] },
    size: 50,
    order: 'desc',
  }
  const res = await fetch(CF_OCDS, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(body),
    signal: AbortSignal.timeout(15_000),
  })
  if (!res.ok) throw new Error(`Contracts Finder returned ${res.status}`)
  const json: any = await res.json()
  const results: any[] = json?.results || json?.releases || []
  return results.map(r => parseRelease(r, keyword)).filter((t): t is GovTender => !!t)
}

async function runScan(): Promise<{ tenders: GovTender[]; scannedAt: string; errors: string[] }> {
  const errors: string[] = []
  const byId = new Map<string, GovTender>()

  for (const kw of KEYWORDS) {
    try {
      const found = await searchKeyword(kw)
      for (const t of found) {
        if (!byId.has(t.id)) byId.set(t.id, t)
      }
    } catch (err: any) {
      errors.push(`${kw}: ${err?.message || 'failed'}`)
    }
  }

  const tenders = [...byId.values()]
    .map(t => ({ ...t, matchScore: scoreKeywords(t, KEYWORDS) }))
    .sort((a, b) => b.matchScore - a.matchScore || (b.publishedDate || '').localeCompare(a.publishedDate || ''))

  return { tenders, scannedAt: new Date().toISOString(), errors }
}

export async function GET() {
  try {
    const payload = await runScan()
    return NextResponse.json(payload, {
      headers: { 'Cache-Control': 's-maxage=14400, stale-while-revalidate=3600' },
    })
  } catch (err: any) {
    return NextResponse.json({ tenders: [], scannedAt: '', errors: [err?.message || 'scan failed'] })
  }
}

export async function POST(req: NextRequest) {
  let body: any = {}
  try { body = await req.json() } catch { /* empty */ }

  if (body?.draft === true && body?.tender) {
    const t: GovTender = body.tender
    const apiKey = process.env.OPENAI_API_KEY
    if (!apiKey) return NextResponse.json({ error: 'OPENAI_API_KEY not set' }, { status: 503 })

    const prompt = `You are a professional bid writer for a UK construction contractor.
Write a concise but persuasive bid response (PQQ/ITT) for the following government tender opportunity.
Focus on: company experience, quality assurance, CDM compliance, principal contractor capability, value for money, and client focus.
Keep it professional, structured, and around 600-800 words.

Tender: ${t.title}
Buyer: ${t.buyer}
Value: ${t.value ? '\u00a3' + t.value.toLocaleString() : 'TBC'}
Description: ${t.description}
Closing Date: ${t.closingDate || 'TBC'}

Write the bid response now:`

    try {
      const aiRes = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}` },
        body: JSON.stringify({ model: 'gpt-4o-mini', messages: [{ role: 'user', content: prompt }], temperature: 0.7, max_tokens: 1200 }),
      })
      const aiJson: any = await aiRes.json()
      return NextResponse.json({ draft: aiJson?.choices?.[0]?.message?.content || '' })
    } catch (err: any) {
      return NextResponse.json({ error: err?.message || 'AI error' }, { status: 500 })
    }
  }

  try {
    const payload = await runScan()
    return NextResponse.json(payload)
  } catch (err: any) {
    return NextResponse.json({ tenders: [], scannedAt: '', errors: [err?.message || 'failed'] })
  }
}
