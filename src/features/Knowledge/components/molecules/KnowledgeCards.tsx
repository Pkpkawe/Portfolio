// Data
import { KnowledgeCardData } from "../../data/knowledgeCardData";

// Components
import KnowledgeCard from "../atoms/KnowledgeCard";

const KnowledgeCards = () => {
  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 justify-between gap-15">
      {KnowledgeCardData.map((item) => {
        return (
          <KnowledgeCard
            key={item.id}
            id={item.id}
            Icon={item.Icon}
            text={item.text}
            description={item.description}
            bedgeText={item.bedgeText}
            color={item.color}
          />
        );
      })}
    </div>
  );
};

export default KnowledgeCards;
