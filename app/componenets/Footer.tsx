
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import { fadeUp, staggerContainer } from "@/app/lib/animations";

export default function Footer() {
  return (
    <footer id="contact" className="w-full bg-[#070707] text-white border-t border-[#1A1A1A] pt-20">
      <div className="max-w-7xl mx-auto px-6 pb-16">
        
        {/* MAIN FOOTER GRID */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-12 md:grid-cols-2 items-center"
        >
          {/* LEFT COLUMN */}
          <motion.div variants={fadeUp}>
            <h3 className="text-[24px] sm:text-3xl font-extrabold text-white mb-4 tracking-tight">
              Let&#39;s Create Together
            </h3>

            <p className="text-gray-400 leading-relaxed max-w-md mb-6 font-normal">
              I&#39;m always excited to connect with fellow developers, potential
              clients, and anyone passionate about technology. Whether you have a
              project in mind or just want to say hello, I&#39;m here to collaborate.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/oluwaduyilemi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 rounded-full bg-[#121212] border border-[#262626] flex items-center justify-center text-gray-300 hover:text-[#C5A059] hover:border-[#C5A059] transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/Duyilemi_Code"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-10 h-10 rounded-full bg-[#121212] border border-[#262626] flex items-center justify-center text-gray-300 hover:text-[#C5A059] hover:border-[#C5A059] transition-all"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/favour-bakare-53650535b"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-[#121212] border border-[#262626] flex items-center justify-center text-gray-300 hover:text-[#C5A059] hover:border-[#C5A059] transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* RIGHT COLUMN CARD */}
          <motion.div
            variants={fadeUp}
            className="border border-[#222222] bg-[#101010] hover:border-[#C5A059]/40 transition-all rounded-3xl p-8 sm:p-10 shadow-2xl"
          >
            <h4 className="font-bold text-[22px] text-white mb-3">
              Get in Touch
            </h4>

            <p className="text-gray-400 mb-6 leading-relaxed font-normal">
              Have a project in mind? Let&#39;s discuss how we can work together to
              bring your ideas to life.
            </p>

            <a
              href="mailto:youremail@example.com"
              className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#C5A059] via-[#E6C387] to-[#997736] text-black px-6 py-3.5 rounded-2xl text-xs font-bold uppercase tracking-wider hover:brightness-110 shadow-[0_0_15px_rgba(197,160,89,0.25)] transition-all"
            >
              <Mail className="w-4 h-4" />
              Send me an email
            </a>
          </motion.div>
        </motion.div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-6 py-6 text-xs text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} DUYI CODE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}


interface FooterLinkProps {
  text: string;
}

function FooterLink({ text }: FooterLinkProps) {
  return (
    <a href="#" className="text-gray-400 hover:text-[#C5A059] transition-colors">
      {text}
    </a>
  );
}