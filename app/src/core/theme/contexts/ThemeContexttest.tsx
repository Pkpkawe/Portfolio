import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { useContext } from "react";
import { ThemeProvider } from "./ThemeContext";
import { ThemeContext } from "./ThemeContext";

const h = vi.hoisted(() => ({
  setIsDarkMode: vi.fn(),
  isDarkMode: false,
  isClient: true,
}));

vi.mock("usehooks-ts", () => ({
  useLocalStorage: () => [h.isDarkMode, h.setIsDarkMode],

  useIsClient: () => h.isClient,
}));

function ThemeConsumer() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("ThemeContext não encontrado");
  }

  return (
    <>
      <span data-testid="theme">{context.isDarkMode ? "dark" : "light"}</span>

      <button type="button" onClick={context.toggle}>
        Toggle
      </button>
    </>
  );
}

describe("ThemeProvider", () => {
  beforeEach(() => {
    vi.clearAllMocks();

    h.isDarkMode = false;
    h.isClient = true;

    document.documentElement.classList.remove("dark");
  });

  it("renderiza os filhos", () => {
    render(
      <ThemeProvider>
        <span>Conteúdo</span>
      </ThemeProvider>,
    );

    expect(screen.getByText("Conteúdo")).toBeInTheDocument();
  });

  it("usa modo claro durante a renderização no servidor", () => {
    h.isClient = false;
    h.isDarkMode = true;

    render(
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>,
    );

    expect(screen.getByTestId("theme")).toHaveTextContent("light");
  });

  it("usa o tema armazenado quando está no cliente", () => {
    h.isClient = true;
    h.isDarkMode = true;

    render(
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>,
    );

    expect(screen.getByTestId("theme")).toHaveTextContent("dark");
  });

  it("adiciona a classe dark ao html quando o modo escuro está ativo", async () => {
    h.isDarkMode = true;

    render(
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>,
    );

    await waitFor(() => {
      expect(document.documentElement).toHaveClass("dark");
    });
  });

  it("remove a classe dark ao ativar o modo claro", async () => {
    document.documentElement.classList.add("dark");

    h.isDarkMode = false;

    render(
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>,
    );

    await waitFor(() => {
      expect(document.documentElement).not.toHaveClass("dark");
    });
  });

  it("altera o tema ao chamar toggle", async () => {
    const user = userEvent.setup();

    render(
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>,
    );

    await user.click(
      screen.getByRole("button", {
        name: "Toggle",
      }),
    );

    expect(h.setIsDarkMode).toHaveBeenCalledTimes(1);

    const updater = h.setIsDarkMode.mock.calls[0][0];

    expect(updater(false)).toBe(true);
  });

  it("não altera a classe dark durante a renderização no servidor", () => {
    h.isClient = false;
    h.isDarkMode = true;

    render(
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>,
    );

    expect(document.documentElement).not.toHaveClass("dark");
  });
});
