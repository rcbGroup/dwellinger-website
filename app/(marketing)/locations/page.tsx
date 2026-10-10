import { pageMetadata } from '@/lib/seo'

const BOROUGHS = [
  { name: 'Barking and Dagenham', slug: 'barking-and-dagenham' },
  { name: 'Barnet', slug: 'barnet' },
  { name: 'Bexley', slug: 'bexley' },
  { name: 'Brent', slug: 'brent' },
  { name: 'Bromley', slug: 'bromley' },
  { name: 'Camden', slug: 'camden' },
  { name: 'City of London', slug: 'city-of-london' },
  { name: 'Croydon', slug: 'croydon' },
  { name: 'Ealing', slug: 'ealing' },
  { name: 'Enfield', slug: 'enfield' },
  { name: 'Greenwich', slug: 'greenwich' },
  { name: 'Hackney', slug: 'hackney' },
  { name: 'Hammersmith and Fulham', slug: 'hammersmith-and-fulham' },
  { name: 'Haringey', slug: 'haringey' },
  { name: 'Harrow', slug: 'harrow' },
  { name: 'Havering', slug: 'havering' },
  { name: 'Hillingdon', slug: 'hillingdon' },
  { name: 'Hounslow', slug: 'hounslow' },
  { name: 'Islington', slug: 'islington' },
  { name: 'Kensington and Chelsea', slug: 'kensington-and-chelsea' },
  { name: 'Kingston upon Thames', slug: 'kingston-upon-thames' },
  { name: 'Lambeth', slug: 'lambeth' },
  { name: 'Lewisham', slug: 'lewisham' },
  { name: 'Merton', slug: 'merton' },
  { name: 'Newham', slug: 'newham' },
  { name: 'Redbridge', slug: 'redbridge' },
  { name: 'Richmond upon Thames', slug: 'richmond-upon-thames' },
  { name: 'Southwark', slug: 'southwark' },
  { name: 'Sutton', slug: 'sutton' },
  { name: 'Tower Hamlets', slug: 'tower-hamlets' },
  { name: 'Waltham Forest', slug: 'waltham-forest' },
  { name: 'Wandsworth', slug: 'wandsworth' },
  { name: 'Westminster', slug: 'westminster' },
]

export const metadata = pageMetadata({
  path: '/locations',
  title: 'Find Verified Contractors in London | Dwellinger',
  description: 'Search verified builders and contractors across all 32 London boroughs and the City of London. Every contractor carries a Builder Score™ trust rating.',
})

export default function LocationsPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <nav className="text-sm text-gray-500 mb-4">
            <a href="/" className="hover:text-blue-600">Home</a>
            <span className="mx-2">›</span>
            <span className="text-gray-900">Locations</span>
          </nav>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Verified Contractors Across London
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Dwellinger covers all 32 London boroughs and the City of London. Every contractor carries a Builder Score™ — a trust rating built from verified reviews, CDM compliance records and payment history.
          </p>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Select your borough</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {BOROUGHS.map(({ name, slug }) => (
              <a
                key={slug}
                href={`/locations/${slug}`}
                className="block bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm font-medium text-gray-800 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 transition-colors"
              >
                {name}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-4">What is Builder Score™?</h2>
          <p className="text-gray-600 mb-4">
            Builder Score™ is a 0–1000 trust rating published by Dwellinger for every contractor on the platform. Unlike star ratings, Builder Score is calculated from verified data — CDM compliance records, payment behaviour, insurance status and dispute outcomes.
          </p>
          <a href="/builder-score" className="text-blue-600 hover:underline font-medium">Learn how Builder Score™ is calculated →</a>
        </div>
      </section>
    </main>
  )
}
