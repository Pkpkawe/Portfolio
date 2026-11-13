// React
import { useEffect, useRef, useState, useCallback } from "react";
import { type SetStateAction, type Dispatch } from "react";

// UseHookTS
import { useIntersectionObserver, useEventListener } from "usehooks-ts";

// Components
import Bedge from "@/src/components/atoms/Bedge";
import JourneyContent from "../atoms/JourneyContent";
import JourneyMarker from "../atoms/JourneyMarker";

// Types
import type { TJourneyExperiences } from "../../data/experiences";

type JourneyItemProps = TJourneyExperiences & {
  index: number;
  activeIndex: number;
  setActiveIndex: Dispatch<SetStateAction<number>>;
  title: string;
  category: string;
  isLast: boolean;
};

const JourneyItem = ({
  id,
  title,
  description,
  period,
  category,
  image,
  knowledges,
  activeIndex,
  index,
  isLast,
  setActiveIndex,
}: JourneyItemProps) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const itemRef = useRef<HTMLElement | null>(null);

  const [progress, setProgress] = useState(0);

  const { isIntersecting, ref } = useIntersectionObserver({
    rootMargin: "-50% 0px -25% 0px",
    threshold: 0.1,
  });

  const setRefs = useCallback(
    (node: HTMLElement | null) => {
      itemRef.current = node;
      ref(node);
    },
    [ref],
  );

  const isActive = activeIndex === index;
  const isCompleted = activeIndex > index;

  useEventListener("scroll", () => {
    if (!isIntersecting && !isActive && !isCompleted) return;

    const rect = itemRef.current?.getBoundingClientRect();
    if (!rect) return;

    const value = (window.innerHeight / 2 - rect.top) / rect.height;
    setProgress(Math.min(1, Math.max(0, value)));
  });

  useEffect(() => {
    if (isIntersecting) {
      setActiveIndex(index);
    }
  }, [isIntersecting, index, setActiveIndex]);

  return (
    <article
      ref={setRefs}
      className="flex items-stretch justify-between sm:gap-20 gap-10"
    >
      <JourneyMarker
        isActive={isActive}
        isCompleted={isCompleted}
        hasConnector={!isLast}
        progress={progress}
      />

      <div className="flex min-w-0 flex-4 flex-col gap-3">
        <div
          className={`flex sm:flex-row flex-col-reverse sm:items-center sm:gap-5 gap-2 ${!isActive && "opacity-45"} transition-all`}
        >
          <h3 className="text-indigo-shadow dark:text-lavender-light text-[clamp(1.2rem,1.5vw,4rem)] font-bold">
            {title}
          </h3>

          <div className="sm:block hidden size-1.5 rounded-full bg-lavender-normal/40 dark:bg-mauve-soft/70" />

          <Bedge text={category.toUpperCase()} variant="periwinkle-soft" />
        </div>

        <div
          ref={contentRef}
          aria-hidden={!isActive}
          className={`
                        grid transition-all duration-500 ease-in-out
                        ${
                          isActive
                            ? "grid-rows-[1fr] translate-y-0 opacity-100"
                            : "grid-rows-[0fr] -translate-y-2.5 opacity-0"
                        }
                `}
        >
          <JourneyContent
            key={id}
            id={id}
            title={title}
            description={description}
            period={period}
            image={image}
            knowledges={knowledges}
          />
        </div>
      </div>
    </article>
  );
};

export default JourneyItem;
