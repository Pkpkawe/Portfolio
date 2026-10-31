// Components
import Avatar from "../molecules/Avatar";
import NavigationMenu from "../molecules/NavigationMenu";
import ModeButton from "../atoms/ModeButton";

const NavBar = () => {
  return (
    <div
      className="
            z-100 fixed bg-lavender-light dark:bg-mauve-shadow
            flex items-center justify-between 
            w-4/5 py-2 px-10 mt-5
            border border-indigo-shadow dark:border-lavender-light rounded-2xl
            shadow-md
        "
    >
      <Avatar />
      <NavigationMenu />
      <ModeButton />
    </div>
  );
};

export default NavBar;
