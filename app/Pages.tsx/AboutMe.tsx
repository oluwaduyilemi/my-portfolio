

"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Sparkles, Zap } from "lucide-react";
import { fadeUp, staggerContainer } from "@/app/lib/animations";

export default function About() {
  return (
    <section id="about" className="bg-[#070707] text-white py-24 px-6 md:px-12 lg:px-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT COLUMN - CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6 space-y-6"
          >
            {/* Section Header */}
            <div>
              <h2 className="text-2xl font-bold tracking-wide text-white">About Me</h2>
              <div className="w-12 h-1 bg-gradient-to-r from-[#C5A059] to-[#997736] mt-2 rounded-full" />
            </div>

            {/* Main Headline */}
            <h3 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight text-white">
              Crafting Digital Experiences That Matter
            </h3>

            {/* Paragraphs */}
            <div className="space-y-4 text-gray-400 text-base sm:text-lg leading-relaxed font-normal">
              <p>
                I&apos;m a passionate React developer with over 4 years of experience building scalable, performant web applications.
              </p>
              <p>
                My expertise spans React, Next.js, TypeScript, and modern UI systems.
              </p>
            </div>
          </motion.div>

          {/* RIGHT COLUMN - FEATURE CARDS */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {/* CARD 1: EXPERTISE */}
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="p-6 rounded-2xl bg-[#121212] border border-[#222222] hover:border-[#C5A059]/50 transition-all shadow-xl group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#1E1A11] border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] mb-5 group-hover:scale-110 transition-transform">
                <Code2 className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Expertise</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                Specialized in building scalable web applications with modern technologies and best practices.
              </p>
            </motion.div>

            {/* CARD 2: CLEAN CODE */}
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="p-6 rounded-2xl bg-[#121212] border border-[#222222] hover:border-[#C5A059]/50 transition-all shadow-xl group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#1E1A11] border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] mb-5 group-hover:scale-110 transition-transform">
                <Sparkles className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Clean Code</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                Writing maintainable, well-documented code that scales.
              </p>
            </motion.div>

            {/* CARD 3: PERFORMANCE */}
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="p-6 rounded-2xl bg-[#121212] border border-[#222222] hover:border-[#C5A059]/50 transition-all shadow-xl group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#1E1A11] border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] mb-5 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Performance</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                Optimizing for speed and efficiency in every project.
              </p>
            </motion.div>

            {/* CARD 4: STATS */}
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="p-6 rounded-2xl bg-[#121212] border border-[#222222] hover:border-[#C5A059]/50 transition-all shadow-xl flex items-center justify-between"
            >
              <div>
                <span className="text-3xl font-extrabold bg-gradient-to-r from-[#C5A059] via-[#E6C387] to-[#997736] bg-clip-text text-transparent block">
                  100%
                </span>
                <span className="text-[11px] font-bold text-gray-400 tracking-wider uppercase mt-1 block">
                  Client Satisfaction
                </span>
              </div>

              <div className="h-10 w-[1px] bg-[#222222]" />

              <div>
                <span className="text-3xl font-extrabold bg-gradient-to-r from-[#C5A059] via-[#E6C387] to-[#997736] bg-clip-text text-transparent block">
                  24/7
                </span>
                <span className="text-[11px] font-bold text-gray-400 tracking-wider uppercase mt-1 block">
                  Support
                </span>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}