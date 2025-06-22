"use client";
import React, { useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt, FaMapPin, FaUserTie } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const FreeMap = dynamic(() => import("../../components/FreeMap"), {
  ssr: false,
});

gsap.registerPlugin(ScrollTrigger);

function ContactUs() {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const elements = sectionRef.current.querySelectorAll(".fade-in");

      elements.forEach((el, index) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.2,
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);



  return (
    <div
      ref={sectionRef}
      className="relative h-auto md:h-screen w-full overflow-hidden pt-20"
    >
      
      <div className="w-full h-full flex md:flex-row flex-col justify-between items-center mb-20  px-4 gap-4">
        <div className="relative flex flex-col justify-center items-center h-full w-full overflow-hidden ">
          <img
            src="/assets/contact.png"
            alt="Contact Us"
            className="contactTone w-full h-full mb-2 object-cover rounded-2xl"
          />
          <div className="absolute center flex-col gap-2 text-center p-4">
            <h2 className="text-6xl md:text-8xl font-bold max text-white drop-shadow-md">
              Let's Connect
            </h2>
            <p className="text-center w-3/4 text-xs md:text-xl text-neutral-300">
              Have a question or want to work with us? Reach out — we’re here to help.
            </p>
          </div>
          <div id="overlay" className="absolute w-full h-full z-[100] overlay" />
        </div>

        <div className="w-full h-full px-0 py-2">
          <div className="h-full flex flex-col justify-center gap-6 md:gap-10 rounded-2xl">
            <div className="center px-4 rounded-2xl">
              <h2 className="text-6xl md:text-8xl mt-6 my-4 md:my-10 font-bold leading-10 text-blue-950 max">
                Contact Info
              </h2>
            </div>

            <div className="flex items-center px-2 md:px-4 rounded-2xl">
              <IoIosMail className="mx-4 text-blue-700" size={25} />
              <a href="mailto:raansports@gmail.com" className="text-md md:text-xl hover:text-blue-800 transition-colors duration-200">
                raansports@gmail.com
              </a>
            </div>

            <div className="flex items-center px-2 md:px-4 rounded-2xl">
              <FaPhoneAlt className="mx-[18px] text-blue-700" size={20} />
              <a href="tel:+8801818426501" className="text-md md:text-xl hover:text-blue-800 transition-colors duration-200">
                +880 1818 426 501
              </a>
            </div>

            <div className="flex flex-col px-2 md:px-4 rounded-2xl overflow-hidden h-auto">
              <div className="flex items-start">
                <FaMapPin className="mx-4 my-1 text-blue-700" size={25} />
                <p className="text-md md:text-xl">
                  Raan Sports Knit Wear Ltd. Plot- B/167-168, BSCIC- I/A, <br />
                  Sashongaon, Fatullah, Narayanganj, Bangladesh.
                </p>
              </div>
              <div className="mt-2 rounded-2xl overflow-hidden mx-2 md:mx-10 border-2 border-blue-100">
                <FreeMap />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;

