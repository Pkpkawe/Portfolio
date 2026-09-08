import { NavigationMenu } from "radix-ui";

import { NavbarLink } from "../atoms/NavbarLink";
import { NavbarThemeButton } from "../atoms/NavbarThemeButton";

import { navigationItems } from "../../constants/navbarItems";

export function NavbarNavigation() {
  return (
    <NavigationMenu.Root className="hidden tg:flex">
      <NavigationMenu.List className="flex items-center gap-0.5">
        {navigationItems.map((item) => (
          <NavigationMenu.Item key={item.href}>
            <NavigationMenu.Link asChild>
              <NavbarLink href={item.href} className="px-2.5 py-2">
                {item.label}
              </NavbarLink>
            </NavigationMenu.Link>
          </NavigationMenu.Item>
        ))}

        <li
          className="
            ml-1 border-l border-primary/15 pl-2
            dark:border-lavender-light/15
        "
        >
          <NavbarThemeButton />
        </li>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
}
