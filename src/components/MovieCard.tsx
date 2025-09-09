import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface MovieCardProps {
  title: string;
  posterPath: string;
}

export default function MovieCard({ title, posterPath }: MovieCardProps) {
  return (
    <Card className="hover:scale-105 transition shadow-lg">
      <CardHeader className="p-0">
        <Image
          src={`https://image.tmdb.org/t/p/w500${posterPath}`}
          alt={title}
          width={300}
          height={450}
          className="rounded-t-lg"
        />
      </CardHeader>
      <CardContent className="p-2">
        <CardTitle className="text-sm text-center">{title}</CardTitle>
      </CardContent>
    </Card>
  );
}
