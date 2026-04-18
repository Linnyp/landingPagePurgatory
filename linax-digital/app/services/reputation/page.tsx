import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Reputation Management Cape Coral FL — Google Review Service SWFL",
  description:
    "Done-for-you reputation management for local service businesses. Review requests, unified inbox, and customer engagement — powered by Go High Level.",
};

export default function ReputationPage() {
  return (
    <main>
      {/* Breadcrumb */}
      <nav className="px-6 pt-6 max-w-7xl mx-auto text-sm text-[var(--color-sand-700)]">
        <Link href="/">Home</Link> &rsaquo; <Link href="/services">Services</Link> &rsaquo; Reputation Management
      </nav>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section id="hero" className="px-6 py-24 max-w-7xl mx-auto">
        <h1 className="text-5xl font-[var(--font-display)]">Reputation Management Hero — "Your reviews, your inbox, your follow-ups — handled" · MOST POPULAR badge · primary CTA (Book a Call)</h1>
      </section>

      {/* ── WHAT'S INCLUDED ──────────────────────────────────────────────── */}
      <section id="whats-included" className="bg-[var(--color-sand-100)] px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-[var(--font-display)]">What's Included — Dedicated Go High Level sub-account · review request workflows · feedback generation · sentiment analysis · automated customer engagement · CRM + unified inbox access</h1>
        </div>
      </section>

      {/* ── PRICING ──────────────────────────────────────────────────────── */}
      <section id="pricing" className="px-6 py-24 max-w-7xl mx-auto">
        <h1 className="text-4xl font-[var(--font-display)]">Pricing — $195/mo · month-to-month, no long-term lock-in · link to full /pricing page</h1>
      </section>

      {/* ── RESULTS ──────────────────────────────────────────────────────── */}
      <section id="results" className="bg-[var(--color-sand-100)] px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-[var(--font-display)]">Results — Review count growth, star rating improvements, response rate stats for SWFL clients</h1>
        </div>
      </section>

      {/* ── PROCESS ──────────────────────────────────────────────────────── */}
      <section id="process" className="px-6 py-24 max-w-7xl mx-auto">
        <h1 className="text-4xl font-[var(--font-display)]">Process — Onboarding → GHL sub-account setup → workflow configuration → go-live → ongoing management</h1>
      </section>

      {/* ── PLATFORM UPSELLS ─────────────────────────────────────────────── */}
      <section id="platform-upsells" className="bg-[var(--color-sand-100)] px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-[var(--font-display)]">Platform Upsells — For existing clients: SMS marketing · Email marketing · Loyalty & rewards · Automations · Chatbots · Custom workflows (quoted per scope)</h1>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section id="faq" className="bg-white px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-[var(--font-display)]">FAQ — 3–5 reputation questions: "What is Go High Level?", "Can I see my reviews in one place?", "How do review requests get sent?"</h1>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────────────── */}
      <section id="cta" className="bg-[var(--color-brown-900)] text-white px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-[var(--font-display)]">Final CTA — Book a Call (Calendly) · this is the flagship onramp · /pricing link</h1>
        </div>
      </section>
    </main>
  );
}
