'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'

type Storey = 'single' | 'double'
type Location = 'inner' | 'outer' | 'southeast'
type Finish = 'standard' | 'midrange' | 'highend'

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

const FINISH_MULTIPLIER: Record<Finish, number> = {
  standard: 1.0,
  midrange: 1.15,
  highend: 1.35,
}

function formatCurrency(value: number): string {
  if (value >= 1000000) return `£${(value / 1000000).toFixed(2)}m`
  if (value >= 1000) return `£${Math.round(value / 1000)}k`
  return `£${value.toLocaleString()}`
}

export default function ExtensionCalc() {
  const [size, setSize] = useState(30)
  const [storey, setStorey] = useState<Storey>('single')
  const [location, setLocation] = useState<Location>('outer')
  const [finish, setFinish] = useState<Finish>('midrange')

  const { low, high } = useMemo(() => {
    const [baseL, baseH] = BASE_RATES[location][storey]
    const mult = FINISH_MULTIPLIER[finish]
    return {
      low: Math.round(baseL * mult * size),
      high: Math.round(baseH * mult * size),
    }
  }, [size, storey, location, finish])

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
      <div style={{ maxWidth: '760px', margin: '0 auto' }}>
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
            Estimate Your Extension Cost
          </h2>
          <p style={{ color: '#4A5568', fontSize: '0.95rem', marginBottom: '36px', lineHeight: 1.6 }}>
            Adjust the inputs below for an instant indicative range based on London project data.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px', marginBottom: '32px' }}>
            {/* Size */}
            <div style={{ gridColumn: '1 / -1' }}>
              <label style={labelStyle}>
                Extension size: <span style={{ color: '#C4773B' }}>{size} m²</span>
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
                <span>10 m²</span>
                <span>80 m²</span>
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

            {/* Finish */}
            <div>
              <label style={labelStyle}>Finish level</label>
              <select value={finish} onChange={(e) => setFinish(e.target.value as Finish)} style={selectStyle}>
                <option value="standard">Standard</option>
                <option value="midrange">Mid-range</option>
                <option value="highend">High-end</option>
              </select>
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
              Based on {size}m² {storey === 'single' ? 'single' : 'double'}-storey · {location === 'inner' ? 'Inner London' : location === 'outer' ? 'Outer London' : 'South East'} · {finish === 'standard' ? 'Standard' : finish === 'midrange' ? 'Mid-range' : 'High-end'} finish
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

          <p style={{ color: '#4A5568', fontSize: '0.8rem', marginTop: '20px', lineHeight: 1.5 }}>
            * These are indicative ranges only. Actual costs depend on site conditions, structural requirements, specification, and current material prices. Not a formal quotation.
          </p>
        </div>
      </div>
    </section>
  )
}
