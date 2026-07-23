import React from "react";

export default function Cases() {
  return (
    <section className="min-h-[60vh] md:min-h-[70vh] lg:h-full py-8 px-4  bg-gray-200  ">
      <div className="flex items-center justify-center">
        <h1 className="text-[#C71C63] font-bold text-[28px] mb-4">
          Completed Cases
        </h1>
      </div>
      <div className="flex flex-row gap-4 items-center justify-center ">
        <p className="text-[#C71C63] text-[18px] border-b-4 border-[#C71C63]">
          All
        </p>
        <p className="text-black text-[18px] ">Business Services</p>
        <p className="text-black/70 text-[18px] ">Consumer Products</p>
        <p className="text-black/70 text-[18px] ">Financial Services</p>
        <p className="text-black/70 text-[18px] ">Travel & Aviation</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto justify-center"></div>
    </section>
  );
}
