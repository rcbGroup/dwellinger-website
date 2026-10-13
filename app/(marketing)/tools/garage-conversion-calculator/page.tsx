'use client'

import { useState } from 'react'
import Link from 'next/link'

const BRAND = { amber: '#C4773B' }

const GARAGE_TYPES = [
  { id: 'single-integral', label: 'Single Integral', sqm: 15, desc: 'Built into the house' },
  { id: 'single-detached', label: 'Single Detached', sqm: 15, desc: 'Separate from house' },
  { id: 'double-integral', label: 'Double Integral', sqm: 28, desc: 'Large integral garage' },
  { id: 'double-detached', label: 'Double Detached', sqm: 28, desc: 'Large separate structure' },
]

const CONVERSION_TYPES = [
  { id: 'habitable', label: 'Habitable Room', multiplier: 1.0, desc: 'Bedroom, office, playroom' },
  { id: 'living', label: 'Living Space / Lounge', multiplier: 1.1, desc: 'Open to main house' },
  { id: 'kitchen-diner', label: 'Kitchen-Diner', multiplier: 1.5, desc: 'Includes kitchen fit-out' },
  { id: 'annex', label: 'Self-Contained Annex', multiplier: 1.8, desc: 'Full kitchen, bathroom, living' },
]

const SPEC_LEVELS = [
  { id: 'budget', label: 'Budget', multiplier: 1.0, desc: 'Basic insulation & finishes' },
  { id: 'mid', label: 'Mid-Range', multiplier: 1.5, desc: 'Quality finishes, good insulation' },
  { id: 'premium', label: 'Premium', multiplier: 2.2, desc: 'High spec, architect-designed' },
]

const EXTRAS = [
  { id: 'bathroom', label: 'En-Suite / WC Addition', cost: 5500 },
  { id: 'bi-fold', label: 'Bi-fold / Sliding Doors', cost: 4000 },
  { id: 'underfloor', label: 'Underfloor Heating', cost: 2200 },
  { id: 'structural-beam', label: 'Structural Steel / Beam', cost: 3500 },
  { id: 'planning', label: 'Planning Application Support', cost: 1500 },
  { id: 'annex-kitchen', label: 'Kitchenette (Annex)', cost: 4500 },
]

const BASE_COST_PER_SQM = 1200

export default function GarageConversionCalculator() {
  const [garageType, setGarageType] = useState(GARAGE_TYPES[0])
  const [conversionType, setConversionType] = useState(CONVERSION_TYPES[0])
  const [spec, setSpec] = useState(SPEC_LEVELS[1])
  const [extras, setExtras] = useState<string[]>([])
  const [london, setLondon] = useState(true)

  const toggleExtra = (id: string) =>
    setExtras((prev) => (prev.includes(id) ? prev.filter((e) => e !== id) : [...prev, id]))

  const base = garageType.sqm * BASE_COST_PER_SQM * conversionType.multiplier * spec.multiplier
  const extrasTotal = extras.reduce((sum, id) => sum + (EXTRAS.find((e) => e.id === id)?.cost ?? 0), 0)
  const londonMultiplier = london ? 1.2 : 1.0
  const low = Math.round((base + extrasTotal) * londonMultiplier * 0.85 / 100) * 100
  const high = Math.round((base + extrasTotal) * londonMultiplier * 1.25 / 100) * 100

  const fmt = (n: number) => `£${n.toLocaleString('en-GB')}`

  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', background: 'var(--color-bg)', minHeight: '100vh', color: 'var(--color-text)' }}>
      <section style={{ background: 'linear-gradient(135deg,#1a1a2e 0%,#0d1117 100%)', padding: '60px 24px 48px', textAlign: 'center' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <p style={{ color: BRAND.amber, fontWeight: 700, letterSpacing: '0.1em', fontSize: '0.75rem', marginBottom: 12 }}>FREE TOOL · INSTANT ESTIMATE</p>
          <h1 style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 800, color: '#fff', marginBottom: 16 }}>
            Garage Conversion Cost Calculator
          </h1>
          <p style={{ color: '#aaa', fontSize: '1.05rem', lineHeight: 1.7, maxWidth: 560, margin: '0 auto' }}>
            Converting your garage could add £25,000–£45,000 to your property value. Calculate your conversion costs for 2026 UK market rates.
          </p>
        </div>
      </section>

      <section style={{ maxWidth: 900, margin: '0 auto', padding: '40px 24px 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(280px,340px)', gap: 32, alignItems: 'start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>

            <div>
              <h2 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: 12 }}>1. Garage Type</h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                {GARAGE_TYPES.map((g) => (
                  <button key={g.id} onClick={() => setGarageType(g)} style={{
                    padding: '14px 16px', borderRadius: 10, cursor: 'pointer', textAlign: 'left',
                    border: `2px solid ${garageType.id === g.id ? BRAND.amber : 'var(--color-border)'}`,
                    background: garageType.id === g.id ? 'rgba(196,119,59,0.08)' : 'var(--color-bg-raised)',
                    color: 'var(--color-text)',
                  }}>
                    <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>{g.label}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>{g.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h2 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: 12 }}>2. Intended Use</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {CONVERSION_TYPES.map((ct) => (
                  <button key={ct.id} onClick={() => setConversionType(ct)} style={{
                    padding: '14px 16px', borderRadius: 10, cursor: 'pointer', textAlign: 'left',
                    border: `2px solid ${conversionType.id === ct.id ? BRAND.amber : 'var(--color-border)'}`,
                    background: conversionType.id === ct.id ? 'rgba(196,119,59,0.08)' : 'var(--color-bg-raised)',
                    color: 'var(--color-text)',
                  }}>
                    <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>{ct.label}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>{ct.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h2 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: 12 }}>3. Specification</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {SPEC_LEVELS.map((sp) => (
                  <button key={sp.id} onClick={() => setSpec(sp)} style={{
                    padding: '14px 16px', borderRadius: 10, cursor: 'pointer', textAlign: 'left',
                    border: `2px solid ${spec.id === sp.id ? BRAND.amber : 'var(--color-border)'}`,
                    background: spec.id === sp.id ? 'rgba(196,119,59,0.08)' : 'var(--color-bg-raised)',
                    color: 'var(--color-text)',
                  }}>
                    <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>{sp.label}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>{sp.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h2 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: 12 }}>4. Add-Ons (optional)</h2>
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

            <div>
              <h2 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: 12 }}>5. Location</h2>
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

          <div style={{ position: 'sticky', top: 24 }}>
            <div style={{
              background: 'linear-gradient(135deg,#1a1a2e 0%,#0d1117 100%)',
              border: `1px solid ${BRAND.amber}`, borderRadius: 16, padding: '32px 28px', color: '#fff',
            }}>
              <p style={{ color: BRAND.amber, fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.12em', marginBottom: 8 }}>ESTIMATED COST RANGE</p>
              <div style={{ fontSize: 'clamp(1.6rem,3.5vw,2.4rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: 4 }}>
                {fmt(low)} – {fmt(high)}
              </div>
              <p style={{ color: '#aaa', fontSize: '0.8rem', marginBottom: 24 }}>Full conversion inc. insulation, electrics & finishes.</p>
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 20, marginBottom: 20, fontSize: '0.85rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                  <span style={{ color: '#aaa' }}>Garage</span><span>{garageType.label} (~{garageType.sqm}m²)</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                  <span style={{ color: '#aaa' }}>Use</span><span>{conversionType.label}</span>
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
                ⚠️ Ballpark estimate only. Costs vary by property condition.
              </p>
            </div>

            <div style={{ marginTop: 16, padding: '16px', borderRadius: 12, border: '1px solid var(--color-border)', background: 'var(--color-bg-raised)', fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
              <strong style={{ color: 'var(--color-text)' }}>🏠 Permitted Development:</strong> Most single garage conversions don't need planning permission — they fall under Permitted Development Rights. However, if you live in a Conservation Area or the garage fronts a highway, you'll need full planning permission.
            </div>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 800, margin: '0 auto', padding: '0 24px 80px' }}>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: 24 }}>Garage Conversion FAQs</h2>
        {[
          { q: 'Do I need planning permission for a garage conversion?', a: 'Most garage conversions fall under Permitted Development Rights — you won\'t need planning permission unless you\'re in a Conservation Area, AONB, or your garage fronts a highway. Building Regulations approval is always required.' },
          { q: 'How much value does a garage conversion add?', a: 'A well-executed garage conversion typically adds £25,000–£45,000 in property value in London, and £15,000–£30,000 in the rest of the UK. Converting to a habitable bedroom with en-suite delivers the strongest ROI.' },
          { q: 'Can I convert a detached garage into an annexe?', a: 'Yes — a self-contained annexe can include bedroom, bathroom, kitchen and living area. This may require planning permission depending on your council and whether you intend to let it out separately. Building Regulations compliance is mandatory.' },
          { q: 'How long does a garage conversion take?', a: 'A simple integral garage conversion takes 3–6 weeks. A full self-contained annexe or double garage conversion can take 8–14 weeks, especially if structural or utility work is involved.' },
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
