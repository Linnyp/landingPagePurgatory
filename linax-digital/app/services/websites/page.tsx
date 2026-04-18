import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Website Design Cape Coral FL — Small Business Websites",
  description:
    "Custom Next.js websites for local service businesses in Southwest Florida. Fast, mobile-first, built to convert.",
};

export default function WebsitesPage() {
  return (
    <main>
      {/* Breadcrumb */}
      <nav className="px-6 pt-6 max-w-7xl mx-auto text-sm text-[var(--color-sand-700)]">
        <Link href="/">Home</Link> &rsaquo; <Link href="/services">Services</Link> &rsaquo; Websites
      </nav>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section id="hero" className="px-6 py-24 max-w-7xl mx-auto">
        <h1 className="text-5xl font-[var(--font-display)]">Websites Hero — Service name, one-line value prop ("A site built to work hard, not look pretty on a pitch deck"), primary CTA (Book a Call)</h1>
      </section>

      {/* ── WHAT'S INCLUDED ──────────────────────────────────────────────── */}
      <section id="whats-included" className="bg-[var(--color-sand-100)] px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-[var(--font-display)]">What's Included — UX/UI design, Next.js dev, hosting, maintenance, analytics, chatbot integration, mobile-first, local-search optimized</h1>
        </div>
      </section>

      {/* ── PRICING ──────────────────────────────────────────────────────── */}
      <section id="pricing" className="px-6 py-24 max-w-7xl mx-auto">
        <h1 className="text-4xl font-[var(--font-display)]">Pricing — Lump sum ($3,000 / 5-page) vs. subscription ($180/mo, 12-month min) · add-ons: edits, extra pages, blog, chatbot · link to full /pricing page</h1>
      </section>

      {/* ── RESULTS ──────────────────────────────────────────────────────── */}
      <section id="results" className="bg-[var(--color-sand-100)] px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-[var(--font-display)]">Results — Website-specific stats or case study teaser (e.g., Verona Cabinets, Four Leaf Charters)</h1>
        </div>
      </section>

      {/* ── PROCESS ──────────────────────────────────────────────────────── */}
      <section id="process" className="px-6 py-24 max-w-7xl mx-auto">
        <h1 className="text-4xl font-[var(--font-display)]">Process — How a website engagement is delivered: discovery → design → build → launch → support</h1>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section id="faq" className="bg-[var(--color-sand-100)] px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-[var(--font-display)]">FAQ — 3–5 website-specific questions: "What's the 12-month contract?", "Can I edit my own site?", "Do you work on Wix/Squarespace?"</h1>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────────────── */}
      <section id="cta" className="bg-[var(--color-brown-900)] text-white px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-[var(--font-display)]">Final CTA — Book a Call (Calendly) · cross-sell: pair with Local SEO · /pricing full table link</h1>
        </div>
      </section>
    </main>
  );
}
