import { Link } from "@nextui-org/link";
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
    {
      title: "YouTube Search Scraper",
      description:
        "A Chrome extension for scraping and managing YouTube search results with modern UI design and batch processing capabilities. Features search result scraping, export management, auto-scroll functionality, and batch processing with comprehensive progress tracking.",
      link: "https://chromewebstore.google.com/detail/ehbknlckjmdkmcenenpbdmnpddalndge?utm_source=item-share-cb",
      src: "/image/youtube-scraper.png",
      skills: ["Chrome Extension", "JavaScript", "HTML/CSS", "UI/UX"],
    },
    {
      title: "Flash Convert - Instant Auto Unit Conversion",
      description:
        "Chrome extension for instant unit conversions via right-click. Supports time zones, currencies, temperatures, lengths, and weights with real-time rates and customizable preferences.",
      link: "https://chromewebstore.google.com/detail/hhikhokgmfkagadbbjkkoeggmhcaiphm?utm_source=item-share-cb",
      src: "/image/convert.png",
      skills: ["Chrome Extension", "JavaScript", "API Integration", "UI/UX"],
    },
    {
      title: "Speed Run Ethereum Portfolio",
      description:
        "Learning journey through Ethereum development challenges. Built smart contracts, NFT minting, token staking, and DeFi protocols using Solidity, Hardhat, and Scaffold-ETH 2.",
      link: "https://speed-run-ethereum-portfolio.vercel.app/",
      src: "/image/eth.png",
      skills: ["Solidity", "Hardhat", "Next.js", "Scaffold-ETH 2", "Web3"],
    },
  ];
  return (
    <>
      <div id="projects" className="pt-16 flex flex-col overflow-hidden">
        <div className="section-divider"></div>
        <h2 className="self-center mb-12 text-3xl lg:text-4xl font-bold text-gradient animate-fadeIn">
          projects
        </h2>

        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {contentList
              .slice()
              .reverse()
              .map((item, index) => {
                const ProjectContent = () => (
                  <div
                    className={`group flex flex-col h-full glass hover-effect p-6 rounded-2xl transition-all duration-500 cursor-pointer`}
                  >
                    <div className="mb-4 relative overflow-hidden rounded-xl">
                      <Image
                        src={item.src}
                        alt={item.title}
                        width={400}
                        height={250}
                        priority={index === 0}
                        className="object-cover w-full h-48 transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      {item.link && (
                        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="glass p-2 rounded-lg">
                            <LinkIcon />
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="flex-1 flex flex-col">
                      <div className="mb-3">
                        <h3 className="font-bold text-lg text-white hover-text group-hover:text-gradient transition-colors duration-300">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-1">
                        {item.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {item.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1.5 text-xs font-semibold bg-slate-800/80 text-cyan-300 rounded-md border border-slate-700 backdrop-blur-sm"
                          >
                            {skill}
                          </span>
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
