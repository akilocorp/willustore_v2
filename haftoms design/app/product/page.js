import {
  Database, Shield, Network, Zap, Lock, Globe, Cpu, Server,
  GraduationCap, Building2, Users, ChevronRight, ArrowRight, Check
} from 'lucide-react'
import { Button, Badge } from '../../components/Button'
import SectionHeader from '../../components/SectionHeader'

export const metadata = {
  title: 'Product — Willustore',
  description: 'Explore Willustore\'s decentralized vector store — features, architecture, and use cases for universities and enterprises.',
}

const features = [
  {
    icon: Lock,
    title: 'End-to-End Encryption',
    desc: 'AES-256-GCM encryption is applied to every vector fragment before it leaves the central server. Only authorized clients hold decryption keys.',
    tag: 'Security',
    tagColor: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
  },
  {
    icon: Network,
    title: 'Gossip Protocol Routing',
    desc: 'Nodes discover and communicate with each other using a gossip-based protocol, ensuring resilience even if many devices go offline.',
    tag: 'Networking',
    tagColor: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
  },
  {
    icon: Zap,
    title: 'HNSW Vector Indexing',
    desc: 'Hierarchical Navigable Small World graphs enable approximate nearest-neighbor search at sub-millisecond speeds across distributed nodes.',
    tag: 'Performance',
    tagColor: 'text-accent bg-accent/10 border-accent/20',
  },
  {
    icon: Shield,
    title: 'Zero-Trust Architecture',
    desc: 'No device is trusted by default. Every read/write is authenticated and authorized via your organization\'s identity provider.',
    tag: 'Trust',
    tagColor: 'text-green-400 bg-green-500/10 border-green-500/20',
  },
  {
    icon: Server,
    title: 'Lightweight Client Agent',
    desc: 'A minimal background app on participating devices uses only idle storage and bandwidth — no impact on device performance.',
    tag: 'Experience',
    tagColor: 'text-orange-400 bg-orange-500/10 border-orange-500/20',
  },
  {
    icon: Globe,
    title: 'WiFi & Bluetooth Retrieval',
    desc: 'Data fragments are fetched via local network protocols, minimizing internet bandwidth usage and latency for on-campus or in-office use.',
    tag: 'Connectivity',
    tagColor: 'text-pink-400 bg-pink-500/10 border-pink-500/20',
  },
]

const useCases = [
  {
    icon: GraduationCap,
    title: 'Universities',
    subtitle: 'Academic AI without cloud dependency',
    points: [
      'Store research embeddings and academic model data on student/faculty devices',
      'Comply with FERPA and GDPR — data never leaves campus network',
      'Save up to 95% vs commercial vector database providers',
      'Power LLM-based student tools: tutors, search, recommendations',
      'Faculty research data stays encrypted on university-owned devices',
    ],
    cta: 'University Pricing →',
  },
  {
    icon: Building2,
    title: 'Enterprises',
    subtitle: 'Private AI infrastructure at scale',
    points: [
      'Internal knowledge base and semantic search across all documents',
      'Customer data never touches third-party AI providers',
      'Audit trail for every data access — full compliance reporting',
      'Scales automatically as your employee base grows',
      'Integrates with existing SSO and enterprise identity systems',
    ],
    cta: 'Enterprise Pricing →',
  },
]

const plans = [
  {
    name: 'Starter',
    price: 'Free',
    period: 'forever',
    desc: 'For small teams exploring decentralized storage.',
    features: [
      'Up to 10 participating devices',
      '10 GB distributed storage',
      'Basic HNSW indexing',
      'Community support',
      'Standard encryption',
    ],
    cta: 'Start Free',
    variant: 'secondary',
  },
  {
    name: 'Organization',
    price: '$299',
    period: '/month',
    desc: 'For universities and mid-size enterprises.',
    features: [
      'Unlimited devices',
      '5 TB distributed storage',
      'Advanced HNSW + gossip protocol',
      'Priority support & SLA',
      'SSO / SAML integration',
      'Compliance reports',
      'Admin dashboard',
    ],
    cta: 'Join Waitlist',
    variant: 'primary',
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'per agreement',
    desc: 'For large institutions with custom requirements.',
    features: [
      'Everything in Organization',
      'On-premise deployment option',
      'Dedicated support engineer',
      'Custom SLA & legal',
      'Advanced audit logging',
      'API & SDK access',
    ],
    cta: 'Contact Sales',
    variant: 'secondary',
  },
]

export default function ProductPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse at 70% 30%, rgba(124,58,237,0.07) 0%, transparent 60%)'
        }} />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <Badge color="purple">Enterprise-Grade Infrastructure</Badge>
          <h1 className="font-display font-800 text-5xl md:text-6xl lg:text-7xl leading-tight mt-6 mb-6">
            The Vector Store That{' '}
            <span className="gradient-text">Works for You</span>
          </h1>
          <p className="text-text-secondary text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            Purpose-built for organizations that need high-performance AI vector search without surrendering data sovereignty. No cloud required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" size="lg" variant="primary">
              <Database size={18} />
              Request Demo
            </Button>
            <Button href="/how-it-works" size="lg" variant="secondary">
              Technical Deep-Dive <ChevronRight size={16} />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionHeader
            badge="Core Features"
            title={<>Everything You Need, <span className="gradient-text">Nothing You Don't</span></>}
            subtitle="A tightly-engineered feature set that covers every layer of secure, distributed vector storage."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            {features.map(({ icon: Icon, title, desc, tag, tagColor }) => (
              <div key={title} className="glass border-glow rounded-2xl p-7 hover:-translate-y-1.5 transition-all duration-300 group">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Icon size={22} className="text-accent" />
                  </div>
                  <span className={`text-xs font-600 font-mono px-2.5 py-1 rounded-full border ${tagColor}`}>{tag}</span>
                </div>
                <h3 className="font-display font-700 text-text-primary text-lg mb-3">{title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="relative py-24 overflow-hidden" id="architecture">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionHeader
            badge="Architecture"
            title={<>Designed for <span className="gradient-text">Resilience</span></>}
            subtitle="A three-layer architecture that balances centralized intelligence with distributed storage."
          />

          <div className="mt-14 glass border-glow rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0" style={{
              background: 'radial-gradient(ellipse at 50% 0%, rgba(0,212,255,0.04) 0%, transparent 60%)'
            }} />
            <div className="relative grid md:grid-cols-3 gap-8">
              {[
                {
                  layer: 'Layer 1',
                  name: 'Application Layer',
                  color: 'border-accent/40 bg-accent/5',
                  textColor: 'text-accent',
                  icon: Cpu,
                  desc: 'Your AI application sends vectors here. Simple REST or gRPC API. SDK available for Python, Node.js, and Go.',
                  items: ['REST API', 'Vector ingestion', 'Query endpoint', 'SDK clients'],
                },
                {
                  layer: 'Layer 2',
                  name: 'Index Layer',
                  color: 'border-accent-purple/40 bg-accent-purple/5',
                  textColor: 'text-purple-400',
                  icon: Database,
                  desc: 'A lightweight central index tracks vector locations using HNSW. No raw data is stored here — only metadata and routing tables.',
                  items: ['HNSW indexing', 'Gossip routing', 'Fragment registry', 'Auth gateway'],
                },
                {
                  layer: 'Layer 3',
                  name: 'Storage Layer',
                  color: 'border-green-500/40 bg-green-500/5',
                  textColor: 'text-green-400',
                  icon: Server,
                  desc: 'Encrypted vector fragments live on participating devices within your organization. Accessed via WiFi or Bluetooth on local networks.',
                  items: ['Device agents', 'AES-256 storage', 'WiFi/BT retrieval', 'Auto-replication'],
                },
              ].map(({ layer, name, color, textColor, icon: Icon, desc, items }) => (
                <div key={name} className={`rounded-2xl border ${color} p-7`}>
                  <div className={`text-xs font-mono font-600 ${textColor} mb-2 tracking-widest`}>{layer}</div>
                  <div className="flex items-center gap-3 mb-4">
                    <Icon size={20} className={textColor} />
                    <h3 className="font-display font-700 text-text-primary">{name}</h3>
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed mb-5">{desc}</p>
                  <ul className="space-y-2">
                    {items.map(item => (
                      <li key={item} className="flex items-center gap-2 text-xs text-text-dim">
                        <Check size={12} className={textColor} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Flow arrows */}
            <div className="flex justify-center mt-8 gap-4 items-center">
              {['Vector Write', '→', 'Fragment & Encrypt', '→', 'Distribute to Devices'].map((step, i) => (
                <span key={i} className={i % 2 === 1 ? 'text-accent/40 text-lg' : 'text-xs font-mono text-text-dim bg-midnight/60 px-3 py-1.5 rounded-full border border-border-subtle'}>
                  {step}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="relative py-24" id="use-cases">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionHeader
            badge="Use Cases"
            title={<>Built for <span className="gradient-text">Real Organizations</span></>}
            subtitle="Whether you run a university or an enterprise, Willustore adapts to your infrastructure and compliance needs."
          />
          <div className="grid md:grid-cols-2 gap-8 mt-14">
            {useCases.map(({ icon: Icon, title, subtitle, points, cta }) => (
              <div key={title} className="glass border-glow rounded-3xl p-10 hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                    <Icon size={26} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display font-700 text-2xl text-text-primary">{title}</h3>
                    <p className="text-text-dim text-sm">{subtitle}</p>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {points.map(point => (
                    <li key={point} className="flex items-start gap-3 text-text-secondary text-sm">
                      <Check size={16} className="text-accent mt-0.5 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
                <Button href="/contact" variant="secondary" size="md">
                  {cta} <ArrowRight size={14} />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionHeader
            badge="Pricing"
            title={<>Transparent, <span className="gradient-text">Usage-Based</span> Pricing</>}
            subtitle="No hidden fees. No vendor lock-in. Scale as you grow."
          />
          <div className="grid md:grid-cols-3 gap-6 mt-14">
            {plans.map(({ name, price, period, desc, features: planFeatures, cta, variant, featured }) => (
              <div key={name} className={`relative rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 ${featured ? 'border-glow glow-accent glass' : 'glass'}`}>
                {featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge>Most Popular</Badge>
                  </div>
                )}
                <h3 className="font-display font-700 text-xl text-text-primary mb-1">{name}</h3>
                <p className="text-text-dim text-sm mb-5">{desc}</p>
                <div className="mb-6">
                  <span className="font-display font-800 text-4xl gradient-text">{price}</span>
                  <span className="text-text-dim text-sm ml-1">{period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {planFeatures.map(f => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-text-secondary">
                      <Check size={14} className="text-accent shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button href="/contact" variant={variant} size="md" className="w-full justify-center">
                  {cta}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-display font-700 text-4xl text-text-primary mb-4">
            Ready to <span className="gradient-text">Deploy Willustore?</span>
          </h2>
          <p className="text-text-secondary text-lg mb-8">
            Our team will help you configure and deploy your private vector store in under an hour.
          </p>
          <Button href="/contact" variant="primary" size="lg">
            Book a Demo <ArrowRight size={16} />
          </Button>
        </div>
      </section>
    </div>
  )
}
