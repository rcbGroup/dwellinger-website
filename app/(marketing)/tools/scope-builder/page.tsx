import Link from 'next/link'
import { ArrowRight, CheckCircle, FileText, Zap, ClipboardList, ChevronRight } from 'lucide-react'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  path: '/tools/scope-builder',
  title: 'Free Scope of Works Builder | Dwellinger Tools',
  description: 'Build a clear scope of works for your project in minutes. Free tool for homeowners planning extensions, loft conversions, refurbishments and more.',
})

const projectTypes = [
  { id: 'rear-extension', label: 'Rear extension', icon: '🏠' },
  { id: 'loft-conversion', label: 'Loft conversion', icon: '🏗️' },
  { id: 'side-extension', label: 'Side extension', icon: '📐' },
  { id: 'full-refurb', label: 'Full refurbishment', icon: '🔨' },
  { id: 'kitchen', label: 'Kitchen project', icon: '🍳' },
  { id: 'bathroom', label: 'Bathroom project', icon: '🚿' },
  { id: 'structural', label: 'Structural works', icon: '🏛️' },
  { id: 'other', label: 'Other / mixed', icon: '📋' },
]

const scopeItems = [
  {
    category: 'Site & access',
    items: [
      'Full address and access instructions',
      'Photos of existing space (inside and outside)',
      'Any known structural issues or surveys',
      'Party wall situation (shared walls with neighbours)',
      'Drainage and sewer locations if known',
    ],
  },
  {
    category: 'Design & planning',
    items: [
      'Architectural drawings (if available)',
      'Planning permission status (not required / applied / approved)',
      'Structural engineer involvement (needed / engaged / complete)',
      'Building Control route (Full Plans or Building Notice)',
      'Design decisions still open (layout, windows, finishes)',
    ],
  },
  {
    category: 'Works required',
    items: [
      'Demolition and strip-out extent',
      'Structural works (steels, beams, columns)',
      'First-fix electrics (rewire, new circuits)',
      'First-fix plumbing (boiler relocation, new waste runs)',
      'Insulation specification',
      'Plastering and screeding',
      'Second-fix carpentry and joinery',
      'Tiling and flooring (type and area)',
      'Decoration (scope and standard)',
      'External works (drainage, paving, landscaping)',
    ],
  },
  {
    category: 'Procurement',
    items: [
      'Client-supplied materials (tiles, kitchen, sanitaryware)',
      'Contractor-procured materials (structural, first-fix, external)',
      'Specialist sub-contractors required (gas, structural, glazing)',
      'Preferred suppliers or brands',
    ],
  },
  {
    category: 'Programme & budget',
    items: [
      'Target start date',
      'Target completion date or key milestone',
      'Budget range (indicative or firm)',
      'Phasing requirements (occupied property, staged works)',
      'Key decisions still outstanding that could affect programme',
    ],
  },
]

export default function ScopeBuilderPage() {
  return (
    <div>
      {/* Hero */}
      <section style={{ backgroundColor: '#0F1621', padding: '80px 24px 64px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 16px', borderRadius: 100, backgroundColor: 'rgba(196,119,59,0.12)', border: '1px solid rgba(196,119,59,0.25)', color: '#C4773B', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 24 }}>
            <ClipboardList style={{ width: 14, height: 14 }} />
            Scope Builder — free tool
          </div>
          <h1 style={{ color: '#F5F0E8', fontWeight: 800, fontSize: 'clamp(1.75rem, 4vw, 3rem)', lineHeight: 1.15, marginBottom: 20 }}>
            Define your project scope<br />
            <span style={{ color: '#C4773B' }}>before getting quotes</span>
          </h1>
          <p style={{ color: '#c8c0b0', fontSize: '1.1rem', lineHeight: 1.7, maxWidth: 600, margin: '0 auto 32px' }}>
            Contractors quote what you give them. If your brief is vague, your quotes will be
            incomparable. Use this tool to build a clear scope — so every contractor is
            pricing the same project.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              href="/register"
              style={{ backgroundColor: '#C4773B', color: '#fff', padding: '13px 28px', borderRadius: 6, fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem', display: 'inline-flex', alignItems: 'center', gap: 8 }}
            >
              Start building your scope <ArrowRight style={{ width: 16, height: 16 }} />
            </Link>
            <Link
              href="/services/estimating"
              style={{ border: '1px solid rgba(245,240,232,0.2)', color: '#F5F0E8', padding: '13px 24px', borderRadius: 6, fontWeight: 600, textDecoration: 'none', fontSize: '0.95rem' }}
            >
              Get a professional estimate instead
            </Link>
          </div>
        </div>
      </section>

      {/* Why scope matters */}
      <section style={{ backgroundColor: '#F5F0E8', padding: '72px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <p style={{ color: '#C4773B', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12 }}>Why it matters</p>
            <h2 style={{ color: '#1A2340', fontWeight: 800, fontSize: 'clamp(1.4rem, 3vw, 2rem)', marginBottom: 16 }}>The scope is the contract before the contract</h2>
            <p style={{ color: '#4A5568', maxWidth: 580, margin: '0 auto', lineHeight: 1.7 }}>
              Most disputes in construction come from scope creep — work that was assumed but not written down.
              A clear scope protects you, enables like-for-like comparison, and gives contractors confidence to price accurately.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            {[
              {
                icon: <FileText style={{ width: 24, height: 24, color: '#C4773B' }} />,
                title: 'Compare quotes fairly',
                desc: 'When every contractor prices the same scope, you can compare on value — not guess at what each one included.',
              },
              {
                icon: <CheckCircle style={{ width: 24, height: 24, color: '#C4773B' }} />,
                title: 'Prevent scope creep',
                desc: 'A written scope is the reference point if a contractor says work wasn\'t included. It protects both sides.',
              },
              {
                icon: <Zap style={{ width: 24, height: 24, color: '#C4773B' }} />,
                title: 'Get better quotes faster',
                desc: 'Contractors quote faster and more accurately when they have clear information. Less back and forth for everyone.',
              },
            ].map((item) => (
              <div key={item.title} style={{ backgroundColor: '#fff', border: '1px solid #EDE8DC', borderRadius: 10, padding: '28px 24px' }}>
                <div style={{ width: 44, height: 44, borderRadius: 8, backgroundColor: 'rgba(196,119,59,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                  {item.icon}
                </div>
                <h3 style={{ color: '#1A2340', fontWeight: 700, fontSize: '1rem', marginBottom: 10 }}>{item.title}</h3>
                <p style={{ color: '#4A5568', fontSize: '0.875rem', lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project type selector */}
      <section style={{ backgroundColor: '#0A0A0A', padding: '72px 24px', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <p style={{ color: '#C4773B', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12 }}>Step 1</p>
            <h2 style={{ color: '#F5F0E8', fontWeight: 800, fontSize: 'clamp(1.3rem, 3vw, 1.75rem)', marginBottom: 12 }}>What type of project?</h2>
            <p style={{ color: '#c8c0b0', fontSize: '0.9rem' }}>Select your primary project type. You can add notes to cover mixed-scope work.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12 }}>
            {projectTypes.map((pt) => (
              <div
                key={pt.id}
                style={{ backgroundColor: '#111827', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, padding: '20px 16px', textAlign: 'center', cursor: 'pointer', transition: 'border-color 0.2s' }}
              >
                <div style={{ fontSize: '1.75rem', marginBottom: 10 }}>{pt.icon}</div>
                <div style={{ color: '#F5F0E8', fontWeight: 600, fontSize: '0.875rem' }}>{pt.label}</div>
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', color: '#c8c0b0', fontSize: '0.8rem', marginTop: 16 }}>
            Interactive scope wizard — <Link href="/register" style={{ color: '#C4773B', textDecoration: 'none', fontWeight: 600 }}>create a free account</Link> to save and share your scope
          </p>
        </div>
      </section>

      {/* Scope checklist */}
      <section style={{ backgroundColor: '#111827', padding: '72px 24px', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <p style={{ color: '#C4773B', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12 }}>What a complete scope covers</p>
            <h2 style={{ color: '#F5F0E8', fontWeight: 800, fontSize: 'clamp(1.3rem, 3vw, 1.75rem)', marginBottom: 16 }}>The 5 components of a proper project scope</h2>
            <p style={{ color: '#c8c0b0', maxWidth: 560, margin: '0 auto', lineHeight: 1.7, fontSize: '0.9rem' }}>
              Use this as your checklist. If you can tick everything in a category, that section of your brief is ready. Gaps here become disputes later.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {scopeItems.map((section, idx) => (
              <div key={section.category} style={{ backgroundColor: '#0F1621', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 10, overflow: 'hidden' }}>
                <div style={{ padding: '16px 24px', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 28, height: 28, borderRadius: '50%', backgroundColor: 'rgba(196,119,59,0.15)', border: '1px solid rgba(196,119,59,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span style={{ color: '#C4773B', fontWeight: 800, fontSize: '0.75rem' }}>0{idx + 1}</span>
                  </div>
                  <h3 style={{ color: '#F5F0E8', fontWeight: 700, fontSize: '1rem', margin: 0 }}>{section.category}</h3>
                </div>
                <div style={{ padding: '16px 24px' }}>
                  <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {section.items.map((item) => (
                      <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                        <CheckCircle style={{ width: 14, height: 14, color: '#C4773B', flexShrink: 0, marginTop: 2 }} />
                        <span style={{ color: '#c8c0b0', fontSize: '0.875rem', lineHeight: 1.6 }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: '#C4773B', padding: '72px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <h2 style={{ color: '#fff', fontWeight: 800, fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', marginBottom: 16 }}>
            Ready to build your scope?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1rem', marginBottom: 32, lineHeight: 1.6 }}>
            Create a free Dwellinger account to access the full Scope Builder wizard, save your project brief, and share it with contractors in one click.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              href="/register"
              style={{ backgroundColor: '#fff', color: '#C4773B', padding: '14px 32px', borderRadius: 6, fontWeight: 800, textDecoration: 'none', fontSize: '1rem', display: 'inline-flex', alignItems: 'center', gap: 8 }}
            >
              Start free <ChevronRight style={{ width: 18, height: 18 }} />
            </Link>
            <Link
              href="/services/estimating"
              style={{ border: '2px solid rgba(255,255,255,0.4)', color: '#fff', padding: '14px 28px', borderRadius: 6, fontWeight: 700, textDecoration: 'none', fontSize: '1rem' }}
            >
              Get a professional estimate
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
