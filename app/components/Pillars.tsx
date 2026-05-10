const pillars = [
  {
    title: "Decentralized",
    body: "No single company owns the network. Data is sharded and replicated across thousands of independent nodes — no single point of failure, no single point of control.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="4" fill="#2196f3" />
        <circle cx="4" cy="6" r="3" stroke="#2196f3" strokeWidth="1.5" />
        <circle cx="24" cy="6" r="3" stroke="#2196f3" strokeWidth="1.5" />
        <circle cx="4" cy="22" r="3" stroke="#2196f3" strokeWidth="1.5" />
        <circle cx="24" cy="22" r="3" stroke="#2196f3" strokeWidth="1.5" />
        <path d="M14 14L4 6M14 14L24 6M14 14L4 22M14 14L24 22" stroke="#2196f3" strokeWidth="1" />
      </svg>
    ),
  },
  {
    title: "Affordable",
    body: "By using hardware that&apos;s already paid for, Willustore eliminates the overhead of building and cooling new data centers. The savings flow to everyone.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 20l5-5 4 4 8-9" stroke="#2196f3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 10h5v5" stroke="#2196f3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Sustainable",
    body: "Data centers consume more electricity than entire countries. Willustore reuses devices that are already running — no new buildings, no new cooling, dramatically less carbon.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path
          d="M14 4c-3 4-7 6-7 11a7 7 0 0014 0c0-5-4-7-7-11z"
          stroke="#2196f3"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path d="M14 12v8" stroke="#2196f3" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Pillars() {
  return (
    <section className="py-24 sm:py-32 bg-brand-navy text-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <div className="max-w-2xl mb-14">
          <p className="text-sm font-medium text-brand-blue tracking-wider uppercase mb-5">
            Why it matters
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight">
            Storage that&apos;s good for the world.
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.title}>
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-5">
                {p.icon}
              </div>
              <h3 className="font-display text-2xl font-semibold mb-3">{p.title}</h3>
              <p
                className="text-white/70 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: p.body }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
