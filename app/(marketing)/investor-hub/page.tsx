import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Property Investor Hub London | Construction & Development Intelligence | Dwellinger',
  description:
    'Tools, data, and expert delivery for property investors in London. BTL, HMO, development finance, refurbishment estimating, planning intelligence, and contractor sourcing.',
}

const tools = [
  { title: 'Refurbishment Estimator', desc: 'Instant cost estimates for BTL refurbs, HMO conversions, and development projects. Calibrated to London pricing.', href: '/estimate', label: 'Free Tool' },
  { title: 'Planning Intelligence', desc: 'Track local authority planning decisions, identify patterns, and find development opportunities before they reach the open market.', href: '/tools/planning', label: 'Pro' },
  { title: 'Builder Score', desc: 'Verify contractors before you appoint. Our Builder Score aggregates company history, project track record, and peer reviews.', href: '/builder-score', label: 'Free' },
  { title: 'HMO Conversion Calculator', desc: 'Model the cost of converting a property to an HMO — room count, fire compliance, M&E upgrade, and licence requirements.', href: '/tools/hmo-calculator', label: 'Free Tool' },
  { title: 'ROI & Yield Analysis', desc: 'Input purchase price, refurbishment budget, and target rent to model gross yield, net yield, and projected equity uplift.', href: '/tools/roi-calculator', label: 'Pro' },
  { title: 'Development Appraisal', desc: 'Build a simple development appraisal with GDV, build cost, finance, and profit margin in minutes, not days.', href: '/tools/development-appraisal', label: 'Pro' },
]

const investorTypes = [
  { label: 'Buy-to-Let Investors', desc: 'Whether you have one property or twenty, we help you estimate refurbishment costs accurately and source verified contractors.' },
  { label: 'HMO Operators', desc: 'HMO conversion and compliance works are a specialist area. We understand licensing, room layouts, and the cost drivers specific to HMO projects.' },
  { label: 'Property Developers', desc: 'From land appraisal to planning to build, we support residential and mixed-use developers with cost planning, contractor sourcing, and project delivery.' },
  { label: 'Portfolio Managers', desc: 'Ongoing maintenance, planned refurbishment, and property upgrades across a portfolio, managed with the same discipline as a single project.' },
]

const stats = [
  { value: '200M+', label: 'Pipeline value tracked' },
  { value: '3,200+', label: 'Contractor profiles' },
  { value: '50+ LPAs', label: 'Planning data sources' },
  { value: '1,000+', label: 'London projects estimated' },
]

export default function InvestorHubPage() {
  return (
    <main>
      <section style={{ backgroundColor: '#1A2340', color: '#FFFFFF', padding: '96px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <p style={{ color: '#C4773B', fontWeight: 600, fontSize: '13px', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '20px' }}>
            Investor Hub
          </p>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)', fontWeight: 800, lineHeight: 1.12, marginBottom: '24px' }}>
            Intelligence for the Serious Property Investor
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#c8d0de', maxWidth: '680px', margin: '0 auto 36px', lineHeight: 1.7 }}>
            From refurbishment cost planning to planning intelligence, contractor vetting, and full project delivery.
            Everything a London property investor needs in one platform.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/register" style={{ backgroundColor: '#C4773B', color: '#FFFFFF', padding: '14px 36px', borderRadius: '6px', fontWeight: 700, textDecoration: 'none', fontSize: '1rem' }}>
              Get Started Free
            </Link>
            <Link href="/book-a-call" style={{ backgroundColor: 'transparent', color: '#FFFFFF', padding: '14px 36px', borderRadius: '6px', fontWeight: 600, textDecoration: 'none', fontSize: '1rem', border: '1px solid rgba(255,255,255,0.3)' }}>
              Speak to the Team
            </Link>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: '#C4773B', padding: '40px 24px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '32px', textAlign: 'center' }}>
          {stats.map((s) => (
            <div key={s.label}>
              <div style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: '#FFFFFF', marginBottom: '6px' }}>{s.value}</div>
              <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.85)', fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ backgroundColor: '#FFFFFF', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto' }}>
          <h2 style={{ color: '#1A2340', fontSize: 'clamp(1.6rem, 3vw, 2.25rem)', fontWeight: 700, textAlign: 'center', marginBottom: '48px' }}>
            Investor Tools
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {tools.map((tool) => (
              <Link key={tool.title} href={tool.href} style={{ textDecoration: 'none' }}>
                <div style={{ backgroundColor: '#F5F0E8', borderRadius: '10px', padding: '28px', border: '1px solid #EDE8DC', position: 'relative', boxSizing: 'border-box' }}>
                  <span style={{ position: 'absolute', top: '20px', right: '20px', backgroundColor: tool.label === 'Free' || tool.label === 'Free Tool' ? '#C4773B' : '#1A2340', color: '#FFFFFF', fontWeight: 700, fontSize: '0.68rem', padding: '2px 8px', borderRadius: '12px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    {tool.label}
                  </span>
                  <h3 style={{ color: '#1A2340', fontWeight: 700, fontSize: '1rem', marginBottom: '10px', paddingRight: '40px' }}>{tool.title}</h3>
                  <p style={{ color: '#4A5568', fontSize: '0.93rem', lineHeight: 1.65, margin: 0 }}>{tool.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: '#F5F0E8', padding: '80px 24px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ color: '#1A2340', fontSize: 'clamp(1.6rem, 3vw, 2.25rem)', fontWeight: 700, marginBottom: '40px' }}>
            Who Uses the Investor Hub
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {investorTypes.map((type) => (
              <div key={type.label} style={{ backgroundColor: '#FFFFFF', borderRadius: '10px', padding: '28px', borderLeft: '4px solid #C4773B' }}>
                <h3 style={{ color: '#1A2340', fontWeight: 700, fontSize: '1rem', marginBottom: '10px' }}>{type.label}</h3>
                <p style={{ color: '#4A5568', fontSize: '0.93rem', lineHeight: 1.65, margin: 0 }}>{type.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: '#1A2340', padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '620px', margin: '0 auto' }}>
          <h2 style={{ color: '#FFFFFF', fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, marginBottom: '16px' }}>
            Start With the Free Estimator
          </h2>
          <p style={{ color: '#c8d0de', fontSize: '1.05rem', marginBottom: '32px', lineHeight: 1.6 }}>
            No account needed. Get a structured cost estimate for your refurbishment or conversion project in under two minutes.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/estimate" style={{ display: 'inline-block', backgroundColor: '#C4773B', color: '#FFFFFF', padding: '16px 36px', borderRadius: '6px', fontWeight: 700, fontSize: '1rem', textDecoration: 'none' }}>
              Free Estimator
            </Link>
            <Link href="/register" style={{ display: 'inline-block', backgroundColor: 'transparent', color: '#FFFFFF', padding: '16px 36px', borderRadius: '6px', fontWeight: 600, fontSize: '1rem', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.4)' }}>
              Create Free Account
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
