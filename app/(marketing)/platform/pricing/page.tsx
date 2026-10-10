'use client'

import { useState } from 'react'
import Link from 'next/link'

// Note: metadata cannot be exported from 'use client' components in Next.js App Router.
// For SEO, a parent layout or a separate metadata file can export it.
// The title is set via document.title or a parent server component.

const faqs = [
  { q: 'Is there a free tier?', a: 'Yes. Homeowners and investors can use Dwellinger for free — cost estimates, contractor search, and project creation are free. Contractor profiles and advanced features are on paid plans.' },
  { q: 'Can I cancel at any time?', a: 'Yes. All plans are monthly or annual. Cancel any time — no lock-in, no cancellation fees.' },
  { q: 'What payment methods do you accept?', a: 'We accept all major credit and debit cards via Stripe. Annual plans can be paid by bank transfer.' },
  { q: 'Do contractors have to pay to appear in search?', a: 'Contractors need a profile to appear in search. Basic profiles are free. Paid plans unlock verification badges, priority placement, and platform tools.' },
  { q: 'How does Builder Score™ work?', a: 'Builder Score™ is calculated from six components: verified reviews (35%), CDM compliance (20%), payment history (15%), insurance status (15%), dispute resolution (10%), and response rate (5%). It cannot be purchased — it grows from verified evidence.' },
]

const comparisonRows = [
  { feature: 'Builder Score™ profile listing', member: true, professional: true, premium: true, franchise: true },
  { feature: 'Leads per month', member: '10', professional: '30', premium: 'Unlimited', franchise: 'Unlimited' },
  { feature: 'Builder Score™ dimensions', member: 'Basic', professional: 'All 6', premium: 'All 6', franchise: 'All 6 + white-label' },
  { feature: 'AI Estimator', member: '3/mo', professional: 'Unlimited', premium: 'Unlimited', franchise: 'Unlimited' },
  { feature: 'Planning alerts', member: false, professional: true, premium: true, franchise: true },
  { feature: 'WhatsApp automation', member: false, professional: false, premium: true, franchise: true },
  { feature: 'Full CRM pipeline', member: false, professional: false, premium: true, franchise: true },
  { feature: 'Dwell Agents (AI)', member: false, professional: false, premium: 'All 4', franchise: 'All 4' },
  { feature: 'Team users', member: '1', professional: '1', premium: '3', franchise: 'Unlimited' },
  { feature: 'API access', member: false, professional: false, premium: false, franchise: true },
  { feature: 'Custom domain', member: false, professional: false, premium: false, franchise: true },
  { feature: 'Account manager', member: false, professional: false, premium: false, franchise: true },
  { feature: 'Support', member: 'Email', professional: 'Chat + priority', premium: 'Onboarding call', franchise: 'Dedicated AM' },
]

const tiers = [
  {
    name: 'Member',
    monthly: 49,
    annual: 39,
    desc: 'Get listed. Build your score.',
    features: [
      'Builder Score™ profile listing',
      'Up to 10 leads/month',
      'Basic Builder Score badge',
      'AI Estimator (3 estimates/mo)',
      'Email support',
    ],
    cta: 'Start Free Trial',
    href: '/register',
    popular: false,
  },
  {
    name: 'Professional',
    monthly: 99,
    annual: 79,
    desc: 'For growing contractors.',
    features: [
      'Everything in Member',
      'Up to 30 leads/month',
      'Full Builder Score™ (all 5 dimensions)',
      'AI Estimator (unlimited)',
      'Planning alerts — your catchment area',
      'Chat + priority support',
    ],
    cta: 'Start Free Trial',
    href: '/register',
    popular: true,
  },
  {
    name: 'Premium',
    monthly: 199,
    annual: 159,
    desc: 'Full platform for serious businesses.',
    features: [
      'Everything in Professional',
      'Unlimited leads',
      '3 team users',
      'WhatsApp automation',
      'Full CRM pipeline',
      'Dwell Agents (all 4)',
      'Dedicated onboarding call',
    ],
    cta: 'Start Free Trial',
    href: '/register',
    popular: false,
  },
  {
    name: 'Franchise',
    monthly: 499,
    annual: 399,
    desc: 'For networks, franchises & agencies.',
    features: [
      'Everything in Premium',
      'Unlimited team users',
      'White-label Builder Score™ reports',
      'API access',
      'Custom domain',
      'Account manager',
      'Custom integrations',
    ],
    cta: 'Contact Sales',
    href: '/contact',
    popular: false,
  },
]

export default function PlatformPricingPage() {
  const [annual, setAnnual] = useState(false)

  return (
    <div style={{ backgroundColor: '#f0ede6', minHeight: '100vh' }}>
      <section style={{ backgroundColor: '#1A2340', padding: '80px 24px', textAlign: 'center' }}>
        <h1 style={{ color: '#fff', fontSize: 'clamp(1.75rem, 4vw, 3rem)', fontWeight: 800, marginBottom: 16 }}>
          Platform Pricing
        </h1>
        <p style={{ color: '#c8c0b0', fontSize: '1.1rem', marginBottom: 40 }}>
          Choose the plan that fits your business. No hidden fees.
        </p>
        <div style={{ display: 'inline-flex', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: 8, padding: 4, gap: 4 }}>
          <button
            onClick={() => setAnnual(false)}
            style={{
              padding: '8px 24px',
              borderRadius: 6,
              border: 'none',
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '0.9rem',
              backgroundColor: !annual ? '#fff' : 'transparent',
              color: !annual ? '#1A2340' : '#c8c0b0',
              transition: 'all 0.2s',
            }}
          >
            Monthly
          </button>
          <button
            onClick={() => setAnnual(true)}
            style={{
              padding: '8px 24px',
              borderRadius: 6,
              border: 'none',
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '0.9rem',
              backgroundColor: annual ? '#fff' : 'transparent',
              color: annual ? '#1A2340' : '#c8c0b0',
              transition: 'all 0.2s',
            }}
          >
            Annual
            <span style={{ marginLeft: 8, backgroundColor: '#C4773B', color: '#fff', padding: '2px 8px', borderRadius: 4, fontSize: '0.75rem', fontWeight: 700 }}>
              Save 20%
            </span>
          </button>
        </div>
      </section>

      <section style={{ padding: '60px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24, alignItems: 'start' }}>
          {tiers.map((tier) => (
            <div
              key={tier.name}
              style={{
                backgroundColor: '#fff',
                borderRadius: 10,
                padding: '36px 28px',
                border: tier.popular ? '2px solid #C4773B' : '1px solid #EDE8DC',
                position: 'relative',
              }}
            >
              {tier.popular && (
                <div style={{
                  position: 'absolute',
                  top: -14,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  backgroundColor: '#C4773B',
                  color: '#fff',
                  padding: '4px 20px',
                  borderRadius: 100,
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                }}>
                  Most Popular
                </div>
              )}

              <h3 style={{ color: '#1A2340', fontSize: '1.2rem', fontWeight: 800, marginBottom: 4 }}>{tier.name}</h3>
              <p style={{ color: '#4A5568', fontSize: '0.85rem', marginBottom: 8 }}>{tier.desc}</p>

              <div style={{ marginBottom: 24 }}>
                {tier.monthly !== null ? (
                  <>
                    <span style={{ fontSize: '2.5rem', fontWeight: 800, color: '#1A2340' }}>
                      £{annual ? tier.annual : tier.monthly}
                    </span>
                    <span style={{ color: '#4A5568', fontSize: '0.9rem' }}>/mo</span>
                    {annual && (
                      <div style={{ color: '#C4773B', fontSize: '0.8rem', fontWeight: 600, marginTop: 4 }}>
                        Billed annually (save £{((tier.monthly! - tier.annual!) * 12)}+/yr)
                      </div>
                    )}
                  </>
                ) : (
                  <span style={{ fontSize: '2rem', fontWeight: 800, color: '#1A2340' }}>POA</span>
                )}
              </div>

              <ul style={{ marginBottom: 32, listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {tier.features.map((f) => (
                  <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, color: '#4A5568', fontSize: '0.9rem' }}>
                    <span style={{ color: '#C4773B', fontWeight: 700, flexShrink: 0 }}>+</span>
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href={tier.href}
                style={{
                  display: 'block',
                  textAlign: 'center',
                  padding: '12px 24px',
                  borderRadius: 6,
                  fontWeight: 700,
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  backgroundColor: tier.popular ? '#C4773B' : '#1A2340',
                  color: '#fff',
                }}
              >
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Feature comparison table */}
      <section style={{ padding: '60px 24px', backgroundColor: '#fff' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ color: '#1A2340', fontSize: '1.5rem', fontWeight: 800, marginBottom: 8, textAlign: 'center' }}>
            Compare plans
          </h2>
          <p style={{ color: '#4A5568', textAlign: 'center', marginBottom: 40, fontSize: '0.95rem' }}>
            Every feature, side by side.
          </p>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #EDE8DC' }}>
                  <th style={{ textAlign: 'left', padding: '12px 16px', color: '#1A2340', fontWeight: 700, width: '30%' }}>Feature</th>
                  {['Member', 'Professional', 'Premium', 'Franchise'].map((name, i) => (
                    <th key={name} style={{ textAlign: 'center', padding: '12px 12px', color: i === 1 ? '#C4773B' : '#1A2340', fontWeight: 700 }}>
                      {name}{i === 1 ? ' ★' : ''}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={row.feature} style={{ borderBottom: '1px solid #EDE8DC', backgroundColor: i % 2 === 0 ? '#faf9f7' : '#fff' }}>
                    <td style={{ padding: '11px 16px', color: '#4A5568' }}>{row.feature}</td>
                    {([row.member, row.professional, row.premium, row.franchise] as (boolean | string)[]).map((val, j) => (
                      <td key={j} style={{ textAlign: 'center', padding: '11px 12px', color: val === false ? '#CBD5E0' : '#1A2340', fontWeight: typeof val === 'string' ? 500 : 400 }}>
                        {val === true ? '✓' : val === false ? '—' : val}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Trust row */}
      <section style={{ backgroundColor: '#f0ede6', padding: '40px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 24, justifyContent: 'center' }}>
          {[
            { icon: '🔒', text: 'No long-term contracts' },
            { icon: '↩️', text: 'Cancel anytime' },
            { icon: '💳', text: 'Secure payments via Stripe' },
            { icon: '🄓', text: '14-day free trial, no card required' },
          ].map(item => (
            <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#1A2340', fontWeight: 600, fontSize: '0.9rem' }}>
              <span>{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '60px 24px', backgroundColor: '#fff' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <h2 style={{ color: '#1A2340', fontSize: '1.5rem', fontWeight: 800, marginBottom: 8, textAlign: 'center' }}>
            Frequently asked questions
          </h2>
          <p style={{ color: '#4A5568', textAlign: 'center', marginBottom: 40, fontSize: '0.95rem' }}>
            Anything else? <Link href="/contact" style={{ color: '#C4773B', fontWeight: 600, textDecoration: 'none' }}>Get in touch →</Link>
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {faqs.map((faq, i) => (
              <div key={faq.q} style={{ borderTop: '1px solid #EDE8DC', padding: '20px 0', ...(i === faqs.length - 1 ? { borderBottom: '1px solid #EDE8DC' } : {}) }}>
                <h3 style={{ color: '#1A2340', fontWeight: 700, fontSize: '0.95rem', marginBottom: 8 }}>{faq.q}</h3>
                <p style={{ color: '#4A5568', fontSize: '0.9rem', lineHeight: 1.65, margin: 0 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: '#fff', padding: '60px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <h2 style={{ color: '#1A2340', fontSize: '1.5rem', fontWeight: 800, marginBottom: 12 }}>
            All plans include a 14-day free trial
          </h2>
          <p style={{ color: '#4A5568', marginBottom: 24 }}>
            No credit card required. Cancel anytime. Full feature access during the trial.
          </p>
          <Link
            href="/register"
            style={{ backgroundColor: '#C4773B', color: '#fff', padding: '14px 32px', borderRadius: 6, fontWeight: 700, textDecoration: 'none', display: 'inline-block' }}
          >
            Start Free Trial
          </Link>
        </div>
      </section>
    </div>
  )
}
