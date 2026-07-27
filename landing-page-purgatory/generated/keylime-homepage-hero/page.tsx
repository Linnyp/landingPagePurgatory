/*
 * KeyLime Marketing — Homepage Hero (mockup)
 * Generated: 2026-05-18
 * Style: Agencia X (Webflow template) structure · Citrus & Charcoal palette · v4.0
 *
 * Mirrors styleguide.md: warm-neutral surfaces, single lime accent used with
 * discipline, pill-shaped buttons (80px radius), soft Neutral Shadow elevation,
 * letter-spacing -0.03em on every text style. Display 10 (60px) on the H1.
 *
 * Copy is locked from homepage-copy.md §1 (loss-led hero).
 */

"use client";

import { useState, type CSSProperties } from "react";

/* ─────────────────────────────────────────────────────────────────────────── */
/* Design tokens (mirrors KeyLime styleguide.md §14)                            */
/* ─────────────────────────────────────────────────────────────────────────── */

const t = {
  font: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
  tracking: "-0.03em",

  // Neutral scale
  n100: "#FFFFFF",
  n200: "#F0F2EB",
  n300: "#DCDDD7",
  n400: "#C7C9C3",
  n500: "#898B85",
  n600: "#4F524B",
  n700: "#292B26",
  n800: "#1C1E1A",

  // Primary (lime)
  p01: "#A4D639",
  p02: "#6FA51F",
  p03: "#588817",
  p04: "#436C0E",
  pageBg: "#FBFBF7",

  // Soft semantic
  greenSoft: "#ECF6CF",
  redSoft: "#F5E2DF",

  // Shadows
  shadow02: "0 1px 4px 0 rgba(28, 30, 26, 0.08)",
  shadow03: "0 2px 6px 0 rgba(28, 30, 26, 0.14)",
  shadow04: "0 4px 14px 0 rgba(28, 30, 26, 0.18)",
  shadow05: "0 12px 26px 0 rgba(28, 30, 26, 0.18)",
  primaryShadow03: "0 2px 6px 0 rgba(111, 165, 31, 0.22)",
  primaryShadow04: "0 4px 14px 0 rgba(111, 165, 31, 0.24)",
} as const;

/* ─────────────────────────────────────────────────────────────────────────── */
/* Layout primitives                                                            */
/* ─────────────────────────────────────────────────────────────────────────── */

const containerStyle: CSSProperties = {
  maxWidth: 1292,
  marginInline: "auto",
  paddingInline: 24,
  width: "100%",
};

/* ─────────────────────────────────────────────────────────────────────────── */
/* Header                                                                       */
/* ─────────────────────────────────────────────────────────────────────────── */

function Header() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backgroundColor: "rgba(251, 251, 247, 0.85)",
        backdropFilter: "saturate(180%) blur(12px)",
        WebkitBackdropFilter: "saturate(180%) blur(12px)",
        borderBottom: `1px solid ${t.n300}`,
      }}
    >
      <div
        style={{
          ...containerStyle,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 72,
        }}
      >
        {/* Logo lockup */}
        <a
          href="#"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            textDecoration: "none",
          }}
        >
          <span
            aria-hidden
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: 32,
              height: 32,
              borderRadius: 8,
              backgroundColor: t.n800,
              boxShadow: t.primaryShadow03,
            }}
          >
            <span
              style={{
                width: 14,
                height: 14,
                borderRadius: "50%",
                backgroundColor: t.p01,
                display: "block",
              }}
            />
          </span>
          <span
            style={{
              fontFamily: t.font,
              fontSize: 18,
              fontWeight: 700,
              letterSpacing: t.tracking,
              color: t.n800,
              lineHeight: 1,
            }}
          >
            KeyLime
          </span>
        </a>

        {/* Nav */}
        <nav
          aria-label="Primary"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 28,
          }}
        >
          {[
            "How It Works",
            "Solutions",
            "Industries",
            "Pricing",
            "About",
          ].map((label) => (
            <a
              key={label}
              href="#"
              style={{
                fontFamily: t.font,
                fontSize: 15,
                fontWeight: 500,
                letterSpacing: t.tracking,
                color: t.n700,
                textDecoration: "none",
                lineHeight: 1,
              }}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* CTA pill */}
        <a
          href="#"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            paddingInline: 20,
            paddingBlock: 11,
            backgroundColor: t.n800,
            color: t.n100,
            borderRadius: 80,
            border: `1px solid ${t.n800}`,
            boxShadow: t.shadow02,
            fontFamily: t.font,
            fontSize: 15,
            fontWeight: 500,
            letterSpacing: t.tracking,
            textDecoration: "none",
            lineHeight: 1,
          }}
        >
          Book a free call
          <span
            aria-hidden
            style={{
              display: "inline-block",
              transform: "translateY(-1px)",
            }}
          >
            →
          </span>
        </a>
      </div>
    </header>
  );
}

/* ─────────────────────────────────────────────────────────────────────────── */
/* Hero right-side composition — illustrated phone + revenue-loss preview card  */
/* ─────────────────────────────────────────────────────────────────────────── */

function HeroComposition() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        minHeight: 520,
        backgroundColor: t.n200,
        borderRadius: 32,
        overflow: "hidden",
        padding: 40,
        boxShadow: t.shadow03,
      }}
    >
      {/* Soft radial glow */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: -120,
          right: -120,
          width: 360,
          height: 360,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${t.greenSoft} 0%, rgba(236, 246, 207, 0) 70%)`,
          pointerEvents: "none",
        }}
      />

      {/* Phone illustration */}
      <div
        style={{
          position: "absolute",
          top: 40,
          right: 56,
          width: 232,
          height: 460,
          backgroundColor: t.n800,
          borderRadius: 36,
          boxShadow: t.shadow05,
          padding: 12,
          display: "flex",
          flexDirection: "column",
          transform: "rotate(6deg)",
        }}
      >
        <div
          style={{
            flex: 1,
            backgroundColor: t.n700,
            borderRadius: 26,
            padding: 16,
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          {/* Phone status row */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontFamily: t.font,
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: t.tracking,
              color: t.n400,
            }}
          >
            <span>9:42</span>
            <span style={{ display: "flex", gap: 4 }}>
              <span
                style={{
                  width: 14,
                  height: 8,
                  border: `1px solid ${t.n400}`,
                  borderRadius: 2,
                }}
              />
            </span>
          </div>

          {/* Missed call notification */}
          <div
            style={{
              backgroundColor: t.n100,
              borderRadius: 14,
              padding: 12,
              display: "flex",
              flexDirection: "column",
              gap: 8,
              boxShadow: t.shadow02,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <span
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: "50%",
                  backgroundColor: t.redSoft,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <span
                  aria-hidden
                  style={{
                    fontFamily: t.font,
                    fontSize: 14,
                    color: "#C56B61",
                    fontWeight: 700,
                    lineHeight: 1,
                  }}
                >
                  ↙
                </span>
              </span>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span
                  style={{
                    fontFamily: t.font,
                    fontSize: 11,
                    fontWeight: 600,
                    color: t.n800,
                    letterSpacing: t.tracking,
                    lineHeight: 1.2,
                  }}
                >
                  Missed call
                </span>
                <span
                  style={{
                    fontFamily: t.font,
                    fontSize: 10,
                    color: t.n500,
                    letterSpacing: t.tracking,
                    lineHeight: 1.2,
                  }}
                >
                  (239) 555 — 0142 · 2 min ago
                </span>
              </div>
            </div>
          </div>

          {/* Missed call notification — older */}
          <div
            style={{
              backgroundColor: t.n100,
              borderRadius: 14,
              padding: 12,
              display: "flex",
              alignItems: "center",
              gap: 8,
              opacity: 0.85,
            }}
          >
            <span
              style={{
                width: 28,
                height: 28,
                borderRadius: "50%",
                backgroundColor: t.redSoft,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <span
                aria-hidden
                style={{
                  fontFamily: t.font,
                  fontSize: 14,
                  color: "#C56B61",
                  fontWeight: 700,
                  lineHeight: 1,
                }}
              >
                ↙
              </span>
            </span>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  fontFamily: t.font,
                  fontSize: 11,
                  fontWeight: 600,
                  color: t.n800,
                  letterSpacing: t.tracking,
                  lineHeight: 1.2,
                }}
              >
                Missed call
              </span>
              <span
                style={{
                  fontFamily: t.font,
                  fontSize: 10,
                  color: t.n500,
                  letterSpacing: t.tracking,
                  lineHeight: 1.2,
                }}
              >
                (239) 555 — 0087 · 18 min ago
              </span>
            </div>
          </div>

          {/* Missed call notification — older still */}
          <div
            style={{
              backgroundColor: t.n100,
              borderRadius: 14,
              padding: 12,
              display: "flex",
              alignItems: "center",
              gap: 8,
              opacity: 0.6,
            }}
          >
            <span
              style={{
                width: 28,
                height: 28,
                borderRadius: "50%",
                backgroundColor: t.redSoft,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <span
                aria-hidden
                style={{
                  fontFamily: t.font,
                  fontSize: 14,
                  color: "#C56B61",
                  fontWeight: 700,
                  lineHeight: 1,
                }}
              >
                ↙
              </span>
            </span>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  fontFamily: t.font,
                  fontSize: 11,
                  fontWeight: 600,
                  color: t.n800,
                  letterSpacing: t.tracking,
                  lineHeight: 1.2,
                }}
              >
                Missed call
              </span>
              <span
                style={{
                  fontFamily: t.font,
                  fontSize: 10,
                  color: t.n500,
                  letterSpacing: t.tracking,
                  lineHeight: 1.2,
                }}
              >
                Unknown · 41 min ago
              </span>
            </div>
          </div>

          <div style={{ flex: 1 }} />
        </div>
      </div>

      {/* Revenue-lost preview card — floating, lime-accented */}
      <div
        style={{
          position: "absolute",
          bottom: 40,
          left: 40,
          width: 280,
          backgroundColor: t.n100,
          borderRadius: 20,
          padding: 24,
          boxShadow: t.shadow05,
          display: "flex",
          flexDirection: "column",
          gap: 12,
        }}
      >
        <span
          style={{
            fontFamily: t.font,
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: t.tracking,
            color: t.p04,
            textTransform: "uppercase",
            lineHeight: 1,
          }}
        >
          Estimated monthly loss
        </span>
        <span
          style={{
            fontFamily: t.font,
            fontSize: 40,
            fontWeight: 700,
            letterSpacing: t.tracking,
            color: t.n800,
            lineHeight: 1,
          }}
        >
          $7,200
          <span
            style={{
              fontSize: 18,
              color: t.n500,
              fontWeight: 500,
              marginLeft: 4,
            }}
          >
            /mo
          </span>
        </span>
        <div
          style={{
            height: 1,
            backgroundColor: t.n300,
            marginBlock: 4,
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontFamily: t.font,
            fontSize: 13,
            color: t.n600,
            letterSpacing: t.tracking,
            lineHeight: 1.4,
          }}
        >
          <span>Missed calls / wk</span>
          <span style={{ color: t.n800, fontWeight: 600 }}>12</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontFamily: t.font,
            fontSize: 13,
            color: t.n600,
            letterSpacing: t.tracking,
            lineHeight: 1.4,
          }}
        >
          <span>Avg job value</span>
          <span style={{ color: t.n800, fontWeight: 600 }}>$300</span>
        </div>
      </div>

      {/* Small ambient tag — top-left */}
      <div
        style={{
          position: "absolute",
          top: 40,
          left: 40,
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          paddingInline: 14,
          paddingBlock: 8,
          backgroundColor: t.n100,
          borderRadius: 80,
          boxShadow: t.shadow02,
          fontFamily: t.font,
          fontSize: 12,
          fontWeight: 600,
          letterSpacing: t.tracking,
          color: t.n700,
          lineHeight: 1,
        }}
      >
        <span
          style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: t.p01,
            boxShadow: t.primaryShadow03,
          }}
        />
        Sample · home services
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────── */
/* Hero                                                                         */
/* ─────────────────────────────────────────────────────────────────────────── */

function Hero() {
  const [pressed, setPressed] = useState(false);

  return (
    <section
      style={{
        paddingTop: 96,
        paddingBottom: 120,
      }}
    >
      <div
        style={{
          ...containerStyle,
          display: "grid",
          gridTemplateColumns: "minmax(0, 1.05fr) minmax(0, 1fr)",
          gap: 64,
          alignItems: "center",
        }}
      >
        {/* Left column — copy */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {/* Eyebrow */}
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              alignSelf: "flex-start",
              paddingInline: 12,
              paddingBlock: 6,
              backgroundColor: t.greenSoft,
              color: t.p04,
              borderRadius: 80,
              fontFamily: t.font,
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              lineHeight: 1,
              marginBottom: 24,
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: t.p02,
                display: "inline-block",
              }}
            />
            Built for home services &amp; beauty
          </span>

          {/* H1 — Display 10 (60px) per styleguide */}
          <h1
            style={{
              fontFamily: t.font,
              fontSize: 60,
              lineHeight: 1,
              letterSpacing: t.tracking,
              color: t.n800,
              fontWeight: 700,
              margin: 0,
              marginBottom: 24,
              maxWidth: 620,
            }}
          >
            See what missed calls are costing your business.
          </h1>

          {/* Subheading — Paragraph Large */}
          <p
            style={{
              fontFamily: t.font,
              fontSize: 18,
              lineHeight: 1.555,
              letterSpacing: t.tracking,
              color: t.n600,
              fontWeight: 400,
              margin: 0,
              marginBottom: 40,
              maxWidth: 540,
            }}
          >
            Local home services and beauty operators lose thousands a month to
            leads that called the next business on the list. Punch in three
            numbers — get yours in 60 seconds.
          </p>

          {/* Button row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 24,
              flexWrap: "wrap",
              marginBottom: 16,
            }}
          >
            {/* Primary lime button */}
            <a
              href="#"
              onMouseDown={() => setPressed(true)}
              onMouseUp={() => setPressed(false)}
              onMouseLeave={() => setPressed(false)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                paddingInline: 28,
                paddingBlock: 16,
                backgroundColor: t.p01,
                color: t.n800,
                borderRadius: 80,
                border: `1px solid ${t.p01}`,
                boxShadow: pressed ? t.primaryShadow03 : t.primaryShadow04,
                fontFamily: t.font,
                fontSize: 18,
                fontWeight: 600,
                letterSpacing: t.tracking,
                textDecoration: "none",
                lineHeight: 1.333,
                transform: pressed ? "translateY(1px)" : "translateY(0)",
                transition: "transform 200ms ease, box-shadow 200ms ease",
              }}
            >
              Calculate my missed-call revenue
              <span aria-hidden style={{ transform: "translateY(-1px)" }}>
                →
              </span>
            </a>

            {/* Secondary text link */}
            <a
              href="#"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                fontFamily: t.font,
                fontSize: 17,
                fontWeight: 500,
                letterSpacing: t.tracking,
                color: t.n800,
                textDecoration: "none",
                lineHeight: 1.333,
                borderBottom: `1px solid ${t.n400}`,
                paddingBottom: 2,
              }}
            >
              See how the system works
              <span aria-hidden style={{ transform: "translateY(-1px)" }}>
                →
              </span>
            </a>
          </div>

          {/* Microcopy */}
          <span
            style={{
              fontFamily: t.font,
              fontSize: 13,
              letterSpacing: t.tracking,
              color: t.n500,
              lineHeight: 1.5,
            }}
          >
            No email to start. Yours to keep.
          </span>

          {/* Trust strip */}
          <div
            style={{
              marginTop: 56,
              paddingTop: 24,
              borderTop: `1px solid ${t.n300}`,
              display: "flex",
              alignItems: "center",
              gap: 28,
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                fontFamily: t.font,
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: t.n500,
                lineHeight: 1,
              }}
            >
              Built for
            </span>
            {[
              "HVAC",
              "Plumbing",
              "Roofing",
              "Salons",
              "Med spas",
              "Lash & brow",
            ].map((label) => (
              <span
                key={label}
                style={{
                  fontFamily: t.font,
                  fontSize: 14,
                  fontWeight: 500,
                  letterSpacing: t.tracking,
                  color: t.n700,
                  lineHeight: 1,
                }}
              >
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* Right column — composition */}
        <div style={{ height: "100%" }}>
          <HeroComposition />
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────── */
/* Page                                                                         */
/* ─────────────────────────────────────────────────────────────────────────── */

export default function Page() {
  return (
    <main
      style={{
        backgroundColor: t.pageBg,
        color: t.n800,
        fontFamily: t.font,
        minHeight: "100vh",
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
      }}
    >
      <Header />
      <Hero />

      {/* End-of-mockup marker — indicates where the rest of the page would continue */}
      <div
        style={{
          ...containerStyle,
          paddingBlock: 32,
          borderTop: `1px dashed ${t.n300}`,
          marginTop: 24,
        }}
      >
        <span
          style={{
            fontFamily: t.font,
            fontSize: 12,
            fontWeight: 500,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: t.n500,
          }}
        >
          End of hero mockup · Industries bar follows below on the live build
        </span>
      </div>
    </main>
  );
}
