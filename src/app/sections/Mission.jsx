"use client";
import { motion } from "framer-motion";
import React from "react";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Mission() {
  return (
    <motion.div
      id="mission"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      className="min-h-screen md:h-screen snap-start bg-neutral-00 py-20 px-6 md:px-20 flex md:flex-row flex-col items-center gap-12 pt-28 overflow-hidden"
    >
      <h2 className="text-6xl md:text-9xl font-bold text-center text-blue-950 max-w-4xl max">
        Mission & Vision
      </h2>

      {/* Mission Card */}
      <div className="flex flex-col  justify-center items-center ">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          className="bg-white rounded-3xl p-6 px md:p-10 max-w-5xl w-full flex flex-col gap-2 md:gap-4"
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-amber-600">Our Mission</h3>
          <p className="text-gray-700 text-justify text-sm md:text-lg leading-relaxed">
            Our mission is to deliver premium quality knitwear products while
            maintaining sustainable and ethical manufacturing practices. We
            envision being the leading global apparel partner recognized for
            innovation, customer satisfaction, and environmental stewardship.
          </p>
        </motion.div>

        {/* Vision Card */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          className="bg-white rounded-3xl p-6 px md:p-10 max-w-5xl w-full flex flex-col gap-4"
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-amber-600">Our Vision</h3>
          <p className="text-gray-700 text-justify text-sm md:text-lg leading-relaxed">
            We are committed to continuous improvement, investing in modern
            technologies, and nurturing a skilled workforce. Our vision
            encompasses expanding our international presence and contributing
            positively to the communities we serve.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

