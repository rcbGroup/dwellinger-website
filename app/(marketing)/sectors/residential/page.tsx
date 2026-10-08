import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Extensions, Lofts & Refurbishments for London Homeowners',
  description: 'Extensions, loft conversions and full refurbishments for London homeowners. Find verified contractors with Builder Score™. No blame-shifting. From first estimate to final handover.',
};

const services = [
  {
    title: 'Rear Extensions',
    desc: 'Open up your ground floor and add genuine living space. From single-storey kitchen extensions to large wrap-arounds — designed, planned and built by verified Dwellinger contractors.',
  },
  {
    title: 'Loft Conversions',
    desc: 'Transform unused roof space into a bedroom, bathroom or home office. Dormer, hip-to-gable and mansard conversions across London.',
  },
  {
    title: 'Full Refurbishments',
    desc: 'End-to-end renovation of your entire home. Your contractor strips back, replans, and rebuilds to a high spec — managing every trade from demolition to decoration.',
  },
  {
    title: 'Structural Alterations',
    desc: 'Remove walls, open up floor plans, install steel beams. Structural engineering and build managed together under one roof.',
  },
  {
    title: 'Kitchen Extensions',
    desc: 'The most popular project in London. We combine rear extension works with a bespoke kitchen fit-out for a seamless result.',
  },
];

const whyPoints = [
  {
    title: 'Builder Score™',
    desc: 'Every contractor we work with is scored on reviews, compliance, on-time delivery and responsiveness — so you only get the best.',
  },
  {
    title: 'AI-backed estimates',
    desc: 'Our cost intelligence platform gives you a realistic ballpark before you commit to a single meeting — no more guessing.',
  },
  {
    title: 'A-to-Z delivery',
    desc: 'Design, planning, structural, build, fit-out, snagging. One team. One contract. One point of accountability.',
  },
  {
    title: 'One accountable party',
    desc: 'No blame-shifting between architect, builder and trades. Your verified principal contractor is solely accountable — the buck stops with them.',
  },
];

const caseStudies = [
  { location: 'SE22 East Dulwich', type: 'Loft Conversion', value: '£68,000', desc: 'Dormer loft conversion creating master bedroom with en-suite. Completed on time and within budget.' },
  { location: 'BR3 Beckenham', type: 'Rear Extension', value: '£52,000', desc: 'Single-storey rear extension opening the ground floor into a kitchen-diner with bifold doors.' },
  { location: 'AL3 St Albans', type: 'Full Refurbishment', value: '£145,000', desc: 'Complete refurbishment of a 4-bed semi including loft, kitchen, bathrooms and full redecoration.' },
];

const faqs = [
  {
    q: 'Do I need planning permission for a rear extension?',
    a: 'Most single-storey rear extensions within 3–6m fall under Permitted Development. We advise on your specific situation during the initial consultation.',
  },
  {
    q: 'How much does a rear extension cost in London?',
    a: 'Typical range is £45k–£150k+ depending on size, specification and location. Our AI cost intelligence tool gives you a realistic ballpark before any meetings.',
  },
  {
    q: 'How long does a loft conversion take?',
    a: '8–14 weeks on average for a dormer conversion. More complex mansard or hip-to-gable projects may take 14–20 weeks.',
  },
  {
    q: 'What\'s included in your service?',
    a: 'Full A-to-Z delivery: design, planning, structural engineering, build, fit-out, snagging. Everything under one contract.',
  },
  {
    q: 'What is Builder Score™?',
    a: 'Our proprietary scoring system rating contractors on verified reviews, regulatory compliance, on-time delivery and client responsiveness. Every trade we use is scored.',
  },
  {
    q: 'How is Dwellinger different from Checkatrade?',
    a: 'Checkatrade lists individual tradespeople. A Dwellinger principal contractor manages the entire project and is solely accountable for the outcome — backed by a Builder Score™ that tracks their actual performance.',
  },
];

export default function ResidentialPage() {
  return (
    <div style={{ background: '#f0ede6' }}>
      {/* Hero */}
      <section style={{ background: '#1A2340', padding: '96px 24px 80px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: '#C4773B', fontWeight: 600, fontSize: '0.9rem', letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 0 16px' }}>
            Residential Construction
          </p>
          <h1 style={{ color: '#ffffff', fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 800, margin: '0 0 20px', lineHeight: 1.15 }}>
            Extensions, Lofts &amp; Refurbishments — Done Properly
          </h1>
          <p style={{ color: '#c8d0e0', fontSize: '1.15rem', margin: '0 0 40px', lineHeight: 1.7, maxWidth: 620, marginLeft: 'auto', marginRight: 'auto' }}>
            For London homeowners who&apos;ve been let down before. Verified principal contractors. No blame-shifting.
          </p>
          <Link
            href="/get-a-quote"
            style={{
              display: 'inline-block',
              background: '#C4773B',
              color: '#ffffff',
              padding: '16px 40px',
              borderRadius: 10,
              fontWeight: 700,
              fontSize: '1rem',
              textDecoration: 'none',
              letterSpacing: '0.01em',
            }}
          >
            Get a Free Quote
          </Link>
        </div>
      </section>

      {/* Services */}
      <section style={{ background: '#F5F0E8', padding: '80px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ color: '#1A2340', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, textAlign: 'center', margin: '0 0 12px' }}>
            What We Build
          </h2>
          <p style={{ color: '#4A5568', textAlign: 'center', margin: '0 0 48px', fontSize: '1rem' }}>
            Every project managed from first meeting to final handover.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {services.map((s) => (
              <div key={s.title} style={{
                background: '#ffffff',
                borderRadius: 12,
                padding: '32px 28px',
                border: '1px solid #EDE8DC',
              }}>
                <h3 style={{ color: '#1A2340', fontSize: '1.1rem', fontWeight: 700, margin: '0 0 12px' }}>{s.title}</h3>
                <p style={{ color: '#4A5568', fontSize: '0.95rem', lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Dwellinger */}
      <section style={{ background: '#ffffff', padding: '80px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ color: '#1A2340', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, textAlign: 'center', margin: '0 0 48px' }}>
            Why Dwellinger
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 32 }}>
            {whyPoints.map((p, i) => (
              <div key={p.title} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{
                  width: 40, height: 40, background: '#C4773B', borderRadius: 10,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#ffffff', fontWeight: 800, fontSize: '1rem',
                }}>
                  {i + 1}
                </div>
                <h3 style={{ color: '#1A2340', fontSize: '1.05rem', fontWeight: 700, margin: 0 }}>{p.title}</h3>
                <p style={{ color: '#4A5568', fontSize: '0.93rem', lineHeight: 1.7, margin: 0 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avatar phrases */}
      <section style={{ background: '#F5F0E8', padding: '80px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ color: '#1A2340', fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 800, textAlign: 'center', margin: '0 0 16px' }}>
            Sound familiar?
          </h2>
          <p style={{ color: '#4A5568', textAlign: 'center', margin: '0 0 48px' }}>
            These are the questions every homeowner asks. We built Dwellinger to answer them.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            {[
              'I just want to know how much it\'s actually going to cost',
              'How do I know I can trust them?',
            ].map((phrase) => (
              <div key={phrase} style={{
                background: '#ffffff',
                borderRadius: 16,
                padding: '32px 28px 28px',
                border: '1px solid #EDE8DC',
                position: 'relative',
              }}>
                <div style={{
                  position: 'absolute', top: -12, left: 28,
                  background: '#C4773B', color: '#ffffff',
                  width: 28, height: 28, borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.1rem', fontWeight: 700,
                }}>
                  &ldquo;
                </div>
                <p style={{ color: '#1A2340', fontSize: '1.1rem', fontWeight: 600, lineHeight: 1.6, margin: '8px 0 0' }}>
                  {phrase}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ background: '#1A2340', padding: '80px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ color: '#ffffff', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, margin: '0 0 12px' }}>
            How It Works
          </h2>
          <p style={{ color: '#c8d0e0', margin: '0 0 56px', fontSize: '1rem' }}>Three clear steps. No confusion.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 32 }}>
            {[
              { step: '01', title: 'Get a ballpark estimate', desc: 'Use our cost intelligence tool to understand what your project might cost before committing to anything.' },
              { step: '02', title: 'Book a site survey', desc: 'We visit your property, assess the scope, and provide a detailed fixed quote.' },
              { step: '03', title: 'We deliver', desc: 'We manage the entire project to completion — one team, one contract, one point of contact.' },
            ].map((s) => (
              <div key={s.step} style={{ textAlign: 'center' }}>
                <div style={{ color: '#C4773B', fontSize: '2rem', fontWeight: 800, marginBottom: 12 }}>{s.step}</div>
                <h3 style={{ color: '#ffffff', fontSize: '1.1rem', fontWeight: 700, margin: '0 0 10px' }}>{s.title}</h3>
                <p style={{ color: '#c8d0e0', fontSize: '0.93rem', lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section style={{ background: '#F5F0E8', padding: '80px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ color: '#1A2340', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, textAlign: 'center', margin: '0 0 48px' }}>
            Recent Projects
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {caseStudies.map((c) => (
              <div key={c.location} style={{ background: '#ffffff', borderRadius: 12, padding: '32px 28px', border: '1px solid #EDE8DC' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
                  <span style={{ background: '#1A2340', color: '#ffffff', borderRadius: 6, padding: '4px 10px', fontSize: '0.78rem', fontWeight: 600 }}>
                    {c.type}
                  </span>
                  <span style={{ color: '#C4773B', fontWeight: 800, fontSize: '1.05rem' }}>{c.value}</span>
                </div>
                <h3 style={{ color: '#1A2340', fontSize: '1rem', fontWeight: 700, margin: '0 0 10px' }}>{c.location}</h3>
                <p style={{ color: '#4A5568', fontSize: '0.92rem', lineHeight: 1.65, margin: 0 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: '#ffffff', padding: '80px 24px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h2 style={{ color: '#1A2340', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, textAlign: 'center', margin: '0 0 48px' }}>
            Frequently Asked Questions
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{
                borderBottom: '1px solid #EDE8DC',
                padding: '28px 0',
              }}>
                <h3 style={{ color: '#1A2340', fontSize: '1rem', fontWeight: 700, margin: '0 0 10px' }}>{faq.q}</h3>
                <p style={{ color: '#4A5568', fontSize: '0.93rem', lineHeight: 1.7, margin: 0 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ background: '#C4773B', padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <h2 style={{ color: '#ffffff', fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 800, margin: '0 0 16px', lineHeight: 1.2 }}>
            Ready to get started?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.1rem', margin: '0 0 40px', lineHeight: 1.6 }}>
            Get a free, no-obligation quote for your extension, loft conversion or refurbishment.
          </p>
          <Link
            href="/get-a-quote"
            style={{
              display: 'inline-block',
              background: '#1A2340',
              color: '#ffffff',
              padding: '18px 48px',
              borderRadius: 10,
              fontWeight: 700,
              fontSize: '1.05rem',
              textDecoration: 'none',
              letterSpacing: '0.01em',
            }}
          >
            Get a Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
