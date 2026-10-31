// Data
import { KnowledgeCardData } from "../../data/knowledgeCardData";

// Components
import KnowledgeCard from "../atoms/KnowledgeCard";

const KnowledgeCards = () => {
  return (
    <div className="grid grid-cols-3 justify-between gap-15">
      {KnowledgeCardData.map(({ id, BedgeText, Icon, Text }) => {
        return (
          <KnowledgeCard
            key={id}
            ID={id}
            Icon={Icon}
            Text={Text}
            BedgeText={BedgeText}
          />
        );
      })}
    </div>
  );
};

export default KnowledgeCards;
