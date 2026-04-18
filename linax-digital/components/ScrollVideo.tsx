"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  src: string;
  className?: string;
};

export default function ScrollVideo({ src, className }: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!wrapper || !video || !canvas) return;

    const ctx2d = canvas.getContext("2d");
    if (!ctx2d) return;

    // Size canvas to video resolution and paint current frame
    const drawFrame = () => {
      if (
        canvas.width !== video.videoWidth ||
        canvas.height !== video.videoHeight
      ) {
        canvas.width = video.videoWidth || 1920;
        canvas.height = video.videoHeight || 1080;
      }
      ctx2d.drawImage(video, 0, 0, canvas.width, canvas.height);
    };

    // Only one seek in-flight at a time; latest requested time is queued
    let seeking = false;
    let pendingTime: number | null = null;

    const supportsRVFC =
      "requestVideoFrameCallback" in (video as HTMLVideoElement);

    const afterDecode = () => {
      drawFrame();
      if (pendingTime !== null) {
        const next = pendingTime;
        pendingTime = null;
        video.currentTime = next;
        if (supportsRVFC) {
          (video as HTMLVideoElement & { requestVideoFrameCallback: (cb: () => void) => void })
            .requestVideoFrameCallback(afterDecode);
        }
        // else: the `seeked` listener will fire afterDecode again
      } else {
        seeking = false;
      }
    };

    video.addEventListener("seeked", () => {
      if (!supportsRVFC) afterDecode();
    });

    if (supportsRVFC) {
      (video as HTMLVideoElement & { requestVideoFrameCallback: (cb: () => void) => void })
        .requestVideoFrameCallback(afterDecode);
    }

    const seekTo = (time: number) => {
      if (!seeking) {
        seeking = true;
        video.currentTime = time;
        if (supportsRVFC) {
          (video as HTMLVideoElement & { requestVideoFrameCallback: (cb: () => void) => void })
            .requestVideoFrameCallback(afterDecode);
        }
      } else {
        pendingTime = time;
      }
    };

    const gsapCtx = gsap.context(() => {
      const build = () => {
        const duration = video.duration;
        if (!Number.isFinite(duration) || duration <= 0) return;

        // Paint frame 0 so canvas is never blank
        drawFrame();

        const navHeight =
          (document.querySelector("header") as HTMLElement | null)
            ?.offsetHeight ?? 64;

        const state = { time: 0 };

        gsap.to(state, {
          time: duration,
          ease: "none",
          scrollTrigger: {
            trigger: wrapper,
            pin: true,
            start: `top top+=${navHeight}`,
            // scroll distance proportional to video length
            end: () => `+=${duration * 160}`,
            scrub: 0.4,
            pinSpacing: true,
            invalidateOnRefresh: true,
          },
          onUpdate() {
            seekTo(state.time);
          },
        });
      };

      if (video.readyState >= 1) {
        build();
      } else {
        video.addEventListener("loadedmetadata", build, { once: true });
      }
    }, wrapper);

    return () => gsapCtx.revert();
  }, []);

  return (
    <div ref={wrapperRef} className={className}>
      {/* Hidden decode source — canvas is the visible surface */}
      <video
        ref={videoRef}
        src={src}
        muted
        playsInline
        preload="auto"
        tabIndex={-1}
        aria-hidden
        className="hidden"
      />
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full"
      />
    </div>
  );
}
