"use client";
import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { IoIosMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { FaMapPin } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";

const FreeMap = dynamic(() => import("../../components/FreeMap"), {
  ssr: false,
});
function ContactUs() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="h-full md:h-screen flex md:flex-row flex-col justify-center items-center mt-10 snap-start"
    >
      <div className="relative flex flex-col justify-center items-center h-full w-full px-4 py-0 md:py-4 md:px-4 overflow-hidden">
        <img
          src="/assets/contact.png"
          alt="Contact Us"
          className="contactTone w-full md:h-[92%] h-[75%] object-cover rounded-2xl"
        />
        <h2 className="absolute text-6xl md:text-8xl font-bold max text-white">
          Contact Us
        </h2>
        <div id="overlay" className="absolute w-full h-full z-[100] overlay" />
      </div>

      <div className="h-auto w-full max-w-[1240px] p-4 md:p-2 flex flex-col gap-2">
        <div className="flex items-center bg-neutral-200 px-4 py-6 md:px-4 md:py-10 rounded-2xl h-auto bg-gradient-to-r from-[#e3f1ff] to-[#fff0df]">
            <IoIosMail className="mx-4" size={40} />
            <p className="text-xl ">raansports@gmail.com</p>
        </div>

        <div className="flex items-center bg-neutral-200 px-4 py-6 md:px-4 md:py-10 rounded-2xl h-auto bg-gradient-to-r from-[#e3f1ff] to-[#fff0df]">
            <FaPhone className="mx-5" size={30} />
            <p className="text-xl ">+880 1818 426 501</p>
        </div>

        <div className="flex flex-col bg-gradient-to-r from-[#e3f1ff] to-[#fff0df] p-4 rounded-2xl overflow-hidden h-auto">
          <div className="flex items-center">
            <FaMapPin className="mx-4" size={40} />
            <p>
              Raan Sports Knit Wear Ltd. <br />
              Plot- B/167-168, BSCIC- I/A, Sashongaon, <br /> Fatullah,
              Narayanganj, Bangladesh
            </p>
          </div>
          <div className="mt-4 rounded-md overflow-hidden">
            <FreeMap  />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ContactUs;
