'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'

type LoftType = 'velux' | 'dormer' | 'lshaped' | 'mansard' | 'hiptogable'
type Location = 'inner' | 'outer' | 'southeast'

const BASE_COSTS: Record<LoftType, [number, number]> = {
  velux:      [30000, 45000],
  dormer:     [45000, 65000],
  lshaped:    [55000, 80000],
  mansard:    [75000, 100000],
  hiptogable: [40000, 60000],
}

const LOFT_LABELS: Record<LoftType, string> = {
  velux:      'Velux (roof light)',
  dormer:     'Dormer',
  lshaped:    'L-shaped dormer',
  mansard:    'Mansard',
  hiptogable: 'Hip-to-gable',
}

const ENSUITE_ADD: [number, number] = [12000, 18000]

const LOCATION_MODIFIER: Record<Location, number> = {
  inner:     1.20,
  outer:     1.10,
  southeast: 1.00,
}

function formatCurrency(value: number): string {
  if (value >= 1000000) return `£${(value / 1000000).toFixed(2)}m`
  if (value >= 1000) return `£${Math.round(value / 1000)}k`
  return `£${value.toLocaleString()}`
}

export default function LoftCalc() {
  const [loftType, setLoftType] = useState<LoftType>('dormer')
  const [ensuite, setEnsuite] = useState(false)
  const [location, setLocation] = useState<Location>('outer')

  const { low, high } = useMemo(() => {
    const [baseL, baseH] = BASE_COSTS[loftType]
    const mod = LOCATION_MODIFIER[location]
    const ensuiteL = ensuite ? ENSUITE_ADD[0] : 0
    const ensuiteH = ensuite ? ENSUITE_ADD[1] : 0
    return {
      low:  Math.round((baseL + ensuiteL) * mod),
      high: Math.round((baseH + ensuiteH) * mod),
    }
  }, [loftType, ensuite, location])

  const selectStyle = {
    width: '100%',
    padding: '10px 14px',
    borderRadius: '6px',
    border: '1px solid #EDE8DC',
    fontSize: '1rem',
    color: '#1A2340',
    backgroundColor: '#FFFFFF',
    appearance: 'none' as const,
    cursor: 'pointer',
  }

  const labelStyle = {
    display: 'block',
    color: '#1A2340',
    fontWeight: 600,
    fontSize: '0.9rem',
    marginBottom: '8px',
  }

  const loftDescriptions: Record<LoftType, string> = {
    velux: 'Minimal structural change. Adds light and headroom where existing roof pitch allows. Most affordable option.',
    dormer: 'Box or flat-roofed dormer extension on rear slope. Adds significant usable floor space.',
    lshaped: 'Combines rear and side dormers to maximise floor area on suitable terraced properties.',
    mansard: 'Near-vertical rear wall, maximum floor area. Usually requires planning permission.',
    hiptogable: 'Converts hipped roof end to gable, extending floor area on end-of-terrace or semi-detached homes.',
  }

  return (
    <section style={{ backgroundColor: '#F5F0E8', minHeight: '60vh', padding: '64px 24px' }}>
      <div style={{ maxWidth: '780px', margin: '0 auto' }}>
        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '12px',
            padding: '48px',
            border: '1px solid #EDE8DC',
            boxShadow: '0 4px 24px rgba(26,35,64,0.08)',
          }}
        >
          <h2 style={{ color: '#1A2340', fontWeight: 700, fontSize: '1.5rem', marginBottom: '8px' }}>
            Estimate Your Loft Conversion Cost
          </h2>
          <p style={{ color: '#4A5568', fontSize: '0.95rem', marginBottom: '36px', lineHeight: 1.6 }}>
            Select your loft type, location and options to get an instant indicative range.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px', marginBottom: '32px' }}>
            {/* Type */}
            <div style={{ gridColumn: '1 / -1' }}>
              <label style={labelStyle}>Loft conversion type</label>
              <select value={loftType} onChange={(e) => setLoftType(e.target.value as LoftType)} style={selectStyle}>
                <option value="velux">Velux (roof light conversion)</option>
                <option value="dormer">Dormer</option>
                <option value="lshaped">L-shaped dormer</option>
                <option value="mansard">Mansard</option>
                <option value="hiptogable">Hip-to-gable</option>
              </select>
              <p style={{ color: '#4A5568', fontSize: '0.83rem', marginTop: '8px', lineHeight: 1.5 }}>
                {loftDescriptions[loftType]}
              </p>
            </div>

            {/* Location */}
            <div>
              <label style={labelStyle}>Location</label>
              <select value={location} onChange={(e) => setLocation(e.target.value as Location)} style={selectStyle}>
                <option value="inner">Inner London</option>
                <option value="outer">Outer London</option>
                <option value="southeast">South East England</option>
              </select>
            </div>

            {/* En-suite */}
            <div>
              <label style={labelStyle}>Include en-suite bathroom?</label>
              <div style={{ display: 'flex', gap: '12px' }}>
                {[
                  { value: false, label: 'No en-suite' },
                  { value: true, label: 'Yes, add en-suite (+£12k–£18k)' },
                ].map((opt) => (
                  <button
                    key={String(opt.value)}
                    onClick={() => setEnsuite(opt.value)}
                    style={{
                      flex: 1,
                      padding: '10px 14px',
                      borderRadius: '6px',
                      border: ensuite === opt.value ? '2px solid #C4773B' : '1px solid #EDE8DC',
                      backgroundColor: ensuite === opt.value ? '#FDF6EE' : '#FFFFFF',
                      color: '#1A2340',
                      fontWeight: ensuite === opt.value ? 700 : 400,
                      fontSize: '0.85rem',
                      cursor: 'pointer',
                      lineHeight: 1.3,
                      textAlign: 'center',
                    }}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Result */}
          <div
            style={{
              backgroundColor: '#1A2340',
              borderRadius: '10px',
              padding: '32px',
              textAlign: 'center',
              marginBottom: '28px',
            }}
          >
            <p style={{ color: '#c8d0de', fontSize: '0.9rem', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>
              Indicative Cost Range
            </p>
            <p style={{ color: '#FFFFFF', fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 2.75rem)', margin: '0 0 8px' }}>
              {formatCurrency(low)} – {formatCurrency(high)}
            </p>
            <p style={{ color: '#8899b4', fontSize: '0.82rem', margin: 0 }}>
              {LOFT_LABELS[loftType]} · {location === 'inner' ? 'Inner London' : location === 'outer' ? 'Outer London' : 'South East'}{ensuite ? ' · with en-suite' : ''}
            </p>
          </div>

          <div
            style={{
              backgroundColor: '#F5F0E8',
              borderRadius: '8px',
              padding: '20px 24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '16px',
            }}
          >
            <div>
              <p style={{ color: '#1A2340', fontWeight: 700, fontSize: '0.95rem', margin: '0 0 4px' }}>
                Get a professional estimate from £95
              </p>
              <p style={{ color: '#4A5568', fontSize: '0.87rem', margin: 0 }}>QS-reviewed, based on your actual project details.</p>
            </div>
            <Link
              href="/services/estimating"
              style={{
                display: 'inline-block',
                backgroundColor: '#C4773B',
                color: '#FFFFFF',
                padding: '11px 28px',
                borderRadius: '6px',
                fontWeight: 600,
                fontSize: '0.92rem',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              Get a Formal Estimate
            </Link>
          </div>

          <p style={{ color: '#4A5568', fontSize: '0.8rem', marginTop: '20px', lineHeight: 1.5 }}>
            * These are indicative ranges only. Actual costs depend on existing roof structure, building regulations requirements, party wall matters, and specification. Not a formal quotation.
          </p>
        </div>
      </div>
    </section>
  )
}
