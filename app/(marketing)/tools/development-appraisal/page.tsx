'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function DevelopmentAppraisalPage() {
  const [gdv, setGdv] = useState(1200000)
  const [buildCost, setBuildCost] = useState(550000)
  const [landCost, setLandCost] = useState(280000)
  const [financeRate, setFinanceRate] = useState(8.5)
  const [months, setMonths] = useState(18)
  const [calculated, setCalculated] = useState(false)

  const financeCost = (buildCost + landCost) * (financeRate / 100) * (months / 12)
  const totalCost = buildCost + landCost + financeCost
  const profit = gdv - totalCost
  const profitMargin = gdv > 0 ? (profit / gdv) * 100 : 0
  const roi = totalCost > 0 ? (profit / totalCost) * 100 : 0
  const residualLand = gdv - buildCost - gdv * 0.2 - financeCost

  const fmt = (n: number) =>
    (n < 0 ? '-£' : '£') + Math.abs(Math.round(n)).toLocaleString('en-GB')

  const pct = (n: number) => (n >= 0 ? '+' : '') + n.toFixed(1) + '%'

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
    <div>
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
            Development Appraisal Calculator
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
            Rapid residential development appraisal: profit on GDV, ROI on cost,
            finance cost modelling and residual land value.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section style={{ backgroundColor: '#F5F0E8', padding: '64px 24px' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
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
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '20px',
                marginBottom: '28px',
              }}
            >
              {[
                { label: 'Gross Development Value (GDV) — £', value: gdv, setter: setGdv },
                { label: 'Build Cost — £', value: buildCost, setter: setBuildCost },
                { label: 'Land Cost — £', value: landCost, setter: setLandCost },
              ].map(({ label, value, setter }) => (
                <div key={label}>
                  <label style={labelStyle}>{label}</label>
                  <input
                    type="number"
                    value={value}
                    onChange={(e) => {
                      setter(Number(e.target.value))
                      setCalculated(false)
                    }}
                    style={fieldStyle}
                  />
                </div>
              ))}
              <div>
                <label style={labelStyle}>Finance Rate (% per annum): {financeRate}%</label>
                <input
                  type="range"
                  min={5}
                  max={15}
                  step={0.5}
                  value={financeRate}
                  onChange={(e) => {
                    setFinanceRate(Number(e.target.value))
                    setCalculated(false)
                  }}
                  style={{ width: '100%', accentColor: '#C4773B', marginTop: '12px' }}
                />
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '0.75rem',
                    color: '#6B7280',
                    marginTop: '4px',
                  }}
                >
                  <span>5%</span>
                  <span>15%</span>
                </div>
              </div>
              <div>
                <label style={labelStyle}>Programme (months): {months}</label>
                <input
                  type="range"
                  min={6}
                  max={36}
                  step={1}
                  value={months}
                  onChange={(e) => {
                    setMonths(Number(e.target.value))
                    setCalculated(false)
                  }}
                  style={{ width: '100%', accentColor: '#C4773B', marginTop: '12px' }}
                />
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '0.75rem',
                    color: '#6B7280',
                    marginTop: '4px',
                  }}
                >
                  <span>6 months</span>
                  <span>36 months</span>
                </div>
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
              Run Appraisal
            </button>

            {calculated && (
              <div style={{ marginTop: '32px' }}>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                    gap: '14px',
                    marginBottom: '16px',
                  }}
                >
                  {[
                    { label: 'GDV', value: fmt(gdv) },
                    { label: 'Total Cost', value: fmt(totalCost) },
                    { label: 'Finance Cost', value: fmt(financeCost) },
                    { label: 'Profit', value: fmt(profit), highlight: profit > 0 },
                    { label: 'Profit on GDV', value: pct(profitMargin), highlight: profitMargin > 15 },
                    { label: 'ROI on Cost', value: pct(roi), highlight: roi > 20 },
                  ].map((m) => (
                    <div
                      key={m.label}
                      style={{
                        backgroundColor: m.highlight ? '#1A2340' : '#F5F0E8',
                        borderRadius: '8px',
                        padding: '16px',
                        textAlign: 'center',
                      }}
                    >
                      <div
                        style={{
                          fontSize: 'clamp(1rem, 2vw, 1.3rem)',
                          fontWeight: 800,
                          color: m.highlight ? '#C4773B' : '#1A2340',
                          marginBottom: '4px',
                        }}
                      >
                        {m.value}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: m.highlight ? '#c8d0de' : '#4A5568', fontWeight: 600 }}>
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Residual land */}
                <div
                  style={{
                    backgroundColor: '#1A2340',
                    borderRadius: '10px',
                    padding: '20px 24px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '16px',
                    flexWrap: 'wrap',
                    gap: '8px',
                  }}
                >
                  <div>
                    <div style={{ color: '#c8d0de', fontSize: '0.85rem' }}>Residual Land Value</div>
                    <div style={{ color: '#6B7280', fontSize: '0.75rem' }}>
                      GDV &minus; build cost &minus; 20% developer margin &minus; finance
                    </div>
                  </div>
                  <div style={{ color: '#C4773B', fontSize: '1.6rem', fontWeight: 800 }}>
                    {fmt(residualLand)}
                  </div>
                </div>

                <p style={{ color: '#6B7280', fontSize: '0.78rem', lineHeight: 1.5 }}>
                  Simplified appraisal for indicative purposes only. Excludes planning costs, agent fees,
                  contingency, S106/CIL and detailed finance structuring. Seek professional advice
                  before acquisition.
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
                    Get QS Estimate
                  </Link>
                  <Link
                    href="/investor-hub"
                    style={{
                      flex: 1,
                      minWidth: '160px',
                      display: 'block',
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
    </div>
  )
}
