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
            ParentKnowledgeId={item.KnowledgeId}
            Icon={item.Icon}
            Text={item.Text}
          />
        );
      })}
    </div>
  );
};

export default LittleKnowledgeCards;
