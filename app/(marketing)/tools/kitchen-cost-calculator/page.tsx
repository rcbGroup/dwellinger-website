'use client'

import { useState } from 'react'
import Link from 'next/link'

const BRAND = { amber: '#C4773B' }

const KITCHEN_SIZES = [
  { id: 'galley', label: 'Galley / Small', sqm: 8, units: 10, desc: 'Up to 10m² · 8–12 units' },
  { id: 'medium', label: 'Medium Kitchen', sqm: 12, units: 16, desc: '10–15m² · 14–18 units' },
  { id: 'large', label: 'Large Kitchen', sqm: 18, units: 22, desc: '15–25m² · 20–26 units' },
  { id: 'open-plan', label: 'Open Plan / Kitchen-Diner', sqm: 28, units: 28, desc: '25m²+ · island included' },
]

const SPEC_LEVELS = [
  { id: 'flat-pack', label: 'Flat-Pack (IKEA etc)', multiplier: 1.0, desc: 'DIY units, laminate worktop' },
  { id: 'semi-bespoke', label: 'Semi-Bespoke', multiplier: 1.8, desc: 'Rigid units, quartz worktop' },
  { id: 'bespoke', label: 'Bespoke Handmade', multiplier: 3.0, desc: 'Handmade units, stone/corian' },
  { id: 'luxury', label: 'Luxury / Designer', multiplier: 5.0, desc: 'Top brands: Smallbone, Poggenpohl' },
]

const EXTRAS = [
  { id: 'island', label: 'Kitchen Island', cost: 3500 },
  { id: 'bifold', label: 'Bi-fold / Sliding Doors', cost: 4000 },
  { id: 'underfloor', label: 'Underfloor Heating', cost: 1800 },
  { id: 'utility', label: 'Utility Room Addition', cost: 5500 },
  { id: 'skylight', label: 'Skylight / Lantern', cost: 3000 },
  { id: 'aga', label: 'Range Cooker (AGA / Lacanche)', cost: 6000 },
]

const BASE_COST_PER_SQM = 900

export default function KitchenCostCalculator() {
  const [size, setSize] = useState(KITCHEN_SIZES[1])
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
      <section style={{ background: 'linear-gradient(135deg,#1a1a2e 0%,#0d1117 100%)', padding: '60px 24px 48px', textAlign: 'center' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <p style={{ color: BRAND.amber, fontWeight: 700, letterSpacing: '0.1em', fontSize: '0.75rem', marginBottom: 12 }}>FREE TOOL · INSTANT ESTIMATE</p>
          <h1 style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 800, color: '#fff', marginBottom: 16 }}>
            Kitchen Renovation Cost Calculator
          </h1>
          <p style={{ color: '#aaa', fontSize: '1.05rem', lineHeight: 1.7, maxWidth: 560, margin: '0 auto' }}>
            From a simple update to a full open-plan kitchen extension — calculate your kitchen renovation costs instantly. UK market rates, 2026.
          </p>
        </div>
      </section>

      <section style={{ maxWidth: 900, margin: '0 auto', padding: '40px 24px 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(280px,340px)', gap: 32, alignItems: 'start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>

            <div>
              <h2 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: 12 }}>1. Kitchen Size</h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                {KITCHEN_SIZES.map((s) => (
                  <button key={s.id} onClick={() => setSize(s)} style={{
                    padding: '14px 16px', borderRadius: 10, cursor: 'pointer', textAlign: 'left',
                    border: `2px solid ${size.id === s.id ? BRAND.amber : 'var(--color-border)'}`,
                    background: size.id === s.id ? 'rgba(196,119,59,0.08)' : 'var(--color-bg-raised)',
                    color: 'var(--color-text)',
                  }}>
                    <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>{s.label}</div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)' }}>{s.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h2 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: 12 }}>2. Kitchen Specification</h2>
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

          <div style={{ position: 'sticky', top: 24 }}>
            <div style={{
              background: 'linear-gradient(135deg,#1a1a2e 0%,#0d1117 100%)',
              border: `1px solid ${BRAND.amber}`, borderRadius: 16, padding: '32px 28px', color: '#fff',
            }}>
              <p style={{ color: BRAND.amber, fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.12em', marginBottom: 8 }}>ESTIMATED COST RANGE</p>
              <div style={{ fontSize: 'clamp(1.6rem,3.5vw,2.4rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: 4 }}>
                {fmt(low)} – {fmt(high)}
              </div>
              <p style={{ color: '#aaa', fontSize: '0.8rem', marginBottom: 24 }}>Inc. units, worktops, appliance fitting & installation.</p>
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 20, marginBottom: 20, fontSize: '0.85rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                  <span style={{ color: '#aaa' }}>Size</span><span>{size.label}</span>
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
                ⚠️ Ballpark estimate only. Appliances not included.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 800, margin: '0 auto', padding: '0 24px 80px' }}>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: 24 }}>Kitchen Renovation FAQs</h2>
        {[
          { q: 'How long does a kitchen renovation take?', a: 'A standard kitchen renovation takes 2–4 weeks. Open-plan kitchen extensions take 6–14 weeks depending on structural work.' },
          { q: 'Do kitchen renovations need Building Regulations approval?', a: 'Replacing a kitchen like-for-like doesn\'t require approval. However, if you\'re moving gas or electrical services, or knocking through walls, Building Regulations apply.' },
          { q: 'What\'s the ROI on a kitchen renovation?', a: 'A well-specified kitchen renovation typically adds 5–10% to property value and significantly improves saleability. Open-plan kitchen-diners are consistently cited by estate agents as the single biggest value driver.' },
          { q: 'Should appliances be included in my budget?', a: 'Our estimate covers installation and fitting, not the appliances themselves. Budget an additional £2,000–£15,000+ for appliances depending on brand preferences.' },
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
