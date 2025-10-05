import { MovieDetailsResponse } from "@/lib/interfaces/interface";
import Image from "next/image";
import React from "react";

export default function DetailsHeader({
  movie,
}: {
  movie: MovieDetailsResponse;
}) {
  return (
    <>
      <section className="relative w-full min-h-[800px]">
        {/* Cover / Backdrop */}
        <Image
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt={movie.title}
          fill
          priority
          className="object-cover"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-bg-black/60 to-black" />

        {/* Poster as profile picture */}
        <div className="absolute inset-x-0 min-h-[800px] flex justify-start items-center pl-32">
          <div className="flex flex-col items-center">
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              width={300}
              height={400}
              className="rounded-xl shadow-xl border-4 border-yellow-600"
            />
            <h1 className="mt-4 text-3xl font-bold text-yellow-500 text-center">
              {movie.title}
            </h1>
          </div>
        </div>
      </section>
    </>
  );
}
