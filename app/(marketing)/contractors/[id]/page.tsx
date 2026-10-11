import Link from 'next/link'
import { MapPin, CheckCircle, Circle, ArrowRight, Calendar, Building2, Star, MessageSquare, Bookmark, Users, FileText, Shield } from 'lucide-react'
import { createServerSupabaseClient } from '@/lib/supabase/server'

type ContractorRow = {
  id: string
  slug: string
  name: string
  tagline: string | null
  location: string
  score: number
  verified: boolean
  description: string | null
  specialisms: string[]
  accreditations: string[]
  years_experience: number | null
  projects_completed: number | null
  response_time: string | null
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  // Try to get real name from DB first
  try {
    const supabase = createServerSupabaseClient()
    const { data } = await supabase
      .from('contractors')
      .select('name, tagline')
      .eq('slug', params.id)
      .maybeSingle()
    if (data) {
      return {
        title: `${data.name} — Contractor Profile | Dwellinger`,
        description: data.tagline || `View Builder Score™, services, portfolio and reviews for ${data.name} on Dwellinger.`,
      }
    }
  } catch {}
  // Fallback: derive from slug
  const name = params.id.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
  return {
    title: `${name} — Contractor Profile | Dwellinger`,
    description: `View Builder Score™, services, portfolio and reviews for ${name} on Dwellinger.`,
    robots: { index: false },
  }
}

const DEMO = {
  id: 'demo-contractor',
  name: 'Meridian Build & Renovate',
  tagline: 'Extensions, lofts & full refurbishments across South London',
  location: 'Brixton, South London',
  coverage: ['Lambeth', 'Southwark', 'Wandsworth', 'Lewisham', 'Croydon'],
  score: 82,
  tier: 'BUSINESS VERIFIED',
  tierOrdinal: 3,
  available: true,
  companiesHouse: 'DEMO — not yet verified',
  insurance: 'DEMO — not yet verified',
  lastVerified: 'Not yet verified',
  services: ['Extensions', 'Loft Conversions', 'Full Refurbishments', 'Kitchen Fit-Out', 'Structural Alterations', 'Rear Dormer', 'Side Return', 'Basement Conversion'],
  evidence: [
    { label: 'Identity', done: true },
    { label: 'Insurance', done: true },
    { label: 'Projects', done: false },
    { label: 'Reviews', done: false },
    { label: 'Health & Safety', done: false },
  ],
  portfolio: [
    { type: 'Rear Extension', location: 'Herne Hill, SE24', year: '2024' },
    { type: 'Loft Conversion', location: 'Streatham, SW16', year: '2024' },
    { type: 'Full Refurbishment', location: 'Brixton, SW2', year: '2023' },
  ],
  reviews: [
    { name: 'J. Thompson', project: 'Rear extension', rating: 5, text: 'Professional team, delivered on time and within budget. Highly recommend for extension work.', date: 'Aug 2024' },
    { name: 'C. Okafor', project: 'Loft conversion', rating: 4, text: 'Great communication throughout. Minor snagging items resolved promptly.', date: 'May 2024' },
  ],
  isDemo: true,
}

const RCB_COVERAGE = ['Hackney', 'Tower Hamlets', 'Newham', 'Waltham Forest', 'Redbridge', 'Barking & Dagenham', 'Havering', 'Southwark', 'Lewisham', 'Greenwich', 'Hounslow', 'Ealing', 'All of Greater London']

async function getContractor(slug: string) {
  try {
    const supabase = createServerSupabaseClient()
    const { data, error } = await supabase
      .from('contractors')
      .select('*')
      .eq('slug', slug)
      .eq('active', true)
      .maybeSingle()
    if (error || !data) return null
    return data as ContractorRow
  } catch {
    return null
  }
}

function buildProfileFromDB(c: ContractorRow) {
  return {
    id: c.slug,
    name: c.name,
    tagline: c.tagline || '',
    location: c.location,
    coverage: c.slug === 'rcb-design-build' ? RCB_COVERAGE : [c.location.split(',')[0].trim()],
    score: c.score,
    tier: c.verified ? 'BUSINESS VERIFIED' : 'IDENTITY VERIFIED',
    tierOrdinal: c.verified ? 3 : 2,
    available: true,
    companiesHouse: c.verified ? 'Verified via Companies House' : 'Pending verification',
    insurance: c.verified ? 'Public liability insurance confirmed' : 'Pending verification',
    lastVerified: c.verified ? 'October 2026' : 'Pending',
    services: c.specialisms || [],
    evidence: [
      { label: 'Identity', done: c.verified },
      { label: 'Insurance', done: c.verified },
      { label: 'Projects', done: (c.projects_completed || 0) > 0 },
      { label: 'Reviews', done: false },
      { label: 'Health & Safety', done: false },
    ],
    portfolio: [] as { type: string; location: string; year: string }[],
    reviews: [] as { name: string; project: string; rating: number; text: string; date: string }[],
    isDemo: false,
  }
}

function ScoreRing({ score, size = 100 }: { score: number; size?: number }) {
  const radius = (size - 16) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (score / 100) * circumference
  const colour = score >= 80 ? '#10B981' : score >= 60 ? '#C4773B' : '#71717A'
  return (
    <div className="relative flex-shrink-0" style={{ width: size, height: size }}>
      <svg viewBox={`0 0 ${size} ${size}`} className="-rotate-90" style={{ width: size, height: size }}>
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="10" />
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke={colour} strokeWidth="10"
          strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round" />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-bold text-2xl" style={{ color: colour }}>{score}</span>
        <span style={{ color: 'var(--color-text-muted)', fontSize: '0.6rem', marginTop: 1 }}>/ 100</span>
      </div>
    </div>
  )
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div style={{ display: 'flex', gap: 2 }}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} className="w-3.5 h-3.5" style={{ fill: i <= rating ? '#C4773B' : 'none', color: i <= rating ? '#C4773B' : 'var(--color-border-strong)' }} />
      ))}
    </div>
  )
}

export default async function ContractorProfilePage({ params }: { params: { id: string } }) {
  const dbContractor = await getContractor(params.id)
  const c = dbContractor ? buildProfileFromDB(dbContractor) : DEMO

  return (
    <div style={{ backgroundColor: 'var(--color-bg)', minHeight: '100vh' }}>
      <div style={{ borderBottom: '1px solid var(--color-border)', background: 'var(--color-bg-surface)', padding: '10px 0' }}>
        <div className="container mx-auto" style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.8rem' }}>
          <Link href="/" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>Home</Link>
          <span style={{ color: 'var(--color-text-muted)' }}>/</span>
          <Link href="/contractors" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>Contractors</Link>
          <span style={{ color: 'var(--color-text-muted)' }}>/</span>
          <span style={{ color: 'var(--color-text)' }}>{c.name}</span>
        </div>
      </div>
      {c.isDemo && (
        <div style={{ background: 'var(--amber-subtle)', borderBottom: '1px solid var(--amber-border)', padding: '8px 0' }}>
          <div className="container mx-auto" style={{ textAlign: 'center' }}>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.8rem', margin: 0 }}>This is an illustrative contractor profile. Live contractor data will be available at platform launch.</p>
          </div>
        </div>
      )}
      <div className="container mx-auto" style={{ padding: '2rem 0', display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr)', gap: '1.5rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="card" style={{ padding: '1.5rem' }}>
              <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start', flexWrap: 'wrap' }}>
                <div style={{ width: 64, height: 64, borderRadius: 12, background: 'var(--color-bg-raised)', border: '2px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Building2 style={{ color: 'var(--amber)' }} className="w-7 h-7" />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', marginBottom: 4 }}>
                    <h1 className="font-display" style={{ fontSize: '1.5rem', color: 'var(--color-text)', margin: 0 }}>{c.name}</h1>
                    {c.available && <span style={{ background: 'rgba(16,185,129,0.1)', color: '#10B981', fontSize: '0.7rem', fontWeight: 700, padding: '3px 10px', borderRadius: 20, border: '1px solid rgba(16,185,129,0.2)' }}>ACCEPTING ENQUIRIES</span>}
                  </div>
                  <p style={{ color: 'var(--color-text-secondary)', margin: '0 0 8px', fontSize: '0.9rem' }}>{c.tagline}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    <MapPin style={{ color: 'var(--color-text-muted)' }} className="w-3.5 h-3.5 flex-shrink-0" />
                    <span style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>{c.location}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="card" style={{ padding: '1.5rem' }}>
              <h2 className="font-display" style={{ fontSize: '1rem', color: 'var(--color-text)', marginBottom: '1rem' }}>Builder Score™</h2>
              <div style={{ display: 'flex', gap: 20, alignItems: 'center', flexWrap: 'wrap' }}>
                <ScoreRing score={c.score} size={100} />
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                    <CheckCircle style={{ color: 'var(--amber)' }} className="w-4 h-4" />
                    <span style={{ color: 'var(--amber)', fontWeight: 700, fontSize: '0.85rem' }}>{c.tier}</span>
                  </div>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', marginBottom: 12, lineHeight: 1.5 }}>Builder Score™ is calculated from verified identity, insurance, project track record, client reviews, and health & safety documentation.</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    {c.evidence.map((e) => (
                      <div key={e.label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        {e.done ? <CheckCircle style={{ color: '#10B981' }} className="w-4 h-4 flex-shrink-0" /> : <Circle style={{ color: 'var(--color-border-strong)' }} className="w-4 h-4 flex-shrink-0" />}
                        <span style={{ color: e.done ? 'var(--color-text)' : 'var(--color-text-muted)', fontSize: '0.85rem' }}>{e.label}</span>
                        {!e.done && <span style={{ color: 'var(--color-text-muted)', fontSize: '0.75rem' }}>(not yet submitted)</span>}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="card" style={{ padding: '1.5rem' }}>
              <h2 className="font-display" style={{ fontSize: '1rem', color: 'var(--color-text)', marginBottom: '1rem' }}>Services</h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {c.services.map((s) => <span key={s} style={{ background: 'var(--color-bg-raised)', border: '1px solid var(--color-border)', color: 'var(--color-text-secondary)', padding: '4px 12px', borderRadius: 20, fontSize: '0.8rem' }}>{s}</span>)}
              </div>
            </div>
            <div className="card" style={{ padding: '1.5rem' }}>
              <h2 className="font-display" style={{ fontSize: '1rem', color: 'var(--color-text)', marginBottom: '1rem' }}>Coverage areas</h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {c.coverage.map((area) => <span key={area} style={{ display: 'flex', alignItems: 'center', gap: 4, background: 'var(--color-bg-raised)', border: '1px solid var(--color-border)', color: 'var(--color-text-secondary)', padding: '4px 12px', borderRadius: 20, fontSize: '0.8rem' }}><MapPin className="w-3 h-3" /> {area}</span>)}
              </div>
            </div>
            <div className="card" style={{ padding: '1.5rem', background: 'var(--amber-subtle)', border: '1px solid var(--amber-border)' }}>
              <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <Star style={{ color: 'var(--amber)', flexShrink: 0 }} className="w-5 h-5 mt-0.5" />
                <div>
                  <h2 className="font-display" style={{ fontSize: '1rem', color: 'var(--color-text)', marginBottom: 4 }}>Project Match</h2>
                  <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', marginBottom: 12, lineHeight: 1.6 }}>Project Match requires a saved project. Create your project to see how well this contractor matches your needs.</p>
                  <Link href="/register" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'var(--amber)', color: '#fff', fontWeight: 700, padding: '8px 16px', borderRadius: 8, textDecoration: 'none', fontSize: '0.85rem' }}>Create your project <ArrowRight className="w-4 h-4" /></Link>
                </div>
              </div>
            </div>
            {c.portfolio.length > 0 && (
              <div className="card" style={{ padding: '1.5rem' }}>
                <h2 className="font-display" style={{ fontSize: '1rem', color: 'var(--color-text)', marginBottom: '1rem' }}>Portfolio</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 12 }}>
                  {c.portfolio.map((p, i) => (
                    <div key={i} style={{ borderRadius: 8, overflow: 'hidden', border: '1px solid var(--color-border)' }}>
                      <div style={{ height: 120, background: 'var(--color-bg-raised)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{ textAlign: 'center' }}>
                          <FileText style={{ color: 'var(--color-text-muted)' }} className="w-8 h-8 mx-auto mb-1" />
                          <span style={{ color: 'var(--color-text-muted)', fontSize: '0.7rem' }}>Photo coming soon</span>
                        </div>
                      </div>
                      <div style={{ padding: '8px 10px', background: 'var(--color-bg-surface)' }}>
                        <p style={{ color: 'var(--color-text)', fontWeight: 600, fontSize: '0.8rem', margin: '0 0 2px' }}>{p.type}</p>
                        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.72rem', margin: 0 }}>{p.location} · {p.year}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {c.isDemo && (
              <div className="card" style={{ padding: '1.5rem' }}>
                <h2 className="font-display" style={{ fontSize: '1rem', color: 'var(--color-text)', marginBottom: '1rem' }}>Portfolio</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 12 }}>
                  {DEMO.portfolio.map((p, i) => (
                    <div key={i} style={{ borderRadius: 8, overflow: 'hidden', border: '1px solid var(--color-border)' }}>
                      <div style={{ height: 120, background: 'var(--color-bg-raised)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{ textAlign: 'center' }}>
                          <FileText style={{ color: 'var(--color-text-muted)' }} className="w-8 h-8 mx-auto mb-1" />
                          <span style={{ color: 'var(--color-text-muted)', fontSize: '0.7rem' }}>Photo coming soon</span>
                        </div>
                      </div>
                      <div style={{ padding: '8px 10px', background: 'var(--color-bg-surface)' }}>
                        <p style={{ color: 'var(--color-text)', fontWeight: 600, fontSize: '0.8rem', margin: '0 0 2px' }}>{p.type}</p>
                        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.72rem', margin: 0 }}>{p.location} · {p.year}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            <div className="card" style={{ padding: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <h2 className="font-display" style={{ fontSize: '1rem', color: 'var(--color-text)', margin: 0 }}>Reviews</h2>
                <span style={{ background: 'var(--color-bg-raised)', color: 'var(--color-text-muted)', padding: '2px 10px', borderRadius: 20, fontSize: '0.72rem' }}>Platform reviews coming soon</span>
              </div>
              {c.isDemo ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {DEMO.reviews.map((r, i) => (
                    <div key={i} style={{ paddingBottom: 16, borderBottom: i < DEMO.reviews.length - 1 ? '1px solid var(--color-border)' : 'none' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                        <StarRating rating={r.rating} />
                        <span style={{ color: 'var(--color-text-secondary)', fontWeight: 600, fontSize: '0.85rem' }}>{r.name}</span>
                        <span style={{ color: 'var(--color-text-muted)', fontSize: '0.75rem' }}>· {r.project} · {r.date}</span>
                      </div>
                      <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', lineHeight: 1.5, margin: 0 }}>{r.text}</p>
                      <p style={{ color: 'var(--color-text-muted)', fontSize: '0.72rem', marginTop: 4, marginBottom: 0 }}>Illustrative review — not from a real client</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>Client reviews will appear here once the platform launches and this contractor has completed verified projects.</p>
              )}
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div className="card" style={{ padding: '1.25rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <Link href="/register" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, background: 'var(--amber)', color: '#fff', fontWeight: 700, padding: '12px', borderRadius: 8, textDecoration: 'none', fontSize: '0.9rem' }}><MessageSquare className="w-4 h-4" /> Request Introduction</Link>
                <Link href="/register" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, background: 'var(--color-bg-raised)', color: 'var(--color-text)', fontWeight: 600, padding: '11px', borderRadius: 8, textDecoration: 'none', fontSize: '0.9rem', border: '1px solid var(--color-border)' }}><Users className="w-4 h-4" /> Invite to Tender</Link>
                <Link href="/register" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, background: 'transparent', color: 'var(--color-text-secondary)', fontWeight: 600, padding: '10px', borderRadius: 8, textDecoration: 'none', fontSize: '0.875rem', border: '1px solid var(--color-border)' }}><Bookmark className="w-4 h-4" /> Save Contractor</Link>
              </div>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.75rem', textAlign: 'center', marginTop: 10, marginBottom: 0 }}>Register free to contact this contractor</p>
            </div>
            <div className="card" style={{ padding: '1.25rem' }}>
              <h3 style={{ color: 'var(--color-text)', fontWeight: 700, fontSize: '0.85rem', marginBottom: 8 }}>Availability</h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <Calendar style={{ color: 'var(--color-text-muted)' }} className="w-4 h-4 flex-shrink-0" />
                <span style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem' }}>Contact for availability</span>
              </div>
            </div>
            <div className="card" style={{ padding: '1.25rem' }}>
              <h3 style={{ color: 'var(--color-text)', fontWeight: 700, fontSize: '0.85rem', marginBottom: 12 }}>Verified info</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {[{ label: 'Companies House', value: c.companiesHouse }, { label: 'Insurance', value: c.insurance }, { label: 'Last verified', value: c.lastVerified }].map(({ label, value }) => (
                  <div key={label}>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.72rem', margin: '0 0 2px' }}>{label}</p>
                    <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.82rem', margin: 0 }}>{value}</p>
                  </div>
                ))}
              </div>
            </div>
            <Link href="/contractors" style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--color-text-muted)', textDecoration: 'none', fontSize: '0.82rem', padding: '8px 0' }}>← Back to contractor directory</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
