import { Metadata } from 'next'
import Link from 'next/link'
import { pageMetadata } from '@/lib/seo'
import { ArrowRight, Calculator, Home, Building2, TrendingUp } from 'lucide-react'

export const metadata: Metadata = pageMetadata({
  path: '/tools',
  title: 'Free Construction & Property Tools — Dwellinger',
  description: 'Free extension cost calculator, loft conversion calculator, and development appraisal tool for UK homeowners, developers, and property investors.',
})

const tools = [
  {
    icon: Home,
    title: 'Extension Cost Calculator',
    subtitle: 'Rear, side, or wrap-around',
    description: 'Estimate the cost of a house extension in your area. Input size, finish spec, and location to get a cost range based on real UK project data. Free and instant.',
    href: '/tools/extension-cost-calculator',
    badge: 'Free',
  },
  {
    icon: Building2,
    title: 'Loft Conversion Calculator',
    subtitle: 'Dormer, Velux, hip-to-gable, and mansard',
    description: 'Find out what a loft conversion might cost for your property type. Covers all conversion types and adjusts for London vs national rates.',
    href: '/tools/loft-conversion-calculator',
    badge: 'Free',
  },
  {
    icon: TrendingUp,
    title: 'Development Appraisal Calculator',
    subtitle: 'Residual land value & project viability',
    description: 'Model a property development deal. Input GDV, build cost, finance, fees, and profit target to calculate the maximum price you should pay for a site.',
    href: '/tools/development-appraisal',
    badge: 'Free',
  },
  {
    icon: Calculator,
    title: 'Project Estimator',
    subtitle: 'AI-powered ballpark estimate',
    description: 'Describe your project and get a budget range in under 2 minutes. Covers extensions, loft conversions, full refurbishments, garage conversions, and new build. No sign-up required.',
    href: '/estimate',
    badge: 'Free',
  },
]

export default function ToolsPage() {
  return (
    <div>
      <section className="pt-16 pb-16 bg-bg">
        <div className="container mx-auto">
          <p className="section-tag mb-3">Tools</p>
          <h1 className="font-display text-h1 text-white max-w-2xl mb-4">
            Free construction{' '}
            <span className="text-amber">& property tools</span>
          </h1>
          <p className="text-text-secondary text-lg max-w-xl leading-relaxed mb-8">
            Calculators and estimating tools built on real UK project data. All free. No sign-up required.
          </p>
        </div>
      </section>

      <section className="py-16 bg-bg-surface border-y border-border">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {tools.map((t, i) => {
              const Icon = t.icon
              return (
                <Link
                  key={i}
                  href={t.href}
                  className="card p-8 hover:border-amber transition-colors group block"
                >
                  <div className="flex items-start justify-between mb-4">
                    <Icon className="w-6 h-6 text-amber" />
                    <span className="badge-amber text-xs">{t.badge}</span>
                  </div>
                  <h2 className="font-bold text-white text-xl mb-1 group-hover:text-amber transition-colors">{t.title}</h2>
                  <p className="text-amber text-sm mb-3">{t.subtitle}</p>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">{t.description}</p>
                  <span className="inline-flex items-center gap-1 text-amber text-sm font-semibold">
                    Open tool <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-bg">
        <div className="container mx-auto text-center">
          <h2 className="font-display text-h2 text-white mb-4">Need a proper cost plan?</h2>
          <p className="text-text-secondary mb-8 max-w-md mx-auto">When you’re ready to go further, commission a QS-reviewed cost plan from £95.</p>
          <Link href="/services/estimating" className="btn-primary inline-flex items-center gap-2">
            See estimating tiers <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
