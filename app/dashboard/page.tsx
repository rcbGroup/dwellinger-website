'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { supabase } from '@/lib/supabase/client'
import { LogOut, User, Settings, ChevronRight, TrendingUp, FileText, Search, BarChart3, Home } from 'lucide-react'
import type { User as SupabaseUser } from '@supabase/supabase-js'

const QUICK_LINKS = [
  { icon: Search, label: 'Find Contractors', href: '/search', desc: 'Browse verified builders' },
  { icon: FileText, label: 'Get a Quote', href: '/get-a-quote', desc: 'Request project pricing' },
  { icon: BarChart3, label: 'Extension Calculator', href: '/tools/extension-cost-calculator', desc: 'Estimate build costs' },
  { icon: TrendingUp, label: 'Planning Intelligence', href: '/tools/planning', desc: 'Check planning data' },
]

export default function DashboardPage() {
  const router = useRouter()
  const [user, setUser] = useState<SupabaseUser | null>(null)
  const [loading, setLoading] = useState(true)
  const [signingOut, setSigningOut] = useState(false)

  useEffect(() => {
    async function checkAuth() {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session) {
        router.replace('/login')
        return
      }
      setUser(session.user)
      setLoading(false)
    }
    checkAuth()

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) {
        router.replace('/login')
      } else {
        setUser(session.user)
        setLoading(false)
      }
    })

    return () => subscription.unsubscribe()
  }, [router])

  async function handleSignOut() {
    setSigningOut(true)
    await fetch('/api/auth/signout', { method: 'POST' })
    await supabase.auth.signOut()
    router.replace('/login')
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-bg flex items-center justify-center">
        <div className="text-center">
          <div className="w-10 h-10 border-2 border-amber border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-text-muted text-sm">Loading your dashboard…</p>
        </div>
      </div>
    )
  }

  const displayName = user?.user_metadata?.first_name
    ? `${user.user_metadata.first_name} ${user.user_metadata.last_name ?? ''}`.trim()
    : user?.email?.split('@')[0] ?? 'there'

  const initials = user?.user_metadata?.first_name
    ? `${user.user_metadata.first_name[0]}${user.user_metadata.last_name?.[0] ?? ''}`.toUpperCase()
    : user?.email?.[0].toUpperCase() ?? '?'

  return (
    <div className="min-h-screen bg-bg">
      {/* Top nav */}
      <header className="border-b border-border bg-bg/80 backdrop-blur-md sticky top-0 z-40">
        <div className="container mx-auto h-14 flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2">
            <Home className="w-4 h-4 text-text-muted" />
            <span className="font-display font-bold text-white text-lg">
              Dwell<span style={{ color: '#C4773B' }}>inger</span>
            </span>
          </Link>
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white"
              style={{ backgroundColor: '#C4773B' }}
            >
              {initials}
            </div>
            <span className="text-text-secondary text-sm hidden md:block">{user?.email}</span>
            <button
              onClick={handleSignOut}
              disabled={signingOut}
              className="flex items-center gap-1.5 text-text-muted hover:text-white text-xs transition-colors"
              title="Sign out"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden md:inline">{signingOut ? 'Signing out…' : 'Sign out'}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-4 py-10 max-w-4xl">

        {/* Welcome */}
        <div className="mb-10">
          <h1 className="font-display text-3xl text-white mb-1">
            Welcome back, <span style={{ color: '#C4773B' }}>{displayName}</span>
          </h1>
          <p className="text-text-muted text-sm">Here&apos;s your Dwellinger overview.</p>
        </div>

        {/* Account info card */}
        <div className="card p-6 mb-6">
          <div className="flex items-center gap-4 mb-5">
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold text-white flex-shrink-0"
              style={{ backgroundColor: '#C4773B' }}
            >
              {initials}
            </div>
            <div>
              <p className="text-white font-semibold">{displayName}</p>
              <p className="text-text-muted text-sm">{user?.email}</p>
              {user?.user_metadata?.role && (
                <span className="text-xs text-amber bg-amber-subtle border border-amber-border rounded-full px-2.5 py-0.5 mt-1 inline-block capitalize">
                  {user.user_metadata.role}
                </span>
              )}
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3 text-center">
            {[
              { label: 'Account status', value: 'Active' },
              { label: 'Plan', value: '14-day trial' },
              { label: 'Member since', value: new Date(user?.created_at ?? '').toLocaleDateString('en-GB', { month: 'short', year: 'numeric' }) },
            ].map((stat) => (
              <div key={stat.label} className="bg-white/5 rounded-lg p-3">
                <p className="text-white font-semibold text-sm">{stat.value}</p>
                <p className="text-text-muted text-xs mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <h2 className="font-display text-lg text-white mb-3">Quick access</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {QUICK_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="card p-4 hover:border-amber/40 transition-colors group block"
            >
              <link.icon className="w-5 h-5 text-amber mb-2" />
              <p className="text-white text-sm font-semibold mb-0.5 group-hover:text-amber transition-colors">{link.label}</p>
              <p className="text-text-muted text-xs">{link.desc}</p>
            </Link>
          ))}
        </div>

        {/* Profile & settings */}
        <h2 className="font-display text-lg text-white mb-3">Account</h2>
        <div className="card divide-y divide-border">
          {[
            { icon: User, label: 'Profile settings', desc: 'Update your name, company and contact details', href: '#' },
            { icon: Settings, label: 'Notifications', desc: 'Manage email and alert preferences', href: '#' },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center gap-4 p-4 hover:bg-white/5 transition-colors group"
            >
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                <item.icon className="w-4 h-4 text-text-secondary group-hover:text-amber transition-colors" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white text-sm font-medium">{item.label}</p>
                <p className="text-text-muted text-xs truncate">{item.desc}</p>
              </div>
              <ChevronRight className="w-4 h-4 text-text-muted flex-shrink-0" />
            </Link>
          ))}
        </div>

        {/* Upgrade nudge */}
        <div
          className="mt-6 rounded-xl p-6 border"
          style={{ borderColor: 'rgba(196,119,59,0.3)', background: 'rgba(196,119,59,0.06)' }}
        >
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div>
              <p className="text-white font-semibold mb-0.5">Upgrade to Professional</p>
              <p className="text-text-muted text-sm">Unlock unlimited contractor access, AI-powered quotes, and Builder Score™ analytics.</p>
            </div>
            <Link
              href="/platform/pricing"
              className="btn-primary px-5 py-2.5 text-sm whitespace-nowrap flex-shrink-0"
            >
              View plans
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
