'use client'

import type { ElementType } from 'react'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { supabase } from '@/lib/supabase/client'
import {
  User, Settings, ChevronRight, TrendingUp, FileText, Search,
  BarChart3, Home, Star, Calculator, Clipboard, Map, Building2,
  HardHat, DollarSign, PieChart, Plus,
} from 'lucide-react'
import AppNav from '@/components/ui/AppNav'
import type { User as SupabaseUser } from '@supabase/supabase-js'

type Project = {
  id: string
  name: string
  type: string
  address: string
  postcode: string | null
  description: string | null
  status: string
  readiness: number
  budget_estimate: string | null
  docs_count: number
  created_at: string
}

const ROLE_LINKS: Record<string, Array<{ icon: ElementType; label: string; href: string; desc: string }>> = {
  homeowner: [
    { icon: Home, label: 'My Project', href: '/passport', desc: 'Project Passport' },
    { icon: FileText, label: 'Scope Builder', href: '/scope-builder', desc: 'Build scope of works' },
    { icon: Search, label: 'Find Contractors', href: '/contractors', desc: 'Browse verified builders' },
    { icon: Clipboard, label: 'Messages', href: '/messages', desc: 'Contractor conversations' },
    { icon: TrendingUp, label: 'Project Readiness', href: '/tools/project-readiness', desc: "See what's ready to go" },
    { icon: Calculator, label: 'Cost Calculator', href: '/tools/extension-cost-calculator', desc: 'Estimate your build' },
    { icon: Map, label: 'Planning Data', href: '/tools/planning', desc: 'What gets approved nearby' },
  ],
  contractor: [
    { icon: Star, label: 'Builder Score™', href: '/builder-score', desc: 'Your trust rating' },
    { icon: Clipboard, label: 'Messages', href: '/messages', desc: 'Client conversations' },
    { icon: FileText, label: 'Scope Builder', href: '/scope-builder', desc: 'Structured project scope' },
    { icon: Clipboard, label: 'Post a Job', href: '/post-a-job', desc: 'Share an opportunity' },
    { icon: BarChart3, label: 'Quote Comparison', href: '/tools/quote-comparison', desc: 'Compare bids' },
  ],
  investor: [
    { icon: Building2, label: 'Dev Appraisal', href: '/tools/development-appraisal', desc: 'Full stack analysis' },
    { icon: DollarSign, label: 'ROI Calculator', href: '/tools/roi-calculator', desc: 'Return on investment' },
    { icon: HardHat, label: 'HMO Calculator', href: '/tools/hmo-calculator', desc: 'HMO feasibility' },
    { icon: Map, label: 'Planning Intel', href: '/tools/planning', desc: 'Approval rate data' },
  ],
  professional: [
    { icon: Home, label: 'My Project', href: '/passport', desc: 'Project Passport' },
    { icon: FileText, label: 'Scope Builder', href: '/scope-builder', desc: 'Define project scope' },
    { icon: Clipboard, label: 'Messages', href: '/messages', desc: 'Client conversations' },
    { icon: Search, label: 'Find Contractors', href: '/contractors', desc: 'Vetted procurement' },
    { icon: PieChart, label: 'Quote Comparison', href: '/tools/quote-comparison', desc: 'Tender analysis' },
    { icon: Map, label: 'Planning Data', href: '/tools/planning', desc: 'Application intelligence' },
  ],
}

const ROLE_LABELS: Record<string, string> = {
  homeowner: 'Homeowner',
  contractor: 'Contractor',
  investor: 'Investor',
  professional: 'Property Professional',
}

const STATUS_LABELS: Record<string, string> = {
  idea: 'Early planning',
  drawings: 'Drawings stage',
  approved: 'Planning approved',
  ready: 'Build ready',
}

function buildChecklist(p: Project) {
  return [
    { label: 'Project type defined', done: !!p.type },
    { label: 'Address confirmed', done: !!p.address },
    { label: 'Budget range set', done: !!p.budget_estimate },
    { label: 'Description added', done: (p.description?.length ?? 0) >= 20 },
    { label: 'Planning status known', done: p.status !== 'idea' },
  ]
}

function ReadinessRing({ score }: { score: number }) {
  const circumference = 2 * Math.PI * 26
  const offset = circumference - (score / 100) * circumference
  const colour = score >= 70 ? '#10B981' : score >= 40 ? '#C4773B' : '#71717A'
  return (
    <div className="relative w-16 h-16 flex-shrink-0">
      <svg viewBox="0 0 64 64" className="w-16 h-16 -rotate-90">
        <circle cx="32" cy="32" r="26" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="8" />
        <circle cx="32" cy="32" r="26" fill="none" stroke={colour} strokeWidth="8"
          strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round" />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-bold text-sm" style={{ color: colour }}>{score}%</span>
      </div>
    </div>
  )
}

function RolePanel({ role, project }: { role: string; project: Project | null }) {
  if (role === 'contractor') {
    return (
      <div className="card p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-display text-base text-white">Builder Score™</h2>
          <Link href="/builder-score" className="text-amber text-xs hover:underline">View details</Link>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative w-16 h-16 flex-shrink-0">
            <svg viewBox="0 0 64 64" className="w-16 h-16 -rotate-90">
              <circle cx="32" cy="32" r="26" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="8" />
              <circle cx="32" cy="32" r="26" fill="none" stroke="#C4773B" strokeWidth="8" strokeDasharray="163" strokeDashoffset="50" strokeLinecap="round" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-amber font-bold text-base">—</span>
            </div>
          </div>
          <div>
            <p className="text-white font-semibold mb-0.5">Score pending</p>
            <p className="text-text-muted text-xs leading-relaxed">Complete your profile and add at least one verified review to generate your Builder Score™.</p>
          </div>
        </div>
      </div>
    )
  }
  if (role === 'investor') {
    return (
      <div className="card p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-display text-base text-white">Intelligence tools</h2>
          <Link href="/tools/development-appraisal" className="text-amber text-xs hover:underline">Open appraisal</Link>
        </div>
        <div className="grid grid-cols-3 gap-3 text-center">
          {[{ label: 'Appraisals run', value: '0' }, { label: 'Saved deals', value: '0' }, { label: 'Planning searches', value: '0' }].map((s) => (
            <div key={s.label} className="bg-white/5 rounded-lg p-3">
              <p className="text-white font-semibold">{s.value}</p>
              <p className="text-text-muted text-xs mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }
  if (role === 'homeowner' || role === 'professional') {
    if (!project) {
      return (
        <div className="card p-6 mb-6 border-dashed" style={{ borderColor: 'rgba(196,119,59,0.4)' }}>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(196,119,59,0.1)', border: '1px solid rgba(196,119,59,0.3)' }}>
              <Plus className="w-6 h-6 text-amber" />
            </div>
            <div className="flex-1">
              <p className="text-white font-semibold mb-0.5">No project yet</p>
              <p className="text-text-muted text-xs leading-relaxed mb-3">Create your Project Passport to track readiness, manage documents, and get matched with the right contractors.</p>
              <Link href="/passport/new" className="inline-flex items-center gap-2 text-xs font-semibold text-white px-4 py-2 rounded-lg" style={{ background: '#C4773B' }}>
                <Plus className="w-3.5 h-3.5" /> Create your first project
              </Link>
            </div>
          </div>
        </div>
      )
    }
    const checklist = buildChecklist(project)
    const statusLabel = STATUS_LABELS[project.status] ?? project.status
    return (
      <div className="card p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="font-display text-base text-white">Project Readiness</h2>
            <p className="text-text-muted text-xs mt-0.5">{project.name}</p>
          </div>
          <Link href="/tools/project-readiness" className="text-amber text-xs hover:underline">Complete checklist</Link>
        </div>
        <div className="flex items-center gap-4 mb-4">
          <ReadinessRing score={project.readiness} />
          <div>
            <p className="text-white font-semibold mb-0.5">{statusLabel}</p>
            <p className="text-text-muted text-xs leading-relaxed">Keep filling out your project details to improve your readiness score and attract better-matched contractors.</p>
          </div>
        </div>
        <div className="space-y-2">
          {checklist.map((item) => (
            <div key={item.label} className="flex items-center gap-2 text-xs">
              <div className={`w-3.5 h-3.5 rounded-full flex-shrink-0 ${item.done ? 'bg-green-500' : 'bg-white/10 border border-white/20'}`} />
              <span className={item.done ? 'text-text-secondary' : 'text-text-muted'}>{item.label}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
          <Link href="/passport" className="text-amber text-xs font-semibold hover:underline">View Project Passport →</Link>
          <Link href="/passport/new" className="text-text-muted text-xs hover:text-white">+ Add another project</Link>
        </div>
      </div>
    )
  }
  return (
    <div className="card p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-display text-base text-white">Professional toolkit</h2>
        <Link href="/scope-builder" className="text-amber text-xs hover:underline">Open scope builder</Link>
      </div>
      <p className="text-text-muted text-sm leading-relaxed">Access contractor procurement, scope building, quote comparison, and planning intelligence — all in one platform.</p>
    </div>
  )
}

export default function DashboardPage() {
  const router = useRouter()
  const [user, setUser] = useState<SupabaseUser | null>(null)
  const [project, setProject] = useState<Project | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function checkAuth() {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session) { router.replace('/login'); return }
      setUser(session.user)
      const role = session.user.user_metadata?.role ?? 'homeowner'
      if (role === 'homeowner' || role === 'professional') {
        try {
          const { data } = await supabase
            .from('projects')
            .select('*')
            .eq('user_id', session.user.id)
            .order('created_at', { ascending: false })
            .limit(1)
            .maybeSingle()
          if (data) setProject(data as Project)
        } catch {}
      }
      setLoading(false)
    }
    checkAuth()
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) router.replace('/login')
      else { setUser(session.user); setLoading(false) }
    })
    return () => subscription.unsubscribe()
  }, [router])

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

  const role: string = user?.user_metadata?.role ?? 'homeowner'
  const quickLinks = ROLE_LINKS[role] ?? ROLE_LINKS.homeowner
  const roleLabel = ROLE_LABELS[role] ?? role
  const displayName = user?.user_metadata?.first_name
    ? `${user.user_metadata.first_name} ${user.user_metadata.last_name ?? ''}`.trim()
    : user?.email?.split('@')[0] ?? 'there'
  const initials = user?.user_metadata?.first_name
    ? `${user.user_metadata.first_name[0]}${user.user_metadata.last_name?.[0] ?? ''}`.toUpperCase()
    : user?.email?.[0].toUpperCase() ?? '?'

  return (
    <div className="min-h-screen bg-bg">
      <AppNav />
      <main className="container mx-auto px-4 py-10 max-w-4xl">
        <div className="mb-8">
          <h1 className="font-display text-3xl text-white mb-1">Welcome back, <span style={{ color: '#C4773B' }}>{displayName}</span></h1>
          <div className="flex items-center gap-2">
            <p className="text-text-muted text-sm">Here&apos;s your Dwellinger overview.</p>
            {user?.user_metadata?.role && <span className="text-xs text-amber bg-amber-subtle border border-amber-border rounded-full px-2.5 py-0.5 capitalize">{roleLabel}</span>}
          </div>
        </div>
        <RolePanel role={role} project={project} />
        <h2 className="font-display text-lg text-white mb-3">Quick access</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {quickLinks.map((link) => (
            <Link key={link.href} href={link.href} className="card p-4 hover:border-amber/40 transition-colors group block">
              <link.icon className="w-5 h-5 text-amber mb-2" />
              <p className="text-white text-sm font-semibold mb-0.5 group-hover:text-amber transition-colors">{link.label}</p>
              <p className="text-text-muted text-xs">{link.desc}</p>
            </Link>
          ))}
        </div>
        <h2 className="font-display text-lg text-white mb-3">Account</h2>
        <div className="card p-6 mb-4">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold text-white flex-shrink-0" style={{ backgroundColor: '#C4773B' }}>{initials}</div>
            <div>
              <p className="text-white font-semibold">{displayName}</p>
              <p className="text-text-muted text-sm">{user?.email}</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3 text-center">
            {[{ label: 'Account status', value: 'Active' }, { label: 'Plan', value: '14-day trial' }, { label: 'Member since', value: new Date(user?.created_at ?? '').toLocaleDateString('en-GB', { month: 'short', year: 'numeric' }) }].map((stat) => (
              <div key={stat.label} className="bg-white/5 rounded-lg p-3">
                <p className="text-white font-semibold text-sm">{stat.value}</p>
                <p className="text-text-muted text-xs mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="card divide-y divide-border mb-6">
          {[{ icon: User, label: 'Profile settings', desc: 'Update your name, company and contact details', href: '/settings' }, { icon: Settings, label: 'Notifications', desc: 'Manage email and alert preferences', href: '#' }].map((item) => (
            <Link key={item.label} href={item.href} className="flex items-center gap-4 p-4 hover:bg-white/5 transition-colors group">
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
        <div className="rounded-xl p-6 border" style={{ borderColor: 'rgba(196,119,59,0.3)', background: 'rgba(196,119,59,0.06)' }}>
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div>
              <p className="text-white font-semibold mb-0.5">Upgrade to Professional</p>
              <p className="text-text-muted text-sm">Unlock unlimited contractor access, AI-powered quotes, and Builder Score™ analytics.</p>
            </div>
            <Link href="/platform/pricing" className="btn-primary px-5 py-2.5 text-sm whitespace-nowrap flex-shrink-0">View plans</Link>
          </div>
        </div>
      </main>
    </div>
  )
}
