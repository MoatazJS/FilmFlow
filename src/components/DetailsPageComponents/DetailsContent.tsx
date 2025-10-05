import React from "react";
import { MovieDetailsResponse } from "@/lib/interfaces/interface";
import { Star } from "lucide-react";

export default function DetailsContent({
  movie,
}: {
  movie: MovieDetailsResponse;
}) {
  return (
    <section className="bg-black text-white py-16 px-8 md:px-16 lg:px-32">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Genres */}
        <div>
          <span className="text-yellow-500 text-sm uppercase tracking-widest block">
            Genres
          </span>
          <div className="flex flex-wrap gap-3 mt-2">
            {movie.genres?.length ? (
              movie.genres.map((genre) => (
                <span
                  key={genre.id}
                  className="bg-yellow-600/20 border border-yellow-600 text-yellow-400 px-4 py-1 rounded-full text-sm"
                >
                  {genre.name}
                </span>
              ))
            ) : (
              <span className="text-gray-400">No genres available</span>
            )}
          </div>
        </div>

        {/* Production Companies */}
        <div>
          <span className="text-yellow-500 text-sm uppercase tracking-widest block">
            Production Companies
          </span>
          <div className="flex flex-wrap gap-3 mt-2">
            {movie.production_companies?.length ? (
              movie.production_companies.map((company) => (
                <span
                  key={company.id}
                  className="bg-yellow-600/20 border border-yellow-600 text-yellow-400 px-4 py-1 rounded-full text-sm"
                >
                  {company.name}
                </span>
              ))
            ) : (
              <span className="text-gray-400">
                No production companies listed
              </span>
            )}
          </div>
        </div>

        {/* Rating */}
        <div>
          <span className="text-yellow-500 text-sm uppercase tracking-widest block">
            Rating
          </span>
          <div className="flex items-center gap-2 text-xl font-semibold mt-1">
            <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
            <span>
              {movie.vote_average?.toFixed(1) || "N/A"}{" "}
              <span className="text-gray-400 text-base">
                ({movie.vote_count?.toLocaleString() || "0"} votes)
              </span>
            </span>
          </div>
        </div>

        {/* Release Date */}
        <div>
          <span className="text-yellow-500 text-sm uppercase tracking-widest block">
            Release Date
          </span>
          <span className="text-xl font-semibold mt-1 block">
            {movie.release_date || "N/A"}
          </span>
        </div>
      </div>
    </section>
  );
}
