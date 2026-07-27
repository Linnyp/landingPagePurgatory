/*
 * KeyLime — Missed-Call Widget preview page
 * Generated: 2026-05-18
 *
 * Two views:
 *  1. Standalone widget on a warm canvas (component reference)
 *  2. Hero-context preview — widget placed inside the same right-side panel
 *     style used in the homepage hero mockup
 */

"use client";

import type { CSSProperties } from "react";
import { MissedCallWidget } from "./MissedCallWidget";

/* Tokens shared with the hero mockup */
const t = {
  font: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
  tracking: "-0.03em",
  n100: "#FFFFFF",
  n200: "#F0F2EB",
  n300: "#DCDDD7",
  n500: "#898B85",
  n600: "#4F524B",
  n700: "#292B26",
  n800: "#1C1E1A",
  p01: "#A4D639",
  p02: "#6FA51F",
  p04: "#436C0E",
  pageBg: "#FBFBF7",
  greenSoft: "#ECF6CF",
  shadow02: "0 1px 4px 0 rgba(28, 30, 26, 0.08)",
  shadow03: "0 2px 6px 0 rgba(28, 30, 26, 0.14)",
  primaryShadow03: "0 2px 6px 0 rgba(111, 165, 31, 0.22)",
} as const;

const container: CSSProperties = {
  maxWidth: 1292,
  marginInline: "auto",
  paddingInline: 24,
  width: "100%",
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        fontFamily: t.font,
        fontSize: 12,
        fontWeight: 600,
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        color: t.n500,
        lineHeight: 1,
        display: "block",
        marginBottom: 16,
      }}
    >
      {children}
    </span>
  );
}

/* Replicates the warm-panel hero composition surrounding the widget */
function HeroPanel() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        minHeight: 520,
        backgroundColor: t.n200,
        borderRadius: 32,
        overflow: "hidden",
        padding: 40,
        boxShadow: t.shadow03,
      }}
    >
      {/* Soft lime glow */}
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

      {/* Sample tag */}
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
        Run yours — change any field
      </div>

      {/* Widget centered/right */}
      <div
        style={{
          position: "absolute",
          right: 40,
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        <MissedCallWidget />
      </div>

      {/* Subtle ambient label bottom-left */}
      <div
        style={{
          position: "absolute",
          bottom: 40,
          left: 40,
          maxWidth: 220,
          fontFamily: t.font,
          fontSize: 13,
          letterSpacing: t.tracking,
          color: t.n600,
          lineHeight: 1.5,
        }}
      >
        <strong style={{ color: t.n800, fontWeight: 600 }}>
          Three numbers.
        </strong>{" "}
        Sixty seconds. See what every missed call really costs.
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <main
      style={{
        backgroundColor: t.pageBg,
        color: t.n800,
        fontFamily: t.font,
        minHeight: "100vh",
        paddingBlock: 64,
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
      }}
    >
      <div style={container}>
        {/* Page heading */}
        <div style={{ marginBottom: 56 }}>
          <span
            style={{
              fontFamily: t.font,
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: t.p04,
              display: "block",
              marginBottom: 12,
            }}
          >
            KeyLime · Component
          </span>
          <h1
            style={{
              fontFamily: t.font,
              fontSize: 48,
              fontWeight: 700,
              letterSpacing: t.tracking,
              lineHeight: 1.1,
              color: t.n800,
              margin: 0,
              marginBottom: 16,
              maxWidth: 720,
            }}
          >
            Missed-Call Revenue Widget
          </h1>
          <p
            style={{
              fontFamily: t.font,
              fontSize: 17,
              lineHeight: 1.555,
              letterSpacing: t.tracking,
              color: t.n600,
              fontWeight: 400,
              margin: 0,
              maxWidth: 640,
            }}
          >
            Interactive three-input estimator for the homepage hero. Edit any
            field — the monthly loss recalculates live. Designed to drop into
            the warm hero panel or stand on its own.
          </p>
        </div>

        {/* View 1 — Standalone */}
        <section style={{ marginBottom: 80 }}>
          <SectionLabel>Standalone</SectionLabel>
          <div
            style={{
              backgroundColor: t.n200,
              borderRadius: 24,
              padding: 64,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: 380,
            }}
          >
            <MissedCallWidget />
          </div>
        </section>

        {/* View 2 — Hero context */}
        <section style={{ marginBottom: 80 }}>
          <SectionLabel>In hero context</SectionLabel>
          <HeroPanel />
        </section>

        {/* View 3 — Alt presets (beauty-style defaults) */}
        <section style={{ marginBottom: 80 }}>
          <SectionLabel>Alt preset · beauty defaults</SectionLabel>
          <div
            style={{
              backgroundColor: t.n200,
              borderRadius: 24,
              padding: 64,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: 380,
            }}
          >
            <MissedCallWidget
              initialCallsPerWeek={18}
              initialJobValue={185}
              initialCloseRate={62}
              eyebrow="Missed appointment revenue"
            />
          </div>
        </section>

        {/* Notes */}
        <section
          style={{
            backgroundColor: t.n100,
            border: `1px solid ${t.n300}`,
            borderRadius: 16,
            padding: 28,
          }}
        >
          <SectionLabel>Implementation notes</SectionLabel>
          <ul
            style={{
              fontFamily: t.font,
              fontSize: 14,
              lineHeight: 1.6,
              letterSpacing: t.tracking,
              color: t.n700,
              margin: 0,
              paddingLeft: 20,
            }}
          >
            <li>
              <strong>Formula:</strong> calls/wk × 4.33 × $job × close% =
              monthly loss.
            </li>
            <li>
              <strong>Defaults:</strong> 12 calls/wk · $300 · 50% close → roughly
              $7,800/mo, in the same ballpark as the static hero mockup card.
            </li>
            <li>
              <strong>Props:</strong>{" "}
              <code style={{ fontFamily: "ui-monospace, monospace" }}>
                initialCallsPerWeek
              </code>
              ,{" "}
              <code style={{ fontFamily: "ui-monospace, monospace" }}>
                initialJobValue
              </code>
              ,{" "}
              <code style={{ fontFamily: "ui-monospace, monospace" }}>
                initialCloseRate
              </code>
              ,{" "}
              <code style={{ fontFamily: "ui-monospace, monospace" }}>
                eyebrow
              </code>
              ,{" "}
              <code style={{ fontFamily: "ui-monospace, monospace" }}>
                maxWidth
              </code>
              . Pass industry-tuned presets per vertical (HVAC, salon, etc.).
            </li>
            <li>
              <strong>Inputs:</strong> right-aligned, underline-style. Hover and
              focus lift to a soft Neutral 200 bg. Focus underline turns lime.
              Arrow keys nudge by the field&apos;s step. Enter blurs.
            </li>
            <li>
              <strong>Clamping:</strong> 0–500 calls, $0–$100,000 job, 0–100%
              close. Bad/empty input falls back to the lower bound on blur.
            </li>
            <li>
              <strong>Webflow drop-in:</strong> port to a vanilla-JS embed for
              the Custom Code element in the hero section. Tokens map 1:1 to the
              Webflow variables remapped in pre-flight 1.
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
