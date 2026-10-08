'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown, Sun, Moon, Sunset } from 'lucide-react'
import { useTheme, type Theme } from '@/components/providers/ThemeProvider'
import { useLang, LANGUAGES, type Lang } from '@/components/providers/LanguageProvider'

type DropdownItem = { label: string; href: string }
type NavItem =
  | { label: string; href: string; dropdown?: undefined }
  | { label: string; href?: undefined; dropdown: DropdownItem[] }

const navItems: NavItem[] = [
  {
    label: 'Find',
    dropdown: [
      { label: 'Find Contractors', href: '/search' },
      { label: 'Post a Project', href: '/register?type=homeowner' },
      { label: 'Design & Build Contractors', href: '/services/design-and-build' },
      { label: 'Principal Contractors', href: '/services/principal-contractor' },
      { label: 'Project Management', href: '/services/project-management' },
    ],
  },
  {
    label: 'Estimate',
    dropdown: [
      { label: 'Get an Estimate', href: '/services/estimating' },
      { label: 'Quantity Surveying', href: '/services/quantity-surveying' },
      { label: 'Extension Calculator', href: '/tools/extension-cost-calculator' },
      { label: 'Loft Calculator', href: '/tools/loft-conversion-calculator' },
      { label: 'Development Appraisal', href: '/tools/development-appraisal' },
    ],
  },
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
    label: 'Intelligence',
    dropdown: [
      { label: 'Planning Intelligence', href: '/tools/planning' },
      { label: 'HMO Calculator', href: '/tools/hmo-calculator' },
      { label: 'ROI Calculator', href: '/tools/roi-calculator' },
      { label: 'Investor Hub', href: '/investor-hub' },
    ],
  },
  {
    label: 'Platform',
    dropdown: [
      { label: 'Platform Overview', href: '/platform' },
      { label: 'For Contractors', href: '/platform/for-contractors' },
      { label: 'Pricing', href: '/platform/pricing' },
      { label: 'About Dwellinger', href: '/about' },
    ],
  },
  { label: 'Blog', href: '/blog' },
]

const THEMES: { value: Theme; label: string; Icon: React.FC<{ className?: string }> }[] = [
  { value: 'dark', label: 'Dark', Icon: Moon },
  { value: 'mid', label: 'Twilight', Icon: Sunset },
  { value: 'light', label: 'Light', Icon: Sun },
]

function dropdownBg() {
  return 'var(--color-bg-surface)'
}
function dropdownBorder() {
  return '1px solid var(--color-border)'
}
function dropdownText() {
  return 'var(--color-text-secondary)'
}

function DropdownMenu({ items, onClose }: { items: DropdownItem[]; onClose: () => void }) {
  return (
    <div
      style={{
        position: 'absolute',
        top: '100%',
        left: 0,
        backgroundColor: dropdownBg(),
        border: dropdownBorder(),
        borderRadius: 8,
        padding: '8px 0',
        minWidth: 210,
        zIndex: 100,
        boxShadow: 'var(--card-shadow-hover)',
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
            color: dropdownText(),
            textDecoration: 'none',
            fontSize: '0.875rem',
            fontWeight: 500,
            transition: 'color 0.15s, background 0.15s',
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget
            el.style.color = 'var(--color-text)'
            el.style.backgroundColor = 'var(--color-bg-raised)'
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget
            el.style.color = dropdownText()
            el.style.backgroundColor = 'transparent'
          }}
        >
          {item.label}
        </Link>
      ))}
    </div>
  )
}

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const current = THEMES.find((t) => t.value === theme) ?? THEMES[0]
  const Icon = current.Icon

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <button
        onClick={() => setOpen(!open)}
        title={`Theme: ${current.label}`}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 4,
          padding: '6px 8px',
          background: 'var(--color-bg-raised)',
          border: '1px solid var(--color-border)',
          borderRadius: 6,
          cursor: 'pointer',
          color: 'var(--color-text-secondary)',
          fontSize: '0.75rem',
          fontWeight: 600,
        }}
      >
        <Icon className="w-3.5 h-3.5" />
      </button>
      {open && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            right: 0,
            marginTop: 4,
            backgroundColor: 'var(--color-bg-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: 8,
            padding: '6px 0',
            minWidth: 130,
            zIndex: 200,
            boxShadow: 'var(--card-shadow-hover)',
          }}
        >
          {THEMES.map(({ value, label, Icon: TIcon }) => (
            <button
              key={value}
              onClick={() => { setTheme(value); setOpen(false) }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                width: '100%',
                padding: '8px 14px',
                background: theme === value ? 'var(--color-bg-raised)' : 'none',
                border: 'none',
                cursor: 'pointer',
                color: theme === value ? 'var(--color-text)' : 'var(--color-text-secondary)',
                fontSize: '0.8rem',
                fontWeight: theme === value ? 700 : 500,
                textAlign: 'left',
              }}
            >
              <TIcon className="w-3.5 h-3.5" />
              {label}
              {theme === value && <span style={{ marginLeft: 'auto', color: 'var(--amber)', fontSize: '0.6rem' }}>✓</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

function LangToggle() {
  const { lang, setLang } = useLang()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const langList = Object.entries(LANGUAGES) as [Lang, { label: string; native: string }][]

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <button
        onClick={() => setOpen(!open)}
        title={`Language: ${LANGUAGES[lang].label}`}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 4,
          padding: '6px 8px',
          background: 'var(--color-bg-raised)',
          border: '1px solid var(--color-border)',
          borderRadius: 6,
          cursor: 'pointer',
          color: 'var(--color-text-secondary)',
          fontSize: '0.75rem',
          fontWeight: 600,
        }}
      >
        🌐 <span style={{ fontSize: '0.7rem' }}>{lang.toUpperCase()}</span>
      </button>
      {open && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            right: 0,
            marginTop: 4,
            backgroundColor: 'var(--color-bg-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: 8,
            padding: '6px 0',
            minWidth: 160,
            zIndex: 200,
            boxShadow: 'var(--card-shadow-hover)',
            maxHeight: 340,
            overflowY: 'auto',
          }}
        >
          {langList.map(([code, info]) => (
            <button
              key={code}
              onClick={() => { setLang(code); setOpen(false) }}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                padding: '8px 14px',
                background: lang === code ? 'var(--color-bg-raised)' : 'none',
                border: 'none',
                cursor: 'pointer',
                color: lang === code ? 'var(--color-text)' : 'var(--color-text-secondary)',
                fontSize: '0.8rem',
                fontWeight: lang === code ? 700 : 500,
                textAlign: 'left',
              }}
            >
              <span>{info.native}</span>
              {lang === code && <span style={{ color: 'var(--amber)', fontSize: '0.6rem' }}>✓</span>}
            </button>
          ))}
        </div>
      )}
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
    <header
      ref={navRef}
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backgroundColor: 'var(--color-bg)',
        borderBottom: '1px solid var(--color-border)',
        backdropFilter: 'blur(12px)',
      }}
    >
      <nav style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', height: 56, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        {/* Logo */}
        <Link href="/" style={{ flexShrink: 0, textDecoration: 'none' }}>
          <span style={{ fontFamily: 'Playfair Display, Georgia, serif', fontWeight: 800, fontSize: '1.2rem', color: 'var(--color-text)' }}>
            Dwell<span style={{ color: '#C4773B' }}>inger</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }} className="hidden md:flex">
          {navItems.map((item) => {
            if (item.dropdown) {
              const isOpen = activeDropdown === item.label
              return (
                <div key={item.label} style={{ position: 'relative' }}>
                  <button
                    onClick={() => setActiveDropdown(isOpen ? null : item.label)}
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    style={{
                      display: 'flex', alignItems: 'center', gap: 4,
                      padding: '8px 10px',
                      background: 'none', border: 'none', cursor: 'pointer',
                      color: isOpen ? 'var(--color-text)' : 'var(--color-text-secondary)',
                      fontSize: '0.875rem', fontWeight: 500, transition: 'color 0.15s',
                    }}
                  >
                    {item.label}
                    <ChevronDown
                      className="w-3.5 h-3.5"
                      style={{ transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}
                    />
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
                style={{ padding: '8px 10px', color: 'var(--color-text-secondary)', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 500 }}
              >
                {item.label}
              </Link>
            )
          })}
        </div>

        {/* Right side controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          {/* Theme + Lang toggles */}
          <div className="hidden md:flex items-center gap-2">
            <ThemeToggle />
            <LangToggle />
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/login"
              style={{ color: 'var(--color-text-secondary)', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 500 }}
            >
              Sign in
            </Link>
            <Link
              href="/register"
              style={{
                backgroundColor: 'var(--amber)', color: '#fff',
                padding: '7px 16px', borderRadius: 6, fontWeight: 700,
                textDecoration: 'none', fontSize: '0.875rem',
              }}
            >
              Get started free
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden"
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-text)', padding: 4 }}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden"
          style={{ backgroundColor: 'var(--color-bg-surface)', borderTop: '1px solid var(--color-border)' }}
        >
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '12px 24px' }}>
            {/* Theme & Lang on mobile */}
            <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
              <ThemeToggle />
              <LangToggle />
            </div>

            {navItems.map((item) => {
              if (item.dropdown) {
                const expanded = mobileExpanded === item.label
                return (
                  <div key={item.label} style={{ borderBottom: '1px solid var(--color-border)' }}>
                    <button
                      onClick={() => setMobileExpanded(expanded ? null : item.label)}
                      style={{
                        width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        padding: '10px 0', background: 'none', border: 'none', cursor: 'pointer',
                        color: 'var(--color-text-secondary)', fontSize: '0.875rem', fontWeight: 500,
                      }}
                    >
                      {item.label}
                      <ChevronDown className="w-4 h-4" style={{ transform: expanded ? 'rotate(180deg)' : 'none' }} />
                    </button>
                    {expanded && (
                      <div style={{ paddingLeft: 12, paddingBottom: 8 }}>
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            onClick={() => setOpen(false)}
                            style={{ display: 'block', padding: '7px 0', color: 'var(--color-text-muted)', textDecoration: 'none', fontSize: '0.875rem' }}
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
                  style={{
                    display: 'block', padding: '10px 0', color: 'var(--color-text-secondary)',
                    textDecoration: 'none', fontSize: '0.875rem', fontWeight: 500,
                    borderBottom: '1px solid var(--color-border)',
                  }}
                >
                  {item.label}
                </Link>
              )
            })}

            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, paddingTop: 12, paddingBottom: 8 }}>
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                style={{
                  display: 'block', textAlign: 'center', padding: '10px',
                  backgroundColor: 'var(--color-bg-raised)', border: '1px solid var(--color-border)',
                  borderRadius: 6, color: 'var(--color-text)', textDecoration: 'none', fontWeight: 600, fontSize: '0.875rem',
                }}
              >
                Sign in
              </Link>
              <Link
                href="/register"
                onClick={() => setOpen(false)}
                style={{
                  display: 'block', textAlign: 'center', padding: '10px',
                  backgroundColor: 'var(--amber)', borderRadius: 6,
                  color: '#fff', textDecoration: 'none', fontWeight: 700, fontSize: '0.875rem',
                }}
              >
                Get started free
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
