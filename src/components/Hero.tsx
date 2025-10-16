import Image from "next/image";
import { Button } from "@/components/ui/button";
import { HeroProps } from "@/lib/interfaces/interface";
import Link from "next/link";

export default function Hero({
  backdropPath,
  title,
  overview,
  id,
  onMouseEnter,
  onMouseLeave,
}: HeroProps) {
  return (
    <section
      className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Background image */}
      <Image
        src={`https://image.tmdb.org/t/p/original${backdropPath}`}
        alt={title}
        fill
        priority
        className="object-cover object-top md:object-center brightness-90 transition-transform duration-700 ease-out"
      />

      {/* Subtle dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

      {/* Hero text content */}
      <div className="absolute bottom-12 left-6 md:left-12 z-10 max-w-2xl text-white">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
          {title}
        </h1>
        <p className="text-gray-300 mb-6 text-sm md:text-base line-clamp-3">
          {overview}
        </p>
        <Link href={`/movie-details/${id}`}>
          <Button className="bg-yellow-500 hover:bg-yellow-600 cursor-pointer w-fit text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
            See More
          </Button>
        </Link>
      </div>
    </section>
  );
}
