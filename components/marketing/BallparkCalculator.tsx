'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, ChevronLeft, RotateCcw } from 'lucide-react'

type PType = 'extension' | 'loft' | 'refurbishment' | 'kitchen' | 'bathroom' | 'structural'
type Spec = 'standard' | 'mid' | 'high' | 'luxury'
type Loc = 'central' | 'inner' | 'outer' | 'southeast' | 'rest'

const PROJECTS = [
  { id: 'extension' as PType,     emoji: '🏠', label: 'Extension',       desc: 'Rear, side return, double-storey' },
  { id: 'loft' as PType,          emoji: '🏗️', label: 'Loft Conversion',  desc: 'Dormer, mansard, hip-to-gable' },
  { id: 'refurbishment' as PType, emoji: '🔨', label: 'Refurbishment',    desc: 'Full or partial renovation' },
  { id: 'kitchen' as PType,       emoji: '🍳', label: 'Kitchen',          desc: 'New kitchen fit-out' },
  { id: 'bathroom' as PType,      emoji: '🚿', label: 'Bathroom',         desc: 'En-suite, bathroom, WC' },
  { id: 'structural' as PType,    emoji: '⚙️', label: 'Structural Works', desc: 'Beam, opening, underpinning' },
]

const LOFT_TYPES = [
  { id: 'velux',   label: 'Velux / Rooflight', desc: 'Roof windows only — no extension' },
  { id: 'dormer',  label: 'Dormer',             desc: 'Box dormer to rear roof' },
  { id: 'hip',     label: 'Hip-to-Gable',       desc: 'Hip roof converted to gable' },
  { id: 'mansard', label: 'Mansard',            desc: 'Full rear roof rebuild' },
]

const LOCS = [
  { id: 'central'   as Loc, label: 'Central London',  desc: 'EC, WC, W1, SW1',          mult: 1.30 },
  { id: 'inner'     as Loc, label: 'Inner London',     desc: 'E, N, NW, SE, SW, W zones', mult: 1.15 },
  { id: 'outer'     as Loc, label: 'Outer London',     desc: 'Zones 4–6, outer boroughs',  mult: 1.00 },
  { id: 'southeast' as Loc, label: 'South East',       desc: 'Surrey, Kent, Essex, Herts', mult: 0.92 },
  { id: 'rest'      as Loc, label: 'Rest of UK',       desc: 'Midlands, North, Scotland',  mult: 0.82 },
]

const SPECS = [
  { id: 'standard' as Spec, label: 'Standard',  desc: 'Builder-grade finishes' },
  { id: 'mid'      as Spec, label: 'Mid-range', desc: 'Quality fixtures, some bespoke' },
  { id: 'high'     as Spec, label: 'High-spec', desc: 'Premium materials throughout' },
  { id: 'luxury'   as Spec, label: 'Luxury',    desc: 'Bespoke everything' },
]

function calcRange(type: PType, spec: Spec, size: number, loftType: string, loc: Loc): [number, number] {
  const m = LOCS.find(l => l.id === loc)?.mult ?? 1
  let lo = 0, hi = 0
  if (type === 'extension') {
    const r: Record<Spec,[number,number]> = { standard:[2200,2800], mid:[2800,3600], high:[3600,4800], luxury:[4800,7000] }
    ;[lo, hi] = [r[spec][0]*size, r[spec][1]*size]
  } else if (type === 'loft') {
    const b: Record<string,Record<Spec,[number,number]>> = {
      velux:   { standard:[22000,35000], mid:[28000,45000], high:[40000,60000],  luxury:[55000,80000]  },
      dormer:  { standard:[45000,65000], mid:[60000,85000], high:[80000,115000], luxury:[110000,160000]},
      hip:     { standard:[50000,75000], mid:[68000,98000], high:[90000,130000], luxury:[120000,175000]},
      mansard: { standard:[80000,120000],mid:[105000,150000],high:[140000,195000],luxury:[180000,260000]},
    }
    ;[lo, hi] = b[loftType]?.[spec] ?? b.dormer[spec]
  } else if (type === 'refurbishment') {
    const r: Record<Spec,[number,number]> = { standard:[900,1300], mid:[1300,1900], high:[1900,2900], luxury:[2900,4200] }
    ;[lo, hi] = [r[spec][0]*size, r[spec][1]*size]
  } else if (type === 'kitchen') {
    const r: Record<Spec,[number,number]> = { standard:[15000,28000], mid:[28000,50000], high:[50000,85000], luxury:[85000,160000] }
    ;[lo, hi] = r[spec]
  } else if (type === 'bathroom') {
    const r: Record<Spec,[number,number]> = { standard:[6000,12000], mid:[12000,22000], high:[22000,38000], luxury:[38000,70000] }
    ;[lo, hi] = r[spec]
  } else {
    const r: Record<Spec,[number,number]> = { standard:[8000,18000], mid:[15000,28000], high:[25000,45000], luxury:[40000,70000] }
    ;[lo, hi] = r[spec]
  }
  return [Math.round(lo*m/1000)*1000, Math.round(hi*m/1000)*1000]
}

const fmt = (n: number) => '£' + n.toLocaleString('en-GB')

const card: React.CSSProperties = {
  background: 'rgba(255,255,255,0.05)',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: 10,
  padding: '16px 14px',
  cursor: 'pointer',
  textAlign: 'left',
  width: '100%',
  transition: 'border-color 0.2s, background 0.2s',
}
const cardActive: React.CSSProperties = {
  ...card,
  background: 'rgba(196,119,59,0.15)',
  border: '1px solid rgba(196,119,59,0.6)',
}
const backBtn: React.CSSProperties = {
  background: 'none', border: 'none',
  color: 'rgba(255,255,255,0.45)', cursor: 'pointer',
  display: 'flex', alignItems: 'center', gap: 4,
  fontSize: '0.82rem', marginBottom: 16, padding: 0,
}
const label = (s: string): React.CSSProperties => ({
  color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem',
  marginBottom: 14, letterSpacing: '0.02em',
})

export function BallparkCalculator() {
  const [step, setStep]         = useState(0)
  const [ptype, setPtype]       = useState<PType | null>(null)
  const [loftType, setLoftType] = useState('dormer')
  const [size, setSize]         = useState(30)
  const [loc, setLoc]           = useState<Loc>('inner')
  const [spec, setSpec]         = useState<Spec>('mid')

  const needsDetail = ptype === 'extension' || ptype === 'refurbishment' || ptype === 'loft'
  const totalSteps = needsDetail ? 4 : 3

  const next = () => setStep(s => s + 1)
  const back = () => setStep(s => s - 1)
  const reset = () => { setStep(0); setPtype(null) }

  // Step 0 — project type
  if (step === 0) return (
    <div>
      <p style={label('')}>What are you building?</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: 10 }}>
        {PROJECTS.map(p => (
          <button key={p.id} style={card}
            onClick={() => { setPtype(p.id); next() }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(196,119,59,0.5)')}
            onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')}
          >
            <div style={{ fontSize: '1.4rem', marginBottom: 6 }}>{p.emoji}</div>
            <div style={{ color: '#fff', fontWeight: 700, fontSize: '0.88rem', marginBottom: 3 }}>{p.label}</div>
            <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.73rem', lineHeight: 1.4 }}>{p.desc}</div>
          </button>
        ))}
      </div>
    </div>
  )

  // Step 1 — size / loft type
  if (step === 1 && ptype === 'loft') return (
    <div>
      <button style={backBtn} onClick={back}><ChevronLeft size={14}/>Back</button>
      <p style={label('')}>Step 2 of {totalSteps} — Loft conversion type?</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {LOFT_TYPES.map(lt => (
          <button key={lt.id} style={loftType === lt.id ? cardActive : card}
            onClick={() => { setLoftType(lt.id); next() }}>
            <div style={{ color: '#fff', fontWeight: 600, fontSize: '0.88rem', marginBottom: 2 }}>{lt.label}</div>
            <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem' }}>{lt.desc}</div>
          </button>
        ))}
      </div>
    </div>
  )

  if (step === 1 && (ptype === 'extension' || ptype === 'refurbishment')) return (
    <div>
      <button style={backBtn} onClick={back}><ChevronLeft size={14}/>Back</button>
      <p style={label('')}>Step 2 of {totalSteps} — {ptype === 'extension' ? 'Approximate size of the extension?' : 'Approximate floor area of the property?'}</p>
      <div style={{ textAlign: 'center', marginBottom: 28 }}>
        <div style={{ fontSize: '2.8rem', fontWeight: 900, color: '#C4773B' }}>{size} m²</div>
        <input type='range'
          min={ptype === 'extension' ? 10 : 40}
          max={ptype === 'extension' ? 120 : 300}
          value={size}
          onChange={e => setSize(Number(e.target.value))}
          style={{ width: '100%', maxWidth: 380, margin: '18px auto', display: 'block', accentColor: '#C4773B' }}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: 380, margin: '0 auto 24px', color: 'rgba(255,255,255,0.3)', fontSize: '0.75rem' }}>
          <span>{ptype === 'extension' ? '10m²' : '40m²'}</span>
          <span>{ptype === 'extension' ? '120m²' : '300m²'}</span>
        </div>
        <button onClick={next} style={{ background: '#C4773B', color: '#fff', border: 'none', borderRadius: 8, padding: '12px 32px', fontWeight: 700, cursor: 'pointer', fontSize: '0.95rem', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
          Continue <ArrowRight size={16}/>
        </button>
      </div>
    </div>
  )

  // Step 2 — location
  const locStep = needsDetail ? 2 : 1
  if (step === locStep) return (
    <div>
      <button style={backBtn} onClick={back}><ChevronLeft size={14}/>Back</button>
      <p style={label('')}>Step {locStep+1} of {totalSteps} — Where is the property?</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {LOCS.map(l => (
          <button key={l.id} style={loc === l.id ? cardActive : card}
            onClick={() => { setLoc(l.id); next() }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ color: '#fff', fontWeight: 600, fontSize: '0.88rem' }}>{l.label}</div>
                <div style={{ color: 'rgba(255,255,255,0.38)', fontSize: '0.73rem', marginTop: 2 }}>{l.desc}</div>
              </div>
              {loc === l.id && <span style={{ color: '#C4773B', fontWeight: 700 }}>✓</span>}
            </div>
          </button>
        ))}
      </div>
    </div>
  )

  // Step 3 — spec level
  const specStep = needsDetail ? 3 : 2
  if (step === specStep) return (
    <div>
      <button style={backBtn} onClick={back}><ChevronLeft size={14}/>Back</button>
      <p style={label('')}>Step {specStep+1} of {totalSteps} — Finish level?</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 10 }}>
        {SPECS.map(s => (
          <button key={s.id} style={spec === s.id ? cardActive : card}
            onClick={() => { setSpec(s.id); next() }}>
            <div style={{ color: '#fff', fontWeight: 700, fontSize: '0.88rem', marginBottom: 3 }}>{s.label}</div>
            <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.73rem' }}>{s.desc}</div>
          </button>
        ))}
      </div>
    </div>
  )

  // Result
  if (!ptype) return null
  const [lo, hi] = calcRange(ptype, spec, size, loftType, loc)
  const locLabel = LOCS.find(l => l.id === loc)?.label ?? ''
  const specLabel = SPECS.find(s => s.id === spec)?.label ?? ''
  const ptLabel = PROJECTS.find(p => p.id === ptype)?.label ?? ''

  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', marginBottom: 6 }}>Your ballpark estimate</div>
      <div style={{ fontSize: 'clamp(2rem,6vw,3.2rem)', fontWeight: 900, color: '#C4773B', lineHeight: 1.1, marginBottom: 6 }}>
        {fmt(lo)} – {fmt(hi)}
      </div>
      <div style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.78rem', marginBottom: 20 }}>
        ±20% indicative range · {locLabel} · {specLabel} spec · {ptLabel}
      </div>

      <div style={{ background: 'rgba(196,119,59,0.08)', border: '1px solid rgba(196,119,59,0.2)', borderRadius: 10, padding: '14px 18px', marginBottom: 16, textAlign: 'left' }}>
        <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.72rem', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.1em' }}>What this typically covers</div>
        <div style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.82rem', lineHeight: 1.65 }}>
          {ptype === 'extension' && `${size}m² ${specLabel.toLowerCase()} spec extension · All trades · Structural steel · M&E · Finishes`}
          {ptype === 'loft' && `${LOFT_TYPES.find(l=>l.id===loftType)?.label} · ${specLabel.toLowerCase()} spec · Stairs · M&E · Structural · Fire safety`}
          {ptype === 'refurbishment' && `${size}m² ${specLabel.toLowerCase()} spec refurb · Strip-out · M&E upgrade · Plastering · Finishes`}
          {ptype === 'kitchen' && `${specLabel} kitchen fit-out · Units · Worktops · Appliances · Electrics · Plumbing`}
          {ptype === 'bathroom' && `${specLabel} bathroom · Sanitary ware · Tiling · Waterproofing · M&E`}
          {ptype === 'structural' && `Structural works · Temporary propping · Steel installation · Making good`}
        </div>
      </div>

      <div style={{ background: 'rgba(255,193,7,0.06)', border: '1px solid rgba(255,193,7,0.15)', borderRadius: 8, padding: '10px 14px', marginBottom: 24, fontSize: '0.75rem', color: 'rgba(255,255,255,0.38)', lineHeight: 1.6, textAlign: 'left' }}>
        ⚠️ Ballpark only — for budgeting purposes. Not a formal quotation. Actual costs depend on site conditions, design and procurement.
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 340, margin: '0 auto' }}>
        <Link href={`/services/estimating/order?type=${ptype}&spec=${spec}`}
          style={{ background: '#C4773B', color: '#fff', borderRadius: 8, padding: '14px 24px', fontWeight: 700, textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, fontSize: '0.95rem' }}>
          Get a QS-reviewed estimate from £95 <ArrowRight size={16}/>
        </Link>
        <Link href='/search'
          style={{ background: 'rgba(255,255,255,0.06)', color: '#fff', borderRadius: 8, padding: '12px 24px', fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, fontSize: '0.9rem', border: '1px solid rgba(255,255,255,0.1)' }}>
          Find verified contractors
        </Link>
        <button onClick={reset} style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.28)', fontSize: '0.78rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4, padding: 8 }}>
          <RotateCcw size={12}/> Start over
        </button>
      </div>
    </div>
  )
}
