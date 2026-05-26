const pillars = [
  {
    title: "Decentralized & Distributed",
    body: "Your data is split into encrypted fragments and stored across independent nodes worldwide. No single device ever holds your complete data.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="12" cy="12" r="3" fill="currentColor" />
        <circle cx="3" cy="5" r="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="21" cy="5" r="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="3" cy="19" r="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="21" cy="19" r="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 12L3 5M12 12L21 5M12 12L3 19M12 12L21 19" stroke="currentColor" strokeWidth="1" />
      </svg>
    ),
  },
  {
    title: "End-to-End Encryption",
    body: "Every data fragment is encrypted before leaving a device. Only authorized users can access and reconstruct the data securely.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="5" y="11" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 11V7a4 4 0 018 0v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="12" cy="16" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Community-Powered Storage",
    body: "People around the world contribute their unused storage space to the network. Organizations gain scalable, affordable storage powered by real users.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="5" cy="17" r="2.5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="19" cy="17" r="2.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9 11.5C7 12.5 5.5 14.5 5.5 17M15 11.5C17 12.5 18.5 14.5 18.5 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Built-in Redundancy",
    body: "Data is replicated across multiple devices to ensure high availability, fault tolerance, and zero single points of failure.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 3L21 8.5V15.5L12 21L3 15.5V8.5L12 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M12 3V21M3 8.5L21 15.5M21 8.5L3 15.5" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
      </svg>
    ),
  },
  {
    title: "Privacy by Design",
    body: "Your files and metadata remain private within your ecosystem. Willustore ensures organizations maintain full ownership and control of their data.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 2L4 6V12C4 16.4 7.4 20.5 12 22C16.6 20.5 20 16.4 20 12V6L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Transparent & Verifiable",
    body: "Storage activity and data availability are continuously verified across the network, ensuring trust, reliability, and honest participation.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function Security() {
  return (
    <section className="paper-grain bg-ink py-24 md:py-32 text-cream">
      <div className="mx-auto max-w-[1240px] px-6">
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-cream/20 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-cream/60">
            Security
          </div>
          <h2 className="mt-5 max-w-[30ch] text-balance text-[clamp(34px,4.5vw,56px)] leading-[1.05] tracking-[-0.015em]">
            Enterprise-Grade Security,{" "}
            <span className="serif-italic text-green-glow">
              Built Into Willustore
            </span>
          </h2>
          <p className="mt-4 max-w-[60ch] text-[15px] leading-[1.55] text-cream/60">
            Willustore is built with privacy, decentralization, and encryption
            at its core. Unused storage from devices around the world powers a
            secure distributed network where data is fragmented, encrypted, and
            always under your control.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-cream/10 bg-cream/5 p-7"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-cream/10 text-green-glow">
                {p.icon}
              </div>
              <h3 className="text-[16px] font-medium tracking-tight text-cream">
                {p.title}
              </h3>
              <p className="mt-2 text-[14px] leading-[1.6] text-cream/60">
                {p.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/product"
            className="inline-flex items-center gap-1.5 rounded-full border border-cream/20 bg-transparent px-5 py-3 text-[14px] font-medium text-cream transition-colors hover:bg-cream/10"
          >
            Explore the Product
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
