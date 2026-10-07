import Link from 'next/link'

type NavItem = { label: string; href: string; external?: boolean }

const footerColumns: { heading: string; links: NavItem[] }[] = [
  {
    heading: 'Sectors',
    links: [
      { label: 'Residential', href: '/sectors/residential' },
      { label: 'Commercial', href: '/sectors/commercial' },
      { label: 'Developers', href: '/sectors/developers' },
      { label: 'Bespoke Projects', href: '/sectors/bespoke' },
    ],
  },
  {
    heading: 'Services',
    links: [
      { label: 'Design & Build', href: '/services/design-and-build' },
      { label: 'Principal Contractor', href: '/services/principal-contractor' },
      { label: 'Estimating', href: '/services/estimating' },
      { label: 'Quantity Surveying', href: '/services/quantity-surveying' },
      { label: 'Project Management', href: '/services/project-management' },
    ],
  },
  {
    heading: 'Tools',
    links: [
      { label: 'Extension Calculator', href: '/tools/extension-cost-calculator' },
      { label: 'Loft Calculator', href: '/tools/loft-conversion-calculator' },
    ],
  },
  {
    heading: 'Platform',
    links: [
      { label: 'Platform Overview', href: '/platform' },
      { label: 'Platform Pricing', href: '/platform/pricing' },
      { label: 'For Contractors', href: '/platform/for-contractors' },
      { label: 'Estimating Services', href: '/platform/estimating-services' },
      { label: 'Investor Hub', href: '/investor-hub' },
      { label: 'Book a Call', href: '/book-a-call' },
      { label: 'Blog', href: '/blog' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Cookie Policy', href: '/cookies' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-bg border-t border-border text-text-secondary text-sm mt-auto">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Brand col */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="font-display font-bold text-xl text-white block mb-3">
              Dwell<span style={{ color: '#C4773B' }}>inger</span>
            </Link>
            <p className="text-text-muted text-xs leading-relaxed max-w-[200px]">
              Where Property Gets Serious. | RCB Design &amp; Build | A2Z Principal Contractors
            </p>
            <div className="mt-4 space-y-1.5">
              <a href="tel:+447359872594" className="flex items-center gap-2 text-xs text-text-secondary hover:text-white transition-colors">
                <span>+44 7359 872594</span>
              </a>
              <a href="mailto:info@dwellinger.co.uk" className="flex items-center gap-2 text-xs text-text-secondary hover:text-white transition-colors">
                <span>info@dwellinger.co.uk</span>
              </a>
            </div>
          </div>

          {footerColumns.map((col) => (
            <div key={col.heading}>
              <h3 className="text-white text-xs font-bold tracking-widest uppercase mb-4">{col.heading}</h3>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.href}>
                    {l.external ? (
                      <a href={l.href} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-white transition-colors text-sm">
                        {l.label} &#8599;
                      </a>
                    ) : (
                      <Link href={l.href} className="text-text-muted hover:text-white transition-colors text-sm">
                        {l.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-xs">
            &copy; 2026 Dwellinger / RCB Design &amp; Build | 347 Barking Road, London E13 8EE | +44 7359 872594
          </p>
          <p className="text-text-muted text-xs">
            Builder Score&trade; is a trademark of Dwellinger. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
