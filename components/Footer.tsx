const cols: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Product",
    links: [
      { label: "How it works", href: "/#story" },
      { label: "Security", href: "/#security" },
      { label: "Docs", href: "#" },
      { label: "Status", href: "#" },
    ],
  },
  {
    title: "Network",
    links: [
      { label: "Run a node", href: "#" },
      { label: "Earnings", href: "#" },
      { label: "Coverage map", href: "#" },
      { label: "Whitepaper", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Team", href: "/team" },
      { label: "Contact", href: "/contact" },
      { label: "Press", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="paper-grain bg-cream-warm">
      <div className="mx-auto max-w-[1240px] px-6 py-16 md:py-20">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <div className="inline-flex items-center gap-2 text-[15px] font-medium tracking-tight text-ink">
              <span className="relative inline-flex h-2 w-2 items-center justify-center">
                <span className="absolute inset-0 rounded-full bg-green" />
                <span className="absolute inset-0 rounded-full bg-green-bright/70 live-dot" />
              </span>
              <span>willustore</span>
            </div>
            <p className="mt-4 max-w-[28ch] text-[14px] leading-[1.5] text-muted">
              AI memory that lives on phones, not in datacenters.
            </p>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                {col.title}
              </div>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-[14px] text-ink-soft transition-colors hover:text-ink"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-3 border-t border-hairline pt-6">
          <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
            © 2026 Willustore Labs · Built with the network
          </div>
          <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
            Privacy · Terms · Security
          </div>
        </div>
      </div>
    </footer>
  );
}
