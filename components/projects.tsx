import { Link } from "@nextui-org/link";
import { Chip } from "@nextui-org/react";
import Image from "next/image";

import { LinkIcon } from "@/components/icons";

export default function Projects() {
  const contentList = [
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
    {
      title: "Portfolio Website",
      description:
        "Designed and developed a modern portfolio website for a photographer using Next.js and Tailwind CSS, featuring responsive design and smooth animations.",
      link: "https://justin-cai-portfolio.vercel.app/",
      src: "/image/justin-portfolio.png",
      skills: ["Next.js", "Tailwind CSS", "React", "Vercel"],
    },
    {
      title: "UK Visa Date Calculator",
      description:
        "Built a comprehensive calculator for British National (Overseas) visa holders to track their eligibility for Indefinite Leave to Remain (ILR) and British Citizenship, including absence tracking and requirement validation.",
      link: "https://bno-calculator.vercel.app/en",
      src: "/image/bno-calculator.png",
      skills: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    },
  ];
  return (
    <>
      <div
        id="projects"
        className="pt-16  flex flex-col overflow-hidden text-wrap"
      >
        <p className="self-center mb-12">projects</p>

        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {contentList
              .slice()
              .reverse()
              .map((item, index) => {
                const ProjectContent = () => (
                  <div
                    className={`flex flex-col h-full hover-effect p-6 rounded-xl transition-all duration-300 border border-gray-700 bg-gray-900/50 ${
                      item.link ? "cursor-pointer" : "cursor-default"
                    }`}
                  >
                    <div className="mb-4">
                      <Image
                        src={item.src}
                        alt={item.title}
                        width={400}
                        height={250}
                        priority={index === 0}
                        className="rounded-lg object-cover w-full h-48 border border-gray-600"
                      />
                    </div>
                    <div className="flex-1 flex flex-col">
                      <div className="flex justify-between items-center mb-3">
                        <span className="font-bold text-lg text-white hover-text">
                          {item.title}
                        </span>
                        {item.link && <LinkIcon />}
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                        {item.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {item.skills.map((skill, skillIndex) => (
                          <Chip
                            key={skillIndex}
                            variant="faded"
                            className="green border-0 text-xs"
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
        </div>
      </div>
    </>
  );
}
