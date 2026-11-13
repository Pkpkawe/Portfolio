import "./App.css";

// Components
import NavBar from "./features/NavBar/components/organisms/NavBar";
import MeshGradient from "./features/MeshGradient/components/organisms/MeshGradient";
import Header from "./features/Header/components/organisms/Header";
import Home from "./features/Home/components/organisms/Home";
import Knowledge from "./features/Knowledge/components/organisms/Knowledge";
import Projects from "./features/Projects/components/organisms/Projects";
import Journey from "./features/Journey/components/organisms/Journey";
import Footer from "./features/Footer/components/organisms/Footer";

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

        <main className="xl:w-4/5 w-5/6 flex flex-col items-center gap-100">
          <Home />

          <Knowledge />

          <Projects />

          <Journey />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
