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
  text: string;
  description: string;
  bedgeText: string;
  color: KnowledgeColor;
};

export const KnowledgeCardData: TKnowledgeCard[] = [
  {
    id: 1,
    Icon: FrontendIcon,
    text: "Frontend",
    description:
      "Desenvolvimento de interfaces modernas, interativas e acessíveis.",
    bedgeText: "Desenvolvedor",
    color: "periwinkle",
  },
  {
    id: 2,
    Icon: BackendIcon,
    text: "Backend",
    description:
      "Construção de APIs, regras de negócio e gerenciamento de dados.",
    bedgeText: "Desenvolvedor",
    color: "iris",
  },
  {
    id: 3,
    Icon: DevopsIcon,
    text: "DevOps",
    description:
      "Automação, infraestrutura e integração contínua de aplicações.",
    bedgeText: "Desenvolvedor",
    color: "lavender",
  },
];
