import Navbar from "./componenets/Navbar";
import AboutMe from "./Pages.tsx/AboutMe";
import Hero from "./Pages.tsx/Hero";
import PortfolioGrid from "./Pages.tsx/PortfolioGrid";
import SkillsExperience from "./Pages.tsx/SkillsExperience";
import Testimonials from "./Pages.tsx/Testimonials";
import WhatIDo from "./Pages.tsx/WhatIDo";

const skillsData = [
  { name: "React.js" },
  { name: "Next.js" },
  { name: "TypeScript" },
  { name: "JavaScript" },
  { name: "TailwindCSS" },
  { name: "Redux" },
  { name: "React Query" },
  { name: "REST APIs" },
  { name: "HTML5" },
  { name: "CSS3" },
  { name: "GraphQL" },
  { name: "GitHub" },
];

const experienceData = [
  {
    role: "Frontend Engineer",
    company: "Myedupathway (Remote)",
    description:
      "Engineered a rebranded company website with React and TypeScript, improving cross-browser reliability by 40%. Built reusable UI components and improved SEO and accessibility scores.",
  },
  {
    role: "Frontend Engineer",
    company: "AgriVest (Remote)",
    description:
      "Developed core features for AgriVest, an agritech investment platform enabling users to fund and manage farm projects. Designed reusable UI components and optimized performance, accelerating feature rollout and supporting a growing user base.",
  },
  {
    role: "Frontend Engineer",
    company: "GCS Commodities (Remote)",
    description:
      "Built a localized corporate web application for international commodity exports. Integrated dynamic internationalization, performance optimization, and responsive design systems.",
  },
  {
    role: "Frontend Intern",
    company: "Alpha Tech Hub",
    description:
      "Worked closely with designers and backend engineers to build responsive interfaces, integrate APIs, and improve overall UI consistency across products.",
  },
];

export default function Home() {
  return (
    <main className="bg-white dark:bg-[#070707] text-gray-900 dark:text-white transition-colors duration-300 min-h-screen">
      <Navbar />

      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <AboutMe />
      </section>

      <section id="experience">
        <SkillsExperience skills={skillsData} experiences={experienceData} />
      </section>

      <section id="projects">
        <PortfolioGrid />
      </section>

      <section id="services">
        <WhatIDo />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>
    </main>
  );
}