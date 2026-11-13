// Components
import Topic from "@/src/components/molecules/Topic";
import KnowledgeCards from "../molecules/KnowledgeCards";
import LittleKnowledgeCards from "../molecules/LittleKnowledgeCards";

// Lucide Icons
import { BookOpen } from "lucide-react";

// Providers
import { KnowledgeHoveringProvider } from "../../contexts/KnowledgeHoveringProvider";

// React
import { useRef } from "react";

// Hooks
import useScrollFade from "@/src/hooks/useScrollFade";

const Knowledge = () => {
  const refKnowledge = useRef<HTMLElement | null>(null);

  useScrollFade(refKnowledge, {
    entrance: {
      opacity: 0,
      y: 80,
      scale: 0.97,
      start: "top 85%",
      end: "top 55%",
      scrub: 1,
    },
    exit: {
      enabled: false,
    },
  });

  return (
    <KnowledgeHoveringProvider>
      <section
        ref={refKnowledge}
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
