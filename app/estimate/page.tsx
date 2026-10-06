'use client'

import { useState } from 'react'
import Link from 'next/link'
import Nav from '@/components/shared/Nav'
import Footer from '@/components/shared/Footer'
import { Calculator, ArrowRight, ChevronRight } from 'lucide-react'

type ProjectType = 'rear-extension' | 'loft' | 'full-refurb' | 'kitchen' | 'bathroom' | ''

const projectTypes: { id: ProjectType; label: string; icon: string }[] = [
  { id: 'rear-extension', label: 'Rear extension', icon: '🏗️' },
  { id: 'loft', label: 'Loft conversion', icon: '🏠' },
  { id: 'full-refurb', label: 'Full refurbishment', icon: '🔨' },
  { id: 'kitchen', label: 'Kitchen project', icon: '🍳' },
  { id: 'bathroom', label: 'Bathroom project', icon: '🛁' },
]

const sizeOptions: Record<string, { label: string; sqm: string }[]> = {
  'rear-extension': [
    { label: 'Small (up to 20m²)', sqm: '20' },
    { label: 'Medium (20–35m²)', sqm: '28' },
    { label: 'Large (35m²+)', sqm: '40' },
  ],
  loft: [
    { label: 'Basic dormer', sqm: '25' },
    { label: 'Standard (1 bed)', sqm: '35' },
    { label: 'Large (2 bed)', sqm: '50' },
  ],
  'full-refurb': [
    { label: '1–2 bed flat', sqm: '70' },
    { label: '3 bed house', sqm: '120' },
    { label: '4+ bed house', sqm: '180' },
  ],
  kitchen: [
    { label: 'Small kitchen', sqm: '10' },
    { label: 'Medium kitchen', sqm: '15' },
    { label: 'Large open-plan', sqm: '25' },
  ],
  bathroom: [
    { label: 'Bathroom only', sqm: '5' },
    { label: 'Bathroom + en-suite', sqm: '10' },
    { label: 'Full floor of bathrooms', sqm: '18' },
  ],
}

const finishLevels = [
  { id: 'standard', label: 'Standard', desc: 'Functional, mid-market materials' },
  { id: 'premium', label: 'Premium', desc: 'Higher spec, branded fixtures' },
  { id: 'luxury', label: 'Luxury', desc: 'Top-tier finishes, bespoke' },
]

const costPerSqm: Record<string, Record<string, { low: number; high: number }>> = {
  'rear-extension': { standard: { low: 2000, high: 2800 }, premium: { low: 2800, high: 3600 }, luxury: { low: 3600, high: 5000 } },
  loft: { standard: { low: 1800, high: 2500 }, premium: { low: 2500, high: 3200 }, luxury: { low: 3200, high: 4500 } },
  'full-refurb': { standard: { low: 800, high: 1200 }, premium: { low: 1200, high: 1800 }, luxury: { low: 1800, high: 2800 } },
  kitchen: { standard: { low: 1200, high: 2000 }, premium: { low: 2000, high: 3500 }, luxury: { low: 3500, high: 6000 } },
  bathroom: { standard: { low: 1800, high: 3000 }, premium: { low: 3000, high: 5000 }, luxury: { low: 5000, high: 8000 } },
}

function formatGBP(n: number) {
  if (n >= 1000) return '£' + (n / 1000).toFixed(0) + 'k'
  return '£' + n.toLocaleString()
}

export default function EstimatePage() {
  const [step, setStep] = useState(1)
  const [projectType, setProjectType] = useState<ProjectType>('')
  const [size, setSize] = useState('')
  const [finish, setFinish] = useState('standard')
  const [location, setLocation] = useState('london')

  const locationMultiplier = location === 'london' ? 1.0 : location === 'southeast' ? 0.92 : 0.82

  let low = 0, high = 0
  if (projectType && size && finish) {
    const sqm = parseInt(size)
    const rates = costPerSqm[projectType]?.[finish]
    if (rates) {
      low = Math.round(sqm * rates.low * locationMultiplier / 1000) * 1000
      high = Math.round(sqm * rates.high * locationMultiplier / 1000) * 1000
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-bg">
      <Nav />
      <main className="flex-1 pt-16">
        <section className="py-16">
          <div className="container mx-auto max-w-2xl">
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-amber-subtle border border-amber-border mb-4">
                <Calculator className="w-7 h-7 text-amber" />
              </div>
              <p className="section-tag mb-2">Estimating Studio</p>
              <h1 className="font-display text-h2 text-white mb-3">Budget estimator</h1>
              <p className="text-text-secondary max-w-sm mx-auto text-sm leading-relaxed">
                Get a rough budget range for your project in under 2 minutes. This is a ballpark only — a proper estimate follows a site visit.
              </p>
            </div>
            <div className="flex items-center justify-center gap-2 mb-8">
              {[1, 2, 3, 4].map((s) => (
                <div key={s} className="flex items-center gap-2">
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                    step >= s ? 'bg-amber text-text-inverse' : 'bg-bg-raised border border-border text-text-muted'
                  }`}>{s}</div>
                  {s < 4 && <div className={`w-8 h-px ${step > s ? 'bg-amber' : 'bg-border'}`} />}
                </div>
              ))}
            </div>
            <div className="card p-8">
              {step === 1 && (
                <div>
                  <h2 className="text-white font-bold text-lg mb-5">What type of project?</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {projectTypes.map((pt) => (
                      <button key={pt.id} onClick={() => { setProjectType(pt.id); setStep(2) }}
                        className={`p-4 rounded-lg border transition-all flex flex-col items-center gap-2 hover:border-amber ${
                          projectType === pt.id ? 'border-amber bg-amber-subtle' : 'border-border bg-bg-raised'
                        }`}>
                        <span className="text-2xl">{pt.icon}</span>
                        <span className="text-xs font-semibold text-text-secondary text-center">{pt.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
              {step === 2 && projectType && (
                <div>
                  <h2 className="text-white font-bold text-lg mb-5">What size approximately?</h2>
                  <div className="space-y-3">
                    {sizeOptions[projectType]?.map((opt) => (
                      <button key={opt.sqm} onClick={() => { setSize(opt.sqm); setStep(3) }}
                        className={`w-full p-4 rounded-lg border transition-all flex items-center justify-between hover:border-amber ${
                          size === opt.sqm ? 'border-amber bg-amber-subtle' : 'border-border bg-bg-raised'
                        }`}>
                        <span className="text-text-secondary text-sm font-semibold">{opt.label}</span>
                        <span className="text-text-muted text-xs">~{opt.sqm}m²</span>
                      </button>
                    ))}
                  </div>
                  <button onClick={() => setStep(1)} className="text-text-muted text-xs mt-4 hover:text-amber transition-colors">← Change project type</button>
                </div>
              )}
              {step === 3 && (
                <div>
                  <h2 className="text-white font-bold text-lg mb-5">What finish level?</h2>
                  <div className="space-y-3 mb-6">
                    {finishLevels.map((fl) => (
                      <button key={fl.id} onClick={() => setFinish(fl.id)}
                        className={`w-full p-4 rounded-lg border transition-all flex items-start justify-between hover:border-amber ${
                          finish === fl.id ? 'border-amber bg-amber-subtle' : 'border-border bg-bg-raised'
                        }`}>
                        <div>
                          <div className="text-text-secondary text-sm font-semibold">{fl.label}</div>
                          <div className="text-text-muted text-xs">{fl.desc}</div>
                        </div>
                        <div className={`w-4 h-4 rounded-full border-2 flex-shrink-0 mt-0.5 ${finish === fl.id ? 'border-amber bg-amber' : 'border-border'}`} />
                      </button>
                    ))}
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-sm mb-3">Location</h3>
                    <select value={location} onChange={(e) => setLocation(e.target.value)} className="input">
                      <option value="london">Greater London</option>
                      <option value="southeast">South East (outside London)</option>
                      <option value="other">Rest of UK</option>
                    </select>
                  </div>
                  <div className="flex gap-3 mt-6">
                    <button onClick={() => setStep(2)} className="btn-secondary flex-1 py-3">Back</button>
                    <button onClick={() => setStep(4)} className="btn-primary flex-1 py-3 flex items-center justify-center gap-2">Get estimate <ArrowRight className="w-4 h-4" /></button>
                  </div>
                </div>
              )}
              {step === 4 && (
                <div>
                  <h2 className="text-white font-bold text-lg mb-6">Your budget range</h2>
                  <div className="bg-amber-subtle border-2 border-amber rounded-xl p-6 mb-6 text-center">
                    <p className="text-amber text-xs font-bold uppercase tracking-widest mb-3">Indicative ballpark</p>
                    <div className="flex items-center justify-center gap-3 mb-2">
                      <span className="font-display font-bold text-3xl text-white">{formatGBP(low)}</span>
                      <span className="text-text-muted">to</span>
                      <span className="font-display font-bold text-3xl text-amber">{formatGBP(high)}</span>
                    </div>
                    <p className="text-text-muted text-xs">Based on ~{size}m² · {finish} finish · {location === 'london' ? 'Greater London' : location === 'southeast' ? 'South East' : 'Rest of UK'}</p>
                  </div>
                  <div className="bg-bg-raised border border-border rounded-lg p-4 mb-6 text-xs text-text-muted leading-relaxed">
                    <p className="font-bold text-text-secondary mb-1">⚠️ Ballpark only — please read</p>
                    <p>This figure is for early budget planning only. It is not a quotation. Actual costs depend on design development, site conditions, structural requirements, compliance, procurement route, and specification. A detailed estimate requires a site visit and full drawings. Second-fix materials are client-supplied. RCB does not install carpet.</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="card-raised p-4"><div className="text-text-muted text-xs mb-1">Project type</div><div className="text-white text-sm font-semibold capitalize">{projectTypes.find(p => p.id === projectType)?.label}</div></div>
                    <div className="card-raised p-4"><div className="text-text-muted text-xs mb-1">Finish</div><div className="text-white text-sm font-semibold capitalize">{finish}</div></div>
                  </div>
                  <div className="space-y-3">
                    <Link href="/register" className="btn-primary w-full py-3.5 flex items-center justify-center gap-2">Get a proper quote from verified contractors <ChevronRight className="w-4 h-4" /></Link>
                    <a href="https://rankitt.rcbgroup.co.uk/book/faith" target="_blank" rel="noopener noreferrer" className="btn-secondary w-full py-3.5 flex items-center justify-center gap-2">Book a free consultation</a>
                    <button onClick={() => { setStep(1); setProjectType(''); setSize(''); setFinish('standard') }} className="text-text-muted text-xs w-full text-center hover:text-amber transition-colors">Start a new estimate</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
