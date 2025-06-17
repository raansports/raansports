"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaTshirt, FaCogs, FaChartBar, FaBoxes, FaRulerCombined, FaIndustry } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: <FaCogs className="text-3xl text-blue-600" />,
    title: "Custom Orders & Special Collections",
    description: "Tailored garments built to match unique brand collections and seasonal demands.",
  },
  {
    icon: <FaRulerCombined className="text-3xl text-green-600" />,
    title: "Product Development & Sampling",
    description: "Rapid prototyping and detailed sampling ensure quality before mass production.",
  },
  {
    icon: <FaIndustry className="text-3xl text-yellow-600" />,
    title: "End-to-End Manufacturing",
    description: "Complete process in-house – from fabric knitting to cutting, sewing, and finishing.",
  },
];

const garments = [
  {
    icon: <FaTshirt className="text-3xl text-rose-600" />,
    title: "Casualwear",
    description: "T-shirts, Polo shirts, Hoodies, Joggers, Sweatshirts, Tank-tops.",
  },
  {
    icon: <FaChartBar className="text-3xl text-purple-600" />,
    title: "Sportswear",
    description: "Performance tees, Activewear, Gym sets for comfort and flexibility.",
  },
  {
    icon: <FaBoxes className="text-3xl text-orange-600" />,
    title: "Loungewear & Basics",
    description: "Undergarments and sleepwear designed for softness and ease.",
  },
];

export default function OurServices() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".fade-card", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <motion.section
      id="services"
      ref={sectionRef}
      className="min-h-screen bg-white px-6 md:px-20 py-28 snap-start"
    >
      <motion.h2
        className="text-4xl md:text-9xl font-bold mb-16 text-center text-gray-800 max"
        initial={{ y: -40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        Our Services
      </motion.h2>

      {/* Services Offered */}
      <div className="mb-20">
        <h3 className="text-2xl font-semibold mb-8 text-gray-700 text-center">What We Offer</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className="fade-card bg-neutral-100 shadow-md p-6 rounded-xl flex flex-col items-center text-center"
            >
              {service.icon}
              <h4 className="font-bold text-xl mt-4 mb-2">{service.title}</h4>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Garment Types */}
      <div className="mb-20">
        <h3 className="text-2xl font-semibold mb-8 text-gray-700 text-center">Types of Garments</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {garments.map((garment, i) => (
            <motion.div
              key={i}
              className="fade-card bg-neutral-100 shadow-md p-6 rounded-xl flex flex-col items-center text-center"
            >
              {garment.icon}
              <h4 className="font-bold text-xl mt-4 mb-2">{garment.title}</h4>
              <p className="text-gray-600 text-sm">{garment.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Capacity Info */}
      <div className="text-center max-w-xl mx-auto">
        <motion.h3
          className="text-2xl font-semibold mb-4 text-gray-700"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Production Capacity
        </motion.h3>
        <motion.p
          className="text-gray-600 text-sm"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          We are capable of producing approximately <strong>400,000 pieces</strong> monthly, with flexible minimum order quantities depending on the style.
        </motion.p>
      </div>
    </motion.section>
  );
}
