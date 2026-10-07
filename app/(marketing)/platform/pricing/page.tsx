'use client'

import { useState } from 'react'
import Link from 'next/link'

// Note: metadata cannot be exported from 'use client' components in Next.js App Router.
// For SEO, a parent layout or a separate metadata file can export it.
// The title is set via document.title or a parent server component.

const tiers = [
  {
    name: 'Foundation',
    monthly: 99,
    annual: 79,
    features: ['1 user', '10 leads/mo', 'Basic Builder Score', 'Email support'],
    cta: 'Get Started',
    href: '/register',
    popular: false,
  },
  {
    name: 'Starter',
    monthly: 149,
    annual: 119,
    features: ['1 user', '25 leads/mo', 'Builder Score', 'AI Estimator (5/mo)', 'Chat support'],
    cta: 'Get Started',
    href: '/register',
    popular: false,
  },
  {
    name: 'Pro',
    monthly: 249,
    annual: 199,
    features: ['3 users', '50 leads/mo', 'Full Builder Score', 'AI Estimator (unlimited)', 'Planning alerts', 'Priority support'],
    cta: 'Get Started',
    href: '/register',
    popular: true,
  },
  {
    name: 'Business',
    monthly: 349,
    annual: 279,
    features: ['5 users', '100 leads/mo', 'All Pro features', 'WhatsApp automation', 'CRM'],
    cta: 'Get Started',
    href: '/register',
    popular: false,
  },
  {
    name: 'Enterprise',
    monthly: 499,
    annual: 399,
    features: ['Unlimited users', 'Unlimited leads', 'All features', 'Account manager', 'Custom integrations'],
    cta: 'Get Started',
    href: '/register',
    popular: false,
  },
  {
    name: 'White-Label',
    monthly: null,
    annual: null,
    features: ['Full platform rebrand', 'API access', 'Custom domain', 'Dedicated support'],
    cta: 'Contact Sales',
    href: '/contact',
    popular: false,
  },
]

export default function PlatformPricingPage() {
  const [annual, setAnnual] = useState(false)

  return (
    <main style={{ backgroundColor: '#f0ede6', minHeight: '100vh' }}>
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

              <h3 style={{ color: '#1A2340', fontSize: '1.2rem', fontWeight: 800, marginBottom: 8 }}>{tier.name}</h3>

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
    </main>
  )
}
