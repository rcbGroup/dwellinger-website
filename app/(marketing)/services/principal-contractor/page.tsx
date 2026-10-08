import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Find a Principal Contractor in London | CDM 2015 Verified',
  description: 'Find verified principal contractors for complex residential and commercial projects across London. CDM 2015 compliant. Builder Score™ rated. One point of contact for all trades.',
}

export default function PrincipalContractorPage() {
  return (
    <div>
      {/* Hero */}
      <section style={{ backgroundColor: '#1A2340', color: '#FFFFFF', padding: '96px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <p style={{ color: '#C4773B', fontWeight: 600, fontSize: '14px', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '20px' }}>
            Our Services
          </p>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)', fontWeight: 700, lineHeight: 1.15, marginBottom: '24px' }}>
            Find a Principal Contractor — Verified, Scored, Ready to Appoint
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#c8d0de', maxWidth: '660px', margin: '0 auto 36px', lineHeight: 1.65 }}>
            On any project with multiple trades or phases, someone needs to be legally responsible for co-ordination, health & safety, and programme management. Find a CDM 2015-ready principal contractor through Dwellinger — every one Builder Score™ rated and verified.
          </p>
          <Link
            href="/register"
            style={{
              display: 'inline-block',
              backgroundColor: '#C4773B',
              color: '#FFFFFF',
              padding: '14px 36px',
              borderRadius: '6px',
              fontWeight: 600,
              fontSize: '1rem',
              textDecoration: 'none',
            }}
          >
            Find a Principal Contractor
          </Link>
        </div>
      </section>

      {/* CDM 2015 */}
      <section style={{ backgroundColor: '#F5F0E8', padding: '80px 24px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ color: '#1A2340', fontSize: 'clamp(1.6rem, 3vw, 2.25rem)', fontWeight: 700, marginBottom: '24px' }}>
            Principal Contractor Duties Under CDM 2015
          </h2>
          <p style={{ color: '#4A5568', lineHeight: 1.75, fontSize: '1.02rem', marginBottom: '28px' }}>
            The Construction (Design and Management) Regulations 2015 (CDM 2015) require that a Principal Contractor is appointed on any project involving more than one contractor. This appointment carries legal duties — it is not optional and cannot be delegated informally.
          </p>
          <p style={{ color: '#4A5568', lineHeight: 1.75, fontSize: '1.02rem', marginBottom: '28px' }}>
            As a CDM duty holder, the Principal Contractor is legally required to plan, manage, monitor and co-ordinate all construction work. This includes producing and maintaining the Construction Phase Plan, ensuring welfare facilities are in place before work begins, and managing site-wide health and safety for every trade on site — not just their own operatives.
          </p>
          <p style={{ color: '#4A5568', lineHeight: 1.75, fontSize: '1.02rem', marginBottom: '40px' }}>
            Every principal contractor on the Dwellinger platform is Builder Score™ verified and CDM 2015 ready. They hold the legal duty, manage the programme, and ensure your project is compliant from day one — with their performance independently tracked on the platform.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
            {[
              {
                title: 'Construction Phase Plan',
                desc: 'We produce and maintain the mandatory Construction Phase Plan before any work begins on site.',
              },
              {
                title: 'Health & Safety Management',
                desc: 'We ensure every trade on site operates safely and in compliance with current legislation.',
              },
              {
                title: 'Design Coordination',
                desc: 'We manage the interface between design information and construction — preventing clashes before they become costly.',
              },
              {
                title: 'Welfare Facilities',
                desc: 'We ensure site welfare — toilets, rest areas, washing facilities — are in place before the first operative sets foot on site.',
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '8px',
                  padding: '28px',
                  border: '1px solid #EDE8DC',
                }}
              >
                <h3 style={{ color: '#1A2340', fontWeight: 700, fontSize: '1rem', marginBottom: '10px' }}>{item.title}</h3>
                <p style={{ color: '#4A5568', fontSize: '0.94rem', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section style={{ backgroundColor: '#FFFFFF', padding: '80px 24px' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <h2 style={{ color: '#1A2340', fontSize: 'clamp(1.6rem, 3vw, 2.25rem)', fontWeight: 700, marginBottom: '40px' }}>
            What You Get When Dwellinger Is Your Principal Contractor
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {[
              {
                title: 'One point of contact',
                desc: 'You speak to us. We manage every trade, subcontractor, and supplier. No chasing multiple people for updates.',
              },
              {
                title: 'Multi-trade coordination',
                desc: 'Groundworks, structure, MEP, fit-out — we sequence and manage all trades to prevent delays and clashes.',
              },
              {
                title: 'CDM compliance',
                desc: 'Full legal compliance under CDM 2015. You are protected. No enforcement risk. No gaps in duty holder appointments.',
              },
              {
                title: 'Programme management',
                desc: 'A detailed programme before we start, weekly progress updates, and proactive management of delay risk.',
              },
              {
                title: 'Cost control',
                desc: 'We manage the supply chain and control variations. You agree every change before it\'s instructed — no surprise invoices.',
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  display: 'flex',
                  gap: '20px',
                  padding: '24px',
                  borderRadius: '8px',
                  border: '1px solid #EDE8DC',
                  alignItems: 'flex-start',
                }}
              >
                <div
                  style={{
                    flexShrink: 0,
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    backgroundColor: '#C4773B',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '1rem' }}>✓</span>
                </div>
                <div>
                  <h3 style={{ color: '#1A2340', fontWeight: 700, fontSize: '1.05rem', marginBottom: '6px' }}>{item.title}</h3>
                  <p style={{ color: '#4A5568', fontSize: '0.95rem', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Needs This */}
      <section style={{ backgroundColor: '#F5F0E8', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto' }}>
          <h2 style={{ color: '#1A2340', fontSize: 'clamp(1.6rem, 3vw, 2.25rem)', fontWeight: 700, textAlign: 'center', marginBottom: '48px' }}>
            Who Needs a Principal Contractor?
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {[
              {
                title: 'Homeowners with Complex Projects',
                desc: "Extensions, loft conversions, full refurbishments — any project where multiple trades are on site at the same time requires a Principal Contractor. Most homeowners don't realise this until it's too late.",
                icon: '🏠',
              },
              {
                title: 'Property Developers',
                desc: 'Residential conversions, HMOs, commercial-to-residential — developers need a Principal Contractor who understands programme, budget, and the delivery pressures of investment projects.',
                icon: '🏗️',
              },
              {
                title: 'Commercial Clients',
                desc: 'Office fit-outs, retail refurbishments, industrial works — commercial clients require CDM compliance and a Principal Contractor who can operate in occupied or sensitive environments.',
                icon: '🏢',
              },
            ].map((card) => (
              <div
                key={card.title}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '10px',
                  padding: '36px',
                  border: '1px solid #EDE8DC',
                }}
              >
                <div style={{ fontSize: '2.2rem', marginBottom: '16px' }}>{card.icon}</div>
                <h3 style={{ color: '#1A2340', fontWeight: 700, fontSize: '1.1rem', marginBottom: '12px' }}>{card.title}</h3>
                <p style={{ color: '#4A5568', lineHeight: 1.65, fontSize: '0.95rem', margin: 0 }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: '#1A2340', padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '620px', margin: '0 auto' }}>
          <h2 style={{ color: '#FFFFFF', fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, marginBottom: '16px' }}>
            Need a Principal Contractor for Your Project?
          </h2>
          <p style={{ color: '#c8d0de', fontSize: '1.05rem', marginBottom: '32px', lineHeight: 1.6 }}>
            We're happy to discuss your project, confirm what your CDM obligations are, and explain exactly how we'd manage delivery.
          </p>
          <Link
            href="/contact"
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
            Talk to Our Team
          </Link>
        </div>
      </section>
    </div>
  )
}
