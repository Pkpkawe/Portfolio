// Components
import Bedge from "@/src/components/atoms/Bedge";
import ProjectStatus from "../atoms/ProjectStatus";
import ProjectLink from "../atoms/ProjectLink";

// Types
import type { TProject } from "../../data/projectsData";

type SmallProjectProps = Omit<TProject, "size" | "id">;

const SmallProject = ({
  name,
  description,
  image,
  technologies,
  type,
  href,
  status,
}: SmallProjectProps) => {
  return (
    <div
      className="
            w-full h-full flex flex-col gap-5 p-8 rounded-4xl overflow-hidden
            bg-lavender-soft hover:bg-violet-normal/10 dark:bg-lavender-normal/15 dark:hover:bg-lavender-soft/5
            border border-periwinkle-soft/40 dark:border-periwinkle-normal/30
            shadow-md cursor-hover
            hover:-translate-1 hover:scale-101 hover:shadow-lg transition-all
        "
    >
      <img
        src={image}
        alt={name + "_image"}
        className="w-full aspect-3/2 rounded-3xl object-cover object-center"
      />

      <ProjectLink href={href} />

      <div className="w-full flex items-center justify-between gap-3">
        <div className="flex gap-5">
          <h3 className="text-2xl font-semibold text-shadow-mauve-shadow dark:text-lavender-light">
            {name}
          </h3>
          <Bedge text={type} variant="iris-soft" />
        </div>

        <ProjectStatus status={status} />
      </div>

      <p className="text-justify font-light leading-relaxed dark:text-mauve-light">
        {description}
      </p>

      <div className="flex gap-3 flex-wrap">
        {technologies.map((technology) => (
          <Bedge
            key={technology}
            text={technology.toUpperCase()}
            variant="mauve-shadow"
            textSize="text-sm"
          />
        ))}
      </div>
    </div>
  );
};

export default SmallProject;
