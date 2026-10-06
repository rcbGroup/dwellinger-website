import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle, X } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Pricing — Dwellinger Plans & Features',
  description: 'From £19/month. Starter, Professional, Business, and Agents+ plans. Builder Score™, AI agents, estimating tools, and more. Start free for 14 days.',
}

const plans = [
  { name: 'Starter', price: 19, desc: 'Sole traders & new starters', popular: false, features: { 'Builder Score™ profile': true, 'Lead notifications': true, 'AI credits/month': '100', 'Active projects': '1', 'Quote Studio': '3/month', 'Dwell Coord': false, 'Dwell Create': false, 'Dwell Clarity': false, 'Dwell Coach': false, 'CDM document pack': false, 'RAMS generation': false, 'WhatsApp integration': false, 'CRM & pipeline': false, 'Phone add-on': 'Available +£4.99/mo' } },
  { name: 'Professional', price: 49, desc: 'Growing contractors', popular: true, features: { 'Builder Score™ profile': true, 'Lead notifications': true, 'AI credits/month': '500', 'Active projects': '5', 'Quote Studio': 'Unlimited', 'Dwell Coord': true, 'Dwell Create': true, 'Dwell Clarity': false, 'Dwell Coach': false, 'CDM document pack': true, 'RAMS generation': true, 'WhatsApp integration': false, 'CRM & pipeline': false, 'Phone add-on': 'Available +£4.99/mo' } },
  { name: 'Business', price: 99, desc: 'Established firms', popular: false, features: { 'Builder Score™ profile': true, 'Lead notifications': true, 'AI credits/month': '2,000', 'Active projects': 'Unlimited', 'Quote Studio': 'Unlimited', 'Dwell Coord': true, 'Dwell Create': true, 'Dwell Clarity': true, 'Dwell Coach': true, 'CDM document pack': true, 'RAMS generation': true, 'WhatsApp integration': true, 'CRM & pipeline': true, 'Phone add-on': '1 number included' } },
  { name: 'Agents+', price: 149, desc: 'Full autonomous AI mode', popular: false, features: { 'Builder Score™ profile': true, 'Lead notifications': true, 'AI credits/month': 'Unlimited', 'Active projects': 'Unlimited', 'Quote Studio': 'Unlimited + white-label', 'Dwell Coord': 'Autonomous mode', 'Dwell Create': 'Autonomous mode', 'Dwell Clarity': 'Autonomous mode', 'Dwell Coach': 'Autonomous mode', 'CDM document pack': true, 'RAMS generation': true, 'WhatsApp integration': true, 'CRM & pipeline': true, 'Phone add-on': '3 numbers included' } },
]

const featureKeys = ['Builder Score™ profile','Lead notifications','AI credits/month','Active projects','Quote Studio','Dwell Coord','Dwell Create','Dwell Clarity','Dwell Coach','CDM document pack','RAMS generation','WhatsApp integration','CRM & pipeline','Phone add-on']

const addons = [
  { name: 'Phone add-on', price: '£4.99/month', desc: 'Dedicated UK number, calls recorded & transcribed, powered by SignalWire.' },
  { name: 'Credit top-up — 100cr', price: '£8', desc: '10 credits = £1. Use credits for AI features beyond your monthly allowance.' },
  { name: 'Credit top-up — 500cr', price: '£38', desc: 'Best for medium-volume teams.' },
  { name: 'Credit top-up — 2,000cr', price: '£140', desc: 'Heavy users and agencies.' },
  { name: 'Party Wall Plugin', price: '£19.99/month', desc: 'Automated party wall notice generation and tracking.' },
  { name: 'Planning Application Plugin', price: '£24.99/month', desc: 'Draft and track planning applications with AI assistance.' },
  { name: 'Enterprise / White-label', price: 'Custom', desc: 'API access, custom branding, dedicated support, SLA. Contact us.' },
]

function FeatureCell({ value }: { value: boolean | string }) {
  if (value === true) return <CheckCircle className="w-4 h-4 text-amber mx-auto" />
  if (value === false) return <X className="w-4 h-4 text-text-muted mx-auto opacity-40" />
  return <span className="text-xs text-text-secondary text-center block">{value}</span>
}

export default function PricingPage() {
  return (
    <div>
      <section className="pt-16 pb-12 bg-bg text-center">
        <div className="container mx-auto">
          <p className="section-tag mb-3">Pricing</p>
          <h1 className="font-display text-h1 text-white mb-4">Simple, transparent pricing</h1>
          <p className="text-text-secondary text-lg max-w-xl mx-auto mb-4">Start free for 14 days. No credit card required. Cancel anytime.</p>
          <p className="text-text-muted text-sm">All prices ex-VAT · Billed monthly · Annual plans available (2 months free)</p>
        </div>
      </section>
      <section className="pb-16 bg-bg">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {plans.map((plan) => (
              <div key={plan.name} className={`card p-6 flex flex-col relative ${plan.popular ? 'border-amber bg-bg-raised shadow-glow' : ''}`}>
                {plan.popular && (<div className="absolute -top-3 left-1/2 -translate-x-1/2"><span className="badge-amber px-4 py-1 text-xs">Most popular</span></div>)}
                <div className="mb-6"><div className="text-white font-bold text-lg">{plan.name}</div><div className="flex items-end gap-1 mt-1 mb-1"><span className="text-amber font-display font-bold text-4xl">£{plan.price}</span><span className="text-text-muted text-sm mb-1.5">/month</span></div><p className="text-text-muted text-xs">{plan.desc}</p></div>
                <Link href="/register?type=contractor" className={`mb-6 ${plan.popular ? 'btn-primary text-center text-sm py-2.5' : 'btn-secondary text-center text-sm py-2.5'}`}>Start free trial</Link>
                <ul className="space-y-2.5 flex-1">{Object.entries(plan.features).map(([feat, val]) => (<li key={feat} className="flex items-start gap-2 text-xs"><span className="flex-shrink-0 mt-0.5">{val === true ? <CheckCircle className="w-3.5 h-3.5 text-amber" /> : val === false ? <X className="w-3.5 h-3.5 text-text-muted opacity-40" /> : <CheckCircle className="w-3.5 h-3.5 text-amber" />}</span><span className={val === false ? 'text-text-muted opacity-50' : 'text-text-secondary'}>{feat}: {typeof val === 'string' ? val : ''}</span></li>))}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-bg-surface border-y border-border hidden md:block">
        <div className="container mx-auto">
          <h2 className="section-title text-center mb-10">Full feature comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm"><thead><tr className="border-b border-border"><th className="text-left text-text-muted font-medium pb-4 pr-6 w-1/3">Feature</th>{plans.map((p) => (<th key={p.name} className="text-center pb-4 font-bold text-white">{p.name}<div className="text-amber font-normal text-xs mt-0.5">£{p.price}/mo</div></th>))}</tr></thead><tbody>{featureKeys.map((key) => (<tr key={key} className="border-b border-border/50"><td className="py-3 text-text-secondary pr-6">{key}</td>{plans.map((p) => (<td key={p.name} className="py-3 text-center"><FeatureCell value={p.features[key as keyof typeof p.features] as boolean | string} /></td>))}</tr>))}</tbody></table>
          </div>
        </div>
      </section>
      <section className="py-16 bg-bg">
        <div className="container mx-auto">
          <div className="text-center mb-10"><p className="section-tag mb-3">Add-ons & extras</p><h2 className="section-title">Enhance your plan</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {addons.map((a) => (<div key={a.name} className="card p-5"><div className="flex justify-between items-start mb-2"><span className="text-white font-semibold text-sm">{a.name}</span><span className="text-amber font-bold text-sm flex-shrink-0 ml-2">{a.price}</span></div><p className="text-text-muted text-xs leading-relaxed">{a.desc}</p></div>))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-bg-surface border-t border-border">
        <div className="container mx-auto max-w-2xl">
          <h2 className="section-title text-center mb-10">Common questions</h2>
          <div className="space-y-5">
            {[{q:'What is a credit?',a:'10 credits = £1. Credits are used for AI features above your monthly allowance — generating documents, running deep analysis, or using premium estimating tiers. Your monthly plan includes a set credit allowance; top up when needed.'},{q:'Can I cancel anytime?',a:'Yes — cancel any time from your account settings. Your subscription continues until the end of the billing period. No cancellation fees.'},{q:'Is the 14-day trial free?',a:'Yes, no credit card required to start. You get full access to the Professional plan features for 14 days. After that, choose your plan or downgrade to free.'},{q:'What is the phone add-on?',a:'A dedicated UK landline or mobile number for your Dwellinger profile. Calls are recorded, transcribed automatically, and fed into Dwell Coord for follow-up. Powered by SignalWire — 90% cheaper than Twilio.'},{q:'Do you offer annual billing?',a:'Yes — pay annually and get 2 months free (equivalent to ~17% discount). Contact us or select annual billing at checkout.'}].map((faq) => (<div key={faq.q} className="card p-5"><h3 className="text-white font-semibold text-sm mb-2">{faq.q}</h3><p className="text-text-secondary text-sm leading-relaxed">{faq.a}</p></div>))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-bg">
        <div className="container mx-auto text-center">
          <h2 className="section-title mb-4">Start your free 14-day trial today</h2>
          <p className="text-text-secondary mb-8 max-w-md mx-auto">No credit card. No contract. Full Professional plan access from day one.</p>
          <Link href="/register?type=contractor" className="btn-primary-lg">Start free trial <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </section>
    </div>
  )
}
