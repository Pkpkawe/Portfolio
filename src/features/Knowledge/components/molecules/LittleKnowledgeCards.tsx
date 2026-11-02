// Data
import { LittleKnowledgeCardData } from "../../data/littleKnowledgeCardData";

// Components
import LittleKnowledgeCard from "../atoms/LittleKnowledgeCard";

const LittleKnowledgeCards = () => {
  return (
    <div className="w-full grid grid-cols-7 justify-between gap-12">
      {LittleKnowledgeCardData.map((item) => {
        return (
          <LittleKnowledgeCard
            key={item.id}
            id={item.id}
            knowledgeId={item.knowledgeId}
            Icon={item.Icon}
            text={item.text}
          />
        );
      })}
    </div>
  );
};

export default LittleKnowledgeCards;
