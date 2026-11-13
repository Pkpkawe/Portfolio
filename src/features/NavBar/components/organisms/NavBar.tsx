// Components
import Avatar from "@/src/components/molecules/Avatar";
import NavigationMenu from "../molecules/NavigationMenu";
import ModeButton from "../atoms/ModeButton";

// React
import { useRef } from "react";

// Lucide Icons
import { Menu } from "lucide-react";

// UseHookTS
import {
  useBoolean,
  useEventListener,
  useWindowSize,
  useOnClickOutside,
} from "usehooks-ts";

const NavBar = () => {
  const {
    value: isVisible,
    setFalse: setIsVisibleFalse,
    setTrue: setIsVisibleTrue,
  } = useBoolean(false);
  const {
    value: isVisibleLittleMenu,
    setFalse: setIsVisibleLittleMenuFalse,
    toggle: setIsVisibleLittleMenu,
  } = useBoolean(false);

  const lastScrollY = useRef(0);

  const { width } = useWindowSize();

  const refLittleMenu = useRef<HTMLDivElement>(
    null,
  ) as React.RefObject<HTMLDivElement>;

  useOnClickOutside(refLittleMenu, () => {
    setIsVisibleLittleMenuFalse();
  });

  useEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
      setIsVisibleFalse();
      setIsVisibleLittleMenuFalse();
    } else {
      setIsVisibleTrue();
    }

    lastScrollY.current = currentScrollY;
  });

  useEventListener("mousemove", (event) => {
    if (event.clientY <= 50 && !isVisible) {
      setIsVisibleTrue();
    }
  });

  const finalVisibility = isVisible;

  if (width < 1280) {
    return (
      <div ref={refLittleMenu} className="absolute top-0 left-0">
        <button onClick={setIsVisibleLittleMenu}>
          <Menu
            className={`
            fixed z-101 top-5 right-5
            cursor-pointer
            p-2 w-10 h-10
            bg-lavender-light dark:bg-mauve-shadow
            dark:text-lavender-light text-mauve-shadow text-xl
            border border-indigo-shadow dark:border-lavender-light rounded-md
            shadow-md transition-all
            ${finalVisibility ? "translate-y-0" : "-translate-y-[calc(100%+20px)]"}
          `}
          />
        </button>

        <div
          className={`
            z-100 fixed md:top-20 md:right-5 top-0 right-0
            bg-lavender-light dark:bg-mauve-shadow
            flex flex-col gap-7 md:justify-start justify-between
            md:w-2/5 w-full md:h-fit h-full p-5 
            border border-indigo-shadow dark:border-lavender-light md:rounded-2xl
            shadow-md transition-all duration-300
            ${isVisibleLittleMenu ? "scale-100 translate-x-0" : "scale-0 translate-x-full"}
          `}
        >
          <div className="flex flex-col gap-4">
            <span className="text-[clamp(1.5rem,1vw,2rem)] text-indigo-shadow dark:text-lavender-light">
              Navegação
            </span>
            <hr className="border-mauve-shadow dark:border-lavender-light" />
            <NavigationMenu />
          </div>
          <div className="flex justify-between items-center">
            <Avatar />
            <ModeButton />
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div
        className={`
              z-100 fixed bg-lavender-light dark:bg-mauve-shadow
              flex items-center justify-between
              w-4/5 py-2 px-10 mt-5
              border border-indigo-shadow dark:border-lavender-light rounded-2xl
              shadow-md transition-all
              ${finalVisibility ? "translate-y-0 scale-100" : "scale-50 -translate-y-[calc(100%+10px)] mt-0!"}
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
