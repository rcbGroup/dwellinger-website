import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for the Dwellinger platform. Governing law: England and Wales.',
}

const headingStyle = { color: '#1A2340', fontSize: '1.3rem', fontWeight: 700, marginTop: 40, marginBottom: 12 } as const
const paraStyle = { color: '#4A5568', lineHeight: 1.8, marginBottom: 16, fontSize: '0.95rem' } as const

export default function TermsPage() {
  return (
    <div style={{ backgroundColor: '#FFFFFF' }}>
      <section style={{ backgroundColor: '#1A2340', padding: '60px 24px', textAlign: 'center' }}>
        <h1 style={{ color: '#fff', fontSize: '2rem', fontWeight: 800 }}>Terms of Service</h1>
        <p style={{ color: '#c8c0b0', marginTop: 12 }}>Last updated: October 2026</p>
      </section>

      <article style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px 80px' }}>
        <h2 style={headingStyle}>1. Agreement to Terms</h2>
        <p style={paraStyle}>
          By accessing or using the Dwellinger website and platform (collectively, "the Services"), you agree to be bound by these Terms of Service. If you do not agree, you may not use the Services. These terms apply to all visitors, users and contractors on the platform.
        </p>

        <h2 style={headingStyle}>2. Platform Use</h2>
        <p style={paraStyle}>
          You may use the Services only for lawful purposes and in accordance with these Terms. You agree not to use the Services to transmit any material that is defamatory, offensive or unlawful, or to attempt to gain unauthorised access to any part of the Services or related systems.
        </p>
        <p style={paraStyle}>
          We reserve the right to suspend or terminate access for any user who breaches these Terms or uses the platform in a manner that we reasonably determine to be harmful to other users or to the integrity of the platform.
        </p>

        <h2 style={headingStyle}>3. User Accounts</h2>
        <p style={paraStyle}>
          To access certain features of the Services, you must register for an account. You are responsible for maintaining the confidentiality of your login credentials and for all activity that occurs under your account. You must notify us immediately if you suspect any unauthorised use of your account.
        </p>
        <p style={paraStyle}>
          You agree to provide accurate and complete information when creating an account and to keep this information up to date.
        </p>

        <h2 style={headingStyle}>4. Services</h2>
        <p style={paraStyle}>
          Dwellinger provides a platform that connects homeowners with contractors and provides tools including AI-powered estimating, lead generation, planning intelligence and CRM features. We do not guarantee that any particular contractor will be available or suitable for your project. All construction contracts are between the homeowner and the contractor directly.
        </p>
        <p style={paraStyle}>
          Where Dwellinger or RCB Design &amp; Build is engaged directly as a principal contractor, separate contractual terms will apply as set out in your project agreement.
        </p>

        <h2 style={headingStyle}>5. Payment</h2>
        <p style={paraStyle}>
          Platform subscriptions are billed monthly or annually in advance. All prices are in GBP and inclusive of VAT where applicable. Payments are processed via Stripe. Subscriptions renew automatically unless cancelled before the renewal date.
        </p>
        <p style={paraStyle}>
          We offer a 14-day free trial on all plans. No charge is made during the trial period. If you cancel before the trial ends, you will not be charged.
        </p>

        <h2 style={headingStyle}>6. Contractor Listings</h2>
        <p style={paraStyle}>
          Contractors listed on the Dwellinger platform must agree to our contractor terms of service. Builder Score ratings are based on verified data including completed projects, reviews and accreditation checks. We reserve the right to remove or suspend any listing that does not meet our quality standards.
        </p>
        <p style={paraStyle}>
          Dwellinger does not endorse any individual contractor and accepts no liability for the quality of work carried out by contractors found through the platform.
        </p>

        <h2 style={headingStyle}>7. Intellectual Property</h2>
        <p style={paraStyle}>
          The Dwellinger name, logo, Builder Score trademark, platform design, and all content on the website are owned by or licensed to RCB Design &amp; Build. You may not reproduce, distribute or create derivative works from any content without our express written permission.
        </p>

        <h2 style={headingStyle}>8. Limitation of Liability</h2>
        <p style={paraStyle}>
          To the fullest extent permitted by law, Dwellinger and RCB Design &amp; Build shall not be liable for any indirect, incidental, special, consequential or punitive damages arising out of or in connection with your use of the Services. Our total liability to you in connection with the Services shall not exceed the amount paid by you for the Services in the 12 months preceding the claim.
        </p>
        <p style={paraStyle}>
          Nothing in these Terms limits or excludes liability for death or personal injury caused by negligence, fraud or any other matter that cannot be excluded or limited by English law.
        </p>

        <h2 style={headingStyle}>9. Governing Law</h2>
        <p style={paraStyle}>
          These Terms of Service and any dispute arising out of or in connection with them shall be governed by and construed in accordance with the laws of England and Wales. The courts of England and Wales shall have exclusive jurisdiction to settle any dispute.
        </p>

        <h2 style={headingStyle}>Contact Us</h2>
        <p style={paraStyle}>
          For any queries about these Terms, contact us at:<br />
          <strong>Dwellinger / RCB Design &amp; Build</strong><br />
          347 Barking Road, London E13 8EE<br />
          Email: info@dwellinger.co.uk
        </p>
      </article>
    </div>
  )
}
