import type { LucideIcon } from "lucide-react";
// useHooksTS
import { useWindowSize } from "usehooks-ts";

type TopicProps = {
  Title: string;
  Icon: LucideIcon;
};

const Topic = ({ Title, Icon }: TopicProps) => {
  const { width } = useWindowSize();

  if (width <= 768) {
    return (
      <div className="inline-flex flex-col gap-5 items-center self-center">
        <div className="flex items-end gap-4 whitespace-nowrap">
          <Icon
            className="bg-periwinkle-soft text-indigo-night dark:bg-mauve-night dark:text-lavender-light rounded-xl p-2"
            width={45}
            height={45}
          />
          <h2 className="text-mauve-shadow dark:text-lavender-light text-[clamp(1.6rem,1.7vw,3.5rem)] font-semibold">
            {Title}
          </h2>
        </div>

        <div className="md:w-[calc(100%+200px)] sm:w-[calc(100%+100px)] w-[calc(100%+10px)] md:h-1.5 h-1 bg-indigo-night dark:bg-lavender-normal rounded-full" />
      </div>
    );
  }

  return (
    <div className="inline-flex flex-col gap-5 items-stretch self-start">
      <div className="ml-3 flex items-end gap-4 whitespace-nowrap">
        <Icon
          className="bg-periwinkle-soft text-indigo-night dark:bg-mauve-night dark:text-lavender-light rounded-xl p-2"
          width={50}
          height={50}
        />
        <h2 className="text-mauve-shadow dark:text-lavender-light text-[clamp(1.6rem,1.7vw,3.5rem)] font-semibold">
          {Title}
        </h2>
      </div>

      <div className="md:w-[calc(100%+200px)] sm:w-[calc(100%+100px)] md:h-1.5 h-1 bg-indigo-night dark:bg-lavender-normal rounded-full" />
    </div>
  );
};

export default Topic;
