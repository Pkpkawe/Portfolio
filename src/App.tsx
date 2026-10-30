import "./App.css";

// Components
import NavBar from "./features/NavBar/components/organisms/NavBar";
import MeshGradient from "./features/MeshGradient/components/organisms/MeshGradient";

// UseHookTS
import { useDarkMode } from "usehooks-ts";

function App() {
  const { isDarkMode } = useDarkMode();

  return (
    <>
      <MeshGradient />

      <div
        className={`
          h-screen w-full bg-lavender-light dark:bg-mauve-shadow flex flex-col items-center
          ${isDarkMode ? "dark" : ""}
        `}
      >
        <NavBar />
      </div>
    </>
  );
}

export default App;
