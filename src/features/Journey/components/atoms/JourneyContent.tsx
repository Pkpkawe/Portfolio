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
    <div className="min-h-20 flex xl:flex-row flex-col justify-between 2xl:gap-15 gap-10 pb-20">
      <div className="flex flex-col gap-6 self-start flex-2">
        <div
          className="
                    relative inline-block px-5 font-mono text-[clamp(0.7rem,0.8vw,1.5rem)] font-semibold
                    before:absolute before:w-3 before:h-2.5
                    before:border-b-3 before:border-l-3 before:border-lavender-normal dark:before:border-mauve-soft
                    before:top-0 before:left-0 
                    dark:text-lavender-light
                "
        >
          {period.toUpperCase()}
        </div>

        <div className="flex flex-col gap-6">
          <p className="text-[clamp(0.8rem,0.9vw,2rem)] text-justify leading-loose text-black dark:text-lavender-light">
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

      <div className="xl:self-stretch flex items-center justify-center">
        <div className="xl:h-1/5 h-0.5 xl:w-0.5 w-1/2 bg-lavender-normal/40 dark:bg-mauve-soft/70 rounded-full" />
      </div>

      <div className="aspect-4/3 xl:w-1/3 w-full h-fit flex-3 flex items-center justify-center border-2 border-violet-night dark:border-violet-soft rounded-4xl">
        <img
          src={image}
          alt={title + "_Imagem"}
          className="
                    aspect-4/3 w-full sm:p-5 p-1 rounded-4xl object-cover object-center
                "
        />
      </div>
    </div>
  );
};

export default JourneyContent;
