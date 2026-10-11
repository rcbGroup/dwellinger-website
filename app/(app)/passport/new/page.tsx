'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ChevronRight, ChevronLeft, Check, Home, Building2, Layers, Wrench, HardHat, PenLine, Loader2 } from 'lucide-react'
import { supabase } from '@/lib/supabase/client'

const PROJECT_TYPES = [
  { id: 'extension',     label: 'Extension',      icon: Home,      desc: 'Rear, side return, double storey' },
  { id: 'loft',          label: 'Loft Conversion', icon: Layers,    desc: 'Dormer, hip-to-gable, mansard' },
  { id: 'refurbishment', label: 'Refurbishment',   icon: PenLine,   desc: 'Full or partial renovation' },
  { id: 'new-build',     label: 'New Build',       icon: Building2, desc: 'Detached, semi, terrace, flat' },
  { id: 'other',         label: 'Other',           icon: Wrench,    desc: 'Structural, conversion, or bespoke' },
]

const STATUSES = [
  { id: 'idea',      label: 'Just an idea',      desc: 'Still exploring feasibility' },
  { id: 'drawings',  label: 'Have drawings',     desc: 'Concept or planning drawings exist' },
  { id: 'approved',  label: 'Planning approved', desc: 'Full planning permission granted' },
  { id: 'ready',     label: 'Ready to build',    desc: 'Ready to go to tender' },
]

const STEP_LABELS = ['Project type', 'Property address', 'Brief description', 'Current status']

function calcReadiness(type: string, address: string, postcode: string, description: string, status: string): number {
  let score = 10
  if (type)               score += 15
  if (address)            score += 10
  if (postcode)           score += 5
  if (description.length >= 20) score += 10
  if (status === 'drawings')  score += 5
  if (status === 'approved')  score += 15
  if (status === 'ready')     score += 20
  return Math.min(score, 75) // max 75% without docs/team
}

export default function NewPassportPage() {
  const router  = useRouter()
  const [step,             setStep]             = useState(0)
  const [projectType,      setProjectType]      = useState('')
  const [address,          setAddress]          = useState('')
  const [postcode,         setPostcode]         = useState('')
  const [postcodeInfo,     setPostcodeInfo]     = useState<{ admin_district?: string; region?: string } | null>(null)
  const [postcodeError,    setPostcodeError]    = useState('')
  const [postcodeChecking, setPostcodeChecking] = useState(false)
  const [description,      setDescription]      = useState('')
  const [status,           setStatus]           = useState('')
  const [saving,           setSaving]           = useState(false)
  const [saveError,        setSaveError]        = useState('')
  const [submitted,        setSubmitted]        = useState(false)

  async function checkPostcode(pc: string) {
    const clean = pc.replace(/\s/g, '').toUpperCase()
    if (clean.length < 5) { setPostcodeInfo(null); setPostcodeError(''); return }
    setPostcodeChecking(true)
    setPostcodeError('')
    try {
      const res  = await fetch(`https://api.postcodes.io/postcodes/${encodeURIComponent(clean)}`)
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

  async function handleNext() {
    if (step < 3) { setStep(step + 1); return }

    // Final step — save to Supabase
    setSaving(true)
    setSaveError('')

    const { data: { user }, error: authErr } = await supabase.auth.getUser()
    if (authErr || !user) {
      setSaveError('Session expired — please sign in again.')
      setSaving(false)
      return
    }

    const typeLabel = PROJECT_TYPES.find(p => p.id === projectType)?.label ?? projectType
    const name      = `${typeLabel} — ${address}`
    const readiness = calcReadiness(projectType, address, postcode, description, status)

    const { error } = await supabase.from('projects').insert({
      user_id:     user.id,
      name,
      type:        projectType,
      address,
      postcode,
      description,
      status,
      readiness,
    })

    if (error) {
      setSaveError(error.message)
      setSaving(false)
      return
    }

    setSaving(false)
    setSubmitted(true)

    // Redirect after 1.5 s
    setTimeout(() => router.push('/passport'), 1500)
  }

  /* ─── Success screen ─── */
  if (submitted) {
    return (
      <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
        <div style={{ textAlign: 'center', maxWidth: 400 }}>
          <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(16,185,129,0.1)', border: '2px solid #10B981', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
            <Check style={{ color: '#10B981' }} className="w-7 h-7" />
          </div>
          <h1 className="font-display" style={{ color: 'var(--color-text)', fontSize: '1.5rem', marginBottom: 8 }}>Project created</h1>
          <p style={{ color: 'var(--color-text-secondary)', marginBottom: 24, lineHeight: 1.6 }}>
            Your Project Passport is ready. Taking you there now…
          </p>
          <Loader2 style={{ color: 'var(--amber)', margin: '0 auto' }} className="w-5 h-5 animate-spin" />
        </div>
      </div>
    )
  }

  /* ─── Wizard ─── */
  const typeLabel = PROJECT_TYPES.find(p => p.id === projectType)?.label

  return (
    <div style={{ backgroundColor: 'var(--color-bg)', minHeight: '100vh' }}>
      {/* Breadcrumb */}
      <div style={{ borderBottom: '1px solid var(--color-border)', background: 'var(--color-bg-surface)', padding: '10px 0' }}>
        <div className="container mx-auto" style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.8rem' }}>
          <Link href="/dashboard"  style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>Dashboard</Link>
          <ChevronRight style={{ color: 'var(--color-text-muted)' }} className="w-3 h-3" />
          <Link href="/passport"   style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>Projects</Link>
          <ChevronRight style={{ color: 'var(--color-text-muted)' }} className="w-3 h-3" />
          <span style={{ color: 'var(--color-text)' }}>New project</span>
        </div>
      </div>

      <div className="container mx-auto" style={{ maxWidth: 560, padding: '2.5rem 1rem' }}>
        {/* Progress */}
        <div style={{ display: 'flex', gap: 6, marginBottom: '2rem' }}>
          {STEP_LABELS.map((label, i) => (
            <div key={i} style={{ flex: 1 }}>
              <div style={{ height: 4, borderRadius: 2, background: i <= step ? 'var(--amber)' : 'var(--color-bg-raised)', transition: 'background 0.2s' }} />
              <p style={{ fontSize: '0.68rem', color: i === step ? 'var(--amber)' : 'var(--color-text-muted)', marginTop: 4, fontWeight: i === step ? 700 : 400 }}>{label}</p>
            </div>
          ))}
        </div>

        {/* Step 0: Project type */}
        {step === 0 && (
          <div>
            <h1 className="font-display" style={{ color: 'var(--color-text)', fontSize: '1.4rem', marginBottom: '0.4rem' }}>What type of project?</h1>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem', fontSize: '0.875rem' }}>Select the category that best describes your build.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {PROJECT_TYPES.map(({ id, label, icon: Icon, desc }) => (
                <button
                  key={id}
                  onClick={() => setProjectType(id)}
                  style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 16px', borderRadius: 10, border: `1.5px solid ${projectType === id ? 'var(--amber)' : 'var(--color-border)'}`, background: projectType === id ? 'rgba(196,119,59,0.08)' : 'var(--color-bg-surface)', cursor: 'pointer', textAlign: 'left', transition: 'border 0.15s, background 0.15s' }}
                >
                  <Icon style={{ color: projectType === id ? 'var(--amber)' : 'var(--color-text-muted)', flexShrink: 0 }} className="w-5 h-5" />
                  <div>
                    <p style={{ color: 'var(--color-text)', fontWeight: 700, fontSize: '0.9rem', margin: '0 0 2px' }}>{label}</p>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.78rem', margin: 0 }}>{desc}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 1: Address */}
        {step === 1 && (
          <div>
            <h1 className="font-display" style={{ color: 'var(--color-text)', fontSize: '1.4rem', marginBottom: '0.4rem' }}>Where is the property?</h1>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem', fontSize: '0.875rem' }}>We use the postcode to look up planning data and local context.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div>
                <label style={{ display: 'block', color: 'var(--color-text-secondary)', fontSize: '0.82rem', fontWeight: 600, marginBottom: 6 }}>Street address</label>
                <input
                  value={address}
                  onChange={e => setAddress(e.target.value)}
                  placeholder="14 Kestrel Road, Brixton"
                  style={{ width: '100%', padding: '10px 12px', borderRadius: 8, border: '1px solid var(--color-border)', background: 'var(--color-bg-surface)', color: 'var(--color-text)', fontSize: '0.9rem', boxSizing: 'border-box' }}
                />
              </div>
              <div>
                <label style={{ display: 'block', color: 'var(--color-text-secondary)', fontSize: '0.82rem', fontWeight: 600, marginBottom: 6 }}>Postcode</label>
                <input
                  value={postcode}
                  onChange={e => { setPostcode(e.target.value); checkPostcode(e.target.value) }}
                  placeholder="SW2 3AA"
                  style={{ width: '100%', padding: '10px 12px', borderRadius: 8, border: `1px solid ${postcodeError ? '#ef4444' : 'var(--color-border)'}`, background: 'var(--color-bg-surface)', color: 'var(--color-text)', fontSize: '0.9rem', boxSizing: 'border-box' }}
                />
                {postcodeChecking && <p style={{ color: 'var(--color-text-muted)', fontSize: '0.78rem', marginTop: 4 }}>Checking…</p>}
                {postcodeError   && <p style={{ color: '#ef4444',              fontSize: '0.78rem', marginTop: 4 }}>{postcodeError}</p>}
                {postcodeInfo    && <p style={{ color: '#10B981',              fontSize: '0.78rem', marginTop: 4 }}>{postcodeInfo.admin_district}{postcodeInfo.region ? `, ${postcodeInfo.region}` : ''}</p>}
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Description */}
        {step === 2 && (
          <div>
            <h1 className="font-display" style={{ color: 'var(--color-text)', fontSize: '1.4rem', marginBottom: '0.4rem' }}>
              Describe your {typeLabel ?? 'project'}
            </h1>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem', fontSize: '0.875rem' }}>A brief description helps us generate your scope and match the right contractors.</p>
            <textarea
              value={description}
              onChange={e => setDescription(e.target.value)}
              rows={5}
              placeholder="e.g. Single-storey rear extension, approximately 5m × 4m, open-plan kitchen-diner. Currently at planning stage, drawings available."
              style={{ width: '100%', padding: '12px', borderRadius: 8, border: '1px solid var(--color-border)', background: 'var(--color-bg-surface)', color: 'var(--color-text)', fontSize: '0.9rem', resize: 'vertical', lineHeight: 1.6, boxSizing: 'border-box' }}
            />
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.72rem', marginTop: 4 }}>{description.length} chars — minimum 10</p>
          </div>
        )}

        {/* Step 3: Status */}
        {step === 3 && (
          <div>
            <h1 className="font-display" style={{ color: 'var(--color-text)', fontSize: '1.4rem', marginBottom: '0.4rem' }}>Where are you right now?</h1>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem', fontSize: '0.875rem' }}>This helps us show the right tools and next steps for your stage.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {STATUSES.map(({ id, label, desc }) => (
                <button
                  key={id}
                  onClick={() => setStatus(id)}
                  style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 16px', borderRadius: 10, border: `1.5px solid ${status === id ? 'var(--amber)' : 'var(--color-border)'}`, background: status === id ? 'rgba(196,119,59,0.08)' : 'var(--color-bg-surface)', cursor: 'pointer', textAlign: 'left', transition: 'border 0.15s' }}
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
            {saveError && <p style={{ color: '#ef4444', fontSize: '0.82rem', marginTop: '1rem', padding: '10px 14px', background: 'rgba(239,68,68,0.08)', borderRadius: 8 }}>{saveError}</p>}
          </div>
        )}

        {/* Navigation */}
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
            disabled={!canNext || saving}
            style={{ display: 'flex', alignItems: 'center', gap: 6, background: canNext && !saving ? 'var(--amber)' : 'var(--color-bg-raised)', border: 'none', borderRadius: 8, padding: '10px 20px', color: canNext && !saving ? '#fff' : 'var(--color-text-muted)', cursor: canNext && !saving ? 'pointer' : 'not-allowed', fontSize: '0.875rem', fontWeight: 700, transition: 'background 0.15s' }}
          >
            {saving ? <><Loader2 className="w-4 h-4 animate-spin" /> Saving…</> : <>{step === 3 ? 'Create project' : 'Next'} <ChevronRight className="w-4 h-4" /></>}
          </button>
        </div>
      </div>
    </div>
  )
}
