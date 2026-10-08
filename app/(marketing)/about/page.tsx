import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Shield, Zap, Users, BarChart3 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About — The UK Construction Intelligence Platform',
  description: 'Dwellinger is the UK\'s national design, build, and property intelligence platform — connecting homeowners, contractors, and property investors with the tools, trust, and intelligence to plan, price, and deliver any construction project.',
}

const milestones = [
  { year: '2021', event: 'Dwellinger.co.uk domain registered. The vision: one platform that connects every part of UK construction.' },
  { year: '2023', event: 'Internal platform reaches 200+ features across estimating, CRM, quoting, CDM compliance, and document generation.' },
  { year: '2024', event: 'Repositioned as a three-sided marketplace. Builder Score™ concept and algorithm designed — a 0–1000 trust rating for every contractor on the platform.' },
  { year: '2025', event: '1,972 knowledge articles written and structured. Platform architecture finalised. Estimating Studio tiers defined across five levels.' },
  { year: '2026', event: 'Dwellinger public platform launches. Homeowners, contractors, and property investors on one platform for the first time.' },
]

const values = [
  {
    icon: Shield,
    title: 'Trust through verification',
    desc: 'Builder Score™ exists because trust in construction is broken. We verify reviews, insurance, compliance history, and payment behaviour before any score is issued.',
  },
  {
    icon: Zap,
    title: 'Technology that actually helps',
    desc: 'Not AI for AI\'s sake. Every feature on Dwellinger came from a real problem that real builders and homeowners face — tested on real projects before it shipped.',
  },
  {
    icon: Users,
    title: 'Built for all three sides',
    desc: 'Homeowners, contractors, and investors all have different needs. Dwellinger is built specifically for each — not a generic platform trying to serve everyone the same way.',
  },
  {
    icon: BarChart3,
    title: 'Intelligence over guesswork',
    desc: 'Build costs, planning approval rates, contractor performance — these are data problems. Dwellinger replaces guesswork with structured, up-to-date intelligence.',
  },
]

const problems = [
  { who: 'Homeowners', problem: 'No reliable way to know what a project costs or who to trust to build it.' },
  { who: 'Contractors', problem: 'Hours wasted on admin, bad leads, and handwritten quotes that lose to worse competitors who present better.' },
  { who: 'Investors', problem: 'Evaluating deals without accurate build cost data leads to bad acquisitions and blown development budgets.' },
  { who: 'The industry', problem: 'No central hub — everyone patches together 10 different tools and nothing connects.' },
]

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-16 pb-20 bg-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />
        <div className="container mx-auto relative z-10 max-w-3xl">
          <p className="section-tag mb-3">About Dwellinger</p>
          <h1 className="font-display text-h1 text-white mb-6">
            The UK&apos;s construction{' '}
            <span className="text-amber">intelligence platform</span>
          </h1>
          <p className="text-text-secondary text-lg leading-relaxed mb-4">
            Dwellinger is the national design, build, and property intelligence platform —
            the one place where homeowners, contractors, property investors, and developers
            can plan, price, manage, and deliver construction projects from first idea to final completion.
          </p>
          <p className="text-text-secondary text-lg leading-relaxed">
            We exist because the UK construction industry is fragmented, opaque, and trust-broken —
            and no single platform was doing anything serious about it.
          </p>
        </div>
      </section>

      {/* The problem */}
      <section className="py-16 bg-bg-surface border-y border-border">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <p className="section-tag mb-3">The problem</p>
            <h2 className="section-title">UK construction is broken into fragments</h2>
            <p className="text-text-secondary mt-4 max-w-xl mx-auto">
              Every side of the industry faces a different version of the same problem — no intelligence, no trust, no central hub.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {problems.map((p) => (
              <div key={p.who} className="card p-6">
                <div className="badge-amber mb-3">{p.who}</div>
                <p className="text-text-secondary text-sm leading-relaxed">{p.problem}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What makes it different */}
      <section className="py-20 bg-bg">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <p className="section-tag mb-3">What makes us different</p>
            <h2 className="section-title">Three things that set Dwellinger apart</h2>
          </div>
          <div className="space-y-6">
            {[
              {
                num: '01',
                title: 'Builder Score™',
                desc: 'A 0–1000 trust rating for every contractor — calculated from verified reviews, completed project history, compliance records, dispute outcomes, payment behaviour, CDM compliance, insurance status, and response rate. Proprietary and trademarked. Homeowners currently have no objective way to compare contractors. Builder Score™ changes that permanently.',
              },
              {
                num: '02',
                title: 'Construction-specific AI',
                desc: 'Not generic ChatGPT for builders. AI trained on 1,972 expert construction articles, real UK project cost data, planning intelligence, regulatory knowledge, and years of estimating experience. Four specialised Dwell Agents: Coord (communication), Create (document generation), Clarity (analysis), and Coach (sales and skills training).',
              },
              {
                num: '03',
                title: 'A-to-Z delivery in one platform',
                desc: 'From the first idea, through design, planning, estimating, contractor selection, compliance, project management, and completion — one platform, not 10 separate tools. Homeowners, contractors, and investors all get their own purpose-built toolkit, all connected to the same intelligence layer.',
              },
            ].map((item) => (
              <div key={item.num} className="flex gap-6 card p-6">
                <div className="text-amber font-display font-bold text-2xl flex-shrink-0 w-10">{item.num}</div>
                <div>
                  <h3 className="text-white font-bold text-base mb-2">{item.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-bg-surface border-y border-border">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <p className="section-tag mb-3">What we believe</p>
            <h2 className="section-title">Four things we won&apos;t compromise on</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {values.map((v) => (
              <div key={v.title} className="card p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-md bg-amber-subtle border border-amber-border flex items-center justify-center flex-shrink-0">
                    <v.icon className="w-4 h-4 text-amber" />
                  </div>
                  <h3 className="text-white font-bold text-base">{v.title}</h3>
                </div>
                <p className="text-text-muted text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-bg">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <p className="section-tag mb-3">The journey</p>
            <h2 className="section-title">How we got here</h2>
          </div>
          <div className="space-y-0">
            {milestones.map((m, i) => (
              <div key={m.year} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-amber-subtle border border-amber-border flex items-center justify-center flex-shrink-0">
                    <span className="text-amber font-bold text-xs">{m.year}</span>
                  </div>
                  {i < milestones.length - 1 && <div className="w-px flex-1 bg-border my-2" />}
                </div>
                <div className="pb-8 last:pb-0">
                  <p className="text-text-secondary text-sm leading-relaxed">{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal */}
      <section className="py-12 bg-bg-surface border-y border-border">
        <div className="container mx-auto max-w-2xl text-center">
          <p className="section-tag mb-3">Platform status</p>
          <h2 className="font-display text-h3 text-white mb-4">A marketplace, not a contractor</h2>
          <p className="text-text-secondary text-sm leading-relaxed max-w-lg mx-auto">
            Dwellinger operates as a marketplace and technology platform. Contractor liability
            remains with the contractor — Dwellinger provides the marketplace, the tools, and the
            intelligence layer. All platform subscriptions and transactions are processed securely
            through our payments provider and our verified contractor programme.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-bg border-t border-border">
        <div className="container mx-auto text-center">
          <h2 className="section-title mb-4">Be part of what comes next</h2>
          <p className="text-text-secondary mb-8 max-w-lg mx-auto">
            Dwellinger is live and growing. We&apos;re looking for contractors who want to build their
            Builder Score™ reputation and homeowners who want a smarter way to plan their build.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/register" className="btn-primary-lg">
              Get started free <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact" className="btn-secondary text-base px-8 py-4">
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
