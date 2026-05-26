import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function ProductPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Use Cases */}
        <section className="paper-grain bg-cream pt-32 pb-24 md:pt-40 md:pb-32">
          <div className="mx-auto max-w-[1240px] px-6">
            <div className="mb-14">
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                Use Cases
              </div>
              <h1 className="mt-4 text-balance text-[clamp(40px,5.5vw,68px)] leading-[1.02] tracking-[-0.015em] text-ink">
                Built for{" "}
                <span className="serif-italic text-green">
                  Real Organizations
                </span>
              </h1>
              <p className="mt-5 max-w-[52ch] text-[16px] leading-[1.6] text-muted">
                Whether you run a university or an enterprise, Willustore
                adapts to your infrastructure and compliance needs.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {/* Universities */}
              <div className="rounded-2xl border border-hairline bg-cream-warm p-8 md:p-10">
                <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted mb-3">
                  Universities
                </div>
                <h2 className="text-[26px] font-medium tracking-tight text-ink leading-tight">
                  Academic AI without cloud dependency
                </h2>
                <ul className="mt-6 space-y-4">
                  {[
                    "Use a globally distributed network of unused device storage to store research embeddings and academic model data in a secure, decentralized way.",
                    "Data is encrypted, split into fragments, and distributed across the global network — never in one centralized cloud location.",
                    "Reduce infrastructure costs by up to 95% compared to traditional vector database providers.",
                    "Enable AI-powered academic tools: intelligent tutoring, semantic search across research materials, personalized learning recommendations.",
                    "Keep faculty research secure through encryption and distributed redundancy across the global device network.",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-[15px] leading-[1.55] text-muted">
                      <span aria-hidden className="mt-1.5 inline-block h-1.5 w-1.5 flex-none rounded-full bg-green" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-1.5 rounded-full bg-ink px-5 py-2.5 text-[13px] font-medium text-cream transition-colors hover:bg-ink-soft"
                  >
                    University Pricing
                    <span aria-hidden>→</span>
                  </a>
                </div>
              </div>

              {/* Enterprises */}
              <div className="rounded-2xl border border-hairline bg-ink p-8 md:p-10 text-cream relative overflow-hidden">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full"
                  style={{
                    background:
                      "radial-gradient(closest-side, rgba(74,157,111,0.3), rgba(74,157,111,0) 70%)",
                  }}
                />
                <div className="relative">
                  <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-cream/50 mb-3">
                    Enterprises
                  </div>
                  <h2 className="text-[26px] font-medium tracking-tight leading-tight">
                    Private AI infrastructure at scale
                  </h2>
                  <ul className="mt-6 space-y-4">
                    {[
                      "Power internal knowledge systems using a global distributed network of unused device storage instead of centralized cloud infrastructure.",
                      "Sensitive business and customer data is encrypted, fragmented, and distributed across worldwide nodes — never in a single location.",
                      "Maintain full visibility and compliance through detailed audit logs of all data access and operations.",
                      "Scale automatically as your organization grows by tapping into additional distributed storage capacity.",
                      "Integrate seamlessly with existing enterprise identity systems including SSO and authentication providers.",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3 text-[15px] leading-[1.55] text-cream/70">
                        <span
                          aria-hidden
                          className="mt-1.5 inline-block h-1.5 w-1.5 flex-none rounded-full bg-green-bright"
                          style={{ boxShadow: "0 0 8px rgba(74,157,111,0.6)" }}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <a
                      href="/contact"
                      className="inline-flex items-center gap-1.5 rounded-full border border-cream/20 bg-cream/10 px-5 py-2.5 text-[13px] font-medium text-cream transition-colors hover:bg-cream/20"
                    >
                      Enterprise Pricing
                      <span aria-hidden>→</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
