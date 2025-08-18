import { siteConfig } from "@/config/site";
import NextLink from "next/link";
export default function Hero() {
	return (
		<>
            <div className="flex flex-col justify-center h-[55vh] sm:h-[90vh] pl-10 text-wrap lg:mr-64">
                <p>Hi all. I am</p>
                <p className="text-5xl sm:text-6xl">
                    Oscar Yu
                </p>
                <p className="green mb-20 flex flex-wrap">
                    <span className="text-2xl sm:text-3xl">{">"} Comp Sci Graduate </span>
                    <NextLink
								className="text-lg sm:text-xl self-end ml-4 "
								color="foreground"
								href='https://www.durham.ac.uk/'
								target="_blank" 
                                rel="noopener noreferrer"
							>
								@durham uni
							</NextLink>
                </p>

                {siteConfig.navItems.map((item) => (
						<div key={item.href} className="mb-1">
							<NextLink
								className="text-gray-400 navhover"
								color="foreground"
								href={item.href}
								
							>
								{">"} {item.label}
							</NextLink>
						</div>
					))}
            </div>
		</>
	);
}
