import Link from 'next/link'
import { Search, MapPin, Star, CheckCircle, ChevronRight, Filter } from 'lucide-react'
import { pageMetadata } from '@/lib/seo'
import { createServerSupabaseClient } from '@/lib/supabase/server'

export const metadata = pageMetadata({
  path: '/contractors',
  title: 'Find Verified Contractors — Contractor Directory',
  description: 'Browse verified contractors with Builder Score™ ratings. Filter by project type, location, and verification tier to find the right builder for your project.',
})

type ContractorRow = {
  id: string
  slug: string
  name: string
  tagline: string | null
  location: string
  score: number
  verified: boolean
  specialisms: string[]
  active: boolean
}

// PLACEHOLDER DATA — shown only when Supabase returns no live contractors.
// These are illustrative examples, not real companies or real Builder Scores.
const SAMPLE_CONTRACTORS = [
  { id: 'demo-contractor', name: 'Example Build & Renovate', tagline: 'Extensions, lofts & full refurbishments across South London', location: 'South London', score: 82, tier: 'CONNECTED BUSINESS', services: ['Extensions', 'Loft Conversions', 'Refurbishments'], available: true },
  { id: 'example-construction', name: 'Example Construction Ltd', tagline: 'New builds and structural alterations, Surrey & SW London', location: 'Croydon, Surrey', score: 74, tier: 'IDENTITY VERIFIED', services: ['New Build', 'Structural Work', 'Extensions'], available: false },
  { id: 'example-interiors', name: 'Example Interiors', tagline: 'Kitchen, bathroom & full interior transformations', location: 'West London', score: 68, tier: 'IDENTITY VERIFIED', services: ['Kitchen', 'Bathroom', 'Refurbishments'], available: true },
  { id: 'example-build-group', name: 'Example Build Group', tagline: 'Developer-grade residential construction, North London', location: 'North London', score: 91, tier: 'PROJECT VERIFIED', services: ['New Build', 'HMO Conversion', 'Extensions'], available: true },
  { id: 'example-developments', name: 'Example Developments Ltd', tagline: 'Loft conversions and rear extensions, East London specialists', location: 'East London', score: 59, tier: 'IDENTITY VERIFIED', services: ['Loft Conversions', 'Extensions', 'Planning'], available: false },
  { id: 'example-build-ltd', name: 'Example Build Ltd', tagline: 'Full project management from planning to handover', location: 'North London', score: 77, tier: 'CONNECTED BUSINESS', services: ['Project Management', 'Extensions', 'Refurbishments'], available: true },
]

type ContractorCard = typeof SAMPLE_CONTRACTORS[0]

function mapDBtoCard(c: ContractorRow): ContractorCard {
  return {
    id: c.slug,
    name: c.name,
    tagline: c.tagline || '',
    location: c.location,
    score: c.score,
    tier: c.verified ? 'CONNECTED BUSINESS' : 'IDENTITY VERIFIED',
    services: (c.specialisms || []).slice(0, 3),
    available: true,
  }
}

const TIERS = ['All tiers', 'PROJECT VERIFIED', 'CONNECTED BUSINESS', 'IDENTITY VERIFIED']
const PROJECT_TYPES = ['All types', 'Extensions', 'Loft Conversions', 'Refurbishments', 'New Build', 'Kitchen', 'Bathroom', 'HMO Conversion']

function ScoreRing({ score }: { score: number }) {
  const radius = 20
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (score / 100) * circumference
  const colour = score >= 80 ? '#10B981' : score >= 60 ? '#C4773B' : '#71717A'
  return (
    <div className="relative flex-shrink-0" style={{ width: 52, height: 52 }}>
      <svg viewBox="0 0 52 52" className="-rotate-90" style={{ width: 52, height: 52 }}>
        <circle cx="26" cy="26" r={radius} fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="7" />
        <circle cx="26" cy="26" r={radius} fill="none" stroke={colour} strokeWidth="7"
          strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round" />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-bold text-xs" style={{ color: colour }}>{score}</span>
      </div>
    </div>
  )
}

export default async function ContractorDirectoryPage() {
  // Try to load real contractor data from Supabase
  let contractors: ContractorCard[] = SAMPLE_CONTRACTORS
  let isLiveData = false
  try {
    const supabase = createServerSupabaseClient()
    const { data } = await supabase
      .from('contractors')
      .select('id, slug, name, tagline, location, score, verified, specialisms, active')
      .eq('active', true)
      .order('score', { ascending: false })
    if (data && data.length > 0) {
      contractors = data.map(mapDBtoCard)
      isLiveData = true
    }
  } catch {
    // fall through to demo data silently
  }

  return (
    <div style={{ backgroundColor: 'var(--color-bg)', minHeight: '100vh' }}>
      <section style={{ paddingTop: '4rem', paddingBottom: '3rem', background: 'var(--color-bg)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'var(--hero-gradient)', pointerEvents: 'none' }} />
        <div className="container mx-auto relative z-10">
          <p className="section-tag mb-3">Contractor Directory</p>
          <h1 className="font-display text-h1 text-white max-w-2xl mb-4">
            Find verified contractors with <span style={{ color: 'var(--amber)' }}>Builder Score™</span>
          </h1>
          <p style={{ color: 'var(--color-text-secondary)' }} className="text-lg max-w-xl mb-8 leading-relaxed">
            Contractors joining Dwellinger has a verified Builder Score™ — a composite rating from identity checks, insurance verification, past projects, and client reviews.
          </p>
          <div style={{ display: 'flex', gap: 8, maxWidth: 560, flexWrap: 'wrap' }}>
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 8, background: 'var(--color-bg-surface)', border: '1px solid var(--color-border)', borderRadius: 8, padding: '10px 14px', minWidth: 200 }}>
              <MapPin style={{ color: 'var(--color-text-muted)', flexShrink: 0 }} className="w-4 h-4" />
              <input type="text" placeholder="Enter a postcode or borough..." style={{ background: 'transparent', border: 'none', outline: 'none', color: 'var(--color-text)', fontSize: '0.875rem', width: '100%' }} />
            </div>
            <button style={{ background: 'var(--amber)', color: '#fff', fontWeight: 700, padding: '10px 20px', borderRadius: 8, border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.875rem' }}>
              <Search className="w-4 h-4" /> Search
            </button>
          </div>
        </div>
      </section>

      <div style={{ borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)', background: 'var(--color-bg-surface)', padding: '12px 0' }}>
        <div className="container mx-auto" style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
          <Filter style={{ color: 'var(--color-text-muted)' }} className="w-4 h-4 flex-shrink-0" />
          <span style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', fontWeight: 600 }}>Filter:</span>
          {PROJECT_TYPES.slice(0, 5).map((t) => (
            <button key={t} style={{ padding: '4px 12px', border: '1px solid var(--color-border)', borderRadius: 20, background: 'transparent', color: 'var(--color-text-secondary)', fontSize: '0.8rem', cursor: 'pointer' }}>{t}</button>
          ))}
          {TIERS.slice(1).map((t) => (
            <button key={t} style={{ padding: '4px 12px', border: '1px solid var(--amber-border)', borderRadius: 20, background: 'var(--amber-subtle)', color: 'var(--amber)', fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer' }}>{t.replace(' VERIFIED', '')}</button>
          ))}
        </div>
      </div>

      <div style={{ background: 'var(--amber-subtle)', borderBottom: '1px solid var(--amber-border)', padding: '10px 0' }}>
        <div className="container mx-auto" style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
          <Star style={{ color: 'var(--amber)' }} className="w-4 h-4 flex-shrink-0" />
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', margin: 0 }}>
            <strong style={{ color: 'var(--color-text)' }}>Register for free</strong> to see Project Match scores — showing how well each contractor fits your specific project.{' '}
            <Link href="/register" style={{ color: 'var(--amber)', fontWeight: 600 }}>Create account →</Link>
          </p>
        </div>
      </div>

      <section style={{ padding: '2.5rem 0' }}>
        <div className="container mx-auto">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', flexWrap: 'wrap', gap: 8 }}>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.875rem' }}>
              Showing <strong style={{ color: 'var(--color-text)' }}>{contractors.length} contractor{contractors.length !== 1 ? 's' : ''}</strong>
              {!isLiveData && <span style={{ color: 'var(--color-text-muted)' }}> — illustrative profiles, live data coming soon</span>}
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1rem' }}>
            {contractors.map((c) => (
              <Link key={c.id} href={`/contractors/${c.id}`} style={{ textDecoration: 'none', display: 'block' }}>
                <div className="card" style={{ padding: '1.25rem', cursor: 'pointer' }}>
                  <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start', marginBottom: 12 }}>
                    <ScoreRing score={c.score} />
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <h3 style={{ color: 'var(--color-text)', fontWeight: 700, fontSize: '0.95rem', marginBottom: 2, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{c.name}</h3>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                        <MapPin style={{ color: 'var(--color-text-muted)' }} className="w-3 h-3 flex-shrink-0" />
                        <span style={{ color: 'var(--color-text-muted)', fontSize: '0.75rem' }}>{c.location}</span>
                      </div>
                    </div>
                    {c.available && (
                      <span style={{ background: 'rgba(16,185,129,0.1)', color: '#10B981', fontSize: '0.7rem', fontWeight: 700, padding: '2px 8px', borderRadius: 20, flexShrink: 0, border: '1px solid rgba(16,185,129,0.2)' }}>AVAILABLE</span>
                    )}
                  </div>
                  <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.8rem', lineHeight: '1.4', marginBottom: 10 }}>{c.tagline}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 10 }}>
                    <CheckCircle style={{ color: 'var(--amber)' }} className="w-3.5 h-3.5" />
                    <span style={{ color: 'var(--amber)', fontSize: '0.7rem', fontWeight: 700 }}>{c.tier}</span>
                  </div>
                  <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
                    {c.services.map((s) => (
                      <span key={s} style={{ background: 'var(--color-bg-raised)', color: 'var(--color-text-secondary)', fontSize: '0.7rem', padding: '2px 8px', borderRadius: 4 }}>{s}</span>
                    ))}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', marginTop: 12 }}>
                    <span style={{ color: 'var(--amber)', fontSize: '0.8rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 4 }}>View profile <ChevronRight className="w-3.5 h-3.5" /></span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            {isLiveData ? (
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', marginBottom: 12 }}>More contractors will appear here as the platform grows.</p>
            ) : (
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', marginBottom: 12 }}>More contractors will appear here as the platform launches.</p>
            )}
            <Link href="/register" className="btn-primary">Register to get early access</Link>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--color-bg-surface)', borderTop: '1px solid var(--color-border)', padding: '3rem 0' }}>
        <div className="container mx-auto" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 16 }}>
          <h2 className="font-display text-h3 text-white">Are you a contractor?</h2>
          <p style={{ color: 'var(--color-text-secondary)', maxWidth: 480, lineHeight: 1.6 }}>List your business, earn a Builder Score™ badge, and get matched with homeowners, investors, and professionals looking for your services.</p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link href="/register?type=contractor" className="btn-primary">Get your Builder Score™</Link>
            <Link href="/builder-score" className="btn-secondary" style={{ padding: '10px 20px' }}>Learn about Builder Score</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
