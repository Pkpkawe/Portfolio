"use client";

import { useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { useDarkMode, useIsMounted } from "usehooks-ts";

export function NavbarThemeButton() {
  const { isDarkMode, toggle } = useDarkMode({
    initializeWithValue: false,
  });

  const isMounted = useIsMounted();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  if (!isMounted()) {
    return (
      <button
        type="button"
        aria-label="Alterar tema"
        className="flex size-9 items-center justify-center rounded-lg"
      >
        <Moon size={18} />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDarkMode ? "Ativar modo claro" : "Ativar modo escuro"}
      className="
        flex size-9 items-center justify-center rounded-lg
        text-foreground-muted
        transition-colors duration-200
        hover:bg-lavender-mist
        hover:text-primary
        dark:text-lavender-mist
        dark:hover:bg-violet-night
        dark:hover:text-white
        cursor-pointer
      "
    >
      {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
