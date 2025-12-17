'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';

export default function GridTunnel() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Move tunnel frames forward to simulate movement into void
      gsap.to('.tunnel-frame', {
        scale: 2,
        opacity: 0,
        z: 200,
        duration: 3,
        stagger: 0.5,
        repeat: -1,
        ease: 'power1.in',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full relative overflow-hidden flex items-center justify-center perspective-[200px] bg-gray-50/20">
      
      {/* Tunnel Frames - Squares moving towards camera (or away) */}
      {[...Array(5)].map((_, i) => (
        <div 
            key={i}
            className="tunnel-frame absolute w-16 h-16 border border-violet-400/30 shadow-[0_0_15px_rgba(139,92,246,0.1)] opacity-0"
            style={{ 
                transform: 'translateZ(-200px) scale(0.1)' // Start far away
            }}
        />
      ))}
      
      <div className="absolute inset-0 bg-gradient-to-t from-white/50 to-transparent pointer-events-none" />
    </div>
  );
}
