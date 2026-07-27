/*
 * KeyLime Marketing — Revenue Leak Calculator
 * Generated: 2026-05-17
 * Style: Agencia X (Webflow template) structure · Citrus & Charcoal palette · v4.0
 *
 * All design tokens are inline. Font: Inter (already loaded in app/layout.tsx).
 * Mirrors styleguide.md: warm-neutral surfaces, single lime accent used with
 * discipline, pill-shaped buttons (80px radius), soft Neutral Shadow elevation,
 * letter-spacing -0.03em on every text style.
 */

"use client";

import { useMemo, useState, type CSSProperties, type ReactNode } from "react";

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
} as const;

/* ─────────────────────────────────────────────────────────────────────────── */
/* Domain logic — preserved verbatim from linax-digital RevenueCalculator       */
/* ─────────────────────────────────────────────────────────────────────────── */

type Industry = "homeServices" | "beauty";

const industryConfig: Record<
  Industry,
  {
    label: string;
    callsLabel: string;
    callsHelp: string;
    valueLabel: string;
    valueHelp: string;
    valuePlaceholder: number;
    inquiriesLabel: string;
    inquiriesHelp: string;
    closingLabel: string;
    closingHelp: string;
    monthlyRevenueHelp: string;
  }
> = {
  homeServices: {
    label: "Home services",
    callsLabel: "Daily missed service calls",
    callsHelp:
      "Calls that ring through during business hours and nobody picks up.",
    valueLabel: "Average job value",
    valueHelp: "Typical revenue from one completed job.",
    valuePlaceholder: 350,
    inquiriesLabel: "Daily form / SMS / email inquiries",
    inquiriesHelp:
      "Digital lead volume — web form fills, text messages, email inquiries.",
    closingLabel: "Closing rate on inbound leads",
    closingHelp: "Of the leads you actually reach, how many become jobs.",
    monthlyRevenueHelp:
      "Your typical monthly revenue. Used for the reputation calculation only.",
  },
  beauty: {
    label: "Beauty & personal services",
    callsLabel: "Daily missed booking calls",
    callsHelp:
      "Booking calls that ring during business hours and go unanswered.",
    valueLabel: "Average ticket value",
    valueHelp: "Typical revenue from one client appointment.",
    valuePlaceholder: 120,
    inquiriesLabel: "Daily DM / form / SMS inquiries",
    inquiriesHelp:
      "Digital lead volume — Instagram DMs, web form fills, text messages.",
    closingLabel: "Booking rate on inbound leads",
    closingHelp:
      "Of the leads you actually reach, how many book an appointment.",
    monthlyRevenueHelp:
      "Your typical monthly revenue. Used for the reputation calculation only.",
  },
};

const WORKING_DAYS_PER_MONTH = 22;
const DIGITAL_DAYS_PER_MONTH = 30;
const TEXT_BACK_RECOVERY_RATE = 0.22;

function missedCallLoss(
  dailyMissed: number,
  closingRatePct: number,
  avgValue: number,
): number {
  const monthlyMissed = dailyMissed * WORKING_DAYS_PER_MONTH;
  const recoverableJobs =
    monthlyMissed * TEXT_BACK_RECOVERY_RATE * (closingRatePct / 100);
  return recoverableJobs * avgValue;
}

function reviewBucketPct(reviewCount: number): number {
  if (reviewCount < 11) return 0.053;
  if (reviewCount < 21) return 0.063;
  if (reviewCount < 31) return 0.068;
  if (reviewCount < 41) return 0.07;
  if (reviewCount < 51) return 0.071;
  return 0.08;
}

function reputationLoss(
  currentRating: number,
  currentReviews: number,
  monthlyRevenue: number,
  targetRating: number,
  targetReviews: number,
): { rating: number; volume: number; total: number } {
  const currentBucket = reviewBucketPct(currentReviews);
  const targetBucket = reviewBucketPct(targetReviews);
  const ratingDelta = Math.max(0, targetRating - currentRating);
  const ratingImpact = ratingDelta * currentBucket * monthlyRevenue;
  const aboveBaseline = Math.max(0, currentRating - 3) / 2;
  const volumeImpact =
    Math.max(0, targetBucket - currentBucket) * monthlyRevenue * aboveBaseline;
  return {
    rating: ratingImpact,
    volume: volumeImpact,
    total: ratingImpact + volumeImpact,
  };
}

function responseConversionFactor(minutes: number): number {
  if (minutes <= 5) return 1.0;
  if (minutes <= 30) return 0.7;
  if (minutes <= 60) return 0.5;
  if (minutes <= 240) return 0.35;
  if (minutes <= 1440) return 0.2;
  return 0.1;
}

function speedToLeadLoss(
  dailyInquiries: number,
  closingRatePct: number,
  avgValue: number,
  responseMinutes: number,
): number {
  const monthlyInquiries = dailyInquiries * DIGITAL_DAYS_PER_MONTH;
  const potential = monthlyInquiries * (closingRatePct / 100) * avgValue;
  const factor = responseConversionFactor(responseMinutes);
  return potential * (1 - factor);
}

function realisticTargetReviews(current: number): number {
  if (current < 10) return 60;
  if (current < 30) return current + 60;
  if (current < 100) return current + 75;
  if (current < 250) return current + 70;
  return current + 50;
}

const fmtMoney = (n: number) =>
  n.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });

/* ─────────────────────────────────────────────────────────────────────────── */
/* Reusable text/style helpers                                                  */
/* ─────────────────────────────────────────────────────────────────────────── */

const baseText: CSSProperties = {
  fontFamily: t.font,
  letterSpacing: t.tracking,
};

const eyebrow: CSSProperties = {
  ...baseText,
  display: "inline-flex",
  alignItems: "center",
  gap: 10,
  fontSize: 12,
  lineHeight: "1.5em",
  fontWeight: 600,
  textTransform: "uppercase",
  color: t.n600,
  letterSpacing: "0.08em",
};

const eyebrowDot: CSSProperties = {
  display: "inline-block",
  width: 8,
  height: 8,
  borderRadius: "50%",
  backgroundColor: t.p01,
};

/* ─────────────────────────────────────────────────────────────────────────── */
/* Page                                                                         */
/* ─────────────────────────────────────────────────────────────────────────── */

export default function KeyLimeRevenueCalculatorPage() {
  const [industry, setIndustry] = useState<Industry>("homeServices");

  // Module 1 — missed calls
  const [dailyMissed, setDailyMissed] = useState(4);
  const [closingRate, setClosingRate] = useState(40);
  const [avgValue, setAvgValue] = useState(350);

  // Module 2 — reputation
  const [currentRating, setCurrentRating] = useState(4.2);
  const [currentReviews, setCurrentReviews] = useState(35);
  const [monthlyRevenue, setMonthlyRevenue] = useState(50000);
  const [targetRating, setTargetRating] = useState(4.7);
  const targetReviews = realisticTargetReviews(currentReviews);

  // Module 3 — speed to lead
  const [dailyInquiries, setDailyInquiries] = useState(3);
  const [responseMinutes, setResponseMinutes] = useState(240);

  const cfg = industryConfig[industry];

  const missed = useMemo(
    () => missedCallLoss(dailyMissed, closingRate, avgValue),
    [dailyMissed, closingRate, avgValue],
  );

  const reputation = useMemo(
    () =>
      reputationLoss(
        currentRating,
        currentReviews,
        monthlyRevenue,
        targetRating,
        targetReviews,
      ),
    [
      currentRating,
      currentReviews,
      monthlyRevenue,
      targetRating,
      targetReviews,
    ],
  );

  const speed = useMemo(
    () =>
      speedToLeadLoss(dailyInquiries, closingRate, avgValue, responseMinutes),
    [dailyInquiries, closingRate, avgValue, responseMinutes],
  );

  const monthlyTotal = missed + reputation.total + speed;
  const annualTotal = monthlyTotal * 12;
  const keyLimeMonthly = 195;
  const netMonthly = Math.max(0, monthlyTotal - keyLimeMonthly);
  const netAnnual = netMonthly * 12;

  return (
    <div
      style={{
        ...baseText,
        backgroundColor: t.pageBg,
        minHeight: "100vh",
        paddingTop: 96,
        paddingBottom: 160,
        color: t.n800,
      }}
    >
      <div
        style={{
          maxWidth: 1292,
          margin: "0 auto",
          paddingLeft: 24,
          paddingRight: 24,
        }}
      >
        {/* ── Hero ────────────────────────────────────────────────────── */}
        <header style={{ maxWidth: 820, marginBottom: 64 }}>
          <div style={{ ...eyebrow, marginBottom: 20 }}>
            <span style={eyebrowDot} />
            Free tool — Revenue leak audit
          </div>
          <h1
            style={{
              ...baseText,
              fontSize: 60,
              lineHeight: "1em",
              fontWeight: 600,
              color: t.n800,
              margin: 0,
            }}
          >
            See what your business is losing each month.
          </h1>
          <p
            style={{
              ...baseText,
              marginTop: 24,
              marginBottom: 0,
              fontSize: 18,
              lineHeight: "1.555em",
              color: t.n600,
            }}
          >
            Missed calls. Slow reviews. Slow responses. Most local operators
            leak $20K–$80K a year through three holes they can't see. Punch in
            your numbers — see yours in under three minutes.
          </p>

          {/* Industry selector — pill segmented control */}
          <div
            role="tablist"
            aria-label="Choose industry"
            style={{
              marginTop: 32,
              display: "inline-flex",
              alignItems: "center",
              gap: 4,
              padding: 6,
              backgroundColor: t.n200,
              border: `1px solid ${t.n300}`,
              borderRadius: 80,
            }}
          >
            {(Object.keys(industryConfig) as Industry[]).map((key) => {
              const active = industry === key;
              return (
                <button
                  key={key}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => {
                    setIndustry(key);
                    if (!active) {
                      setAvgValue(industryConfig[key].valuePlaceholder);
                    }
                  }}
                  style={{
                    ...baseText,
                    padding: "10px 22px",
                    border: "none",
                    borderRadius: 80,
                    fontSize: 14,
                    lineHeight: "1.333em",
                    fontWeight: 500,
                    cursor: "pointer",
                    backgroundColor: active ? t.n800 : "transparent",
                    color: active ? t.n100 : t.n700,
                    boxShadow: active ? t.shadow02 : "none",
                    transition: "background-color 200ms ease, color 200ms ease",
                  }}
                >
                  {industryConfig[key].label}
                </button>
              );
            })}
          </div>
        </header>

        {/* ── Two-column layout ───────────────────────────────────────── */}
        <div
          style={{
            display: "grid",
            gap: 40,
            gridTemplateColumns: "minmax(0, 1fr) 340px",
          }}
          className="kl-layout"
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            {/* Module 1 */}
            <Module
              num="01"
              title="Missed phone calls"
              tag="Voice channel"
              fix="Fixed by: Missed-Call Text-Back"
              subtotal={missed}
              methodology={
                <>
                  <p>
                    <strong>Formula:</strong> daily missed calls × 22 working
                    days × 22% recovery rate × your close rate × average value.
                  </p>
                  <p>
                    The 22% recovery rate is a conservative blend of public
                    text-back industry data: roughly 35–50% of recipients
                    engage with the automated text, and 50–70% of those
                    engagements convert. Midpoint ≈ 22%.
                  </p>
                  <p>
                    This is what you'd recover with text-back — not the gross
                    leak. The remaining 78% of missed calls would still go to
                    a competitor.
                  </p>
                </>
              }
            >
              <NumberField
                label={cfg.callsLabel}
                help={cfg.callsHelp}
                value={dailyMissed}
                onChange={setDailyMissed}
                min={0}
                max={50}
                suffix="/ day"
              />
              <PercentDropdownField
                label={cfg.closingLabel}
                help={cfg.closingHelp}
                value={closingRate}
                onChange={setClosingRate}
              />
              <NumberField
                label={cfg.valueLabel}
                help={cfg.valueHelp}
                value={avgValue}
                onChange={setAvgValue}
                min={0}
                step={10}
                prefix="$"
              />
            </Module>

            {/* Module 2 */}
            <Module
              num="02"
              title="Google reputation gap"
              tag="Pre-inquiry visibility"
              fix="Fixed by: Reputation Management"
              subtotal={reputation.total}
              methodology={
                <>
                  <p>
                    <strong>Source:</strong> Luca,{" "}
                    <em>
                      Reviews, Reputation, and Revenue: The Case of Yelp.com
                    </em>{" "}
                    (Harvard Business School, 2016). One full star of rating
                    lifts revenue 5.3–8.0% — but the size of the effect
                    depends on how many reviews back it up.
                  </p>
                  <p>
                    <strong>Bucket scaling:</strong> &lt;10 reviews → 5.3%,
                    11–20 → 6.3%, 21–30 → 6.8%, 31–40 → 7.0%, 41–50 → 7.1%,
                    50+ → 8.0% per star. Findings were strongest for
                    independent operators — exactly the KeyLime profile.
                  </p>
                  <p>
                    <strong>Two levers shown separately:</strong> raising the
                    rating works inside your current review bucket; raising
                    the review count makes every star you have count for
                    more. Diminishing-returns shape past ~50 reviews.
                  </p>
                  <p style={{ color: t.n600, margin: 0 }}>
                    Rating impact: {fmtMoney(reputation.rating)} / mo &middot;
                    Volume impact: {fmtMoney(reputation.volume)} / mo
                  </p>
                </>
              }
            >
              <NumberField
                label="Current Google rating"
                help="Your current average star rating, 1.0 to 5.0."
                value={currentRating}
                onChange={setCurrentRating}
                min={1}
                max={5}
                step={0.1}
                suffix="★"
              />
              <NumberField
                label="Current review count"
                help="Total Google reviews on your business profile today."
                value={currentReviews}
                onChange={setCurrentReviews}
                min={0}
                step={1}
              />
              <NumberField
                label="Monthly revenue"
                help={cfg.monthlyRevenueHelp}
                value={monthlyRevenue}
                onChange={setMonthlyRevenue}
                min={0}
                step={1000}
                prefix="$"
              />
              <NumberField
                label="Target rating"
                help="Realistic ceiling once Reputation Management is running. Default 4.7."
                value={targetRating}
                onChange={setTargetRating}
                min={1}
                max={5}
                step={0.1}
                suffix="★"
              />
              <ReadonlyField
                label="Realistic 6–12 month target reviews"
                value={`${targetReviews} reviews`}
                help="Auto-calculated from your current review count. Reflects what automated post-job review requests realistically generate — additive growth that dampens as you scale past 200+ reviews."
              />
            </Module>

            {/* Module 3 */}
            <Module
              num="03"
              title="Slow response to digital inquiries"
              tag="Digital channels"
              fix="Fixed by: Speed-to-Lead automation"
              subtotal={speed}
              methodology={
                <>
                  <p>
                    <strong>Sources:</strong> Oldroyd (MIT) — odds of
                    qualifying a lead drop 21× from 5 minutes to 30 minutes.
                    Harvard <em>Short Life of Online Sales Leads</em> — odds
                    of contact drop ~10× after the first hour.
                  </p>
                  <p>
                    <strong>Conservative dampening:</strong> we model
                    conversion drops as 6× (not 21×) to keep the number
                    defensible. Response-time conversion factors: &lt;5 min =
                    100%, ≤30 min = 70%, ≤1 hr = 50%, ≤4 hr = 35%, ≤24 hr =
                    20%, &gt;24 hr = 10%.
                  </p>
                  <p>
                    <strong>Channel-only:</strong> this module covers digital
                    inquiries (form, SMS, DM, email). Voice missed calls are
                    counted separately in module 01 to avoid double-counting.
                  </p>
                </>
              }
            >
              <NumberField
                label={cfg.inquiriesLabel}
                help={cfg.inquiriesHelp}
                value={dailyInquiries}
                onChange={setDailyInquiries}
                min={0}
                max={100}
                suffix="/ day"
              />
              <ResponseTimeField
                value={responseMinutes}
                onChange={setResponseMinutes}
              />
              <ReadonlyField
                label="Close rate (from module 01)"
                value={`${closingRate}%`}
              />
              <ReadonlyField
                label={`${cfg.valueLabel} (from module 01)`}
                value={fmtMoney(avgValue)}
              />
            </Module>

            {/* Final results — dark charcoal feature panel */}
            <div
              style={{
                backgroundColor: t.n800,
                color: t.n100,
                borderRadius: 24,
                padding: 48,
                boxShadow: t.shadow05,
              }}
              className="kl-final"
            >
              <div
                style={{
                  ...eyebrow,
                  color: t.p01,
                  marginBottom: 24,
                }}
              >
                <span style={eyebrowDot} />
                Your revenue leak
              </div>
              <div
                style={{
                  display: "grid",
                  gap: 32,
                  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                }}
                className="kl-results-grid"
              >
                <ResultBlock
                  label="You're leaking"
                  monthly={monthlyTotal}
                  annual={annualTotal}
                  tone="leak"
                />
                <ResultBlock
                  label="KeyLime Growth tier"
                  monthly={keyLimeMonthly}
                  annual={keyLimeMonthly * 12}
                  tone="neutral"
                />
                <ResultBlock
                  label="What you'd net"
                  monthly={netMonthly}
                  annual={netAnnual}
                  tone="net"
                />
              </div>
              <div
                style={{
                  marginTop: 40,
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 12,
                }}
              >
                <a
                  href="#book"
                  style={{
                    ...baseText,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "14px 28px",
                    borderRadius: 80,
                    border: `1px solid ${t.p01}`,
                    backgroundColor: t.p01,
                    color: t.n800,
                    fontSize: 18,
                    lineHeight: "1.333em",
                    fontWeight: 500,
                    textDecoration: "none",
                    boxShadow: t.primaryShadow03,
                    transition: "transform 300ms ease",
                  }}
                >
                  Email me the full breakdown →
                </a>
                <a
                  href="#tiers"
                  style={{
                    ...baseText,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "14px 28px",
                    borderRadius: 80,
                    border: `1px solid ${t.n100}`,
                    backgroundColor: "transparent",
                    color: t.n100,
                    fontSize: 18,
                    lineHeight: "1.333em",
                    fontWeight: 500,
                    textDecoration: "none",
                    transition: "transform 300ms ease",
                  }}
                >
                  See which tier fixes this
                </a>
              </div>
              <p
                style={{
                  ...baseText,
                  marginTop: 24,
                  marginBottom: 0,
                  fontSize: 12,
                  lineHeight: "1.5em",
                  color: "rgba(240, 242, 235, 0.7)",
                }}
              >
                All calculations use conservative public-research multipliers.
                Numbers are an estimate, not a guarantee — your actual leak
                depends on your business, market, and the recovery curves
                you'd see in practice.
              </p>
            </div>
          </div>

          {/* ── Sticky running total ──────────────────────────────────── */}
          <aside className="kl-aside">
            <div
              style={{
                backgroundColor: t.n100,
                border: `1px solid ${t.n300}`,
                borderRadius: 24,
                padding: 28,
                boxShadow: t.shadow03,
              }}
            >
              <div style={{ ...eyebrow, marginBottom: 16 }}>
                <span style={eyebrowDot} />
                Running total
              </div>

              <RunningRow
                label="Missed calls"
                value={missed}
                active={missed > 0}
              />
              <RunningRow
                label="Reputation gap"
                value={reputation.total}
                active={reputation.total > 0}
              />
              <RunningRow
                label="Slow responses"
                value={speed}
                active={speed > 0}
              />

              <div
                style={{
                  marginTop: 20,
                  paddingTop: 20,
                  borderTop: `1px solid ${t.n300}`,
                }}
              >
                <div
                  style={{
                    ...baseText,
                    fontSize: 11,
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: t.n600,
                  }}
                >
                  Monthly loss
                </div>
                <div
                  style={{
                    ...baseText,
                    marginTop: 4,
                    fontSize: 30,
                    lineHeight: "1.2em",
                    fontWeight: 700,
                    color: t.n800,
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  {fmtMoney(monthlyTotal)}
                </div>
              </div>

              <div style={{ marginTop: 16 }}>
                <div
                  style={{
                    ...baseText,
                    fontSize: 11,
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: t.n600,
                  }}
                >
                  Annual loss
                </div>
                <div
                  style={{
                    ...baseText,
                    marginTop: 4,
                    fontSize: 24,
                    lineHeight: "1.333em",
                    fontWeight: 700,
                    color: t.p04,
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  {fmtMoney(annualTotal)}
                </div>
              </div>

              <div
                style={{
                  ...baseText,
                  marginTop: 24,
                  paddingTop: 20,
                  borderTop: `1px solid ${t.n200}`,
                  fontSize: 13,
                  lineHeight: "1.5em",
                  color: t.n600,
                }}
              >
                KeyLime Growth tier is{" "}
                <strong style={{ color: t.n800 }}>$195/mo</strong> — about{" "}
                {monthlyTotal > 0
                  ? `${(monthlyTotal / keyLimeMonthly).toFixed(1)}× less`
                  : "less"}{" "}
                than your current leak.
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Responsive + native control resets */}
      <style>{`
        .kl-aside { position: sticky; top: 96px; align-self: flex-start; }
        @media (max-width: 991px) {
          .kl-layout { grid-template-columns: minmax(0, 1fr) !important; }
          .kl-aside { position: static; }
          .kl-final { padding: 32px !important; }
          .kl-results-grid { grid-template-columns: minmax(0, 1fr) !important; }
        }
        @media (max-width: 767px) {
          h1 { font-size: 40px !important; }
        }
        .kl-input:focus, .kl-select:focus { outline: none; }
        .kl-input::-webkit-outer-spin-button,
        .kl-input::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        .kl-input[type=number] { -moz-appearance: textfield; }
      `}</style>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────── */
/* Sub-components                                                               */
/* ─────────────────────────────────────────────────────────────────────────── */

function Module({
  num,
  title,
  tag,
  fix,
  subtotal,
  children,
  methodology,
}: {
  num: string;
  title: string;
  tag: string;
  fix: string;
  subtotal: number;
  children: ReactNode;
  methodology: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <section
      style={{
        backgroundColor: t.n100,
        border: `1px solid ${t.n300}`,
        borderRadius: 24,
        padding: 40,
        boxShadow: t.shadow03,
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "baseline",
          justifyContent: "space-between",
          gap: "8px 24px",
          marginBottom: 28,
        }}
      >
        <div>
          <div
            style={{
              ...baseText,
              fontSize: 12,
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: t.n600,
            }}
          >
            Module {num} &middot; {tag}
          </div>
          <h2
            style={{
              ...baseText,
              margin: "6px 0 0",
              fontSize: 30,
              lineHeight: "1.2em",
              fontWeight: 600,
              color: t.n800,
            }}
          >
            {title}
          </h2>
          <div
            style={{
              ...baseText,
              marginTop: 6,
              fontSize: 12,
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              color: t.p03,
            }}
          >
            {fix}
          </div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div
            style={{
              ...baseText,
              fontSize: 11,
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: t.n600,
            }}
          >
            Subtotal
          </div>
          <div
            style={{
              ...baseText,
              marginTop: 4,
              fontSize: 30,
              lineHeight: "1.2em",
              fontWeight: 700,
              color: t.n800,
              fontVariantNumeric: "tabular-nums",
            }}
          >
            {fmtMoney(subtotal)}
            <span
              style={{
                ...baseText,
                marginLeft: 4,
                fontSize: 14,
                fontWeight: 500,
                color: t.n600,
              }}
            >
              / mo
            </span>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gap: 20,
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        }}
      >
        {children}
      </div>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        style={{
          ...baseText,
          marginTop: 28,
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          padding: 0,
          background: "none",
          border: "none",
          cursor: "pointer",
          fontSize: 13,
          fontWeight: 600,
          color: t.n700,
        }}
      >
        <span aria-hidden>{open ? "▾" : "▸"}</span>
        How we calculate this
      </button>
      {open && (
        <div
          style={{
            marginTop: 16,
            padding: 20,
            borderRadius: 16,
            borderLeft: `3px solid ${t.p01}`,
            backgroundColor: t.n200,
            color: t.n600,
            fontSize: 14,
            lineHeight: "1.555em",
            ...baseText,
          }}
        >
          <div style={{ display: "grid", gap: 12 }}>
            {methodology}
          </div>
        </div>
      )}
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────── */

const fieldLabel: CSSProperties = {
  ...baseText,
  fontSize: 12,
  fontWeight: 600,
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  color: t.n800,
};

const fieldHelp: CSSProperties = {
  ...baseText,
  fontSize: 12,
  lineHeight: "1.5em",
  color: t.n600,
};

const fieldShellBase: CSSProperties = {
  display: "flex",
  alignItems: "stretch",
  border: `1px solid ${t.n400}`,
  borderRadius: 8,
  backgroundColor: t.n100,
  overflow: "hidden",
  transition: "border-color 200ms ease, box-shadow 200ms ease",
};

function NumberField({
  label,
  help,
  value,
  onChange,
  min,
  max,
  step = 1,
  prefix,
  suffix,
}: {
  label: string;
  help?: string;
  value: number;
  onChange: (v: number) => void;
  min?: number;
  max?: number;
  step?: number;
  prefix?: string;
  suffix?: string;
}) {
  const [focused, setFocused] = useState(false);
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <span style={fieldLabel}>{label}</span>
      <div
        style={{
          ...fieldShellBase,
          borderColor: focused ? t.p02 : t.n400,
          boxShadow: focused ? `0 0 0 3px ${t.greenSoft}` : "none",
        }}
      >
        {prefix && (
          <span
            style={{
              ...baseText,
              display: "flex",
              alignItems: "center",
              padding: "0 14px",
              backgroundColor: t.n200,
              fontSize: 14,
              fontWeight: 600,
              color: t.n700,
              borderRight: `1px solid ${t.n300}`,
            }}
          >
            {prefix}
          </span>
        )}
        <input
          className="kl-input"
          type="number"
          value={Number.isFinite(value) ? value : ""}
          onChange={(e) => {
            const n = Number(e.target.value);
            onChange(Number.isFinite(n) ? n : 0);
          }}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          min={min}
          max={max}
          step={step}
          style={{
            ...baseText,
            width: "100%",
            background: "transparent",
            border: "none",
            padding: "12px 14px",
            fontSize: 16,
            color: t.n800,
            fontVariantNumeric: "tabular-nums",
            outline: "none",
          }}
        />
        {suffix && (
          <span
            style={{
              ...baseText,
              display: "flex",
              alignItems: "center",
              padding: "0 14px",
              backgroundColor: t.n200,
              fontSize: 14,
              fontWeight: 600,
              color: t.n700,
              borderLeft: `1px solid ${t.n300}`,
            }}
          >
            {suffix}
          </span>
        )}
      </div>
      {help && <span style={fieldHelp}>{help}</span>}
    </label>
  );
}

function PercentDropdownField({
  label,
  help,
  value,
  onChange,
}: {
  label: string;
  help?: string;
  value: number;
  onChange: (v: number) => void;
}) {
  const [focused, setFocused] = useState(false);
  const options = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <span style={fieldLabel}>{label}</span>
      <div
        style={{
          ...fieldShellBase,
          borderColor: focused ? t.p02 : t.n400,
          boxShadow: focused ? `0 0 0 3px ${t.greenSoft}` : "none",
        }}
      >
        <select
          className="kl-select"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            ...baseText,
            width: "100%",
            background: "transparent",
            border: "none",
            padding: "12px 14px",
            fontSize: 16,
            color: t.n800,
            outline: "none",
            appearance: "none",
            backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='${encodeURIComponent(
              t.n700,
            )}' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'/></svg>")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right 14px center",
            paddingRight: 40,
          }}
        >
          {options.map((pct) => (
            <option key={pct} value={pct}>
              {pct}%
            </option>
          ))}
        </select>
      </div>
      {help && <span style={fieldHelp}>{help}</span>}
    </label>
  );
}

function ResponseTimeField({
  value,
  onChange,
}: {
  value: number;
  onChange: (v: number) => void;
}) {
  const [focused, setFocused] = useState(false);
  const options = [
    { mins: 5, label: "Under 5 minutes" },
    { mins: 30, label: "5–30 minutes" },
    { mins: 60, label: "30–60 minutes" },
    { mins: 240, label: "1–4 hours" },
    { mins: 1440, label: "4–24 hours" },
    { mins: 2880, label: "Over a day" },
  ];
  return (
    <label
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 8,
        gridColumn: "1 / -1",
      }}
    >
      <span style={fieldLabel}>
        Average response time to digital inquiries
      </span>
      <div
        style={{
          ...fieldShellBase,
          borderColor: focused ? t.p02 : t.n400,
          boxShadow: focused ? `0 0 0 3px ${t.greenSoft}` : "none",
        }}
      >
        <select
          className="kl-select"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            ...baseText,
            width: "100%",
            background: "transparent",
            border: "none",
            padding: "12px 14px",
            fontSize: 16,
            color: t.n800,
            outline: "none",
            appearance: "none",
            backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='${encodeURIComponent(
              t.n700,
            )}' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'/></svg>")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right 14px center",
            paddingRight: 40,
          }}
        >
          {options.map((o) => (
            <option key={o.mins} value={o.mins}>
              {o.label}
            </option>
          ))}
        </select>
      </div>
      <span style={fieldHelp}>
        Honest answer — how long between a form / DM / SMS coming in and someone
        actually replying.
      </span>
    </label>
  );
}

function ReadonlyField({
  label,
  value,
  help,
}: {
  label: string;
  value: string;
  help?: string;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <span style={{ ...fieldLabel, color: t.n600 }}>{label}</span>
      <div
        style={{
          ...baseText,
          display: "flex",
          alignItems: "center",
          padding: "12px 14px",
          border: `1px dashed ${t.n400}`,
          borderRadius: 8,
          backgroundColor: t.n200,
          fontSize: 16,
          color: t.n700,
          fontVariantNumeric: "tabular-nums",
        }}
      >
        {value}
      </div>
      {help && <span style={fieldHelp}>{help}</span>}
    </div>
  );
}

function RunningRow({
  label,
  value,
  active,
}: {
  label: string;
  value: number;
  active: boolean;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px 0",
        borderBottom: `1px solid ${t.n200}`,
      }}
    >
      <span
        style={{
          ...baseText,
          fontSize: 14,
          color: active ? t.n800 : t.n500,
        }}
      >
        {label}
      </span>
      <span
        style={{
          ...baseText,
          fontSize: 15,
          fontWeight: 600,
          color: active ? t.n800 : t.n500,
          fontVariantNumeric: "tabular-nums",
        }}
      >
        {fmtMoney(value)}
      </span>
    </div>
  );
}

function ResultBlock({
  label,
  monthly,
  annual,
  tone,
}: {
  label: string;
  monthly: number;
  annual: number;
  tone: "leak" | "neutral" | "net";
}) {
  const valueColor =
    tone === "leak" ? t.p01 : tone === "net" ? t.p01 : t.n100;
  return (
    <div>
      <div
        style={{
          ...baseText,
          fontSize: 11,
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          color: "rgba(240, 242, 235, 0.7)",
        }}
      >
        {label}
      </div>
      <div
        style={{
          ...baseText,
          marginTop: 8,
          fontSize: 40,
          lineHeight: "1em",
          fontWeight: 700,
          color: valueColor,
          fontVariantNumeric: "tabular-nums",
        }}
      >
        {fmtMoney(monthly)}
        <span
          style={{
            ...baseText,
            marginLeft: 6,
            fontSize: 16,
            fontWeight: 500,
            color: "rgba(240, 242, 235, 0.7)",
          }}
        >
          / mo
        </span>
      </div>
      <div
        style={{
          ...baseText,
          marginTop: 6,
          fontSize: 14,
          fontWeight: 600,
          color: t.n200,
          fontVariantNumeric: "tabular-nums",
        }}
      >
        {fmtMoney(annual)}{" "}
        <span style={{ color: "rgba(240, 242, 235, 0.7)", fontWeight: 500 }}>
          / yr
        </span>
      </div>
    </div>
  );
}
