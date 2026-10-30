// Radix-UI
import { NavigationMenu as NavigationMenuRadix } from "radix-ui";

// Data
import NavBarLinks from "../../data/navBarLinks";

const NavigationMenu = () => {
  return (
    <NavigationMenuRadix.Root className="flex gap-15 list-none">
      {NavBarLinks.map((link) => {
        return (
          <NavigationMenuRadix.Item
            key={link.id}
            className="relative group flex flex-col items-center"
          >
            <NavigationMenuRadix.Link
              href={link.href}
              className="
                                font-medium
                                text-indigo-shadow dark:text-lavender-light 
                                group-hover:text-violet-normal group-hover:dark:text-white
                            "
            >
              {link.name}
            </NavigationMenuRadix.Link>

            <div
              className="
                                absolute -bottom-1 w-0 h-0.5 rounded-full bg-violet-normal dark:bg-white
                                group-hover:w-4/5 transition-all duration-200"
            ></div>
          </NavigationMenuRadix.Item>
        );
      })}
    </NavigationMenuRadix.Root>
  );
};

export default NavigationMenu;
