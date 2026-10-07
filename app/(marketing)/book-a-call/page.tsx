import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Book a Call | Speak to Our Team | Dwellinger',
  description:
    'Book a free consultation call with the Dwellinger team. We can help with project scoping, cost planning, contractor sourcing, and platform questions.',
}

const callTypes = [
  { title: 'Project Scoping Call', duration: '30 min', desc: 'Tell us about your project. We will give you an honest assessment of scope, likely cost range, and what information you need to progress.' },
  { title: 'Estimating & Cost Planning', duration: '45 min', desc: 'Bring your drawings or brief. We will walk through the key cost drivers and help you understand what drives price up or down on your project type.' },
  { title: 'Platform Walkthrough', duration: '20 min', desc: 'A guided tour of Dwellinger for contractors or investors who want to understand what is available and how to get the most out of the platform.' },
  { title: 'Contractor Enquiry', duration: '30 min', desc: 'For contractors interested in joining the Dwellinger network, listing a Builder Score profile, or accessing the estimating tools.' },
]

const whyCall = [
  'Get clarity on your project scope before committing to a full design or survey',
  'Understand real London cost ranges for your project type from people who price these projects every week',
  'Find out whether your timeline is realistic and what might slow it down',
  'Understand what information you need to get a reliable estimate or contractor quote',
  'No sales pressure — if we are not the right fit, we will tell you',
]

const contactMethods = [
  { label: 'Email', value: 'info@dwellinger.co.uk', href: 'mailto:info@dwellinger.co.uk', desc: 'Send us a message and we will reply within one business day.' },
  { label: 'Phone', value: '+44 7359 872594', href: 'tel:+447359872594', desc: 'Available Monday to Friday, 8am to 6pm.' },
  { label: 'Quote Form', value: 'Get a Quote', href: '/get-a-quote', desc: 'Fill in your project details and we will come back with a structured response.' },
]

export default function BookACallPage() {
  return (
    <main>
      <section style={{ backgroundColor: '#1A2340', color: '#FFFFFF', padding: '96px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <p style={{ color: '#C4773B', fontWeight: 600, fontSize: '13px', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '20px' }}>
            Speak to the Team
          </p>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, lineHeight: 1.12, marginBottom: '24px' }}>
            Book a Free Consultation Call
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#c8d0de', maxWidth: '600px', margin: '0 auto 36px', lineHeight: 1.7 }}>
            Whether you have a project to discuss, a cost question, or you want to understand how
            the platform works — we are happy to talk. No obligation, no pressure.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="mailto:info@dwellinger.co.uk?subject=Book a Call" style={{ backgroundColor: '#C4773B', color: '#FFFFFF', padding: '14px 36px', borderRadius: '6px', fontWeight: 700, textDecoration: 'none', fontSize: '1rem' }}>
              Email to Book
            </a>
            <a href="tel:+447359872594" style={{ backgroundColor: 'transparent', color: '#FFFFFF', padding: '14px 36px', borderRadius: '6px', fontWeight: 600, textDecoration: 'none', fontSize: '1rem', border: '1px solid rgba(255,255,255,0.3)' }}>
              Call Now: +44 7359 872594
            </a>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: '#FFFFFF', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ color: '#1A2340', fontSize: 'clamp(1.6rem, 3vw, 2.25rem)', fontWeight: 700, textAlign: 'center', marginBottom: '48px' }}>
            What Kind of Call Do You Need?
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            {callTypes.map((call) => (
              <div key={call.title} style={{ backgroundColor: '#F5F0E8', borderRadius: '10px', padding: '28px', border: '1px solid #EDE8DC' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                  <h3 style={{ color: '#1A2340', fontWeight: 700, fontSize: '1rem', margin: 0 }}>{call.title}</h3>
                  <span style={{ backgroundColor: '#1A2340', color: '#FFFFFF', fontSize: '0.72rem', fontWeight: 700, padding: '3px 10px', borderRadius: '12px', flexShrink: 0, marginLeft: '8px' }}>
                    {call.duration}
                  </span>
                </div>
                <p style={{ color: '#4A5568', fontSize: '0.93rem', lineHeight: 1.65, margin: 0 }}>{call.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: '#F5F0E8', padding: '80px 24px' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <h2 style={{ color: '#1A2340', fontSize: 'clamp(1.6rem, 3vw, 2.25rem)', fontWeight: 700, marginBottom: '40px' }}>
            Why It Is Worth 30 Minutes
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {whyCall.map((point, i) => (
              <div key={i} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ width: 28, height: 28, borderRadius: '50%', backgroundColor: '#C4773B', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.75rem', flexShrink: 0 }}>
                  {i + 1}
                </div>
                <p style={{ color: '#4A5568', fontSize: '0.98rem', lineHeight: 1.65, margin: 0, paddingTop: '3px' }}>{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: '#1A2340', padding: '80px 24px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ color: '#FFFFFF', fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, textAlign: 'center', marginBottom: '48px' }}>
            Get in Touch
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
            {contactMethods.map((method) => (
              <a key={method.label} href={method.href} style={{ textDecoration: 'none' }}>
                <div style={{ backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: '10px', padding: '28px', border: '1px solid rgba(255,255,255,0.12)', textAlign: 'center' }}>
                  <p style={{ color: '#C4773B', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>{method.label}</p>
                  <p style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '1rem', marginBottom: '8px' }}>{method.value}</p>
                  <p style={{ color: '#c8d0de', fontSize: '0.88rem', margin: 0, lineHeight: 1.5 }}>{method.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
