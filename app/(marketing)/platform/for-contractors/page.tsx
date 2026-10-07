import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Platform for Contractors | Builder Score, Leads & Estimating | Dwellinger',
  description: 'Join the Dwellinger contractor network. Build your Builder Score, access estimating tools, receive qualified project leads, and grow your construction business.',
}

const features = [
  { badge: 'Reputation', title: 'Builder Score Profile', desc: 'Your verified Builder Score profile aggregates company history, project track record, and client reviews into a single credibility signal that homeowners and developers trust.' },
  { badge: 'Growth', title: 'Qualified Project Leads', desc: 'Receive leads matched to your trade, location, and project type. Dwellinger qualifies clients before they reach you so you spend less time on dead enquiries.' },
  { badge: 'Efficiency', title: 'AI Estimating Tools', desc: 'Generate professional cost estimates and scope of works documents in minutes. Reduce the time you spend pricing and increase your conversion rate on the quotes you submit.' },
  { badge: 'Intelligence', title: 'Market Pricing Data', desc: 'Access London construction price benchmarks updated from real project data. Know whether your rates are competitive before you quote.' },
  { badge: 'Admin', title: 'Quote & Proposal Builder', desc: 'Create branded, professional proposals from your estimates in one click. Send directly to clients from the platform with a professional cover message.' },
  { badge: 'Network', title: 'Subcontractor Directory', desc: 'Find vetted specialist subcontractors when you need them. Structural engineers, groundworks, M&E, specialist finishes — all accessible through the platform.' },
]

const tiers = [
  { name: 'Starter', price: '49', period: '/month', desc: 'For sole traders and small contractors getting started with digital credibility.', features: ['Builder Score profile listing', 'Basic estimating calculator', '3 quote documents per month', 'Lead notifications (email)'], cta: 'Get Started', href: '/register', highlight: false },
  { name: 'Pro', price: '149', period: '/month', desc: 'For established contractors ready to scale their pipeline and win better work.', features: ['Everything in Starter', 'Unlimited AI scope builder', 'Unlimited quote documents', 'Priority lead matching', 'Market pricing database access', 'Proposal builder with branding'], cta: 'Start Free Trial', href: '/register?plan=pro', highlight: true },
  { name: 'Enterprise', price: '299', period: '/month', desc: 'For larger contractors managing multiple teams, projects, and subcontractors.', features: ['Everything in Pro', 'Multi-user team access', 'Subcontractor network access', 'Tender analysis tool', 'Dedicated account support', 'Custom reporting'], cta: 'Contact Us', href: '/book-a-call', highlight: false },
]

export default function ForContractorsPage() {
  return (
    <main>
      <section style={{ backgroundColor: '#1A2340', color: '#FFFFFF', padding: '96px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <p style={{ color: '#C4773B', fontWeight: 600, fontSize: '13px', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '20px' }}>For Contractors</p>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)', fontWeight: 800, lineHeight: 1.12, marginBottom: '24px' }}>Win Better Work. Quote Faster. Build Your Reputation.</h1>
          <p style={{ fontSize: '1.15rem', color: '#c8d0de', maxWidth: '680px', margin: '0 auto 36px', lineHeight: 1.7 }}>Dwellinger gives London contractors the tools to stand out from the competition, price projects accurately, and access a pipeline of qualified work.</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/register" style={{ backgroundColor: '#C4773B', color: '#FFFFFF', padding: '14px 36px', borderRadius: '6px', fontWeight: 700, textDecoration: 'none', fontSize: '1rem' }}>Join the Platform</Link>
            <Link href="/book-a-call" style={{ backgroundColor: 'transparent', color: '#FFFFFF', padding: '14px 36px', borderRadius: '6px', fontWeight: 600, textDecoration: 'none', fontSize: '1rem', border: '1px solid rgba(255,255,255,0.3)' }}>Book a Demo</Link>
          </div>
        </div>
      </section>
      <section style={{ backgroundColor: '#FFFFFF', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto' }}>
          <h2 style={{ color: '#1A2340', fontSize: 'clamp(1.6rem, 3vw, 2.25rem)', fontWeight: 700, textAlign: 'center', marginBottom: '48px' }}>Everything You Need to Grow</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {features.map((feat) => (
              <div key={feat.title} style={{ backgroundColor: '#F5F0E8', borderRadius: '10px', padding: '28px', border: '1px solid #EDE8DC' }}>
                <span style={{ display: 'inline-block', backgroundColor: '#1A2340', color: '#FFFFFF', fontSize: '0.68rem', fontWeight: 700, padding: '2px 8px', borderRadius: '12px', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '14px' }}>{feat.badge}</span>
                <h3 style={{ color: '#1A2340', fontWeight: 700, fontSize: '1rem', marginBottom: '10px' }}>{feat.title}</h3>
                <p style={{ color: '#4A5568', fontSize: '0.93rem', lineHeight: 1.65, margin: 0 }}>{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section style={{ backgroundColor: '#F5F0E8', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto' }}>
          <h2 style={{ color: '#1A2340', fontSize: 'clamp(1.6rem, 3vw, 2.25rem)', fontWeight: 700, textAlign: 'center', marginBottom: '12px' }}>Simple, Transparent Pricing</h2>
          <p style={{ color: '#4A5568', textAlign: 'center', marginBottom: '48px', fontSize: '1rem' }}>All plans include a 14-day free trial. No card required to start.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', alignItems: 'start' }}>
            {tiers.map((tier) => (
              <div key={tier.name} style={{ backgroundColor: tier.highlight ? '#1A2340' : '#FFFFFF', borderRadius: '12px', padding: '32px', border: tier.highlight ? '2px solid #C4773B' : '1px solid #EDE8DC', position: 'relative' }}>
                {tier.highlight && <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', backgroundColor: '#C4773B', color: '#FFFFFF', fontWeight: 700, fontSize: '0.72rem', padding: '4px 16px', borderRadius: '20px', whiteSpace: 'nowrap', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Most Popular</div>}
                <h3 style={{ color: tier.highlight ? '#FFFFFF' : '#1A2340', fontWeight: 700, fontSize: '1.1rem', marginBottom: '8px' }}>{tier.name}</h3>
                <div style={{ marginBottom: '12px' }}>
                  <span style={{ color: tier.highlight ? '#C4773B' : '#1A2340', fontWeight: 800, fontSize: '2rem' }}>&#163;{tier.price}</span>
                  <span style={{ color: tier.highlight ? '#c8d0de' : '#6B7280', fontSize: '0.9rem' }}>{tier.period}</span>
                </div>
                <p style={{ color: tier.highlight ? '#c8d0de' : '#4A5568', fontSize: '0.9rem', lineHeight: 1.55, marginBottom: '24px' }}>{tier.desc}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {tier.features.map((f) => (
                    <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: tier.highlight ? '#e8e0d0' : '#374151', fontSize: '0.9rem', lineHeight: 1.4 }}>
                      <span style={{ color: '#C4773B', fontWeight: 800, flexShrink: 0 }}>&#10003;</span>{f}
                    </li>
                  ))}
                </ul>
                <Link href={tier.href} style={{ display: 'block', textAlign: 'center', backgroundColor: tier.highlight ? '#C4773B' : '#1A2340', color: '#FFFFFF', padding: '12px 24px', borderRadius: '6px', fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem' }}>{tier.cta}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section style={{ backgroundColor: '#1A2340', padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '620px', margin: '0 auto' }}>
          <h2 style={{ color: '#FFFFFF', fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, marginBottom: '16px' }}>Ready to Grow Your Pipeline?</h2>
          <p style={{ color: '#c8d0de', fontSize: '1.05rem', marginBottom: '32px', lineHeight: 1.6 }}>Join the contractors already using Dwellinger to win better work, price faster, and build a reputation that converts.</p>
          <Link href="/register" style={{ display: 'inline-block', backgroundColor: '#C4773B', color: '#FFFFFF', padding: '16px 40px', borderRadius: '6px', fontWeight: 700, fontSize: '1rem', textDecoration: 'none' }}>Start Free — No Card Required</Link>
        </div>
      </section>
    </main>
  )
}
