import { Germania_One } from "next/font/google";
import React from "react";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { LuInstagram } from "react-icons/lu";
import { TiSocialFacebook } from "react-icons/ti";

const german = Germania_One({
  subsets: ["latin"],
  weight: "400",
});

export default function Footer() {
  return (
    <div className="px-10 py-4 bg-background" id="contactus">
      <div className="grid grid-rows-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-16 mt-10">
        {/* consulting logo */}
        <div className="flex flex-col gap-3">
          <h1 className={`${german.className} text-[40px]  text-white italic`}>
            consulting
          </h1>
          <p className="text-white">
            &copy; 2026 <span className="text-primary">Consulting Website</span>{" "}
            by <span className="text-primary">Brian</span>
          </p>
          <div className="flex flex-row gap-4 items-stretch">
            <div className="rounded-full p-3 bg-gray-200/20">
              <TiSocialFacebook color="white" size={20} />
            </div>
            <div className="rounded-full p-3 bg-gray-200/20">
              <FaXTwitter color="white" size={20} />
            </div>
            <div className="rounded-full p-3 bg-gray-200/20">
              <LuInstagram color="white" size={20} />
            </div>
            <div className="rounded-full p-3 bg-gray-200/20">
              <FaLinkedinIn color="white" size={20} />
            </div>
          </div>
        </div>
        {/* contact Info */}
        <div className="flex flex-col gap-3">
          <h1 className="text-white font-bold text-2xl mb-4">Contact Info</h1>
          <p className="text-white">
            <span className="text-gray-400">Call :</span> 0701842846
          </p>
          <p className="text-white">
            <span className="text-gray-400">Email: </span>{" "}
            riungebrayandev@gmail.com
          </p>
          <p className="text-white">
            <span className="text-gray-400">Monday - Friday</span> 8:30am -
            5:00pm
          </p>
        </div>
        {/* quick links */}
        <div className="flex flex-col gap-3">
          <h1 className="text-white font-bold text-2xl mb-4">
            Navigation Links
          </h1>
          <ul className="text-white gap-6 space-y-3">
            <li className="flex items-center gap-3 p-2 ">
              <span className="h-2 w-2 rounded-full bg-primary"></span>
              <span className="text-white font-medium">Home</span>
            </li>
            <li className="flex items-center gap-3 p-2 ">
              <span className="h-2 w-2 rounded-full bg-primary"></span>
              <span className="text-white font-medium">About Us</span>
            </li>
            <li className="flex items-center gap-3 p-2 ">
              <span className="h-2 w-2 rounded-full bg-primary"></span>
              <span className="text-white font-medium">Cases</span>
            </li>
            <li className="flex items-center gap-3 p-2 ">
              <span className="h-2 w-2 rounded-full bg-primary"></span>
              <span className="text-white font-medium">Our Services</span>
            </li>
            <li className="flex items-center gap-3 p-2 ">
              <span className="h-2 w-2 rounded-full bg-primary"></span>
              <span className="text-white font-medium">Potfolio</span>
            </li>
            <li className="flex items-center gap-3 p-2 ">
              <span className="h-2 w-2 rounded-full bg-primary"></span>
              <span className="text-white font-medium">News</span>
            </li>
            <li className="flex items-center gap-3 p-2 ">
              <span className="h-2 w-2 rounded-full bg-primary"></span>
              <span className="text-white font-medium">Contact us</span>
            </li>
          </ul>
        </div>
        {/* quick links */}
        <div className="flex flex-col gap-3">
          <h1 className="text-white font-bold text-2xl mb-4">
            Navigation Links
          </h1>
          <ul className="text-white gap-6 space-y-3">
            <li className="flex items-center gap-3 p-2 ">
              <span className="h-2 w-2 rounded-full bg-primary"></span>
              <span className="text-white font-medium">Company Overview</span>
            </li>
            <li className="flex items-center gap-3 p-2 ">
              <span className="h-2 w-2 rounded-full bg-primary"></span>
              <span className="text-white font-medium">Cases</span>
            </li>
            <li className="flex items-center gap-3 p-2 ">
              <span className="h-2 w-2 rounded-full bg-primary"></span>
              <span className="text-white font-medium">Careers</span>
            </li>
            <li className="flex items-center gap-3 p-2 ">
              <span className="h-2 w-2 rounded-full bg-primary"></span>
              <span className="text-white font-medium">Our Approach</span>
            </li>
            <li className="flex items-center gap-3 p-2 ">
              <span className="h-2 w-2 rounded-full bg-primary"></span>
              <span className="text-white font-medium">Partners</span>
            </li>
            <li className="flex items-center gap-3 p-2 ">
              <span className="h-2 w-2 rounded-full bg-primary"></span>
              <span className="text-white font-medium">Our Team List</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
