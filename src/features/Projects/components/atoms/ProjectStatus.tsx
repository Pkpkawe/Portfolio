// Lucide Icons
import { CheckCircle2, Code2 } from "lucide-react";

// UseHookTS
import { useWindowSize } from "usehooks-ts";

export type ProjectStatusType = "development" | "completed";

type ProjectStatusProps = {
  status: ProjectStatusType;
};

const statusVariants = {
  completed: {
    text: "Finalizado",
    Icon: CheckCircle2,
    className:
      "bg-emerald-500/10 text-emerald-700 border-emerald-500/20 dark:bg-emerald-400/10 dark:text-emerald-300 dark:border-emerald-400/20",
  },
  development: {
    text: "Em desenvolvimento",
    Icon: Code2,
    className:
      "bg-amber-500/10 text-amber-700 border-amber-500/20 dark:bg-amber-400/10 dark:text-amber-300 dark:border-amber-400/20",
  },
} satisfies Record<
  ProjectStatusType,
  {
    text: string;
    Icon: typeof CheckCircle2;
    className: string;
  }
>;

const ProjectStatus = ({ status }: ProjectStatusProps) => {
  const { text, Icon, className } = statusVariants[status];
  const { width } = useWindowSize();

  return (
    <span
      className={`
                inline-flex items-center gap-2
                w-fit px-3 py-1.5
                rounded-full border
                text-[clamp(0.6rem,0.7vw,1.5rem)] font-semibold tracking-wide
                ${className}
        `}
    >
      <Icon className="w-3.5 h-3.5" />
      {width >= 1280 && text}
    </span>
  );
};

export default ProjectStatus;
