const problems = [
  {
    title: "Data Leakage",
    body: "Sensitive research, enterprise knowledge, and internal documents are increasingly being uploaded to centralized AI platforms, exposing organizations to data breaches, unauthorized access, and compliance risks.",
  },
  {
    title: "Zero Control Over Your Data",
    body: "Traditional vector databases require organizations to trust third-party providers with critical AI infrastructure. Access policies, pricing, and system control remain in the hands of external platforms.",
  },
  {
    title: "Unsustainable Storage Costs",
    body: "As AI adoption grows, vector storage costs scale rapidly. Universities and enterprises spend heavily on centralized infrastructure despite already having massive unused storage capacity across existing devices.",
  },
];

export default function Problem() {
  return (
    <section className="paper-grain bg-cream-warm py-24 md:py-32">
      <div className="mx-auto max-w-[1240px] px-6">
        <div className="mb-12">
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            The Problem
          </div>
          <h2 className="mt-4 max-w-[30ch] text-balance text-[clamp(34px,4.5vw,56px)] leading-[1.05] tracking-[-0.015em] text-ink">
            The Broken State of{" "}
            <span className="serif-italic text-terracotta">
              AI Data Infrastructure
            </span>
          </h2>
          <p className="mt-4 max-w-[60ch] text-[15px] leading-[1.55] text-muted">
            Organizations are relying on centralized AI storage systems they
            don&apos;t control — creating major risks around security, privacy,
            scalability, and cost.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {problems.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-hairline bg-cream p-8"
            >
              <h3 className="text-[19px] font-medium tracking-tight text-ink">
                {p.title}
              </h3>
              <p className="mt-3 text-[15px] leading-[1.55] text-muted">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
