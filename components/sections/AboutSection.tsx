"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, Briefcase, Award, Code2, Cpu, CheckCircle2 } from "lucide-react";
import Tilt3DCard from "@/components/3d/Tilt3DCard";

const stats = [
  { label: "Years Experience", value: "2+" },
  { label: "Projects Delivered", value: "10+" },
  { label: "Tech Stack Mastery", value: "Next.js" },
  { label: "Code Quality", value: "100%" },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-28 bg-[#030712] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-950/30 text-purple-300 text-xs font-mono font-semibold tracking-wider uppercase mb-4"
          >
            <Cpu className="w-4 h-4 text-purple-400" />
            <span>Engineer Profile</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight font-outfit text-white"
          >
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Devipriya</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Profile Frame with 3D Tilt */}
          <div className="lg:col-span-5 flex justify-center">
            <Tilt3DCard className="w-full max-w-md">
              <div className="relative p-3 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl shadow-[0_0_50px_rgba(0,240,255,0.15)] group">
                {/* Glow ring */}
                <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-cyan-500 to-purple-600 opacity-30 blur group-hover:opacity-70 transition duration-500" />

                <div className="relative w-full h-[420px] rounded-2xl overflow-hidden bg-slate-900 border border-white/10">
                  <img
                    src="/photo/dp.jpeg"
                    alt="Devipriya V"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-80" />

                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl border border-white/10 bg-[#030712]/80 backdrop-blur-md">
                    <h4 className="text-lg font-bold text-white">Devipriya V</h4>
                    <p className="text-xs font-mono text-cyan-400">Software Developer @ Mahadhi Technology</p>
                  </div>
                </div>
              </div>
            </Tilt3DCard>
          </div>

          {/* About Info & Bio */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-bold text-white leading-tight">
                Crafting High-Performance <span className="text-cyan-400">Full-Stack Solutions</span> & Modern UIs
              </h3>

              <p className="text-gray-300 leading-relaxed text-lg">
                I am a passionate developer with over 2 years of experience specializing in{" "}
                <span className="text-cyan-300 font-semibold">React, Next.js 15, TypeScript, Drizzle ORM, and PostgreSQL</span>.
                My work spans building robust enterprise RFP management platforms, real-time CRM dashboards, and optimized API workflows.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-md flex items-center space-x-3">
                  <div className="p-2.5 rounded-lg bg-cyan-500/20 text-cyan-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-gray-400">Location</span>
                    <p className="font-semibold text-white text-sm">Chennai, India (Remote Ready)</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-md flex items-center space-x-3">
                  <div className="p-2.5 rounded-lg bg-purple-500/20 text-purple-400">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-gray-400">Experience</span>
                    <p className="font-semibold text-white text-sm">2+ Years Full Stack</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Key Stats Counter Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10">
              {stats.map((stat, i) => (
                <div key={i} className="p-4 rounded-xl border border-white/10 bg-white/[0.02] text-center">
                  <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-outfit">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-400 font-mono mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
