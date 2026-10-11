'use client'

import { useState } from 'react'
import { ArrowRight, ChevronLeft, CheckCircle } from 'lucide-react'

const PROJECT_TYPES = [
  { id: 'extension',    emoji: '🏠', label: 'Extension' },
  { id: 'loft',        emoji: '🏗️', label: 'Loft Conversion' },
  { id: 'refurb',      emoji: '🔨', label: 'Refurbishment' },
  { id: 'kitchen',     emoji: '🍳', label: 'Kitchen' },
  { id: 'bathroom',    emoji: '🚿', label: 'Bathroom' },
  { id: 'structural',  emoji: '⚙️', label: 'Structural Works' },
  { id: 'other',       emoji: '📋', label: 'Other' },
]

const TIMELINES = ['ASAP', 'Within 1 month', '1–3 months', '3–6 months', '6–12 months', 'Just planning ahead']
const BUDGETS   = ['Under £10,000', '£10,000–£30,000', '£30,000–£75,000', '£75,000–£150,000', '£150,000–£300,000', '£300,000+', 'Not sure yet']

export default function PostAJobPage() {
  const [step, setStep]           = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    projectType: '', description: '', address: '', postcode: '',
    timeline: '', budget: '', name: '', email: '', phone: '', drawings: 'no',
  })

  const set = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }))

  const handleSubmit = () => {
    const body = [
      `Project type: ${form.projectType}`,
      `Description: ${form.description}`,
      `Address: ${form.address} ${form.postcode}`,
      `Timeline: ${form.timeline}`,
      `Budget: ${form.budget}`,
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Drawings: ${form.drawings}`,
    ].join('%0D%0A')
    window.location.href = `mailto:jobs@dwellinger.co.uk?subject=New Job — ${encodeURIComponent(form.projectType)}&body=${body}`
    setSubmitted(true)
  }

  const inp: React.CSSProperties = {
    width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: 8, padding: '12px 14px', color: '#fff', fontSize: '0.92rem', outline: 'none', boxSizing: 'border-box',
  }
  const lbl: React.CSSProperties = { color: 'rgba(255,255,255,0.55)', fontSize: '0.82rem', fontWeight: 600, marginBottom: 6, display: 'block' }
  const chipStyle = (active: boolean): React.CSSProperties => ({
    padding: '8px 14px', borderRadius: 6, border: '1px solid',
    borderColor: active ? '#C4773B' : 'rgba(255,255,255,0.1)',
    background: active ? 'rgba(196,119,59,0.15)' : 'rgba(255,255,255,0.03)',
    color: active ? '#C4773B' : 'rgba(255,255,255,0.45)',
    fontWeight: 600, fontSize: '0.82rem', cursor: 'pointer',
  })

  const nextBtn = (label: string, disabled = false) => (
    <button disabled={disabled} onClick={() => setStep(s => s + 1)}
      style={{ background: disabled ? 'rgba(255,255,255,0.08)' : '#C4773B', color: disabled ? 'rgba(255,255,255,0.25)' : '#fff', border: 'none', borderRadius: 8, padding: '13px 28px', fontWeight: 700, fontSize: '0.95rem', cursor: disabled ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}>
      {label} <ArrowRight size={16}/>
    </button>
  )

  if (submitted) return (
    <div style={{ background: 'var(--color-bg, #0A0A0A)', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '60px 24px' }}>
      <div style={{ textAlign: 'center', maxWidth: 500 }}>
        <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(196,119,59,0.15)', border: '1px solid rgba(196,119,59,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
          <CheckCircle size={28} style={{ color: '#C4773B' }} />
        </div>
        <h1 style={{ color: '#fff', fontWeight: 800, fontSize: '1.8rem', marginBottom: 14 }}>Job posted!</h1>
        <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.7 }}>
          Thanks {form.name}. We will match your {form.projectType} project with verified contractors and be in touch within 24 hours.
        </p>
      </div>
    </div>
  )

  return (
    <div style={{ background: 'var(--color-bg, #0A0A0A)', minHeight: '100vh', padding: '72px 24px' }}>
      <div style={{ maxWidth: 600, margin: '0 auto' }}>
        {/* Progress bar */}
        <div style={{ display: 'flex', gap: 6, marginBottom: 36 }}>
          {[0,1,2,3].map(i => (
            <div key={i} style={{ flex: 1, height: 3, borderRadius: 2, background: i <= step ? '#C4773B' : 'rgba(255,255,255,0.1)', transition: 'background 0.3s' }} />
          ))}
        </div>

        {/* Step 0 — project type */}
        {step === 0 && (
          <>
            <h1 style={{ color: '#fff', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 800, marginBottom: 8 }}>Post a job</h1>
            <p style={{ color: 'rgba(255,255,255,0.45)', marginBottom: 32, lineHeight: 1.6 }}>Tell us what you need and we will match you with verified contractors in your area.</p>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', fontWeight: 600, marginBottom: 14 }}>What type of project?</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(155px, 1fr))', gap: 10 }}>
              {PROJECT_TYPES.map(p => (
                <button key={p.id} onClick={() => { set('projectType', p.label); setStep(1) }}
                  style={{ padding: '16px 12px', borderRadius: 10, border: '1px solid', borderColor: form.projectType === p.label ? '#C4773B' : 'rgba(255,255,255,0.1)', background: form.projectType === p.label ? 'rgba(196,119,59,0.12)' : 'rgba(255,255,255,0.03)', cursor: 'pointer', textAlign: 'left' }}>
                  <div style={{ fontSize: '1.3rem', marginBottom: 6 }}>{p.emoji}</div>
                  <div style={{ color: '#fff', fontWeight: 600, fontSize: '0.88rem' }}>{p.label}</div>
                </button>
              ))}
            </div>
          </>
        )}

        {/* Step 1 — description + location */}
        {step === 1 && (
          <>
            <button onClick={() => setStep(0)} style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.35)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4, fontSize: '0.82rem', padding: 0, marginBottom: 24 }}>
              <ChevronLeft size={14}/> Back
            </button>
            <h2 style={{ color: '#fff', fontWeight: 800, fontSize: '1.5rem', marginBottom: 28 }}>Describe your project</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18, marginBottom: 28 }}>
              <div>
                <label style={lbl}>What do you need done? *</label>
                <textarea style={{ ...inp, minHeight: 100, resize: 'vertical' } as React.CSSProperties}
                  placeholder={`Describe your ${form.projectType.toLowerCase()} — size, scope, any special requirements…`}
                  value={form.description} onChange={e => set('description', e.target.value)} />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 120px', gap: 12 }}>
                <div>
                  <label style={lbl}>Address / area *</label>
                  <input style={inp} placeholder='Street, town or area' value={form.address} onChange={e => set('address', e.target.value)} />
                </div>
                <div>
                  <label style={lbl}>Postcode *</label>
                  <input style={inp} placeholder='E8 1AB' value={form.postcode} onChange={e => set('postcode', e.target.value)} />
                </div>
              </div>
            </div>
            {nextBtn('Continue', !form.description || !form.address)}
          </>
        )}

        {/* Step 2 — timeline + budget */}
        {step === 2 && (
          <>
            <button onClick={() => setStep(1)} style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.35)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4, fontSize: '0.82rem', padding: 0, marginBottom: 24 }}>
              <ChevronLeft size={14}/> Back
            </button>
            <h2 style={{ color: '#fff', fontWeight: 800, fontSize: '1.5rem', marginBottom: 28 }}>Timeline &amp; budget</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24, marginBottom: 32 }}>
              <div>
                <label style={lbl}>When do you need this done?</label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {TIMELINES.map(t => (
                    <button key={t} type='button' onClick={() => set('timeline', t)} style={chipStyle(form.timeline === t)}>{t}</button>
                  ))}
                </div>
              </div>
              <div>
                <label style={lbl}>Approximate budget</label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {BUDGETS.map(b => (
                    <button key={b} type='button' onClick={() => set('budget', b)} style={chipStyle(form.budget === b)}>{b}</button>
                  ))}
                </div>
              </div>
            </div>
            {nextBtn('Continue')}
          </>
        )}

        {/* Step 3 — contact details */}
        {step === 3 && (
          <>
            <button onClick={() => setStep(2)} style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.35)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4, fontSize: '0.82rem', padding: 0, marginBottom: 24 }}>
              <ChevronLeft size={14}/> Back
            </button>
            <h2 style={{ color: '#fff', fontWeight: 800, fontSize: '1.5rem', marginBottom: 28 }}>Your contact details</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 28 }}>
              <div>
                <label style={lbl}>Full name *</label>
                <input style={inp} placeholder='Jane Smith' value={form.name} onChange={e => set('name', e.target.value)} />
              </div>
              <div>
                <label style={lbl}>Email *</label>
                <input type='email' style={inp} placeholder='jane@example.com' value={form.email} onChange={e => set('email', e.target.value)} />
              </div>
              <div>
                <label style={lbl}>Phone</label>
                <input style={inp} placeholder='+44 7700 000000' value={form.phone} onChange={e => set('phone', e.target.value)} />
              </div>
              <div>
                <label style={lbl}>Do you have drawings or plans?</label>
                <div style={{ display: 'flex', gap: 10 }}>
                  {['yes', 'no', 'in progress'].map(v => (
                    <button key={v} type='button' onClick={() => set('drawings', v)} style={{ ...chipStyle(form.drawings === v), textTransform: 'capitalize' }}>{v}</button>
                  ))}
                </div>
              </div>
            </div>
            <button onClick={handleSubmit} disabled={!form.name || !form.email}
              style={{ background: !form.name || !form.email ? 'rgba(255,255,255,0.08)' : '#C4773B', color: !form.name || !form.email ? 'rgba(255,255,255,0.25)' : '#fff', border: 'none', borderRadius: 8, padding: '14px 32px', fontWeight: 700, fontSize: '1rem', cursor: !form.name || !form.email ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}>
              Post Your Job <ArrowRight size={16}/>
            </button>
          </>
        )}
      </div>
    </div>
  )
}
