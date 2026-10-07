import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI Construction Estimating for London Contractors | Dwellinger',
  description:
    'Professional construction estimates in minutes. AI-powered estimating tools built on real London pricing data — for extensions, loft conversions, refurbishments and more.',
}

const estimatingTools = [
  {
    title: 'Instant Cost Calculator',
    desc: 'Enter project type, size, location and specification level. Get a structured cost breakdown in under 60 seconds — not a ballpark, a proper elemental breakdown.',
    free: true,
  },
  {
    title: 'AI Scope Builder',
    desc: 'Describe your project in plain English. The AI generates a structured scope of works with quantities, trade packages and preliminary costs — ready to send to a client.',
    free: false,
  },
  {
    title: 'Quote Generator',
    desc: 'Turn your scope of works into a formatted, professional quote document with your company branding, terms, and a clear total — in one click.',
    free: false,
  },
  {
    title: 'Tender Analysis',
    desc: 'Upload two or more contractor quotes. The AI compares them line by line, identifies gaps and anomalies, and flags what is included or excluded in each.',
    free: false,
  },
  {
    title: 'Material Takeoff',
    desc: 'From a scope or drawing description, generate a materials list with quantities. Identify what needs to be ordered, and when, based on programme dates.',
    free: false,
  },
  {
    title: 'Labour Rate Database',
    desc: 'London-calibrated labour rates for every trade. Regularly updated from real project data — so your estimates reflect current market conditions, not last year\'s prices.',
    free: false,
  },
]

const projectTypes = [
  { label: 'Single-storey rear extension', range: '£40k – £85k' },
  { label: 'Double-storey rear extension', range: '£80k – £160k' },
  { label: 'Dormer loft conversion', range: '£55k – £95k' },
  { label: 'Hip-to-gable loft conversion', range: '£70k – £120k' },
  { label: 'Full house refurbishment', range: '£85k – £250k+' },
  { label: 'Kitchen extension', range: '£45k – £110k' },
  { label: 'Basement extension', range: '£120k – £350k+' },
  { label: 'HMO conversion', range: '£30k – £90k per unit' },
]

export default function EstimatingServicesPage() {
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
            Estimating Services
          </p>
          <h1
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.25rem)',
              fontWeight: 800,
              lineHeight: 1.12,
              marginBottom: '24px',
            }}
          >
            Professional Estimates in Minutes, Not Days
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
            AI-powered estimating built on real London pricing data. Generate scopes,
            quotes, tender analyses and material takeoffs faster than any other tool
            on the market.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              href="/estimate"
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
              Try Free Estimator
            </Link>
            <Link
              href="/register"
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
              Get Full Access
            </Link>
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
              marginBottom: '48px',
            }}
          >
            Estimating Tools
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
            }}
          >
            {estimatingTools.map((tool) => (
              <div
                key={tool.title}
                style={{
                  backgroundColor: '#F5F0E8',
                  borderRadius: '10px',
                  padding: '28px',
                  border: '1px solid #EDE8DC',
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    backgroundColor: tool.free ? '#C4773B' : '#1A2340',
                    color: '#FFFFFF',
                    fontWeight: 700,
                    fontSize: '0.68rem',
                    padding: '2px 8px',
                    borderRadius: '12px',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                  }}
                >
                  {tool.free ? 'Free' : 'Pro'}
                </div>
                <h3
                  style={{
                    color: '#1A2340',
                    fontWeight: 700,
                    fontSize: '1rem',
                    marginBottom: '10px',
                    paddingRight: '40px',
                  }}
                >
                  {tool.title}
                </h3>
                <p
                  style={{
                    color: '#4A5568',
                    fontSize: '0.93rem',
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  {tool.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* London pricing reference */}
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
            London Construction Price Guide — 2026
          </h2>
          <p style={{ color: '#4A5568', marginBottom: '32px', fontSize: '0.95rem', lineHeight: 1.65 }}>
            Indicative ranges based on real London projects completed in 2025–2026.
            Actual costs vary by specification, structural complexity, and site conditions.
            Use our estimator for a project-specific figure.
          </p>
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '10px',
              border: '1px solid #EDE8DC',
              overflow: 'hidden',
            }}
          >
            {projectTypes.map((pt, i) => (
              <div
                key={pt.label}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '16px 24px',
                  borderBottom: i < projectTypes.length - 1 ? '1px solid #EDE8DC' : 'none',
                  backgroundColor: i % 2 === 0 ? '#FFFFFF' : '#FDFAF6',
                }}
              >
                <span style={{ color: '#1A2340', fontWeight: 500, fontSize: '0.95rem' }}>
                  {pt.label}
                </span>
                <span
                  style={{
                    color: '#C4773B',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    flexShrink: 0,
                    marginLeft: '16px',
                  }}
                >
                  {pt.range}
                </span>
              </div>
            ))}
          </div>
          <p style={{ color: '#4A5568', fontSize: '0.8rem', marginTop: '16px', lineHeight: 1.5 }}>
            All figures exclude VAT. Prices based on Greater London market rates, Q3 2026.
            For a detailed estimate specific to your project, use the estimating tool above.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{ backgroundColor: '#1A2340', padding: '80px 24px', textAlign: 'center' }}
      >
        <div style={{ maxWidth: '620px', margin: '0 auto' }}>
          <h2
            style={{
              color: '#FFFFFF',
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              fontWeight: 700,
              marginBottom: '16px',
            }}
          >
            Start Estimating Smarter
          </h2>
          <p
            style={{
              color: '#c8d0de',
              fontSize: '1.05rem',
              marginBottom: '32px',
              lineHeight: 1.6,
            }}
          >
            The free estimator is available now — no account needed. For AI scope building,
            quote generation and tender analysis, create a free account and upgrade when you need it.
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
              Try Free Estimator
            </Link>
            <Link
              href="/register"
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
              Create Free Account
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
