"use client";

import { motion } from "framer-motion";
import PixelBlast from "@/components/PixelBlast";
import { IconArrowRight } from "../shared/icons";
import "./HeroSection.css";

const cornerIcons = [
  {
    src: "/websiteIcon.png",
    className: "bottom-full right-full -mb-7 -mr-7",
    rotate: -24,
    duration: 3.0,
    delay: 0,
  },
  {
    src: "/seoIcon.png",
    className: "bottom-full left-full -mb-7 -ml-7",
    rotate: 22,
    duration: 4.2,
    delay: 0.9,
  },
  {
    src: "/adsIcon.png",
    className: "top-full right-full -mt-7 -mr-7",
    rotate: 28,
    duration: 3.5,
    delay: 1.8,
  },
  {
    src: "/reputationIcon.png",
    className: "top-full left-full -mt-[52px] -ml-7",
    rotate: -18,
    duration: 4.6,
    delay: 2.6,
  },
];

export function HeroSection() {
  return (
    <section
      aria-label="Hero"
      className="hero relative overflow-x-clip bg-sand-50 pt-46 pb-24"
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <PixelBlast
          variant="square"
          pixelSize={4}
          color="#F3EEE4"
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

      <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col items-center px-6 text-center">
        <div className="hero-title-wrap relative mx-0 mb-8 w-[85%] max-w-[640px]">
          {cornerIcons.map((icon, i) => (
            <motion.img
              key={i}
              src={icon.src}
              alt=""
              aria-hidden="true"
              className={`hero-corner-icon pointer-events-none absolute select-none ${icon.className}`}
              initial={{ y: 0, rotate: icon.rotate }}
              animate={{ y: [0, -10, 0], rotate: icon.rotate }}
              transition={{
                duration: icon.duration,
                delay: icon.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
          <h1 className="hero-title font-brand font-black uppercase whitespace-nowrap text-sand-950">
            Get Found.
            <br />
            Get Trusted.
            <br />
            Get Booked.
            <br />
            <span className="text-clay-500">Faster.</span>
          </h1>
        </div>

        <p className="mb-10 max-w-[640px] px-[59px] md:px-[40px] font-brand text-[17px] font-normal leading-[1.65] text-sand-700">
          Linax Digital is a digital marketing agency in Southwest Florida. We
          build websites, run SEO, manage ads, and handle your online reputation
          — all of it done by the person you talked to.
        </p>

        <div className="flex flex-wrap items-stretch justify-center gap-3">
          <motion.a
            href="#contact"
            className="inline-flex min-h-[52px] items-center gap-2.5 border-2 border-transparent bg-clay-500 px-8 py-4 font-brand text-[13px] font-bold uppercase tracking-[0.08em] text-sand-50 no-underline transition-colors duration-150 hover:bg-clay-700"
            style={{ transformOrigin: "50% 50%" }}
            whileHover={{ rotate: [0, 1.6, 0, -1.6, 0] }}
            transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
          >
            Book a Free Discovery Call <IconArrowRight />
          </motion.a>
          <motion.a
            href="#services"
            className="inline-flex min-h-[52px] items-center gap-2 border-2 border-sand-950 bg-transparent px-8 py-4 font-brand text-[13px] font-bold uppercase tracking-[0.08em] text-sand-950 no-underline transition-colors duration-150 hover:bg-sand-100"
            style={{ transformOrigin: "50% 50%" }}
            whileHover={{ rotate: [0, 1.6, 0, -1.6, 0] }}
            transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
          >
            See What We Do
          </motion.a>
        </div>

        <p className="mt-4 font-brand text-[12px] tracking-[0.02em] text-sand-600 px-[59px]">
          No commitment. 30 minutes. Walk away with a clear picture of where you
          stand.
        </p>
      </div>
    </section>
  );
}
