import Image from "next/image";
import React from "react";
import CEO from "@/public/ceo.jpg";

export default function AboutUs() {
  return (
    <section
      className="min-h-[60vh] md:min-h-[70vh] lg:h-full py-8 px-4  bg-[#ffff] bg-[url('/world.png')] bg-cover bg-center bg-no-repeat "
      id="aboutus"
    >
      <div className="">
        <div className="flex sm:flex-col md:flex-row lg:flex-row justify-items-center items-center mx-auto py-8 px-8 gap-4">
          <div className="w-1/2 flex flex-col  gap-4 ">
            <h1 className="text-[#f64a86] font-bold text-[20px] mb-4">
              About Us
            </h1>
            <p className=" text-black/90 text-base sm:text-lg md:text-[16px]  max-w-xl mb-4 sm:mb-8 font-medium mx-3 tracking-[2%]">
              "Unlike traditional approaches, leading tech service companies now
              embrace design thinking a human-centered problem-solving
              philosophy that results in products users truly value and want to
              engage with.
            </p>
            <p className=" text-black/75 text-base sm:text-lg md:text-[16px]  max-w-xl mb-4 sm:mb-8 font-medium mx-3 tracking-[2%] ">
              Solving social problems requires leaders from foundation
              businesses, nonprofits, and governmenttoreimagine the systems and
              relationshipsthat shape the world. We strive for a deep
              understanding of how to create social change.
            </p>
          </div>

          {/* Image flex */}
          <div className="flex items-center w-1/2 ">
            <Image
              src={CEO}
              alt="image"
              height={50}
              width={500}
              className="h-full lg:w-1/2 w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
