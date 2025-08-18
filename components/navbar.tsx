import {
  Link,
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";

import { GithubIcon, LinkedInIcon } from "@/components/icons";

export const Navbar = () => {
  return (
    <NextUINavbar
      maxWidth="full"
      position="sticky"
      className="bg-transparent h-12 "
      isBordered
    >
      <NavbarContent className="basis-1/5 sm:basis-full h-12" justify="start">
        <NavbarItem className="text-test ">
          <NextLink color="foreground" href={"/#"}>
            oscar-yu
          </NextLink>
        </NavbarItem>
        <div className="hidden lg:flex ml-20 border-gray-800 border-r">
          {siteConfig.navItems.map((item) => (
            <NavbarItem
              key={item.href}
              className="border-gray-800 border-l px-6 h-12 flex items-center "
            >
              <NextLink
                className="text-gray-400 navhover"
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
        className="flex basis-1/5 sm:basis-full h-12"
        justify="end"
      >
        <NavbarItem className="flex gap-4 h-12 items-center">
          <Link isExternal href={siteConfig.links.github}>
            <GithubIcon />
          </Link>
          <Link isExternal href={siteConfig.links.linkedin}>
            <LinkedInIcon />
          </Link>
        </NavbarItem>
        <NavbarItem className="border-gray-800 border-l pl-6 h-12 flex items-center text-gray-400 navhover">
          <NextLink
            href="https://1drv.ms/b/c/04d40a6ce3f3d3c0/ERefeUeaULZHqfmh5H7BWqQB4C_pQ07mBoE7CjCjj9fq8Q?e=c4vf61"
            download="Oscar Yu Resume"
            target="_blank"
          >
            _resume
          </NextLink>
        </NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  );
};
