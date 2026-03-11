/*
 * Linax Digital — Landing Page
 * Redesigned: 2026-03-10
 * Style: Swiss International (International Typographic Style)
 *
 * SETUP:
 * 1. Add this font link to app/layout.tsx <head>:
 *    <link rel="preconnect" href="https://fonts.googleapis.com" />
 *    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
 *    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
 *
 * 2. No external CSS needed — all design tokens and patterns are inline.
 * 3. Replace all [PLACEHOLDER] values with real content before deploying.
 */

"use client";

import React, { useState, useEffect } from "react";
import ScrollFloat from "@/app/components/TextAnimations/ScrollFloat";
import CardNav from "../../components/CardNav";
import Silk from "../../components/Silk";
import PixelBlast from "../../components/PixelBlast";
import ScrollStack, { ScrollStackItem } from "../../components/ScrollStack";
import linaxLogo from "./linax-logo.svg";

// ---------------------------------------------------------------------------
// Swiss Design Tokens
// ---------------------------------------------------------------------------

const sw = {
  white: "#0A0A0A",
  black: "#F0F0F0",
  muted: "#2B2B2B",
  red: "#FF3000",
  font: "'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif",
  container: "1200px",
  gutter: "24px",
} as const;

// CSS-based texture patterns
const gridPattern: React.CSSProperties = {
  backgroundImage:
    "repeating-linear-gradient(0deg, transparent, transparent 23px, rgba(255,255,255,0.05) 23px, rgba(255,255,255,0.05) 24px)," +
    "repeating-linear-gradient(90deg, transparent, transparent 23px, rgba(255,255,255,0.05) 23px, rgba(255,255,255,0.05) 24px)",
};

const dotsPattern: React.CSSProperties = {
  backgroundImage:
    "radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)",
  backgroundSize: "16px 16px",
};

const diagPattern: React.CSSProperties = {
  backgroundImage:
    "repeating-linear-gradient(45deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 10px)",
};

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
// Content Data
// ---------------------------------------------------------------------------

const stats = [
  { value: "4+", label: "Active client engagements" },
  {
    value: "Multi",
    label: "Industries: marine, home services, ecommerce, nonprofit",
  },
  {
    value: "100%",
    label: "Projects built directly by the founder — no outsourced delivery",
  },
];

const clientNames = [
  "Four Leaf Charters",
  "Verona Cabinets",
  "Mycelia Foundation",
];

const problems: ProblemItem[] = [
  {
    name: "Invisible Online",
    body: 'When someone searches "HVAC repair near me" or "best landscaper in [your city]," your competitors show up and you don\u2019t. A weak Google Business Profile, no consistent reviews, and a site that loads slowly on mobile means you\u2019re losing jobs to businesses half as good as yours. The referral network that built your business won\u2019t carry you through the next five years.',
  },
  {
    name: "Slow Lead Follow-Up",
    body: "A lead that doesn\u2019t hear back within five minutes is 80% less likely to convert. Most service businesses follow up hours later \u2014 or not at all \u2014 because there\u2019s no system, just someone\u2019s phone and good intentions. Every missed response is a job you paid to lose.",
  },
  {
    name: "No Time for the Tech",
    body: "You\u2019ve heard about AI. You\u2019ve maybe even tried a few tools. But between running crews, handling callbacks, and managing the day-to-day, there\u2019s no bandwidth to figure out which tools are worth it. So nothing changes, and the gap between you and your more tech-forward competitors quietly grows.",
  },
];

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
    question:
      "I\u2019ve worked with agencies before and got burned. Why would this be different?",
    answer:
      "The founder writes the code, runs the campaigns, and builds the systems directly \u2014 there\u2019s no account manager relaying your work to a fulfillment team you\u2019ll never speak with. You communicate with the person doing the work. When something isn\u2019t performing, you hear about it before we ask you to renew.",
  },
  {
    question:
      "We\u2019re busy right now \u2014 can this wait until things slow down?",
    answer:
      "The businesses that are too busy to fix their marketing are usually busy because of word-of-mouth \u2014 which is fragile. When referrals slow down, as they eventually do, there\u2019s no digital foundation to catch the gap. The best time to build that foundation is when you have some breathing room. The second-best time is now.",
  },
];

// ---------------------------------------------------------------------------
// Inline SVG Icons (from original, reused)
// ---------------------------------------------------------------------------

function IconMap() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"
        fill="currentColor"
      />
    </svg>
  );
}

function IconBolt() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
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
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
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
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 20h18M7 20V10M12 20V4M17 20v-7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconMessage() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
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
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
      <path
        d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

function IconArrowRight() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 12h14M12 5l7 7-7 7"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconMenu() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 12h18M3 6h18M3 18h18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconClose() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M18 6L6 18M6 6l12 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconPlus() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 5v14M5 12h14"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
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
// Section Label — Swiss numbered prefix in red
// ---------------------------------------------------------------------------

function SectionLabel({ number, text }: { number: string; text: string }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        marginBottom: "24px",
      }}
    >
      <span
        style={{
          fontFamily: sw.font,
          fontWeight: 700,
          fontSize: "11px",
          color: sw.red,
          letterSpacing: "0.15em",
          textTransform: "uppercase" as const,
        }}
      >
        {number}.
      </span>
      <span
        style={{
          fontFamily: sw.font,
          fontWeight: 700,
          fontSize: "11px",
          color: sw.black,
          letterSpacing: "0.15em",
          textTransform: "uppercase" as const,
        }}
      >
        {text}
      </span>
    </div>
  );
}

// ---------------------------------------------------------------------------
// SiteNav — fixed, Swiss style
// ---------------------------------------------------------------------------

const linaxLogoSvg = "/linax-digital-logo.svg";

const cardNavItems = [
  {
    label: "Services",
    bgColor: "#0D0D0D",
    textColor: "#fff",
    links: [
      { label: "Services", ariaLabel: "Our Services", href: "#services" },
      {
        label: "How It Works",
        ariaLabel: "How It Works",
        href: "#how-it-works",
      },
    ],
  },
  {
    label: "Results",
    bgColor: "#1C1C1C",
    textColor: "#fff",
    links: [
      { label: "Results", ariaLabel: "Our Results", href: "#results" },
      { label: "Pricing", ariaLabel: "Pricing Plans", href: "#pricing" },
    ],
  },
  {
    label: "Contact",
    bgColor: "#FF3000",
    textColor: "#fff",
    links: [
      { label: "FAQ", ariaLabel: "Frequently Asked Questions", href: "#faq" },
      {
        label: "Book a Free Call",
        ariaLabel: "Book a Free Discovery Call",
        href: "#contact",
      },
    ],
  },
];

function SiteNav() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 0,
        zIndex: 50,
        pointerEvents: "none",
      }}
    >
      {/* Silk background — matches .card-nav-container positioning + 60px bar height */}
      <div
        style={{
          position: "absolute",
          top: "2em",
          left: "50%",
          transform: "translateX(-50%)",
          width: "90%",
          maxWidth: "800px",
          height: "60px",
          borderRadius: "0.75rem",
          overflow: "hidden",
        }}
      >
        <Silk
          color={sw.muted}
          speed={3}
          scale={1.2}
          noiseIntensity={1.5}
          rotation={0}
        />
      </div>

      <div style={{ pointerEvents: "auto" }}>
        <CardNav
          logo={linaxLogoSvg}
          logoAlt="Linax Digital"
          items={cardNavItems}
          baseColor="transparent"
          menuColor={sw.black}
          buttonBgColor={sw.red}
          buttonTextColor={sw.white}
        />
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// HeroSection — asymmetric layout with geometric composition
// ---------------------------------------------------------------------------

function HeroGeometricComposition() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: "1 / 1",
        maxWidth: "440px",
      }}
    >
      {/* Large black square — top right anchor */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "66%",
          height: "66%",
          backgroundColor: sw.black,
        }}
      />
      {/* Red circle — bottom left, overlapping */}
      <div
        style={{
          position: "absolute",
          bottom: "4%",
          left: "4%",
          width: "52%",
          height: "52%",
          borderRadius: "50%",
          backgroundColor: sw.red,
        }}
      />
      {/* White rectangle — center overlay, creates cutout effect */}
      <div
        style={{
          position: "absolute",
          top: "28%",
          left: "28%",
          width: "44%",
          height: "44%",
          backgroundColor: sw.white,
          border: `4px solid ${sw.black}`,
        }}
      />
      {/* Thin horizontal rule — top left quadrant */}
      <div
        style={{
          position: "absolute",
          top: "18%",
          left: 0,
          width: "28%",
          height: "2px",
          backgroundColor: sw.black,
        }}
      />
      {/* Small red square — accent */}
      <div
        style={{
          position: "absolute",
          top: "8%",
          left: "8%",
          width: "10%",
          height: "10%",
          backgroundColor: sw.red,
        }}
      />
      {/* Vertical rule — right side accent */}
      <div
        style={{
          position: "absolute",
          top: "66%",
          right: "12%",
          width: "2px",
          height: "26%",
          backgroundColor: sw.white,
        }}
      />
    </div>
  );
}

function HeroSection() {
  return (
    <section
      aria-label="Hero"
      style={{
        backgroundColor: sw.white,
        paddingTop: "128px",
        paddingBottom: "0",
        ...gridPattern,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <PixelBlast
          variant="square"
          pixelSize={4}
          color="#3A3A3A"
          patternScale={2}
          patternDensity={1}
          pixelSizeJitter={0}
          enableRipples
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          liquid={false}
          liquidStrength={0.12}
          liquidRadius={1.2}
          liquidWobbleSpeed={5}
          speed={0.5}
          edgeFade={0.25}
          transparent
          className=""
          style={{}}
        />
      </div>
      <div
        style={{
          maxWidth: sw.container,
          margin: "0 auto",
          padding: `0 ${sw.gutter}`,
          display: "grid",
          gap: "48px",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
        className="grid-cols-1 lg:grid-cols-[7fr_5fr]"
      >
        {/* Copy */}
        <div style={{ paddingBottom: "80px" }}>
          <div
            style={{
              fontFamily: sw.font,
              fontWeight: 700,
              fontSize: "11px",
              color: sw.red,
              letterSpacing: "0.15em",
              textTransform: "uppercase" as const,
              marginBottom: "20px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: "24px",
                height: "2px",
                backgroundColor: sw.red,
              }}
            />
            Digital Marketing &amp; System Integrations
          </div>

          <h1
            style={{
              fontFamily: sw.font,
              fontWeight: 900,
              fontSize: "clamp(3rem, 7vw, 6rem)",
              lineHeight: 0.95,
              color: sw.black,
              letterSpacing: "-0.04em",
              textTransform: "uppercase" as const,
              margin: "0 0 32px",
            }}
          >
            Your Competitors
            <br />
            Are About
            <br />
            To Get A Lot
            <br />
            <span style={{ color: sw.red }}>Faster.</span>
          </h1>

          <p
            style={{
              fontFamily: sw.font,
              fontWeight: 400,
              fontSize: "17px",
              lineHeight: 1.65,
              color: "#BBBBBB",
              margin: "0 0 40px",
              maxWidth: "520px",
              borderLeft: `4px solid ${sw.black}`,
              paddingLeft: "20px",
            }}
          >
            Linax Digital helps local service businesses — HVAC, plumbing,
            landscaping, remodeling — get found online, convert more leads, and
            automate the repetitive work that&apos;s eating your week. No
            in-house tech team required.
          </p>

          {/* CTA group */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0",
              alignItems: "stretch",
            }}
          >
            <a
              href="#contact"
              style={{
                fontFamily: sw.font,
                fontWeight: 700,
                fontSize: "13px",
                color: sw.white,
                backgroundColor: sw.red,
                padding: "16px 32px",
                border: "2px solid transparent",
                boxSizing: "border-box",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                minHeight: "52px",
                letterSpacing: "0.08em",
                textTransform: "uppercase" as const,
                transition: "background-color 150ms ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = sw.black)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = sw.red)
              }
            >
              Book a Free Discovery Call <IconArrowRight />
            </a>
            <a
              href="#services"
              style={{
                fontFamily: sw.font,
                fontWeight: 700,
                fontSize: "13px",
                boxSizing: "border-box",
                color: sw.black,
                backgroundColor: "transparent",
                padding: "16px 32px",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                minHeight: "52px",
                letterSpacing: "0.08em",
                textTransform: "uppercase" as const,
                border: `2px solid ${sw.black}`,
                marginLeft: "-2px",
                transition: "background-color 150ms ease, color 150ms ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = sw.black;
                e.currentTarget.style.color = sw.white;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = sw.black;
              }}
            >
              See What We Do
            </a>
          </div>

          <p
            style={{
              fontFamily: sw.font,
              fontSize: "12px",
              color: "#AAA",
              marginTop: "16px",
              letterSpacing: "0.02em",
            }}
          >
            No commitment. 30 minutes. Walk away with a clear picture of where
            you stand.
          </p>
        </div>

        {/* Geometric composition — right column, flush to bottom */}
        <div
          className="hidden lg:flex"
          style={{
            justifyContent: "flex-end",
            alignSelf: "stretch",
            alignItems: "flex-end",
            paddingBottom: "0",
          }}
        >
          <HeroGeometricComposition />
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// SocialProofBar
// ---------------------------------------------------------------------------

function SocialProofBar() {
  return (
    <section
      aria-label="Social proof"
      style={{
        backgroundColor: sw.muted,
        borderTop: `4px solid ${sw.black}`,
        borderBottom: `4px solid ${sw.black}`,
        ...dotsPattern,
      }}
    >
      <div
        style={{
          maxWidth: sw.container,
          margin: "0 auto",
          padding: `0 ${sw.gutter}`,
        }}
      >
        {/* Stats row */}
        <div style={{ display: "grid" }} className="grid-cols-1 md:grid-cols-3">
          {stats.map((stat, i) => (
            <div
              key={stat.value}
              style={{
                padding: "40px 32px",
                borderRight:
                  i < stats.length - 1 ? `2px solid ${sw.black}` : "none",
              }}
            >
              <ScrollFloat
                animationDuration={1}
                ease="back.out(2)"
                scrollStart="5% bottom"
                stagger={0.1}
                className="scroll-float-stat"
              >
                {stat.value}
              </ScrollFloat>
              <div
                style={{
                  fontFamily: sw.font,
                  fontWeight: 500,
                  fontSize: "13px",
                  color: "#AAA",
                  lineHeight: 1.5,
                  maxWidth: "240px",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Client names strip */}
        <div
          style={{
            borderTop: `2px solid ${sw.black}`,
            padding: "20px 32px",
            display: "flex",
            flexWrap: "wrap",
            gap: "32px",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontFamily: sw.font,
              fontWeight: 700,
              fontSize: "10px",
              color: sw.red,
              letterSpacing: "0.15em",
              textTransform: "uppercase" as const,
              flexShrink: 0,
            }}
          >
            Trusted by
          </span>
          {clientNames.map((name) => (
            <span
              key={name}
              style={{
                fontFamily: sw.font,
                fontWeight: 600,
                fontSize: "13px",
                color: sw.black,
                letterSpacing: "0.02em",
              }}
            >
              {name}
            </span>
          ))}
          <span
            style={{
              fontFamily: sw.font,
              fontSize: "11px",
              color: "#BBB",
              fontStyle: "italic",
            }}
          >
            Southwest Florida
          </span>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// ProblemSection — asymmetric two-column layout
// ---------------------------------------------------------------------------

function ProblemSection() {
  return (
    <section
      id="problem"
      aria-labelledby="problem-heading"
      style={{
        backgroundColor: sw.white,
        paddingTop: "96px",
        paddingBottom: "96px",
      }}
    >
      <div
        style={{
          maxWidth: sw.container,
          margin: "0 auto",
          padding: `0 ${sw.gutter}`,
          display: "grid",
          gap: "64px",
          alignItems: "start",
        }}
        className="grid-cols-1 lg:grid-cols-[5fr_7fr]"
      >
        {/* Left: heading column */}
        <div style={{ position: "sticky", top: "96px" }}>
          <SectionLabel number="01" text="The Problem" />
          <h2
            id="problem-heading"
            style={{
              fontFamily: sw.font,
              fontWeight: 900,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: sw.black,
              letterSpacing: "-0.04em",
              textTransform: "uppercase" as const,
              lineHeight: 0.95,
              margin: "0 0 24px",
            }}
          >
            You Know
            <br />
            You Need
            <br />
            Better
            <br />
            Marketing.
          </h2>
          <p
            style={{
              fontFamily: sw.font,
              fontWeight: 400,
              fontSize: "15px",
              color: "#AAA",
              lineHeight: 1.65,
              margin: 0,
            }}
          >
            Most local service businesses are losing leads they never knew they
            had. The problem usually isn&apos;t the quality of your work —
            it&apos;s everything that happens before a customer calls you.
          </p>
        </div>

        {/* Right: problem cards — scroll stack */}
        <div>
          <style>{`
            .problem-stack .scroll-stack-scroller {
              overflow: visible !important;
              height: auto !important;
            }
            .problem-stack .scroll-stack-inner {
              padding: 0 !important;
              min-height: auto !important;
            }
            .problem-card-item {
              height: auto !important;
              border-radius: 0 !important;
              padding: 0 !important;
              box-shadow: none !important;
              background: transparent !important;
              margin: 0 !important;
            }
          `}</style>
          <ScrollStack
            className="problem-stack"
            useWindowScroll={true}
            stackPosition="20%"
            itemDistance={10}
            itemStackDistance={14}
            itemScale={0.02}
            baseScale={0.94}
            scaleEndPosition="10%"
          >
            {problems.map((problem, i) => (
              <ScrollStackItem
                key={problem.name}
                itemClassName="problem-card-item"
              >
                <ProblemCard
                  problem={problem}
                  index={i}
                  total={problems.length}
                />
              </ScrollStackItem>
            ))}
          </ScrollStack>
        </div>
      </div>
    </section>
  );
}

function ProblemCard({
  problem,
  index,
  total,
}: {
  problem: ProblemItem;
  index: number;
  total: number;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <article
      style={{
        padding: "40px",
        borderTop: `4px solid ${sw.black}`,
        borderBottom: index === total - 1 ? `4px solid ${sw.black}` : "none",
        borderLeft: `4px solid ${sw.black}`,
        borderRight: `4px solid ${sw.black}`,
        backgroundColor: hovered ? sw.red : sw.white,
        transition: "background-color 150ms ease",
        cursor: "default",
        marginTop: index > 0 ? "-4px" : "0",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "16px",
          marginBottom: "16px",
        }}
      >
        <h3
          style={{
            fontFamily: sw.font,
            fontWeight: 800,
            fontSize: "20px",
            color: hovered ? sw.white : sw.black,
            textTransform: "uppercase" as const,
            letterSpacing: "-0.02em",
            margin: 0,
            transition: "color 150ms ease",
          }}
        >
          {problem.name}
        </h3>
        <span
          style={{
            fontFamily: sw.font,
            fontWeight: 900,
            fontSize: "11px",
            color: hovered ? sw.white : sw.red,
            letterSpacing: "0.1em",
            flexShrink: 0,
            transition: "color 150ms ease",
          }}
        >
          0{index + 1}
        </span>
      </div>
      <p
        style={{
          fontFamily: sw.font,
          fontSize: "15px",
          lineHeight: 1.7,
          color: hovered ? "rgba(255,255,255,0.9)" : "#AAA",
          margin: 0,
          transition: "color 150ms ease",
        }}
      >
        {problem.body}
      </p>
    </article>
  );
}

// ---------------------------------------------------------------------------
// ServicesSection
// ---------------------------------------------------------------------------

function ServiceCard({
  service,
  index,
}: {
  service: ServiceItem;
  index: number;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <article
      style={{
        padding: "36px",
        border: `2px solid ${sw.black}`,
        backgroundColor: hovered ? sw.black : sw.white,
        transition: "background-color 150ms ease",
        cursor: "default",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        height: "100%",
        boxSizing: "border-box",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Number + Icon row */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <div
          style={{
            width: "44px",
            height: "44px",
            backgroundColor: hovered ? sw.red : sw.muted,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: hovered ? sw.white : sw.black,
            transition: "background-color 150ms ease, color 150ms ease",
            flexShrink: 0,
          }}
        >
          <ServiceIcon icon={service.icon} />
        </div>
        <span
          style={{
            fontFamily: sw.font,
            fontWeight: 900,
            fontSize: "11px",
            color: hovered ? sw.red : "#555",
            letterSpacing: "0.12em",
            transition: "color 150ms ease",
          }}
        >
          0{index + 1}
        </span>
      </div>

      <h3
        style={{
          fontFamily: sw.font,
          fontWeight: 800,
          fontSize: "16px",
          color: hovered ? sw.white : sw.black,
          textTransform: "uppercase" as const,
          letterSpacing: "0.02em",
          margin: 0,
          lineHeight: 1.3,
          transition: "color 150ms ease",
        }}
      >
        {service.title}
      </h3>

      <p
        style={{
          fontFamily: sw.font,
          fontSize: "14px",
          lineHeight: 1.7,
          color: hovered ? "rgba(0,0,0,0.65)" : "#AAA",
          margin: 0,
          transition: "color 150ms ease",
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
        backgroundColor: sw.muted,
        paddingTop: "96px",
        paddingBottom: "96px",
        ...diagPattern,
        borderTop: `4px solid ${sw.black}`,
        borderBottom: `4px solid ${sw.black}`,
      }}
    >
      <div
        style={{
          maxWidth: sw.container,
          margin: "0 auto",
          padding: `0 ${sw.gutter}`,
        }}
      >
        {/* Section header */}
        <div style={{ marginBottom: "64px" }}>
          <SectionLabel number="02" text="Services" />
          <div
            style={{
              display: "grid",
              gap: "24px",
              alignItems: "end",
            }}
            className="grid-cols-1 lg:grid-cols-[8fr_4fr]"
          >
            <div id="services-heading">
              <div
                style={{
                  fontFamily: sw.font,
                  fontWeight: 900,
                  fontSize: "clamp(2rem, 4vw, 3.5rem)",
                  color: sw.black,
                  letterSpacing: "-0.04em",
                  textTransform: "uppercase" as const,
                  lineHeight: 0.95,
                  margin: 0,
                }}
              >
                Every Service Feeds
                <br />
                The Same Outcome:
              </div>
              <ScrollFloat
                animationDuration={1}
                ease="back.out(2)"
                scrollStart="5% bottom"
                stagger={0.05}
                className="scroll-float-services-lead"
              >
                More Qualified Leads.
              </ScrollFloat>
            </div>
            <p
              style={{
                fontFamily: sw.font,
                fontWeight: 400,
                fontSize: "15px",
                color: "#AAA",
                lineHeight: 1.65,
                margin: 0,
                paddingBottom: "8px",
              }}
            >
              We handle the full stack — from your Google presence to the AI
              workflows running in the background — so you can stay focused on
              the work.
            </p>
          </div>
        </div>

        {/* Service grid */}
        <div
          style={{ display: "grid", gap: "0" }}
          className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, i) => (
            <div
              key={service.title}
              style={{
                marginTop: i >= 3 ? "-2px" : "0",
                marginLeft: i % 3 !== 0 ? "-2px" : "0",
                height: "100%",
              }}
            >
              <ServiceCard service={service} index={i} />
            </div>
          ))}
        </div>

        {/* See all services CTA */}
        <div
          style={{
            marginTop: "48px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <a
            href="#contact"
            style={{
              fontFamily: sw.font,
              fontWeight: 700,
              fontSize: "12px",
              color: sw.white,
              backgroundColor: sw.red,
              padding: "16px 40px",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              letterSpacing: "0.08em",
              textTransform: "uppercase" as const,
              minHeight: "52px",
              transition: "background-color 150ms ease",
              border: `2px solid ${sw.red}`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = sw.black;
              e.currentTarget.style.borderColor = sw.black;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = sw.red;
              e.currentTarget.style.borderColor = sw.red;
            }}
          >
            See All Services <IconArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// ResultsSection — testimonials
// ---------------------------------------------------------------------------

function TestimonialCard({ testimonial }: { testimonial: TestimonialItem }) {
  const [hovered, setHovered] = useState(false);
  return (
    <article
      style={{
        padding: "40px",
        border: `2px solid ${sw.black}`,
        borderTop: `4px solid ${hovered ? sw.black : sw.red}`,
        backgroundColor: sw.white,
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        transition: "border-top-color 150ms ease, transform 150ms ease",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
        cursor: "default",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Result callout */}
      <div
        style={{
          display: "inline-flex",
          alignSelf: "flex-start",
          backgroundColor: sw.black,
          color: sw.white,
          fontFamily: sw.font,
          fontWeight: 700,
          fontSize: "10px",
          padding: "6px 14px",
          letterSpacing: "0.12em",
          textTransform: "uppercase" as const,
        }}
      >
        {testimonial.resultCallout}
      </div>

      {/* Opening quote mark — large typographic element */}
      <div
        style={{
          fontFamily: sw.font,
          fontWeight: 900,
          fontSize: "72px",
          lineHeight: 0.7,
          color: sw.red,
          userSelect: "none",
          marginBottom: "-8px",
        }}
        aria-hidden="true"
      >
        &ldquo;
      </div>

      <blockquote
        style={{
          fontFamily: sw.font,
          fontWeight: 400,
          fontSize: "14px",
          lineHeight: 1.75,
          color: "#BBBBBB",
          margin: 0,
          fontStyle: "normal",
        }}
      >
        {testimonial.quote}
      </blockquote>

      <footer
        style={{
          marginTop: "auto",
          borderTop: `2px solid ${sw.black}`,
          paddingTop: "16px",
        }}
      >
        <div
          style={{
            fontFamily: sw.font,
            fontWeight: 800,
            fontSize: "13px",
            color: sw.black,
            textTransform: "uppercase" as const,
            letterSpacing: "0.04em",
          }}
        >
          {testimonial.name}
        </div>
        <div
          style={{
            fontFamily: sw.font,
            fontSize: "12px",
            color: "#AAA",
            marginTop: "4px",
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
        backgroundColor: sw.white,
        paddingTop: "96px",
        paddingBottom: "96px",
      }}
    >
      <div
        style={{
          maxWidth: sw.container,
          margin: "0 auto",
          padding: `0 ${sw.gutter}`,
        }}
      >
        <div style={{ marginBottom: "64px" }}>
          <SectionLabel number="03" text="Results" />
          <h2
            id="results-heading"
            style={{
              fontFamily: sw.font,
              fontWeight: 900,
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              color: sw.black,
              letterSpacing: "-0.04em",
              textTransform: "uppercase" as const,
              lineHeight: 0.95,
              margin: 0,
            }}
          >
            Real Results from
            <br />
            Real Local Businesses.
          </h2>
        </div>

        <div
          style={{ display: "grid", gap: "0" }}
          className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map((t, i) => (
            <div key={i} style={{ marginLeft: i % 3 !== 0 ? "-2px" : "0" }}>
              <TestimonialCard testimonial={t} />
            </div>
          ))}
        </div>

        {/* Mid-page CTA */}
        <div
          style={{
            marginTop: "64px",
            padding: "48px",
            backgroundColor: sw.muted,
            border: `4px solid ${sw.black}`,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "20px",
            ...dotsPattern,
          }}
        >
          <p
            style={{
              fontFamily: sw.font,
              fontWeight: 900,
              fontSize: "clamp(1.25rem, 3vw, 1.75rem)",
              color: sw.black,
              letterSpacing: "-0.03em",
              textTransform: "uppercase" as const,
              margin: 0,
              lineHeight: 1.1,
            }}
          >
            Ready to find out where you stand?
          </p>
          <a
            href="#contact"
            style={{
              fontFamily: sw.font,
              fontWeight: 700,
              fontSize: "13px",
              color: sw.white,
              backgroundColor: sw.red,
              padding: "14px 28px",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              letterSpacing: "0.08em",
              textTransform: "uppercase" as const,
              minHeight: "48px",
              transition: "background-color 150ms ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = sw.black)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = sw.red)
            }
          >
            See if we&apos;re a fit <IconArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// HowItWorksSection — process steps
// ---------------------------------------------------------------------------

function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="hiw-heading"
      style={{
        backgroundColor: sw.muted,
        paddingTop: "96px",
        paddingBottom: "96px",
        borderTop: `4px solid ${sw.black}`,
        borderBottom: `4px solid ${sw.black}`,
        ...gridPattern,
      }}
    >
      <div
        style={{
          maxWidth: sw.container,
          margin: "0 auto",
          padding: `0 ${sw.gutter}`,
        }}
      >
        <div style={{ marginBottom: "64px" }}>
          <SectionLabel number="04" text="Method" />
          <h2
            id="hiw-heading"
            style={{
              fontFamily: sw.font,
              fontWeight: 900,
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              color: sw.black,
              letterSpacing: "-0.04em",
              textTransform: "uppercase" as const,
              lineHeight: 0.95,
              margin: 0,
            }}
          >
            From Audit to Results
            <br />
            In Three Stages.
          </h2>
        </div>

        <div
          style={{ display: "grid", gap: "0" }}
          className="grid-cols-1 md:grid-cols-3"
        >
          {steps.map((step, i) => (
            <div
              key={step.number}
              style={{
                padding: "48px 40px",
                borderTop: `4px solid ${sw.black}`,
                borderLeft: i > 0 ? `2px solid ${sw.black}` : "none",
                borderRight: "none",
                backgroundColor: sw.white,
              }}
            >
              {/* Step number — large typographic anchor */}
              <ScrollFloat
                animationDuration={1}
                ease="back.out(2)"
                scrollStart="5% bottom"
                stagger={0.15}
                className="scroll-float-step-number"
              >
                {step.number}
              </ScrollFloat>

              <h3
                style={{
                  fontFamily: sw.font,
                  fontWeight: 800,
                  fontSize: "16px",
                  color: sw.black,
                  textTransform: "uppercase" as const,
                  letterSpacing: "0.04em",
                  margin: "0 0 16px",
                  lineHeight: 1.3,
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontFamily: sw.font,
                  fontSize: "14px",
                  lineHeight: 1.75,
                  color: "#AAA",
                  margin: 0,
                }}
              >
                {step.body}
              </p>
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

function PricingCard({ plan }: { plan: PricingPlanItem }) {
  const [hovered, setHovered] = useState(false);

  const isFeatured = plan.featured;
  const bg = isFeatured ? sw.black : hovered ? sw.muted : sw.white;
  const textColor = isFeatured ? sw.white : sw.black;
  const bodyColor = isFeatured ? "rgba(0,0,0,0.65)" : "#AAA";
  const borderColor = isFeatured ? "#111111" : sw.black;

  return (
    <article
      style={{
        padding: "40px",
        border: `${isFeatured ? "4px" : "2px"} solid ${borderColor}`,
        backgroundColor: bg,
        display: "flex",
        flexDirection: "column",
        gap: "28px",
        position: "relative",
        transition: "background-color 150ms ease",
        marginLeft: !isFeatured && plan.name === "Growth" ? "0" : "-2px",
        height: "100%",
        boxSizing: "border-box",
      }}
      onMouseEnter={() => !isFeatured && setHovered(true)}
      onMouseLeave={() => !isFeatured && setHovered(false)}
    >
      {/* Most popular badge */}
      {isFeatured && (
        <div
          style={{
            position: "absolute",
            top: "-18px",
            left: "40px",
            backgroundColor: sw.red,
            color: sw.white,
            fontFamily: sw.font,
            fontWeight: 700,
            fontSize: "10px",
            padding: "5px 14px",
            letterSpacing: "0.12em",
            textTransform: "uppercase" as const,
          }}
        >
          Most Popular
        </div>
      )}

      <div>
        <div
          style={{
            fontFamily: sw.font,
            fontWeight: 700,
            fontSize: "10px",
            color: isFeatured ? sw.red : sw.red,
            letterSpacing: "0.15em",
            textTransform: "uppercase" as const,
            marginBottom: "8px",
          }}
        >
          {plan.cadence}
        </div>
        <h3
          style={{
            fontFamily: sw.font,
            fontWeight: 900,
            fontSize: "28px",
            color: textColor,
            textTransform: "uppercase" as const,
            letterSpacing: "-0.03em",
            margin: "0 0 4px",
          }}
        >
          {plan.name}
        </h3>
        <div
          style={{
            fontFamily: sw.font,
            fontWeight: 600,
            fontSize: "15px",
            color: isFeatured ? "rgba(0,0,0,0.55)" : "#AAA",
          }}
        >
          {plan.price}
        </div>
      </div>

      <p
        style={{
          fontFamily: sw.font,
          fontSize: "13px",
          lineHeight: 1.65,
          color: bodyColor,
          margin: 0,
          borderTop: `1px solid ${isFeatured ? "rgba(0,0,0,0.15)" : "rgba(255,255,255,0.1)"}`,
          paddingTop: "20px",
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
          gap: "12px",
          flex: 1,
        }}
      >
        {plan.features.map((feature) => (
          <li
            key={feature}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "12px",
              fontFamily: sw.font,
              fontSize: "13px",
              color: bodyColor,
              lineHeight: 1.5,
            }}
          >
            <span
              style={{
                color: isFeatured ? sw.red : sw.red,
                fontWeight: 900,
                fontSize: "16px",
                lineHeight: 1,
                marginTop: "1px",
                flexShrink: 0,
              }}
            >
              —
            </span>
            {feature}
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        style={{
          fontFamily: sw.font,
          fontWeight: 700,
          fontSize: "12px",
          color: sw.white,
          backgroundColor: sw.red,
          padding: "14px 24px",
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "48px",
          letterSpacing: "0.1em",
          textTransform: "uppercase" as const,
          transition: "background-color 150ms ease, color 150ms ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = sw.black;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = sw.red;
          e.currentTarget.style.color = sw.white;
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
        backgroundColor: sw.white,
        paddingTop: "96px",
        paddingBottom: "96px",
      }}
    >
      <div
        style={{
          maxWidth: sw.container,
          margin: "0 auto",
          padding: `0 ${sw.gutter}`,
        }}
      >
        <div style={{ marginBottom: "64px" }}>
          <SectionLabel number="05" text="Investment" />
          <div
            style={{ display: "grid", gap: "24px", alignItems: "end" }}
            className="grid-cols-1 lg:grid-cols-[7fr_5fr]"
          >
            <h2
              id="pricing-heading"
              style={{
                fontFamily: sw.font,
                fontWeight: 900,
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                color: sw.black,
                letterSpacing: "-0.04em",
                textTransform: "uppercase" as const,
                lineHeight: 0.95,
                margin: 0,
              }}
            >
              Straightforward
              <br />
              Pricing Based on
              <br />
              What You Need.
            </h2>
            <p
              style={{
                fontFamily: sw.font,
                fontSize: "15px",
                color: "#AAA",
                lineHeight: 1.65,
                margin: 0,
                paddingBottom: "8px",
              }}
            >
              Custom pricing for your scope. Every engagement starts with a free
              audit so we can recommend what fits your situation — not the
              biggest package we can sell you.
            </p>
          </div>
        </div>

        <div
          style={{ display: "grid", paddingTop: "24px", alignItems: "stretch" }}
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
// FaqSection
// ---------------------------------------------------------------------------

function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div>
      {faqItems.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            style={{
              borderTop: `2px solid ${sw.black}`,
              borderBottom:
                i === faqItems.length - 1 ? `2px solid ${sw.black}` : "none",
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
                padding: "24px 0",
                background: "none",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
                gap: "24px",
                minHeight: "44px",
              }}
            >
              <span
                style={{
                  fontFamily: sw.font,
                  fontWeight: 700,
                  fontSize: "15px",
                  color: isOpen ? sw.red : sw.black,
                  textTransform: "uppercase" as const,
                  letterSpacing: "0.01em",
                  lineHeight: 1.4,
                  transition: "color 150ms ease",
                }}
              >
                {item.question}
              </span>
              <span
                style={{
                  color: isOpen ? sw.red : sw.black,
                  flexShrink: 0,
                  transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                  transition: "transform 200ms ease, color 150ms ease",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <IconPlus />
              </span>
            </button>

            <div
              style={{
                overflow: "hidden",
                maxHeight: isOpen ? "400px" : "0",
                transition: "max-height 400ms cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              <p
                style={{
                  fontFamily: sw.font,
                  fontSize: "14px",
                  lineHeight: 1.75,
                  color: "#555",
                  margin: 0,
                  paddingBottom: "28px",
                  maxWidth: "680px",
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
        backgroundColor: sw.muted,
        paddingTop: "96px",
        paddingBottom: "96px",
        borderTop: `4px solid ${sw.black}`,
        ...diagPattern,
      }}
    >
      <div
        style={{
          maxWidth: sw.container,
          margin: "0 auto",
          padding: `0 ${sw.gutter}`,
          display: "grid",
          gap: "64px",
          alignItems: "start",
        }}
        className="grid-cols-1 lg:grid-cols-[4fr_8fr]"
      >
        {/* Left label */}
        <div>
          <SectionLabel number="06" text="Questions" />
          <h2
            id="faq-heading"
            style={{
              fontFamily: sw.font,
              fontWeight: 900,
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              color: sw.black,
              letterSpacing: "-0.04em",
              textTransform: "uppercase" as const,
              lineHeight: 0.95,
              margin: "0 0 16px",
            }}
          >
            Questions
            <br />
            We Get
            <br />
            Asked
            <br />A Lot.
          </h2>
          <a
            href="#contact"
            style={{
              fontFamily: sw.font,
              fontWeight: 700,
              fontSize: "12px",
              color: sw.white,
              backgroundColor: sw.red,
              padding: "12px 20px",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              letterSpacing: "0.08em",
              textTransform: "uppercase" as const,
              transition: "background-color 150ms ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = sw.black)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = sw.red)
            }
          >
            Still have questions?
          </a>
        </div>

        {/* Accordion */}
        <div
          style={{
            backgroundColor: sw.white,
            border: `2px solid ${sw.black}`,
            padding: "8px 40px",
          }}
        >
          <FaqAccordion />
        </div>
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
        backgroundColor: sw.black,
        paddingTop: "96px",
        paddingBottom: "96px",
      }}
    >
      <div
        style={{
          maxWidth: sw.container,
          margin: "0 auto",
          padding: `0 ${sw.gutter}`,
          display: "grid",
          gap: "64px",
          alignItems: "center",
        }}
        className="grid-cols-1 lg:grid-cols-[7fr_5fr]"
      >
        {/* Left: copy */}
        <div>
          <div
            style={{
              fontFamily: sw.font,
              fontWeight: 700,
              fontSize: "11px",
              color: sw.red,
              letterSpacing: "0.15em",
              textTransform: "uppercase" as const,
              marginBottom: "24px",
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: "24px",
                height: "2px",
                backgroundColor: sw.red,
              }}
            />
            Act Now
          </div>

          <h2
            id="cta-heading"
            style={{
              fontFamily: sw.font,
              fontWeight: 900,
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              color: sw.white,
              letterSpacing: "-0.04em",
              textTransform: "uppercase" as const,
              lineHeight: 0.95,
              margin: "0 0 32px",
            }}
          >
            The Window
            <br />
            To Get Ahead
            <br />
            Is <span style={{ color: sw.red }}>Narrowing.</span>
          </h2>

          <p
            style={{
              fontFamily: sw.font,
              fontWeight: 400,
              fontSize: "16px",
              color: "rgba(0,0,0,0.6)",
              lineHeight: 1.65,
              margin: "0 0 40px",
              maxWidth: "480px",
              borderLeft: `4px solid ${sw.red}`,
              paddingLeft: "20px",
            }}
          >
            AI-powered marketing isn&apos;t coming — it&apos;s already here. The
            businesses that move now will hold a lead advantage that&apos;s very
            hard to close later. Book a free 30-minute call to find out where
            you stand.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0",
              alignItems: "center",
            }}
          >
            <a
              href="#contact"
              style={{
                fontFamily: sw.font,
                fontWeight: 700,
                fontSize: "13px",
                color: sw.white,
                backgroundColor: sw.red,
                padding: "16px 32px",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                minHeight: "52px",
                letterSpacing: "0.08em",
                textTransform: "uppercase" as const,
                transition: "background-color 150ms ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = sw.black;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = sw.red;
              }}
            >
              Book Your Free Audit Call <IconArrowRight />
            </a>
            <a
              href="#checklist"
              style={{
                fontFamily: sw.font,
                fontWeight: 600,
                fontSize: "13px",
                color: "rgba(0,0,0,0.45)",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                minHeight: "52px",
                padding: "16px 24px",
                letterSpacing: "0.04em",
                textTransform: "uppercase" as const,
                transition: "color 150ms ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = sw.white)}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(0,0,0,0.45)")
              }
            >
              Download AI Readiness Checklist
            </a>
          </div>

          <p
            style={{
              fontFamily: sw.font,
              fontSize: "12px",
              color: "rgba(0,0,0,0.4)",
              marginTop: "16px",
              letterSpacing: "0.04em",
            }}
          >
            No pressure, no pitch deck. Just a clear look at where your business
            stands online.
          </p>
        </div>

        {/* Right: decorative composition */}
        <div className="hidden lg:block">
          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "1 / 1",
            }}
          >
            {/* Large outlined square */}
            <div
              style={{
                position: "absolute",
                inset: "10%",
                border: `4px solid ${sw.red}`,
              }}
            />
            {/* White filled center square */}
            <div
              style={{
                position: "absolute",
                top: "30%",
                left: "30%",
                width: "40%",
                height: "40%",
                backgroundColor: sw.red,
              }}
            />
            {/* Corner marks */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "12%",
                height: "2px",
                backgroundColor: sw.white,
              }}
            />
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "2px",
                height: "12%",
                backgroundColor: sw.white,
              }}
            />
            <div
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: "12%",
                height: "2px",
                backgroundColor: sw.white,
              }}
            />
            <div
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: "2px",
                height: "12%",
                backgroundColor: sw.white,
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "12%",
                height: "2px",
                backgroundColor: sw.white,
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "2px",
                height: "12%",
                backgroundColor: sw.white,
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                right: 0,
                width: "12%",
                height: "2px",
                backgroundColor: sw.white,
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                right: 0,
                width: "2px",
                height: "12%",
                backgroundColor: sw.white,
              }}
            />
          </div>
        </div>
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
        backgroundColor: sw.muted,
        borderTop: `4px solid ${sw.white}`,
        paddingTop: "64px",
        paddingBottom: "40px",
      }}
    >
      <div
        style={{
          maxWidth: sw.container,
          margin: "0 auto",
          padding: `0 ${sw.gutter}`,
        }}
      >
        <div
          style={{
            display: "grid",
            gap: "48px",
            marginBottom: "48px",
            alignItems: "start",
          }}
          className="grid-cols-1 md:grid-cols-[1fr_auto]"
        >
          {/* Brand */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <a
              href="/"
              aria-label="Linax Digital home"
              style={{
                display: "inline-block",
                maxWidth: "110px",
              }}
            >
              <img
                src={linaxLogoSvg}
                alt="Linax Digital"
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                }}
              />
            </a>
            <p
              style={{
                fontFamily: sw.font,
                fontSize: "13px",
                color: "rgba(240,240,240,0.8)",
                margin: 0,
                lineHeight: 1.6,
                maxWidth: "320px",
              }}
            >
              Local expertise. Modern tools. Built by someone who does the work.
            </p>
            <p
              style={{
                fontFamily: sw.font,
                fontSize: "11px",
                color: "rgba(240,240,240,0.6)",
                margin: 0,
                fontStyle: "italic",
              }}
            >
              [REPLACE: LinkedIn, Instagram — add handles when social profiles
              are live]
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
                gap: "12px",
              }}
            >
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    style={{
                      fontFamily: sw.font,
                      fontWeight: 600,
                      fontSize: "11px",
                      color: "rgba(240,240,240,0.7)",
                      textDecoration: "none",
                      textTransform: "uppercase" as const,
                      letterSpacing: "0.1em",
                      transition: "color 150ms ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = sw.red)}
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "rgba(240,240,240,0.7)")
                    }
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
            borderTop: `1px solid rgba(240,240,240,0.18)`,
            paddingTop: "24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <p
            style={{
              fontFamily: sw.font,
              fontSize: "11px",
              color: "rgba(240,240,240,0.6)",
              margin: 0,
              letterSpacing: "0.08em",
              textTransform: "uppercase" as const,
            }}
          >
            &copy; 2026 Linax Digital. All rights reserved.
          </p>
          <div
            style={{
              display: "flex",
              gap: "8px",
              alignItems: "center",
            }}
          >
            {["#", "#", "#"].map((_, i) => (
              <div
                key={i}
                style={{
                  width: i === 1 ? "16px" : "8px",
                  height: "2px",
                  backgroundColor:
                    i === 1 ? sw.red : "rgba(240,240,240,0.4)",
                }}
              />
            ))}
          </div>
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
    <div style={{ fontFamily: sw.font, backgroundColor: sw.white }}>
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
