import React from "react";
import { FaCartShopping, FaPlus, FaWifi } from "react-icons/fa6";
import { GiHealthPotion } from "react-icons/gi";
import { GrTechnology } from "react-icons/gr";
import { IoClose } from "react-icons/io5";

export default function Portfolio() {
  const figures = [
    {
      id: 1,
      count: "130K",
      text: "Projects Completed",
    },
    {
      id: 2,
      count: "50+",
      text: "Workers Employed",
    },
    {
      id: 3,
      count: "10+",
      text: "Awards Winning",
    },
    {
      id: 4,
      count: "150K+",
      text: "Satisfied Customers",
    },
  ];

  return (
    <>
      <section className="bg-secondary px-8 py-4" id="portfolio">
        <div className="flex flex-col items-center justify-center mt-10 ">
          <h1 className="text-white text-center font-bold text-5xl">
            More than 25 Years
          </h1>
          <h1 className="text-white text-center font-bold text-5xl">
            of Experience
          </h1>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:flex md:flex-wrap items-center justify-evenly gap-10  mt-10">
          {figures.map((figure) => (
            <div
              key={figure.id}
              className="flex flex-col items-center justify-center gap-1"
            >
              <h1 className="text-white text-5xl font-bold">{figure.count}</h1>
              <p className="text-white text-lg  text-center">{figure.text}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-gray-200 px-8 py-4">
        <div className="flex flex-col md:flex-col lg:flex-row gap-6 items-center justify-center">
          {/* [#4e3120] div the why choose us */}
          <div className="rounded-lg rounded-br-4xl bg-background">
            <div className="mt-10 p-8">
              <h1 className="font-bold text-white text-4xl tracking-wide ">
                Why Choose Us
              </h1>
              <div className="flex flex-col md:flex-row lg:flex-row gap-10">
                <div className="flex flex-col mt-6">
                  <div className="flex flex-row gap-2">
                    <span>
                      <GiHealthPotion size={30} color="#c71c63" />
                    </span>
                    <h2 className="text-2xl text-white">Health Services</h2>
                  </div>

                  <p className="text-white ps-9 text-base ">
                    We support healthcare organizations with data driven
                    strategies, operation improvements and patient e-centric
                    solutionsthat enhance care delivery and system efficiency.
                  </p>
                </div>
                <div className="flex flex-col mt-6">
                  <div className="flex flex-row gap-2">
                    <span>
                      <FaCartShopping size={30} color="#c71c63" />
                    </span>
                    <h2 className="text-2xl text-white">Retailed Trade</h2>
                  </div>
                  <p className="text-white ps-9 text-base">
                    From supply chain optimization to custormer experience
                    design, we help retail businesses adapt, compete and grow in
                    a rapidly shifting markup landscope.
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row lg:flex-row gap-10">
                <div className="flex flex-col mt-6">
                  <div className="flex flex-row gap-2">
                    <span>
                      <GrTechnology size={30} color="#c71c63" />
                    </span>
                    <h2 className="text-2xl text-white">Technology Service</h2>
                  </div>

                  <p className="text-white ps-9 text-base ">
                    We provide expert consulting on digital transformation
                    system intergration and infrastacture --- empowering tech
                    driven growth and innovation.
                  </p>
                </div>
                <div className="flex flex-col mt-6">
                  <div className="flex flex-row gap-2">
                    <span>
                      <FaWifi size={30} color="#c71c63" />
                    </span>
                    <h2 className="text-white text-2xl">Retailed Trade</h2>
                  </div>
                  <p className="text-white ps-9 text-base mb-4">
                    From supply chain optimization to custormer experience
                    design, we help retail businesses adapt, compete and grow in
                    a rapidly shifting markup landscope.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* div for Strategy deveelopment */}
          <div className="flex flex-col gap-4 ">
            <h1 className="text-4xl font-semibold">Strategy Development</h1>
            <div className="flex flex-col gap-4">
              <div className="flex flex-row gap-3 items-center">
                <IoClose size={20} color="#c71c63" />
                <h2 className="text-2xl font-semibold ">
                  Strategy development
                </h2>
              </div>
            </div>
            <p className="ps-8 text-base ">
              Good strategy is the antidote to competition. Strategic thinking
              is the process of developing a strategy that defines your value
              proposition and your unique value chain. This process include
              market and competitive research as well as an assessment to the
              company&apos;s capabilities and the industry force impacting it.
            </p>
            <div className="flex flex-row gap-3 items-center">
              <FaPlus size={20} color="#c71c63" />
              <h2 className="text-2xl font-semibold ">
                Strategic Plan Execution Manager
              </h2>
            </div>
            <div className="flex flex-row gap-3 items-center">
              <FaPlus size={20} color="#c71c63" />
              <h2 className="text-2xl font-semibold ">
                Strategic Plan Development
              </h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
