"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/src/core/theme/hooks/useTheme";

export function NavbarThemeButton() {
  const { toggle } = useTheme();

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Alternar tema"
      className="
        relative flex size-9 items-center justify-center rounded-lg
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
      <span
        className={`
          absolute inset-0 flex items-center justify-center transition-all duration-200
          scale-100 opacity-100 dark:scale-0 dark:opacity-0"}
        `}
      >
        <Sun size={18} />
      </span>

      <span
        className={`
          absolute inset-0 flex items-center justify-center transition-all duration-200
          dark:scale-100 dark:opacity-100 scale-0 opacity-0"}
        `}
      >
        <Moon size={18} />
      </span>
    </button>
  );
}
