// Assets
import FrontendIcon from "@/src/assets/images/icons/Frontend.svg?react";
import BackendIcon from "@/src/assets/images/icons/Backend.svg?react";
import DevopsIcon from "@/src/assets/images/icons/DevOps.svg?react";

// Types
import type { LucideIcon } from "lucide-react";

type TKnowledgeCard = {
  id: number;
  Icon: LucideIcon | React.FC<React.SVGProps<SVGSVGElement>>;
  Text: string;
  BedgeText: string;
};

export const KnowledgeCardData: TKnowledgeCard[] = [
  {
    id: 1,
    Icon: FrontendIcon,
    Text: "Frontend",
    BedgeText: "Desenvolvedor",
  },
  {
    id: 2,
    Icon: BackendIcon,
    Text: "Backend",
    BedgeText: "Desenvolvedor",
  },
  {
    id: 3,
    Icon: DevopsIcon,
    Text: "DevOps",
    BedgeText: "Desenvolvedor",
  },
];
