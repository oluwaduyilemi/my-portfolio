import Navbar from "./componenets/Navbar";
import AboutMe from "./Pages.tsx/AboutMe";
import Hero from "./Pages.tsx/Hero";
import PortfolioGrid from "./Pages.tsx/PortfolioGrid";
import SkillsExperience from "./Pages.tsx/SkillsExperience";
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
    company: "Edupathway (Remote)",
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
    role: "Frontend Intern",
    company: "Alpha Tech Hub ",
    description:
      "Worked closely with designers and backend engineers to build responsive interfaces, integrate APIs, and improve overall UI consistency across products.",
  },
];

export default function Home() {
  return (
    <div className="">
      <section id="home">
          <h1 > <Hero/></h1>
        </section>

        <section id="about">
          <h1> <AboutMe/></h1>
        </section>

       <section id="experience">
          <h1> <SkillsExperience
          skills={skillsData}
          experiences={experienceData}
        /></h1>
        </section>

        <section id="projects">
          <h1><PortfolioGrid/></h1>
        </section>
         <section id="services">
       <h1> 
        <WhatIDo/>
        </h1>
        </section>

        <section id="contact">
          <h1><Navbar/></h1>
        </section>
     
    </div>
  );
}
