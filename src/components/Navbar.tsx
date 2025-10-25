"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Search from "./Search";
export default function Navbar() {
  const searchRef = useRef<HTMLDivElement>(null);
  const [isSearching, setIsSearching] = useState(false);

  function handleSearchUnfocus(e: MouseEvent) {
    if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
      setIsSearching(false);
    }
  }

  useEffect(() => {
    function handleSearchUnfocus(e: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setIsSearching(false);
      }
    }
    if (isSearching) {
      document.addEventListener("mousedown", handleSearchUnfocus);
    }

    return () => {
      document.removeEventListener("mousedown", handleSearchUnfocus);
    };
  }, [isSearching]);

  return (
    <header className="w-full border-b border-zinc-800 bg-black/80 backdrop-blur-md fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-extrabold text-yellow-400">
          FilmFlow
        </Link>
        <div className="hidden md:flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    className="text-gray-300 hover:text-yellow-400"
                    href="/"
                  >
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
        </div>
        {isSearching ? (
          <div ref={searchRef} className="flex items-center justify-end gap-4">
            <Search />
          </div>
        ) : (
          <div className="flex items-center justify-end gap-4">
            <div className="md:hidden mt-2">
              <Sheet>
                <SheetTrigger className="text-yellow-500 cursor-pointer ">
                  <Menu />
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="bg-gray-900 w-[200px] min-h-screen"
                >
                  <NavigationMenu>
                    <NavigationMenuList className="flex flex-col justify-start items-start min-h-screen mt-10">
                      <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                          <Link
                            className="text-gray-300 hover:text-yellow-400"
                            href="/"
                          >
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
                </SheetContent>
              </Sheet>
            </div>

            <Button
              onClick={() => setIsSearching(true)}
              variant="outline"
              className="border-yellow-400 cursor-pointer text-yellow-400 hover:bg-yellow-400 hover:text-black transition"
            >
              Search
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}
