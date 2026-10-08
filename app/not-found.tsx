import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404 — Page not found | Dwellinger',
}

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '40px 24px',
        backgroundColor: 'var(--color-bg)',
      }}
    >
      {/* Score badge 404 */}
      <div
        style={{
          width: 88,
          height: 88,
          marginBottom: 24,
          position: 'relative',
        }}
      >
        <svg width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="12" y="12" width="64" height="64" rx="10" transform="rotate(45 44 44)" fill="#C8773A" fillOpacity="0.15" />
          <rect x="12" y="12" width="64" height="64" rx="10" transform="rotate(45 44 44)" stroke="#C8773A" strokeWidth="1.5" />
          <text x="44" y="52" textAnchor="middle" fontFamily="Geist, Inter, system-ui, sans-serif" fontWeight="800" fontSize="26" fill="#C8773A">404</text>
        </svg>
      </div>

      <h1
        style={{
          fontFamily: 'Geist, Inter, system-ui, sans-serif',
          fontSize: '2rem',
          fontWeight: 700,
          color: 'var(--color-text)',
          margin: '0 0 12px',
          letterSpacing: '-0.02em',
        }}
      >
        Page not found
      </h1>

      <p
        style={{
          color: 'var(--color-text-secondary)',
          fontSize: '1rem',
          lineHeight: 1.6,
          maxWidth: 400,
          margin: '0 0 32px',
        }}
      >
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
        Let&apos;s get you back on track.
      </p>

      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link
          href="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            padding: '11px 24px',
            backgroundColor: '#C8773A',
            color: '#fff',
            borderRadius: 8,
            fontWeight: 700,
            fontSize: '0.9rem',
            textDecoration: 'none',
          }}
        >
          Back to home
        </Link>
        <Link
          href="/search"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            padding: '11px 24px',
            backgroundColor: 'var(--color-bg-raised)',
            color: 'var(--color-text-secondary)',
            border: '1px solid var(--color-border)',
            borderRadius: 8,
            fontWeight: 600,
            fontSize: '0.9rem',
            textDecoration: 'none',
          }}
        >
          Find a contractor
        </Link>
      </div>

      <div style={{ marginTop: 48, display: 'flex', gap: 24 }}>
        {[
          { label: 'Get an estimate', href: '/services/estimating' },
          { label: 'Builder Score™', href: '/builder-score' },
          { label: 'Contact', href: '/contact' },
        ].map(({ label, href }) => (
          <Link
            key={href}
            href={href}
            style={{
              color: 'var(--color-text-muted)',
              fontSize: '0.8rem',
              textDecoration: 'none',
            }}
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  )
}
