import Image from "next/image";
import React from "react";
import CEO from "@/public/ceo.jpg";

export default function AboutUs() {
  return (
    <section
      className="min-h-[60vh] md:min-h-[70vh] lg:h-full py-8 px-4  bg-gray-200 bg-[url('/world.png')] bg-cover bg-center bg-no-repeat "
      id="aboutus"
    >
      <div className="flex flex-col md:flex-row lg:flex-row justify-items-center container mx-auto px-4 sm:px-6 lg:px-8  mx-auto py-8 px-8 gap-4 w-full">
        <div className="flex flex-col mx-auto justify-content gap-4 w-full ">
          <h1 className="text-[#f64a86] font-bold text-[20px] mb-4">
            About Us
          </h1>
          <p className=" text-black/90 text-base sm:text-lg md:text-[16px]  max-w-xl mb-4 sm:mb-8 font-medium mx-3 tracking-[2%]">
            Unlike traditional approaches, leading tech service companies now
            embrace design thinking a human-centered problem-solving philosophy
            that results in products users truly value and want to engage with.
          </p>
          <p className=" text-black/75 text-base sm:text-lg md:text-[16px]  max-w-xl mb-4 sm:mb-8 font-medium mx-3 tracking-[2%] ">
            Solving social problems requires leaders from foundation businesses,
            nonprofits, and governmenttoreimagine the systems and
            relationshipsthat shape the world. We strive for a deep
            understanding of how to create social change.
          </p>
          <p className="text-black/90 font-semibold  mb-4 mx-3">Riunge Brian</p>
          <p className="mb-4 text-black/75 mx-3">CEO Manager</p>
        </div>

        {/* Image flex */}
        <div className="flex items-center w-full h-full ">
          <Image
            src={CEO}
            alt="image"
            height={500}
            width={500}
            className="h-90  w-full rounded-md aspect-3/2 "
          />
        </div>
      </div>
      {/* what we do */}
      <div className=" container mx-auto px-4 sm:px-6 lg:px-8  h-full ">
        <div className="flex items-center justify-center">
          <h1 className="text-[#f64a86] font-bold text-[28px] mb-4">
            What Do We{" "}
          </h1>
        </div>
        <div className="grid md:grid-col-2 lg:grid-col-3 mx-auto">
          <div className="bg-[#5b4bf4] rounded-md rounded-br-4xl">
            <h2 className="font-bold text-[20px] text-white">
              Global Commodities Trading
            </h2>
            <p className="text-base text-white ">
              Tackling social challanges demands bold leadership across
              foundations, businesses, and government leaders willing to rethink
              the systems and reletionships that shape our world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
