import { Link } from "@nextui-org/link";
import { Chip } from "@nextui-org/react";
import Image from "next/image";

import { LinkIcon } from "@/components/icons";

export default function Projects() {
  const contentList = [
    {
      title: "Personal Portfolio",
      description:
        "Designed a portfolio website using NextJs and NextUI and hosted on Vercel",
      link: null,
      src: "/image/portfolio.png",
      skills: ["Nextjs", "NextUI", "Vercel"],
    },
    {
      title: "NFT Minting @ChainChallenger",
      description:
        "Web app for minting NFT. Designed all frontend elements using Nextjs and NextUI, allow users to connect their crypto wallet using RainbowKit.",
      link: "https://cc-mint-frontend.pages.dev/",
      src: "/image/mint.png",
      skills: ["Nextjs", "NextUI", "RainbowKit"],
    },
    {
      title: "Clutch TV @ChainChallenger",
      description:
        "Assisted in building a streaming platform specified for Gamefi streams, implementing responsive UI/UX design for web & mobile viewers. Implemented a quiz raffle system, allowing livestream viewers to participate using cryptocurrencies",
      link: "https://clutchtv.live/",
      src: "/image/live.png",
      skills: ["Nextjs", "Javascript", "React"],
    },
    {
      title: "Mop! Clean! Sweep!",
      description:
        "Built an Puzzle Maze game with Unity and C#, implemented game logics, sound effects and achievement system.",
      link: "https://yu-oscar.itch.io/mop-clean-sweep",
      src: "/image/gamedev.png",
      skills: ["Unity", "C#"],
    },
    {
      title: "Football DAO",
      description:
        "Final year project on Decentralised Community Ownership of Football Clubs: A DAO Framework on Polygon Blockchain. Implemented smart contracts for governance, voting system, and token economics.",
      link: "https://fyp-final-neon.vercel.app/",
      src: "/image/dao.png",
      skills: ["Nextjs", "Solidity", "Forge", "OpenZeppelin", "Wagmi"],
    },
  ];
  return (
    <>
      <div
        id="projects"
        className="pt-16  flex flex-col overflow-hidden text-wrap"
      >
        <p className="self-center mb-12">projects</p>

        {contentList
          .slice()
          .reverse()
          .map((item, index) => {
            const ProjectContent = () => (
              <div
                className={`flex gap-x-6 flex-col-reverse md:flex-row mb-8 items-start justify-center hover-effect p-4 rounded-lg ${
                  item.link ? "cursor-pointer" : "cursor-default"
                }`}
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  width={256}
                  height={256}
                  priority={index === 0}
                  className="rounded-lg flex object-contain md:mt-0 mt-4 w-64 justify-self-start border border-gray-600 mb-6 sm:mb-0"
                />
                <div className="flex-row text-wrap md:w-96">
                  <div className="flex justify-between">
                    <span className="font-bold text-white fill-white hover-text">
                      {item.title}
                    </span>
                    {item.link && <LinkIcon />}
                  </div>
                  <p className="text-sm text-gray-400 text-wrap">
                    {item.description}
                  </p>
                  <div className="mt-1 lg:mt-16">
                    {item.skills.map((skill, skillIndex) => (
                      <Chip
                        key={skillIndex}
                        variant="faded"
                        className="mr-2 mb-2 green border-0"
                      >
                        {skill}
                      </Chip>
                    ))}
                  </div>
                </div>
              </div>
            );

            return item.link ? (
              <Link
                key={index}
                href={item.link}
                isExternal
                target="_blank"
                rel="noopener noreferrer"
              >
                <ProjectContent />
              </Link>
            ) : (
              <ProjectContent key={index} />
            );
          })}
      </div>
    </>
  );
}
