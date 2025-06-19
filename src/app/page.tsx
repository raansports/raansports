"use client";
import { motion } from "framer-motion";
import HeroSection from "./sections/HeroSection";
import AboutUs from "./sections/AboutUs";
import Mission from "./sections/Mission";
import OurService from "./sections/OurService";
import OurBuyers from "./sections/OurBuyers";
import Products from "./sections/Products";
import Quality from "./sections/Quality";
import Productions from "./sections/Productions";
import Sustainability from "./sections/Sustainability";
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

      <Mission/>

      <OurService />

      <motion.section
        id="ourbuyers"
        className="h-screen snap-start flex justify-center items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <OurBuyers />
      </motion.section>

      <Products />

      <Quality />

      <Productions />

      <Sustainability />
      
      <ContactUs />
    </>
  );
}
