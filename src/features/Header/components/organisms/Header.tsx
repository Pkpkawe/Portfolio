const Header = () => {
  return (
    <header
      className="
            min-h-screen w-full
            flex items-center justify-center
            bg-[repeating-linear-gradient(90deg,transparent_0,transparent_47px,#D4B5F84D_48px),repeating-linear-gradient(0deg,transparent_0,transparent_47px,#D4B5F84D_48px)]
            dark:bg-[repeating-linear-gradient(90deg,transparent_0,transparent_47px,#29183F4D_48px),repeating-linear-gradient(0deg,transparent_0,transparent_47px,#29183F4D_48px)]
            mask-[linear-gradient(to_bottom,black_0%,black_85%,transparent_100%)]
        "
    >
      <h1 className="text-indigo-normal dark:text-periwinkle-light font-medium text-5xl leading-loose tracking-wider">
        <span className="ml-9">Hello, World!</span>
        <br />
        Eu sou{" "}
        <span className="text-mauve-shadow dark:text-lavender-light font-monocraft text-7xl">
          Pkpakwe
        </span>
      </h1>
    </header>
  );
};

export default Header;
