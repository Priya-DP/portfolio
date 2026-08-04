// app/page.tsx

"use client";

import dynamic from "next/dynamic";
import Loader3D from "@/components/ui/Loader3D";
import Navbar3D from "@/components/ui/Navbar3D";
import Footer3D from "@/components/ui/Footer3D";

import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import TimelineSection from "@/components/sections/TimelineSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";

const Custom3DCursor = dynamic(() => import("@/components/ui/Custom3DCursor"), {
  ssr: false,
});

const Background3DMesh = dynamic(
  () => import("@/components/3d/Background3DMesh"),
  { ssr: false }
);

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#030712] text-white selection:bg-cyan-400 selection:text-black overflow-x-hidden">
      {/* Interactive 3D Cursor */}
      <Custom3DCursor />

      {/* Futuristic Sci-Fi Intro Loader */}
      <Loader3D />

      {/* WebGL Ambient Background Particle Mesh */}
      <Background3DMesh />

      {/* Floating Glassmorphic Navbar */}
      <Navbar3D />

      {/* Main 3D Portfolio Sections */}
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <TimelineSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </div>

      {/* Cyberpunk Footer */}
      <Footer3D />
    </main>
  );
}
