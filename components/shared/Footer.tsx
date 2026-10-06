import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-bg border-t border-border text-text-secondary text-sm mt-auto">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="font-display font-bold text-xl text-white block mb-3">Dwell<span className="text-amber">inger</span></Link>
            <p className="text-text-muted text-xs leading-relaxed max-w-[200px]">The UK&apos;s national design, build, and property intelligence platform.</p>
            <div className="mt-4 space-y-1.5">
              <a href="tel:+447359872594" className="flex items-center gap-2 text-xs text-text-secondary hover:text-white transition-colors"><span>📞</span> +44 7359 872594</a>
              <a href="mailto:info@dwellinger.co.uk" className="flex items-center gap-2 text-xs text-text-secondary hover:text-white transition-colors"><span>✉️</span> info@dwellinger.co.uk</a>
            </div>
          </div>
          <div>
            <h3 className="text-white text-xs font-bold tracking-widest uppercase mb-4">Platform</h3>
            <ul className="space-y-2.5">
              {[{label:'For Homeowners',href:'/homeowners'},{label:'For Contractors',href:'/contractors'},{label:'For Investors',href:'/investors'},{label:'Builder Score™',href:'/builder-score'},{label:'Pricing',href:'/pricing'}].map((l) => (<li key={l.href}><Link href={l.href} className="text-text-muted hover:text-white transition-colors text-sm">{l.label}</Link></li>))}
            </ul>
          </div>
          <div>
            <h3 className="text-white text-xs font-bold tracking-widest uppercase mb-4">Tools</h3>
            <ul className="space-y-2.5">
              {[{label:'Cost Estimator',href:'/estimate'},{label:'Find Contractors',href:'/search'},{label:'Planning Intelligence',href:'/planning'},{label:'Dwell Agents',href:'/agents'},{label:'Academy',href:'/academy'}].map((l) => (<li key={l.href}><Link href={l.href} className="text-text-muted hover:text-white transition-colors text-sm">{l.label}</Link></li>))}
            </ul>
          </div>
          <div>
            <h3 className="text-white text-xs font-bold tracking-widest uppercase mb-4">Company</h3>
            <ul className="space-y-2.5">
              <li><Link href="/about" className="text-text-muted hover:text-white transition-colors text-sm">About</Link></li>
              <li><Link href="/blog" className="text-text-muted hover:text-white transition-colors text-sm">Blog</Link></li>
              <li><Link href="/contact" className="text-text-muted hover:text-white transition-colors text-sm">Contact</Link></li>
              <li><a href="https://rcbgroup.co.uk" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-white transition-colors text-sm">rcbgroup.co.uk ↗</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-xs font-bold tracking-widest uppercase mb-4">Legal</h3>
            <ul className="space-y-2.5">
              {[{label:'Privacy Policy',href:'/privacy'},{label:'Terms of Service',href:'/terms'},{label:'Cookie Policy',href:'/cookies'},{label:'Contractor Terms',href:'/contractor-terms'}].map((l) => (<li key={l.href}><Link href={l.href} className="text-text-muted hover:text-white transition-colors text-sm">{l.label}</Link></li>))}
            </ul>
          </div>
        </div>
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-xs">© {new Date().getFullYear()} Dwellinger Ltd. Registered in England &amp; Wales. Verified on <a href="https://www.checkatrade.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Checkatrade</a>.</p>
          <p className="text-text-muted text-xs">Builder Score™ is a trademark of Dwellinger Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
