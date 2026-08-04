"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Menu, X, Download, Code2, Cpu } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Timeline", href: "#timeline" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar3D() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-8 py-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          className="group relative flex items-center space-x-2 text-xl font-bold tracking-tight text-white focus:outline-none"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 via-purple-600 to-pink-500 p-0.5 shadow-[0_0_20px_rgba(0,240,255,0.4)] group-hover:scale-110 transition-transform duration-300">
            <div className="w-full h-full bg-[#030712] rounded-[10px] flex items-center justify-center">
              <Cpu className="w-5 h-5 text-cyan-400 group-hover:rotate-180 transition-transform duration-700" />
            </div>
          </div>
          <span className="font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
            DEVIPRIYA<span className="text-pink-500">.</span>
          </span>
        </a>

        {/* Desktop Nav Pills */}
        <nav className="hidden md:flex items-center space-x-1 p-1.5 rounded-full border border-white/10 bg-[#030712]/70 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-5 py-2 text-sm font-medium transition-colors duration-300 rounded-full ${
                  isActive ? "text-cyan-300" : "text-gray-400 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activePill"
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/40 rounded-full shadow-[0_0_15px_rgba(0,240,255,0.3)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Resume Action CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="/resume/Devipriya-V.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center space-x-2 px-6 py-2.5 rounded-full font-medium text-sm text-cyan-300 border border-cyan-500/40 bg-cyan-950/30 backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(0,240,255,0.4)] hover:scale-105"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <Download className="w-4 h-4 text-cyan-400 group-hover:translate-y-0.5 transition-transform" />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2.5 rounded-xl border border-white/10 bg-[#030712]/80 text-cyan-400 focus:outline-none"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 mx-2 p-6 rounded-2xl border border-white/10 bg-[#030712]/95 backdrop-blur-2xl shadow-2xl flex flex-col space-y-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-gray-300 hover:text-cyan-400 transition-colors py-2 border-b border-white/5"
              >
                {link.name}
              </a>
            ))}
            <a
              href="/resume/Devipriya-V.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center space-x-2 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 font-semibold text-white shadow-lg"
            >
              <Download className="w-5 h-5" />
              <span>Download Resume</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
