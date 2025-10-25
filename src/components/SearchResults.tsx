"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SearchResultsProps } from "@/lib/interfaces/interface";

export default function SearchResults({
  results,
  resultError,
}: SearchResultsProps) {
  const hasResults = results && results.length > 0;

  if (!hasResults && !resultError) return null;

  return (
    <div
      className="
        absolute
        top-[110%] left-0
        w-full
        max-w-[220px] md:max-w-[260px]
        bg-black/95
        border border-yellow-500/30
        backdrop-blur-md
        rounded-lg
        shadow-lg
        z-50
        overflow-hidden
        animate-in fade-in-50 slide-in-from-top-2
      "
    >
      {resultError ? (
        <p className="text-center text-red-400 py-3 text-sm font-medium">
          {resultError}
        </p>
      ) : (
        <div className="max-h-[260px] overflow-y-auto scrollbar-thin scrollbar-thumb-yellow-600/40">
          {results.map((movie) => (
            <Link
              key={movie.id}
              href={`/movie-details/${movie.id}`}
              className="
                flex items-center gap-2
                px-3 py-2
                hover:bg-yellow-500/10
                transition-colors
                border-b border-neutral-800/60
                last:border-none
              "
            >
              {movie.poster_path ? (
                <Image
                  src={`https://image.tmdb.org/t/p/w92${movie.poster_path}`}
                  alt={movie.title}
                  width={35}
                  height={50}
                  className="rounded-md object-cover"
                />
              ) : (
                <div className="w-[35px] h-[50px] bg-neutral-800 flex items-center justify-center text-gray-400 text-[10px] rounded-md">
                  N/A
                </div>
              )}

              <div className="flex-1 min-w-0">
                <h3 className="text-xs font-medium text-yellow-400 truncate">
                  {movie.title}
                </h3>
                {movie.release_date && (
                  <p className="text-[10px] text-gray-400">
                    {movie.release_date.slice(0, 4)}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
