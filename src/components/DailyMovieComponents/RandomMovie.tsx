import Image from "next/image";
import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
export default function RandomMovie() {
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
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  className="data-[state=checked]:bg-yellow-700 data-[state=checked]:border-yellow-700"
                  value="28"
                  id="Action"
                />
                <Label htmlFor="Action">Action</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  className="data-[state=checked]:bg-yellow-700 data-[state=checked]:border-yellow-700"
                  value="12"
                  id="Adventure"
                />
                <Label htmlFor="Adventure">Adventure</Label>
              </div>
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
