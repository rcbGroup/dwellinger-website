'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown, Sun, Moon, SunMedium } from 'lucide-react'
import { useTheme, type Theme } from '@/components/providers/ThemeProvider'
import { useLang, LANGUAGES, type Lang } from '@/components/providers/LanguageProvider'
import { Logo } from '@/components/shared/Logo'

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

const THEMES = [
  { value: 'dark' as Theme,  label: 'Dark',     Icon: Moon      },
  { value: 'mid' as Theme,   label: 'Twilight', Icon: SunMedium },
  { value: 'light' as Theme, label: 'Light',    Icon: Sun       },
]

// ── Helpers ─────────────────────────────────────────────────────────────────────────────

function DropdownMenu({ items, onClose }: { items: DropdownItem[]; onClose: () => void }) {
  return (
    <div
      style={{
        position: 'absolute',
        top: '100%',
        left: 0,
        backgroundColor: 'var(--color-bg-surface)',
        border: '1px solid var(--color-border)',
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
            color: 'var(--color-text-secondary)',
            textDecoration: 'none',
            fontSize: '0.875rem',
            fontWeight: 500,
            transition: 'color 0.15s, background 0.15s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = 'var(--color-text)'
            e.currentTarget.style.backgroundColor = 'var(--color-bg-raised)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'var(--color-text-secondary)'
            e.currentTarget.style.backgroundColor = 'transparent'
          }}
        >
          {item.label}
        </Link>
      ))}
    </div>
  )
}

// ── Theme controls ────────────────────────────────────────────────────────────────────────

/**
 * ThemePill — compact 3-button segment, always visible in the nav bar.
 * Used on ALL screen sizes. Replaces the dropdown ThemeToggle on mobile.
 */
function ThemePill() {
  const { theme, setTheme } = useTheme()
  return (
    <div
      style={{
        display: 'flex',
        gap: 2,
        background: 'var(--color-bg-raised)',
        border: '1px solid var(--color-border)',
        borderRadius: 8,
        padding: 2,
        flexShrink: 0,
      }}
      title="Change brightness"
    >
      {THEMES.map(({ value, label, Icon }) => (
        <button
          key={value}
          onClick={() => setTheme(value)}
          aria-label={label}
          title={label}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 28,
            height: 28,
            borderRadius: 6,
            background: theme === value ? 'var(--amber)' : 'transparent',
            border: 'none',
            cursor: 'pointer',
            color: theme === value ? '#fff' : 'var(--color-text-secondary)',
            transition: 'background 0.15s, color 0.15s',
            flexShrink: 0,
          }}
        >
          <Icon size={14} />
        </button>
      ))}
    </div>
  )
}

// ── Language control ─────────────────────────────────────────────────────────────────────

// Map our lang codes to Google Translate language codes
const GT_LANG_MAP: Record<string, string> = {
  en: 'en', ro: 'ro', pl: 'pl', pt: 'pt', it: 'it',
  es: 'es', de: 'de', fr: 'fr', ru: 'ru', bg: 'bg',
  hu: 'hu', ar: 'ar', zh: 'zh-CN',
}

function triggerGoogleTranslate(gtCode: string) {
  const attempt = () => {
    const combo = document.querySelector<HTMLSelectElement>('.goog-te-combo')
    if (combo) {
      combo.value = gtCode
      combo.dispatchEvent(new Event('change', { bubbles: true }))
      return true
    }
    return false
  }
  if (!attempt()) {
    // Widget not ready yet — poll until it is (max 3s)
    let tries = 0
    const interval = setInterval(() => {
      if (attempt() || ++tries > 30) clearInterval(interval)
    }, 100)
  }
}

function restoreEnglish() {
  // Clear googtrans cookies
  const host = window.location.hostname
  const exp = 'Thu, 01 Jan 1970 00:00:00 UTC'
  document.cookie = `googtrans=; expires=${exp}; path=/`
  document.cookie = `googtrans=; expires=${exp}; path=/; domain=${host}`
  document.cookie = `googtrans=; expires=${exp}; path=/; domain=.${host}`
  window.location.reload()
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

  const handleSelect = (code: Lang) => {
    setLang(code)
    setOpen(false)
    if (code === 'en') {
      restoreEnglish()
    } else {
      triggerGoogleTranslate(GT_LANG_MAP[code] ?? code)
    }
  }

  const langList = Object.entries(LANGUAGES) as [Lang, { label: string; native: string }][]

  return (
    <div ref={ref} style={{ position: 'relative', flexShrink: 0 }}>
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
          fontSize: '0.7rem',
          fontWeight: 700,
          flexShrink: 0,
          whiteSpace: 'nowrap',
        }}
      >
        🌐 <span>{lang.toUpperCase()}</span>
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
            maxHeight: 320,
            overflowY: 'auto',
          }}
        >
          {langList.map(([code, info]) => (
            <button
              key={code}
              onClick={() => handleSelect(code)}
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

// ── Nav ───────────────────────────────────────────────────────────────────────────────────

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

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handler = () => { if (window.innerWidth >= 768) setOpen(false) }
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
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
      {/* ── Top bar ─────────────────────────────────────────────────────────────────── */}
      <nav
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 16px',
          height: 56,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 8,
        }}
      >
        {/* Logo */}
        <div style={{ flexShrink: 0 }}>
          <Logo size="sm" />
        </div>

        {/* Desktop nav links — NOTE: NO inline display:flex here; Tailwind hidden/md:flex controls it */}
        <div
          className="hidden md:flex"
          style={{ alignItems: 'center', gap: 4, flex: 1, justifyContent: 'center' }}
        >
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
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {item.label}
                    <ChevronDown
                      size={14}
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
                style={{
                  padding: '8px 10px',
                  color: 'var(--color-text-secondary)',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  whiteSpace: 'nowrap',
                }}
              >
                {item.label}
              </Link>
            )
          })}
        </div>

        {/* Right-side controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexShrink: 0 }}>

          {/* ThemePill — ALWAYS visible on every device */}
          <ThemePill />

          {/* LangToggle — ALWAYS visible on every device */}
          <LangToggle />

          {/* Sign in + Get started — desktop only */}
          <div
            className="hidden md:flex"
            style={{ alignItems: 'center', gap: 10, marginLeft: 4 }}
          >
            <Link
              href="/login"
              style={{
                color: 'var(--color-text-secondary)',
                textDecoration: 'none',
                fontSize: '0.875rem',
                fontWeight: 500,
                whiteSpace: 'nowrap',
              }}
            >
              Sign in
            </Link>
            <Link
              href="/register"
              style={{
                backgroundColor: 'var(--amber)',
                color: '#fff',
                padding: '7px 14px',
                borderRadius: 6,
                fontWeight: 700,
                textDecoration: 'none',
                fontSize: '0.875rem',
                whiteSpace: 'nowrap',
              }}
            >
              Get started free
            </Link>
          </div>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--color-text)',
              padding: 4,
              display: 'flex',
              alignItems: 'center',
              flexShrink: 0,
            }}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* ── Mobile drawer ────────────────────────────────────────────────────────────────────── */}
      {open && (
        <div
          className="md:hidden"
          style={{
            backgroundColor: 'var(--color-bg-surface)',
            borderTop: '1px solid var(--color-border)',
          }}
        >
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '8px 16px 16px' }}>

            {/* Nav items */}
            {navItems.map((item) => {
              if (item.dropdown) {
                const expanded = mobileExpanded === item.label
                return (
                  <div key={item.label} style={{ borderBottom: '1px solid var(--color-border)' }}>
                    <button
                      onClick={() => setMobileExpanded(expanded ? null : item.label)}
                      style={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '12px 0',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        color: 'var(--color-text-secondary)',
                        fontSize: '0.9rem',
                        fontWeight: 600,
                      }}
                    >
                      {item.label}
                      <ChevronDown
                        size={16}
                        style={{ transform: expanded ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}
                      />
                    </button>
                    {expanded && (
                      <div style={{ paddingLeft: 12, paddingBottom: 10 }}>
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            onClick={() => { setOpen(false); setMobileExpanded(null) }}
                            style={{
                              display: 'block',
                              padding: '8px 0',
                              color: 'var(--color-text-muted)',
                              textDecoration: 'none',
                              fontSize: '0.875rem',
                            }}
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
                    display: 'block',
                    padding: '12px 0',
                    color: 'var(--color-text-secondary)',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    borderBottom: '1px solid var(--color-border)',
                  }}
                >
                  {item.label}
                </Link>
              )
            })}

            {/* CTA buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, paddingTop: 14 }}>
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                style={{
                  display: 'block',
                  textAlign: 'center',
                  padding: '11px',
                  backgroundColor: 'var(--color-bg-raised)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 8,
                  color: 'var(--color-text)',
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                }}
              >
                Sign in
              </Link>
              <Link
                href="/register"
                onClick={() => setOpen(false)}
                style={{
                  display: 'block',
                  textAlign: 'center',
                  padding: '11px',
                  backgroundColor: 'var(--amber)',
                  borderRadius: 8,
                  color: '#fff',
                  textDecoration: 'none',
                  fontWeight: 700,
                  fontSize: '0.9rem',
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
