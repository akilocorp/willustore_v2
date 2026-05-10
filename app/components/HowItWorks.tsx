const chapters = [
  {
    n: "01",
    title: "Allocate",
    body: "Providers install Willustore and set aside disk space on a device they already own — a phone, laptop, or desktop. The space is reserved physically, not just logically.",
    diagram: (
      <svg viewBox="0 0 200 140" className="w-full h-full">
        <rect x="40" y="30" width="120" height="80" rx="8" stroke="#0d2b4e" strokeWidth="2" fill="none" />
        <rect x="40" y="30" width="120" height="32" rx="8" fill="#2196f3" opacity="0.2" />
        <rect x="40" y="30" width="120" height="32" rx="8" fill="#2196f3" />
        <text x="100" y="84" textAnchor="middle" fontSize="11" fill="#0d2b4e" fontFamily="ui-sans-serif">
          Reserved for network
        </text>
      </svg>
    ),
  },
  {
    n: "02",
    title: "Distribute",
    body: "When a business sends data, it&apos;s encrypted on the client, split into shards, and replicated across many provider devices around the world — never trusting any single node.",
    diagram: (
      <svg viewBox="0 0 200 140" className="w-full h-full">
        <rect x="80" y="20" width="40" height="40" rx="6" fill="#0d2b4e" />
        <text x="100" y="46" textAnchor="middle" fontSize="14" fill="#fff" fontFamily="ui-sans-serif">
          ◆
        </text>
        {[40, 100, 160].map((x, i) => (
          <g key={i}>
            <line x1="100" y1="60" x2={x} y2="100" stroke="#2196f3" strokeWidth="1.5" strokeDasharray="3 3" />
            <circle cx={x} cy="110" r="12" fill="#2196f3" opacity="0.85" />
          </g>
        ))}
      </svg>
    ),
  },
  {
    n: "03",
    title: "Retrieve",
    body: "Apps query the network for what they need. Willustore is optimized for vector search: similarity queries fan out to nodes in parallel, and the closest matches return in milliseconds.",
    diagram: (
      <svg viewBox="0 0 200 140" className="w-full h-full">
        <circle cx="100" cy="70" r="22" stroke="#0d2b4e" strokeWidth="2" fill="none" />
        <circle cx="100" cy="70" r="12" fill="#2196f3" />
        {[
          [30, 30], [170, 30], [30, 110], [170, 110],
        ].map(([x, y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r="8" fill="#2196f3" opacity="0.5" />
            <line x1={x} y1={y} x2="100" y2="70" stroke="#2196f3" strokeWidth="1" />
          </g>
        ))}
      </svg>
    ),
  },
  {
    n: "04",
    title: "Reward",
    body: "Providers earn crypto every time their device serves storage or retrieval requests. The more the network uses you, the more you earn — automatically, on-chain.",
    diagram: (
      <svg viewBox="0 0 200 140" className="w-full h-full">
        <circle cx="100" cy="70" r="32" fill="#2196f3" />
        <text x="100" y="78" textAnchor="middle" fontSize="28" fill="#fff" fontFamily="ui-sans-serif" fontWeight="600">
          ₡
        </text>
        <path d="M 60 70 Q 100 20 140 70" stroke="#0d2b4e" strokeWidth="1.5" fill="none" strokeDasharray="4 3" />
        <path d="M 60 70 Q 100 120 140 70" stroke="#0d2b4e" strokeWidth="1.5" fill="none" strokeDasharray="4 3" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-medium text-brand-blue tracking-wider uppercase mb-5">
            How it works
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-brand-navy leading-tight">
            Four steps. One global network.
          </h2>
        </div>

        <div className="space-y-20 sm:space-y-28">
          {chapters.map((c, i) => (
            <div
              key={c.n}
              className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div>
                <div className="font-display text-sm text-brand-blue font-semibold tracking-widest mb-3">
                  CHAPTER {c.n}
                </div>
                <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-brand-navy leading-tight">
                  {c.title}
                </h3>
                <p
                  className="mt-5 text-lg text-ink-soft leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: c.body }}
                />
              </div>
              <div className="bg-paper-soft border border-line rounded-3xl aspect-[4/3] p-6 sm:p-10 flex items-center justify-center">
                {c.diagram}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
