"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { Zap, Code, Server, Database, Wrench, Sparkles } from "lucide-react";

const Skill3DGrid = dynamic(() => import("@/components/3d/Skill3DGrid"), {
  ssr: false,
});

const categories = [
  {
    id: "frontend",
    label: "Frontend Dev",
    icon: Code,
    skills: [
      { name: "React.js", level: 90, color: "from-cyan-400 to-blue-500" },
      { name: "Next.js 15", level: 88, color: "from-blue-400 to-indigo-500" },
      { name: "TypeScript", level: 85, color: "from-sky-400 to-blue-600" },
      { name: "Tailwind CSS", level: 92, color: "from-teal-400 to-cyan-500" },
      { name: "HTML5 / CSS3", level: 95, color: "from-orange-400 to-red-500" },
    ],
  },
  {
    id: "backend",
    label: "Backend & ORM",
    icon: Server,
    skills: [
      { name: "Node.js", level: 82, color: "from-emerald-400 to-green-600" },
      { name: "Express.js", level: 80, color: "from-green-400 to-teal-500" },
      { name: "Drizzle ORM", level: 88, color: "from-purple-400 to-pink-500" },
      { name: "REST APIs", level: 90, color: "from-cyan-400 to-purple-500" },
    ],
  },
  {
    id: "database",
    label: "Databases & Cloud",
    icon: Database,
    skills: [
      { name: "PostgreSQL", level: 85, color: "from-purple-400 to-indigo-600" },
      { name: "Neon Serverless", level: 82, color: "from-cyan-400 to-teal-400" },
      { name: "MySQL", level: 80, color: "from-blue-400 to-cyan-600" },
      { name: "AWS Basics", level: 65, color: "from-amber-400 to-orange-500" },
    ],
  },
  {
    id: "tools",
    label: "Tools & Testing",
    icon: Wrench,
    skills: [
      { name: "Git & GitHub", level: 88, color: "from-orange-400 to-rose-500" },
      { name: "Payload CMS", level: 75, color: "from-pink-400 to-purple-500" },
      { name: "Figma", level: 70, color: "from-purple-400 to-pink-500" },
      { name: "Testing", level: 72, color: "from-teal-400 to-emerald-500" },
    ],
  },
];

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const currentCategory = categories.find((c) => c.id === activeCategory) || categories[0];

  return (
    <section id="skills" className="relative py-28 bg-[#030712] overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-950/30 text-purple-300 text-xs font-mono font-semibold tracking-wider uppercase mb-4"
          >
            <Zap className="w-4 h-4 text-purple-400" />
            <span>Technical Mastery</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight font-outfit text-white mb-6"
          >
            3D Interactive <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500">Skill Cosmos</span>
          </motion.h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Interact with the 3D canvas below or switch skill categories to view detailed proficiency metrics.
          </p>
        </div>

        {/* 3D Skill Grid Canvas Component */}
        <div className="mb-16">
          <Skill3DGrid />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => {
            const IconComp = cat.icon;
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-black font-bold shadow-[0_0_25px_rgba(0,240,255,0.4)] scale-105"
                    : "border border-white/10 bg-white/[0.02] text-gray-400 hover:text-white hover:border-cyan-500/40"
                }`}
              >
                <IconComp className="w-4 h-4" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skill Progress Bars Grid */}
        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-6">
          {currentCategory.skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="p-5 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl hover:border-cyan-500/40 transition-all duration-300"
            >
              <div className="flex justify-between items-center mb-3">
                <span className="font-semibold text-white text-base">{skill.name}</span>
                <span className="font-mono text-cyan-400 text-sm font-bold">{skill.level}%</span>
              </div>
              <div className="h-2.5 w-full bg-slate-900 rounded-full overflow-hidden border border-white/5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className={`h-full rounded-full bg-gradient-to-r ${skill.color} shadow-[0_0_12px_rgba(0,240,255,0.5)]`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
