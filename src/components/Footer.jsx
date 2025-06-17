"use client";
import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";

function Footer() {
  return (
    <footer className="bg-neutral-200 text-gray-700 mt-16">
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start p-10">

        {/* Logo and Description */}
        <div className="flex flex-col items-start">
          <Image src="/logo/Logo.png" alt="Company Logo" width={160} height={50} />
          <p className="mt-4 text-sm leading-relaxed">
            Raan Sports Knit Wear Ltd. – Trusted global partner in quality knitwear manufacturing.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-2xl font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:underline">About Us</a></li>
            <li><a href="#services" className="hover:underline">Our Services</a></li>
            <li><a href="#productions" className="hover:underline">Productions</a></li>
            <li><a href="#quality" className="hover:underline">Quality Assurance</a></li>
            <li><a href="#contact" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact + Social */}
        <div>
          <h3 className="text-2xl font-semibold mb-2">Contact</h3>
          <p className="text-sm">
            Plot- B/167-168, BSCIC- I/A, Sashongaon, <br />
            Fatullah, Narayanganj, Bangladesh<br />
            Email: raansports@gmail.com<br />
            Phone: +880 1818 426 501
          </p>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full hover:bg-blue-500 transition"
            >
              <FaFacebookF className="text-blue-700 hover:text-white" />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full hover:bg-blue-600 transition"
            >
              <FaLinkedinIn className="text-blue-700 hover:text-white" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="flex justify-center items-center mt-10 text-center text-sm border-t border-gray-300 bg-amber-600 p-4">
        <p>© {new Date().getFullYear()} Raan Sports Knit Wear Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
