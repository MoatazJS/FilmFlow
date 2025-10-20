import MovieOfTheDay from "@/components/DailyMovieComponents/MovieOfTheDay";
import RandomMovie from "@/components/DailyMovieComponents/RandomMovie";
import { FetchMovieOfTheDay } from "@/lib/actions/getMovieOfTheDay";
import React from "react";
export default async function DailyMovie() {
  const movie = await FetchMovieOfTheDay();
  console.log(movie);
  return (
    <>
      <main className="min-h-screen flex flex-col bg-gradient-to-b from-black via-zinc-900 to-black text-gray-100 mt-10">
        <MovieOfTheDay movie={movie} />
        <RandomMovie />
      </main>
    </>
  );
}
