import Link from 'next/link'
import { pageMetadata } from '@/lib/seo'
import { BallparkCalculator } from '@/components/marketing/BallparkCalculator'
import { ArrowRight, CheckCircle } from 'lucide-react'

export const metadata = pageMetadata({
  path: '/services/estimating',
  title: 'Construction Cost Estimator — Instant Ballpark + QS Reports from £95',
  description: 'Get an instant ballpark cost estimate for your UK construction project, then commission a QS-reviewed cost plan from £95. Real London project data, not guesswork.',
})

const tiers = [
  {
    name: 'Outline',
    price: '£95',
    days: '5 working days',
    popular: false,
    items: ['Single-storey cost indication', 'Cost per m² range', 'Materials overview', 'Summary report (PDF)'],
  },
  {
    name: 'Standard',
    price: '£150',
    days: '5 working days',
    popular: true,
    items: ['Everything in Outline', 'Elemental cost breakdown', 'Prelims and contingency', 'Suitable for planning applications'],
  },
  {
    name: 'Full',
    price: '£250',
    days: '7 working days',
    popular: false,
    items: ['Everything in Standard', 'Detailed bill of quantities', 'Subcontractor schedule', 'Suitable for tender'],
  },
  {
    name: 'Premium',
    price: '£350',
    days: '7–10 days',
    popular: false,
    items: ['Everything in Full', 'QS review call (30 min)', 'Value engineering notes', 'Comparable project data'],
  },
]

const faqs = [
  { q: 'How accurate are the estimates?', a: 'Outline estimates carry a ±20% margin. Full and Premium estimates narrow to ±10% depending on specification complexity. All are grounded in real UK construction project cost data.' },
  { q: 'What information do I need to provide?', a: 'At minimum: what you want to build, approximate size, location, and any drawings you have. We\'ll ask for anything else after you order.' },
  { q: 'Are these estimates suitable for planning applications?', a: 'Standard tier and above are suitable for supporting planning applications. Full and Premium tiers are suitable for tender and lender/investor submissions.' },
  { q: 'How is payment taken?', a: 'After you submit your order form, we\'ll confirm the right tier for your project and send a secure payment link within 2 hours.' },
]

export default function EstimatingPage() {
  return (
    <div style={{ background: 'var(--color-bg, #0A0A0A)', minHeight: '100vh' }}>

      {/* ─── HERO + CALCULATOR ─── */}
      <section style={{ padding: '80px 24px 60px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <p style={{ color: '#C4773B', fontWeight: 600, fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16 }}>Estimating Service</p>
            <h1 style={{ color: '#fff', fontSize: 'clamp(2rem,5vw,3rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: 16 }}>
              What will your project cost?
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.05rem', maxWidth: 560, margin: '0 auto', lineHeight: 1.65 }}>
              Get an instant ballpark in 60 seconds — then commission a QS-reviewed cost plan from £95.
            </p>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16, padding: '36px 32px' }}>
            <BallparkCalculator />
          </div>
        </div>
      </section>

      {/* ─── TRUST STRIP ─── */}
      <section style={{ padding: '32px 24px', borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'rgba(196,119,59,0.04)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '20px 40px', alignItems: 'center', justifyContent: 'center' }}>
          {['Based on real London project data', 'Structured elemental analysis', 'PDF report delivered', 'No subscription needed', 'QS-reviewed methodology'].map(t => (
            <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'rgba(255,255,255,0.55)', fontSize: '0.85rem' }}>
              <CheckCircle size={14} style={{ color: '#C4773B', flexShrink: 0 }} />
              {t}
            </div>
          ))}
        </div>
      </section>

      {/* ─── PRICING TIERS ─── */}
      <section style={{ padding: '80px 24px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <p style={{ color: '#C4773B', fontWeight: 600, fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 14 }}>QS-reviewed reports</p>
            <h2 style={{ color: '#fff', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 800, marginBottom: 12 }}>Choose your estimate tier</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '1rem' }}>All delivered as a PDF report. No subscription, no hidden fees.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
            {tiers.map(tier => (
              <div key={tier.name} style={{ position: 'relative', borderRadius: 12, padding: '32px 24px', background: tier.popular ? 'rgba(196,119,59,0.08)' : 'rgba(255,255,255,0.03)', border: tier.popular ? '1px solid rgba(196,119,59,0.5)' : '1px solid rgba(255,255,255,0.08)', display: 'flex', flexDirection: 'column' }}>
                {tier.popular && (
                  <div style={{ position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)', background: '#C4773B', color: '#fff', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '3px 14px', borderRadius: 20, whiteSpace: 'nowrap' }}>Most Popular</div>
                )}
                <h3 style={{ color: '#fff', fontWeight: 700, fontSize: '1.1rem', marginBottom: 6 }}>{tier.name}</h3>
                <div style={{ color: '#C4773B', fontWeight: 900, fontSize: '2rem', marginBottom: 4 }}>{tier.price}</div>
                <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.8rem', marginBottom: 20 }}>Delivered in {tier.days}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', display: 'flex', flexDirection: 'column', gap: 10, flexGrow: 1 }}>
                  {tier.items.map(item => (
                    <li key={item} style={{ display: 'flex', gap: 8, color: 'rgba(255,255,255,0.6)', fontSize: '0.88rem', lineHeight: 1.4 }}>
                      <CheckCircle size={14} style={{ color: '#C4773B', flexShrink: 0, marginTop: 2 }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href={`/services/estimating/order?tier=${tier.name.toLowerCase()}`} style={{ display: 'block', textAlign: 'center', background: tier.popular ? '#C4773B' : 'rgba(255,255,255,0.07)', color: '#fff', padding: '12px 20px', borderRadius: 8, fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none', border: tier.popular ? 'none' : '1px solid rgba(255,255,255,0.12)' }}>
                  Order {tier.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQs ─── */}
      <section style={{ padding: '80px 24px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <h2 style={{ color: '#fff', fontSize: 'clamp(1.5rem,3vw,2rem)', fontWeight: 800, textAlign: 'center', marginBottom: 48 }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {faqs.map((faq, i) => (
              <div key={faq.q} style={{ padding: '24px 0', borderBottom: i < faqs.length-1 ? '1px solid rgba(255,255,255,0.07)' : 'none' }}>
                <h3 style={{ color: '#fff', fontWeight: 700, fontSize: '1rem', marginBottom: 10 }}>{faq.q}</h3>
                <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, margin: 0, fontSize: '0.92rem' }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section style={{ padding: '80px 24px', background: 'linear-gradient(135deg, rgba(196,119,59,0.15) 0%, rgba(196,119,59,0.04) 100%)', borderTop: '1px solid rgba(196,119,59,0.2)' }}>
        <div style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ color: '#fff', fontSize: 'clamp(1.5rem,3vw,2rem)', fontWeight: 800, marginBottom: 14 }}>Ready to commission your estimate?</h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1rem', marginBottom: 32, lineHeight: 1.65 }}>Tell us about your project and we\'ll confirm the right tier. Most estimates delivered within 5 working days.</p>
          <Link href='/services/estimating/order' style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#C4773B', color: '#fff', padding: '15px 36px', borderRadius: 8, fontWeight: 700, fontSize: '1rem', textDecoration: 'none' }}>
            Order Your Estimate <ArrowRight size={16}/>
          </Link>
        </div>
      </section>
    </div>
  )
}
