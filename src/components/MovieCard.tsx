import Image from "next/image";
import { MovieCardProps } from "@/lib/interfaces/interface";

export default function MovieCard({ title, posterPath }: MovieCardProps) {
  return (
    <div className="p-4 border rounded-lg shadow-md hover:scale-105 transition">
      <Image
        src={`https://image.tmdb.org/t/p/w500${posterPath}`}
        alt={title}
        width={300}
        height={450}
        className="rounded-lg"
      />
      <h2 className="mt-2 font-semibold text-center">{title}</h2>
    </div>
  );
}
