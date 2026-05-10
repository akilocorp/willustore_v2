import NetworkGraphic from "./NetworkGraphic";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-navy/[0.03] via-transparent to-transparent" />
      <div className="max-w-6xl mx-auto px-6 sm:px-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="fade-up">
          <p className="text-sm font-medium text-brand-blue tracking-wider uppercase mb-5">
            Coming soon · Join the waitlist
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight text-brand-navy">
            A decentralized storage network built for AI.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-ink-soft leading-relaxed max-w-xl">
            Cheaper, greener, owned by everyone. Willustore turns the world&apos;s idle
            disk space into a global storage layer for the AI era.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#waitlist"
              className="inline-flex items-center justify-center bg-brand-blue hover:bg-brand-blue-dark text-white font-medium px-7 py-3.5 rounded-full transition-colors shadow-sm"
            >
              Join the waitlist
            </a>
            <a
              href="#how"
              className="inline-flex items-center justify-center border border-brand-navy/20 hover:border-brand-navy text-brand-navy font-medium px-7 py-3.5 rounded-full transition-colors"
            >
              How it works →
            </a>
          </div>
        </div>

        <div className="relative aspect-square max-w-lg mx-auto w-full fade-up">
          <NetworkGraphic />
        </div>
      </div>
    </section>
  );
}
