type TNavBarLink = {
  id: number;
  name: string;
  href: string;
};

const NavBarLinks: TNavBarLink[] = [
  {
    id: 1,
    name: "Início",
    href: "#home",
  },
  {
    id: 2,
    name: "Conhecimentos",
    href: "#knowledge",
  },
  {
    id: 3,
    name: "Projetos",
    href: "#projects",
  },
  {
    id: 4,
    name: "Jornada",
    href: "#journey",
  },
];

export default NavBarLinks;
