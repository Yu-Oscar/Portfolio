import {
  Link,
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";

import NextLink from "next/link";
import { PORTFOLIO_DATA } from "@/data";

import { GithubIcon, LinkedInIcon } from "@/components/icons";

export const Navbar = () => {
  const githubUrl =
    PORTFOLIO_DATA.links.find((link) => link.name.toLowerCase() === "github")?.url ?? "#";
  const linkedInUrl =
    PORTFOLIO_DATA.links.find((link) => link.name.toLowerCase() === "linkedin")?.url ?? "#";

  return (
    <NextUINavbar
      maxWidth="full"
      position="sticky"
      className="glass h-16 backdrop-blur-xl border-0"
      isBordered={false}
    >
      <NavbarContent className="basis-1/2 sm:basis-3/5 lg:basis-full h-16" justify="start">
        <NavbarItem className="text-test">
          <NextLink color="foreground" href={"/#"} className="text-base lg:text-lg font-semibold text-gradient hover:opacity-80 transition-opacity">
            {PORTFOLIO_DATA.handle}
          </NextLink>
        </NavbarItem>
        <div className="hidden lg:flex ml-8 xl:ml-20 border-l border-white/10">
          {PORTFOLIO_DATA.navItems.map((item) => (
            <NavbarItem
              key={item.href}
              className="border-l border-white/10 px-3 lg:px-4 xl:px-6 h-16 flex items-center"
            >
              <NextLink
                className="text-gray-400 navhover text-sm lg:text-base"
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </div>
      </NavbarContent>

      <NavbarContent
        className="flex basis-1/2 sm:basis-2/5 lg:basis-full h-16"
        justify="end"
      >
        <NavbarItem className="flex gap-3 lg:gap-4 h-16 items-center">
          <Link isExternal href={githubUrl} className="p-2 rounded-lg  hover:bg-white/10 transition-all duration-200 hover:scale-110">
            <GithubIcon />
          </Link>
          <Link isExternal href={linkedInUrl} className="p-2 rounded-lg  hover:bg-white/10 transition-all duration-200 hover:scale-110">
            <LinkedInIcon />
          </Link>
        </NavbarItem>
        <NavbarItem className="border-l border-white/10 pl-6 h-16 flex items-center">
          <NextLink
            href={PORTFOLIO_DATA.resume}
            download={PORTFOLIO_DATA.resumeLabel}
            target="_blank"
            className="text-xs sm:text-sm px-2 py-1 sm:px-4 sm:py-2 btn-modern text-white"
          >
            _resume
          </NextLink>
        </NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  );
};
