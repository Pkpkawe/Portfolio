type BedgeTypes = "mauve-night";

const BedgeVariants: Record<BedgeTypes, string> = {
  "mauve-night": "bg-mauve-night/90 text-lavender-light",
};

type BedgeProps = {
  text: string;
  variant: BedgeTypes;
};

const Bedge = ({ text, variant }: BedgeProps) => {
  return (
    <div className={`${BedgeVariants[variant]} rounded-full py-1.5 px-4`}>
      {text}
    </div>
  );
};

export default Bedge;
