"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { HamburgerIcon } from "./Icons";
import { Logo } from "./Logo";

const navigationLinks = [
  { title: "Pricing", href: "/pricing" },
  { title: "Contact", href: "/contact" },
  // { title: "blog", href: "/blog" },
];

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-10 w-full border-b bg-transparent border-transparent-white  backdrop-blur-[12px]">
      <div className=" flex h-navigation-height w-full px-8 ">
        <Link className="flex items-center text-md" href="/">
          <Logo className="mr-3 h-[1.8rem] w-[1.8rem]" /> Talkee
        </Link>

        {/* web navigation */}

        <div
          className={cn([
            "transition-[visibility] hidden md:flex items-center grow  justify-end",
          ])}
        >
          <NavigationMenu>
            <NavigationMenuList>
              {navigationLinks.map((link) => (
                <NavigationMenuItem key={link.title}>
                  <Link href={link.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      {link.title}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="   h-full flex items-center  ml-10 ">
          <Button asChild className=" lg:text-sm text-xs">
            <Link href="/login">Log in</Link>
          </Button>
        </div>

        {/* mobile navigation */}
        <DropdownMenu>
          <DropdownMenuTrigger className="ml-6 md:hidden" asChild>
            <Button variant="ghost" size="icon">
              <HamburgerIcon />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[98vw] mt-4 mx-2">
            {navigationLinks.map((link) => (
              <DropdownMenuItem
                asChild
                className="h-12 cursor-pointer"
                key={link.title}
              >
                <Link href={link.href} passHref>
                  {link.title}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};
