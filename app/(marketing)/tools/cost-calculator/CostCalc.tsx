'use client'

import { useState } from 'react'

const PROJECT_TYPES = [
  { id: 'rear-extension', label: 'Rear Extension', minPerM2: 1800, maxPerM2: 3500, defaultM2: 20, description: 'Single-storey rear extension' },
  { id: 'double-storey-extension', label: 'Double Storey Extension', minPerM2: 2200, maxPerM2: 4200, defaultM2: 30, description: 'Two-storey rear or side extension' },
  { id: 'loft-conversion', label: 'Loft Conversion', minPerM2: 1600, maxPerM2: 3200, defaultM2: 30, description: 'Dormer, velux or mansard conversion' },
  { id: 'full-refurb', label: 'Full Refurbishment', minPerM2: 600, maxPerM2: 1600, defaultM2: 80, description: 'Full house refurbishment, strip to shell' },
  { id: 'kitchen-extension', label: 'Kitchen Extension', minPerM2: 2000, maxPerM2: 4000, defaultM2: 15, description: 'Kitchen extension with refit' },
  { id: 'garage-conversion', label: 'Garage Conversion', minPerM2: 900, maxPerM2: 1600, defaultM2: 22, description: 'Integral or detached garage to living space' },
  { id: 'basement', label: 'Basement Conversion', minPerM2: 2800, maxPerM2: 5500, defaultM2: 40, description: 'Basement excavation and conversion' },
  { id: 'new-build', label: 'New Build House', minPerM2: 1900, maxPerM2: 3800, defaultM2: 120, description: 'New build dwelling, traditional construction' },
]

const SPEC_LEVELS = [
  { id: 'basic', label: 'Basic', multiplier: 0.85, desc: 'Standard finishes, functional spec' },
  { id: 'mid', label: 'Mid-range', multiplier: 1.0, desc: 'Good quality throughout, mid-range kitchen/bathroom' },
  { id: 'high', label: 'High Spec', multiplier: 1.35, desc: 'Premium finishes, bespoke joinery, high-end glazing' },
  { id: 'luxury', label: 'Luxury', multiplier: 1.75, desc: 'Architect-led, bespoke everything, no budget constraints' },
]

const LOCATIONS = [
  { id: 'london', label: 'London (Inner)', multiplier: 1.35 },
  { id: 'london-outer', label: 'London (Outer)', multiplier: 1.2 },
  { id: 'south-east', label: 'South East England', multiplier: 1.1 },
  { id: 'midlands', label: 'Midlands', multiplier: 0.9 },
  { id: 'north', label: 'North of England', multiplier: 0.85 },
  { id: 'scotland', label: 'Scotland / Wales', multiplier: 0.88 },
]

function fmt(n: number) {
  return new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP', maximumFractionDigits: 0 }).format(n)
}

export default function CostCalc() {
  const [type, setType] = useState(PROJECT_TYPES[0])
  const [m2, setM2] = useState(PROJECT_TYPES[0].defaultM2)
  const [spec, setSpec] = useState(SPEC_LEVELS[1])
  const [location, setLocation] = useState(LOCATIONS[0])

  const low = Math.round(type.minPerM2 * m2 * spec.multiplier * location.multiplier)
  const high = Math.round(type.maxPerM2 * m2 * spec.multiplier * location.multiplier)

  const cardStyle: React.CSSProperties = {
    border: '2px solid transparent',
    borderRadius: 8,
    padding: '14px 18px',
    cursor: 'pointer',
    transition: 'all 0.15s',
    fontSize: '0.9rem',
    fontWeight: 500,
    textAlign: 'left' as const,
    background: '#fff',
  }
  const selectedCard: React.CSSProperties = {
    ...cardStyle,
    border: '2px solid #C4773B',
    background: '#FDF8F4',
  }

  return (
    <section style={{ backgroundColor: '#FAFAF7', padding: '48px 24px' }}>
      <div style={{ maxWidth: 860, margin: '0 auto' }}>

        {/* Step 1: Project Type */}
        <div style={{ marginBottom: 40 }}>
          <h2 style={{ color: '#1A2340', fontWeight: 700, fontSize: '1.1rem', marginBottom: 16 }}>
            1. What type of project?
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 10 }}>
            {PROJECT_TYPES.map(t => (
              <button
                key={t.id}
                onClick={() => { setType(t); setM2(t.defaultM2) }}
                style={type.id === t.id ? selectedCard : cardStyle}
              >
                <div style={{ fontWeight: 700, color: '#1A2340', marginBottom: 4 }}>{t.label}</div>
                <div style={{ color: '#6B7280', fontSize: '0.8rem' }}>{t.description}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: Size */}
        <div style={{ marginBottom: 40 }}>
          <h2 style={{ color: '#1A2340', fontWeight: 700, fontSize: '1.1rem', marginBottom: 8 }}>
            2. Size (m²): <span style={{ color: '#C4773B' }}>{m2} m²</span>
          </h2>
          <p style={{ color: '#6B7280', fontSize: '0.85rem', marginBottom: 16 }}>Gross internal area of the new space</p>
          <input
            type="range"
            min={5} max={250} step={5}
            value={m2}
            onChange={e => setM2(Number(e.target.value))}
            style={{ width: '100%', maxWidth: 500, accentColor: '#C4773B' }}
          />
          <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: 500, color: '#9CA3AF', fontSize: '0.75rem', marginTop: 4 }}>
            <span>5 m²</span><span>250 m²</span>
          </div>
        </div>

        {/* Step 3: Spec */}
        <div style={{ marginBottom: 40 }}>
          <h2 style={{ color: '#1A2340', fontWeight: 700, fontSize: '1.1rem', marginBottom: 16 }}>
            3. Specification level
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: 10 }}>
            {SPEC_LEVELS.map(s => (
              <button
                key={s.id}
                onClick={() => setSpec(s)}
                style={spec.id === s.id ? selectedCard : cardStyle}
              >
                <div style={{ fontWeight: 700, color: '#1A2340', marginBottom: 4 }}>{s.label}</div>
                <div style={{ color: '#6B7280', fontSize: '0.8rem' }}>{s.desc}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Step 4: Location */}
        <div style={{ marginBottom: 40 }}>
          <h2 style={{ color: '#1A2340', fontWeight: 700, fontSize: '1.1rem', marginBottom: 16 }}>
            4. Location
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: 10 }}>
            {LOCATIONS.map(l => (
              <button
                key={l.id}
                onClick={() => setLocation(l)}
                style={location.id === l.id ? selectedCard : cardStyle}
              >
                <div style={{ fontWeight: 700, color: '#1A2340' }}>{l.label}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Result */}
        <div style={{ background: '#1A2340', borderRadius: 12, padding: '40px 32px', textAlign: 'center' }}>
          <p style={{ color: '#c8d0de', fontSize: '0.9rem', marginBottom: 8 }}>Estimated cost range for your project</p>
          <div style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)', fontWeight: 800, color: '#FFFFFF', marginBottom: 4 }}>
            {fmt(low)} – {fmt(high)}
          </div>
          <p style={{ color: '#C4773B', fontWeight: 600, fontSize: '0.9rem', marginBottom: 24 }}>
            {type.label} · {m2} m² · {spec.label} spec · {location.label}
          </p>
          <p style={{ color: '#9CA3AF', fontSize: '0.8rem', maxWidth: 540, margin: '0 auto 28px' }}>
            Indicative estimate only. Excludes VAT, professional fees, planning costs, and contingency.
            Get a formal estimate for accurate figures.
          </p>
          <a
            href="/services/estimating"
            style={{ display: 'inline-block', backgroundColor: '#C4773B', color: '#fff', padding: '14px 32px', borderRadius: 6, fontWeight: 700, textDecoration: 'none', fontSize: '1rem' }}
          >
            Get a Detailed Estimate from £95
          </a>
        </div>
      </div>
    </section>
  )
}
