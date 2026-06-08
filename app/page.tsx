import Link from 'next/link'
import {
  ArrowRight, Download, Shield, Database, Zap, Lock,
  Network, TrendingDown, AlertTriangle, XCircle, Leaf, Scale, ChevronRight
} from 'lucide-react'
import { Button, Badge } from '../components/Button'
import SectionHeader from '../components/SectionHeader'

/* ─── Hero ────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse at 20% 50%, rgba(110,91,255,0.07) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(141,125,255,0.07) 0%, transparent 60%)'
      }} />
      <div className="absolute top-1/4 left-1/5 w-96 h-96 rounded-full bg-accent/5 blur-3xl animate-float" style={{animationDelay: '0s'}} />
      <div className="absolute bottom-1/4 right-1/5 w-80 h-80 rounded-full bg-accent-purple/5 blur-3xl animate-float" style={{animationDelay: '3s'}} />

      {/* Orbital visual */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] hidden xl:block opacity-30">
        <div className="relative w-full h-full flex items-center justify-center">
          {[160, 220, 280].map((r, i) => (
            <div key={i} className="absolute rounded-full border border-accent/10" style={{ width: r * 2, height: r * 2 }} />
          ))}
          <div className="relative z-10 w-16 h-16 rounded-2xl glass glow-accent flex items-center justify-center">
            <Database size={28} className="text-accent" />
          </div>
          {[
            { color: '#6E5BFF', delay: '0s', ring: 160 },
            { color: '#8D7DFF', delay: '3s', ring: 220 },
            { color: '#6E5BFF', delay: '1.5s', ring: 280 },
          ].map((dot, i) => (
            <div key={i} className="absolute w-3 h-3 rounded-full" style={{
              background: dot.color,
              boxShadow: `0 0 12px ${dot.color}`,
              animation: `orbit ${8 + i * 4}s linear infinite`,
              top: '50%', left: '50%', marginTop: -6, marginLeft: -6,
              transformOrigin: `${dot.ring}px 6px`,
              animationDelay: dot.delay,
            }} />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 text-left lg:max-w-3xl xl:ml-16">
        <div className="animate-in">
          <Badge>🚀 Now in Beta — Apply for Early Access</Badge>
        </div>
        <h1 className="font-display font-800 text-5xl md:text-6xl lg:text-7xl leading-[1.05] mt-6 mb-6 animate-in delay-1">
          AI Data Storage,{' '}
          <span className="gradient-text text-glow">Decentralized</span>{' '}
          &amp; Secure
        </h1>
        <p className="text-text-secondary text-xl md:text-2xl leading-relaxed mb-10 max-w-2xl animate-in delay-2">
          Willustore lets universities and enterprises store AI vector data across their own users' devices — encrypted, distributed, and always in your control.
        </p>
        <div className="flex flex-col sm:flex-row items-start gap-4 animate-in delay-3">
          <Button href="/product" size="lg" variant="primary">
            <Download size={18} />Download App
          </Button>
          <Button href="/contact" size="lg" variant="secondary">
            Join Waitlist <ArrowRight size={16} />
          </Button>
        </div>
        <div className="grid grid-cols-3 gap-8 mt-16 pt-12 border-t border-border-subtle animate-in delay-4">
          {[
            { value: '10×', label: 'Cost Reduction' },
            { value: '256-bit', label: 'AES Encryption' },
            { value: '0 Leaks', label: 'Data Never Leaves Org' },
          ].map(({ value, label }) => (
            <div key={label}>
              <div className="font-display font-700 text-2xl md:text-3xl gradient-text mb-1">{value}</div>
              <div className="text-text-dim text-sm">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Problem ─────────────────────────────────────────────── */
function Problem() {
  const problems = [
    { icon: AlertTriangle, color: 'text-orange-400', bg: 'bg-orange-500/10 border-orange-500/20', title: 'Data Leakage Risk', desc: 'Centralized AI storage means sensitive organizational data lives on third-party servers — vulnerable to breaches, subpoenas, and unauthorized access.' },
    { icon: XCircle, color: 'text-red-400', bg: 'bg-red-500/10 border-red-500/20', title: 'Zero Control Over Your Data', desc: 'When you store vectors on cloud providers like Pinecone or Weaviate, you hand over control. They set the rules, access policies, and pricing.' },
    { icon: TrendingDown, color: 'text-yellow-400', bg: 'bg-yellow-500/10 border-yellow-500/20', title: 'Skyrocketing Storage Costs', desc: 'Vector databases are expensive at scale. Universities and enterprises pay millions annually for data that could live on existing infrastructure.' },
  ]
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeader badge="The Problem" title={<>The Broken State of <span className="gradient-text">AI Data Storage</span></>} subtitle="Organizations are feeding sensitive data into centralized systems they don't control — creating massive security, privacy, and cost risks." />
        <div className="grid md:grid-cols-3 gap-6 mt-14">
          {problems.map(({ icon: Icon, color, bg, title, desc }) => (
            <div key={title} className="glass border-glow rounded-2xl p-8 hover:-translate-y-1 transition-all duration-300">
              <div className={`inline-flex p-3 rounded-xl border ${bg} mb-6`}><Icon size={22} className={color} /></div>
              <h3 className="font-display font-700 text-xl text-text-primary mb-3">{title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Solution ────────────────────────────────────────────── */
function Solution() {
  const features = [
    { icon: Network, title: 'Decentralized by Design', desc: 'Data is fragmented and spread across participating user devices within your organization — no central point of failure.' },
    { icon: Lock, title: 'Military-Grade Encryption', desc: 'Every data fragment is encrypted with AES-256 before leaving the server. Only your organization holds the keys.' },
    { icon: Database, title: 'Your Internal AI Cloud', desc: 'Willustore transforms idle storage on staff laptops and phones into a powerful, private vector database.' },
    { icon: Zap, title: 'Fast Retrieval', desc: 'HNSW indexing and gossip protocol ensure sub-millisecond vector search even across distributed nodes.' },
  ]
  return (
    <section className="relative py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Badge>The Solution</Badge>
            <h2 className="font-display font-700 text-4xl lg:text-5xl mt-5 mb-6 leading-tight">
              Your AI Data, <span className="gradient-text">Your Devices,</span> Your Control
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-8">
              Willustore creates a private, decentralized vector store from the unused storage on your organization's own devices. Data never leaves your ecosystem.
            </p>
            <div className="space-y-4 mb-10">
              {features.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-4 p-4 glass rounded-xl hover:border-accent/20 transition-colors group">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Icon size={18} className="text-accent" />
                  </div>
                  <div>
                    <div className="font-display font-600 text-text-primary mb-1">{title}</div>
                    <div className="text-text-secondary text-sm">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <Button href="/product" variant="primary" size="lg">Explore the Product <ArrowRight size={16} /></Button>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="w-24 h-24 glass glow-accent rounded-3xl flex flex-col items-center justify-center gap-1">
                  <Database size={28} className="text-accent" />
                  <span className="text-xs font-mono text-accent">INDEX</span>
                </div>
              </div>
              {[
                { label: '📱 Phone', angle: 0, color: 'text-blue-400', bg: 'bg-blue-500/10' },
                { label: '💻 Laptop', angle: 72, color: 'text-accent-purple', bg: 'bg-accent-purple/10' },
                { label: '🖥️ Desktop', angle: 144, color: 'text-green-400', bg: 'bg-green-500/10' },
                { label: '📱 Tablet', angle: 216, color: 'text-yellow-400', bg: 'bg-yellow-500/10' },
                { label: '💻 Server', angle: 288, color: 'text-accent', bg: 'bg-accent/10' },
              ].map(({ label, angle, color, bg }) => {
                const rad = (angle * Math.PI) / 180
                const x = Math.cos(rad) * 160
                const y = Math.sin(rad) * 160
                return (
                  <div key={label} className={`absolute -translate-x-1/2 -translate-y-1/2 glass border ${bg} rounded-xl px-3 py-2 text-xs font-500 ${color} whitespace-nowrap`}
                    style={{ top: `calc(50% + ${y}px)`, left: `calc(50% + ${x}px)` }}>{label}</div>
                )
              })}
              <div className="absolute inset-8 rounded-full border border-accent/10 animate-spin-slow" />
              <div className="absolute inset-16 rounded-full border border-accent-purple/10 animate-spin-slow" style={{animationDirection:'reverse'}} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── How It Works (mini) ─────────────────────────────────── */
function HowItWorksSnippet() {
  const steps = [
    { num: '01', icon: Database, title: 'Store', desc: 'AI-generated vectors are encrypted and fragmented at the edge, then distributed to participating devices within your organization.' },
    { num: '02', icon: Network, title: 'Index', desc: 'A lightweight central HNSW index tracks where each fragment lives — without ever exposing the data itself.' },
    { num: '03', icon: Zap, title: 'Retrieve', desc: 'On query, fragments are fetched from nearby devices via WiFi or Bluetooth, decrypted, and assembled in milliseconds.' },
  ]
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(110,91,255,0.06) 0%, transparent 70%)' }} />
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeader badge="How It Works" title={<>Simple Process, <span className="gradient-text">Powerful Results</span></>} subtitle="Three steps to a fully distributed, encrypted AI vector store for your organization." />
        <div className="grid md:grid-cols-3 gap-8 mt-14 relative">
          <div className="absolute top-16 left-1/4 right-1/4 h-px bg-gradient-to-r from-accent/20 via-accent-purple/40 to-accent/20 hidden md:block" />
          {steps.map(({ num, icon: Icon, title, desc }) => (
            <div key={num} className="relative text-center group">
              <div className="relative inline-flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl glass border border-accent/20 flex items-center justify-center mb-6 group-hover:border-accent/50 transition-all duration-300">
                  <Icon size={24} className="text-accent" />
                </div>
                <div className="absolute -top-3 -right-3 w-7 h-7 rounded-full bg-midnight border border-border-subtle flex items-center justify-center">
                  <span className="font-mono text-xs text-text-dim">{num}</span>
                </div>
              </div>
              <h3 className="font-display font-700 text-2xl text-text-primary mb-3">{title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button href="/how-it-works" variant="secondary" size="md">Full Technical Overview <ChevronRight size={16} /></Button>
        </div>
      </div>
    </section>
  )
}

/* ─── Value Props ─────────────────────────────────────────── */
function ValueProps() {
  const values = [
    { icon: TrendingDown, color: 'text-green-400', bg: 'bg-green-500/10 border-green-500/20', title: 'Up to 10× Cost Reduction', desc: 'Replace expensive managed vector DBs with your own distributed infrastructure.', metric: '90% savings' },
    { icon: Shield, color: 'text-accent', bg: 'bg-accent/10 border-accent/20', title: 'Data Never Leaves Your Org', desc: 'Encrypted at rest and in transit. Only your devices, only your keys, only your control.', metric: 'Zero exposure' },
    { icon: Scale, color: 'text-accent-purple', bg: 'bg-accent-purple/10 border-accent-purple/20', title: 'Scales With Your Users', desc: 'The more devices participate, the more storage you have — at no additional cost.', metric: 'Auto-scaling' },
    { icon: Leaf, color: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/20', title: 'Eco-Friendly Architecture', desc: 'Reuses existing hardware instead of spinning up new data centers.', metric: 'Green computing' },
  ]
  return (
    <section className="relative py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeader badge="Why Willustore" title={<>Built for the <span className="gradient-text">Modern Organization</span></>} subtitle="Every feature is designed to give you maximum control, minimum cost, and zero compromise on security." />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {values.map(({ icon: Icon, color, bg, title, desc, metric }) => (
            <div key={title} className="glass border-glow rounded-2xl p-6 hover:-translate-y-2 transition-all duration-300 group">
              <div className={`inline-flex p-3 rounded-xl border ${bg} mb-6`}><Icon size={22} className={color} /></div>
              <div className={`text-xs font-mono font-600 ${color} mb-3 opacity-70 group-hover:opacity-100 transition-opacity`}>{metric}</div>
              <h3 className="font-display font-700 text-lg text-text-primary mb-3 leading-snug">{title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 glass rounded-2xl overflow-hidden border-glow">
          <div className="px-8 py-5 border-b border-border-subtle">
            <h3 className="font-display font-600 text-text-primary">Willustore vs. Traditional Vector DBs</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border-subtle">
                  <th className="text-left px-8 py-4 text-text-dim text-sm font-500">Feature</th>
                  <th className="px-8 py-4 text-sm font-600 text-accent">Willustore</th>
                  <th className="px-8 py-4 text-sm font-500 text-text-dim">Cloud Vector DB</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Data Sovereignty', '✅ 100% yours', '❌ Third-party'],
                  ['Storage Cost', '✅ Near-zero', '❌ $200–$5k/mo'],
                  ['Privacy Guarantee', '✅ On-device encryption', '⚠️ Contract-based'],
                  ['Setup Complexity', '✅ One app install', '⚠️ Cloud config'],
                  ['Scales with Users', '✅ Automatic', '❌ Pay per GB'],
                ].map(([feature, us, them], i) => (
                  <tr key={i} className="border-b border-border-subtle/50 hover:bg-accent/2 transition-colors">
                    <td className="px-8 py-4 text-text-secondary text-sm">{feature}</td>
                    <td className="px-8 py-4 text-sm text-center">{us}</td>
                    <td className="px-8 py-4 text-sm text-center text-text-dim">{them}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── CTA ─────────────────────────────────────────────────── */
function CTA() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(110,91,255,0.08) 0%, rgba(141,125,255,0.05) 40%, transparent 70%)' }} />
      <div className="relative max-w-4xl mx-auto px-6 lg:px-10 text-center">
        <Badge color="purple">🎯 Early Access Open</Badge>
        <h2 className="font-display font-800 text-4xl md:text-5xl lg:text-6xl mt-6 mb-6 leading-tight">
          Ready to Take Back <span className="gradient-text">Control of Your AI Data?</span>
        </h2>
        <p className="text-text-secondary text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
          Join leading universities and enterprises already on the waitlist. Early adopters get 12 months free and priority onboarding.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/product" size="lg" variant="primary"><Download size={18} />Download App</Button>
          <Button href="/contact" size="lg" variant="secondary">Join the Waitlist <ArrowRight size={16} /></Button>
        </div>
        <p className="mt-6 text-text-dim text-sm">No credit card required • Free for early adopters • Cancel anytime</p>
      </div>
    </section>
  )
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Problem />
      <Solution />
      <HowItWorksSnippet />
      <ValueProps />
      <CTA />
    </>
  )
}
