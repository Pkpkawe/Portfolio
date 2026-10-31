// Assets
import HTMLIcon from "@/src/assets/images/icons/HTML.svg?react";
import JavaScriptIcon from "@/src/assets/images/icons/JavaScript.svg?react";
import TypeScriptIcon from "@/src/assets/images/icons/TypeScript.svg?react";
import ReactIcon from "@/src/assets/images/icons/React.svg?react";
import NextIcon from "@/src/assets/images/icons/Next.svg?react";
import CSSIcon from "@/src/assets/images/icons/CSS.svg?react";
import TailwindCSSIcon from "@/src/assets/images/icons/TailwindCSS.svg?react";
import PythonIcon from "@/src/assets/images/icons/Python.svg?react";
import FastAPIIcon from "@/src/assets/images/icons/FastAPI.svg?react";
import PostgresSQLIcon from "@/src/assets/images/icons/PostgresSQL.svg?react";
import SQLite3Icon from "@/src/assets/images/icons/SQLite3.svg?react";
import LinuxIcon from "@/src/assets/images/icons/Linux.svg?react";
import WindowsIcon from "@/src/assets/images/icons/Windows.svg?react";
import DockerIcon from "@/src/assets/images/icons/Docker.svg?react";
import NginxIcon from "@/src/assets/images/icons/Nginx.svg?react";
import KongIcon from "@/src/assets/images/icons/Kong.svg?react";
import FigmaIcon from "@/src/assets/images/icons/Figma.svg?react";
import GitIcon from "@/src/assets/images/icons/Git.svg?react";
import GitHubIcon from "@/src/assets/images/icons/GitHub.svg?react";
import GitLabIcon from "@/src/assets/images/icons/GitLab.svg?react";
import BashIcon from "@/src/assets/images/icons/Bash.svg?react";

// Types
import type { LucideIcon } from "lucide-react";

type TLittleKnowledgeCard = {
  id: number;
  Icon: LucideIcon | React.FC<React.SVGProps<SVGSVGElement>>;
  Text: string;
  KnowledgeId: number;
};

export const LittleKnowledgeCardData: TLittleKnowledgeCard[] = [
  { id: 1, Icon: HTMLIcon, Text: "HTML", KnowledgeId: 1 },
  { id: 2, Icon: JavaScriptIcon, Text: "JavaScript", KnowledgeId: 1 },
  { id: 3, Icon: TypeScriptIcon, Text: "TypeScript", KnowledgeId: 1 },
  { id: 4, Icon: ReactIcon, Text: "React", KnowledgeId: 1 },
  { id: 5, Icon: NextIcon, Text: "Next", KnowledgeId: 1 },
  { id: 6, Icon: CSSIcon, Text: "CSS", KnowledgeId: 1 },
  { id: 7, Icon: TailwindCSSIcon, Text: "TailwindCSS", KnowledgeId: 1 },
  { id: 8, Icon: PythonIcon, Text: "Python", KnowledgeId: 2 },
  { id: 9, Icon: FastAPIIcon, Text: "FastAPI", KnowledgeId: 2 },
  { id: 10, Icon: PostgresSQLIcon, Text: "PostgresSQL", KnowledgeId: 2 },
  { id: 11, Icon: SQLite3Icon, Text: "SQLite3", KnowledgeId: 2 },
  { id: 12, Icon: LinuxIcon, Text: "Linux", KnowledgeId: 3 },
  { id: 13, Icon: WindowsIcon, Text: "Windows", KnowledgeId: 3 },
  { id: 14, Icon: DockerIcon, Text: "Docker", KnowledgeId: 3 },
  { id: 15, Icon: NginxIcon, Text: "Nginx", KnowledgeId: 3 },
  { id: 16, Icon: KongIcon, Text: "Kong", KnowledgeId: 3 },
  { id: 17, Icon: BashIcon, Text: "Bash", KnowledgeId: 3 },
  { id: 18, Icon: FigmaIcon, Text: "Figma", KnowledgeId: 0 },
  { id: 19, Icon: GitIcon, Text: "Git", KnowledgeId: 0 },
  { id: 20, Icon: GitHubIcon, Text: "GitHub", KnowledgeId: 0 },
  { id: 21, Icon: GitLabIcon, Text: "GitLub", KnowledgeId: 0 },
];
