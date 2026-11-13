// Components
import Bedge from "@/src/components/atoms/Bedge";
import ProjectStatus from "../atoms/ProjectStatus";
import ProjectLink from "../atoms/ProjectLink";

// UseHookTS
import { useWindowSize } from "usehooks-ts";

// Types
import type { TProject } from "../../data/projectsData";

type SmallProjectProps = Omit<TProject, "size" | "id"> & {
  isActive: boolean;
};

const SmallProject = ({
  name,
  description,
  image,
  technologies,
  type,
  href,
  status,
  isActive = false,
}: SmallProjectProps) => {
  const { width } = useWindowSize();

  return (
    <div
      className={`
            w-full h-full flex flex-col gap-5 sm:p-8 p-3 rounded-4xl overflow-hidden
            bg-lavender-soft dark:bg-lavender-normal/15 
            border border-periwinkle-soft/40 dark:border-periwinkle-normal/30
            shadow-md cursor-hover
            transition-all duration-700
            ${isActive ? "-translate-1 scale-101 shadow-lg! bg-violet-normal/10! dark:bg-lavender-soft/5!" : "scale-70"}
      `}
    >
      <img
        src={image}
        alt={name + "_image"}
        className="w-full aspect-3/2 rounded-3xl object-cover object-center"
      />

      {(width >= 1024 || width < 640) && <ProjectLink href={href} />}

      <div className="w-full flex flex-row items-center justify-between gap-3">
        <div className="flex gap-3 lg:justify-between sm:justify-start justify-between lg:w-full sm:w-auto w-full">
          <div className="flex justify-between gap-5">
            <h3 className="text-[clamp(1.2rem,1.2vw,2rem)] font-semibold text-shadow-mauve-shadow dark:text-lavender-light">
              {name}
            </h3>
            <Bedge text={type} variant="indigo-soft" />
          </div>
          <ProjectStatus status={status} />
        </div>
        {width < 1024 && width >= 640 && <ProjectLink href={href} />}
      </div>
      <p className="text-[clamp(0.8rem,1vw,2rem)] text-justify font-light leading-relaxed dark:text-mauve-light">
        {description}
      </p>
      <div className="flex gap-3 flex-wrap">
        {technologies.map((technology) => (
          <Bedge
            key={technology}
            text={technology.toUpperCase()}
            variant="mauve-shadow"
          />
        ))}
      </div>
    </div>
  );
};

export default SmallProject;
