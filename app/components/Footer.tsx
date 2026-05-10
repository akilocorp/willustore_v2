export default function Footer() {
  return (
    <footer className="border-t border-line py-12">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <div>
          <div className="font-display text-xl font-semibold text-brand-navy">
            Willustore
          </div>
          <p className="text-sm text-ink-soft mt-1">
            A decentralized storage network built for AI.
          </p>
        </div>
        <div className="flex gap-6 text-sm text-ink-soft">
          <a href="#how" className="hover:text-brand-navy transition-colors">
            How it works
          </a>
          <a href="#waitlist" className="hover:text-brand-navy transition-colors">
            Waitlist
          </a>
          <a
            href="mailto:hello@willustore.com"
            className="hover:text-brand-navy transition-colors"
          >
            Contact
          </a>
        </div>
        <div className="text-xs text-ink-soft/70">
          © {new Date().getFullYear()} Willustore
        </div>
      </div>
    </footer>
  );
}
