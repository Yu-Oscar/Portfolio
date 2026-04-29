import NextLink from "next/link";
import { PORTFOLIO_DATA } from "@/data";
export default function Hero() {
	return (
		<>
            <div className="flex flex-col justify-center h-[60vh] sm:h-[75vh] lg:h-[90vh] px-4 sm:px-6 lg:px-10 text-wrap lg:mr-64 animate-fadeInUp">
                <p className="text-base sm:text-lg lg:text-xl mb-2 text-gray-300 animate-fadeIn">Hi all. I am</p>
                <p className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mb-4 text-gradient">
                    {PORTFOLIO_DATA.name}
                </p>
                <div className="green mb-8 sm:mb-12 lg:mb-20 flex flex-wrap items-center animate-fadeIn">
                    <span className="text-xl sm:text-2xl lg:text-3xl font-medium">
                      {">"} {PORTFOLIO_DATA.currentRole.title}
                    </span>
                    <NextLink
								className="text-sm sm:text-lg lg:text-xl self-end ml-2 sm:ml-4 glass px-3 py-1 rounded-lg hover:bg-white/10 transition-all duration-200"
								color="foreground"
								href={PORTFOLIO_DATA.currentRole.companyUrl}
								target="_blank" 
                                rel="noopener noreferrer"
							>
								@{PORTFOLIO_DATA.currentRole.companyHandle}
							</NextLink>
                </div>

                <div className="space-y-3 animate-fadeInUp">
                    {PORTFOLIO_DATA.navItems.map((item) => (
						    <div key={item.href} className="group">
							    <NextLink
								    className="text-gray-300 navhover flex items-center gap-2 text-lg hover:text-white transition-colors duration-200"
								    color="foreground"
								    href={item.href}
							    >
								    <span className="text-primary">{">"}</span>
								    <span className="group-hover:translate-x-1 transition-transform duration-200">{item.label}</span>
							    </NextLink>
						    </div>
					    ))}
                </div>
            </div>
		</>
	);
}
