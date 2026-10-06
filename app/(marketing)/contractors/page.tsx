import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Zap, FileEdit, BarChart3, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'For Contractors — Win More Work, Less Admin',
  description: 'Builder Score™ badge, Dwell AI agents, Quote Studio and CDM documents. Run your entire contracting business from Dwellinger.',
}

const plans = [
  { name: 'Starter', price: '£19', period: '/month', desc: 'For sole traders getting started', features: ['Builder Score™ profile', 'Basic lead notifications', '100 AI credits/month', '1 active project', 'Quote Studio (3 quotes/month)', 'Community support'] },
  { name: 'Professional', price: '£49', period: '/month', desc: 'For growing contractors', features: ['Everything in Starter', 'Dwell Coord agent', 'Dwell Create agent', '500 AI credits/month', '5 active projects', 'CDM document pack', 'RAMS generation', 'Priority support'], popular: true },
  { name: 'Business', price: '£99', period: '/month', desc: 'Full power for established firms', features: ['Everything in Professional', 'All 4 Dwell Agents', '2,000 AI credits/month', 'Unlimited projects', 'WhatsApp integration', 'CRM & pipeline management', 'Advanced analytics', 'Phone add-on included (1 number)'] },
  { name: 'Agents+', price: '£149', period: '/month', desc: 'Autonomous AI mode', features: ['Everything in Business', 'Full autonomous agent mode', 'Unlimited AI credits', 'Multi-user team access', 'White-label quote PDFs', 'BYOK (bring your own AI key)', 'API access', 'Dedicated account manager'] },
]

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
          <h1 className="font-display text-h1 text-white max-w-3xl mb-6">Win more work. Spend less time{' '}<span className="text-amber">on admin.</span></h1>
          <p className="text-text-secondary text-lg max-w-2xl mb-8 leading-relaxed">Builder Score™ builds your reputation automatically. Four Dwell AI agents handle your admin, documents, research, and sales coaching. Quote Studio produces professional PDFs in minutes, not hours.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/register?type=contractor" className="btn-primary-lg">Start free trial <ArrowRight className="w-4 h-4" /></Link>
            <Link href="/pricing" className="btn-secondary text-base px-8 py-4">See pricing</Link>
          </div>
          <p className="text-text-muted text-xs mt-4">From £19/month · No contract · Cancel anytime</p>
        </div>
      </section>
      <section className="bg-bg-surface border-y border-border py-8">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[{icon:<Shield className="w-5 h-5 text-amber mx-auto mb-1.5" />,v:'Builder Score™',l:'Trust badge on your profile'},{icon:<Zap className="w-5 h-5 text-amber mx-auto mb-1.5" />,v:'4 AI Agents',l:'Handling your admin 24/7'},{icon:<FileEdit className="w-5 h-5 text-amber mx-auto mb-1.5" />,v:'Quote Studio',l:'Professional quotes in minutes'},{icon:<BarChart3 className="w-5 h-5 text-amber mx-auto mb-1.5" />,v:'CRM + Pipeline',l:'Full lead management'}].map((item) => (<div key={item.v}>{item.icon}<div className="text-white font-bold text-sm">{item.v}</div><div className="text-text-muted text-xs mt-0.5">{item.l}</div></div>))}
        </div>
      </section>
      <section className="py-20 bg-bg">
        <div className="container mx-auto">
          <div className="text-center mb-12"><p className="section-tag mb-3">AI workforce</p><h2 className="section-title">4 Dwell Agents — trained on UK construction</h2><p className="text-text-secondary mt-4 max-w-xl mx-auto">Not generic ChatGPT for builders. AI trained on 1,972 expert articles, real UK project data, planning intelligence, regulatory knowledge, and years of estimating experience.</p></div>
          <div className="grid md:grid-cols-2 gap-5">
            {agents.map((a) => (<div key={a.name} className="card p-6"><div className="flex items-center gap-3 mb-4"><div className="text-3xl">{a.icon}</div><div><div className="text-white font-bold text-base">{a.name}</div><div className="text-amber text-xs font-semibold">{a.role}</div></div></div><p className="text-text-secondary text-sm leading-relaxed">{a.desc}</p></div>))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-bg" id="pricing">
        <div className="container mx-auto">
          <div className="text-center mb-12"><p className="section-tag mb-3">Pricing</p><h2 className="section-title">Simple, transparent pricing</h2><p className="text-text-secondary mt-4 max-w-lg mx-auto">Start free for 14 days. No credit card required. Cancel anytime.</p></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {plans.map((plan) => (
              <div key={plan.name} className={`card p-6 flex flex-col relative ${plan.popular ? 'border-amber bg-bg-raised shadow-glow' : ''}`}>
                {plan.popular && (<div className="absolute -top-3 left-1/2 -translate-x-1/2"><span className="badge-amber px-4 py-1 text-xs">Most popular</span></div>)}
                <div className="mb-5"><div className="text-white font-bold text-lg">{plan.name}</div><div className="flex items-end gap-1 mt-1"><span className="text-amber font-display font-bold text-3xl">{plan.price}</span><span className="text-text-muted text-sm mb-1">{plan.period}</span></div><p className="text-text-muted text-xs mt-1">{plan.desc}</p></div>
                <ul className="space-y-2 mb-7 flex-1">{plan.features.map((f) => (<li key={f} className="flex items-start gap-2 text-text-secondary text-xs"><CheckCircle className="w-3.5 h-3.5 text-amber flex-shrink-0 mt-0.5" />{f}</li>))}</ul>
                <Link href="/register?type=contractor" className={plan.popular ? 'btn-primary text-center text-sm py-2.5' : 'btn-secondary text-center text-sm py-2.5'}>Start free trial</Link>
              </div>
            ))}
          </div>
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
