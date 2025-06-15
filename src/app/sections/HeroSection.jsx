"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const sectionRef = useRef(null);
  const imagesWrapperRef = useRef(null);

  const slides = ["/assets/H1.png", "/assets/H2.png", "/assets/H3.png", "/assets/H4.jpg"];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pin the whole Hero section
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "+=400%",
        scrub: true,
        pin: true,
      });

      gsap.to(".halftone", {
        backdropFilter: "blur(50px)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=400%",
          scrub: true,
        },
      });

      // Slide images one-by-one
      gsap.to(".slide", {
        xPercent: -120 * (slides.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: imagesWrapperRef.current,
          start: "top top",
          end: `+=${100 * slides.length}%`,
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="home" className="relative w-full h-screen overflow-hidden snap-start scroll-smooth">
      {/* Background */}
      <Image
        src="/assets/H3.png"
        alt="Background"
        width={1920}
        height={1080}
        className="absolute object-cover w-full h-full z-0 halftone"
      />
      <div id="overlay" className="absolute w-full h-full z-[100] overlay" />

      {/* Text content */}
      <div className="absolute z-20 top-60 md:top-10 left-0 w-full h-full flex flex-col md:flex-row items-center justify-start ">
        <div className="md:p-16 text-center md:text-left w-full md:w-1/2 text-white">
          <h1 className="text-7xl md:text-[8rem] font-bold max">RAAN SPORTS KNITWEAR LTD.</h1>
          <p className="text-xl md:text-2xl mt-4">A 100% Export Oriented Knit Garment</p>
        </div>
      </div>

      {/* Right-side slideshow */}
      <div
        ref={imagesWrapperRef}
        className="absolute top-150 md:top-50 right-60 w-1/3 h-full flex z-[300]"
        style={{ willChange: "transform" }}
      >
        {slides.map((src, index) => (
          <div key={index} className="slide h-[20%] md:h-[60%] w-auto flex-shrink-0 relative m-2 aspect-video ">
            <Image src={src} alt={`Slide ${index + 1}`} fill className="object-cover rounded-4xl border-4 border-white " />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
