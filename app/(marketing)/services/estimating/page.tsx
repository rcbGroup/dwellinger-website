import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Professional Construction Estimates from £95 | Dwellinger',
  description: 'QS-reviewed construction estimates for London homeowners and developers. Not a chatbot guess — based on 143+ real London project costs. From £95, delivered in 5 working days.',
}

const tiers = [
  {
    name: 'Outline',
    price: '£95',
    days: '5 working days',
    popular: false,
    items: [
      'Single-storey cost indication',
      'Cost per m² range',
      'Materials overview',
      'Summary report (PDF)',
    ],
  },
  {
    name: 'Standard',
    price: '£150',
    days: '5 working days',
    popular: true,
    items: [
      'Everything in Outline',
      'Elemental cost breakdown',
      'Prelims and contingency included',
      'Suitable for planning applications',
    ],
  },
  {
    name: 'Full',
    price: '£250',
    days: '7 working days',
    popular: false,
    items: [
      'Everything in Standard',
      'Detailed bill of quantities',
      'Subcontractor schedule',
      'Suitable for tender',
    ],
  },
  {
    name: 'Premium',
    price: '£350',
    days: '7–10 working days',
    popular: false,
    items: [
      'Everything in Full',
      'QS review call (30 min)',
      'Value engineering notes',
      'Comparable project data',
    ],
  },
]

const faqs = [
  {
    q: 'How accurate are the estimates?',
    a: 'Our estimates are drawn from 143+ completed London projects and reviewed by a qualified QS. Outline estimates carry a ±20% margin; Full and Premium estimates narrow to ±10% depending on specification complexity.',
  },
  {
    q: 'What information do I need to provide?',
    a: 'At minimum: what you want to build, approximate size, location, and any drawings you have. The more detail you can share, the more accurate we can be. We\'ll ask for anything else we need after you order.',
  },
  {
    q: 'Are these estimates suitable for getting planning permission?',
    a: 'Standard tier and above are suitable for supporting planning applications. Full and Premium tiers are suitable for tender purposes and lender/investor submissions.',
  },
  {
    q: 'What if I want to proceed with Dwellinger after receiving my estimate?',
    a: 'The cost of your estimate is deducted from our fee if you appoint us within 3 months of receiving your report. Your estimate becomes the starting point for our full design and build or principal contractor service.',
  },
]

export default function EstimatingPage() {
  return (
    <div>
      {/* Hero */}
      <section style={{ backgroundColor: '#1A2340', color: '#FFFFFF', padding: '96px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <p style={{ color: '#C4773B', fontWeight: 600, fontSize: '14px', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '20px' }}>
            Estimating Service
          </p>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)', fontWeight: 700, lineHeight: 1.15, marginBottom: '20px' }}>
            Professional Construction Estimates from £95
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#c8d0de', maxWidth: '600px', margin: '0 auto', lineHeight: 1.65 }}>
            Not a chatbot guess — QS-reviewed, based on real London project data.
          </p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section style={{ backgroundColor: '#FFFFFF', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
          <h2 style={{ color: '#1A2340', fontSize: 'clamp(1.6rem, 3vw, 2.25rem)', fontWeight: 700, textAlign: 'center', marginBottom: '12px' }}>
            Choose Your Estimate
          </h2>
          <p style={{ color: '#4A5568', textAlign: 'center', fontSize: '1rem', marginBottom: '48px' }}>
            All estimates delivered as a PDF report. No subscription, no hidden fees.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
            {tiers.map((tier) => (
              <div
                key={tier.name}
                style={{
                  borderRadius: '10px',
                  padding: '36px 28px',
                  border: tier.popular ? '2px solid #C4773B' : '1px solid #EDE8DC',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                }}
              >
                {tier.popular && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '-14px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      backgroundColor: '#C4773B',
                      color: '#FFFFFF',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      padding: '4px 16px',
                      borderRadius: '20px',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    Most Popular
                  </div>
                )}
                <h3 style={{ color: '#1A2340', fontWeight: 700, fontSize: '1.2rem', marginBottom: '8px' }}>{tier.name}</h3>
                <div style={{ marginBottom: '4px' }}>
                  <span style={{ color: '#1A2340', fontWeight: 800, fontSize: '2rem' }}>{tier.price}</span>
                </div>
                <p style={{ color: '#4A5568', fontSize: '0.88rem', marginBottom: '24px' }}>Delivered in {tier.days}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px', display: 'flex', flexDirection: 'column', gap: '10px', flexGrow: 1 }}>
                  {tier.items.map((item) => (
                    <li key={item} style={{ display: 'flex', gap: '8px', color: '#4A5568', fontSize: '0.93rem', lineHeight: 1.4 }}>
                      <span style={{ color: '#C4773B', flexShrink: 0 }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/get-a-quote"
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    backgroundColor: tier.popular ? '#C4773B' : '#1A2340',
                    color: '#FFFFFF',
                    padding: '12px 20px',
                    borderRadius: '6px',
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    textDecoration: 'none',
                  }}
                >
                  Order {tier.name} Estimate
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section style={{ backgroundColor: '#F5F0E8', padding: '64px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '20px' }}>📊</div>
          <h2 style={{ color: '#1A2340', fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, marginBottom: '16px' }}>
            Based on Real London Project Data
          </h2>
          <p style={{ color: '#4A5568', fontSize: '1.05rem', lineHeight: 1.7 }}>
            Our estimates draw on cost data from 143+ completed London projects — extensions, loft conversions, full refurbishments and new builds. Every estimate is reviewed by a qualified QS before it leaves our office. Not generated by a chatbot. Not based on national averages that don't reflect London rates.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section style={{ backgroundColor: '#FFFFFF', padding: '80px 24px' }}>
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <h2 style={{ color: '#1A2340', fontSize: 'clamp(1.6rem, 3vw, 2.25rem)', fontWeight: 700, textAlign: 'center', marginBottom: '48px' }}>
            Frequently Asked Questions
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {faqs.map((faq, idx) => (
              <div
                key={faq.q}
                style={{
                  padding: '28px 0',
                  borderBottom: idx < faqs.length - 1 ? '1px solid #EDE8DC' : 'none',
                }}
              >
                <h3 style={{ color: '#1A2340', fontWeight: 700, fontSize: '1.05rem', marginBottom: '10px' }}>{faq.q}</h3>
                <p style={{ color: '#4A5568', lineHeight: 1.7, margin: 0, fontSize: '0.97rem' }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: '#1A2340', padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '620px', margin: '0 auto' }}>
          <h2 style={{ color: '#FFFFFF', fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, marginBottom: '16px' }}>
            Ready to Order Your Estimate?
          </h2>
          <p style={{ color: '#c8d0de', fontSize: '1.05rem', marginBottom: '32px', lineHeight: 1.6 }}>
            Tell us about your project and we'll confirm the right tier for your needs. Most estimates delivered within 5 working days.
          </p>
          <Link
            href="/get-a-quote"
            style={{
              display: 'inline-block',
              backgroundColor: '#C4773B',
              color: '#FFFFFF',
              padding: '16px 44px',
              borderRadius: '6px',
              fontWeight: 700,
              fontSize: '1.05rem',
              textDecoration: 'none',
            }}
          >
            Order Your Estimate
          </Link>
        </div>
      </section>
    </div>
  )
}
