"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

const slides = [
  "/assets/H1.png",
  "/assets/H2.png",
  "/assets/H3.png",
  "/assets/H4.jpg",
];

const HeroSection = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const marquee = marqueeRef.current;
      if (!marquee) return;

      gsap.to(marquee, {
        xPercent: -50,
        duration: 40,
        ease: "linear",
        repeat: -1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const repeatedSlides = [...slides, ...slides, ...slides, ...slides];

  return (
    <div
      ref={sectionRef}
      id="home"
      className="relative w-full h-screen overflow-hidden bg-black"
    >
      {/* Background image */}
      <Image
        src="/assets/H3.png"
        alt="Background"
        width={1920}
        height={1080}
        className="absolute w-full h-full object-cover z-0 opacity-40"
      />

      {/* Overlay */}
      <div id="overlay" className="absolute w-full h-full z-[100] overlay" />

      {/* Centered Text */}
      <div className="absolute top-1/2 left-1/2 z-10 w-[90%] md:w-[75%] transform -translate-x-1/2 -translate-y-1/2 text-center text-white px-4">
        <h1 className=" font-extrabold max headingText">
          RAAN SPORTS KNITWEAR LTD.
        </h1>
        <p className="text-lg md:text-2xl mt-4 font-light">
          A 100% Export Oriented Knit Garment
        </p>
      </div>

      {/* Continuous Carousel */}
      <div className="absolute bottom-8 w-full overflow-hidden z-20">
        <div
          ref={marqueeRef}
          className="flex w-max gap-4 px-10 items-center"
        >
          {repeatedSlides.map((src, i) => (
            <div
              key={i}
              className="relative h-[100px] md:h-[150px] aspect-video flex-shrink-0 rounded-2xl overflow-hidden border-4 border-blue-400"
            >
              <Image
                src={src}
                alt={`Slide ${i + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
