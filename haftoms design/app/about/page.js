import { Shield, Globe, Cpu, Users, ArrowRight, Target, Lightbulb, Heart } from 'lucide-react'
import { Button, Badge } from '../../components/Button'
import SectionHeader from '../../components/SectionHeader'
import Link from 'next/link'

export const metadata = {
  title: 'About — Willustore',
  description: 'Learn about our mission to decentralize AI data storage for organizations worldwide.',
}

const values = [
  {
    icon: Shield,
    title: 'Privacy First',
    desc: 'We believe organizations should never have to trust a third party with sensitive AI data. Privacy is architecture, not policy.',
  },
  {
    icon: Globe,
    title: 'Truly Decentralized',
    desc: 'No central data server. No single point of failure. Distribution is in our DNA — not bolted on as an afterthought.',
  },
  {
    icon: Lightbulb,
    title: 'Accessible Innovation',
    desc: 'The most powerful AI storage shouldn\'t require a Fortune 500 budget. We\'re making enterprise-grade tech accessible to everyone.',
  },
  {
    icon: Heart,
    title: 'Community-Driven',
    desc: 'Users are participants, not just customers. When you share idle storage, you power the network for everyone.',
  },
]

const milestones = [
  { year: '2023', title: 'Founded', desc: 'Willustore was founded with a vision to fix broken AI data infrastructure.' },
  { year: '2024', title: 'Research Phase', desc: 'Developed the HNSW + gossip protocol architecture and filed provisional patents.' },
  { year: '2024', title: 'Beta Launch', desc: 'Launched closed beta with 5 universities and 3 enterprise partners.' },
  { year: '2025', title: 'Public Beta', desc: 'Opening access to organizations worldwide. Join the waitlist today.' },
]

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse at 30% 40%, rgba(0,212,255,0.06) 0%, transparent 60%)'
        }} />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <Badge>Our Story</Badge>
            <h1 className="font-display font-800 text-5xl md:text-6xl leading-tight mt-5 mb-6">
              We're Fixing a{' '}
              <span className="gradient-text">Broken System</span>
            </h1>
            <p className="text-text-secondary text-xl leading-relaxed mb-6">
              When AI took off, organizations rushed to adopt it — but nobody stopped to ask: "Where is all this data actually going?" The answer was uncomfortable: to clouds you don't own, in servers you can't inspect, under contracts you barely read.
            </p>
            <p className="text-text-secondary text-xl leading-relaxed mb-8">
              Willustore was born from a simple belief — <span className="text-text-primary font-500">your organization's AI data should live on your organization's devices.</span>
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Get In Touch <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader
                badge="Our Mission"
                title={<>Decentralize the <span className="gradient-text">AI Data Layer</span></>}
                subtitle=""
                center={false}
              />
              <p className="text-text-secondary text-lg leading-relaxed mt-4 mb-6">
                Our mission is to make decentralized vector storage the default for any organization that values privacy, cost efficiency, and data sovereignty.
              </p>
              <p className="text-text-secondary leading-relaxed mb-8">
                We envision a world where universities can train and retrieve AI models using their students' and faculty's devices — turning idle hardware into a powerful private cloud. Where enterprises never have to worry about vendor lock-in or data breaches from third-party providers.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Beta Users', value: '500+' },
                  { label: 'Universities Onboarded', value: '12' },
                  { label: 'Data Stored', value: '2.4TB' },
                  { label: 'Avg Cost Saved', value: '87%' },
                ].map(({ label, value }) => (
                  <div key={label} className="glass rounded-xl p-5">
                    <div className="font-display font-700 text-2xl gradient-text mb-1">{value}</div>
                    <div className="text-text-dim text-sm">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="glass border-glow rounded-3xl p-10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-accent/5 rounded-full blur-2xl" />
                <Target size={40} className="text-accent mb-6" />
                <blockquote className="font-display font-600 text-2xl text-text-primary leading-snug mb-6">
                  "The future of AI infrastructure is not in bigger data centers — it's in the devices people already own."
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-accent-purple flex items-center justify-center text-midnight font-700 text-sm">
                    AH
                  </div>
                  <div>
                    <div className="text-text-primary font-600 text-sm">Abebe Haile</div>
                    <div className="text-text-dim text-xs">CEO & Co-founder, Willustore</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionHeader
            badge="Our Values"
            title={<>What We <span className="gradient-text">Stand For</span></>}
            subtitle="Every engineering decision, every design choice, every partnership is guided by these core principles."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="glass border-glow rounded-2xl p-7 hover:-translate-y-1 transition-all duration-300 text-center">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-5">
                  <Icon size={24} className="text-accent" />
                </div>
                <h3 className="font-display font-700 text-lg text-text-primary mb-3">{title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionHeader
            badge="Our Journey"
            title={<>From Idea to <span className="gradient-text">Infrastructure</span></>}
            subtitle="The story of building Willustore from the ground up."
          />
          <div className="relative mt-14 max-w-3xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent/40 via-accent-purple/40 to-transparent" />
            <div className="space-y-10">
              {milestones.map(({ year, title, desc }, i) => (
                <div key={i} className="flex gap-8 items-start">
                  <div className="relative shrink-0 w-16 h-16 flex flex-col items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-accent glow-accent z-10" />
                    <span className="font-mono text-xs text-accent mt-1">{year}</span>
                  </div>
                  <div className="glass rounded-2xl p-6 flex-1 hover:border-accent/20 transition-colors">
                    <h3 className="font-display font-700 text-text-primary text-lg mb-2">{title}</h3>
                    <p className="text-text-secondary text-sm">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <div className="glass border-glow rounded-3xl p-14 relative overflow-hidden">
            <div className="absolute inset-0" style={{
              background: 'radial-gradient(ellipse at 50% 50%, rgba(0,212,255,0.05) 0%, transparent 70%)'
            }} />
            <div className="relative">
              <h2 className="font-display font-700 text-4xl text-text-primary mb-4">
                Join Our <span className="gradient-text">Mission</span>
              </h2>
              <p className="text-text-secondary text-lg mb-8">
                Whether you're a researcher, developer, or organization leader — we'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/contact" variant="primary" size="lg">Get in Touch</Button>
                <Button href="/team" variant="secondary" size="lg">Meet the Team</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
