// React
import { useState, type ReactNode } from "react";

import { KnowledgeHoveringContext } from "./KnowledgeHoveringContext";

export const KnowledgeHoveringProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [knowledgeId, setKnowledgeId] = useState<number | null>(null);

  return (
    <KnowledgeHoveringContext.Provider value={{ knowledgeId, setKnowledgeId }}>
      {children}
    </KnowledgeHoveringContext.Provider>
  );
};
