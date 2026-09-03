"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/app/lib/animations";

interface Skill {
  name: string;
}

interface Experience {
  role: string;
  company: string;
  description: string;
}

interface SkillsExperienceProps {
  skills: Skill[];
  experiences: Experience[];
}

// Extra execution tags for the infinite marquee carousel
const executionTags = [
  "WORDPRESS",
  "SHOPIFY",
  "SEO",
  "SAAS UI",
  "DASHBOARDS",
  "PRODUCT SYSTEMS",
  "REACT",
  "NEXT.JS",
  "NODE.JS",
  "TYPESCRIPT",
];

const SkillsExperience = ({
  skills,
  experiences,
}: SkillsExperienceProps) => {
  return (
    <section id="skills" className="bg-[#070707] text-white py-24 px-6 md:px-12 lg:px-20 relative border-t border-[#1A1A1A] overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* SKILLS / EXECUTION SYSTEM SECTION */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-8"
        >
          <div>
            <span className="text-xs font-bold tracking-widest text-[#C5A059] uppercase block mb-2">
              EXECUTION SYSTEM
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Modern stack. Practical execution.
            </h2>
            <p className="mt-4 text-gray-400 text-sm leading-relaxed max-w-2xl">
              Frontend, backend, CMS, commerce, and SEO foundations — structured into a clear build process.
            </p>
          </div>

          <div className="space-y-4">
            {/* TOP ROW: STATIC BADGES */}
            <div className="flex flex-wrap gap-2.5">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-xl text-xs font-bold tracking-wider text-white bg-[#101010] border border-[#222222] shadow-sm uppercase hover:border-[#C5A059]/60 hover:text-[#E6C387] transition-colors cursor-default"
                >
                  {skill.name}
                </span>
              ))}
            </div>

            {/* BOTTOM ROW: INFINITE MARQUEE CAROUSEL */}
            <div className="relative w-full overflow-hidden rounded-xl bg-[#101010] border border-[#222222] py-3.5 shadow-md">
              <div className="absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-[#101010] to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-[#101010] to-transparent z-10 pointer-events-none" />

              <motion.div
                className="flex whitespace-nowrap gap-6 w-max"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  repeat: Infinity,
                  ease: "linear",
                  duration: 20,
                }}
              >
                {[...executionTags, ...executionTags].map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-extrabold tracking-widest text-gray-300 uppercase px-2 hover:text-[#C5A059] transition-colors cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* EXPERIENCE SECTION (2 CARDS PER ROW) */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-8 pt-6 border-t border-[#1A1A1A]"
        >
          <div>
            <span className="text-xs font-bold tracking-widest text-[#C5A059] uppercase block mb-2">
              CAREER
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Experience
            </h2>
          </div>

          {/* 2-COLUMN GRID FOR EXPERIENCES */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="p-8 rounded-3xl bg-[#101010] border border-[#222222] hover:border-[#C5A059]/40 transition-colors shadow-xl flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white leading-snug">
                    {exp.role}
                  </h3>
                  <p className="text-xs font-bold text-[#C5A059] tracking-wide">
                    {exp.company}
                  </p>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed font-normal">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default SkillsExperience;