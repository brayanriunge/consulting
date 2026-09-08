import React from "react";
import People from "@/public/people.jpg";
import Office from "@/public/office.jpg";
import Airport from "@/public/airport.jpg";
import Exchange from "@/public/exchange.jpg";
import Image from "next/image";
import { HiMiniInformationCircle } from "react-icons/hi2";
import { FaQuoteLeft } from "react-icons/fa6";
import Hardy from "@/public/hardy.jpg";
import Kennedy from "@/public/Ken.jpg";

export default function News() {
  const items = [
    {
      id: 1,
      src: People,
      heading: "Narrow Your Focus to Prevent Over Analysis",
      date: "Aug 20 2026",
    },
    {
      id: 2,
      src: Office,
      heading: "Stick With Your Concept But Do Your Homework",
      date: "Aug 2, 2026",
    },
    {
      id: 3,
      src: Airport,
      heading: "Three Social Media Hacks For The Busy Entreprenuer",
      date: "Aug 12, 2026",
    },
    {
      id: 4,
      src: Exchange,
      heading: "Harvest Great ideas From Ypour Company`s Best Assets",
      date: "Jun 20, 2026",
    },
  ];
  return (
    <section className="h-full  px-8  py-4" id="news">
      <div className="flex items-center justify-center mt-14">
        <h1 className="text-primary font-bold font-mono text-4xl mb-4 items-center">
          News
        </h1>
      </div>

      <div className="grid grid-rows-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <div className="p-4 flex flex-col gap-2" key={item.id}>
            <Image
              loading="eager"
              src={item.src}
              alt="image"
              className="w-100 h-60 rounded-md mb-4 transition-transform duration-300 group-hover:scale-105"
            />
            <div className="w-15 rounded h-2 bg-primary" />
            <h2 className="text-black font-semibold text-[20px] mb-4">
              {item.heading}
            </h2>
            <div className="flex flex-row gap-2 items-center">
              <HiMiniInformationCircle color="#c71c63" />
              <p className="text-base text-black text-[16px]">{item.date}</p>
            </div>
          </div>
        ))}
      </div>
      {/* custormer Feedback */}
      <div className="flex items-center justify-center mt-6">
        <h1 className="text-primary font-bold font-mono text-4xl mb-4 items-center">
          Clients Feedback
        </h1>
      </div>
      <div className="flex flex-col md:flex-row lg:flex-row  items-stretch justify-center gap-6 mb-4">
        {/* first div */}
        <div className="flex flex-col">
          <div className="flex flex-col bg-gray-300 gap-4 rounded">
            <p className="p-4 text-base">
              Consulting WP really helped us achieve our financial goals. The
              slick presentation along with fantastic readability ensures that
              our financialstanding is stable.
            </p>
            <div className="flex justify-end">
              <FaQuoteLeft size={60} color="blue" />
            </div>
          </div>
          <div className="flex flex-row items-center gap-2 mt-2">
            <Image
              src={Kennedy}
              alt="advisors"
              className="h-20 w-20 rounded-full"
            />

            <div className="flex flex-col ">
              <p className="text-black/80 text-[20px] font-semibold">
                Kennedy Wamalwa
              </p>
              <p className="text-primary">Sales & Marketing, Alien ltd.</p>
            </div>
          </div>
        </div>
        {/* second div */}
        <div className="flex flex-col">
          <div className="flex flex-col bg-gray-300 gap-4 rounded">
            <p className="p-4 tex-base">
              When you are in the financial industry you know the image you
              haveto project to people. You have to be agile and authoritative.
              Consulting WP is the way to go for financial institution.
            </p>
            <div className="flex justify-end">
              <FaQuoteLeft size={60} color="blue" />
            </div>
          </div>
          <div className="flex flex-row items-center gap-2 mt-2">
            <Image
              src={Hardy}
              alt="advisors"
              className="h-20 w-20 rounded-full"
            />

            <div className="flex flex-col ">
              <p className="text-black/80 text-[20px] font-semibold">
                Haron Kamau
              </p>
              <p className="text-primary">Financial Officer, TechHub ltd.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
