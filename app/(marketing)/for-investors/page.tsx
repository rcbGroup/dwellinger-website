import { Metadata } from 'next'
import Link from 'next/link'
import { pageMetadata } from '@/lib/seo'
import { CheckCircle, ArrowRight, TrendingUp, MapPin, Calculator, Shield } from 'lucide-react'

export const metadata: Metadata = pageMetadata({
  path: '/for-investors',
  title: 'Dwellinger for Property Investors — Construction Intelligence for Every Deal',
  description: 'Pre-purchase build cost estimates, planning approval data, residual land value calculator, and verified contractor procurement. All the intelligence you need before you commit.',
})

const tools = [
  {
    icon: Calculator,
    title: 'Pre-purchase build cost estimates',
    body: 'Get a QS-reviewed cost estimate before you bid on a site or property. Know your build cost before you agree your purchase price — not after you’ve exchanged.',
    cta: { label: 'Get an estimate', href: '/services/estimating' },
  },
  {
    icon: TrendingUp,
    title: 'Residual land value calculator',
    body: 'Calculate the maximum price you should pay for a development site. Input GDV, build cost, fees, finance, and profit margin — and get the residual land value in seconds.',
    cta: { label: 'Open calculator', href: '/tools/development-appraisal' },
  },
  {
    icon: MapPin,
    title: 'Planning approval data',
    body: 'See planning approval rates, typical decision timescales, and local authority benchmarks before you commit to a site. Know the planning risk before it is priced in.',
    cta: { label: 'Explore planning data', href: '/tools/development-appraisal' },
  },
  {
    icon: Shield,
    title: 'Verified contractor procurement',
    body: 'Find contractors with Builder Score™ ratings verified across five dimensions. Shortlist, compare, and appoint with documented compliance — not just star ratings.',
    cta: { label: 'Search contractors', href: '/search' },
  },
]

export default function ForInvestorsPage() {
  return (
    <div>
      <section className="pt-16 pb-16 bg-bg">
        <div className="container mx-auto">
          <p className="section-tag mb-3">For investors</p>
          <h1 className="font-display text-h1 text-white max-w-2xl mb-4">
            Construction intelligence{' '}
            <span className="text-amber">for every deal.</span>
          </h1>
          <p className="text-text-secondary text-lg max-w-xl leading-relaxed mb-8">
            Pre-purchase build cost estimates, planning data, residual land value tools, and verified contractor sourcing — everything a property investor needs before committing to a deal.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link href="/tools/development-appraisal" className="btn-primary inline-flex items-center gap-2">
              Open development appraisal <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/services/estimating" className="btn-secondary">Get a cost estimate</Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-bg-surface border-y border-border">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {tools.map((t, i) => {
              const Icon = t.icon
              return (
                <div key={i} className="card p-7">
                  <Icon className="w-6 h-6 text-amber mb-4" />
                  <h3 className="font-bold text-white text-lg mb-3">{t.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">{t.body}</p>
                  <Link href={t.cta.href} className="inline-flex items-center gap-1 text-amber text-sm font-semibold hover:underline">
                    {t.cta.label} <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-bg">
        <div className="container mx-auto text-center">
          <h2 className="font-display text-h2 text-white mb-4">Start your appraisal</h2>
          <p className="text-text-secondary mb-8 max-w-md mx-auto">Free development appraisal tool — no sign-up required.</p>
          <Link href="/tools/development-appraisal" className="btn-primary inline-flex items-center gap-2">
            Open calculator <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
