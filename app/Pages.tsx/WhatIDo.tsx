

"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Custom business websites, landing pages, and portfolios built with React and Next.js for performance and clarity.",
  },
  {
    number: "02",
    title: "App Development",
    description:
      "SaaS platforms, dashboards, internal tools, and workflow apps with clean architecture and real product logic.",
  },
  {
    number: "03",
    title: "WordPress Development",
    description:
      "Custom WordPress websites with structured CMS editing flows, clean code, and SEO-ready page architecture.",
  },
  {
    number: "04",
    title: "Shopify Development",
    description:
      "Conversion-focused Shopify storefronts with theme customization, product clarity, and practical store setups.",
  },
  {
    number: "05",
    title: "SEO",
    description:
      "Technical SEO audits, semantic structure, metadata, page hierarchy, and search-ready site architecture.",
  },
];

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="services" className="bg-[#070707] text-white py-24 px-6 md:px-12 lg:px-20 relative">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#1A1A1A] pb-8">
          <div>
            <span className="text-xs font-bold tracking-widest text-[#C5A059] uppercase block mb-2">
              SERVICES
            </span>
            <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
              What I build.
            </h2>
          </div>
          <p className="text-gray-400 text-base max-w-md font-normal leading-relaxed">
            Websites, apps, CMS systems, stores, SEO foundations, and product interfaces.
          </p>
        </div>

        {/* SERVICES GRID CONTAINED CARD */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="bg-[#101010] border border-[#222222] rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-[#222222] shadow-2xl"
        >
          {services.map((service) => (
            <motion.div
              key={service.number}
              variants={itemVariants}
              whileHover={{ backgroundColor: "#161616" }}
              className="p-8 flex flex-col justify-between space-y-8 group transition-colors relative cursor-pointer"
            >
              {/* TOP ROW: NUMBER & ARROW BUTTON */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#C5A059] tracking-widest">
                  {service.number}
                </span>
                <div className="w-9 h-9 rounded-full bg-[#1A1A1A] border border-[#333333] flex items-center justify-center group-hover:border-[#C5A059] group-hover:bg-[#C5A059] transition-all">
                  <ArrowUpRight className="w-4 h-4 text-gray-300 group-hover:text-black group-hover:rotate-45 transition-transform duration-300" />
                </div>
              </div>

              {/* BOTTOM CONTENT: TITLE & DESCRIPTION */}
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-white group-hover:text-[#E6C387] transition-colors leading-snug">
                  {service.title}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed font-normal">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}