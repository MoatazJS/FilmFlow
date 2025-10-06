"use client";

import { MovieRecommendationResponse } from "@/lib/interfaces/interface";
import Image from "next/image";
import React, { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function DetailsRecommendations({
  recommendations,
}: {
  recommendations: MovieRecommendationResponse;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = direction === "left" ? -clientWidth : clientWidth;
      scrollRef.current.scrollTo({
        left: scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  if (!recommendations.results?.length) return null;

  return (
    <section className="w-full mt-10 py-8 bg-zinc-950 rounded-xl">
      <div className="max-w-6xl mx-auto px-4 relative">
        {/* Title */}
        <h2 className="text-2xl font-semibold text-yellow-400 mb-6 text-center">
          You Might Also Like
        </h2>

        {/* Scroll Buttons */}
        <button
          onClick={() => scroll("left")}
          className="cursor-pointer absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-zinc-900/70 hover:bg-zinc-800 border border-yellow-400/30 p-2 rounded-full text-yellow-400"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="cursor-pointer absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-zinc-900/70 hover:bg-zinc-800 border border-yellow-400/30 p-2 rounded-full text-yellow-400"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Scrollable Row */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-6 pb-3 scroll-smooth hide-scrollbar"
        >
          {recommendations.results.map((movie) => (
            <Link
              key={movie.id}
              href={`/movie-details/${movie.id}`}
              className="hover:scale-[1.01] transition-transform duration-300 m-6 p-2"
            >
              <Card className="min-w-[220px] max-w-[220px] bg-zinc-900 border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300 rounded-xl overflow-hidden shadow-md shadow-yellow-400/10">
                <CardContent className="p-0">
                  <div className="relative w-full h-[330px]">
                    <Image
                      src={
                        movie.poster_path
                          ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                          : "/placeholder.jpg"
                      }
                      alt={movie.title}
                      fill
                      className="object-cover object-center w-full h-full"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-base font-semibold text-yellow-300 truncate">
                      {movie.title}
                    </h3>
                    <p className="text-sm text-zinc-400 mt-1">
                      {movie.release_date?.slice(0, 4) || "N/A"}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
