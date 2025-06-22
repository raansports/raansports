"use client";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const aboutContent = {
  heading: "About Us",
  paragraphs: [
    `Raan Sports Knit Wear Ltd., founded in 2007, is a 100% export-oriented
    knit garment manufacturer committed to quality and global standards.
    Starting with just 120 employees, we have grown into a reputable name
    in the industry, now employing over 800 skilled professionals. Our
    7-storied RCC Manufacturing Unit-1 complies with the Building
    Construction Code 2020, prioritizing worker safety, health, and
    well-being. We offer a fully in-house, vertically integrated
    production process—from knitting to packaging—ensuring efficiency,
    quality control, and flexibility.`,
    `We specialize in a wide range of knit products, including casualwear
    (T-shirts, polos, hoodies), sportswear (activewear, gym sets), and
    loungewear (sleepwear, undergarments). Our experienced management team
    works closely with clients across Europe, North America, and Asia to
    deliver on-time, high-quality garments. Focused on sustainability and
    continuous improvement, Raan Sports Knit Wear Ltd. strives to be a
    trusted global apparel partner.`,
  ],
};

export default function AboutUs() {
  const sectionRef = useRef(null);

  return (
    <div
      ref={sectionRef}
      id="about"
      className="relative h-screen w-full bg-white flex items-center justify-center p-6 md:p-12 overflow-hidden snap-start"
    >
      {/* About Us content */}
      <div className="absolute inset-0 flex flex-col md:flex-row justify-center md:justify-around items-center w-full text-center md:text-left px-4 md:px-8 gap-4">
        <h1 className="text-6xl md:text-9xl text-blue-950 font-bold mb-4 md:mb-0 max">About Us</h1>
        <div className="space-y-4 text-xs md:text-lg w-4/5 md:w-1/2 leading-4 md:leading-8 text-justify max-w-2xl">
          {aboutContent.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

