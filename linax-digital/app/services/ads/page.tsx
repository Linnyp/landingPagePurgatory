import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Google & Meta Ads Cape Coral FL — PPC Management SWFL",
  description:
    "Google Ads and Meta Ads management for local service businesses in Southwest Florida. Full campaign management with transparent pricing.",
};

export default function AdsPage() {
  return (
    <main>
      {/* Breadcrumb */}
      <nav className="px-6 pt-6 max-w-7xl mx-auto text-sm text-[var(--color-sand-700)]">
        <Link href="/">Home</Link> &rsaquo; <Link href="/services">Services</Link> &rsaquo; Google &amp; Meta Ads
      </nav>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section id="hero" className="px-6 py-24 max-w-7xl mx-auto">
        <h1 className="text-5xl font-[var(--font-display)]">Ads Hero — Service name, value prop ("Get in front of customers who are already looking for you"), primary CTA (Book a Call)</h1>
      </section>

      {/* ── WHAT'S INCLUDED ──────────────────────────────────────────────── */}
      <section id="whats-included" className="bg-[var(--color-sand-100)] px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-[var(--font-display)]">What's Included — Google (search, display, local services, PMax) + Meta (FB/IG) · ad copywriting · audience segmentation · campaign management · monthly reporting</h1>
        </div>
      </section>

      {/* ── PRICING ──────────────────────────────────────────────────────── */}
      <section id="pricing" className="px-6 py-24 max-w-7xl mx-auto">
        <h1 className="text-4xl font-[var(--font-display)]">Pricing — $300/mo min or 10% of ad spend (whichever greater), capped at $2,000/mo · ROAS guarantee: no fees if ROAS &lt; 2:1</h1>
      </section>

      {/* ── RESULTS ──────────────────────────────────────────────────────── */}
      <section id="results" className="bg-[var(--color-sand-100)] px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-[var(--font-display)]">Results — Ads-specific stats: ROAS achieved, cost-per-lead, campaign performance for SWFL clients</h1>
        </div>
      </section>

      {/* ── PROCESS ──────────────────────────────────────────────────────── */}
      <section id="process" className="px-6 py-24 max-w-7xl mx-auto">
        <h1 className="text-4xl font-[var(--font-display)]">Process — How ads are delivered: audit → account setup → campaign build → launch → monthly optimization & reporting</h1>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section id="faq" className="bg-[var(--color-sand-100)] px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-[var(--font-display)]">FAQ — 3–5 ads questions: "What's a good ROAS?", "How much should I spend on ads?", "Do you manage both Google and Meta?"</h1>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────────────── */}
      <section id="cta" className="bg-[var(--color-brown-900)] text-white px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-[var(--font-display)]">Final CTA — Book a Call (Calendly) · cross-sell: capture & convert more leads with Reputation Management · /pricing link</h1>
        </div>
      </section>
    </main>
  );
}
