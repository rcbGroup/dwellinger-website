import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Book a Call | Speak to Our Team | Dwellinger',
  description:
    'Book a free 20-minute call with the Dwellinger team. Discuss your project, get honest advice on budget and feasibility, and find out how we can help.',
}

const callTypes = [
  {
    title: 'Project Feasibility Call',
    desc: 'You have an idea — an extension, loft conversion, or refurbishment — and want to understand whether it is realistic, what it might cost, and what the process looks like. 20 minutes. No obligation.',
    icon: '🔍',
    duration: '20 min',
  },
  {
    title: 'Investment Project Review',
    desc: 'You are acquiring or already own a property and want to understand the build cost, programme implications, and how to protect your margin. Suitable for BTL, HMO, and development projects.',
    icon: '📊',
    duration: '30 min',
  },
  {
    title: 'Estimate or Scope Review',
    desc: 'You have received a contractor quote and want an independent view on whether it is reasonable, what might be missing, and how to protect yourself contractually before you sign.',
    icon: '📋',
    duration: '20 min',
  },
  {
    title: 'Platform Demo',
    desc: 'You are a contractor or developer and want to see what the Dwellinger platform offers — Builder Score, lead generation, estimating tools and CRM. We will walk you through it in 20 minutes.',
    icon: '💻',
    duration: '20 min',
  },
]

const whyCall = [
  'Get honest, direct advice — no sales pressure',
  'Understand your project budget before committing to design fees',
  'Speak to someone with real construction knowledge',
  'Find out exactly what the next step should be for your project',
  'No obligation — if we are not the right fit, we will say so',
]

export default function BookACallPage() {
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
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
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
            Free Consultation
          </p>
          <h1
            style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 800,
              lineHeight: 1.12,
              marginBottom: '24px',
            }}
          >
            Book a Call with Our Team
          </h1>
          <p
            style={{
              fontSize: '1.15rem',
              color: '#c8d0de',
              maxWidth: '620px',
              margin: '0 auto 36px',
              lineHeight: 1.7,
            }}
          >
            20–30 minutes. Free. No pitch, no pressure — just direct advice from people
            who know construction. Tell us what you are trying to achieve.
          </p>
          <a
            href="mailto:info@dwellinger.co.uk?subject=Book a Call — Dwellinger"
            style={{
              display: 'inline-block',
              backgroundColor: '#C4773B',
              color: '#FFFFFF',
              padding: '16px 44px',
              borderRadius: '6px',
              fontWeight: 700,
              fontSize: '1rem',
              textDecoration: 'none',
            }}
          >
            Email Us to Book
          </a>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.85rem', marginTop: '16px' }}>
            Or call us directly: +44 7359 872594
          </p>
        </div>
      </section>

      {/* Call types */}
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
            What Would You Like to Talk About?
          </h2>
          <p
            style={{
              color: '#4A5568',
              textAlign: 'center',
              marginBottom: '48px',
              fontSize: '1rem',
            }}
          >
            Tell us the type of call you need and we will make sure the right person is on the line.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '20px',
            }}
          >
            {callTypes.map((ct) => (
              <div
                key={ct.title}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '10px',
                  padding: '28px',
                  border: '1px solid #EDE8DC',
                }}
              >
                <div style={{ fontSize: '1.8rem', marginBottom: '12px' }}>{ct.icon}</div>
                <div
                  style={{
                    display: 'inline-block',
                    backgroundColor: '#F5F0E8',
                    color: '#C4773B',
                    fontWeight: 700,
                    fontSize: '0.75rem',
                    padding: '3px 10px',
                    borderRadius: '20px',
                    marginBottom: '12px',
                    letterSpacing: '0.05em',
                  }}
                >
                  {ct.duration}
                </div>
                <h3
                  style={{
                    color: '#1A2340',
                    fontWeight: 700,
                    fontSize: '1rem',
                    marginBottom: '10px',
                    display: 'block',
                  }}
                >
                  {ct.title}
                </h3>
                <p
                  style={{
                    color: '#4A5568',
                    fontSize: '0.92rem',
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  {ct.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why call us */}
      <section style={{ backgroundColor: '#FFFFFF', padding: '80px 24px' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <h2
            style={{
              color: '#1A2340',
              fontSize: 'clamp(1.6rem, 3vw, 2.25rem)',
              fontWeight: 700,
              marginBottom: '36px',
            }}
          >
            Why Speak to Us First?
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {whyCall.map((point) => (
              <div
                key={point}
                style={{
                  display: 'flex',
                  gap: '16px',
                  alignItems: 'flex-start',
                  padding: '16px 20px',
                  backgroundColor: '#F5F0E8',
                  borderRadius: '8px',
                }}
              >
                <div
                  style={{
                    flexShrink: 0,
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    backgroundColor: '#C4773B',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: '1px',
                  }}
                >
                  <span style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '0.8rem' }}>✓</span>
                </div>
                <p style={{ color: '#1A2340', fontWeight: 500, fontSize: '0.97rem', margin: 0, lineHeight: 1.5 }}>
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact options */}
      <section style={{ backgroundColor: '#F5F0E8', padding: '80px 24px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2
            style={{
              color: '#1A2340',
              fontSize: 'clamp(1.4rem, 3vw, 2rem)',
              fontWeight: 700,
              textAlign: 'center',
              marginBottom: '40px',
            }}
          >
            How to Reach Us
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '20px',
            }}
          >
            {[
              {
                method: 'Email',
                detail: 'info@dwellinger.co.uk',
                desc: 'Tell us about your project and preferred call times. We respond within 2 hours during business hours.',
                href: 'mailto:info@dwellinger.co.uk?subject=Book a Call',
                cta: 'Send Email',
              },
              {
                method: 'Phone',
                detail: '+44 7359 872594',
                desc: 'Call us directly Monday to Friday 8am–6pm. We pick up or call back within the hour.',
                href: 'tel:+447359872594',
                cta: 'Call Now',
              },
              {
                method: 'Quote Form',
                detail: 'Full project details',
                desc: 'Fill in our quote form and we will review your project before calling — so the call is more useful.',
                href: '/get-a-quote',
                cta: 'Get a Quote First',
              },
            ].map((opt) => (
              <div
                key={opt.method}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '10px',
                  padding: '28px',
                  border: '1px solid #EDE8DC',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <p
                  style={{
                    color: '#C4773B',
                    fontWeight: 700,
                    fontSize: '0.8rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    marginBottom: '6px',
                  }}
                >
                  {opt.method}
                </p>
                <p
                  style={{
                    color: '#1A2340',
                    fontWeight: 700,
                    fontSize: '0.97rem',
                    marginBottom: '10px',
                  }}
                >
                  {opt.detail}
                </p>
                <p
                  style={{
                    color: '#4A5568',
                    fontSize: '0.88rem',
                    lineHeight: 1.6,
                    flex: 1,
                    marginBottom: '20px',
                  }}
                >
                  {opt.desc}
                </p>
                <a
                  href={opt.href}
                  style={{
                    display: 'inline-block',
                    backgroundColor: '#1A2340',
                    color: '#FFFFFF',
                    padding: '10px 20px',
                    borderRadius: '6px',
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    textDecoration: 'none',
                    textAlign: 'center',
                  }}
                >
                  {opt.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
