// Assets
import Journey_IFRN from "../assets/images/banners/Journey_IFRN.jpeg";
import Journey_PartiuIF from "../assets/images/banners/Journey_PartiuIF.png";

// Types
import type { LucideIcon } from "lucide-react";

export type TKnowledge = {
  id: number;
  Icon: LucideIcon | React.FC<React.SVGProps<SVGSVGElement>>;
  text: string;
};

type TJourneyExperiencesCategory = "Experiência" | "Formação acadêmica";

export interface TJourneyExperiences {
  id: number;
  title: string;
  category: TJourneyExperiencesCategory;
  period: string;
  description: string;
  knowledges: TKnowledge[];
  image: string;
}

export const journeyExperiences: TJourneyExperiences[] = [
  {
    id: 1,
    title: "IFRN",
    category: "Formação acadêmica",
    period: "2024 - Em andamento",
    description:
      "Curso Técnico em Informática integrado ao Ensino Médio, no qual desenvolvi competências tanto em manutenção de hardware quanto em desenvolvimento de software. A formação une teoria e prática, proporcionando uma visão ampla da área de tecnologia e preparando para atuar em diferentes frentes do setor.",
    knowledges: [],
    image: Journey_IFRN,
  },
  {
    id: 2,
    title: "CI Tech",
    category: "Experiência",
    period: "2025 - 2026",
    description:
      "Estágio com foco em hardware, atuando na realização de manutenções preventivas, corretivas e preditivas em equipamentos. A experiência contribuiu para o desenvolvimento de raciocínio técnico, atenção aos detalhes e boas práticas de manutenção, garantindo maior durabilidade e desempenho dos dispositivos.",
    knowledges: [],
    image: "/images/ci-tech.png",
  },
  {
    id: 3,
    title: "Partiu IF",
    category: "Experiência",
    period: "2026 - Em andamento",
    description:
      "Programa preparatório voltado para estudantes do 9º ano do Ensino Fundamental de escolas públicas em situação de vulnerabilidade social. Atuei no desenvolvimento de uma aplicação web para gerenciar os dados de beneficiários do programa e dos bolsistas que nele atuam, otimizando o fluxo de informações por meio de telas e melhorando a organização dos processos internos.",
    knowledges: [],
    image: Journey_PartiuIF,
  },
];
