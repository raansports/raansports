"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const Products = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const productCategories = [
    {
      title: "Men’s Wear",
      description:
        "Cotton Crew Neck T-Shirts, Polo shirts, Sweatshirts, Tank-tops, Boxers. Slim/Semi Fit Joggers, Jackets.",
      items: [
        { src: "/Products/P2.jpg", name: "Crew Neck T-Shirt" },
        { src: "/Products/P3.png", name: "Joggers" },
      ],
    },
    {
      title: "Women’s Wear",
      description:
        "Cropped Tees & Tank Tops, Polo shirts, Jackets. Yoga Pants & Leggings. Casual Lounge Sets, Night wears, Undergarments.",
      items: [
        { src: "/Products/P4.png", name: "Cropped Tee" },
        { src: "/Products/P1.webp", name: "Leggings" },
        { src: "/Products/P5.jpg", name: "Lounge Set" },
      ],
    },
    {
      title: "Kidswear",
      description:
        "Printed Tees and Short pant sets. Soft Tracksuits, Sweatshirts, Hoodies, Jackets, Uniform Polos.",
      items: [
        { src: "/Products/P6.jpg", name: "Printed Tee Set" },
        { src: "/Products/P7.webp", name: "Tracksuit" },
        { src: "/Products/P9.png", name: "Uniform Polo" },
      ],
    },
  ];

  const variants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div
      id="products"
      className="min-h-screen py-28 px-4 md:pt-28 lg:px-20  snap-start"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-6xl md:text-9xl font-extrabold text-blue-950 max mb-2">
          Our Products
        </h2>
        <p className="text-lg md:text-md text-gray-600 max-w-3xl mx-auto">
          Explore our diverse range of garments crafted for men, women, and kids.
        </p>
      </motion.div>

      <div className="space-y-24 px-3 md:px-0 center flex-col">
        {productCategories.map((category, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={variants}
            className="grid md:grid-cols-2 gap-7"
          >
            <div className="space-y-1">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800">
                {category.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-lg">
                {category.description}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {category.items.map((item, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={variants}
                  className="relative overflow-hidden rounded-xl shadow-md cursor-pointer"
                  onClick={() => setSelectedImage(item.src)}
                >
                  <Image
                    src={item.src}
                    alt={item.name}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover hover:scale-105 transition duration-300"
                  />
                  <div className="absolute bottom-0 w-full text-center text-white text-sm font-medium bg-gradient-to-t  from-black/100 via-black/50 to-transparent pt-7 pb-2">
                    {item.name}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              alt="Enlarged"
              className="max-h-[80vh] max-w-[90vw] rounded-xl shadow-2xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Products;

