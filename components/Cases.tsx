import Cufflinks from "@/public/Dragon Cufflinks _ Silver Chinese Dragon _ Mens Novelty Cufflinks _ Fantasy Statement Cufflinks _ Groomsmen Gift.jpg";
import Cargo from "@/public/cargo.jpg";
import Meeting from "@/public/meeting.jpg";
import Rfid from "@/public/Barcode Scanner Dubai – Improve Retail Efficiency.jpg";
import Sales from "@/public/Businessman Working with Virtual Screen Showing Financial Graph and Rising Profit Arrow.jpg";
import Shopping from "@/public/Shopping.jpg";
import Image from "next/image";

export default function Cases() {
  const joints = [
    {
      id: 1,
      src: Cufflinks,
      heading: "Business Services",
      paragragh:
        "Increased sales productivity frees selling time and saves millions",
    },
    {
      id: 2,
      src: Cargo,
      heading: "Business Services",
      paragragh: "Turning around a reactive pharma supply chain.",
    },
    {
      id: 3,
      src: Shopping,
      heading: "Cunsumer Product",
      paragragh: "Pricing games: A technology company boast",
    },
    {
      id: 4,
      src: Meeting,
      heading: "Financial Services",
      paragragh: "Leading consumer products companies.",
    },
    {
      id: 5,
      src: Rfid,
      heading: "Business Services",
      paragragh: "Constructing the best-in-class global.",
    },
    {
      id: 6,
      src: Sales,
      heading: "Business Services",
      paragragh: "Healthcare giant overcomes mergerr in 2015.",
    },
  ];
  return (
    <section
      className="min-h-[60vh] md:min-h-[70vh] lg:h-full py-8 px-4  bg-gray-200  "
      id="cases"
    >
      <div className="flex items-center justify-center">
        <h1 className="text-[#C71C63] font-bold font-mono text-[28px] mb-4">
          Completed Cases
        </h1>
      </div>
      <div className="flex flex-row gap-4 items-center justify-center mb-4 ">
        <p className="text-[#C71C63] lg:text-[18px] sm:text-[14px] border-b-4 border-[#C71C63]">
          All
        </p>
        <p className="text-black lg:text-[18px] sm:text-[14px] ">
          Business Services
        </p>
        <p className="text-black/70 lg:text-[18px] sm:text-[14px] ">
          Consumer Products
        </p>
        <p className="text-black/70 lg:text-[18px] sm:text-[14px] ">
          Financial Services
        </p>
        <p className="text-black/70 lg:text-[18px] sm:text-[14px] ">
          Travel & Aviation
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:px-6 lg:px-8 justify-center">
        {joints.map((joint) => (
          <div key={joint.id}>
            <div className="flex flex-col justify-content mt-4 ">
              <Image
                src={joint.src}
                alt="case"
                loading="eager"
                className="sm:h-70 lg:h-60 w-100 rounded-lg mb-4 "
              />
              <h2 className="text-primary font-mono text-[20px] mb-2">
                {joint.heading}
              </h2>
              <p className="text-black font-regular text-[16px] ">
                {joint.paragragh}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
