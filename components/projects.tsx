import { Link } from "@nextui-org/link";
import {Chip} from "@nextui-org/react";
import Image from "next/image";

import { LinkIcon } from "@/components/icons";

export default function Projects() {
	const contentList = [
    {
        title: "Personal Portfolio",
        description: "Designed a portfolio website using NextJs and NextUI and hosted on Vercel",
        link: 'https://github.com/Yu-Oscar/Portfolio',
        src: "@/components/image/portfolio.png",
        skills: ['Nextjs', "NextUI", "Vercel"]
    },
    {
        title: "NFT Minting @ChainChallenger",
        description: "Web app for minting NFT. Designed all frontend elements using Nextjs and NextUI, allow users to connect their crypto wallet using RainbowKit.",
        link: "https://cc-mint-frontend.pages.dev/",
        src: "@/components/image/mint.png",
        skills: ['Nextjs', "NextUI", "RainbowKit"]
    },
    {
        title: "Clutch TV @ChainChallenger",
        description: "Assisted in building a streaming platform specified for Gamefi streams, implementing responsive UI/UX design for web & mobile viewers. Implemented a quiz raffle system, allowing livestream viewers to participate using cryptocurrencies",
        link: "https://clutchtv.live/",
        src: "@/components/image/live.png",
        skills: ['Nextjs', "NextUI", "Clerk", "LiveKit"]
    },
]
	return (
		<>
            <div id="projects" className="pt-16  flex flex-col overflow-hidden text-wrap">
				<p className="self-center mb-12">projects</p>

			
				{contentList.slice().reverse().map((item, index) => (
				item.link === null ? (
					<div 
						key={index}
						className="text-wrap flex self-center gap-x-6 flex-col-reverse w-full md:flex-row mb-8 justify-center hover-effect p-4 rounded-lg"
					>
					<Image
						src={item.src}
						alt="mint"
						className="rounded-lg flex object-contain md:mt-0 mt-4 w-64 justify-self-start border border-gray-600 mb-6 sm:mb-0" 
					/>
					<div className="flex-row text-wrap md:w-80">
						<div className="flex">
							<span className="font-bold text-white fill-white hover-text ">{item.title}</span>
						</div>
						<p className="text-sm text-gray-400 text-wrap">{item.description}</p>
						<div className="mt-1 lg:mt-16">
							{item.skills.map((skill, skillIndex) => (
								<Chip key={skillIndex} variant="faded" className="mr-2 mb-2 green border-0 ">{skill}</Chip>
							))}
						</div>
					</div>
					</div>
				) : (
					<Link 
						key={index}
						className="flex gap-x-6 flex-col-reverse md:flex-row  mb-8 items-start justify-center hover-effect p-4 rounded-lg"
						href={item.link}
						isExternal
					>
					<Image
						src={item.src}
						alt="mint"
						className="rounded-lg flex object-contain md:mt-0 mt-4 w-64 justify-self-start border border-gray-600 mb-6 sm:mb-0" 
					/>
					<div className="flex-row text-wrap md:w-96">
						<div className="flex justify-between">
							<span className="font-bold text-white fill-white hover-text ">{item.title}</span>
							<LinkIcon/>
						</div>
						<p className="text-sm text-gray-400 text-wrap">{item.description}</p>
						<div className="mt-1 lg:mt-16">
							{item.skills.map((skill, skillIndex) => (
								<Chip key={skillIndex} variant="faded" className="mr-2 mb-2 green border-0 ">{skill}</Chip>
							))}
						</div>
					</div>
					</Link>
				)
				))}
            </div>
			
		</>
	);
}