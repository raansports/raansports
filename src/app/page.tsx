"use client";
import { motion } from "framer-motion";
import HeroSection from "./sections/HeroSection";
import Products from "./sections/Products";
import AboutUs from "./sections/AboutUs";
import MissionVision from "./sections/Customer";
import ContactUs from "./sections/ContactUs";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />

      <AboutUs />

      <motion.section
        id="mission"
        className="h-screen snap-start flex justify-center items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <MissionVision />
      </motion.section>

      <motion.section
        id="products"
        className="h-screen snap-start flex justify-center items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <Products />
      </motion.section>

      <motion.section
        id="contact"
        className="h-screen snap-start flex justify-center items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <ContactUs />
      </motion.section>
    </>
  );
}
