// components/ui/Loader3D.tsx


"use client";


import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu } from "lucide-react";

export default function Loader3D() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsLoading(false), 300);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 80);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#030712] text-white"
        >
          {/* Ambient Glow Orbs */}
          <div className="absolute w-[400px] h-[400px] bg-cyan-500/20 rounded-full blur-[120px] animate-pulse pointer-events-none" />
          <div className="absolute w-[350px] h-[350px] bg-purple-600/20 rounded-full blur-[100px] animate-pulse delay-500 pointer-events-none" />

          {/* Futuristic Hexagon Loader Icon */}
          <div className="relative mb-8 flex items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              className="w-24 h-24 rounded-full border-2 border-dashed border-cyan-400/40 shadow-[0_0_30px_rgba(0,240,255,0.3)]"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute w-16 h-16 rounded-full border-2 border-t-purple-500 border-r-pink-500 border-b-transparent border-l-transparent"
            />
            <Cpu className="w-8 h-8 text-cyan-400 animate-pulse" />
          </div>

          {/* Title & Status */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 mb-2 uppercase"
          >
            Devipriya V
          </motion.h1>
          <p className="text-xs font-mono text-cyan-400/70 tracking-widest mb-6 uppercase">
            Initializing 3D Universe... {progress}%
          </p>

          {/* Progress Bar Container */}
          <div className="w-64 h-1.5 bg-gray-900 rounded-full overflow-hidden border border-white/10 p-0.5">
            <motion.div
              className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full shadow-[0_0_15px_#00f0ff]"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
