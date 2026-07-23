// import { Geist, Geist_Mono } from "next/font/google";
import AboutUs from "@/components/AboutUs";
import Cases from "@/components/Cases";
import Glasseffect from "@/components/Glasseffect";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export default function Home() {
  return (
    <>
      <Glasseffect />
      <AboutUs />
      <Cases />
    </>
  );
}
