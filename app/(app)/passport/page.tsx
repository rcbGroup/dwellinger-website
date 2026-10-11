'use client'

import { useState, useEffect } from 'react'
import type { ElementType } from 'react'
import Link from 'next/link'
import {
  Home, FileText, Users, Calendar, CheckSquare, CreditCard, Package,
  ArrowRight, Plus, Folder, Clock, AlertCircle, TrendingUp, ChevronRight, Loader2,
} from 'lucide-react'
import { ReadinessScore } from '@/components/marketing/ReadinessScore'
import { supabase } from '@/lib/supabase/client'

/* ─── Types ─── */
interface Project {
  id: string
  user_id: string
  name: string
  type: string
  address: string
  postcode?: string
  description?: string
  status: string
  readiness: number
  budget_estimate?: string
  docs_count: number
  team_count: number
  open_decisions: number
  created_at: string
}

/* ─── Readiness items ─── */
const buildReadinessItems = (p: Project) => [
  { label: 'Project type defined',        done: !!p.type },
  { label: 'Property address confirmed',  done: !!p.address },
  { label: 'Budget range set',            done: !!p.budget_estimate },
  { label: 'Planning drawings uploaded',  done: p.docs_count > 0 },
  { label: 'Structural engineer appointed', done: p.team_count > 1 },
  { label: 'Contractor shortlist created', done: false },
  { label: 'Planning permission obtained', done: p.status === 'approved' || p.status === 'ready' },
]

const ACTIVITY = [
  { icon: FileText, text: 'Project passport created', time: 'Just now' },
  { icon: AlertCircle, text: 'Complete your project brief to improve readiness', time: '' },
]

const TABS = [
  { id: 'overview',   label: 'Overview',   icon: Home },
  { id: 'scope',      label: 'Scope',      icon: FileText },
  { id: 'documents',  label: 'Documents',  icon: Folder },
  { id: 'team',       label: 'Team',       icon: Users },
  { id: 'programme',  label: 'Programme',  icon: Calendar },
  { id: 'decisions',  label: 'Decisions',  icon: CheckSquare },
  { id: 'payments',   label: 'Payments',   icon: CreditCard },
  { id: 'handover',   label: 'Handover',   icon: Package },
]

const TAB_DESCRIPTIONS: Record<string, { icon: ElementType; desc: string }> = {
  scope:      { icon: FileText,     desc: 'Your full scope of works — trades, specifications, exclusions, and client-supplied items — will appear here once generated.' },
  documents:  { icon: Folder,       desc: 'Upload and organise your planning drawings, structural reports, contracts, warranties, and project correspondence.' },
  team:       { icon: Users,        desc: 'Your architect, structural engineer, principal contractor, and other professionals will be listed here with their contact details and roles.' },
  programme:  { icon: Calendar,     desc: 'A Gantt-style programme showing key milestones from planning to practical completion.' },
  decisions:  { icon: CheckSquare,  desc: 'Track open decisions — tile selections, fixture choices, material specs — with a decision log for each.' },
  payments:   { icon: CreditCard,   desc: 'Your payment schedule, valuation dates, and payment certificates will be tracked here.' },
  handover:   { icon: Package,      desc: 'At practical completion, your O&M manuals, warranties, Building Control sign-off, and snagging list will live here.' },
}

const STATUS_LABELS: Record<string, string> = {
  idea: 'Idea Stage',
  drawings: 'Drawings Stage',
  approved: 'Planning Approved',
  ready: 'Ready to Build',
}

export default function PassportPage() {
  const [activeTab, setActiveTab]     = useState('overview')
  const [isLoading, setIsLoading]     = useState(true)
  const [project, setProject]         = useState<Project | null>(null)

  useEffect(() => {
    async function loadProject() {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) { setIsLoading(false); return }

      const { data } = await supabase
        .from('projects')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })
        .limit(1)
        .maybeSingle()

      if (data) setProject(data as Project)
      setIsLoading(false)
    }
    loadProject()
  }, [])

  /* ─── Loading ─── */
  if (isLoading) {
    return (
      <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <Loader2 style={{ color: 'var(--amber)', margin: '0 auto 1rem' }} className="w-8 h-8 animate-spin" />
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.82rem' }}>Loading your project…</p>
        </div>
      </div>
    )
  }

  /* ─── Empty state ─── */
  if (!project) {
    return (
      <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
        <div style={{ textAlign: 'center', maxWidth: 420 }}>
          <Folder style={{ color: 'var(--color-text-muted)', margin: '0 auto 1rem' }} className="w-12 h-12" />
          <h1 className="font-display" style={{ color: 'var(--color-text)', fontSize: '1.5rem', marginBottom: 8 }}>No project yet</h1>
          <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: 20 }}>
            Your Project Passport is your single source of truth — from first idea to handover keys. Create your first project to get started.
          </p>
          <Link href="/passport/new" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--amber)', color: '#fff', fontWeight: 700, padding: '12px 24px', borderRadius: 8, textDecoration: 'none' }}>
            <Plus className="w-4 h-4" /> Create first project
          </Link>
        </div>
      </div>
    )
  }

  const readinessItems = buildReadinessItems(project)
  const statusLabel    = STATUS_LABELS[project.status] ?? project.status

  return (
    <div style={{ backgroundColor: 'var(--color-bg)', minHeight: '100vh' }}>
      {/* Breadcrumb */}
      <div style={{ borderBottom: '1px solid var(--color-border)', background: 'var(--color-bg-surface)', padding: '10px 0' }}>
        <div className="container mx-auto" style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.8rem' }}>
          <Link href="/dashboard" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>Dashboard</Link>
          <ChevronRight style={{ color: 'var(--color-text-muted)' }} className="w-3 h-3" />
          <Link href="/passport" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>Projects</Link>
          <ChevronRight style={{ color: 'var(--color-text-muted)' }} className="w-3 h-3" />
          <span style={{ color: 'var(--color-text)' }}>{project.name}</span>
        </div>
      </div>

      {/* Project header */}
      <div style={{ background: 'var(--color-bg-surface)', borderBottom: '1px solid var(--color-border)', padding: '1.25rem 0' }}>
        <div className="container mx-auto" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
              <h1 className="font-display" style={{ fontSize: '1.5rem', color: 'var(--color-text)', margin: 0 }}>{project.name}</h1>
              <span style={{ background: 'rgba(196,119,59,0.15)', color: 'var(--amber)', fontSize: '0.72rem', fontWeight: 700, padding: '2px 8px', borderRadius: 20, border: '1px solid var(--amber-border)' }}>
                {statusLabel}
              </span>
            </div>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.82rem', margin: 0 }}>{project.address}</p>
          </div>
          <Link href="/passport/new" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'var(--color-bg-raised)', color: 'var(--color-text-secondary)', fontWeight: 600, padding: '8px 14px', borderRadius: 8, textDecoration: 'none', fontSize: '0.82rem', border: '1px solid var(--color-border)' }}>
            <Plus className="w-3.5 h-3.5" /> New project
          </Link>
        </div>
      </div>

      {/* Tab bar */}
      <div style={{ borderBottom: '1px solid var(--color-border)', background: 'var(--color-bg-surface)', overflowX: 'auto' }}>
        <div className="container mx-auto" style={{ display: 'flex' }}>
          {TABS.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              style={{
                display: 'flex', alignItems: 'center', gap: 6, padding: '12px 16px', border: 'none', cursor: 'pointer',
                background: 'transparent', whiteSpace: 'nowrap', fontSize: '0.82rem', fontWeight: 600,
                color: activeTab === id ? 'var(--amber)' : 'var(--color-text-muted)',
                borderBottom: activeTab === id ? '2px solid var(--amber)' : '2px solid transparent',
                transition: 'color 0.15s',
              }}
            >
              <Icon className="w-3.5 h-3.5" /> {label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab content */}
      <div className="container mx-auto" style={{ padding: '1.5rem 0' }}>

        {activeTab === 'overview' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>

            {/* Readiness */}
            <div className="card" style={{ padding: '1.25rem' }}>
              <h2 className="font-display" style={{ fontSize: '0.95rem', color: 'var(--color-text)', marginBottom: '1rem' }}>Project Readiness</h2>
              <ReadinessScore
                score={project.readiness}
                items={readinessItems}
                ctaLabel="Complete checklist"
                ctaHref="/tools/project-readiness"
                compact
              />
            </div>

            {/* Quick stats */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                {[
                  { label: 'Documents',     value: project.docs_count,      icon: FileText },
                  { label: 'Team members',  value: project.team_count,      icon: Users },
                  { label: 'Open decisions',value: project.open_decisions,  icon: CheckSquare },
                  { label: 'Budget',        value: project.budget_estimate ?? 'TBC', icon: TrendingUp },
                ].map(({ label, value, icon: Icon }) => (
                  <div key={label} className="card" style={{ padding: '0.875rem' }}>
                    <Icon style={{ color: 'var(--color-text-muted)' }} className="w-4 h-4 mb-1.5" />
                    <p style={{ color: 'var(--color-text)', fontWeight: 700, fontSize: '0.95rem', margin: '0 0 2px' }}>{value}</p>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.72rem', margin: 0 }}>{label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Next action */}
            <div style={{ gridColumn: '1 / -1' }}>
              <div style={{ background: 'var(--amber-subtle)', border: '1px solid var(--amber-border)', borderRadius: 10, padding: '1rem 1.25rem', display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
                <AlertCircle style={{ color: 'var(--amber)', flexShrink: 0 }} className="w-5 h-5" />
                <div style={{ flex: 1 }}>
                  <p style={{ color: 'var(--color-text)', fontWeight: 600, fontSize: '0.9rem', margin: '0 0 2px' }}>Next action</p>
                  <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.82rem', margin: 0 }}>
                    Upload your planning drawings to improve Readiness to 45%
                  </p>
                </div>
                <button onClick={() => setActiveTab('documents')} style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'var(--amber)', color: '#fff', fontWeight: 700, padding: '8px 14px', borderRadius: 8, border: 'none', cursor: 'pointer', fontSize: '0.82rem', flexShrink: 0 }}>
                  Upload now <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Recent activity */}
            <div style={{ gridColumn: '1 / -1', padding: '1.25rem' }} className="card">
              <h2 className="font-display" style={{ fontSize: '0.95rem', color: 'var(--color-text)', marginBottom: '1rem' }}>Recent activity</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {ACTIVITY.map(({ icon: Icon, text, time }, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{ width: 32, height: 32, borderRadius: 8, background: 'var(--color-bg-raised)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Icon style={{ color: 'var(--color-text-muted)' }} className="w-4 h-4" />
                    </div>
                    <div style={{ flex: 1 }}>
                      <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.82rem', margin: 0 }}>{text}</p>
                    </div>
                    {time && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                        <Clock style={{ color: 'var(--color-text-muted)' }} className="w-3 h-3" />
                        <span style={{ color: 'var(--color-text-muted)', fontSize: '0.72rem' }}>{time}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab !== 'overview' && TAB_DESCRIPTIONS[activeTab] && (
          <div style={{ maxWidth: 500, margin: '4rem auto', textAlign: 'center' }}>
            {(() => { const { icon: Icon, desc } = TAB_DESCRIPTIONS[activeTab]; return (
              <>
                <Icon style={{ color: 'var(--color-text-muted)', margin: '0 auto 1rem' }} className="w-10 h-10" />
                <h2 className="font-display" style={{ color: 'var(--color-text)', fontSize: '1.25rem', marginBottom: 8 }}>
                  {TABS.find((t) => t.id === activeTab)?.label} coming soon
                </h2>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>{desc}</p>
              </>
            )})()}
          </div>
        )}

      </div>
    </div>
  )
}
