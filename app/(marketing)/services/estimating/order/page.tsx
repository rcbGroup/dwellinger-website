'use client'

import { useState } from 'react'
import { pageMetadata } from '@/lib/seo'
import { ArrowRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'

const PROJECT_TYPES = ['Extension', 'Loft Conversion', 'Refurbishment', 'Kitchen', 'Bathroom', 'Structural Works', 'Other']
const TIERS = ['Outline (£95)', 'Standard (£150)', 'Full (£250)', 'Premium (£350)']

export default function EstimateOrderPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '', email: '', phone: '', projectType: '', address: '', description: '', drawings: 'no', tier: 'Standard (£150)',
  })

  const set = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }))

  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setSubmitError('')
    try {
      const res = await fetch('/api/get-quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          project_type: form.projectType,
          postcode: form.address.split(' ').pop() ?? '',
          description: `[${form.tier}] Drawings: ${form.drawings}. ${form.description}`,
          budget_range: form.tier,
        }),
      })
      const data = await res.json()
      if (!res.ok || data.error) {
        setSubmitError(data.error ?? 'Something went wrong. Please try again.')
        setSubmitting(false)
        return
      }
      setSubmitted(true)
    } catch {
      setSubmitError('Network error. Please try again.')
      setSubmitting(false)
    }
  }

  const inp: React.CSSProperties = {
    width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: 8, padding: '12px 14px', color: '#fff', fontSize: '0.92rem', outline: 'none',
    boxSizing: 'border-box',
  }
  const sel = { ...inp }
  const lbl: React.CSSProperties = { color: 'rgba(255,255,255,0.6)', fontSize: '0.82rem', fontWeight: 600, marginBottom: 6, display: 'block', letterSpacing: '0.02em' }

  if (submitted) return (
    <div style={{ background: 'var(--color-bg, #0A0A0A)', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '60px 24px' }}>
      <div style={{ textAlign: 'center', maxWidth: 500 }}>
        <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(196,119,59,0.15)', border: '1px solid rgba(196,119,59,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
          <CheckCircle size={28} style={{ color: '#C4773B' }} />
        </div>
        <h1 style={{ color: '#fff', fontWeight: 800, fontSize: '1.8rem', marginBottom: 14 }}>Order Received</h1>
        <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: 32 }}>
          Thank you, {form.name}. We\'ll review your project details and confirm your order with payment instructions within 2 hours.
        </p>
        <Link href='/' style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#C4773B', color: '#fff', padding: '12px 28px', borderRadius: 8, fontWeight: 700, textDecoration: 'none' }}>
          Back to Dwellinger <ArrowRight size={16}/>
        </Link>
      </div>
    </div>
  )

  return (
    <div style={{ background: 'var(--color-bg, #0A0A0A)', minHeight: '100vh', padding: '80px 24px' }}>
      <div style={{ maxWidth: 640, margin: '0 auto' }}>
        <Link href='/services/estimating' style={{ color: '#C4773B', fontSize: '0.85rem', textDecoration: 'none', display: 'inline-block', marginBottom: 32 }}>← Back to estimating</Link>
        <h1 style={{ color: '#fff', fontSize: 'clamp(1.8rem,4vw,2.4rem)', fontWeight: 800, marginBottom: 10 }}>Order Your Estimate</h1>
        <p style={{ color: 'rgba(255,255,255,0.45)', marginBottom: 40, lineHeight: 1.6 }}>Fill in your project details below. We\'ll confirm the right tier and send a secure payment link within 2 hours.</p>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <div>
              <label style={lbl}>Full name *</label>
              <input required style={inp} placeholder='Jane Smith' value={form.name} onChange={e => set('name', e.target.value)} />
            </div>
            <div>
              <label style={lbl}>Email *</label>
              <input required type='email' style={inp} placeholder='jane@example.com' value={form.email} onChange={e => set('email', e.target.value)} />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <div>
              <label style={lbl}>Phone</label>
              <input style={inp} placeholder='+44 7700 000000' value={form.phone} onChange={e => set('phone', e.target.value)} />
            </div>
            <div>
              <label style={lbl}>Project type *</label>
              <select required style={sel} value={form.projectType} onChange={e => set('projectType', e.target.value)}>
                <option value=''>Select...</option>
                {PROJECT_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
          </div>

          <div>
            <label style={lbl}>Property address *</label>
            <input required style={inp} placeholder='123 Example Street, London, E8 1AB' value={form.address} onChange={e => set('address', e.target.value)} />
          </div>

          <div>
            <label style={lbl}>Preferred estimate tier</label>
            <select style={sel} value={form.tier} onChange={e => set('tier', e.target.value)}>
              {TIERS.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>

          <div>
            <label style={lbl}>Do you have any drawings or plans?</label>
            <div style={{ display: 'flex', gap: 12 }}>
              {['yes', 'no', 'in progress'].map(v => (
                <button type='button' key={v}
                  onClick={() => set('drawings', v)}
                  style={{ padding: '8px 18px', borderRadius: 6, border: '1px solid', borderColor: form.drawings === v ? '#C4773B' : 'rgba(255,255,255,0.12)', background: form.drawings === v ? 'rgba(196,119,59,0.15)' : 'rgba(255,255,255,0.04)', color: form.drawings === v ? '#C4773B' : 'rgba(255,255,255,0.5)', fontWeight: 600, fontSize: '0.85rem', cursor: 'pointer', textTransform: 'capitalize' }}
                >{v}</button>
              ))}
            </div>
          </div>

          <div>
            <label style={lbl}>Project description *</label>
            <textarea required style={{ ...inp, minHeight: 120, resize: 'vertical' } as React.CSSProperties}
              placeholder='Describe what you want to build, approximate size, any special requirements or constraints...'
              value={form.description}
              onChange={e => set('description', e.target.value)}
            />
          </div>

          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 8, padding: '14px 16px', fontSize: '0.82rem', color: 'rgba(255,255,255,0.38)', lineHeight: 1.6 }}>
            After submitting, we\'ll review your details and send a payment link within 2 hours. Your estimate report will be delivered as a PDF within the stated timeframe.
          </div>

          {submitError && <p style={{ color: '#f87171', fontSize: '0.82rem', textAlign: 'center' }}>{submitError}</p>}
          <button type='submit' disabled={submitting} style={{ background: submitting ? '#9CA3AF' : '#C4773B', color: '#fff', border: 'none', borderRadius: 8, padding: '15px 32px', fontWeight: 700, fontSize: '1rem', cursor: submitting ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
            {submitting ? 'Submitting…' : 'Submit Order'} <ArrowRight size={16}/>
          </button>
        </form>
      </div>
    </div>
  )
}
