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
          end: "+=400%",
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      // Animate About Us fade out and slide left
      tl.to(aboutRef.current, { x: 0, ease: "none" }, 0.25);

      // Animate Mission fade in and slide from right
      tl.fromTo(
        missionRef.current,
        { x: 5000 },
        { x: 0, ease: "none" }, 0
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
      className="relative h-screen w-full bg-white flex items-center justify-center p-10 md:p-20 overflow-hidden"
    >
      {/* About Us content */}
      <div
        ref={aboutRef}
        className="absolute inset-0 flex md:flex-row flex-col justify-center md:justify-around items-center w-full text-center md:text-left px-6 md:px-0"
      >
        <h1 className="text-7xl md:text-9xl mb-6 max">About Us</h1>
        <div className="space-y-6 text-xs md:text-xl w-[90%] leading-5 md:leading-8 text-justify max-w-3xl mx-auto md:mx-0">
          {aboutContent.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>

      {/* Mission & Vision content */}
      <div
        ref={missionRef}
        className="absolute inset-0 flex md:flex-row flex-col justify-center md:justify-around items-center w-full text-center md:text-left px-0 md:px-0"
        style={{ pointerEvents: "none" }}
      >
        <div
          className="flex md:flex-row flex-col justify-center md:justify-around items-center w-full h-full text-center md:text-left px-6 md:px-0 relative AboutUsBG"
        >
          <div className="overlayWhite"></div>
          <h1 className="text-7xl md:text-9xl mb-6 max ">
            Mission & <br/> Vision
          </h1>
          <div className="space-y-0 md:space-y-6 w-[90%] md:w-[50%] text-xs md:text-xl leading-5 md:leading-8 text-justify">
            {missionContent.paragraphs.map((p, i) => (
              <p className="" key={i}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
