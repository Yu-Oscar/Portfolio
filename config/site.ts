import { PORTFOLIO_DATA } from "@/data";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: PORTFOLIO_DATA.name,
	description: PORTFOLIO_DATA.description,
	navItems: PORTFOLIO_DATA.navItems,
	links: {
		github: PORTFOLIO_DATA.links.find((link) => link.name.toLowerCase() === "github")?.url ?? "",
		linkedin: PORTFOLIO_DATA.links.find((link) => link.name.toLowerCase() === "linkedin")?.url ?? "",
	},
};
