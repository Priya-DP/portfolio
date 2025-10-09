"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  ChevronDown,
  Download,
  ArrowRight,
  Sparkles,
  Code,
  Palette,
} from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
    }> = [];

    // Create enhanced particles with different colors
    for (let i = 0; i < 80; i++) {
      const colors = [
        "rgba(59, 130, 246, 0.3)",
        "rgba(147, 51, 234, 0.3)",
        "rgba(236, 72, 153, 0.3)",
      ];
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.6 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      setCanvasSize();
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Enhanced Animated Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-40"
      />

      {/* Gradient Overlay with enhanced colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 via-white/70 to-purple-50/60 dark:from-dark-900/80 dark:via-dark-800/90 dark:to-dark-900/80" />

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-pink-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse delay-1000" />

      {/* Floating Icons */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 right-20 text-primary-500/30 dark:text-primary-400/30"
      >
        <Code className="w-16 h-16" />
      </motion.div>

      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-32 left-20 text-purple-500/30 dark:text-purple-400/30"
      >
        <Palette className="w-16 h-16" />
      </motion.div>

      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Enhanced Greeting with Sparkles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center gap-2 text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-4"
          >
            <Sparkles className="w-5 h-5 text-yellow-500" />
            Hello, I'm
            <Sparkles className="w-5 h-5 text-yellow-500" />
          </motion.div>

          {/* Enhanced Name with better gradient */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-6xl md:text-8xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-primary-500 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
              Devipriya
            </span>
          </motion.h1>

          {/* Enhanced Tagline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-2xl md:text-4xl text-gray-700 dark:text-gray-300 mb-8 font-medium"
          >
            I build{" "}
            <TypeAnimation
              sequence={[
                "interactive web experiences",
                2000,
                "beautiful user interfaces",
                2000,
                "scalable applications",
                2000,
                "digital solutions",
                2000,
              ]}
              wrapper="span"
              speed={50}
              className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-purple-600 font-bold"
              repeat={Infinity}
            />
          </motion.h2>

          {/* Enhanced Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Full Stack Developer passionate about creating innovative digital
            solutions. Specializing in React, Next.js, and modern web
            technologies.
          </motion.p>

          {/* Enhanced CTA Buttons with glass effect */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            {/* View My Work Button */}
            <motion.button
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="group relative overflow-hidden 
               bg-white/10 dark:bg-dark-700/30 
               text-blue-600 dark:text-blue-400   dark:hover:text-white /* text blue by default */
               px-8 py-4 rounded-full font-medium glass-card 
               backdrop-blur-sm shadow-2xl border border-blue-300/50 
               transition-all duration-300 
               hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500" /* flip to white on hover */
              onClick={() =>
                document
                  .querySelector("#projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="flex items-center justify-center">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 5 }}
                  className="mr-2"
                >
                  <Sparkles className="w-5 h-5" />
                </motion.div>
                View My Work
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 3,
                  }}
                  className="ml-2"
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </div>
            </motion.button>

            {/* Download Resume Button */}
            <motion.a
              href="/resume/Devipriya-V.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="group relative overflow-hidden 
  bg-white/10 dark:bg-dark-700/30 text-blue-600 dark:text-blue-400  dark:hover:text-white px-8 py-4 rounded-full font-medium glass-card  backdrop-blur-sm shadow-2xl border border-blue-300/50 transition-all duration-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500"
            >
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="flex items-center justify-center">
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="mr-2"
                >
                  <Download className="w-5 h-5" />
                </motion.div>
                Download Resume
              </div>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToAbout}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-gray-400 hover:text-primary-500 transition-colors duration-200 p-2 rounded-full hover:bg-white/10 dark:hover:bg-dark-700/50"
          >
            <ChevronDown className="w-6 h-6" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
