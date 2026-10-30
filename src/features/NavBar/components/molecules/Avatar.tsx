import Avatar_Image from "@/src/assets/images/logos/Circular_Main_Avatar.png";

const Avatar = () => {
  return (
    <div className="flex gap-3 items-center">
      <img src={Avatar_Image} alt="Avatar de Pkpkawe" className="h-10" />
      <h1 className="font-monocraft text-xl text-indigo-shadow dark:text-lavender-light">
        Pkpkawe
      </h1>
    </div>
  );
};

export default Avatar;
