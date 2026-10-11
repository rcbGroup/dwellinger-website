import { pageMetadata } from '@/lib/seo'
import Link from 'next/link'
import { BookOpen, Calculator, FileText, Map, ArrowRight } from 'lucide-react'

export const metadata = pageMetadata({
  path: '/resources',
  title: 'Construction Resources — Guides, Tools & Cost Data | Dwellinger',
  description: 'Free UK construction resources: cost guides, planning guides, contractor advice, legal explainers, and interactive tools to help you plan and manage your building project.',
})

const RESOURCE_SECTIONS = [
  {
    icon: BookOpen,
    title: 'Cost Guides',
    description: 'Realistic cost breakdowns for every major project type — based on real UK projects, not industry averages.',
    links: [
      { label: 'Rear Extension Cost Guide (2026)', href: '/resources/guides/rear-extension-cost-london' },
      { label: 'Loft Conversion Cost Guide (2026)', href: '/resources/guides/loft-conversion-cost-london' },
      { label: 'How Much Does a Rear Extension Cost? (Blog)', href: '/blog/rear-extension-cost-uk-guide' },
      { label: 'Residual Land Value Explained', href: '/blog/residual-land-value-calculator-explained' },
    ],
  },
  {
    icon: Calculator,
    title: 'Free Calculators & Tools',
    description: 'Interactive tools to estimate costs, test viability, and prepare for contractor appointments.',
    links: [
      { label: 'Construction Cost Calculator', href: '/tools/cost-calculator' },
      { label: 'Extension Cost Calculator', href: '/tools/extension-cost-calculator' },
      { label: 'Loft Conversion Calculator', href: '/tools/loft-conversion-calculator' },
      { label: 'Development Appraisal Tool', href: '/tools/development-appraisal' },
      { label: 'HMO Calculator', href: '/tools/hmo-calculator' },
      { label: 'ROI Calculator', href: '/tools/roi-calculator' },
      { label: 'Project Readiness Check', href: '/tools/project-readiness' },
    ],
  },
  {
    icon: FileText,
    title: 'Guides & Explainers',
    description: 'Practical guides on planning, compliance, CDM, choosing contractors, and running a building project.',
    links: [
      { label: 'How to Choose a Building Contractor', href: '/blog/how-to-choose-a-building-contractor' },
      { label: 'CDM 2015 Regulations: Homeowners Guide', href: '/blog/cdm-regulations-homeowners-guide' },
      { label: 'Loft Conversion Planning Permission Guide', href: '/blog/loft-conversion-planning-permission-guide' },
      { label: 'Why Star Ratings Are Not Enough', href: '/blog/why-builder-score-beats-star-ratings' },
      { label: 'How AI Is Changing Construction Businesses', href: '/blog/dwell-agents-ai-for-construction-businesses' },
    ],
  },
  {
    icon: Map,
    title: 'Planning Intelligence',
    description: 'Live UK planning application data, appeal decisions, and enforcement notices by location.',
    links: [
      { label: 'Planning Intelligence Tool', href: '/tools/planning' },
      { label: 'Investor Hub', href: '/investor-hub' },
      { label: 'Quote Comparison Tool', href: '/tools/quote-comparison' },
      { label: 'Scope Builder', href: '/tools/scope-builder' },
    ],
  },
]

export default function ResourcesPage() {
  return (
    <div>
      <section style={{ backgroundColor: '#1A2340', color: '#FFFFFF', padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <p style={{ color: '#C4773B', fontWeight: 600, fontSize: '13px', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16 }}>
            Free Resources
          </p>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: 16 }}>
            Construction Resources & Guides
          </h1>
          <p style={{ fontSize: '1.05rem', color: '#c8d0de', lineHeight: 1.65 }}>
            Everything you need to plan, budget and manage a UK building project — from first idea to contractor appointment.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: '#FAFAF7', padding: '64px 24px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(440px, 1fr))', gap: 28 }}>
            {RESOURCE_SECTIONS.map(section => (
              <div key={section.title} style={{ backgroundColor: '#FFFFFF', borderRadius: 12, border: '1px solid #EDE8DC', padding: '32px 28px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                  <div style={{ backgroundColor: '#FDF3EB', borderRadius: 8, padding: 10, display: 'flex' }}>
                    <section.icon size={20} color="#C4773B" />
                  </div>
                  <h2 style={{ color: '#1A2340', fontWeight: 700, fontSize: '1.1rem', margin: 0 }}>
                    {section.title}
                  </h2>
                </div>
                <p style={{ color: '#6B7280', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: 20 }}>
                  {section.description}
                </p>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                  {section.links.map(link => (
                    <li key={link.href} style={{ borderTop: '1px solid #F3EDE3', paddingTop: 10, paddingBottom: 10 }}>
                      <Link
                        href={link.href}
                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#1A2340', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}
                      >
                        {link.label}
                        <ArrowRight size={14} color="#C4773B" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: '#1A2340', padding: '64px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 580, margin: '0 auto' }}>
          <h2 style={{ color: '#FFFFFF', fontWeight: 700, fontSize: 'clamp(1.3rem, 3vw, 1.8rem)', marginBottom: 14 }}>
            Ready to move from research to quotes?
          </h2>
          <p style={{ color: '#c8d0de', fontSize: '1rem', marginBottom: 28, lineHeight: 1.6 }}>
            Connect with Builder Score™-verified contractors who have been checked on compliance, insurance and payment record.
          </p>
          <Link
            href="/search"
            style={{ display: 'inline-block', backgroundColor: '#C4773B', color: '#FFFFFF', padding: '14px 36px', borderRadius: 6, fontWeight: 700, fontSize: '1rem', textDecoration: 'none' }}
          >
            Find Verified Contractors
          </Link>
        </div>
      </section>
    </div>
  )
}
