import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Platform for UK Contractors | Rankitt by Dwellinger',
  description: '62 AI Agents. 200+ tools. Built for the modern contractor. The operating system for UK contractors.',
}

const features = [
  {
    title: 'Lead Generation',
    description: 'Qualified leads from homeowners actively searching for contractors in your area.',
  },
  {
    title: 'AI Estimating',
    description: 'Professional quotes in minutes, not hours. Powered by real London pricing data.',
  },
  {
    title: 'Builder Score',
    description: 'Your reputation, quantified and verified. Stand out to serious homeowners.',
  },
  {
    title: 'Planning Intelligence',
    description: 'Stay ahead of local planning applications and win work before it hits the market.',
  },
  {
    title: 'CRM & Pipeline',
    description: 'Manage every lead from first contact to final invoice in one place.',
  },
  {
    title: 'WhatsApp Integration',
    description: 'Automated follow-ups and project updates sent directly to clients via WhatsApp.',
  },
]

const stats = [
  { value: '62', label: 'AI Agents' },
  { value: '200+', label: 'Tools' },
  { value: '6', label: 'Plans' },
  { value: '1,000+', label: 'Contractors' },
]

export default function PlatformPage() {
  return (
    <div>
      <section style={{ backgroundColor: '#1A2340', color: '#FFFFFF', padding: '96px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'inline-block', backgroundColor: 'rgba(196,119,59,0.15)', color: '#C4773B', padding: '6px 16px', borderRadius: 100, fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 24 }}>
            Rankitt by Dwellinger
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, marginBottom: 24, lineHeight: 1.15 }}>
            The Operating System for UK Contractors
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#c8c0b0', maxWidth: 600, margin: '0 auto 40px' }}>
            62 AI Agents. 200+ tools. Built for the modern contractor.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              href="/register"
              style={{ backgroundColor: '#C4773B', color: '#fff', padding: '16px 36px', borderRadius: 6, fontWeight: 700, textDecoration: 'none', fontSize: '1rem' }}
            >
              Start Free 14-Day Trial
            </Link>
            <Link
              href="/platform/pricing"
              style={{ backgroundColor: 'transparent', color: '#fff', padding: '16px 36px', borderRadius: 6, fontWeight: 600, textDecoration: 'none', fontSize: '1rem', border: '1px solid rgba(255,255,255,0.3)' }}
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: '#0F1621', padding: '40px 24px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 24, textAlign: 'center' }}>
          {stats.map((s) => (
            <div key={s.label}>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#C4773B' }}>{s.value}</div>
              <div style={{ color: '#c8c0b0', fontSize: '0.9rem', marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ backgroundColor: '#F5F0E8', padding: '80px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ color: '#1A2340', fontSize: '1.75rem', fontWeight: 800, textAlign: 'center', marginBottom: 16 }}>
            Everything You Need to Run Your Business
          </h2>
          <p style={{ color: '#4A5568', textAlign: 'center', marginBottom: 56, maxWidth: 600, margin: '0 auto 56px' }}>
            From the first lead to the final invoice, Rankitt handles the business side so you can focus on building.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 28 }}>
            {features.map((f) => (
              <div
                key={f.title}
                style={{ backgroundColor: '#fff', border: '1px solid #EDE8DC', borderRadius: 10, padding: '32px 28px' }}
              >
                <h3 style={{ color: '#1A2340', fontSize: '1.1rem', fontWeight: 700, marginBottom: 12 }}>{f.title}</h3>
                <p style={{ color: '#4A5568', fontSize: '0.9rem', lineHeight: 1.7 }}>{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: '#FFFFFF', padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <h2 style={{ color: '#1A2340', fontSize: '1.75rem', fontWeight: 800, marginBottom: 16 }}>
            Plans from £99/mo
          </h2>
          <p style={{ color: '#4A5568', marginBottom: 32 }}>
            Choose the plan that fits your business. Upgrade or downgrade at any time. Cancel anytime.
          </p>
          <Link
            href="/platform/pricing"
            style={{ backgroundColor: '#1A2340', color: '#fff', padding: '14px 32px', borderRadius: 6, fontWeight: 700, textDecoration: 'none', display: 'inline-block' }}
          >
            See All Plans
          </Link>
        </div>
      </section>

      <section style={{ backgroundColor: '#C4773B', padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <h2 style={{ color: '#fff', fontSize: '2rem', fontWeight: 800, marginBottom: 20 }}>
            Start Your Free 14-Day Trial Today
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', marginBottom: 36, fontSize: '1.05rem' }}>
            No credit card required. Full access to all features. Cancel anytime.
          </p>
          <Link
            href="/register"
            style={{ backgroundColor: '#fff', color: '#C4773B', padding: '16px 40px', borderRadius: 6, fontWeight: 800, textDecoration: 'none', fontSize: '1.05rem', display: 'inline-block' }}
          >
            Get Started Free
          </Link>
        </div>
      </section>
    </div>
  )
}
