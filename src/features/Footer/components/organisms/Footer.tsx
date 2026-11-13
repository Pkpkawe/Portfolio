// Components
import InfoBlock from "../molecules/InfoBlock";
import Avatar from "@/src/components/molecules/Avatar";

// Assets
import Discord from "../../assets/images/icons/discord.svg?react";
import Instagram from "../../assets/images/icons/instagram.svg?react";
import Youtube from "../../assets/images/icons/youtube.svg?react";
import Twitch from "../../assets/images/icons/twitch.svg?react";
import Linkedin from "../../assets/images/icons/linkedin.svg?react";
import Gmail from "../../assets/images/icons/gmail.svg?react";
import GitHub from "@/src/assets/images/icons/GitHub.svg?react";
import GitLab from "@/src/assets/images/icons/GitLab.svg?react";

const Footer = () => {
  return (
    <footer
      className="
            w-full mt-100 py-10 xl:px-30 sm:px-15 px-5
            border-t border-mauve-shadow dark:border-lavender-light
            flex flex-col items-center gap-20
        "
    >
      <div className="w-full flex md:flex-row flex-col justify-between gap-14">
        <div className="flex xl:gap-20 gap-10 md:justify-start justify-between">
          <InfoBlock
            name="contatos"
            infos={[
              {
                text: "EMAIL",
                Icon: Gmail,
                href: "mailto:kawepietro50third@exemplo.com",
              },
              {
                text: "DISCORD",
                Icon: Discord,
                href: "https://discord.gg/ymx4nWJCXn",
              },
            ]}
          />
          <InfoBlock
            name="conheça-me"
            infos={[
              {
                text: "INSTAGRAM",
                Icon: Instagram,
                href: "https://instagram.com/pkpkawe",
              },
              {
                text: "YOUTUBE",
                Icon: Youtube,
                href: "https://youtube.com/@Pkpkawe",
              },
              {
                text: "TWITCH",
                Icon: Twitch,
                href: "https://twitch.tv/pkpkawe",
              },
              {
                text: "LINKEDIN",
                Icon: Linkedin,
                href: "https://linkedin.com/in/pkpkawe",
              },
            ]}
          />
          <InfoBlock
            name="laboratórios"
            infos={[
              {
                text: "GITHUB",
                Icon: GitHub,
                href: "https://github.com/Pkpkawe",
              },
              {
                text: "GITLAB",
                Icon: GitLab,
                href: "https://gitlab.com/Pkpkawe",
              },
            ]}
          />
        </div>
        <div className="flex flex-col gap-4 md:items-end items-center">
          <Avatar />
          <p
            className="
                        relative inline-block
                        text-[clamp(0.8rem,0.9vw,2rem)] font-monocraft px-5 py-2
                        text-indigo-shadow dark:text-lavender-light
                        before:absolute before:top-0 before:left-0 before:w-3.5 before:h-3.5 before:border-t-4 before:border-l-4 before:border-violet-night dark:before:border-violet-light
                        after:absolute after:bottom-0 after:right-0 after:w-3.5 after:h-3.5 after:border-b-4 after:border-r-4 after:border-violet-night dark:after:border-violet-light
                    "
          >
            Faz seu jogo aí - Pactw
          </p>
        </div>
      </div>
      <p className="text-[clamp(0.8rem,0.9vw,2rem)] text-center text-indigo-shadow dark:text-lavender-light">
        2026 © Todos os direitos reservados.
      </p>
    </footer>
  );
};

export default Footer;
