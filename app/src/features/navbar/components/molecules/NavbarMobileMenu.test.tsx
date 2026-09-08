import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { NavbarMobileMenu } from "./NavbarMobileMenu";

const h = vi.hoisted(() => ({
  navigationItems: [
    { href: "#inicio", label: "Início" },
    { href: "#desenvolvedores", label: "Desenvolvedores" },
    { href: "#skills", label: "Skills" },
    { href: "#softskills", label: "SoftSkills" },
    { href: "#projetos", label: "Projetos" },
    { href: "#experiencias", label: "Experiências" },
  ],
}));

vi.mock("../../constants/navbarItems", () => ({
  navigationItems: h.navigationItems,
}));

vi.mock("../atoms/NavbarLink", () => ({
  NavbarLink: ({
    href,
    onClick,
    children,
    className,
  }: {
    href: string;
    onClick: () => void;
    children: React.ReactNode;
    className?: string;
  }) => (
    <a href={href} onClick={onClick} className={className}>
      {children}
    </a>
  ),
}));

vi.mock("../atoms/NavbarThemeButton", () => ({
  NavbarThemeButton: () => <button type="button" aria-label="Alterar tema" />,
}));

describe("NavbarMobileMenu", () => {
  const onNavigate = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("não renderiza o menu quando está fechado", () => {
    render(<NavbarMobileMenu open={false} onNavigate={onNavigate} />);

    expect(screen.queryByRole("navigation")).not.toBeInTheDocument();
  });

  it("renderiza o menu quando está aberto", () => {
    render(<NavbarMobileMenu open onNavigate={onNavigate} />);

    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });

  it("renderiza todos os itens de navegação", () => {
    render(<NavbarMobileMenu open onNavigate={onNavigate} />);

    for (const item of h.navigationItems) {
      expect(
        screen.getByRole("link", {
          name: item.label,
        }),
      ).toHaveAttribute("href", item.href);
    }
  });

  it("renderiza o controle de tema", () => {
    render(<NavbarMobileMenu open onNavigate={onNavigate} />);

    expect(
      screen.getByRole("button", {
        name: "Alterar tema",
      }),
    ).toBeInTheDocument();

    expect(screen.getByText("Tema")).toBeInTheDocument();
  });

  it("chama onNavigate ao clicar em um item de navegação", async () => {
    const user = userEvent.setup();

    render(<NavbarMobileMenu open onNavigate={onNavigate} />);

    await user.click(
      screen.getByRole("link", {
        name: "Projetos",
      }),
    );

    expect(onNavigate).toHaveBeenCalledTimes(1);
  });

  it("chama onNavigate apenas uma vez ao clicar em um item", async () => {
    const user = userEvent.setup();

    render(<NavbarMobileMenu open onNavigate={onNavigate} />);

    await user.click(
      screen.getByRole("link", {
        name: "Início",
      }),
    );

    expect(onNavigate).toHaveBeenCalledTimes(1);
  });

  it("renderiza a quantidade correta de links", () => {
    render(<NavbarMobileMenu open onNavigate={onNavigate} />);

    expect(screen.getAllByRole("link")).toHaveLength(h.navigationItems.length);
  });
});
