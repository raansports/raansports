"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const Products = () => {
  const sectionRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const cards = sectionRef.current.querySelectorAll(".fade-in");

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        }
      );
    });
  }, []);

  const productImages = [
    { src: "/Products/P1.webp", name: "Leggings" },
    { src: "/Products/P2.jpg", name: "Polo Shirts, T-shirts" },
    { src: "/Products/P3.png", name: "Slim/Semi Fit Joggers," },
    { src: "/Products/P4.png", name: "Cropped Tees & Tank Tops" },
    { src: "/Products/P5.jpg", name: "Night wears" },
    { src: "/Products/P6.jpg", name: "Casual Lounge Sets" },
    { src: "/Products/P7.webp", name: "Activewear" },
    { src: "/Products/P8.jpg", name: "Sleepwear" },
  ];

  return (
    <section
      id="products"
      ref={sectionRef}
      className="py-20 px-4 md:px-10 lg:px-20 bg-gray-100"
    >
      <div className="text-center mb-12">
        <h2 className="text-6xl md:text-9xl font-bold text-gray-800 mb-1 max">
          Our Products
        </h2>
        <p className="text-md md:text-lg text-gray-600 max-w-3xl mx-auto">
          Explore our gallery of premium knitwear, crafted with quality and care.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-6 max-w-[1240px] mx-auto">
        {productImages.map((product, i) => (
          <div
            key={i}
            className="relative fade-in overflow-hidden rounded-2xl shadow-lg bg-white cursor-pointer"
            onClick={() => setSelectedImage(product.src)}
          >
            <img
              src={product.src}
              alt={product.name}
              className="w-full h-50 md:h-64 object-cover hover:scale-105 transition duration-300"
            />
            <div className="p-4">
              <h3 className="absolute bottom-4 left-1/2 w-full text-center transform -translate-x-1/2 text-lg text-white mb-1 z-50">
                {product.name}
              </h3>
            </div>
            <div className="absolute top-0 left-0 w-full h-full gradient-blur">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-[#ffffff67] backdrop-blur-3xl flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              alt="Enlarged"
              className="max-h-[80vh] max-w-[90vw] rounded-xl shadow-lg"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()} // Prevent modal close on image click
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Products;

