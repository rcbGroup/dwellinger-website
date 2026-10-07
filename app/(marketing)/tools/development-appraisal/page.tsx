'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function DevelopmentAppraisalPage() {
  const [gdv, setGdv] = useState(750000)
  const [buildCost, setBuildCost] = useState(280000)
  const [landCost, setLandCost] = useState(180000)
  const [financeRate, setFinanceRate] = useState(8.5)
  const [months, setMonths] = useState(12)

  const financeCost = ((buildCost + landCost) * (financeRate / 100) * (months / 12))
  const totalCost = buildCost + landCost + financeCost
  const profit = gdv - totalCost
  const profitMargin = gdv > 0 ? (profit / gdv) * 100 : 0
  const roi = totalCost > 0 ? (profit / totalCost) * 100 : 0
  const residualLand = gdv - buildCost - (gdv * 0.20) - financeCost

  const fmt = (n: number) => '£' + Math.round(Math.abs(n)).toLocaleString()
  const pct = (n: number) => n.toFixed(1) + '%'
  const pos = (n: number) => n >= 0

  const S = {
    label: { display: 'block', fontWeight: 600, color: '#1A2340', fontSize: '0.875rem', marginBottom: '6px' },
    input: { width: '100%', padding: '10px 12px', borderRadius: '6px', border: '1px solid #D1CBB8', fontSize: '0.95rem', color: '#1A2340', boxSizing: 'border-box' as const },
    card: { backgroundColor: '#F5F0E8', borderRadius: '10px', border: '1px solid #EDE8DC', padding: '20px' },
  }

  return (
    <main>
      <section style={{ backgroundColor: '#1A2340', color: '#FFFFFF', padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <p style={{ color: '#C4773B', fontWeight: 600, fontSize: '13px', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '18px' }}>
            Developer Tool
          </p>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, lineHeight: 1.12, marginBottom: '20px' }}>
            Residential Development Appraisal
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#c8d0de', maxWidth: '600px', margin: '0 auto', lineHeight: 1.7 }}>
            Model GDV, build cost, finance, and profit margin in minutes.
            A fast sanity check before you commit to a site.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: '#FFFFFF', padding: '64px 24px' }}>
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '20px', marginBottom: '32px' }}>
            <div>
              <label style={S.label}>Gross development value (GDV)</label>
              <input type="number" style={S.input} value={gdv} onChange={e => setGdv(Number(e.target.value))} step={25000} />
            </div>
            <div>
              <label style={S.label}>Build cost</label>
              <input type="number" style={S.input} value={buildCost} onChange={e => setBuildCost(Number(e.target.value))} step={10000} />
            </div>
            <div>
              <label style={S.label}>Land / acquisition cost</label>
              <input type="number" style={S.input} value={landCost} onChange={e => setLandCost(Number(e.target.value))} step={10000} />
            </div>
            <div>
              <label style={S.label}>Finance rate (% per year)</label>
              <input type="number" style={S.input} value={financeRate} onChange={e => setFinanceRate(Number(e.target.value))} step={0.25} />
            </div>
            <div>
              <label style={S.label}>Programme (months)</label>
              <input type="number" style={S.input} value={months} onChange={e => setMonths(Number(e.target.value))} step={1} min={1} />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '14px', marginBottom: '28px' }}>
            {[
              { label: 'GDV', val: fmt(gdv), copper: false },
              { label: 'Total cost', val: fmt(totalCost), copper: false },
              { label: 'Finance cost', val: fmt(financeCost), copper: false },
              { label: 'Profit', val: (pos(profit) ? '' : '-') + fmt(profit), copper: pos(profit) },
              { label: 'Profit on GDV', val: pct(profitMargin), copper: pos(profitMargin) },
              { label: 'ROI on cost', val: pct(roi), copper: pos(roi) },
            ].map(item => (
              <div key={item.label} style={S.card}>
                <p style={{ color: '#4A5568', fontSize: '0.82rem', margin: '0 0 4px' }}>{item.label}</p>
                <p style={{ color: item.copper ? '#C4773B' : '#1A2340', fontWeight: 800, fontSize: '1.3rem', margin: 0 }}>{item.val}</p>
              </div>
            ))}
          </div>

          <div style={{ backgroundColor: '#1A2340', borderRadius: '10px', padding: '20px 24px', marginBottom: '24px' }}>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', margin: '0 0 4px' }}>Residual land value (20% developer margin)</p>
            <p style={{ color: '#C4773B', fontWeight: 800, fontSize: '1.5rem', margin: 0 }}>
              {pos(residualLand) ? fmt(residualLand) : 'Site does not support this margin at these costs'}
            </p>
          </div>

          <p style={{ color: '#4A5568', fontSize: '0.82rem', lineHeight: 1.6, borderTop: '1px solid #EDE8DC', paddingTop: '16px', marginBottom: '28px' }}>
            Simplified appraisal for indicative use only. Excludes professional fees, planning costs, CIL, S106 obligations, and agent fees.
            For a detailed appraisal, contact our QS team.
          </p>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Link href="/get-a-quote" style={{ display: 'inline-block', backgroundColor: '#C4773B', color: '#FFFFFF', padding: '14px 28px', borderRadius: '6px', fontWeight: 700, textDecoration: 'none' }}>
              Talk to Our QS Team
            </Link>
            <Link href="/investor-hub" style={{ display: 'inline-block', backgroundColor: 'transparent', color: '#1A2340', padding: '14px 28px', borderRadius: '6px', fontWeight: 600, textDecoration: 'none', border: '1px solid #D1CBB8' }}>
              Investor Hub
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
