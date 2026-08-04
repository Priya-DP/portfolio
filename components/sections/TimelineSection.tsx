"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar, Sparkles, CheckCircle2, ChevronRight } from "lucide-react";
import Tilt3DCard from "@/components/3d/Tilt3DCard";

const experiences = [
  {
    period: "Feb 2025 - Present",
    role: "Software Developer",
    company: "Mahadhi Technology Pvt Ltd",
    badge: "Current Role",
    color: "from-cyan-500 to-blue-600",
    icon: Briefcase,
    highlights: [
      "Architecting full-stack RFP management platform with Next.js 15, TypeScript, Drizzle ORM, and PostgreSQL.",
      "Engineered multi-step forms, reusable design system components, and automated backend APIs.",
    ],
  },
  {
    period: "Feb 2024 - Jan 2025",
    role: "Software Developer",
    company: "AppLogiQ",
    badge: "Full-Time",
    color: "from-purple-500 to-indigo-600",
    icon: Briefcase,
    highlights: [
      "Developed CRM dashboards & automated email/SMS workflows for LeadSynq using React.",
      "Built real-time student tracking modules with React and Node.js backend infrastructure.",
    ],
  },
  {
    period: "Jul 2023 - Nov 2023",
    role: "Full Stack Intern",
    company: "Pumo Technovation India Pvt. Ltd",
    badge: "Internship",
    color: "from-pink-500 to-rose-600",
    icon: Briefcase,
    highlights: [
      "Created custom web applications, portfolio sites, and CMS solutions with PHP, MySQL, and React.",
    ],
  },
  {
    period: "Jul 2019 - Jun 2023",
    role: "Project Engineer",
    company: "MAS Solar Systems Pvt Ltd",
    badge: "Engineering",
    color: "from-amber-500 to-orange-600",
    icon: Briefcase,
    highlights: [
      "Managed solar installation engineering projects, technical load calculation, and vendor coordination.",
    ],
  },
  {
    period: "2015 - 2019",
    role: "B.E. Electrical & Electronics Engineering",
    company: "Karpagam Institute of Technology",
    badge: "Degree",
    color: "from-emerald-500 to-teal-600",
    icon: GraduationCap,
    highlights: ["Graduated with CGPA 7.5."],
  },
];

export default function TimelineSection() {
  return (
    <section id="timeline" className="relative py-28 bg-[#030712] overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/30 text-cyan-300 text-xs font-mono font-semibold tracking-wider uppercase mb-4"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>Career Milestones</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight font-outfit text-white"
          >
            Experience <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500">Timeline</span>
          </motion.h2>
        </div>

        {/* Timeline Path Container */}
        <div className="relative">
          {/* Vertical Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500 rounded-full shadow-[0_0_15px_rgba(0,240,255,0.5)]" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              const IconComponent = exp.icon;

              return (
                <div
                  key={index}
                  className={`relative flex flex-col lg:flex-row items-center ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Glowing Node Dot (Desktop) */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#030712] border-2 border-cyan-400 shadow-[0_0_20px_#00f0ff] items-center justify-center z-20">
                    <div className="w-3.5 h-3.5 rounded-full bg-cyan-400 animate-pulse" />
                  </div>

                  {/* 3D Tilt Experience Card */}
                  <div className={`w-full lg:w-5/12 ${isEven ? "lg:pr-12" : "lg:pl-12"}`}>
                    <Tilt3DCard maxDegree={10}>
                      <div className="p-6 sm:p-8 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl shadow-2xl relative overflow-hidden group hover:border-cyan-500/40 transition-all duration-300">
                        {/* Top Gradient Bar */}
                        <div className={`h-1 absolute top-0 left-0 right-0 bg-gradient-to-r ${exp.color}`} />

                        <div className="flex items-center justify-between mb-4">
                          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                            {exp.period}
                          </span>
                          <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-white/5 text-gray-400">
                            {exp.badge}
                          </span>
                        </div>

                        <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                          {exp.role}
                        </h3>
                        <p className="text-sm font-semibold text-purple-400 mb-4">{exp.company}</p>

                        <ul className="space-y-2 text-sm text-gray-300">
                          {exp.highlights.map((item, hIdx) => (
                            <li key={hIdx} className="flex items-start gap-2">
                              <ChevronRight className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Tilt3DCard>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
