import React from "react";
import Local from "@/public/local.jpg";
import Finance from "@/public/finance.jpg";
import Strategic from "@/public/strategic.jpg";
import Audit from "@/public/Audit.jpg";
import Image from "next/image";
import Brandon from "@/public/Brandon.jpg";
import Dennis from "@/public/Dennis.jpg";
import Clark from "@/public/Cloark.jpg";
import Hardy from "@/public/hardy.jpg";
import Kennedy from "@/public/Ken.jpg";

export default function Services() {
  const services = [
    {
      id: 1,
      img: Local,
      description: "Business Opportunities",
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

  const advisors = [
    {
      Name: "Brandon Mwirigi",
      src: Brandon,
      department: "Founder & CEO",
      id: 1,
    },
    {
      Name: "Clark Ochieng",
      src: Clark,
      department: "Chief Finance Officer",
      id: 2,
    },
    {
      Name: "Hardy Kamau",
      src: Hardy,
      department: "Sales and marketing",
      id: 3,
    },
    {
      Name: "Dennis Wachira",
      src: Dennis,
      department: "Chief Marketing",
      id: 4,
    },
    {
      Name: "Kennedy Elijah",
      src: Kennedy,
      department: "Adminstrator",
      id: 5,
    },
  ];
  return (
    <section id="services" className="h-full bg-gray-200 px-8  py-4">
      <div className="justify-items-center mt-14 ">
        <h1 className="text-primary font-bold font-mono text-[28px] mb-4">
          Our Services
        </h1>
      </div>
      <div className=" grid grid-rows-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
              <div className="absolute inset-0  px-4  flex flex-col text-center justify-center text-white text-lg ">
                <p className="text-center">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="justify-items-center md:px-20 py-4 mt-4">
        <h1 className="text-primary font-bold font-mono text-[20px] md:text-[28px] text-base mb-4">
          Advisor & Specialist
        </h1>
        <p className="md:text-center text-[20px] text-justify whitespace-normal md:tracking-wider  ">
          Our team of seasoned advisor and industry specialist brings deep
          expertise and strategic insight to every challenge. From financial
          restructuring to operational excellence, they provide the guidance
          needed to navigate complexity and drive lasting results.
        </p>
        <div className="grid grid-rows-2 md:flex md:flex-wrap items-center justify-center mt-4 gap-6">
          {advisors.map((advisor) => (
            <div className="flex flex-row items-center gap-2" key={advisor.id}>
              <Image
                src={advisor.src}
                alt="advisors"
                className="h-20 w-20 rounded-full"
              />

              <div className="flex flex-col ">
                <p className="text-black/80 text-[20px] font-semibold">
                  {advisor.Name}
                </p>
                <p className="text-primary">{advisor.department}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
