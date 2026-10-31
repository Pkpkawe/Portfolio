// Components
import Topic from "@/src/components/molecules/Topic";
import KnowledgeCards from "../molecules/KnowledgeCards";
import LittleKnowledgeCards from "../molecules/LittleKnowledgeCards";

// Lucide Icons
import { BookOpen } from "lucide-react";

// Providers
import { KnowledgeHoveringProvider } from "../../contexts/KnowledgeHoveringProvider";

const Knowledge = () => {
  return (
    <KnowledgeHoveringProvider>
      <section
        id="knowledge"
        className="w-full flex flex-col gap-15 items-center"
      >
        <Topic Icon={BookOpen} Title="Conhecimentos" />
        <div className="w-9/10 flex flex-col gap-10">
          <KnowledgeCards />
          <LittleKnowledgeCards />
        </div>
      </section>
    </KnowledgeHoveringProvider>
  );
};

export default Knowledge;
