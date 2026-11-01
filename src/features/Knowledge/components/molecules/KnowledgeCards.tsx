// Data
import { KnowledgeCardData } from "../../data/knowledgeCardData";

// Components
import KnowledgeCard from "../atoms/KnowledgeCard";

const KnowledgeCards = () => {
  return (
    <div className="grid grid-cols-3 justify-between gap-15">
      {KnowledgeCardData.map((item) => {
        return (
          <KnowledgeCard
            key={item.id}
            ID={item.id}
            Icon={item.Icon}
            Text={item.Text}
            Description={item.Description}
            BedgeText={item.BedgeText}
            Color={item.color}
          />
        );
      })}
    </div>
  );
};

export default KnowledgeCards;
