"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="w-full border-b border-zinc-800 bg-black/80 backdrop-blur-md fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-extrabold text-yellow-400">
          FilmFlow
        </Link>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link className="text-gray-300 hover:text-yellow-400" href="/">
                  Home
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  className="text-gray-300 hover:text-yellow-400"
                  href="/popular"
                >
                  Popular
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  className="text-gray-300 hover:text-yellow-400"
                  href="/top-rated"
                >
                  Top Rated
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  className="text-gray-300 hover:text-yellow-400"
                  href="/upcoming"
                >
                  Upcoming
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <Button
          variant="outline"
          className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition"
        >
          Search
        </Button>
      </div>
    </header>
  );
}
