import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Property Investor Hub London | Construction & Development Intelligence | Dwellinger',
  description:
    'Everything London property investors need: build cost data, planning intelligence, contractor vetting, project management and QS services for BTL, HMO and development projects.',
}

const tools = [
  {
    title: 'Instant Build Cost Estimates',
    desc: 'Get ballpark costs for extensions, loft conversions, refurbishments and new build projects before you commit to an acquisition.',
    href: '/estimate',
    cta: 'Get an Estimate',
  },
  {
    title: 'Planning Intelligence',
    desc: 'Track planning applications near your assets. Spot development opportunities before they become public knowledge.',
    href: '/tools/planning',
    cta: 'Planning Tools',
  },
  {
    title: 'Contractor Vetting',
    desc: 'Builder Score gives every contractor a quantified trust rating based on verified reviews, Companies House data and real project history.',
    href: '/builder-score',
    cta: 'Builder Score',
  },
  {
    title: 'HMO Conversion Calculator',
    desc: 'Instant cost estimate for converting a property to HMO. Based on real London projects including fire compliance, M&E and licensing.',
    href: '/tools/hmo-calculator',
    cta: 'HMO Calculator',
  },
  {
    title: 'ROI & Yield Calculator',
    desc: 'Calculate gross yield, net yield and cash-on-cash return before committing to an acquisition or renovation project.',
    href: '/tools/roi-calculator',
    cta: 'ROI Calculator',
  },
  {
    title: 'Development Appraisal',
    desc: 'Rapid residential development appraisal: profit on GDV, ROI on cost, finance cost modelling and residual land value.',
    href: '/tools/development-appraisal',
    cta: 'Run Appraisal',
  },
]

const investorTypes = [
  {
    title: 'Buy-to-Let Landlords',
    desc: 'Refurbish between tenancies, upgrade to modern standards, and maintain a portfolio of properties without managing a supply chain of contractors yourself. We handle procurement, quality and programme.',
    icon: '🏠',
  },
  {
    title: 'HMO Investors',
    desc: 'HMO conversions and licensing upgrades require a contractor who understands compliance as well as cost. We manage fire safety, room specifications and regulatory requirements as part of the build.',
    icon: '🏘️',
  },
  {
    title: 'Property Developers',
    desc: 'From single unit conversions to multi-unit residential schemes, we bring QS discipline, programme management and trade coordination to projects where every week of delay costs money.',
    icon: '🏗️',
  },
  {
    title: 'Permitted Development Investors',
    desc: 'PD extensions and loft conversions that add genuine GDV uplift. We handle the Class Q, prior approval and planning logistics alongside the build.',
    icon: '📐',
  },
]

const stats = [
  { value: '32', label: 'London Boroughs Covered' },
  { value: '£40k–£500k+', label: 'Project Range' },
  { value: '10–24 wks', label: 'Typical Programme' },
  { value: '1', label: 'Point of Contact' },
]

export default function InvestorHubPage() {
  return (
    <main>
      {/* Hero */}
      <section
        style={{
          backgroundColor: '#1A2340',
          color: '#FFFFFF',
          padding: '96px 24px',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <p
            style={{
              color: '#C4773B',
              fontWeight: 600,
              fontSize: '13px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: '20px',
            }}
          >
            Investor Hub
          </p>
          <h1
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.25rem)',
              fontWeight: 800,
              lineHeight: 1.12,
              marginBottom: '24px',
            }}
          >
            Construction & Intelligence for London Property Investors
          </h1>
          <p
            style={{
              fontSize: '1.15rem',
              color: '#c8d0de',
              maxWidth: '700px',
              margin: '0 auto 36px',
              lineHeight: 1.7,
            }}
          >
            Cost data, planning intelligence, contractor vetting, QS services and
            project management — everything serious investors need to protect margin
            and deliver projects on programme.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              href="/get-a-quote"
              style={{
                backgroundColor: '#C4773B',
                color: '#FFFFFF',
                padding: '14px 36px',
                borderRadius: '6px',
                fontWeight: 700,
                textDecoration: 'none',
                fontSize: '1rem',
              }}
            >
              Get Build Cost Estimate
            </Link>
            <Link
              href="/book-a-call"
              style={{
                backgroundColor: 'transparent',
                color: '#FFFFFF',
                padding: '14px 36px',
                borderRadius: '6px',
                fontWeight: 600,
                textDecoration: 'none',
                fontSize: '1rem',
                border: '1px solid rgba(255,255,255,0.3)',
              }}
            >
              Book a Call
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ backgroundColor: '#C4773B', padding: '48px 24px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '24px',
              textAlign: 'center',
            }}
          >
            {stats.map((s) => (
              <div key={s.label}>
                <div
                  style={{
                    fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
                    fontWeight: 800,
                    color: '#FFFFFF',
                    marginBottom: '6px',
                  }}
                >
                  {s.value}
                </div>
                <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)', fontWeight: 500 }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section style={{ backgroundColor: '#FFFFFF', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto' }}>
          <h2
            style={{
              color: '#1A2340',
              fontSize: 'clamp(1.6rem, 3vw, 2.25rem)',
              fontWeight: 700,
              textAlign: 'center',
              marginBottom: '12px',
            }}
          >
            Tools & Services for Investors
          </h2>
          <p
            style={{
              color: '#4A5568',
              textAlign: 'center',
              fontSize: '1rem',
              marginBottom: '48px',
              maxWidth: '600px',
              margin: '0 auto 48px',
            }}
          >
            From pre-acquisition cost checks to post-completion handover — every stage of the investor journey covered.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
            }}
          >
            {tools.map((tool) => (
              <div
                key={tool.title}
                style={{
                  backgroundColor: '#F5F0E8',
                  borderRadius: '10px',
                  padding: '28px',
                  border: '1px solid #EDE8DC',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <h3
                  style={{
                    color: '#1A2340',
                    fontWeight: 700,
                    fontSize: '1rem',
                    marginBottom: '10px',
                  }}
                >
                  {tool.title}
                </h3>
                <p
                  style={{
                    color: '#4A5568',
                    fontSize: '0.93rem',
                    lineHeight: 1.65,
                    flex: 1,
                    marginBottom: '20px',
                  }}
                >
                  {tool.desc}
                </p>
                <Link
                  href={tool.href}
                  style={{
                    display: 'inline-block',
                    color: '#C4773B',
                    fontWeight: 700,
                    fontSize: '0.875rem',
                    textDecoration: 'none',
                    borderTop: '1px solid #EDE8DC',
                    paddingTop: '14px',
                  }}
                >
                  {tool.cta} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investor types */}
      <section style={{ backgroundColor: '#F5F0E8', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto' }}>
          <h2
            style={{
              color: '#1A2340',
              fontSize: 'clamp(1.6rem, 3vw, 2.25rem)',
              fontWeight: 700,
              textAlign: 'center',
              marginBottom: '48px',
            }}
          >
            Built for Every Investor Type
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '24px',
            }}
          >
            {investorTypes.map((type) => (
              <div
                key={type.title}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '10px',
                  padding: '32px',
                  border: '1px solid #EDE8DC',
                }}
              >
                <div style={{ fontSize: '2rem', marginBottom: '16px' }}>{type.icon}</div>
                <h3
                  style={{
                    color: '#1A2340',
                    fontWeight: 700,
                    fontSize: '1.05rem',
                    marginBottom: '10px',
                  }}
                >
                  {type.title}
                </h3>
                <p
                  style={{
                    color: '#4A5568',
                    fontSize: '0.93rem',
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  {type.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{ backgroundColor: '#1A2340', padding: '80px 24px', textAlign: 'center' }}
      >
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <h2
            style={{
              color: '#FFFFFF',
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              fontWeight: 700,
              marginBottom: '16px',
            }}
          >
            Protect Your Investment. Control Your Build.
          </h2>
          <p
            style={{
              color: '#c8d0de',
              fontSize: '1.05rem',
              marginBottom: '32px',
              lineHeight: 1.6,
            }}
          >
            Start with a free build cost estimate, or book a call to discuss your
            portfolio or development project with our team.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              href="/estimate"
              style={{
                display: 'inline-block',
                backgroundColor: '#C4773B',
                color: '#FFFFFF',
                padding: '16px 36px',
                borderRadius: '6px',
                fontWeight: 700,
                fontSize: '1rem',
                textDecoration: 'none',
              }}
            >
              Free Cost Estimate
            </Link>
            <Link
              href="/book-a-call"
              style={{
                display: 'inline-block',
                backgroundColor: 'transparent',
                color: '#FFFFFF',
                padding: '16px 36px',
                borderRadius: '6px',
                fontWeight: 600,
                fontSize: '1rem',
                textDecoration: 'none',
                border: '1px solid rgba(255,255,255,0.4)',
              }}
            >
              Book a Call
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
