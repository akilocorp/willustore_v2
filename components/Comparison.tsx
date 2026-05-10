const oldWay = [
  "$0.096 / GB plus egress fees",
  "Single-region failure domain",
  "Carbon-heavy hyperscaler datacenters",
  "Vendor lock-in on the embedding API",
  "One government's jurisdiction over all your data",
];

const newWay = [
  "$0.007 / GB. No egress fees, ever.",
  "Geographic redundancy by default",
  "Uses storage that already exists",
  "Open protocol, no proprietary client",
  "Encrypted shards — host can't read your data",
];

export default function Comparison() {
  return (
    <section
      id="comparison"
      className="paper-grain relative bg-cream-warm py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1240px] px-6">
        <div className="mb-12 flex items-end justify-between gap-8">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
              § II · The economics
            </div>
            <h2 className="mt-4 max-w-[20ch] text-balance text-[clamp(34px,4.5vw,56px)] leading-[1.05] tracking-[-0.015em] text-ink">
              Centralized storage is{" "}
              <span className="serif-italic text-terracotta">built wrong</span>.
            </h2>
          </div>
          <p className="hidden max-w-[28ch] text-[15px] leading-[1.55] text-muted md:block">
            Two ways to host the memory of every model. One charges you to read
            your own data. The other doesn't.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {/* Old way — cream card */}
          <div className="rounded-2xl border border-hairline bg-cream p-8 md:p-10">
            <div className="mb-6 flex items-baseline justify-between">
              <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                The old way
              </div>
              <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted/70">
                Hyperscaler vector DBs
              </div>
            </div>
            <h3 className="text-[22px] leading-tight tracking-tight text-ink">
              Pay rent to a fortress you'll never own.
            </h3>
            <ul className="mt-7 space-y-3">
              {oldWay.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-[15px] leading-[1.5] text-ink-soft"
                >
                  <span aria-hidden className="mt-2 inline-block h-px w-3 flex-none bg-muted" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* New way — dark card with green glow */}
          <div className="relative overflow-hidden rounded-2xl bg-ink p-8 text-cream md:p-10">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full"
              style={{
                background:
                  "radial-gradient(closest-side, rgba(74,157,111,0.35), rgba(74,157,111,0) 70%)",
              }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full"
              style={{
                background:
                  "radial-gradient(closest-side, rgba(168,224,191,0.18), rgba(168,224,191,0) 70%)",
              }}
            />
            <div className="relative">
              <div className="mb-6 flex items-baseline justify-between">
                <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-green-glow">
                  The willustore way
                </div>
                <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-cream/50">
                  Decentralized · device-native
                </div>
              </div>
              <h3 className="text-[22px] leading-tight tracking-tight">
                Memory{" "}
                <span className="serif-italic text-green-glow">lives</span>{" "}
                where it's used.
              </h3>
              <ul className="mt-7 space-y-3">
                {newWay.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-[15px] leading-[1.5] text-cream/85"
                  >
                    <span
                      aria-hidden
                      className="mt-1.5 inline-block h-2 w-2 flex-none rounded-full bg-green-bright"
                      style={{ boxShadow: "0 0 12px rgba(74,157,111,0.6)" }}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
