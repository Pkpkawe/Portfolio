import "./App.css";

// Components
import NavBar from "./features/NavBar/components/organisms/NavBar";
import MeshGradient from "./features/MeshGradient/components/organisms/MeshGradient";
import Header from "./features/Header/components/organisms/Header";
import Home from "./features/Home/components/organisms/Home";
import Knowledge from "./features/Knowledge/components/organisms/Knowledge";
import Projects from "./features/Projects/components/organisms/Projects";

// Hooks
import { useTheme } from "./hooks/useTheme";

function App() {
  const { isDarkMode } = useTheme();

  return (
    <>
      <MeshGradient />

      <div
        className={`
          h-full w-full bg-lavender-light dark:bg-mauve-shadow flex flex-col items-center overflow-hidden
          ${isDarkMode ? "dark" : ""}
        `}
      >
        <NavBar />

        <Header />

        <main className="w-4/5 flex flex-col items-center gap-100">
          <Home />

          <Knowledge />

          <Projects />
        </main>
      </div>
    </>
  );
}

export default App;
