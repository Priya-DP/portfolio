"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUp, Heart, Sparkles } from "lucide-react";

export default function Footer3D() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#030712] pt-16 pb-12 overflow-hidden">
      {/* Glow ambient overlay */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/10">
          <div>
            <h3 className="text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 mb-2">
              DEVIPRIYA V
            </h3>
            <p className="text-gray-400 max-w-md text-sm">
              Full Stack Developer & Frontend Specialist crafting high-performance, 3D interactive web experiences.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/Devipriya-41"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl border border-white/10 bg-white/[0.03] text-gray-400 hover:text-cyan-400 hover:border-cyan-500/40 hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all duration-300"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl border border-white/10 bg-white/[0.03] text-gray-400 hover:text-cyan-400 hover:border-cyan-500/40 hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:devipriyav98@gmail.com"
              className="p-3.5 rounded-xl border border-white/10 bg-white/[0.03] text-gray-400 hover:text-cyan-400 hover:border-cyan-500/40 hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-3.5 rounded-xl border border-cyan-500/40 bg-cyan-950/40 text-cyan-400 hover:bg-cyan-500 hover:text-black hover:shadow-[0_0_25px_rgba(0,240,255,0.5)] transition-all duration-300"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Devipriya V. All rights reserved.</p>
          <p className="flex items-center gap-1 mt-2 sm:mt-0">
            Designed & Built with <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500" /> using Next.js & Three.js
          </p>
        </div>
      </div>
    </footer>
  );
}
