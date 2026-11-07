// Types
import type { TKnowledge } from "../../data/experiences";

type JourneyKnowledgeProps = TKnowledge;

const JourneyKnowledge = ({ Icon, text }: JourneyKnowledgeProps) => {
  return (
    <div
      className={`
        group
        inline-flex items-center justify-center gap-4
        w-fit
        px-4 py-1
        rounded-full border-[2.5px]
        transition-all duration-300 ease-out
        cursor-hover
        bg-lavender-soft border-mauve-night
      `}
    >
      <Icon
        className={`
          text-[1.3vw] shrink-0
          text-mauve-night
          transition-transform duration-300
        `}
      />

      <span
        className={`
          text-lg
          font-medium
          whitespace-nowrap
          transition-colors duration-300
          text-mauve-night
        `}
      >
        {text.toUpperCase()}
      </span>
    </div>
  );
};

export default JourneyKnowledge;
