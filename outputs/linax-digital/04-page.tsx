/*
 * Linax Digital — Landing Page
 * Generated: 2026-03-10
 * Archetype: tech-saas / professional-services hybrid
 *
 * SETUP:
 * 1. Add this font link to app/layout.tsx <head>:
 *    <link rel="preconnect" href="https://fonts.googleapis.com" />
 *    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
 *    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
 *
 * 2. The brandTokens object below injects all CSS custom properties
 *    as an inline style on the root div — no globals.css edits needed.
 *
 * 3. Replace all [PLACEHOLDER] values with real content before deploying.
 *
 * NOTE: This file uses "use client" at the top level because it contains
 * interactive components (SiteNav with mobile menu, FaqAccordion with
 * expand/collapse). Static sections are plain functions with no hooks.
 */

"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

// ---------------------------------------------------------------------------
// TypeScript Interfaces
// ---------------------------------------------------------------------------

interface ServiceItem {
  icon: "map" | "bolt" | "globe" | "chart" | "message" | "settings";
  title: string;
  description: string;
}

interface ProcessStepItem {
  number: string;
  title: string;
  body: string;
}

interface TestimonialItem {
  quote: string;
  name: string;
  titleAndCompany: string;
  resultCallout: string;
}

interface PricingPlanItem {
  name: string;
  price: string;
  cadence: string;
  description: string;
  features: string[];
  cta: string;
  featured: boolean;
}

interface FaqItem {
  question: string;
  answer: string;
}

interface ProblemItem {
  name: string;
  body: string;
}

// ---------------------------------------------------------------------------
// Brand Tokens
// ---------------------------------------------------------------------------

const brandTokens: React.CSSProperties = {
  "--color-base": "#F7F8FA",
  "--color-surface": "#FFFFFF",
  "--color-navy-900": "#0E2240",
  "--color-navy-800": "#132E54",
  "--color-navy-700": "#1B3A5C",
  "--color-navy-600": "#234A72",
  "--color-navy-500": "#2D5F8A",
  "--color-navy-400": "#4A7FA8",
  "--color-navy-300": "#7BA3C4",
  "--color-navy-200": "#A8C5DC",
  "--color-navy-100": "#D4E2EE",
  "--color-navy-50": "#ECF2F8",
  "--color-amber-600": "#D47A00",
  "--color-amber-500": "#F18F01",
  "--color-amber-400": "#FFA633",
  "--color-amber-300": "#FFBE66",
  "--color-amber-200": "#FFD699",
  "--color-amber-100": "#FFF0D6",
  "--color-amber-50": "#FFF8EC",
  "--color-gray-900": "#1A1A2E",
  "--color-gray-800": "#2D2D3F",
  "--color-gray-700": "#44445A",
  "--color-gray-600": "#5E5E73",
  "--color-gray-500": "#7A7A8E",
  "--color-gray-400": "#9C9CAD",
  "--color-gray-300": "#BDBDCB",
  "--color-gray-200": "#DDDDE6",
  "--color-gray-100": "#EDEDF2",
  "--color-gray-50": "#F7F7FA",
  "--color-success": "#2D936C",
  "--color-success-light": "#E8F5EF",
  "--color-error": "#D94F4F",
  "--color-error-light": "#FDEEEE",
  "--color-warning": "#E5A30E",
  "--color-warning-light": "#FEF6E0",
  "--color-info": "#2E86AB",
  "--color-info-light": "#E6F3F8",
  "--font-display": "'Plus Jakarta Sans', sans-serif",
  "--font-body": "'DM Sans', sans-serif",
  "--font-mono": "'JetBrains Mono', monospace",
  "--text-xs": "0.75rem",
  "--text-sm": "0.875rem",
  "--text-base": "1rem",
  "--text-lg": "1.125rem",
  "--text-xl": "1.25rem",
  "--text-2xl": "1.5rem",
  "--text-3xl": "1.875rem",
  "--text-4xl": "2.25rem",
  "--text-5xl": "3rem",
  "--text-6xl": "3.75rem",
  "--space-1": "0.25rem",
  "--space-2": "0.5rem",
  "--space-3": "0.75rem",
  "--space-4": "1rem",
  "--space-5": "1.25rem",
  "--space-6": "1.5rem",
  "--space-8": "2rem",
  "--space-10": "2.5rem",
  "--space-12": "3rem",
  "--space-16": "4rem",
  "--space-20": "5rem",
  "--space-24": "6rem",
  "--space-32": "8rem",
  "--radius-sm": "6px",
  "--radius-md": "10px",
  "--radius-lg": "16px",
  "--radius-xl": "24px",
  "--radius-full": "9999px",
  "--shadow-xs": "0 1px 2px rgba(26,26,46,0.04)",
  "--shadow-sm": "0 1px 3px rgba(26,26,46,0.06), 0 1px 2px rgba(26,26,46,0.04)",
  "--shadow-md": "0 4px 6px -1px rgba(26,26,46,0.06), 0 2px 4px -1px rgba(26,26,46,0.04)",
  "--shadow-lg": "0 10px 15px -3px rgba(26,26,46,0.06), 0 4px 6px -2px rgba(26,26,46,0.03)",
  "--shadow-xl": "0 20px 25px -5px rgba(26,26,46,0.08), 0 10px 10px -5px rgba(26,26,46,0.02)",
  "--shadow-glow": "0 0 20px rgba(241,143,1,0.15)",
  "--shadow-navy": "0 4px 14px rgba(27,58,92,0.18)",
  "--ease-out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
  "--ease-out-quart": "cubic-bezier(0.25, 1, 0.5, 1)",
  "--ease-in-out": "cubic-bezier(0.45, 0, 0.55, 1)",
  "--ease-spring": "cubic-bezier(0.34, 1.56, 0.64, 1)",
  "--duration-fast": "150ms",
  "--duration-normal": "300ms",
  "--duration-slow": "500ms",
  "--duration-slower": "700ms",
  "--duration-reveal": "900ms",
  "--container-xl": "1200px",
  "--gutter": "24px",
} as React.CSSProperties;

// ---------------------------------------------------------------------------
// Inline SVG Icons
// ---------------------------------------------------------------------------

function IconMap() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"
        fill="currentColor"
      />
    </svg>
  );
}

function IconBolt() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconGlobe() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
      <path
        d="M2 12h20M12 2c-2.5 3-4 6.5-4 10s1.5 7 4 10M12 2c2.5 3 4 6.5 4 10s-1.5 7-4 10"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

function IconChart() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 20h18M7 20V10M12 20V4M17 20v-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function IconMessage() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconSettings() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
      <path
        d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

function IconChevronDown() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconMenu() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function IconClose() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      <path
        d="M20 6L9 17l-5-5"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ServiceIcon({ icon }: { icon: ServiceItem["icon"] }) {
  switch (icon) {
    case "map":
      return <IconMap />;
    case "bolt":
      return <IconBolt />;
    case "globe":
      return <IconGlobe />;
    case "chart":
      return <IconChart />;
    case "message":
      return <IconMessage />;
    case "settings":
      return <IconSettings />;
  }
}

// ---------------------------------------------------------------------------
// Shared: Eyebrow label
// ---------------------------------------------------------------------------

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: "12px",
        fontWeight: 500,
        color: "var(--color-amber-500)",
        textTransform: "uppercase" as const,
        letterSpacing: "0.1em",
        display: "block",
        marginBottom: "var(--space-4)",
      }}
    >
      {children}
    </span>
  );
}

// ---------------------------------------------------------------------------
// SiteNav — sticky, mobile hamburger
// ---------------------------------------------------------------------------

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Results", href: "#results" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: "var(--color-navy-800)",
        boxShadow: scrolled ? "var(--shadow-navy)" : "none",
        transition: "box-shadow 300ms ease",
      }}
    >
      <div
        style={{
          maxWidth: "var(--container-xl)",
          margin: "0 auto",
          padding: "0 var(--gutter)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "68px",
        }}
      >
        {/* Logo */}
        <a
          href="/"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "var(--text-xl)",
            color: "#FFFFFF",
            textDecoration: "none",
            letterSpacing: "-0.02em",
          }}
          aria-label="Linax Digital home"
        >
          Linax<span style={{ color: "var(--color-amber-500)" }}>.</span>
        </a>

        {/* Desktop nav links — hidden on mobile */}
        <nav
          aria-label="Main navigation"
          style={{
            display: "flex",
            gap: "var(--space-8)",
            alignItems: "center",
          }}
          className="hidden md:flex"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 500,
                fontSize: "var(--text-sm)",
                color: "var(--color-navy-200)",
                textDecoration: "none",
                transition: "color var(--duration-fast) ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-navy-200)")}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            fontSize: "var(--text-sm)",
            color: "#FFFFFF",
            backgroundColor: "var(--color-amber-500)",
            padding: "10px 22px",
            borderRadius: "var(--radius-md)",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            minHeight: "44px",
            transition:
              "background-color var(--duration-fast) ease, transform var(--duration-fast) ease, box-shadow var(--duration-fast) ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "var(--color-amber-600)";
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = "var(--shadow-glow)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "var(--color-amber-500)";
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          Book a Free Call
        </a>

        {/* Mobile hamburger */}
        <button
          className="flex md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          style={{
            background: "none",
            border: "none",
            color: "#FFFFFF",
            cursor: "pointer",
            padding: "10px",
            minHeight: "44px",
            minWidth: "44px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {mobileOpen ? <IconClose /> : <IconMenu />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          style={{
            position: "fixed",
            inset: "68px 0 0 0",
            backgroundColor: "var(--color-navy-900)",
            zIndex: 40,
            display: "flex",
            flexDirection: "column",
            padding: "var(--space-8) var(--gutter)",
            gap: "0",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: "var(--text-xl)",
                color: "#FFFFFF",
                textDecoration: "none",
                padding: "var(--space-5) 0",
                borderBottom: "1px solid var(--color-navy-800)",
                display: "block",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              fontSize: "var(--text-base)",
              color: "#FFFFFF",
              backgroundColor: "var(--color-amber-500)",
              padding: "14px 28px",
              borderRadius: "var(--radius-md)",
              textDecoration: "none",
              textAlign: "center",
              marginTop: "var(--space-8)",
              minHeight: "44px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Book a Free Call
          </a>
        </div>
      )}
    </header>
  );
}

// ---------------------------------------------------------------------------
// HeroSection
// ---------------------------------------------------------------------------

function HeroSection() {
  return (
    <section
      aria-label="Hero"
      style={{
        background: "linear-gradient(165deg, var(--color-navy-900) 0%, var(--color-navy-700) 100%)",
        paddingTop: "148px",
        paddingBottom: "80px",
      }}
    >
      <div
        style={{
          maxWidth: "var(--container-xl)",
          margin: "0 auto",
          padding: "0 var(--gutter)",
          display: "grid",
          gap: "var(--space-12)",
          alignItems: "center",
        }}
        className="grid-cols-1 lg:grid-cols-[55fr_45fr]"
      >
        {/* Copy */}
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
          <Eyebrow>Digital Marketing &amp; AI Integration</Eyebrow>

          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
              lineHeight: 1.1,
              color: "#FFFFFF",
              letterSpacing: "-0.03em",
              margin: 0,
            }}
          >
            Your competitors are about to get a lot faster.
          </h1>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 400,
              fontSize: "var(--text-lg)",
              lineHeight: 1.7,
              color: "var(--color-navy-200)",
              margin: 0,
              maxWidth: "560px",
            }}
          >
            Linax Digital helps local service businesses — HVAC, plumbing, landscaping, remodeling — get found online,
            convert more leads, and automate the repetitive work that&apos;s eating your week. No in-house tech team
            required.
          </p>

          {/* CTA group */}
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "var(--space-4)",
                alignItems: "center",
              }}
            >
              <a
                href="#contact"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: "var(--text-base)",
                  color: "#FFFFFF",
                  backgroundColor: "var(--color-amber-500)",
                  padding: "14px 28px",
                  borderRadius: "var(--radius-md)",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  minHeight: "44px",
                  transition:
                    "background-color var(--duration-fast) ease, transform var(--duration-fast) ease, box-shadow var(--duration-fast) ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--color-amber-600)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "var(--shadow-glow)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--color-amber-500)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                Book a Free Discovery Call <IconArrowRight />
              </a>

              <a
                href="#services"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: "var(--text-base)",
                  color: "var(--color-navy-200)",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  minHeight: "44px",
                  transition: "color var(--duration-fast) ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-navy-200)")}
              >
                See What We Do
              </a>
            </div>

            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-sm)",
                color: "var(--color-navy-300)",
                margin: 0,
              }}
            >
              No commitment. 30 minutes. Walk away with a clear picture of where you stand.
            </p>
          </div>
        </div>

        {/* Hero visual — hidden on mobile */}
        <div
          className="hidden lg:block"
          style={{
            borderRadius: "var(--radius-xl)",
            overflow: "hidden",
            boxShadow: "var(--shadow-xl)",
            position: "relative",
            aspectRatio: "4 / 3",
            backgroundColor: "var(--color-navy-800)",
          }}
        >
          <Image
            src="/linax-digital/dashboard-mockup.jpg"
            alt="Linax Digital client dashboard showing local SEO rankings, lead tracking, and automated follow-up."
            width={640}
            height={480}
            priority
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// SocialProofBar
// ---------------------------------------------------------------------------

const stats = [
  { value: "4+", label: "Active client engagements" },
  {
    value: "Multiple",
    label: "Industries served — marine, home services, ecommerce, nonprofit",
  },
  {
    value: "100%",
    label: "Of projects built directly by the founder — no outsourced delivery",
  },
];

const clientNames = [
  "Four Leaf Charters",
  "Verona Cabinets",
  "Mycelia Foundation / MyceliaConnect",
];

function SocialProofBar() {
  return (
    <section
      aria-label="Social proof"
      style={{
        backgroundColor: "var(--color-surface)",
        paddingTop: "56px",
        paddingBottom: "56px",
      }}
    >
      <div
        style={{
          maxWidth: "var(--container-xl)",
          margin: "0 auto",
          padding: "0 var(--gutter)",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontWeight: 500,
            fontSize: "var(--text-sm)",
            color: "var(--color-gray-500)",
            textAlign: "center",
            margin: "0 0 var(--space-10)",
          }}
        >
          Trusted by local businesses across Southwest Florida
        </p>

        {/* Stats */}
        <div
          style={{
            display: "grid",
            gap: "var(--space-8)",
            marginBottom: "var(--space-12)",
          }}
          className="grid-cols-1 md:grid-cols-3"
        >
          {stats.map((stat) => (
            <div key={stat.value} style={{ textAlign: "center" }}>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "var(--text-4xl)",
                  color: "var(--color-navy-700)",
                  letterSpacing: "-0.03em",
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-sm)",
                  color: "var(--color-gray-600)",
                  marginTop: "var(--space-2)",
                  lineHeight: 1.5,
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Logo strip */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "var(--space-8)",
            borderTop: "1px solid var(--color-gray-100)",
            paddingTop: "var(--space-10)",
            alignItems: "center",
          }}
        >
          {clientNames.map((name) => (
            <span
              key={name}
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: "var(--text-sm)",
                color: "var(--color-gray-400)",
                letterSpacing: "0.02em",
              }}
            >
              {name}
            </span>
          ))}
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-xs)",
              color: "var(--color-gray-300)",
              fontStyle: "italic",
            }}
          >
            [REPLACE: add logos as client relationships mature]
          </span>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// ProblemCard + ProblemSection
// ---------------------------------------------------------------------------

const problems: ProblemItem[] = [
  {
    name: "Invisible Online",
    body: 'When someone searches \u201cHVAC repair near me\u201d or \u201cbest landscaper in [your city],\u201d your competitors show up and you don\u2019t. A weak Google Business Profile, no consistent reviews, and a site that loads slowly on mobile means you\u2019re losing jobs to businesses half as good as yours. The referral network that built your business won\u2019t carry you through the next five years.',
  },
  {
    name: "Slow Lead Follow-Up",
    body: "A lead that doesn\u2019t hear back within five minutes is 80% less likely to convert. Most service businesses follow up hours later \u2014 or not at all \u2014 because there\u2019s no system, just someone\u2019s phone and good intentions. Every missed response is a job you paid (through marketing or word-of-mouth) to lose.",
  },
  {
    name: "No Time for the Tech",
    body: "You\u2019ve heard about AI. You\u2019ve maybe even tried a few tools. But between running crews, handling callbacks, and managing the day-to-day, there\u2019s no bandwidth to figure out which tools are worth it or how to connect them to your actual business. So nothing changes, and the gap between you and your more tech-forward competitors quietly grows.",
  },
];

function ProblemCard({ problem }: { problem: ProblemItem }) {
  return (
    <article
      style={{
        backgroundColor: "var(--color-surface)",
        border: "1px solid var(--color-gray-100)",
        borderRadius: "var(--radius-lg)",
        padding: "var(--space-8)",
        boxShadow: "var(--shadow-sm)",
        transition:
          "transform var(--duration-normal) var(--ease-out-quart), box-shadow var(--duration-normal) var(--ease-out-quart)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
        (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-xl)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-sm)";
      }}
    >
      <h3
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 700,
          fontSize: "var(--text-xl)",
          color: "var(--color-navy-800)",
          margin: "0 0 var(--space-4)",
        }}
      >
        {problem.name}
      </h3>
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "var(--text-base)",
          lineHeight: 1.75,
          color: "var(--color-gray-600)",
          margin: 0,
        }}
      >
        {problem.body}
      </p>
    </article>
  );
}

function ProblemSection() {
  return (
    <section
      id="problem"
      aria-labelledby="problem-heading"
      style={{
        backgroundColor: "var(--color-base)",
        paddingTop: "80px",
        paddingBottom: "80px",
      }}
    >
      <div
        style={{
          maxWidth: "var(--container-xl)",
          margin: "0 auto",
          padding: "0 var(--gutter)",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "var(--space-16)" }}>
          <Eyebrow>The Real Problem</Eyebrow>
          <h2
            id="problem-heading"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(1.875rem, 4vw, 2.25rem)",
              color: "var(--color-navy-900)",
              letterSpacing: "-0.03em",
              lineHeight: 1.2,
              margin: "0 0 var(--space-5)",
            }}
          >
            You know you need better marketing. You just don&apos;t know where to start.
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-lg)",
              color: "var(--color-gray-600)",
              lineHeight: 1.7,
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Most local service businesses are losing leads they never knew they had. The problem usually isn&apos;t the
            quality of your work — it&apos;s everything that happens before a customer calls you.
          </p>
        </div>

        <div
          style={{ display: "grid", gap: "var(--space-8)" }}
          className="grid-cols-1 md:grid-cols-3"
        >
          {problems.map((p) => (
            <ProblemCard key={p.name} problem={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// ServiceCard + ServicesSection
// ---------------------------------------------------------------------------

const services: ServiceItem[] = [
  {
    icon: "map",
    title: "Local SEO That Drives Calls",
    description:
      "We optimize your Google Business Profile, build local citations, and structure your site so you rank for the searches that bring in paying customers in your area. This isn\u2019t set-it-and-forget-it work \u2014 we track rankings, monitor competitors, and adjust as the algorithm moves.",
  },
  {
    icon: "bolt",
    title: "AI-Powered Lead Automation",
    description:
      "We deploy AI systems that respond to new inquiries instantly, qualify leads through automated follow-up sequences, and book appointments \u2014 without you lifting a finger. The result is a faster response time and fewer leads falling through the cracks at 10pm on a Friday.",
  },
  {
    icon: "globe",
    title: "Websites Built to Convert",
    description:
      "We build fast, mobile-first websites in Next.js and React that are designed around one goal: turning visitors into calls and form fills. Every page is structured to match how your customers search, think, and decide \u2014 not how you want to describe your business.",
  },
  {
    icon: "chart",
    title: "Paid Ads That Pay Back",
    description:
      "We manage Google Ads and Meta campaigns with a focus on cost-per-lead efficiency for local service budgets \u2014 not vanity metrics. Every campaign is built on keyword-level data and audience targeting specific to your service area and job types.",
  },
  {
    icon: "message",
    title: "AI Chatbots and Scheduling Tools",
    description:
      "We build and deploy custom AI chatbots trained on your services, pricing, and FAQs \u2014 handling incoming questions 24/7 and routing qualified prospects to your calendar. Your front-line response gets faster without adding headcount.",
  },
  {
    icon: "settings",
    title: "Workflow Integration and Automation",
    description:
      "We map your existing operations and identify where manual, repetitive tasks \u2014 estimating follow-ups, review requests, job confirmations \u2014 can be automated with AI tools you already have access to. Less busywork, fewer dropped balls, more consistent customer experience.",
  },
];

function ServiceCard({ service }: { service: ServiceItem }) {
  return (
    <article
      style={{
        backgroundColor: "var(--color-surface)",
        border: "1px solid var(--color-gray-100)",
        borderRadius: "var(--radius-lg)",
        padding: "var(--space-8)",
        boxShadow: "var(--shadow-sm)",
        transition:
          "transform var(--duration-normal) var(--ease-out-quart), box-shadow var(--duration-normal) var(--ease-out-quart)",
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-4)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
        (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-xl)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-sm)";
      }}
    >
      <div
        style={{
          width: "48px",
          height: "48px",
          borderRadius: "var(--radius-md)",
          backgroundColor: "var(--color-navy-50)",
          color: "var(--color-navy-700)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <ServiceIcon icon={service.icon} />
      </div>
      <h3
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 700,
          fontSize: "var(--text-lg)",
          color: "var(--color-navy-800)",
          margin: 0,
          lineHeight: 1.3,
        }}
      >
        {service.title}
      </h3>
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "var(--text-base)",
          lineHeight: 1.75,
          color: "var(--color-gray-600)",
          margin: 0,
        }}
      >
        {service.description}
      </p>
    </article>
  );
}

function ServicesSection() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      style={{
        backgroundColor: "var(--color-surface)",
        paddingTop: "80px",
        paddingBottom: "80px",
      }}
    >
      <div
        style={{
          maxWidth: "var(--container-xl)",
          margin: "0 auto",
          padding: "0 var(--gutter)",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "var(--space-16)" }}>
          <Eyebrow>What Linax Digital Does</Eyebrow>
          <h2
            id="services-heading"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(1.875rem, 4vw, 2.25rem)",
              color: "var(--color-navy-900)",
              letterSpacing: "-0.03em",
              lineHeight: 1.2,
              margin: "0 0 var(--space-5)",
              maxWidth: "640px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Every service we offer feeds the same outcome: more qualified leads with less wasted effort.
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-lg)",
              color: "var(--color-gray-600)",
              lineHeight: 1.7,
              maxWidth: "560px",
              margin: "0 auto",
            }}
          >
            We handle the full stack — from your Google presence to the AI workflows running in the background — so you
            can stay focused on the work.
          </p>
        </div>

        <div
          style={{ display: "grid", gap: "var(--space-8)" }}
          className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// TestimonialCard + ResultsSection
// ---------------------------------------------------------------------------

const testimonials: TestimonialItem[] = [
  {
    quote:
      "Before working with Linax, our Google listing was basically invisible. Within two months of the GBP optimization and local SEO work, we were showing up in the top three for searches we\u2019d never ranked for before. We\u2019ve had people book charters specifically because they found us on Google \u2014 that never happened before.",
    name: "[REPLACE: Client First Name Last Name]",
    titleAndCompany: "Owner, Four Leaf Charters",
    resultCallout: "Top 3 local rankings in 2 months",
  },
  {
    quote:
      "We were doing okay with paid ads on our own, but the spend was inconsistent and we had no real targeting strategy. The competitive analysis and Meta campaign work gave us a clear picture of who we were competing with and where we were wasting money. Our cost per lead dropped significantly within the first campaign cycle.",
    name: "[REPLACE: Client First Name Last Name]",
    titleAndCompany: "Owner, Verona Cabinets",
    resultCallout: "[REPLACE: % drop in cost per lead]",
  },
  {
    quote:
      "What I appreciated most was that I didn\u2019t have to explain basic things twice. Most agencies need you to hand-hold them through your own business. Linax came in already understanding the technical side and translated everything into plain language for our team. The AI follow-up system alone saves us hours every week.",
    name: "[REPLACE: Client First Name Last Name]",
    titleAndCompany: "[REPLACE: Title, Company Name]",
    resultCallout: "Hours saved per week on follow-up",
  },
];

function TestimonialCard({ testimonial }: { testimonial: TestimonialItem }) {
  return (
    <article
      style={{
        backgroundColor: "var(--color-surface)",
        border: "1px solid var(--color-gray-100)",
        borderTop: "3px solid var(--color-amber-500)",
        borderRadius: "var(--radius-lg)",
        padding: "var(--space-8)",
        boxShadow: "var(--shadow-sm)",
        transition: "box-shadow var(--duration-normal) var(--ease-out-quart)",
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-6)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-xl)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-sm)";
      }}
    >
      {/* Result callout badge */}
      <div
        style={{
          display: "inline-flex",
          alignSelf: "flex-start",
          backgroundColor: "var(--color-amber-50)",
          color: "var(--color-amber-600)",
          fontFamily: "var(--font-mono)",
          fontSize: "var(--text-xs)",
          fontWeight: 500,
          padding: "4px 12px",
          borderRadius: "var(--radius-full)",
          letterSpacing: "0.05em",
        }}
      >
        {testimonial.resultCallout}
      </div>

      <blockquote
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "var(--text-base)",
          lineHeight: 1.75,
          color: "var(--color-gray-700)",
          margin: 0,
          fontStyle: "italic",
        }}
      >
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      <footer style={{ marginTop: "auto" }}>
        <div
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "var(--text-sm)",
            color: "var(--color-navy-800)",
          }}
        >
          {testimonial.name}
        </div>
        <div
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "var(--text-sm)",
            color: "var(--color-gray-500)",
            marginTop: "2px",
          }}
        >
          {testimonial.titleAndCompany}
        </div>
      </footer>
    </article>
  );
}

function ResultsSection() {
  return (
    <section
      id="results"
      aria-labelledby="results-heading"
      style={{
        backgroundColor: "var(--color-base)",
        paddingTop: "80px",
        paddingBottom: "80px",
      }}
    >
      <div
        style={{
          maxWidth: "var(--container-xl)",
          margin: "0 auto",
          padding: "0 var(--gutter)",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "var(--space-16)" }}>
          <Eyebrow>What Clients Say</Eyebrow>
          <h2
            id="results-heading"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(1.875rem, 4vw, 2.25rem)",
              color: "var(--color-navy-900)",
              letterSpacing: "-0.03em",
              lineHeight: 1.2,
              margin: 0,
            }}
          >
            Real results from real local businesses.
          </h2>
        </div>

        <div
          style={{ display: "grid", gap: "var(--space-8)" }}
          className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} testimonial={t} />
          ))}
        </div>

        {/* Mid-page CTA */}
        <div style={{ textAlign: "center", marginTop: "var(--space-16)" }}>
          <a
            href="#contact"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              fontSize: "var(--text-base)",
              color: "#FFFFFF",
              backgroundColor: "var(--color-navy-700)",
              padding: "14px 32px",
              borderRadius: "var(--radius-md)",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              minHeight: "44px",
              transition:
                "background-color var(--duration-fast) ease, transform var(--duration-fast) ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--color-navy-800)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "var(--color-navy-700)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            See If We&apos;re a Fit <IconArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// ProcessStep + HowItWorksSection
// ---------------------------------------------------------------------------

const steps: ProcessStepItem[] = [
  {
    number: "01",
    title: "Audit and Alignment Call",
    body: "We start with a free 30-minute discovery call to understand your business, your current marketing setup, and where the biggest opportunities are. Before we recommend anything, we audit your Google presence, website, and competitive landscape \u2014 so we know exactly what\u2019s costing you leads right now.",
  },
  {
    number: "02",
    title: "Build the Right Foundation",
    body: "Based on the audit, we develop a prioritized roadmap \u2014 whether that\u2019s a website rebuild, a GBP overhaul, a paid ads launch, or an AI workflow deployment. We handle all implementation directly; nothing is handed off to a junior or an offshore team. You get a technical founder doing the actual work.",
  },
  {
    number: "03",
    title: "Optimize, Automate, Grow",
    body: "Once the foundation is solid, we layer in automation and AI systems that make your marketing work harder over time \u2014 capturing leads you\u2019d otherwise miss, nurturing prospects while you\u2019re on a job site, and giving you reporting that tells you what\u2019s working. Ongoing retainer clients get monthly check-ins, performance reviews, and continuous iteration.",
  },
];

function ProcessStep({ step }: { step: ProcessStepItem }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-4)",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontWeight: 500,
          fontSize: "var(--text-4xl)",
          color: "var(--color-amber-300)",
          lineHeight: 1,
        }}
      >
        {step.number}
      </span>
      <h3
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 700,
          fontSize: "var(--text-xl)",
          color: "var(--color-navy-800)",
          margin: 0,
          lineHeight: 1.3,
        }}
      >
        {step.title}
      </h3>
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "var(--text-base)",
          lineHeight: 1.75,
          color: "var(--color-gray-600)",
          margin: 0,
        }}
      >
        {step.body}
      </p>
    </div>
  );
}

function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="hiw-heading"
      style={{
        backgroundColor: "var(--color-surface)",
        paddingTop: "80px",
        paddingBottom: "80px",
      }}
    >
      <div
        style={{
          maxWidth: "var(--container-xl)",
          margin: "0 auto",
          padding: "0 var(--gutter)",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "var(--space-16)" }}>
          <Eyebrow>The Process</Eyebrow>
          <h2
            id="hiw-heading"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(1.875rem, 4vw, 2.25rem)",
              color: "var(--color-navy-900)",
              letterSpacing: "-0.03em",
              lineHeight: 1.2,
              margin: 0,
            }}
          >
            From audit to results in three stages.
          </h2>
        </div>

        <div
          style={{ display: "grid", gap: "var(--space-12)" }}
          className="grid-cols-1 md:grid-cols-3"
        >
          {steps.map((step) => (
            <ProcessStep key={step.number} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// PricingCard + PricingSection
// ---------------------------------------------------------------------------

const pricingPlans: PricingPlanItem[] = [
  {
    name: "Foundation",
    price: "Contact for pricing",
    cadence: "Monthly retainer",
    description:
      "For businesses that need to build a solid digital presence before running paid campaigns or adding AI workflows.",
    features: [
      "GBP audit and optimization",
      "Local SEO (on-page/technical/citations)",
      "Monthly performance reporting",
      "Competitor ranking monitoring",
      "Review generation strategy",
      "One-time website audit",
    ],
    cta: "Book a Discovery Call",
    featured: false,
  },
  {
    name: "Growth",
    price: "Contact for pricing",
    cadence: "Monthly retainer",
    description:
      "For businesses ready to generate consistent leads through search and paid channels while automating the follow-up process.",
    features: [
      "Everything in Foundation",
      "Google Ads or Meta Ads management",
      "AI-powered lead follow-up automation",
      "Appointment scheduling integration",
      "Monthly strategy call",
      "Quarterly roadmap review",
    ],
    cta: "Book a Discovery Call",
    featured: true,
  },
  {
    name: "Full-Stack",
    price: "Contact for pricing",
    cadence: "Monthly retainer + project milestones",
    description:
      "For businesses that want a complete digital rebuild — new website, AI workflows, and ongoing marketing under one roof.",
    features: [
      "Everything in Growth",
      "Custom website design and development (Next.js/React)",
      "AI chatbot build and deployment",
      "Workflow automation mapping and implementation",
      "Priority turnaround on all deliverables",
      "Dedicated founder access",
    ],
    cta: "Book a Discovery Call",
    featured: false,
  },
];

function PricingCard({ plan }: { plan: PricingPlanItem }) {
  return (
    <article
      style={{
        backgroundColor: "var(--color-surface)",
        border: plan.featured
          ? "2px solid var(--color-amber-500)"
          : "1px solid var(--color-gray-100)",
        borderTop: plan.featured
          ? "3px solid var(--color-amber-500)"
          : "1px solid var(--color-gray-100)",
        borderRadius: "var(--radius-lg)",
        padding: "var(--space-8)",
        boxShadow: plan.featured ? "var(--shadow-lg)" : "var(--shadow-sm)",
        transition:
          "transform var(--duration-normal) var(--ease-out-quart), box-shadow var(--duration-normal) var(--ease-out-quart)",
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-6)",
        position: "relative",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
        (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-xl)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLElement).style.boxShadow = plan.featured
          ? "var(--shadow-lg)"
          : "var(--shadow-sm)";
      }}
    >
      {plan.featured && (
        <div
          style={{
            position: "absolute",
            top: "-14px",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "var(--color-amber-500)",
            color: "#FFFFFF",
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "var(--text-xs)",
            padding: "4px 16px",
            borderRadius: "var(--radius-full)",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
          }}
        >
          Most Popular
        </div>
      )}

      <div>
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "var(--text-2xl)",
            color: "var(--color-navy-800)",
            margin: "0 0 var(--space-2)",
          }}
        >
          {plan.name}
        </h3>
        <div
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            fontSize: "var(--text-lg)",
            color: "var(--color-amber-500)",
          }}
        >
          {plan.price}
        </div>
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "var(--text-xs)",
            color: "var(--color-gray-500)",
            marginTop: "2px",
            letterSpacing: "0.05em",
          }}
        >
          {plan.cadence}
        </div>
      </div>

      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "var(--text-sm)",
          lineHeight: 1.65,
          color: "var(--color-gray-600)",
          margin: 0,
        }}
      >
        {plan.description}
      </p>

      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          display: "flex",
          flexDirection: "column",
          gap: "var(--space-3)",
          flex: 1,
        }}
      >
        {plan.features.map((feature) => (
          <li
            key={feature}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "var(--space-3)",
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-sm)",
              color: "var(--color-gray-700)",
              lineHeight: 1.5,
            }}
          >
            <span style={{ color: "var(--color-success)", marginTop: "2px" }}>
              <IconCheck />
            </span>
            {feature}
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 600,
          fontSize: "var(--text-sm)",
          color: plan.featured ? "#FFFFFF" : "var(--color-navy-700)",
          backgroundColor: plan.featured ? "var(--color-amber-500)" : "transparent",
          border: plan.featured ? "none" : "1.5px solid var(--color-navy-200)",
          padding: "13px 24px",
          borderRadius: "var(--radius-md)",
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "44px",
          transition:
            "background-color var(--duration-fast) ease, transform var(--duration-fast) ease, box-shadow var(--duration-fast) ease, border-color var(--duration-fast) ease",
        }}
        onMouseEnter={(e) => {
          if (plan.featured) {
            e.currentTarget.style.backgroundColor = "var(--color-amber-600)";
            e.currentTarget.style.boxShadow = "var(--shadow-glow)";
          } else {
            e.currentTarget.style.backgroundColor = "var(--color-navy-50)";
            e.currentTarget.style.borderColor = "var(--color-navy-700)";
          }
          e.currentTarget.style.transform = "translateY(-2px)";
        }}
        onMouseLeave={(e) => {
          if (plan.featured) {
            e.currentTarget.style.backgroundColor = "var(--color-amber-500)";
            e.currentTarget.style.boxShadow = "none";
          } else {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.borderColor = "var(--color-navy-200)";
          }
          e.currentTarget.style.transform = "translateY(0)";
        }}
      >
        {plan.cta}
      </a>
    </article>
  );
}

function PricingSection() {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      style={{
        backgroundColor: "var(--color-base)",
        paddingTop: "80px",
        paddingBottom: "80px",
      }}
    >
      <div
        style={{
          maxWidth: "var(--container-xl)",
          margin: "0 auto",
          padding: "0 var(--gutter)",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "var(--space-16)" }}>
          <Eyebrow>Investment</Eyebrow>
          <h2
            id="pricing-heading"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(1.875rem, 4vw, 2.25rem)",
              color: "var(--color-navy-900)",
              letterSpacing: "-0.03em",
              lineHeight: 1.2,
              margin: "0 0 var(--space-5)",
            }}
          >
            Straightforward pricing based on what you actually need.
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-base)",
              color: "var(--color-gray-600)",
              lineHeight: 1.7,
              maxWidth: "540px",
              margin: "0 auto",
            }}
          >
            Custom pricing for your scope. Every engagement starts with a free audit so we can recommend what fits your
            situation — not the biggest package we can sell you.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gap: "var(--space-8)",
            paddingTop: "var(--space-6)",
            alignItems: "start",
          }}
          className="grid-cols-1 md:grid-cols-3"
        >
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// FaqAccordion + FaqSection
// ---------------------------------------------------------------------------

const faqItems: FaqItem[] = [
  {
    question: "How do I know this will actually deliver ROI for my business?",
    answer:
      "We start every engagement with an audit so we can show you exactly where you\u2019re losing leads before asking you to spend anything. Ongoing services are measured against benchmarks we define together \u2014 organic ranking movement, cost per lead, call volume \u2014 not vanity metrics. If we\u2019re not moving the numbers that matter to your business, we talk about it directly.",
  },
  {
    question: "How much time will this take on my end?",
    answer:
      "Very little, by design. The discovery call is 30 minutes. After that, most clients spend one to two hours per month reviewing results and giving input on direction. We handle implementation, reporting, and iteration. You don\u2019t need to be in the weeds on any of the technical work.",
  },
  {
    question:
      "My business is [HVAC / plumbing / landscaping / charters] \u2014 does this actually apply to me?",
    answer:
      "Local service businesses are exactly who we built this for. The SEO strategies, lead automation workflows, and ad campaigns we deploy are built around how people in your market search for and choose a service provider \u2014 not generic templates repurposed from an ecommerce or SaaS playbook.",
  },
  {
    question: "I\u2019ve worked with agencies before and got burned. Why would this be different?",
    answer:
      "The founder writes the code, runs the campaigns, and builds the systems directly \u2014 there\u2019s no account manager relaying your work to a fulfillment team you\u2019ll never speak with. You communicate with the person doing the work. When something isn\u2019t performing, you hear about it before we ask you to renew.",
  },
  {
    question: "We\u2019re busy right now \u2014 can this wait until things slow down?",
    answer:
      "The businesses that are too busy to fix their marketing are usually busy because of word-of-mouth \u2014 which is fragile. When referrals slow down, as they eventually do, there\u2019s no digital foundation to catch the gap. The best time to build that foundation is when you have some breathing room. The second-best time is now.",
  },
];

function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div>
      {faqItems.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            style={{ borderBottom: "1px solid var(--color-gray-100)" }}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "var(--space-6) 0",
                background: "none",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
                gap: "var(--space-4)",
                minHeight: "44px",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: "var(--text-lg)",
                  color: "var(--color-navy-800)",
                  lineHeight: 1.4,
                }}
              >
                {item.question}
              </span>
              <span
                style={{
                  color: "var(--color-amber-500)",
                  flexShrink: 0,
                  transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform var(--duration-normal) var(--ease-out-quart)",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <IconChevronDown />
              </span>
            </button>

            <div
              style={{
                overflow: "hidden",
                maxHeight: isOpen ? "400px" : "0",
                transition: "max-height var(--duration-slow) var(--ease-out-expo)",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-base)",
                  lineHeight: 1.75,
                  color: "var(--color-gray-600)",
                  margin: 0,
                  paddingBottom: "var(--space-6)",
                }}
              >
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function FaqSection() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      style={{
        backgroundColor: "var(--color-surface)",
        paddingTop: "80px",
        paddingBottom: "80px",
      }}
    >
      <div
        style={{
          maxWidth: "720px",
          margin: "0 auto",
          padding: "0 var(--gutter)",
        }}
      >
        <h2
          id="faq-heading"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "clamp(1.875rem, 4vw, 2.25rem)",
            color: "var(--color-navy-900)",
            letterSpacing: "-0.03em",
            lineHeight: 1.2,
            margin: "0 0 var(--space-12)",
            textAlign: "center",
          }}
        >
          Questions we get asked a lot.
        </h2>
        <FaqAccordion />
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// FinalCtaSection
// ---------------------------------------------------------------------------

function FinalCtaSection() {
  return (
    <section
      id="contact"
      aria-labelledby="cta-heading"
      style={{
        background: "linear-gradient(165deg, var(--color-navy-900) 0%, var(--color-navy-700) 100%)",
        paddingTop: "80px",
        paddingBottom: "80px",
      }}
    >
      <div
        style={{
          maxWidth: "var(--container-xl)",
          margin: "0 auto",
          padding: "0 var(--gutter)",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "var(--space-6)",
        }}
      >
        <h2
          id="cta-heading"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "clamp(1.875rem, 5vw, 3rem)",
            color: "#FFFFFF",
            letterSpacing: "-0.03em",
            lineHeight: 1.2,
            margin: 0,
            maxWidth: "680px",
          }}
        >
          The window to get ahead of your local competitors is narrowing.
        </h2>

        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "var(--text-lg)",
            color: "var(--color-navy-200)",
            lineHeight: 1.7,
            maxWidth: "560px",
            margin: 0,
          }}
        >
          AI-powered marketing isn&apos;t coming — it&apos;s already here. The businesses that move now will hold a lead
          advantage that&apos;s very hard to close later. Book a free 30-minute call to find out where you stand.
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "var(--space-4)",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <a
            href="#contact"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              fontSize: "var(--text-base)",
              color: "#FFFFFF",
              backgroundColor: "var(--color-amber-500)",
              padding: "14px 32px",
              borderRadius: "var(--radius-md)",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              minHeight: "44px",
              transition:
                "background-color var(--duration-fast) ease, transform var(--duration-fast) ease, box-shadow var(--duration-fast) ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--color-amber-600)";
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "var(--shadow-glow)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "var(--color-amber-500)";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Book Your Free Audit Call <IconArrowRight />
          </a>

          <a
            href="#checklist"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              fontSize: "var(--text-base)",
              color: "var(--color-navy-200)",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              minHeight: "44px",
              padding: "14px 8px",
              transition: "color var(--duration-fast) ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-navy-200)")}
          >
            Download the AI Readiness Checklist
          </a>
        </div>

        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "var(--text-sm)",
            color: "var(--color-navy-300)",
            margin: 0,
          }}
        >
          No pressure, no pitch deck. Just a clear look at where your business stands online.
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
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function SiteFooter() {
  return (
    <footer
      style={{
        backgroundColor: "var(--color-navy-900)",
        paddingTop: "64px",
        paddingBottom: "40px",
      }}
    >
      <div
        style={{
          maxWidth: "var(--container-xl)",
          margin: "0 auto",
          padding: "0 var(--gutter)",
        }}
      >
        <div
          style={{
            display: "grid",
            gap: "var(--space-12)",
            marginBottom: "var(--space-12)",
            alignItems: "start",
          }}
          className="grid-cols-1 md:grid-cols-[1fr_auto]"
        >
          {/* Brand + tagline */}
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
            <a
              href="/"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "var(--text-2xl)",
                color: "#FFFFFF",
                textDecoration: "none",
                letterSpacing: "-0.02em",
                display: "inline-block",
              }}
              aria-label="Linax Digital home"
            >
              Linax<span style={{ color: "var(--color-amber-500)" }}>.</span>
            </a>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-sm)",
                color: "var(--color-navy-300)",
                margin: 0,
                lineHeight: 1.6,
                maxWidth: "360px",
              }}
            >
              Local expertise. Modern tools. Built by someone who does the work.
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-xs)",
                color: "var(--color-navy-500)",
                margin: 0,
                fontStyle: "italic",
              }}
            >
              [REPLACE: LinkedIn, Instagram — add handles when social profiles are live]
            </p>
          </div>

          {/* Footer nav */}
          <nav aria-label="Footer navigation">
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "var(--space-3)",
              }}
            >
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    style={{
                      fontFamily: "var(--font-body)",
                      fontWeight: 500,
                      fontSize: "var(--text-sm)",
                      color: "var(--color-navy-300)",
                      textDecoration: "none",
                      transition: "color var(--duration-fast) ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-navy-300)")}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Legal */}
        <div
          style={{
            borderTop: "1px solid var(--color-navy-800)",
            paddingTop: "var(--space-6)",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-xs)",
              color: "var(--color-navy-500)",
              margin: 0,
              textAlign: "center",
            }}
          >
            &copy; 2026 Linax Digital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

// ---------------------------------------------------------------------------
// Page Export
// ---------------------------------------------------------------------------

export default function LinaxDigitalPage() {
  return (
    <div style={brandTokens}>
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
