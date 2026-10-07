import type { Metadata } from 'next'
import Link from 'next/link'
import { Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sign in — Dwellinger',
  description: 'Sign in to your Dwellinger account with a magic link. No password required.',
}

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-bg flex flex-col items-center justify-center py-16">
      <div className="w-full max-w-sm px-4">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2">
            <span className="font-display font-bold text-white text-xl tracking-tight">Dwellinger</span>
            <span className="text-amber font-bold text-xl">.</span>
          </Link>
          <p className="text-text-muted text-sm mt-2">UK&apos;s property intelligence platform</p>
        </div>

        <div className="card p-8">
          <h1 className="font-display text-h3 text-white mb-1">Welcome back</h1>
          <p className="text-text-muted text-sm mb-6">Enter your email to receive a magic sign-in link.</p>

          <div className="bg-amber-subtle border border-amber-border rounded-lg p-4 mb-6">
            <div className="flex items-start gap-2.5">
              <Shield className="w-4 h-4 text-amber flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-amber text-xs font-bold mb-0.5">Passwordless sign in</p>
                <p className="text-text-muted text-xs leading-relaxed">
                  We&apos;ll send a secure one-time link to your inbox. Click it to sign in instantly.
                </p>
              </div>
            </div>
          </div>

          <form className="space-y-4">
            <div>
              <label className="text-xs font-semibold text-text-secondary block mb-1.5">Email address</label>
              <input
                type="email"
                placeholder="you@company.com"
                className="input"
                required
                autoComplete="email"
                autoFocus
              />
            </div>
            <button type="submit" className="btn-primary w-full py-3.5">
              Send magic link
            </button>
          </form>

          <p className="text-center text-text-muted text-xs mt-5">
            Don&apos;t have an account?{' '}
            <Link href="/register" className="text-amber hover:underline">Sign up free</Link>
          </p>
        </div>

        <p className="text-center text-text-muted text-xs mt-4">
          Having trouble?{' '}
          <a href="tel:+447359872594" className="text-amber hover:underline">Call +44 7359 872594</a>
          {' '}or{' '}
          <Link href="/contact" className="text-amber hover:underline">contact support</Link>
        </p>
      </div>
    </div>
  )
}
