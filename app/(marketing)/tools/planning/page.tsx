import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Planning Intelligence London | Track Planning Applications | Dwellinger',
  description:
    'Track planning applications across all 32 London boroughs. Identify development opportunities, monitor competitor activity, and spot planning patterns before they reach the open market.',
}

const features = [
  {
    title: 'Application Tracking',
    desc: 'Monitor every planning application within a custom radius of your portfolio properties. Get notified when relevant applications are submitted, decided, or appealed.',
  },
  {
    title: 'Development Opportunity Finder',
    desc: 'Identify sites with permitted development potential, planning history that suggests consent is achievable, or neighbouring applications that signal a changing area.',
  },
  {
    title: 'Decision Pattern Analysis',
    desc: 'Understand how each London borough and planning officer has decided on similar applications. Build a smarter case before you submit.',
  },
  {
    title: 'Appeal Outcomes Database',
    desc: 'Search Planning Inspectorate appeal decisions across London. Understand what arguments succeed and where officers have been overturned.',
  },
  {
    title: 'Permitted Development Checker',
    desc: 'Check whether your project qualifies for permitted development under the current Use Class Order. Instant screening across Class Q, Class R, and residential extensions.',
  },
  {
    title: 'Prior Approval Monitor',
    desc: 'Track prior approval applications in your target boroughs. Spot volume conversion and change-of-use opportunities before they exchange.',
  },
]

const boroughStats = [
  { borough: 'Tower Hamlets', applications: '4,200+', trend: 'High volume' },
  { borough: 'Southwark', applications: '3,800+', trend: 'Rising' },
  { borough: 'Hackney', applications: '3,200+', trend: 'Stable' },
  { borough: 'Newham', applications: '2,900+', trend: 'Rising fast' },
  { borough: 'Lambeth', applications: '2,600+', trend: 'Stable' },
  { borough: 'Lewisham', applications: '2,400+', trend: 'Rising' },
]

export default function PlanningPage() {
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
            Planning Intelligence &mdash; Pro Feature
          </p>
          <h1
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.25rem)',
              fontWeight: 800,
              lineHeight: 1.12,
              marginBottom: '24px',
            }}
          >
            Track Every Planning Application Across London
          </h1>
          <p
            style={{
              fontSize: '1.15rem',
              color: '#c8d0de',
              maxWidth: '680px',
              margin: '0 auto 36px',
              lineHeight: 1.7,
            }}
          >
            Monitor planning applications, spot development opportunities, and understand
            decision patterns across all 32 London boroughs in real time.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              href="/register"
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
              Get Pro Access
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
              Book a Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{ backgroundColor: '#FFFFFF', padding: '80px 24px' }}>
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
            What Planning Intelligence Gives You
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
            }}
          >
            {features.map((f) => (
              <div
                key={f.title}
                style={{
                  backgroundColor: '#F5F0E8',
                  borderRadius: '10px',
                  padding: '28px',
                  border: '1px solid #EDE8DC',
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
                  {f.title}
                </h3>
                <p
                  style={{
                    color: '#4A5568',
                    fontSize: '0.93rem',
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Borough coverage */}
      <section style={{ backgroundColor: '#F5F0E8', padding: '80px 24px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2
            style={{
              color: '#1A2340',
              fontSize: 'clamp(1.6rem, 3vw, 2.25rem)',
              fontWeight: 700,
              marginBottom: '16px',
            }}
          >
            Live Data from 32 London Boroughs
          </h2>
          <p style={{ color: '#4A5568', marginBottom: '32px', fontSize: '0.95rem', lineHeight: 1.65 }}>
            Planning data refreshed daily from all London local planning authorities, plus the City of London Corporation.
          </p>
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '10px',
              border: '1px solid #EDE8DC',
              overflow: 'hidden',
            }}
          >
            {boroughStats.map((b, i) => (
              <div
                key={b.borough}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '16px 24px',
                  borderBottom: i < boroughStats.length - 1 ? '1px solid #EDE8DC' : 'none',
                  backgroundColor: i % 2 === 0 ? '#FFFFFF' : '#FDFAF6',
                }}
              >
                <span style={{ color: '#1A2340', fontWeight: 500, fontSize: '0.95rem' }}>{b.borough}</span>
                <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
                  <span style={{ color: '#4A5568', fontSize: '0.9rem' }}>{b.applications} / year</span>
                  <span
                    style={{
                      color: '#C4773B',
                      fontWeight: 700,
                      fontSize: '0.8rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {b.trend}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <p style={{ color: '#4A5568', fontSize: '0.8rem', marginTop: '12px' }}>
            + 26 additional London boroughs covered. All 32 LPAs plus City of London.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: '#1A2340', padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '620px', margin: '0 auto' }}>
          <h2
            style={{
              color: '#FFFFFF',
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              fontWeight: 700,
              marginBottom: '16px',
            }}
          >
            See London Planning Through a New Lens
          </h2>
          <p
            style={{
              color: '#c8d0de',
              fontSize: '1.05rem',
              marginBottom: '32px',
              lineHeight: 1.6,
            }}
          >
            Planning Intelligence is available on Dwellinger Pro and Enterprise plans.
            Start a free account to explore, or book a demo to see it in action on your target areas.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              href="/register"
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
              Start Free
            </Link>
            <Link
              href="/platform/pricing"
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
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
