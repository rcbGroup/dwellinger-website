'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Homeowners', href: '/homeowners' },
  { label: 'Contractors', href: '/contractors' },
  { label: 'Investors', href: '/investors' },
  { label: 'Builder Score™', href: '/builder-score' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-bg/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto h-14 flex items-center justify-between gap-4">
        <Link href="/" className="flex-shrink-0">
          <span className="font-display font-bold text-xl text-white">Dwell<span className="text-amber">inger</span></span>
        </Link>
        <div className="hidden md:flex items-center gap-5">
          {navLinks.map((l) => (<Link key={l.href} href={l.href} className="text-text-secondary hover:text-white text-sm font-medium transition-colors">{l.label}</Link>))}
        </div>
        <div className="hidden md:flex items-center gap-3">
          <Link href="/login" className="text-text-secondary hover:text-white text-sm font-medium transition-colors">Sign in</Link>
          <Link href="/register" className="btn-primary py-2 px-4 text-sm">Get started free</Link>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden text-white p-1" aria-label="Toggle menu">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden bg-bg-surface border-t border-border">
          <div className="container mx-auto py-3 space-y-0.5">
            {navLinks.map((l) => (<Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-2.5 px-1 text-text-secondary hover:text-white text-sm font-medium border-b border-border last:border-0 transition-colors">{l.label}</Link>))}
            <div className="pt-4 flex flex-col gap-2 pb-2">
              <Link href="/login" onClick={() => setOpen(false)} className="btn-secondary text-center">Sign in</Link>
              <Link href="/register" onClick={() => setOpen(false)} className="btn-primary text-center">Get started free</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
