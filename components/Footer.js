import Link from 'next/link'
import { Code2, X, ExternalLink, Mail } from 'lucide-react'

const footerLinks = {
  Product: [
    { label: 'Features', href: '/product' },
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'Architecture', href: '/product#architecture' },
    { label: 'Use Cases', href: '/product#use-cases' },
  ],
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Team', href: '/team' },
    { label: 'Contact', href: '/contact' },
    { label: 'Join Waitlist', href: '/contact' },
  ],
  Resources: [
    { label: 'Documentation', href: '#' },
    { label: 'Whitepaper', href: '#' },
    { label: 'API Reference', href: '#' },
    { label: 'Blog', href: '#' },
  ],
}

const socials = [
  { icon: X, href: '#', label: 'Twitter' },
  { icon: Code2, href: '#', label: 'GitHub' },
  { icon: ExternalLink, href: '#', label: 'LinkedIn' },
  { icon: Mail, href: '/contact', label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-border-subtle">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 rounded-md bg-accent/20 flex items-center justify-center">
                <div className="w-3.5 h-3.5 bg-accent" style={{clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'}} />
              </div>
              <span className="font-display font-700 text-xl">
                <span className="text-text-primary">Willu</span>
                <span className="gradient-text">store</span>
              </span>
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed max-w-xs mb-6">
              The decentralized vector store for AI-powered organizations. Secure, distributed, and built for the future.
            </p>
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg glass flex items-center justify-center text-text-dim hover:text-accent hover:border-accent/30 transition-all duration-200"
                >
                  <Icon size={16} />
                </Link>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-display font-600 text-sm text-text-primary mb-4 tracking-wider uppercase">{category}</h4>
              <ul className="space-y-3">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link href={href} className="text-sm text-text-dim hover:text-accent transition-colors duration-200">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-dim text-sm">
            © {new Date().getFullYear()} Willustore. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs text-text-dim font-mono">Systems operational</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-xs text-text-dim hover:text-accent transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-xs text-text-dim hover:text-accent transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
