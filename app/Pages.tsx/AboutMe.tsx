"use client";

import { Code2, Sparkles, Zap, Download } from "lucide-react";
import AnimateIn from "@/app/componenets/ui/AnimateIn";

const expertiseCards = [
  {
    title: "Expertise",
    desc: "Specialized in building scalable web applications with modern technologies and best practices.",
    icon: Code2,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    colSpan: "md:col-span-2",
  },
  {
    title: "Clean Code",
    desc: "Writing maintainable, well-documented code that scales.",
    icon: Sparkles,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    colSpan: "md:col-span-1",
  },
  {
    title: "Performance",
    desc: "Optimizing for speed and efficiency in every project.",
    icon: Zap,
    color: "text-blue-600",
    bg: "bg-blue-600/10",
    colSpan: "md:col-span-1",
  },
];

const AboutMe = () => {
  return (
    <section
      id="about"
      className="overflow-hidden bg-[#050505] py-20 text-white md:px-4"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

          {/* LEFT CONTENT */}
          <div className="flex flex-col space-y-8">
            <AnimateIn direction="left">
              <div className="mb-16">
                     <AnimateIn direction="left">
                       <h2 className="text-4xl font-bold tracking-tight ">
                        About me
                       </h2>
                       <div className="mt-2 h-1 w-18 rounded-full bg-blue-600" />
                     </AnimateIn>
                   </div>
              <h1 className="text-4xl font-bold leading-tight md:text-6xl">
                Crafting Digital <br />
                <span className="text-gray-300">
                  Experiences That Matter
                </span>
              </h1>
            </AnimateIn>

            <AnimateIn delay={0.2} direction="left">
              <div className="space-y-6 text-lg font-medium text-gray-400">
                <p>
                  I’m a passionate React developer with over 4 years of experience
                  building scalable, performant web applications.
                </p>
                <p>
                  My expertise spans React, Next.js, TypeScript, and modern UI
                  systems.
                </p>
              </div>
            </AnimateIn>

            {/* DOWNLOAD RESUME */}
            <AnimateIn delay={0.4} direction="left">
              <a
                href="/images/Favour_Bakare_Resume_1.pdf"
                download
                className="inline-flex w-fit items-center gap-3 rounded-full border border-blue-500/30 bg-blue-500/10 px-6 py-3 text-sm font-medium text-blue-400 transition hover:bg-blue-500/20"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </AnimateIn>
          </div>

          {/* RIGHT CONTENT */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

            {/* TOP CARDS */}
            {expertiseCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <AnimateIn
                  key={i}
                  delay={0.3 + i * 0.1}
                  direction="right"
                  className={card.colSpan}
                >
                  <div className="h-full rounded-3xl border border-white/5 bg-white/5 p-8 transition hover:border-blue-500/30 hover:bg-white/10">
                    <div
                      className={`mb-6 flex h-12 w-12 items-center justify-center rounded-xl ${card.bg} ${card.color}`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mb-3 text-xl font-bold">
                      {card.title}
                    </h3> 
                    <p className="text-gray-300">{card.desc}</p>
                  </div>
                </AnimateIn>
              );
            })}

           
   <AnimateIn delay={0.6} direction="up" className="md:col-span-2">
  <div className="flex flex-col h-57 py-3 gap-6 rounded-3xl border border-white/5 bg-white/5 md:flex-row md:items-center md:justify-between">

    <div className="flex flex-col items-center gap-7 text-center">
      <p className="text-3xl font-bold text-blue-500">100%</p>
      <p className="mt-1 text-sm uppercase tracking-wider text-gray-200">
        Client Satisfaction
      </p>
    </div>

    <div className="hidden h-10 w-px bg-gray-400 md:block" />

    <div className="flex flex-col gap-8 items-center text-center px-2">
      <p className="text-3xl font-bold text-blue-500">24/7</p>
      <p className="mt-1 text-sm uppercase tracking-wider text-gray-200">
        Support
      </p>
    </div>

  </div>
</AnimateIn>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
