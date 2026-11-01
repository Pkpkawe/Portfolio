import { useDarkMode } from "usehooks-ts";

export function useTheme() {
  return useDarkMode({
    defaultValue: false,
    initializeWithValue: false,
    localStorageKey: "theme-pkpkawe-portifolio",
  });
}
