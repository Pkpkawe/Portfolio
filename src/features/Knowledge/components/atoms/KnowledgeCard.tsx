// Components
import Bedge from "@/src/features/Home/components/atoms/Bedge";

// React
import { useEffect, useRef } from "react";

// Hooks
import { useKnowledgeHoveringContext } from "../../hooks/useKnowledgeHoveringContext";

// useHooksTS
import { useHover } from "usehooks-ts";

// Types
import type { LucideIcon } from "lucide-react";

type KnowledgeCardProps = {
  ID: number;
  Icon: LucideIcon | React.FC<React.SVGProps<SVGSVGElement>>;
  Text: string;
  BedgeText: string;
};

const KnowledgeCard = ({ ID, Icon, Text, BedgeText }: KnowledgeCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isHover = useHover(cardRef as React.RefObject<HTMLElement>);
  const { setKnowledgeId } = useKnowledgeHoveringContext();

  useEffect(() => {
    if (isHover) {
      setKnowledgeId(ID);
      return;
    }

    setKnowledgeId(null);
  }, [isHover, setKnowledgeId, ID]);

  return (
    <div
      ref={cardRef}
      className="
            w-full aspect-square flex flex-col items-center justify-between
            bg-periwinkle-light 
            p-8 border-2 rounded-tl-4xl rounded-br-4xl
            border-mauve-night
            shadow-md
            cursor-hover
        "
    >
      <Bedge text={BedgeText} variant="mauve-night" />

      <Icon className="h-4/5 aspect-square text-[12vw] text-mauve-shadow fill-mauve-shadow" />

      <span className="text-4xl text-mauve-night font-bold">{Text}</span>
    </div>
  );
};

export default KnowledgeCard;
