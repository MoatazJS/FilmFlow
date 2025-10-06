import DetailsContent from "@/components/DetailsPageComponents/DetailsContent";
import DetailsCredits from "@/components/DetailsPageComponents/DetailsCredits";
import DetailsHeader from "@/components/DetailsPageComponents/DetailsHeader";
import { getMovieCredits, getMovieDetails } from "@/lib/services/ApiServices";
import React from "react";

export default async function MovieDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const movie = await getMovieDetails(id);
  const credits = await getMovieCredits(id);
  console.log(credits);
  return (
    <>
      <main className="min-h-screen flex flex-col bg-gradient-to-b from-black via-zinc-900 to-black text-gray-100">
        <DetailsHeader movie={movie} />
        <DetailsContent movie={movie} />
        <DetailsCredits credits={credits} />
        <h1 className="mt-48 text-center text-6xl text-yellow-500">
          HI DETAILS PAGE
        </h1>
      </main>
    </>
  );
}
