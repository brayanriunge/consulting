import React from "react";

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
        <div className="flex flex-row  items-center justify-center">
          {/* [#4e3120] */}
          <div className="rounded-lg rounded-br-4xl bg-[#4e3120]">
            <div className="mt-10 p-4">
              <h1 className="font-bold text-white text-4xl tracking-wide ">
                Why Choose Us
              </h1>
              <div className="flex flex-row gap-10"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
