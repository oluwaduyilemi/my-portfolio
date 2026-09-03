"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FileText, ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      id="home" 
      className="min-h-screen bg-[#070707] text-white pt-28 pb-16 px-6 md:px-12 lg:px-20 flex items-center justify-center relative overflow-hidden"
    >
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 space-y-6"
        >
          {/* Subtitle Badge */}
          <div className="flex items-center gap-3">
            <span className="w-8 h-[2px] bg-[#C5A059]" />
            <span className="text-xs font-bold tracking-widest text-[#C5A059] uppercase">
              Full-Stack Developer • Product Builder
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight leading-[1.1] text-white">
            Hi, I&apos;m Favour, <br />
            Your Next Senior <br />
            Frontend Engineer
          </h1>

          {/* Subtitle Text */}
          <p className="text-gray-400 text-base sm:text-lg max-w-xl font-normal leading-relaxed">
            I build scalable, high-performance frontend experiences, clean websites, SaaS tools, and business systems built for real use.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              onClick={() => scrollToSection("contact")}
              className="px-7 py-3.5 rounded-full text-xs font-bold text-black bg-gradient-to-r from-[#C5A059] via-[#E6C387] to-[#997736] hover:brightness-110 shadow-[0_0_20px_rgba(197,160,89,0.3)] transition-all uppercase tracking-wider cursor-pointer"
            >
              Start a Project
            </button>

            <button
              onClick={() => scrollToSection("projects")}
              className="px-6 py-3.5 rounded-full text-xs font-bold text-white bg-[#121212] border border-[#2B2B2B] hover:border-[#C5A059] flex items-center gap-2 transition-all uppercase tracking-wider group cursor-pointer"
            >
              View Projects 
              <ArrowRight className="w-4 h-4 text-gray-300 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* REVIEW / DOWNLOAD CV LINK */}
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Favour_CV.pdf"
              className="px-6 py-3.5 rounded-full text-xs font-bold text-white bg-[#121212] border border-[#2B2B2B] hover:border-[#C5A059] hover:text-[#C5A059] flex items-center gap-2 transition-all uppercase tracking-wider cursor-pointer"
            >
              <FileText className="w-4 h-4 text-[#C5A059]" />
              Review CV
            </a>
          </div>
        </motion.div>

        {/* RIGHT IMAGE CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          className="lg:col-span-5 relative flex justify-center"
        >
          <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-3xl overflow-hidden border border-[#222222] bg-[#121212] shadow-2xl group">
            
            {/* Top Experience Badge */}
            <div className="absolute top-6 left-6 z-20 bg-black/50 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse" />
              <span className="text-[10px] font-bold text-[#C5A059] tracking-widest uppercase">
                Frontend Developer • 4+ Years
              </span>
            </div>

            {/* Profile Image */}
            <Image
              src="/images/newhero.jpeg" 
              alt="Favour - Senior Frontend Engineer"
              fill
              priority
              className="object-cover object-center filter grayscale-[15%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
            />

            {/* Subtle Gradient Shadow Layer */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-transparent to-transparent opacity-70 pointer-events-none" />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;