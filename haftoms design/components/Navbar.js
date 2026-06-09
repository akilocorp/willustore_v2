'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Zap } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/product', label: 'Product' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/team', label: 'Team' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-midnight/90 backdrop-blur-xl border-b border-border-subtle shadow-lg shadow-black/30'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-18 flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="relative w-8 h-8">
            <div className="absolute inset-0 rounded-lg bg-accent/20 group-hover:bg-accent/30 transition-colors duration-300" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-4 h-4 rounded-sm bg-accent animate-pulse-glow" style={{clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'}} />
            </div>
          </div>
          <span className="font-display font-700 text-xl tracking-tight">
            <span className="text-text-primary">Willu</span>
            <span className="gradient-text">store</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm font-body font-500 tracking-wide transition-all duration-200 hover:text-accent relative group ${
                pathname === href ? 'text-accent' : 'text-text-secondary'
              }`}
            >
              {label}
              <span className={`absolute -bottom-1 left-0 h-px bg-accent transition-all duration-300 ${
                pathname === href ? 'w-full' : 'w-0 group-hover:w-full'
              }`} />
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/contact"
            className="px-4 py-2 text-sm font-500 text-text-secondary hover:text-accent transition-colors duration-200"
          >
            Join Waitlist
          </Link>
          <Link
            href="/product"
            className="flex items-center gap-2 px-5 py-2.5 text-sm font-600 bg-accent text-midnight rounded-lg hover:bg-accent-glow transition-all duration-200 hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-0.5"
          >
            <Zap size={14} />
            Get Started
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg text-text-secondary hover:text-accent hover:bg-accent/10 transition-all"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${open ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="glass-dark border-t border-border-subtle px-6 py-6 flex flex-col gap-5">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`text-base font-500 transition-colors ${
                pathname === href ? 'text-accent' : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              {label}
            </Link>
          ))}
          <div className="pt-4 border-t border-border-subtle flex flex-col gap-3">
            <Link href="/contact" onClick={() => setOpen(false)} className="w-full text-center py-3 text-sm font-500 border border-border-subtle rounded-lg text-text-secondary hover:border-accent/30 hover:text-accent transition-all">
              Join Waitlist
            </Link>
            <Link href="/product" onClick={() => setOpen(false)} className="w-full text-center py-3 text-sm font-600 bg-accent text-midnight rounded-lg hover:bg-accent-glow transition-all">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
