const stats = [
  {
    number: "460 TWh",
    label: "Estimated electricity used by data centers in 2022 — more than entire countries.",
  },
  {
    number: "3×",
    label: "Projected growth in cloud-storage demand for AI workloads by 2030.",
  },
  {
    number: "3 companies",
    label: "Control most of the world's commercial cloud storage. One outage takes down the internet.",
  },
];

export default function Problem() {
  return (
    <section className="py-24 sm:py-32 bg-paper-soft">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-brand-navy leading-tight">
            AI is hungry. The old cloud can&apos;t keep up.
          </h2>
          <p className="mt-5 text-lg text-ink-soft leading-relaxed">
            Training and serving modern AI requires staggering amounts of data — and the
            centralized data centers that store it are expensive, power-hungry, and
            controlled by a handful of companies.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {stats.map((s) => (
            <div
              key={s.number}
              className="bg-paper border border-line rounded-2xl p-7"
            >
              <div className="font-display text-3xl sm:text-4xl font-semibold text-brand-blue">
                {s.number}
              </div>
              <p className="mt-3 text-sm text-ink-soft leading-relaxed">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
