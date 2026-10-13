import { Metadata } from 'next'
import Link from 'next/link'
import { pageMetadata } from '@/lib/seo'
import { CheckCircle, ArrowRight, Search, FileText, Shield, Hammer, BarChart3, Users } from 'lucide-react'

export const metadata: Metadata = pageMetadata({
  path: '/how-it-works',
  title: 'How Dwellinger Works — From First Idea to Project Complete',
  description: 'Dwellinger guides homeowners, contractors, and investors through every stage of a construction project — estimates, verified contractors, contracts, and project management in one platform.',
})

const steps = [
  {
    number: '01',
    icon: FileText,
    title: 'Describe your project',
    subtitle: 'Get a ballpark in under 2 minutes',
    description: 'Tell us what you want to build — a loft conversion, rear extension, full refurbishment, or new build. Our AI estimates a realistic budget range based on real UK project data. No sign-up required.',
    detail: 'This is a planning tool, not a formal quote. It gives you a range you can actually use to decide whether to proceed — before spending time meeting contractors.',
    cta: { label: 'Try the estimator', href: '/estimate' },
    color: '#C4773B',
  },
  {
    number: '02',
    icon: Search,
    title: 'Search verified contractors',
    subtitle: 'Ranked by Builder Score™, not by who paid most',
    description: 'Every contractor on Dwellinger carries a Builder Score™ — a 0–1000 rating built from five verified dimensions: compliance records, insurance status, payment behaviour, project track record, and review quality.',
    detail: 'Results are ranked by Builder Score™ by default. You can filter by trade, location, project type, and score tier. Unlike directory listings, nobody can pay to move up the rankings.',
    cta: { label: 'Search contractors', href: '/search' },
    color: '#1A2340',
  },
  {
    number: '03',
    icon: Shield,
    title: 'Commission a cost plan',
    subtitle: 'QS-reviewed estimates from £95',
    description: 'Once you have shortlisted contractors, commission a proper cost plan. Our QS team reviews drawings, specifications, and site photos to produce a structured cost breakdown — not a back-of-envelope figure.',
    detail: 'Five tiers from Outline (£95, 5 working days) to Premium (£350, full specification-level pricing). Every cost plan includes assumptions, exclusions, and a basis-of-estimate statement.',
    cta: { label: 'See estimating tiers', href: '/services/estimating' },
    color: '#C4773B',
  },
  {
    number: '04',
    icon: Users,
    title: 'Appoint with confidence',
    subtitle: 'Issue a contract, agree milestones, set payment terms',
    description: 'Select your contractor and issue a contract on-platform. Milestones, payment terms, variation procedures, and completion criteria are all set before work starts — protecting both sides.',
    detail: 'Contracts are based on JCT-aligned residential forms adapted for Dwellinger. You can adjust milestone dates, payment triggers, and retention terms before sending for signature.',
    cta: null,
    color: '#1A2340',
  },
  {
    number: '05',
    icon: Hammer,
    title: 'Manage the build',
    subtitle: 'Documents, payments, and sign-off in one dashboard',
    description: 'Once work starts, everything moves to your project dashboard. Milestone sign-offs, payment releases, site photos, variation requests, and document storage — all in one place.',
    detail: 'Your contractor uploads progress photos and requests milestone sign-offs. You approve or raise a snag. Payment is released when you are satisfied — not before.',
    cta: null,
    color: '#C4773B',
  },
  {
    number: '06',
    icon: BarChart3,
    title: 'Complete and review',
    subtitle: 'Final sign-off updates your contractor\'s Builder Score™',
    description: 'At completion, you carry out a final walkthrough and sign off snagging items. Your verified review — linked to your specific project — is added to your contractor\'s Builder Score™.',
    detail: 'Unlike platform reviews that can be posted by anyone, Dwellinger reviews are linked to verified projects with documented costs and timelines. They carry more weight because they are harder to fake.',
    cta: null,
    color: '#1A2340',
  },
]

const audienceCards = [
  {
    audience: 'Homeowners',
    headline: 'Know the real cost before you commit',
    points: [
      'Free ballpark estimate in under 2 minutes',
      'Verified contractors with Builder Score™',
      'Commission a proper cost plan from £95',
      'Contract and payment management on-platform',
    ],
    cta: { label: 'Start your project', href: '/estimate' },
  },
  {
    audience: 'Contractors',
    headline: 'Win better work, spend less on admin',
    points: [
      'Builder Score™ badge that proves you are trustworthy',
      'Qualified leads matched to your trade and area',
      'AI-powered admin: quotes, CDM documents, client messages',
      'Payment protection through milestone-based releases',
    ],
    cta: { label: 'Join as a contractor', href: '/register?type=contractor' },
  },
  {
    audience: 'Investors & professionals',
    headline: 'Construction intelligence for every deal',
    points: [
      'Pre-purchase build cost estimates',
      'Planning approval data and local authority benchmarks',
      'Residual land value calculator',
      'Contractor procurement with verified sourcing',
    ],
    cta: { label: 'Explore tools', href: '/tools/development-appraisal' },
  },
]

const faq = [
  {
    q: 'Is Dwellinger free to use as a homeowner?',
    a: 'The search, ballpark estimator, and Builder Score™ lookup are all free. QS-reviewed cost plans start from £95. Contractor appointments and project management are included when you appoint through the platform.',
  },
  {
    q: 'How are contractors verified?',
    a: 'Contractors apply to join and provide documentation for five verification dimensions: Companies House records, public liability insurance, CDM awareness, payment history references, and project track record. Builder Score™ is recalculated as new information arrives.',
  },
  {
    q: 'What is Builder Score™?',
    a: 'Builder Score™ is a 0–1000 trust rating for UK contractors. It is built from verified data across five dimensions: compliance, insurance, payment behaviour, track record, and verified reviews. It is not a star rating — it cannot be bought or manipulated.',
  },
  {
    q: 'How are the cost plans produced?',
    a: 'Our in-house QS team reviews your drawings, specifications, location, and any site information you provide. Costs are benchmarked against recent UK project data. Every plan includes a basis-of-estimate statement so you know what assumptions were made.',
  },
  {
    q: 'Do I have to use Dwellinger for the full journey?',
    a: 'No. You can use just the estimator, just the contractor search, or just the QS cost plan service. The platform works at every stage — but you are not locked into a full journey if you only need one part of it.',
  },
  {
    q: 'How does payment protection work?',
    a: 'Payments on Dwellinger are milestone-based. Money is only released when you sign off a completed stage — not when work starts. Variation requests go through a formal approval process before additional costs are incurred.',
  },
]

export default function HowItWorksPage() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-16 pb-16 bg-bg">
        <div className="container mx-auto">
          <p className="section-tag mb-3">How it works</p>
          <h1 className="font-display text-h1 text-white max-w-2xl mb-4">
            From first idea to{' '}
            <span className="text-amber">project complete</span>
          </h1>
          <p className="text-text-secondary text-lg max-w-xl leading-relaxed mb-8">
            Dwellinger connects verified contractors, QS-reviewed cost plans, and project management in one platform — so every decision is backed by real data.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link href="/estimate" className="btn-primary inline-flex items-center gap-2">
              Get a free estimate <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/search" className="btn-secondary inline-flex items-center gap-2">
              Search contractors
            </Link>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 bg-bg-surface border-y border-border">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <div key={i} className="flex gap-6 mb-12 last:mb-0">
                  {/* Left: number + line */}
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0" style={{ backgroundColor: step.color }}>
                      {step.number}
                    </div>
                    {i < steps.length - 1 && (
                      <div className="w-px flex-1 mt-2" style={{ backgroundColor: '#2a3550', minHeight: 40 }} />
                    )}
                  </div>
                  {/* Right: content */}
                  <div className="pb-4 flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Icon className="w-5 h-5" style={{ color: step.color }} />
                      <span className="text-text-muted text-sm">{step.subtitle}</span>
                    </div>
                    <h2 className="font-display text-h3 text-white mb-3">{step.title}</h2>
                    <p className="text-text-secondary leading-relaxed mb-3">{step.description}</p>
                    <p className="text-text-muted text-sm leading-relaxed mb-4">{step.detail}</p>
                    {step.cta && (
                      <Link href={step.cta.href} className="inline-flex items-center gap-1 text-amber text-sm font-semibold hover:underline">
                        {step.cta.label} <ArrowRight className="w-3 h-3" />
                      </Link>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-16 bg-bg">
        <div className="container mx-auto">
          <p className="section-tag mb-3">Who it\'s for</p>
          <h2 className="font-display text-h2 text-white mb-10 max-w-xl">
            One platform, three audiences
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {audienceCards.map((card, i) => (
              <div key={i} className="card p-7">
                <p className="section-tag mb-3">{card.audience}</p>
                <h3 className="font-bold text-white text-lg mb-4 leading-snug">{card.headline}</h3>
                <ul className="space-y-3 mb-6">
                  {card.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-amber flex-shrink-0 mt-0.5" />
                      <span className="text-text-secondary text-sm leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
                <Link href={card.cta.href} className="inline-flex items-center gap-1 text-amber text-sm font-semibold hover:underline">
                  {card.cta.label} <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-bg-surface border-t border-border">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto">
            <p className="section-tag mb-3">Common questions</p>
            <h2 className="font-display text-h2 text-white mb-10">FAQ</h2>
            <div className="space-y-6">
              {faq.map((item, i) => (
                <div key={i} className="border-b border-border pb-6 last:border-0">
                  <h3 className="font-bold text-white mb-2">{item.q}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-bg">
        <div className="container mx-auto text-center">
          <h2 className="font-display text-h2 text-white mb-4">Ready to start?</h2>
          <p className="text-text-secondary mb-8 max-w-lg mx-auto">Get a free ballpark estimate or search verified contractors — no sign-up required to look.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/estimate" className="btn-primary inline-flex items-center gap-2">
              Get a free estimate <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/search" className="btn-secondary inline-flex items-center gap-2">
              Search contractors
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
