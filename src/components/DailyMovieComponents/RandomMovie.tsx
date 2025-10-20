"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { fetchGenreMovies, fetchGenres } from "@/lib/services/ApiServices";
import { Genre, Movie } from "@/lib/interfaces/interface";
import { Spinner } from "../ui/spinner";
import { Button } from "../ui/button";
import Link from "next/link";
export default function RandomMovie() {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [pickedGenre, setPickedGenre] = useState("");
  const [randomMovie, setRandomMovie] = useState<Movie | null>(null);
  const [genreMovies, setGenreMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  async function getGenreMovies(pickedGenre: string) {
    setIsLoading(true);
    const generatedMovies = await fetchGenreMovies(pickedGenre);
    setGenreMovies(generatedMovies);

    if (generatedMovies.length > 0) {
      generateRandomMovie(generatedMovies);
    }
    setIsLoading(false);
  }

  async function generateRandomMovie(genreMovies: Movie[]) {
    setIsLoading(true);
    const randomized =
      genreMovies[Math.floor(Math.random() * genreMovies.length)];
    setRandomMovie(randomized);
    setIsLoading(false);
  }

  async function GetAllGenres() {
    const data = await fetchGenres();
    setGenres(data);
    if (data.length > 0) {
      setPickedGenre(data[0].id.toString());
    }
  }
  useEffect(() => {
    GetAllGenres();
  }, []);

  return (
    <>
      <section className="min-h-fit max-w-5xl mx-auto mt-10">
        <h2 className="text-center text-gray-50 font-semibold px-6 text-lg md:text-xl lg:text-2xl">
          Don&apos;t Know what to watch? pick your favourite genre and let us
          recommend you a <span className="text-yellow-400">random movie!</span>
        </h2>
        <div className="flex flex-col justify-center items-center md:flex-row md:justify-between md:items-start mt-3 md:mt-10 mx-6 mb-14">
          <div>
            <h4 className="mb-3 text-yellow-500">Genres:</h4>
            <RadioGroup
              className="text-yellow-400 grid grid-cols-2 gap-4"
              value={pickedGenre}
              onValueChange={setPickedGenre}
              defaultValue={pickedGenre}
            >
              {genres.length > 0 ? (
                genres.map((genre) => (
                  <div key={genre.id} className="flex items-center space-x-2">
                    <RadioGroupItem
                      className="data-[state=checked]:bg-yellow-700 data-[state=checked]:border-yellow-700"
                      value={genre.id.toString()}
                      id={genre.name}
                    />
                    <Label className="mb-1" htmlFor={genre.name}>
                      {genre.name}
                    </Label>
                  </div>
                ))
              ) : (
                <p className="text-yellow-500">
                  <Spinner />
                </p>
              )}
            </RadioGroup>
            <Button
              disabled={isLoading}
              onClick={() => getGenreMovies(pickedGenre)}
              className="text-gray-50 bg-yellow-500 py-3 px-7 my-4 hover:bg-yellow-600 hover:text-gray-800 cursor-pointer"
            >
              Generate
            </Button>
          </div>

          <div className="mx-4 md:mx-0">
            {isLoading ? (
              <div className=" flex justify-center items-center w-[250px] h-[300px] md:w-[300px] md:h-[400px] bg-zinc-900 rounded-2xl">
                <Spinner />
              </div>
            ) : (
              randomMovie && (
                <>
                  <Link href={`/movie-details/${randomMovie.id}`}>
                    <h4 className="text-center text-yellow-400">
                      {randomMovie.title}
                    </h4>
                    <div className="w-[250px] h-[300px] md:w-[300px] md:h-[400px] bg-zinc-800 rounded-2xl relative overflow-hidden flex-shrink-0">
                      <Image
                        src={`https://image.tmdb.org/t/p/w500${randomMovie.poster_path}`}
                        alt={randomMovie.title}
                        fill
                        className="object-fit rounded-2xl"
                      />
                    </div>
                  </Link>
                </>
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
}
