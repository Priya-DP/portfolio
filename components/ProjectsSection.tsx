"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ExternalLink,
  Github,
  ArrowUpRight,
  Sparkles,
  Star,
  Code,
  Globe,
} from "lucide-react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution built with Next.js, featuring user authentication, payment processing, and admin dashboard.",
    // image: "/api/placeholder/400/250",
    category: "fullstack",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
    liveUrl: "https://ecommerce-demo.com",
    githubUrl: "https://github.com/devipriya/ecommerce",
    featured: true,
  },
  {
    id: 2,
    title: "Troika Tours – Travel & Tourism Website",
    description:
      "A custom travel and tourism website designed for Troika Tours, featuring personalized tour packages, destination highlights, and an integrated enquiry system using PHP mail. Built with responsive UI for seamless browsing across all devices.",
    image: "/photo/troikatour.png",
    category: "frontend",
    technologies: ["HTML5", "CSS3", "JavaScript", "PHP"],
    liveUrl: "https://www.troikatours.com",
    // githubUrl: "https://github.com/devipriya/task-app",
    featured: true,
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "A beautiful weather application with location-based forecasts, interactive charts, and responsive design.",
    // image: "/api/placeholder/400/250",
    category: "frontend",
    technologies: ["React", "Chart.js", "OpenWeather API", "CSS3"],
    liveUrl: "https://weather-demo.com",
    githubUrl: "https://github.com/devipriya/weather-app",
    featured: false,
  },
  {
    id: 4,
    title: "TinyLink ",
    description:
      "A content management system for blogs with markdown support, SEO optimization, and analytics dashboard.",
    image: "/photo/tiny-link.png",
    category: "fullstack",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Drizzle ORM",
    ],
    liveUrl: "https://tinylink-sand.vercel.app",
    githubUrl: "https://github.com/Devipriya-41/tinylink",
    featured: false,
  },
  {
    id: 5,
    title: "Portfolio Website",
    description:
      "A modern portfolio website built with Next.js and Framer Motion, featuring smooth animations and responsive design.",
    // image: "/api/placeholder/400/250",
    category: "frontend",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://portfolio-demo.com",
    githubUrl: "https://github.com/devipriya/portfolio",
    featured: false,
  },
  {
    id: 6,
    title: "API Gateway",
    description:
      "A microservices API gateway with authentication, rate limiting, and request routing capabilities.",
    // image: "/api/placeholder/400/250",
    category: "backend",
    technologies: ["Node.js", "Express", "Redis", "JWT"],
    liveUrl: "https://api-gateway-demo.com",
    githubUrl: "https://github.com/devipriya/api-gateway",
    featured: false,
  },
];

const categories = [
  { id: "all", name: "All Projects", icon: Code },
  { id: "frontend", name: "Frontend", icon: Globe },
  { id: "backend", name: "Backend", icon: Code },
  { id: "fullstack", name: "Full Stack", icon: Star },
];

export default function ProjectsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeCategory, setActiveCategory] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    if (category === "all") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.category === category)
      );
    }
  };

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/80 via-white/90 to-blue-50/80 dark:from-dark-800/90 dark:via-dark-700/95 dark:to-dark-800/90" />
      <div className="absolute inset-0 bg-dots opacity-20" />

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-pink-400/10 to-orange-400/10 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sparkles className="w-8 h-8 text-yellow-500" />
            <h2 className="text-4xl md:text-6xl font-bold">
              My{" "}
              <span className="bg-gradient-to-r from-primary-500 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <Sparkles className="w-8 h-8 text-yellow-500" />
          </div>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
            A showcase of my recent work, demonstrating my skills in frontend,
            backend, and full-stack development.
          </p>
        </motion.div>

        {/* Enhanced Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleCategoryChange(category.id)}
              className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-primary-500 to-purple-600 text-white shadow-2xl shadow-primary-500/25 transform -translate-y-1"
                  : "glass-card dark:glass-card-dark text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-primary-900/20 border border-white/20 dark:border-dark-600/50 backdrop-blur-sm"
              }`}
            >
              <category.icon className="w-5 h-5" />
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Enhanced Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -15, scale: 1.02 }}
                className="group glass-card dark:glass-card-dark rounded-2xl shadow-2xl border border-white/20 dark:border-dark-600/50 overflow-hidden backdrop-blur-sm hover:shadow-3xl transition-all duration-500"
              >
                {/* Enhanced Project Image */}
                <div className="relative overflow-hidden">
                  <div className="w-full h-56 bg-gradient-to-br from-primary-100 via-purple-100 to-pink-100 dark:from-primary-900/20 dark:via-purple-900/20 dark:to-pink-900/20 flex items-center justify-center">
                    {project.image && project.image !== "" ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <span className="text-6xl font-bold bg-gradient-to-r from-primary-500 to-purple-600 bg-clip-text text-transparent">
                        {project.title.charAt(0)}
                      </span>
                    )}
                  </div>

                  {/* Enhanced Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center space-x-6">
                    <motion.a
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-white rounded-full text-gray-800 hover:text-primary-500 transition-all duration-300 shadow-2xl hover:shadow-primary-500/25"
                    >
                      <ExternalLink className="w-6 h-6" />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.15, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-white rounded-full text-gray-800 hover:text-primary-500 transition-all duration-300 shadow-2xl hover:shadow-primary-500/25"
                    >
                      <Github className="w-6 h-6" />
                    </motion.a>
                  </div>

                  {/* Enhanced Featured Badge */}
                  {project.featured && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5, type: "spring" }}
                      className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2"
                    >
                      <Star className="w-4 h-4" />
                      Featured
                    </motion.div>
                  )}
                </div>

                {/* Enhanced Project Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 group-hover:text-primary-500 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed text-lg">
                    {project.description}
                  </p>

                  {/* Enhanced Technologies */}
                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-gradient-to-r from-primary-100 to-purple-100 dark:from-primary-900/30 dark:to-purple-900/30 text-primary-700 dark:text-primary-300 text-sm font-semibold rounded-full border border-primary-200 dark:border-primary-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Enhanced Project Links */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200/50 dark:border-dark-600/50">
                    <motion.a
                      whileHover={{ x: 5 }}
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-primary-500 hover:text-primary-600 font-semibold transition-colors duration-300 text-lg"
                    >
                      Live Demo
                      <ArrowUpRight className="ml-2 w-5 h-5" />
                    </motion.a>

                    <motion.a
                      whileHover={{ x: -5 }}
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors duration-300 text-lg"
                    >
                      <ArrowUpRight className="mr-2 w-5 h-5 rotate-180" />
                      View Code
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Enhanced CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-20"
        >
          <div className="glass-card dark:glass-card-dark p-12 rounded-3xl backdrop-blur-sm border border-white/20 dark:border-dark-600/50">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">
              Ready to Start Your Project?
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              Interested in working together? Let's discuss your project and
              bring your ideas to life!
            </p>
            <motion.button
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="button-primary text-lg px-8 py-4 shadow-2xl shadow-primary-500/25"
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Get In Touch
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
