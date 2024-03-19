import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import BG from "@/components/image/bg.svg";
import Image from "next/image";

export default function Hero() {
	return (
		<>	
			<Image
				src={BG}
				alt="mint"
				className="absolute left-[40%]" 
			/>
            <div className="flex flex-col justify-center h-[55vh] sm:h-[90vh] lg:px-96 whitespace-nowrap w-full">
                <p>Hi all. I am</p>
                <p className="text-6xl">
                    Oscar Yu
                </p>
                <p className="purple mb-20 flex flex-wrap ">
                    <span className="text-3xl font-medium">{">"} Comp Sci Student </span>
                    <Link
						className="text-xl self-end ml-4 purple"
						href='https://www.durham.ac.uk/'
						target="_blank" 
						rel="noopener noreferrer"
					>
						@durham uni
					</Link>
                </p>

                {siteConfig.navItems.map((item) => (
						<div key={item.href} className="mb-1">
							<Link
								className="text-gray-400"
								color="foreground"
								href={item.href}
								
							>
								{">"} {item.label}
							</Link>
						</div>
					))}
				
            </div>
		</>
	);
}
