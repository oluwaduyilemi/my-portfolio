// "use client";

// import Image from "next/image";
// import { ExternalLink} from "lucide-react";
// import AnimateIn from "@/app/componenets/ui/AnimateIn";

// interface Project {
//   title: string;
//   live: string;
//   image: string;
//   liveUrl: string;
//   stack: string[];
// }

// const projects: Project[] = [
//   {
//     title: "Gabon Cacao & Sugar Company (GCS)",
//     live: "https://www.gaboncs-co.com/en",
//     image: "/images/OIP.webp", 
//     liveUrl: "https://www.gaboncs-co.com/en",
//     stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
//   },
//   {
//     title: "Myedupathway",
//     live: "https://www.myedupathway.com/",
//     image: "/images/edu.jpg", 
//     liveUrl: "https://www.myedupathway.com/",
//     stack: ["Vue.js", "Rust", "TypeScript", "Tailwind CSS", "Framer Motion"],
//   },
//   {
//     title: "Alpha Tech Hub",
//     live: "https://alphatech.team",
//     image: "/images/alpha.png",
//     liveUrl: "https://alphatech.team",
//     stack: ["Next.js", "TailwindCss", "TypeScript", "API ingretion"],
//   },
//    {
//     title: "VFGL Store",
//     live: "https://vfgl-e-commerce-project-ssgx.vercel.app",
//     image: "/images/vfgl.png",
//     liveUrl: "https://vfgl-e-commerce-project-ssgx.vercel.app",
//     stack: ["React", "Recharts", "Css", "Redux", "TypeScript"],
//   },
//    {
//     title: "Paymon",
//     live: "https://potfolio-weld.vercel.app/#",
//     image: "/images/payon.png",
//     liveUrl: "https://potfolio-weld.vercel.app/#",
//     stack: ["React", "State management", "Responsive UI", "Recharts"],
//   },
//   // Add more projects here
// ];

// const PortfolioGrid = () => {
//   return (
//     <section className="bg-[#050505] pt-15 md:px-4">
//       <div className="mx-auto max-w-7xl px-6">
        
//         {/* Header */}
//         <div className="mb-16">
//           <AnimateIn direction="left">
//             <h2 className="text-4xl  font-bold tracking-tight md:text-4xl">
//               My Projects
//             </h2>
//             <div className="mt-3 h-1.5 w-20 rounded-full bg-blue-600" />
//           </AnimateIn>
//         </div>

//         {/* Grid */}
//         <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
//           {projects.map((project, index) => (
//             <AnimateIn key={index} delay={index * 0.1} direction="up">
//               <div className="group flex flex-col">
                
//                 {/* Image Container with Hover Effect */}
//                 <div className="relative aspect-16/10 w-full overflow-hidden rounded-4xl bg-gray-100 shadow-lg">
//                   <Image
//                     src={project.image}
//                     alt={project.title}
//                     fill
//                     className="object-cover transition-transform duration-700 group-hover:scale-110"
//                   />
                  
//                   {/* Overlay - Appears on Hover */}
//                   <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/40 opacity-0 backdrop-blur-[2px] transition-all duration-300 group-hover:opacity-100">
//                     <div className="flex gap-4 translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
//                       <a 
//                         href={project.liveUrl} 
//                         target="_blank"
//                         className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-gray-900 shadow-xl transition-transform hover:scale-110 active:scale-95"
//                       >
//                         <ExternalLink className="h-6 w-6" />
//                       </a>
                    
//                     </div>
//                   </div>
//                 </div>

//                 {/* Project Details */}
//                 <div className="mt-6 px-2">
//                   <div className="flex items-center justify-between">
                
//                     <div className="flex items-baseline gap-5 justify-between">
//                       <h3 className="mt-2 text-2xl font-bold text-gray-200">
//                         {project.title}
//                       </h3>
//                       <a 
//                         href={project.live} 
//                         target="_blank"
//                       >
//                         <h1 className="underline hover:text-blue-500 flex items-center gap-1">live demo 
//                            <ExternalLink className="h-4 w-4" />
//                         </h1>
//                       </a>
//                       </div>
//                   </div>

//                   {/* Tech Stack Pills */}
//                   <div className="mt-4 flex flex-wrap gap-2">
//                     {project.stack.map((tech) => (
//                       <span 
//                         key={tech} 
//                         className="rounded-lg bg-white px-3 py-1 text-xs font-medium text-black transition-colors"
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </AnimateIn>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PortfolioGrid;


"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { fadeUp, staggerContainer } from "@/app/lib/animations";

export interface Project {
  title: string;
  category: string;
  description: string;
  liveUrl: string;
  stack: string[];
}

const projects: Project[] = [
  {
    title: "Gabon Cacao & Sugar Company (GCS)",
    category: "ENTERPRISE • AGRICULTURAL COMMODITIES",
    description:
      "A high-performance corporate platform designed for Gabon's leading cocoa and sugar exporter. Features dynamic internationalization, seamless multilingual content delivery, and interactive operational showcases.",
    liveUrl: "https://www.gaboncs-co.com/en",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Myedupathway",
    category: "EDTECH • CAREER & EDUCATION PLATFORM",
    description:
      "An end-to-end educational portal providing personalized career guidance and course discovery. Built with a ultra-fast, modern web stack focusing on dynamic component architecture and seamless search filtering.",
    liveUrl: "https://www.myedupathway.com/",
    stack: ["Vue.js", "Rust", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Alpha Tech Hub",
    category: "AGENCY • TECH INNOVATION HUB",
    description:
      "A modern digital agency and technology ecosystem showcase. Integrates client inquiry pipelines, live API integration services, and highly responsive interface layouts tailored for tech teams.",
    liveUrl: "https://alphatech.team",
    stack: ["Next.js", "Tailwind CSS", "TypeScript", "API Integration"],
  },
  {
    title: "VFGL Store",
    category: "E-COMMERCE • ANALYTICS DASHBOARD",
    description:
      "A full-featured e-commerce platform paired with interactive sales analytics. Features real-time state management for cart/checkout and data visualization charts for inventory tracking.",
    liveUrl: "https://vfgl-e-commerce-project-ssgx.vercel.app",
    stack: ["React", "Recharts", "CSS3", "Redux", "TypeScript"],
  },
  {
    title: "Paymon",
    category: "FINTECH • PAYMENT SYSTEMS UI",
    description:
      "A sleek financial management dashboard designed for tracking transactions, analyzing user payments, and managing digital wallets through interactive charts and custom UI controls.",
    liveUrl: "https://potfolio-weld.vercel.app/#",
    stack: ["React", "State Management", "Responsive UI", "Recharts"],
  },
];

export default function PortfolioGrid() {
  return (
    <section id="projects" className="bg-[#070707] text-white py-24 px-6 md:px-12 lg:px-20 relative border-t border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold tracking-widest text-[#C5A059] uppercase block mb-2">
              FEATURED WORK
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Projects & Case Studies
            </h2>
          </div>
        </div>

        {/* PROJECT ROWS LIST */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="divide-y divide-[#1A1A1A]"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="py-10 first:pt-0 last:pb-0 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start group hover:bg-[#0D0D0D]/50 transition-colors p-4 rounded-2xl"
            >
              {/* LEFT TITLE & CATEGORY SECTION */}
              <div className="lg:col-span-6 space-y-2">
                <span className="text-[11px] font-bold tracking-widest text-[#C5A059] uppercase block">
                  {project.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-[#E6C387] transition-colors leading-snug">
                  {project.title}
                </h3>
              </div>

              {/* RIGHT DESCRIPTION, STACK & ACTION LINK */}
              <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-normal">
                  {project.description}
                </p>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                  {/* TECH STACK PILLS */}
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 rounded-lg text-[10px] font-extrabold tracking-wider text-gray-300 bg-[#121212] border border-[#222222] uppercase"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* VIEW LIVE LINK */}
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider text-white hover:text-[#C5A059] transition-colors uppercase group/link"
                  >
                    VIEW LIVE
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 text-[#C5A059]" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}