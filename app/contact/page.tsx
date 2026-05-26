"use client";

import { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "ok" | "error">(
    "idle"
  );
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("https://formspree.io/f/REPLACE_ME", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "ok" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <Nav />
      <main>
        <section className="paper-grain bg-cream pt-32 pb-24 md:pt-40 md:pb-32">
          <div className="mx-auto max-w-[1240px] px-6">
            <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-start">
              {/* Left */}
              <div>
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                  Contact
                </div>
                <h1 className="mt-4 text-balance text-[clamp(36px,5vw,62px)] leading-[1.05] tracking-[-0.015em] text-ink">
                  Get In{" "}
                  <span className="serif-italic text-green">Touch</span>
                </h1>
                <p className="mt-5 text-[16px] leading-[1.6] text-muted">
                  Have questions about Willustore? Want to explore a
                  partnership? We&apos;d love to hear from you.
                </p>

                <dl className="mt-10 space-y-5">
                  <div>
                    <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                      Email
                    </dt>
                    <dd className="mt-1 text-[15px] text-ink">
                      <a
                        href="mailto:hello@willustore.com"
                        className="underline underline-offset-4 decoration-hairline transition-colors hover:text-muted"
                      >
                        hello@willustore.com
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                      Early Access
                    </dt>
                    <dd className="mt-1 text-[15px] text-muted">
                      Fill out the form to request early access or ask about
                      enterprise pricing.
                    </dd>
                  </div>
                </dl>
              </div>

              {/* Right — form */}
              <div className="rounded-2xl border border-hairline bg-cream-warm p-8 md:p-10">
                {status === "ok" ? (
                  <div className="py-8 text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green/10">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                        <path d="M5 12l4 4 10-10" stroke="#2c5e3f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <h2 className="mt-4 text-[20px] font-medium text-ink">
                      Message sent
                    </h2>
                    <p className="mt-2 text-[14px] text-muted">
                      We&apos;ll get back to you as soon as possible.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} className="space-y-5">
                    <div>
                      <label className="block font-mono text-[11px] uppercase tracking-[0.14em] text-muted mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, name: e.target.value }))
                        }
                        placeholder="Your name"
                        className="w-full rounded-xl border border-hairline bg-cream px-4 py-3 text-[15px] text-ink placeholder:text-muted/50 focus:outline-none focus:border-ink/30 focus:ring-2 focus:ring-ink/10 transition"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-[11px] uppercase tracking-[0.14em] text-muted mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, email: e.target.value }))
                        }
                        placeholder="you@email.com"
                        className="w-full rounded-xl border border-hairline bg-cream px-4 py-3 text-[15px] text-ink placeholder:text-muted/50 focus:outline-none focus:border-ink/30 focus:ring-2 focus:ring-ink/10 transition"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-[11px] uppercase tracking-[0.14em] text-muted mb-2">
                        Message
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={form.message}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, message: e.target.value }))
                        }
                        placeholder="Tell us about your project or question…"
                        className="w-full rounded-xl border border-hairline bg-cream px-4 py-3 text-[15px] text-ink placeholder:text-muted/50 focus:outline-none focus:border-ink/30 focus:ring-2 focus:ring-ink/10 transition resize-none"
                      />
                    </div>
                    {status === "error" && (
                      <p className="text-[13px] text-terracotta">
                        Something went wrong. Please try again or email us
                        directly.
                      </p>
                    )}
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="group inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-ink px-5 py-3 text-[14px] font-medium text-cream transition-colors hover:bg-ink-soft disabled:opacity-60"
                    >
                      {status === "submitting" ? "Sending…" : "Send message"}
                      <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                        →
                      </span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
