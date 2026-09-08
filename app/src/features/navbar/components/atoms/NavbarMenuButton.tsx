"use client";

import { Menu, X } from "lucide-react";

type NavbarMenuButtonProps = {
  open: boolean;
  onClick: () => void;
};

export function NavbarMenuButton({ open, onClick }: NavbarMenuButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={open ? "Fechar menu" : "Abrir menu"}
      aria-expanded={open}
      className={[
        "inline-flex items-center justify-center rounded-lg p-2",
        "text-foreground-muted transition-colors",
        "hover:bg-lavender-mist hover:text-primary hover:scale-105",
        "dark:bg-transparent dark:text-lavender-mist",
        "focus-visible:outline-none focus-visible:ring-2",
        "focus-visible:ring-primary",
        "tg:hidden",
        "cursor-pointer",
      ].join(" ")}
    >
      {open ? <X size={22} /> : <Menu size={22} />}
    </button>
  );
}
