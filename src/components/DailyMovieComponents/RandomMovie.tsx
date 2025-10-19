"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { fetchGenres } from "@/lib/services/ApiServices";
import { Genre } from "@/lib/interfaces/interface";
import { Spinner } from "../ui/spinner";
export default function RandomMovie() {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [pickedGenre, setPickedGenre] = useState("");
  async function GetAllGenres() {
    const data = await fetchGenres();
    setGenres(data);
    console.log("data:", data);
  }
  useEffect(() => {
    GetAllGenres();
  }, []);

  return (
    <>
      <section className="min-h-fit max-w-5xl mx-auto mt-10">
        <h2 className="text-center text-yellow-500 font-semibold px-6 text-lg md:text-xl lg:text-2xl">
          Don&apos;t Know what to watch? pick your favourite genre and let us
          recommend you a random movie!
        </h2>
        <div className="flex flex-col justify-center items-center md:flex-row md:justify-between md:items-start mt-3 md:mt-10 mx-6">
          <div>
            <RadioGroup className="text-yellow-500 " defaultValue="28">
              <h4>Genres:</h4>
              {genres.length > 0 ? (
                genres.map((genre) => (
                  <div key={genre.id} className="flex items-center space-x-2">
                    <RadioGroupItem
                      className="data-[state=checked]:bg-yellow-700 data-[state=checked]:border-yellow-700"
                      value={genre.id.toString()}
                      id={genre.name}
                    />
                    <Label htmlFor={genre.name}>{genre.name}</Label>
                  </div>
                ))
              ) : (
                <p className="text-yellow-500">
                  <Spinner />
                </p>
              )}
            </RadioGroup>
          </div>
          <div>
            <div>
              <h1>hhhhh</h1>
              {/* <Image src={"/#"} alt={"#"} fill></Image> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
