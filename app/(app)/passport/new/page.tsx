'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronRight, ChevronLeft, Check, Home, Building2, Layers, Wrench, HardHat, PenLine, Loader2 } from 'lucide-react'

const PROJECT_TYPES = [
  { id: 'extension', label: 'Extension', icon: Home, desc: 'Rear, side return, double storey' },
  { id: 'loft', label: 'Loft Conversion', icon: Layers, desc: 'Dormer, hip-to-gable, mansard' },
  { id: 'refurbishment', label: 'Refurbishment', icon: PenLine, desc: 'Full or partial renovation' },
  { id: 'new-build', label: 'New Build', icon: Building2, desc: 'Detached, semi, terrace, flat' },
  { id: 'other', label: 'Other', icon: Wrench, desc: 'Structural, conversion, or bespoke' },
]

const STATUSES = [
  { id: 'idea', label: 'Just an idea', desc: 'Still exploring feasibility' },
  { id: 'drawings', label: 'Have drawings', desc: 'Concept or planning drawings exist' },
  { id: 'approved', label: 'Planning approved', desc: 'Full planning permission granted' },
  { id: 'ready', label: 'Ready to build', desc: 'Ready to go to tender' },
]

const STEP_LABELS = ['Project type', 'Property address', 'Brief description', 'Current status']

export default function NewPassportPage() {
  const [step, setStep] = useState(0)
  const [projectType, setProjectType] = useState('')
  const [address, setAddress] = useState('')
  const [postcode, setPostcode] = useState('')
  const [postcodeInfo, setPostcodeInfo] = useState<{ admin_district?: string; region?: string } | null>(null)
  const [postcodeError, setPostcodeError] = useState('')
  const [postcodeChecking, setPostcodeChecking] = useState(false)
  const [description, setDescription] = useState('')
  const [status, setStatus] = useState('')
  const [submitted, setSubmitted] = useState(false)

  async function checkPostcode(pc: string) {
    const clean = pc.replace(/\s/g, '').toUpperCase()
    if (clean.length < 5) { setPostcodeInfo(null); setPostcodeError(''); return }
    setPostcodeChecking(true)
    setPostcodeError('')
    try {
      const res = await fetch(`https://api.postcodes.io/postcodes/${encodeURIComponent(clean)}`)
      const data = await res.json()
      if (data.status === 200 && data.result) {
        setPostcodeInfo({ admin_district: data.result.admin_district, region: data.result.region })
        setPostcodeError('')
      } else {
        setPostcodeInfo(null)
        setPostcodeError('Postcode not found — please check and try again')
      }
    } catch {
      setPostcodeInfo(null)
    } finally {
      setPostcodeChecking(false)
    }
  }

  const canNext = [
    !!projectType,
    !!(address && postcode && !postcodeError && !postcodeChecking),
    description.length >= 10,
    !!status,
  ][step]

  function handleNext() {
    if (step < 3) setStep(step + 1)
    else setSubmitted(true)
  }

  if (submitted) {
    return (
      <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
        <div style={{ textAlign: 'center', maxWidth: 400 }}>
          <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(16,185,129,0.1)', border: '2px solid #10B981', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
            <Check style={{ color: '#10B981' }} className="w-7 h-7" />
          </div>
          <h1 className="font-display" style={{ color: 'var(--color-text)', fontSize: '1.5rem', marginBottom: 8 }}>Project created</h1>
          <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: 20 }}>
            Your Project Passport for <strong style={{ color: 'var(--color-text)' }}>{address}</strong>
            {postcodeInfo?.admin_district && <span>, {postcodeInfo.admin_district}</span>} is ready.
          </p>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/passport" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'var(--amber)', color: '#fff', fontWeight: 700, padding: '10px 20px', borderRadius: 8, textDecoration: 'none' }}>
              Open Project Passport
            </Link>
            <Link href="/scope-builder" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'var(--color-bg-raised)', color: 'var(--color-text)', fontWeight: 600, padding: '10px 20px', borderRadius: 8, textDecoration: 'none', border: '1px solid var(--color-border)' }}>
              Build scope of works
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div style={{ backgroundColor: 'var(--color-bg)', minHeight: '100vh' }}>
      <div style={{ borderBottom: '1px solid var(--color-border)', background: 'var(--color-bg-surface)', padding: '10px 0' }}>
        <div className="container mx-auto" style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.8rem' }}>
          <Link href="/dashboard" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>Dashboard</Link>
          <ChevronRight style={{ color: 'var(--color-text-muted)' }} className="w-3 h-3" />
          <Link href="/passport" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>Projects</Link>
          <ChevronRight style={{ color: 'var(--color-text-muted)' }} className="w-3 h-3" />
          <span style={{ color: 'var(--color-text)' }}>New project</span>
        </div>
      </div>

      <div className="container mx-auto" style={{ maxWidth: 600, padding: '2.5rem 1rem' }}>
        <h1 className="font-display" style={{ fontSize: '1.75rem', color: 'var(--color-text)', marginBottom: '0.5rem' }}>Create your project</h1>
        <p style={{ color: 'var(--color-text-secondary)', marginBottom: '2rem' }}>This becomes your Project Passport — one place for everything, start to completion.</p>

        <div style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
            {STEP_LABELS.map((l, i) => (
              <span key={l} style={{ fontSize: '0.72rem', color: i <= step ? 'var(--color-text)' : 'var(--color-text-muted)', fontWeight: i === step ? 700 : 400 }}>
                {l}
              </span>
            ))}
          </div>
          <div style={{ height: 4, background: 'var(--color-bg-raised)', borderRadius: 2, overflow: 'hidden' }}>
            <div style={{ height: '100%', background: 'var(--amber)', borderRadius: 2, width: `${((step + 1) / 4) * 100}%`, transition: 'width 0.3s ease' }} />
          </div>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.75rem', marginTop: 6 }}>Step {step + 1} of 4</p>
        </div>

        {step === 0 && (
          <div>
            <h2 className="font-display" style={{ fontSize: '1.1rem', color: 'var(--color-text)', marginBottom: '1rem' }}>What type of project is this?</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: 10 }}>
              {PROJECT_TYPES.map(({ id, label, icon: Icon, desc }) => (
                <button
                  key={id}
                  onClick={() => setProjectType(id)}
                  style={{
                    display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 6, padding: '14px',
                    borderRadius: 10, border: `2px solid ${projectType === id ? 'var(--amber)' : 'var(--color-border)'}`,
                    background: projectType === id ? 'var(--amber-subtle)' : 'var(--color-bg-surface)',
                    cursor: 'pointer', textAlign: 'left', transition: 'border-color 0.15s, background 0.15s',
                  }}
                >
                  <Icon style={{ color: projectType === id ? 'var(--amber)' : 'var(--color-text-muted)' }} className="w-5 h-5" />
                  <span style={{ color: 'var(--color-text)', fontWeight: 700, fontSize: '0.875rem' }}>{label}</span>
                  <span style={{ color: 'var(--color-text-muted)', fontSize: '0.72rem', lineHeight: 1.3 }}>{desc}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 1 && (
          <div>
            <h2 className="font-display" style={{ fontSize: '1.1rem', color: 'var(--color-text)', marginBottom: '1rem' }}>What is the property address?</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div>
                <label style={{ color: 'var(--color-text-secondary)', fontSize: '0.8rem', fontWeight: 600, display: 'block', marginBottom: 4 }}>Street address</label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="e.g. 14 Kestrel Road, Brixton"
                  style={{ width: '100%', background: 'var(--color-bg-surface)', border: '1px solid var(--color-border)', borderRadius: 8, padding: '10px 14px', color: 'var(--color-text)', fontSize: '0.9rem', outline: 'none', boxSizing: 'border-box' }}
                />
              </div>
              <div>
                <label style={{ color: 'var(--color-text-secondary)', fontSize: '0.8rem', fontWeight: 600, display: 'block', marginBottom: 4 }}>Postcode</label>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
                  <input
                    type="text"
                    value={postcode}
                    onChange={(e) => {
                      const val = e.target.value.toUpperCase()
                      setPostcode(val)
                      setPostcodeInfo(null)
                      setPostcodeError('')
                    }}
                    onBlur={() => checkPostcode(postcode)}
                    placeholder="e.g. SW2 3AA"
                    style={{ width: 180, background: 'var(--color-bg-surface)', border: `1px solid ${postcodeError ? '#EF4444' : 'var(--color-border)'}`, borderRadius: 8, padding: '10px 14px', color: 'var(--color-text)', fontSize: '0.9rem', outline: 'none' }}
                  />
                  {postcodeChecking && <Loader2 style={{ color: 'var(--amber)' }} className="w-4 h-4 animate-spin" />}
                  {postcodeInfo && !postcodeChecking && (
                    <span style={{ color: '#10B981', fontSize: '0.8rem', fontWeight: 600 }}>✓ {postcodeInfo.admin_district}{postcodeInfo.region && postcodeInfo.region !== postcodeInfo.admin_district ? `, ${postcodeInfo.region}` : ''}</span>
                  )}
                </div>
                {postcodeError && <p style={{ color: '#EF4444', fontSize: '0.75rem', marginTop: 4 }}>{postcodeError}</p>}
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 className="font-display" style={{ fontSize: '1.1rem', color: 'var(--color-text)', marginBottom: '0.5rem' }}>Briefly describe your project</h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.82rem', marginBottom: '1rem' }}>What are you hoping to achieve? Include size, any special requirements, or design intent.</p>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={5}
              placeholder="e.g. We want to extend the rear of our Victorian terrace to create an open-plan kitchen-diner. Approximately 4m × 5m, with bifold doors onto the garden..."
              style={{ width: '100%', background: 'var(--color-bg-surface)', border: '1px solid var(--color-border)', borderRadius: 8, padding: '12px 14px', color: 'var(--color-text)', fontSize: '0.875rem', outline: 'none', resize: 'vertical', lineHeight: 1.5, boxSizing: 'border-box' }}
            />
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.72rem', marginTop: 4 }}>{description.length} characters — minimum 10</p>
          </div>
        )}

        {step === 3 && (
          <div>
            <h2 className="font-display" style={{ fontSize: '1.1rem', color: 'var(--color-text)', marginBottom: '1rem' }}>Where are you right now?</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {STATUSES.map(({ id, label, desc }) => (
                <button
                  key={id}
                  onClick={() => setStatus(id)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 12, padding: '14px 16px',
                    borderRadius: 10, border: `2px solid ${status === id ? 'var(--amber)' : 'var(--color-border)'}`,
                    background: status === id ? 'var(--amber-subtle)' : 'var(--color-bg-surface)',
                    cursor: 'pointer', textAlign: 'left', transition: 'border-color 0.15s, background 0.15s',
                  }}
                >
                  <div style={{ width: 20, height: 20, borderRadius: '50%', border: `2px solid ${status === id ? 'var(--amber)' : 'var(--color-border)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    {status === id && <div style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--amber)' }} />}
                  </div>
                  <div>
                    <p style={{ color: 'var(--color-text)', fontWeight: 700, fontSize: '0.9rem', margin: '0 0 2px' }}>{label}</p>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.78rem', margin: 0 }}>{desc}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
          <button
            onClick={() => setStep(step - 1)}
            disabled={step === 0}
            style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'transparent', border: '1px solid var(--color-border)', borderRadius: 8, padding: '10px 16px', color: 'var(--color-text-secondary)', cursor: step === 0 ? 'not-allowed' : 'pointer', fontSize: '0.875rem', opacity: step === 0 ? 0.4 : 1 }}
          >
            <ChevronLeft className="w-4 h-4" /> Back
          </button>
          <button
            onClick={handleNext}
            disabled={!canNext}
            style={{ display: 'flex', alignItems: 'center', gap: 6, background: canNext ? 'var(--amber)' : 'var(--color-bg-raised)', border: 'none', borderRadius: 8, padding: '10px 20px', color: canNext ? '#fff' : 'var(--color-text-muted)', cursor: canNext ? 'pointer' : 'not-allowed', fontSize: '0.875rem', fontWeight: 700, transition: 'background 0.15s' }}
          >
            {step === 3 ? 'Create project' : 'Next'} <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
