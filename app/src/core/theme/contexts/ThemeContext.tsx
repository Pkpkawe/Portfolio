"use client";

import { createContext, type ReactNode, useEffect } from "react";
import { useLocalStorage, useIsClient } from "usehooks-ts";

type ThemeContextValue = {
  isDarkMode: boolean;
  toggle: () => void;
};

export const ThemeContext = createContext<ThemeContextValue | null>(null);

type ThemeProviderProps = {
  children: ReactNode;
};

export function ThemeProvider({ children }: ThemeProviderProps) {
  const isClient = useIsClient();
  const [isDarkMode, setIsDarkMode] = useLocalStorage("dark-theme", false);

  const activeDark = isClient ? isDarkMode : false;

  useEffect(() => {
    if (!isClient) return;

    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode, isClient]);

  function toggle() {
    setIsDarkMode((current) => !current);
  }

  return (
    <ThemeContext.Provider value={{ isDarkMode: activeDark, toggle }}>
      <div>{children}</div>
    </ThemeContext.Provider>
  );
}
