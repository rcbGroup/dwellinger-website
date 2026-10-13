'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'

type LoftType = 'velux' | 'dormer' | 'lshaped' | 'mansard' | 'hiptogable'
type Location = 'inner' | 'outer' | 'southeast'
type Spec = 'basic' | 'standard' | 'high'

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

const SPEC_MULTIPLIER: Record<Spec, number> = {
  basic:    0.88,
  standard: 1.00,
  high:     1.28,
}

const SPEC_LABELS: Record<Spec, string> = {
  basic:    'Basic',
  standard: 'Standard',
  high:     'High Spec',
}

const SPEC_DESCRIPTIONS: Record<Spec, string> = {
  basic:    'Functional finish — standard windows, basic bathroom, painted walls, carpet',
  standard: 'Good quality — mid-range materials, decent bathroom suite, solid finish',
  high:     'Premium — designer bathroom, hardwood or luxury vinyl floors, bespoke joinery',
}

const BREAKDOWN: Record<Spec, { materials: number; labour: number; finishing: number; overhead: number }> = {
  basic:    { materials: 28, labour: 45, finishing: 14, overhead: 13 },
  standard: { materials: 30, labour: 44, finishing: 12, overhead: 14 },
  high:     { materials: 34, labour: 40, finishing: 14, overhead: 12 },
}

const loftDescriptions: Record<LoftType, string> = {
  velux:      'Minimal structural change. Adds light and headroom where existing roof pitch allows. Most affordable option.',
  dormer:     'Box or flat-roofed dormer extension on rear slope. Adds significant usable floor space.',
  lshaped:    'Combines rear and side dormers to maximise floor area on suitable terraced properties.',
  mansard:    'Near-vertical rear wall, maximum floor area. Usually requires planning permission.',
  hiptogable: 'Converts hipped roof end to gable, extending floor area on end-of-terrace or semi-detached homes.',
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
  const [spec, setSpec] = useState<Spec>('standard')

  const { low, high, midpoint, allSpecs } = useMemo(() => {
    const [baseL, baseH] = BASE_COSTS[loftType]
    const locMod = LOCATION_MODIFIER[location]
    const ensuiteL = ensuite ? ENSUITE_ADD[0] : 0
    const ensuiteH = ensuite ? ENSUITE_ADD[1] : 0
    const specMod = SPEC_MULTIPLIER[spec]
    const rawL = (baseL + ensuiteL) * locMod * specMod
    const rawH = (baseH + ensuiteH) * locMod * specMod

    const allSpecs = (['basic', 'standard', 'high'] as Spec[]).map((s) => {
      const sm = SPEC_MULTIPLIER[s]
      return {
        spec: s,
        low:  Math.round((baseL + ensuiteL) * locMod * sm),
        high: Math.round((baseH + ensuiteH) * locMod * sm),
      }
    })

    return {
      low: Math.round(rawL),
      high: Math.round(rawH),
      midpoint: Math.round((rawL + rawH) / 2),
      allSpecs,
    }
  }, [loftType, ensuite, location, spec])

  const bd = BREAKDOWN[spec]

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

  return (
    <section style={{ backgroundColor: '#F5F0E8', minHeight: '60vh', padding: '64px 24px' }}>
      <div style={{ maxWidth: '860px', margin: '0 auto' }}>
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
            Adjust the inputs below for an instant indicative range based on London &amp; South East project data.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px', marginBottom: '32px' }}>
            {/* Loft type */}
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
                  { value: true, label: 'Yes (+£12k–£18k)' },
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

            {/* Spec slider */}
            <div style={{ gridColumn: '1 / -1' }}>
              <label style={labelStyle}>Specification level</label>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                {(['basic', 'standard', 'high'] as Spec[]).map((s) => (
                  <button
                    key={s}
                    onClick={() => setSpec(s)}
                    style={{
                      flex: 1,
                      minWidth: '120px',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      border: spec === s ? '2px solid #C4773B' : '1px solid #EDE8DC',
                      backgroundColor: spec === s ? '#FDF6EE' : '#FFFFFF',
                      color: '#1A2340',
                      fontWeight: spec === s ? 700 : 400,
                      fontSize: '0.9rem',
                      cursor: 'pointer',
                      textAlign: 'center',
                    }}
                  >
                    {SPEC_LABELS[s]}
                  </button>
                ))}
              </div>
              <p style={{ color: '#4A5568', fontSize: '0.83rem', marginTop: '10px', lineHeight: 1.5 }}>
                {SPEC_DESCRIPTIONS[spec]}
              </p>
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
              INDICATIVE COST RANGE &mdash; {SPEC_LABELS[spec].toUpperCase()}
            </p>
            <p style={{ color: '#FFFFFF', fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 2.75rem)', margin: '0 0 8px' }}>
              {formatCurrency(low)} &ndash; {formatCurrency(high)}
            </p>
            <p style={{ color: '#8899b4', fontSize: '0.82rem', margin: 0 }}>
              {LOFT_LABELS[loftType]} &middot; {location === 'inner' ? 'Inner London' : location === 'outer' ? 'Outer London' : 'South East'}{ensuite ? ' · with en-suite' : ''}
            </p>
          </div>

          {/* Benchmark comparison */}
          <div style={{ marginBottom: '28px' }}>
            <h3 style={{ color: '#1A2340', fontWeight: 700, fontSize: '1rem', marginBottom: '16px' }}>
              Cost Benchmark Comparison
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
              {allSpecs.map(({ spec: s, low: lo, high: hi }) => (
                <div
                  key={s}
                  style={{
                    borderRadius: '8px',
                    padding: '16px',
                    textAlign: 'center',
                    backgroundColor: s === spec ? '#1A2340' : '#F5F0E8',
                    border: s === spec ? '2px solid #1A2340' : '1px solid #EDE8DC',
                  }}
                >
                  <p style={{ color: s === spec ? '#c8d0de' : '#4A5568', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', margin: '0 0 6px' }}>
                    {SPEC_LABELS[s]}{s === spec ? ' ✓' : ''}
                  </p>
                  <p style={{ color: s === spec ? '#FFFFFF' : '#1A2340', fontWeight: 700, fontSize: '0.95rem', margin: 0 }}>
                    {formatCurrency(lo)} &ndash; {formatCurrency(hi)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Cost breakdown */}
          <div style={{ marginBottom: '28px' }}>
            <h3 style={{ color: '#1A2340', fontWeight: 700, fontSize: '1rem', marginBottom: '16px' }}>
              Estimated Cost Breakdown &mdash; {formatCurrency(midpoint)} midpoint
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { label: 'Materials',   pct: bd.materials,  amount: Math.round(midpoint * bd.materials / 100) },
                { label: 'Labour',      pct: bd.labour,     amount: Math.round(midpoint * bd.labour / 100) },
                { label: 'Finishing',   pct: bd.finishing,  amount: Math.round(midpoint * bd.finishing / 100) },
                { label: 'OH & Profit', pct: bd.overhead,   amount: Math.round(midpoint * bd.overhead / 100) },
              ].map(({ label, pct, amount }) => (
                <div key={label}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <span style={{ color: '#1A2340', fontSize: '0.88rem', fontWeight: 600 }}>{label}</span>
                    <span style={{ color: '#4A5568', fontSize: '0.88rem' }}>{formatCurrency(amount)} ({pct}%)</span>
                  </div>
                  <div style={{ backgroundColor: '#EDE8DC', borderRadius: '4px', height: '8px' }}>
                    <div style={{ backgroundColor: '#C4773B', borderRadius: '4px', height: '8px', width: `${pct}%`, transition: 'width 0.3s ease' }} />
                  </div>
                </div>
              ))}
            </div>
            <p style={{ color: '#4A5568', fontSize: '0.78rem', marginTop: '10px', lineHeight: 1.5 }}>
              * Indicative split based on {SPEC_LABELS[spec].toLowerCase()} specification. Actual proportions vary by project.
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
              marginBottom: '20px',
            }}
          >
            <div>
              <p style={{ color: '#1A2340', fontWeight: 700, fontSize: '0.95rem', margin: '0 0 4px' }}>
                Want a QS-reviewed estimate?
              </p>
              <p style={{ color: '#4A5568', fontSize: '0.87rem', margin: 0 }}>From &pound;95 &mdash; based on your actual drawings and spec.</p>
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

          <p style={{ color: '#4A5568', fontSize: '0.8rem', marginTop: '4px', lineHeight: 1.5 }}>
            * Indicative ranges only. Actual costs depend on existing roof structure, building regulations requirements, party wall matters, structural conditions, and specification. Not a formal quotation.
          </p>
        </div>
      </div>
    </section>
  )
}
