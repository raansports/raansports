"use client";
import { motion } from "framer-motion";
import { FaCheckCircle, FaTools, FaUserShield, FaClock, FaLightbulb } from "react-icons/fa";
import Image from "next/image";

const certificates = [
  "/Certificates/BCI.png",
  "/Certificates/BKMEA.png",
  "/Certificates/BSCI.png",
  "/Certificates/GlobalOrganic.svg",
  "/Certificates/OEKO.png",
  "/Certificates/Sedex.png",
];

const qualityPoints = [
  {
    icon: <FaCheckCircle size={24} className="text-green-600" />,
    title: "International Standards",
    description: "Adherence to strict quality standards from knitting to finishing.",
  },
  {
    icon: <FaUserShield size={24} className="text-blue-600" />,
    title: "Safe & Compliant",
    description: "Ensuring a safe, ethical and compliant workspace for employees.",
  },
  {
    icon: <FaTools size={24} className="text-orange-600" />,
    title: "Robust QA Systems",
    description: "Multi-stage inspections for integrity and consistency.",
  },
  {
    icon: <FaClock size={24} className="text-purple-600" />,
    title: "On-Time Delivery",
    description: "Timely deliveries with world-class craftsmanship.",
  },
  {
    icon: <FaLightbulb size={24} className="text-yellow-500" />,
    title: "Continuous Innovation",
    description: "Evolving processes based on client feedback & global trends.",
  },
];

export default function Quality() {
  return (
    <section id="quality" className="bg-neutral-100 py-16 px-6 md:px-16 snap-start pt-28">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-6xl md:text-9xl font-bold text-gray-800 mb-4 max">Quality Assurance</h2>
        <p className="text-md md:text-lg text-gray-600 max-w-3xl mx-auto">
          At Raan Sports Knit Wear Ltd., we don’t just manufacture garments — we build trust, stitch by stitch.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-4">
        {qualityPoints.map((item, idx) => (
          <motion.div
            key={idx}
            className="bg-white p-6 rounded-2xl transition duration-300"
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <div className="flex items-center gap-4 mb-3">
              {item.icon}
              <h3 className="text-lg font-semibold">{item.title}</h3>
            </div>
            <p className="text-sm text-gray-600">{item.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-10 md:mt-28 bg-white p-10 rounded-2xl transition duration-300"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl md:text-4xl font-bold text-center text-gray-700 mb-4">Our Certifications</h3>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 justify-center items-center px-6 w-full">
          {certificates.map((src, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="flex justify-center p-1 md:p-5 overflow-hidden rounded-2xl transition-all duration-300 "
              >
                <img
                  src={src}
                  alt={`Certificate ${idx + 1}`}
                  className="h-full md:h-30 object-contain hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
            ))}
        </div>
      </motion.div>
    </section>
  );
}

