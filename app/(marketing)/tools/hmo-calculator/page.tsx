'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function HMOCalculatorPage() {
  const [bedrooms, setBedrooms] = useState(5)
  const [condition, setCondition] = useState<'shell' | 'basic' | 'refurb'>('basic')
  const [zone, setZone] = useState<'outer' | 'inner'>('outer')
  const [calculated, setCalculated] = useState(false)

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
  const low = Math.round((total * 0.9) / 500) * 500
  const high = Math.round((total * 1.18) / 500) * 500

  const fmt = (n: number) =>
    n >= 1000 ? `£${(n / 1000).toFixed(0)}k` : `£${n}`

  const conditionLabels: Record<string, string> = {
    shell: 'Shell (full strip-out)',
    basic: 'Basic (habitable but dated)',
    refurb: 'Light refurbishment only',
  }

  const breakdowns = [
    { label: 'Room fit-out', value: roomCost },
    { label: 'Fire compliance & detection', value: fireBase },
    { label: 'M&E (electrical + plumbing)', value: mAndE },
    { label: 'Kitchen & bathrooms', value: kitBath },
    { label: 'Licence preparation & admin', value: licencing },
  ]

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
            HMO Conversion Cost Calculator
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
            Instant cost estimate for converting a property to HMO. Based on real
            London projects including fire compliance, M&amp;E and licensing costs.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section style={{ backgroundColor: '#F5F0E8', padding: '64px 24px' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '12px',
              padding: '40px',
              border: '1px solid #EDE8DC',
              boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
            }}
          >
            {/* Bedrooms */}
            <div style={{ marginBottom: '28px' }}>
              <label
                style={{
                  display: 'block',
                  color: '#1A2340',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  marginBottom: '12px',
                }}
              >
                Number of Bedrooms: {bedrooms}
              </label>
              <input
                type="range"
                min={3}
                max={8}
                value={bedrooms}
                onChange={(e) => {
                  setBedrooms(Number(e.target.value))
                  setCalculated(false)
                }}
                style={{ width: '100%', accentColor: '#C4773B' }}
              />
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: '0.8rem',
                  color: '#6B7280',
                  marginTop: '4px',
                }}
              >
                <span>3 beds</span>
                <span>8 beds</span>
              </div>
            </div>

            {/* Condition */}
            <div style={{ marginBottom: '28px' }}>
              <label
                style={{
                  display: 'block',
                  color: '#1A2340',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  marginBottom: '12px',
                }}
              >
                Current Property Condition
              </label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {(['shell', 'basic', 'refurb'] as const).map((c) => (
                  <label
                    key={c}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      cursor: 'pointer',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      border: `2px solid ${condition === c ? '#C4773B' : '#EDE8DC'}`,
                      backgroundColor: condition === c ? '#FDF8F3' : '#FFFFFF',
                    }}
                  >
                    <input
                      type="radio"
                      name="condition"
                      value={c}
                      checked={condition === c}
                      onChange={() => {
                        setCondition(c)
                        setCalculated(false)
                      }}
                      style={{ accentColor: '#C4773B' }}
                    />
                    <span style={{ color: '#1A2340', fontSize: '0.9rem' }}>
                      {conditionLabels[c]}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Zone */}
            <div style={{ marginBottom: '32px' }}>
              <label
                style={{
                  display: 'block',
                  color: '#1A2340',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  marginBottom: '12px',
                }}
              >
                Location
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                {(['outer', 'inner'] as const).map((z) => (
                  <label
                    key={z}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      cursor: 'pointer',
                      padding: '14px',
                      borderRadius: '8px',
                      border: `2px solid ${zone === z ? '#C4773B' : '#EDE8DC'}`,
                      backgroundColor: zone === z ? '#FDF8F3' : '#FFFFFF',
                      fontWeight: zone === z ? 700 : 400,
                      color: '#1A2340',
                      fontSize: '0.9rem',
                    }}
                  >
                    <input
                      type="radio"
                      name="zone"
                      value={z}
                      checked={zone === z}
                      onChange={() => {
                        setZone(z)
                        setCalculated(false)
                      }}
                      style={{ accentColor: '#C4773B' }}
                    />
                    {z === 'outer' ? 'Outer London' : 'Inner London'}
                  </label>
                ))}
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
              Calculate HMO Cost
            </button>

            {calculated && (
              <div style={{ marginTop: '32px' }}>
                <div
                  style={{
                    backgroundColor: '#1A2340',
                    borderRadius: '10px',
                    padding: '28px',
                    textAlign: 'center',
                    marginBottom: '20px',
                  }}
                >
                  <p style={{ color: '#c8d0de', fontSize: '0.9rem', marginBottom: '8px' }}>
                    Estimated Total Cost Range
                  </p>
                  <p
                    style={{
                      color: '#FFFFFF',
                      fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
                      fontWeight: 800,
                      margin: 0,
                    }}
                  >
                    {fmt(low)} &ndash; {fmt(high)}
                  </p>
                  <p style={{ color: '#C4773B', fontSize: '0.85rem', marginTop: '6px' }}>
                    {bedrooms}-bed HMO &middot; {conditionLabels[condition]} &middot;{' '}
                    {zone === 'inner' ? 'Inner' : 'Outer'} London
                  </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {breakdowns.map((b) => (
                    <div
                      key={b.label}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '12px 16px',
                        backgroundColor: '#F5F0E8',
                        borderRadius: '8px',
                        fontSize: '0.9rem',
                      }}
                    >
                      <span style={{ color: '#4A5568' }}>{b.label}</span>
                      <span style={{ color: '#1A2340', fontWeight: 700 }}>
                        {fmt(b.value)}
                      </span>
                    </div>
                  ))}
                </div>

                <p
                  style={{
                    color: '#6B7280',
                    fontSize: '0.78rem',
                    marginTop: '16px',
                    lineHeight: 1.5,
                  }}
                >
                  Indicative range only. Excludes structural works, planning fees, SDLT and holding
                  costs. Obtain a formal QS estimate before committing to acquisition.
                </p>

                <div
                  style={{
                    display: 'flex',
                    gap: '12px',
                    marginTop: '20px',
                    flexWrap: 'wrap',
                  }}
                >
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
                    Get Detailed Quote
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
