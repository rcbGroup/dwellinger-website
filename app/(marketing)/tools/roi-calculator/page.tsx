'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ROICalculatorPage() {
  const [purchase, setPurchase] = useState(350000)
  const [renovation, setRenovation] = useState(45000)
  const [monthlyRent, setMonthlyRent] = useState(1800)
  const [costs, setCosts] = useState(200)

  const totalInvested = purchase + renovation
  const annualRent = monthlyRent * 12
  const annualNet = (monthlyRent - costs) * 12
  const grossYield = totalInvested > 0 ? (annualRent / totalInvested) * 100 : 0
  const netYield = totalInvested > 0 ? (annualNet / totalInvested) * 100 : 0
  const cashOnCash = renovation > 0 ? (annualNet / renovation) * 100 : 0

  const fmt = (n: number) => '£' + Math.round(n).toLocaleString()
  const pct = (n: number) => n.toFixed(2) + '%'

  const S = {
    label: { display: 'block', fontWeight: 600, color: '#1A2340', fontSize: '0.875rem', marginBottom: '6px' },
    input: { width: '100%', padding: '10px 12px', borderRadius: '6px', border: '1px solid #D1CBB8', fontSize: '0.95rem', color: '#1A2340', boxSizing: 'border-box' as const },
    card: { backgroundColor: '#F5F0E8', borderRadius: '10px', border: '1px solid #EDE8DC', padding: '20px' },
    stat: { color: '#4A5568', fontSize: '0.82rem', margin: '0 0 4px' },
    val: { color: '#1A2340', fontWeight: 800, fontSize: '1.4rem', margin: 0 },
    valGreen: { color: '#C4773B', fontWeight: 800, fontSize: '1.4rem', margin: 0 },
  }

  return (
    <main>
      <section style={{ backgroundColor: '#1A2340', color: '#FFFFFF', padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <p style={{ color: '#C4773B', fontWeight: 600, fontSize: '13px', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '18px' }}>
            Investor Tool
          </p>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, lineHeight: 1.12, marginBottom: '20px' }}>
            Property ROI &amp; Yield Calculator
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#c8d0de', maxWidth: '600px', margin: '0 auto', lineHeight: 1.7 }}>
            Calculate gross yield, net yield and cash-on-cash return for any buy-to-let or HMO acquisition.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: '#FFFFFF', padding: '64px 24px' }}>
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '20px', marginBottom: '32px' }}>
            <div>
              <label style={S.label}>Purchase price</label>
              <input type="number" style={S.input} value={purchase} onChange={e => setPurchase(Number(e.target.value))} step={5000} />
            </div>
            <div>
              <label style={S.label}>Renovation cost</label>
              <input type="number" style={S.input} value={renovation} onChange={e => setRenovation(Number(e.target.value))} step={1000} />
            </div>
            <div>
              <label style={S.label}>Monthly rent</label>
              <input type="number" style={S.input} value={monthlyRent} onChange={e => setMonthlyRent(Number(e.target.value))} step={50} />
            </div>
            <div>
              <label style={S.label}>Monthly costs (mgmt, insurance etc)</label>
              <input type="number" style={S.input} value={costs} onChange={e => setCosts(Number(e.target.value))} step={25} />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '14px', marginBottom: '32px' }}>
            <div style={S.card}>
              <p style={S.stat}>Total invested</p>
              <p style={S.val}>{fmt(totalInvested)}</p>
            </div>
            <div style={S.card}>
              <p style={S.stat}>Annual rent income</p>
              <p style={S.val}>{fmt(annualRent)}</p>
            </div>
            <div style={S.card}>
              <p style={S.stat}>Gross yield</p>
              <p style={S.valGreen}>{pct(grossYield)}</p>
            </div>
            <div style={S.card}>
              <p style={S.stat}>Net yield</p>
              <p style={S.valGreen}>{pct(netYield)}</p>
            </div>
            <div style={S.card}>
              <p style={S.stat}>Cash-on-cash (reno only)</p>
              <p style={S.valGreen}>{pct(cashOnCash)}</p>
            </div>
          </div>

          <p style={{ color: '#4A5568', fontSize: '0.82rem', lineHeight: 1.6, borderTop: '1px solid #EDE8DC', paddingTop: '16px', marginBottom: '28px' }}>
            For illustrative purposes only. Does not include stamp duty, legal fees, mortgage finance, voids, or capital gains tax.
            Consult a financial adviser before making investment decisions.
          </p>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Link href="/estimate" style={{ display: 'inline-block', backgroundColor: '#C4773B', color: '#FFFFFF', padding: '14px 28px', borderRadius: '6px', fontWeight: 700, textDecoration: 'none' }}>
              Get Build Cost Estimate
            </Link>
            <Link href="/investor-hub" style={{ display: 'inline-block', backgroundColor: 'transparent', color: '#1A2340', padding: '14px 28px', borderRadius: '6px', fontWeight: 600, textDecoration: 'none', border: '1px solid #D1CBB8' }}>
              Back to Investor Hub
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
