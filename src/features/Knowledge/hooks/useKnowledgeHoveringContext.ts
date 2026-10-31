import { KnowledgeHoveringContext } from "../contexts/KnowledgeHoveringContext";
import { useContext } from "react";

export function useKnowledgeHoveringContext() {
  const context = useContext(KnowledgeHoveringContext);
  if (!context) {
    throw new Error(
      "useHoverContext deve ser usado dentro de um HoverProvider",
    );
  }
  return context;
}
