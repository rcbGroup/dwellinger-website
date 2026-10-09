import { pageMetadata } from '@/lib/seo'
import { notFound } from 'next/navigation'

const BOROUGHS: Record<string, { name: string; description: string; trades: string[]; fact: string }> = {
  'barking-and-dagenham': { name: 'Barking and Dagenham', description: 'a predominantly residential east London borough', trades: ['extensions', 'loft conversions', 'kitchen refurbishments', 'bathroom fitting'], fact: "Barking and Dagenham has one of London's fastest-growing housing renovation markets, driven by strong demand for space from young families." },
  'barnet': { name: 'Barnet', description: "one of London's largest outer boroughs", trades: ['loft conversions', 'extensions', 'full refurbishments', 'structural alterations'], fact: "Barnet's mix of Edwardian and 1930s housing stock means many projects involve structural work and heritage-aware design." },
  'bexley': { name: 'Bexley', description: 'a quiet south-east London borough', trades: ['extensions', 'driveways', 'bathroom refurbishments', 'roofing'], fact: "Bexley's semi-detached suburban housing creates strong demand for rear and side extensions." },
  'brent': { name: 'Brent', description: 'a diverse north-west London borough', trades: ['kitchen refurbishments', 'bathroom fitting', 'extensions', 'painting and decorating'], fact: 'Brent has a large private rental sector, creating consistent demand for maintenance and upgrade works.' },
  'bromley': { name: 'Bromley', description: 'the largest London borough by area', trades: ['loft conversions', 'extensions', 'full house refurbishments', 'garden landscaping'], fact: "Bromley's large detached and semi-detached properties make it one of London's strongest markets for loft conversions and extensions." },
  'camden': { name: 'Camden', description: 'a central north London borough', trades: ['Victorian refurbishments', 'basement conversions', 'structural alterations', 'heritage restoration'], fact: "Camden's Victorian and Georgian terraced housing drives demand for specialist heritage refurbishment and basement extension work." },
  'city-of-london': { name: 'City of London', description: "London's historic financial district", trades: ['commercial fit-outs', 'office refurbishments', 'heritage restoration', 'property maintenance'], fact: 'The City of London is primarily commercial, with strong demand for high-specification office fit-outs and heritage building maintenance.' },
  'croydon': { name: 'Croydon', description: 'a major south London borough', trades: ['extensions', 'loft conversions', 'kitchen refurbishments', 'full refurbishments'], fact: "Croydon's ongoing regeneration and affordability relative to inner London make it a hotspot for renovation investment." },
  'ealing': { name: 'Ealing', description: 'a large west London borough', trades: ['extensions', 'loft conversions', 'kitchen and bathroom refurbishments', 'structural alterations'], fact: "Ealing's Edwardian terraces and semi-detached houses are ideally suited for rear extensions and loft conversions." },
  'enfield': { name: 'Enfield', description: 'the northernmost London borough', trades: ['extensions', 'roofing', 'driveways', 'full refurbishments'], fact: "Enfield's mix of large suburban homes and period properties creates varied demand across trade types." },
  'greenwich': { name: 'Greenwich', description: 'a south-east London borough with UNESCO World Heritage status', trades: ['Victorian refurbishments', 'extensions', 'conservation area works', 'kitchen refurbishments'], fact: "Greenwich's conservation areas and Victorian housing require contractors familiar with planning constraints and heritage materials." },
  'hackney': { name: 'Hackney', description: 'a vibrant east London borough', trades: ['Victorian refurbishments', 'kitchen and bathroom refurbishments', 'structural alterations', 'basement conversions'], fact: "Hackney's Victorian terraces and rapid gentrification drive strong demand for high-specification refurbishment." },
  'hammersmith-and-fulham': { name: 'Hammersmith and Fulham', description: 'a west London borough on the Thames', trades: ['Victorian terraced refurbishments', 'extensions', 'basement conversions', 'luxury refurbishments'], fact: 'Property values in Hammersmith and Fulham mean many homeowners invest in high-specification refurbishments and basement extensions.' },
  'haringey': { name: 'Haringey', description: 'a north London borough', trades: ['Victorian refurbishments', 'extensions', 'loft conversions', 'kitchen refurbishments'], fact: "Haringey's mix of Victorian terraces and 1930s housing makes it a consistent market for loft conversions and rear extensions." },
  'harrow': { name: 'Harrow', description: 'a north-west London borough', trades: ['extensions', 'loft conversions', 'driveways', 'bathroom refurbishments'], fact: "Harrow's large family homes and planning policies generally permit well-designed extensions and conversions." },
  'havering': { name: 'Havering', description: 'a large east London borough', trades: ['extensions', 'roofing', 'driveways', 'general maintenance'], fact: 'Havering has a strong homeowner community with consistent demand for extensions and maintenance across its suburban housing stock.' },
  'hillingdon': { name: 'Hillingdon', description: "west London's largest borough", trades: ['extensions', 'loft conversions', 'driveways', 'full refurbishments'], fact: "Hillingdon's 1930s and post-war housing provides ample opportunity for rear and side extensions." },
  'hounslow': { name: 'Hounslow', description: 'a west London borough', trades: ['extensions', 'kitchen refurbishments', 'bathroom fitting', 'loft conversions'], fact: "Hounslow's diverse population and strong rental market create consistent demand for kitchen, bathroom, and extension works." },
  'islington': { name: 'Islington', description: 'a central north London borough', trades: ['Georgian and Victorian refurbishments', 'basement conversions', 'structural alterations', 'luxury refurbishments'], fact: "Islington's Georgian and Victorian stock, combined with high property values, drives demand for premium refurbishments and basement extensions." },
  'kensington-and-chelsea': { name: 'Kensington and Chelsea', description: "one of London's most prestigious boroughs", trades: ['luxury refurbishments', 'basement conversions', 'heritage restoration', 'high-specification fit-outs'], fact: "Kensington and Chelsea is the UK's most densely populated local authority and has one of the highest concentrations of listed buildings, requiring specialist contractors." },
  'kingston-upon-thames': { name: 'Kingston upon Thames', description: 'a south-west London borough', trades: ['extensions', 'loft conversions', 'full refurbishments', 'kitchen and bathroom works'], fact: "Kingston's popularity with families drives demand for space-creating extensions and loft conversions." },
  'lambeth': { name: 'Lambeth', description: 'a south London borough on the Thames', trades: ['Victorian refurbishments', 'kitchen refurbishments', 'extensions', 'roofing'], fact: "Lambeth's Victorian terraces and growing popularity make it a consistent market for refurbishment and conversion works." },
  'lewisham': { name: 'Lewisham', description: 'a south-east London borough', trades: ['extensions', 'loft conversions', 'kitchen refurbishments', 'full refurbishments'], fact: "Lewisham's affordability relative to neighbouring boroughs has attracted significant renovation investment from buyers seeking value." },
  'merton': { name: 'Merton', description: 'a south-west London borough', trades: ['extensions', 'loft conversions', 'kitchen and bathroom refurbishments', 'driveways'], fact: "Merton's mix of Edwardian and inter-war housing provides strong scope for extensions and loft conversions." },
  'newham': { name: 'Newham', description: 'an east London borough', trades: ['extensions', 'refurbishments', 'kitchen fitting', 'roofing'], fact: "Newham's post-Olympic regeneration has driven significant residential investment and renovation activity." },
  'redbridge': { name: 'Redbridge', description: 'a north-east London borough', trades: ['extensions', 'loft conversions', 'kitchen refurbishments', 'general maintenance'], fact: "Redbridge's suburban housing stock and family demographics create consistent demand for extension and refurbishment work." },
  'richmond-upon-thames': { name: 'Richmond upon Thames', description: 'a south-west London borough on the Thames', trades: ['extensions', 'luxury refurbishments', 'loft conversions', 'garden landscaping'], fact: "Richmond's high property values and affluent demographic drive demand for premium refurbishments and well-designed extensions." },
  'southwark': { name: 'Southwark', description: 'a south London borough', trades: ['Victorian refurbishments', 'conversions', 'structural alterations', 'kitchen and bathroom works'], fact: "Southwark's rapid gentrification and mix of period and new-build housing creates a diverse renovation market." },
  'sutton': { name: 'Sutton', description: 'a south London borough', trades: ['extensions', 'loft conversions', 'bathroom refurbishments', 'roofing'], fact: "Sutton's semi-detached suburban housing creates particularly strong demand for rear and side extensions." },
  'tower-hamlets': { name: 'Tower Hamlets', description: 'an east London borough', trades: ['Victorian refurbishments', 'kitchen refurbishments', 'structural alterations', 'roofing'], fact: 'Tower Hamlets mixes Victorian terraces with modern developments, creating varied demand for renovation contractors.' },
  'waltham-forest': { name: 'Waltham Forest', description: 'a north-east London borough', trades: ['Victorian refurbishments', 'extensions', 'loft conversions', 'kitchen refurbishments'], fact: "Waltham Forest's growing popularity and Victorian housing stock have made it one of London's most active renovation markets." },
  'wandsworth': { name: 'Wandsworth', description: 'a south London borough', trades: ['Victorian refurbishments', 'extensions', 'basement conversions', 'luxury refurbishments'], fact: "Wandsworth's high property values and family demographic drive demand for premium extensions and whole-house refurbishments." },
  'westminster': { name: 'Westminster', description: 'the City of Westminster', trades: ['luxury refurbishments', 'heritage restoration', 'listed building works', 'high-specification fit-outs'], fact: 'Westminster has the highest concentration of listed buildings in the UK, requiring specialist contractors with conservation experience.' },
}

interface Props {
  params: { borough: string }
}

export async function generateStaticParams() {
  return Object.keys(BOROUGHS).map(slug => ({ borough: slug }))
}

export async function generateMetadata({ params }: Props) {
  const borough = BOROUGHS[params.borough]
  if (!borough) return {}
  return pageMetadata({
    path: `/locations/${params.borough}`,
    title: `Verified Contractors in ${borough.name} | Dwellinger`,
    description: `Find verified builders and contractors in ${borough.name}. Every contractor has a Builder Score™ trust rating. Search ${borough.trades.slice(0, 2).join(', ')} and more.`,
  })
}

export default function BoroughPage({ params }: Props) {
  const borough = BOROUGHS[params.borough]
  if (!borough) notFound()

  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-4">
            <a href="/" className="hover:text-blue-600">Home</a>
            <span className="mx-2">›</span>
            <a href="/locations" className="hover:text-blue-600">Locations</a>
            <span className="mx-2">›</span>
            <span className="text-gray-900">{borough.name}</span>
          </nav>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Verified Contractors in {borough.name}</h1>
          <p className="text-xl text-gray-600 max-w-2xl">Find verified builders and contractors in {borough.name}, {borough.description}. Every contractor on Dwellinger carries a Builder Score™ — a trust rating built from verified reviews, CDM compliance records and payment history.</p>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular trades in {borough.name}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {borough.trades.map(trade => (
              <div key={trade} className="bg-blue-50 rounded-lg p-3 text-center text-sm font-medium text-blue-800 capitalize">{trade}</div>
            ))}
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8">
            <p className="text-amber-900 text-sm"><strong>Local insight:</strong> {borough.fact}</p>
          </div>
          <a href={`/search?location=${encodeURIComponent(borough.name)}`} className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">Search Verified Contractors in {borough.name} →</a>
        </div>
      </section>

      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-4">What is Builder Score™?</h2>
          <p className="text-gray-600 mb-4">Builder Score™ is a 0–1000 trust rating published by Dwellinger for every contractor on the platform. Unlike star ratings, Builder Score is calculated from verified data — CDM compliance records, payment behaviour, insurance status and dispute outcomes.</p>
          <a href="/builder-score" className="text-blue-600 hover:underline font-medium">Learn how Builder Score™ is calculated →</a>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Other London boroughs</h2>
          <a href="/locations" className="text-blue-600 hover:underline font-medium">View all 32 London boroughs and the City of London →</a>
        </div>
      </section>
    </main>
  )
}
