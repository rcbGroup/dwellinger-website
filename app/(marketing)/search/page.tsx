'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Search, MapPin, Shield } from 'lucide-react'

const TRADES = ['All Trades', 'Extensions', 'Loft Conversions', 'Refurbishment', 'Kitchen', 'Bathroom', 'Structural', 'Electrical', 'Plumbing', 'Roofing']
const AREAS = ['All Areas', 'Central London', 'Inner London', 'Outer London', 'South East', 'Rest of UK']

type Contractor = {
  id: string
  slug: string
  name: string
  specialisms: string[]
  location: string
  score: number
  verified: boolean
  years_trading: number
  projects_completed: number
  tagline?: string
}

export default function SearchPage() {
  const [contractors, setContractors] = useState<Contractor[]>([])
  const [filtered, setFiltered] = useState<Contractor[]>([])
  const [loading, setLoading] = useState(true)
  const [query, setQuery] = useState('')
  const [trade, setTrade] = useState('All Trades')
  const [area, setArea] = useState('All Areas')

  useEffect(() => {
    fetch('/api/contractors')
      .then(r => r.json())
      .then(data => { setContractors(data); setFiltered(data); setLoading(false) })
      .catch(() => setLoading(false))
  }, [])

  useEffect(() => {
    let res = contractors
    if (query) res = res.filter(c => c.name?.toLowerCase().includes(query.toLowerCase()) || c.specialisms?.some(s => s.toLowerCase().includes(query.toLowerCase())))
    if (trade !== 'All Trades') res = res.filter(c => c.specialisms?.some(s => s.toLowerCase().includes(trade.toLowerCase())))
    if (area !== 'All Areas') res = res.filter(c => c.location?.toLowerCase().includes(area.split(' ')[0].toLowerCase()))
    setFiltered(res)
  }, [query, trade, area, contractors])

  return (
    <div style={{ background: 'var(--color-bg, #0A0A0A)', minHeight: '100vh' }}>
      {/* Hero */}
      <section style={{ padding: '72px 24px 48px', background: 'linear-gradient(180deg, rgba(196,119,59,0.08) 0%, transparent 100%)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: '#C4773B', fontWeight: 600, fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 14 }}>Contractor Search</p>
          <h1 style={{ color: '#fff', fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 800, marginBottom: 12 }}>Find verified contractors</h1>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '1rem', marginBottom: 32 }}>Every contractor on Dwellinger carries a Builder Score™ — verified, reviewed, and ranked.</p>
          <div style={{ position: 'relative', maxWidth: 500, margin: '0 auto' }}>
            <Search size={18} style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.3)', pointerEvents: 'none' }} />
            <input type='text' placeholder='Search by name or trade...' value={query} onChange={e => setQuery(e.target.value)}
              style={{ width: '100%', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 10, padding: '14px 16px 14px 46px', color: '#fff', fontSize: '0.95rem', outline: 'none', boxSizing: 'border-box' }} />
          </div>
        </div>
      </section>

      {/* Filters + grid */}
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '36px 24px 80px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 32, alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {TRADES.map(t => (
              <button key={t} onClick={() => setTrade(t)} style={{ padding: '7px 14px', borderRadius: 20, border: '1px solid', borderColor: trade === t ? '#C4773B' : 'rgba(255,255,255,0.1)', background: trade === t ? 'rgba(196,119,59,0.15)' : 'rgba(255,255,255,0.03)', color: trade === t ? '#C4773B' : 'rgba(255,255,255,0.4)', fontWeight: 600, fontSize: '0.78rem', cursor: 'pointer' }}>{t}</button>
            ))}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginLeft: 'auto' }}>
            <MapPin size={13} style={{ color: 'rgba(255,255,255,0.3)' }} />
            <select value={area} onChange={e => setArea(e.target.value)} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, padding: '7px 12px', color: 'rgba(255,255,255,0.6)', fontSize: '0.83rem', outline: 'none', cursor: 'pointer' }}>
              {AREAS.map(a => <option key={a} value={a}>{a}</option>)}
            </select>
          </div>
        </div>

        <p style={{ color: 'rgba(255,255,255,0.28)', fontSize: '0.8rem', marginBottom: 20 }}>
          {loading ? 'Loading...' : `${filtered.length} contractor${filtered.length !== 1 ? 's' : ''} found`}
        </p>

        {loading ? (
          <div style={{ textAlign: 'center', padding: '80px 0', color: 'rgba(255,255,255,0.3)' }}>Loading contractors…</div>
        ) : filtered.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '80px 0' }}>
            <div style={{ color: 'rgba(255,255,255,0.35)', marginBottom: 16, fontSize: '0.95rem' }}>No contractors match your search.</div>
            <button onClick={() => { setQuery(''); setTrade('All Trades'); setArea('All Areas') }} style={{ background: '#C4773B', color: '#fff', border: 'none', borderRadius: 8, padding: '10px 24px', fontWeight: 600, fontSize: '0.9rem', cursor: 'pointer' }}>Clear filters</button>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 18 }}>
            {filtered.map(c => (
              <Link key={c.id || c.slug} href={`/contractors/${c.slug || c.id}`} style={{ textDecoration: 'none' }}>
                <div
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: '22px', cursor: 'pointer', transition: 'border-color 0.2s', height: '100%', boxSizing: 'border-box' }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(196,119,59,0.4)')}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)')}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                    <div>
                      <div style={{ color: '#fff', fontWeight: 700, fontSize: '1rem', marginBottom: 3 }}>{c.name}</div>
                      <div style={{ color: 'rgba(255,255,255,0.38)', fontSize: '0.76rem' }}>{c.location}</div>
                    </div>
                    {c.score ? (
                      <div style={{ width: 44, height: 44, borderRadius: '50%', border: `2px solid ${c.score >= 80 ? '#C4773B' : 'rgba(255,255,255,0.2)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.3)', flexShrink: 0 }}>
                        <span style={{ color: '#C4773B', fontWeight: 800, fontSize: '0.82rem' }}>{c.score}</span>
                      </div>
                    ) : null}
                  </div>
                  {c.tagline && <p style={{ color: 'rgba(255,255,255,0.42)', fontSize: '0.8rem', lineHeight: 1.5, marginBottom: 12 }}>{c.tagline}</p>}
                  {c.specialisms?.length > 0 && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginBottom: 12 }}>
                      {c.specialisms.slice(0, 4).map(s => (
                        <span key={s} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 4, padding: '2px 7px', color: 'rgba(255,255,255,0.38)', fontSize: '0.7rem' }}>{s}</span>
                      ))}
                    </div>
                  )}
                  <div style={{ display: 'flex', gap: 14, color: 'rgba(255,255,255,0.28)', fontSize: '0.74rem', flexWrap: 'wrap' }}>
                    {c.years_trading ? <span>{c.years_trading} yrs</span> : null}
                    {c.projects_completed ? <span>{c.projects_completed}+ projects</span> : null}
                    {c.verified ? <span style={{ color: '#C4773B', display: 'flex', alignItems: 'center', gap: 3 }}><Shield size={11}/> Verified</span> : null}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Contractor CTA */}
        <div style={{ marginTop: 64, textAlign: 'center', padding: '36px', background: 'rgba(196,119,59,0.06)', border: '1px solid rgba(196,119,59,0.15)', borderRadius: 16 }}>
          <p style={{ color: 'rgba(255,255,255,0.4)', marginBottom: 6, fontSize: '0.85rem' }}>Are you a contractor?</p>
          <h3 style={{ color: '#fff', fontWeight: 700, fontSize: '1.15rem', marginBottom: 18 }}>Get your Builder Score™ profile and start receiving verified leads</h3>
          <Link href='/contractors/register' style={{ display: 'inline-block', background: '#C4773B', color: '#fff', padding: '11px 26px', borderRadius: 8, fontWeight: 700, textDecoration: 'none', fontSize: '0.92rem' }}>Apply to join</Link>
        </div>
      </section>
    </div>
  )
}
