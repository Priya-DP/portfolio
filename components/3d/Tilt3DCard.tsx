"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

interface Tilt3DCardProps {
  children: React.ReactNode;
  className?: string;
  maxDegree?: number;
}

export default function Tilt3DCard({
  children,
  className = "",
  maxDegree = 15,
}: Tilt3DCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const px = (mouseX / width - 0.5) * 2; // -1 to 1
    const py = (mouseY / height - 0.5) * 2; // -1 to 1

    setRotateY(px * maxDegree);
    setRotateX(-py * maxDegree);

    setGlarePos({
      x: (mouseX / width) * 100,
      y: (mouseY / height) * 100,
      opacity: 0.35,
    });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
      }}
      animate={{
        rotateX,
        rotateY,
      }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      className={`relative perspective-1000 ${className}`}
    >
      {/* Specular Glare Overlay */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300 z-30 overflow-hidden mix-blend-overlay"
        style={{
          opacity: glarePos.opacity,
          background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,0.8) 0%, transparent 60%)`,
        }}
      />
      {children}
    </motion.div>
  );
}
