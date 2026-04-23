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
import CardNav from "../../components/CardNav";
import Silk from "../../components/Silk";
import PixelBlast from "../../components/PixelBlast";
import ScrollStack, { ScrollStackItem } from "../../components/ScrollStack";
import RippleGrid from "../../components/RippleGrid";
import LogoLoop from "../../components/LogoLoop";
import linaxLogo from "./linax-logo.svg";

// ---------------------------------------------------------------------------
// Color Palette
// ---------------------------------------------------------------------------

const colors = {
  // Brand — Coastal Clay
  primary: "#FBF8F3", // sand-50 warm cream — hero / page bg
  primaryLight: "#F3EEE4", // sand-100 soft sand — alternate sections
  primaryFrost: "rgba(42, 37, 29, 0.90)", // sand-900 dark warm brown with transparency for nav

  // CTA
  cta: "#C2552D", // clay-500 terracotta

  // Neutrals
  ink: "#1F1B16", // sand-950 warm near-black
  surface: "#2A251D", // sand-900 dark warm brown
  surfaceAlt: "#3E372D", // sand-800
  gray: "#F3EEE4", // sand-100 soft sand (muted surface)
  paper: "#FBF8F3", // sand-50 warm cream
  white: "#FFFFFF", // pure white (emphasis)

  // Text shades
  textMuted: "#78705F", // sand-600
  textSubtle: "#5C5449", // sand-700
  textDim: "#5C5449", // sand-700

  // Typography / layout
  font: "'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif",
  container: "1200px",
  gutter: "24px",
} as const;

// Legacy alias — keeps existing sw.* references working
const sw = {
  white: colors.ink,
  black: colors.paper,
  muted: colors.gray,
  red: colors.cta,
  font: colors.font,
  container: colors.container,
  gutter: colors.gutter,
} as const;

// CSS-based texture patterns
const gridPattern: React.CSSProperties = {
  backgroundImage:
    "repeating-linear-gradient(0deg, transparent, transparent 23px, rgba(31,27,22,0.06) 23px, rgba(31,27,22,0.06) 24px)," +
    "repeating-linear-gradient(90deg, transparent, transparent 23px, rgba(31,27,22,0.06) 23px, rgba(31,27,22,0.06) 24px)",
};

const dotsPattern: React.CSSProperties = {
  backgroundImage: "radial-gradient(rgba(31,27,22,0.05) 1px, transparent 1px)",
  backgroundSize: "16px 16px",
};

const diagPattern: React.CSSProperties = {
  backgroundImage:
    "repeating-linear-gradient(45deg, rgba(31,27,22,0.04) 0px, rgba(31,27,22,0.04) 1px, transparent 1px, transparent 10px)",
};

// ---------------------------------------------------------------------------
// TypeScript Interfaces
// ---------------------------------------------------------------------------

interface ServiceItem {
  icon: "map" | "bolt" | "globe" | "chart" | "message" | "settings";
  title: string;
  hook: string;
  description: string;
}

interface ProcessStepItem {
  number: string;
  title: string;
  body: string;
  illustration: string;
}

interface TestimonialItem {
  quote: string;
  name: string;
  titleAndCompany: string;
  resultCallout: string;
}

interface PricingPlanTier {
  price: string;
  priceUnit: string;
  cadence: string;
  features: string[];
}

interface PricingPlanItem {
  name: string;
  description: string;
  cta: string;
  featured: boolean;
  monthly: PricingPlanTier;
  lumpSum: PricingPlanTier | null;
}

interface FaqItem {
  question: string;
  answer: string;
}

interface ProblemItem {
  name: string;
  body: string;
  solution: string;
}

// ---------------------------------------------------------------------------
// Content Data
// ---------------------------------------------------------------------------

const stats = [
  {
    value: "3+ Years",
    label:
      "working directly with local service businesses building digital solutions.",
  },
  {
    value: "Multi-Industry",
    label:
      "including: Home service, construction, health, beauty, finance, and more.",
  },
  {
    value: "Full Service",
    label:
      "one stop solution marketing, custom crafted and executed for your local business",
  },
];

const clientLogos = [
  {
    src: "/logos/fourleafLogoNoTitle.png",
    alt: "Four Leaf Charters",
    title: "Four Leaf Charters",
  },
  {
    src: "/logos/veronacabinet.png",
    alt: "Verona Cabinets",
    title: "Verona Cabinets",
  },
  {
    src: "/logos/mk-kitchen-logo.png",
    alt: "MK Kitchen",
    title: "MK Kitchen",
  },
  {
    src: "/logos/ordx-logo-light.webp",
    alt: "ORDX",
    title: "ORDX",
  },
  {
    src: "/logos/virtuelogo.png",
    alt: "Virtue",
    title: "Virtue",
  },
  {
    src: "/logos/mycelia-logo.svg",
    alt: "Mycelia Foundation",
    title: "Mycelia Foundation",
  },
];

const problems: ProblemItem[] = [
  {
    name: "Invisible Online",
    body: "Your work is better. Your reviews are better. But when someone nearby searches for what you do, three shops with half your reputation rank above you. Being seen online isn\u2019t about who\u2019s best. It\u2019s about who\u2019s set up to be found.",
    solution:
      "We get your online presence in order and expand your reach with local SEO and active reputation building. More of the right customers find you — and when they do, what they see earns the call.",
  },
  {
    name: "Failed Efforts",
    body: "You've tried a website. You've tried Instagram. You've run a Google ad or two. You've even paid someone to help. Nothing quite worked, and now you're unsure where to put your time and money next.",
    solution:
      "We start by figuring out what your business actually needs — not what every business supposedly needs. Then we build a plan, put it to work, and show you what's moving the needle. Nothing gets spent on marketing that doesn't pay back.",
  },
  {
    name: "Spread Thin",
    body: "Running a business means wearing every hat — president, manager, accountant, recruiter. Adding 'marketing director' on top means juggling accounts across a dozen platforms and paying for tools you barely have time to open. You don't have the hours for it.",
    solution:
      "We pull it all under one roof — the tools, the accounts, the work. One point of contact instead of ten. Our packages are built around what you actually need, so you're not paying for parts you won't use.",
  },
];

const services: ServiceItem[] = [
  {
    icon: "globe",
    title: "Websites",
    hook: "A website that works as hard as you do",
    description:
      "Built from scratch — no cookie cutter design or drag-and-drop builder. Fast-loading, mobile friendly, and designed to turn visitors into leads. Yours for a flat fee or a monthly plan that makes it affordable from day one.",
  },
  {
    icon: "map",
    title: "Local SEO",
    hook: "Get found by the customers already searching",
    description:
      "We deploy AI systems that respond to new inquiries instantly, qualify leads through automated follow-up sequences, and book appointments \u2014 without you lifting a finger. The result is a faster response time and fewer leads falling through the cracks at 10pm on a Friday.",
  },
  {
    icon: "chart",
    title: "Google & Meta Ads",
    hook: "Ad spend that pays you back, not just the platform",
    description:
      "We build fast, mobile-first websites in Next.js and React that are designed around one goal: turning visitors into calls and form fills. Every page is structured to match how your customers search, think, and decide \u2014 not how you want to describe your business.",
  },
  {
    icon: "bolt",
    title: "Reputation Management",
    hook: "Turn happy customers into your best salespeople",
    description:
      "We manage Google Ads and Meta campaigns with a focus on cost-per-lead efficiency for local service budgets \u2014 not vanity metrics. Every campaign is built on keyword-level data and audience targeting specific to your service area and job types.",
  },
  {
    icon: "message",
    title: "Chatbots & Voice Agents",
    hook: "Answers when you can't pick up",
    description:
      "A trained chatbot or voice agent on your site or dedicated phone line that knows your services, your pricing, and your FAQs — ready to answer questions at 11pm on a Tuesday. When someone sounds serious, it routes them straight to your calendar. Your first reply stops being 'next morning' and starts being 'right now.",
  },
  {
    icon: "settings",
    title: "Automations",
    hook: "The busywork, handled.",
    description:
      "We look at how your day actually runs and find the repeat tasks a machine can do better than a person — follow-up texts, appointment reminders, review requests, lead routing. You stop dropping balls. Your customers get a more consistent experience. You get your evenings back.",
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
    illustration: "/auditIllustrated.png",
  },
  {
    number: "02",
    title: "Build the Right Foundation",
    body: "Based on the audit, we do the work. Website design, SEO setup, ad campaign buildout, reputation management configuration — whatever you're starting with. You approve the strategy. We handle everything else.",
    illustration: "/buildIllustrated.png",
  },
  {
    number: "03",
    title: "Optimize, Automate, Grow",
    body: "Marketing isn't a one-time project. We track what's working, adjust what isn't, and report in plain English every month so you always know what you're paying for.",
    illustration: "/optimizeIllustrated.png",
  },
];

const pricingPlans: PricingPlanItem[] = [
  {
    name: "Websites",
    description:
      "A fast, custom-built site that turns visitors into calls — no templates, no drag-and-drop.",
    cta: "Book a Discovery Call",
    featured: false,
    monthly: {
      price: "$180",
      priceUnit: "/mo",
      cadence: "12-month minimum · Website as a service",
      features: [
        "Custom design + development",
        "Hosting, SSL & domain email",
        "Unlimited content edits",
        "Analytics setup",
        "Full ongoing support",
        "No upfront build cost",
      ],
    },
    lumpSum: {
      price: "$3,000",
      priceUnit: "",
      cadence: "One-time build · $25/mo hosting",
      features: [
        "5-page custom design + development",
        "Full ownership of code & files",
        "Hosting billed at $25/mo separately",
        "Content edits available at $25/mo",
        "Additional pages at $150 each",
        "Blog system + chatbot as add-ons",
      ],
    },
  },
  {
    name: "Local SEO",
    description:
      "Rank where your customers are already searching — and stay there as competitors react.",
    cta: "Book a Discovery Call",
    featured: true,
    monthly: {
      price: "$300",
      priceUnit: "/mo",
      cadence: "Ongoing · month-to-month",
      features: [
        "Content strategy",
        "4 blog posts per month",
        "GBP posts + ongoing optimization",
        "Strategic backlink building",
        "Press releases (where applicable)",
        "No long-term lock-in",
      ],
    },
    lumpSum: {
      price: "$600",
      priceUnit: "",
      cadence: "SEO Foundation · one-time",
      features: [
        "Keyword research + mapping",
        "Local citation building (unified NAP)",
        "1–2 high-DA foundation backlinks",
        "Press release (where applicable)",
        "GBP setup + optimization",
        "Handoff documentation",
      ],
    },
  },
  {
    name: "Paid Ads",
    description:
      "Paid campaigns built around cost-per-lead — and you don't pay if ROAS drops below 2:1.",
    cta: "Book a Discovery Call",
    featured: false,
    monthly: {
      price: "$300",
      priceUnit: "/mo min",
      cadence: "Management fee · month-to-month",
      features: [
        "$300/mo or 10% of ad spend (higher applies)",
        "Management fee capped at $2,000/mo",
        "Google + Meta Ads covered",
        "Active campaign management",
        "Monthly performance reporting",
        "2:1 ROAS guarantee or you don't pay",
      ],
    },
    lumpSum: null,
  },
  {
    name: "Reputation",
    description:
      "Turn happy customers into a steady stream of five-star reviews that win the next caller.",
    cta: "Book a Discovery Call",
    featured: false,
    monthly: {
      price: "$195",
      priceUnit: "/mo",
      cadence: "Ongoing · month-to-month",
      features: [
        "Dedicated Go High Level sub-account",
        "Review request workflows configured",
        "Customer engagement automation",
        "CRM + unified inbox access",
        "Multi-platform monitoring",
        "No long-term lock-in",
      ],
    },
    lumpSum: null,
  },
];

const faqItems: FaqItem[] = [
  {
    question: "How quickly will I see results?",
    answer:
      "Ads can start generating calls within 1–2 weeks. A new website typically launches in 2–4 weeks. SEO takes 3–6 months to build — it compounds over time and doesn't stop paying when you turn off the spend. Reputation Management usually starts producing new reviews within the first few weeks of setup.We\u2019ll give you honest timelines based on where your business actually is, not optimistic projections.",
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
    question: "How is Linax Digital different from the agency I already tried?",
    answer:
      "The main difference is who does the work. At most agencies, you talk to an account manager and the actual work gets handed off to someone you've never met. Here, you talk to me — the same person who built your strategy, wrote your code, and runs your campaigns. If something isn't right, I'm the one who fixes it.",
  },
  {
    question:
      "We\u2019re busy right now \u2014 can this wait until things slow down?",
    answer:
      "The businesses that are too busy to fix their marketing are usually busy because of word-of-mouth \u2014 which is fragile. When referrals slow down, as they eventually do, there\u2019s no digital foundation to catch the gap. The best time to build that foundation is when you have some breathing room. The second-best time is now.",
  },
];

// ---------------------------------------------------------------------------
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
    case "globe":
      return (
        <img
          src="/websiteIcon.png"
          alt="Websites"
          width={44}
          height={44}
          style={{ objectFit: "contain" }}
        />
      );
    case "map":
      return (
        <img
          src="/seoIcon.png"
          alt="Local SEO"
          width={44}
          height={44}
          style={{ objectFit: "contain" }}
        />
      );
    case "chart":
      return (
        <img
          src="/adsIcon.png"
          alt="Google & Meta Ads"
          width={44}
          height={44}
          style={{ objectFit: "contain" }}
        />
      );
    case "bolt":
      return (
        <img
          src="/reputationIcon.png"
          alt="Reputation Management"
          width={44}
          height={44}
          style={{ objectFit: "contain" }}
        />
      );
    case "message":
      return (
        <img
          src="/chatbotIcon.png"
          alt="Chatbots & Voice Agents"
          width={44}
          height={44}
          style={{ objectFit: "contain" }}
        />
      );
    case "settings":
      return (
        <img
          src="/automationIcon.png"
          alt="Automations"
          width={44}
          height={44}
          style={{ objectFit: "contain" }}
        />
      );
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
          color: sw.white,
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

const linaxLogoSvg = "/linax-digital-logo.png";

const cardNavItems = [
  {
    label: "Services",
    bgColor: colors.surface,
    textColor: colors.white,
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
    bgColor: colors.surfaceAlt,
    textColor: colors.white,
    links: [
      { label: "Results", ariaLabel: "Our Results", href: "#results" },
      { label: "Pricing", ariaLabel: "Pricing Plans", href: "#pricing" },
    ],
  },
  {
    label: "Contact",
    bgColor: colors.cta,
    textColor: colors.white,
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
        className="nav-silk-bg"
        style={{ backgroundColor: colors.primaryFrost }}
      />

      <div style={{ pointerEvents: "auto" }}>
        <CardNav
          logo={linaxLogoSvg}
          logoAlt="Linax Digital"
          items={cardNavItems}
          baseColor="transparent"
          menuColor={sw.white}
          buttonBgColor={sw.red}
          buttonTextColor={"#FBF8F3"}
        />
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// HeroSection — centered text stack with scattered service icons
// ---------------------------------------------------------------------------

// Staggered row of service icons. Currently unused; kept for future placements.
function HeroMobileIconStrip() {
  return (
    <div
      aria-hidden="true"
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: "32px",
        paddingTop: "20px",
        paddingBottom: "20px",
        width: "100%",
      }}
    >
      <img
        src="/websiteIcon.png"
        alt=""
        style={{
          width: "76px",
          transform: "translateY(-18px) rotate(-24deg)",
          userSelect: "none",
        }}
      />
      <img
        src="/seoIcon.png"
        alt=""
        style={{
          width: "76px",
          transform: "translateY(18px) rotate(28deg)",
          userSelect: "none",
        }}
      />
      <img
        src="/adsIcon.png"
        alt=""
        style={{
          width: "76px",
          transform: "translateY(-18px) rotate(-32deg)",
          userSelect: "none",
        }}
      />
      <img
        src="/reputationIcon.png"
        alt=""
        style={{
          width: "76px",
          transform: "translateY(18px) rotate(22deg)",
          userSelect: "none",
        }}
      />
    </div>
  );
}

const heroMobileCornerIcons: Array<{
  src: string;
  style: React.CSSProperties;
}> = [
  {
    src: "/websiteIcon.png",
    style: {
      bottom: "100%",
      right: "100%",
      marginBottom: "-28px",
      marginRight: "-28px",
      transform: "rotate(-24deg)",
    },
  },
  {
    src: "/seoIcon.png",
    style: {
      bottom: "100%",
      left: "100%",
      marginBottom: "-28px",
      marginLeft: "-28px",
      transform: "rotate(22deg)",
    },
  },
  {
    src: "/adsIcon.png",
    style: {
      top: "100%",
      right: "100%",
      marginTop: "-28px",
      marginRight: "-28px",
      transform: "rotate(28deg)",
    },
  },
  {
    src: "/reputationIcon.png",
    style: {
      top: "100%",
      left: "100%",
      marginTop: "-52px",
      marginLeft: "-28px",
      transform: "rotate(-18deg)",
    },
  },
];

function HeroSection() {
  return (
    <section
      aria-label="Hero"
      style={{
        backgroundColor: colors.primary,
        paddingTop: "128px",
        paddingBottom: "96px",
        position: "relative",
        overflowX: "clip",
      }}
    >
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <PixelBlast
          variant="square"
          pixelSize={4}
          color={colors.primaryLight}
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

      {/* Centered text stack */}
      <div
        style={{
          maxWidth: sw.container,
          margin: "0 auto",
          padding: `0 ${sw.gutter} 0px`,
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {/* <div
          style={{
            fontFamily: sw.font,
            fontWeight: 700,
            fontSize: "11px",
            color: sw.red,
            letterSpacing: "0.15em",
            textTransform: "uppercase" as const,
            marginBottom: "20px",
            paddingLeft: "38px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "left",
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
          Local Business Digital Marketing &amp; System Integrations
        </div> */}

        <div
          style={{
            width: "85%",
            maxWidth: "640px",
            containerType: "inline-size",
            margin: "0 0 32px",
            position: "relative",
          }}
        >
          {heroMobileCornerIcons.map((icon, i) => (
            <img
              key={i}
              src={icon.src}
              alt=""
              aria-hidden="true"
              style={{
                position: "absolute",
                width: "clamp(110px, 9vw, 150px)",
                pointerEvents: "none",
                userSelect: "none",
                ...icon.style,
              }}
            />
          ))}
          <h1
            style={{
              fontFamily: sw.font,
              fontWeight: 900,
              fontSize: "clamp(2.25rem, 15.5cqi, 6rem)",
              lineHeight: 0.95,
              color: sw.white,
              letterSpacing: "-0.04em",
              textTransform: "uppercase" as const,
              margin: 0,
              whiteSpace: "nowrap",
            }}
          >
            Get Found.
            <br />
            Get Trusted.
            <br />
            Get Booked.
            <br />
            <span style={{ color: sw.red }}>Faster.</span>
          </h1>
        </div>

        <p
          className="px-[59px] md:px-[40px]"
          style={{
            fontFamily: sw.font,
            fontWeight: 400,
            fontSize: "17px",
            lineHeight: 1.65,
            color: colors.textSubtle,
            margin: "0 0 40px",
            maxWidth: "640px",
          }}
        >
          Linax Digital is a digital marketing agency in Southwest Florida. We
          build websites, run SEO, manage ads, and handle your online reputation
          — all of it done by the person you talked to.
        </p>

        {/* CTA group */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "12px",
            alignItems: "stretch",
          }}
        >
          <a
            href="#contact"
            style={{
              fontFamily: sw.font,
              fontWeight: 700,
              fontSize: "13px",
              color: "#FBF8F3",
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
              (e.currentTarget.style.backgroundColor = "#A3431F")
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
              color: sw.white,
              backgroundColor: "transparent",
              padding: "16px 32px",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              minHeight: "52px",
              letterSpacing: "0.08em",
              textTransform: "uppercase" as const,
              border: `2px solid ${sw.white}`,
              transition: "background-color 150ms ease, color 150ms ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = colors.primaryLight;
              e.currentTarget.style.color = sw.white;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = sw.white;
            }}
          >
            See What We Do
          </a>
        </div>

        <p
          style={{
            fontFamily: sw.font,
            fontSize: "12px",
            color: colors.textMuted,
            marginTop: "16px",
            letterSpacing: "0.02em",
          }}
        >
          No commitment. 30 minutes. Walk away with a clear picture of where you
          stand.
        </p>
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
        backgroundColor: colors.primaryLight,
        borderTop: `4px solid ${sw.white}`,
        borderBottom: `4px solid ${sw.white}`,
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
        <style>{`
          @media (max-width: 767px) {
            .stat-cell { padding: 20px 16px !important; }
          }
        `}</style>
        <div
          style={{ display: "grid" }}
          className="grid-cols-1 md:grid-cols-3 stat-grid"
        >
          {stats.map((stat, i) => (
            <div
              key={stat.value}
              className="stat-cell text-center md:text-left"
              style={{
                padding: "40px 32px",
                borderRight:
                  i < stats.length - 1 ? `2px solid ${sw.white}` : "none",
                borderBottom: "none",
              }}
            >
              <h2 className="scroll-float scroll-float-stat">
                <span className="scroll-float-text">{stat.value}</span>
              </h2>
              <div
                className="mx-auto md:mx-0"
                style={{
                  fontFamily: sw.font,
                  fontWeight: 500,
                  fontSize: "13px",
                  color: colors.textMuted,
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
            borderTop: `2px solid ${sw.white}`,
            padding: "20px 32px",
            display: "flex",
            flexWrap: "nowrap",
            gap: "32px",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <div
            style={{
              flexShrink: 0,
              display: "flex",
              flexDirection: "column",
              gap: "2px",
              borderRight: `2px solid ${sw.white}`,
              paddingRight: "24px",
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
              }}
            >
              Trusted by
            </span>
            <span
              style={{
                fontFamily: sw.font,
                fontSize: "11px",
                color: colors.textSubtle,
                fontStyle: "italic",
              }}
            >
              Southwest Florida
            </span>
          </div>
          <div
            style={{
              flex: "1 1 auto",
              minWidth: 0,
              position: "relative",
              overflow: "hidden",
              height: "56px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <LogoLoop
              logos={clientLogos}
              speed={60}
              direction="left"
              logoHeight={40}
              gap={120}
              scaleOnHover
              fadeOut
              fadeOutColor={colors.primaryLight}
              ariaLabel="Trusted by local Southwest Florida businesses"
            />
          </div>
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
        backgroundColor: colors.primary,
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
              color: sw.white,
              letterSpacing: "-0.04em",
              textTransform: "uppercase" as const,
              lineHeight: 0.95,
              margin: "0 0 24px",
            }}
          >
            You've Got
            <br />
            99 Problems
            <br />
            <span className="text-[#c2552d]">Marketing </span>
            <br />
            Shouldn't Be 1
            <br />
          </h2>
          <p
            style={{
              fontFamily: sw.font,
              fontWeight: 400,
              fontSize: "15px",
              color: colors.textMuted,
              lineHeight: 1.65,
              margin: 0,
            }}
          >
            Most local service businesses in Southwest Florida have the same
            problem. Their customers are happy. Their work is solid. But
            somewhere between the last job they finished and the next one
            they're trying to book, something's leaking. Leads go to a
            competitor with worse reviews. Calls don't get returned in time. The
            website hasn't been touched since 2019. It's not because you don't
            care. It's because you're running a business.
          </p>
          <img
            src="/painPointJuggling.png"
            alt="Illustration of a business owner juggling marketing pain points"
            className="hidden lg:block"
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              right: 0,
              width: "100%",
              height: "auto",
            }}
          />
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
        borderTop: `4px solid ${sw.white}`,
        borderBottom: index === total - 1 ? `4px solid ${sw.white}` : "none",
        borderLeft: `4px solid ${sw.white}`,
        borderRight: `4px solid ${sw.white}`,
        backgroundColor: hovered ? sw.red : colors.white,
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
            color: hovered ? "#FBF8F3" : sw.white,
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
            color: hovered ? "#FBF8F3" : sw.red,
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
          color: hovered ? "rgba(255,255,255,0.9)" : colors.textMuted,
          margin: "0 0 20px",
          transition: "color 150ms ease",
        }}
      >
        {problem.body}
      </p>
      <p
        style={{
          fontFamily: sw.font,
          fontSize: "15px",
          lineHeight: 1.7,
          color: hovered ? "rgba(255,255,255,0.9)" : colors.textMuted,
          margin: 0,
          transition: "color 150ms ease",
        }}
      >
        <span
          style={{
            color: hovered ? "#FBF8F3" : sw.red,
            fontWeight: 700,
            transition: "color 150ms ease",
          }}
        >
          Solution:
        </span>{" "}
        {problem.solution}
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
        border: `2px solid ${sw.white}`,
        backgroundColor: hovered ? colors.ink : colors.white,
        transition: "background-color 150ms ease",
        cursor: "default",
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        height: "100%",
        boxSizing: "border-box",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Top row: icon | category label | number */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <div
          style={{
            width: "44px",
            height: "44px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <ServiceIcon icon={service.icon} />
        </div>
        <span
          style={{
            fontFamily: sw.font,
            fontWeight: 700,
            fontSize: "11px",
            color: hovered ? "#FBF8F3" : sw.white,
            textTransform: "uppercase" as const,
            letterSpacing: "0.15em",
            textAlign: "center",
            transition: "color 150ms ease",
          }}
        >
          {service.title}
        </span>
        <span
          style={{
            fontFamily: sw.font,
            fontWeight: 900,
            fontSize: "11px",
            color: hovered ? "#FBF8F3" : colors.textMuted,
            letterSpacing: "0.12em",
            textAlign: "right",
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
          fontSize: "22px",
          color: hovered ? "#FBF8F3" : sw.white,
          letterSpacing: "-0.01em",
          textAlign: "center",
          margin: 0,
          lineHeight: 1.25,
          transition: "color 150ms ease",
        }}
      >
        {service.hook}
      </h3>

      <p
        style={{
          fontFamily: sw.font,
          fontSize: "14px",
          lineHeight: 1.7,
          color: hovered ? "rgba(251,248,243,0.75)" : colors.textMuted,
          margin: 0,
          transition: "color 150ms ease",
        }}
      >
        {service.description}
      </p>

      <a
        href="#contact"
        style={{
          fontFamily: sw.font,
          fontWeight: 700,
          fontSize: "14px",
          color: colors.cta,
          textDecoration: "underline",
          textUnderlineOffset: "4px",
          marginTop: "auto",
          alignSelf: "flex-start",
          transition: "color 150ms ease",
        }}
      >
        More about {service.title.toLowerCase()} →
      </a>
    </article>
  );
}

function ServicesSection() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      style={{
        position: "relative",
        zIndex: 1,
        backgroundColor: colors.primaryLight,
        paddingTop: "96px",
        paddingBottom: "96px",
        ...diagPattern,
        borderTop: `4px solid ${sw.white}`,
        borderBottom: `4px solid ${sw.white}`,
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
                  color: sw.white,
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
              <h2 className="scroll-float scroll-float-services-lead">
                <span className="scroll-float-text">More Qualified Leads.</span>
              </h2>
            </div>
            <p
              style={{
                fontFamily: sw.font,
                fontWeight: 400,
                fontSize: "15px",
                color: colors.textMuted,
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
              color: "#FBF8F3",
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
              e.currentTarget.style.backgroundColor = "#A3431F";
              e.currentTarget.style.borderColor = "#A3431F";
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
        border: `1px solid #E5DCC9`,
        borderTop: `4px solid ${hovered ? "#A3431F" : sw.red}`,
        backgroundColor: colors.white,
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
          backgroundColor: sw.white,
          color: "#FBF8F3",
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
          color: colors.textSubtle,
          margin: 0,
          fontStyle: "normal",
        }}
      >
        {testimonial.quote}
      </blockquote>

      <footer
        style={{
          marginTop: "auto",
          borderTop: `1px solid #E5DCC9`,
          paddingTop: "16px",
        }}
      >
        <div
          style={{
            fontFamily: sw.font,
            fontWeight: 800,
            fontSize: "13px",
            color: sw.white,
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
            color: colors.textMuted,
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
        backgroundColor: colors.primary,
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
              color: sw.white,
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
            border: `4px solid ${sw.white}`,
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
              color: sw.white,
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
              color: "#FBF8F3",
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
              (e.currentTarget.style.backgroundColor = "#A3431F")
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
        backgroundColor: colors.primaryLight,
        paddingTop: "96px",
        paddingBottom: "96px",
        borderTop: `4px solid ${sw.white}`,
        borderBottom: `4px solid ${sw.white}`,
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
              color: sw.white,
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
                borderTop: `4px solid ${sw.white}`,
                borderLeft: i > 0 ? `2px solid ${sw.white}` : "none",
                borderRight: "none",
                backgroundColor: colors.white,
                position: "relative",
                overflow: "hidden",
              }}
            >
              <img
                src={step.illustration}
                alt=""
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: "16px",
                  right: "16px",
                  width: "100px",
                  height: "100px",
                  objectFit: "contain",
                  pointerEvents: "none",
                }}
              />
              {/* Step number — large typographic anchor */}
              <h2 className="scroll-float scroll-float-step-number">
                <span className="scroll-float-text">{step.number}</span>
              </h2>

              <h3
                style={{
                  fontFamily: sw.font,
                  fontWeight: 800,
                  fontSize: "16px",
                  color: sw.white,
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
                  color: colors.textMuted,
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

function PricingCard({
  plan,
  mode,
}: {
  plan: PricingPlanItem;
  mode: "monthly" | "lumpSum";
}) {
  const [hovered, setHovered] = useState(false);

  const subscriptionOnly = mode === "lumpSum" && plan.lumpSum === null;
  const tier =
    (mode === "monthly" ? plan.monthly : plan.lumpSum) ?? plan.monthly;
  const isFeatured = plan.name === "Websites";
  const bg = isFeatured
    ? colors.surface
    : hovered
      ? colors.primaryLight
      : colors.white;
  const textColor = isFeatured ? "#FBF8F3" : sw.white;
  const bodyColor = isFeatured ? "rgba(251,248,243,0.75)" : colors.textMuted;
  const borderColor = isFeatured ? colors.surface : sw.white;

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
        marginLeft: "-2px",
        height: "100%",
        boxSizing: "border-box",
      }}
      onMouseEnter={() => !isFeatured && setHovered(true)}
      onMouseLeave={() => !isFeatured && setHovered(false)}
    >
      {/* Subscription only badge */}
      {subscriptionOnly && (
        <div
          style={{
            position: "absolute",
            top: "-18px",
            left: "40px",
            backgroundColor: colors.surfaceAlt,
            color: "rgba(251,248,243,0.7)",
            fontFamily: sw.font,
            fontWeight: 700,
            fontSize: "10px",
            padding: "5px 14px",
            letterSpacing: "0.12em",
            textTransform: "uppercase" as const,
          }}
        >
          Subscription only
        </div>
      )}

      {/* Most popular badge */}
      {isFeatured && (
        <div
          style={{
            position: "absolute",
            top: "-18px",
            left: "40px",
            backgroundColor: sw.red,
            color: "#FBF8F3",
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
        <h3
          style={{
            fontFamily: sw.font,
            fontWeight: 900,
            fontSize: "26px",
            color: textColor,
            textTransform: "uppercase" as const,
            letterSpacing: "-0.03em",
            margin: "0 0 12px",
          }}
        >
          {plan.name}
        </h3>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2px",
          }}
        >
          <span
            style={{
              fontFamily: sw.font,
              fontWeight: 500,
              fontSize: "11px",
              color: isFeatured ? "rgba(251,248,243,0.5)" : colors.textMuted,
              letterSpacing: "0.06em",
              textTransform: "uppercase" as const,
            }}
          >
            starting at
          </span>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: "6px",
            }}
          >
            <span
              style={{
                fontFamily: sw.font,
                fontWeight: 900,
                fontSize: "44px",
                color: textColor,
                letterSpacing: "-0.04em",
                lineHeight: 1,
              }}
            >
              {tier.price}
            </span>
            {tier.priceUnit && (
              <span
                style={{
                  fontFamily: sw.font,
                  fontWeight: 600,
                  fontSize: "16px",
                  color: isFeatured
                    ? "rgba(251,248,243,0.6)"
                    : colors.textMuted,
                }}
              >
                {tier.priceUnit}
              </span>
            )}
          </div>
        </div>
      </div>

      <p
        style={{
          fontFamily: sw.font,
          fontSize: "13px",
          lineHeight: 1.65,
          color: bodyColor,
          margin: 0,
          borderTop: `1px solid ${isFeatured ? "rgba(251,248,243,0.15)" : "rgba(31,27,22,0.1)"}`,
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
        {tier.features.map((feature) => (
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
                color: sw.red,
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
          color: "#FBF8F3",
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
          e.currentTarget.style.backgroundColor = "#A3431F";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = sw.red;
          e.currentTarget.style.color = "#FBF8F3";
        }}
      >
        {plan.cta}
      </a>
    </article>
  );
}

function BillingToggle({
  mode,
  setMode,
}: {
  mode: "monthly" | "lumpSum";
  setMode: (m: "monthly" | "lumpSum") => void;
}) {
  const options: { id: "monthly" | "lumpSum"; label: string }[] = [
    { id: "monthly", label: "Monthly" },
    { id: "lumpSum", label: "Lump Sum" },
  ];

  return (
    <div
      role="tablist"
      aria-label="Billing mode"
      style={{
        display: "inline-flex",
        alignSelf: "flex-end",
        width: "fit-content",
        border: `2px solid ${sw.white}`,
        padding: "4px",
        gap: "4px",
        backgroundColor: colors.white,
      }}
    >
      {options.map((opt) => {
        const active = mode === opt.id;
        return (
          <button
            key={opt.id}
            role="tab"
            aria-selected={active}
            onClick={() => setMode(opt.id)}
            style={{
              fontFamily: sw.font,
              fontWeight: 700,
              fontSize: "12px",
              letterSpacing: "0.12em",
              textTransform: "uppercase" as const,
              padding: "10px 20px",
              minHeight: "40px",
              cursor: "pointer",
              border: "none",
              backgroundColor: active ? sw.red : "transparent",
              color: active ? "#FBF8F3" : sw.white,
              transition: "background-color 150ms ease, color 150ms ease",
            }}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}

function PricingSection() {
  const [mode, setMode] = useState<"monthly" | "lumpSum">("monthly");

  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      style={{
        backgroundColor: colors.primary,
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
                color: sw.white,
                letterSpacing: "-0.04em",
                textTransform: "uppercase" as const,
                lineHeight: 0.95,
                margin: 0,
              }}
            >
              Pricing Built
              <br />
              Around the Service
              <br />
              You Actually Need.
            </h2>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                paddingBottom: "8px",
              }}
            >
              <p
                style={{
                  fontFamily: sw.font,
                  fontSize: "15px",
                  color: colors.textMuted,
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                Pick the service you need. Pay a flat monthly fee — or a
                one-time lump sum. No bundles, no bloat, no paying for things
                you won't use.
              </p>
              <BillingToggle mode={mode} setMode={setMode} />
            </div>
          </div>
        </div>

        <div
          style={{ display: "grid", paddingTop: "24px", alignItems: "stretch" }}
          className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        >
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} mode={mode} />
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
              borderTop: `2px solid ${sw.white}`,
              borderBottom:
                i === faqItems.length - 1 ? `2px solid ${sw.white}` : "none",
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
                  color: isOpen ? sw.red : sw.white,
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
                  color: isOpen ? sw.red : sw.white,
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
                  color: colors.textDim,
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
        backgroundColor: colors.primaryLight,
        paddingTop: "96px",
        paddingBottom: "96px",
        borderTop: `4px solid ${sw.white}`,
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
              color: sw.white,
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
              color: "#FBF8F3",
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
              (e.currentTarget.style.backgroundColor = "#A3431F")
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
            backgroundColor: colors.white,
            border: `2px solid ${sw.white}`,
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
        backgroundColor: colors.surface,
        paddingTop: "96px",
        paddingBottom: "96px",
        position: "relative",
        overflow: "hidden",
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
              color: "#FBF8F3",
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
              color: "rgba(251,248,243,0.7)",
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
                color: "#FBF8F3",
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
                e.currentTarget.style.backgroundColor = "#A3431F";
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
                color: "rgba(251,248,243,0.45)",
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
              onMouseEnter={(e) => (e.currentTarget.style.color = "#FBF8F3")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(251,248,243,0.45)")
              }
            >
              Download AI Readiness Checklist
            </a>
          </div>

          <p
            style={{
              fontFamily: sw.font,
              fontSize: "12px",
              color: "rgba(251,248,243,0.4)",
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
            {/* RippleGrid in place of center square */}
            <div
              style={{
                position: "absolute",
                top: "10%",
                left: "10%",
                width: "80%",
                height: "80%",
                overflow: "hidden",
              }}
            >
              <RippleGrid
                enableRainbow={false}
                gridColor="#D4C7A9"
                rippleIntensity={0.03}
                gridSize={10}
                gridThickness={15}
                mouseInteraction={true}
                mouseInteractionRadius={1.2}
                opacity={0.8}
              />
            </div>
            {/* Corner marks */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "12%",
                height: "2px",
                backgroundColor: "rgba(251,248,243,0.6)",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "2px",
                height: "12%",
                backgroundColor: "rgba(251,248,243,0.6)",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: "12%",
                height: "2px",
                backgroundColor: "rgba(251,248,243,0.6)",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: "2px",
                height: "12%",
                backgroundColor: "rgba(251,248,243,0.6)",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "12%",
                height: "2px",
                backgroundColor: "rgba(251,248,243,0.6)",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "2px",
                height: "12%",
                backgroundColor: "rgba(251,248,243,0.6)",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                right: 0,
                width: "12%",
                height: "2px",
                backgroundColor: "rgba(251,248,243,0.6)",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                right: 0,
                width: "2px",
                height: "12%",
                backgroundColor: "rgba(251,248,243,0.6)",
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
        backgroundColor: colors.surface,
        borderTop: `1px solid rgba(251,248,243,0.15)`,
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
                  backgroundColor: i === 1 ? sw.red : "rgba(240,240,240,0.4)",
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
    <div style={{ fontFamily: sw.font, backgroundColor: colors.primary }}>
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
