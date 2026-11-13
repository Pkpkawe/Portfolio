// React
import { useRef } from "react";

// Hooks
import useScrollFade from "@/src/hooks/useScrollFade";

const Header = () => {
  const refHeader = useRef<HTMLElement | null>(null);

  useScrollFade(refHeader, {
    entrance: {
      enabled: false,
    },
    exit: {
      y: -200,
      opacity: 0,
      scale: 0.95,
      start: "top top",
      end: "bottom top",
      scrub: 1,
    },
  });

  return (
    <header
      ref={refHeader}
      className="
            min-h-screen w-full
            flex items-center justify-center
            bg-[repeating-linear-gradient(90deg,transparent_0,transparent_47px,#D4B5F84D_48px),repeating-linear-gradient(0deg,transparent_0,transparent_47px,#D4B5F84D_48px)]
            dark:bg-[repeating-linear-gradient(90deg,transparent_0,transparent_47px,#29183F4A_48px),repeating-linear-gradient(0deg,transparent_0,transparent_47px,#29183F4A_48px)]
            mask-[linear-gradient(to_bottom,black_0%,black_85%,transparent_100%)]
        "
    >
      <h1 className="text-indigo-normal dark:text-periwinkle-light font-medium text-[clamp(1.8rem,3vw,10rem)] leading-loose tracking-wider">
        <span className="ml-9">Hello, World!</span>
        <br />
        Eu sou{" "}
        <span className="text-mauve-shadow dark:text-lavender-light font-monocraft text-[clamp(2.2rem,5vw,12rem)]">
          Pkpakwe
        </span>
      </h1>
    </header>
  );
};

export default Header;
