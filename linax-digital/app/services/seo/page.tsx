import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Local SEO Cape Coral FL — Google Business Profile Optimization",
  description:
    "Local SEO services for service businesses in Southwest Florida. On-page, citations, backlinks, and Google Business Profile.",
};

export default function SeoPage() {
  return (
    <main>
      {/* Breadcrumb */}
      <nav className="px-6 pt-6 max-w-7xl mx-auto text-sm text-[var(--color-sand-700)]">
        <Link href="/">Home</Link> &rsaquo; <Link href="/services">Services</Link> &rsaquo; Local SEO
      </nav>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section id="hero" className="px-6 py-24 max-w-7xl mx-auto">
        <h1 className="text-5xl font-[var(--font-display)]">Local SEO Hero — Service name, value prop ("Show up when your customers search for you in Cape Coral"), primary CTA (Book a Call)</h1>
      </section>

      {/* ── WHAT'S INCLUDED ──────────────────────────────────────────────── */}
      <section id="whats-included" className="bg-[var(--color-sand-100)] px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-[var(--font-display)]">What's Included — Keyword research (Ahrefs), on-page mapping, technical SEO, local citations (NAP), foundation backlinks, press releases, GBP setup & optimization</h1>
        </div>
      </section>

      {/* ── PRICING ──────────────────────────────────────────────────────── */}
      <section id="pricing" className="px-6 py-24 max-w-7xl mx-auto">
        <h1 className="text-4xl font-[var(--font-display)]">Pricing — One-time SEO Foundation ($600) vs. ongoing ($300/mo): 4 blog posts/mo, GBP activity, strategic backlinks, press releases</h1>
      </section>

      {/* ── RESULTS ──────────────────────────────────────────────────────── */}
      <section id="results" className="bg-[var(--color-sand-100)] px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-[var(--font-display)]">Results — SEO-specific stats: ranking improvements, GBP visibility, organic traffic growth for SWFL clients</h1>
        </div>
      </section>

      {/* ── PROCESS ──────────────────────────────────────────────────────── */}
      <section id="process" className="px-6 py-24 max-w-7xl mx-auto">
        <h1 className="text-4xl font-[var(--font-display)]">Process — How SEO is delivered: audit → keyword strategy → on-page work → citations → monthly content & reporting</h1>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section id="faq" className="bg-[var(--color-sand-100)] px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-[var(--font-display)]">FAQ — 3–5 SEO questions: "How long until I see results?", "What's the difference between foundation and ongoing?", "Do you guarantee rankings?"</h1>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────────────── */}
      <section id="cta" className="bg-[var(--color-brown-900)] text-white px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-[var(--font-display)]">Final CTA — Book a Call (Calendly) · cross-sell: accelerate with Google Ads while SEO builds · /pricing link</h1>
        </div>
      </section>
    </main>
  );
}
