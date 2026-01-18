"use client";

import AnimateIn from "@/app/componenets/ui/AnimateIn";

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

const SkillsExperience = ({
  skills,
  experiences,
}: SkillsExperienceProps) => {
  return (
    <section className="bg-[#050505]">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <AnimateIn>
              <h2 className="mb-8 text-3xl font-semibold">
                Skills
              </h2>
            </AnimateIn>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {skills.map((skill, index) => (
                <AnimateIn key={index} delay={index * 0.05}>
                  <div className="rounded-sm bg-blue-500 px-4 py-4 text-center font-medium text-white hover:bg-blue-400">
                    {skill.name}
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>

          <div>
            <AnimateIn>
              <h2 className="mb-8 text-3xl font-semibold">
                Experience
              </h2>
            </AnimateIn>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <AnimateIn key={index} delay={index * 0.1}>
                  <div>
                    <h3 className="mt-1 text-lg font-semibold text-gray-300">
                      {exp.role}
                    </h3>
                    <h2 className="text-blue-600"> {exp.company}</h2>

                    <p className="mt-3 max-w-xl leading-relaxed text-white">
                      {exp.description}
                    </p>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsExperience;