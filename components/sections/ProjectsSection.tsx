"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Sparkles, Star, Code, Layers, Globe } from "lucide-react";
import Image from "next/image";
import Tilt3DCard from "@/components/3d/Tilt3DCard";

const projects = [
  {
    id: 1,
    title: "Troika Tours – Travel & Tourism",
    description:
      "A custom travel and tourism platform designed for Troika Tours with personalized tour packages, destination highlights, responsive design, and integrated PHP enquiry workflows.",
    image: "/photo/troikatour.png",
    category: "frontend",
    technologies: ["HTML5", "CSS3", "JavaScript", "PHP"],
    liveUrl: "https://www.troikatours.com",
    featured: true,
  },
  {
    id: 2,
    title: "TinyLink – URL & Link Management",
    description:
      "A high-speed link shortening and management platform with custom URL aliases, analytics, and instant API routing.",
    image: "/photo/tiny-link.png",
    category: "fullstack",
    technologies: ["Next.js 15", "TypeScript", "Tailwind CSS", "PostgreSQL", "Drizzle ORM"],
    liveUrl: "https://tinylink-sand.vercel.app",
    githubUrl: "https://github.com/Devipriya-41/tinylink",
    featured: true,
  },
  {
    id: 3,
    title: "E-Commerce Enterprise Platform",
    description:
      "Full-stack e-commerce system featuring user authentication, product search, cart management, Stripe checkout integration, and an administrative dashboard.",
    category: "fullstack",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Stripe API"],
    liveUrl: "https://ecommerce-demo.com",
    githubUrl: "https://github.com/Devipriya-41",
    featured: true,
  },
  {
    id: 4,
    title: "Real-Time Weather Dashboard",
    description:
      "Interactive weather application featuring location-based forecasts, weather trend charts, and responsive glassmorphism UI.",
    category: "frontend",
    technologies: ["React", "Chart.js", "OpenWeather API", "Tailwind CSS"],
    liveUrl: "https://weather-demo.com",
    githubUrl: "https://github.com/Devipriya-41",
    featured: false,
  },
  {
    id: 5,
    title: "Microservices API Gateway",
    description:
      "High-throughput microservices gateway featuring JWT authentication, rate limiting, and request routing.",
    category: "backend",
    technologies: ["Node.js", "Express", "Redis", "JWT"],
    liveUrl: "https://api-gateway-demo.com",
    githubUrl: "https://github.com/Devipriya-41",
    featured: false,
  },
];

const categories = [
  { id: "all", name: "All Projects", icon: Layers },
  { id: "fullstack", name: "Full Stack", icon: Star },
  { id: "frontend", name: "Frontend", icon: Globe },
  { id: "backend", name: "Backend", icon: Code },
];

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="relative py-28 bg-[#030712] overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/30 text-cyan-300 text-xs font-mono font-semibold tracking-wider uppercase mb-4"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>Featured Portfolio</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight font-outfit text-white mb-6"
          >
            Recent <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500">Projects</span>
          </motion.h2>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => {
            const IconComponent = cat.icon;
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-black shadow-[0_0_25px_rgba(0,240,255,0.4)] scale-105"
                    : "border border-white/10 bg-white/[0.02] text-gray-400 hover:text-white hover:border-cyan-500/40"
                }`}
              >
                <IconComponent className="w-4 h-4" />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Projects 3D Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <Tilt3DCard maxDegree={12} className="h-full">
                  <div className="h-full rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl overflow-hidden shadow-2xl flex flex-col justify-between group hover:border-cyan-500/50 hover:shadow-[0_0_35px_rgba(0,240,255,0.2)] transition-all duration-500">
                    {/* Media Preview Container */}
                    <div className="relative w-full h-56 bg-slate-950 border-b border-white/10 overflow-hidden">
                      {project.image ? (
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-cyan-950/40 via-purple-950/40 to-slate-950 p-6 text-center">
                          <Code className="w-12 h-12 text-cyan-400 mb-2 opacity-80 group-hover:rotate-12 transition-transform" />
                          <span className="text-xl font-bold text-white font-outfit">{project.title}</span>
                        </div>
                      )}

                      {/* Featured Badge */}
                      {project.featured && (
                        <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-black text-xs font-bold font-mono shadow-lg flex items-center gap-1">
                          <Star className="w-3.5 h-3.5 fill-black" />
                          <span>FEATURED</span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-sm text-gray-300 leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      <div className="space-y-4">
                        {/* Tech Badges */}
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 rounded-md text-xs font-mono bg-cyan-950/40 text-cyan-300 border border-cyan-500/30"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center justify-between pt-4 border-t border-white/10">
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 text-sm font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
                            >
                              <span>Live Demo</span>
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 text-sm font-semibold text-gray-400 hover:text-white transition-colors"
                            >
                              <Github className="w-4 h-4" />
                              <span>Code</span>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </Tilt3DCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
