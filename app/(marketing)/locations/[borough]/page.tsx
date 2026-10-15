import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { CheckCircle, MapPin, Building2 } from 'lucide-react'

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
    costRanges: [
      { label: 'New build (basic)', range: '£2,200–£2,700/m²' },
      { label: 'New build (mid spec)', range: '£2,700–£3,400/m²' },
      { label: 'New build (high spec)', range: '£3,400–£4,500/m²' },
      { label: 'Rear extension', range: '£1,900–£4,200/m²' },
      { label: 'Loft conversion', range: '£60,000–£130,000' },
      { label: 'Full refurbishment', range: '£700–£2,500/m²' },
    ],
    intro: 'London building costs are the highest in the UK, driven by premium trade labour rates, ULEZ and logistics costs, and longer supply chains for specialist materials and subcontractors.',
    marketContext: 'London accounts for approximately 25% of all UK construction output by value. The market is highly active, with strong demand across residential extensions, loft conversions, and full refurbishments particularly in inner and south-east London.',
    localFactors: [
      'ULEZ charges apply to most construction vehicles daily',
      'Congestion Charge Zone applies in Central London',
      'Conservation Areas and Article 4 Directions affect approximately 30% of London properties',
      'Party wall requirements apply to most terraced and semi-detached work',
      'High concentration of Victorian and Edwardian stock (specialist knowledge required)',
      'London clay ground conditions require careful foundation design',
    ],
    planningAuthority: '32 London Boroughs + City of London Corporation',
    planningNotes: 'Planning rules vary by borough. Inner London boroughs (Westminster, Kensington & Chelsea, Camden, Islington) have the most restrictive conservation area policies. Check borough-specific guidance before assuming permitted development applies.',
    buildingControlNote: 'Building Control applications can be made to your borough council or an Approved Inspector. Most London loft conversions require fire safety upgrades to the escape route.',
    seoTitle: 'Building Costs London 2026 | Dwellinger',
    seoDescription: 'London building costs range from £1,900 to £4,500+/m² in 2026. Building cost guide across all London boroughs.',
    recentActivity: 'High demand for loft conversions (particularly dormers and mansards) across inner London. Strong extension activity in south-east and east London boroughs.',
    nearbyAreas: [
      { name: 'Surrey', note: '15–25% lower than inner London' },
      { name: 'Kent', note: '20–30% lower than inner London' },
      { name: 'Essex', note: '15–25% lower than inner London' },
      { name: 'Hertfordshire', note: '15–20% lower than inner London' },
    ],
  },
  manchester: {
    slug: 'manchester',
    name: 'Manchester',
    region: 'Greater Manchester',
    image: 'https://images.unsplash.com/photo-1568659586888-9d9c1c9aebec?w=1400&auto=format&q=80',
    costRanges: [
      { label: 'New build (basic)', range: '£1,500–£1,800/m²' },
      { label: 'New build (mid spec)', range: '£1,800–£2,400/m²' },
      { label: 'New build (high spec)', range: '£2,400–£2,800/m²' },
      { label: 'Rear extension', range: '£1,400–£2,600/m²' },
      { label: 'Loft conversion', range: '£35,000–£75,000' },
      { label: 'Full refurbishment', range: '£450–£1,600/m²' },
    ],
    intro: 'Manchester is the most active construction market outside London, with strong residential and commercial demand driven by population growth and regeneration activity across the city region.',
    marketContext: 'Greater Manchester has seen significant residential construction activity driven by population growth, urban regeneration (NOMA, Salford Quays, Ancoats), and a buoyant private rental sector. Build costs are 25-35% below London rates.',
    localFactors: [
      'Victorian terraced housing stock dominates inner Manchester (Ancoats, Hulme, Chorlton)',
      'Active planning environment with permitted development generally available',
      'Specialist groundwork required in some areas (old mill buildings, made ground)',
      'Strong local contractor market with good availability',
      'Salford and Trafford covered by separate local authorities',
    ],
    planningAuthority: 'Manchester City Council (and 9 other GM boroughs)',
    planningNotes: 'Manchester City Council is generally supportive of residential extension work. Conservation areas in Didsbury, Chorlton, and the city centre require pre-application advice for larger proposals.',
    buildingControlNote: 'Building Control applications to Manchester City Council or an Approved Inspector. New Part L requirements apply to all extensions and renovations.',
    seoTitle: 'Building Costs Manchester 2026 | Dwellinger',
    seoDescription: 'Manchester building costs from £1,500/m² in 2026. Building cost guide across Greater Manchester.',
    recentActivity: 'Strong demand for full house refurbishments and kitchen extensions in Chorlton, Didsbury, and Whalley Range.',
    nearbyAreas: [
      { name: 'Salford', note: 'Separate LA, similar cost base' },
      { name: 'Trafford', note: 'Separate LA, slightly higher due to affluent areas' },
      { name: 'Stockport', note: 'Within 10% of Manchester rates' },
      { name: 'Bolton', note: '5–10% lower than Manchester city centre' },
    ],
  },
  birmingham: {
    slug: 'birmingham',
    name: 'Birmingham',
    region: 'West Midlands',
    image: 'https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=1400&auto=format&q=80',
    costRanges: [
      { label: 'New build (basic)', range: '£1,450–£1,750/m²' },
      { label: 'New build (mid spec)', range: '£1,750–£2,300/m²' },
      { label: 'New build (high spec)', range: '£2,300–£2,600/m²' },
      { label: 'Rear extension', range: '£1,300–£2,400/m²' },
      { label: 'Loft conversion', range: '£33,000–£70,000' },
      { label: 'Full refurbishment', range: '£400–£1,500/m²' },
    ],
    intro: 'Birmingham is the UK\'s second-largest city by population and has a highly competitive contractor market, with build costs typically 15-25% below London equivalents.',
    marketContext: 'Birmingham has a diverse construction market ranging from residential extensions in established suburbs (Moseley, Edgbaston, Sutton Coldfield) to large-scale regeneration projects in the city centre. Post-Commonwealth Games activity has added capacity.',
    localFactors: [
      'Wide variation in housing stock from Victorian terrace to 1960s semi',
      'Good local contractor availability keeps costs competitive',
      'Some areas have specific drainage and groundwork requirements',
      'Suburban areas (Sutton Coldfield, Solihull) command a slight premium',
    ],
    planningAuthority: 'Birmingham City Council',
    planningNotes: 'Birmingham City Council processes one of the highest volumes of planning applications in England. Permitted development generally applies outside designated areas.',
    buildingControlNote: 'Birmingham Building Control or an Approved Inspector. Birmingham has a large LABC team with reasonable processing times.',
    seoTitle: 'Building Costs Birmingham 2026 | Dwellinger',
    seoDescription: 'Birmingham building costs from £1,450/m² in 2026. Building cost guide across the West Midlands.',
    recentActivity: 'Active residential extension market in Moseley, Harborne, and Kings Heath.',
    nearbyAreas: [
      { name: 'Solihull', note: '5–10% higher than Birmingham city' },
      { name: 'Coventry', note: 'Similar cost base to Birmingham' },
      { name: 'Wolverhampton', note: '5–10% lower than Birmingham' },
      { name: 'Sutton Coldfield', note: 'Within 5% of Birmingham rates' },
    ],
  },
  bristol: {
    slug: 'bristol',
    name: 'Bristol',
    region: 'South West England',
    image: 'https://images.unsplash.com/photo-1605897472359-8d7e0b847e7e?w=1400&auto=format&q=80',
    costRanges: [
      { label: 'New build (basic)', range: '£1,600–£1,900/m²' },
      { label: 'New build (mid spec)', range: '£1,900–£2,500/m²' },
      { label: 'New build (high spec)', range: '£2,500–£2,900/m²' },
      { label: 'Rear extension', range: '£1,500–£2,700/m²' },
      { label: 'Loft conversion', range: '£40,000–£85,000' },
      { label: 'Full refurbishment', range: '£500–£1,700/m²' },
    ],
    intro: 'Bristol has one of the most active residential construction markets outside London, with high demand for extensions and loft conversions driven by a strong professional demographic and constrained housing supply.',
    marketContext: 'Bristol consistently shows some of the highest house price growth outside London, which supports strong renovation and extension demand. The contractor market is active but capacity can be constrained, particularly for quality residential specialists.',
    localFactors: [
      'Steep topography in many areas creates specific groundwork and structural challenges',
      'High proportion of Victorian and Georgian terraces with party wall implications',
      'Active conservation area policies in Clifton, Redland, and Cotham',
      'Strong demand for eco-specification builds (MVHR, heat pumps, solar)',
      'Limited contractor capacity in some specialist trades',
    ],
    planningAuthority: 'Bristol City Council',
    planningNotes: 'Bristol City Council has a strong conservation area policy. Clifton, Redland, and parts of Cotham have significant restrictions on external alterations. Pre-application advice is recommended for complex proposals.',
    buildingControlNote: 'Bristol Building Control or an Approved Inspector. Party wall requirements commonly apply in terrace-heavy inner Bristol.',
    seoTitle: 'Building Costs Bristol 2026 | Dwellinger',
    seoDescription: 'Bristol building costs from £1,600/m² in 2026. Building cost guide across Bristol and the South West.',
    recentActivity: 'Strong demand for loft conversions and rear extensions in Bedminster, Redland, and Clifton.',
    nearbyAreas: [
      { name: 'Bath', note: '10–20% higher due to heritage premium' },
      { name: 'Weston-super-Mare', note: '15–20% lower than Bristol' },
      { name: 'Cheltenham', note: 'Similar cost base to Bristol' },
      { name: 'South Gloucestershire', note: 'Within 5–10% of Bristol rates' },
    ],
  },
  leeds: {
    slug: 'leeds',
    name: 'Leeds',
    region: 'West Yorkshire',
    image: 'https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?w=1400&auto=format&q=80',
    costRanges: [
      { label: 'New build (basic)', range: '£1,400–£1,700/m²' },
      { label: 'New build (mid spec)', range: '£1,700–£2,200/m²' },
      { label: 'New build (high spec)', range: '£2,200–£2,500/m²' },
      { label: 'Rear extension', range: '£1,300–£2,300/m²' },
      { label: 'Loft conversion', range: '£30,000–£65,000' },
      { label: 'Full refurbishment', range: '£400–£1,400/m²' },
    ],
    intro: 'Leeds has a strong residential construction market with competitive labour costs and good contractor availability. The city has a high proportion of Victorian back-to-back and terraced housing presenting clear extension and loft opportunities.',
    marketContext: 'Leeds is the largest financial centre outside London and has experienced strong population growth. The residential construction market is active, particularly in Chapel Allerton, Headingley, and Roundhay for extension and refurbishment work.',
    localFactors: [
      'Good contractor availability and competitive tendering',
      'Victorian terraced stock is common across the inner suburbs',
      'Less party wall complexity than London equivalents',
      'Strong demand for family home extensions in north Leeds suburbs',
    ],
    planningAuthority: 'Leeds City Council',
    planningNotes: 'Leeds City Council processes planning applications efficiently. Headingley and Chapel Allerton conservation areas have specific policies for external alterations.',
    buildingControlNote: 'Leeds Building Control or an Approved Inspector. Good processing times relative to London equivalents.',
    seoTitle: 'Building Costs Leeds 2026 | Dwellinger',
    seoDescription: 'Leeds building costs from £1,400/m² in 2026. Building cost guide across West Yorkshire.',
    recentActivity: 'Active market for house extensions and refurbishments in Headingley, Chapel Allerton, and Horsforth.',
    nearbyAreas: [
      { name: 'Bradford', note: '10–15% lower than Leeds' },
      { name: 'Harrogate', note: '5–10% higher than Leeds' },
      { name: 'Wakefield', note: '10–15% lower than Leeds' },
      { name: 'York', note: 'Similar cost base to Leeds, heritage premium in city centre' },
    ],
  },
  edinburgh: {
    slug: 'edinburgh',
    name: 'Edinburgh',
    region: 'Scotland',
    image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=1400&auto=format&q=80',
    costRanges: [
      { label: 'New build (basic)', range: '£1,700–£2,000/m²' },
      { label: 'New build (mid spec)', range: '£2,000–£2,700/m²' },
      { label: 'New build (high spec)', range: '£2,700–£3,200/m²' },
      { label: 'Rear extension', range: '£1,500–£2,800/m²' },
      { label: 'Loft conversion', range: '£45,000–£90,000' },
      { label: 'Full refurbishment', range: '£550–£1,800/m²' },
    ],
    intro: 'Edinburgh is Scotland\'s most expensive construction market. The city has a high proportion of listed Georgian and Victorian properties, significant conservation area coverage, and a specialist contractor market with higher premium rates.',
    marketContext: 'Edinburgh\'s property market has seen strong price growth, supporting active extension and refurbishment demand particularly in the New Town (listed), Morningside, Stockbridge, and Marchmont. Building costs reflect specialist heritage knowledge requirements.',
    localFactors: [
      'Scottish Building Regulations (not English Building Regs) apply',
      'Different planning legislation from England and Wales',
      'High proportion of listed and conservation area properties in the city',
      'Traditional stone construction requires specialist knowledge',
      'Party Wall Act does not apply in Scotland (Access to Neighbouring Land Act)',
      'Longer programme times for listed building works',
    ],
    planningAuthority: 'City of Edinburgh Council',
    planningNotes: 'Edinburgh operates under the Scottish planning system. Permitted development rules in Scotland differ from England. The World Heritage Site and extensive conservation areas require careful pre-application assessment.',
    buildingControlNote: 'Scottish Building Standards (not English Building Regulations) apply. Building Warrants are required for most construction work.',
    seoTitle: 'Building Costs Edinburgh 2026 | Dwellinger',
    seoDescription: 'Edinburgh building costs from £1,700/m² in 2026. Find verified contractors across Edinburgh and the Lothians.',
    recentActivity: 'Active market for flat refurbishments and traditional house extensions in Morningside, Bruntsfield, and Stockbridge.',
    nearbyAreas: [
      { name: 'Glasgow', note: '10–20% lower than Edinburgh' },
      { name: 'Livingston', note: '15–25% lower than Edinburgh' },
      { name: 'Dunfermline', note: '15–25% lower than Edinburgh' },
      { name: 'East Lothian', note: 'Within 10% of Edinburgh rates' },
    ],
  },
  glasgow: {
    slug: 'glasgow',
    name: 'Glasgow',
    region: 'Scotland',
    image: 'https://images.unsplash.com/photo-1559181567-c3190ca9d222?w=1400&auto=format&q=80',
    costRanges: [
      { label: 'New build (basic)', range: '£1,350–£1,650/m²' },
      { label: 'New build (mid spec)', range: '£1,650–£2,200/m²' },
      { label: 'New build (high spec)', range: '£2,200–£2,500/m²' },
      { label: 'Rear extension', range: '£1,200–£2,200/m²' },
      { label: 'Loft conversion', range: '£28,000–£60,000' },
      { label: 'Full refurbishment', range: '£380–£1,300/m²' },
    ],
    intro: 'Glasgow has the most competitive construction market in Scotland, with good contractor availability and lower labour costs than Edinburgh. The city has a distinctive tenement and terraced housing stock.',
    marketContext: 'Glasgow has undergone significant urban regeneration since the 1990s. The residential extension market is particularly active in the West End (Kelvinbridge, Hillhead, Hyndland) and south side suburbs (Shawlands, Battlefield).',
    localFactors: [
      'Scottish Building Standards apply (not English Building Regs)',
      'Different planning rules from England under the Scottish planning system',
      'Traditional tenement stock (common in inner city) has specific requirements',
      'Good contractor availability in most trades',
      'Lower labour premium than Edinburgh',
    ],
    planningAuthority: 'Glasgow City Council',
    planningNotes: 'Glasgow City Council operates under the Scottish planning system. The West End conservation areas (Hillhead, Park) have specific guidance for external alterations to tenements.',
    buildingControlNote: 'Building Warrants under Scottish Building Standards are required for most construction works.',
    seoTitle: 'Building Costs Glasgow 2026 | Dwellinger',
    seoDescription: 'Glasgow building costs from £1,350/m² in 2026. Find verified contractors across Glasgow and the Clyde Valley.',
    recentActivity: 'Active market for tenement flat refurbishments and West End house extensions.',
    nearbyAreas: [
      { name: 'Edinburgh', note: '10–20% higher than Glasgow' },
      { name: 'Paisley', note: '5–10% lower than Glasgow' },
      { name: 'East Kilbride', note: '5–10% lower than Glasgow' },
      { name: 'Hamilton', note: '5–15% lower than Glasgow' },
    ],
  },
  liverpool: {
    slug: 'liverpool',
    name: 'Liverpool',
    region: 'Merseyside',
    image: 'https://images.unsplash.com/photo-1583263596533-c8c2d91a28f5?w=1400&auto=format&q=80',
    costRanges: [
      { label: 'New build (basic)', range: '£1,400–£1,700/m²' },
      { label: 'New build (mid spec)', range: '£1,700–£2,200/m²' },
      { label: 'New build (high spec)', range: '£2,200–£2,500/m²' },
      { label: 'Rear extension', range: '£1,250–£2,200/m²' },
      { label: 'Loft conversion', range: '£28,000–£60,000' },
      { label: 'Full refurbishment', range: '£380–£1,400/m²' },
    ],
    intro: 'Liverpool has a competitive construction market with good contractor availability and build costs significantly below London and the South East. The city has an active residential market in its south and north suburbs.',
    marketContext: 'Liverpool has seen strong residential investment activity particularly in the south suburbs (Aigburth, Allerton, Woolton) and north (Formby, Crosby). Build costs are 30-40% below London equivalents.',
    localFactors: [
      'Good contractor availability in most trades',
      'Victorian terraced housing stock in inner suburbs',
      'World Heritage Site designation affects some city centre properties',
      'Active residential market in south Liverpool',
    ],
    planningAuthority: 'Liverpool City Council',
    planningNotes: 'Liverpool City Council operates a standard planning system. The UNESCO World Heritage Site maritime area has specific restrictions. Conservation areas in Sefton Park and Woolton have policies on external alterations.',
    buildingControlNote: 'Liverpool Building Control or an Approved Inspector. Good processing times.',
    seoTitle: 'Building Costs Liverpool 2026 | Dwellinger',
    seoDescription: 'Liverpool building costs from £1,400/m² in 2026. Find verified contractors across Merseyside.',
    recentActivity: 'Active market for house extensions and full refurbishments in Aigburth, Allerton, and Crosby.',
    nearbyAreas: [
      { name: 'Wirral', note: 'Separate LA, similar cost base' },
      { name: 'Southport', note: 'Within 10% of Liverpool rates' },
      { name: 'Chester', note: 'Within 5–10% of Liverpool rates' },
      { name: 'Warrington', note: 'Within 5% of Liverpool rates' },
    ],
  },
}

export async function generateStaticParams() {
  return Object.keys(cities).map(borough => ({ borough }))
}

export async function generateMetadata({ params }: { params: { borough: string } }): Promise<Metadata> {
  const city = cities[params.borough]
  if (!city) return {}
  const isLondon = params.borough === 'london'
  return {
    title: city.seoTitle,
    description: city.seoDescription,
    alternates: { canonical: `/locations/${params.borough}` },
    ...(!isLondon && { robots: { index: false, follow: false } }),
    openGraph: { title: city.seoTitle, description: city.seoDescription, images: [{ url: city.image }] },
  }
}

export default function CityPage({ params }: { params: { borough: string } }) {
  const city = cities[params.borough]
  if (!city) notFound()

  return (
    <div style={{ backgroundColor: '#FFFFFF' }}>
      {/* Hero */}
      <section style={{ position: 'relative', minHeight: 300, display: 'flex', alignItems: 'flex-end' }}>
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
          <img src={city.image} alt={city.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(26,35,64,0.97) 0%, rgba(26,35,64,0.7) 50%, rgba(26,35,64,0.3) 100%)' }} />
        </div>
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 900, margin: '0 auto', width: '100%', padding: '80px 24px 48px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
            <MapPin size={16} color="#C4773B" />
            <span style={{ color: '#C4773B', fontSize: '0.85rem', fontWeight: 600 }}>{city.region}</span>
          </div>
          <h1 style={{ color: '#FFFFFF', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: 16 }}>
            Building Costs in {city.name}
          </h1>
          <p style={{ color: '#c8c0b0', fontSize: '1rem', maxWidth: 600 }}>{city.intro}</p>
        </div>
      </section>

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '48px 24px 80px' }}>
        <Link href="/locations" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#C4773B', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600, marginBottom: 40 }}>
          ← All locations
        </Link>

        {/* Cost table */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ color: '#1A2340', fontSize: '1.4rem', fontWeight: 800, marginBottom: 20 }}>Build costs in {city.name} (2026)</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
              <thead>
                <tr style={{ backgroundColor: '#1A2340' }}>
                  <th style={{ color: '#fff', padding: '12px 16px', textAlign: 'left', fontWeight: 700 }}>Project type</th>
                  <th style={{ color: '#fff', padding: '12px 16px', textAlign: 'left', fontWeight: 700 }}>Typical cost (2026)</th>
                </tr>
              </thead>
              <tbody>
                {city.costRanges.map((row, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid #EDE8DC', backgroundColor: i % 2 === 0 ? '#FAFAF7' : '#fff' }}>
                    <td style={{ padding: '12px 16px', color: '#1A2340', fontWeight: 600 }}>{row.label}</td>
                    <td style={{ padding: '12px 16px', color: '#C4773B', fontWeight: 700 }}>{row.range}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Local factors */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ color: '#1A2340', fontSize: '1.4rem', fontWeight: 800, marginBottom: 20 }}>Key factors affecting cost in {city.name}</h2>
          <div style={{ display: 'grid', gap: 12 }}>
            {city.localFactors.map((factor, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <CheckCircle size={18} color="#C4773B" style={{ flexShrink: 0, marginTop: 2 }} />
                <span style={{ color: '#4A5568', lineHeight: 1.6 }}>{factor}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Market context */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ color: '#1A2340', fontSize: '1.4rem', fontWeight: 800, marginBottom: 16 }}>Market context</h2>
          <p style={{ color: '#4A5568', lineHeight: 1.8, marginBottom: 16 }}>{city.marketContext}</p>
          <p style={{ color: '#4A5568', lineHeight: 1.8 }}>{city.recentActivity}</p>
        </section>

        {/* Planning info */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ color: '#1A2340', fontSize: '1.4rem', fontWeight: 800, marginBottom: 20 }}>Planning and Building Regulations</h2>
          <div style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            <div style={{ backgroundColor: '#F5F0E8', borderRadius: 8, padding: 20 }}>
              <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 12 }}>
                <Building2 size={18} color="#C4773B" />
                <span style={{ color: '#1A2340', fontWeight: 700, fontSize: '0.95rem' }}>Planning authority</span>
              </div>
              <p style={{ color: '#1A2340', fontWeight: 600, marginBottom: 8 }}>{city.planningAuthority}</p>
              <p style={{ color: '#4A5568', fontSize: '0.9rem', lineHeight: 1.6 }}>{city.planningNotes}</p>
            </div>
            <div style={{ backgroundColor: '#F5F0E8', borderRadius: 8, padding: 20 }}>
              <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 12 }}>
                <CheckCircle size={18} color="#C4773B" />
                <span style={{ color: '#1A2340', fontWeight: 700, fontSize: '0.95rem' }}>Building Control</span>
              </div>
              <p style={{ color: '#4A5568', fontSize: '0.9rem', lineHeight: 1.6 }}>{city.buildingControlNote}</p>
            </div>
          </div>
        </section>

        {/* Nearby areas */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ color: '#1A2340', fontSize: '1.4rem', fontWeight: 800, marginBottom: 20 }}>Costs in nearby areas</h2>
          <div style={{ display: 'grid', gap: 12, gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
            {city.nearbyAreas.map((area, i) => (
              <div key={i} style={{ border: '1px solid #EDE8DC', borderRadius: 8, padding: 16 }}>
                <div style={{ color: '#1A2340', fontWeight: 700, marginBottom: 4 }}>{area.name}</div>
                <div style={{ color: '#4A5568', fontSize: '0.85rem' }}>{area.note}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ backgroundColor: '#1A2340', borderRadius: 12, padding: 40, textAlign: 'center' }}>
          <h2 style={{ color: '#FFFFFF', fontSize: '1.4rem', fontWeight: 800, marginBottom: 12 }}>Get a free estimate for your {city.name} project</h2>
          <p style={{ color: '#c8c0b0', marginBottom: 28 }}>Connect with Builder Score-verified contractors in {city.name}.</p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/estimate" style={{ backgroundColor: '#C4773B', color: '#fff', padding: '14px 28px', borderRadius: 6, fontWeight: 700, textDecoration: 'none', fontSize: '1rem' }}>
              Get free estimate
            </Link>
            <Link href="/search" style={{ backgroundColor: 'transparent', color: '#fff', padding: '14px 28px', borderRadius: 6, fontWeight: 700, textDecoration: 'none', fontSize: '1rem', border: '1px solid rgba(255,255,255,0.3)' }}>
              Find contractors
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
