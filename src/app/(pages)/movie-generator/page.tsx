import MovieOfTheDay from "@/components/DailyMovieComponents/MovieOfTheDay";
import RandomMovie from "@/components/DailyMovieComponents/RandomMovie";
import React from "react";

export default function DailyMovie() {
  return (
    <>
      <main className="min-h-screen flex flex-col bg-gradient-to-b from-black via-zinc-900 to-black text-gray-100 mt-10">
        <MovieOfTheDay />
        <RandomMovie />
      </main>
    </>
  );
}
