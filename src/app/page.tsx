import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MovieSection from "@/components/MovieSection";
import Footer from "@/components/Footer";
import { Movie } from "@/lib/interfaces/interface";

async function fetchMovies(endpoint: string): Promise<Movie[]> {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${endpoint}?api_key=${process.env.TMDB_API_KEY}&language=en-US`,
    { next: { revalidate: 3600 } }
  );

  if (!res.ok) throw new Error(`Failed to fetch ${endpoint} movies`);
  const data = await res.json();
  return data.results;
}

export default async function Home() {
  const [popular, topRated, upcoming] = await Promise.all([
    fetchMovies("popular"),
    fetchMovies("top_rated"),
    fetchMovies("upcoming"),
  ]);

  const heroMovie = popular[0];

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Hero
        backdropPath={heroMovie.backdrop_path}
        title={heroMovie.title}
        overview={heroMovie.overview}
      />
      <MovieSection title="⭐ Popular" movies={popular} />
      <MovieSection title="📈 Top Rated" movies={topRated} />
      <MovieSection title="🎥 Upcoming" movies={upcoming} />
      <Footer />
    </main>
  );
}
