export default function CTABand() {
  return (
    <section id="cta" className="paper-grain relative bg-cream py-28 md:py-40">
      <div className="mx-auto max-w-[920px] px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-hairline px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
          <span className="relative inline-flex h-1.5 w-1.5 items-center justify-center">
            <span className="absolute inset-0 rounded-full bg-green live-dot" />
          </span>
          Early Access Open
        </div>
        <h2 className="mt-5 text-balance text-[clamp(36px,5.5vw,72px)] leading-[1.02] tracking-[-0.015em] text-ink">
          Ready to Take Back{" "}
          <span className="serif-italic text-green">Control</span>
          <br className="hidden md:block" /> of Your AI Data?
        </h2>
        <p className="mx-auto mt-6 max-w-[52ch] text-[16px] leading-[1.55] text-muted">
          Join forward-thinking universities, enterprises, and organizations
          building the future of decentralized AI infrastructure with
          Willustore.
        </p>
        <p className="mx-auto mt-3 max-w-[48ch] text-[14px] leading-[1.5] text-muted/80">
          The first company to register gets{" "}
          <span className="font-medium text-ink">
            1 month of free subscription access
          </span>
          .
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#"
            className="group inline-flex items-center gap-1.5 rounded-full bg-ink px-5 py-3 text-[14px] font-medium text-cream transition-colors hover:bg-ink-soft"
          >
            Download App
            <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-1.5 rounded-full border border-hairline bg-transparent px-5 py-3 text-[14px] font-medium text-ink transition-colors hover:bg-cream-warm"
          >
            Join the Waitlist
          </a>
        </div>
        <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.14em] text-muted/60">
          No credit card required · Early access available · Cancel anytime
        </p>
      </div>
    </section>
  );
}
