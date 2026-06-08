'use client'
import { useState } from 'react'
import { Mail, MapPin, MessageSquare, Send, Check, Building2, GraduationCap, User } from 'lucide-react'
import { Badge } from '../../components/Button'

const contactReasons = [
  { value: 'demo', label: 'Request a Demo' },
  { value: 'waitlist', label: 'Join Waitlist' },
  { value: 'university', label: 'University Partnership' },
  { value: 'enterprise', label: 'Enterprise Inquiry' },
  { value: 'other', label: 'Other' },
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', org: '', reason: 'demo', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 1500))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <div className="pt-24">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 30% 30%, rgba(110,91,255,0.06) 0%, transparent 60%)' }} />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-xl">
            <Badge>Get In Touch</Badge>
            <h1 className="font-display font-800 text-5xl md:text-6xl leading-tight mt-6 mb-6">
              Let's Build <span className="gradient-text">Together</span>
            </h1>
            <p className="text-text-secondary text-xl leading-relaxed">
              Whether you're a university IT director, enterprise architect, or curious developer — we'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-10 pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 space-y-8">
              {[
                { icon: Mail, title: 'Email Us', value: 'hello@willustore.io', desc: 'We respond within 24 hours.' },
                { icon: MessageSquare, title: 'Community', value: 'Discord Server', desc: 'Join 1,000+ builders in our community.' },
                { icon: MapPin, title: 'Headquarters', value: 'Addis Ababa, Ethiopia', desc: 'Remote-first, global team.' },
              ].map(({ icon: Icon, title, value, desc }) => (
                <div key={title} className="glass border-glow rounded-2xl p-6 flex gap-4">
                  <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                    <Icon size={20} className="text-accent" />
                  </div>
                  <div>
                    <div className="text-text-dim text-xs font-mono mb-1">{title}</div>
                    <div className="text-text-primary font-600 mb-1">{value}</div>
                    <div className="text-text-dim text-xs">{desc}</div>
                  </div>
                </div>
              ))}
              <div className="glass rounded-2xl p-6">
                <h3 className="font-display font-600 text-text-primary mb-4">Common Questions</h3>
                <div className="space-y-4">
                  {[
                    { q: 'How long does onboarding take?', a: 'Most organizations are live within 48 hours.' },
                    { q: 'Is there a free trial?', a: 'Yes — our Starter plan is free forever.' },
                    { q: 'Can we self-host?', a: 'Enterprise plan includes on-premise option.' },
                  ].map(({ q, a }) => (
                    <div key={q} className="border-b border-border-subtle pb-3 last:border-0 last:pb-0">
                      <div className="text-text-secondary text-sm font-500 mb-1">{q}</div>
                      <div className="text-text-dim text-xs">{a}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              {submitted ? (
                <div className="glass border-glow rounded-3xl p-16 text-center h-full flex flex-col items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center mb-6 glow-accent">
                    <Check size={36} className="text-accent" />
                  </div>
                  <h2 className="font-display font-700 text-3xl text-text-primary mb-4">Message Received!</h2>
                  <p className="text-text-secondary text-lg mb-6 max-w-sm">Thanks for reaching out. Our team will get back to you within 24 hours.</p>
                  <button onClick={() => { setSubmitted(false); setForm({ name: '', email: '', org: '', reason: 'demo', message: '' }) }}
                    className="px-6 py-2.5 rounded-lg border border-accent/30 text-accent text-sm hover:bg-accent/10 transition-all">
                    Send another message
                  </button>
                </div>
              ) : (
                <div className="glass border-glow rounded-3xl p-8 md:p-10">
                  <h2 className="font-display font-700 text-2xl text-text-primary mb-2">Send Us a Message</h2>
                  <p className="text-text-dim text-sm mb-8">Fill in the details below and we'll be in touch shortly.</p>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-xs font-mono text-text-dim mb-3 tracking-wider">I'M INTERESTED IN</label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {contactReasons.map(({ value, label }) => (
                          <button key={value} type="button" onClick={() => setForm(prev => ({ ...prev, reason: value }))}
                            className={`px-3 py-2.5 text-xs font-500 rounded-xl border transition-all ${
                              form.reason === value ? 'bg-accent/15 border-accent/40 text-accent' : 'glass border-border-subtle text-text-dim hover:border-accent/20 hover:text-text-secondary'
                            }`}>{label}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-mono text-text-dim mb-2 tracking-wider">FULL NAME *</label>
                        <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Abebe Bekele"
                          className="w-full bg-navy/60 border border-border-subtle rounded-xl px-4 py-3 text-sm text-text-primary placeholder-text-dim focus:outline-none focus:border-accent/50 focus:bg-accent/5 transition-all" />
                      </div>
                      <div>
                        <label className="block text-xs font-mono text-text-dim mb-2 tracking-wider">EMAIL *</label>
                        <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="you@university.edu"
                          className="w-full bg-navy/60 border border-border-subtle rounded-xl px-4 py-3 text-sm text-text-primary placeholder-text-dim focus:outline-none focus:border-accent/50 focus:bg-accent/5 transition-all" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-text-dim mb-2 tracking-wider">ORGANIZATION</label>
                      <input type="text" name="org" value={form.org} onChange={handleChange} placeholder="University of Addis Ababa"
                        className="w-full bg-navy/60 border border-border-subtle rounded-xl px-4 py-3 text-sm text-text-primary placeholder-text-dim focus:outline-none focus:border-accent/50 focus:bg-accent/5 transition-all" />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-text-dim mb-2 tracking-wider">MESSAGE *</label>
                      <textarea name="message" value={form.message} onChange={handleChange} required rows={5}
                        placeholder="Tell us about your use case, team size, and any questions you have..."
                        className="w-full bg-navy/60 border border-border-subtle rounded-xl px-4 py-3 text-sm text-text-primary placeholder-text-dim focus:outline-none focus:border-accent/50 focus:bg-accent/5 transition-all resize-none" />
                    </div>
                    <button type="submit" disabled={loading}
                      className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-accent text-white font-700 rounded-xl hover:bg-accent-glow hover:shadow-lg hover:shadow-accent/25 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed">
                      {loading ? <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Sending...</> : <><Send size={16} />Send Message</>}
                    </button>
                    <p className="text-center text-text-dim text-xs">By submitting, you agree to our Privacy Policy. We'll never share your data.</p>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
