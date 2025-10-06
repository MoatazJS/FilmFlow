"use client";

import React, { useRef } from "react";
import { MovieCreditsResponse } from "@/lib/interfaces/interface";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function DetailsCredits({
  credits,
}: {
  credits: MovieCreditsResponse;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount =
        direction === "left" ? -clientWidth / 2 : clientWidth / 2;
      scrollRef.current.scrollTo({
        left: scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative w-full mt-7 px-6 sm:px-10 lg:px-16">
      <h2 className="text-2xl font-semibold text-yellow-400 mb-6 text-center">
        Cast Members
      </h2>

      {/* Scroll Buttons */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => scroll("left")}
        className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-yellow-500/70 text-yellow-400 z-10 hidden sm:flex"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      {/* Scrollable Cast List */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto space-x-4 scroll-smooth px-2 sm:px-12 hide-scrollbar"
      >
        {credits.cast.slice(0, 15).map((member) => (
          <Card
            key={member.id}
            className="min-w-[150px] sm:min-w-[160px] bg-zinc-900 border border-yellow-500 flex flex-col items-center py-4"
          >
            <CardContent className="flex flex-col items-center text-center p-0">
              <Avatar className="w-32 h-32 mb-3 border-none">
                <AvatarImage
                  src={
                    member.profile_path
                      ? `https://image.tmdb.org/t/p/w300${member.profile_path}`
                      : "/placeholder.jpg"
                  }
                  alt={member.name}
                  className="object-cover rounded-full"
                />
              </Avatar>
              <p className="text-yellow-400 font-medium text-sm sm:text-base">
                {member.name}
              </p>
              <p className="text-gray-400 text-xs sm:text-sm">
                {member.character}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Right Arrow */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => scroll("right")}
        className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-yellow-500/70 text-yellow-400 z-10 hidden sm:flex"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
    </section>
  );
}
