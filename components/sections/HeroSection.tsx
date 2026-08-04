"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import dynamic from "next/dynamic";
import { Sparkles, ArrowRight, Download, Terminal, Flame, Zap, ShieldCheck } from "lucide-react";

const Hero3DScene = dynamic(() => import("@/components/3d/Hero3DScene"), {
  ssr: false,
});

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#030712]"
    >
      {/* 3D R3F Interactive Canvas Overlay */}
      <Hero3DScene />

      {/* Cyber Grid & Ambient Gradient Overlays */}
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030712]/60 to-[#030712] pointer-events-none" />

      {/* Floating Accent Glow Orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-cyan-500/15 rounded-full blur-[140px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-600/15 rounded-full blur-[140px] pointer-events-none animate-pulse delay-1000" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Availability Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-950/40 backdrop-blur-xl mb-8 shadow-[0_0_20px_rgba(0,240,255,0.2)]"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 -ml-5" />
            <span className="font-mono text-xs text-cyan-300 font-semibold tracking-wider uppercase">
              Available for Full-Time & Contract Roles
            </span>
          </motion.div>

          {/* Main Title Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-6xl sm:text-8xl md:text-9xl font-black tracking-tight mb-6 font-outfit"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 filter drop-shadow-[0_0_35px_rgba(0,240,255,0.3)]">
              DEVIPRIYA V
            </span>
          </motion.h1>

          {/* Dynamic Animated Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-2xl sm:text-4xl text-gray-300 font-medium mb-8 h-16 flex items-center justify-center"
          >
            <span className="mr-3 text-gray-400">Architecting</span>
            <TypeAnimation
              sequence={[
                "3D Interactive Web Apps",
                2000,
                "Full-Stack Next.js Ecosystems",
                2000,
                "Scalable Drizzle & PostgreSQL APIs",
                2000,
                "High-Performance Frontend Systems",
                2000,
              ]}
              wrapper="span"
              speed={45}
              className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-400 underline decoration-cyan-500/40 decoration-wavy"
              repeat={Infinity}
            />
          </motion.div>

          {/* Pitch & Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-12"
          >
            Full-Stack Developer with <span className="text-cyan-300 font-semibold">2+ years of experience</span> crafting modern web applications with{" "}
            <span className="text-purple-300 font-semibold">React, Next.js 15, TypeScript, Tailwind CSS, and Drizzle ORM</span>.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            {/* Primary Action Button */}
            <a
              href="#projects"
              className="group relative px-8 py-4 rounded-2xl font-bold text-black bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-400 shadow-[0_0_30px_rgba(0,240,255,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_45px_rgba(0,240,255,0.7)] flex items-center gap-3 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span>Explore Projects</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Resume Button */}
            <a
              href="/resume/Devipriya-V.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 rounded-2xl font-semibold text-cyan-300 border border-cyan-500/40 bg-cyan-950/30 backdrop-blur-xl hover:border-cyan-400 hover:bg-cyan-900/40 hover:shadow-[0_0_25px_rgba(0,240,255,0.3)] transition-all duration-300 hover:scale-105 flex items-center gap-3"
            >
              <Download className="w-5 h-5 text-cyan-400 group-hover:translate-y-0.5 transition-transform" />
              <span>Download Resume</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
