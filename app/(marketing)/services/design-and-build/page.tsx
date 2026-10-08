import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Find Design and Build Contractors in London | Verified',
  description: 'Find verified design and build contractors in London through Dwellinger. Builder Score™ rated. One contract, one team, one outcome — no blame gaps between architect and builder.',
}

export default function DesignAndBuildPage() {
  return (
    <div>
      {/* Hero */}
      <section style={{ backgroundColor: '#1A2340', color: '#FFFFFF', padding: '96px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <p style={{ color: '#C4773B', fontWeight: 600, fontSize: '14px', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '20px' }}>
            Our Services
          </p>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)', fontWeight: 700, lineHeight: 1.15, marginBottom: '24px' }}>
            Find a Design and Build Contractor — One Contract, One Outcome
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#c8d0de', maxWidth: '680px', margin: '0 auto 36px' }}>
            No fragmented architect-plus-builder approach. No gap in accountability. Verified design and build contractors on Dwellinger take full responsibility from drawing to handover.
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
            Find a Design &amp; Build Contractor
          </Link>
        </div>
      </section>

      {/* What It Means */}
      <section style={{ backgroundColor: '#F5F0E8', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ color: '#1A2340', fontSize: 'clamp(1.6rem, 3vw, 2.25rem)', fontWeight: 700, textAlign: 'center', marginBottom: '16px' }}>
            What "Design and Build" Actually Means
          </h2>
          <p style={{ color: '#4A5568', fontSize: '1.05rem', maxWidth: '680px', margin: '0 auto 56px', textAlign: 'center', lineHeight: 1.7 }}>
            Most homeowners and developers commission an architect separately, then go out to tender. When costs overrun or the build doesn't match the drawings, two parties point at each other. Design and build eliminates that gap entirely.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            {/* Traditional */}
            <div style={{ backgroundColor: '#FFFFFF', borderRadius: '10px', padding: '36px', border: '1px solid #EDE8DC' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                <span style={{ fontSize: '1.5rem' }}>⚠️</span>
                <h3 style={{ color: '#1A2340', fontSize: '1.2rem', fontWeight: 700, margin: 0 }}>Traditional Approach</h3>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {[
                  'Architect and builder are separate contracts',
                  'Accountability gaps when things go wrong',
                  'Design changes lead to unexpected cost spikes',
                  'Builder finds "unbuildable" details mid-project',
                  'Client manages communication between parties',
                  'Budget uncertainty until contractor is appointed',
                ].map((item) => (
                  <li key={item} style={{ display: 'flex', gap: '10px', color: '#4A5568', fontSize: '0.97rem', lineHeight: 1.5 }}>
                    <span style={{ color: '#e53e3e', flexShrink: 0 }}>✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Design & Build */}
            <div style={{ backgroundColor: '#FFFFFF', borderRadius: '10px', padding: '36px', border: '2px solid #C4773B' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                <span style={{ fontSize: '1.5rem' }}>✅</span>
                <h3 style={{ color: '#1A2340', fontSize: '1.2rem', fontWeight: 700, margin: 0 }}>Design & Build with Dwellinger</h3>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {[
                  'Single contract, single point of contact',
                  'Fixed design and build fee from day one',
                  'Design is informed by buildability from the start',
                  'Guaranteed outcome — one contractor owns the result',
                  'All design, planning and build coordination handled under one contract',
                  'Cost certainty before you commit',
                ].map((item) => (
                  <li key={item} style={{ display: 'flex', gap: '10px', color: '#4A5568', fontSize: '0.97rem', lineHeight: 1.5 }}>
                    <span style={{ color: '#C4773B', flexShrink: 0 }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section style={{ backgroundColor: '#FFFFFF', padding: '80px 24px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ color: '#1A2340', fontSize: 'clamp(1.6rem, 3vw, 2.25rem)', fontWeight: 700, textAlign: 'center', marginBottom: '56px' }}>
            How the Process Works
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {[
              {
                step: '01',
                title: 'Concept & Brief',
                desc: "We start with a detailed conversation about what you want to achieve — space, light, budget, timeline. We challenge assumptions and help you define a brief that's buildable and affordable.",
              },
              {
                step: '02',
                title: 'Design & Planning',
                desc: "Your contractor's design team produces drawings, 3D visuals and planning submissions. Because they're also the builder, every design decision is made with construction cost in mind — no disconnect between drawing and delivery.",
              },
              {
                step: '03',
                title: 'Pre-Construction & Costing',
                desc: "Before breaking ground, we produce a full fixed-price schedule of works. No surprise quotes. No tender process. One detailed cost plan, agreed before work begins.",
              },
              {
                step: '04',
                title: 'Build',
                desc: "The contractor's trades and vetted supply chain execute the works to programme. You have a single point of contact throughout — no chasing multiple parties.",
              },
              {
                step: '05',
                title: 'Handover & Snagging',
                desc: "We don't disappear at practical completion. We walk the project with you, produce a snagging list, resolve it, and only consider the job done when you're satisfied.",
              },
            ].map((item, idx, arr) => (
              <div
                key={item.step}
                style={{
                  display: 'flex',
                  gap: '28px',
                  padding: '36px 0',
                  borderBottom: idx < arr.length - 1 ? '1px solid #EDE8DC' : 'none',
                }}
              >
                <div
                  style={{
                    flexShrink: 0,
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    backgroundColor: '#1A2340',
                    color: '#C4773B',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    fontSize: '1rem',
                    letterSpacing: '0.05em',
                  }}
                >
                  {item.step}
                </div>
                <div>
                  <h3 style={{ color: '#1A2340', fontWeight: 700, fontSize: '1.15rem', marginBottom: '10px' }}>{item.title}</h3>
                  <p style={{ color: '#4A5568', lineHeight: 1.7, margin: 0, fontSize: '0.97rem' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section style={{ backgroundColor: '#F5F0E8', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ color: '#1A2340', fontSize: 'clamp(1.6rem, 3vw, 2.25rem)', fontWeight: 700, textAlign: 'center', marginBottom: '48px' }}>
            Why Clients Choose Design and Build
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
            {[
              {
                icon: '💷',
                title: 'Cost Certainty',
                desc: 'Fixed fee agreed before work starts. No tender surprises, no design variations blowing your budget mid-project.',
              },
              {
                icon: '⏱️',
                title: 'Time Efficiency',
                desc: 'Design and construction planning happen in parallel. No waiting for tender periods or contractor appointment delays.',
              },
              {
                icon: '🎯',
                title: 'Single Accountability',
                desc: 'One team, one contract, one point of escalation. If something isn\'t right, there\'s no question about who\'s responsible.',
              },
              {
                icon: '🔧',
                title: 'Integrated Expertise',
                desc: 'Designers and builders working as one team from day one means the design is always informed by real construction knowledge.',
              },
            ].map((card) => (
              <div
                key={card.title}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '10px',
                  padding: '32px',
                  border: '1px solid #EDE8DC',
                }}
              >
                <div style={{ fontSize: '2rem', marginBottom: '16px' }}>{card.icon}</div>
                <h3 style={{ color: '#1A2340', fontWeight: 700, fontSize: '1.1rem', marginBottom: '12px' }}>{card.title}</h3>
                <p style={{ color: '#4A5568', lineHeight: 1.65, margin: 0, fontSize: '0.95rem' }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: '#1A2340', padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <h2 style={{ color: '#FFFFFF', fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, marginBottom: '16px' }}>
            Ready to Talk About Your Project?
          </h2>
          <p style={{ color: '#c8d0de', fontSize: '1.05rem', marginBottom: '32px', lineHeight: 1.6 }}>
            Tell us what you're planning and we'll give you a straight answer on feasibility, timeline and budget — no obligation.
          </p>
          <Link
            href="/get-a-quote"
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
            Get a Quote for Your Project
          </Link>
        </div>
      </section>
    </div>
  )
}
