"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import ScrollStack, { ScrollStackItem } from "@/components/ScrollStack";
import { problems } from "../../data/problems";
import { SectionLabel } from "../shared/SectionLabel";
import { ProblemCard } from "./ProblemCard";
import "./ProblemSection.css";

const STICKY_TOP_PX = 0; // sticky header pinned to viewport top; opaque bg covers navbar area
const DESKTOP_PIN_PX = 112;

export function ProblemSection() {
  const mobileHeadingRef = useRef<HTMLDivElement>(null);
  const [stackPin, setStackPin] = useState(DESKTOP_PIN_PX);

  // Once the last card stacks, we capture scrollY as the release point. From
  // that point on, a scroll listener lowers the sticky heading's `top` by
  // (scrollY - releaseY) so the heading scrolls up with the stack instead of
  // remaining pinned. Scrolling back above releaseY clears it and the heading
  // re-pins at top: 0.
  const releaseYRef = useRef<number | null>(null);

  const applyHeadingTop = useCallback(() => {
    const el = mobileHeadingRef.current;
    if (!el) return;
    const releaseY = releaseYRef.current;
    if (releaseY === null) {
      el.style.top = "";
      return;
    }
    const delta = window.scrollY - releaseY;
    el.style.top = delta > 0 ? `${-delta}px` : "";
  }, []);

  const handleStackComplete = useCallback(() => {
    releaseYRef.current = window.scrollY;
    applyHeadingTop();
  }, [applyHeadingTop]);

  const handleStackRelease = useCallback(() => {
    releaseYRef.current = null;
    applyHeadingTop();
  }, [applyHeadingTop]);

  useEffect(() => {
    const onScroll = () => {
      if (releaseYRef.current !== null) applyHeadingTop();
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [applyHeadingTop]);

  useEffect(() => {
    const el = mobileHeadingRef.current;
    if (!el) return;

    const measure = () => {
      const isMobile = window.matchMedia("(max-width: 1023px)").matches;
      if (!isMobile) {
        setStackPin(DESKTOP_PIN_PX);
        return;
      }
      setStackPin(STICKY_TOP_PX + el.offsetHeight + 16);
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <section id="problem" aria-label="The Problem" className="bg-sand-50 py-24">
      <div className="mx-auto w-full max-w-brand px-6">
        {/* Mobile-only sticky heading. Sits at section level so its containing
            block spans both the paragraph and the card stack — heading stays
            visible the entire time cards are stacking. */}
        <div
          ref={mobileHeadingRef}
          className="sticky top-0 z-20 -mx-6 -mt-24 bg-sand-50 px-6 pt-24 lg:hidden"
        >
          <SectionLabel text="The Problem" />
          <h2 className="problem-heading font-brand font-black uppercase text-sand-950">
            You&apos;ve Got
            <br />
            99 Problems
            <br />
            <span className="text-clay-500">Marketing </span>
            <br />
            Shouldn&apos;t Be 1
            <br />
          </h2>
          <img
            src="/painPointJuggling.png"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 right-6 h-[calc(100%-6rem)] w-auto max-w-[45%] select-none object-contain"
          />
        </div>

        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[5fr_7fr] lg:gap-16 ">
          {/* Left content column. Sticky on desktop so it pairs with cards. */}
          <div className="lg:sticky lg:top-24">
            <div className="hidden lg:block">
              <SectionLabel text="The Problem" />
              <h2 className="problem-heading font-brand font-black uppercase text-sand-950">
                You&apos;ve Got
                <br />
                99 Problems
                <br />
                <span className="text-clay-500">Marketing </span>
                <br />
                Shouldn&apos;t Be 1
                <br />
              </h2>
            </div>
            <p className="font-brand text-[15px] leading-[1.65] text-sand-600">
              Most local service businesses in Southwest Florida have the same
              problem. Their customers are happy. Their work is solid. But
              somewhere between the last job they finished and the next one
              they&apos;re trying to book, something&apos;s leaking. Leads go to
              a competitor with worse reviews. Calls don&apos;t get returned in
              time. The website hasn&apos;t been touched since 2019. It&apos;s
              not because you don&apos;t care. It&apos;s because you&apos;re
              running a business.
            </p>
            <img
              src="/painPointJuggling.png"
              alt="Illustration of a business owner juggling marketing pain points"
              className="absolute left-0 right-0 top-full hidden h-auto w-full lg:block"
            />
          </div>

          {/* Right: scroll-stacked problem cards */}
          <div>
            <ScrollStack
              className="problem-stack"
              useWindowScroll={true}
              stackPosition="20%"
              stackPositionMin={stackPin}
              itemDistance={10}
              itemStackDistance={14}
              itemScale={0.02}
              baseScale={0.94}
              scaleEndPosition="10%"
              onStackComplete={handleStackComplete}
              onStackRelease={handleStackRelease}
              releaseOnComplete
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
      </div>
    </section>
  );
}
