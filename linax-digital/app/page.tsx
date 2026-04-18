import type { Metadata } from "next";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "Digital Marketing Agency Cape Coral FL",
  description:
    "Linax Digital — websites, local SEO, paid ads, and reputation management for local service businesses in Southwest Florida.",
};

export default function HomePage() {
  return (
    <main>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <Hero />

{/* ── TRUST BAR ────────────────────────────────────────────────────── */}
      <section id="trust-bar" className="border-y border-[var(--color-sand-200)] bg-[var(--color-sand-100)] px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-[var(--font-display)]">Trust Bar — Client logos / verticals, credibility signals, years in market</h1>
        </div>
      </section>

      {/* ── PROBLEM AGITATION ────────────────────────────────────────────── */}
      <section id="problem" className="px-6 py-24 max-w-7xl mx-auto">
        <h1 className="text-4xl font-[var(--font-display)]">Problem Agitation — Fragmented digital presence, leaking leads, burned by agencies before</h1>
      </section>

      {/* ── SERVICES OVERVIEW ────────────────────────────────────────────── */}
      <section id="services" className="bg-[var(--color-sand-100)] px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-[var(--font-display)]">Services Overview — 4 service cards (Websites, Local SEO, Ads, Reputation Management) with pricing teasers</h1>
        </div>
      </section>

      {/* ── RESULTS SNAPSHOT ─────────────────────────────────────────────── */}
      <section id="results" className="px-6 py-24 max-w-7xl mx-auto">
        <h1 className="text-4xl font-[var(--font-display)]">Results Snapshot — Key stats, before/after metrics, quantified client outcomes</h1>
      </section>

      {/* ── PROCESS ──────────────────────────────────────────────────────── */}
      <section id="process" className="bg-[var(--color-sand-100)] px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-[var(--font-display)]">Process — 4-step: Free Call → Audit & Plan → Build & Launch → Grow & Optimize</h1>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────────── */}
      <section id="testimonials" className="px-6 py-24 max-w-7xl mx-auto">
        <h1 className="text-4xl font-[var(--font-display)]">Testimonials — Client quotes from Four Leaf Charters, Verona Cabinets, Virtue Sod, etc.</h1>
      </section>

      {/* ── LOCAL PROOF ──────────────────────────────────────────────────── */}
      <section id="local-proof" className="bg-[var(--color-sand-100)] px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-[var(--font-display)]">Local Proof — SWFL photos, map, Cape Coral / Lee County roots, founder in the community</h1>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section id="faq" className="px-6 py-24 max-w-7xl mx-auto">
        <h1 className="text-4xl font-[var(--font-display)]">FAQ — 6 most common questions: pricing, contracts, timelines, "I've been burned before"</h1>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────────────── */}
      <section id="cta" className="bg-[var(--color-brown-900)] text-white px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-[var(--font-display)]">Final CTA — Dark warm section, Calendly booking CTA + Free Audit secondary CTA</h1>
        </div>
      </section>
    </main>
  );
}
