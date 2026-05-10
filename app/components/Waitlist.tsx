"use client";

import { useState } from "react";

const FORMSPREE_ENDPOINT =
  process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ||
  "https://formspree.io/f/REPLACE_ME";

type Role = "provider" | "business";

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<Role>("provider");
  const [status, setStatus] = useState<"idle" | "submitting" | "ok" | "error">(
    "idle",
  );
  const [errorMsg, setErrorMsg] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || status === "submitting") return;
    setStatus("submitting");
    setErrorMsg("");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email, role }),
      });
      if (res.ok) {
        setStatus("ok");
      } else {
        const data = await res.json().catch(() => ({}));
        setErrorMsg(data?.error || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  }

  return (
    <section id="waitlist" className="py-24 sm:py-32">
      <div className="max-w-3xl mx-auto px-6 sm:px-10 text-center">
        <p className="text-sm font-medium text-brand-blue tracking-wider uppercase mb-5">
          Be early
        </p>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-brand-navy leading-tight">
          Be first on the network.
        </h2>
        <p className="mt-5 text-lg text-ink-soft leading-relaxed max-w-xl mx-auto">
          Sign up for early access. We&apos;ll let you know the moment Willustore is
          ready, with priority onboarding for our earliest users.
        </p>

        {status === "ok" ? (
          <div className="mt-12 bg-paper-soft border border-line rounded-2xl p-10">
            <div className="w-14 h-14 rounded-full bg-brand-blue/15 flex items-center justify-center mx-auto mb-4">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path
                  d="M6 14l5 5 11-12"
                  stroke="#2196f3"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="font-display text-2xl font-semibold text-brand-navy">
              You&apos;re on the list.
            </h3>
            <p className="mt-2 text-ink-soft">
              Thanks for joining — we&apos;ll be in touch as soon as we&apos;re live.
            </p>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="mt-12 max-w-xl mx-auto text-left">
            <div className="grid sm:grid-cols-2 gap-3 mb-3">
              <button
                type="button"
                onClick={() => setRole("provider")}
                className={`border rounded-xl px-5 py-4 text-left transition-colors ${
                  role === "provider"
                    ? "border-brand-blue bg-brand-blue/5"
                    : "border-line hover:border-brand-blue/40"
                }`}
              >
                <div className="font-medium text-brand-navy">I want to provide storage</div>
                <div className="text-sm text-ink-soft mt-0.5">
                  Earn crypto from spare disk space
                </div>
              </button>
              <button
                type="button"
                onClick={() => setRole("business")}
                className={`border rounded-xl px-5 py-4 text-left transition-colors ${
                  role === "business"
                    ? "border-brand-blue bg-brand-blue/5"
                    : "border-line hover:border-brand-blue/40"
                }`}
              >
                <div className="font-medium text-brand-navy">I want to use the API</div>
                <div className="text-sm text-ink-soft mt-0.5">
                  Cheap storage for AI workloads
                </div>
              </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                className="flex-1 border border-line bg-paper rounded-full px-6 py-3.5 text-base text-ink placeholder:text-ink-soft/60 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition"
              />
              <button
                type="submit"
                disabled={status === "submitting"}
                className="bg-brand-blue hover:bg-brand-blue-dark disabled:opacity-60 text-white font-medium px-7 py-3.5 rounded-full transition-colors whitespace-nowrap"
              >
                {status === "submitting" ? "Joining…" : "Join waitlist"}
              </button>
            </div>
            {status === "error" && (
              <p className="mt-3 text-sm text-red-600">{errorMsg}</p>
            )}
            <p className="mt-4 text-xs text-ink-soft text-center">
              We&apos;ll only email you about Willustore. No spam, ever.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
