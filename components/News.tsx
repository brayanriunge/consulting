import React from "react";
import People from "@/public/people.jpg";
import Office from "@/public/office.jpg";
import Airport from "@/public/airport.jpg";
import Exchange from "@/public/exchange.jpg";
import Image from "next/image";
import { HiMiniInformationCircle } from "react-icons/hi2";

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
        <h1 className="text-primary font-bold font-mono text-[28px] mb-4 items-center">
          News
        </h1>
      </div>

      <div className="flex  flex-col md:flex-row  lg:flex-row  items-center  justify-evenly">
        {items.map((item) => (
          <div className="p-4 flex flex-col gap-2" key={item.id}>
            <Image
              loading="eager"
              src={item.src}
              alt="image"
              className="w-100 h-60 rounded-md mb-4"
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
    </section>
  );
}
