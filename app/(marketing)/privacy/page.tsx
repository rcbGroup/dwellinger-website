import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Dwellinger',
  description: 'Privacy policy for Dwellinger and RCB Design & Build. UK GDPR compliant.',
}

const headingStyle = { color: '#1A2340', fontSize: '1.3rem', fontWeight: 700, marginTop: 40, marginBottom: 12 } as const
const paraStyle = { color: '#4A5568', lineHeight: 1.8, marginBottom: 16, fontSize: '0.95rem' } as const

export default function PrivacyPage() {
  return (
    <main style={{ backgroundColor: '#FFFFFF' }}>
      <section style={{ backgroundColor: '#1A2340', padding: '60px 24px', textAlign: 'center' }}>
        <h1 style={{ color: '#fff', fontSize: '2rem', fontWeight: 800 }}>Privacy Policy</h1>
        <p style={{ color: '#c8c0b0', marginTop: 12 }}>Last updated: October 2026</p>
      </section>

      <article style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px 80px' }}>
        <h2 style={headingStyle}>Who We Are</h2>
        <p style={paraStyle}>
          This privacy policy explains how Dwellinger, operated by RCB Design &amp; Build, collects, uses and protects your personal data. Our registered address is 347 Barking Road, London E13 8EE. You can contact us at info@dwellinger.co.uk.
        </p>

        <h2 style={headingStyle}>What Data We Collect</h2>
        <p style={paraStyle}>We may collect the following categories of personal data:</p>
        <ul style={{ color: '#4A5568', lineHeight: 1.9, paddingLeft: 24, marginBottom: 16 }}>
          <li>Identity data: name, username or similar identifier</li>
          <li>Contact data: email address, phone number, postal address</li>
          <li>Technical data: IP address, browser type, device identifiers, cookies</li>
          <li>Usage data: how you use our website and platform</li>
          <li>Profile data: your preferences, project requirements, feedback</li>
          <li>Transaction data: details about payments and services you have received</li>
          <li>Marketing data: your preferences for receiving marketing from us</li>
        </ul>

        <h2 style={headingStyle}>How We Use Your Data</h2>
        <p style={paraStyle}>We use your personal data to:</p>
        <ul style={{ color: '#4A5568', lineHeight: 1.9, paddingLeft: 24, marginBottom: 16 }}>
          <li>Create and manage your account on our platform</li>
          <li>Match homeowners with contractors</li>
          <li>Process payments and manage subscriptions</li>
          <li>Send service communications and notifications</li>
          <li>Send marketing communications where you have consented</li>
          <li>Improve our website and platform services</li>
          <li>Comply with legal obligations</li>
        </ul>

        <h2 style={headingStyle}>Legal Basis for Processing</h2>
        <p style={paraStyle}>We process your personal data on the following lawful bases:</p>
        <ul style={{ color: '#4A5568', lineHeight: 1.9, paddingLeft: 24, marginBottom: 16 }}>
          <li><strong>Contract:</strong> where processing is necessary to perform a contract with you</li>
          <li><strong>Legitimate interests:</strong> where we have a legitimate business interest that does not override your rights</li>
          <li><strong>Consent:</strong> where you have given explicit consent (e.g. marketing emails)</li>
          <li><strong>Legal obligation:</strong> where we must comply with a legal requirement</li>
        </ul>

        <h2 style={headingStyle}>Who We Share Your Data With</h2>
        <p style={paraStyle}>We may share your data with:</p>
        <ul style={{ color: '#4A5568', lineHeight: 1.9, paddingLeft: 24, marginBottom: 16 }}>
          <li>Contractors on our platform (limited contact details to facilitate your project)</li>
          <li>Payment processors (Stripe) for billing purposes</li>
          <li>Analytics providers (Google Analytics) to understand platform usage</li>
          <li>Email service providers for transactional and marketing emails</li>
          <li>Hosting and infrastructure providers (Vercel, AWS)</li>
          <li>Professional advisers such as accountants and lawyers where necessary</li>
          <li>Regulatory bodies and law enforcement where required by law</li>
        </ul>

        <h2 style={headingStyle}>How Long We Keep Your Data</h2>
        <p style={paraStyle}>
          We retain personal data only for as long as necessary for the purposes we collected it, including satisfying legal, accounting or reporting requirements. Account data is held for the duration of your account plus six years after closure. Enquiry data is held for two years if no account is created.
        </p>

        <h2 style={headingStyle}>Your Rights</h2>
        <p style={paraStyle}>Under UK GDPR you have the right to:</p>
        <ul style={{ color: '#4A5568', lineHeight: 1.9, paddingLeft: 24, marginBottom: 16 }}>
          <li><strong>Access:</strong> request a copy of the personal data we hold about you</li>
          <li><strong>Rectification:</strong> ask us to correct inaccurate or incomplete data</li>
          <li><strong>Erasure:</strong> ask us to delete your personal data in certain circumstances</li>
          <li><strong>Portability:</strong> receive your data in a machine-readable format</li>
          <li><strong>Restriction:</strong> ask us to pause processing of your data</li>
          <li><strong>Objection:</strong> object to processing based on legitimate interests or for direct marketing</li>
        </ul>
        <p style={paraStyle}>
          To exercise any of these rights, email us at info@dwellinger.co.uk. You also have the right to lodge a complaint with the Information Commissioner's Office (ICO) at ico.org.uk.
        </p>

        <h2 style={headingStyle}>Cookies</h2>
        <p style={paraStyle}>
          We use cookies and similar tracking technologies to enhance your experience on our platform. For full details, please read our <a href="/cookies" style={{ color: '#C4773B' }}>Cookie Policy</a>.
        </p>

        <h2 style={headingStyle}>Contact Us</h2>
        <p style={paraStyle}>
          For any privacy-related queries, please contact us at:<br />
          <strong>Dwellinger / RCB Design &amp; Build</strong><br />
          347 Barking Road, London E13 8EE<br />
          Email: info@dwellinger.co.uk
        </p>
      </article>
    </main>
  )
}
