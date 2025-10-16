"use client";
import React, { useEffect } from "react";
import { fetchMovies } from "@/lib/services/ApiServices";
import { useState } from "react";
import { Movie } from "@/lib/interfaces/interface";
import Hero from "@/components/Hero";
import MovieSection from "@/components/MovieSection";

export default function PopularPage() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [heroNumber, setHeroNumber] = useState<number>(0);
  const heroMovie = movies[heroNumber];

  async function popularMovies() {
    try {
      const res = await fetchMovies("popular");
      setMovies(res);
    } catch (error) {
      console.error("Failed to fetch popular movies:", error);
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    popularMovies();
  }, []);

  console.log(popularMovies);
  return (
    <>
      <main className="min-h-screen flex flex-col bg-gradient-to-b from-black via-zinc-900 to-black text-gray-100">
        <Hero
          backdropPath={heroMovie.backdrop_path}
          title={heroMovie.title}
          overview={heroMovie.overview}
        />
        <section className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-500 tracking-wide mb-4">
            Popular Movies
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Discover what’s trending right now. These films are the most watched
            and loved by movie fans across the globe
          </p>
        </section>
        <MovieSection title="" movies={movies} />
      </main>
    </>
  );
}
