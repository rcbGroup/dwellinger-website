'use client'

import { useState } from 'react'
import Link from 'next/link'

const S = {
  nav: { backgroundColor: '#1A2340', color: '#FFFFFF', padding: '96px 24px', textAlign: 'center' as const },
  copper: { color: '#C4773B' },
  h1: { fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, lineHeight: 1.12, marginBottom: '20px' },
  sub: { fontSize: '1.1rem', color: '#c8d0de', maxWidth: '620px', margin: '0 auto 32px', lineHeight: 1.7 },
  card: { backgroundColor: '#F5F0E8', borderRadius: '10px', border: '1px solid #EDE8DC' },
  label: { display: 'block', fontWeight: 600, color: '#1A2340', fontSize: '0.875rem', marginBottom: '8px' },
  select: { width: '100%', padding: '10px 12px', borderRadius: '6px', border: '1px solid #D1CBB8', fontSize: '0.95rem', backgroundColor: '#FFFFFF', color: '#1A2340' },
}

export default function HMOCalculatorPage() {
  const [bedrooms, setBedrooms] = useState(4)
  const [condition, setCondition] = useState('basic')
  const [zone, setZone] = useState('outer')

  const basePerRoom: Record<string, Record<string, number>> = {
    outer: { shell: 26000, basic: 13000, refurb: 8000 },
    inner: { shell: 34000, basic: 17000, refurb: 11000 },
  }
  const fireBase = bedrooms >= 6 ? 9500 : 5000
  const mAndE = bedrooms * 1900
  const kitBath = bedrooms >= 6 ? 19000 : 13000
  const licencing = 2800
  const roomCost = basePerRoom[zone][condition] * bedrooms
  const total = roomCost + fireBase + mAndE + kitBath + licencing
  const low = Math.round(total * 0.9 / 500) * 500
  const high = Math.round(total * 1.18 / 500) * 500
  const fmt = (n: number) => '£' + n.toLocaleString()

  return (
    <main>
      <section style={S.nav}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <p style={{ ...S.copper, fontWeight: 600, fontSize: '13px', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '18px' }}>
            Free Tool
          </p>
          <h1 style={S.h1}>HMO Conversion Cost Calculator</h1>
          <p style={S.sub}>
            Estimate the cost of converting a residential property to a licensed HMO.
            Based on real London project data. Includes fire compliance, M&amp;E, and room fit-out.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: '#FFFFFF', padding: '64px 24px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginBottom: '32px' }}>
            <div>
              <label style={S.label}>Number of bedrooms</label>
              <select style={S.select} value={bedrooms} onChange={e => setBedrooms(Number(e.target.value))}>
                {[3,4,5,6,7,8].map(n => <option key={n} value={n}>{n} bedrooms {n >= 6 ? '(mandatory licensing)' : ''}</option>)}
              </select>
            </div>
            <div>
              <label style={S.label}>Current property condition</label>
              <select style={S.select} value={condition} onChange={e => setCondition(e.target.value)}>
                <option value="shell">Shell / structural works needed</option>
                <option value="basic">Habitable but needs full upgrade</option>
                <option value="refurb">Good condition, light refurb</option>
              </select>
            </div>
            <div>
              <label style={S.label}>Location</label>
              <select style={S.select} value={zone} onChange={e => setZone(e.target.value)}>
                <option value="outer">Outer London / Zone 3-6</option>
                <option value="inner">Inner London / Zone 1-2</option>
              </select>
            </div>
          </div>

          <div style={{ ...S.card, padding: '36px', marginBottom: '32px' }}>
            <p style={{ color: '#4A5568', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600, marginBottom: '8px' }}>Estimated conversion cost</p>
            <p style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, color: '#1A2340', margin: '0 0 4px' }}>
              {fmt(low)} &ndash; {fmt(high)}
            </p>
            <p style={{ color: '#4A5568', fontSize: '0.9rem', margin: 0 }}>Indicative range, excl. VAT. Based on {bedrooms}-bed HMO in {zone === 'inner' ? 'inner' : 'outer'} London.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px', marginBottom: '40px' }}>
            {[
              { label: 'Room fit-out', val: fmt(Math.round(roomCost / 500) * 500) },
              { label: 'Fire compliance', val: fmt(Math.round(fireBase / 100) * 100) },
              { label: 'M&E / electrical', val: fmt(Math.round(mAndE / 100) * 100) },
              { label: 'Kitchen & bathrooms', val: fmt(Math.round(kitBath / 100) * 100) },
              { label: 'Licence prep', val: fmt(licencing) },
            ].map(item => (
              <div key={item.label} style={{ ...S.card, padding: '16px 20px' }}>
                <p style={{ color: '#4A5568', fontSize: '0.8rem', margin: '0 0 4px' }}>{item.label}</p>
                <p style={{ color: '#1A2340', fontWeight: 700, fontSize: '1rem', margin: 0 }}>{item.val}</p>
              </div>
            ))}
          </div>

          <p style={{ color: '#4A5568', fontSize: '0.82rem', lineHeight: 1.6, marginBottom: '32px', borderTop: '1px solid #EDE8DC', paddingTop: '20px' }}>
            Estimates are indicative only. Costs vary based on structural condition, spec level, planning requirements, 
            and site-specific factors. Party wall issues, drainage works, and external alterations are excluded.
            Get a detailed quote for your specific project.
          </p>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Link href="/get-a-quote" style={{ display: 'inline-block', backgroundColor: '#C4773B', color: '#FFFFFF', padding: '14px 32px', borderRadius: '6px', fontWeight: 700, fontSize: '1rem', textDecoration: 'none' }}>
              Get Detailed Quote
            </Link>
            <Link href="/investor-hub" style={{ display: 'inline-block', backgroundColor: 'transparent', color: '#1A2340', padding: '14px 32px', borderRadius: '6px', fontWeight: 600, fontSize: '1rem', textDecoration: 'none', border: '1px solid #D1CBB8' }}>
              Investor Hub
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
