import Image from "next/image";
import { Button } from "@/components/ui/button";
import { HeroProps } from "@/lib/interfaces/interface";

export default function Hero({ backdropPath, title, overview }: HeroProps) {
  return (
    <section className="relative w-full h-[500px] overflow-hidden">
      <Image
        src={`https://image.tmdb.org/t/p/original${backdropPath}`}
        alt={title}
        fill
        className="object-cover brightness-75"
        priority
      />
      <div className="absolute inset-0 flex flex-col justify-center px-6 max-w-3xl text-white">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="mb-6 line-clamp-3">{overview}</p>
        <Button className="bg-yellow-500 hover:bg-yellow-600 cursor-pointer w-fit text-white font-semibold px-6 py-3 rounded-lg shadow-lg shadow-red-900/50 transition-transform duration-300 hover:scale-105">
          Watch Now
        </Button>
      </div>
    </section>
  );
}
