// Assets
import FrontendIcon from "@/src/assets/images/icons/Frontend.svg?react";
import BackendIcon from "@/src/assets/images/icons/Backend.svg?react";
import DevopsIcon from "@/src/assets/images/icons/DevOps.svg?react";

// Types
import type { LucideIcon } from "lucide-react";

export type KnowledgeColor =
  "indigo" | "violet" | "mauve" | "iris" | "periwinkle" | "lavender";

export type TKnowledgeCard = {
  id: number;
  Icon: LucideIcon | React.FC<React.SVGProps<SVGSVGElement>>;
  Text: string;
  Description: string;
  BedgeText: string;
  color: KnowledgeColor;
};

export const KnowledgeCardData: TKnowledgeCard[] = [
  {
    id: 1,
    Icon: FrontendIcon,
    Text: "Frontend",
    Description:
      "Desenvolvimento de interfaces modernas, interativas e acessíveis.",
    BedgeText: "Desenvolvedor",
    color: "periwinkle",
  },
  {
    id: 2,
    Icon: BackendIcon,
    Text: "Backend",
    Description:
      "Construção de APIs, regras de negócio e gerenciamento de dados.",
    BedgeText: "Desenvolvedor",
    color: "iris",
  },
  {
    id: 3,
    Icon: DevopsIcon,
    Text: "DevOps",
    Description:
      "Automação, infraestrutura e integração contínua de aplicações.",
    BedgeText: "Desenvolvedor",
    color: "lavender",
  },
];
