import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'

const boroughs: Record<string, { name: string; description: string }> = {
  hackney: {
    name: 'Hackney',
    description:
      'A vibrant inner-London borough with a mix of Victorian terraces and modern apartments. Permitted Development rules apply to most rear extensions up to 3m.',
  },
  enfield: {
    name: 'Enfield',
    description:
      "Enfield's mix of semi-detached and detached homes makes it ideal for rear extensions and loft conversions, often under Permitted Development.",
  },
  barking: {
    name: 'Barking and Dagenham',
    description:
      "One of London's most affordable boroughs for extension projects, with good Permitted Development allowances for residential properties.",
  },
  'waltham-forest': {
    name: 'Waltham Forest',
    description:
      'Home to tree-lined streets and 1930s semis, Waltham Forest is excellent for loft conversions and rear extensions.',
  },
  greenwich: {
    name: 'Greenwich',
    description:
      'Greenwich has a mix of Victorian terraces, conservation areas and modern estates. Planning rules vary by street.',
  },
  lewisham: {
    name: 'Lewisham',
    description:
      'With strong permitted development rights and a mix of property types, Lewisham is popular for home extension projects.',
  },
  islington: {
    name: 'Islington',
    description:
      'Many Islington streets are in conservation areas - permitted development rights may be restricted, so professional advice is essential.',
  },
  camden: {
    name: 'Camden',
    description:
      'Camden has a high proportion of conservation areas. Extensions often require full planning permission with a focus on materials and design.',
  },
  'tower-hamlets': {
    name: 'Tower Hamlets',
    description:
      'Rapid regeneration and a mix of new-builds and Victorian terraces make Tower Hamlets an active market for refurbishments and extensions.',
  },
  newham: {
    name: 'Newham',
    description:
      "Newham's ongoing development means strong demand for refurbishments and extensions, with generally good PD rights outside designated areas.",
  },
  barnet: {
    name: 'Barnet',
    description:
      "Barnet's large semi-detached and detached stock is ideal for rear extensions and loft conversions. Many roads retain Permitted Development rights.",
  },
  bexley: {
    name: 'Bexley',
    description:
      "Bexley offers some of London's most generous plot sizes, making it excellent for rear and side return extensions under Permitted Development.",
  },
  brent: {
    name: 'Brent',
    description:
      "Brent has a diverse range of Victorian terraces and inter-war semis, with strong demand for loft conversions and kitchen extensions.",
  },
  bromley: {
    name: 'Bromley',
    description:
      "London's largest borough by area, Bromley has abundant space for extensions and loft conversions, with most residential properties under PD rights.",
  },
  croydon: {
    name: 'Croydon',
    description:
      "Croydon's mix of Edwardian and inter-war housing stock makes it popular for rear extensions and loft conversions at competitive costs.",
  },
  ealing: {
    name: 'Ealing',
    description:
      "Ealing's wide tree-lined streets and semi-detached homes provide excellent opportunity for rear extensions, with good Permitted Development allowances.",
  },
  'hammersmith-and-fulham': {
    name: 'Hammersmith and Fulham',
    description:
      "Prime west London location with many Victorian terraces. Conservation areas are common so professional design advice is essential before applying.",
  },
  haringey: {
    name: 'Haringey',
    description:
      "Haringey's Victorian and Edwardian terraces are well-suited to rear extensions and loft conversions, particularly in Wood Green and Tottenham.",
  },
  harrow: {
    name: 'Harrow',
    description:
      "Harrow's suburban character and mix of detached and semi-detached homes makes it ideal for large rear and side extensions under PD.",
  },
  havering: {
    name: 'Havering',
    description:
      "One of London's most suburban boroughs, Havering offers excellent scope for extensions with large gardens and generally good PD allowances.",
  },
  hillingdon: {
    name: 'Hillingdon',
    description:
      "Hillingdon's detached and semi-detached stock in areas like Ruislip and Uxbridge provides strong opportunities for rear and double-storey extensions.",
  },
  hounslow: {
    name: 'Hounslow',
    description:
      "Hounslow has a strong market for extensions and refurbishments, with many post-war semis offering good scope under Permitted Development.",
  },
  'kensington-and-chelsea': {
    name: 'Kensington and Chelsea',
    description:
      "London's most prestigious borough. Almost all works require full planning permission. Heritage materials and exceptional design are essential.",
  },
  'kingston-upon-thames': {
    name: 'Kingston upon Thames',
    description:
      "Kingston's suburban character and mix of Victorian and inter-war stock makes it popular for rear extensions and loft conversions.",
  },
  lambeth: {
    name: 'Lambeth',
    description:
      "Lambeth's Victorian terraces in Brixton, Clapham and Streatham are ideal for rear extensions and loft conversions with strong Permitted Development rights.",
  },
  merton: {
    name: 'Merton',
    description:
      "Merton's suburban streets in Wimbledon and Morden offer excellent scope for rear extensions and loft conversions, often under PD rights.",
  },
  redbridge: {
    name: 'Redbridge',
    description:
      "Redbridge's Edwardian and inter-war housing stock in Ilford and Woodford provides strong opportunities for extensions and refurbishments.",
  },
  'richmond-upon-thames': {
    name: 'Richmond upon Thames',
    description:
      "Richmond has a high proportion of conservation areas along the Thames. Extensions require careful design, and many streets require planning permission.",
  },
  southwark: {
    name: 'Southwark',
    description:
      "Southwark's Victorian terraces in Peckham, Bermondsey and Dulwich are popular for rear extensions and loft conversions, with growing demand.",
  },
  sutton: {
    name: 'Sutton',
    description:
      "Sutton's suburban character and generous plot sizes make it one of the better-value boroughs for rear extensions and loft conversions.",
  },
  wandsworth: {
    name: 'Wandsworth',
    description:
      "Wandsworth's Victorian and Edwardian terraces in Clapham, Battersea and Tooting are highly sought after for rear extensions and loft conversions.",
  },
  westminster: {
    name: 'Westminster',
    description:
      "Westminster is almost entirely in conservation areas. All works require full planning permission and careful attention to heritage materials and design.",
  },
}

export function generateStaticParams() {
  return Object.keys(boroughs).map((borough) => ({ borough }))
}

export async function generateMetadata({
  params,
}: {
  params: { borough: string }
}): Promise<Metadata> {
  const borough = boroughs[params.borough]
  if (!borough) return {}
  return {
    title: `Extension & Loft Conversion Builders in ${borough.name}, London`,
    description: borough.description,
  }
}

const services = [
  {
    title: 'Rear Extensions',
    description: 'Single and double-storey rear extensions designed and built to a high specification.',
  },
  {
    title: 'Loft Conversions',
    description: 'Dormer, hip-to-gable and Velux loft conversions that add significant value.',
  },
  {
    title: 'Full Refurbishments',
    description: 'Complete interior and exterior refurbishments managed under one roof.',
  },
  {
    title: 'Structural Works',
    description: 'Steel beam installation, load-bearing wall removal and structural alterations.',
  },
]

const trustPoints = [
  { title: 'Builder Score verified', desc: 'Our contractors carry a quantified trust score based on real project data.' },
  { title: 'Checkatrade listed', desc: 'Independently verified reviews from real homeowners across London.' },
  { title: 'London-based', desc: 'We operate exclusively across Greater London - no travelling teams.' },
  { title: 'Full principal contractor service', desc: 'We manage the entire build, so you have one point of contact.' },
]

export default function BoroughPage({ params }: { params: { borough: string } }) {
  const data = boroughs[params.borough]
  if (!data) notFound()

  const { name, description } = data

  const faqs = [
    {
      q: `How much does a rear extension cost in ${name}?`,
      a: `Rear extension costs in ${name} typically range from £40,000 for a small single-storey project to £120,000+ for a large double-storey extension with high-spec finishes. The price depends on size, specification and site conditions. Request a free quote for an accurate figure.`,
    },
    {
      q: `Do I need planning permission in ${name}?`,
      a: `Many extensions in ${name} qualify under Permitted Development rights, meaning no full planning application is required. However, conservation areas, listed buildings and certain property types may restrict PD rights. We advise on your specific situation as part of our free consultation.`,
    },
    {
      q: 'How long does a rear extension take in London?',
      a: 'A typical single-storey rear extension takes 10-14 weeks on site once planning (if required) is resolved. Double-storey extensions and larger projects can take 16-24 weeks. We provide a detailed programme before work starts.',
    },
    {
      q: 'What areas do you cover?',
      a: `We cover all of Greater London including ${name} and surrounding boroughs. Our base is in East London but our teams operate across the whole of the capital.`,
    },
    {
      q: `How do I find a verified builder in ${name}?`,
      a: `Dwellinger's Builder Score™ ranks every contractor on a 0–1000 scale based on verified reviews, compliance records, and payment history. You can browse Builder Score-verified contractors in ${name} on our platform and request quotes directly. All contractors are independently verified.`,
    },
    {
      q: `What is the best type of extension for a home in ${name}?`,
      a: `The best extension type depends on your property, garden size, and budget. Single-storey rear extensions are the most common in ${name} and offer excellent value. Loft conversions are ideal when ground-floor space is limited. We offer a free consultation to advise on the best option for your specific property and planning context.`,
    },
  ]

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  }

  const localBizSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `Dwellinger — Extension & Loft Conversion Builders in ${name}`,
    url: `https://dwellinger.co.uk/locations/${params.borough}`,
    telephone: '+447359872594',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '347 Barking Road',
      addressLocality: 'London',
      postalCode: 'E13 8EE',
      addressCountry: 'GB',
    },
    areaServed: { '@type': 'City', name },
    serviceType: ['Rear Extensions', 'Loft Conversions', 'Full Refurbishments', 'Structural Works'],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBizSchema) }}
      />
      <section style={{ backgroundColor: '#1A2340', color: '#FFFFFF', padding: '80px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', fontWeight: 800, marginBottom: 24, lineHeight: 1.2 }}>
            Extension &amp; Loft Conversion Builders in {name}, London
          </h1>
          <p style={{ fontSize: '1.125rem', color: '#c8c0b0', maxWidth: 660, margin: '0 auto' }}>
            {description}
          </p>
          <div style={{ marginTop: 40, display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              href="/get-a-quote"
              style={{ backgroundColor: '#C4773B', color: '#fff', padding: '14px 32px', borderRadius: 6, fontWeight: 700, textDecoration: 'none', fontSize: '1rem' }}
            >
              Get a Free Quote
            </Link>
            <Link
              href="/tools/extension-cost-calculator"
              style={{ backgroundColor: 'transparent', color: '#fff', padding: '14px 32px', borderRadius: 6, fontWeight: 600, textDecoration: 'none', fontSize: '1rem', border: '1px solid rgba(255,255,255,0.3)' }}
            >
              Use Cost Calculator
            </Link>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: '#F5F0E8', padding: '72px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ color: '#1A2340', fontSize: '1.75rem', fontWeight: 800, textAlign: 'center', marginBottom: 48 }}>
            Our Services in {name}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24 }}>
            {services.map((s) => (
              <div key={s.title} style={{ backgroundColor: '#fff', border: '1px solid #EDE8DC', borderRadius: 8, padding: '28px 24px' }}>
                <h3 style={{ color: '#1A2340', fontSize: '1.1rem', fontWeight: 700, marginBottom: 10 }}>{s.title}</h3>
                <p style={{ color: '#4A5568', fontSize: '0.9rem', lineHeight: 1.6 }}>{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: '#FFFFFF', padding: '72px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ color: '#1A2340', fontSize: '1.75rem', fontWeight: 800, textAlign: 'center', marginBottom: 48 }}>
            Why Choose Dwellinger in {name}?
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24 }}>
            {trustPoints.map((t) => (
              <div key={t.title} style={{ padding: '24px', borderLeft: '4px solid #C4773B' }}>
                <h3 style={{ color: '#1A2340', fontSize: '1rem', fontWeight: 700, marginBottom: 8 }}>{t.title}</h3>
                <p style={{ color: '#4A5568', fontSize: '0.875rem', lineHeight: 1.6 }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: '#F5F0E8', padding: '72px 24px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h2 style={{ color: '#1A2340', fontSize: '1.75rem', fontWeight: 800, textAlign: 'center', marginBottom: 48 }}>
            Frequently Asked Questions - {name}
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {faqs.map((faq) => (
              <div key={faq.q} style={{ backgroundColor: '#fff', border: '1px solid #EDE8DC', borderRadius: 8, padding: '28px 24px' }}>
                <h3 style={{ color: '#1A2340', fontSize: '1rem', fontWeight: 700, marginBottom: 10 }}>{faq.q}</h3>
                <p style={{ color: '#4A5568', fontSize: '0.9rem', lineHeight: 1.7 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: '#1A2340', padding: '72px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <h2 style={{ color: '#fff', fontSize: '2rem', fontWeight: 800, marginBottom: 20 }}>
            Get a Free Quote in {name}
          </h2>
          <p style={{ color: '#c8c0b0', marginBottom: 36, fontSize: '1.05rem' }}>
            Tell us about your project and we will get back to you within 24 hours with a no-obligation estimate.
          </p>
          <Link
            href="/get-a-quote"
            style={{ backgroundColor: '#C4773B', color: '#fff', padding: '16px 40px', borderRadius: 6, fontWeight: 700, textDecoration: 'none', fontSize: '1.05rem', display: 'inline-block' }}
          >
            Start Your Free Quote
          </Link>
        </div>
      </section>
    </>
  )
}
