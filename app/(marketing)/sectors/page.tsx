import { Metadata } from 'next'
import Link from 'next/link'
import { pageMetadata } from '@/lib/seo'
import { ArrowRight, Home, Building2, TrendingUp, Star } from 'lucide-react'

export const metadata: Metadata = pageMetadata({
  path: '/sectors',
  title: 'Construction & Property Sectors — Dwellinger',
  description: 'Dwellinger serves homeowners, residential developers, commercial clients, and bespoke project teams. Find the right tools, contractors, and cost intelligence for your sector.',
})

const sectors = [
  {
    icon: Home,
    title: 'Residential',
    subtitle: 'Extensions, loft conversions & refurbishments',
    description: 'Homeowners planning extensions, loft conversions, full refurbishments, or structural alterations. Verified contractors, cost estimates, and project management from first idea to practical completion.',
    href: '/sectors/residential',
    features: ['Builder Score™ contractor search', 'AI-powered cost estimates', 'Planning permission guidance', 'Project management tools'],
  },
  {
    icon: Building2,
    title: 'Developers',
    subtitle: 'Residential development & conversion',
    description: 'Property developers and investors acquiring sites, planning conversions, or managing multi-unit residential projects. Pre-purchase build cost estimates, development appraisals, and verified contractor sourcing.',
    href: '/sectors/developers',
    features: ['Development appraisal calculator', 'Pre-purchase cost estimates', 'Planning approval data', 'Contractor procurement at scale'],
  },
  {
    icon: TrendingUp,
    title: 'Commercial',
    subtitle: 'Commercial fit-out & refurbishment',
    description: 'Commercial clients and businesses requiring fit-out, refurbishment, or construction work to commercial premises. QS cost plans, compliance-aware contractor sourcing, and structured procurement.',
    href: '/sectors/commercial',
    features: ['QS-reviewed cost plans', 'CDM-aware contractor sourcing', 'Compliance documentation', 'Project delivery support'],
  },
  {
    icon: Star,
    title: 'Bespoke',
    subtitle: 'High-specification & complex projects',
    description: 'High-specification residential, heritage properties, architect-led schemes, and complex structural projects. Specialist contractor sourcing, detailed cost planning, and tailored project support.',
    href: '/sectors/bespoke',
    features: ['Specialist contractor matching', 'Heritage & listed building experience', 'Architect collaboration support', 'Premium specification cost data'],
  },
]

export default function SectorsPage() {
  return (
    <div>
      <section className="pt-16 pb-16 bg-bg">
        <div className="container mx-auto">
          <p className="section-tag mb-3">Sectors</p>
          <h1 className="font-display text-h1 text-white max-w-2xl mb-4">
            Built for every{' '}
            <span className="text-amber">type of project</span>
          </h1>
          <p className="text-text-secondary text-lg max-w-xl leading-relaxed mb-8">
            Whether you’re a homeowner planning an extension or a developer appraising a site, Dwellinger has the tools and verified contractors for your sector.
          </p>
          <Link href="/estimate" className="btn-primary inline-flex items-center gap-2">
            Get a free estimate <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <section className="py-16 bg-bg-surface border-y border-border">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {sectors.map((s, i) => {
              const Icon = s.icon
              return (
                <div key={i} className="card p-8">
                  <Icon className="w-6 h-6 text-amber mb-4" />
                  <h2 className="font-bold text-white text-xl mb-1">{s.title}</h2>
                  <p className="text-amber text-sm mb-3">{s.subtitle}</p>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">{s.description}</p>
                  <ul className="space-y-2 mb-6">
                    {s.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber flex-shrink-0" />
                        <span className="text-text-muted text-sm">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={s.href} className="inline-flex items-center gap-1 text-amber text-sm font-semibold hover:underline">
                    Explore {s.title.toLowerCase()} <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-bg">
        <div className="container mx-auto text-center">
          <h2 className="font-display text-h2 text-white mb-4">Not sure where to start?</h2>
          <p className="text-text-secondary mb-8 max-w-md mx-auto">The free estimator works for any project type. Get a budget range in under 2 minutes.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/estimate" className="btn-primary inline-flex items-center gap-2">
              Get a free estimate <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/search" className="btn-secondary">Search contractors</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
