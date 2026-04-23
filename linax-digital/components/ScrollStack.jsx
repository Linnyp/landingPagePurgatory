'use client';

import { useLayoutEffect, useEffect, useRef, useCallback } from 'react';
import Lenis from 'lenis';
import './ScrollStack.css';

export const ScrollStackItem = ({ children, itemClassName = '' }) => (
  <div className={`scroll-stack-card ${itemClassName}`.trim()}>{children}</div>
);

const ScrollStack = ({
  children,
  className = '',
  itemDistance = 100,
  itemScale = 0.03,
  itemStackDistance = 30,
  stackPosition = '20%',
  stackPositionMin = 0,
  scaleEndPosition = '10%',
  baseScale = 0.85,
  scaleDuration = 0.5,
  rotationAmount = 0,
  blurAmount = 0,
  useWindowScroll = false,
  onStackComplete,
  onStackRelease,
  releaseOnComplete = false
}) => {
  const scrollerRef = useRef(null);
  const stackCompletedRef = useRef(false);
  const animationFrameRef = useRef(null);
  const lenisRef = useRef(null);
  const cardsRef = useRef([]);
  const lastTransformsRef = useRef(new Map());
  const cardOffsetsRef = useRef([]);
  const endOffsetRef = useRef(0);
  // Lenis's scroll callback calls through this ref so we don't have to
  // recreate Lenis whenever the update function's closure changes.
  const updateRef = useRef(() => {});

  const getScrollData = useCallback(() => {
    if (useWindowScroll) {
      return { scrollTop: window.scrollY, containerHeight: window.innerHeight };
    }
    const scroller = scrollerRef.current;
    return {
      scrollTop: scroller ? scroller.scrollTop : 0,
      containerHeight: scroller ? scroller.clientHeight : 0
    };
  }, [useWindowScroll]);

  // Lenis lifecycle — only rebuilds when scroll mode changes.
  useEffect(() => {
    const baseOptions = {
      duration: 1.2,
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
      infinite: false,
      wheelMultiplier: 1,
      lerp: 0.1,
      syncTouch: true,
      syncTouchLerp: 0.075
    };

    let lenis;
    if (useWindowScroll) {
      lenis = new Lenis(baseOptions);
    } else {
      const scroller = scrollerRef.current;
      if (!scroller) return;
      lenis = new Lenis({
        ...baseOptions,
        wrapper: scroller,
        content: scroller.querySelector('.scroll-stack-inner'),
        gestureOrientationHandler: true,
        normalizeWheel: true,
        touchInertiaMultiplier: 35,
        touchInertia: 0.6
      });
    }

    lenis.on('scroll', () => updateRef.current());

    const raf = time => {
      lenis.raf(time);
      animationFrameRef.current = requestAnimationFrame(raf);
    };
    animationFrameRef.current = requestAnimationFrame(raf);
    lenisRef.current = lenis;

    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [useWindowScroll]);

  // Layout + transform pipeline. Re-runs when visual props change.
  useLayoutEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const cards = Array.from(
      useWindowScroll
        ? document.querySelectorAll('.scroll-stack-card')
        : scroller.querySelectorAll('.scroll-stack-card')
    );
    cardsRef.current = cards;

    cards.forEach((card, i) => {
      if (i < cards.length - 1) card.style.marginBottom = `${itemDistance}px`;
      card.style.willChange = 'transform, filter';
      card.style.transformOrigin = 'top center';
      card.style.backfaceVisibility = 'hidden';
      card.style.perspective = '1000px';
    });

    const endEl = useWindowScroll
      ? document.querySelector('.scroll-stack-end')
      : scroller.querySelector('.scroll-stack-end');

    const parsePct = (value, h) =>
      typeof value === 'string' && value.includes('%')
        ? (parseFloat(value) / 100) * h
        : parseFloat(value);

    const update = () => {
      if (!cardsRef.current.length) return;
      const { scrollTop, containerHeight } = getScrollData();
      const stackPositionPx = Math.max(
        parsePct(stackPosition, containerHeight),
        stackPositionMin
      );
      const scaleEndPositionPx = parsePct(scaleEndPosition, containerHeight);
      const endElementTop = endOffsetRef.current;
      // When releaseOnComplete is set, all cards unpin the moment the last
      // card reaches its stack position, so the stack scrolls away as a unit
      // instead of hovering while the page continues past pinEnd.
      const lastIdx = cardsRef.current.length - 1;
      const lastPinStart =
        lastIdx >= 0
          ? cardOffsetsRef.current[lastIdx] -
            stackPositionPx -
            itemStackDistance * lastIdx
          : 0;

      // Compute top-of-stack once; the original code did this O(n) per card.
      let topCardIndex = 0;
      if (blurAmount) {
        for (let j = 0; j < cardsRef.current.length; j++) {
          const jCardTop = cardOffsetsRef.current[j];
          const jTriggerStart = jCardTop - stackPositionPx - itemStackDistance * j;
          if (scrollTop >= jTriggerStart) topCardIndex = j;
        }
      }

      for (let i = 0; i < cardsRef.current.length; i++) {
        const card = cardsRef.current[i];
        if (!card) continue;

        const cardTop = cardOffsetsRef.current[i];
        const triggerStart = cardTop - stackPositionPx - itemStackDistance * i;
        const triggerEnd = cardTop - scaleEndPositionPx;
        const pinStart = triggerStart;
        const pinEnd = releaseOnComplete
          ? lastPinStart
          : endElementTop - containerHeight / 2;

        const scaleProgress =
          scrollTop < triggerStart
            ? 0
            : scrollTop > triggerEnd
              ? 1
              : (scrollTop - triggerStart) / (triggerEnd - triggerStart);

        const targetScale = baseScale + i * itemScale;
        const scale = 1 - scaleProgress * (1 - targetScale);
        const rotation = rotationAmount ? i * rotationAmount * scaleProgress : 0;

        let blur = 0;
        if (blurAmount && i < topCardIndex) {
          blur = Math.max(0, (topCardIndex - i) * blurAmount);
        }

        const isPinned = scrollTop >= pinStart && scrollTop <= pinEnd;
        let translateY = 0;
        if (isPinned) {
          translateY = scrollTop - cardTop + stackPositionPx + itemStackDistance * i;
        } else if (scrollTop > pinEnd) {
          translateY = pinEnd - cardTop + stackPositionPx + itemStackDistance * i;
        }

        const next = {
          translateY: Math.round(translateY * 100) / 100,
          scale: Math.round(scale * 1000) / 1000,
          rotation: Math.round(rotation * 100) / 100,
          blur: Math.round(blur * 100) / 100
        };

        const prev = lastTransformsRef.current.get(i);
        const changed =
          !prev ||
          Math.abs(prev.translateY - next.translateY) > 0.1 ||
          Math.abs(prev.scale - next.scale) > 0.001 ||
          Math.abs(prev.rotation - next.rotation) > 0.1 ||
          Math.abs(prev.blur - next.blur) > 0.1;

        if (changed) {
          card.style.transform = `translate3d(0, ${next.translateY}px, 0) scale(${next.scale}) rotate(${next.rotation}deg)`;
          card.style.filter = next.blur > 0 ? `blur(${next.blur}px)` : '';
          lastTransformsRef.current.set(i, next);
        }

        if (i === cardsRef.current.length - 1) {
          // Fire once scrollTop reaches pinStart (last card at stack position),
          // and only reverse when scrolling back above pinStart — not when
          // scrolling past pinEnd, which would flash the callback at a short
          // pin window.
          const stacked = scrollTop >= pinStart;
          if (stacked && !stackCompletedRef.current) {
            stackCompletedRef.current = true;
            onStackComplete?.();
          } else if (!stacked && stackCompletedRef.current) {
            stackCompletedRef.current = false;
            onStackRelease?.();
          }
        }
      }
    };

    const measure = () => {
      // Critical: strip transforms before reading layout so offsets reflect
      // the natural document position, not the last-applied transform.
      for (let i = 0; i < cardsRef.current.length; i++) {
        const card = cardsRef.current[i];
        card.style.transform = '';
        card.style.filter = '';
      }
      lastTransformsRef.current.clear();

      cardOffsetsRef.current = cardsRef.current.map(card => {
        if (useWindowScroll) {
          const rect = card.getBoundingClientRect();
          return rect.top + window.scrollY;
        }
        return card.offsetTop;
      });

      if (endEl) {
        endOffsetRef.current = useWindowScroll
          ? endEl.getBoundingClientRect().top + window.scrollY
          : endEl.offsetTop;
      }

      update();
    };

    measure();
    updateRef.current = update;

    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(useWindowScroll ? document.documentElement : scroller);
    if (!useWindowScroll) {
      const inner = scroller.querySelector('.scroll-stack-inner');
      if (inner) resizeObserver.observe(inner);
    }

    const onWindowResize = () => measure();
    window.addEventListener('resize', onWindowResize);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', onWindowResize);
      stackCompletedRef.current = false;
      cardsRef.current = [];
      cardOffsetsRef.current = [];
      lastTransformsRef.current.clear();
      updateRef.current = () => {};
    };
  }, [
    itemDistance,
    itemScale,
    itemStackDistance,
    stackPosition,
    stackPositionMin,
    scaleEndPosition,
    baseScale,
    scaleDuration,
    rotationAmount,
    blurAmount,
    useWindowScroll,
    onStackComplete,
    onStackRelease,
    releaseOnComplete,
    getScrollData
  ]);

  return (
    <div className={`scroll-stack-scroller ${className}`.trim()} ref={scrollerRef}>
      <div className="scroll-stack-inner">
        {children}
        <div className="scroll-stack-end" />
      </div>
    </div>
  );
};

export default ScrollStack;
