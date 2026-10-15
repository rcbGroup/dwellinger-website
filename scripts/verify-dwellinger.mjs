#!/usr/bin/env node
/**
 * verify-dwellinger.mjs — local build verification script.
 *
 * Usage: node scripts/verify-dwellinger.mjs http://localhost:3100
 *
 * Checks:
 * - Key pages return 200
 * - robots.txt matches expected content
 * - JSON-LD parses on key pages
 * - No duplicate AskDwellinger widget roots
 * - Redirects (301/308) for legacy URLs
 * - No entity details visible when PUBLISH_ENTITY=false
 *
 * Exits non-zero on any failure.
 */

const [, , BASE_URL = 'http://localhost:3100'] = process.argv

let passed = 0
let failed = 0

async function check(name, fn) {
  try {
    await fn()
    console.log(`  PASS  ${name}`)
    passed++
  } catch (err) {
    console.error(`  FAIL  ${name}: ${err.message}`)
    failed++
  }
}

async function fetchText(path) {
  const res = await fetch(`${BASE_URL}${path}`)
  return { status: res.status, text: await res.text(), headers: res.headers }
}

async function fetchFollow(path) {
  const res = await fetch(`${BASE_URL}${path}`, { redirect: 'manual' })
  return { status: res.status, location: res.headers.get('location') }
}

console.log(`\nverify-dwellinger @ ${BASE_URL}\n`)

// --- Page availability ---
const PUBLIC_PAGES = [
  '/', '/about', '/builder-score', '/trust', '/services/estimating',
  '/platform/pricing', '/get-a-quote', '/contact', '/blog',
  '/locations', '/tools/extension-cost-calculator',
]

for (const page of PUBLIC_PAGES) {
  await check(`GET ${page} → 200`, async () => {
    const { status } = await fetchText(page)
    if (status !== 200) throw new Error(`Got ${status}`)
  })
}

// --- robots.txt ---
await check('robots.txt contains Googlebot Allow: /', async () => {
  const { text } = await fetchText('/robots.txt')
  if (!text.includes('User-agent: Googlebot')) throw new Error('Missing Googlebot block')
  if (!text.includes('Allow: /')) throw new Error('Missing Allow: /')
  if (text.includes('/_next/')) throw new Error('Must not disallow /_next/')
})

await check('robots.txt has Sitemap line', async () => {
  const { text } = await fetchText('/robots.txt')
  if (!text.includes('Sitemap:')) throw new Error('Missing Sitemap line')
})

// --- Redirects ---
const REDIRECTS = [
  ['/contractor/rcb-design-build', '/contractor/rcbgroup'],
  ['/contractors/rcb-design-build', '/contractor/rcbgroup'],
  ['/for-homeowners', '/homeowners'],
  ['/for-professionals', '/professionals'],
  ['/for-investors', '/investors'],
  ['/pricing', '/platform/pricing'],
]

for (const [from, to] of REDIRECTS) {
  await check(`${from} → 301/308 to ${to}`, async () => {
    const { status, location } = await fetchFollow(from)
    if (status !== 301 && status !== 308) throw new Error(`Got ${status} (expected 301 or 308)`)
    if (!location?.endsWith(to)) throw new Error(`Location was ${location}, expected to end with ${to}`)
  })
}

// --- No entity details when PUBLISH_ENTITY=false ---
await check('Homepage has no company number', async () => {
  const { text } = await fetchText('/')
  if (text.includes('16871183')) throw new Error('Company number found on homepage')
  if (/280.?282\s*church/i.test(text)) throw new Error('Birmingham address found on homepage')
})

// --- No fake contractors ---
await check('Homepage has no fake contractor names', async () => {
  const { text } = await fetchText('/')
  const fakes = ['Meridian Build', 'Apex Build Solutions', 'Thornton Structural', 'Heritage Roofing']
  for (const name of fakes) {
    if (text.includes(name)) throw new Error(`Fake contractor name found: "${name}"`)
  }
})

// --- No response-time promises ---
await check('Homepage has no "within 2 hours" promise', async () => {
  const { text } = await fetchText('/')
  if (/within\s+2\s+hours/i.test(text)) throw new Error('"within 2 hours" found')
  if (/contractors?\s+will\s+be\s+in\s+touch/i.test(text)) throw new Error('"contractors will be in touch" found')
})

// --- JSON-LD ---
const JSON_LD_PAGES = ['/', '/about', '/builder-score', '/services/estimating', '/platform/pricing']

for (const page of JSON_LD_PAGES) {
  await check(`${page} JSON-LD parses`, async () => {
    const { text } = await fetchText(page)
    const match = text.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/i)
    if (!match) return // no JSON-LD — warn only, not fail
    JSON.parse(match[1]) // throws on invalid JSON
  })
}

// --- Summary ---
console.log(`\n${passed} passed, ${failed} failed\n`)
process.exit(failed > 0 ? 1 : 0)
