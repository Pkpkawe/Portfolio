// Components
import Topic from "@/src/components/molecules/Topic";
import LargeProject from "../molecules/LargeProject";
import SmallProject from "../molecules/SmallProject";
import EmblaCarousel from "@/src/components/molecules/EmblaCarousel";

// React
import { useState } from "react";
import { useRef } from "react";

// Hooks
import useScrollFade from "@/src/hooks/useScrollFade";

// Lucide Icons
import { Folder, Ghost } from "lucide-react";

// Data
import { ProjectsData } from "../../data/projectsData";

const Projects = () => {
  const refProjects = useRef<HTMLElement | null>(null);

  useScrollFade(refProjects, {
    entrance: {
      opacity: 0,
      y: 80,
      scale: 0.97,
      start: "top 85%",
      end: "top 55%",
      scrub: 1,
    },
    exit: {
      enabled: false,
    },
  });
  const [activeIndexSmallProject, setActiveIndexSmallProject] = useState(0);

  const hasProjects = ProjectsData.length !== 0;
  const hasProjectLarge = ProjectsData.some(
    (project) => project.size === "large",
  );
  const hasProjectSmall = ProjectsData.some(
    (project) => project.size === "small",
  );
  const hasProjectLargeAndSmall = hasProjectLarge && hasProjectSmall;

  return (
    <section
      ref={refProjects}
      id="projects"
      className="w-full flex flex-col gap-15 items-center"
    >
      <Topic Icon={Folder} Title="Projetos" />

      <div className="w-9/10 flex flex-col items-center gap-30">
        {!hasProjects ? (
          <div className="w-full p-12 flex flex-col items-center justify-center gap-6 text-center bg-mauve-normal/30 border border-lavender-soft rounded-4xl">
            <div className="relative animate-[float_3s_ease-in-out_infinite]">
              <Ghost
                className="
                      w-20 h-20
                      text-iris-night dark:text-iris-light
                      drop-shadow-[0_8px_12px_rgba(93,63,211,0.25)]
                      animate-[wiggle_4s_ease-in-out_infinite]
                    "
                strokeWidth={1.5}
              />

              <span className="absolute -top-2 -right-3 text-xl animate-pulse text-iris-night dark:text-iris-light">
                ✦
              </span>
              <span className="absolute top-2 -left-4 text-sm animate-pulse text-iris-night dark:text-iris-light">
                ✧
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold text-iris-night dark:text-iris-light">
                Boo! Nenhum projeto por aqui...
              </h3>

              <p className="text-sm text-iris-night/70 dark:text-lavender-light/70">
                Parece que ainda não temos nada para mostrar.
              </p>
            </div>
          </div>
        ) : (
          <>
            {hasProjectLarge && (
              <div className="w-full flex flex-col gap-4">
                {ProjectsData.filter((project) => project.size === "large").map(
                  (project) => {
                    return (
                      <LargeProject
                        key={project.id}
                        name={project.name}
                        description={project.description}
                        image={project.image}
                        type={project.type}
                        technologies={project.technologies}
                        href={project.href}
                        status={project.status}
                      />
                    );
                  },
                )}
              </div>
            )}

            {hasProjectLargeAndSmall && (
              <div className="w-7/10 h-2 flex items-center justify-center gap-3">
                <div className="w-full h-1/2 bg-violet-soft/20 rounded-2xl" />
                <div className="size-4 aspect-square bg-violet-soft/20 rounded-full" />
                <div className="w-full h-1/2 bg-violet-soft/20 rounded-2xl" />
              </div>
            )}

            {hasProjectSmall && (
              <EmblaCarousel onSelect={setActiveIndexSmallProject}>
                {ProjectsData.filter((project) => project.size === "small").map(
                  (project, index) => {
                    return (
                      <SmallProject
                        key={project.id}
                        name={project.name}
                        description={project.description}
                        image={project.image}
                        type={project.type}
                        technologies={project.technologies}
                        href={project.href}
                        status={project.status}
                        isActive={index === activeIndexSmallProject}
                      />
                    );
                  },
                )}
              </EmblaCarousel>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default Projects;
