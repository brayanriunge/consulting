import React from "react";
import Local from "@/public/local.jpg";
import Finance from "@/public/finance.jpg";
import Strategic from "@/public/strategic.jpg";
import Audit from "@/public/Audit.jpg";
import Image from "next/image";

export default function Services() {
  const services = [
    {
      id: 1,
      img: Local,
      description: "Locoal Business Opportunities ",
    },
    {
      id: 2,
      img: Finance,
      description: "Financial Service ",
    },
    {
      id: 3,
      img: Strategic,
      description: "Strategic Planning",
    },
    {
      id: 4,
      img: Audit,
      description: "Audit and Assurance",
    },
  ];
  return (
    <section id="services" className="h-full bg-gray-200">
      <div className="justify-items-center mt-4">
        <h1 className="text-primary font-bold font-mono text-[28px] mb-4">
          Our Services
        </h1>
      </div>
      <div className="px-8 py-4 grid grid-rows-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {services.map((service) => (
          <div className="flex justify-center items-center" key={service.id}>
            <div className="relative group w-full max-w-lg">
              {/* image container */}
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src={service.img}
                  alt="service"
                  loading="eager"
                  className="w-full h-60 transition-transform duration-300 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 w-full h-full"
                  style={{
                    backgroundColor: "rgba(45, 47, 68, 0.5)",
                  }}
                />
              </div>
              {/* above the image */}
              <div className="absolute bottom-25 left-20 text-center flex  text-white text-lg ">
                <p>{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
