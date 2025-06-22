"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaTshirt,
  FaCogs,
  FaChartBar,
  FaBoxes,
  FaRulerCombined,
  FaIndustry,
  FaBuilding,
  FaLayerGroup,
  FaUsers,
  FaWarehouse,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: <FaCogs className="text-3xl text-blue-600" />,
    title: "Custom Orders & Special Collections",
    description:
      "Tailored garments built to match unique brand collections and seasonal demands.",
  },
  {
    icon: <FaRulerCombined className="text-3xl text-green-600" />,
    title: "Product Development & Sampling",
    description:
      "Rapid prototyping and detailed sampling ensure quality before mass production.",
  },
  {
    icon: <FaIndustry className="text-3xl text-yellow-600" />,
    title: "End-to-End Manufacturing",
    description:
      "Complete process in-house – from fabric knitting to cutting, sewing, and finishing.",
  },
];

const garments = [
  {
    icon: <FaTshirt className="text-3xl text-rose-600" />,
    title: "Casualwear",
    description:
      "T-shirts, Polo shirts, Hoodies, Joggers, Sweatshirts, Tank-tops.",
  },
  {
    icon: <FaChartBar className="text-3xl text-purple-600" />,
    title: "Sportswear",
    description:
      "Performance tees, Activewear, Gym sets for comfort and flexibility.",
  },
  {
    icon: <FaBoxes className="text-3xl text-orange-600" />,
    title: "Loungewear & Basics",
    description: "Undergarments and sleepwear designed for softness and ease.",
  },
];

export default function OurServices() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const barsRef = useRef<(HTMLDivElement | null)[]>([]);

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

      // Animate bars width
      barsRef.current.forEach((barEl) => {
        if (!barEl) return;
        const fill = barEl.querySelector(".bar-fill");
        if (!fill) return;
        const width = fill.getAttribute("data-width") || "0%";

        gsap.fromTo(
          fill,
          { width: "0%" },
          {
            width,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: barEl,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <motion.div
      id="services"
      ref={sectionRef}
      className="min-h-screen bg-white px-6 md:px-20 py-28 snap-start"
    >
      <motion.h2
        className="text-7xl md:text-9xl font-bold mb-16 text-center text-blue-950 max"
        initial={{ y: -40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        Our Services
      </motion.h2>

      {/* Services Offered */}
      <div className="mb-20">
        <h3 className="text-2xl font-semibold mb-4 text-gray-700 text-center">
          What We Offer
        </h3>
        <div className="grid md:grid-cols-3 gap-2 md:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className="fade-card bg-neutral-100 p-6 rounded-xl flex flex-col items-center text-center"
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
        <h3 className="text-2xl font-semibold mb-4 text-gray-700 text-center">
          Types of Garments
        </h3>
        <div className="grid md:grid-cols-3 gap-2 md:gap-8">
          {garments.map((garment, i) => (
            <motion.div
              key={i}
              className="fade-card bg-neutral-100 p-6 rounded-xl flex flex-col items-center text-center"
            >
              {garment.icon}
              <h4 className="font-bold text-xl mt-4 mb-2">{garment.title}</h4>
              <p className="text-gray-600 text-sm">{garment.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Capacity Info */}
      <div className="text-center max-w-xl mx-auto mb-24">
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
          We are capable of producing approximately{" "}
          <strong>400,000 pieces</strong> monthly, with flexible minimum order
          quantities depending on the style.
        </motion.p>
      </div>

      {/* --- Manufacturing Unit Section --- */}
      <motion.div
        className="manufacturing-info  mx-auto p-10 w-full"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.3 }}
      >
        <h3 className="text-7xl max font-extrabold text-amber-600 mb-12 text-center tracking-wide">
          Manufacturing Unit
        </h3>

        {/* Card style summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="flex flex-col items-center justify-center bg-neutral-100 rounded-2xl p-6 pt-10 ">
            <FaBuilding className="text-5xl text-blue-600 mb-3" />
            <h4 className="font-semibold text-lg mb-1 text-blue-800">
              Building Type
            </h4>
            <p className="text-center text-gray-700 text-xl font-bold my-2">
              Unit-1: 7 storied RCC (Owned) <br />
              Unit-2: 5 storied (Rented)
            </p>
          </div>

          <div className="flex flex-col items-center bg-neutral-100 rounded-2xl p-6 pt-10 ">
            <FaLayerGroup className="text-5xl text-green-600 mb-3" />
            <h4 className="font-semibold text-lg mb-1 text-green-800">
              Total Floor Area
            </h4>
            <p className="text-center text-gray-700 text-2xl font-bold my-2">
              40,500 SQFT
            </p>
            <p className="text-center text-gray-700 text-xs">
              (Unit 1 - 28,000 SQFT, Unit 2 - 12,500 SQFT)
            </p>
          </div>

          <div className="flex flex-col items-center bg-neutral-100 rounded-2xl p-6 pt-10 ">
            <FaUsers className="text-5xl text-yellow-600 mb-3" />
            <h4 className="font-semibold text-lg mb-1 text-yellow-800">
              Employees
            </h4>
            <p className="text-center text-gray-700 text-2xl font-bold mt-2">
              800+
            </p>
          </div>
        </div>

        {/* Bars for numeric stats – new design */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Sewing Lines */}
          <div
            ref={(el) => {
              barsRef.current[0] = el;
            }}
            className="relative flex flex-col justify-center items-center bg-neutral-100 p-6 rounded-2xl transition duration-300"
          >
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center space-x-4">
                <FaWarehouse className="text-4xl text-blue-600" />
                <div>
                  <h4 className="text-lg font-bold text-blue-800">
                    Sewing Lines
                  </h4>
                  <p className="text-sm text-gray-500">
                    Operational Infrastructure
                  </p>
                </div>
              </div>
              <span className="text-3xl font-black text-blue-700">12</span>
            </div>

            <div className="w-full mt-6">
              <div className="w-full h-3 bg-neutral-200 rounded-full">
                <div
                  data-width="95%"
                  className="bar-fill h-full bg-blue-500 rounded-full"
                ></div>
              </div>
              <p className="text-xs mt-1 text-right text-blue-700 font-semibold">
                95% utilization
              </p>
            </div>
          </div>

          {/* Production Capacity */}
          <div
            ref={(el) => {
              barsRef.current[1] = el;
            }}
            className="relative flex flex-col justify-center items-center bg-neutral-100 p-6 rounded-2xl transition duration-300"
          >
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center space-x-4">
                <FaChartBar className="text-4xl text-green-600" />
                <div>
                  <h4 className="text-lg font-bold text-green-800">
                    Monthly Capacity
                  </h4>
                  <p className="text-sm text-gray-500">Estimated Output</p>
                </div>
              </div>
              <span className="text-2xl font-black text-green-700">
                400K pcs
              </span>
            </div>

            <div className="w-full mt-6">
              <div className="w-full h-3 bg-neutral-200 rounded-full">
                <div
                  data-width="99%"
                  className="bar-fill h-full bg-green-500 rounded-full"
                ></div>
              </div>
              <p className="text-xs mt-1 text-right text-green-700 font-semibold">
                99% capacity ready
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
