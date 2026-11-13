// Components
import Bedge from "@/src/components/atoms/Bedge";

// React
import { useEffect, useRef } from "react";

// Hooks
import { useKnowledgeHoveringContext } from "../../hooks/useKnowledgeHoveringContext";

// useHooksTS
import { useHover } from "usehooks-ts";
import { useWindowSize } from "usehooks-ts";

// Types
import type { TKnowledgeCard } from "../../data/knowledgeCardData";

type KnowledgeCardProps = TKnowledgeCard;

const KnowledgeCardVariants = {
  indigo: {
    border: "border-indigo-night/30 dark:border-indigo-light/20",
    title: "text-indigo-night dark:text-indigo-light",
    description: "text-slate-600 dark:text-indigo-light/70",
    badge: "indigo-soft",
    button:
      "bg-indigo-soft/60 hover:bg-indigo-soft dark:bg-indigo-normal/30 dark:hover:bg-indigo-normal/50 dark:text-indigo-light",
    icon: "text-indigo-shadow fill-indigo-shadow dark:text-indigo-light dark:fill-indigo-light",
    background: "bg-indigo-soft/30 dark:bg-indigo-shadow/30",
  },

  violet: {
    border: "border-violet-night/30 dark:border-violet-light/20",
    title: "text-violet-night dark:text-violet-light",
    description: "text-slate-600 dark:text-violet-light/70",
    badge: "violet-soft",
    button:
      "bg-violet-soft/60 hover:bg-violet-soft dark:bg-violet-normal/30 dark:hover:bg-violet-normal/50 dark:text-violet-light",
    icon: "text-violet-shadow fill-violet-shadow dark:text-violet-light dark:fill-violet-light",
    background: "bg-violet-soft/30 dark:bg-violet-shadow/30",
  },

  mauve: {
    border: "border-mauve-night/30 dark:border-mauve-light/20",
    title: "text-mauve-night dark:text-mauve-light",
    description: "text-slate-600 dark:text-mauve-light/70",
    badge: "mauve-soft",
    button:
      "bg-mauve-soft/60 hover:bg-mauve-soft dark:bg-mauve-normal/30 dark:hover:bg-mauve-normal/50 dark:text-mauve-light",
    icon: "text-mauve-shadow fill-mauve-shadow dark:text-mauve-light dark:fill-mauve-light",
    background: "bg-mauve-soft/30 dark:bg-mauve-shadow/30",
  },

  iris: {
    border: "border-iris-night/30 dark:border-iris-light/20",
    title: "text-iris-night dark:text-iris-light",
    description: "text-slate-600 dark:text-iris-light/70",
    badge: "iris-soft",
    button:
      "bg-iris-soft/60 hover:bg-iris-soft dark:bg-iris-normal/30 dark:hover:bg-iris-normal/50 dark:text-iris-light",
    icon: "text-iris-shadow fill-iris-shadow dark:text-iris-light dark:fill-iris-light",
    background: "bg-iris-soft/30 dark:bg-iris-shadow/30",
  },

  periwinkle: {
    border: "border-periwinkle-shadow/30 dark:border-periwinkle-soft/20",
    title: "text-periwinkle-shadow dark:text-periwinkle-light",
    description: "text-slate-600 dark:text-periwinkle-light/70",
    badge: "periwinkle-soft",
    button:
      "bg-periwinkle-soft/60 hover:bg-periwinkle-soft dark:bg-periwinkle-normal/30 dark:hover:bg-periwinkle-normal/50 dark:text-periwinkle-light",
    icon: "text-periwinkle-shadow fill-periwinkle-shadow dark:text-periwinkle-light dark:fill-periwinkle-light",
    background: "bg-periwinkle-light dark:bg-periwinkle-shadow/30",
  },

  lavender: {
    border: "border-lavender-night/30 dark:border-lavender-light/20",
    title: "text-lavender-night dark:text-lavender-light",
    description: "text-slate-600 dark:text-lavender-light/70",
    badge: "lavender-soft",
    button:
      "bg-lavender-normal/40 hover:bg-lavender-normal/60 dark:bg-lavender-normal/30 dark:hover:bg-lavender-normal/50 dark:text-lavender-light",
    icon: "text-lavender-shadow fill-lavender-shadow dark:text-lavender-light dark:fill-lavender-light",
    background: "bg-lavender-normal/10 dark:bg-lavender-shadow/90",
  },
} as const;

const KnowledgeCard = ({
  id,
  Icon,
  text,
  description,
  bedgeText,
  color,
}: KnowledgeCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isHover = useHover(cardRef as React.RefObject<HTMLElement>);
  const { width } = useWindowSize();
  const { setKnowledgeId } = useKnowledgeHoveringContext();

  const variant = KnowledgeCardVariants[color];

  useEffect(() => {
    setKnowledgeId(isHover ? id : null);
  }, [isHover, setKnowledgeId, id]);

  return (
    <div
      className={`
        group w-full flex items-center justify-between gap-6
        p-6 border-2 rounded-4xl content-box
        ${variant.border}
        ${variant.background}
        shadow-md
        transition-all duration-300
        hover:-translate-y-1 hover:shadow-xl
    `}
    >
      <div className="flex flex-col 2xl:items-start lg:items-center justify-between gap-5">
        <Bedge text={bedgeText} variant={variant.badge} />

        {width < 1536 && width >= 1024 && (
          <div>
            <Icon
              className={`
            text-[7vw]
            ${variant.icon}
            transition-transform duration-500
            group-hover:scale-110 group-hover:-rotate-6
        `}
            />
          </div>
        )}

        <div className="flex flex-col 2xl:items-start lg:items-center gap-2">
          <h3
            className={`text-[clamp(1.5rem,2vw,2rem)] ${variant.title} font-bold`}
          >
            {text}
          </h3>
          <p className="text-slate-600 dark:text-lavender-light text-[clamp(0.7rem,0.8vw,1.5rem)] 2xl:text-left lg:text-center">
            {description}
          </p>
        </div>

        <div
          ref={cardRef}
          className={`
            cursor-hover w-fit px-5 py-2
            ${variant.button}
            text-[clamp(1rem,0.9vw,1.5rem)]
            text-center rounded-full
            font-medium
            transition-all duration-300
            hover:scale-103
        `}
        >
          Tecnologias
        </div>
      </div>

      {(width >= 1536 || width < 1024) && (
        <div>
          <Icon
            className={`
            2xl:text-[7vw] text-[17vw]
            ${variant.icon}
            transition-transform duration-500
            group-hover:scale-110 group-hover:-rotate-6
        `}
          />
        </div>
      )}
    </div>
  );
};

export default KnowledgeCard;
