// Assets
import LidSwitch from "../assets/images/project_lidswitch.png";
import HawkIf from "../assets/images/project_hawkif.png";

// Types
import type { ProjectStatusType } from "../components/atoms/ProjectStatus";

export type ProjectSize = "large" | "small";

export type TProject = {
  id: number;
  name: string;
  description: string;
  type: string;
  technologies: string[];
  image: string;
  size: ProjectSize;
  href: string;
  status: ProjectStatusType;
};

export const ProjectsData: TProject[] = [
  {
    id: 1,
    name: "LidSwitch",
    description:
      "Uma solução de software que gerencia o comportamento de suspensão ao fechar a tampa do notebook, oferecendo a opção de ativar ou desativar essa funcionalidade.",
    type: "Automação",
    technologies: ["shell"],
    image: LidSwitch,
    size: "large",
    href: "https://github.com/Pkpkawe/LidSwitch",
    status: "completed",
  },
  {
    id: 2,
    name: "Hawk If",
    description:
      "Um sistema de gerenciamento de salas automatizado que funciona através de sensores colocados em cada sala. Permite ver o status de uma sala, agendar seu uso e gerenciar seus recursos.",
    type: "IoT",
    technologies: ["React", "TypeScript", "FastAPI", "Python"],
    image: HawkIf,
    size: "small",
    href: "https://github.com/Hawk-IF",
    status: "development",
  },
];
