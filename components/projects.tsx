import { Link } from "@nextui-org/link";
import {Chip} from "@nextui-org/react";
import Image from "next/image";

import { LinkIcon } from "@/components/icons";

import Mint from "@/components/image/mint.png";
import Live from "@/components/image/live.png";
import Portfolio from "@/components/image/portfolio.png";

export default function Projects() {
	const contentList = [
		{
			title: "Personal Portfolio",
			description: "Make beautiful websites regardless of your design experience.",
			link: null,
			src: Portfolio,
			skills: ['Nextjs', "NextUI"]
		},
		{
			title: "NFT Minting @ChainChallenger",
			description: "Web app for minting NFT. Designed all frontend elements using Nextjs and NextUI, allow users to connect their crypto wallet using RainbowKit.",
			link: "https://cc-mint-frontend.pages.dev/",
			src: Mint,
			skills: ['Nextjs', "NextUI", "RainbowKit"]
		},
		{
			title: "Streaming Platform @ChainChallenger",
			description: "Make beautiful websites regardless of your design experience.",
			link: "https://live.chainchallenger.xyz/",
			src: Live,
			skills: ['Nextjs', "NextUI", "Clerk", "LiveKit"]
		},
]
	return (
		<>
            <div id="projects" className="pt-16 self-center flex flex-col ">
				<p className="self-center mb-12">projects</p>

			
				{contentList.slice().reverse().map((item, index) => (
				item.link === null ? (
					<div 
						key={index}
						className="flex self-center gap-x-6 flex-col-reverse w-full md:flex-row mb-8 justify-center hover-effect p-4 rounded-lg"
					>
					<Image
						src={item.src}
						alt="mint"
						className="rounded-lg flex object-contain md:mt-0 mt-4 w-64 justify-self-start border border-gray-600 mb-6 sm:mb-0" 
					/>
					<div className="flex-row w-96">
						<div className="flex">
							<span className="font-bold text-white fill-white hover-text">{item.title}</span>
						</div>
						<p className="text-sm text-gray-400 overflow-ellipsis">{item.description}</p>
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
						className="flex self-center gap-x-6 flex-col-reverse md:flex-row w-full mb-8 items-start justify-center hover-effect p-4 rounded-lg"
						href={item.link}
						isExternal
					>
					<Image
						src={item.src}
						alt="mint"
						className="rounded-lg flex object-contain md:mt-0 mt-4 w-64 justify-self-start border border-gray-600 mb-6 sm:mb-0" 
					/>
					<div className="flex-row w-96">
						<div className="flex ">
							<span className="font-bold text-white fill-white hover-text">{item.title}</span>
							<span className="ml-3 fill-white hover-text"><LinkIcon /></span>
						</div>
						<p className="text-sm text-gray-400 overflow-ellipsis">{item.description}</p>
						<div className="mt-1 lg:mt-16">
							{item.skills.map((skill, skillIndex) => (
								<Chip key={skillIndex} variant="faded" className="mr-2 mb-2 green border-0">{skill}</Chip>
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