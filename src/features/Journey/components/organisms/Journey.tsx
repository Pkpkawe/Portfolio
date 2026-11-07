// React
import { useState } from "react";

// Components
import Topic from "@/src/components/molecules/Topic";
import JourneyItem from "../molecules/JourneyItem";

// Data
import { journeyExperiences } from "../../data/experiences";

// Lucide Icons
import { Car } from "lucide-react";

const Journey = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section id="journey" className="w-full flex flex-col gap-15 items-center">
      <Topic Icon={Car} Title="Jornada" />

      <div className="w-9/10 flex flex-col">
        {journeyExperiences.toReversed().map((experience, index) => (
          <JourneyItem
            key={experience.id}
            {...experience}
            index={index}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            isLast={index === journeyExperiences.length - 1}
          />
        ))}
      </div>
    </section>
  );
};

export default Journey;
