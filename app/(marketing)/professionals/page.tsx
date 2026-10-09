import Link from 'next/link'
import { ArrowRight, CheckCircle, BarChart3, Shield, Users, FileText, Search } from 'lucide-react'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  path: '/professionals',
  title: 'Dwellinger for Professionals — Architects, PMs & QS',
  description: 'Find verified contractors for your client projects. Dwellinger gives architects, project managers and quantity surveyors access to vetted builders with full compliance records.',
})

const features = [
  {
    icon: Search,
    title: 'Contractor procurement',
    desc: 'Search and shortlist verified contractors by Builder Score™, trade, location, and project type. Every contractor on Dwellinger is vetted, insured, and scored.',
  },
  {
    icon: BarChart3,
    title: 'Planning intelligence',
    desc: 'Live planning application data across the UK. See approval rates, decision timelines, and comparable schemes for any local authority — from permitted development to full planning.',
  },
  {
    icon: FileText,
    title: 'Estimating Studio',
    desc: 'Commission QS-reviewed cost plans from £95. Five tiers from outline ballpark to full pre-tender estimate — useful at every stage of a project.',
  },
  {
    icon: Shield,
    title: 'Compliance & CDM awareness',
    desc: 'Builder Score™ includes CDM compliance records. Understand each contractor\'s health and safety history before you appoint them.',
  },
  {
    icon: Users,
    title: 'Client-facing dashboards',
    desc: 'Share project progress, documents, and milestones with clients through a clean Dwellinger dashboard — no more email chains or shared Dropboxes.',
  },
  {
    icon: CheckCircle,
    title: 'Scope Builder',
    desc: 'Use the Dwellinger Scope Builder to produce a structured project brief. Share it directly with contractors to ensure every tender is like-for-like.',
  },
]

const useCases = [
  {
    role: 'Architects',
    points: [
      'Find and vet contractors for client projects',
      'Check planning approval rates for comparable schemes',
      'Share project briefs and scope documents on-platform',
      'Monitor contractor compliance and CDM records',
    ],
  },
  {
    role: 'Project Managers',
    points: [
      'Manage tender processes with verified contractor shortlists',
      'Track project milestones and documents in one dashboard',
      'Issue contracts and manage payment schedules on-platform',
      'Report project status to clients without leaving the platform',
    ],
  },
  {
    role: 'Quantity Surveyors',
    points: [
      'Access real UK project cost data for benchmarking',
      'Commission QS-reviewed estimates for client cost plans',
      'Use planning data to assess comparable scheme costs',
      'Build scope documents using the Dwellinger Scope Builder',
    ],
  },
  {
    role: 'Interior Designers',
    points: [
      'Find and appoint fit-out contractors with verified Builder Scores',
      'Share design briefs and spec documents on-platform',
      'Manage procurement of client-supplied materials alongside contractor works',
      'Access planning data for permitted development checks',
    ],
  },
]

export default function ProfessionalsPage() {
  return (
    <div>
      {/* Hero */}
      <section style={{ backgroundColor: '#0F1621', padding: '80px 24px 72px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 16px', borderRadius: 100, backgroundColor: 'rgba(196,119,59,0.12)', border: '1px solid rgba(196,119,59,0.25)', color: '#C4773B', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 24 }}>
            <Shield style={{ width: 14, height: 14 }} />
            For construction professionals
          </div>
          <h1 style={{ color: '#F5F0E8', fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3.25rem)', lineHeight: 1.15, marginBottom: 20 }}>
            Intelligence tools for architects,<br />
            <span style={{ color: '#C4773B' }}>PMs, and consultants</span>
          </h1>
          <p style={{ color: '#c8c0b0', fontSize: '1.1rem', lineHeight: 1.7, maxWidth: 620, margin: '0 auto 36px' }}>
            Dwellinger gives construction professionals the contractor procurement tools, planning
            intelligence, estimating data, and project management capabilities to manage any UK build
            — from first brief to final handover.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              href="/register"
              style={{ backgroundColor: '#C4773B', color: '#fff', padding: '14px 32px', borderRadius: 6, fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem', display: 'inline-flex', alignItems: 'center', gap: 8 }}
            >
              Get started free <ArrowRight style={{ width: 16, height: 16 }} />
            </Link>
            <Link
              href="/contact"
              style={{ border: '1px solid rgba(245,240,232,0.2)', color: '#F5F0E8', padding: '14px 24px', borderRadius: 6, fontWeight: 600, textDecoration: 'none', fontSize: '0.95rem' }}
            >
              Talk to the team
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ backgroundColor: '#0A0A0A', borderBottom: '1px solid rgba(255,255,255,0.07)', padding: '36px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 24, textAlign: 'center' }}>
          {[
            { value: 'Builder Score™', label: 'Contractor trust rating' },
            { value: '5 tiers', label: 'Estimating packages from £95' },
            { value: 'Live data', label: 'UK planning applications' },
            { value: '1,972', label: 'Knowledge articles' },
          ].map((s) => (
            <div key={s.label}>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#C4773B', marginBottom: 4 }}>{s.value}</div>
              <div style={{ color: '#c8c0b0', fontSize: '0.8rem' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section style={{ backgroundColor: '#111827', padding: '72px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <p style={{ color: '#C4773B', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12 }}>Platform capabilities</p>
            <h2 style={{ color: '#F5F0E8', fontWeight: 800, fontSize: 'clamp(1.4rem, 3vw, 2rem)', marginBottom: 16 }}>Built for how professionals work</h2>
            <p style={{ color: '#c8c0b0', maxWidth: 540, margin: '0 auto', lineHeight: 1.7, fontSize: '0.9rem' }}>
              Every tool on Dwellinger was designed around the real problems that construction professionals face on live projects.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
            {features.map((f) => (
              <div key={f.title} style={{ backgroundColor: '#0F1621', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 10, padding: '28px 24px' }}>
                <div style={{ width: 44, height: 44, borderRadius: 8, backgroundColor: 'rgba(196,119,59,0.1)', border: '1px solid rgba(196,119,59,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                  <f.icon style={{ width: 22, height: 22, color: '#C4773B' }} />
                </div>
                <h3 style={{ color: '#F5F0E8', fontWeight: 700, fontSize: '1rem', marginBottom: 10 }}>{f.title}</h3>
                <p style={{ color: '#c8c0b0', fontSize: '0.875rem', lineHeight: 1.7 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section style={{ backgroundColor: '#F5F0E8', padding: '72px 24px', borderTop: '1px solid #EDE8DC' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <p style={{ color: '#C4773B', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12 }}>By role</p>
            <h2 style={{ color: '#1A2340', fontWeight: 800, fontSize: 'clamp(1.4rem, 3vw, 2rem)', marginBottom: 16 }}>How different professionals use Dwellinger</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
            {useCases.map((uc) => (
              <div key={uc.role} style={{ backgroundColor: '#fff', border: '1px solid #EDE8DC', borderRadius: 10, padding: '28px 24px' }}>
                <h3 style={{ color: '#1A2340', fontWeight: 800, fontSize: '1.05rem', marginBottom: 16, paddingBottom: 12, borderBottom: '2px solid #C4773B', display: 'inline-block' }}>{uc.role}</h3>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10, marginTop: 4 }}>
                  {uc.points.map((p) => (
                    <li key={p} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                      <CheckCircle style={{ width: 14, height: 14, color: '#C4773B', flexShrink: 0, marginTop: 2 }} />
                      <span style={{ color: '#4A5568', fontSize: '0.85rem', lineHeight: 1.6 }}>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: '#C4773B', padding: '72px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <h2 style={{ color: '#fff', fontWeight: 800, fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', marginBottom: 16 }}>
            Start using Dwellinger for your next project
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1rem', marginBottom: 32, lineHeight: 1.6 }}>
            Free to get started. Full access to the platform — contractor search, planning intelligence, scope builder, and project readiness tools — from day one.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              href="/register"
              style={{ backgroundColor: '#fff', color: '#C4773B', padding: '14px 32px', borderRadius: 6, fontWeight: 800, textDecoration: 'none', fontSize: '1rem', display: 'inline-flex', alignItems: 'center', gap: 8 }}
            >
              Get started free <ArrowRight style={{ width: 16, height: 16 }} />
            </Link>
            <Link
              href="/contact"
              style={{ border: '2px solid rgba(255,255,255,0.4)', color: '#fff', padding: '14px 28px', borderRadius: 6, fontWeight: 700, textDecoration: 'none', fontSize: '1rem' }}
            >
              Talk to the team
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
