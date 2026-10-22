'use client'

import { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'
import { supabase } from '@/lib/supabase/client'
import { LogOut, LayoutDashboard, Home, FileText, Bookmark, MessageSquare, Users, Settings, Menu, X, Radar } from 'lucide-react'
import type { User } from '@supabase/supabase-js'

const NAV_LINKS = [
  { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { label: 'My Project', href: '/passport', icon: Home },
  { label: 'Scope Builder', href: '/scope-builder', icon: FileText },
  { label: 'My Scopes', href: '/scopes', icon: Bookmark },
  { label: 'Messages', href: '/messages', icon: MessageSquare },
  { label: 'Contractors', href: '/contractors', icon: Users },
  { label: 'Gov Tenders', href: '/tenders', icon: Radar },
]

export default function AppNav() {
  const router = useRouter()
  const pathname = usePathname()
  const [user, setUser] = useState<User | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [signingOut, setSigningOut] = useState(false)

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => setUser(user))
  }, [])

  async function handleSignOut() {
    setSigningOut(true)
    try {
      await fetch('/api/auth/signout', { method: 'POST' })
      await supabase.auth.signOut()
    } finally {
      router.replace('/login')
    }
  }

  const initials = user?.user_metadata?.first_name
    ? `${user.user_metadata.first_name[0]}${user.user_metadata.last_name?.[0] ?? ''}`.toUpperCase()
    : user?.email?.[0]?.toUpperCase() ?? '?'

  return (
    <header
      className="border-b border-border sticky top-0 z-50 backdrop-blur-md"
      style={{ background: 'rgba(10,10,12,0.9)' }}
    >
      <div className="container mx-auto h-14 flex items-center justify-between gap-4 px-4">
        {/* Logo */}
        <Link href="/dashboard" className="flex items-center gap-2 flex-shrink-0">
          <span className="font-display font-bold text-white text-lg">
            Dwell<span style={{ color: '#C4773B' }}>inger</span>
          </span>
        </Link>

        {/* Desktop nav links */}
        <nav className="hidden lg:flex items-center gap-0.5 flex-1 mx-6">
          {NAV_LINKS.map((link) => {
            const active =
              pathname === link.href ||
              (link.href !== '/dashboard' && pathname.startsWith(link.href + '/'))
            return (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm transition-colors"
                style={
                  active
                    ? { color: '#C4773B', background: 'rgba(196,119,59,0.12)', fontWeight: 600 }
                    : { color: 'var(--color-text-muted)' }
                }
              >
                <link.icon className="w-3.5 h-3.5" />
                {link.label}
              </Link>
            )
          })}
        </nav>

        {/* Right side: settings icon + avatar + sign out */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <Link
            href="/settings"
            className="hidden lg:flex p-1.5 rounded transition-colors"
            style={{ color: 'var(--color-text-muted)' }}
            title="Settings"
          >
            <Settings className="w-4 h-4" />
          </Link>
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white cursor-default flex-shrink-0"
            style={{ backgroundColor: '#C4773B' }}
            title={user?.email ?? ''}
          >
            {initials}
          </div>
          <button
            onClick={handleSignOut}
            disabled={signingOut}
            className="hidden lg:flex items-center gap-1.5 text-xs transition-colors"
            style={{ color: 'var(--color-text-muted)' }}
            title="Sign out"
          >
            <LogOut className="w-4 h-4" />
            <span>{signingOut ? 'Signing out…' : 'Sign out'}</span>
          </button>
          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden transition-colors"
            style={{ color: 'var(--color-text-muted)' }}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown nav */}
      {mobileOpen && (
        <div
          className="lg:hidden border-t border-border"
          style={{ background: 'var(--color-bg)' }}
        >
          <nav className="container mx-auto px-4 py-3 flex flex-col gap-1">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm transition-colors"
                  style={
                    active
                      ? { color: '#C4773B', background: 'rgba(196,119,59,0.1)', fontWeight: 600 }
                      : { color: 'var(--color-text-muted)' }
                  }
                >
                  <link.icon className="w-4 h-4" />
                  {link.label}
                </Link>
              )
            })}
            <Link
              href="/settings"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm transition-colors"
              style={{ color: 'var(--color-text-muted)' }}
            >
              <Settings className="w-4 h-4" />
              Settings
            </Link>
            <button
              onClick={handleSignOut}
              disabled={signingOut}
              className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm transition-colors w-full text-left"
              style={{ color: 'var(--color-text-muted)' }}
            >
              <LogOut className="w-4 h-4" />
              {signingOut ? 'Signing out…' : 'Sign out'}
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}
