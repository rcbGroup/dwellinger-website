'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

const TIERS: Record<string, { name: string; price: string; days: string; items: string[] }> = {
  outline: {
    name: 'Outline',
    price: '£95',
    days: '5 working days',
    items: ['Single-storey cost indication', 'Cost per m² range', 'Materials overview', 'Summary report (PDF)'],
  },
  standard: {
    name: 'Standard',
    price: '£150',
    days: '5 working days',
    items: ['Everything in Outline', 'Elemental cost breakdown', 'Prelims and contingency included', 'Suitable for planning applications'],
  },
  full: {
    name: 'Full',
    price: '£250',
    days: '7 working days',
    items: ['Everything in Standard', 'Detailed bill of quantities', 'Subcontractor schedule', 'Suitable for tender'],
  },
  premium: {
    name: 'Premium',
    price: '£350',
    days: '7–10 working days',
    items: ['Everything in Full', 'QS review call (30 min)', 'Value engineering notes', 'Comparable project data'],
  },
}

function OrderForm() {
  const params = useSearchParams()
  const tierKey = params.get('tier') ?? 'standard'
  const tier = TIERS[tierKey] ?? TIERS.standard

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    location: '',
    size: '',
    budget: '',
    drawings: '',
    notes: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    // Simulate submission — in production, POST to /api/estimates/order
    await new Promise((r) => setTimeout(r, 1200))
    setSubmitting(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div style={{ textAlign: 'center', padding: '64px 24px', maxWidth: 560, margin: '0 auto' }}>
        <div style={{ fontSize: 52, marginBottom: 20 }}>✅</div>
        <h2 style={{ color: '#1A2340', fontSize: '1.75rem', fontWeight: 800, marginBottom: 16 }}>
          Order Received
        </h2>
        <p style={{ color: '#4A5568', lineHeight: 1.75, marginBottom: 12 }}>
          Your <strong>{tier.name} Estimate</strong> ({tier.price}) has been requested. You&apos;ll receive a confirmation to <strong>{form.email}</strong> shortly.
        </p>
        <p style={{ color: '#4A5568', lineHeight: 1.75, marginBottom: 32 }}>
          Our team will review your project details and may follow up to request any additional information before we begin. Your estimate will be delivered within {tier.days}.
        </p>
        <Link
          href="/services/estimating"
          style={{ color: '#C4773B', fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem' }}
        >
          ← Back to Estimating
        </Link>
      </div>
    )
  }

  return (
    <div style={{ maxWidth: 1040, margin: '0 auto', padding: '48px 24px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 40, alignItems: 'start' }}>
        {/* Form */}
        <div>
          <p style={{ color: '#C4773B', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12 }}>
            Step 1 of 1
          </p>
          <h1 style={{ color: '#1A2340', fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 800, marginBottom: 8 }}>
            Order Your {tier.name} Estimate
          </h1>
          <p style={{ color: '#4A5568', marginBottom: 36, lineHeight: 1.6 }}>
            Tell us about your project. The more detail you provide, the more accurate your estimate will be.
          </p>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {/* Contact */}
            <fieldset style={{ border: '1px solid #EDE8DC', borderRadius: 10, padding: '20px 24px' }}>
              <legend style={{ color: '#1A2340', fontWeight: 700, fontSize: '0.9rem', padding: '0 8px' }}>Your details</legend>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 8 }}>
                <div>
                  <label style={{ display: 'block', color: '#4A5568', fontSize: '0.85rem', marginBottom: 6, fontWeight: 600 }}>Full name *</label>
                  <input
                    required name="name" value={form.name} onChange={handleChange}
                    placeholder="e.g. Sarah Johnson"
                    style={{ width: '100%', padding: '10px 14px', border: '1px solid #EDE8DC', borderRadius: 6, fontSize: '0.95rem', fontFamily: 'inherit', outline: 'none', boxSizing: 'border-box' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', color: '#4A5568', fontSize: '0.85rem', marginBottom: 6, fontWeight: 600 }}>Email address *</label>
                  <input
                    required type="email" name="email" value={form.email} onChange={handleChange}
                    placeholder="you@example.com"
                    style={{ width: '100%', padding: '10px 14px', border: '1px solid #EDE8DC', borderRadius: 6, fontSize: '0.95rem', fontFamily: 'inherit', outline: 'none', boxSizing: 'border-box' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', color: '#4A5568', fontSize: '0.85rem', marginBottom: 6, fontWeight: 600 }}>Phone number</label>
                  <input
                    type="tel" name="phone" value={form.phone} onChange={handleChange}
                    placeholder="+44 7700 000000"
                    style={{ width: '100%', padding: '10px 14px', border: '1px solid #EDE8DC', borderRadius: 6, fontSize: '0.95rem', fontFamily: 'inherit', outline: 'none', boxSizing: 'border-box' }}
                  />
                </div>
              </div>
            </fieldset>

            {/* Project */}
            <fieldset style={{ border: '1px solid #EDE8DC', borderRadius: 10, padding: '20px 24px' }}>
              <legend style={{ color: '#1A2340', fontWeight: 700, fontSize: '0.9rem', padding: '0 8px' }}>Project details</legend>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 8 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div>
                    <label style={{ display: 'block', color: '#4A5568', fontSize: '0.85rem', marginBottom: 6, fontWeight: 600 }}>Project type *</label>
                    <select
                      required name="projectType" value={form.projectType} onChange={handleChange}
                      style={{ width: '100%', padding: '10px 14px', border: '1px solid #EDE8DC', borderRadius: 6, fontSize: '0.95rem', fontFamily: 'inherit', outline: 'none', background: '#fff', boxSizing: 'border-box' }}
                    >
                      <option value="">Select project type</option>
                      <option>Rear extension</option>
                      <option>Side extension</option>
                      <option>Wrap-around extension</option>
                      <option>Double-storey extension</option>
                      <option>Loft conversion</option>
                      <option>Full house refurbishment</option>
                      <option>Ground floor refurbishment</option>
                      <option>Kitchen extension</option>
                      <option>Basement conversion</option>
                      <option>Garage conversion</option>
                      <option>Structural alterations</option>
                      <option>New build</option>
                      <option>Commercial fit-out</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', color: '#4A5568', fontSize: '0.85rem', marginBottom: 6, fontWeight: 600 }}>Location / postcode *</label>
                    <input
                      required name="location" value={form.location} onChange={handleChange}
                      placeholder="e.g. SE22 or Dulwich, London"
                      style={{ width: '100%', padding: '10px 14px', border: '1px solid #EDE8DC', borderRadius: 6, fontSize: '0.95rem', fontFamily: 'inherit', outline: 'none', boxSizing: 'border-box' }}
                    />
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div>
                    <label style={{ display: 'block', color: '#4A5568', fontSize: '0.85rem', marginBottom: 6, fontWeight: 600 }}>Approximate size (m²)</label>
                    <input
                      name="size" value={form.size} onChange={handleChange}
                      placeholder="e.g. 35 m² extension"
                      style={{ width: '100%', padding: '10px 14px', border: '1px solid #EDE8DC', borderRadius: 6, fontSize: '0.95rem', fontFamily: 'inherit', outline: 'none', boxSizing: 'border-box' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', color: '#4A5568', fontSize: '0.85rem', marginBottom: 6, fontWeight: 600 }}>Budget range</label>
                    <select
                      name="budget" value={form.budget} onChange={handleChange}
                      style={{ width: '100%', padding: '10px 14px', border: '1px solid #EDE8DC', borderRadius: 6, fontSize: '0.95rem', fontFamily: 'inherit', outline: 'none', background: '#fff', boxSizing: 'border-box' }}
                    >
                      <option value="">Unsure / prefer not to say</option>
                      <option>Under £50k</option>
                      <option>£50k – £100k</option>
                      <option>£100k – £200k</option>
                      <option>£200k – £500k</option>
                      <option>Over £500k</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label style={{ display: 'block', color: '#4A5568', fontSize: '0.85rem', marginBottom: 6, fontWeight: 600 }}>Do you have drawings or plans?</label>
                  <select
                    name="drawings" value={form.drawings} onChange={handleChange}
                    style={{ width: '100%', padding: '10px 14px', border: '1px solid #EDE8DC', borderRadius: 6, fontSize: '0.95rem', fontFamily: 'inherit', outline: 'none', background: '#fff', boxSizing: 'border-box' }}
                  >
                    <option value="">Select an option</option>
                    <option>No drawings yet — concept stage only</option>
                    <option>Sketch / rough layout only</option>
                    <option>Planning drawings (not technical)</option>
                    <option>Full architectural drawings</option>
                    <option>Structural drawings too</option>
                  </select>
                  <p style={{ color: '#4A5568', fontSize: '0.8rem', marginTop: 6 }}>You can email any drawings to <a href="mailto:estimates@dwellinger.co.uk" style={{ color: '#C4773B' }}>estimates@dwellinger.co.uk</a> after submitting.</p>
                </div>
                <div>
                  <label style={{ display: 'block', color: '#4A5568', fontSize: '0.85rem', marginBottom: 6, fontWeight: 600 }}>Project description / notes</label>
                  <textarea
                    name="notes" value={form.notes} onChange={handleChange}
                    rows={4}
                    placeholder="Tell us what you're trying to achieve, any key requirements, complications or phasing needs..."
                    style={{ width: '100%', padding: '10px 14px', border: '1px solid #EDE8DC', borderRadius: 6, fontSize: '0.95rem', fontFamily: 'inherit', outline: 'none', resize: 'vertical', boxSizing: 'border-box' }}
                  />
                </div>
              </div>
            </fieldset>

            <button
              type="submit"
              disabled={submitting}
              style={{
                backgroundColor: '#C4773B',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: 6,
                padding: '16px 28px',
                fontWeight: 700,
                fontSize: '1rem',
                cursor: submitting ? 'wait' : 'pointer',
                opacity: submitting ? 0.75 : 1,
                fontFamily: 'inherit',
                transition: 'opacity 0.2s',
              }}
            >
              {submitting ? 'Submitting…' : `Place Order — ${tier.price}`}
            </button>

            <p style={{ color: '#4A5568', fontSize: '0.8rem', lineHeight: 1.6 }}>
              By placing this order you agree to our{' '}
              <Link href="/terms" style={{ color: '#C4773B' }}>Terms of Service</Link>. Payment is due on delivery of your estimate report.
              We accept bank transfer and card payment.
            </p>
          </form>
        </div>

        {/* Order summary */}
        <div style={{ position: 'sticky', top: 20 }}>
          <div style={{ backgroundColor: '#1A2340', borderRadius: 12, padding: 28, color: '#FFFFFF' }}>
            <p style={{ color: '#C4773B', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16 }}>
              Order Summary
            </p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
              <div>
                <div style={{ fontSize: '1.15rem', fontWeight: 700 }}>{tier.name} Estimate</div>
                <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.85rem', marginTop: 4 }}>Delivered in {tier.days}</div>
              </div>
              <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#C4773B' }}>{tier.price}</div>
            </div>
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 20, marginBottom: 20 }}>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.8rem', marginBottom: 12, fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>What&apos;s included</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {tier.items.map((item) => (
                  <li key={item} style={{ display: 'flex', gap: 10, fontSize: '0.88rem', color: 'rgba(255,255,255,0.8)' }}>
                    <span style={{ color: '#C4773B', flexShrink: 0, marginTop: 1 }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: 8, padding: '14px 16px', fontSize: '0.82rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.6 }}>
              <span style={{ color: '#C4773B', fontWeight: 700 }}>Payment note:</span> Payment is requested on delivery of your completed estimate report. We will invoice you by email.
            </div>
          </div>

          <div style={{ marginTop: 16, backgroundColor: '#F5F0E8', borderRadius: 12, padding: '20px 24px', border: '1px solid #EDE8DC' }}>
            <p style={{ color: '#1A2340', fontWeight: 700, fontSize: '0.9rem', marginBottom: 8 }}>Not sure which tier?</p>
            <p style={{ color: '#4A5568', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: 12 }}>
              Standard is right for most homeowners. Full and Premium are for developers, investors and tender purposes.
            </p>
            <Link href="/services/estimating" style={{ color: '#C4773B', fontWeight: 700, fontSize: '0.85rem', textDecoration: 'none' }}>
              Compare all tiers →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function EstimatingOrderPage() {
  return (
    <div style={{ background: '#FAFAF8', minHeight: '100vh', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Header */}
      <div style={{ backgroundColor: '#1A2340', padding: '16px 24px', display: 'flex', alignItems: 'center', gap: 16 }}>
        <Link href="/" style={{ textDecoration: 'none' }}>
          <span style={{ fontFamily: 'Georgia, serif', fontWeight: 700, fontSize: '1.2rem', color: '#FFFFFF' }}>
            Dwell<span style={{ color: '#C4773B' }}>inger</span>
          </span>
        </Link>
        <span style={{ color: 'rgba(255,255,255,0.3)' }}>›</span>
        <Link href="/services/estimating" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '0.875rem' }}>
          Estimating
        </Link>
        <span style={{ color: 'rgba(255,255,255,0.3)' }}>›</span>
        <span style={{ color: '#FFFFFF', fontSize: '0.875rem' }}>Order</span>
      </div>

      <Suspense fallback={<div style={{ padding: 48, textAlign: 'center', color: '#4A5568' }}>Loading…</div>}>
        <OrderForm />
      </Suspense>
    </div>
  )
}
