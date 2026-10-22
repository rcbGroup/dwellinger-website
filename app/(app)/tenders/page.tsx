'use client'

// /tenders — Government Tender Discovery for Dwellinger contractors.
// Scans UK Contracts Finder for open construction tenders.
// Contractors can browse, filter, save, and generate AI bid responses.

import { useState, useEffect, useCallback, useMemo } from 'react'
import {
  Radar, RefreshCw, ExternalLink, Bookmark, BookmarkCheck, X,
  Clock, PoundSterling, Building2, Search, Sparkles, Copy, Check,
  AlertTriangle, TrendingUp, Filter,
} from 'lucide-react'

type GovTender = {
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

function fmtMoney(v: number | null): string {
  if (v == null) return 'Value TBC'
  return '\u00a3' + v.toLocaleString()
}

function fmtDate(iso: string): string {
  if (!iso) return '\u2014'
  const d = new Date(iso)
  if (isNaN(d.getTime())) return '\u2014'
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
}

function daysUntil(iso: string): number | null {
  if (!iso) return null
  const d = new Date(iso)
  if (isNaN(d.getTime())) return null
  return Math.ceil((d.getTime() - Date.now()) / 86_400_000)
}

function countdownLabel(iso: string): { text: string; color: string } {
  const days = daysUntil(iso)
  if (days == null) return { text: 'No deadline', color: '#6b7280' }
  if (days < 0)  return { text: 'Closed', color: '#6b7280' }
  if (days === 0) return { text: 'Closes today!', color: '#ef4444' }
  if (days <= 7)  return { text: days + 'd left', color: '#ef4444' }
  if (days <= 21) return { text: days + 'd left', color: '#f59e0b' }
  return { text: days + 'd left', color: '#22c55e' }
}

function scoreColor(s: number) {
  if (s >= 70) return '#22c55e'
  if (s >= 50) return '#f59e0b'
  return '#6b7280'
}

const SAVED_KEY = 'dwellinger_gov_tenders_saved'
const DISMISSED_KEY = 'dwellinger_gov_tenders_dismissed'

function readSet(key: string): Set<string> {
  if (typeof window === 'undefined') return new Set()
  try { return new Set(JSON.parse(localStorage.getItem(key) || '[]')) } catch { return new Set() }
}
function writeSet(key: string, set: Set<string>) {
  try { localStorage.setItem(key, JSON.stringify([...set])) } catch { /* quota */ }
}

function BidDraftModal({ tender, onClose }: { tender: GovTender; onClose: () => void }) {
  const [loading, setLoading] = useState(true)
  const [draft, setDraft] = useState('')
  const [error, setError] = useState('')
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    let cancelled = false
    ;(async () => {
      try {
        const res = await fetch('/api/tenders/govt', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ draft: true, tender }),
        })
        const data = await res.json()
        if (cancelled) return
        if (!res.ok || data.error) setError(data?.error || 'Failed to generate draft')
        else setDraft(data.draft || '')
      } catch {
        if (!cancelled) setError('Network error \u2014 please try again')
      } finally {
        if (!cancelled) setLoading(false)
      }
    })()
    return () => { cancelled = true }
  }, [tender])

  const copy = () => {
    navigator.clipboard.writeText(draft).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: 'rgba(0,0,0,0.7)' }} onClick={onClose}>
      <div className="w-full max-w-3xl max-h-[88vh] flex flex-col rounded-2xl border overflow-hidden" style={{ background: 'var(--color-bg)', borderColor: 'var(--color-border)' }} onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between px-5 py-4 border-b flex-shrink-0" style={{ borderColor: 'var(--color-border)' }}>
          <div className="flex items-center gap-2 min-w-0">
            <Sparkles size={16} style={{ color: '#C4773B' }} />
            <div className="min-w-0">
              <h3 className="text-sm font-semibold text-white truncate">AI Bid Response Draft</h3>
              <p className="text-xs text-zinc-400 truncate">{tender.title}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            {draft && (
              <button onClick={copy} className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium bg-zinc-800 text-white">
                {copied ? <Check size={13} /> : <Copy size={13} />}
                {copied ? 'Copied' : 'Copy'}
              </button>
            )}
            <button onClick={onClose} className="p-1.5 rounded-lg bg-zinc-800"><X size={15} className="text-zinc-400" /></button>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto p-5">
          {loading && (
            <div className="flex flex-col items-center justify-center py-20 gap-3">
              <RefreshCw size={22} className="animate-spin" style={{ color: '#C4773B' }} />
              <p className="text-sm text-zinc-400">Generating bid response\u2026</p>
            </div>
          )}
          {error && <div className="flex items-start gap-2 p-3 rounded-lg text-sm bg-red-500/10 text-red-400"><AlertTriangle size={15} className="mt-0.5 flex-shrink-0" /><span>{error}</span></div>}
          {!loading && !error && <pre className="whitespace-pre-wrap text-sm leading-relaxed font-sans text-zinc-300">{draft}</pre>}
        </div>
        <div className="px-5 py-3 border-t flex-shrink-0" style={{ borderColor: 'var(--color-border)' }}>
          <p className="text-xs text-zinc-500">Draft only \u2014 review and customise before submitting. Add your company name, registration number, and specific project experience.</p>
        </div>
      </div>
    </div>
  )
}

function TenderCard({ tender, saved, onToggleSave, onDismiss, onDraft }: { tender: GovTender; saved: boolean; onToggleSave: () => void; onDismiss: () => void; onDraft: () => void }) {
  const cd = countdownLabel(tender.closingDate)
  return (
    <div className="rounded-xl border p-4 flex flex-col gap-3" style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }}>
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="text-sm font-semibold text-white leading-snug line-clamp-2">{tender.title}</h3>
          <div className="flex items-center gap-1.5 mt-1 text-xs text-zinc-500"><Building2 size={12} /><span className="truncate">{tender.buyer}</span></div>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg px-2 py-1 flex-shrink-0 bg-zinc-800">
          <span className="text-base font-bold leading-none" style={{ color: scoreColor(tender.matchScore) }}>{tender.matchScore}</span>
          <span className="text-[9px] uppercase tracking-wide text-zinc-500">match</span>
        </div>
      </div>
      {tender.description && <p className="text-xs text-zinc-400 leading-relaxed line-clamp-2">{tender.description}</p>}
      <div className="flex flex-wrap gap-3 text-xs text-zinc-400">
        <span className="flex items-center gap-1"><PoundSterling size={12} style={{ color: '#C4773B' }} />{fmtMoney(tender.value)}</span>
        {tender.closingDate && <span className="flex items-center gap-1" style={{ color: cd.color }}><Clock size={12} />{cd.text}<span className="text-zinc-500">\u00b7 {fmtDate(tender.closingDate)}</span></span>}
        {tender.publishedDate && <span className="text-zinc-600">Published {fmtDate(tender.publishedDate)}</span>}
      </div>
      <div>
        <span className="text-[10px] px-1.5 py-0.5 rounded font-medium" style={{ background: 'rgba(196,119,59,0.15)', color: '#C4773B' }}>{tender.matchedKeyword}</span>
      </div>
      <div className="flex items-center gap-2 flex-wrap pt-1 border-t border-zinc-800">
        <a href={tender.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium bg-zinc-800 text-white hover:bg-zinc-700 transition-colors">
          <ExternalLink size={13} />View Tender
        </a>
        <button onClick={onDraft} className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors" style={{ background: '#C4773B', color: '#fff' }}>
          <Sparkles size={13} />Draft Bid
        </button>
        <button onClick={onToggleSave} className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium bg-zinc-800 transition-colors" style={{ color: saved ? '#C4773B' : '#9ca3af' }}>
          {saved ? <BookmarkCheck size={13} /> : <Bookmark size={13} />}{saved ? 'Saved' : 'Save'}
        </button>
        <button onClick={onDismiss} className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium bg-zinc-800 text-zinc-500 ml-auto hover:text-red-400 transition-colors">
          <X size={13} />Dismiss
        </button>
      </div>
    </div>
  )
}

function StatTile({ label, value, color }: { label: string; value: number | string; color?: string }) {
  return (
    <div className="rounded-xl border px-4 py-3" style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }}>
      <div className="text-xl font-bold" style={{ color: color || '#fff' }}>{value}</div>
      <div className="text-xs text-zinc-500 mt-0.5">{label}</div>
    </div>
  )
}

export default function GovTendersPage() {
  const [tenders, setTenders] = useState<GovTender[]>([])
  const [scannedAt, setScannedAt] = useState('')
  const [errors, setErrors] = useState<string[]>([])
  const [loading, setLoading] = useState(true)
  const [scanning, setScanning] = useState(false)
  const [saved, setSaved] = useState<Set<string>>(new Set())
  const [dismissed, setDismissed] = useState<Set<string>>(new Set())
  const [keyword, setKeyword] = useState('')
  const [minValue, setMinValue] = useState('')
  const [maxValue, setMaxValue] = useState('')
  const [view, setView] = useState<'all' | 'saved'>('all')
  const [draftTender, setDraftTender] = useState<GovTender | null>(null)

  useEffect(() => {
    setSaved(readSet(SAVED_KEY))
    setDismissed(readSet(DISMISSED_KEY))
  }, [])

  const load = useCallback(async (force: boolean) => {
    if (force) setScanning(true); else setLoading(true)
    try {
      const res = force
        ? await fetch('/api/tenders/govt', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: '{}' })
        : await fetch('/api/tenders/govt')
      const data = await res.json()
      setTenders(Array.isArray(data.tenders) ? data.tenders : [])
      setScannedAt(data.scannedAt || '')
      setErrors(Array.isArray(data.errors) ? data.errors : [])
    } catch {
      setErrors(['Failed to load tenders \u2014 please try again'])
    } finally {
      setLoading(false); setScanning(false)
    }
  }, [])

  useEffect(() => { load(false) }, [load])

  const toggleSave = (id: string) => {
    setSaved(prev => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id); else next.add(id)
      writeSet(SAVED_KEY, next)
      return next
    })
  }

  const dismiss = (id: string) => {
    setDismissed(prev => {
      const next = new Set(prev); next.add(id)
      writeSet(DISMISSED_KEY, next); return next
    })
  }

  const filtered = useMemo(() => {
    const kw = keyword.trim().toLowerCase()
    const min = minValue ? Number(minValue) : null
    const max = maxValue ? Number(maxValue) : null
    return tenders.filter(t => {
      if (dismissed.has(t.id)) return false
      if (view === 'saved' && !saved.has(t.id)) return false
      if (kw && !(`${t.title} ${t.description} ${t.buyer} ${t.matchedKeyword}`).toLowerCase().includes(kw)) return false
      if (min != null && t.value != null && t.value < min) return false
      if (max != null && t.value != null && t.value > max) return false
      return true
    })
  }, [tenders, dismissed, saved, view, keyword, minValue, maxValue])

  const stats = useMemo(() => {
    const visible = tenders.filter(t => !dismissed.has(t.id))
    return {
      total: tenders.length,
      visible: visible.length,
      saved: visible.filter(t => saved.has(t.id)).length,
      urgent: visible.filter(t => { const d = daysUntil(t.closingDate); return d != null && d >= 0 && d <= 7 }).length,
    }
  }, [tenders, dismissed, saved])

  return (
    <div className="flex flex-col min-h-screen" style={{ color: '#fff' }}>
      <div className="flex items-center justify-between px-5 py-4 border-b flex-shrink-0 sticky top-14 z-10 backdrop-blur-md" style={{ borderColor: 'var(--color-border)', background: 'rgba(10,10,12,0.9)' }}>
        <div className="flex items-center gap-3">
          <Radar size={20} style={{ color: '#C4773B' }} />
          <div>
            <h1 className="text-lg font-semibold text-white">Government Tender Radar</h1>
            <p className="text-xs text-zinc-500">UK Contracts Finder \u00b7 open construction tenders{scannedAt && <> \u00b7 last scan {fmtDate(scannedAt)}</>}</p>
          </div>
        </div>
        <button onClick={() => load(true)} disabled={scanning} className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-opacity" style={{ background: '#C4773B', color: '#fff', opacity: scanning ? 0.6 : 1 }}>
          <RefreshCw size={14} className={scanning ? 'animate-spin' : ''} />
          {scanning ? 'Scanning\u2026' : 'Refresh Now'}
        </button>
      </div>

      <div className="flex-1 p-5 space-y-5 max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <StatTile label="Found" value={stats.total} />
          <StatTile label="Active" value={stats.visible} color="#C4773B" />
          <StatTile label="Saved" value={stats.saved} />
          <StatTile label="Closing this week" value={stats.urgent} color={stats.urgent > 0 ? '#ef4444' : undefined} />
        </div>

        <div className="rounded-xl border p-3 flex flex-wrap items-center gap-2" style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }}>
          <Filter size={14} className="text-zinc-500 flex-shrink-0" />
          <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg flex-1 min-w-[160px] bg-zinc-800">
            <Search size={13} className="text-zinc-500" />
            <input value={keyword} onChange={e => setKeyword(e.target.value)} placeholder="Filter by keyword\u2026" className="bg-transparent outline-none text-sm flex-1 text-white placeholder-zinc-500" />
          </div>
          <input value={minValue} onChange={e => setMinValue(e.target.value.replace(/\D/g, ''))} placeholder="Min \u00a3" inputMode="numeric" className="px-2.5 py-1.5 rounded-lg text-sm outline-none w-20 bg-zinc-800 text-white placeholder-zinc-500" />
          <input value={maxValue} onChange={e => setMaxValue(e.target.value.replace(/\D/g, ''))} placeholder="Max \u00a3" inputMode="numeric" className="px-2.5 py-1.5 rounded-lg text-sm outline-none w-20 bg-zinc-800 text-white placeholder-zinc-500" />
          <div className="flex items-center rounded-lg overflow-hidden bg-zinc-800">
            {(['all', 'saved'] as const).map(v => (
              <button key={v} onClick={() => setView(v)} className="px-2.5 py-1.5 text-xs font-medium capitalize transition-colors" style={{ background: view === v ? '#C4773B' : 'transparent', color: view === v ? '#fff' : '#6b7280' }}>{v}</button>
            ))}
          </div>
          <button onClick={() => { setKeyword(''); setMinValue(''); setMaxValue(''); setView('all') }} className="px-2.5 py-1.5 rounded-lg text-xs font-medium bg-zinc-800 text-zinc-500 hover:text-white transition-colors">Reset</button>
        </div>

        {errors.length > 0 && (
          <div className="flex items-start gap-2 p-3 rounded-lg text-xs bg-amber-500/10 text-amber-400">
            <AlertTriangle size={13} className="mt-0.5 flex-shrink-0" />
            <span>Some sources had issues (showing available results): {errors.join(' \u00b7 ')}</span>
          </div>
        )}

        {loading ? (
          <div className="flex flex-col items-center justify-center py-24 gap-3">
            <RefreshCw size={24} className="animate-spin" style={{ color: '#C4773B' }} />
            <p className="text-sm text-zinc-400">Scanning Contracts Finder\u2026</p>
          </div>
        ) : filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 gap-3 text-center">
            <TrendingUp size={28} className="text-zinc-600" />
            <p className="text-sm font-medium text-zinc-400">No tenders match your filters</p>
            <p className="text-xs text-zinc-600 max-w-xs">Try resetting filters or hit <strong className="text-zinc-400">Refresh Now</strong> to pull the latest from Contracts Finder.</p>
          </div>
        ) : (
          <>
            <p className="text-xs text-zinc-600">{filtered.length} tender{filtered.length !== 1 ? 's' : ''}</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {filtered.map(t => (
                <TenderCard key={t.id} tender={t} saved={saved.has(t.id)} onToggleSave={() => toggleSave(t.id)} onDismiss={() => dismiss(t.id)} onDraft={() => setDraftTender(t)} />
              ))}
            </div>
          </>
        )}

        <p className="text-xs text-zinc-600 pb-8">
          Data from <a href="https://www.contractsfinder.service.gov.uk" target="_blank" rel="noopener noreferrer" className="underline hover:text-zinc-400">Contracts Finder</a> (Crown Copyright). Open tenders only. Verify all details on the official notice before submitting a bid.
        </p>
      </div>

      {draftTender && <BidDraftModal tender={draftTender} onClose={() => setDraftTender(null)} />}
    </div>
  )
        }
