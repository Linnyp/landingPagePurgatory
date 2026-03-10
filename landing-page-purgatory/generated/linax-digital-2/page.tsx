/*
 * Linax Digital — Landing Page v2
 * Redesigned: 2026-03-10
 * Style: Hand-Drawn / Sketch (ui-sketch-agent)
 *
 * SETUP:
 * Add to app/layout.tsx <head>:
 *   <link href="https://fonts.googleapis.com/css2?family=Kalam:wght@400;700&family=Patrick+Hand&display=swap" rel="stylesheet" />
 */

"use client";

import React, { useState, useEffect } from "react";

// ---------------------------------------------------------------------------
// Design Tokens
// ---------------------------------------------------------------------------

const sk = {
  bg: "#fdfbf7",
  fg: "#2d2d2d",
  muted: "#e5e0d8",
  accent: "#ff4d4d",
  blue: "#2d5da1",
  yellow: "#fff9c4",
  white: "#ffffff",
  heading: "'Kalam', cursive",
  body: "'Patrick Hand', cursive",
} as const;

const radius = {
  wobbly: "255px 15px 225px 15px / 15px 225px 15px 255px",
  wobblyAlt: "15px 225px 15px 255px / 225px 15px 255px 15px",
  wobblyMd: "30px 70px 70px 30px / 30px 30px 70px 70px",
  wobblyLg: "248px 30px 300px 5px / 30px 220px 10px 255px",
  wobblyBtn: "255px 10px 230px 10px / 10px 230px 10px 255px",
  wobblyTag: "120px 8px 100px 8px / 8px 100px 8px 120px",
  wobblyCircle: "60% 40% 55% 45% / 45% 55% 40% 60%",
} as const;

const paperTexture: React.CSSProperties = {
  backgroundImage: "radial-gradient(#e5e0d8 1px, transparent 1px)",
  backgroundSize: "24px 24px",
};

// ---------------------------------------------------------------------------
// Content Data (same as linax-digital)
// ---------------------------------------------------------------------------

const stats = [
  { value: "4+", label: "Active client engagements" },
  { value: "Multi", label: "Industries: marine, home services, ecommerce, nonprofit" },
  { value: "100%", label: "Built directly by the founder — no outsourced delivery" },
];

const clientNames = ["Four Leaf Charters", "Verona Cabinets", "Mycelia Foundation"];

const problems = [
  {
    name: "Invisible Online",
    body: 'When someone searches "HVAC repair near me," your competitors show up and you don\u2019t. A weak Google Business Profile, no consistent reviews, and a slow mobile site means you\u2019re losing jobs to businesses half as good as yours.',
  },
  {
    name: "Slow Lead Follow-Up",
    body: "A lead that doesn\u2019t hear back within five minutes is 80% less likely to convert. Most service businesses follow up hours later \u2014 or not at all. Every missed response is a job you paid to lose.",
  },
  {
    name: "No Time for the Tech",
    body: "You\u2019ve heard about AI. But between running crews and managing the day-to-day, there\u2019s no bandwidth to figure out which tools are worth it. So nothing changes, and the gap between you and your tech-forward competitors quietly grows.",
  },
];

const services = [
  { icon: "map",      title: "Local SEO That Drives Calls",         description: "We optimize your Google Business Profile, build local citations, and structure your site so you rank for the searches that bring in paying customers. We track rankings, monitor competitors, and adjust as the algorithm moves." },
  { icon: "bolt",     title: "AI-Powered Lead Automation",          description: "We deploy AI systems that respond to new inquiries instantly, qualify leads through automated follow-up, and book appointments \u2014 without you lifting a finger. Fewer leads falling through the cracks at 10pm on a Friday." },
  { icon: "globe",    title: "Websites Built to Convert",           description: "Fast, mobile-first websites in Next.js and React designed around one goal: turning visitors into calls and form fills. Structured to match how your customers search, think, and decide." },
  { icon: "chart",    title: "Paid Ads That Pay Back",              description: "We manage Google Ads and Meta campaigns focused on cost-per-lead efficiency for local service budgets \u2014 not vanity metrics. Built on keyword-level data and targeting specific to your service area." },
  { icon: "message",  title: "AI Chatbots and Scheduling Tools",    description: "Custom AI chatbots trained on your services, pricing, and FAQs \u2014 handling incoming questions 24/7 and routing qualified prospects to your calendar. Faster response without adding headcount." },
  { icon: "settings", title: "Workflow Integration and Automation", description: "We map your operations and identify where manual tasks \u2014 estimating follow-ups, review requests, job confirmations \u2014 can be automated. Less busywork, fewer dropped balls, more consistent customer experience." },
];

const testimonials = [
  { quote: "Before working with Linax, our Google listing was basically invisible. Within two months we were showing up in the top three for searches we\u2019d never ranked for before. We\u2019ve had people book charters specifically because they found us on Google \u2014 that never happened before.", name: "[REPLACE: Client Name]", titleAndCompany: "Owner, Four Leaf Charters", result: "Top 3 local rankings in 2 months" },
  { quote: "Our paid ad spend was inconsistent and we had no real targeting strategy. The Meta campaign work gave us a clear picture of where we were wasting money. Our cost per lead dropped significantly within the first campaign cycle.", name: "[REPLACE: Client Name]", titleAndCompany: "Owner, Verona Cabinets", result: "[REPLACE: % drop in cost per lead]" },
  { quote: "What I appreciated most was that I didn\u2019t have to explain basic things twice. Linax came in already understanding the technical side. The AI follow-up system alone saves us hours every week.", name: "[REPLACE: Client Name]", titleAndCompany: "[REPLACE: Title, Company]", result: "Hours saved per week on follow-up" },
];

const steps = [
  { number: "01", title: "Audit & Alignment Call", body: "A free 30-minute discovery call to understand your business and where the biggest opportunities are. We audit your Google presence, website, and competitive landscape \u2014 so we know exactly what\u2019s costing you leads right now." },
  { number: "02", title: "Build the Right Foundation", body: "We develop a prioritized roadmap \u2014 website rebuild, GBP overhaul, paid ads launch, or AI workflow deployment. All implementation is handled directly by the founder. Nothing is handed off." },
  { number: "03", title: "Optimize, Automate, Grow", body: "We layer in automation and AI systems that make your marketing work harder over time \u2014 capturing leads you\u2019d otherwise miss, nurturing prospects while you\u2019re on a job site, and giving you reporting that tells you what\u2019s working." },
];

const pricingPlans = [
  {
    name: "Foundation",
    price: "Contact for pricing",
    cadence: "Monthly retainer",
    description: "For businesses that need to build a solid digital presence before running paid campaigns or adding AI workflows.",
    features: ["GBP audit and optimization", "Local SEO (on-page/technical/citations)", "Monthly performance reporting", "Competitor ranking monitoring", "Review generation strategy", "One-time website audit"],
    featured: false,
  },
  {
    name: "Growth",
    price: "Contact for pricing",
    cadence: "Monthly retainer",
    description: "For businesses ready to generate consistent leads through search and paid channels while automating the follow-up process.",
    features: ["Everything in Foundation", "Google Ads or Meta Ads management", "AI-powered lead follow-up automation", "Appointment scheduling integration", "Monthly strategy call", "Quarterly roadmap review"],
    featured: true,
  },
  {
    name: "Full-Stack",
    price: "Contact for pricing",
    cadence: "Monthly retainer + milestones",
    description: "For businesses that want a complete digital rebuild — new website, AI workflows, and ongoing marketing under one roof.",
    features: ["Everything in Growth", "Custom website (Next.js/React)", "AI chatbot build and deployment", "Workflow automation implementation", "Priority turnaround on all deliverables", "Dedicated founder access"],
    featured: false,
  },
];

const faqItems = [
  { q: "How do I know this will actually deliver ROI?", a: "We start every engagement with an audit so we can show you exactly where you\u2019re losing leads before asking you to spend anything. Ongoing services are measured against benchmarks we define together \u2014 not vanity metrics." },
  { q: "How much time will this take on my end?", a: "Very little, by design. The discovery call is 30 minutes. After that, most clients spend one to two hours per month reviewing results. We handle implementation, reporting, and iteration." },
  { q: "My business is HVAC/plumbing/landscaping \u2014 does this apply to me?", a: "Local service businesses are exactly who we built this for. The SEO strategies, lead automation workflows, and ad campaigns are built around how people in your market search for and choose a service provider." },
  { q: "I\u2019ve worked with agencies before and got burned. Why is this different?", a: "The founder writes the code, runs the campaigns, and builds the systems directly \u2014 no account manager relaying your work to a fulfillment team. You communicate with the person doing the work." },
  { q: "We\u2019re busy right now \u2014 can this wait?", a: "The businesses that are too busy to fix their marketing are usually busy because of word-of-mouth \u2014 which is fragile. The best time to build a digital foundation is when you have breathing room. The second-best time is now." },
];

// ---------------------------------------------------------------------------
// Inline SVG Icons
// ---------------------------------------------------------------------------

function IconMap()      { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" fill="currentColor"/></svg>; }
function IconBolt()     { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>; }
function IconGlobe()    { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><path d="M2 12h20M12 2c-2.5 3-4 6.5-4 10s1.5 7 4 10M12 2c2.5 3 4 6.5 4 10s-1.5 7-4 10" stroke="currentColor" strokeWidth="2"/></svg>; }
function IconChart()    { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M3 20h18M7 20V10M12 20V4M17 20v-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>; }
function IconMessage()  { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>; }
function IconSettings() { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" stroke="currentColor" strokeWidth="2"/></svg>; }
function IconMenu()     { return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/></svg>; }
function IconClose()    { return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/></svg>; }

function ServiceIcon({ icon }: { icon: string }) {
  switch (icon) {
    case "map":      return <IconMap />;
    case "bolt":     return <IconBolt />;
    case "globe":    return <IconGlobe />;
    case "chart":    return <IconChart />;
    case "message":  return <IconMessage />;
    case "settings": return <IconSettings />;
    default:         return null;
  }
}

// ---------------------------------------------------------------------------
// Decorative: Tape Strip
// ---------------------------------------------------------------------------

function Tape({ rotate = -1 }: { rotate?: number }) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        top: "-12px",
        left: "50%",
        transform: `translateX(-50%) rotate(${rotate}deg)`,
        width: "60px",
        height: "22px",
        backgroundColor: "rgba(200, 196, 185, 0.55)",
        borderLeft: "1px dashed rgba(45,45,45,0.15)",
        borderRight: "1px dashed rgba(45,45,45,0.15)",
        zIndex: 2,
      }}
    />
  );
}

// ---------------------------------------------------------------------------
// Decorative: Thumbtack
// ---------------------------------------------------------------------------

function Thumbtack({ color = sk.accent }: { color?: string }) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        top: "-10px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "18px",
        height: "18px",
        borderRadius: "50%",
        backgroundColor: color,
        border: `2px solid ${sk.fg}`,
        boxShadow: "2px 2px 0px 0px rgba(45,45,45,0.4)",
        zIndex: 2,
      }}
    />
  );
}

// ---------------------------------------------------------------------------
// Decorative: Sticky Note Section Label
// ---------------------------------------------------------------------------

function StickyLabel({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: "inline-block",
        backgroundColor: sk.yellow,
        border: `2px solid ${sk.fg}`,
        borderRadius: radius.wobblyTag,
        padding: "4px 16px",
        fontFamily: sk.body,
        fontWeight: 400,
        fontSize: "14px",
        color: sk.fg,
        boxShadow: "3px 3px 0px 0px rgba(45,45,45,0.15)",
        transform: "rotate(-1deg)",
        marginBottom: "16px",
        position: "relative" as const,
      }}
    >
      {children}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Hand-drawn Arrow SVG
// ---------------------------------------------------------------------------

function HandDrawnArrow() {
  return (
    <svg
      width="80"
      height="60"
      viewBox="0 0 80 60"
      fill="none"
      aria-hidden="true"
      style={{ position: "absolute", bottom: "-24px", left: "calc(50% - 120px)", transform: "rotate(15deg)" }}
      className="hidden md:block"
    >
      <path
        d="M10 10 Q 20 40, 60 45"
        stroke={sk.fg}
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        strokeDasharray="0"
      />
      <path
        d="M55 36 L62 47 L50 48"
        stroke={sk.fg}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Hand-drawn Squiggly Connector (How It Works)
// ---------------------------------------------------------------------------

function SquigglyConnector() {
  return (
    <svg
      width="120"
      height="30"
      viewBox="0 0 120 30"
      fill="none"
      aria-hidden="true"
      style={{ position: "absolute", top: "32px", left: "calc(50% - 60px)", zIndex: 1 }}
      className="hidden md:block"
    >
      <path
        d="M0 15 Q 15 5, 30 15 Q 45 25, 60 15 Q 75 5, 90 15 Q 105 25, 120 15"
        stroke={sk.muted}
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// SiteNav
// ---------------------------------------------------------------------------

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Results", href: "#results" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

function SiteNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: sk.bg,
        borderBottom: `3px solid ${sk.fg}`,
        boxShadow: scrolled ? `0 4px 0px 0px ${sk.fg}` : "none",
        transition: "box-shadow 200ms ease",
        ...paperTexture,
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "68px",
        }}
      >
        {/* Logo */}
        <a
          href="/"
          aria-label="Linax Digital home"
          style={{
            fontFamily: sk.heading,
            fontWeight: 700,
            fontSize: "26px",
            color: sk.fg,
            textDecoration: "none",
            transform: "rotate(-1deg)",
            display: "inline-block",
          }}
        >
          Linax<span style={{ color: sk.accent }}>!</span>
        </a>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden md:flex" style={{ display: "flex", gap: "28px", alignItems: "center" }}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontFamily: sk.body,
                fontSize: "17px",
                color: sk.fg,
                textDecoration: "none",
                position: "relative" as const,
                transition: "color 100ms ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = sk.accent;
                const u = e.currentTarget.querySelector(".underline-decor") as HTMLElement;
                if (u) u.style.opacity = "1";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = sk.fg;
                const u = e.currentTarget.querySelector(".underline-decor") as HTMLElement;
                if (u) u.style.opacity = "0";
              }}
            >
              {link.label}
              <span
                className="underline-decor"
                aria-hidden="true"
                style={{
                  position: "absolute",
                  bottom: "-3px",
                  left: 0,
                  right: 0,
                  height: "3px",
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='4' viewBox='0 0 40 4'%3E%3Cpath d='M0 2 Q5 0 10 2 Q15 4 20 2 Q25 0 30 2 Q35 4 40 2' stroke='%23ff4d4d' strokeWidth='2' fill='none' strokeLinecap='round'/%3E%3C/svg%3E")`,
                  backgroundRepeat: "repeat-x",
                  opacity: 0,
                  transition: "opacity 100ms ease",
                }}
              />
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex"
          style={{
            fontFamily: sk.body,
            fontSize: "16px",
            color: sk.white,
            backgroundColor: sk.accent,
            border: `3px solid ${sk.fg}`,
            borderRadius: radius.wobblyBtn,
            padding: "10px 24px",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            minHeight: "44px",
            boxShadow: `4px 4px 0px 0px ${sk.fg}`,
            transition: "transform 100ms ease, box-shadow 100ms ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translate(2px, 2px)";
            e.currentTarget.style.boxShadow = `2px 2px 0px 0px ${sk.fg}`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translate(0, 0)";
            e.currentTarget.style.boxShadow = `4px 4px 0px 0px ${sk.fg}`;
          }}
        >
          Book a Free Call ✏️
        </a>

        {/* Mobile hamburger */}
        <button
          className="flex md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          style={{ background: "none", border: "none", color: sk.fg, cursor: "pointer", padding: "8px", minHeight: "44px", minWidth: "44px", display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          {mobileOpen ? <IconClose /> : <IconMenu />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          style={{
            position: "fixed",
            inset: "71px 0 0 0",
            backgroundColor: sk.bg,
            zIndex: 40,
            padding: "32px 24px",
            display: "flex",
            flexDirection: "column",
            gap: "0",
            borderTop: `3px solid ${sk.fg}`,
            ...paperTexture,
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                fontFamily: sk.heading,
                fontWeight: 700,
                fontSize: "28px",
                color: sk.fg,
                textDecoration: "none",
                padding: "14px 0",
                borderBottom: `2px dashed ${sk.muted}`,
                display: "block",
                transition: "color 100ms ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = sk.accent)}
              onMouseLeave={(e) => (e.currentTarget.style.color = sk.fg)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            style={{
              fontFamily: sk.body,
              fontSize: "18px",
              color: sk.white,
              backgroundColor: sk.accent,
              border: `3px solid ${sk.fg}`,
              borderRadius: radius.wobblyBtn,
              padding: "16px 32px",
              textDecoration: "none",
              textAlign: "center",
              marginTop: "24px",
              minHeight: "52px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: `4px 4px 0px 0px ${sk.fg}`,
            }}
          >
            Book a Free Call ✏️
          </a>
        </div>
      )}
    </header>
  );
}

// ---------------------------------------------------------------------------
// HeroSection
// ---------------------------------------------------------------------------

function HeroStickyComposition() {
  return (
    <div
      style={{ position: "relative", width: "100%", minHeight: "360px", display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      {/* Main sticky note — results */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "5%",
          width: "200px",
          backgroundColor: sk.yellow,
          border: `3px solid ${sk.fg}`,
          borderRadius: radius.wobblyMd,
          padding: "20px",
          boxShadow: `6px 6px 0px 0px ${sk.fg}`,
          transform: "rotate(-3deg)",
          zIndex: 3,
        }}
      >
        <div style={{ fontFamily: sk.heading, fontWeight: 700, fontSize: "32px", color: sk.accent, lineHeight: 1 }}>Top 3</div>
        <div style={{ fontFamily: sk.body, fontSize: "14px", color: sk.fg, marginTop: "4px", lineHeight: 1.4 }}>Google rankings in 2 months 📍</div>
      </div>

      {/* Second sticky — speed */}
      <div
        style={{
          position: "absolute",
          top: "5%",
          right: "0%",
          width: "180px",
          backgroundColor: "#c8e6ff",
          border: `3px solid ${sk.fg}`,
          borderRadius: "15px 255px 15px 225px / 225px 15px 255px 15px",
          padding: "20px",
          boxShadow: `6px 6px 0px 0px ${sk.fg}`,
          transform: "rotate(2deg)",
          zIndex: 2,
        }}
      >
        <div style={{ fontFamily: sk.heading, fontWeight: 700, fontSize: "26px", color: sk.blue, lineHeight: 1 }}>5 min</div>
        <div style={{ fontFamily: sk.body, fontSize: "13px", color: sk.fg, marginTop: "4px", lineHeight: 1.4 }}>avg. lead response time ⚡</div>
      </div>

      {/* Sketch bar chart */}
      <div
        style={{
          position: "absolute",
          bottom: "5%",
          right: "5%",
          backgroundColor: sk.white,
          border: `3px solid ${sk.fg}`,
          borderRadius: radius.wobblyMd,
          padding: "16px 20px",
          boxShadow: `5px 5px 0px 0px ${sk.fg}`,
          transform: "rotate(1.5deg)",
          zIndex: 3,
        }}
      >
        <div style={{ fontFamily: sk.body, fontSize: "12px", color: sk.fg, marginBottom: "8px" }}>monthly leads →</div>
        <div style={{ display: "flex", gap: "6px", alignItems: "flex-end", height: "48px" }}>
          {[20, 35, 28, 50, 42, 68, 80].map((h, i) => (
            <div
              key={i}
              style={{
                width: "12px",
                height: `${h}%`,
                backgroundColor: i === 6 ? sk.accent : sk.muted,
                border: `2px solid ${sk.fg}`,
                borderRadius: "4px 4px 2px 2px",
              }}
            />
          ))}
        </div>
      </div>

      {/* Center label */}
      <div
        style={{
          position: "relative",
          backgroundColor: sk.white,
          border: `3px solid ${sk.fg}`,
          borderRadius: radius.wobbly,
          padding: "24px 28px",
          boxShadow: `7px 7px 0px 0px ${sk.fg}`,
          transform: "rotate(-1deg)",
          zIndex: 1,
          maxWidth: "220px",
          textAlign: "center",
        }}
      >
        <Thumbtack color={sk.blue} />
        <div style={{ fontFamily: sk.body, fontSize: "13px", color: "#888", marginBottom: "4px" }}>clients served</div>
        <div style={{ fontFamily: sk.heading, fontWeight: 700, fontSize: "40px", color: sk.fg, lineHeight: 1 }}>4+</div>
        <div style={{ fontFamily: sk.body, fontSize: "12px", color: sk.fg, marginTop: "4px" }}>SW Florida 📍</div>
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <section
      aria-label="Hero"
      style={{
        backgroundColor: sk.bg,
        paddingTop: "108px",
        paddingBottom: "80px",
        ...paperTexture,
      }}
    >
      <div
        style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px", display: "grid", gap: "48px", alignItems: "center" }}
        className="grid-cols-1 lg:grid-cols-2"
      >
        {/* Copy */}
        <div style={{ position: "relative" }}>
          <StickyLabel>Digital Marketing & AI Integration</StickyLabel>

          <h1
            style={{
              fontFamily: sk.heading,
              fontWeight: 700,
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              lineHeight: 1.15,
              color: sk.fg,
              margin: "0 0 24px",
            }}
          >
            Your Competitors Are About to Get a Lot{" "}
            <span
              style={{
                color: sk.accent,
                display: "inline-block",
                transform: "rotate(2deg)",
                textDecoration: "underline",
                textDecorationStyle: "wavy",
                textDecorationColor: sk.accent,
              }}
            >
              Faster!
            </span>
          </h1>

          <p
            style={{
              fontFamily: sk.body,
              fontSize: "19px",
              lineHeight: 1.7,
              color: sk.fg,
              margin: "0 0 32px",
              maxWidth: "500px",
            }}
          >
            Linax Digital helps local service businesses — HVAC, plumbing, landscaping, remodeling — get found online, convert more leads, and automate the repetitive work eating your week.{" "}
            <span style={{ backgroundColor: sk.yellow, padding: "0 4px" }}>No in-house tech team required.</span>
          </p>

          {/* CTA group */}
          <div style={{ position: "relative", display: "inline-block" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "center" }}>
              <a
                href="#contact"
                style={{
                  fontFamily: sk.body,
                  fontSize: "18px",
                  color: sk.white,
                  backgroundColor: sk.accent,
                  border: `3px solid ${sk.fg}`,
                  borderRadius: radius.wobblyBtn,
                  padding: "14px 32px",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  minHeight: "52px",
                  boxShadow: `5px 5px 0px 0px ${sk.fg}`,
                  transition: "transform 100ms ease, box-shadow 100ms ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translate(2px, 2px)";
                  e.currentTarget.style.boxShadow = `3px 3px 0px 0px ${sk.fg}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translate(0, 0)";
                  e.currentTarget.style.boxShadow = `5px 5px 0px 0px ${sk.fg}`;
                }}
              >
                Book a Free Discovery Call →
              </a>

              <a
                href="#services"
                style={{
                  fontFamily: sk.body,
                  fontSize: "17px",
                  color: sk.fg,
                  backgroundColor: "transparent",
                  border: `3px dashed ${sk.fg}`,
                  borderRadius: radius.wobblyBtn,
                  padding: "14px 28px",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  minHeight: "52px",
                  transition: "background-color 100ms ease, color 100ms ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = sk.yellow;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                See What We Do
              </a>
            </div>
            <HandDrawnArrow />
          </div>

          <p style={{ fontFamily: sk.body, fontSize: "14px", color: "#888", marginTop: "20px" }}>
            No commitment. 30 minutes. Walk away with clarity. 👍
          </p>
        </div>

        {/* Sticky note composition */}
        <div className="hidden lg:block">
          <HeroStickyComposition />
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// SocialProofBar
// ---------------------------------------------------------------------------

function SocialProofBar() {
  const rotations = [-1.5, 0.5, -1, 1];
  return (
    <section
      aria-label="Social proof"
      style={{
        backgroundColor: sk.muted,
        borderTop: `3px solid ${sk.fg}`,
        borderBottom: `3px solid ${sk.fg}`,
        paddingTop: "56px",
        paddingBottom: "56px",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <span style={{ fontFamily: sk.body, fontSize: "16px", color: "#777" }}>
            ~ trusted by local businesses across Southwest Florida ~
          </span>
        </div>

        <div style={{ display: "grid", gap: "24px", marginBottom: "40px" }} className="grid-cols-1 md:grid-cols-3">
          {stats.map((stat, i) => (
            <div
              key={stat.value}
              style={{
                backgroundColor: sk.white,
                border: `3px solid ${sk.fg}`,
                borderRadius: radius.wobblyMd,
                padding: "24px",
                boxShadow: `5px 5px 0px 0px ${sk.fg}`,
                textAlign: "center",
                transform: `rotate(${rotations[i]}deg)`,
                transition: "transform 100ms ease",
                position: "relative",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = `rotate(${-rotations[i]}deg)`; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = `rotate(${rotations[i]}deg)`; }}
            >
              <div style={{ fontFamily: sk.heading, fontWeight: 700, fontSize: "44px", color: sk.accent, lineHeight: 1 }}>{stat.value}</div>
              <div style={{ fontFamily: sk.body, fontSize: "15px", color: sk.fg, marginTop: "8px", lineHeight: 1.4 }}>{stat.label}</div>
            </div>
          ))}
        </div>

        <div
          style={{
            borderTop: `2px dashed ${sk.fg}`,
            paddingTop: "28px",
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "24px",
            alignItems: "center",
          }}
        >
          {clientNames.map((name) => (
            <span
              key={name}
              style={{
                fontFamily: sk.body,
                fontSize: "16px",
                color: sk.fg,
                backgroundColor: sk.yellow,
                border: `2px solid ${sk.fg}`,
                borderRadius: radius.wobblyTag,
                padding: "4px 16px",
                boxShadow: `3px 3px 0px 0px ${sk.fg}`,
              }}
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// ProblemSection
// ---------------------------------------------------------------------------

function ProblemSection() {
  const rotations = [-1, 0.5, -0.5];
  return (
    <section
      id="problem"
      aria-labelledby="problem-heading"
      style={{ backgroundColor: sk.bg, paddingTop: "96px", paddingBottom: "96px", ...paperTexture }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <StickyLabel>🚨 The Real Problem</StickyLabel>
          <h2
            id="problem-heading"
            style={{ fontFamily: sk.heading, fontWeight: 700, fontSize: "clamp(2rem, 4vw, 3rem)", color: sk.fg, margin: "0 0 16px", lineHeight: 1.2 }}
          >
            You know you need better marketing.
            <br />
            <span style={{ color: sk.accent }}>You just don&apos;t know where to start.</span>
          </h2>
          <p style={{ fontFamily: sk.body, fontSize: "18px", color: "#666", lineHeight: 1.6, maxWidth: "560px", margin: "0 auto" }}>
            Most local service businesses are losing leads they never knew they had. The problem usually isn&apos;t the quality of your work.
          </p>
        </div>

        <div style={{ display: "grid", gap: "40px" }} className="grid-cols-1 md:grid-cols-3">
          {problems.map((p, i) => (
            <article
              key={p.name}
              style={{
                backgroundColor: sk.yellow,
                border: `3px solid ${sk.fg}`,
                borderRadius: radius.wobblyMd,
                padding: "32px",
                boxShadow: `6px 6px 0px 0px ${sk.fg}`,
                transform: `rotate(${rotations[i]}deg)`,
                position: "relative",
                transition: "transform 100ms ease, box-shadow 100ms ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = `rotate(${-rotations[i]}deg)`;
                (e.currentTarget as HTMLElement).style.boxShadow = `4px 4px 0px 0px ${sk.fg}`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = `rotate(${rotations[i]}deg)`;
                (e.currentTarget as HTMLElement).style.boxShadow = `6px 6px 0px 0px ${sk.fg}`;
              }}
            >
              <Tape rotate={i % 2 === 0 ? -2 : 1} />
              <h3 style={{ fontFamily: sk.heading, fontWeight: 700, fontSize: "22px", color: sk.fg, margin: "0 0 12px" }}>{p.name}</h3>
              <p style={{ fontFamily: sk.body, fontSize: "16px", lineHeight: 1.65, color: sk.fg, margin: 0 }}>{p.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// ServicesSection
// ---------------------------------------------------------------------------

const serviceRotations = [-0.5, 1, -1, 0.5, -0.5, 1];

function ServicesSection() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      style={{ backgroundColor: sk.white, paddingTop: "96px", paddingBottom: "96px", borderTop: `3px solid ${sk.fg}`, borderBottom: `3px solid ${sk.fg}` }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <StickyLabel>🛠️ What We Do</StickyLabel>
          <h2
            id="services-heading"
            style={{ fontFamily: sk.heading, fontWeight: 700, fontSize: "clamp(2rem, 4vw, 3rem)", color: sk.fg, margin: "0 0 16px", lineHeight: 1.2 }}
          >
            Every service feeds the same outcome:
            <br />
            <span style={{ color: sk.accent }}>more qualified leads with less wasted effort.</span>
          </h2>
        </div>

        <div style={{ display: "grid", gap: "36px" }} className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <article
              key={service.title}
              style={{
                backgroundColor: i % 3 === 1 ? sk.yellow : sk.white,
                border: `3px solid ${sk.fg}`,
                borderRadius: radius.wobblyMd,
                padding: "32px",
                boxShadow: `5px 5px 0px 0px ${sk.fg}`,
                transform: `rotate(${serviceRotations[i]}deg)`,
                position: "relative",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                transition: "transform 100ms ease, box-shadow 100ms ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = `rotate(${-serviceRotations[i]}deg)`;
                (e.currentTarget as HTMLElement).style.boxShadow = `3px 3px 0px 0px ${sk.fg}`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = `rotate(${serviceRotations[i]}deg)`;
                (e.currentTarget as HTMLElement).style.boxShadow = `5px 5px 0px 0px ${sk.fg}`;
              }}
            >
              {i % 2 === 0 ? <Thumbtack color={i % 4 === 0 ? sk.accent : sk.blue} /> : <Tape rotate={i % 2 === 0 ? -1 : 1} />}
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: radius.wobblyCircle,
                  backgroundColor: sk.muted,
                  border: `2.5px solid ${sk.fg}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: sk.fg,
                  flexShrink: 0,
                }}
              >
                <ServiceIcon icon={service.icon} />
              </div>
              <h3 style={{ fontFamily: sk.heading, fontWeight: 700, fontSize: "20px", color: sk.fg, margin: 0, lineHeight: 1.3 }}>{service.title}</h3>
              <p style={{ fontFamily: sk.body, fontSize: "15px", lineHeight: 1.65, color: sk.fg, margin: 0, opacity: 0.85 }}>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// ResultsSection — speech bubble testimonials
// ---------------------------------------------------------------------------

function TestimonialCard({ testimonial, rotate }: { testimonial: typeof testimonials[0]; rotate: number }) {
  const [hovered, setHovered] = useState(false);
  return (
    <article
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        transform: `rotate(${hovered ? -rotate : rotate}deg)`,
        transition: "transform 100ms ease, box-shadow 100ms ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Result badge */}
      <div
        style={{
          display: "inline-flex",
          alignSelf: "flex-start",
          backgroundColor: sk.accent,
          color: sk.white,
          fontFamily: sk.body,
          fontSize: "13px",
          border: `2px solid ${sk.fg}`,
          borderRadius: radius.wobblyTag,
          padding: "4px 14px",
          boxShadow: `3px 3px 0px 0px ${sk.fg}`,
          transform: "rotate(-1deg)",
        }}
      >
        {testimonial.result}
      </div>

      {/* Speech bubble */}
      <div
        style={{
          backgroundColor: sk.white,
          border: `3px solid ${sk.fg}`,
          borderRadius: radius.wobblyMd,
          padding: "28px",
          boxShadow: `${hovered ? "3px 3px" : "6px 6px"} 0px 0px ${sk.fg}`,
          position: "relative",
          transition: "box-shadow 100ms ease",
        }}
      >
        {/* Speech tail */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: "-18px",
            left: "32px",
            width: 0,
            height: 0,
            borderLeft: "12px solid transparent",
            borderRight: "12px solid transparent",
            borderTop: `18px solid ${sk.fg}`,
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: "-14px",
            left: "34px",
            width: 0,
            height: 0,
            borderLeft: "10px solid transparent",
            borderRight: "10px solid transparent",
            borderTop: `16px solid ${sk.white}`,
          }}
        />

        <div style={{ fontFamily: sk.body, fontSize: "18px", color: sk.blue, marginBottom: "12px", lineHeight: 1 }}>&ldquo;</div>
        <blockquote style={{ fontFamily: sk.body, fontSize: "15px", lineHeight: 1.7, color: sk.fg, margin: 0, fontStyle: "normal" }}>
          {testimonial.quote}
        </blockquote>
      </div>

      {/* Attribution */}
      <div style={{ paddingLeft: "16px", paddingTop: "8px" }}>
        <div style={{ fontFamily: sk.heading, fontWeight: 700, fontSize: "17px", color: sk.fg }}>{testimonial.name}</div>
        <div style={{ fontFamily: sk.body, fontSize: "14px", color: "#888", marginTop: "2px" }}>{testimonial.titleAndCompany}</div>
      </div>
    </article>
  );
}

function ResultsSection() {
  const rotations = [0.5, -1, 0.5];
  return (
    <section
      id="results"
      aria-labelledby="results-heading"
      style={{ backgroundColor: sk.bg, paddingTop: "96px", paddingBottom: "96px", ...paperTexture }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <StickyLabel>⭐ What Clients Say</StickyLabel>
          <h2 id="results-heading" style={{ fontFamily: sk.heading, fontWeight: 700, fontSize: "clamp(2rem, 4vw, 3rem)", color: sk.fg, margin: 0, lineHeight: 1.2 }}>
            Real results from real local businesses.
          </h2>
        </div>

        <div style={{ display: "grid", gap: "48px" }} className="grid-cols-1 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} testimonial={t} rotate={rotations[i]} />
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "64px" }}>
          <a
            href="#contact"
            style={{
              fontFamily: sk.body,
              fontSize: "18px",
              color: sk.fg,
              backgroundColor: sk.white,
              border: `3px solid ${sk.fg}`,
              borderRadius: radius.wobblyBtn,
              padding: "14px 36px",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              minHeight: "52px",
              boxShadow: `5px 5px 0px 0px ${sk.fg}`,
              transition: "transform 100ms ease, box-shadow 100ms ease, background-color 100ms ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translate(2px, 2px)";
              e.currentTarget.style.boxShadow = `3px 3px 0px 0px ${sk.fg}`;
              e.currentTarget.style.backgroundColor = sk.yellow;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translate(0, 0)";
              e.currentTarget.style.boxShadow = `5px 5px 0px 0px ${sk.fg}`;
              e.currentTarget.style.backgroundColor = sk.white;
            }}
          >
            See if we&apos;re a fit →
          </a>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// HowItWorksSection
// ---------------------------------------------------------------------------

function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="hiw-heading"
      style={{ backgroundColor: sk.white, paddingTop: "96px", paddingBottom: "96px", borderTop: `3px solid ${sk.fg}`, borderBottom: `3px solid ${sk.fg}` }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <StickyLabel>📋 The Process</StickyLabel>
          <h2 id="hiw-heading" style={{ fontFamily: sk.heading, fontWeight: 700, fontSize: "clamp(2rem, 4vw, 3rem)", color: sk.fg, margin: 0, lineHeight: 1.2 }}>
            From audit to results in three stages.
          </h2>
        </div>

        <div style={{ display: "grid", gap: "48px", position: "relative" }} className="grid-cols-1 md:grid-cols-3">
          {steps.map((step, i) => (
            <div key={step.number} style={{ position: "relative" }}>
              {i < steps.length - 1 && <SquigglyConnector />}
              <div
                style={{
                  backgroundColor: sk.bg,
                  border: `3px solid ${sk.fg}`,
                  borderRadius: radius.wobblyMd,
                  padding: "36px 28px",
                  boxShadow: `5px 5px 0px 0px ${sk.fg}`,
                  transform: `rotate(${i % 2 === 0 ? -0.5 : 0.5}deg)`,
                  transition: "transform 100ms ease",
                  position: "relative",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = `rotate(${i % 2 === 0 ? 0.5 : -0.5}deg)`; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = `rotate(${i % 2 === 0 ? -0.5 : 0.5}deg)`; }}
              >
                <div
                  style={{
                    fontFamily: sk.heading,
                    fontWeight: 700,
                    fontSize: "72px",
                    color: sk.muted,
                    lineHeight: 1,
                    marginBottom: "16px",
                    userSelect: "none",
                  }}
                  aria-hidden="true"
                >
                  {step.number}
                </div>
                <h3 style={{ fontFamily: sk.heading, fontWeight: 700, fontSize: "22px", color: sk.fg, margin: "0 0 12px", lineHeight: 1.3 }}>{step.title}</h3>
                <p style={{ fontFamily: sk.body, fontSize: "15px", lineHeight: 1.7, color: sk.fg, margin: 0, opacity: 0.8 }}>{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// PricingSection
// ---------------------------------------------------------------------------

function PricingSection() {
  const rotations = [-1, 0, 1];
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      style={{ backgroundColor: sk.bg, paddingTop: "96px", paddingBottom: "96px", ...paperTexture }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <StickyLabel>💰 Investment</StickyLabel>
          <h2 id="pricing-heading" style={{ fontFamily: sk.heading, fontWeight: 700, fontSize: "clamp(2rem, 4vw, 3rem)", color: sk.fg, margin: "0 0 16px", lineHeight: 1.2 }}>
            Straightforward pricing based on what you actually need.
          </h2>
          <p style={{ fontFamily: sk.body, fontSize: "17px", color: "#666", lineHeight: 1.6, maxWidth: "520px", margin: "0 auto" }}>
            Every engagement starts with a free audit so we can recommend what fits your situation — not the biggest package we can sell you.
          </p>
        </div>

        <div style={{ display: "grid", gap: "36px", paddingTop: "20px", alignItems: "start" }} className="grid-cols-1 md:grid-cols-3">
          {pricingPlans.map((plan, i) => (
            <div
              key={plan.name}
              style={{ transform: `rotate(${rotations[i]}deg) ${plan.featured ? "scale(1.03)" : ""}`, transition: "transform 100ms ease" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = `rotate(${-rotations[i]}deg) ${plan.featured ? "scale(1.03)" : ""}`; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = `rotate(${rotations[i]}deg) ${plan.featured ? "scale(1.03)" : ""}`; }}
            >
              <article
                style={{
                  backgroundColor: plan.featured ? sk.yellow : sk.white,
                  border: `${plan.featured ? "4px" : "3px"} solid ${sk.fg}`,
                  borderRadius: radius.wobblyMd,
                  padding: "36px 28px",
                  boxShadow: `${plan.featured ? "8px 8px" : "5px 5px"} 0px 0px ${sk.fg}`,
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  position: "relative",
                }}
              >
                {plan.featured && (
                  <>
                    <Thumbtack color={sk.accent} />
                    {/* Dashed circle overlay */}
                    <div
                      aria-hidden="true"
                      className="hidden md:block"
                      style={{
                        position: "absolute",
                        top: "-16px",
                        right: "-16px",
                        width: "80px",
                        height: "80px",
                        borderRadius: "50%",
                        border: `3px dashed ${sk.accent}`,
                        pointerEvents: "none",
                      }}
                    />
                    <div
                      style={{
                        display: "inline-flex",
                        alignSelf: "flex-start",
                        backgroundColor: sk.accent,
                        color: sk.white,
                        fontFamily: sk.body,
                        fontSize: "13px",
                        border: `2px solid ${sk.fg}`,
                        borderRadius: radius.wobblyTag,
                        padding: "4px 14px",
                        boxShadow: `2px 2px 0px 0px ${sk.fg}`,
                      }}
                    >
                      ⭐ Most Popular
                    </div>
                  </>
                )}

                <div>
                  <h3 style={{ fontFamily: sk.heading, fontWeight: 700, fontSize: "26px", color: sk.fg, margin: "0 0 4px" }}>{plan.name}</h3>
                  <div style={{ fontFamily: sk.body, fontSize: "16px", color: sk.accent }}>{plan.price}</div>
                  <div style={{ fontFamily: sk.body, fontSize: "13px", color: "#888", marginTop: "2px" }}>{plan.cadence}</div>
                </div>

                <p style={{ fontFamily: sk.body, fontSize: "14px", lineHeight: 1.6, color: sk.fg, margin: 0, borderTop: `2px dashed ${sk.muted}`, paddingTop: "16px" }}>
                  {plan.description}
                </p>

                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px", flex: 1 }}>
                  {plan.features.map((f) => (
                    <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontFamily: sk.body, fontSize: "14px", color: sk.fg, lineHeight: 1.5 }}>
                      <span style={{ color: sk.accent, fontWeight: 700, fontSize: "16px", lineHeight: 1, marginTop: "1px", flexShrink: 0 }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  style={{
                    fontFamily: sk.body,
                    fontSize: "16px",
                    color: plan.featured ? sk.white : sk.fg,
                    backgroundColor: plan.featured ? sk.accent : "transparent",
                    border: `3px solid ${sk.fg}`,
                    borderRadius: radius.wobblyBtn,
                    padding: "14px 24px",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: "48px",
                    boxShadow: `4px 4px 0px 0px ${sk.fg}`,
                    transition: "transform 100ms ease, box-shadow 100ms ease, background-color 100ms ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translate(2px, 2px)";
                    e.currentTarget.style.boxShadow = `2px 2px 0px 0px ${sk.fg}`;
                    if (!plan.featured) e.currentTarget.style.backgroundColor = sk.yellow;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translate(0, 0)";
                    e.currentTarget.style.boxShadow = `4px 4px 0px 0px ${sk.fg}`;
                    if (!plan.featured) e.currentTarget.style.backgroundColor = "transparent";
                  }}
                >
                  Book a Discovery Call
                </a>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// FaqSection
// ---------------------------------------------------------------------------

function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      style={{ backgroundColor: sk.white, paddingTop: "96px", paddingBottom: "96px", borderTop: `3px solid ${sk.fg}` }}
    >
      <div style={{ maxWidth: "760px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <StickyLabel>❓ Questions</StickyLabel>
          <h2 id="faq-heading" style={{ fontFamily: sk.heading, fontWeight: 700, fontSize: "clamp(2rem, 4vw, 3rem)", color: sk.fg, margin: 0, lineHeight: 1.2 }}>
            Questions we get asked a lot.
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {faqItems.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                style={{
                  backgroundColor: isOpen ? sk.yellow : sk.white,
                  border: `3px solid ${sk.fg}`,
                  borderRadius: radius.wobblyMd,
                  overflow: "hidden",
                  boxShadow: `${isOpen ? "3px 3px" : "5px 5px"} 0px 0px ${sk.fg}`,
                  transition: "background-color 150ms ease, box-shadow 150ms ease",
                  transform: `rotate(${i % 2 === 0 ? -0.3 : 0.3}deg)`,
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "20px 24px",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    gap: "16px",
                    minHeight: "44px",
                  }}
                >
                  <span style={{ fontFamily: sk.heading, fontWeight: 700, fontSize: "18px", color: sk.fg, lineHeight: 1.4 }}>
                    {item.q}
                  </span>
                  <span
                    style={{
                      color: sk.accent,
                      flexShrink: 0,
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                      transition: "transform 200ms ease",
                      display: "flex",
                      alignItems: "center",
                      fontSize: "24px",
                      fontFamily: sk.heading,
                      fontWeight: 700,
                      lineHeight: 1,
                    }}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>

                <div
                  style={{
                    overflow: "hidden",
                    maxHeight: isOpen ? "400px" : "0",
                    transition: "max-height 400ms cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                >
                  <p style={{ fontFamily: sk.body, fontSize: "16px", lineHeight: 1.7, color: sk.fg, margin: 0, padding: "0 24px 24px" }}>
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// FinalCtaSection — chalkboard style
// ---------------------------------------------------------------------------

function FinalCtaSection() {
  return (
    <section
      id="contact"
      aria-labelledby="cta-heading"
      style={{ backgroundColor: sk.fg, paddingTop: "96px", paddingBottom: "96px" }}
    >
      <div
        style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "28px" }}
      >
        {/* Chalk-style label */}
        <div
          style={{
            display: "inline-block",
            border: `3px dashed rgba(255,255,255,0.3)`,
            borderRadius: radius.wobblyTag,
            padding: "6px 20px",
            fontFamily: sk.body,
            fontSize: "15px",
            color: "rgba(255,255,255,0.6)",
          }}
        >
          ⏰ Act Now
        </div>

        <h2
          id="cta-heading"
          style={{
            fontFamily: sk.heading,
            fontWeight: 700,
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            color: sk.white,
            lineHeight: 1.15,
            margin: 0,
            maxWidth: "700px",
          }}
        >
          The window to get ahead of your local competitors is{" "}
          <span
            style={{
              color: sk.accent,
              textDecoration: "underline",
              textDecorationStyle: "wavy",
              textDecorationColor: sk.accent,
            }}
          >
            narrowing.
          </span>
        </h2>

        <p
          style={{
            fontFamily: sk.body,
            fontSize: "19px",
            color: "rgba(255,255,255,0.7)",
            lineHeight: 1.65,
            maxWidth: "540px",
            margin: 0,
          }}
        >
          AI-powered marketing isn&apos;t coming — it&apos;s already here. The businesses that move now will hold a lead advantage that&apos;s very hard to close later.
          <br />
          <span
            style={{
              backgroundColor: "rgba(255,255,255,0.1)",
              padding: "0 6px",
              borderRadius: "4px",
              fontFamily: sk.body,
            }}
          >
            Book a free 30-minute call to find out where you stand.
          </span>
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "center", width: "100%" }}>
          <a
            href="#contact"
            style={{
              fontFamily: sk.body,
              fontSize: "18px",
              color: sk.fg,
              backgroundColor: sk.white,
              border: `3px solid ${sk.white}`,
              borderRadius: radius.wobblyBtn,
              padding: "16px 40px",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              minHeight: "52px",
              boxShadow: `5px 5px 0px 0px rgba(255,255,255,0.2)`,
              transition: "transform 100ms ease, box-shadow 100ms ease, background-color 100ms ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translate(2px, 2px)";
              e.currentTarget.style.boxShadow = `3px 3px 0px 0px rgba(255,255,255,0.2)`;
              e.currentTarget.style.backgroundColor = sk.yellow;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translate(0, 0)";
              e.currentTarget.style.boxShadow = `5px 5px 0px 0px rgba(255,255,255,0.2)`;
              e.currentTarget.style.backgroundColor = sk.white;
            }}
          >
            ✏️ Book Your Free Audit Call →
          </a>
          <a
            href="#checklist"
            style={{
              fontFamily: sk.body,
              fontSize: "17px",
              color: "rgba(255,255,255,0.6)",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              minHeight: "52px",
              padding: "16px 16px",
              transition: "color 100ms ease",
              border: `3px dashed rgba(255,255,255,0.2)`,
              borderRadius: radius.wobblyBtn,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = sk.white)}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
          >
            Download AI Readiness Checklist
          </a>
        </div>

        <p style={{ fontFamily: sk.body, fontSize: "14px", color: "rgba(255,255,255,0.35)", margin: 0 }}>
          No pressure, no pitch deck. Just a clear look at where your business stands online. 🤝
        </p>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// SiteFooter
// ---------------------------------------------------------------------------

const footerLinks = [
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Results", href: "#results" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

function SiteFooter() {
  return (
    <footer
      style={{
        backgroundColor: sk.bg,
        borderTop: `3px solid ${sk.fg}`,
        paddingTop: "64px",
        paddingBottom: "40px",
        ...paperTexture,
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "grid", gap: "48px", marginBottom: "48px", alignItems: "start" }} className="grid-cols-1 md:grid-cols-[1fr_auto]">
          {/* Brand */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <a
              href="/"
              aria-label="Linax Digital home"
              style={{
                fontFamily: sk.heading,
                fontWeight: 700,
                fontSize: "32px",
                color: sk.fg,
                textDecoration: "none",
                display: "inline-block",
                transform: "rotate(-1deg)",
              }}
            >
              Linax<span style={{ color: sk.accent }}>!</span>
            </a>
            <p style={{ fontFamily: sk.body, fontSize: "16px", color: "#777", margin: 0, lineHeight: 1.6, maxWidth: "320px" }}>
              Local expertise. Modern tools. Built by someone who does the work.
            </p>
            <p style={{ fontFamily: sk.body, fontSize: "13px", color: "#aaa", margin: 0, fontStyle: "italic" }}>
              [REPLACE: LinkedIn, Instagram handles]
            </p>
          </div>

          {/* Footer nav */}
          <nav aria-label="Footer navigation">
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    style={{
                      fontFamily: sk.body,
                      fontSize: "16px",
                      color: sk.fg,
                      textDecoration: "none",
                      transition: "color 100ms ease",
                      position: "relative" as const,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = sk.accent;
                      e.currentTarget.style.textDecoration = "line-through";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = sk.fg;
                      e.currentTarget.style.textDecoration = "none";
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div
          style={{
            borderTop: `2px dashed ${sk.muted}`,
            paddingTop: "24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <p style={{ fontFamily: sk.body, fontSize: "14px", color: "#aaa", margin: 0 }}>
            &copy; 2026 Linax Digital. All rights reserved. ✌️
          </p>
          <span style={{ fontFamily: sk.body, fontSize: "13px", color: "#ccc" }}>
            hand-crafted with care
          </span>
        </div>
      </div>
    </footer>
  );
}

// ---------------------------------------------------------------------------
// Page Export
// ---------------------------------------------------------------------------

export default function LinaxDigital2Page() {
  return (
    <div style={{ fontFamily: sk.body, backgroundColor: sk.bg }}>
      <SiteNav />
      <main>
        <HeroSection />
        <SocialProofBar />
        <ProblemSection />
        <ServicesSection />
        <ResultsSection />
        <HowItWorksSection />
        <PricingSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <SiteFooter />
    </div>
  );
}
