export default function CTABand() {
  return (
    <section
      id="cta"
      className="paper-grain relative bg-cream py-28 md:py-40"
    >
      <div className="mx-auto max-w-[920px] px-6 text-center">
        <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
          § III · Beta is open
        </div>
        <h2 className="mt-5 text-balance text-[clamp(36px,5.5vw,72px)] leading-[1.02] tracking-[-0.015em] text-ink">
          Never pay for{" "}
          <span className="serif-italic text-green">the product</span>.
          <br className="hidden md:block" /> Only the storage.
        </h2>
        <p className="mx-auto mt-6 max-w-[52ch] text-[16px] leading-[1.55] text-muted">
          We're onboarding the first 200 companies and the first 100,000 phone
          owners. Pricing during beta: companies pay nothing. Phone owners earn
          from day one.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#"
            className="group inline-flex items-center gap-1.5 rounded-full bg-ink px-5 py-3 text-[14px] font-medium text-cream transition-colors hover:bg-ink-soft"
          >
            Request beta access
            <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-1.5 rounded-full border border-hairline bg-transparent px-5 py-3 text-[14px] font-medium text-ink transition-colors hover:bg-cream-warm"
          >
            Read the whitepaper
          </a>
        </div>
      </div>
    </section>
  );
}
