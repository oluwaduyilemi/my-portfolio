"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative  mt-10 sm:mt-0 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto md:px-10 px-7 pt-22">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold leading-tight">
              Hi, I&apos;m Favour, <br />
              Your Next Senior<br />
              Frontend Engineer
            </h1>

            <p className="text-[26px] text-gray-300 ">
             I Build Scalable, High-Performance Frontend Experiences
            </p>
           </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-[360px] h-[360px] sm:w-[320px] mt-7  lg:w-[420px] lg:h-[440px] rounded-xl overflow-hidden">
              <Image
                src="/images/hero.png" 
                alt="Profile"
                fill
                priority
                className="object-cover"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
