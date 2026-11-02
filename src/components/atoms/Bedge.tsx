const BedgeVariants = {
  // Indigo
  "indigo-light":
    "bg-indigo-light/50 text-indigo-shadow dark:bg-indigo-night/40 dark:text-indigo-light",
  "indigo-soft":
    "bg-indigo-soft/50 text-indigo-shadow dark:bg-indigo-night/60 dark:text-indigo-light",
  "indigo-normal":
    "bg-indigo-normal/50 text-white dark:bg-indigo-shadow/80 dark:text-indigo-light",
  "indigo-night":
    "bg-indigo-night/50 text-indigo-light dark:bg-indigo-light/20 dark:text-indigo-light",
  "indigo-shadow":
    "bg-indigo-shadow/50 text-indigo-light dark:bg-indigo-shadow dark:text-indigo-light",

  // Violet
  "violet-light":
    "bg-violet-light/50 text-violet-shadow dark:bg-violet-night/40 dark:text-violet-light",
  "violet-soft":
    "bg-violet-soft/50 text-violet-shadow dark:bg-violet-night/60 dark:text-violet-light",
  "violet-normal":
    "bg-violet-normal/50 text-white dark:bg-violet-shadow/80 dark:text-violet-light",
  "violet-night":
    "bg-violet-night/50 text-violet-light dark:bg-violet-light/20 dark:text-violet-light",
  "violet-shadow":
    "bg-violet-shadow/50 text-violet-light dark:bg-violet-shadow dark:text-violet-light",

  // Mauve
  "mauve-light":
    "bg-mauve-light/50 text-mauve-shadow dark:bg-mauve-night/40 dark:text-mauve-light",
  "mauve-soft":
    "bg-mauve-soft/50 text-mauve-shadow dark:bg-mauve-night/60 dark:text-mauve-light",
  "mauve-normal":
    "bg-mauve-normal/50 text-white dark:bg-mauve-shadow/80 dark:text-mauve-light",
  "mauve-night":
    "bg-mauve-night/50 text-mauve-light dark:bg-mauve-light/20 dark:text-mauve-light",
  "mauve-shadow":
    "bg-mauve-shadow/50 text-mauve-light dark:bg-mauve-shadow dark:text-mauve-light",

  // Iris
  "iris-light":
    "bg-iris-light/50 text-iris-shadow dark:bg-iris-night/40 dark:text-iris-light",
  "iris-soft":
    "bg-iris-soft/50 text-iris-shadow dark:bg-iris-night/60 dark:text-iris-light",
  "iris-normal":
    "bg-iris-normal/50 text-white dark:bg-iris-shadow/80 dark:text-iris-light",
  "iris-night":
    "bg-iris-night/50 text-iris-light dark:bg-iris-light/20 dark:text-iris-light",
  "iris-shadow":
    "bg-iris-shadow/50 text-iris-light dark:bg-iris-shadow dark:text-iris-light",

  // Periwinkle
  "periwinkle-light":
    "bg-periwinkle-light/50 text-periwinkle-shadow dark:bg-periwinkle-night/40 dark:text-periwinkle-light",
  "periwinkle-soft":
    "bg-periwinkle-soft/50 text-periwinkle-shadow dark:bg-periwinkle-night/60 dark:text-periwinkle-light",
  "periwinkle-normal":
    "bg-periwinkle-normal/50 text-periwinkle-shadow dark:bg-periwinkle-shadow/80 dark:text-periwinkle-light",
  "periwinkle-night":
    "bg-periwinkle-night/50 text-white dark:bg-periwinkle-light/20 dark:text-periwinkle-light",
  "periwinkle-shadow":
    "bg-periwinkle-shadow/50 text-periwinkle-light dark:bg-periwinkle-shadow dark:text-periwinkle-light",

  // Lavender
  "lavender-light":
    "bg-lavender-light/50 text-lavender-shadow dark:bg-lavender-night/40 dark:text-lavender-light",
  "lavender-soft":
    "bg-lavender-soft/50 text-lavender-shadow dark:bg-lavender-night/60 dark:text-lavender-light",
  "lavender-normal":
    "bg-lavender-normal/50 text-white dark:bg-lavender-shadow/80 dark:text-lavender-light",
  "lavender-night":
    "bg-lavender-night/50 text-lavender-light dark:bg-lavender-light/20 dark:text-lavender-light",
  "lavender-shadow":
    "bg-lavender-shadow/50 text-lavender-light dark:bg-lavender-shadow dark:text-lavender-light",
} as const;

type BedgeTypes = keyof typeof BedgeVariants;

type BedgeProps = {
  text: string;
  textSize?: "text-xs" | "text-sm" | "text-lg";
  variant: BedgeTypes;
};

const Bedge = ({ text, variant, textSize = "text-xs" }: BedgeProps) => {
  return (
    <div
      className={`
    ${BedgeVariants[variant]}
    w-fit rounded-full
    border border-current/10
    dark:border-current/15
    px-4 py-1.5
    ${textSize} font-semibold tracking-wide
    backdrop-blur-sm
    transition-colors duration-300
  `}
    >
      {text}
    </div>
  );
};

export default Bedge;
