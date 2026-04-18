import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--color-sand-200)] bg-[var(--color-cream)]/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="font-[var(--font-display)] text-xl font-semibold tracking-tight">
          Linax Digital
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden items-center gap-8 text-sm font-medium md:flex">
          <li>
            <Link href="/services" className="hover:text-[var(--color-clay)]">
              Services
            </Link>
          </li>
          <li>
            <Link href="/pricing" className="hover:text-[var(--color-clay)]">
              Pricing
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-[var(--color-clay)]">
              About
            </Link>
          </li>
          <li>
            <Link href="/faq" className="hover:text-[var(--color-clay)]">
              FAQ
            </Link>
          </li>
        </ul>

        {/* CTA button — always visible */}
        <Link
          href="/contact"
          className="rounded-md bg-[var(--color-clay)] px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
        >
          Book a Free Consult →
        </Link>
      </nav>
    </header>
  );
}
