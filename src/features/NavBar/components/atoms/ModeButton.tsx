// Lucide Icons
import { Sun, Moon } from "lucide-react";

// UseHookTS
import { useDarkMode } from "usehooks-ts";

// Radix-UI
import { Switch } from "radix-ui";

const ModeButton = () => {
  const { isDarkMode, toggle } = useDarkMode();

  return (
    <Switch.Root
      checked={isDarkMode}
      onCheckedChange={toggle}
      className="
                relative
                w-13 h-7 bg-mauve-soft dark:bg-lavender-night
                outline-none
                rounded-full
                transition-colors duration-200
                cursor-pointer
            "
    >
      <Switch.Thumb
        className="
                    absolute top-1/2 -translate-y-1/2 -left-1
                    h-9 aspect-square rounded-full border border-violet-shadow dark:border-indigo-shadow
                    bg-lavender-light dark:bg-indigo-shadow
                    flex items-center justify-center
                    shadow-md
                    transition-transform duration-200
                    data-[state=checked]:translate-x-6
                    data-[state=unchecked]:translate-x-0
                "
      >
        {isDarkMode ? (
          <Moon
            size={18}
            className="transition-transform duration-200 text-mauve-light"
          />
        ) : (
          <Sun
            size={18}
            className="transition-transform duration-200 text-violet-shadow"
          />
        )}
      </Switch.Thumb>
    </Switch.Root>
  );
};

export default ModeButton;
