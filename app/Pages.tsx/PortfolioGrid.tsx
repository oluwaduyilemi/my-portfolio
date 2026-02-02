"use client";

import Image from "next/image";
import { ExternalLink} from "lucide-react";
import AnimateIn from "@/app/componenets/ui/AnimateIn";

interface Project {
  title: string;
  live: string;
  image: string;
  liveUrl: string;
  stack: string[];
}

const projects: Project[] = [
  {
    title: "Agrivest",
    live: "https://agrivest2.onrender.com/",
    image: "/images/agri.png", 
    liveUrl: "https://agrivest2.onrender.com/",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Alpha Tech Hub",
    live: "https://alphatech.team",
    image: "/images/alpha.png",
    liveUrl: "https://alphatech.team",
    stack: ["Next.js", "TailwindCss", "TypeScript", "API ingretion"],
  },
   {
    title: "VFGL Store",
    live: "https://vfgl-e-commerce-project-ssgx.vercel.app",
    image: "/images/vfgl.png",
    liveUrl: "https://vfgl-e-commerce-project-ssgx.vercel.app",
    stack: ["React", "Recharts", "Css", "Redux", "TypeScript"],
  },
   {
    title: "Paymon",
    live: "https://potfolio-weld.vercel.app/#",
    image: "/images/payon.png",
    liveUrl: "https://potfolio-weld.vercel.app/#",
    stack: ["React", "State management", "Responsive UI", "Recharts"],
  },
  // Add more projects here
];

const PortfolioGrid = () => {
  return (
    <section className="bg-[#050505] pt-15 md:px-4">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Header */}
        <div className="mb-16">
          <AnimateIn direction="left">
            <h2 className="text-4xl  font-bold tracking-tight md:text-4xl">
              My Projects
            </h2>
            <div className="mt-3 h-1.5 w-20 rounded-full bg-blue-600" />
          </AnimateIn>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {projects.map((project, index) => (
            <AnimateIn key={index} delay={index * 0.1} direction="up">
              <div className="group flex flex-col">
                
                {/* Image Container with Hover Effect */}
                <div className="relative aspect-16/10 w-full overflow-hidden rounded-4xl bg-gray-100 shadow-lg">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay - Appears on Hover */}
                  <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/40 opacity-0 backdrop-blur-[2px] transition-all duration-300 group-hover:opacity-100">
                    <div className="flex gap-4 translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                      <a 
                        href={project.liveUrl} 
                        target="_blank"
                        className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-gray-900 shadow-xl transition-transform hover:scale-110 active:scale-95"
                      >
                        <ExternalLink className="h-6 w-6" />
                      </a>
                    
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="mt-6 px-2">
                  <div className="flex items-center justify-between">
                
                    <div className="flex items-baseline gap-5 justify-between">
                      <h3 className="mt-2 text-2xl font-bold text-gray-200">
                        {project.title}
                      </h3>
                      <a 
                        href={project.live} 
                        target="_blank"
                      >
                        <h1 className="underline hover:text-blue-500 flex items-center gap-1">live demo 
                           <ExternalLink className="h-4 w-4" />
                        </h1>
                      </a>
                      </div>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span 
                        key={tech} 
                        className="rounded-lg bg-white px-3 py-1 text-xs font-medium text-black transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;