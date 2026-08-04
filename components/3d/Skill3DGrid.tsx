"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Text, Html } from "@react-three/drei";
import * as THREE from "three";

interface SkillNodeProps {
  name: string;
  position: [number, number, number];
  color: string;
}

function SkillNode({ name, position, color }: SkillNodeProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.5;
      meshRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
      <group position={position}>
        <mesh
          ref={meshRef}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          scale={hovered ? 1.3 : 1}
        >
          <sphereGeometry args={[0.55, 16, 16]} />
          <meshStandardMaterial
            color={color}
            wireframe
            emissive={color}
            emissiveIntensity={hovered ? 0.9 : 0.4}
          />
        </mesh>

        <Html distanceFactor={10} position={[0, -0.8, 0]} center>
          <div
            className={`px-3 py-1 rounded-full text-xs font-mono font-bold transition-all duration-300 pointer-events-none whitespace-nowrap shadow-lg ${
              hovered
                ? "bg-cyan-500 text-black shadow-[0_0_20px_#00f0ff] scale-110"
                : "bg-slate-900/80 text-cyan-300 border border-cyan-500/30 backdrop-blur-md"
            }`}
          >
            {name}
          </div>
        </Html>
      </group>
    </Float>
  );
}

const skillsData = [
  { name: "React", position: [-3, 1.5, 0] as [number, number, number], color: "#00f0ff" },
  { name: "Next.js 15", position: [0, 2, 0] as [number, number, number], color: "#ffffff" },
  { name: "TypeScript", position: [3, 1.5, 0] as [number, number, number], color: "#38bdf8" },
  { name: "Tailwind CSS", position: [-2.5, -0.8, 0.5] as [number, number, number], color: "#06b6d4" },
  { name: "Drizzle ORM", position: [0, -1.2, 0] as [number, number, number], color: "#ec4899" },
  { name: "PostgreSQL", position: [2.5, -0.8, 0.5] as [number, number, number], color: "#8b5cf6" },
];

export default function Skill3DGrid() {
  return (
    <div className="w-full h-[350px] relative rounded-3xl overflow-hidden border border-white/10 bg-[#030712]/50 backdrop-blur-xl">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#00f0ff" />

        {skillsData.map((skill) => (
          <SkillNode
            key={skill.name}
            name={skill.name}
            position={skill.position}
            color={skill.color}
          />
        ))}
      </Canvas>
    </div>
  );
}
