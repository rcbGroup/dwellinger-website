'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'

type Storey = 'single' | 'double'
type Location = 'inner' | 'outer' | 'southeast'
type Spec = 'basic' | 'standard' | 'high'

// Base rates per m² (low, mid, high) before spec multiplier
const BASE_RATES: Record<Location, Record<Storey, [number, number]>> = {
  inner: {
    single: [2200, 2800],
    double: [2800, 3400],
  },
  outer: {
    single: [1870, 2380],
    double: [2380, 2890],
  },
  southeast: {
    single: [1760, 2240],
    double: [2240, 2720],
  },
}

const SPEC_MULTIPLIER: Record<Spec, number> = {
  basic: 0.88,
  standard: 1.0,
  high: 1.28,
}

// Resource breakdown percentages by spec (Materials / Labour / Finishing / OH&P)
const RESOURCE_SPLIT: Record<Spec, [number, number, number, number]> = {
  basic:    [0.34, 0.46, 0.07, 0.13],
  standard: [0.30, 0.44, 0.12, 0.14],
  high:     [0.26, 0.40, 0.21, 0.13],
}

const SPEC_LABELS: Record<Spec, string> = {
  basic: 'Basic',
  standard: 'Standard',
  high: 'High Spec',
}

const SPEC_DESC: Record<Spec, string> = {
  basic: 'Practical finish — functional fixtures, value materials, no-frills spec',
  standard: 'Good quality — mid-range materials, decent kitchen/bathroom, solid finish',
  high: 'Premium finish — bespoke joinery, high-end fixtures, glazing upgrades',
}

const LOCATION_LABELS: Record<Location, string> = {
  inner: 'Inner London',
  outer: 'Outer London',
  southeast: 'South East England',
}

function formatCurrency(value: number): string {
  if (value >= 1_000_000) return `£${(value / 1_000_000).toFixed(2)}m`
  if (value >= 1_000) return `£${Math.round(value / 1_000)}k`
  return `£${value.toLocaleString()}`
}

function formatFull(value: number): string {
  return `£${Math.round(value).toLocaleString('en-GB')}`
}

export default function ExtensionCalc() {
  const [size, setSize] = useState(30)
  const [storey, setStorey] = useState<Storey>('single')
  const [location, setLocation] = useState<Location>('outer')
  const [spec, setSpec] = useState<Spec>('standard')

  const { low, mid, high, costPerSqm, resources, benchmarks } = useMemo(() => {
    const [baseL, baseH] = BASE_RATES[location][storey]
    const baseMid = (baseL + baseH) / 2
    const mult = SPEC_MULTIPLIER[spec]

    const low = Math.round(baseL * mult * size)
    const high = Math.round(baseH * mult * size)
    const mid = Math.round(baseMid * mult * size)
    const costPerSqm = Math.round(baseMid * mult)

    const [mPct, lPct, fPct, oPct] = RESOURCE_SPLIT[spec]
    const resources = {
      materials: Math.round(mid * mPct),
      labour: Math.round(mid * lPct),
      finishing: Math.round(mid * fPct),
      overhead: Math.round(mid * oPct),
    }

    // Benchmarks at all 3 spec levels for comparison
    const benchmarks = {
      basic: {
        low: Math.round(baseL * SPEC_MULTIPLIER.basic * size),
        high: Math.round(baseH * SPEC_MULTIPLIER.basic * size),
      },
      standard: {
        low: Math.round(baseL * SPEC_MULTIPLIER.standard * size),
        high: Math.round(baseH * SPEC_MULTIPLIER.standard * size),
      },
      high: {
        low: Math.round(baseL * SPEC_MULTIPLIER.high * size),
        high: Math.round(baseH * SPEC_MULTIPLIER.high * size),
      },
    }

    return { low, mid, high, costPerSqm, resources, benchmarks }
  }, [size, storey, location, spec])

  const selectStyle: React.CSSProperties = {
    width: '100%',
    padding: '10px 14px',
    borderRadius: '6px',
    border: '1px solid #EDE8DC',
    fontSize: '1rem',
    color: '#1A2340',
    backgroundColor: '#FFFFFF',
    cursor: 'pointer',
  }

  const labelStyle: React.CSSProperties = {
    display: 'block',
    color: '#1A2340',
    fontWeight: 600,
    fontSize: '0.9rem',
    marginBottom: '8px',
  }

  const resourceItems = [
    { label: 'Materials', value: resources.materials, color: '#1A2340' },
    { label: 'Labour', value: resources.labour, color: '#C4773B' },
    { label: 'Finishing', value: resources.finishing, color: '#4A5568' },
    { label: 'OH & Profit', value: resources.overhead, color: '#6B7B9F' },
  ]

  const totalCheck = resources.materials + resources.labour + resources.finishing + resources.overhead

  return (
    <section style={{ backgroundColor: '#F5F0E8', padding: '64px 24px' }}>
      <div style={{ maxWidth: '820px', margin: '0 auto' }}>
        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '12px',
            padding: 'clamp(24px, 5vw, 48px)',
            border: '1px solid #EDE8DC',
            boxShadow: '0 4px 24px rgba(26,35,64,0.08)',
          }}
        >
          <h2 style={{ color: '#1A2340', fontWeight: 700, fontSize: '1.5rem', marginBottom: '6px' }}>
            Estimate Your Extension Cost
          </h2>
          <p style={{ color: '#4A5568', fontSize: '0.95rem', marginBottom: '36px', lineHeight: 1.6, marginTop: 0 }}>
            Adjust the inputs below for an instant indicative range based on London &amp; South East project data.
          </p>

          {/* ─── INPUTS ─── */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px', marginBottom: '36px' }}>
            {/* Size */}
            <div style={{ gridColumn: '1 / -1' }}>
              <label style={labelStyle}>
                Extension size: <span style={{ color: '#C4773B', fontWeight: 700 }}>{size} m²</span>
              </label>
              <input
                type="range"
                min={10}
                max={80}
                value={size}
                onChange={(e) => setSize(Number(e.target.value))}
                style={{ width: '100%', accentColor: '#C4773B', cursor: 'pointer' }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#4A5568', fontSize: '0.8rem', marginTop: '4px' }}>
                <span>10 m² (small)</span>
                <span>80 m² (large)</span>
              </div>
            </div>

            {/* Storey */}
            <div>
              <label style={labelStyle}>Extension type</label>
              <select value={storey} onChange={(e) => setStorey(e.target.value as Storey)} style={selectStyle}>
                <option value="single">Single storey</option>
                <option value="double">Double storey</option>
              </select>
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
          </div>

          {/* ─── SPEC SLIDER ─── */}
          <div style={{ marginBottom: '32px' }}>
            <label style={{ ...labelStyle, marginBottom: '12px' }}>Specification level</label>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                border: '2px solid #EDE8DC',
                borderRadius: '8px',
                overflow: 'hidden',
              }}
            >
              {(['basic', 'standard', 'high'] as Spec[]).map((s) => (
                <button
                  key={s}
                  onClick={() => setSpec(s)}
                  style={{
                    padding: '14px 8px',
                    border: 'none',
                    backgroundColor: spec === s ? '#1A2340' : '#FFFFFF',
                    color: spec === s ? '#FFFFFF' : '#4A5568',
                    fontWeight: spec === s ? 700 : 500,
                    fontSize: '0.9rem',
                    cursor: 'pointer',
                    transition: 'all 0.15s',
                    borderRight: s !== 'high' ? '1px solid #EDE8DC' : 'none',
                  }}
                >
                  {SPEC_LABELS[s]}
                </button>
              ))}
            </div>
            <p style={{ color: '#4A5568', fontSize: '0.83rem', marginTop: '8px', marginBottom: 0, lineHeight: 1.5 }}>
              {SPEC_DESC[spec]}
            </p>
          </div>

          {/* ─── RESULT ─── */}
          <div
            style={{
              backgroundColor: '#1A2340',
              borderRadius: '10px',
              padding: '28px 32px',
              textAlign: 'center',
              marginBottom: '24px',
            }}
          >
            <p style={{ color: '#c8d0de', fontSize: '0.85rem', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600, margin: '0 0 8px' }}>
              Indicative Cost Range — {SPEC_LABELS[spec]}
            </p>
            <p style={{ color: '#FFFFFF', fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 2.75rem)', margin: '0 0 8px' }}>
              {formatCurrency(low)} – {formatCurrency(high)}
            </p>
            <p style={{ color: '#8899b4', fontSize: '0.82rem', margin: 0 }}>
              {size}m² · {storey === 'single' ? 'Single storey' : 'Double storey'} · {LOCATION_LABELS[location]} · approx {formatCurrency(costPerSqm)}/m²
            </p>
          </div>

          {/* ─── BENCHMARK TABLE ─── */}
          <div style={{ marginBottom: '28px' }}>
            <p style={{ color: '#1A2340', fontWeight: 700, fontSize: '0.9rem', marginBottom: '12px', marginTop: 0 }}>
              Cost Benchmark Comparison
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px' }}>
              {(['basic', 'standard', 'high'] as Spec[]).map((s) => (
                <div
                  key={s}
                  style={{
                    padding: '14px 12px',
                    borderRadius: '8px',
                    border: `2px solid ${s === spec ? '#C4773B' : '#EDE8DC'}`,
                    backgroundColor: s === spec ? '#FFF8F0' : '#FAFAF9',
                    textAlign: 'center',
                  }}
                >
                  <p style={{ color: s === spec ? '#C4773B' : '#4A5568', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.06em', margin: '0 0 6px' }}>
                    {SPEC_LABELS[s]}{s === spec ? ' ✓' : ''}
                  </p>
                  <p style={{ color: '#1A2340', fontWeight: 700, fontSize: '0.95rem', margin: 0 }}>
                    {formatCurrency(benchmarks[s].low)} – {formatCurrency(benchmarks[s].high)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ─── RESOURCE BREAKDOWN ─── */}
          <div
            style={{
              backgroundColor: '#F5F0E8',
              borderRadius: '8px',
              padding: '20px 24px',
              marginBottom: '24px',
            }}
          >
            <p style={{ color: '#1A2340', fontWeight: 700, fontSize: '0.9rem', marginBottom: '14px', marginTop: 0 }}>
              Estimated Cost Breakdown — {formatFull(mid)} midpoint
            </p>
            <div style={{ display: 'grid', gap: '10px' }}>
              {resourceItems.map((item) => {
                const pct = Math.round((item.value / totalCheck) * 100)
                return (
                  <div key={item.label}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                      <span style={{ color: '#1A2340', fontSize: '0.85rem', fontWeight: 600 }}>{item.label}</span>
                      <span style={{ color: '#1A2340', fontSize: '0.85rem', fontWeight: 700 }}>
                        {formatFull(item.value)} <span style={{ color: '#4A5568', fontWeight: 400 }}>({pct}%)</span>
                      </span>
                    </div>
                    <div style={{ height: '6px', backgroundColor: '#EDE8DC', borderRadius: '3px', overflow: 'hidden' }}>
                      <div
                        style={{
                          height: '100%',
                          width: `${pct}%`,
                          backgroundColor: item.color,
                          borderRadius: '3px',
                          transition: 'width 0.3s ease',
                        }}
                      />
                    </div>
                  </div>
                )
              })}
            </div>
            <p style={{ color: '#4A5568', fontSize: '0.75rem', marginTop: '12px', marginBottom: 0 }}>
              * Indicative split based on {SPEC_LABELS[spec].toLowerCase()} specification. Actual proportions vary by project.
            </p>
          </div>

          {/* ─── CTA STRIP ─── */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '8px',
              padding: '20px 24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '16px',
              border: '1px solid #EDE8DC',
            }}
          >
            <div>
              <p style={{ color: '#1A2340', fontWeight: 700, fontSize: '0.95rem', margin: '0 0 4px' }}>
                Want a QS-reviewed estimate?
              </p>
              <p style={{ color: '#4A5568', fontSize: '0.87rem', margin: 0 }}>From £95 — based on your actual drawings and spec.</p>
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

          <p style={{ color: '#4A5568', fontSize: '0.78rem', marginTop: '20px', lineHeight: 1.5, marginBottom: 0 }}>
            * Indicative ranges only. Actual costs depend on site conditions, structural requirements, specification, and current material prices. Not a formal quotation.
          </p>
        </div>
      </div>
    </section>
  )
}
