// Components
import JourneyKnowledge from "./JourneyKnowledge";

// Types
import type { TJourneyExperiences } from "../../data/experiences";

type JourneyContentProps = Omit<TJourneyExperiences, "category">;

const JourneyContent = ({
  title,
  description,
  period,
  image,
  knowledges,
}: JourneyContentProps) => {
  return (
    <>
      <div className="flex flex-col gap-6 self-start flex-2">
        <div
          className="
                    relative inline-block px-5 font-mono
                    before:absolute before:w-3 before:h-3
                    before:border-b-3 before:border-l-3 before:border-lavender-normal dark:before:border-mauve-soft
                    before:top-0 before:left-0 
                    dark:text-lavender-light
                "
        >
          {period.toUpperCase()}
        </div>

        <div className="flex flex-col gap-6">
          <p className="text-justify leading-loose text-black dark:text-lavender-light">
            {description}
          </p>

          <div className="">
            {knowledges.map((knowledge) => (
              <JourneyKnowledge
                key={knowledge.id}
                id={knowledge.id}
                Icon={knowledge.Icon}
                text={knowledge.text}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="self-stretch flex items-center justify-center">
        <div className="h-1/5 w-0.5 bg-lavender-normal/40 dark:bg-mauve-soft/70 rounded-full" />
      </div>

      <div className="aspect-4/3 flex-3 flex items-center justify-center border-2 border-violet-night dark:border-violet-soft rounded-4xl">
        <img
          src={image}
          alt={title + "_Imagem"}
          className="
                    aspect-4/3 w-full p-5 rounded-4xl object-cover object-center
                "
        />
      </div>
    </>
  );
};

export default JourneyContent;
