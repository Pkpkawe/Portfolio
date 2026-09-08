import Image from "next/image";

export function NavbarLogo() {
  return (
    <div className="group flex items-center gap-2.5">
      <div
        className={[
          "relative size-9 overflow-hidden rounded-full",
          "border-2 border-primary/20",
          "bg-lavender-mist",
          "transition-transform duration-300",
          "group-hover:scale-105",
        ].join(" ")}
      >
        <Image
          src="/Main_Avatar.png"
          alt="Pkpkawe"
          fill
          priority
          sizes="36px"
          className="object-cover"
        />
      </div>

      <span
        className={[
          "font-monocraft text-base tracking-tight",
          "text-primary",
          "transition-colors",
          "dark:text-lavender-mist",
        ].join(" ")}
      >
        Pkpkawe
      </span>
    </div>
  );
}
