import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms and conditions for using the Dwellinger platform — the UK\'s property and construction intelligence platform.',
}

export default function TermsPage() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: 'var(--color-bg)' }}>
      {/* Hero */}
      <section style={{ backgroundColor: 'var(--color-bg-surface)', borderBottom: '1px solid var(--color-border)', padding: '56px 24px 40px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <p style={{ color: 'var(--amber)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 12 }}>
            Legal
          </p>
          <h1 style={{ color: 'var(--color-text)', fontSize: 'clamp(1.6rem,4vw,2.4rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: 12 }}>
            Terms of Service
          </h1>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, maxWidth: 600 }}>
            Last updated: 8 October 2026 &nbsp;·&nbsp; Effective: 8 October 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: '48px 24px', maxWidth: 800, margin: '0 auto' }}>
        <div style={{ color: 'var(--color-text-secondary)', lineHeight: 1.8, fontSize: '0.95rem' }}>

          <Block heading="1. About Dwellinger">
            <p>
              Dwellinger Ltd (&ldquo;Dwellinger&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) is a company registered in England and Wales. We operate the Dwellinger platform at{' '}
              <a href="https://dwellinger.co.uk" style={{ color: 'var(--amber)' }}>dwellinger.co.uk</a>{' '}
              (&ldquo;the Platform&rdquo;), a property and construction intelligence service providing contractor discovery, AI-powered cost estimation, planning intelligence, and related tools.
            </p>
            <p style={{ marginTop: 12 }}>
              By accessing or using the Platform you agree to these Terms of Service (&ldquo;Terms&rdquo;). If you do not agree, please do not use the Platform.
            </p>
          </Block>

          <Block heading="2. Intellectual Property &amp; Copyright">
            <p>
              All content, data, design, software, trademarks, trade names, logos, text, graphics, images, and compilations on the Platform are the exclusive property of Dwellinger Ltd or our licensors and are protected by UK and international copyright, trademark, database and other intellectual property laws.
            </p>
            <ul style={{ paddingLeft: 20, marginTop: 12, display: 'flex', flexDirection: 'column', gap: 6 }}>
              <li>
                <strong style={{ color: 'var(--color-text)' }}>Builder Score™</strong> — Builder Score is a trademark of Dwellinger Ltd. Unauthorised use of this mark is strictly prohibited.
              </li>
              <li>
                <strong style={{ color: 'var(--color-text)' }}>Dwellinger™</strong> — The name Dwellinger and associated branding are trademarks of Dwellinger Ltd.
              </li>
              <li>
                <strong style={{ color: 'var(--color-text)' }}>Platform data</strong> — All planning intelligence data, contractor scores, cost indices, and aggregated market data compiled by Dwellinger are our proprietary databases.
              </li>
            </ul>
            <p style={{ marginTop: 12 }}>
              You may not reproduce, republish, distribute, transmit, display, modify or otherwise use any content from the Platform without our express written permission, except for personal, non-commercial use as permitted by law.
            </p>
          </Block>

          <Block heading="3. User Accounts">
            <p>
              To access certain features you must register for an account. You are responsible for maintaining the security of your credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorised access.
            </p>
            <p style={{ marginTop: 10 }}>
              You must be at least 18 years of age and a UK resident or a business legitimately operating in the UK to create an account.
            </p>
          </Block>

          <Block heading="4. Acceptable Use">
            <p>You agree not to:</p>
            <ul style={{ paddingLeft: 20, marginTop: 10, display: 'flex', flexDirection: 'column', gap: 6 }}>
              <li>Use the Platform for any unlawful purpose or in violation of any applicable UK or EU laws or regulations;</li>
              <li>Scrape, crawl, or systematically download data from the Platform without our written consent;</li>
              <li>Submit false or misleading information, including false contractor reviews;</li>
              <li>Impersonate any person or entity, or misrepresent your affiliation with any person or entity;</li>
              <li>Attempt to gain unauthorised access to any part of the Platform or any connected systems;</li>
              <li>Use the Platform to send unsolicited communications (spam);</li>
              <li>Interfere with or disrupt the integrity or performance of the Platform.</li>
            </ul>
          </Block>

          <Block heading="5. Contractor Listings &amp; Builder Score™">
            <p>
              Contractor profiles and Builder Score™ ratings are compiled from multiple data sources including public records, third-party review platforms, and user submissions. Dwellinger does not independently verify every piece of information in contractor profiles.
            </p>
            <p style={{ marginTop: 10 }}>
              <strong style={{ color: 'var(--color-text)' }}>Disclaimer:</strong> The Platform does not endorse any specific contractor. You are solely responsible for conducting your own due diligence before engaging any contractor. Dwellinger shall not be liable for any loss arising from your engagement of any contractor found on the Platform.
            </p>
          </Block>

          <Block heading="6. Cost Estimates &amp; AI Tools">
            <p>
              All cost estimates, project budgets, and financial projections provided by the Platform are indicative only and are generated using AI and statistical modelling. They do not constitute a formal quotation, professional quantity surveying advice, or a binding offer.
            </p>
            <p style={{ marginTop: 10 }}>
              Actual construction costs will vary depending on design, specification, market conditions, contractor pricing, and site-specific factors. Always obtain multiple formal quotations before making any financial commitment.
            </p>
          </Block>

          <Block heading="7. Planning Intelligence Data">
            <p>
              Planning data provided on the Platform is sourced from UK local planning authorities and is offered for informational and research purposes only. It does not constitute planning advice. Always consult your local planning authority or a qualified planning professional before taking any action in reliance on planning data shown on the Platform.
            </p>
          </Block>

          <Block heading="8. Subscription &amp; Payments">
            <p>
              Certain Platform features require a paid subscription. Subscription fees are charged in GBP and are subject to UK VAT where applicable. Subscriptions automatically renew unless cancelled before the renewal date. Refunds are governed by our Refund Policy, available on request.
            </p>
          </Block>

          <Block heading="9. Privacy &amp; Data Protection">
            <p>
              Your use of the Platform is also governed by our{' '}
              <a href="/privacy" style={{ color: 'var(--amber)' }}>Privacy Policy</a>,{' '}
              which is incorporated into these Terms by reference. By using the Platform you consent to our processing of your personal data as described in the Privacy Policy. We comply with UK GDPR and the UK Data Protection Act 2018.
            </p>
          </Block>

          <Block heading="10. Limitation of Liability">
            <p>
              To the maximum extent permitted by applicable UK law, Dwellinger Ltd shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of or inability to use the Platform.
            </p>
            <p style={{ marginTop: 10 }}>
              Our total liability to you in connection with the Platform shall not exceed the greater of (a) the amounts paid by you to Dwellinger in the 12 months prior to the claim, or (b) £100.
            </p>
            <p style={{ marginTop: 10 }}>
              Nothing in these Terms limits liability for death or personal injury caused by negligence, fraud, or any other liability that cannot lawfully be excluded under UK law.
            </p>
          </Block>

          <Block heading="11. Governing Law">
            <p>
              These Terms shall be governed by and construed in accordance with the laws of England and Wales. Any disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>
          </Block>

          <Block heading="12. Changes to These Terms">
            <p>
              We reserve the right to update these Terms at any time. We will notify registered users of material changes by email and/or by posting a notice on the Platform. Continued use of the Platform after changes constitute your acceptance of the revised Terms.
            </p>
          </Block>

          <Block heading="13. Contact">
            <p>
              For legal enquiries or complaints regarding these Terms, please contact us at{' '}
              <a href="mailto:legal@dwellinger.co.uk" style={{ color: 'var(--amber)' }}>legal@dwellinger.co.uk</a>{' '}
              or by post to: Dwellinger Ltd, London, United Kingdom.
            </p>
          </Block>

          <div style={{ marginTop: 48, padding: '24px', backgroundColor: 'var(--color-bg-surface)', borderRadius: 8, border: '1px solid var(--color-border)' }}>
            <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', margin: 0 }}>
              &copy; 2026 Dwellinger Ltd. All rights reserved. Builder Score™ and Dwellinger™ are trademarks of Dwellinger Ltd, registered in England and Wales. Unauthorised reproduction or use of any content, trademark, or intellectual property of Dwellinger Ltd is strictly prohibited and may result in legal action.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

function Block({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 36 }}>
      <h2
        style={{
          color: 'var(--color-text)',
          fontSize: '1.1rem',
          fontWeight: 700,
          marginBottom: 14,
          paddingBottom: 8,
          borderBottom: '1px solid var(--color-border)',
        }}
      >
        {heading}
      </h2>
      <div>{children}</div>
    </div>
  )
}
