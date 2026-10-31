// Data
import { LittleKnowledgeCardData } from "../../data/littleKnowledgeCardData";

// Components
import LittleKnowledgeCard from "../atoms/LittleKnowledgeCard";

const LittleKnowledgeCards = () => {
  return (
    <div className="w-full grid grid-cols-7 justify-between gap-12">
      {LittleKnowledgeCardData.map(({ id, Icon, Text, KnowledgeId }) => {
        return (
          <LittleKnowledgeCard
            key={id}
            ParentKnowledgeId={KnowledgeId}
            Icon={Icon}
            Text={Text}
          />
        );
      })}
    </div>
  );
};

export default LittleKnowledgeCards;
