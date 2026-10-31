// React
import { createContext, type SetStateAction, type Dispatch } from "react";

type TKnowledgeHoveringContext = {
  knowledgeId: number | null;
  setKnowledgeId: Dispatch<SetStateAction<number | null>>;
};

export const KnowledgeHoveringContext =
  createContext<TKnowledgeHoveringContext | null>(null);
