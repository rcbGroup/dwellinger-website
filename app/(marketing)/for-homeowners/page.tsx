import { Metadata } from 'next'
import Link from 'next/link'
import { pageMetadata } from '@/lib/seo'
import { CheckCircle, ArrowRight, Shield, Search, FileText, Hammer } from 'lucide-react'

export const metadata: Metadata = pageMetadata({
  path: '/for-homeowners',
  title: 'Dwellinger for Homeowners — Verified Builders & Real Estimates',
  description: 'Get a real budget for your project, find verified builders with Builder Score™, and manage your build from start to finish. Free to start.',
})

const benefits = [
  {
    icon: FileText,
    title: 'Real cost estimates, not guesses',
    body: 'Get a free AI-powered ballpark in under 2 minutes, then commission a QS-reviewed cost plan from £95 when you’re ready to go further. Costs are based on real UK project data — not industry averages from a price book published three years ago.',
  },
  {
    icon: Shield,
    title: 'Builders you can actually verify',
    body: 'Every contractor on Dwellinger carries a Builder Score™ — a 0–1000 trust rating built from five verified dimensions: compliance, insurance, payment behaviour, track record, and reviews. You can see exactly what went into their score before you make contact.',
  },
  {
    icon: Search,
    title: 'Search by score, not by who paid most',
    body: 'Dwellinger results are ranked by Builder Score™ by default. Nobody can pay to appear at the top. You filter by trade, location, project type, and score tier — and you see why each contractor ranks where they do.',
  },
  {
    icon: Hammer,
    title: 'Contracts, milestones, and payment protection',
    body: 'Appoint your contractor on-platform. Set payment milestones before work starts. Money is only released when you sign off a completed stage — not when the work begins. Variation requests go through a formal approval process.',
  },
]

const faqs = [
  { q: 'How much does it cost to use Dwellinger?', a: 'The search, ballpark estimator, and Builder Score™ lookup are free. QS-reviewed cost plans start from £95. There is no subscription fee for homeowners.' },
  { q: 'How do I know the builders are genuine?', a: 'Contractors provide documentation for five verification dimensions when they join. Builder Score™ is recalculated as new information arrives. Every review on the platform is linked to a verified project — not self-submitted ratings.' },
  { q: 'What is a QS-reviewed cost plan?', a: 'A cost plan produced by our in-house QS team based on your drawings, specifications, and project location. It includes a basis-of-estimate statement, assumptions, exclusions, and a structured cost breakdown. It is not a contractor quote — it is independent cost verification.' },
  { q: 'Do I need plans or drawings before I start?', a: 'No. The ballpark estimator works from a project description and property type. For a QS cost plan you will need at least planning drawings — the more information you provide, the more accurate the output.' },
]

export default function ForHomeownersPage() {
  return (
    <div>
      <section className="pt-16 pb-16 bg-bg">
        <div className="container mx-auto">
          <p className="section-tag mb-3">For homeowners</p>
          <h1 className="font-display text-h1 text-white max-w-2xl mb-4">
            Know the real cost.{' '}
            <span className="text-amber">Find builders you can trust.</span>
          </h1>
          <p className="text-text-secondary text-lg max-w-xl leading-relaxed mb-8">
            Dwellinger gives you verified cost data, vetted contractors, and payment protection — so you go into your project with eyes open.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link href="/estimate" className="btn-primary inline-flex items-center gap-2">
              Get a free estimate <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/search" className="btn-secondary">Search verified builders</Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-bg-surface border-y border-border">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((b, i) => {
              const Icon = b.icon
              return (
                <div key={i} className="card p-7">
                  <Icon className="w-6 h-6 text-amber mb-4" />
                  <h3 className="font-bold text-white text-lg mb-3">{b.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{b.body}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-bg">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-display text-h2 text-white mb-8">Common questions</h2>
            <div className="space-y-6">
              {faqs.map((f, i) => (
                <div key={i} className="border-b border-border pb-6 last:border-0">
                  <h3 className="font-bold text-white mb-2">{f.q}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-bg-surface border-t border-border">
        <div className="container mx-auto text-center">
          <h2 className="font-display text-h2 text-white mb-4">Start for free</h2>
          <p className="text-text-secondary mb-8 max-w-md mx-auto">Ballpark estimate in under 2 minutes. No account required.</p>
          <Link href="/estimate" className="btn-primary inline-flex items-center gap-2">
            Get your estimate <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
