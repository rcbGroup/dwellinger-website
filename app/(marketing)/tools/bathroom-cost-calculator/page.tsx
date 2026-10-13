'use client'

import { useState } from 'react'
import Link from 'next/link'

const BRAND = { amber: '#C4773B' }

const SIZES = [
  { id: 'en-suite', label: 'En-Suite', sqm: 4, desc: 'Up to 4m²' },
  { id: 'standard', label: 'Standard Bathroom', sqm: 6, desc: '4–8m²' },
  { id: 'family', label: 'Family Bathroom', sqm: 9, desc: '8–12m²' },
  { id: 'master', label: 'Master Bathroom', sqm: 14, desc: '12m²+' },
]

const SPEC_LEVELS = [
  { id: 'budget', label: 'Budget', multiplier: 1.0, desc: 'Basic fixtures, standard tiles' },
  { id: 'mid', label: 'Mid-Range', multiplier: 1.6, desc: 'Quality fittings, porcelain tiles' },
  { id: 'premium', label: 'Premium', multiplier: 2.5, desc: 'Designer fixtures, natural stone' },
  { id: 'bespoke', label: 'Bespoke / Luxury', multiplier: 3.8, desc: 'Bespoke design, top materials' },
]

const EXTRAS = [
  { id: 'underfloor', label: 'Underfloor Heating', cost: 1200 },
  { id: 'wetroom', label: 'Wet Room Conversion', cost: 1800 },
  { id: 'freestanding', label: 'Freestanding Bath', cost: 900 },
  { id: 'rainshower', label: 'Rainfall Shower System', cost: 600 },
  { id: 'storage', label: 'Built-in Storage', cost: 1400 },
  { id: 'demist', label: 'Heated Mirror / Demist Pad', cost: 350 },
]

const BASE_COST_PER_SQM = 650

export default function BathroomCostCalculator() {
  const [size, setSize] = useState(SIZES[1])
  const [spec, setSpec] = useState(SPEC_LEVELS[1])
  const [extras, setExtras] = useState<string[]>([])
  const [london, setLondon] = useState(true)

  const toggleExtra = (id: string) =>
    setExtras((prev) => (prev.includes(id) ? prev.filter((e) => e !== id) : [...prev, id]))

  const base = size.sqm * BASE_COST_PER_SQM * spec.multiplier
  const extrasTotal = extras.reduce((sum, id) => sum + (EXTRAS.find((e) => e.id === id)?.cost ?? 0), 0)
  const londonMultiplier = london ? 1.2 : 1.0
  const low = Math.round((base + extrasTotal) * londonMultiplier * 0.85 / 100) * 100
  const high = Math.round((base + extrasTotal) * londonMultiplier * 1.25 / 100) * 100

  const fmt = (n: number) => `£${n.toLocaleString('en-GB')}`

  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', background: 'var(--color-bg)', minHeight: '100vh', color: 'var(--color-text)' }}>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg,#1a1a2e 0%,#0d1117 100%)', padding: '60px 24px 48px', textAlign: 'center' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <p style={{ color: BRAND.amber, fontWeight: 700, letterSpacing: '0.1em', fontSize: '0.75rem', marginBottom: 12 }}>FREE TOOL · INSTANT ESTIMATE</p>
          <h1 style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 800, color: '#fff', marginBottom: 16 }}>
            Bathroom Renovation Cost Calculator
          </h1>
          <p style={{ color: '#aaa', fontSize: '1.05rem', lineHeight: 1.7, maxWidth: 560, margin: '0 auto' }}>
            Get an instant ballpark for your bathroom refurbishment — from a basic freshen-up to a full luxury remodel. Updated for UK market conditions 2026.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section style={{ maxWidth: 900, margin: '0 auto', padding: '40px 24px 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(280px,340px)', gap: 32, alignItems: 'start' }}>
          {/* Left: inputs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>

            {/* Size */}
            <div>
              <h2 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: 12, color: 'var(--color-text)' }}>1. Bathroom Size</h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                {SIZES.map((s) => (
                  <button key={s.id} onClick={() => setSize(s)} style={{
                    padding: '14px 16px', borderRadius: 10, cursor: 'pointer', textAlign: 'left',
                    border: `2px solid ${size.id === s.id ? BRAND.amber : 'var(--color-border)'}`,
                    background: size.id === s.id ? 'rgba(196,119,59,0.08)' : 'var(--color-bg-raised)',
                    color: 'var(--color-text)',
                  }}>
                    <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>{s.label}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>{s.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Spec */}
            <div>
              <h2 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: 12 }}>2. Specification Level</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {SPEC_LEVELS.map((sp) => (
                  <button key={sp.id} onClick={() => setSpec(sp)} style={{
                    padding: '14px 16px', borderRadius: 10, cursor: 'pointer', textAlign: 'left',
                    border: `2px solid ${spec.id === sp.id ? BRAND.amber : 'var(--color-border)'}`,
                    background: spec.id === sp.id ? 'rgba(196,119,59,0.08)' : 'var(--color-bg-raised)',
                    color: 'var(--color-text)', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  }}>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>{sp.label}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>{sp.desc}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Extras */}
            <div>
              <h2 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: 12 }}>3. Add-Ons (optional)</h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                {EXTRAS.map((ex) => (
                  <button key={ex.id} onClick={() => toggleExtra(ex.id)} style={{
                    padding: '10px 14px', borderRadius: 8, cursor: 'pointer', textAlign: 'left',
                    border: `2px solid ${extras.includes(ex.id) ? BRAND.amber : 'var(--color-border)'}`,
                    background: extras.includes(ex.id) ? 'rgba(196,119,59,0.08)' : 'var(--color-bg-raised)',
                    color: 'var(--color-text)',
                  }}>
                    <div style={{ fontWeight: 600, fontSize: '0.8rem' }}>{ex.label}</div>
                    <div style={{ fontSize: '0.7rem', color: BRAND.amber }}>+{fmt(ex.cost)}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Location */}
            <div>
              <h2 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: 12 }}>4. Location</h2>
              <div style={{ display: 'flex', gap: 10 }}>
                {[true, false].map((isLondon) => (
                  <button key={String(isLondon)} onClick={() => setLondon(isLondon)} style={{
                    flex: 1, padding: '12px', borderRadius: 10, cursor: 'pointer',
                    border: `2px solid ${london === isLondon ? BRAND.amber : 'var(--color-border)'}`,
                    background: london === isLondon ? 'rgba(196,119,59,0.08)' : 'var(--color-bg-raised)',
                    color: 'var(--color-text)', fontWeight: 600, fontSize: '0.9rem',
                  }}>
                    {isLondon ? '📍 London / South East' : '🇬🇧 Rest of UK'}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: result card */}
          <div style={{ position: 'sticky', top: 24 }}>
            <div style={{
              background: 'linear-gradient(135deg,#1a1a2e 0%,#0d1117 100%)',
              border: `1px solid ${BRAND.amber}`,
              borderRadius: 16, padding: '32px 28px', color: '#fff',
            }}>
              <p style={{ color: BRAND.amber, fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.12em', marginBottom: 8 }}>ESTIMATED COST RANGE</p>
              <div style={{ fontSize: 'clamp(1.6rem,3.5vw,2.4rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: 4 }}>
                {fmt(low)} – {fmt(high)}
              </div>
              <p style={{ color: '#aaa', fontSize: '0.8rem', marginBottom: 24 }}>Inc. labour, fixtures & tiling. Excl. structural changes.</p>

              <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 20, marginBottom: 20, fontSize: '0.85rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                  <span style={{ color: '#aaa' }}>Size</span><span>{size.label} (~{size.sqm}m²)</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                  <span style={{ color: '#aaa' }}>Spec</span><span>{spec.label}</span>
                </div>
                {extras.length > 0 && (
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                    <span style={{ color: '#aaa' }}>Add-ons</span><span>+{fmt(extrasTotal)}</span>
                  </div>
                )}
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#aaa' }}>Location</span><span>{london ? 'London +20%' : 'Rest of UK'}</span>
                </div>
              </div>

              <Link href="/get-a-quote" style={{
                display: 'block', textAlign: 'center', padding: '14px', borderRadius: 10,
                background: BRAND.amber, color: '#fff', fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem',
              }}>
                Get a Detailed Quote →
              </Link>
              <p style={{ color: '#555', fontSize: '0.7rem', textAlign: 'center', marginTop: 12 }}>
                ⚠️ Ballpark estimate only. Exact costs vary by property.
              </p>
            </div>

            <div style={{ marginTop: 16, padding: '16px', borderRadius: 12, border: '1px solid var(--color-border)', background: 'var(--color-bg-raised)', fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
              <strong style={{ color: 'var(--color-text)' }}>💡 What's included:</strong> strip-out, waterproofing, tiling, bath/shower/WC/basin installation, plumbing first & second fix, electrical (lighting, extractor), decoration.
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ maxWidth: 800, margin: '0 auto', padding: '0 24px 80px' }}>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: 24 }}>Bathroom Renovation FAQs</h2>
        {[
          { q: 'How long does a bathroom renovation take?', a: 'A standard bathroom refurbishment typically takes 5–10 working days. Larger bathrooms or wet room conversions may take 2–3 weeks.' },
          { q: 'Do I need planning permission for a bathroom?', a: 'Most bathroom renovations don\'t require planning permission. However, if you\'re converting a bedroom into a bathroom or making structural changes, you may need Building Regulations approval.' },
          { q: 'Should I use a main contractor or individual trades?', a: 'A principal contractor coordinates all trades (plumber, tiler, electrician) and takes full responsibility for the project. This typically costs 10–15% more but saves significant time and reduces risk.' },
          { q: 'What\'s the biggest cost factor in bathroom renovation?', a: 'Labour accounts for 50–60% of the total cost. Tile choice and sanitary ware specification are the biggest material cost variables. Premium tiles can cost 3–5x more than budget options.' },
        ].map(({ q, a }) => (
          <div key={q} style={{ marginBottom: 20, paddingBottom: 20, borderBottom: '1px solid var(--color-border)' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: 8 }}>{q}</h3>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7, margin: 0 }}>{a}</p>
          </div>
        ))}
      </section>
    </main>
  )
}
