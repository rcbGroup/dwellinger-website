import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  path: '/locations',
  title: 'Find Verified Contractors by London Borough | Dwellinger',
  description: 'Find verified builders and contractors across all 32 London boroughs and the City of London. Every contractor has a Builder Score™ trust rating.',
})

const BOROUGHS = [
  { slug: 'barking-and-dagenham', name: 'Barking and Dagenham' },
  { slug: 'barnet', name: 'Barnet' },
  { slug: 'bexley', name: 'Bexley' },
  { slug: 'brent', name: 'Brent' },
  { slug: 'bromley', name: 'Bromley' },
  { slug: 'camden', name: 'Camden' },
  { slug: 'city-of-london', name: 'City of London' },
  { slug: 'croydon', name: 'Croydon' },
  { slug: 'ealing', name: 'Ealing' },
  { slug: 'enfield', name: 'Enfield' },
  { slug: 'greenwich', name: 'Greenwich' },
  { slug: 'hackney', name: 'Hackney' },
  { slug: 'hammersmith-and-fulham', name: 'Hammersmith and Fulham' },
  { slug: 'haringey', name: 'Haringey' },
  { slug: 'harrow', name: 'Harrow' },
  { slug: 'havering', name: 'Havering' },
  { slug: 'hillingdon', name: 'Hillingdon' },
  { slug: 'hounslow', name: 'Hounslow' },
  { slug: 'islington', name: 'Islington' },
  { slug: 'kensington-and-chelsea', name: 'Kensington and Chelsea' },
  { slug: 'kingston-upon-thames', name: 'Kingston upon Thames' },
  { slug: 'lambeth', name: 'Lambeth' },
  { slug: 'lewisham', name: 'Lewisham' },
  { slug: 'merton', name: 'Merton' },
  { slug: 'newham', name: 'Newham' },
  { slug: 'redbridge', name: 'Redbridge' },
  { slug: 'richmond-upon-thames', name: 'Richmond upon Thames' },
  { slug: 'southwark', name: 'Southwark' },
  { slug: 'sutton', name: 'Sutton' },
  { slug: 'tower-hamlets', name: 'Tower Hamlets' },
  { slug: 'waltham-forest', name: 'Waltham Forest' },
  { slug: 'wandsworth', name: 'Wandsworth' },
  { slug: 'westminster', name: 'Westminster' },
]

export default function LocationsPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Find Verified Contractors Across London</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Search verified builders and contractors in all 32 London boroughs and the City of London. Every contractor carries a Builder Score™ — a verified trust rating based on reviews, compliance records and payment history.</p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Browse by Borough</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {BOROUGHS.map(borough => (
              <a key={borough.slug} href={`/locations/${borough.slug}`} className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-sm transition-all group">
                <span className="font-medium text-gray-900 group-hover:text-blue-600">{borough.name}</span>
                <span className="text-gray-400 group-hover:text-blue-500">→</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-50 py-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Not sure where to start?</h2>
          <p className="text-gray-600 mb-6">Search by postcode to find verified contractors near you.</p>
          <a href="/search" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">Search All Contractors →</a>
        </div>
      </section>
    </main>
  )
}
