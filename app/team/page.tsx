import { ExternalLink, X, Code2, ArrowRight } from 'lucide-react'
import { Button, Badge } from '../../components/Button'
import SectionHeader from '../../components/SectionHeader'

export const metadata = {
  title: 'Team — Willustore',
  description: 'Meet the team behind Willustore — builders, researchers, and operators on a mission to decentralize AI data.',
}

const team = [
  { name: 'Abebe Haile', role: 'CEO & Co-founder', initials: 'AH', gradient: 'from-accent to-blue-500', bio: 'Former distributed systems engineer at Cloudflare. PhD dropout turned founder, obsessed with making privacy-preserving infrastructure accessible to every organization on the planet.', expertise: ['Distributed Systems', 'Product Strategy', 'Fundraising'], socials: { linkedin: '#', twitter: '#', github: '#' } },
  { name: 'Tigist Bekele', role: 'CTO & Co-founder', initials: 'TB', gradient: 'from-accent-purple to-accent', bio: 'Principal engineer at Stripe, built core payment infrastructure serving billions of transactions. Now applying the same rigorous engineering discipline to decentralized storage and vector search.', expertise: ['Vector Databases', 'Cryptography', 'P2P Networks'], socials: { linkedin: '#', twitter: '#', github: '#' } },
  { name: 'Dawit Tesfaye', role: 'COO', initials: 'DT', gradient: 'from-green-500 to-emerald-400', bio: 'Operations leader with 10+ years scaling B2B SaaS companies. Led university partnerships at a major edtech company, bringing deep expertise in institutional sales and customer success.', expertise: ['Operations', 'University Partnerships', 'Scaling'], socials: { linkedin: '#', twitter: '#', github: '#' } },
  { name: 'Sara Alemu', role: 'CMO', initials: 'SA', gradient: 'from-orange-400 to-pink-500', bio: 'Growth and marketing leader who scaled developer tools from 0 to 100k users. Expert in technical content marketing, community building, and making complex technology feel approachable.', expertise: ['Growth Marketing', 'Developer Relations', 'Brand'], socials: { linkedin: '#', twitter: '#', github: '#' } },
]

const advisors = [
  { name: 'Dr. Yohannes Girma', role: 'Research Advisor', institution: 'MIT CSAIL', initials: 'YG', gradient: 'from-accent/60 to-blue-500/60', bio: 'Pioneer in approximate nearest neighbor search algorithms. Co-authored key HNSW papers.' },
  { name: 'Mekdes Wolde', role: 'Enterprise Advisor', institution: 'Ex-VP at Salesforce', initials: 'MW', gradient: 'from-accent-purple/60 to-accent/60', bio: 'Helped close 500+ enterprise deals. Deep relationships across Fortune 500 companies and university IT departments.' },
  { name: 'Prof. Aida Bekele', role: 'Security Advisor', institution: 'Stanford University', initials: 'AB', gradient: 'from-green-500/60 to-emerald-400/60', bio: 'Cryptography professor and author of widely-used research on threshold encryption schemes.' },
]

function TeamCard({ member }: { member: typeof team[0] }) {
  const iconMap = { linkedin: ExternalLink, twitter: X, github: Code2 }
  return (
    <div className="glass border-glow rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300 group">
      <div className="flex items-start justify-between mb-6">
        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center text-white font-display font-700 text-xl shadow-lg`}>{member.initials}</div>
        <div className="flex gap-2">
          {(Object.entries(member.socials) as [string, string][]).map(([platform, href]) => {
            const Icon = iconMap[platform as keyof typeof iconMap]
            return (
              <a key={platform} href={href} target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-midnight/60 border border-border-subtle flex items-center justify-center text-text-dim hover:text-accent hover:border-accent/30 transition-all">
                <Icon size={14} />
              </a>
            )
          })}
        </div>
      </div>
      <h3 className="font-display font-700 text-xl text-text-primary mb-1">{member.name}</h3>
      <p className="text-sm font-mono text-accent mb-4">{member.role}</p>
      <p className="text-text-secondary text-sm leading-relaxed mb-5">{member.bio}</p>
      <div className="flex flex-wrap gap-2">
        {member.expertise.map(skill => (
          <span key={skill} className="text-xs font-500 px-2.5 py-1 rounded-full bg-accent/5 border border-accent/15 text-accent/70">{skill}</span>
        ))}
      </div>
    </div>
  )
}

function AdvisorCard({ advisor }: { advisor: typeof advisors[0] }) {
  return (
    <div className="glass rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300">
      <div className="flex items-center gap-4 mb-4">
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${advisor.gradient} flex items-center justify-center text-white font-700 text-sm`}>{advisor.initials}</div>
        <div>
          <h3 className="font-display font-600 text-text-primary">{advisor.name}</h3>
          <p className="text-xs text-accent">{advisor.role}</p>
          <p className="text-xs text-text-dim">{advisor.institution}</p>
        </div>
      </div>
      <p className="text-text-secondary text-sm leading-relaxed">{advisor.bio}</p>
    </div>
  )
}

export default function TeamPage() {
  return (
    <div className="pt-24">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 30%, rgba(141,125,255,0.06) 0%, transparent 60%)' }} />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <Badge color="purple">The People</Badge>
          <h1 className="font-display font-800 text-5xl md:text-6xl leading-tight mt-6 mb-6">
            Built by Believers in <span className="gradient-text">Data Sovereignty</span>
          </h1>
          <p className="text-text-secondary text-xl leading-relaxed max-w-2xl mx-auto">
            We're engineers, operators, and researchers who got tired of watching organizations hand their most sensitive AI data to providers they don't control.
          </p>
        </div>
      </section>

      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionHeader badge="Core Team" title={<>The Founders & <span className="gradient-text">Operators</span></>} subtitle="A cross-functional team with deep roots in distributed systems, cryptography, enterprise sales, and growth." />
          <div className="grid md:grid-cols-2 gap-8 mt-14">
            {team.map(member => <TeamCard key={member.name} member={member} />)}
          </div>
        </div>
      </section>

      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionHeader badge="Advisors" title={<>World-Class <span className="gradient-text">Expertise</span> Behind Us</>} subtitle="Our advisors bring decades of experience in distributed systems research, enterprise sales, and applied cryptography." />
          <div className="grid md:grid-cols-3 gap-6 mt-14">
            {advisors.map(advisor => <AdvisorCard key={advisor.name} advisor={advisor} />)}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="glass border-glow rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 30% 50%, rgba(110,91,255,0.05) 0%, transparent 60%)' }} />
            <div className="relative grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge>We're Hiring</Badge>
                <h2 className="font-display font-700 text-4xl text-text-primary mt-5 mb-4">Join the <span className="gradient-text">Mission</span></h2>
                <p className="text-text-secondary leading-relaxed mb-6">We're a small, highly-focused team building infrastructure that will power the next generation of private AI. If you care deeply about distributed systems, cryptography, or developer experience — we want to hear from you.</p>
                <div className="space-y-3 mb-8">
                  {['Senior Distributed Systems Engineer', 'Cryptography Researcher', 'Developer Relations Engineer', 'Enterprise Account Executive'].map(role => (
                    <div key={role} className="flex items-center justify-between py-3 px-4 glass rounded-xl hover:border-accent/20 transition-colors group cursor-pointer">
                      <span className="text-text-secondary text-sm group-hover:text-text-primary transition-colors">{role}</span>
                      <ArrowRight size={14} className="text-text-dim group-hover:text-accent transition-colors" />
                    </div>
                  ))}
                </div>
                <Button href="/contact" variant="primary" size="md">Apply Now <ArrowRight size={16} /></Button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[{ label: 'Remote-first', icon: '🌍' }, { label: 'Competitive equity', icon: '📈' }, { label: 'Flexible hours', icon: '⏰' }, { label: 'Health coverage', icon: '🏥' }, { label: 'Learning budget', icon: '📚' }, { label: 'Top-tier hardware', icon: '💻' }].map(({ label, icon }) => (
                  <div key={label} className="glass rounded-xl p-4 text-center">
                    <div className="text-2xl mb-2">{icon}</div>
                    <div className="text-text-secondary text-sm">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
