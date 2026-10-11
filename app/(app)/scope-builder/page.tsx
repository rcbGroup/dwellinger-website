'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Home, Layers, Wrench, ChefHat, Bath, HardHat, PenLine,
  ChevronLeft, ChevronRight, Check, Download, Folder, Search,
  CheckSquare, Square,
} from 'lucide-react'

const PROJECT_TYPES = [
  { id: 'extension', label: 'Extension', icon: Home, desc: 'Rear, side return, wrap-around' },
  { id: 'loft', label: 'Loft Conversion', icon: Layers, desc: 'Dormer, hip-to-gable, mansard' },
  { id: 'refurbishment', label: 'Refurbishment', icon: PenLine, desc: 'Full or partial renovation' },
  { id: 'kitchen', label: 'Kitchen', icon: ChefHat, desc: 'New kitchen fit-out or extension' },
  { id: 'bathroom', label: 'Bathroom', icon: Bath, desc: 'En-suite, family bathroom, WC' },
  { id: 'structural', label: 'Structural', icon: HardHat, desc: 'Beam, opening, underpinning' },
  { id: 'other', label: 'Other', icon: Wrench, desc: 'Conversion, bespoke works' },
]

const DESIGN_STATUSES = [
  { id: 'none', label: 'No drawings yet', desc: 'Still at the idea stage' },
  { id: 'concept', label: 'Concept drawings', desc: 'Rough sketches or early designs' },
  { id: 'planning', label: 'Planning drawings', desc: 'Planning application drawings' },
  { id: 'technical', label: 'Full technical drawings', desc: 'Building Regs / working drawings' },
]

const SPEC_LEVELS = [
  { id: 'standard', label: 'Standard', range: '£ — ££', desc: 'Builder-grade finishes, standard fittings' },
  { id: 'mid', label: 'Mid-range', range: '££ — £££', desc: 'Quality fixtures, some bespoke elements' },
  { id: 'high', label: 'High-spec', range: '£££ — ££££', desc: 'Premium materials, bespoke joinery' },
  { id: 'luxury', label: 'Luxury', range: '££££+', desc: 'Bespoke everything, no compromises' },
]

const REQUIREMENTS = [
  'Open plan layout', 'Bifold/sliding doors', 'Roof lantern/skylight',
  'Underfloor heating', 'Smart home', 'EV charging', 'Solar panels',
  'Structural alterations', 'Loft stairs', 'New bathroom',
]

const TRADES: Record<string, string[]> = {
  extension: ['Groundworks & foundations', 'Structural steel & frame', 'Roof structure & covering', 'External walls & masonry', 'Windows & external doors', 'First fix mechanical & electrical', 'Insulation & thermal envelope', 'Plastering & dry lining', 'Second fix mechanical & electrical', 'Kitchen or utility fit-out', 'Internal joinery & finishes', 'Decoration & painting', 'External works & drainage'],
  loft: ['Structural alterations to existing roof', 'Dormer frame or roof structure', 'Roof covering, flashing & waterproofing', 'Velux or dormer windows', 'Loft stairs & landing alteration', 'First fix mechanical & electrical', 'Insulation & vapour barrier', 'Plastering & lining', 'Second fix M&E', 'En-suite or bathroom', 'Joinery & storage', 'Decoration', 'Fire safety & building control'],
  refurbishment: ['Strip-out & demolition', 'Structural repairs or alterations', 'Damp treatment & remediation', 'First fix mechanical & electrical', 'Plumbing & heating', 'Insulation', 'Plastering & boarding', 'Second fix M&E', 'Kitchen fit-out', 'Bathroom fit-out', 'Flooring', 'Joinery & doors', 'Decoration'],
  kitchen: ['Strip-out of existing kitchen', 'Structural opening (if required)', 'First fix plumbing & electrical', 'Plastering & preparation', 'Kitchen unit installation', 'Worktop & splashback fitting', 'Appliance connection', 'Second fix electrics', 'Flooring', 'Decoration & finishing'],
  bathroom: ['Strip-out of existing bathroom', 'First fix plumbing & electrical', 'Waterproofing & tanking', 'Tiling preparation', 'Sanitary ware installation', 'Tiling', 'Heated towel rail', 'Second fix electrics & extraction', 'Flooring', 'Decoration & accessories'],
  structural: ['Design & engineering', 'Temporary works & propping', 'Structural alteration works', 'Steel beam installation', 'Masonry making good', 'Plastering & finishing', 'Decoration'],
  other: ['Preliminaries & site setup', 'Structural & groundworks', 'Mechanical & electrical services', 'Plastering & boarding', 'Finishes & decoration', 'External works'],
}

const PROFESSIONALS: Record<string, string[]> = {
  extension: ['Architect (planning and design)', 'Structural engineer', 'Principal contractor (CDM 2015)', 'Building Control inspector'],
  loft: ['Architect or technician', 'Structural engineer', 'Building Control inspector'],
  refurbishment: ['Project manager (if full refurb)', 'Building Control inspector (if structural)'],
  kitchen: [],
  bathroom: [],
  structural: ['Structural engineer (essential)', 'Building Control inspector'],
  other: ['Architect or technician', 'Structural engineer', 'Building Control inspector'],
}

const DOCUMENTS: Record<string, string[]> = {
  extension: ['Planning permission (or permitted development confirmation)', 'Building Regulations approval', 'Structural calculations', 'Contract with principal contractor', 'Party Wall Agreement (if applicable)'],
  loft: ['Building Regulations approval', 'Structural calculations', 'Party Wall Agreement (if applicable)', 'Planning permission (if dormer on front elevation)'],
  refurbishment: ['Schedule of works', 'CDM notification (if applicable)', 'Building Regs (if structural)'],
  kitchen: ['Gas Safe certificate (if gas)', 'NICEIC certificate (electrical)'],
  bathroom: ['NICEIC certificate (electrical)', 'Gas Safe certificate (if applicable)'],
  structural: ['Structural engineer report', 'Building Regulations approval', 'Party Wall Award (if applicable)'],
  other: ['Schedule of works', 'Building Regs (if applicable)'],
}

const STEPS = ['Project type', 'Project details', 'Design status', 'Spec level', 'Key requirements', 'Additional notes']

export default function ScopeBuilderPage() {
  const [step, setStep] = useState(0)
  const [projectType, setProjectType] = useState('')
  const [address, setAddress] = useState('')
  const [size, setSize] = useState('')
  const [storeys, setStoreys] = useState('')
  const [designStatus, setDesignStatus] = useState('')
  const [specLevel, setSpecLevel] = useState('')
  const [requirements, setRequirements] = useState<string[]>([])
  const [notes, setNotes] = useState('')
  const [generated, setGenerated] = useState(false)

  function toggleReq(r: string) {
    setRequirements((prev) => prev.includes(r) ? prev.filter((x) => x !== r) : [...prev, r])
  }

  const canNext = [!!projectType, !!(address && size), !!designStatus, !!specLevel, true, true][step]

  function handleNext() {
    if (step < 5) setStep(step + 1)
    else setGenerated(true)
  }

  const trades = TRADES[projectType] || TRADES.other
  const professionals = PROFESSIONALS[projectType] || []
  const documents = DOCUMENTS[projectType] || []
  const typeLabel = PROJECT_TYPES.find((t) => t.id === projectType)?.label || 'Project'
  const specLabel = SPEC_LEVELS.find((s) => s.id === specLevel)?.label || ''

  if (generated) {
    return (
      <div style={{ backgroundColor: 'var(--color-bg)', minHeight: '100vh' }}>
        <div style={{ borderBottom: '1px solid var(--color-border)', background: 'var(--color-bg-surface)', padding: '10px 0' }}>
          <div className="container mx-auto" style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.8rem' }}>
            <Link href="/dashboard" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>Dashboard</Link>
            <ChevronRight style={{ color: 'var(--color-text-muted)' }} className="w-3 h-3" />
            <span style={{ color: 'var(--color-text)' }}>Scope Builder — Result</span>
          </div>
        </div>
        <div className="container mx-auto" style={{ maxWidth: 700, padding: '2rem 1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: '1.5rem' }}>
            <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(16,185,129,0.1)', border: '2px solid #10B981', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Check style={{ color: '#10B981' }} className="w-4 h-4" />
            </div>
            <div>
              <h1 className="font-display" style={{ fontSize: '1.5rem', color: 'var(--color-text)', margin: 0 }}>Scope of Works — {typeLabel}</h1>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', margin: 0 }}>{address || 'Address not specified'} · {specLabel} spec</p>
            </div>
          </div>

          <div className="card" style={{ padding: '1.25rem', marginBottom: '1rem' }}>
            <h2 style={{ color: 'var(--color-text)', fontSize: '0.95rem', fontWeight: 700, marginBottom: 10 }}>Project Brief</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: 10 }}>
              {[
                { label: 'Project type', value: typeLabel },
                { label: 'Approx size', value: size ? `${size} m²` : 'TBC' },
                { label: 'Storeys affected', value: storeys || 'TBC' },
                { label: 'Design status', value: DESIGN_STATUSES.find((d) => d.id === designStatus)?.label || 'TBC' },
                { label: 'Specification', value: specLabel },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '0.72rem', margin: '0 0 2px' }}>{label}</p>
                  <p style={{ color: 'var(--color-text)', fontSize: '0.85rem', fontWeight: 600, margin: 0 }}>{value}</p>
                </div>
              ))}
            </div>
            {requirements.length > 0 && (
              <div style={{ marginTop: 12 }}>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.72rem', margin: '0 0 6px' }}>Key requirements</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {requirements.map((r) => (
                    <span key={r} style={{ background: 'var(--color-bg-raised)', color: 'var(--color-text-secondary)', fontSize: '0.75rem', padding: '2px 10px', borderRadius: 20 }}>{r}</span>
                  ))}
                </div>
              </div>
            )}
            {notes && (
              <div style={{ marginTop: 12 }}>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.72rem', margin: '0 0 4px' }}>Notes</p>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.82rem', margin: 0 }}>{notes}</p>
              </div>
            )}
          </div>

          <div className="card" style={{ padding: '1.25rem', marginBottom: '1rem' }}>
            <h2 style={{ color: 'var(--color-text)', fontSize: '0.95rem', fontWeight: 700, marginBottom: 12 }}>Scope of Works</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {trades.map((trade, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                  <Check style={{ color: 'var(--amber)', flexShrink: 0, marginTop: 1 }} className="w-3.5 h-3.5" />
                  <span style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem' }}>{trade}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="card" style={{ padding: '1.25rem', marginBottom: '1rem' }}>
            <h2 style={{ color: 'var(--color-text)', fontSize: '0.95rem', fontWeight: 700, marginBottom: 10 }}>Assumptions</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {['Site is accessible for deliveries and skips', 'Existing structural elements are in satisfactory condition unless noted', 'Ground conditions are suitable without abnormal piling or drainage', 'Planning conditions have been discharged prior to commencement', 'Client will confirm material selections within agreed lead times'].map((a, i) => (
                <div key={i} style={{ display: 'flex', gap: 8 }}>
                  <span style={{ color: 'var(--color-text-muted)', fontSize: '0.82rem' }}>-</span>
                  <span style={{ color: 'var(--color-text-secondary)', fontSize: '0.82rem' }}>{a}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="card" style={{ padding: '1.25rem', marginBottom: '1rem' }}>
            <h2 style={{ color: 'var(--color-text)', fontSize: '0.95rem', fontWeight: 700, marginBottom: 10 }}>Exclusions</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {['Floor coverings (carpet, rugs)', 'Furniture and freestanding items', 'Specialist art installation', 'Window dressings and blinds', 'Items marked Client Supplied (CS) in the schedule', 'Landscaping and garden works (unless specified)', 'Party wall surveyor fees', 'Statutory authority fees (planning, building control)'].map((e, i) => (
                <div key={i} style={{ display: 'flex', gap: 8 }}>
                  <span style={{ color: 'var(--color-text-muted)', fontSize: '0.82rem' }}>-</span>
                  <span style={{ color: 'var(--color-text-secondary)', fontSize: '0.82rem' }}>{e}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="card" style={{ padding: '1.25rem', marginBottom: '1rem' }}>
            <h2 style={{ color: 'var(--color-text)', fontSize: '0.95rem', fontWeight: 700, marginBottom: 8 }}>Client Supplied Items</h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', fontStyle: 'italic' }}>To be confirmed during tender — list items here when known (labour-only items).</p>
          </div>

          {professionals.length > 0 && (
            <div className="card" style={{ padding: '1.25rem', marginBottom: '1rem' }}>
              <h2 style={{ color: 'var(--color-text)', fontSize: '0.95rem', fontWeight: 700, marginBottom: 10 }}>Required Professionals</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {professionals.map((p, i) => (
                  <div key={i} style={{ display: 'flex', gap: 8 }}>
                    <Check style={{ color: 'var(--amber)', flexShrink: 0 }} className="w-3.5 h-3.5" />
                    <span style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem' }}>{p}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {documents.length > 0 && (
            <div className="card" style={{ padding: '1.25rem', marginBottom: '1.5rem' }}>
              <h2 style={{ color: 'var(--color-text)', fontSize: '0.95rem', fontWeight: 700, marginBottom: 10 }}>Required Documents</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {documents.map((d, i) => (
                  <div key={i} style={{ display: 'flex', gap: 8 }}>
                    <Check style={{ color: 'var(--amber)', flexShrink: 0 }} className="w-3.5 h-3.5" />
                    <span style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem' }}>{d}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <button style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'var(--amber)', color: '#fff', fontWeight: 700, padding: '10px 18px', borderRadius: 8, border: 'none', cursor: 'pointer', fontSize: '0.875rem' }}>
              <Download className="w-4 h-4" /> Download PDF
            </button>
            <Link href="/passport" style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'var(--color-bg-raised)', color: 'var(--color-text)', fontWeight: 600, padding: '10px 18px', borderRadius: 8, textDecoration: 'none', fontSize: '0.875rem', border: '1px solid var(--color-border)' }}>
              <Folder className="w-4 h-4" /> Save to Project
            </Link>
            <Link href="/contractors" style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'transparent', color: 'var(--color-text-secondary)', fontWeight: 600, padding: '10px 18px', borderRadius: 8, textDecoration: 'none', fontSize: '0.875rem', border: '1px solid var(--color-border)' }}>
              <Search className="w-4 h-4" /> Find Contractors
            </Link>
          </div>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.75rem', marginTop: 10 }}>
            PDF download and project saving require a Dwellinger account.{' '}
            <Link href="/register" style={{ color: 'var(--amber)' }}>Register free</Link>
          </p>
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
          <span style={{ color: 'var(--color-text)' }}>Scope Builder</span>
        </div>
      </div>
      <div className="container mx-auto" style={{ maxWidth: 640, padding: '2.5rem 1rem' }}>
        <h1 className="font-display" style={{ fontSize: '1.75rem', color: 'var(--color-text)', marginBottom: '0.5rem' }}>Scope Builder</h1>
        <p style={{ color: 'var(--color-text-secondary)', marginBottom: '2rem' }}>Answer 6 questions. Get a complete Scope of Works ready for tendering.</p>

        <div style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'flex', gap: 4, marginBottom: 8 }}>
            {STEPS.map((l, i) => (
              <div key={l} style={{ flex: 1, height: 4, borderRadius: 2, background: i <= step ? 'var(--amber)' : 'var(--color-bg-raised)', transition: 'background 0.2s' }} />
            ))}
          </div>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.75rem' }}>Step {step + 1} of 6 — {STEPS[step]}</p>
        </div>

        {step === 0 && (
          <div>
            <h2 className="font-display" style={{ fontSize: '1.1rem', color: 'var(--color-text)', marginBottom: '1rem' }}>What type of project?</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: 10 }}>
              {PROJECT_TYPES.map(({ id, label, icon: Icon, desc }) => (
                <button key={id} onClick={() => setProjectType(id)} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 6, padding: '12px', borderRadius: 10, border: projectType === id ? '2px solid var(--amber)' : '2px solid var(--color-border)', background: projectType === id ? 'var(--amber-subtle)' : 'var(--color-bg-surface)', cursor: 'pointer', textAlign: 'left' }}>
                  <Icon style={{ color: projectType === id ? 'var(--amber)' : 'var(--color-text-muted)' }} className="w-5 h-5" />
                  <span style={{ color: 'var(--color-text)', fontWeight: 700, fontSize: '0.85rem' }}>{label}</span>
                  <span style={{ color: 'var(--color-text-muted)', fontSize: '0.7rem', lineHeight: 1.3 }}>{desc}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 1 && (
          <div>
            <h2 className="font-display" style={{ fontSize: '1.1rem', color: 'var(--color-text)', marginBottom: '1rem' }}>Project details</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div>
                <label style={{ color: 'var(--color-text-secondary)', fontSize: '0.8rem', fontWeight: 600, display: 'block', marginBottom: 4 }}>Address or postcode</label>
                <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="e.g. 14 Kestrel Road, SW2" style={{ width: '100%', background: 'var(--color-bg-surface)', border: '1px solid var(--color-border)', borderRadius: 8, padding: '10px 14px', color: 'var(--color-text)', fontSize: '0.875rem', outline: 'none', boxSizing: 'border-box' }} />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                <div>
                  <label style={{ color: 'var(--color-text-secondary)', fontSize: '0.8rem', fontWeight: 600, display: 'block', marginBottom: 4 }}>Approx size (m²)</label>
                  <input type="number" value={size} onChange={(e) => setSize(e.target.value)} placeholder="e.g. 25" style={{ width: '100%', background: 'var(--color-bg-surface)', border: '1px solid var(--color-border)', borderRadius: 8, padding: '10px 14px', color: 'var(--color-text)', fontSize: '0.875rem', outline: 'none', boxSizing: 'border-box' }} />
                </div>
                <div>
                  <label style={{ color: 'var(--color-text-secondary)', fontSize: '0.8rem', fontWeight: 600, display: 'block', marginBottom: 4 }}>Storeys affected</label>
                  <select value={storeys} onChange={(e) => setStoreys(e.target.value)} style={{ width: '100%', background: 'var(--color-bg-surface)', border: '1px solid var(--color-border)', borderRadius: 8, padding: '10px 14px', color: 'var(--color-text)', fontSize: '0.875rem', outline: 'none', boxSizing: 'border-box' }}>
                    <option value="">Select...</option>
                    {['Ground floor only', 'First floor only', 'Ground + First', 'All floors', 'Loft only'].map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 className="font-display" style={{ fontSize: '1.1rem', color: 'var(--color-text)', marginBottom: '1rem' }}>What drawings do you have?</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {DESIGN_STATUSES.map(({ id, label, desc }) => (
                <button key={id} onClick={() => setDesignStatus(id)} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px 16px', borderRadius: 10, border: designStatus === id ? '2px solid var(--amber)' : '2px solid var(--color-border)', background: designStatus === id ? 'var(--amber-subtle)' : 'var(--color-bg-surface)', cursor: 'pointer', textAlign: 'left' }}>
                  <div style={{ width: 20, height: 20, borderRadius: '50%', border: designStatus === id ? '2px solid var(--amber)' : '2px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    {designStatus === id && <div style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--amber)' }} />}
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

        {step === 3 && (
          <div>
            <h2 className="font-display" style={{ fontSize: '1.1rem', color: 'var(--color-text)', marginBottom: '1rem' }}>What specification level?</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {SPEC_LEVELS.map(({ id, label, range, desc }) => (
                <button key={id} onClick={() => setSpecLevel(id)} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px 16px', borderRadius: 10, border: specLevel === id ? '2px solid var(--amber)' : '2px solid var(--color-border)', background: specLevel === id ? 'var(--amber-subtle)' : 'var(--color-bg-surface)', cursor: 'pointer', textAlign: 'left' }}>
                  <div style={{ width: 20, height: 20, borderRadius: '50%', border: specLevel === id ? '2px solid var(--amber)' : '2px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    {specLevel === id && <div style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--amber)' }} />}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <p style={{ color: 'var(--color-text)', fontWeight: 700, fontSize: '0.9rem', margin: 0 }}>{label}</p>
                      <span style={{ background: 'var(--color-bg-raised)', color: 'var(--color-text-muted)', fontSize: '0.72rem', padding: '1px 8px', borderRadius: 20 }}>{range}</span>
                    </div>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.78rem', margin: '2px 0 0' }}>{desc}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 4 && (
          <div>
            <h2 className="font-display" style={{ fontSize: '1.1rem', color: 'var(--color-text)', marginBottom: '0.5rem' }}>Any key requirements?</h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.82rem', marginBottom: '1rem' }}>Select all that apply. (Optional)</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 8 }}>
              {REQUIREMENTS.map((r) => {
                const checked = requirements.includes(r)
                return (
                  <button key={r} onClick={() => toggleReq(r)} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 12px', borderRadius: 8, border: checked ? '1.5px solid var(--amber)' : '1.5px solid var(--color-border)', background: checked ? 'var(--amber-subtle)' : 'var(--color-bg-surface)', cursor: 'pointer', textAlign: 'left' }}>
                    {checked ? <CheckSquare style={{ color: 'var(--amber)', flexShrink: 0 }} className="w-4 h-4" /> : <Square style={{ color: 'var(--color-text-muted)', flexShrink: 0 }} className="w-4 h-4" />}
                    <span style={{ color: 'var(--color-text)', fontSize: '0.82rem' }}>{r}</span>
                  </button>
                )
              })}
            </div>
          </div>
        )}

        {step === 5 && (
          <div>
            <h2 className="font-display" style={{ fontSize: '1.1rem', color: 'var(--color-text)', marginBottom: '0.5rem' }}>Anything else to note?</h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.82rem', marginBottom: '1rem' }}>Access constraints, phasing, existing conditions. (Optional)</p>
            <textarea value={notes} onChange={(e) => setNotes(e.target.value)} rows={5} placeholder="e.g. Party wall to the east side. Access via back lane only..." style={{ width: '100%', background: 'var(--color-bg-surface)', border: '1px solid var(--color-border)', borderRadius: 8, padding: '12px 14px', color: 'var(--color-text)', fontSize: '0.875rem', outline: 'none', resize: 'vertical', lineHeight: 1.5, boxSizing: 'border-box' }} />
          </div>
        )}

        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
          <button onClick={() => setStep(step - 1)} disabled={step === 0} style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'transparent', border: '1px solid var(--color-border)', borderRadius: 8, padding: '10px 16px', color: 'var(--color-text-secondary)', cursor: step === 0 ? 'not-allowed' : 'pointer', fontSize: '0.875rem', opacity: step === 0 ? 0.4 : 1 }}>
            <ChevronLeft className="w-4 h-4" /> Back
          </button>
          <button onClick={handleNext} disabled={!canNext} style={{ display: 'flex', alignItems: 'center', gap: 6, background: canNext ? 'var(--amber)' : 'var(--color-bg-raised)', border: 'none', borderRadius: 8, padding: '10px 20px', color: canNext ? '#fff' : 'var(--color-text-muted)', cursor: canNext ? 'pointer' : 'not-allowed', fontSize: '0.875rem', fontWeight: 700 }}>
            {step === 5 ? 'Generate scope' : 'Next'} <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
