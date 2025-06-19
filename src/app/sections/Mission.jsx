"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Mission() {
  const sectionRef = useRef(null);
  const missionRef = useRef(null);
  const visionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(missionRef.current, {
        x: 50,
        opacity: 0,
        duration: 1.2,
        scrollTrigger: {
          trigger: missionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(visionRef.current, {
        x: 50,
        opacity: 0,
        duration: 1.2,
        delay: 0.3,
        scrollTrigger: {
          trigger: visionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="mission"
      className="min-h-screen md:h-screen snap-start bg-neutral-00  py-20 px-6 md:px-20 flex md:flex-row flex-col items-center gap-12 pt-28"
    >
      <h2 className="text-6xl md:text-9xl font-bold text-center text-blue-950 max-w-4xl max">
        Mission & Vision
      </h2>

      {/* Mission Card */}
      <div className="flex flex-col  justify-center items-center gap-6">
        <div
          ref={missionRef}
          className="bg-white rounded-3xl p-6 px md:p-10 max-w-5xl w-full flex flex-col gap-2 md:gap-4"
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-amber-600">Our Mission</h3>
          <p className="text-gray-700 text-justify text-sm md:text-lg leading-relaxed">
            Our mission is to deliver premium quality knitwear products while
            maintaining sustainable and ethical manufacturing practices. We
            envision being the leading global apparel partner recognized for
            innovation, customer satisfaction, and environmental stewardship.
          </p>
        </div>

        {/* Vision Card */}
        <div
          ref={visionRef}
          className="bg-white rounded-3xl p-6 px md:p-10 max-w-5xl w-full flex flex-col gap-4"
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-amber-600">Our Vision</h3>
          <p className="text-gray-700 text-justify text-sm md:text-lg leading-relaxed">
            We are committed to continuous improvement, investing in modern
            technologies, and nurturing a skilled workforce. Our vision
            encompasses expanding our international presence and contributing
            positively to the communities we serve.
          </p>
        </div>
      </div>
    </section>
  );
}
