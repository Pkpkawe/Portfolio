import { ArrowUpRight } from "lucide-react";

type ProjectLinkProps = {
  href: string;
};

const ProjectLink = ({ href }: ProjectLinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        group
        w-full
        inline-flex items-center justify-center gap-2
        px-5 py-2.5
        rounded-xl
        bg-iris-night text-lavender-light
        border border-iris-normal/30
        text-sm font-semibold
        shadow-md shadow-iris-shadow/15
        transition-all duration-300 ease-out
        hover:bg-iris-normal hover:shadow-lg hover:shadow-iris-normal/25
        hover:-translate-y-0.5
        active:scale-95
        dark:bg-iris-light dark:text-iris-shadow
        dark:border-iris-soft/30
        dark:hover:bg-iris-soft
        cursor-pointer
      "
    >
      <ArrowUpRight
        className="
          w-4 h-4
          transition-transform duration-300
          group-hover:translate-x-0.5
          group-hover:-translate-y-0.5
        "
      />
      Ver projeto
    </a>
  );
};

export default ProjectLink;
