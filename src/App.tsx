import "./App.css";

// Components
import NavBar from "./features/NavBar/components/organisms/NavBar";
import MeshGradient from "./features/MeshGradient/components/organisms/MeshGradient";
import Header from "./features/Header/components/organisms/Header";
import Home from "./features/Home/components/organisms/Home";

// UseHookTS
import { useDarkMode } from "usehooks-ts";

function App() {
  const { isDarkMode } = useDarkMode();

  return (
    <>
      <MeshGradient />

      <div
        className={`
          h-full w-full bg-lavender-light dark:bg-mauve-shadow flex flex-col items-center
          ${isDarkMode ? "dark" : ""}
        `}
      >
        <NavBar />

        <Header />

        <Home />
      </div>
    </>
  );
}

export default App;
