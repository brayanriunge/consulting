import Image from "next/image";
import React from "react";
import CEO from "@/public/ceo.jpg";
import Business from "@/public/business.jpg";
import Finance from "@/public/finance.jpg";

export default function AboutUs() {
  return (
    <section
      className="min-h-[60vh] md:min-h-[70vh] lg:h-full py-8 px-4  bg-gray-200 bg-[url('/world.png')] bg-cover bg-center bg-no-repeat "
      id="aboutus"
    >
      <div className="flex flex-col md:flex-row lg:flex-row justify-items-center container sm:px-6 lg:px-8  mx-auto py-8 px-8 gap-4 w-full">
        <div className="flex flex-col mx-auto justify-content gap-4 w-full ">
          <h1 className="text-[#C71C63] font-bold text-[28px] mb-4">
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
          <h1 className="text-[#C71C63] font-bold text-[28px] mb-4">
            What Do We{" "}
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto justify-center">
          <div className="bg-[#301fce] flex flex-col items-center  rounded-md rounded-br-[100px] ">
            <div className="m-8">
              <h2 className="font-bold text-[20px] text-white p-4">
                Global Commodities Trading
              </h2>
              <p className="text-base text-white p-4 ">
                Tackling social challanges demands bold leadership across
                foundations, businesses, and government leaders willing to
                rethink the systems and reletionships that shape our world.
              </p>
              <p className="text-white p-4 flex flex-row gap-2 ">
                Learn More <span> {">"}</span>
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-content">
            <div className="p-4">
              <Image
                src={Business}
                alt="business"
                className="w-100 h-50 rounded-md mb-4"
              />
              <h2 className="text-black font-regular text-[20px] mb-4">
                Local Business Opportunities
              </h2>
              <p className="text-base text-black text-[16px]">
                The intiative significantly enhance the company`s planning and
                exection capabilities. Recognizing the demands of a
                technology-driven era, thet understood that modernizing their
                accounting systems was essential for long time access.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-content">
            <div className="p-4">
              <Image
                src={Finance}
                alt="finance"
                className="w-100 h-50 rounded-md mb-4"
              />
              <h2 className="text-black font-regular text-[20px] mb-4">
                Financial Services
              </h2>
              <p className="text-base text-black text-[16px]">
                Many companies shy away from the term `turnaround consulting`
                due to its association to failure. In reliaty, it signifies
                resilience a strategic step towards recovery, renewed focus, and
                sustainable success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
