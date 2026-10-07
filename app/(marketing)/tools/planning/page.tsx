import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Planning Intelligence London | Track Applications & Opportunities | Dwellinger',
  description:
    'Track planning applications across all 32 London boroughs. Spot development opportunities, monitor neighbours, check permitted development rights and appeal outcomes.',
}

const features = [
  {
    title: 'Application Tracking',
    desc: 'Monitor live planning applications near any London postcode. Get notified when applications are submitted, approved, refused or appealed &mdash; before the public consultation closes.',
  },
  {
    title: 'Development Opportunity Finder',
    desc: 'Identify sites with prior planning history, lapsed permissions or permitted development potential. Filter by borough, use class and application type.',
  },
  {
    title: 'Decision Pattern Analysis',
    desc: 'Analyse how each borough planning committee decides on specific application types. Understand what gets approved and what gets refused before you submit.',
  },
  {
    title: 'Appeal Outcomes Database',
    desc: 'Search Planning Inspectorate appeal decisions. Understand which refusals get overturned on appeal and what arguments succeed at committee level.',
  },
  {
    title: 'PD Checker',
    desc: 'Verify whether a proposed extension or conversion falls within permitted development rights. Instant check based on property type, zone and size parameters.',
  },
  {
    title: 'Prior Approval Monitor',
    desc: 'Track prior approval applications across Class MA, Class Q and Class O. Spot commercial-to-residential and agricultural conversion opportunities early.',
  },
]

const boroughStats = [
  { borough: 'Hackney', apps: 1240, approval: '74%', avgWeeks: 11 },
  { borough: 'Southwark', apps: 1580, approval: '71%', avgWeeks: 13 },
  { borough: 'Tower Hamlets', apps: 1420, approval: '68%', avgWeeks: 12 },
  { borough: 'Lambeth', apps: 1180, approval: '76%', avgWeeks: 10 },
  { borough: 'Lewisham', apps: 960, approval: '79%', avgWeeks: 9 },
  { borough: 'Greenwich', apps: 1050, approval: '77%', avgWeeks: 10 },
]

export default function PlanningIntelligencePage() {
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
              display: 'inline-block',
              backgroundColor: '#C4773B',
              color: '#FFFFFF',
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              padding: '4px 12px',
              borderRadius: '4px',
              marginBottom: '24px',
            }}
          >
            Pro
          </p>
          <h1
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.25rem)',
              fontWeight: 800,
              lineHeight: 1.12,
              marginBottom: '24px',
            }}
          >
            Planning Intelligence for London Investors
          </h1>
          <p
            style={{
              fontSize: '1.15rem',
              color: '#c8d0de',
              maxWidth: '680px',
              margin: '0 auto 40px',
              lineHeight: 1.7,
            }}
          >
            Track applications, find opportunities and understand borough decision
            patterns &mdash; before your competitors do.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              href="/platform/pricing"
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
            Everything in the Planning Intelligence Suite
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
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
                    fontSize: '1.05rem',
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
                  dangerouslySetInnerHTML={{ __html: f.desc }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Borough stats */}
      <section style={{ backgroundColor: '#F5F0E8', padding: '80px 24px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2
            style={{
              color: '#1A2340',
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              fontWeight: 700,
              textAlign: 'center',
              marginBottom: '40px',
            }}
          >
            Sample Borough Data
          </h2>
          <div style={{ overflowX: 'auto' }}>
            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse',
                fontSize: '0.9rem',
              }}
            >
              <thead>
                <tr style={{ backgroundColor: '#1A2340', color: '#FFFFFF' }}>
                  {['Borough', 'Annual Applications', 'Approval Rate', 'Avg Decision (weeks)'].map(
                    (h) => (
                      <th
                        key={h}
                        style={{
                          padding: '12px 16px',
                          textAlign: 'left',
                          fontWeight: 600,
                          fontSize: '0.85rem',
                        }}
                      >
                        {h}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {boroughStats.map((row, i) => (
                  <tr
                    key={row.borough}
                    style={{ backgroundColor: i % 2 === 0 ? '#FFFFFF' : '#FAF7F2' }}
                  >
                    <td style={{ padding: '12px 16px', fontWeight: 600, color: '#1A2340' }}>
                      {row.borough}
                    </td>
                    <td style={{ padding: '12px 16px', color: '#4A5568' }}>{row.apps.toLocaleString()}</td>
                    <td style={{ padding: '12px 16px', color: '#2D7A4F', fontWeight: 600 }}>
                      {row.approval}
                    </td>
                    <td style={{ padding: '12px 16px', color: '#4A5568' }}>{row.avgWeeks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ color: '#6B7280', fontSize: '0.8rem', textAlign: 'center', marginTop: '16px' }}>
            Sample data shown for illustration. Pro subscribers access full dataset across all 32 boroughs.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{ backgroundColor: '#1A2340', padding: '80px 24px', textAlign: 'center' }}
      >
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2
            style={{
              color: '#FFFFFF',
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              fontWeight: 700,
              marginBottom: '16px',
            }}
          >
            Know Before the Market Does
          </h2>
          <p
            style={{
              color: '#c8d0de',
              fontSize: '1.05rem',
              marginBottom: '32px',
              lineHeight: 1.6,
            }}
          >
            Planning intelligence is included in all Dwellinger Pro plans. Start tracking
            applications and spotting opportunities today.
          </p>
          <Link
            href="/platform/pricing"
            style={{
              display: 'inline-block',
              backgroundColor: '#C4773B',
              color: '#FFFFFF',
              padding: '16px 40px',
              borderRadius: '6px',
              fontWeight: 700,
              fontSize: '1rem',
              textDecoration: 'none',
            }}
          >
            View Pro Plans
          </Link>
        </div>
      </section>
    </main>
  )
}
