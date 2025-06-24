"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
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

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      id="services"
      ref={sectionRef}
      className="min-h-screen bg-white px-6 md:px-20 py-28 pb-36"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2 className="text-7xl md:text-9xl font-bold mb-16 text-center text-blue-950 max">
        Our Services
      </motion.h2>

      {/* Services Offered */}
      <motion.div className="mb-20">
        <motion.h3 className="text-2xl font-semibold mb-4 text-gray-700 text-center">
          What We Offer
        </motion.h3>
        <motion.div className="grid md:grid-cols-3 gap-2 md:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className="bg-neutral-100 p-6 rounded-xl flex flex-col items-center text-center"
            >
              {service.icon}
              <motion.h4 className="font-bold text-xl mt-4 mb-2">
                {service.title}
              </motion.h4>
              <motion.p className="text-gray-600 text-sm">
                {service.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Garment Types */}
      <motion.div className="mb-20">
        <motion.h3 className="text-2xl font-semibold mb-4 text-gray-700 text-center">
          Types of Garments
        </motion.h3>
        <motion.div className="grid md:grid-cols-3 gap-2 md:gap-8">
          {garments.map((garment, i) => (
            <motion.div
              key={i}
              className="bg-neutral-100 p-6 rounded-xl flex flex-col items-center text-center"
            >
              {garment.icon}
              <motion.h4 className="font-bold text-xl mt-4 mb-2">
                {garment.title}
              </motion.h4>
              <motion.p className="text-gray-600 text-sm">
                {garment.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Capacity Info */}
      <motion.div className="text-center max-w-xl mx-auto mb-24">
        <motion.h3 className="text-2xl font-semibold mb-4 text-gray-700">
          Production Capacity
        </motion.h3>
        <motion.p className="text-gray-600 text-sm">
          We are capable of producing approximately{" "}
          <strong>400,000 pieces</strong> monthly, with flexible minimum order
          quantities depending on the style.
        </motion.p>
      </motion.div>

      {/* --- Manufacturing Unit Section --- */}
      <motion.div className="manufacturing-info mx-auto p-2 md:p-10 w-full">
        <motion.h3 className="text-4xl md:text-7xl max font-extrabold text-amber-600 mb-6 md:mb-12 text-center tracking-wide">
          Manufacturing Unit
        </motion.h3>

        {/* Card style summary */}
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-2">
          <motion.div className="flex flex-col items-center justify-center bg-neutral-100 rounded-2xl p-6 pt-10">
            <FaBuilding className="text-5xl text-blue-600 mb-3" />
            <motion.h4 className="font-semibold text-lg mb-1 text-blue-800">
              Building Type
            </motion.h4>
            <motion.p className="text-center text-gray-700 text-2xl md:text-xl font-bold my-2">
              7 storied RCC
            </motion.p>
          </motion.div>

          <motion.div className="flex flex-col items-center bg-neutral-100 rounded-2xl p-6 pt-10">
            <FaLayerGroup className="text-5xl text-green-600 mb-3" />
            <motion.h4 className="font-semibold text-lg mb-1 text-green-800">
              Total Floor Area
            </motion.h4>
            <motion.p className="text-center text-gray-700 text-2xl font-bold my-2">
              40,500 SQFT
            </motion.p>
          </motion.div>

          <motion.div className="flex flex-col items-center bg-neutral-100 rounded-2xl p-6 pt-10">
            <FaUsers className="text-5xl text-yellow-600 mb-3" />
            <motion.h4 className="font-semibold text-lg mb-1 text-yellow-800">
              Employees
            </motion.h4>
            <motion.p className="text-center text-gray-700 text-2xl font-bold mt-2">
              800+
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Bars for numeric stats – new design */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {/* Sewing Lines */}
          <motion.div className="relative flex flex-col justify-center items-center bg-neutral-100 p-6 rounded-2xl transition duration-300">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center space-x-4">
                <FaWarehouse className="text-4xl text-blue-600" />
                <div>
                  <motion.h4 className="text-md md:text-lg font-bold text-blue-800">
                    Sewing Lines
                  </motion.h4>
                  <motion.p className="text-xs md:text-sm text-gray-500">
                    Operational Infrastructure
                  </motion.p>
                </div>
              </div>
              <span className="text-3xl font-black text-blue-700">12</span>
            </div>

            <div className="w-full mt-6">
              <div className="w-full h-3 bg-neutral-200 rounded-full">
                <div
                  style={{ width: "95%" }}
                  className="bar-fill h-full bg-blue-500 rounded-full"
                ></div>
              </div>
              <p className="text-xs mt-1 text-right text-blue-700 font-semibold">
                95% utilization
              </p>
            </div>
          </motion.div>

          {/* Production Capacity */}
          <motion.div className="relative flex flex-col justify-center items-center bg-neutral-100 p-6 rounded-2xl transition duration-300">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center space-x-4">
                <FaChartBar className="text-4xl text-green-600" />
                <div>
                  <motion.h4 className="text-md md:text-lg font-bold text-green-800">
                    Monthly Capacity
                  </motion.h4>
                  <motion.p className="text-xs md:text-sm text-gray-500">
                    Estimated Output
                  </motion.p>
                </div>
              </div>
              <span className="text-md md:text-2xl font-black text-green-700">
                400K pcs
              </span>
            </div>

            <div className="w-full mt-6">
              <div className="w-full h-3 bg-neutral-200 rounded-full">
                <div
                  style={{ width: "99%" }}
                  className="bar-fill h-full bg-green-500 rounded-full"
                ></div>
              </div>
              <p className="text-xs mt-1 text-right text-green-700 font-semibold">
                99% capacity ready
              </p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

