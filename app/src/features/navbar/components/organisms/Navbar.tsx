"use client";

import { useState } from "react";

import { NavbarMenuButton } from "../atoms/NavbarMenuButton";
import { NavbarBrand } from "../molecules/NavbarBrand";
import { NavbarMobileMenu } from "../molecules/NavbarMobileMenu";
import { NavbarNavigation } from "../molecules/NavbarNavigation";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full px-4 pt-4 sm:px-6">
      <div
        className={[
          "relative mx-auto flex h-16 max-w-5xl items-center",
          "justify-between",
          "rounded-2xl border",
          "border-primary/15",
          "bg-lavender-mist/80",
          "px-4 shadow-lg shadow-primary/5",
          "backdrop-blur-xl",
          "dark:border-primary/25",
          "dark:bg-violet-night/85",
          "dark:shadow-black/10",
        ].join(" ")}
      >
        <NavbarBrand />

        <NavbarNavigation />

        <NavbarMenuButton
          open={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((current) => !current)}
        />

        <NavbarMobileMenu open={mobileMenuOpen} onNavigate={closeMobileMenu} />
      </div>
    </header>
  );
}
