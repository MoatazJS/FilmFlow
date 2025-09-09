import MovieCard from "@/components/MovieCard";
import { Movie } from "@/lib/interfaces/interface";
async function getPopularMovies(): Promise<Movie[]> {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}&language=en-US`,
    { next: { revalidate: 3600 } } // cache for 1 hour
  );

  if (!res.ok) throw new Error("Failed to fetch movies");

  const data = await res.json();
  return data.results;
}

export default async function Home() {
  const movies = await getPopularMovies();

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">Popular Movies 🎬</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            posterPath={movie.poster_path}
          />
        ))}
      </div>
    </main>
  );
}
