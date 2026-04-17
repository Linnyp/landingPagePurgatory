/*
 * Linax Digital — Landing Page
 * Rebuilt: 2026-04-14
 * Design system: Coastal Clay v2.0
 * Fonts: Fraunces (display) + Inter (body/UI)
 * Pair with: styleguide.md, business-context.md, homepage-wireframe-spec.md
 *
 * SETUP:
 * Fraunces font link is required in app/layout.tsx. See bottom of this file for the <link> tag.
 */

"use client";

import React, { useState, useEffect, useRef } from "react";

// ─── Coastal Clay Design Tokens ────────────────────────────────────────────────

const C = {
  // Sand scale — warm neutrals
  sand950: "#1F1B16",
  sand900: "#2A251D",
  sand800: "#3E372D",
  sand700: "#5C5449",
  sand600: "#78705F",
  sand500: "#8B8171",
  sand400: "#B3A991",
  sand300: "#D4C7A9",
  sand200: "#E5DCC9",
  sand100: "#F3EEE4",
  sand50: "#FBF8F3",
  sand25: "#FFFFFF",
  // Clay scale — terracotta accent
  clay700: "#8A3820",
  clay600: "#A3431F",
  clay500: "#C2552D",
  clay400: "#D47548",
  clay300: "#E39870",
  clay200: "#EFBA9A",
  clay100: "#F7DAC5",
  clay50: "#FBECE0",
  // Semantic
  success: "#4A7C59",
  successLight: "#E7EFE9",
  info: "#4A6B7C",
  infoLight: "#E0E7EB",
} as const;

const F = {
  display: "'Fraunces', Georgia, serif",
  body: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
} as const;

const ease = {
  expo: "cubic-bezier(0.16, 1, 0.3, 1)",
  quart: "cubic-bezier(0.25, 1, 0.5, 1)",
  spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
} as const;

// ─── Global CSS ─────────────────────────────────────────────────────────────────

const globalCSS = `
  @keyframes lx-fadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0);    }
  }
  @keyframes lx-blurIn {
    from { opacity: 0; filter: blur(10px); transform: translateY(10px); }
    to   { opacity: 1; filter: blur(0);    transform: translateY(0);    }
  }
  @keyframes lx-scaleIn {
    from { opacity: 0; transform: scale(0.9); }
    to   { opacity: 1; transform: scale(1);   }
  }
  @keyframes lx-slideRight {
    from { opacity: 0; transform: translateX(-28px); }
    to   { opacity: 1; transform: translateX(0);     }
  }
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }

  /* Base resets scoped to linax page */
  .lx-page *, .lx-page *::before, .lx-page *::after { box-sizing: border-box; }
  .lx-page { margin: 0; padding: 0; background: #FBF8F3; }

  /* Animation reveal states */
  .lx-reveal         { opacity: 0; }
  .lx-reveal.visible { animation: lx-fadeUp    700ms cubic-bezier(0.16,1,0.3,1) forwards; }
  .lx-blur           { opacity: 0; }
  .lx-blur.visible   { animation: lx-blurIn    900ms cubic-bezier(0.25,1,0.5,1) forwards; }
  .lx-scale          { opacity: 0; }
  .lx-scale.visible  { animation: lx-scaleIn   500ms cubic-bezier(0.34,1.56,0.64,1) forwards; }
  .lx-slide          { opacity: 0; }
  .lx-slide.visible  { animation: lx-slideRight 500ms cubic-bezier(0.16,1,0.3,1) forwards; }

  /* Buttons */
  .lx-btn-primary {
    display: inline-flex; align-items: center; gap: 6px;
    background: #C2552D; color: #FBF8F3;
    font-family: 'Inter', sans-serif; font-weight: 600; font-size: 15px;
    padding: 14px 28px; border-radius: 10px; border: none;
    box-shadow: 0 4px 14px rgba(194,85,45,0.20);
    transition: all 300ms cubic-bezier(0.25,1,0.5,1);
    cursor: pointer; text-decoration: none; white-space: nowrap;
  }
  .lx-btn-primary:hover {
    background: #A3431F; transform: translateY(-2px);
    box-shadow: 0 0 24px rgba(194,85,45,0.28);
  }
  .lx-btn-primary:active { background: #8A3820; transform: translateY(0); }
  .lx-btn-primary.lg { padding: 18px 36px; font-size: 16px; border-radius: 12px; }

  .lx-btn-secondary {
    display: inline-flex; align-items: center; gap: 6px;
    background: transparent; color: #1F1B16;
    font-family: 'Inter', sans-serif; font-weight: 600; font-size: 15px;
    padding: 14px 28px; border-radius: 10px;
    border: 1.5px solid #B3A991;
    transition: all 300ms cubic-bezier(0.25,1,0.5,1);
    cursor: pointer; text-decoration: none; white-space: nowrap;
  }
  .lx-btn-secondary:hover {
    border-color: #1F1B16; background: #F3EEE4; transform: translateY(-2px);
    box-shadow: 0 4px 8px -2px rgba(31,27,22,0.06);
  }

  /* Nav links */
  .lx-nav-link {
    position: relative; color: #5C5449; text-decoration: none;
    font-family: 'Inter', sans-serif; font-size: 15px; font-weight: 500;
    transition: color 150ms ease; padding-bottom: 3px;
  }
  .lx-nav-link::after {
    content: ''; position: absolute; bottom: 0; left: 0;
    width: 0; height: 1.5px; background: #C2552D;
    transition: width 300ms cubic-bezier(0.16,1,0.3,1);
  }
  .lx-nav-link:hover { color: #1F1B16; }
  .lx-nav-link:hover::after { width: 100%; }

  /* Card links */
  .lx-card-link {
    position: relative; color: #A3431F; text-decoration: none;
    font-family: 'Inter', sans-serif; font-size: 14px; font-weight: 600;
    display: inline-flex; align-items: center; gap: 4px;
    transition: color 150ms ease;
  }
  .lx-card-link::after {
    content: ''; position: absolute; bottom: -2px; left: 0;
    width: 0; height: 1.5px; background: #C2552D;
    transition: width 300ms cubic-bezier(0.16,1,0.3,1);
  }
  .lx-card-link:hover { color: #8A3820; }
  .lx-card-link:hover::after { width: 100%; }

  /* Service cards */
  .lx-service-card {
    background: #FFFFFF; border: 1px solid #E5DCC9; border-radius: 16px;
    padding: 32px; transition: all 300ms cubic-bezier(0.25,1,0.5,1);
    display: flex; flex-direction: column; gap: 16px;
  }
  .lx-service-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 24px 32px -8px rgba(31,27,22,0.10), 0 8px 12px -4px rgba(31,27,22,0.04);
    border-color: #D4C7A9;
  }
  .lx-service-card.featured { border-top: 3px solid #C2552D; }
  .lx-service-card .lx-icon-wrap {
    width: 48px; height: 48px; border-radius: 10px; flex-shrink: 0;
    background: #FBECE0; display: flex; align-items: center; justify-content: center;
    transition: background 300ms cubic-bezier(0.25,1,0.5,1);
  }
  .lx-service-card:hover .lx-icon-wrap { background: #C2552D; }
  .lx-service-card:hover .lx-icon-wrap svg { stroke: #FBF8F3 !important; }

  /* FAQ accordion */
  .lx-faq-answer {
    overflow: hidden; max-height: 0;
    transition: max-height 300ms cubic-bezier(0.25,1,0.5,1);
  }
  .lx-faq-answer.open { max-height: 600px; }

  /* Footer links */
  .lx-footer-link {
    color: #E5DCC9; text-decoration: none;
    font-family: 'Inter', sans-serif; font-size: 14px; font-weight: 400;
    transition: color 150ms ease; position: relative; padding-bottom: 1px;
  }
  .lx-footer-link::after {
    content: ''; position: absolute; bottom: -1px; left: 0;
    width: 0; height: 1.5px; background: #D47548;
    transition: width 300ms cubic-bezier(0.16,1,0.3,1);
  }
  .lx-footer-link:hover { color: #D47548; }
  .lx-footer-link:hover::after { width: 100%; }

  /* Responsive grids */
  .lx-grid-hero  { display: grid; grid-template-columns: 7fr 5fr; gap: 64px; align-items: center; }
  .lx-grid-2col  { display: grid; grid-template-columns: 1fr 1fr;   gap: 64px; align-items: start; }
  .lx-grid-57    { display: grid; grid-template-columns: 5fr 7fr;   gap: 72px; align-items: center; }
  .lx-grid-faq   { display: grid; grid-template-columns: 5fr 7fr;   gap: 64px; align-items: start; }
  .lx-grid-footer { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 48px; }

  @media (max-width: 1023px) {
    .lx-grid-hero   { grid-template-columns: 1fr; gap: 40px; }
    .lx-grid-2col   { grid-template-columns: 1fr; gap: 40px; }
    .lx-grid-57     { grid-template-columns: 1fr; gap: 40px; }
    .lx-grid-faq    { grid-template-columns: 1fr; gap: 40px; }
    .lx-grid-footer { grid-template-columns: 1fr 1fr; gap: 40px; }
    .lx-tablet-hide { display: none !important; }
  }
  @media (max-width: 639px) {
    .lx-grid-footer { grid-template-columns: 1fr; gap: 32px; }
    .lx-mobile-hide { display: none !important; }
    .lx-section     { padding: 64px 0 !important; }
    .lx-section-lg  { padding: 80px 0 96px !important; }
    .lx-container   { padding-left: 20px !important; padding-right: 20px !important; }
  }
  @media (min-width: 640px) {
    .lx-mobile-show { display: none !important; }
  }
`;

// ─── SVG Icons ────────────────────────────────────────────────────────────────

const strokeProps = (color: string, size: number) => ({
  width: size, height: size, viewBox: "0 0 24 24",
  fill: "none", stroke: color, strokeWidth: 2,
  strokeLinecap: "round" as const, strokeLinejoin: "round" as const,
});

const IcGlobe  = ({ s = 22, c = C.clay600 }: { s?: number; c?: string }) => (
  <svg {...strokeProps(c, s)}>
    <circle cx="12" cy="12" r="10"/>
    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z"/>
  </svg>
);
const IcSearch = ({ s = 22, c = C.clay600 }: { s?: number; c?: string }) => (
  <svg {...strokeProps(c, s)}><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
);
const IcMega   = ({ s = 22, c = C.clay600 }: { s?: number; c?: string }) => (
  <svg {...strokeProps(c, s)}><path d="M3 11l19-9-9 19-2-8-8-2z"/></svg>
);
const IcStar   = ({ s = 22, c = C.clay600 }: { s?: number; c?: string }) => (
  <svg {...strokeProps(c, s)}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
);
const IcCheck  = ({ s = 18, c = C.clay500 }: { s?: number; c?: string }) => (
  <svg {...strokeProps(c, s)} strokeWidth={2.5}><circle cx="12" cy="12" r="10"/><path d="M8 12l3 3 5-5"/></svg>
);
const IcChevron = ({ s = 16, c = C.sand600, open = false }: { s?: number; c?: string; open?: boolean }) => (
  <svg {...strokeProps(c, s)} style={{ transform: open ? "rotate(180deg)" : "none", transition: "transform 300ms cubic-bezier(0.25,1,0.5,1)" }}>
    <path d="M6 9l6 6 6-6"/>
  </svg>
);
const IcMenu = () => (
  <svg {...strokeProps(C.sand950, 24)}>
    <line x1="4" y1="6" x2="20" y2="6"/>
    <line x1="4" y1="12" x2="20" y2="12"/>
    <line x1="4" y1="18" x2="20" y2="18"/>
  </svg>
);
const IcX = () => (
  <svg {...strokeProps(C.sand950, 24)}><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
);
const IcPin = ({ s = 14, c = C.info }: { s?: number; c?: string }) => (
  <svg {...strokeProps(c, s)}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
);

// ─── Hooks ────────────────────────────────────────────────────────────────────

function useScrolled(threshold = 80) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > threshold);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, [threshold]);
  return scrolled;
}

function useReveal() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        el.querySelectorAll<HTMLElement>(".lx-reveal, .lx-blur, .lx-scale, .lx-slide").forEach((child) => {
          const delay = parseInt(child.dataset.delay ?? "0", 10);
          setTimeout(() => child.classList.add("visible"), delay);
        });
        obs.disconnect();
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

// ─── Eyebrow ──────────────────────────────────────────────────────────────────

const Eyebrow = ({ children, style = {} }: { children: React.ReactNode; style?: React.CSSProperties }) => (
  <p style={{
    fontFamily: F.body, fontSize: 12, fontWeight: 600,
    color: C.clay500, letterSpacing: "0.1em", textTransform: "uppercase",
    marginBottom: 16, ...style,
  }}>
    {children}
  </p>
);

// ─── Navigation ───────────────────────────────────────────────────────────────

function Nav() {
  const scrolled = useScrolled();
  const [open, setOpen] = useState(false);

  const navLinks: [string, string][] = [
    ["#services", "Services"],
    ["#process", "How We Work"],
    ["/about", "About"],
    ["#faq", "FAQ"],
  ];

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? "rgba(251,248,243,0.92)" : "rgba(251,248,243,0.6)",
        backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)",
        borderBottom: `1px solid ${scrolled ? C.sand200 : "transparent"}`,
        boxShadow: scrolled ? "0 1px 3px rgba(31,27,22,0.05),0 1px 2px rgba(31,27,22,0.03)" : "none",
        transition: `all 300ms ${ease.quart}`,
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px", height: 68, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Logo */}
          <a href="#" style={{ textDecoration: "none" }}>
            <span style={{ fontFamily: F.display, fontSize: 22, fontWeight: 600, color: C.sand950, letterSpacing: "-0.01em", fontVariationSettings: '"opsz" 48' }}>
              Linax<span style={{ color: C.clay500 }}>.</span>
            </span>
          </a>

          {/* Desktop nav links */}
          <div style={{ display: "flex", gap: 32, alignItems: "center" }} className="lx-tablet-hide">
            {navLinks.map(([href, label]) => (
              <a key={href} href={href} className="lx-nav-link">{label}</a>
            ))}
          </div>

          {/* Right side */}
          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <a href="#book" className="lx-btn-primary" style={{ fontSize: 14, padding: "10px 20px" }}>
              Book a free consult →
            </a>
            <button
              onClick={() => setOpen(true)}
              className="lx-mobile-show"
              style={{ background: "none", border: "none", cursor: "pointer", padding: 4, display: "none" }}
              aria-label="Open menu"
            >
              <IcMenu />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile full-screen menu */}
      {open && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 200,
          background: C.sand50, display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center", gap: 40,
        }}>
          <button
            onClick={() => setOpen(false)}
            style={{ position: "absolute", top: 20, right: 24, background: "none", border: "none", cursor: "pointer" }}
            aria-label="Close menu"
          >
            <IcX />
          </button>
          {navLinks.map(([href, label], i) => (
            <a
              key={href} href={href} onClick={() => setOpen(false)}
              style={{
                fontFamily: F.display, fontSize: 32, fontWeight: 500,
                color: C.sand950, textDecoration: "none",
                fontVariationSettings: '"opsz" 48',
                animation: `lx-fadeUp 400ms ${ease.expo} ${i * 80}ms both`,
              }}
            >
              {label}
            </a>
          ))}
          <a href="#book" className="lx-btn-primary" onClick={() => setOpen(false)} style={{ marginTop: 8 }}>
            Book a free consult →
          </a>
        </div>
      )}
    </>
  );
}

// ─── Section 2: Hero ──────────────────────────────────────────────────────────

function Hero() {
  return (
    <section style={{
      background: `radial-gradient(ellipse 80% 50% at 50% 0%, rgba(194,85,45,0.04) 0%, transparent 60%), ${C.sand50}`,
      padding: "148px 0 96px",
    }} className="lx-section-hero">
      <div className="lx-container" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
        <div className="lx-grid-hero">
          {/* Left — text content */}
          <div>
            <Eyebrow style={{ animation: `lx-fadeUp 700ms ${ease.expo} 50ms both` }}>
              Digital Marketing for Southwest Florida
            </Eyebrow>

            <h1 style={{
              fontFamily: F.display,
              fontSize: "clamp(40px, 5.5vw, 56px)",
              fontWeight: 500,
              color: C.sand950,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              marginBottom: 24,
              maxWidth: 560,
              fontVariationSettings: '"opsz" 144, "SOFT" 50',
              animation: `lx-blurIn 900ms ${ease.quart} 150ms both`,
            }}>
              Local marketing that <em>actually</em> works.
            </h1>

            <p style={{
              fontFamily: F.body, fontSize: 18, fontWeight: 400,
              color: C.sand700, lineHeight: 1.65, maxWidth: 560,
              marginBottom: 36,
              animation: `lx-fadeUp 700ms ${ease.expo} 300ms both`,
            }}>
              We build websites, run ads, and manage your online reputation so your phone keeps ringing and you can get back to running your business. No account managers. No jargon. Just the marketing your local business needs, done by someone who actually does the work.
            </p>

            <div style={{
              display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 32,
              animation: `lx-fadeUp 700ms ${ease.expo} 420ms both`,
            }}>
              <a href="#book" className="lx-btn-primary lg">Book a free consult →</a>
              <a href="#services" className="lx-btn-secondary">See what we do</a>
            </div>

            <div style={{
              display: "flex", gap: 24, flexWrap: "wrap", alignItems: "center",
              animation: `lx-fadeUp 700ms ${ease.expo} 520ms both`,
            }}>
              {[
                "Based in Cape Coral, FL",
                "Month-to-month on SEO, Ads & Reputation",
                "Free initial audit",
              ].map((sig) => (
                <span key={sig} style={{ fontFamily: F.body, fontSize: 13, fontWeight: 500, color: C.sand600, display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ color: C.clay400, fontSize: 8 }}>●</span>{sig}
                </span>
              ))}
            </div>
          </div>

          {/* Right — founder quote block (placeholder until photo) */}
          <div
            className="lx-tablet-hide"
            style={{
              background: C.clay50,
              border: `1px solid ${C.clay100}`,
              borderRadius: 24,
              padding: "48px 40px",
              display: "flex", flexDirection: "column", justifyContent: "center",
              animation: `lx-fadeUp 1.2s ${ease.expo} 350ms both`,
            }}
          >
            <p style={{
              fontFamily: F.display,
              fontSize: 22, fontWeight: 400, fontStyle: "italic",
              color: C.sand800, lineHeight: 1.55, marginBottom: 20,
              fontVariationSettings: '"opsz" 48',
            }}>
              "I build the sites, I run the campaigns, I answer the phone."
            </p>
            <p style={{ fontFamily: F.body, fontSize: 14, fontWeight: 500, color: C.sand600, marginBottom: 32 }}>
              — Linax Digital Founder
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                "Websites on Next.js & React — not templates",
                "Google & Meta Ads actively managed",
                "Reputation Management with Go High Level",
              ].map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                  <span style={{ flexShrink: 0, marginTop: 1 }}><IcCheck s={16} /></span>
                  <span style={{ fontFamily: F.body, fontSize: 13, color: C.sand700, lineHeight: 1.5 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Section 3: Trust Bar ─────────────────────────────────────────────────────

function TrustBar() {
  const ref = useReveal();
  const badges = [
    { bg: C.sand100, fg: C.sand900, label: "Serving SWFL since 2022" },
    { bg: C.infoLight, fg: C.info, label: "Based in Cape Coral, FL", icon: <IcPin /> },
    { bg: C.clay50, fg: C.clay700, label: "Month-to-month on ongoing services" },
    { bg: C.clay50, fg: C.clay700, label: "Ad ROAS guarantee: 2:1 or don't pay" },
  ];
  return (
    <section style={{ background: C.sand25, borderTop: `1px solid ${C.sand200}`, borderBottom: `1px solid ${C.sand200}` }}>
      <div ref={ref as React.RefObject<HTMLDivElement>} className="lx-container" style={{ maxWidth: 1200, margin: "0 auto", padding: "48px 32px", display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center", alignItems: "center" }}>
        {badges.map((b, i) => (
          <div key={b.label} className="lx-scale" data-delay={`${i * 100}`} style={{
            background: b.bg, color: b.fg, borderRadius: 9999,
            padding: "8px 16px",
            fontFamily: F.body, fontSize: 13, fontWeight: 600,
            display: "flex", alignItems: "center", gap: 8,
          }}>
            {b.icon}{b.label}
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Section 4: Problem Agitation ────────────────────────────────────────────

const PAINS = [
  "Your website looks dated and doesn't convert visitors to leads",
  "Your Google Business Profile is incomplete or under-optimized",
  "Your reviews are old, scattered, or not being responded to",
  "Your leads slip through the cracks when you're on a job",
  "Your competitors are ranking above you on local searches",
  "You've tried an agency before and got burned",
];

function Problem() {
  const ref = useReveal();
  return (
    <section style={{ background: C.sand100, padding: "96px 0" }} className="lx-section">
      <div ref={ref as React.RefObject<HTMLDivElement>} className="lx-container" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
        <div className="lx-grid-2col">
          {/* Left */}
          <div>
            <Eyebrow><span className="lx-reveal" data-delay="0">Sound familiar?</span></Eyebrow>
            <h2 className="lx-reveal" data-delay="80" style={{
              fontFamily: F.display, fontSize: "clamp(28px,3.5vw,40px)", fontWeight: 500,
              color: C.sand950, lineHeight: 1.15, letterSpacing: "-0.02em",
              marginBottom: 24, fontVariationSettings: '"opsz" 144, "SOFT" 50',
            }}>
              Your phone should be ringing more.
            </h2>
            <p className="lx-reveal" data-delay="160" style={{
              fontFamily: F.body, fontSize: 17, fontWeight: 400,
              color: C.sand700, lineHeight: 1.65, maxWidth: 520,
            }}>
              You know your website is dated. You know your Google Business Profile needs work. You know your reviews are stale and your competitors are pulling ahead. You know all of this — and you've also been too busy running your actual business to fix any of it. You don't need someone to tell you what's broken. You need someone to actually fix it.
            </p>
          </div>
          {/* Right — pain checklist */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16, paddingTop: 56 }}>
            {PAINS.map((pain, i) => (
              <div key={pain} className="lx-reveal" data-delay={`${(i + 3) * 80}`} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                <span style={{ flexShrink: 0, marginTop: 2 }}><IcCheck /></span>
                <span style={{ fontFamily: F.body, fontSize: 16, fontWeight: 400, color: C.sand800, lineHeight: 1.6 }}>{pain}</span>
              </div>
            ))}
          </div>
        </div>
        <p style={{
          fontFamily: F.display, fontSize: 20, fontStyle: "italic",
          color: C.sand800, textAlign: "center", marginTop: 64,
          fontVariationSettings: '"opsz" 48',
        }}>
          If any of this sounds familiar, you're in exactly the right place.
        </p>
      </div>
    </section>
  );
}

// ─── Section 5: Services ──────────────────────────────────────────────────────

const SERVICES = [
  {
    icon: <IcGlobe />, title: "Websites", featured: false,
    desc: "Fast, modern websites built on the same frameworks top tech companies use. Mobile-first, SEO-optimized, and designed to turn visitors into phone calls.",
    price: "$3,000 one-time, or $180/month (12-month minimum)",
    href: "/services/websites",
  },
  {
    icon: <IcSearch />, title: "Local SEO", featured: false,
    desc: "Get found when local customers search for what you do. We handle keyword research, Google Business Profile, local citations, content, and backlinks — the whole foundation.",
    price: "$600 one-time setup, then $300/month ongoing",
    href: "/services/seo",
  },
  {
    icon: <IcMega />, title: "Google & Meta Ads", featured: false,
    desc: "Ads that actually work because they're actually managed. Full campaign setup, ongoing optimization, monthly reporting — and if ROAS drops below 2:1, you don't pay.",
    price: "$300/month minimum or 10% of ad spend, capped at $2,000/month",
    href: "/services/ads",
  },
  {
    icon: <IcStar />, title: "Reputation Management", featured: true, badge: "Most popular",
    desc: "Never chase a review again. We run the system that generates reviews, manages customer conversations, and keeps everything in one inbox you can actually use.",
    price: "$195/month — includes CRM and unified inbox access",
    href: "/services/reputation",
  },
];

function Services() {
  const ref = useReveal();
  return (
    <section id="services" style={{ background: C.sand50, padding: "96px 0" }} className="lx-section">
      <div ref={ref as React.RefObject<HTMLDivElement>} className="lx-container" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <Eyebrow><span className="lx-reveal" data-delay="0">What we do</span></Eyebrow>
          <h2 className="lx-reveal" data-delay="80" style={{
            fontFamily: F.display, fontSize: "clamp(28px,3.5vw,40px)", fontWeight: 500,
            color: C.sand950, lineHeight: 1.15, letterSpacing: "-0.02em",
            marginBottom: 16, fontVariationSettings: '"opsz" 144, "SOFT" 50',
          }}>
            Everything your local business needs to grow online.
          </h2>
          <p className="lx-reveal" data-delay="160" style={{
            fontFamily: F.body, fontSize: 17, fontWeight: 400, color: C.sand700,
            maxWidth: 600, margin: "0 auto", lineHeight: 1.6,
          }}>
            Four core services. Transparent pricing. No long-term lock-in on anything except your website.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 28 }}>
          {SERVICES.map((svc, i) => (
            <div
              key={svc.title}
              className={`lx-service-card lx-reveal${svc.featured ? " featured" : ""}`}
              data-delay={`${(i + 3) * 90}`}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div className="lx-icon-wrap">{svc.icon}</div>
                {svc.featured && (
                  <span style={{
                    background: C.clay100, color: C.clay700,
                    fontFamily: F.body, fontSize: 12, fontWeight: 600,
                    borderRadius: 9999, padding: "4px 12px",
                  }}>
                    {svc.badge}
                  </span>
                )}
              </div>
              <div>
                <h3 style={{ fontFamily: F.display, fontSize: 24, fontWeight: 500, color: C.sand950, marginBottom: 8, fontVariationSettings: '"opsz" 48' }}>
                  {svc.title}
                </h3>
                <p style={{ fontFamily: F.body, fontSize: 15, fontWeight: 400, color: C.sand700, lineHeight: 1.6 }}>
                  {svc.desc}
                </p>
              </div>
              <p style={{ fontFamily: F.body, fontSize: 14, fontWeight: 600, color: C.sand900 }}>{svc.price}</p>
              <a href={svc.href} className="lx-card-link">See details →</a>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 48 }}>
          <a href="/pricing" className="lx-btn-secondary">View full pricing details →</a>
        </div>
      </div>
    </section>
  );
}

// ─── Section 6: Results Snapshot (fallback — no quantified stats yet) ─────────

function Results() {
  const ref = useReveal();
  return (
    <section style={{ background: C.sand100, padding: "96px 0" }} className="lx-section">
      <div ref={ref as React.RefObject<HTMLDivElement>} className="lx-container" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <Eyebrow><span className="lx-reveal" data-delay="0">How we think about results</span></Eyebrow>
          <h2 className="lx-reveal" data-delay="80" style={{
            fontFamily: F.display, fontSize: "clamp(28px,3.5vw,40px)", fontWeight: 500,
            color: C.sand950, lineHeight: 1.15, letterSpacing: "-0.02em",
            fontVariationSettings: '"opsz" 144, "SOFT" 50',
          }}>
            Honest about what moves and when.
          </h2>
        </div>

        <div className="lx-reveal" data-delay="160" style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
          <p style={{
            fontFamily: F.display, fontSize: 26, fontWeight: 400, fontStyle: "italic",
            color: C.sand800, lineHeight: 1.55, marginBottom: 32,
            fontVariationSettings: '"opsz" 48',
          }}>
            "Results are earned, not promised. Every engagement starts with an honest audit of where you are — and every month you'll know exactly what's moving and what it's costing you."
          </p>
          <p style={{ fontFamily: F.body, fontSize: 14, fontWeight: 500, color: C.sand600, marginBottom: 40 }}>
            — Linax Digital Founder
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 16, textAlign: "left" }}>
            {[
              "Websites launch in 2–4 weeks. You review and approve at every step before anything goes live.",
              "Ads can start delivering leads within 1–2 weeks. You see every dollar spent and every result measured.",
              "SEO is a 3–6 month build — local SEO compounds over time, and we report on every metric that matters every month.",
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <span style={{ flexShrink: 0, marginTop: 2 }}><IcCheck /></span>
                <span style={{ fontFamily: F.body, fontSize: 16, color: C.sand700, lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: F.body, fontSize: 14, color: C.sand500, marginTop: 32 }}>
            Current clients include Four Leaf Charters, Verona Cabinets, Mycelia Foundation, Virtue Sod, and Mega Kovas. Case studies coming as engagements mature.
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Section 7: Process ───────────────────────────────────────────────────────

const STEPS = [
  { n: "1", title: "Free call",       desc: "15-minute discovery call. No pitch, no pressure.",                                               dur: "15 minutes", final: false },
  { n: "2", title: "Audit & plan",    desc: "We review your current digital presence and build a plan tailored to your business.",             dur: "3–5 days",   final: false },
  { n: "3", title: "Build & launch",  desc: "We execute the plan. You review and approve at every step. No surprises.",                        dur: "2–4 weeks",  final: false },
  { n: "4", title: "Grow & optimize", desc: "Ongoing optimization, monthly reporting, and direct access to the person doing the work.",         dur: "Ongoing",    final: true  },
];

function Process() {
  const ref = useReveal();
  return (
    <section id="process" style={{ background: C.sand50, padding: "96px 0" }} className="lx-section">
      <div ref={ref as React.RefObject<HTMLDivElement>} className="lx-container" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <Eyebrow><span className="lx-reveal" data-delay="0">How we work</span></Eyebrow>
          <h2 className="lx-reveal" data-delay="80" style={{
            fontFamily: F.display, fontSize: "clamp(28px,3.5vw,40px)", fontWeight: 500,
            color: C.sand950, lineHeight: 1.15, letterSpacing: "-0.02em",
            marginBottom: 16, fontVariationSettings: '"opsz" 144, "SOFT" 50',
          }}>
            Four steps. No surprises.
          </h2>
          <p className="lx-reveal" data-delay="160" style={{
            fontFamily: F.body, fontSize: 17, fontWeight: 400, color: C.sand700,
            maxWidth: 600, margin: "0 auto", lineHeight: 1.6,
          }}>
            Here's exactly what happens when you work with us, from the first call to your first report.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 32, marginBottom: 56 }}>
          {STEPS.map((step, i) => (
            <div key={step.n} className="lx-slide" data-delay={`${i * 150}`} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{
                width: 44, height: 44, borderRadius: "50%",
                background: step.final ? C.clay500 : C.sand950,
                color: C.sand50,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: F.display, fontSize: 20, fontWeight: 600,
                fontVariationSettings: '"opsz" 24',
              }}>
                {step.n}
              </div>
              <div>
                <h3 style={{ fontFamily: F.display, fontSize: 20, fontWeight: 500, color: C.sand950, marginBottom: 8, fontVariationSettings: '"opsz" 48' }}>
                  {step.title}
                </h3>
                <p style={{ fontFamily: F.body, fontSize: 14, fontWeight: 400, color: C.sand600, lineHeight: 1.6, marginBottom: 8 }}>
                  {step.desc}
                </p>
                <p style={{ fontFamily: F.body, fontSize: 13, fontWeight: 500, color: C.clay600 }}>{step.dur}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <a href="#book" className="lx-btn-primary lg">Book your free call →</a>
        </div>
      </div>
    </section>
  );
}

// ─── Section 8: Testimonials (Option C — placeholder) ────────────────────────

function Testimonials() {
  const ref = useReveal();
  return (
    <section style={{ background: C.clay50, padding: "96px 0" }} className="lx-section">
      <div ref={ref as React.RefObject<HTMLDivElement>} className="lx-container" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px", textAlign: "center" }}>
        <Eyebrow><span className="lx-reveal" data-delay="0">What clients say</span></Eyebrow>
        <h2 className="lx-reveal" data-delay="80" style={{
          fontFamily: F.display, fontSize: "clamp(28px,3.5vw,40px)", fontWeight: 500,
          color: C.sand950, lineHeight: 1.15, letterSpacing: "-0.02em",
          marginBottom: 24, fontVariationSettings: '"opsz" 144, "SOFT" 50',
        }}>
          Real words from real local businesses.
        </h2>
        <div className="lx-reveal" data-delay="160" style={{ maxWidth: 680, margin: "0 auto" }}>
          <p style={{ fontFamily: F.body, fontSize: 17, fontWeight: 400, color: C.sand700, lineHeight: 1.65, marginBottom: 20 }}>
            We're collecting testimonials as our client engagements mature — and we'd rather show you real words from real clients than a wall of manufactured praise.
          </p>
          <p style={{ fontFamily: F.body, fontSize: 17, fontWeight: 400, color: C.sand700, lineHeight: 1.65, marginBottom: 36 }}>
            If you'd like to speak with a current client directly before booking, just ask. We'll make the introduction.
          </p>
          <a href="#book" className="lx-btn-primary">Get a client reference →</a>
        </div>
      </div>
    </section>
  );
}

// ─── Section 9: Local Proof ───────────────────────────────────────────────────

function LocalProof() {
  const ref = useReveal();
  return (
    <section style={{ background: C.sand50, padding: "96px 0" }} className="lx-section">
      <div ref={ref as React.RefObject<HTMLDivElement>} className="lx-container" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
        <div className="lx-grid-57">
          {/* Left — photo placeholder */}
          <div
            className="lx-reveal lx-tablet-hide"
            data-delay="0"
            style={{
              background: C.sand100, borderRadius: 24,
              aspectRatio: "4/5",
              display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center",
              padding: 40, textAlign: "center",
              border: `1px solid ${C.sand200}`,
            }}
          >
            <p style={{
              fontFamily: F.display, fontSize: 26, fontWeight: 400, fontStyle: "italic",
              color: C.sand700, lineHeight: 1.5,
              fontVariationSettings: '"opsz" 48',
            }}>
              "We know your busy season, your slow season, and the way your customers actually search."
            </p>
          </div>

          {/* Right — content */}
          <div>
            <Eyebrow><span className="lx-reveal" data-delay="80">From here, for here</span></Eyebrow>
            <h2 className="lx-reveal" data-delay="160" style={{
              fontFamily: F.display, fontSize: "clamp(28px,3.5vw,40px)", fontWeight: 500,
              color: C.sand950, lineHeight: 1.15, letterSpacing: "-0.02em",
              marginBottom: 24, fontVariationSettings: '"opsz" 144, "SOFT" 50',
            }}>
              Built in Cape Coral. Built for Southwest Florida.
            </h2>
            <p className="lx-reveal" data-delay="240" style={{
              fontFamily: F.body, fontSize: 17, fontWeight: 400, color: C.sand700,
              lineHeight: 1.65, maxWidth: 520, marginBottom: 32,
            }}>
              We're not a national agency with a Florida sales rep. We live here. We know the verticals — home services, marine and charter, specialty contractors, local retail. We know your busy season, your slow season, and the way your customers actually search for what you do. And when you need us, you can find us — not a ticket queue.
            </p>
            <div className="lx-reveal" data-delay="320" style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {["Lee County", "Collier County", "Charlotte County"].map((c) => (
                <span key={c} style={{
                  background: C.sand100, color: C.sand900,
                  fontFamily: F.body, fontSize: 13, fontWeight: 600,
                  borderRadius: 9999, padding: "6px 14px",
                  border: `1px solid ${C.sand200}`,
                }}>
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Section 10: FAQ ─────────────────────────────────────────────────────────

const FAQS = [
  {
    q: "How much does this cost?",
    a: "Our pricing is on the website — no 'contact us for a quote' runaround. Websites start at $3,000 one-time or $180/month on a 12-month subscription. SEO Foundation is $600 one-time, then $300/month ongoing. Ads are $300/month minimum or 10% of ad spend, capped at $2,000/month. Reputation Management is $195/month. No hidden fees.",
  },
  {
    q: "Do I have to sign a long-term contract?",
    a: "No on most services. SEO, Ads, and Reputation Management are all month-to-month — cancel anytime. The only long-term commitment is the Website subscription, which has a 12-month minimum. That exists because we're subsidizing a $3,000 build into an affordable monthly payment. If you cancel early, the full build fee applies. Complete 12 months and you keep your domain and all assets.",
  },
  {
    q: "What happens if the ads don't work?",
    a: "For Ads engagements, if your ROAS drops below 2:1, you don't pay management fees for that period. We state this upfront because we only take on ad clients where we think we can deliver — if the numbers aren't there, you shouldn't have to pay for our time.",
  },
  {
    q: "Who actually does the work?",
    a: "The founder, directly. No handoffs to account managers, no outsourcing to offshore production. For specialized work — design, content, link building — we bring in vetted subcontractors managed directly by the founder. You talk to the person doing the work.",
  },
  {
    q: "How long until I see results?",
    a: "Websites launch in 2–4 weeks. Ads can start delivering leads within 1–2 weeks. SEO is a 3–6 month build — local SEO compounds over time, and anyone promising overnight rankings isn't being straight with you. Reputation Management compounds over months as review volume grows. We set honest expectations from the first call.",
  },
  {
    q: "Do you work with businesses outside Southwest Florida?",
    a: "Our focus is Lee, Collier, and Charlotte counties because local expertise compounds. For digital-only services we're open to nearby markets on a case-by-case basis. Reach out and we'll have an honest conversation.",
  },
];

function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const ref = useReveal();

  return (
    <section id="faq" style={{ background: C.sand100, padding: "96px 0" }} className="lx-section">
      <div ref={ref as React.RefObject<HTMLDivElement>} className="lx-container" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
        <div className="lx-grid-faq">
          {/* Left — sticky header */}
          <div style={{ position: "sticky", top: 96 }}>
            <Eyebrow><span className="lx-reveal" data-delay="0">Common questions</span></Eyebrow>
            <h2 className="lx-reveal" data-delay="80" style={{
              fontFamily: F.display, fontSize: "clamp(26px,3vw,40px)", fontWeight: 500,
              color: C.sand950, lineHeight: 1.15, letterSpacing: "-0.02em",
              marginBottom: 20, fontVariationSettings: '"opsz" 144, "SOFT" 50',
            }}>
              Questions we hear a lot.
            </h2>
            <p className="lx-reveal" data-delay="160" style={{
              fontFamily: F.body, fontSize: 16, fontWeight: 400, color: C.sand700,
              lineHeight: 1.65, maxWidth: 360, marginBottom: 32,
            }}>
              Don't see yours? The discovery call is where we answer everything else — 15 minutes, no pitch, no pressure.
            </p>
            <a href="#book" className="lx-btn-primary lx-reveal" data-delay="240">Book a call →</a>
          </div>

          {/* Right — accordion */}
          <div className="lx-reveal" data-delay="160">
            {FAQS.map((faq, i) => {
              const isOpen = openIdx === i;
              return (
                <div key={faq.q} style={{ borderBottom: `1.5px solid ${isOpen ? C.clay200 : C.sand200}`, transition: "border-color 150ms ease" }}>
                  <button
                    onClick={() => setOpenIdx(isOpen ? null : i)}
                    style={{
                      width: "100%", display: "flex", justifyContent: "space-between",
                      alignItems: "center", padding: "20px 0",
                      background: "none", border: "none", cursor: "pointer", textAlign: "left",
                    }}
                    aria-expanded={isOpen}
                  >
                    <span style={{
                      fontFamily: F.body, fontSize: 17, fontWeight: 600,
                      color: isOpen ? C.clay600 : C.sand950,
                      transition: "color 150ms ease",
                      paddingRight: 16,
                    }}>
                      {faq.q}
                    </span>
                    <span style={{ flexShrink: 0 }}>
                      <IcChevron open={isOpen} c={isOpen ? C.clay600 : C.sand600} />
                    </span>
                  </button>
                  <div className={`lx-faq-answer${isOpen ? " open" : ""}`}>
                    <p style={{
                      fontFamily: F.body, fontSize: 16, fontWeight: 400,
                      color: C.sand700, lineHeight: 1.65, paddingBottom: 20,
                    }}>
                      {faq.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Section 11: Final CTA ────────────────────────────────────────────────────

function FinalCTA() {
  const ref = useReveal();
  return (
    <section id="book" style={{ background: C.sand900, padding: "128px 0 96px" }} className="lx-section-lg">
      <div ref={ref as React.RefObject<HTMLDivElement>} className="lx-container" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px", textAlign: "center" }}>
        <h2
          className="lx-blur"
          data-delay="0"
          style={{
            fontFamily: F.display,
            fontSize: "clamp(32px, 5vw, 48px)",
            fontWeight: 500,
            color: C.sand50,
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            maxWidth: 720, margin: "0 auto 24px",
            fontVariationSettings: '"opsz" 144, "SOFT" 50',
          }}
        >
          Let's make your phone ring more.
        </h2>
        <p className="lx-reveal" data-delay="200" style={{
          fontFamily: F.body, fontSize: 18, fontWeight: 400,
          color: C.sand300, maxWidth: 560, margin: "0 auto 40px", lineHeight: 1.65,
        }}>
          15-minute discovery call. No pitch, no pressure, no obligation. Just a plain conversation about what your business needs and whether we can help.
        </p>
        <a
          href="https://calendly.com"
          target="_blank"
          rel="noopener noreferrer"
          className="lx-btn-primary lg lx-reveal"
          data-delay="350"
        >
          Book your free consult →
        </a>
        <p className="lx-reveal" data-delay="450" style={{
          fontFamily: F.body, fontSize: 14, fontWeight: 400,
          color: C.sand400, marginTop: 16,
        }}>
          Month-to-month on SEO, Ads, and Reputation Management. No long-term lock-in. Cancel anytime.
        </p>
      </div>
    </section>
  );
}

// ─── Section 12: Footer ───────────────────────────────────────────────────────

function Footer() {
  const cols = {
    Services: [
      { label: "Websites",             href: "/services/websites"   },
      { label: "Local SEO",            href: "/services/seo"        },
      { label: "Ads",                  href: "/services/ads"        },
      { label: "Reputation Management",href: "/services/reputation" },
      { label: "Pricing",              href: "/pricing"             },
    ],
    Company: [
      { label: "About",      href: "/about"          },
      { label: "How We Work",href: "/process"        },
      { label: "Contact",    href: "/contact"        },
      { label: "Book a Call",href: "https://calendly.com" },
    ],
    Resources: [
      { label: "Free Audit",   href: "/audit"        },
      { label: "Case Studies", href: "/case-studies" },
      { label: "FAQ",          href: "#faq"          },
    ],
  } as const;

  return (
    <footer style={{ background: C.sand900 }}>
      <div style={{ borderTop: `1px solid ${C.sand800}` }} />
      <div className="lx-container" style={{ maxWidth: 1200, margin: "0 auto", padding: "96px 32px 48px" }}>
        <div className="lx-grid-footer">
          {/* Brand column */}
          <div>
            <a href="#" style={{ textDecoration: "none", display: "inline-block", marginBottom: 16 }}>
              <span style={{ fontFamily: F.display, fontSize: 24, fontWeight: 600, color: C.sand50, fontVariationSettings: '"opsz" 48' }}>
                Linax<span style={{ color: C.clay400 }}>.</span>
              </span>
            </a>
            <p style={{ fontFamily: F.body, fontSize: 15, fontWeight: 400, color: C.sand300, lineHeight: 1.65, maxWidth: 280, marginBottom: 24 }}>
              Founder-led digital marketing for local service businesses in Southwest Florida. Websites, SEO, Ads, and Reputation Management — done by the person building it.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <span style={{ fontFamily: F.body, fontSize: 14, fontWeight: 500, color: C.sand200 }}>Cape Coral, FL</span>
              <a
                href="tel:+12390000000"
                style={{ fontFamily: F.body, fontSize: 14, fontWeight: 500, color: C.sand200, textDecoration: "none", transition: "color 150ms ease" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = C.clay400)}
                onMouseLeave={(e) => (e.currentTarget.style.color = C.sand200)}
              >
                (239) XXX-XXXX
              </a>
              <a
                href="mailto:hello@linaxdigital.com"
                style={{ fontFamily: F.body, fontSize: 14, fontWeight: 500, color: C.sand200, textDecoration: "none", transition: "color 150ms ease" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = C.clay400)}
                onMouseLeave={(e) => (e.currentTarget.style.color = C.sand200)}
              >
                hello@linaxdigital.com
              </a>
            </div>
          </div>

          {/* Link columns */}
          {(Object.entries(cols) as [string, readonly { label: string; href: string }[]][]).map(([col, items]) => (
            <div key={col}>
              <p style={{ fontFamily: F.body, fontSize: 12, fontWeight: 600, color: C.sand400, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 20 }}>
                {col}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {items.map((item) => (
                  <a key={item.label} href={item.href} className="lx-footer-link">{item.label}</a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: `1px solid ${C.sand800}` }}>
        <div className="lx-container" style={{ maxWidth: 1200, margin: "0 auto", padding: "24px 32px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <span style={{ fontFamily: F.body, fontSize: 13, color: C.sand500 }}>© 2026 Linax Digital. All rights reserved.</span>
          <div style={{ display: "flex", gap: 20 }}>
            {["Privacy", "Terms", "Accessibility"].map((item) => (
              <a
                key={item}
                href={`/${item.toLowerCase()}`}
                style={{ fontFamily: F.body, fontSize: 13, color: C.sand500, textDecoration: "none", transition: "color 150ms ease" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = C.clay400)}
                onMouseLeave={(e) => (e.currentTarget.style.color = C.sand500)}
              >
                {item}
              </a>
            ))}
          </div>
          <span style={{ fontFamily: F.body, fontSize: 13, fontStyle: "italic", color: C.sand500 }}>
            Made in Southwest Florida
          </span>
        </div>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function LinaxDigitalPage() {
  return (
    <div className="lx-page">
      <style dangerouslySetInnerHTML={{ __html: globalCSS }} />
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <Problem />
        <Services />
        <Results />
        <Process />
        <Testimonials />
        <LocalProof />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

/*
 * ─── FONT SETUP ─────────────────────────────────────────────────────────────
 * Add this inside <head> in app/layout.tsx:
 *
 * <link rel="preconnect" href="https://fonts.googleapis.com" />
 * <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
 * <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400;1,9..144,500&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
 */
