import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MovieCardProps } from "@/lib/interfaces/interface";

export default function MovieCard({ title, posterPath }: MovieCardProps) {
  return (
    <Card className="hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20 transition-transform duration-300 bg-zinc-900 border border-zinc-800">
      <CardHeader className="p-0 relative w-full h-[350px]">
        <Image
          src={`https://image.tmdb.org/t/p/w500${posterPath}`}
          alt={title}
          fill
          className="rounded-t-lg object-contain"
        />
      </CardHeader>
      <CardContent className="p-2">
        <CardTitle className="text-sm text-center text-gray-200 line-clamp-2">
          {title}
        </CardTitle>
      </CardContent>
    </Card>
  );
}
