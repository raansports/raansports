"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import {
  FaDraftingCompass,
  FaShippingFast,
  FaCogs,
  FaCheckDouble,
  FaBoxes,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const processSteps = [
  {
    icon: <FaDraftingCompass className="text-3xl text-blue-600" />,
    title: "Design & Tech Pack",
    description:
      "Visualizing ideas, creating detailed tech packs with measurements, colors, and trims.",
  },
  {
    icon: <FaCogs className="text-3xl text-green-600" />,
    title: "Sampling",
    description:
      "Initial samples are developed to align style, fit, and construction with client expectations.",
  },
  {
    icon: <FaBoxes className="text-3xl text-purple-600" />,
    title: "Bulk Production",
    description:
      "Once approved, large-scale manufacturing begins with close supervision at every stage.",
  },
  {
    icon: <FaCheckDouble className="text-3xl text-yellow-600" />,
    title: "Quality Control",
    description:
      "Each garment is thoroughly checked to meet the highest standards.",
  },
  {
    icon: <FaShippingFast className="text-3xl text-red-600" />,
    title: "Final Inspection & Delivery",
    description:
      "After final checks, products are packaged and dispatched promptly to clients.",
  },
];

const productionPhases = [
  { label: "Knitting", image: "/productions/knitting.png" },
  { label: "Cutting", image: "/productions/cutting.png" },
  { label: "Sewing", image: "/productions/sewing.jpg" },
  { label: "Finishing", image: "/productions/finishing.jpg" },
  { label: "Packaging", image: "/productions/packaging.png" },
];

export default function Productions() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".timeline-step", {
        opacity: 0,
        y: 60,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".phase-card", {
        opacity: 0,
        y: 50,
        duration: 0.6,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".phase-grid",
          start: "top 75%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className=" bg-white px-6 md:px-20 py-28 snap-start"
      id="productions"
    >
      <h1 className="text-4xl md:text-9xl font-bold text-center text-gray-800 max">
        Production
      </h1>

      {/* Timeline Section */}
      <h2 className="text-2xl text-center font-semibold text-gray-700 mb-20">
        From Concept to Completion
      </h2>
      <div className="relative border-l-4 border-blue-600 pl-8 space-y-12 max-w-3xl mx-auto mb-24">
        {processSteps.map((step, i) => (
          <div key={i} className="timeline-step relative">
            <div className="absolute -left-6 top-0  text-white w-12 h-12 rounded-full flex items-center justify-center">
              {step.icon}
            </div>
            <h3 className="text-xl font-semibold mb-1 ml-8">{step.title}</h3>
            <p className="text-gray-600 text-sm ml-8">{step.description}</p>
          </div>
        ))}
      </div>

      {/* Production Phases */}
      <div className="text-center mb-12">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
          In-House Production Stages
        </h2>
        <p className="text-gray-500 text-sm">
          Every step is handled under one roof for maximum efficiency and
          control.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
        {productionPhases.map((phase, i) => (
          <div
            key={i}
            className="relative bg-white shadow-md rounded-lg overflow-hidden"
          >
            <Image
              src={phase.image}
              alt={phase.label}
              width={400}
              height={250}
              className="object-cover w-full h-[150px] md:h-[256px]"
            />
            <div className="absolute bottom-0 left-0 w-full p-4 text-center text-lg font-semibold text-gray-800">
              {phase.label}
            </div>
            
          </div>
        ))}
      </div>
    </motion.section>
  );
}
