import Link from 'next/link'
import { ArrowRight, CheckCircle, Zap, FileEdit, BarChart3, Shield } from 'lucide-react'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  path: '/contractors',
  title: 'For Contractors — Win More Work, Less Admin | Dwellinger',
  description: 'Builder Score™ badge, Dwell AI agents, Quote Studio and CDM documents. Run your entire contracting business from Dwellinger.',
})

const agents = [
  { name: 'Dwell Coord', role: 'Coordination Agent', icon: '📡', desc: 'Monitors your lead channels, classifies every enquiry, drafts responses in your voice, schedules site visits, and follows up when leads go cold — all automatically.' },
  { name: 'Dwell Create', role: 'Document Agent', icon: '✍️', desc: 'Voice note from the van → full Scope of Works in 2 minutes. Site photos + description → professional PDF quote with cover letter, itemised breakdown, exclusions, and terms.' },
  { name: 'Dwell Clarity', role: 'Research Agent', icon: '🔍', desc: 'Upload a planning decision, structural report, or contract — Dwell Clarity extracts the key facts, flags issues, and tells you exactly what you need to action.' },
  { name: 'Dwell Coach', role: 'Sales Coach', icon: '🎯', desc: 'Roleplay a client who thinks your quote is too high. Practice objection handling, price presentation, and closing. Get scored and coached after every session.' },
]

export default function ContractorsPage() {
  return (
    <div>
      <section className="pt-16 pb-20 bg-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />
        <div className="container mx-auto relative z-10">
          <p className="section-tag mb-3">For Contractors</p>
          <h1 className="font-display text-h1 text-white max-w-3xl mb-6">Win more work. Spend less time <span className="text-amber">on admin.</span></h1>
          <p className="text-text-secondary text-lg max-w-2xl mb-8 leading-relaxed">Builder Score™ builds your reputation automatically. Four Dwell AI agents handle your admin, documents, research, and sales coaching. Quote Studio produces professional PDFs in minutes, not hours.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/register?type=contractor" className="btn-primary-lg">Start free trial <ArrowRight className="w-4 h-4" /></Link>
            <Link href="/pricing" className="btn-secondary text-base px-8 py-4">See pricing</Link>
          </div>
          <p className="text-text-muted text-xs mt-4">From £49/month · No contract · Cancel anytime</p>
        </div>
      </section>

      <section className="bg-bg-surface border-y border-border py-8">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { icon: <Shield className="w-5 h-5 text-amber mx-auto mb-1.5" />, v: 'Builder Score™', l: 'Trust badge on your profile' },
            { icon: <Zap className="w-5 h-5 text-amber mx-auto mb-1.5" />, v: '4 AI Agents', l: 'Handling your admin 24/7' },
            { icon: <FileEdit className="w-5 h-5 text-amber mx-auto mb-1.5" />, v: 'Quote Studio', l: 'Professional quotes in minutes' },
            { icon: <BarChart3 className="w-5 h-5 text-amber mx-auto mb-1.5" />, v: 'CRM + Pipeline', l: 'Full lead management' },
          ].map((item) => (
            <div key={item.v}>{item.icon}<div className="text-white font-bold text-sm">{item.v}</div><div className="text-text-muted text-xs mt-0.5">{item.l}</div></div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-bg">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <p className="section-tag mb-3">AI workforce</p>
            <h2 className="section-title">4 Dwell Agents — trained on UK construction</h2>
            <p className="text-text-secondary mt-4 max-w-xl mx-auto">Not generic ChatGPT for builders. AI trained on 1,972 expert articles, real UK project data, planning intelligence, regulatory knowledge, and years of estimating experience.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {agents.map((a) => (
              <div key={a.name} className="card p-6">
                <div className="flex items-center gap-3 mb-4"><div className="text-3xl">{a.icon}</div><div><div className="text-white font-bold text-base">{a.name}</div><div className="text-amber text-xs font-semibold">{a.role}</div></div></div>
                <p className="text-text-secondary text-sm leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-bg-surface border-y border-border">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-tag mb-3">Dwell Create in action</p>
              <h2 className="section-title mb-4">Voice note to Scope of Works in 2 minutes</h2>
              <p className="text-text-secondary mb-6 leading-relaxed">Record a voice note walking around the site after your survey. Dwell Create transcribes it, structures it into a sequenced Scope of Works, adds quantities, compliance notes, and exclusions — ready for pricing.</p>
              <ul className="space-y-3">
                {['Voice note → Full Scope of Works','Photos + description → PDF quote with cover letter','Job description → RAMS document','Project brief → CDM Pre-Construction Pack','Completed job → Project Handover Pack'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-text-secondary text-sm"><CheckCircle className="w-4 h-4 text-amber flex-shrink-0" />{item}</li>
                ))}
              </ul>
            </div>
            <div className="card-raised p-6 space-y-3">
              <div className="flex items-center gap-3 pb-3 border-b border-border"><div className="w-8 h-8 rounded-full bg-amber flex items-center justify-center text-text-inverse text-sm">✍️</div><div><div className="text-white text-sm font-bold">Dwell Create</div><div className="text-text-muted text-xs">Processing voice note — 2m 14s</div></div></div>
              <div className="text-xs text-text-muted font-mono bg-bg p-3 rounded text-left"><p className="text-amber mb-1">// Input: Voice note (2 min 14 sec)</p><p className="text-text-secondary">"OK so we&apos;ve got the rear extension, single storey, about 5 metres by 4, bifold doors to the garden..."</p></div>
              <div className="text-xs text-text-secondary">↓ Generating Scope of Works...</div>
              <div className="bg-bg p-3 rounded space-y-1.5"><div className="text-amber text-xs font-bold">Scope of Works — Rear Extension, [Address]</div>{['1. Enabling & demolition works','2. Foundation & substructure (1.8m depth, 450mm wide)','3. Masonry superstructure (6m × 4.5m × 2.7m height)','4. Flat roof with warm roof build-up','5. Bifold door opening (3.6m aperture + structural lintel)','6. Internal remodelling — kitchen zone','7. New WC under staircase','...'].map((line) => (<div key={line} className="text-text-muted text-xs">{line}</div>))}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Contractor Plans</h2>
          <p className="text-lg text-gray-600 mb-6">Plans from <strong>£49/month</strong> — 14-day free trial, no card required.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[{name:'Member',price:49},{name:'Professional',price:99},{name:'Premium',price:199},{name:'Franchise',price:499}].map(plan => (
              <div key={plan.name} className="bg-white rounded-lg p-4 border border-gray-200 text-center"><div className="font-semibold text-gray-900">{plan.name}</div><div className="text-2xl font-bold text-gray-900 mt-1">£{plan.price}</div><div className="text-sm text-gray-500">/month</div></div>
            ))}
          </div>
          <a href="/platform/pricing" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">See all plans and features →</a>
          <p className="text-sm text-gray-500 mt-3">20% discount on annual plans</p>
        </div>
      </section>

      <section className="py-16 bg-amber-subtle border-t border-amber-border">
        <div className="container mx-auto text-center">
          <h2 className="section-title mb-4">Ready to run a smarter contracting business?</h2>
          <p className="text-text-secondary mb-8 max-w-lg mx-auto">Join Dwellinger today. Set up your Builder Score™ profile, connect your lead channels, and let the Dwell agents start handling your admin.</p>
          <Link href="/register?type=contractor" className="btn-primary-lg">Start 14-day free trial <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </section>
    </div>
  )
}
