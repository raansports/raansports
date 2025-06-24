"use client";
import { motion } from "framer-motion";
import HeroSection from "./sections/HeroSection";
import AboutUs from "./sections/AboutUs";
import Mission from "./sections/Mission";
import OurService from "./sections/OurService";
import OurBuyers from "./sections/OurBuyers";
import Products from "./sections/Products";
import Quality from "./sections/Quality";
import Sustainability from "./sections/Sustainability";
import Management from "./sections/Management";
import ContactUs from "./sections/ContactUs";
import Productions from "./sections/Productions";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 10,
    transition: { duration: 1, ease: "easeOut" }, // Increased duration for slower transition
  },
};

const sections = [
  { id: "about", Component: <AboutUs /> },
  { id: "mission", Component: <Mission /> },
  { id: "services", Component: <OurService /> },
  { id: "ourbuyers", Component: <OurBuyers /> },
  { id: "products", Component: <Products /> },
  { id: "quality", Component: <Quality /> },
  { id: "productions", Component: <Productions /> },
  { id: "sustainability", Component: <Sustainability /> },
  { id: "management", Component: <Management /> },
  { id: "contact", Component: <ContactUs /> },
];

export default function Home() {
  return (
    <>
      <HeroSection />
      {sections.map(({ id, Component }) => (
        <motion.section
          key={id}
          id={id}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
          className="min-h-screen w-full bg-white snap-start snap-always scroll-smooth"
        >
          {Component}
        </motion.section>
      ))}
    </>
  );
}

