import QuoteForm from './QuoteForm';
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  path: '/get-a-quote',
  title: 'Get a Free Project Quote | Dwellinger',
  description: 'Request a quote for your extension, loft conversion or refurbishment. Honest advice, response within 2 hours, no obligation.',
});

export default function GetAQuotePage() {
  return (
    <div style={{ background: '#f0ede6', minHeight: '100vh' }}>
      {/* Hero */}
      <section style={{ background: '#1A2340', padding: '80px 24px 64px' }}>
        <div style={{ maxWidth: 640, margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ color: '#ffffff', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, margin: '0 0 16px', lineHeight: 1.15 }}>
            Get Your Project Quote
          </h1>
          <p style={{ color: '#C4773B', fontSize: '1.2rem', margin: 0, fontWeight: 500 }}>
            Honest advice and a clear next step.
          </p>
        </div>
      </section>

      {/* Form section */}
      <section style={{ padding: '56px 24px 80px' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <QuoteForm />

          {/* Trust strip */}
          <div style={{
            marginTop: 24,
            background: '#F5F0E8',
            borderRadius: 10,
            padding: '18px 24px',
            textAlign: 'center',
            border: '1px solid #EDE8DC',
          }}>
            <p style={{ margin: 0, color: '#C4773B', fontWeight: 600, fontSize: '0.95rem', letterSpacing: '0.02em' }}>
              Checkatrade Verified &nbsp;·&nbsp; Response within 2 hours &nbsp;·&nbsp; No obligation
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
