// Components
import Bedge from "@/src/components/atoms/Bedge";
import ProjectStatus from "../atoms/ProjectStatus";
import ProjectLink from "../atoms/ProjectLink";

// UseHookTS
import { useWindowSize } from "usehooks-ts";

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
  const { width } = useWindowSize();

  if (width < 640)
    return (
      <div
        className={`
      relative w-full h-full flex flex-col gap-1
      rounded-4xl overflow-hidden
      bg-lavender-soft dark:bg-lavender-normal/15
      border border-periwinkle-soft/40 dark:border-periwinkle-normal/30
      shadow-md cursor-hover
      transition-all duration-700
    `}
      >
        <div className="relative w-full">
          <img
            src={image}
            alt={`${name}_image`}
            className="
            w-full aspect-video rounded-3xl
            object-cover object-center
          "
          />

          <div
            className="
          absolute bottom-3 left-3
          flex items-center gap-2
        "
          >
            <Bedge text={type} variant="iris-light" />
          </div>

          <div
            className="
          absolute top-3 right-3
          rounded-xl overflow-hidden
        "
          >
            <ProjectStatus status={status} />
          </div>
        </div>

        <div className="flex flex-col gap-3 p-3">
          <div className="flex items-start justify-between gap-3">
            <h3
              className="
            text-[clamp(1.4rem,6vw,2rem)]
            font-bold leading-tight
            text-mauve-shadow dark:text-lavender-light
          "
            >
              {name}
            </h3>

            <span
              className="
            text-xs font-semibold tracking-widest
            text-periwinkle-normal/70 dark:text-lavender-light/50
            pt-1
          "
            >
              PROJECT
            </span>
          </div>

          <div
            className="
          w-12 h-1 rounded-full
          bg-violet-normal dark:bg-lavender-light
        "
          />
        </div>

        <div className="mb-5 px-4">
          <ProjectLink href={href} />
        </div>
      </div>
    );

  return (
    <div
      className="
            relative w-full flex sm:flex-row flex-col rounded-4xl overflow-hidden
            bg-lavender-soft hover:bg-violet-normal/10 dark:bg-lavender-normal/15 dark:hover:bg-lavender-soft/5
            border border-periwinkle-soft/40 dark:border-periwinkle-normal/30
            shadow-md hover:-translate-1 hover:scale-101 hover:shadow-lg transition-all
            cursor-hover
        "
    >
      <img
        src={image}
        alt={name + "_image"}
        className="aspect-3/2 xl:w-4/7 lg:w-1/2 w-full rounded-4xl object-cover object-center"
      />

      <div className="lg:static sm:absolute w-full h-full flex flex-col lg:items-start items-end justify-between lg:px-15 lg:py-20 p-5 gap-5">
        {width < 1024 && width > 640 && <ProjectLink href={href} />}

        <div className="w-full flex lg:flex-col flex-row-reverse lg:items-start items-end justify-between gap-6">
          <div className="lg:w-full h-fit flex justify-between gap-5">
            <Bedge text={type} variant="iris-soft" />
            <ProjectStatus status={status} />
          </div>
          <div className="flex flex-col gap-2">
            <h3
              className="
                text-[clamp(0.8rem,2.5vw,4rem)] font-semibold 
                lg:text-mauve-shadow lg:dark:text-mauve-light 
                text-mauve-light dark:text-mauve-shadow
                lg:border-0 border border-iris-night dark:border-iris-light 
                lg:bg-transparent lg:dark:bg-transparent bg-iris-shadow/80 dark:bg-iris-light/80 
                lg:p-0 p-2 lg:rounded-none rounded-2xl
                w-fit
              "
            >
              {name}
            </h3>
            {width >= 1024 && (
              <p
                className="
                text-[clamp(0.8rem,1vw,2rem)] text-justify font-light leading-relaxed 
                lg:text-black lg:dark:text-mauve-light 
                text-lavender-light dark:text-black
                lg:border-0 border border-iris-night dark:border-iris-light 
                lg:bg-transparent lg:dark:bg-transparent bg-iris-shadow/80 dark:bg-iris-light/80 
                lg:p-0 p-2 lg:rounded-none rounded-2xl
                "
              >
                {description}
              </p>
            )}
          </div>
          {width >= 1024 && (
            <div className="flex gap-3 flex-wrap">
              {technologies.map((technology) => {
                return (
                  <Bedge
                    text={technology.toUpperCase()}
                    variant="mauve-shadow"
                  />
                );
              })}
            </div>
          )}
        </div>

        {width >= 1024 && <ProjectLink href={href} />}
      </div>
    </div>
  );
};

export default LargeProject;
