"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshWobbleMaterial, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function AnimatedTorusKnot() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.3;
      meshRef.current.rotation.y += delta * 0.4;
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={1.5} floatIntensity={2}>
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <torusKnotGeometry args={[1.5, 0.45, 128, 32]} />
        <meshStandardMaterial
          color="#00f0ff"
          wireframe
          emissive="#8b5cf6"
          emissiveIntensity={0.5}
          roughness={0.1}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
}

function FloatingIcosahedrons() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh position={[-3.5, 2, -2]}>
        <icosahedronGeometry args={[0.7, 0]} />
        <MeshWobbleMaterial color="#ec4899" factor={0.6} speed={2} wireframe />
      </mesh>

      <mesh position={[3.5, -2, -1]}>
        <icosahedronGeometry args={[0.8, 0]} />
        <MeshWobbleMaterial color="#8b5cf6" factor={0.4} speed={1.5} wireframe />
      </mesh>

      <mesh position={[4, 2.5, -3]}>
        <octahedronGeometry args={[0.6, 0]} />
        <meshStandardMaterial color="#00f0ff" wireframe />
      </mesh>
    </group>
  );
}

function ParticleField() {
  const count = 600;
  const positions = useRef(new Float32Array(count * 3));

  for (let i = 0; i < count * 3; i++) {
    positions.current[i] = (Math.random() - 0.5) * 18;
  }

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions.current, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#00f0ff"
        transparent
        opacity={0.7}
        sizeAttenuation
      />
    </points>
  );
}

export default function Hero3DScene() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-auto">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#00f0ff" />
        <pointLight position={[-10, -10, -5]} intensity={1.2} color="#ec4899" />

        <AnimatedTorusKnot />
        <FloatingIcosahedrons />
        <ParticleField />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.8}
          maxPolarAngle={Math.PI / 1.8}
          minPolarAngle={Math.PI / 2.5}
        />
      </Canvas>
    </div>
  );
}
