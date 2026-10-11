'use client'

import { useState } from 'react'
import { pageMetadata } from '@/lib/seo'
import { ArrowRight, CheckCircle, Shield, Star, Zap } from 'lucide-react'
import Link from 'next/link'

const TRADES = [
  'General Building', 'Extensions', 'Loft Conversions', 'Refurbishment',
  'Plastering', 'Electrical', 'Plumbing & Heating', 'Roofing',
  'Carpentry & Joinery', 'Kitchen Fitting', 'Bathroom Fitting', 'Tiling',
  'Painting & Decorating', 'Groundworks', 'Structural Works', 'Landscaping',
]

const AREAS = [
  'Central London', 'North London', 'South London', 'East London', 'West London',
  'Outer London', 'Surrey', 'Kent', 'Essex', 'Hertfordshire', 'Rest of UK',
]

export default function ContractorRegisterPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    businessName: '', contactName: '', email: '', phone: '',
    yearsTrading: '', employees: '', trades: [] as string[], areas: [] as string[], description: '',
  })

  const set = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }))
  const toggleArr = (k: 'trades' | 'areas', v: string) => setForm(f => ({
    ...f,
    [k]: f[k].includes(v) ? f[k].filter(x => x !== v) : [...f[k], v],
  }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const body = [
      `Business: ${form.businessName}`,
      `Contact: ${form.contactName}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Years trading: ${form.yearsTrading}`,
      `Employees: ${form.employees}`,
      `Trades: ${form.trades.join(', ')}`,
      `Areas: ${form.areas.join(', ')}`,
      `About: ${form.description}`,
    ].join('%0D%0A')
    window.location.href = `mailto:contractors@dwellinger.co.uk?subject=Contractor Application — ${form.businessName}&body=${body}`
    setSubmitted(true)
  }

  const inp: React.CSSProperties = {
    width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: 8, padding: '12px 14px', color: '#fff', fontSize: '0.92rem', outline: 'none', boxSizing: 'border-box',
  }
  const lbl: React.CSSProperties = { color: 'rgba(255,255,255,0.6)', fontSize: '0.82rem', fontWeight: 600, marginBottom: 6, display: 'block' }
  const chip = (active: boolean): React.CSSProperties => ({
    padding: '7px 14px', borderRadius: 6, border: '1px solid',
    borderColor: active ? '#C4773B' : 'rgba(255,255,255,0.1)',
    background: active ? 'rgba(196,119,59,0.15)' : 'rgba(255,255,255,0.03)',
    color: active ? '#C4773B' : 'rgba(255,255,255,0.45)',
    fontWeight: 600, fontSize: '0.82rem', cursor: 'pointer',
  })

  if (submitted) return (
    <div style={{ background: 'var(--color-bg, #0A0A0A)', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '60px 24px' }}>
      <div style={{ textAlign: 'center', maxWidth: 500 }}>
        <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(196,119,59,0.15)', border: '1px solid rgba(196,119,59,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
          <CheckCircle size={28} style={{ color: '#C4773B' }} />
        </div>
        <h1 style={{ color: '#fff', fontWeight: 800, fontSize: '1.8rem', marginBottom: 14 }}>Application Submitted</h1>
        <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: 10 }}>
          Thanks, {form.contactName}. We\'ll review {form.businessName}\'s application and be in touch within 48 hours.
        </p>
        <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.85rem', marginBottom: 32 }}>Once approved, your Builder Score™ profile goes live and you start receiving verified leads.</p>
        <Link href='/' style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#C4773B', color: '#fff', padding: '12px 28px', borderRadius: 8, fontWeight: 700, textDecoration: 'none' }}>
          Back to Dwellinger <ArrowRight size={16}/>
        </Link>
      </div>
    </div>
  )

  return (
    <div style={{ background: 'var(--color-bg, #0A0A0A)', minHeight: '100vh' }}>

      {/* Hero */}
      <section style={{ padding: '80px 24px 60px', borderBottom: '1px solid rgba(255,255,255,0.06)', textAlign: 'center' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <p style={{ color: '#C4773B', fontWeight: 600, fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16 }}>For Contractors</p>
          <h1 style={{ color: '#fff', fontSize: 'clamp(2rem,5vw,3rem)', fontWeight: 800, lineHeight: 1.2, marginBottom: 16 }}>
            Join Dwellinger as a verified contractor
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.05rem', lineHeight: 1.65, maxWidth: 560, margin: '0 auto 36px' }}>
            Get a Builder Score™ profile, receive verified homeowner leads, and win more work — with less admin.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20, justifyContent: 'center' }}>
            {[
              { icon: Shield, text: 'Builder Score™ badge on your profile' },
              { icon: Star, text: 'Verified leads from homeowners' },
              { icon: Zap, text: 'Professional quotes in minutes' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'rgba(255,255,255,0.55)', fontSize: '0.88rem' }}>
                <Icon size={14} style={{ color: '#C4773B' }} />
                {text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section style={{ padding: '60px 24px 80px' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <div>
                <label style={lbl}>Business name *</label>
                <input required style={inp} placeholder='ABC Building Ltd' value={form.businessName} onChange={e => set('businessName', e.target.value)} />
              </div>
              <div>
                <label style={lbl}>Contact name *</label>
                <input required style={inp} placeholder='John Smith' value={form.contactName} onChange={e => set('contactName', e.target.value)} />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <div>
                <label style={lbl}>Email *</label>
                <input required type='email' style={inp} placeholder='john@abcbuilding.co.uk' value={form.email} onChange={e => set('email', e.target.value)} />
              </div>
              <div>
                <label style={lbl}>Phone *</label>
                <input required style={inp} placeholder='+44 7700 000000' value={form.phone} onChange={e => set('phone', e.target.value)} />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <div>
                <label style={lbl}>Years trading</label>
                <select style={{ ...inp, appearance: 'none' } as React.CSSProperties} value={form.yearsTrading} onChange={e => set('yearsTrading', e.target.value)}>
                  <option value=''>Select...</option>
                  {['Under 1 year', '1–2 years', '3–5 years', '6–10 years', '10–20 years', '20+ years'].map(v => <option key={v} value={v}>{v}</option>)}
                </select>
              </div>
              <div>
                <label style={lbl}>Team size</label>
                <select style={{ ...inp, appearance: 'none' } as React.CSSProperties} value={form.employees} onChange={e => set('employees', e.target.value)}>
                  <option value=''>Select...</option>
                  {['Sole trader', '2–5 people', '6–10 people', '11–25 people', '25+ people'].map(v => <option key={v} value={v}>{v}</option>)}
                </select>
              </div>
            </div>

            <div>
              <label style={lbl}>Trades / specialisms (select all that apply)</label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {TRADES.map(t => (
                  <button type='button' key={t} style={chip(form.trades.includes(t))} onClick={() => toggleArr('trades', t)}>{t}</button>
                ))}
              </div>
            </div>

            <div>
              <label style={lbl}>Areas covered (select all that apply)</label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {AREAS.map(a => (
                  <button type='button' key={a} style={chip(form.areas.includes(a))} onClick={() => toggleArr('areas', a)}>{a}</button>
                ))}
              </div>
            </div>

            <div>
              <label style={lbl}>Tell us about your business</label>
              <textarea style={{ ...inp, minHeight: 110, resize: 'vertical' } as React.CSSProperties}
                placeholder='What types of projects do you specialise in? Any accreditations, insurances, or notable projects?'
                value={form.description}
                onChange={e => set('description', e.target.value)}
              />
            </div>

            <div style={{ background: 'rgba(196,119,59,0.06)', border: '1px solid rgba(196,119,59,0.15)', borderRadius: 8, padding: '14px 16px', fontSize: '0.82rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.6 }}>
              We review every application manually. Once approved, we\'ll set up your Builder Score™ profile and you can start receiving leads. Approval typically takes 48 hours.
            </div>

            <button type='submit' style={{ background: '#C4773B', color: '#fff', border: 'none', borderRadius: 8, padding: '15px 32px', fontWeight: 700, fontSize: '1rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
              Submit Application <ArrowRight size={16}/>
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
