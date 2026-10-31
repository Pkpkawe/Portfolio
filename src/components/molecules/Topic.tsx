import type { LucideIcon } from "lucide-react";

type TTopic = {
  Title: string;
  Icon: LucideIcon;
};

const Topic = ({ Title, Icon }: TTopic) => {
  return (
    <div className="inline-flex flex-col gap-5 items-stretch">
      <div className="ml-3 flex items-end gap-4 whitespace-nowrap">
        <Icon
          className="bg-periwinkle-soft text-indigo-night dark:text-indigo-normal rounded-xl p-2"
          width={50}
          height={50}
        />
        <h2 className="text-mauve-shadow dark:text-lavender-light text-3xl font-semibold">
          {Title}
        </h2>
      </div>

      <div className="w-[calc(100%+200px)] h-1.5 bg-indigo-night dark:bg-indigo-normal rounded-full" />
    </div>
  );
};

export default Topic;
