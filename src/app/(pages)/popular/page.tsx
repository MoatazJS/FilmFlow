"use client";
import React, { useEffect, useRef } from "react";
import { fetchMovies } from "@/lib/services/ApiServices";
import { useState } from "react";
import { Movie } from "@/lib/interfaces/interface";
import Hero from "@/components/Hero";
import MovieSection from "@/components/MovieSection";

export default function PopularPage() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isInitialLoading, setIsInitialLoading] = useState<boolean>(true);
  const [heroNumber, setHeroNumber] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [page, setPage] = useState(1);
  const heroMovie = movies[heroNumber];
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  //  FETCH MOVIES
  useEffect(() => {
    const loadMoreMovies = async () => {
      setIsLoading(true);
      const newMovies = await fetchMovies("popular", page);
      setMovies((prev) => {
        const combined = [...prev, ...newMovies];
        const unique = Array.from(
          new Map(combined.map((m) => [m.id, m])).values()
        );
        return unique;
      });
      setIsLoading(false);
      setIsInitialLoading(false);
    };
    loadMoreMovies();
  }, [page]);
  // detects end of page to load more movies.
  useEffect(() => {
    const currentRef = loadMoreRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoading) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 1 }
    );
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [isLoading]);

  // displayed movie dynamically changes
  useEffect(() => {
    if (!movies.length || isPaused) return;
    const interval = setInterval(() => {
      setHeroNumber((prev) => (prev + 1) % movies.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [movies, isPaused]);

  // INITIAL LOADING
  if (isInitialLoading || movies.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen bg-black text-yellow-500 text-3xl">
        Loading popular movies...
      </div>
    );
  }

  // MAIN RENDER
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-b from-black via-zinc-900 to-black text-gray-100 mt-10">
      <Hero
        backdropPath={heroMovie.backdrop_path}
        title={heroMovie.title}
        overview={heroMovie.overview}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      />
      <section className="text-center m-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-500 tracking-wide mb-4">
          Popular Movies
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Discover what’s trending right now. These films are the most watched
          and loved by movie fans across the globe.
        </p>
      </section>
      <MovieSection title="" movies={movies} />
      {isLoading && (
        <p className="text-center py-6 text-yellow-400 text-lg">
          Loading more movies...
        </p>
      )}
      <div ref={loadMoreRef} className="h-10"></div>
    </main>
  );
}
