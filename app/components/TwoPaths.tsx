const providerPoints = [
  "Install the app on a device with spare disk space",
  "Choose how much storage to allocate",
  "Earn crypto automatically as your space is used",
];

const businessPoints = [
  "Connect your AI app through one simple API",
  "Data is encrypted, sharded, and replicated globally",
  "Pay per GB — a fraction of traditional cloud cost",
];

export default function TwoPaths() {
  return (
    <section className="py-24 sm:py-32 bg-paper-soft">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-brand-navy leading-tight">
            Two sides of one network.
          </h2>
          <p className="mt-5 text-lg text-ink-soft leading-relaxed">
            Whether you have storage to share or data to store, Willustore was built for
            you.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <article
            id="providers"
            className="bg-paper border border-line rounded-3xl p-8 sm:p-10 flex flex-col"
          >
            <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center mb-6">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2v6m0 8v6m-10-10h6m8 0h6"
                  stroke="#2196f3"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <circle cx="12" cy="12" r="3" stroke="#2196f3" strokeWidth="2" />
              </svg>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-semibold text-brand-navy">
              For providers
            </h3>
            <p className="mt-3 text-ink-soft leading-relaxed">
              Earn crypto from storage you&apos;re not using. Your unused gigabytes
              become passive income.
            </p>
            <ul className="mt-7 space-y-3 flex-1">
              {providerPoints.map((p) => (
                <li key={p} className="flex gap-3 text-ink-soft">
                  <span className="text-brand-blue mt-1">→</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <a
              href="#waitlist"
              className="mt-8 inline-flex items-center justify-center self-start bg-brand-navy hover:bg-brand-navy-light text-white font-medium px-6 py-3 rounded-full transition-colors"
            >
              Become a provider
            </a>
          </article>

          <article
            id="businesses"
            className="bg-paper border border-line rounded-3xl p-8 sm:p-10 flex flex-col"
          >
            <div className="w-12 h-12 rounded-xl bg-brand-navy/10 flex items-center justify-center mb-6">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="5" width="18" height="14" rx="2" stroke="#0d2b4e" strokeWidth="2" />
                <path d="M3 9h18M8 13h8M8 16h5" stroke="#0d2b4e" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-semibold text-brand-navy">
              For businesses
            </h3>
            <p className="mt-3 text-ink-soft leading-relaxed">
              Cheap, encrypted, decentralized storage for your AI workloads. Built for
              vector data, embeddings, and retrieval.
            </p>
            <ul className="mt-7 space-y-3 flex-1">
              {businessPoints.map((p) => (
                <li key={p} className="flex gap-3 text-ink-soft">
                  <span className="text-brand-blue mt-1">→</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <a
              href="#waitlist"
              className="mt-8 inline-flex items-center justify-center self-start bg-brand-navy hover:bg-brand-navy-light text-white font-medium px-6 py-3 rounded-full transition-colors"
            >
              Get API access
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
