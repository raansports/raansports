"use client";
import React, { useRef, useEffect } from "react";
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

const missionContent = {
  heading: "Mission and Vision",
  paragraphs: [
    `Our mission is to deliver premium quality knitwear products while
    maintaining sustainable and ethical manufacturing practices. We
    envision being the leading global apparel partner recognized for
    innovation, customer satisfaction, and environmental stewardship.`,
    `We are committed to continuous improvement, investing in modern
    technologies, and nurturing a skilled workforce. Our vision encompasses
    expanding our international presence and contributing positively to the
    communities we serve.`,
  ],
};

export default function AboutUs() {
  const sectionRef = useRef(null);
  const aboutRef = useRef(null);
  const missionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top", // Transition completes when section bottom hits viewport top
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      // Slide About Us up and fade out
      tl.to(aboutRef.current, {
        y: "0%",
        opacity: 1,
        ease: "power2.out",
        duration: 0.5,
      });

      // Slide Mission & Vision up from below
      tl.fromTo(
        missionRef.current,
        { y: "100%", opacity: 0 },
        { y: "0%", opacity: 1, ease: "power2.out", duration: 1 },
        "-=0.2" // Slight overlap for smooth transition
      );

      return () => {
        ScrollTrigger.getAll().forEach((st) => st.kill());
        tl.kill();
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative h-screen w-full bg-white flex items-center justify-center p-6 md:p-12 overflow-hidden snap-start"
    >
      {/* About Us content */}
      <div
        ref={aboutRef}
        className="absolute inset-0 flex flex-col md:flex-row justify-center md:justify-around items-center w-full text-center md:text-left px-4 md:px-8 gap-4"
      >
        <h1 className="text-6xl md:text-9xl font-bold mb-4 md:mb-0 max">About Us</h1>
        <div className="space-y-4 text-xs md:text-lg w-4/5 md:w-1/2 leading-4 md:leading-8 text-justify max-w-2xl">
          {aboutContent.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>

      {/* Mission & Vision content */}
      <div
        id="mission"
        ref={missionRef}
        className="absolute inset-0 flex flex-col md:flex-row justify-center md:justify-between items-center w-full text-center md:text-left px-0 md:px-0 snap-start"
      >
        <div className="relative w-full h-full flex flex-col md:flex-row justify-center md:justify-around items-center bg-gray-900 bg-opacity-90 p-6 md:p-12 gap-2">
          <h1 className="text-6xl md:text-9xl font-bold mb-4 md:mb-0 text-white max">
            Mission & <br/> Vision
          </h1>
          <div className="space-y-4 text-xs md:text-lg w-4/5 md:w-1/2 leading-4 md:leading-8 text-white text-justify max-w-2xl">
            {missionContent.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}