import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { MovieOfTheDayProps } from "@/lib/interfaces/interface";

export default function MovieOfTheDay(movie: MovieOfTheDayProps) {
  return (
    <>
      <section className="min-h-fit max-w-5xl mx-auto ">
        <div className="text-center mt-20 md:mt-16 lg:mt-18 text-4xl md:text-5xl lg:text-6xl text-yellow-500 font-extrabold">
          <p>Movie of the day</p>
        </div>
        <div className="container flex flex-col-reverse justify-center md:flex-row lg:flex-row  md:justify-around lg:justify-around items-center mt-20">
          <div className="text-center md:text-start lg:text-start mr-0 md:mr-4 lg:mr-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-yellow-500 hover:text-yellow-600 font-extrabold ml-4 mt-1">
              Movie Title
            </h1>
            <p className="text-[12px] md:text-[13px] lg:text-sm text-gray-50 hover:text-yellow-600 font-bold ml-4 mt-1">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
              deserunt molestias explicabo?
            </p>
            <Button className="py-2 px-7 m-4 bg-yellow-600 hover:bg-yellow-500 text-gray-50 cursor-pointer hover:text-gray-800">
              See More
            </Button>
          </div>
          <div className="w-2xs bg-yellow-600 h-full">
            {/* <Image src={`#`}></Image> */}
            <p className="text-center">Image Place Holder</p>
          </div>
        </div>
      </section>
    </>
  );
}
