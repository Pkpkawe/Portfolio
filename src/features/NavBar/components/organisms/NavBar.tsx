// Components
import Avatar from "@/src/components/molecules/Avatar";
import NavigationMenu from "../molecules/NavigationMenu";
import ModeButton from "../atoms/ModeButton";

// React
import { useRef, useState } from "react";

// UseHookTS
import { useBoolean, useEventListener } from "usehooks-ts";

const NavBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  const { value: isForceHidden, setFalse: showNavbar } = useBoolean(false);

  useEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }

    lastScrollY.current = currentScrollY;
  });

  useEventListener("mousemove", (event) => {
    if (event.clientY <= 50) {
      showNavbar();
      setIsVisible(true);
    }
  });

  const finalVisibility = isVisible && !isForceHidden;

  return (
    <>
      <div
        className={`
              z-100 fixed bg-lavender-light dark:bg-mauve-shadow
              flex items-center justify-between
              w-4/5 py-2 px-10 mt-5
              border border-indigo-shadow dark:border-lavender-light rounded-2xl
              shadow-md transition-all
              ${finalVisibility ? "translate-y-0" : "-translate-y-full mt-0!"}
          `}
      >
        <Avatar />
        <NavigationMenu />
        <ModeButton />
      </div>
    </>
  );
};

export default NavBar;
