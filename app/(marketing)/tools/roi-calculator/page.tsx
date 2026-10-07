'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ROICalculatorPage() {
  const [purchasePrice, setPurchasePrice] = useState(350000)
  const [renovation, setRenovation] = useState(45000)
  const [monthlyRent, setMonthlyRent] = useState(1800)
  const [monthlyCosts, setMonthlyCosts] = useState(350)
  const [calculated, setCalculated] = useState(false)

  const totalInvested = purchasePrice + renovation
  const annualRent = monthlyRent * 12
  const annualNet = (monthlyRent - monthlyCosts) * 12
  const grossYield = totalInvested > 0 ? (annualRent / totalInvested) * 100 : 0
  const netYield = totalInvested > 0 ? (annualNet / totalInvested) * 100 : 0
  const cashOnCash = renovation > 0 ? (annualNet / renovation) * 100 : 0

  const fmt = (n: number) =>
    '£' + Math.round(n).toLocaleString('en-GB')

  const pct = (n: number) => n.toFixed(2) + '%'

  const fieldStyle = {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '8px',
    border: '2px solid #EDE8DC',
    fontSize: '1rem',
    color: '#1A2340',
    outline: 'none',
    boxSizing: 'border-box' as const,
  }

  const labelStyle = {
    display: 'block' as const,
    color: '#1A2340',
    fontWeight: 700,
    fontSize: '0.9rem',
    marginBottom: '8px',
  }

  return (
    <main>
      {/* Hero */}
      <section
        style={{
          backgroundColor: '#1A2340',
          color: '#FFFFFF',
          padding: '80px 24px',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <p
            style={{
              color: '#C4773B',
              fontWeight: 600,
              fontSize: '13px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: '20px',
            }}
          >
            Free Tool
          </p>
          <h1
            style={{
              fontSize: 'clamp(1.8rem, 4.5vw, 2.9rem)',
              fontWeight: 700,
              lineHeight: 1.15,
              marginBottom: '16px',
            }}
          >
            Property ROI &amp; Yield Calculator
          </h1>
          <p
            style={{
              fontSize: '1.1rem',
              color: '#c8d0de',
              maxWidth: '580px',
              margin: '0 auto',
              lineHeight: 1.6,
            }}
          >
            Calculate gross yield, net yield and cash-on-cash return before
            committing to an acquisition or renovation project.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section style={{ backgroundColor: '#F5F0E8', padding: '64px 24px' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '12px',
              padding: '40px',
              border: '1px solid #EDE8DC',
              boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '20px',
                marginBottom: '28px',
              }}
            >
              <div>
                <label style={labelStyle}>Purchase Price (£)</label>
                <input
                  type="number"
                  value={purchasePrice}
                  onChange={(e) => {
                    setPurchasePrice(Number(e.target.value))
                    setCalculated(false)
                  }}
                  style={fieldStyle}
                />
              </div>
              <div>
                <label style={labelStyle}>Renovation Cost (£)</label>
                <input
                  type="number"
                  value={renovation}
                  onChange={(e) => {
                    setRenovation(Number(e.target.value))
                    setCalculated(false)
                  }}
                  style={fieldStyle}
                />
              </div>
              <div>
                <label style={labelStyle}>Monthly Rent (£)</label>
                <input
                  type="number"
                  value={monthlyRent}
                  onChange={(e) => {
                    setMonthlyRent(Number(e.target.value))
                    setCalculated(false)
                  }}
                  style={fieldStyle}
                />
              </div>
              <div>
                <label style={labelStyle}>Monthly Costs — mgmt, insurance, service charges (£)</label>
                <input
                  type="number"
                  value={monthlyCosts}
                  onChange={(e) => {
                    setMonthlyCosts(Number(e.target.value))
                    setCalculated(false)
                  }}
                  style={fieldStyle}
                />
              </div>
            </div>

            <button
              onClick={() => setCalculated(true)}
              style={{
                width: '100%',
                backgroundColor: '#C4773B',
                color: '#FFFFFF',
                padding: '16px',
                borderRadius: '8px',
                fontWeight: 700,
                fontSize: '1rem',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Calculate Returns
            </button>

            {calculated && (
              <div style={{ marginTop: '32px' }}>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                    gap: '16px',
                    marginBottom: '20px',
                  }}
                >
                  {[
                    { label: 'Total Invested', value: fmt(totalInvested), sub: 'purchase + renovation' },
                    { label: 'Annual Rent', value: fmt(annualRent), sub: 'gross income' },
                    { label: 'Gross Yield', value: pct(grossYield), sub: 'before costs', highlight: true },
                    { label: 'Net Yield', value: pct(netYield), sub: 'after running costs', highlight: true },
                    { label: 'Cash-on-Cash', value: pct(cashOnCash), sub: 'on renovation spend', highlight: true },
                  ].map((m) => (
                    <div
                      key={m.label}
                      style={{
                        backgroundColor: m.highlight ? '#1A2340' : '#F5F0E8',
                        borderRadius: '10px',
                        padding: '20px',
                        textAlign: 'center',
                      }}
                    >
                      <div
                        style={{
                          fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
                          fontWeight: 800,
                          color: m.highlight ? '#C4773B' : '#1A2340',
                          marginBottom: '4px',
                        }}
                      >
                        {m.value}
                      </div>
                      <div
                        style={{
                          fontSize: '0.8rem',
                          color: m.highlight ? '#c8d0de' : '#1A2340',
                          fontWeight: 600,
                        }}
                      >
                        {m.label}
                      </div>
                      <div style={{ fontSize: '0.72rem', color: m.highlight ? '#8fa0bc' : '#6B7280', marginTop: '2px' }}>
                        {m.sub}
                      </div>
                    </div>
                  ))}
                </div>

                <p
                  style={{
                    color: '#6B7280',
                    fontSize: '0.78rem',
                    lineHeight: 1.5,
                  }}
                >
                  Excludes SDLT, legal fees, mortgage costs, void periods and CGT. For
                  illustration only &mdash; obtain professional advice before acquisition.
                </p>

                <div style={{ display: 'flex', gap: '12px', marginTop: '20px', flexWrap: 'wrap' }}>
                  <Link
                    href="/get-a-quote"
                    style={{
                      flex: 1,
                      minWidth: '160px',
                      display: 'block',
                      backgroundColor: '#C4773B',
                      color: '#FFFFFF',
                      padding: '14px 20px',
                      borderRadius: '6px',
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      textDecoration: 'none',
                      textAlign: 'center',
                    }}
                  >
                    Get Build Cost Estimate
                  </Link>
                  <Link
                    href="/investor-hub"
                    style={{
                      flex: 1,
                      minWidth: '160px',
                      display: 'block',
                      backgroundColor: 'transparent',
                      color: '#1A2340',
                      padding: '14px 20px',
                      borderRadius: '6px',
                      fontWeight: 600,
                      fontSize: '0.9rem',
                      textDecoration: 'none',
                      textAlign: 'center',
                      border: '2px solid #1A2340',
                    }}
                  >
                    Investor Hub
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
