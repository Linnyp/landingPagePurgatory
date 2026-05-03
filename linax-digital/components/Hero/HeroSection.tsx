"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import PixelBlast from "@/components/PixelBlast";
import LogoLoop from "@/components/LogoLoop";
import { clientLogos } from "../../data/clientLogos";
import { IconArrowRight } from "../shared/icons";
import "./HeroSection.css";

const mobileIllustrations = [
  { src: "/websiteIcon.png", alt: "Website design" },
  { src: "/seoIcon.png", alt: "Search engine optimization" },
  { src: "/adsIcon.png", alt: "Paid ads" },
  { src: "/reputationIcon.png", alt: "Reputation management" },
];

export function HeroSection() {
  return (
    <section
      aria-label="Hero"
      className="hero relative overflow-x-clip bg-sand-50 pt-28 md:pt-32 border-b-4 border-black"
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

      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6">
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,520px)] lg:gap-12">
          <div className="flex flex-col items-center lg:items-start">
            <div className="hero-title-wrap relative z-30 mb-4 w-[85%] max-w-[640px]">
              <h1 className="hero-title font-brand font-black uppercase whitespace-nowrap text-sand-950 text-center lg:text-left">
                Get Found.
                <br />
                Get Trusted.
                <br />
                Get <span className="text-clay-500">Booked.</span>
              </h1>
            </div>

            <p className="mb-10 max-w-[640px] font-brand text-sm md:text-[16px] font-normal leading-[1.65] text-sand-700 text-center lg:text-left">
              Linax Digital helps local service businesses in South Florida show
              up on Google, look credible to the people who find them, and turn
              those visitors into phone calls. Four core services. Honest
              pricing.
            </p>

            <div className="relative z-20 flex flex-col items-center gap-3 min-[740px]:flex-row min-[740px]:items-stretch">
              <motion.a
                href="#contact"
                className="inline-flex min-h-[52px] items-center gap-2.5 border-2 border-transparent bg-clay-500 px-8 py-4 font-brand text-[13px] font-bold uppercase tracking-[0.08em] text-sand-50 no-underline transition-colors duration-150 hover:bg-clay-700"
                style={{ transformOrigin: "50% 50%" }}
                whileHover={{ rotate: [0, 1.6, 0, -1.6, 0] }}
                transition={{
                  duration: 1.1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Book a Free Consult <IconArrowRight />
              </motion.a>
              <motion.a
                href="#services"
                className="inline-flex min-h-[52px] items-center gap-2 border-2 border-sand-950 bg-transparent px-8 py-4 font-brand text-[13px] font-bold uppercase tracking-[0.08em] text-sand-950 no-underline transition-colors duration-150 hover:bg-sand-100"
                style={{ transformOrigin: "50% 50%" }}
                whileHover={{ rotate: [0, 1.6, 0, -1.6, 0] }}
                transition={{
                  duration: 1.1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                See What We Do
              </motion.a>
            </div>
          </div>

          <div className="hero-feature-illustration relative hidden lg:block aspect-[506/660] w-full lg:mx-0 lg:max-w-[440px]">
            <Image
              src="/heroIllustration.png"
              alt="Hands holding phone, microphone, and magnifying glass over a website wireframe"
              fill
              priority
              sizes="(max-width: 1024px) 70vw, 440px"
              className="object-contain object-bottom"
            />
          </div>
        </div>

        <div className="hero-mobile-illustrations mt-10 ml-[calc(50%-50vw)] w-screen px-2 lg:hidden">
          <div className="mx-auto grid max-w-[640px] grid-cols-4 items-end gap-1 sm:gap-2">
            {mobileIllustrations.map((img) => (
              <div
                key={img.src}
                className="hero-illustration relative h-[110px] sm:h-[140px] md:h-[170px]"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  priority
                  sizes="(max-width: 640px) 25vw, 160px"
                  className="object-contain object-bottom"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 w-full border-t-4 border-black bg-sand-100 bg-grid-pattern">
        <div className="mx-auto flex w-full max-w-brand flex-col items-center gap-4 px-6 py-5 md:flex-row md:items-center md:gap-10">
          <span className="font-brand text-[14px] font-bold uppercase tracking-[0.2em] text-clay-500 whitespace-nowrap mb-1 md:mb-0">
            Trusted by
          </span>
          <div className="relative z-0 flex h-14 w-full flex-1 items-center overflow-hidden">
            <LogoLoop
              logos={clientLogos}
              speed={60}
              direction="left"
              logoHeight={48}
              gap={120}
              scaleOnHover
              fadeOut
              fadeOutColor="#f3eee4"
              ariaLabel="Trusted by local Southwest Florida businesses"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
