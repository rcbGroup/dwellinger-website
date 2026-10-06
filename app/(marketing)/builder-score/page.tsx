import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Builder Score™ — The UK\'s First Contractor Trust Rating',
  description: 'Builder Score™ is a 0–1000 proprietary trust rating for contractors. Calculated from verified reviews, compliance records, dispute history, and payment behaviour.',
}

const components = [
  { label: 'Verified reviews', weight: '35%', desc: 'Only reviews tied to a confirmed completed project with photos and dates. Weighted by project value and recency.', max: 350, example: 328 },
  { label: 'CDM compliance record', weight: '20%', desc: 'Pre-Construction Information, Construction Phase Plan, and Health & Safety File present and correct for qualifying projects.', max: 200, example: 186 },
  { label: 'Payment behaviour', weight: '15%', desc: 'Supplier and subcontractor payment patterns. Late payments, disputes, and non-payment events are all tracked.', max: 150, example: 142 },
  { label: 'Insurance & accreditation', weight: '15%', desc: 'Current public liability (min. £2M), professional indemnity where applicable, trade body membership, and identity verification.', max: 150, example: 138 },
  { label: 'Dispute resolution record', weight: '10%', desc: 'Outcome of any disputes lodged through Dwellinger, Trading Standards, or third-party resolution services.', max: 100, example: 98 },
  { label: 'Response rate & platform activity', weight: '5%', desc: 'Lead response time, communication quality, and platform engagement. Contractors who respond within 2 hours score higher.', max: 50, example: 32 },
]

const tiers = [
  { name: 'Platinum', range: '900–1000', colour: 'bg-amber text-text-inverse', desc: 'Elite tier. Exceptional record across all categories.' },
  { name: 'Gold', range: '700–899', colour: 'bg-yellow-400 text-yellow-900', desc: 'Strong performer with a verified track record.' },
  { name: 'Silver', range: '500–699', colour: 'bg-zinc-300 text-zinc-800', desc: 'Solid contractor — room to improve in one or two areas.' },
  { name: 'Bronze', range: '0–499', colour: 'bg-amber-800 text-white', desc: 'New to the platform or flagged issues to resolve.' },
]

export default function BuilderScorePage() {
  const totalExample = components.reduce((a, c) => a + c.example, 0)
  return (
    <div>
      <section className="pt-16 pb-20 bg-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />
        <div className="container mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-6"><Shield className="w-8 h-8 text-amber" /><p className="section-tag">Builder Score™ — Trademarked</p></div>
          <h1 className="font-display text-h1 text-white max-w-3xl mb-6">The UK&apos;s first real <span className="text-amber">contractor trust rating</span></h1>
          <p className="text-text-secondary text-lg max-w-2xl mb-8 leading-relaxed">Not just stars that anyone can fake. Builder Score™ is a 0–1000 proprietary algorithm calculated from verified reviews, compliance records, dispute history, payment behaviour, and insurance status. Every contractor on Dwellinger has a score.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/search" className="btn-primary-lg">Find contractors by score <ArrowRight className="w-4 h-4" /></Link>
            <Link href="/register?type=contractor" className="btn-secondary text-base px-8 py-4">Get your Builder Score™</Link>
          </div>
        </div>
      </section>
      <section className="py-20 bg-bg-surface border-y border-border">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div><p className="section-tag mb-3">How it&apos;s calculated</p><h2 className="section-title mb-4">Six components. One number. Full transparency.</h2><p className="text-text-secondary mb-6 leading-relaxed">Every contractor sees their score breakdown. They know exactly which category is pulling their score down and what to do to improve it. The algorithm weighting is not disclosed publicly — but the categories are.</p><p className="text-text-secondary leading-relaxed">Scores are recalculated continuously as new reviews are verified, compliance documents are updated, and project data is processed.</p></div>
            <div className="space-y-3">
              {components.map((c) => (<div key={c.label} className="card-raised p-4"><div className="flex justify-between items-center mb-1.5"><div><span className="text-white text-sm font-semibold">{c.label}</span><span className="text-text-muted text-xs ml-2">({c.weight})</span></div><span className="text-amber text-sm font-bold">{c.example}/{c.max}</span></div><div className="w-full bg-bg-overlay rounded-full h-1.5"><div className="bg-amber h-1.5 rounded-full" style={{ width: `${(c.example / c.max) * 100}%` }} /></div><p className="text-text-muted text-xs mt-1.5 leading-relaxed">{c.desc}</p></div>))}
              <div className="bg-amber-subtle border border-amber-border rounded p-4 flex justify-between items-center"><span className="text-amber font-bold">Total Builder Score™</span><span className="text-amber font-display font-bold text-2xl">{totalExample}/1000</span></div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-bg">
        <div className="container mx-auto">
          <div className="text-center mb-12"><p className="section-tag mb-3">Score tiers</p><h2 className="section-title">Four tiers, clear standards</h2></div>
          <div className="grid md:grid-cols-4 gap-5">
            {tiers.map((t) => (<div key={t.name} className="card p-6"><div className={`badge text-sm font-bold px-4 py-1.5 mb-4 ${t.colour}`}>{t.name}</div><div className="text-white font-display font-bold text-xl mb-2">{t.range}</div><p className="text-text-muted text-sm">{t.desc}</p></div>))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-bg-surface border-y border-border">
        <div className="container mx-auto max-w-3xl text-center">
          <p className="section-tag mb-3">Why it matters</p><h2 className="section-title mb-6">No competitor can replicate this quickly</h2>
          <p className="text-text-secondary text-lg leading-relaxed mb-8">Checkatrade shows reviews. Companies House shows registration. But neither tells you whether a contractor pays their subcontractors on time, has their CDM documents in order, or how they performed when a dispute arose. Builder Score™ combines all of this into one number — verified, audited, and continuously updated.</p>
          <div className="grid grid-cols-3 gap-6 mb-10">
            {[{v:'Trademarked™',l:'Legally protected'},{v:'Proprietary',l:'Algorithm not disclosed'},{v:'Continuous',l:'Updated in real time'}].map((s) => (<div key={s.l} className="card-raised p-4"><div className="text-amber font-bold text-sm">{s.v}</div><div className="text-text-muted text-xs mt-1">{s.l}</div></div>))}
          </div>
          <Link href="/search" className="btn-primary-lg">Search contractors by score <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </section>
      <section className="py-16 bg-bg">
        <div className="container mx-auto text-center">
          <h2 className="section-title mb-4">Are you a contractor?</h2>
          <p className="text-text-secondary mb-8 max-w-lg mx-auto">Your Builder Score™ is calculated automatically when you join Dwellinger. Connect your existing reviews, verify your compliance documents, and your score is live within 24 hours.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/register?type=contractor" className="btn-primary-lg">Get your Builder Score™ <ArrowRight className="w-4 h-4" /></Link>
            <Link href="/contractors" className="btn-secondary text-base px-8 py-4">Learn about contractor features</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
