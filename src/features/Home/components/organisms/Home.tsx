// Components
import Topic from "@/src/components/molecules/Topic";

// Assets
import Avatar from "@/src/assets/images/logos/Main_Avatar.png";

// Lucide Icons
import { User } from "lucide-react";

// UseHookTs
import { useWindowSize } from "usehooks-ts";

const LinkClassName =
  "font-medium md:text-[clamp(1rem,1vw,3rem)] text-[clamp(0.9rem,1vw,3rem)] cursor-pointer w-1/2 p-4 rounded-2xl hover:scale-102 transition-all text-center no-underline border-2 shadow-md hover:shadow-xl";

const Home = () => {
  const { width } = useWindowSize();

  return (
    <section
      id="home"
      className="w-9/10 flex 2xl:flex-row flex-col items-center gap-15"
    >
      <img
        src={Avatar}
        alt="Avatar Pkpkawe"
        className="2xl:w-full md:w-4/5 sm:w-3/5 rounded-3xl shadow-md border-2 border-periwinkle-night dark:border-periwinkle-light 2xl:border-0 p-5 2xl:p-0"
      />

      <div className="w-full p-4 flex flex-col gap-10 xl:items-start items-center justify-between">
        <div className="w-full flex flex-col gap-10 xl:items-start items-center">
          {width >= 1536 && <Topic Icon={User} Title="Sobre mim" />}
          <p
            className="
            w-full
            dark:text-lavender-light text-justify 
            md:text-[clamp(1rem,1vw,2rem)] text-[clamp(0.7rem,1vw,2rem)]
            font-medium 2xl:leading-relaxed leading-loose
          "
          >
            Olá! Me chamo Pietro Kawê Silva Oliveira, também conhecido pelo
            apelido Pkpkawe. Sou estudante de Desenvolvimento de Software, com
            atuação focada em Frontend, Backend e DevOps. Atualmente, curso o
            técnico em Informática no IFRN (Campus Pau dos Ferros) e busco
            evoluir meus conhecimentos continuamente. Fora do desenvolvimento,
            também gosto de trabalhar com hardware de computadores; no entanto,
            minha principal área de foco é a Engenharia de Software, onde busco
            sempre aplicar boas arquiteturas e garantir alta escalabilidade para
            os projetos.
          </p>
        </div>

        <div className="w-full flex justify-between gap-8">
          <a
            href=""
            target="_blank"
            className={`
                        ${LinkClassName} 
                        text-iris-night dark:text-periwinkle-soft
                        border-iris-night dark:border-periwinkle-soft
                        hover:bg-iris-soft/10 dark:hover:bg-violet-light/10
                    `}
          >
            Fale comigo
          </a>
          <a
            href="https://github.com/Pkpkawe"
            target="_blank"
            className={`
                        ${LinkClassName} 
                        text-lavender-light dark:text-mauve-shadow
                        bg-indigo-normal dark:bg-violet-soft hover:bg-indigo-night dark:hover:bg-violet-normal 
                        border-indigo-normal dark:border-violet-soft hover:border-indigo-night dark:hover:border-violet-normal
                    `}
          >
            Meu GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
