import { pageMetadata } from '@/lib/seo'
import Link from 'next/link'
import { CheckCircle, ArrowRight } from 'lucide-react'

export const metadata = pageMetadata({
  path: '/estimate',
  title: 'Get a Free Project Estimate | Dwellinger',
  description: 'Get an instant free estimate for your UK building project — extension, loft conversion, refurbishment and more. Use our calculator or request a QS-reviewed cost plan.',
})

const SERVICES = [
  {
    title: 'Free Online Calculator',
    price: 'Free',
    description: 'Instant indicative cost range for budgeting. Based on project type, size, location and specification. Best for early-stage planning.',
    features: ['Instant result', 'Extension, loft, refurb, new build', 'Location-adjusted costs', 'Spec-level options'],
    cta: { label: 'Use the Cost Calculator', href: '/tools/cost-calculator' },
    highlight: false,
  },
  {
    title: 'QS-Reviewed Estimate',
    price: 'From £95',
    description: 'A detailed cost breakdown reviewed by a qualified quantity surveyor — suitable for budgeting, finance applications, and architect briefings.',
    features: ['Detailed line-by-line breakdown', 'Reviewed by qualified QS', 'Suitable for finance & planning', 'Based on your drawings / brief', 'Delivered within 48 hours'],
    cta: { label: 'Order a Detailed Estimate', href: '/services/estimating' },
    highlight: true,
  },
  {
    title: 'Full Tender Package',
    price: 'From £495',
    description: 'A full tender package including scope of works, Bill of Quantities, and contractor selection support — for projects where cost certainty matters.',
    features: ['Full scope of works', 'Bill of Quantities', 'Contractor tender support', 'Bid analysis & recommendation', 'Up to 3 contractor packages'],
    cta: { label: 'Enquire About Tender Support', href: '/contact' },
    highlight: false,
  },
]

export default function EstimatePage() {
  return (
    <div>
      <section style={{ backgroundColor: '#1A2340', color: '#FFFFFF', padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <p style={{ color: '#C4773B', fontWeight: 600, fontSize: '13px', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16 }}>
            Estimating & Cost Planning
          </p>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: 16 }}>
            Get a Project Estimate
          </h1>
          <p style={{ fontSize: '1.05rem', color: '#c8d0de', lineHeight: 1.65 }}>
            From a free online calculator to a full QS-reviewed cost plan — get the numbers you need for your project at any stage.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: '#FAFAF7', padding: '64px 24px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {SERVICES.map(service => (
              <div
                key={service.title}
                style={{
                  backgroundColor: service.highlight ? '#1A2340' : '#FFFFFF',
                  borderRadius: 12,
                  border: service.highlight ? 'none' : '1px solid #EDE8DC',
                  padding: '32px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div style={{ marginBottom: 8 }}>
                  <span style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: service.highlight ? '#C4773B' : '#6B7280',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                  }}>
                    {service.price}
                  </span>
                </div>
                <h2 style={{ color: service.highlight ? '#FFFFFF' : '#1A2340', fontWeight: 700, fontSize: '1.2rem', marginBottom: 12 }}>
                  {service.title}
                </h2>
                <p style={{ color: service.highlight ? '#c8d0de' : '#6B7280', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: 24 }}>
                  {service.description}
                </p>
                <ul style={{ listStyle: 'none', margin: '0 0 28px', padding: 0, flexGrow: 1 }}>
                  {service.features.map(f => (
                    <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 10 }}>
                      <CheckCircle size={15} color="#C4773B" style={{ flexShrink: 0, marginTop: 2 }} />
                      <span style={{ color: service.highlight ? '#c8d0de' : '#374151', fontSize: '0.88rem' }}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={service.cta.href}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 8,
                    backgroundColor: service.highlight ? '#C4773B' : 'transparent',
                    color: service.highlight ? '#FFFFFF' : '#C4773B',
                    border: service.highlight ? 'none' : '2px solid #C4773B',
                    padding: '12px 24px',
                    borderRadius: 6,
                    fontWeight: 700,
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                  }}
                >
                  {service.cta.label}
                  <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: '#FFFFFF', padding: '64px 24px' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <h2 style={{ color: '#1A2340', fontWeight: 700, fontSize: 'clamp(1.3rem, 2.5vw, 1.7rem)', textAlign: 'center', marginBottom: 40 }}>
            Common questions
          </h2>
          {[
            {
              q: 'What information do I need to get an estimate?',
              a: 'For the free calculator, just your project type, size and location. For a QS-reviewed estimate, we need either architectural drawings or a detailed brief. The more detail you can provide, the more accurate the result.',
            },
            {
              q: 'What is the difference between a ballpark and a detailed estimate?',
              a: 'A ballpark is a broad indicative range based on project type and m². A detailed estimate breaks the project into line items — groundworks, structure, M&E, finishes — and is based on your specific drawings and specification.',
            },
            {
              q: 'How long does a QS-reviewed estimate take?',
              a: 'Our QS team typically delivers within 48 hours for standard residential projects. Complex commercial schemes may take 3–5 days.',
            },
            {
              q: 'Can I use the estimate to get contractor quotes?',
              a: 'Yes. A detailed estimate can be shared with contractors as a cost reference. For formal competitive tendering, the Full Tender Package service includes a scope of works that contractors can price against.',
            },
          ].map(faq => (
            <div key={faq.q} style={{ borderBottom: '1px solid #EDE8DC', paddingBottom: 24, marginBottom: 24 }}>
              <h3 style={{ color: '#1A2340', fontWeight: 700, fontSize: '1rem', marginBottom: 10 }}>{faq.q}</h3>
              <p style={{ color: '#4A5568', fontSize: '0.9rem', lineHeight: 1.7, margin: 0 }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
