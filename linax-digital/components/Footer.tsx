import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-brown-900)] text-[var(--color-sand-200)]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* 4-column grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="space-y-3">
            <p className="font-[var(--font-display)] text-xl font-semibold text-white">
              Linax Digital
            </p>
            <p className="text-sm text-[var(--color-sand-700)]">
              Digital marketing for local service businesses in Southwest Florida.
            </p>
            <address className="not-italic text-sm text-[var(--color-sand-700)] space-y-1">
              <p>Cape Coral, FL</p>
              <a href="mailto:hello@linaxdigital.com" className="hover:text-white">
                hello@linaxdigital.com
              </a>
            </address>
          </div>

          {/* Services */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--color-sand-700)]">
              Services
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services/websites" className="hover:text-white">Websites</Link></li>
              <li><Link href="/services/seo" className="hover:text-white">Local SEO</Link></li>
              <li><Link href="/services/ads" className="hover:text-white">Google &amp; Meta Ads</Link></li>
              <li><Link href="/services/reputation" className="hover:text-white">Reputation Management</Link></li>
              <li><Link href="/pricing" className="hover:text-white">Pricing</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--color-sand-700)]">
              Company
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white">About</Link></li>
              <li><Link href="/process" className="hover:text-white">How We Work</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              <li><Link href="/contact" className="hover:text-white">Book a Call</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--color-sand-700)]">
              Resources
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/audit" className="hover:text-white">Free Digital Presence Audit</Link></li>
              <li><Link href="/case-studies" className="hover:text-white">Case Studies</Link></li>
              <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
              <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-8 text-xs text-[var(--color-sand-700)] sm:flex-row">
          <p>© 2026 Linax Digital</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
            <Link href="/terms" className="hover:text-white">Terms</Link>
          </div>
          <p>Made in Southwest Florida</p>
        </div>
      </div>
    </footer>
  );
}
