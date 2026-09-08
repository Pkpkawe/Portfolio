"use client";

import { NavbarLink } from "../atoms/NavbarLink";
import { NavbarThemeButton } from "../atoms/NavbarThemeButton";

import { navigationItems } from "../../constants/navbarItems";

type NavbarMobileMenuProps = {
  open: boolean;
  onNavigate: () => void;
};

export function NavbarMobileMenu({ open, onNavigate }: NavbarMobileMenuProps) {
  if (!open) {
    return null;
  }

  return (
    <div className="absolute right-0 top-full mt-3 w-60 tg:hidden">
      <nav
        className={[
          "rounded-2xl border",
          "border-primary/15",
          "bg-lavender-mist/95",
          "p-2 shadow-xl shadow-primary/10",
          "backdrop-blur-xl",
          "dark:border-primary/25",
          "dark:bg-violet-night/85",
        ].join(" ")}
      >
        <ul className="flex flex-col gap-0.5">
          {navigationItems.map((item) => (
            <li key={item.href}>
              <NavbarLink
                href={item.href}
                onClick={onNavigate}
                className={[
                  "block w-full rounded-lg",
                  "px-3 py-2",
                  "hover:bg-lavender-mist",
                  "dark:hover:bg-violet-night",
                ].join(" ")}
              >
                {item.label}
              </NavbarLink>
            </li>
          ))}
        </ul>

        <div className="mt-2 border-t border-primary/10 pt-2">
          <div className="flex items-center justify-between px-3 py-1">
            <span className="text-xs font-medium text-foreground-muted dark:text-lavender-mist">
              Tema
            </span>

            <NavbarThemeButton />
          </div>
        </div>
      </nav>
    </div>
  );
}
