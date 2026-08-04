"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Custom3DCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.getAttribute("role") === "button" ||
        target.classList.contains("interactive")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden md:block">
      {/* Primary Glowing Dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_12px_#00f0ff] mix-blend-screen"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isClicking ? 0.6 : isHovered ? 1.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 1000, damping: 50, mass: 0.1 }}
      />

      {/* Secondary Outer Pulsing Ring */}
      <motion.div
        className={`fixed top-0 left-0 rounded-full border border-cyan-400/50 shadow-[0_0_20px_rgba(0,240,255,0.25)] ${
          isHovered
            ? "border-purple-400 bg-purple-500/10 shadow-[0_0_30px_rgba(139,92,246,0.5)]"
            : ""
        }`}
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          width: 40,
          height: 40,
          scale: isClicking ? 0.8 : isHovered ? 1.8 : 1,
          rotate: isHovered ? 90 : 0,
        }}
        transition={{ type: "spring", stiffness: 250, damping: 20 }}
      />
    </div>
  );
}
