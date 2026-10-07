import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Cookie policy for Dwellinger. Details on how we use essential, analytics and marketing cookies.',
}

const headingStyle = { color: '#1A2340', fontSize: '1.3rem', fontWeight: 700, marginTop: 40, marginBottom: 12 } as const
const paraStyle = { color: '#4A5568', lineHeight: 1.8, marginBottom: 16, fontSize: '0.95rem' } as const

const cookieTypes = [
  {
    type: 'Essential',
    purpose: 'Required for the website to function. Cannot be disabled.',
    examples: 'Session cookies, CSRF tokens, login state',
    duration: 'Session or up to 1 year',
    thirdParty: 'No',
  },
  {
    type: 'Analytics',
    purpose: 'Help us understand how visitors use our site so we can improve it.',
    examples: 'Google Analytics (_ga, _gid, _gat)',
    duration: 'Up to 2 years',
    thirdParty: 'Yes - Google',
  },
  {
    type: 'Marketing',
    purpose: 'Used to deliver relevant advertising and track campaign performance.',
    examples: 'Meta Pixel, Google Ads conversion tracking',
    duration: 'Up to 90 days',
    thirdParty: 'Yes - Meta, Google',
  },
]

const thStyle = {
  textAlign: 'left' as const,
  padding: '12px 16px',
  backgroundColor: '#1A2340',
  color: '#fff',
  fontSize: '0.85rem',
  fontWeight: 700,
}

const tdStyle = {
  padding: '12px 16px',
  color: '#4A5568',
  fontSize: '0.875rem',
  borderBottom: '1px solid #EDE8DC',
  verticalAlign: 'top' as const,
}

export default function CookiesPage() {
  return (
    <div style={{ backgroundColor: '#FFFFFF' }}>
      <section style={{ backgroundColor: '#1A2340', padding: '60px 24px', textAlign: 'center' }}>
        <h1 style={{ color: '#fff', fontSize: '2rem', fontWeight: 800 }}>Cookie Policy</h1>
        <p style={{ color: '#c8c0b0', marginTop: 12 }}>Last updated: October 2026</p>
      </section>

      <article style={{ maxWidth: 900, margin: '0 auto', padding: '60px 24px 80px' }}>
        <h2 style={headingStyle}>What Are Cookies?</h2>
        <p style={paraStyle}>
          Cookies are small text files placed on your device when you visit a website. They are widely used to make websites work, or to work more efficiently, and to provide information to website owners.
        </p>

        <h2 style={headingStyle}>How We Use Cookies</h2>
        <p style={paraStyle}>
          Dwellinger uses cookies to ensure the platform functions correctly, to understand how it is used, and to deliver relevant marketing. We use Google Analytics to analyse traffic patterns and improve the user experience.
        </p>

        <h2 style={headingStyle}>Types of Cookies We Use</h2>
        <div style={{ overflowX: 'auto', marginBottom: 24 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', borderRadius: 8, overflow: 'hidden' }}>
            <thead>
              <tr>
                <th style={thStyle}>Type</th>
                <th style={thStyle}>Purpose</th>
                <th style={thStyle}>Examples</th>
                <th style={thStyle}>Duration</th>
                <th style={thStyle}>Third Party</th>
              </tr>
            </thead>
            <tbody>
              {cookieTypes.map((c, i) => (
                <tr key={c.type} style={{ backgroundColor: i % 2 === 0 ? '#fff' : '#F5F0E8' }}>
                  <td style={{ ...tdStyle, fontWeight: 600, color: '#1A2340' }}>{c.type}</td>
                  <td style={tdStyle}>{c.purpose}</td>
                  <td style={{ ...tdStyle, fontFamily: 'monospace', fontSize: '0.8rem' }}>{c.examples}</td>
                  <td style={tdStyle}>{c.duration}</td>
                  <td style={tdStyle}>{c.thirdParty}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={headingStyle}>Google Analytics</h2>
        <p style={paraStyle}>
          We use Google Analytics to understand how visitors interact with our website. Google Analytics uses cookies to collect information such as how often users visit the site, what pages they visit, and what other sites they visited prior to coming to ours. We use this information to improve our site.
        </p>
        <p style={paraStyle}>
          Google Analytics collects only the IP address assigned to you on the date you visit our site, not your name or other identifying information. We do not combine the information collected using Google Analytics with personally identifiable information. You can opt out of Google Analytics by visiting <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" style={{ color: '#C4773B' }}>Google Analytics Opt-out</a>.
        </p>

        <h2 style={headingStyle}>Managing Cookies</h2>
        <p style={paraStyle}>
          Most web browsers automatically accept cookies, but you can modify your browser settings to decline cookies if you prefer. However, disabling cookies may prevent some parts of our website from functioning correctly.
        </p>
        <p style={paraStyle}>
          To manage cookies in your browser, refer to the help documentation for your browser:
        </p>
        <ul style={{ color: '#4A5568', lineHeight: 2, paddingLeft: 24, marginBottom: 16 }}>
          <li>Chrome: Settings &gt; Privacy and Security &gt; Cookies and other site data</li>
          <li>Firefox: Options &gt; Privacy &amp; Security &gt; Cookies and Site Data</li>
          <li>Safari: Preferences &gt; Privacy &gt; Manage Website Data</li>
          <li>Edge: Settings &gt; Cookies and site permissions</li>
        </ul>

        <h2 style={headingStyle}>Changes to This Policy</h2>
        <p style={paraStyle}>
          We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated revision date.
        </p>

        <h2 style={headingStyle}>Contact Us</h2>
        <p style={paraStyle}>
          If you have questions about our use of cookies, contact us at:<br />
          <strong>Dwellinger / RCB Design &amp; Build</strong><br />
          347 Barking Road, London E13 8EE<br />
          Email: info@dwellinger.co.uk
        </p>
      </article>
    </div>
  )
}
