import Hero from "@/components/Hero";
import MovieSection from "@/components/MovieSection";
import { fetchMovies } from "@/lib/services/ApiServices";

export default async function Home() {
  const [popular, topRated, upcoming] = await Promise.all([
    fetchMovies("popular"),
    fetchMovies("top_rated"),
    fetchMovies("upcoming"),
  ]);

  const heroMovie = popular[0];

  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-b from-black via-zinc-900 to-black text-gray-100">
      <Hero
        backdropPath={heroMovie.backdrop_path}
        title={heroMovie.title}
        overview={heroMovie.overview}
      />
      <MovieSection title="Popular ->" movies={popular} />
      <MovieSection title="Top Rated ->" movies={topRated} />
      <MovieSection title="Upcoming ->" movies={upcoming} />
    </main>
  );
}
