import React from "react";
import Link from "next/link";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useState, useEffect } from "react";
import { Germania_One } from "next/font/google";
// import { HiBars3 } from "react-icons/hi2";

import { HiBars3 } from "react-icons/hi2";
import { HiOutlineX } from "react-icons/hi";

const german = Germania_One({
  subsets: ["latin"],
  weight: "400",
});
export default function Glasseffect() {
  const flexStyles = "justify-between flex items-center";
  const isAboveMediaScreens = useMediaQuery("(min-width: 1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

  const [activeSection, setActiveSection] = useState("home");

  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "cases", label: "Cases" },
    { id: "services", label: "Services" },
    { id: "portfolio", label: "Portfolio" },
    { id: "news", label: "News" },
    { id: "elements", label: "Elements" },
    { id: "contactus", label: "Contact Us" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      // Auto-detect active section
      const sections = navItems.map((item) => document.getElementById(item.id));
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(navItems[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMenuToggled(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="relative min-h-screen" suppressHydrationWarning>
      {/* Background Image - This needs to be at the parent level */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed", // Optional
        }}
      />
      {/* the color above the image hero */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundColor: "rgba(45, 47, 68, 0.5)",
        }}
      />
      {/* Navbar */}
      <nav className="  ">
        <div
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled
              ? "bg-[rgba(26,39,57,0.95)] backdrop-blur-xl shadow-lg"
              : "bg-[rgba(45,47,68,0.15)] backdrop-blur-md"
          } border-b border-white/10`}
        >
          <div className={`${flexStyles} mx-auto w-5/6`}>
            <div className={`${flexStyles} gap-8 w-full`}>
              <Link href="/">
                <p
                  className={`${german.className} text-[50px] text-white italic`}
                >
                  consulting
                </p>
              </Link>

              {isAboveMediaScreens ? (
                <div
                  className={`${flexStyles} justify-center-safe w-full gap-4`}
                >
                  <div
                    className={
                      "flex flex-col font-medium mt-4 p-4  md:flex-row md:space-x-8 md:mt-0 text-[16px]   "
                    }
                  >
                    {navItems.map((navItem) => (
                      <button
                        key={navItem.id}
                        onClick={() => handleClick(navItem.id)}
                        className={`relative transition-all duration-300 ${
                          activeSection === navItem.id
                            ? "text-primary font-bold"
                            : "text-white hover:text-hovered"
                        }`}
                      >
                        {navItem.label}
                        {activeSection === navItem.id && (
                          <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="flex justify-end p-4">
                  <button
                    className="rounded-full p-2"
                    onClick={() => setIsMenuToggled(!isMenuToggled)}
                  >
                    <HiBars3 className="h-6 w-6 text-white" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        {/**mobile menu modal */}
        {!isAboveMediaScreens && isMenuToggled && (
          <>
            {/* Backdrop Overlay */}
            <div
              className="fixed inset-0 z-40"
              style={{
                backgroundColor: "rgba(45, 47, 68, 0.5)",
              }}
              onClick={() => setIsMenuToggled(false)}
            />

            {/* Menu Panel */}
            <div
              className="fixed right-0 top-0 bottom-0 w-64 sm:w-80 z-50 p-5 shadow-2xl overflow-y-auto"
              style={{
                backgroundColor: "#2d2f44",
                borderLeft: "1px solid rgba(45, 47, 68, 0.08)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close icon */}
              <div className="p-4 flex justify-end">
                <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                  <HiOutlineX className="h-6 w-6 text-white hover:text-red-500 transition duration-200" />
                </button>
              </div>

              {/* Menu Items */}
              <div className="flex flex-col items-center font-mono text-lg font-bold gap-6 mt-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      handleClick(item.id);
                      setIsMenuToggled(false);
                    }}
                    className={`w-full text-center py-3 px-3 rounded-lg transition-all duration-300 ${
                      activeSection === item.id
                        ? "text-primary bg-primary/10 font-bold"
                        : "text-white hover:text-primary hover:bg-white/5"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </>
        )}
      </nav>

      {/* HeroSection */}
      <div
        className="relative z-10 flex items-center justify-center min-h-screen container mx-auto px-4 sm:px-6 lg:px-8"
        id="home"
        style={{}}
      >
        <div className="flex flex-col md:flex-row lg:flex-row h-full items-center lg:items-start ">
          <div className="flex flex-col w-full lg:w-2/3 h-full justify-center lg:justify-start py-8 lg:py-0 lg:pt-12 xl:pt-20 ">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-bold  text-white text-pretty tracking-[6%]">
              Turning Strategy Into Results.From Planning To Excution.
            </h1>
            <div className="flex-col pl-4 sm:pl-6 md:pl-8 mt-4  ">
              <p className="text-white text-base sm:text-lg md:text-[16px]  max-w-xl mb-6 sm:mb-8 font-medium ">
                We help businesses move wuth purpose --from defining their
                vision to excuting with precision. Through expert business
                planning, strategic insightand focused excution. We empower
                organizations to overcome challenges, sieze oportunities, and
                achieve measurable growth. This is consulting that delivers real
                results.
              </p>
              <button className="px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-4  md:text-lg text-sm sm:text-base  rounded-2xl text-white bg-primary hover:bg-hovered transition-colors duration-300">
                OUR CASES {">"}
              </button>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="hidden md:flex md:flex-col lg:flex-col justify-items-end items-center gap-4 pl-96 lg:py-0 lg:pt-12 xl:pt-20 ">
              <div className="w-px h-50 bg-primary " />
              <div className="w-6 h-6 rounded-full bg-white border border-gray-300" />
              <div className="w-6 h-6 rounded-full bg-white border border-gray-300" />
              <div className="w-6 h-6 rounded-full bg-white border border-gray-300" />
              <div className="w-8 h-8 rounded-full bg-primary border-4 border-gray-300" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
