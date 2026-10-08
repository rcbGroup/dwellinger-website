import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Home, FileText, MessageCircle, BarChart3 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'For Homeowners — Plan, Budget & Manage Your Build',
  description: 'Get a free AI-powered estimate, find verified contractors with Builder Score™, and manage your extension, loft conversion or refurbishment from start to finish.',
}

const benefits = [
  {
    icon: <BarChart3 className="w-6 h-6 text-amber" />,
    title: 'Know your real cost before committing',
    desc: 'Free instant ballpark estimate from real UK project data. Not Google guesses. Not a salesman\'s number designed to get you to sign. An honest starting point.',
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-amber" />,
    title: 'Find contractors you can actually trust',
    desc: 'Builder Score™ rates every contractor 0–1000 based on verified reviews, compliance records, payment behaviour, and dispute history. You see the score before you call.',
  },
  {
    icon: <FileText className="w-6 h-6 text-amber" />,
    title: 'A project brief that gets you better quotes',
    desc: 'Our AI generates a structured project brief for your architect and contractors. Less confusion, better responses, more comparable quotes.',
  },
  {
    icon: <MessageCircle className="w-6 h-6 text-amber" />,
    title: 'Dwell — your AI guide, always available',
    desc: 'Ask anything. What planning permission do I need? What\'s a fair price for a rear extension? What questions should I ask a contractor? Dwell knows.',
  },
  {
    icon: <Home className="w-6 h-6 text-amber" />,
    title: 'Project management from day one',
    desc: 'Milestones, payments, documents, photos, and communication — all in one place. You stay in control without being on site every day.',
  },
  {
    icon: <ArrowRight className="w-6 h-6 text-amber" />,
    title: 'One accountable party, end to end',
    desc: 'Through Dwellinger\'s verified contractor network, you deal with ONE responsible party — not seven trades, not a builder who disappears mid-project.',
  },
]

const steps = [
  { n: '01', t: 'Get your free estimate', d: 'Tell us your project type and London postcode. Receive an AI-powered ballpark within seconds — no sign-up required for the first estimate.' },
  { n: '02', t: 'Build your project profile', d: 'Add details, upload existing plans or surveys, and set your budget range. Dwell reads your documents and flags any issues.' },
  { n: '03', t: 'Match with verified contractors', d: 'Browse contractors ranked by Builder Score™ for your area and project type. Request quotes from two or three with one click.' },
  { n: '04', t: 'Manage your build on the platform', d: 'Once you select a contractor, your project moves to the management dashboard — milestones, invoices, photos, and sign-off all tracked.' },
]

const projectTypes = [
  { name: 'Rear Extension', range: '£45k–£120k', icon: '🏗️' },
  { name: 'Loft Conversion', range: '£40k–£95k', icon: '🏠' },
  { name: 'Full Refurbishment', range: '£60k–£200k', icon: '🔨' },
  { name: 'Side Extension', range: '£35k–£90k', icon: '📐' },
  { name: 'Double Storey', range: '£80k–£180k', icon: '🏛️' },
  { name: 'Kitchen Extension', range: '£30k–£80k', icon: '🍳' },
]

export default function HomeownersPage() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-16 pb-20 bg-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />
        <div className="container mx-auto relative z-10">
          <p className="section-tag mb-3">For Homeowners</p>
          <h1 className="font-display text-h1 text-white max-w-3xl mb-6">
            Plan, budget and manage your build{' '}
            <span className="text-amber">with confidence</span>
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mb-8 leading-relaxed">
            Get a real cost estimate before you call a single contractor. Find verified builders
            ranked by Builder Score™. Manage your entire project — from planning to final sign-off —
            in one place.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/estimate" className="btn-primary-lg">
              Get a free estimate <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/search" className="btn-secondary text-base px-8 py-4">
              Find contractors near me
            </Link>
          </div>
        </div>
      </section>

      {/* Project types */}
      <section className="py-12 bg-bg-surface border-y border-border">
        <div className="container mx-auto">
          <p className="text-text-muted text-sm mb-6 text-center">
            Typical project cost ranges in Greater London (2026)
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {projectTypes.map((pt) => (
              <div key={pt.name} className="card p-4 text-center">
                <div className="text-2xl mb-2">{pt.icon}</div>
                <div className="text-white font-semibold text-xs mb-1">{pt.name}</div>
                <div className="text-amber text-xs font-bold">{pt.range}</div>
              </div>
            ))}
          </div>
          <p className="text-text-muted text-xs text-center mt-4">
            Ranges are indicative — actual costs vary by specification, site conditions, and contractor.
            Get a personalised estimate for your project.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-bg">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <p className="section-tag mb-3">Why Dwellinger</p>
            <h2 className="section-title">Everything you need to build with confidence</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((b) => (
              <div key={b.title} className="card p-6">
                <div className="mb-4">{b.icon}</div>
                <h3 className="font-bold text-white text-base mb-2">{b.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-bg-surface border-y border-border">
        <div className="container mx-auto">
          <div className="text-center mb-14">
            <p className="section-tag mb-3">How it works</p>
            <h2 className="section-title">From idea to keys in your hand</h2>
          </div>
          <div className="max-w-2xl mx-auto space-y-0">
            {steps.map((step, i) => (
              <div key={step.n} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-amber flex items-center justify-center flex-shrink-0">
                    <span className="text-text-inverse font-display font-bold text-sm">{step.n}</span>
                  </div>
                  {i < steps.length - 1 && <div className="w-px flex-1 bg-border my-2" />}
                </div>
                <div className="pb-10 last:pb-0">
                  <h3 className="font-bold text-white text-base mb-2">{step.t}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{step.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-bg">
        <div className="container mx-auto text-center">
          <h2 className="section-title mb-4">Ready to get your free estimate?</h2>
          <p className="text-text-secondary mb-8 max-w-lg mx-auto">
            No sign-up required for your first ballpark. Enter your project type and postcode — get a real cost range in under 10 seconds.
          </p>
          <Link href="/estimate" className="btn-primary-lg">
            Start your free estimate <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
