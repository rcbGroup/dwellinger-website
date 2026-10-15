import Link from 'next/link'
import { MapPin, ArrowRight, Building2 } from 'lucide-react'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  path: '/locations',
  title: 'Construction Estimating & QS Services by City — Dwellinger',
  description: 'Find verified construction costs, quantity surveying insights, and Builder Score™-verified contractors in London, Manchester, Birmingham, Bristol, Leeds, Edinburgh, Glasgow and Liverpool.',
})

const cities = [
  {
    slug: 'london',
    name: 'London',
    region: 'Greater London',
    headline: 'UK\'s most complex construction market',
    costRange: '£1,900–£4,500/m²',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&auto=format&q=70',
    highlight: 'ULEZ, conservation areas, and London clay add significant cost complexity',
  },
  {
    slug: 'manchester',
    name: 'Manchester',
    region: 'Greater Manchester',
    headline: 'Strong value relative to southern markets',
    costRange: '£1,500–£2,800/m²',
    image: 'https://images.unsplash.com/photo-1567939416015-f14d7db9b0f6?w=600&auto=format&q=70',
    highlight: 'Active Northern Powerhouse development driving strong contractor supply',
  },
  {
    slug: 'birmingham',
    name: 'Birmingham',
    region: 'West Midlands',
    headline: 'Competitive mid-range market with strong capacity',
    costRange: '£1,450–£2,600/m²',
    image: 'https://images.unsplash.com/photo-1549924231-f129b911e442?w=600&auto=format&q=70',
    highlight: 'Post-Commonwealth Games regeneration continues to drive investment',
  },
  {
    slug: 'bristol',
    name: 'Bristol',
    region: 'South West England',
    headline: 'Growing market with strong sustainable build focus',
    costRange: '£1,600–£2,900/m²',
    image: 'https://images.unsplash.com/photo-1572816083494-0be9c5bde4fa?w=600&auto=format&q=70',
    highlight: 'Sandstone geology and listed buildings add complexity in central areas',
  },
  {
    slug: 'leeds',
    name: 'Leeds',
    region: 'West Yorkshire',
    headline: 'Value-driven market with growing demand',
    costRange: '£1,400–£2,500/m²',
    image: 'https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?w=600&auto=format&q=70',
    highlight: 'Rapid city-centre regeneration creating strong subcontractor demand',
  },
  {
    slug: 'edinburgh',
    name: 'Edinburgh',
    region: 'Scotland',
    headline: 'Premium market with listed building complexity',
    costRange: '£1,700–£3,200/m²',
    image: 'https://images.unsplash.com/photo-1506377295352-e3154d43ea9e?w=600&auto=format&q=70',
    highlight: 'Historic conservation requirements add meaningful premium in central areas',
  },
  {
    slug: 'glasgow',
    name: 'Glasgow',
    region: 'Scotland',
    headline: 'Competitive rates with strong trade capacity',
    costRange: '£1,350–£2,500/m²',
    image: 'https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?w=600&auto=format&q=70',
    highlight: 'Tenement conversion specialists widely available; competitive market',
  },
  {
    slug: 'liverpool',
    name: 'Liverpool',
    region: 'Merseyside',
    headline: 'Regeneration-driven market with improving capacity',
    costRange: '£1,400–£2,500/m²',
    image: 'https://images.unsplash.com/photo-1531158781940-10b3e56ebbec?w=600&auto=format&q=70',
    highlight: 'UNESCO waterfront heritage drives specialist conservation demand',
  },
]

export default function LocationsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-16 pb-12 bg-bg">
        <div className="container mx-auto">
          <p className="section-tag mb-3">By location</p>
          <h1 className="font-display text-h1 text-white max-w-2xl mb-4">
            Construction costs &{' '}
            <span className="text-amber">contractors by city</span>
          </h1>
          <p className="text-text-secondary text-lg max-w-xl leading-relaxed">
            Building costs vary significantly across the UK. Find city-specific cost guides,
            local planning context, and Builder Score™-verified contractors near you.
          </p>
        </div>
      </section>

      {/* City grid */}
      <section className="py-12 bg-bg">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/locations/${city.slug}`}
                className="card overflow-hidden hover:border-amber transition-colors group flex flex-col"
              >
                {/* Image */}
                <div className="relative h-36 overflow-hidden">
                  <img
                    src={city.image}
                    alt={`Construction in ${city.name}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg/80 to-transparent" />
                  <div className="absolute bottom-2 left-3 flex items-center gap-1 text-white text-xs font-semibold">
                    <MapPin className="w-3 h-3" />
                    {city.region}
                  </div>
                </div>
                {/* Content */}
                <div className="p-4 flex flex-col flex-1">
                  <h2 className="font-bold text-white text-base mb-1 group-hover:text-amber transition-colors">
                    {city.name}
                  </h2>
                  <p className="text-text-muted text-xs mb-3 flex-1 leading-relaxed">{city.highlight}</p>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-amber font-bold">{city.costRange}</span>
                    <ArrowRight className="w-4 h-4 text-text-muted group-hover:text-amber transition-colors" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-bg-surface border-t border-border">
        <div className="container mx-auto text-center">
          <Building2 className="w-10 h-10 text-amber mx-auto mb-4" />
          <h2 className="font-display text-h2 text-white mb-4">Not sure where to start?</h2>
          <p className="text-text-secondary max-w-md mx-auto mb-8">
            Use our free estimating tool to get a project-specific ballpark based on your location, size, and specification.
          </p>
          <Link href="/estimate" className="btn-primary">
            Get a free estimate
          </Link>
        </div>
      </section>
    </div>
  )
}
