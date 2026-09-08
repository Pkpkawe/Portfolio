import Link from "next/link";

import type { ComponentProps } from "react";

type NavbarLinkProps = ComponentProps<typeof Link>;

export function NavbarLink({ className = "", ...props }: NavbarLinkProps) {
  return (
    <Link
      {...props}
      className={[
        "group relative px-3 py-2 text-sm font-medium",
        "text-foreground-muted",
        "transition-colors duration-300",
        "hover:text-primary",

        "dark:text-lavender-mist",
        "dark:hover:text-white",

        "after:absolute",
        "after:bottom-0.5",
        "after:left-1/2",
        "after:h-0.5",
        "after:w-0",
        "after:-translate-x-1/2",
        "after:rounded-full",
        "after:bg-primary",
        "dark:after:bg-lavender-light",
        "after:transition-all",
        "after:duration-300",
        "after:ease-out",
        "hover:after:w-[70%]",

        "focus-visible:outline-none",
        "focus-visible:ring-2",
        "focus-visible:ring-primary",
        "focus-visible:ring-offset-2",

        className,
      ].join(" ")}
    />
  );
}
