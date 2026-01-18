"use client";

import { Monitor, Smartphone, Zap, BarChart3 } from "lucide-react";
import AnimateIn from "@/app/componenets/ui/AnimateIn";

const services = [
  {
    title: "WEB DEVELOPMENT",
    description: "I build modern, scalable websites using React, Next.js, TypeScript, and Tailwind. From landing pages to full platforms, I deliver fast, responsive, and accessible interfaces.",
    icon: Monitor,
    variant: "light",
    tags: []
  },
  {
    title: "APP DEVELOPMENT",
    description: "I develop clean, responsive applications with smooth interactions and intuitive user flows. I focus on modern UI practices to ensure your app feels polished and engaging on all devices.",
    icon: Smartphone,
    variant: "light",
    tags: []
  },
  {
    title: "MVP & Product Prototyping",
    description: "I help startups validate ideas by building Minimum Viable Products (MVPs) quickly. I take your concept from a rough sketch to a functional product ready for investors.",
    icon: Zap,
    variant: "light",
    tags: ["MVP Strategy", "Rapid Prototyping"]
  },
  {
    title: "Business Site Optimization",
    description: "I don't just build; I improve. I optimize existing sites for speed, SEO, and mobile responsiveness to ensure your business reaches its maximum audience.",
    icon: BarChart3,
    variant: "light",
    tags: ["SEO", "Performance", "Accessibility"]
  }
];

const WhatIDo = () => {
  return (
    <section className="bg-[#050505] pb-20 pt-26 md:px-4">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Header Section */}
        <div className="mb-16 max-w-3xl m-auto">
          <AnimateIn direction="left">
            <h2 className="text-4xl text-center font-bold tracking-tight">
              What I do
            </h2>
            <p className="mt-6 text-lg text-center leading-relaxed text-gray-200">
              I design and build fast, responsive, and user-focused web interfaces. My work combines modern frontend engineering with clean UI execution to deliver websites and applications that look great, feel smooth, and perform reliably across all devices.
            </p>
          </AnimateIn>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isDark = service.variant === "dark";

            return (
              <AnimateIn key={index} delay={index * 0.1} direction="up">
                <div 
                  className={`group relative flex h-full flex-col rounded-4xl p-8 transition-all duration-500 hover:border-blue-500/30 hover:bg-white/10 hover:-translate-y-2 ${
                    isDark 
                    ? "bg-[#0A0A0A] text-white " 
                    : "border border-white/5 bg-white/5 text-gray-900  "
                  }`}
                >
                  {/* Icon Box */}
                  <div className={`mb-8 flex h-14 w-14 items-center bg-blue-500/10 justify-center rounded-2xl transition-transform duration-500 group-hover:rotate-12 ${
                    isDark ? "bg-white/10" : "bg-blue-100"
                  }`}>
                    <Icon className={`h-7 w-7 ${isDark ? "text-orange-400" : "text-blue-500"}`} />
                  </div>

                  {/* Content */}
                  <h3 className={`mb-4 text-2xl font-bold uppercase tracking-tight ${isDark ? "text-white" : "text-gray-200"}`}>
                    {service.title}
                  </h3>
                  <p className={`mb-8 flex-1 leading-relaxed ${isDark ? "text-gray-400" : "text-gray-300"}`}>
                    {service.description}
                  </p>             
                </div>
              </AnimateIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;