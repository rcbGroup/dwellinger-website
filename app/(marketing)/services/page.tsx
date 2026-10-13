import { Metadata } from 'next'
import Link from 'next/link'
import { pageMetadata } from '@/lib/seo'
import { ArrowRight, FileText, Calculator, Shield, Ruler } from 'lucide-react'

export const metadata: Metadata = pageMetadata({
  path: '/services',
  title: 'Construction Estimating & QS Services — Dwellinger',
  description: 'QS-reviewed cost plans, construction estimating, and quantity surveying services for homeowners, developers, and professionals across the UK.',
})

const services = [
  {
    icon: FileText,
    title: 'Construction Cost Estimating',
    subtitle: 'From £95',
    description: 'QS-reviewed cost plans based on your drawings, location, and specification. Five tiers from Outline (5 working days) to Premium (full specification-level pricing). Every plan includes a basis-of-estimate statement with assumptions and exclusions.',
    href: '/services/estimating',
    cta: 'View estimating tiers',
  },
  {
    icon: Ruler,
    title: 'Quantity Surveying & Cost Management',
    subtitle: 'For larger projects',
    description: 'Full quantity surveying, bill of quantities, cost control, and value engineering for residential and light commercial projects. Suitable for projects over £150,000 in value where ongoing cost management adds material value.',
    href: '/services/quantity-surveying',
    cta: 'Learn about QS services',
  },
  {
    icon: Shield,
    title: 'Builder Score™ Verification',
    subtitle: 'Free for clients',
    description: 'Every contractor search result on Dwellinger is ranked by Builder Score™ — a 0–1000 trust rating built from verified compliance, insurance, payment behaviour, track record, and reviews. Search, verify, and shortlist without paying for the intelligence.',
    href: '/builder-score',
    cta: 'Understand Builder Score™',
  },
  {
    icon: Calculator,
    title: 'Free AI Estimator',
    subtitle: 'No sign-up required',
    description: 'Describe your project and get an AI-powered budget range in under 2 minutes. Covers extensions, loft conversions, full refurbishments, and new build. Uses real UK project data. Not a quote — a planning tool.',
    href: '/estimate',
    cta: 'Try the estimator free',
  },
]

const highlights = [
  { stat: '£95', label: 'QS cost plan from' },
  { stat: '5', label: 'Working days for outline plan' },
  { stat: '1,972', label: 'Knowledge articles' },
  { stat: 'Free', label: 'AI estimator, always' },
]

export default function ServicesPage() {
  return (
    <div>
      <section className="pt-16 pb-16 bg-bg">
        <div className="container mx-auto">
          <p className="section-tag mb-3">Services</p>
          <h1 className="font-display text-h1 text-white max-w-2xl mb-4">
            Estimating and QS services{' '}
            <span className="text-amber">for the whole project</span>
          </h1>
          <p className="text-text-secondary text-lg max-w-xl leading-relaxed mb-8">
            From a free AI ballpark to a full QS cost plan and quantity surveying service — independent, verified, and always tied to real UK project data.
          </p>
          <Link href="/estimate" className="btn-primary inline-flex items-center gap-2">
            Get a free estimate <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 bg-bg-surface border-y border-border">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {highlights.map((h, i) => (
              <div key={i} className="text-center">
                <div className="font-display text-3xl text-amber font-bold mb-1">{h.stat}</div>
                <div className="text-text-muted text-sm">{h.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-16 bg-bg">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s, i) => {
              const Icon = s.icon
              return (
                <div key={i} className="card p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="w-6 h-6 text-amber" />
                    <span className="text-amber text-sm font-semibold">{s.subtitle}</span>
                  </div>
                  <h2 className="font-bold text-white text-xl mb-3">{s.title}</h2>
                  <p className="text-text-secondary text-sm leading-relaxed mb-5">{s.description}</p>
                  <Link href={s.href} className="inline-flex items-center gap-1 text-amber text-sm font-semibold hover:underline">
                    {s.cta} <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-bg-surface border-t border-border">
        <div className="container mx-auto text-center max-w-xl">
          <h2 className="font-display text-h2 text-white mb-4">Not sure which service you need?</h2>
          <p className="text-text-secondary mb-8">Start with the free ballpark estimator. Once you see the range, you’ll know whether a QS cost plan adds value for your project.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/estimate" className="btn-primary inline-flex items-center gap-2">
              Try the free estimator <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact" className="btn-secondary">Talk to the team</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
