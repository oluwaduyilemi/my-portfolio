"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Experience", id: "experience" },
  { name: "Projects", id: "projects" },
  { name: "Services", id: "services" },
  { name: "Contact", id: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4"
    >
      {/* Floating Glass Capsule */}
      <nav className="w-full max-w-6xl bg-[#121212]/80 backdrop-blur-md border border-[#262626] rounded-full px-6 py-3 flex items-center justify-between shadow-2xl">
        
        {/* LOGO */}
        <div
          onClick={() => scrollToSection("home")}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#D4AF37] to-[#FFF5C0] flex items-center justify-center font-bold text-black text-xs group-hover:scale-105 transition-transform">
            D
          </div>
          <span className="text-xs font-bold tracking-widest text-[#D4AF37]">
            DUYI CODE
          </span>
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className="text-xs font-semibold text-gray-300 hover:text-[#D4AF37] tracking-wider transition-colors uppercase"
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* DESKTOP ACTION */}
        <div className="hidden md:flex items-center">
          <button
            onClick={() => scrollToSection("contact")}
            className="px-5 py-2 text-xs font-bold text-black bg-gradient-to-r from-[#C5A059] via-[#E6C387] to-[#997736] rounded-full hover:brightness-110 shadow-[0_0_15px_rgba(197,160,89,0.3)] transition-all uppercase tracking-wider"
          >
            HIRE ME
          </button>
        </div>

        {/* MOBILE TOGGLE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-300 hover:text-[#D4AF37]"
          aria-label="Toggle Menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* MOBILE MENU DROPDOWN */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-16 left-4 right-4 bg-[#121212]/95 backdrop-blur-md border border-[#262626] rounded-2xl p-6 shadow-2xl md:hidden flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className="text-left text-sm font-semibold text-gray-300 hover:text-[#D4AF37] tracking-wider transition-colors uppercase py-1"
              >
                {link.name}
              </button>
            ))}
            <div className="pt-2 border-t border-[#262626]">
              <button
                onClick={() => scrollToSection("contact")}
                className="w-full py-2.5 text-xs font-bold text-black bg-gradient-to-r from-[#C5A059] via-[#E6C387] to-[#997736] rounded-full hover:brightness-110 transition-all uppercase tracking-wider text-center"
              >
                HIRE ME
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}