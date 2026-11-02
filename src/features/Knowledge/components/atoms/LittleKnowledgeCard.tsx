// Hooks
import { useKnowledgeHoveringContext } from "../../hooks/useKnowledgeHoveringContext";

// Types
import type { TLittleKnowledgeCard } from "../../data/littleKnowledgeCardData";

type LittleKnowledgeCardProps = TLittleKnowledgeCard;

const LittleKnowledgeCard = ({
  knowledgeId: parentKnowledgeId,
  Icon,
  text,
}: LittleKnowledgeCardProps) => {
  const { knowledgeId } = useKnowledgeHoveringContext();

  const isActive = knowledgeId === parentKnowledgeId;

  return (
    <div
      className={`
        group
        w-full aspect-square p-4
        flex flex-col justify-between items-center gap-5
        rounded-3xl border
        transition-all duration-300 ease-out
        cursor-hover

        ${
          isActive
            ? "bg-periwinkle-light border-iris-normal/50 scale-105 shadow-xl dark:bg-iris-shadow/50 dark:border-iris-soft/50 dark:shadow-iris-shadow/40"
            : "bg-lavender-light border-periwinkle-shadow/15 hover:bg-periwinkle-light hover:border-iris-normal/50 shadow-md hover:-translate-y-1 hover:shadow-lg dark:bg-mauve-shadow dark:border-lavender-light/10 dark:hover:bg-iris-shadow/60 dark:hover:border-iris-soft/50 dark:shadow-black/20"
        }
      `}
    >
      <div
        className={`
          flex items-center justify-center
          w-16 h-16 rounded-2xl
          transition-all duration-300
          group-hover:bg-white/60 group-hover:shadow-sm group-hover:scale-110
          dark:group-hover:bg-white/10
          ${isActive && "bg-white/60 shadow-sm scale-110 dark:bg-white/10"}
        `}
      >
        <Icon
          className={`
            w-9 h-9
            text-iris-night dark:text-iris-light
            transition-all duration-300
            ${isActive ? "scale-120" : "group-hover:scale-120"}
          `}
        />
      </div>

      <span
        className={`
          text-xs sm:text-sm font-semibold
          px-4 py-1.5 rounded-full
          border
          transition-all duration-300
          group-hover:bg-iris-night group-hover:text-lavender-light group-hover:shadow-md
          dark:group-hover:bg-iris-light dark:group-hover:text-iris-shadow
          ${
            isActive
              ? "bg-iris-night text-lavender-light shadow-md dark:bg-iris-light dark:text-iris-shadow dark:border-iris-light"
              : "border-iris-soft text-iris-night dark:border-mauve-soft/20 dark:text-iris-light"
          }
        `}
      >
        {text}
      </span>
    </div>
  );
};

export default LittleKnowledgeCard;
