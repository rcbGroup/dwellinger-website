import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, XCircle, AlertTriangle, ArrowRight, ClipboardList } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Project Readiness Check — Are You Ready to Appoint a Contractor? | Dwellinger',
  description:
    "Run through the 20-point project readiness checklist before approaching contractors. Understand what's missing, what can wait, and what could derail your project if not addressed now.",
}

type ReadinessItem = {
  item: string
  why: string
  status: 'required' | 'important' | 'optional'
}

const readinessCategories: { category: string; items: ReadinessItem[] }[] = [
  {
    category: 'Ownership & authority',
    items: [
      { item: 'You are the legal owner or have written authority to commission works', why: 'Contractors cannot legally start work without owner consent. Leaseholders need freeholder permission for structural works.', status: 'required' },
      { item: 'All decision-makers are aligned and available', why: 'Projects stall when a co-owner disagrees or cannot be reached for approvals mid-project. Align before you start.', status: 'required' },
    ],
  },
  {
    category: 'Design & technical information',
    items: [
      { item: 'You have architectural drawings or a clear design brief', why: 'Contractors cannot price accurately without drawings. Vague briefs produce vague quotes and scope disputes.', status: 'required' },
      { item: 'Planning permission has been granted (if required)', why: 'Some works require planning permission before a contractor can legally start. Permitted development has limits.', status: 'required' },
      { item: 'A structural engineer has been engaged (if required)', why: "Any works involving beams, steels, or load-bearing walls need a structural engineer's calculations before tender.", status: 'important' },
      { item: 'Building Control route has been agreed (Full Plans or Building Notice)', why: 'Affects cost and programme. Full Plans submission takes longer but provides more certainty.', status: 'important' },
      { item: 'Party wall notices have been served (if applicable)', why: 'Works to shared walls or within 3 metres of a neighbour’s foundation require party wall notices. Non-compliance is a legal risk.', status: 'important' },
    ],
  },
  {
    category: 'Site information',
    items: [
      { item: 'Site photos or video walkthrough prepared', why: 'Provides contractors with enough information to prepare a credible tender without multiple site visits.', status: 'required' },
      { item: 'Any existing surveys, reports, or asbestos information available', why: 'Unknown surveys = unknown risks = variable pricing. Share what you have.', status: 'important' },
      { item: 'Drainage and sewer locations confirmed (for extensions)', why: 'Build-over approval from the sewer authority is needed if the footprint sits within 3 metres of a public sewer.', status: 'important' },
      { item: 'Boiler, electric meter, and gas meter locations noted', why: 'Relocation costs can materially change a quote. Flag early.', status: 'optional' },
    ],
  },
  {
    category: 'Commercial readiness',
    items: [
      { item: 'You have a realistic budget range in mind', why: 'Without a budget range, contractors cannot tell you whether a project is feasible or where to value-engineer.', status: 'required' },
      { item: "You have received an independent estimate (not just a contractor's quote)", why: 'An independent estimate from a QS or estimating service is the benchmark that protects you in a tender process.', status: 'important' },
      { item: 'Finance or funding is in place or confirmed', why: 'Projects that stall mid-works because funding fell through are the most expensive outcome for everyone.', status: 'required' },
      { item: 'You understand the payment schedule structure (deposit / stage payments / retention)', why: "UK construction payments typically follow milestone-based stage payments. Understand what you're committing to.", status: 'important' },
    ],
  },
  {
    category: 'Programme & logistics',
    items: [
      { item: 'Target start date is realistic and confirmed', why: 'Contractors have lead times. Programmes starting within 4 weeks of tender close are high-risk without pre-commitment.', status: 'important' },
      { item: 'Property will be vacant or you have a plan for occupancy during works', why: 'Occupied properties require sequencing. Notify contractors — it affects programme, welfare facilities, and risk.', status: 'important' },
      { item: 'Skips, deliveries, and access logistics have been considered', why: 'Street access, permits, and neighbour relations can delay a start. Prepare early.', status: 'optional' },
      { item: 'You have a contingency of 10–15% above your main budget', why: 'UK construction almost always surfaces unforeseen items — particularly in older properties. Contingency is not pessimism, it is professionalism.', status: 'required' },
    ],
  },
  {
    category: 'Procurement',
    items: [
      { item: 'You know which items you are supplying and which the contractor will procure', why: 'Undefined procurement causes gaps. If you supply the kitchen but the contractor expected to, they will not have priced the installation interface correctly.', status: 'required' },
      { item: 'Specialist sub-contractors have been identified (gas, structural, glazing, etc.)', why: 'Some trades need long lead times or separate appointments. Confirm who procures them and who coordinates.', status: 'optional' },
    ],
  },
]

const statusConfig = {
  required: { color: '#EF4444', label: 'Required', icon: XCircle },
  important: { color: '#F59E0B', label: 'Important', icon: AlertTriangle },
  optional: { color: '#10B981', label: 'Good to have', icon: CheckCircle },
}

export default function ProjectReadinessPage() {
  const totalItems = readinessCategories.reduce((acc, c) => acc + c.items.length, 0)
  const requiredCount = readinessCategories.reduce((acc, c) => acc + c.items.filter((i) => i.status === 'required').length, 0)

  return (
    <div>
      {/* Hero */}
      <section style={{ backgroundColor: '#0F1621', padding: '80px 24px 64px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 16px', borderRadius: 100, backgroundColor: 'rgba(196,119,59,0.12)', border: '1px solid rgba(196,119,59,0.25)', color: '#C4773B', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 24 }}>
            <ClipboardList style={{ width: 14, height: 14 }} />
            Project Readiness — free checklist
          </div>
          <h1 style={{ color: '#F5F0E8', fontWeight: 800, fontSize: 'clamp(1.75rem, 4vw, 3rem)', lineHeight: 1.15, marginBottom: 20 }}>
            Are you ready to appoint<br />
            <span style={{ color: '#C4773B' }}>a contractor?</span>
          </h1>
          <p style={{ color: '#c8c0b0', fontSize: '1.1rem', lineHeight: 1.7, maxWidth: 600, margin: '0 auto 28px' }}>
            Run through the {totalItems}-point readiness checklist. {requiredCount} items are required before any contractor can give you a reliable quote or sign a contract.
          </p>
          <div style={{ display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap' }}>
            {Object.entries(statusConfig).map(([key, val]) => (
              <div key={key} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <val.icon style={{ width: 14, height: 14, color: val.color }} />
                <span style={{ color: '#c8c0b0', fontSize: '0.8rem' }}>{val.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Checklist */}
      <section style={{ backgroundColor: '#0A0A0A', padding: '64px 24px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 32 }}>
          {readinessCategories.map((cat, catIdx) => (
            <div key={cat.category}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                <div style={{ width: 28, height: 28, borderRadius: '50%', backgroundColor: 'rgba(196,119,59,0.15)', border: '1px solid rgba(196,119,59,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ color: '#C4773B', fontWeight: 800, fontSize: '0.75rem' }}>0{catIdx + 1}</span>
                </div>
                <h2 style={{ color: '#F5F0E8', fontWeight: 700, fontSize: '1.05rem', margin: 0 }}>{cat.category}</h2>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {cat.items.map((item) => {
                  const cfg = statusConfig[item.status]
                  const Icon = cfg.icon
                  return (
                    <div key={item.item} style={{ backgroundColor: '#111827', border: `1px solid ${cfg.color}22`, borderLeft: `3px solid ${cfg.color}`, borderRadius: 8, padding: '16px 20px' }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 8 }}>
                        <Icon style={{ width: 16, height: 16, color: cfg.color, flexShrink: 0, marginTop: 2 }} />
                        <div>
                          <div style={{ color: '#F5F0E8', fontWeight: 600, fontSize: '0.9rem', lineHeight: 1.5 }}>{item.item}</div>
                          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 4, marginTop: 4, padding: '2px 8px', borderRadius: 100, backgroundColor: `${cfg.color}18`, color: cfg.color, fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                            {cfg.label}
                          </div>
                        </div>
                      </div>
                      <p style={{ color: '#c8c0b0', fontSize: '0.82rem', lineHeight: 1.65, marginLeft: 28 }}>{item.why}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What to do next */}
      <section style={{ backgroundColor: '#F5F0E8', padding: '72px 24px', borderTop: '1px solid #EDE8DC' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <p style={{ color: '#C4773B', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12 }}>What next?</p>
            <h2 style={{ color: '#1A2340', fontWeight: 800, fontSize: 'clamp(1.4rem, 3vw, 2rem)', marginBottom: 16 }}>Once you&apos;re ready</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
            {[
              {
                step: '1',
                title: 'Build your scope',
                desc: 'Use the Dwellinger Scope Builder to document what you want built — so every contractor quotes the same project.',
                href: '/tools/scope-builder',
                cta: 'Open Scope Builder',
              },
              {
                step: '2',
                title: 'Get an independent estimate',
                desc: 'Commission a QS-reviewed cost plan from £95 before going to tender. Know your number before contractors quote.',
                href: '/services/estimating',
                cta: 'View estimating packages',
              },
              {
                step: '3',
                title: 'Find verified contractors',
                desc: 'Search contractors ranked by Builder Score™ — verified insurance, CDM record, and real client reviews.',
                href: '/search',
                cta: 'Search contractors',
              },
            ].map((item) => (
              <div key={item.step} style={{ backgroundColor: '#fff', border: '1px solid #EDE8DC', borderRadius: 10, padding: '28px 24px' }}>
                <div style={{ width: 36, height: 36, borderRadius: '50%', backgroundColor: 'rgba(196,119,59,0.12)', border: '1px solid rgba(196,119,59,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                  <span style={{ color: '#C4773B', fontWeight: 800, fontSize: '0.9rem' }}>{item.step}</span>
                </div>
                <h3 style={{ color: '#1A2340', fontWeight: 700, fontSize: '1rem', marginBottom: 10 }}>{item.title}</h3>
                <p style={{ color: '#4A5568', fontSize: '0.875rem', lineHeight: 1.65, marginBottom: 16 }}>{item.desc}</p>
                <Link
                  href={item.href}
                  style={{ color: '#C4773B', fontWeight: 700, fontSize: '0.875rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }}
                >
                  {item.cta} <ArrowRight style={{ width: 14, height: 14 }} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: '#1A2340', padding: '64px 24px', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <h2 style={{ color: '#F5F0E8', fontWeight: 800, fontSize: 'clamp(1.5rem, 3vw, 2rem)', marginBottom: 16 }}>
            Need help getting ready?
          </h2>
          <p style={{ color: '#c8c0b0', fontSize: '1rem', marginBottom: 28, lineHeight: 1.6 }}>
            Dwellinger can help you get to a tender-ready position — from early concept through to a fully scoped project brief, independent estimate, and verified contractor shortlist.
          </p>
          <Link
            href="/register"
            style={{ backgroundColor: '#C4773B', color: '#fff', padding: '14px 32px', borderRadius: 6, fontWeight: 800, textDecoration: 'none', fontSize: '1rem', display: 'inline-flex', alignItems: 'center', gap: 8 }}
          >
            Get started free <ArrowRight style={{ width: 16, height: 16 }} />
          </Link>
        </div>
      </section>
    </div>
  )
}
