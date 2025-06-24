"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const aboutContent = {
  heading: "About Us",
  paragraphs: [
    `Raan Sports Knit Wear Ltd., founded in 2007, is a 100% export-oriented knit garment manufacturer committed to quality and global standards. Starting with just 120 employees, we have grown into a reputable name in the industry, now employing over 800 skilled professionals. Our 7-storied RCC Manufacturing Unit-1 complies with the Building Construction Code 2020, prioritizing worker safety, health, and well-being. We offer a fully in-house, vertically integrated production process—from knitting to packaging—ensuring efficiency, quality control, and flexibility.`,
    `We specialize in a wide range of knit products, including casualwear (T-shirts, polos, hoodies), sportswear (activewear, gym sets), and loungewear (sleepwear, undergarments). Our experienced management team works closely with clients across Europe, North America, and Asia to deliver on-time, high-quality garments. Focused on sustainability and continuous improvement, Raan Sports Knit Wear Ltd. strives to be a trusted global apparel partner.`,
  ],
};

export default function AboutUs() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-fade", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      id="about"
      className="relative h-screen w-full bg-white flex items-center justify-center px-6 md:px-12 py-10 pt-28 overflow-hidden snap-start"
    >
      {/* Optional background pattern or blur */}
      <div className="absolute inset-0 opacity-5 backdrop-blur-3xl bg-[url('/assets/contact.png')] bg-center bg-cover pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row justify-center md:justify-around items-center w-full text-center md:text-left gap-6">
        {/* Title */}
        <h1 className="text-6xl md:text-9xl text-blue-950 font-extrabold max about-fade">
          <span className="inline-block px-4 py-1 border-0 md:border-l-8 border-amber-600  rounded-tr-xl">
            About Us
          </span>
        </h1>

        {/* Text content */}
        <div className="space-y-6 text-xs md:text-lg w-[90%] md:w-1/2 leading-5 md:leading-8 text-justify max-w-2xl text-gray-700">
          {aboutContent.paragraphs.map((p, i) => (
            <p key={i} className="about-fade ">
              {p.split(/(\bRaan Sports Knit Wear Ltd\.|\b800\b|\b2007\b|\bBuilding Construction Code 2020\b)/g).map((word, idx) =>
                ["Raan Sports Knit Wear Ltd.", "800", "2007", "Building Construction Code 2020"].includes(word) ? (
                  <span key={idx} className="font-bold text-amber-600">
                    {word}
                  </span>
                ) : (
                  word
                )
              )}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
