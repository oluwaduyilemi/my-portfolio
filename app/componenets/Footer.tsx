"use client";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#050505] border-t border-gray-200 mt-2">
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-2">
        
        {/* LEFT */}
        <div>
          <h3 className="text-[24px] font-semibold mb-4">
            Let&#39;s Create Together
          </h3>

          <p className="text-gray-300 leading-relaxed max-w-md mb-6">
            I&#39;m always excited to connect with fellow developers, potential
            clients, and anyone passionate about technology. Whether you have a
            project in mind or just want to say hello, I&#39;m here to collaborate.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-5 text-blue-500">
            <a href="https://github.com/oluwaduyilemi" aria-label="GitHub" className="hover:text-blue-700">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://x.com/Duyilemi_Code" aria-label="Twitter" className="hover:text-blue-700">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/favour-bakare-53650535b" aria-label="LinkedIn" className="hover:text-blue-700">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="border-white/5 border bg-white/5 hover:border-blue-500/30 hover:bg-white/10 rounded-2xl p-8">
          <h4 className="font-semibold text-[22px] mb-3">Get in Touch</h4>

          <p className="text-gray-200 mb-6">
            Have a project in mind? Let&#39;s discuss how we can work together to
            bring your ideas to life.
          </p>

          <a
            href="mailto:youremail@example.com"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition"
          >
            <Mail className="w-5 h-5" />
            Send me an email
          </a>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6 text-sm text-gray-400">
          © {new Date().getFullYear()} DUYI CODE. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

/* ---------------- SMALL REUSABLE LINK ---------------- */

interface FooterLinkProps {
  text: string;
}

function FooterLink({ text }: FooterLinkProps) {
  return (
    <a href="#" className="hover:text-black transition">
      {text}
    </a>
  );
}
