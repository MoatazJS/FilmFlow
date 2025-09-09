import Image from "next/image";
import { Button } from "@/components/ui/button";

interface HeroProps {
  backdropPath: string;
  title: string;
  overview: string;
}

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
        <Button variant="destructive">Watch Now</Button>
      </div>
    </section>
  );
}
