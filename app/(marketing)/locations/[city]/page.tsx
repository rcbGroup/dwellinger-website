import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { MapPin, ArrowLeft, ArrowRight, CheckCircle, Clock } from 'lucide-react'

const cities: Record<string, {
  slug: string
  name: string
  region: string
  image: string
  costRanges: { label: string; range: string }[]
  intro: string
  marketContext: string
  localFactors: string[]
  planningAuthority: string
  planningNotes: string
  buildingControlNote: string
  seoTitle: string
  seoDescription: string
  recentActivity: string
  nearbyAreas: { name: string; note: string }[]
}> = {
  london: {
    slug: 'london',
    name: 'London',
    region: 'Greater London',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1400&auto=format&q=80',
    seoTitle: 'Construction Costs & Quantity Surveyors in London — 2026 Guide | Dwellinger',
    seoDescription: 'London construction costs range from £1,900 to £4,500/m² in 2026. Find verified QS estimates, local cost guides, and Builder Score™-verified contractors across all London boroughs.',
    intro: 'London is the UK\'s most complex and expensive construction market. Build costs per m² are typically 25–45% higher than equivalent work in the Midlands or North, driven by labour costs, logistics constraints, ground conditions, and planning complexity across 32 boroughs.',
    marketContext: 'The London construction market saw continued demand in 2025–2026 despite higher interest rates, with residential extension and refurbishment activity remaining strong across outer boroughs. Labour availability improved slightly from pandemic-era shortages, but specialist subcontractor lead times remain extended in Central and Inner London.',
    costRanges: [
      { label: 'New build residential (basic)', range: '£2,200–£2,700/m²' },
      { label: 'New build residential (mid-spec)', range: '£2,700–£3,400/m²' },
      { label: 'New build residential (high-spec)', range: '£3,400–£4,500/m²' },
      { label: 'Single-storey rear extension', range: '£1,900–£4,000/m²' },
      { label: 'Dormer loft conversion', range: '£1,600–£2,500/m²' },
      { label: 'Full house refurbishment (mid)', range: '£1,100–£1,700/m²' },
      { label: 'Commercial fit-out (Cat A)', range: '£950–£1,600/m²' },
    ],
    localFactors: [
      'London Clay requires careful foundation design — mini-piles or raft foundations common in many boroughs',
      'ULEZ and Congestion Charge add logistics cost to all deliveries',
      'Loading restrictions, CPZ permits, and scaffolding licences add £2,000–£8,000 overhead on central sites',
      '33% of London properties are in or adjacent to Conservation Areas — heritage officers can significantly affect programme',
      'Party Wall Act issues are common in terraced housing stock — budget £1,500–£3,500 per adjoining neighbour',
      'Thames Water build-over agreements needed for many extension projects in areas with public sewers',
    ],
    planningAuthority: 'Relevant London Borough (one of 32) + GLA for major schemes',
    planningNotes: 'Planning applications in London are handled by individual borough councils. The GLA has strategic oversight on major schemes. Permitted development rights apply broadly, but many boroughs have Article 4 Directions removing PD rights in parts of their area — always check with your borough before assuming PD applies.',
    buildingControlNote: 'Building Regulations applications in London can be made to the local borough council (Local Authority Building Control) or an Approved Inspector. Many larger projects in London use Approved Inspectors for faster initial registration.',
    recentActivity: 'Extensions and loft conversions remain the dominant project type across outer London. Inner London continues to see high-value whole-house refurbishments and flat conversions. Development in East London (Hackney, Tower Hamlets, Lewisham) remains particularly active.',
    nearbyAreas: [
      { name: 'Surrey', note: 'Premium market in stockbroker belt areas; more relaxed logistics than central London' },
      { name: 'Kent', note: 'Generally 10–18% below London costs; fast connections to Central London' },
      { name: 'Essex', note: 'Competitive rates in outer areas; planning relatively straightforward outside Green Belt' },
    ],
  },
  manchester: {
    slug: 'manchester',
    name: 'Manchester',
    region: 'Greater Manchester',
    image: 'https://images.unsplash.com/photo-1567939416015-f14d7db9b0f6?w=1400&auto=format&q=80',
    seoTitle: 'Construction Costs & Quantity Surveyors in Manchester — 2026 Guide | Dwellinger',
    seoDescription: 'Manchester construction costs range from £1,500 to £2,800/m² in 2026. Find verified estimates and Builder Score™-verified contractors across Greater Manchester.',
    intro: 'Manchester is the North West\'s strongest construction market, with costs that offer significant value compared to London while supporting a wide range of project types from residential extensions through to large commercial developments.',
    marketContext: 'Greater Manchester\'s construction market has grown consistently since 2020, driven by Northern Powerhouse investment, population growth, and a strong private residential sector. Contractor capacity is generally good, with competitive tendering on most domestic projects.',
    costRanges: [
      { label: 'New build residential (basic)', range: '£1,500–£1,900/m²' },
      { label: 'New build residential (mid-spec)', range: '£1,900–£2,400/m²' },
      { label: 'New build residential (high-spec)', range: '£2,400–£2,800/m²' },
      { label: 'Single-storey rear extension', range: '£1,500–£2,400/m²' },
      { label: 'Dormer loft conversion', range: '£1,200–£1,800/m²' },
      { label: 'Full house refurbishment (mid)', range: '£800–£1,200/m²' },
    ],
    localFactors: [
      'Generally good ground conditions, though some areas have legacy coal mining workings — check coal mining reports',
      'Manchester\'s Clean Air Zone covers city centre and affects diesel vehicle access',
      'Strong supply of brickwork, groundwork, and M&E subcontractors',
      'Conservation areas in city centre and suburbs like Didsbury — check local plan',
      'Sandstone and engineering brick construction common in Victorian stock; specialist repointing required',
    ],
    planningAuthority: 'Manchester City Council / relevant GMCA borough',
    planningNotes: 'Planning in Greater Manchester is handled by 10 individual metropolitan borough councils. Greater Manchester Combined Authority has strategic oversight. Most domestic projects fall within local authority jurisdiction.',
    buildingControlNote: 'Both Local Authority Building Control (LABC) and Approved Inspectors operate in Greater Manchester. Turnaround times are generally faster than London.',
    recentActivity: 'Chorlton, Didsbury, and Salford see consistent extension and refurbishment activity. City-centre apartment schemes continue. New builds active in northern and eastern suburbs.',
    nearbyAreas: [
      { name: 'Salford', note: 'Active regeneration; MediaCityUK driving commercial demand' },
      { name: 'Stockport', note: 'Residential focus; strong semi-detached extension market' },
      { name: 'Bolton', note: 'More competitive rates; smaller contractor pool' },
    ],
  },
  birmingham: {
    slug: 'birmingham',
    name: 'Birmingham',
    region: 'West Midlands',
    image: 'https://images.unsplash.com/photo-1549924231-f129b911e442?w=1400&auto=format&q=80',
    seoTitle: 'Construction Costs & Quantity Surveyors in Birmingham — 2026 Guide | Dwellinger',
    seoDescription: 'Birmingham construction costs range from £1,450 to £2,600/m² in 2026. Find verified estimates and Builder Score™-verified contractors across the West Midlands.',
    intro: 'Birmingham is the UK\'s second largest city by population and offers a competitive construction market with strong contractor supply. Post-Commonwealth Games investment continues to drive significant development activity across the West Midlands.',
    marketContext: 'The West Midlands market benefits from a large and competitive contractor base, built up over decades of industrial and residential construction. Post-2022 Commonwealth Games infrastructure investment lifted contractor capacity, which now benefits the residential sector.',
    costRanges: [
      { label: 'New build residential (basic)', range: '£1,450–£1,800/m²' },
      { label: 'New build residential (mid-spec)', range: '£1,800–£2,200/m²' },
      { label: 'New build residential (high-spec)', range: '£2,200–£2,600/m²' },
      { label: 'Single-storey rear extension', range: '£1,400–£2,200/m²' },
      { label: 'Dormer loft conversion', range: '£1,100–£1,700/m²' },
      { label: 'Full house refurbishment (mid)', range: '£750–£1,150/m²' },
    ],
    localFactors: [
      'Made ground and brownfield sites common in city centre; geo-environmental surveys advisable',
      'Birmingham Clean Air Zone covers city centre; check vehicle compliance before mobilising',
      'Large pool of domestic trade contractors; competitive tendering on most residential projects',
      'Jewellery Quarter and Digbeth conservation areas require heritage officer input',
      'High proportion of 1930s semi-detached housing — well-understood by local contractors',
    ],
    planningAuthority: 'Birmingham City Council / relevant West Midlands borough',
    planningNotes: 'Planning in Birmingham is administered by Birmingham City Council, which has an active planning portal. The Greater Birmingham Solihull Local Enterprise Partnership has strategic influence over larger schemes.',
    buildingControlNote: 'Birmingham City Council Building Control is well-resourced. Approved Inspectors also operate widely across the West Midlands.',
    recentActivity: 'Edgbaston, Moseley, and Harborne see consistent residential extension demand. Digbeth continues as a commercial regeneration hotspot. Sutton Coldfield active for new residential.',
    nearbyAreas: [
      { name: 'Solihull', note: 'Premium residential; NEC proximity drives commercial demand' },
      { name: 'Coventry', note: 'More competitive rates; City of Culture 2021 legacy ongoing' },
      { name: 'Wolverhampton', note: 'Competitive domestic market; good contractor supply' },
    ],
  },
  bristol: {
    slug: 'bristol',
    name: 'Bristol',
    region: 'South West England',
    image: 'https://images.unsplash.com/photo-1572816083494-0be9c5bde4fa?w=1400&auto=format&q=80',
    seoTitle: 'Construction Costs & Quantity Surveyors in Bristol — 2026 Guide | Dwellinger',
    seoDescription: 'Bristol construction costs range from £1,600 to £2,900/m² in 2026. Find verified estimates and Builder Score™-verified contractors across Bristol and the South West.',
    intro: 'Bristol commands a premium over comparable regional markets, driven by high property values, a strong focus on sustainable construction, and significant listed building and conservation area coverage in central areas. The city has a reputation for progressive building practices and sustainability-led specifications.',
    marketContext: 'Bristol\'s construction market reflects the city\'s high property values and relatively affluent homeowner base. Demand for high-specification extensions, sustainable retrofits, and heritage conservation work keeps the contractor market busy. Subcontractor availability can be tighter than Manchester or Birmingham.',
    costRanges: [
      { label: 'New build residential (basic)', range: '£1,600–£2,000/m²' },
      { label: 'New build residential (mid-spec)', range: '£2,000–£2,500/m²' },
      { label: 'New build residential (high-spec)', range: '£2,500–£2,900/m²' },
      { label: 'Single-storey rear extension', range: '£1,600–£2,700/m²' },
      { label: 'Dormer loft conversion', range: '£1,300–£2,000/m²' },
      { label: 'Full house refurbishment (mid)', range: '£900–£1,400/m²' },
    ],
    localFactors: [
      'Sandstone geology in many areas — specialist masonry knowledge important for extensions',
      'Large proportion of listed Victorian and Georgian terraces in Clifton, Redland, Cotham',
      'Suspended timber floors common — insulation treatment adds cost vs slab construction',
      'Strong demand for Passivhaus and low-energy specification work',
      'Radon gas present in parts of South Bristol and surrounding areas — check radon maps',
    ],
    planningAuthority: 'Bristol City Council',
    planningNotes: 'Bristol City Council processes planning applications. Conservation areas cover significant portions of inner Bristol — Clifton, Hotwells, Redland, and others. Heritage officer input required for many works in these areas.',
    buildingControlNote: 'Bristol City Council Building Control covers the city boundary. South Gloucestershire, North Somerset, and Bath & NE Somerset council services cover adjacent areas. Approved Inspectors active across the region.',
    recentActivity: 'Clifton, Redland, and Bishopston see consistent high-spec extension and refurbishment demand. South Bristol (Bedminster, Southville) increasingly active. Development in Temple Quarter and Harbourside continues.',
    nearbyAreas: [
      { name: 'Bath', note: 'Premium market; World Heritage Site status means strict planning oversight' },
      { name: 'South Gloucestershire', note: 'More relaxed planning; competitive contractor supply' },
      { name: 'North Somerset', note: 'Good contractor availability; lower cost base than Bristol' },
    ],
  },
  leeds: {
    slug: 'leeds',
    name: 'Leeds',
    region: 'West Yorkshire',
    image: 'https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?w=1400&auto=format&q=80',
    seoTitle: 'Construction Costs & Quantity Surveyors in Leeds — 2026 Guide | Dwellinger',
    seoDescription: 'Leeds construction costs range from £1,400 to £2,500/m² in 2026. Find verified estimates and Builder Score™-verified contractors across West Yorkshire.',
    intro: 'Leeds is the UK\'s largest financial and legal centre outside London, and its construction market reflects a city experiencing rapid growth. Build costs offer strong value compared to southern markets, with a competitive and capable contractor pool.',
    marketContext: 'Leeds has seen consistent residential growth, driven by strong employment in finance, technology, and healthcare. The city centre apartment market is well-supplied, while suburban areas see consistent extension and refurbishment demand from a growing professional population.',
    costRanges: [
      { label: 'New build residential (basic)', range: '£1,400–£1,750/m²' },
      { label: 'New build residential (mid-spec)', range: '£1,750–£2,100/m²' },
      { label: 'New build residential (high-spec)', range: '£2,100–£2,500/m²' },
      { label: 'Single-storey rear extension', range: '£1,350–£2,100/m²' },
      { label: 'Dormer loft conversion', range: '£1,100–£1,650/m²' },
      { label: 'Full house refurbishment (mid)', range: '£700–£1,100/m²' },
    ],
    localFactors: [
      'Coal measures and historic mine workings in some southern areas — check coal mining reports',
      'Back-to-back terrace housing stock in inner Leeds has specialist requirements',
      'Competitive local contractor market with good trade capacity',
      'Conservation areas in Headingley, Chapel Allerton, and city centre',
      'HS2 northern leg uncertainty has not significantly affected local residential demand',
    ],
    planningAuthority: 'Leeds City Council',
    planningNotes: 'Leeds City Council is one of the larger local planning authorities and generally processes applications efficiently. The city has an adopted Local Plan. Neighbourhood Plans exist in some areas and can affect permitted development assumptions.',
    buildingControlNote: 'Leeds City Council Building Control operates a Scheme of Delegation for straightforward domestic projects. Approved Inspectors widely used for larger residential and commercial work.',
    recentActivity: 'Headingley, Chapel Allerton, and Roundhay see strong extension demand. Horsforth and Adel active for new residential. City-centre apartment-to-office conversions ongoing.',
    nearbyAreas: [
      { name: 'Bradford', note: 'Lower cost base; good contractor supply; active residential market' },
      { name: 'Harrogate', note: 'Premium market with premium costs; conservation area focus' },
      { name: 'Wakefield', note: 'Competitive market; strong new-build residential growth' },
    ],
  },
  edinburgh: {
    slug: 'edinburgh',
    name: 'Edinburgh',
    region: 'Scotland',
    image: 'https://images.unsplash.com/photo-1506377295352-e3154d43ea9e?w=1400&auto=format&q=80',
    seoTitle: 'Construction Costs & Quantity Surveyors in Edinburgh — 2026 Guide | Dwellinger',
    seoDescription: 'Edinburgh construction costs range from £1,700 to £3,200/m² in 2026. Find verified estimates and Builder Score™-verified contractors across Edinburgh and the Lothians.',
    intro: 'Edinburgh is Scotland\'s premium construction market, with costs driven by strong property values, UNESCO World Heritage Site designation in the Old and New Towns, and a significant proportion of listed stone tenement buildings requiring specialist conservation expertise.',
    marketContext: 'Edinburgh\'s residential construction market is active, supported by sustained population growth and a highly educated, relatively affluent homeowner base. The festival season and heritage designation create unique planning constraints. Scottish building regulations apply rather than English Building Regulations.',
    costRanges: [
      { label: 'New build residential (basic)', range: '£1,700–£2,100/m²' },
      { label: 'New build residential (mid-spec)', range: '£2,100–£2,700/m²' },
      { label: 'New build residential (high-spec)', range: '£2,700–£3,200/m²' },
      { label: 'Tenement flat refurbishment', range: '£900–£1,600/m²' },
      { label: 'Rear extension or garden flat', range: '£1,800–£2,800/m²' },
      { label: 'Listed building work', range: 'Add 20–40% premium' },
    ],
    localFactors: [
      'UNESCO World Heritage Site designation covers Old and New Towns — strict heritage consent required',
      'Ashlar sandstone construction common — specialist stone masons in high demand',
      'Scottish Building Regulations (not English Building Regs) apply — different procedures and standards',
      'Planning permission in Edinburgh uses Scottish planning legislation — PD rights differ from England',
      'Festival period (July–September) restricts access in central areas',
    ],
    planningAuthority: 'City of Edinburgh Council',
    planningNotes: 'Planning in Edinburgh is administered by the City of Edinburgh Council under Scottish planning legislation. This differs materially from England — Permitted Development rights, GPDO, and the CDM framework have Scottish equivalents with different rules.',
    buildingControlNote: 'Building standards in Scotland are administered under the Building (Scotland) Act 2003, managed by local authority Verifiers (not LABC or Approved Inspectors). All warrant applications go to Edinburgh City Council or approved Certifiers of Design.',
    recentActivity: 'Morningside, Stockbridge, and Bruntsfield see consistent high-spec refurbishment demand. Leith continues as an active regeneration area. New residential at Granton Waterfront.',
    nearbyAreas: [
      { name: 'Midlothian', note: 'More accessible planning; lower cost base than city centre' },
      { name: 'East Lothian', note: 'Premium rural and coastal residential market' },
      { name: 'Fife (Kirkcaldy/Dunfermline)', note: 'Commuter belt; competitive costs; improving contractor supply' },
    ],
  },
  glasgow: {
    slug: 'glasgow',
    name: 'Glasgow',
    region: 'Scotland',
    image: 'https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?w=1400&auto=format&q=80',
    seoTitle: 'Construction Costs & Quantity Surveyors in Glasgow — 2026 Guide | Dwellinger',
    seoDescription: 'Glasgow construction costs range from £1,350 to £2,500/m² in 2026. Find verified estimates and Builder Score™-verified contractors across Glasgow and the West of Scotland.',
    intro: 'Glasgow is Scotland\'s largest city and offers a competitive construction market with a strong and diverse contractor pool. Costs are generally lower than Edinburgh, while the breadth of contractor specialisms — from Victorian tenement specialists to modern commercial contractors — is arguably wider.',
    marketContext: 'Glasgow\'s construction market has been strengthened by major public sector investment in education, healthcare, and social housing. The residential extension market benefits from a large stock of Victorian and Edwardian terraces and semis in the West End, Southside, and East End.',
    costRanges: [
      { label: 'New build residential (basic)', range: '£1,350–£1,750/m²' },
      { label: 'New build residential (mid-spec)', range: '£1,750–£2,150/m²' },
      { label: 'New build residential (high-spec)', range: '£2,150–£2,500/m²' },
      { label: 'Tenement flat refurbishment', range: '£800–£1,400/m²' },
      { label: 'Side or rear extension', range: '£1,500–£2,200/m²' },
      { label: 'Full house refurbishment (mid)', range: '£650–£1,000/m²' },
    ],
    localFactors: [
      'Sandstone tenement stock in West End and Southside requires specialist repair and pointing',
      'Scottish Building Regulations and planning legislation apply throughout',
      'Competitive domestic contractor market with wide trade availability',
      'City centre low emission zone (LEZ) operational — check vehicle compliance',
      'Ground contamination risk from industrial legacy in East End and Clyde corridor',
    ],
    planningAuthority: 'Glasgow City Council',
    planningNotes: 'Planning in Glasgow is administered under Scottish planning legislation. Glasgow City Council processes applications. Conservation areas cover much of the West End and Merchant City. Flatted properties may require common property owner agreement for some alterations.',
    buildingControlNote: 'Building warrants in Glasgow are administered by Glasgow City Council. Scottish Certifiers of Design can provide certificate-based approval for compliant designs.',
    recentActivity: 'West End (Hyndland, Dowanhill, Partick) sees consistent refurbishment demand. Southside (Shawlands, Pollokshields) growing. City centre conversion schemes ongoing.',
    nearbyAreas: [
      { name: 'East Renfrewshire', note: 'Premium residential commuter area; competitive but quality contractor pool' },
      { name: 'North Lanarkshire', note: 'Lower costs; strong new-build residential market' },
      { name: 'Renfrewshire', note: 'Competitive rates; Paisley regeneration driving activity' },
    ],
  },
  liverpool: {
    slug: 'liverpool',
    name: 'Liverpool',
    region: 'Merseyside',
    image: 'https://images.unsplash.com/photo-1531158781940-10b3e56ebbec?w=1400&auto=format&q=80',
    seoTitle: 'Construction Costs & Quantity Surveyors in Liverpool — 2026 Guide | Dwellinger',
    seoDescription: 'Liverpool construction costs range from £1,400 to £2,500/m² in 2026. Find verified estimates and Builder Score™-verified contractors across Liverpool and Merseyside.',
    intro: 'Liverpool offers competitive construction costs with a growing contractor base, supported by sustained regeneration investment and a housing market that has seen consistent growth since 2020. The UNESCO waterfront heritage designation creates specific planning requirements in central areas.',
    marketContext: 'Liverpool\'s construction market has benefited from significant regeneration investment. Residential extension and refurbishment demand is growing, particularly in Georgian and Victorian terraced areas of the inner city. The contractor market is competitive, though specialist heritage subcontractors can be in demand.',
    costRanges: [
      { label: 'New build residential (basic)', range: '£1,400–£1,750/m²' },
      { label: 'New build residential (mid-spec)', range: '£1,750–£2,100/m²' },
      { label: 'New build residential (high-spec)', range: '£2,100–£2,500/m²' },
      { label: 'Single-storey rear extension', range: '£1,350–£2,100/m²' },
      { label: 'Dormer loft conversion', range: '£1,100–£1,600/m²' },
      { label: 'Full house refurbishment (mid)', range: '£700–£1,050/m²' },
    ],
    localFactors: [
      'UNESCO Maritime Mercantile City World Heritage status (previously) creates ongoing planning sensitivity',
      'Red sandstone and Ruabon brick common in Victorian stock — matching materials can be costly',
      'Mersey clay and some areas of made ground — ground investigation advisable on older sites',
      'Growing contractor pool but specialist heritage subcontractors remain in demand',
      'Liverpool City Region Clean Air Zone in planning — monitor for vehicle compliance requirements',
    ],
    planningAuthority: 'Liverpool City Council',
    planningNotes: 'Planning is administered by Liverpool City Council. The Liverpool City Region Combined Authority has strategic oversight. Conservation areas cover Toxteth\'s Georgian Quarter, Woolton, and Blundellsands among others.',
    buildingControlNote: 'Liverpool City Council Building Control and Approved Inspectors both operate. The council has a dedicated domestic projects service.',
    recentActivity: 'Georgian Quarter (L8), Toxteth, and Aigburth see growing residential demand. North Liverpool (Anfield, Everton) active for new residential. Baltic Triangle commercial and residential mixed-use continuing.',
    nearbyAreas: [
      { name: 'Wirral', note: 'Residential across the water; competitive contractor market' },
      { name: 'Sefton', note: 'Southport and coastal areas; heritage-sensitive in parts' },
      { name: 'St Helens', note: 'Competitive costs; good new-build residential capacity' },
    ],
  },
}

export function generateStaticParams() {
  return Object.keys(cities).map(city => ({ city }))
}

export async function generateMetadata({ params }: { params: { city: string } }): Promise<Metadata> {
  const city = cities[params.city]
  if (!city) return {}
  return {
    title: city.seoTitle,
    description: city.seoDescription,
    openGraph: {
      title: city.seoTitle,
      description: city.seoDescription,
      images: [{ url: city.image }],
    },
  }
}

export default function CityPage({ params }: { params: { city: string } }) {
  const city = cities[params.city]
  if (!city) notFound()

  return (
    <div style={{ backgroundColor: '#FFFFFF' }}>
      {/* Hero */}
      <section style={{ position: 'relative', minHeight: 280, display: 'flex', alignItems: 'flex-end' }}>
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
          <img src={city.image} alt={city.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(26,35,64,0.97) 0%, rgba(26,35,64,0.7) 50%, rgba(26,35,64,0.35) 100%)' }} />
        </div>
        <div style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: 900, margin: '0 auto', padding: '80px 24px 44px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#c8c0b0', fontSize: '0.8rem', marginBottom: 16 }}>
            <MapPin size={14} />
            {city.region}
          </div>
          <h1 style={{ color: '#FFFFFF', fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: 12 }}>
            Construction Costs in {city.name}
          </h1>
          <p style={{ color: '#d0c8b8', fontSize: '1.05rem', maxWidth: 600 }}>{city.intro}</p>
        </div>
      </section>

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '48px 24px 80px' }}>
        <Link href="/locations" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#C4773B', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600, marginBottom: 40 }}>
          <ArrowLeft size={16} /> All locations
        </Link>

        {/* Cost table */}
        <section style={{ marginBottom: 56 }}>
          <h2 style={{ color: '#1A2340', fontSize: '1.4rem', fontWeight: 800, marginBottom: 20 }}>Build costs in {city.name} (2026)</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead>
                <tr style={{ backgroundColor: '#1A2340' }}>
                  <th style={{ color: '#fff', padding: '12px 16px', textAlign: 'left', fontWeight: 700 }}>Project type</th>
                  <th style={{ color: '#fff', padding: '12px 16px', textAlign: 'right', fontWeight: 700 }}>Cost range</th>
                </tr>
              </thead>
              <tbody>
                {city.costRanges.map((row, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid #EDE8DC', backgroundColor: i % 2 === 0 ? '#fff' : '#FAFAF7' }}>
                    <td style={{ padding: '12px 16px', color: '#4A5568' }}>{row.label}</td>
                    <td style={{ padding: '12px 16px', color: '#C4773B', fontWeight: 700, textAlign: 'right' }}>{row.range}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ color: '#6B7280', fontSize: '0.8rem', marginTop: 12 }}>Figures are indicative 2026 rates for well-specified projects. Add professional fees (typically 12–15%) and 10% contingency.</p>
        </section>

        {/* Local factors */}
        <section style={{ marginBottom: 56 }}>
          <h2 style={{ color: '#1A2340', fontSize: '1.4rem', fontWeight: 800, marginBottom: 20 }}>Local factors that affect cost</h2>
          <div style={{ display: 'grid', gap: 12 }}>
            {city.localFactors.map((factor, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <CheckCircle size={18} style={{ color: '#C4773B', flexShrink: 0, marginTop: 2 }} />
                <p style={{ color: '#4A5568', margin: 0, lineHeight: 1.7 }}>{factor}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Market context */}
        <section style={{ marginBottom: 56 }}>
          <h2 style={{ color: '#1A2340', fontSize: '1.4rem', fontWeight: 800, marginBottom: 16 }}>Market context</h2>
          <p style={{ color: '#4A5568', lineHeight: 1.85 }}>{city.marketContext}</p>
          <p style={{ color: '#4A5568', lineHeight: 1.85, marginTop: 12 }}>{city.recentActivity}</p>
        </section>

        {/* Planning */}
        <section style={{ marginBottom: 56 }}>
          <h2 style={{ color: '#1A2340', fontSize: '1.4rem', fontWeight: 800, marginBottom: 16 }}>Planning & Building Regulations</h2>
          <div style={{ backgroundColor: '#F5F0E8', borderRadius: 8, padding: '24px', marginBottom: 16 }}>
            <p style={{ margin: 0, fontWeight: 700, color: '#1A2340', marginBottom: 8 }}>Planning authority: {city.planningAuthority}</p>
            <p style={{ margin: 0, color: '#4A5568', lineHeight: 1.7 }}>{city.planningNotes}</p>
          </div>
          <div style={{ backgroundColor: '#F0F4FF', borderRadius: 8, padding: '24px' }}>
            <p style={{ margin: 0, fontWeight: 700, color: '#1A2340', marginBottom: 8 }}>Building Control</p>
            <p style={{ margin: 0, color: '#4A5568', lineHeight: 1.7 }}>{city.buildingControlNote}</p>
          </div>
        </section>

        {/* Nearby areas */}
        <section style={{ marginBottom: 56 }}>
          <h2 style={{ color: '#1A2340', fontSize: '1.4rem', fontWeight: 800, marginBottom: 16 }}>Nearby areas</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: 12 }}>
            {city.nearbyAreas.map((area, i) => (
              <div key={i} style={{ border: '1px solid #EDE8DC', borderRadius: 8, padding: '16px 20px' }}>
                <p style={{ fontWeight: 700, color: '#1A2340', margin: '0 0 4px' }}>{area.name}</p>
                <p style={{ color: '#6B7280', fontSize: '0.85rem', margin: 0, lineHeight: 1.6 }}>{area.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ backgroundColor: '#1A2340', borderRadius: 12, padding: '40px', textAlign: 'center' }}>
          <h2 style={{ color: '#FFFFFF', fontSize: '1.4rem', fontWeight: 800, marginBottom: 12 }}>
            Get a free estimate for your {city.name} project
          </h2>
          <p style={{ color: '#c8c0b0', marginBottom: 28 }}>
            Our estimating tool generates a project-specific ballpark based on your location, project type, and specification — in under 3 minutes.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/estimate" style={{ display: 'inline-block', backgroundColor: '#C4773B', color: '#fff', padding: '14px 28px', borderRadius: 6, fontWeight: 700, textDecoration: 'none' }}>
              Get a free estimate
            </Link>
            <Link href="/search" style={{ display: 'inline-block', backgroundColor: 'transparent', color: '#fff', padding: '14px 28px', borderRadius: 6, fontWeight: 700, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.3)' }}>
              Find contractors in {city.name}
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
