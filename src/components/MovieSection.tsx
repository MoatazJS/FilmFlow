import Link from "next/link";
import MovieCard from "./MovieCard";
import { MovieSectionProps } from "@/lib/interfaces/interface";

export default function MovieSection({ title, movies }: MovieSectionProps) {
  const linkTitle = title.toLowerCase();
  return (
    <section className="px-6 py-10">
      <Link href={`/${linkTitle}`} className="inline-block">
        <h2 className="text-2xl font-bold mb-6 text-yellow-400 drop-shadow-lg w-fit cursor-pointer hover:text-yellow-500 hover:underline inline-block">
          {title}
          {"->"}
        </h2>
      </Link>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-6">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            posterPath={movie.poster_path}
            id={movie.id + ""}
          />
        ))}
      </div>
    </section>
  );
}
