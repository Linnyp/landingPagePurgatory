"use client";

import { useEffect, useMemo, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ScrollFloat.css";

gsap.registerPlugin(ScrollTrigger);

interface ScrollFloatProps {
  children: string;
  animationDuration?: number;
  ease?: string;
  scrollStart?: string;
  stagger?: number;
  scrollContainerRef?: React.RefObject<HTMLElement>;
  className?: string;
}

const initialState = {
  opacity: 0,
  yPercent: 120,
  scaleY: 2.3,
  scaleX: 0.7,
  transformOrigin: "50% 0%",
};

export default function ScrollFloat({
  children,
  animationDuration = 1,
  ease = "back.inOut(2)",
  scrollStart = "10% bottom",
  stagger = 0.03,
  scrollContainerRef,
  className = "",
}: ScrollFloatProps) {
  const containerRef = useRef<HTMLHeadingElement>(null);

  const chars = useMemo(() => {
    return children.split("").map((char, i) => (
      <span className="char" key={i}>
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const charEls = el.querySelectorAll<HTMLElement>(".char");

    gsap.set(charEls, initialState);

    const trigger = ScrollTrigger.create({
      trigger: el,
      scroller: scrollContainerRef?.current ?? window,
      start: scrollStart,
      onEnter: () => {
        gsap.fromTo(charEls, initialState, {
          opacity: 1,
          yPercent: 0,
          scaleY: 1,
          scaleX: 1,
          duration: animationDuration,
          ease,
          stagger,
        });
      },
      onLeaveBack: () => {
        gsap.set(charEls, initialState);
      },
    });

    return () => {
      trigger.kill();
    };
  }, [animationDuration, ease, scrollStart, stagger, scrollContainerRef]);

  return (
    <h2 ref={containerRef} className={`scroll-float ${className}`}>
      <span className="scroll-float-text">{chars}</span>
    </h2>
  );
}
