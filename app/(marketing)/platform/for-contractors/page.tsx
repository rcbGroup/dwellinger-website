import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Platform for Contractors | Builder Score, Leads & Estimating | Dwellinger',
  description:
    'The Dwellinger platform gives UK contractors a verified Builder Score, qualified homeowner leads, AI estimating tools, CRM, and planning intelligence — all in one place.',
}

const features = [
  {
    title: 'Builder Score',
    desc: 'A quantified trust rating built from verified reviews, Companies House data, and real project history. Stand out to serious homeowners who actually check credentials.',
    badge: 'Reputation',
  },
  {
    title: 'Qualified Leads',
    desc: 'Homeowners who have already been through a cost calculator and know their budget. No tyre-kickers. No speculative enquiries. Leads that convert.',
    badge: 'Growth',
  },
  {
    title: 'AI Estimating',
    desc: 'Generate professional cost estimates in minutes using real London pricing data. Win more work by responding faster with better-structured quotes.',
    badge: 'Efficiency',
  },
  {
    title: 'CRM & Pipeline',
    desc: 'Track every lead from first contact to signed contract. Follow-up reminders, quote history, client notes and job status — all in one place.',
    badge: 'Organisation',
  },
  {
    title: 'Planning Intelligence',
    desc: 'See planning applications in your target areas before they hit the public register. Get in early, when homeowners are still choosing a contractor.',
    badge: 'Intelligence',
  },
  {
    title: 'WhatsApp Automation',
    desc: 'Automated follow-up messages to leads who have not responded. Keep your pipeline warm without spending hours on your phone.',
    badge: 'Automation',
  },
]

const plans = [
  {
    name: 'Starter',
    price: '£49',
    period: '/month',
    desc: 'For contractors just getting started with digital lead generation.',
    includes: ['Builder Score profile', 'Up to 10 leads/month', 'Basic estimating tools', 'CRM — 50 contacts'],
  },
  {
    name: 'Pro',
    price: '£149',
    period: '/month',
    desc: 'For established contractors who want a serious pipeline.',
    includes: ['Enhanced Builder Score', 'Unlimited leads', 'AI estimating (full)', 'CRM — unlimited', 'Planning intelligence', 'WhatsApp automation'],
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: '£299',
    period: '/month',
    desc: 'For larger companies managing teams and multiple projects.',
    includes: ['Everything in Pro', 'Team accounts (up to 10)', 'Priority lead matching', 'Dedicated account manager', 'Custom reporting', 'API access'],
  },
]

export default function ForContractorsPage() {
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
            Platform for Contractors
          </p>
          <h1
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.25rem)',
              fontWeight: 800,
              lineHeight: 1.12,
              marginBottom: '24px',
            }}
          >
            The Operating System for UK Contractors
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
            Builder Score. Qualified leads. AI estimating. CRM. Planning intelligence.
            Everything you need to win more work and run a tighter business — in one platform.
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
              Get Started Free
            </Link>
            <Link
              href="/platform/pricing"
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
              See Pricing
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
            Everything in One Place
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
                <span
                  style={{
                    display: 'inline-block',
                    backgroundColor: '#1A2340',
                    color: '#C4773B',
                    fontWeight: 700,
                    fontSize: '0.7rem',
                    padding: '3px 10px',
                    borderRadius: '20px',
                    marginBottom: '14px',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                  }}
                >
                  {f.badge}
                </span>
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

      {/* Pricing */}
      <section style={{ backgroundColor: '#F5F0E8', padding: '80px 24px' }}>
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
            Simple, Transparent Pricing
          </h2>
          <p
            style={{
              color: '#4A5568',
              textAlign: 'center',
              marginBottom: '48px',
              fontSize: '1rem',
            }}
          >
            No hidden fees. Cancel any time. Start free and upgrade when you are ready.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '24px',
              alignItems: 'stretch',
            }}
          >
            {plans.map((plan) => (
              <div
                key={plan.name}
                style={{
                  backgroundColor: plan.highlight ? '#1A2340' : '#FFFFFF',
                  borderRadius: '12px',
                  padding: '32px',
                  border: plan.highlight ? '2px solid #C4773B' : '1px solid #EDE8DC',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                }}
              >
                {plan.highlight && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '-14px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      backgroundColor: '#C4773B',
                      color: '#FFFFFF',
                      fontWeight: 700,
                      fontSize: '0.72rem',
                      padding: '4px 14px',
                      borderRadius: '20px',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                    }}
                  >
                    Most Popular
                  </div>
                )}
                <h3
                  style={{
                    color: plan.highlight ? '#FFFFFF' : '#1A2340',
                    fontWeight: 700,
                    fontSize: '1.1rem',
                    marginBottom: '8px',
                  }}
                >
                  {plan.name}
                </h3>
                <div style={{ marginBottom: '12px' }}>
                  <span
                    style={{
                      color: '#C4773B',
                      fontWeight: 800,
                      fontSize: '2rem',
                    }}
                  >
                    {plan.price}
                  </span>
                  <span
                    style={{
                      color: plan.highlight ? '#c8d0de' : '#4A5568',
                      fontSize: '0.9rem',
                      marginLeft: '4px',
                    }}
                  >
                    {plan.period}
                  </span>
                </div>
                <p
                  style={{
                    color: plan.highlight ? '#c8d0de' : '#4A5568',
                    fontSize: '0.88rem',
                    lineHeight: 1.55,
                    marginBottom: '20px',
                  }}
                >
                  {plan.desc}
                </p>
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: '0 0 24px 0',
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                  }}
                >
                  {plan.includes.map((item) => (
                    <li
                      key={item}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        color: plan.highlight ? '#c8d0de' : '#4A5568',
                        fontSize: '0.88rem',
                      }}
                    >
                      <span style={{ color: '#C4773B', fontWeight: 700, flexShrink: 0 }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/register"
                  style={{
                    display: 'block',
                    backgroundColor: plan.highlight ? '#C4773B' : '#1A2340',
                    color: '#FFFFFF',
                    padding: '12px 20px',
                    borderRadius: '6px',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    textDecoration: 'none',
                    textAlign: 'center',
                  }}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
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
            Ready to Grow Your Business?
          </h2>
          <p
            style={{
              color: '#c8d0de',
              fontSize: '1.05rem',
              marginBottom: '32px',
              lineHeight: 1.6,
            }}
          >
            Join contractors across London who are using the Dwellinger platform to win better
            work, respond faster, and build a stronger reputation.
          </p>
          <Link
            href="/register"
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
            Get Started Free
          </Link>
        </div>
      </section>
    </main>
  )
}
