"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Icosahedron, Torus } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Shape({ position, color, type }: { position: [number, number, number], color: string, type: 'icosahedron' | 'torus' }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
        meshRef.current.rotation.x += delta * 0.1;
        meshRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
      <mesh ref={meshRef} position={position}>
        {type === 'icosahedron' ? (
             <icosahedronGeometry args={[1, 0]} />
        ) : (
            <torusGeometry args={[0.8, 0.2, 16, 32]} />
        )}
       
        <meshStandardMaterial 
            color={color} 
            wireframe 
            transparent 
            opacity={0.15} 
            side={THREE.DoubleSide}
        />
      </mesh>
    </Float>
  );
}

export default function FloatingShapes3D() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }} dpr={[1, 2]}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        
        {/* Floating Shapes Pattern - Positioned to frame the content */}
        {/* Top Right - Behind Description area */}
        <Shape position={[8, 3, -5]} color="#DBFF00" type="icosahedron" />
        
        {/* Bottom Left - Below Title area */}
        <Shape position={[-8, -4, -2]} color="#1C1C1C" type="torus" />
        
        {/* Deep Center - Subtle texture */}
        <Shape position={[4, 6, -10]} color="#1C1C1C" type="torus" />
        
        {/* Far Left - Framing */}
        <Shape position={[-10, 4, -8]} color="#DBFF00" type="icosahedron" />
        
      </Canvas>
    </div>
  );
}
