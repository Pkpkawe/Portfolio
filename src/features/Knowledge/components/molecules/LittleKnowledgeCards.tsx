// Data
import { LittleKnowledgeCardData } from "../../data/littleKnowledgeCardData";

// Components
import LittleKnowledgeCard from "../atoms/LittleKnowledgeCard";

const LittleKnowledgeCards = () => {
  return (
    <div
      className="
        w-full 
        grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 grid-cols-2
        justify-between gap-12
      "
    >
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
