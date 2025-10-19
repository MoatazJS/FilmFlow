"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { fetchGenres } from "@/lib/services/ApiServices";
import { Genre } from "@/lib/interfaces/interface";
import { Spinner } from "../ui/spinner";
import { Button } from "../ui/button";
export default function RandomMovie() {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [pickedGenre, setPickedGenre] = useState("");
  console.log(pickedGenre);
  async function GetAllGenres() {
    const data = await fetchGenres();
    setGenres(data);
    if (data.length > 0) {
      setPickedGenre(data[0].id.toString());
    }
    console.log("data:", data);
  }
  useEffect(() => {
    GetAllGenres();
  }, []);

  return (
    <>
      <section className="min-h-fit max-w-5xl mx-auto mt-10">
        <h2 className="text-center text-gray-50 font-semibold px-6 text-lg md:text-xl lg:text-2xl">
          Don&apos;t Know what to watch? pick your favourite genre and let us
          recommend you a <span className="text-yellow-500">random movie!</span>
        </h2>
        <div className="flex flex-col justify-center items-center md:flex-row md:justify-between md:items-start mt-3 md:mt-10 mx-6">
          <div>
            <h4 className="mb-3 text-yellow-500">Genres:</h4>
            <RadioGroup
              className="text-yellow-500 grid grid-cols-2 gap-4"
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
            <Button className="text-gray-50 bg-yellow-600 py-3 px-7 my-4 hover:bg-yellow-500 hover:text-gray-800 cursor-pointer">
              Generate
            </Button>
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
