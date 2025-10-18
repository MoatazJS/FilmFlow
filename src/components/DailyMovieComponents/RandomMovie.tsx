import Image from "next/image";
import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
export default function RandomMovie() {
  return (
    <>
      <section className="min-h-fit max-w-5xl mx-auto mt-10">
        <h2 className="text-center text-yellow-500 font-semibold px-6 text-lg md:text-xl lg:text-2xl">
          Don&apos;t Know what to watch? pick a genre and let us recommend you a
          random movie!
        </h2>
        <div className="flex flex-col justify-center items-center md:flex-row md:justify-between md:items-start">
          <div>
            <RadioGroup defaultValue="option-one">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-one" id="option-one" />
                <Label htmlFor="option-one">zzzzzzzzz</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-two" id="option-two" />
                <Label htmlFor="option-two">Option Two</Label>
              </div>
            </RadioGroup>
          </div>
          <div>
            <div>
              <Image src={"/#"} alt={"#"} fill></Image>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
