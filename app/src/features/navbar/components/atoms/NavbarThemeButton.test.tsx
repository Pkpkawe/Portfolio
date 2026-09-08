import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { NavbarThemeButton } from "./NavbarThemeButton";

const h = vi.hoisted(() => ({
  toggle: vi.fn(),
  isDarkMode: false,
  isMounted: true,
}));

vi.mock("usehooks-ts", () => ({
  useDarkMode: () => ({
    isDarkMode: h.isDarkMode,
    toggle: h.toggle,
  }),
  useIsMounted: () => () => h.isMounted,
}));

describe("NavbarThemeButton", () => {
  beforeEach(() => {
    vi.clearAllMocks();

    h.isDarkMode = false;
    h.isMounted = true;

    document.documentElement.classList.remove("dark");
  });

  it("renderiza o botão de alterar tema durante a hidratação", () => {
    h.isMounted = false;

    render(<NavbarThemeButton />);

    const button = screen.getByRole("button", {
      name: "Alterar tema",
    });

    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("type", "button");
  });

  it("renderiza o botão para ativar o modo escuro quando está no modo claro", () => {
    h.isDarkMode = false;

    render(<NavbarThemeButton />);

    expect(
      screen.getByRole("button", {
        name: "Ativar modo escuro",
      }),
    ).toBeInTheDocument();
  });

  it("renderiza o botão para ativar o modo claro quando está no modo escuro", () => {
    h.isDarkMode = true;

    render(<NavbarThemeButton />);

    expect(
      screen.getByRole("button", {
        name: "Ativar modo claro",
      }),
    ).toBeInTheDocument();
  });

  it("chama toggle ao clicar no botão", async () => {
    const user = userEvent.setup();

    render(<NavbarThemeButton />);

    await user.click(
      screen.getByRole("button", {
        name: "Ativar modo escuro",
      }),
    );

    expect(h.toggle).toHaveBeenCalledTimes(1);
  });

  it("adiciona a classe dark ao html quando o modo escuro está ativo", () => {
    h.isDarkMode = true;

    render(<NavbarThemeButton />);

    expect(document.documentElement).toHaveClass("dark");
  });

  it("remove a classe dark do html quando o modo claro está ativo", () => {
    document.documentElement.classList.add("dark");
    h.isDarkMode = false;

    render(<NavbarThemeButton />);

    expect(document.documentElement).not.toHaveClass("dark");
  });

  it("atualiza a classe dark quando o estado do tema muda", () => {
    const { rerender } = render(<NavbarThemeButton />);

    expect(document.documentElement).not.toHaveClass("dark");

    h.isDarkMode = true;

    rerender(<NavbarThemeButton />);

    expect(document.documentElement).toHaveClass("dark");
  });
});
