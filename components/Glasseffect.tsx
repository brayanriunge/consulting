import React from "react";
import Link from "next/link";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useState } from "react";
// import { HiBars3 } from "react-icons/hi2";
import { useRouter } from "next/router";
import { HiBars3 } from "react-icons/hi2";
import { HiOutlineX } from "react-icons/hi";
// import { HiOutlineX } from "react-icons/hi";

export default function Glasseffect() {
  const flexStyles = "justify-between flex items-center";
  const isAboveMediaScreens = useMediaQuery("(min-width: 1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const router = useRouter();
  return (
    <div className="relative min-h-screen">
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
          className={`z-30 w-full shadow ${flexStyles} fixed top-0 `}
          //glass effect background
          style={{
            background: "rgba(45, 47, 68, 0.15)",
            backdropFilter: "blur(2px)",
            WebkitBackdropFilter: "blur(2px)",
            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <div className={`${flexStyles} mx-auto w-5/6`}>
            <div className={`${flexStyles} gap-8 w-full`}>
              <Link href="/">
                <p className="font-semibold text-3xl text-white">consulting</p>
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
                    <div
                      className={`${
                        router.pathname === "/"
                          ? "text-[#f64a86] p-2 "
                          : "text-white hover:text-[#f64a86] p-2"
                      }`}
                    >
                      <Link href="/">Home</Link>
                    </div>
                    <div
                      className={`${
                        router.pathname === "/#aboutUs"
                          ? "text-[#f64a86] p-2 "
                          : "text-white hover:text-[#f64a86] p-2"
                      }`}
                    >
                      <Link href="/#aboutus">About Us</Link>
                    </div>
                    <div
                      className={`${
                        router.pathname === "/#ourservices"
                          ? "text-[#f64a86] p-2 "
                          : "text-white hover:text-[#f64a86] p-2"
                      }`}
                    >
                      <Link href="/#ourservices">Services</Link>
                    </div>
                    <div
                      className={`${
                        router.pathname === "/#cases"
                          ? "text-[#f64a86]  p-2"
                          : "text-white hover:text-[#f64a86] p-2"
                      }`}
                    >
                      <Link href="/#ourprocess">Cases</Link>
                    </div>
                    <div
                      className={`${
                        router.pathname === "/#news"
                          ? "text-[#f64a86] p-2 "
                          : "text-white hover:text-[#f64a86] p-2"
                      }`}
                    >
                      <Link href="/#news">News</Link>
                    </div>

                    <div
                      className={`${
                        router.pathname === "/#portfolio"
                          ? "text-[#f64a86] p-2 "
                          : "text-white hover:text-[#f64a86] p-2"
                      }`}
                    >
                      <Link href="/#portfolio">Portfolio</Link>
                    </div>
                    <div
                      className={`${
                        router.pathname === "/#elements"
                          ? "text-[#f64a86] p-2 "
                          : "text-white hover:text-[#f64a86] p-2"
                      }`}
                    >
                      <Link href="/#elements">Elements</Link>
                    </div>
                    <div
                      className={`${
                        router.pathname === "/#contactus"
                          ? "text-[#f64a86] p-2 "
                          : "text-white hover:text-[#f64a86] p-2"
                      }`}
                    >
                      <Link href="/#contactus">Contact Us</Link>
                    </div>
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
              {/**mobile menu modal */}
              {!isAboveMediaScreens && isMenuToggled && (
                <>
                  <div
                    className="fixed top-0 left-0 right-0 bottom-0 z-40 "
                    style={{
                      background: "rgba(26, 39, 57, 0.3",
                      backdropFilter: "blur(4px)",
                      WebkitBackdropFilter: "blur(4px)",
                    }}
                    onClick={() => setIsMenuToggled(false)}
                  />
                  <div
                    className="fixed right-0 top-0 bottom-0 w-64 sm:w-80 z-50 p-5 shadow-2xl"
                    style={{
                      backgroundColor: "rgba(26, 39, 57, 0.98)", // 98% opacity
                      backdropFilter: "blur(10px)",
                      WebkitBackdropFilter: "blur(10px)",
                      borderLeft: "1px solid rgba(255, 255, 255, 0.08)",
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
                    <div className="flex flex-col items-center font-mono text-lg font-bold gap-6 mt-4 ">
                      <div
                        className={`${
                          router.pathname === "/"
                            ? "text-[#f64a86] p-2 "
                            : "text-white hover:text-[#f64a86] p-2"
                        }`}
                      >
                        <Link href="/">Home</Link>
                      </div>
                      <div
                        className={`${
                          router.pathname === "/#aboutUs"
                            ? "text-[#f64a86] p-2 "
                            : "text-white hover:text-[#f64a86] p-2"
                        }`}
                      >
                        <Link href="/#aboutus">About Us</Link>
                      </div>
                      <div
                        className={`${
                          router.pathname === "/#cases"
                            ? "text-[#f64a86]  p-2"
                            : "text-white hover:text-[#f64a86] p-2"
                        }`}
                      >
                        <Link href="/#ourprocess">Cases</Link>
                      </div>
                      <div
                        className={`${
                          router.pathname === "/#ourservices"
                            ? "text-[#f64a86] p-2 "
                            : "text-white hover:text-[#f64a86] p-2"
                        }`}
                      >
                        <Link href="/#ourservices">Services</Link>
                      </div>

                      <div
                        className={`${
                          router.pathname === "/#news"
                            ? "text-[#f64a86] p-2 "
                            : "text-white hover:text-[#f64a86] p-2"
                        }`}
                      >
                        <Link href="/#news">News</Link>
                      </div>

                      <div
                        className={`${
                          router.pathname === "/#portfolio"
                            ? "text-[#f64a86] p-2 "
                            : "text-white hover:text-[#f64a86] p-2"
                        }`}
                      >
                        <Link href="/#portfolio">Portfolio</Link>
                      </div>
                      <div
                        className={`${
                          router.pathname === "/#elements"
                            ? "text-[#f64a86] p-2 "
                            : "text-white hover:text-[#f64a86] p-2"
                        }`}
                      >
                        <Link href="/#elements">Elements</Link>
                      </div>
                      <div
                        className={`${
                          router.pathname === "/#contactus"
                            ? "text-[#f64a86] p-2 "
                            : "text-white hover:text-[#f64a86] p-2"
                        }`}
                      >
                        <Link href="/#contactus">Contact Us</Link>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* HeroSection */}
      <div
        className="relative z-10 flex items-center justify-center min-h-screen container mx-auto px-4 sm:px-6 lg:px-8"
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
              <button className="px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-4  md:text-lg text-sm sm:text-base  rounded-2xl text-white bg-[#C71C63] hover:bg-[#f03375] transition-colors duration-300">
                OUR CASES {">"}
              </button>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="hidden md:flex md:flex-col lg:flex-col justify-items-end items-center gap-4 pl-96 lg:py-0 lg:pt-12 xl:pt-20 ">
              <div className="w-px h-50 bg-[#f64a86] " />
              <div className="w-6 h-6 rounded-full bg-white border border-gray-300" />
              <div className="w-6 h-6 rounded-full bg-white border border-gray-300" />
              <div className="w-6 h-6 rounded-full bg-white border border-gray-300" />
              <div className="w-8 h-8 rounded-full bg-[#f64a86] border-4 border-gray-300" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
