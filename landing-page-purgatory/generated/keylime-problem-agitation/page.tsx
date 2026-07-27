/*
 * KeyLime Marketing — Problem Agitation (4 wireframe concepts)
 * Generated: 2026-05-20
 * Style: Agencia X (Webflow template) structure · Citrus & Charcoal palette · v4.0
 *
 * Renders four distinct UI treatments of homepage-copy.md §3 stacked on one
 * page. A divider strip between each concept labels which is which.
 *
 * Copy is locked from homepage-copy.md §3.
 */

"use client";

import { useState, type CSSProperties } from "react";

/* ─────────────────────────────────────────────────────────────────────────── */
/* Design tokens (mirrors KeyLime styleguide.md §14)                            */
/* ─────────────────────────────────────────────────────────────────────────── */

const t = {
  font: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
  tracking: "-0.03em",

  n100: "#FFFFFF",
  n200: "#F0F2EB",
  n300: "#DCDDD7",
  n400: "#C7C9C3",
  n500: "#898B85",
  n600: "#4F524B",
  n700: "#292B26",
  n800: "#1C1E1A",

  p01: "#A4D639",
  p02: "#6FA51F",
  p03: "#588817",
  p04: "#436C0E",
  pageBg: "#FBFBF7",

  greenSoft: "#ECF6CF",
  redSoft: "#F5E2DF",
  red400: "#C56B61",

  shadow02: "0 1px 4px 0 rgba(28, 30, 26, 0.08)",
  shadow03: "0 2px 6px 0 rgba(28, 30, 26, 0.14)",
  shadow04: "0 4px 14px 0 rgba(28, 30, 26, 0.18)",
  shadow05: "0 12px 26px 0 rgba(28, 30, 26, 0.18)",
} as const;

const container: CSSProperties = {
  maxWidth: 1292,
  marginInline: "auto",
  paddingInline: 24,
  width: "100%",
};

const heading = (px: number, color: string = t.n800): CSSProperties => ({
  fontFamily: t.font,
  fontSize: px,
  lineHeight: px >= 48 ? 1.05 : 1.111,
  letterSpacing: t.tracking,
  color,
  fontWeight: 600,
  margin: 0,
});

const para = (px: number, color: string = t.n600): CSSProperties => ({
  fontFamily: t.font,
  fontSize: px,
  lineHeight: 1.5,
  letterSpacing: t.tracking,
  color,
  margin: 0,
});

const eyebrow = (color: string = t.p04): CSSProperties => ({
  fontFamily: t.font,
  fontSize: 12,
  lineHeight: 1.5,
  letterSpacing: "0.08em",
  color,
  fontWeight: 600,
  textTransform: "uppercase",
  margin: 0,
});

/* ─────────────────────────────────────────────────────────────────────────── */
/* Shared copy                                                                  */
/* ─────────────────────────────────────────────────────────────────────────── */

const HEADLINE = "This is what's actually going on.";
const EYEBROW = "THE QUIET COST";
const CLOSER_LEFT = "None of this is a marketing problem. It's a ";
const CLOSER_HIGHLIGHT = "system problem";
const CLOSER_RIGHT = ".";

const BULLETS = [
  "You miss a call on the job, and the next business on the Google list gets it.",
  "Your reviews live in three places and your customer messages live in five.",
  "You're paying for tools your team barely logs into — and they don't talk to each other anyway.",
  "Your Google listing doesn't reflect the quality of your work. The new guy across town's does.",
] as const;

/* ─────────────────────────────────────────────────────────────────────────── */
/* Icons (monoline, inherit currentColor)                                       */
/* ─────────────────────────────────────────────────────────────────────────── */

function IconPhone() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7a2 2 0 0 1 1.72 2z" />
      <path d="M16 3l3 3" />
      <path d="M19 3l-3 3" />
    </svg>
  );
}

function IconChats() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 5h12v9H8l-5 4V5z" />
      <path d="M9 9h15v9h-5l-5 4v-4" />
    </svg>
  );
}

function IconStack() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </svg>
  );
}

function IconStar() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M21 10h-7L12 3l-2 7H3l5.5 4.5L6.5 22 12 17.8 17.5 22l-2-7.5L21 10z" />
    </svg>
  );
}

const ICONS = [IconPhone, IconChats, IconStack, IconStar] as const;

/* ─────────────────────────────────────────────────────────────────────────── */
/* Closer band (used by Concept A & D)                                          */
/* ─────────────────────────────────────────────────────────────────────────── */

function Closer({ onDark = false, center = true }: { onDark?: boolean; center?: boolean }) {
  const baseColor = onDark ? t.n100 : t.n800;
  const limeColor = onDark ? t.p01 : t.p02;
  return (
    <p
      style={{
        ...para(30, baseColor),
        lineHeight: 1.2,
        fontWeight: 500,
        textAlign: center ? "center" : "left",
        maxWidth: 820,
        marginInline: center ? "auto" : 0,
        marginTop: 80,
      }}
    >
      {CLOSER_LEFT}
      <span
        style={{
          color: limeColor,
          borderBottom: onDark ? "none" : `2px solid ${t.p01}`,
          paddingBottom: 1,
        }}
      >
        {CLOSER_HIGHLIGHT}
      </span>
      {CLOSER_RIGHT}
    </p>
  );
}

/* ─────────────────────────────────────────────────────────────────────────── */
/* CONCEPT A — Four-card editorial grid                                         */
/* ─────────────────────────────────────────────────────────────────────────── */

function ConceptA() {
  return (
    <section
      style={{
        backgroundColor: t.n200,
        paddingBlock: 140,
      }}
    >
      <div style={container}>
        <div style={{ maxWidth: 720, marginBottom: 80 }}>
          <p style={{ ...eyebrow(), marginBottom: 16 }}>{EYEBROW}</p>
          <h2 style={heading(48)}>{HEADLINE}</h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 24,
          }}
        >
          {BULLETS.map((b, i) => {
            const Icon = ICONS[i];
            const isAccent = i === 0;
            return (
              <article
                key={i}
                style={{
                  position: "relative",
                  backgroundColor: t.n100,
                  borderRadius: 24,
                  padding: "48px 40px",
                  boxShadow: t.shadow03,
                  overflow: "hidden",
                }}
              >
                {isAccent && (
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      bottom: 0,
                      left: 0,
                      width: 4,
                      backgroundColor: t.p01,
                    }}
                  />
                )}
                <div style={{ color: t.n800, marginBottom: 24 }}>
                  <Icon />
                </div>
                <p style={{ ...heading(24), lineHeight: 1.333, fontWeight: 500 }}>
                  {b}
                </p>
              </article>
            );
          })}
        </div>

        <Closer />
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────── */
/* CONCEPT B — Charcoal confessional, lime closer                               */
/* ─────────────────────────────────────────────────────────────────────────── */

function ConceptB() {
  return (
    <section
      style={{
        backgroundColor: t.n800,
        paddingBlock: 140,
        borderBottomLeftRadius: 64,
        borderBottomRightRadius: 64,
      }}
    >
      <div style={container}>
        <div style={{ maxWidth: 840, marginInline: "auto", textAlign: "center" }}>
          <p style={{ ...eyebrow(t.p01), marginBottom: 16 }}>{EYEBROW}</p>
          <h2 style={heading(48, t.n100)}>{HEADLINE}</h2>
        </div>

        <div
          style={{
            marginTop: 64,
            display: "flex",
            flexDirection: "column",
            gap: 32,
            maxWidth: 960,
            marginInline: "auto",
          }}
        >
          {BULLETS.map((b, i) => (
            <div key={i}>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 24,
                }}
              >
                <span
                  style={{
                    ...para(14, t.p01),
                    fontWeight: 600,
                    fontFamily: t.font,
                    flexShrink: 0,
                    paddingTop: 8,
                    minWidth: 28,
                  }}
                >
                  {`0${i + 1}`}
                </span>
                <p
                  style={{
                    ...para(30, t.n100),
                    lineHeight: 1.2,
                    fontWeight: 500,
                    maxWidth: 720,
                  }}
                >
                  {b}
                </p>
              </div>
              {i < BULLETS.length - 1 && (
                <div
                  style={{
                    height: 1,
                    backgroundColor: t.n700,
                    marginTop: 32,
                  }}
                />
              )}
            </div>
          ))}
        </div>

        <p
          style={{
            ...para(24, t.n100),
            textAlign: "center",
            fontWeight: 500,
            marginTop: 80,
            maxWidth: 720,
            marginInline: "auto",
          }}
        >
          {CLOSER_LEFT}
          <span style={{ color: t.p01 }}>{CLOSER_HIGHLIGHT}</span>
          {CLOSER_RIGHT}
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────── */
/* CONCEPT C — Two-column "what you see / what it costs"                        */
/* ─────────────────────────────────────────────────────────────────────────── */

const SUBLINES = [
  "By the time you wipe your hands and call back, they've booked the next shop on the list.",
  "Google, Yelp, Facebook, the texts, the DMs, the front desk — six places, one customer.",
  "Two CRMs, a booking app, an email tool, a separate texting app. None of them know about each other.",
  "Newer shop, fewer years of work — but a cleaner profile and a higher star count. The listing wins.",
] as const;

function WidgetStat() {
  return (
    <div style={{ textAlign: "center" }}>
      <p
        style={{
          fontFamily: t.font,
          fontSize: 72,
          lineHeight: 1,
          letterSpacing: t.tracking,
          color: t.p02,
          fontWeight: 700,
          margin: 0,
        }}
      >
        63%*
      </p>
      <p style={{ ...para(14, t.n600), marginTop: 12, maxWidth: 220, marginInline: "auto" }}>
        of missed local-service calls go to the next number on Google
      </p>
      <p style={{ ...para(12, t.n500), marginTop: 8, fontStyle: "italic" }}>
        *placeholder — replace with verified stat or swap for illustration
      </p>
    </div>
  );
}

function WidgetTiles() {
  const labels = ["Google", "Yelp", "FB", "SMS", "IG DM", "Front Desk"];
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 8,
      }}
    >
      {labels.map((l, i) => (
        <div
          key={l}
          style={{
            backgroundColor: t.n200,
            border: `1px solid ${t.n300}`,
            borderRadius: 8,
            padding: "12px 8px",
            textAlign: "center",
            transform: `translateY(${(i % 2) * 6}px)`,
            boxShadow: t.shadow02,
          }}
        >
          <p style={{ ...para(12, t.n600), fontWeight: 500 }}>{l}</p>
        </div>
      ))}
    </div>
  );
}

function WidgetTools() {
  const tools = ["CRM A", "CRM B", "Booking", "Email", "Texts"];
  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 4,
        }}
      >
        {tools.map((tool) => (
          <div
            key={tool}
            style={{
              flex: 1,
              backgroundColor: t.n200,
              border: `1px solid ${t.n300}`,
              borderRadius: 8,
              padding: "16px 4px",
              textAlign: "center",
              opacity: 0.6,
            }}
          >
            <p style={{ ...para(11, t.n500), fontWeight: 500 }}>{tool}</p>
          </div>
        ))}
      </div>
      <svg
        viewBox="0 0 240 40"
        preserveAspectRatio="none"
        style={{
          position: "absolute",
          top: "50%",
          left: 0,
          right: 0,
          width: "100%",
          height: 24,
          transform: "translateY(-50%)",
          pointerEvents: "none",
        }}
        aria-hidden
      >
        <path
          d="M 8 20 L 40 8 L 72 30 L 104 12 L 136 28 L 168 10 L 200 30 L 232 18"
          fill="none"
          stroke={t.red400}
          strokeWidth="1.5"
          strokeDasharray="4 3"
        />
      </svg>
    </div>
  );
}

function WidgetCompare() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
      {[
        { label: "Your shop", stars: "★ 4.6", count: "47 reviews", dim: true },
        { label: "New guy", stars: "★ 4.9", count: "312 reviews", dim: false },
      ].map((c) => (
        <div
          key={c.label}
          style={{
            backgroundColor: t.n200,
            borderRadius: 12,
            padding: 12,
            border: `1px solid ${t.n300}`,
          }}
        >
          <p style={{ ...para(11, t.n500), fontWeight: 500 }}>{c.label}</p>
          <p
            style={{
              ...para(18, c.dim ? t.n600 : t.p02),
              fontWeight: 600,
              marginTop: 4,
            }}
          >
            {c.stars}
          </p>
          <p style={{ ...para(12, t.n600), marginTop: 2 }}>{c.count}</p>
        </div>
      ))}
    </div>
  );
}

const WIDGETS = [WidgetStat, WidgetTiles, WidgetTools, WidgetCompare] as const;

function ConceptC() {
  return (
    <section
      style={{
        backgroundColor: t.n200,
        paddingBlock: 120,
      }}
    >
      <div style={container}>
        <div style={{ maxWidth: 720, marginBottom: 64 }}>
          <p style={{ ...eyebrow(), marginBottom: 16 }}>{EYEBROW}</p>
          <h2 style={heading(48)}>{HEADLINE}</h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {BULLETS.map((b, i) => {
            const Widget = WIDGETS[i];
            return (
              <div key={i}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1.6fr 1fr",
                    gap: 48,
                    alignItems: "center",
                    paddingBlock: 48,
                  }}
                >
                  <div>
                    <p style={{ ...heading(20), fontWeight: 500, marginBottom: 12 }}>
                      {b}
                    </p>
                    <p style={para(16)}>{SUBLINES[i]}</p>
                  </div>
                  <div
                    style={{
                      backgroundColor: t.n100,
                      borderRadius: 16,
                      padding: 24,
                      boxShadow: t.shadow02,
                    }}
                  >
                    <Widget />
                  </div>
                </div>
                {i < BULLETS.length - 1 && (
                  <div style={{ height: 1, backgroundColor: t.n300 }} />
                )}
              </div>
            );
          })}
        </div>

        <Closer />
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────── */
/* CONCEPT D — Two-tab persona switcher (Mike / Lena)                           */
/* ─────────────────────────────────────────────────────────────────────────── */

const TABS = {
  mike: {
    label: "Home Services",
    persona: "Mike — HVAC owner",
    avatar: "M",
    bullets: [
      "You miss a call on the job, and the next business on the Google list gets it.",
      "Your reviews are split between Google, BBB, and the inbox in your truck.",
      "You're paying for a CRM, a dispatcher, and a quoting tool — none of them market for you.",
      "Your competitor has 312 reviews. You're at 47, and your work is better.",
    ],
  },
  lena: {
    label: "Beauty & Personal",
    persona: "Lena — salon owner",
    avatar: "L",
    bullets: [
      "A regular DMs to reschedule. By the time you see it, she's booked elsewhere.",
      "Booking lives in Boulevard. Texts live in your phone. Reviews live in a tab you forgot.",
      "Five apps, four logins, and the front desk still chases no-shows by hand.",
      "Your work is better than the new studio down the block. Their Instagram doesn't show it.",
    ],
  },
} as const;

function ConceptD() {
  const [tab, setTab] = useState<"mike" | "lena">("mike");
  const active = TABS[tab];

  return (
    <section
      style={{
        backgroundColor: t.n100,
        paddingBlock: 140,
      }}
    >
      <div style={container}>
        <div style={{ maxWidth: 840, marginInline: "auto", textAlign: "center" }}>
          <p style={{ ...eyebrow(), marginBottom: 16 }}>{EYEBROW}</p>
          <h2 style={heading(48)}>{HEADLINE}</h2>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 12,
            marginTop: 32,
          }}
        >
          {(["mike", "lena"] as const).map((key) => {
            const isActive = tab === key;
            return (
              <button
                key={key}
                onClick={() => setTab(key)}
                style={{
                  borderRadius: 80,
                  padding: "12px 24px",
                  border: `1px solid ${isActive ? t.n800 : t.n400}`,
                  backgroundColor: isActive ? t.n800 : t.n200,
                  color: isActive ? t.n100 : t.n800,
                  fontFamily: t.font,
                  fontSize: 16,
                  fontWeight: 500,
                  letterSpacing: t.tracking,
                  cursor: "pointer",
                  boxShadow: t.shadow02,
                  transition: "transform 300ms ease",
                }}
              >
                {TABS[key].label}
              </button>
            );
          })}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 12,
            marginTop: 32,
          }}
        >
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              backgroundColor: t.greenSoft,
              color: t.p04,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: t.font,
              fontWeight: 600,
              fontSize: 16,
              border: `1px solid ${t.n300}`,
            }}
          >
            {active.avatar}
          </div>
          <p style={{ ...para(14, t.n600), fontWeight: 500 }}>{active.persona}</p>
        </div>

        <div
          style={{
            marginTop: 48,
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 24,
          }}
        >
          {active.bullets.map((b, i) => {
            const Icon = ICONS[i];
            return (
              <article
                key={i}
                style={{
                  backgroundColor: t.n200,
                  borderRadius: 24,
                  padding: "48px 40px",
                  boxShadow: t.shadow02,
                }}
              >
                <div style={{ color: t.n800, marginBottom: 24 }}>
                  <Icon />
                </div>
                <p style={{ ...heading(24), lineHeight: 1.333, fontWeight: 500 }}>{b}</p>
              </article>
            );
          })}
        </div>

        <Closer />
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────── */
/* CONCEPT E — Image-backed vertical card stack (per Figma 407:258)             */
/* ─────────────────────────────────────────────────────────────────────────── */

const CONCEPT_E_TITLES = [
  "Missed Opportunities",
  "Poor Online Visibility",
  "Wasted Efforts",
  "Scattered Resources",
] as const;

const CONCEPT_E_IMAGES = [
  "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1554672408-730436b60dde?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?q=80&w=900&auto=format&fit=crop",
] as const;

function ProblemImageCard({
  title,
  body,
  imageUrl,
  blurPx = 1,
}: {
  title: string;
  body: string;
  imageUrl: string;
  blurPx?: number;
}) {
  return (
    <article
      style={{
        position: "relative",
        width: "100%",
        maxWidth: 469,
        height: 211,
        borderRadius: 23,
        boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.25)",
        overflow: "hidden",
        isolation: "isolate",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: `blur(${blurPx}px)`,
          transform: "scale(1.04)",
          zIndex: 0,
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          padding: "32px 36px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          gap: 14,
        }}
      >
        <h3
          style={{
            fontFamily: t.font,
            fontSize: 20,
            lineHeight: 1.15,
            color: "#23251b",
            fontWeight: 400,
            margin: 0,
            letterSpacing: 0,
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontFamily: t.font,
            fontSize: 14,
            lineHeight: 1.4,
            color: "#000",
            fontWeight: 400,
            margin: 0,
            maxWidth: 260,
            letterSpacing: 0,
            wordBreak: "break-word",
          }}
        >
          {body}
        </p>
      </div>
    </article>
  );
}

function ConceptE() {
  return (
    <section
      style={{
        backgroundColor: t.n200,
        paddingBlock: 140,
      }}
    >
      <div style={container}>
        <div style={{ maxWidth: 720, marginBottom: 64 }}>
          <p style={{ ...eyebrow(), marginBottom: 16 }}>{EYEBROW}</p>
          <h2 style={heading(48)}>{HEADLINE}</h2>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 30,
            maxWidth: 469,
            marginInline: "auto",
          }}
        >
          {BULLETS.map((b, i) => (
            <ProblemImageCard
              key={i}
              title={CONCEPT_E_TITLES[i]}
              body={b}
              imageUrl={CONCEPT_E_IMAGES[i]}
              blurPx={i === BULLETS.length - 1 ? 2 : 1}
            />
          ))}
        </div>

        <Closer />
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────── */
/* Label strip between concepts                                                 */
/* ─────────────────────────────────────────────────────────────────────────── */

function ConceptLabel({
  letter,
  title,
  blurb,
}: {
  letter: string;
  title: string;
  blurb: string;
}) {
  return (
    <div
      style={{
        backgroundColor: t.pageBg,
        borderTop: `1px dashed ${t.n400}`,
        borderBottom: `1px dashed ${t.n400}`,
        paddingBlock: 32,
      }}
    >
      <div style={container}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: "50%",
              backgroundColor: t.p01,
              color: t.n800,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: t.font,
              fontWeight: 700,
              fontSize: 20,
              letterSpacing: t.tracking,
              flexShrink: 0,
            }}
          >
            {letter}
          </div>
          <div style={{ flex: 1, minWidth: 280 }}>
            <p style={{ ...eyebrow(t.n500), marginBottom: 4 }}>CONCEPT {letter}</p>
            <h3 style={{ ...heading(20), fontWeight: 600, marginBottom: 4 }}>
              {title}
            </h3>
            <p style={para(14, t.n600)}>{blurb}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────── */
/* Page                                                                         */
/* ─────────────────────────────────────────────────────────────────────────── */

export default function KeyLimeProblemAgitationWireframes() {
  return (
    <main
      style={{
        backgroundColor: t.pageBg,
        fontFamily: t.font,
        color: t.n800,
        minHeight: "100vh",
      }}
    >
      <header
        style={{
          paddingBlock: 48,
          borderBottom: `1px solid ${t.n300}`,
        }}
      >
        <div style={container}>
          <p style={{ ...eyebrow(), marginBottom: 12 }}>
            KEYLIME · HOMEPAGE §3 · WIREFRAME EXPLORATION
          </p>
          <h1 style={heading(36)}>Problem Agitation — four concept variants</h1>
          <p style={{ ...para(16), marginTop: 16, maxWidth: 720 }}>
            Four UI treatments of the same locked copy from homepage-copy.md §3.
            Each section sits between dashed labels so the boundaries are clear.
            All four use the Citrus & Charcoal palette, Inter, -0.03em tracking,
            and the Agencia X type / shadow / radius scale.
          </p>
        </div>
      </header>

      <ConceptLabel
        letter="A"
        title="Four-card editorial grid"
        blurb="2×2 cards on warm-near-white. Monoline icons, one lime accent bar, lime-underlined closer. The default / safest pick."
      />
      <ConceptA />

      <ConceptLabel
        letter="B"
        title="Charcoal confessional, lime closer"
        blurb="Dark slab with 64px bottom radius. Numbered bullet rows, hairline dividers, lime payoff word on charcoal."
      />
      <ConceptB />

      <ConceptLabel
        letter="C"
        title="Two-column — what you see / what it costs"
        blurb="Each bullet paired with an evidence widget on the right: stat, channel tiles, disconnected tools, side-by-side listing comparison."
      />
      <ConceptC />

      <ConceptLabel
        letter="D"
        title="Two-tab persona switcher (Mike / Lena)"
        blurb="Same headline, vertical-specific bullets behind a pill tab toggle. Reuses the industry-toggle pattern from §8."
      />
      <ConceptD />

      <ConceptLabel
        letter="E"
        title="Image-backed vertical card stack"
        blurb="Per Figma — vertical stack of 469×211 cards. Each card has a blurred themed photo background, 80% white overlay, 23px radius, soft shadow. Inter 20 title, 14 body."
      />
      <ConceptE />

      <footer
        style={{
          paddingBlock: 64,
          borderTop: `1px solid ${t.n300}`,
          marginTop: 64,
        }}
      >
        <div style={container}>
          <p style={para(14, t.n500)}>
            End of wireframes · pairs with homepage-copy.md §3 · styleguide.md v4.0
          </p>
        </div>
      </footer>
    </main>
  );
}
