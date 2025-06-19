"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

const buyers = [
  { name: "GATE", logo: "/Buyers/GATE.jpeg" },
  { name: "Colloky", logo: "/Buyers/Colloky.png" },
  { name: "Komex", logo: "/Buyers/Komex.webp" },
  { name: "Nautica", logo: "/Buyers/Nautica.png" },
  { name: "SONAE", logo: "/Buyers/SONAE.png" },
  { name: "Stokomani", logo: "/Buyers/Stokomani.png" },
  { name: "TinyButton", logo: "/Buyers/TinyButton.png" },
];

export default function OurBuyers() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const marquee = marqueeRef.current;
      if (!marquee) return;

      gsap.to(marquee, {
        xPercent: -50,
        duration: 30,
        ease: "linear",
        repeat: -1,
      });
    }, marqueeRef);

    return () => ctx.revert();
  }, []);

  const repeatedBuyers = [...buyers, ...buyers]; // Duplicate for loop

  return (
    <section className="flex flex-col justify-center items-center h-screen w-full py-16 bg-neutral-100" id="buyers">
      <h2 className="text-4xl md:text-9xl font-bold text-center mb-10 text-blue-950 max">
        Our Buyers
      </h2>
      <div className="relative w-full overflow-hidden">
        <div
          ref={marqueeRef}
          className="flex whitespace-nowrap w-max gap-4 px-10"
        >
          {repeatedBuyers.map((buyer, index) => (
            <div
              key={index}
              className="relative w-[30vw] md:w-[20vw] h-auto aspect-square flex-shrink-0 bg-white rounded-xl flex items-center justify-center p-4 md:p-10"
            >
              <Image
                src={buyer.logo}
                alt={buyer.name}
                width={500}
                height={500}
                className="object-contain hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
