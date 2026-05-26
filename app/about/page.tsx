import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const stats = [
  { value: "1,660+", label: "Active Users" },
  { value: "3+", label: "University Collaborations" },
  { value: "15TB+", label: "Potential Distributed Storage Capacity" },
  { value: "37%", label: "Estimated Cost Reduction" },
];

const values = [
  {
    title: "Privacy First",
    body: "We believe sensitive AI data should remain under the control of the organizations that create it. Security and privacy are built directly into the network through encryption and distributed storage — not added later as a feature.",
  },
  {
    title: "Truly Decentralized",
    body: "Willustore is built around distributed infrastructure powered by real devices across the network. No centralized storage dependency. No single point of failure. Just resilient, scalable infrastructure designed for the AI era.",
  },
  {
    title: "Accessible Innovation",
    body: "Advanced AI storage should not be limited to large corporations with massive cloud budgets. We are building a more cost-efficient alternative that leverages existing unused storage resources worldwide.",
  },
  {
    title: "Community-Driven",
    body: "Users are more than consumers — they are contributors to the infrastructure itself. By sharing unused storage, individuals help power a secure global network while organizations gain scalable and efficient storage access.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Our Story */}
        <section className="paper-grain bg-cream pt-32 pb-24 md:pt-40 md:pb-32">
          <div className="mx-auto max-w-[1240px] px-6">
            <div className="max-w-[680px]">
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                Our Story
              </div>
              <h1 className="mt-4 text-balance text-[clamp(40px,6vw,72px)] leading-[1.02] tracking-[-0.015em] text-ink">
                We&apos;re{" "}
                <span className="serif-italic text-terracotta">Fixing</span> a
                Broken System
              </h1>
              <p className="mt-7 text-[17px] leading-[1.6] text-muted">
                When AI took off, organizations rushed to adopt it — but nobody
                stopped to ask:{" "}
                <span className="font-medium text-ink">
                  &ldquo;Where is all this data actually going?&rdquo;
                </span>
              </p>
              <p className="mt-4 text-[17px] leading-[1.6] text-muted">
                The answer was uncomfortable: to clouds you don&apos;t own, in
                servers you can&apos;t inspect, under contracts you barely read.
              </p>
              <div className="mt-8">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-1.5 rounded-full border border-hairline bg-transparent px-5 py-3 text-[14px] font-medium text-ink transition-colors hover:bg-cream-warm"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission + Stats */}
        <section className="paper-grain bg-cream-warm py-24 md:py-32">
          <div className="mx-auto max-w-[1240px] px-6">
            <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-start">
              <div>
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                  Our Mission
                </div>
                <h2 className="mt-4 text-balance text-[clamp(30px,4vw,48px)] leading-[1.08] tracking-[-0.015em] text-ink">
                  Decentralizing the Future of{" "}
                  <span className="serif-italic text-green">
                    AI Infrastructure
                  </span>
                </h2>
                <p className="mt-5 text-[16px] leading-[1.6] text-muted">
                  Our mission is to build a secure, decentralized data layer
                  that empowers organizations to store, retrieve, and scale AI
                  data without relying on centralized providers. Willustore
                  transforms unused storage across devices into a distributed,
                  encrypted infrastructure — enabling universities, enterprises,
                  and communities to build AI systems with full control over
                  their data.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-5">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl border border-hairline bg-cream p-6"
                  >
                    <div className="text-[32px] font-medium tracking-tight text-ink">
                      {s.value}
                    </div>
                    <div className="mt-1 text-[13px] leading-[1.4] text-muted">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="paper-grain bg-cream py-24 md:py-32">
          <div className="mx-auto max-w-[1240px] px-6">
            <div className="mb-12">
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                Our Values
              </div>
              <h2 className="mt-4 text-balance text-[clamp(30px,4vw,48px)] leading-[1.08] tracking-[-0.015em] text-ink">
                What We{" "}
                <span className="serif-italic text-green">Stand For</span>
              </h2>
              <p className="mt-4 max-w-[54ch] text-[15px] leading-[1.55] text-muted">
                Every engineering decision, every design choice, every
                partnership is guided by these core principles.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="rounded-2xl border border-hairline bg-cream-warm p-8"
                >
                  <h3 className="text-[19px] font-medium tracking-tight text-ink">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-[1.6] text-muted">
                    {v.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
