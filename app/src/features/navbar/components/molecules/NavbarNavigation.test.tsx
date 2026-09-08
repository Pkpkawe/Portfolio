import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { NavbarNavigation } from "./NavbarNavigation";

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

vi.mock("radix-ui", () => ({
  NavigationMenu: {
    Root: ({
      children,
      className,
    }: {
      children: React.ReactNode;
      className?: string;
    }) => (
      <div data-testid="navigation-menu-root" className={className}>
        {children}
      </div>
    ),

    List: ({
      children,
      className,
    }: {
      children: React.ReactNode;
      className?: string;
    }) => (
      <ul data-testid="navigation-menu-list" className={className}>
        {children}
      </ul>
    ),

    Item: ({ children }: { children: React.ReactNode }) => <li>{children}</li>,

    Link: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  },
}));

vi.mock("../../constants/navbarItems", () => ({
  navigationItems: h.navigationItems,
}));

vi.mock("../atoms/NavbarLink", () => ({
  NavbarLink: ({
    href,
    children,
    className,
  }: {
    href: string;
    children: React.ReactNode;
    className?: string;
  }) => (
    <a href={href} className={className}>
      {children}
    </a>
  ),
}));

vi.mock("../atoms/NavbarThemeButton", () => ({
  NavbarThemeButton: () => (
    <button type="button" aria-label="Alterar tema">
      Tema
    </button>
  ),
}));

describe("NavbarNavigation", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renderiza o menu de navegação", () => {
    render(<NavbarNavigation />);

    expect(screen.getByTestId("navigation-menu-root")).toBeInTheDocument();

    expect(screen.getByTestId("navigation-menu-list")).toBeInTheDocument();
  });

  it("renderiza todos os itens de navegação", () => {
    render(<NavbarNavigation />);

    for (const item of h.navigationItems) {
      const link = screen.getByRole("link", {
        name: item.label,
      });

      expect(link).toHaveAttribute("href", item.href);
    }
  });

  it("renderiza a quantidade correta de links", () => {
    render(<NavbarNavigation />);

    expect(screen.getAllByRole("link")).toHaveLength(h.navigationItems.length);
  });

  it("renderiza o botão de tema", () => {
    render(<NavbarNavigation />);

    expect(
      screen.getByRole("button", {
        name: "Alterar tema",
      }),
    ).toBeInTheDocument();
  });

  it("renderiza o botão de tema após os itens de navegação", () => {
    render(<NavbarNavigation />);

    const links = screen.getAllByRole("link");
    const themeButton = screen.getByRole("button", {
      name: "Alterar tema",
    });

    const list = screen.getByTestId("navigation-menu-list");

    expect(list.lastElementChild).toContainElement(themeButton);
    expect(list.children).toHaveLength(h.navigationItems.length + 1);

    expect(links[links.length - 1]).not.toBe(themeButton);
  });

  it("mantém os links com os hrefs definidos nos itens de navegação", () => {
    render(<NavbarNavigation />);

    const links = screen.getAllByRole("link");

    h.navigationItems.forEach((item, index) => {
      expect(links[index]).toHaveAttribute("href", item.href);
    });
  });
});
