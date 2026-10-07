'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'

type DropdownItem = { label: string; href: string }
type NavItem =
  | { label: string; href: string; dropdown?: undefined }
  | { label: string; href?: undefined; dropdown: DropdownItem[] }

const navItems: NavItem[] = [
  {
    label: 'Sectors',
    dropdown: [
      { label: 'Residential', href: '/sectors/residential' },
      { label: 'Commercial', href: '/sectors/commercial' },
      { label: 'Developers', href: '/sectors/developers' },
      { label: 'Bespoke Projects', href: '/sectors/bespoke' },
    ],
  },
  {
    label: 'Services',
    dropdown: [
      { label: 'Design & Build', href: '/services/design-and-build' },
      { label: 'Principal Contractor', href: '/services/principal-contractor' },
      { label: 'Estimating', href: '/services/estimating' },
      { label: 'Quantity Surveying', href: '/services/quantity-surveying' },
      { label: 'Project Management', href: '/services/project-management' },
    ],
  },
  {
    label: 'Tools',
    dropdown: [
      { label: 'Extension Calculator', href: '/tools/extension-cost-calculator' },
      { label: 'Loft Calculator', href: '/tools/loft-conversion-calculator' },
      { label: 'HMO Calculator', href: '/tools/hmo-calculator' },
      { label: 'ROI Calculator', href: '/tools/roi-calculator' },
      { label: 'Development Appraisal', href: '/tools/development-appraisal' },
      { label: 'Planning Intelligence', href: '/tools/planning' },
    ],
  },
  {
    label: 'Platform',
    dropdown: [
      { label: 'Platform Overview', href: '/platform' },
      { label: 'For Contractors', href: '/platform/for-contractors' },
      { label: 'Estimating Services', href: '/platform/estimating-services' },
      { label: 'Pricing', href: '/platform/pricing' },
    ],
  },
  { label: 'Investor Hub', href: '/investor-hub' },
  { label: 'Blog', href: '/blog' },
]

function DropdownMenu({ items, onClose }: { items: DropdownItem[]; onClose: () => void }) {
  return (
    <div
      style={{
        position: 'absolute',
        top: '100%',
        left: 0,
        backgroundColor: '#0F1621',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: 8,
        padding: '8px 0',
        minWidth: 200,
        zIndex: 100,
        boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
        marginTop: 4,
      }}
    >
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={onClose}
          style={{
            display: 'block',
            padding: '10px 16px',
            color: '#c8c0b0',
            textDecoration: 'none',
            fontSize: '0.875rem',
            fontWeight: 500,
            transition: 'color 0.15s',
          }}
          onMouseEnter={(e) => { (e.target as HTMLElement).style.color = '#fff' }}
          onMouseLeave={(e) => { (e.target as HTMLElement).style.color = '#c8c0b0' }}
        >
          {item.label}
        </Link>
      ))}
    </div>
  )
}

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header className="sticky top-0 z-50 bg-bg/80 backdrop-blur-md border-b border-border" ref={navRef}>
      <nav className="container mx-auto h-14 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <span className="font-display font-bold text-xl text-white">
            Dwell<span style={{ color: '#C4773B' }}>inger</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            if (item.dropdown) {
              const isOpen = activeDropdown === item.label
              return (
                <div key={item.label} style={{ position: 'relative' }}>
                  <button
                    onClick={() => setActiveDropdown(isOpen ? null : item.label)}
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 4,
                      padding: '8px 12px',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      color: isOpen ? '#fff' : '#c8c0b0',
                      fontSize: '0.875rem',
                      fontWeight: 500,
                      transition: 'color 0.15s',
                    }}
                  >
                    {item.label}
                    <ChevronDown className="w-3.5 h-3.5" style={{ transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
                  </button>
                  {isOpen && (
                    <div onMouseLeave={() => setActiveDropdown(null)}>
                      <DropdownMenu items={item.dropdown} onClose={() => setActiveDropdown(null)} />
                    </div>
                  )}
                </div>
              )
            }
            return (
              <Link
                key={item.label}
                href={item.href!}
                className="text-text-secondary hover:text-white text-sm font-medium transition-colors"
                style={{ padding: '8px 12px' }}
              >
                {item.label}
              </Link>
            )
          })}

          <Link
            href="/get-a-quote"
            style={{
              backgroundColor: '#C4773B',
              color: '#fff',
              padding: '8px 16px',
              borderRadius: 6,
              fontWeight: 700,
              textDecoration: 'none',
              fontSize: '0.875rem',
              marginLeft: 8,
            }}
          >
            Get a Quote
          </Link>
        </div>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/login" className="text-text-secondary hover:text-white text-sm font-medium transition-colors">
            Sign in
          </Link>
          <Link href="/register" className="btn-primary py-2 px-4 text-sm">
            Get started free
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white p-1"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-bg-surface border-t border-border">
          <div className="container mx-auto py-3 space-y-0.5">
            {navItems.map((item) => {
              if (item.dropdown) {
                const expanded = mobileExpanded === item.label
                return (
                  <div key={item.label}>
                    <button
                      onClick={() => setMobileExpanded(expanded ? null : item.label)}
                      className="w-full flex items-center justify-between py-2.5 px-1 text-text-secondary text-sm font-medium border-b border-border transition-colors"
                      style={{ background: 'none', border: 'none', borderBottom: '1px solid', cursor: 'pointer', color: '#c8c0b0' }}
                    >
                      {item.label}
                      <ChevronDown className="w-4 h-4" style={{ transform: expanded ? 'rotate(180deg)' : 'none' }} />
                    </button>
                    {expanded && (
                      <div style={{ paddingLeft: 16, backgroundColor: 'rgba(0,0,0,0.2)' }}>
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            onClick={() => setOpen(false)}
                            className="block py-2 text-sm text-text-secondary hover:text-white transition-colors"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
              }
              return (
                <Link
                  key={item.label}
                  href={item.href!}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 px-1 text-text-secondary hover:text-white text-sm font-medium border-b border-border last:border-0 transition-colors"
                >
                  {item.label}
                </Link>
              )
            })}

            <Link
              href="/get-a-quote"
              onClick={() => setOpen(false)}
              className="block py-2.5 px-1 text-sm font-bold border-b border-border transition-colors"
              style={{ color: '#C4773B' }}
            >
              Get a Quote
            </Link>

            <div className="pt-4 flex flex-col gap-2 pb-2">
              <Link href="/login" onClick={() => setOpen(false)} className="btn-secondary text-center">
                Sign in
              </Link>
              <Link href="/register" onClick={() => setOpen(false)} className="btn-primary text-center">
                Get started free
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
