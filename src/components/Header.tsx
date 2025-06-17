"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; // Icons for hamburger

import Logo from "../../public/logo/Logo.png";

const links = [
  { href: "#home", label: "Home" }, //done
  { href: "#about", label: "About Us" }, //done
  { href: "#services", label: "Our Services" },
  { href: "#ourbuyers", label: "Our Buyers" }, //done
  { href: "#products", label: "Products" },
  { href: "#quality", label: "Quality" },
  { href: "#productions", label: "Productions" },
  { href: "#sustainability", label: "Sustainability" },
  { href: "#contact", label: "Contact Us" }, //almost done
];

function Header() {
  const [small, setSmall] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSmall(window.scrollY > 50);
      const sections = links.map((link) => link.href.slice(1));
      let currentSection = "home";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 100) {
          currentSection = section;
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setMenuOpen(false);
    if (href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const sectionId = href.slice(1);
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setActiveSection(sectionId);
      }
    }
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`top-0 z-[12000] w-full ${
        small ? "p-2 sticky backdrop-blur-md bg-[rgba(255,255,255,0.6)]" : "fixed bg-white border-b-5 border-yellow-600"
      } transition-all duration-300`}
    >
      <motion.div
        animate={{
          padding: small ? "0rem 1.5rem" : "0.75rem 2rem",
          borderRadius: small ? "5rem" : "0rem",
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className={`flex items-center justify-between w-full px-6 md:px-10 py-2`}
      >
        <Link href="/" onClick={() => handleLinkClick("#home")}>
          <Image
            src={Logo}
            alt="Logo"
            width={small ? 60 : 100}
            height={small ? 60 : 100}
            className="transition-all duration-300"
          />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center space-x-6">
          {links.map(({ href, label }) => (
            <motion.li key={href} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link
                href={href}
                scroll={false}
                onClick={() => handleLinkClick(href)}
                className={`hover:font-bold ${
                  activeSection === href.slice(1) ? "text-amber-600 font-bold" : "text-gray-800"
                } transition-colors duration-300`}
              >
                {label}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-800 z-[12001]"
        >
          {menuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </motion.div>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -200, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed top-20 left-0 right-0 bg-white z-[11999] shadow-md px-6 py-4 space-y-4"
          >
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  scroll={false}
                  onClick={() => handleLinkClick(href)}
                  className={`block text-lg ${
                    activeSection === href.slice(1) ? "text-blue-600 font-bold" : "text-gray-800"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Header;
