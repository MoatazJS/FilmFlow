import React from "react";
import { fetchMovies } from "@/lib/services/ApiServices";

export default async function PopularPage() {
  const popularMovies = await fetchMovies("popular");
  console.log(popularMovies);
  return <div>PopularPage</div>;
}
