// Components
import Bedge from "@/src/components/atoms/Bedge";
import ProjectStatus from "../atoms/ProjectStatus";
import ProjectLink from "../atoms/ProjectLink";

// Types
import type { TProject } from "../../data/projectsData";

type LargeProjectProps = Omit<TProject, "size" | "id">;

const LargeProject = ({
  name,
  description,
  image,
  technologies,
  type,
  href,
  status,
}: LargeProjectProps) => {
  return (
    <div
      className="
            w-full flex rounded-4xl overflow-hidden
            bg-lavender-soft hover:bg-violet-normal/10 dark:bg-lavender-normal/15 dark:hover:bg-lavender-soft/5
            border border-periwinkle-soft/40 dark:border-periwinkle-normal/30
            shadow-md hover:-translate-1 hover:scale-101 hover:shadow-lg transition-all
            cursor-hover
        "
    >
      <img
        src={image}
        alt={name + "_image"}
        className="aspect-3/2 w-4/7 rounded-4xl"
      />

      <div className="w-full flex flex-col justify-between px-15 py-20">
        <div className="w-full flex flex-col gap-6">
          <div className="w-full flex justify-between">
            <Bedge text={type} variant="iris-soft" />
            <ProjectStatus status={status} />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-4xl font-semibold text-shadow-mauve-shadow dark:text-lavender-light">
              {name}
            </h3>
            <p className="text-justify font-light leading-relaxed dark:text-mauve-light">
              {description}
            </p>
          </div>
          <div className="flex gap-3 flex-wrap">
            {technologies.map((technology) => {
              return (
                <Bedge
                  text={technology.toUpperCase()}
                  variant="mauve-shadow"
                  textSize="text-sm"
                />
              );
            })}
          </div>
        </div>

        <ProjectLink href={href} />
      </div>
    </div>
  );
};

export default LargeProject;
