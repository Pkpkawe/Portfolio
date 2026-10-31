// Hooks
import { useKnowledgeHoveringContext } from "../../hooks/useKnowledgeHoveringContext";

// Types
import type { LucideIcon } from "lucide-react";

type LittleKnowledgeCardProps = {
  ParentKnowledgeId: number;
  Icon: LucideIcon | React.FC<React.SVGProps<SVGSVGElement>>;
  Text: string;
};

const LittleKnowledgeCard = ({
  ParentKnowledgeId,
  Icon,
  Text,
}: LittleKnowledgeCardProps) => {
  const { knowledgeId } = useKnowledgeHoveringContext();

  return (
    <div
      className={`
            w-full aspect-square p-4 flex flex-col justify-between items-center gap-5 
            transition-all
            ${knowledgeId === ParentKnowledgeId ? "bg-mauve-light scale-110" : "bg-periwinkle-light"}
            border-2 border-iris-normal 
            rounded-3xl shadow-md
        `}
    >
      <Icon className="text-[4vw] text-transparent" />

      <span className="bg-iris-night text-lavender-light font-medium py-1 px-4 rounded-full">
        {Text}
      </span>
    </div>
  );
};

export default LittleKnowledgeCard;
