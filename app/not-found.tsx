"use client";

import Link from "next/link";
import { ArrowLeft, Cpu } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#030712] text-white flex flex-col items-center justify-center p-6 text-center">
      <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(0,240,255,0.3)]">
        <Cpu className="w-8 h-8 text-cyan-400 animate-pulse" />
      </div>

      <h1 className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-4 font-outfit">
        404
      </h1>
      <h2 className="text-2xl font-bold text-gray-200 mb-2">
        Sector Not Found
      </h2>
      <p className="text-gray-400 max-w-md mb-8 text-sm">
        The coordinates you requested do not exist in this 3D universe.
      </p>

      <Link
        href="/"
        className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-bold text-sm flex items-center space-x-2 shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:scale-105 transition-all"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Return to Base</span>
      </Link>
    </div>
  );
}
