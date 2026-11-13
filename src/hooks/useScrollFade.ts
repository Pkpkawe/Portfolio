import { type RefObject } from "react";

// GSAP
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type TAnimationOptions = {
  opacity?: number;
  scale?: number;
  x?: number;
  y?: number;
};

type TEntranceOptions = TAnimationOptions & {
  enabled?: boolean;
  start?: string;
  end?: string;
  scrub?: boolean | number;
};

type TExitOptions = TAnimationOptions & {
  enabled?: boolean;
  start?: string;
  end?: string;
  scrub?: boolean | number;
};

type TUseScrollFadeOptions = {
  entrance?: TEntranceOptions;
  exit?: TExitOptions;
};

const useScrollFade = (
  target: RefObject<HTMLElement | null>,
  { entrance = {}, exit = {} }: TUseScrollFadeOptions = {},
) => {
  useGSAP(
    () => {
      const element = target.current;

      if (!element) return;

      const {
        enabled: entranceEnabled = true,
        opacity: entranceOpacity = 0,
        scale: entranceScale = 0.95,
        x: entranceX = 0,
        y: entranceY = 0,
        scrub: entranceScrub = 1,
        start: entranceStart = "top bottom",
        end: entranceEnd = "top top",
      } = entrance;

      const {
        enabled: exitEnabled = true,
        opacity: exitOpacity = 0,
        scale: exitScale = 0.95,
        x: exitX = 0,
        y: exitY = 0,
        start: exitStart = "top top",
        end: exitEnd = "bottom top",
        scrub: exitScrub = 1,
      } = exit;

      if (entranceEnabled) {
        gsap.from(element, {
          autoAlpha: entranceOpacity,
          scale: entranceScale,
          x: entranceX,
          y: entranceY,
          ease: "none",

          scrollTrigger: {
            trigger: element,
            start: entranceStart,
            end: entranceEnd,
            toggleActions: "play reverse play reverse",
            scrub: entranceScrub,
          },
        });
      }

      if (exitEnabled) {
        gsap.to(element, {
          autoAlpha: exitOpacity,
          scale: exitScale,
          x: exitX,
          y: exitY,
          ease: "none",

          scrollTrigger: {
            trigger: element,
            start: exitStart,
            end: exitEnd,
            scrub: exitScrub,
          },
        });
      }
    },
    {
      dependencies: [entrance, exit],
      revertOnUpdate: true,
    },
  );
};

export default useScrollFade;
