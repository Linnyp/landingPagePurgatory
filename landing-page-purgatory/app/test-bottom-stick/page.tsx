"use client";

import { useEffect, useRef, type CSSProperties } from "react";

/* ─────────────────────────────────────────────────────────────────────────── */
/* Test page — bottom-stick left column + float-up card stack                   */
/*                                                                              */
/* Choreography (matches the spec in the prompt):                               */
/*                                                                              */
/*   1. Section enters viewport from below. As the user scrolls, the section's  */
/*      top reaches viewport top — sticky pin engages.                          */
/*   2. Inside the pinned viewport, the left column content is anchored to the  */
/*      bottom of the viewport (it's "stuck to the bottom of the screen").      */
/*   3. As the user continues to scroll, cards float up from just below the     */
/*      fold and stack at the top of the right column. Earlier cards scale      */
/*      down as later cards arrive.                                             */
/*   4. After the final card stacks, the section's track scroll ends, the pin   */
/*      releases, and the page scrolls on to the next section.                  */
/* ─────────────────────────────────────────────────────────────────────────── */

const t = {
  font: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
  tracking: "-0.03em",
  n100: "#FFFFFF",
  n200: "#F0F2EB",
  n300: "#DCDDD7",
  n600: "#4F524B",
  n800: "#1C1E1A",
  p01: "#A4D639",
  p02: "#6FA51F",
  p04: "#436C0E",
  pageBg: "#FBFBF7",
} as const;

const BULLETS = [
  {
    title: "You miss a call on the job, and the next business on Google gets it.",
    body: "By the time you wipe your hands and call back, they've booked the next shop on the list.",
  },
  {
    title: "Your reviews live in three places and your messages live in five.",
    body: "Google, Yelp, Facebook, the texts, the DMs, the front desk — six places, one customer.",
  },
  {
    title: "You're paying for tools your team barely logs into.",
    body: "Two CRMs, a booking app, an email tool, a separate texting app. None of them know about each other.",
  },
  {
    title: "Your Google listing doesn't reflect the quality of your work.",
    body: "Newer shop, fewer years of work — but a cleaner profile and a higher star count. The listing wins.",
  },
] as const;

const TOTAL = BULLETS.length;

// Scroll-progress segmentation across the track (0 → 1):
//   [0.00, 0.05]                — pin engages; card 01 already visible
//                                 alongside the left column.
//   [0.05, STACK_END]           — cards 02..N float up from below the fold
//                                 and stack on top of card 01 (each takes
//                                 ENTRY_SPAN of scroll).
//   [STACK_END, 1.00]           — hold, then sticky releases.
const ENTRY_START = 0.05;
const ENTRY_SPAN = 0.27;
const STACK_END = ENTRY_START + ENTRY_SPAN * (TOTAL - 1); // 0.86 for 4 cards
const SCALE_STEP = 0.04;

function clamp01(n: number): number {
  return n < 0 ? 0 : n > 1 ? 1 : n;
}

export default function TestBottomStickPage() {
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    function update() {
      const track = trackRef.current;
      if (!track) return;
      const rect = track.getBoundingClientRect();
      const scrollDistance = track.offsetHeight - window.innerHeight;
      if (scrollDistance <= 0) return;
      const progress = clamp01(-rect.top / scrollDistance);

      for (let i = 0; i < TOTAL; i++) {
        const el = cardRefs.current[i];
        if (!el) continue;

        let yVh = 0;
        let opacity = 1;
        let scale = 1;

        if (i > 0) {
          // Card 02 onward: float up from translateY(100vh) to translateY(0)
          // over their assigned entry window.
          const entryStart = ENTRY_START + (i - 1) * ENTRY_SPAN;
          const entryEnd = entryStart + ENTRY_SPAN;
          const entryT = clamp01(
            (progress - entryStart) / (entryEnd - entryStart)
          );
          yVh = (1 - entryT) * 100;
          opacity = entryT < 0.25 ? clamp01(entryT / 0.25) : 1;
        }

        // Stack-back scaling: every card except the topmost shrinks as later
        // cards arrive. Card i scales toward 1 - (TOTAL-1-i)*SCALE_STEP over
        // the window [scaleStart, STACK_END], where scaleStart is the moment
        // the next card (i+1) begins entering.
        if (i < TOTAL - 1) {
          const finalScale = 1 - (TOTAL - 1 - i) * SCALE_STEP;
          const scaleStart = ENTRY_START + i * ENTRY_SPAN;
          if (progress > scaleStart) {
            const scaleT = clamp01(
              (progress - scaleStart) / (STACK_END - scaleStart)
            );
            scale = 1 + (finalScale - 1) * scaleT;
          }
        }

        el.style.transform = `translateY(${yVh}vh) scale(${scale})`;
        el.style.opacity = String(opacity);
      }
    }

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  // Track total height = pin engagement (100vh) + scroll distance during pin.
  // Pin distance ~= (TOTAL - 1) * 100vh of scroll, since only TOTAL - 1 cards
  // need entry distance now (card 01 is already in place when pin starts).
  const pinScroll = (TOTAL - 1) * 100 + 60; // 360vh for 4 cards (with hold)
  const trackHeight = `${100 + pinScroll}vh`;

  return (
    <main
      style={{
        backgroundColor: t.pageBg,
        fontFamily: t.font,
        color: t.n800,
        letterSpacing: t.tracking,
        minHeight: "100vh",
      }}
    >
      <SpacerSection
        label="Before"
        title="Scroll down to enter the pinned section"
      />

      <section style={{ backgroundColor: t.n200 }}>
        <div
          ref={trackRef}
          style={{ position: "relative", height: trackHeight }}
        >
          <div
            style={{
              position: "sticky",
              top: 0,
              height: "100vh",
              overflow: "hidden",
            }}
          >
            {/* Flex container bottom-anchors the grid in the pinned viewport */}
            <div
              style={{
                maxWidth: 1292,
                width: "100%",
                margin: "0 auto",
                padding: "80px 24px 96px",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
              }}
            >
              {/* Grid top-aligns left and right so their tops match, ensuring
                 the heading and card 01 enter the viewport simultaneously. */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "5fr 7fr",
                  gap: 96,
                  alignItems: "start",
                }}
              >
              {/* Left column — heading content */}
              <div style={{ maxWidth: 520 }}>
                <p
                  style={{
                    fontFamily: t.font,
                    fontSize: 12,
                    lineHeight: 1.5,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    fontWeight: 600,
                    color: t.p04,
                    margin: "0 0 16px 0",
                  }}
                >
                  Core Problems
                </p>
                <h2
                  style={{
                    fontFamily: t.font,
                    fontSize: 48,
                    lineHeight: 1.05,
                    letterSpacing: t.tracking,
                    fontWeight: 600,
                    color: t.n800,
                    margin: 0,
                  }}
                >
                  This is what&rsquo;s actually going on.
                </h2>
                <p
                  style={{
                    fontFamily: t.font,
                    fontSize: 16,
                    lineHeight: 1.5,
                    letterSpacing: t.tracking,
                    color: t.n600,
                    margin: "24px 0 0 0",
                  }}
                >
                  You feel it before you see it. The leaks below are showing
                  up in almost every local operator we talk to &mdash; not
                  because the work is bad, but because the system around it
                  is.
                </p>
              </div>

              {/* Right column — card stack area. Absolute cards inside align
                 to its top (which equals the heading top via grid align-items: start) */}
              <div style={{ position: "relative" }}>
                {BULLETS.map((b, i) => (
                  <article
                    key={i}
                    ref={(el) => {
                      cardRefs.current[i] = el;
                    }}
                    style={cardStyle(i)}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        marginBottom: 24,
                      }}
                    >
                      <span
                        style={{
                          fontFamily: t.font,
                          fontSize: 12,
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          fontWeight: 700,
                          color: t.p02,
                        }}
                      >
                        0{i + 1}
                      </span>
                    </div>
                    <h3
                      style={{
                        fontFamily: t.font,
                        fontSize: 24,
                        lineHeight: 1.333,
                        letterSpacing: t.tracking,
                        fontWeight: 600,
                        color: t.n800,
                        margin: 0,
                      }}
                    >
                      {b.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: t.font,
                        fontSize: 16,
                        lineHeight: 1.5,
                        letterSpacing: t.tracking,
                        color: t.n600,
                        margin: "16px 0 0 0",
                      }}
                    >
                      {b.body}
                    </p>
                  </article>
                ))}
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SpacerSection
        label="After"
        title="Section released — scrolling on."
      />
    </main>
  );
}

function cardStyle(i: number): CSSProperties {
  const isFirst = i === 0;
  // All cards share the same rest position (top: 0 of right column). With the
  // grid using align-items: start, the right column's top equals the heading's
  // top — so card 01's rest position is aligned with the heading top and they
  // enter the viewport together.
  return {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: i + 1,
    backgroundColor: t.n100,
    borderRadius: 24,
    padding: "48px 40px",
    boxShadow: "0 2px 6px 0 rgba(28,30,26,0.14)",
    transformOrigin: "top center",
    willChange: "transform, opacity",
    opacity: isFirst ? 1 : 0,
    transform: isFirst
      ? "translateY(0vh) scale(1)"
      : "translateY(100vh) scale(1)",
  };
}

function SpacerSection({
  label,
  title,
}: {
  label: string;
  title: string;
}) {
  return (
    <section
      style={{
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 48,
        backgroundColor: t.pageBg,
      }}
    >
      <div style={{ maxWidth: 720, textAlign: "center" }}>
        <p
          style={{
            fontSize: 12,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            fontWeight: 600,
            color: t.p04,
            margin: 0,
          }}
        >
          {label}
        </p>
        <h1
          style={{
            fontSize: 48,
            margin: "16px 0 0 0",
            letterSpacing: t.tracking,
            lineHeight: 1.05,
            fontWeight: 600,
            color: t.n800,
          }}
        >
          {title}
        </h1>
      </div>
    </section>
  );
}
