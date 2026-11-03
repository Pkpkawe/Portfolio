// Types
import { type LucideIcon } from "lucide-react";

type Info = {
  text: string;
  Icon: LucideIcon | React.FC<React.SVGProps<SVGSVGElement>>;
  href: string;
};

type InfoBlockProps = {
  name: string;
  infos: Info[];
};

const InfoBlock = ({ name, infos }: InfoBlockProps) => {
  return (
    <div className="flex flex-col gap-4">
      <span className="font-semibold text-mauve-shadow dark:text-lavender-light">
        {name.toUpperCase()}
      </span>
      <ul className="flex flex-col gap-3">
        {infos.map((info) => (
          <li>
            <a href={info.href} className="flex items-center gap-3 group">
              <div className="p-1 rounded-md bg-periwinkle-soft/50 dark:bg-lavender-light/20 group-hover:bg-periwinkle-soft/70 darkgroup-hover:bg-lavender-light/50 transition-all">
                <info.Icon className="text-[1.1vw] text-mauve-shadow dark:text-lavender-light" />
              </div>
              <span className="text-mauve-shadow dark:text-lavender-light group-hover:font-medium transition-all">
                {info.text}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InfoBlock;
