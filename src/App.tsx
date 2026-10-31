import "./App.css";

// Components
import NavBar from "./features/NavBar/components/organisms/NavBar";
import MeshGradient from "./features/MeshGradient/components/organisms/MeshGradient";
import Header from "./features/Header/components/organisms/Header";
import Home from "./features/Home/components/organisms/Home";
import Knowledge from "./features/Knowledge/components/organisms/Knowledge";

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

        <main className="w-4/5 flex flex-col items-center gap-100">
          <Home />

          <Knowledge />
        </main>
      </div>
    </>
  );
}

export default App;
