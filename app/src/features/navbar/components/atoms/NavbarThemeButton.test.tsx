import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { NavbarThemeButton } from "./NavbarThemeButton";

const h = vi.hoisted(() => ({
  toggle: vi.fn(),
}));

vi.mock("@/src/core/theme/hooks/useTheme", () => ({
  useTheme: () => ({
    toggle: h.toggle,
  }),
}));

describe("NavbarThemeButton", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renderiza o botão de alterar tema", () => {
    render(<NavbarThemeButton />);

    const button = screen.getByRole("button", {
      name: "Alternar tema",
    });

    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("type", "button");
  });

  it("chama toggle ao clicar no botão", async () => {
    const user = userEvent.setup();

    render(<NavbarThemeButton />);

    await user.click(
      screen.getByRole("button", {
        name: "Alternar tema",
      }),
    );

    expect(h.toggle).toHaveBeenCalledTimes(1);
  });
});
