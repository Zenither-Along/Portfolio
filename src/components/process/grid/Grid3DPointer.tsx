'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';

export default function Grid3DPointer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pointerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Mouse Move Handler
    const handleMouseMove = (e: MouseEvent) => {
      if (!pointerRef.current || !containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Calculate angle to mouse
      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;
      const angleRad = Math.atan2(deltaY, deltaX);
      const angleDeg = angleRad * (180 / Math.PI);

      // Rotate the pointer
      // We add 90deg offset if the default orientation is up, or 0 if right.
      // Let's assume default is pointing RIGHT.
      gsap.to(pointerRef.current, {
        rotationZ: angleDeg,
        duration: 0.5,
        ease: 'power2.out',
        overwrite: 'auto'
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full relative flex items-center justify-center perspective-[600px]">
      {/* 3D Container Rotating on Z axis */}
      <div 
        ref={pointerRef}
        className="w-24 h-6 relative transform-style-3d preserve-3d"
      >
        {/* --- THE BODY (Dark Metallic Housing) --- */}
        
        {/* Front Face (The Lens/Eye) */}
        {/* Using a radial gradient to create a glowing 'eye' effect */}
        <div className="absolute inset-0 bg-slate-900 border border-slate-700 translate-z-[12px] flex items-center justify-center overflow-hidden">
             {/* The Glowing Lens */}
             <div className="w-16 h-3 bg-violet-500 rounded-full blur-[2px] opacity-80 shadow-[0_0_15px_rgba(139,92,246,0.8)]" />
             <div className="absolute w-full h-full bg-[url('https://grain-url-placeholder')] opacity-20" /> {/* Noise/Texture placeholder */}
        </div>

        {/* Back Face (Vents) */}
        <div className="absolute inset-0 bg-slate-800 border border-slate-700 -translate-z-[12px] flex items-center justify-center gap-1">
             <div className="w-1 h-4 bg-slate-900 rounded-full" />
             <div className="w-1 h-4 bg-slate-900 rounded-full" />
             <div className="w-1 h-4 bg-slate-900 rounded-full" />
        </div>
        
        {/* Top Face (Panel Lines) */}
        <div className="absolute top-0 left-0 w-full h-[24px] bg-slate-800 border-t border-b border-slate-600 origin-top -rotate-x-90 flex items-center justify-around">
            <div className="w-[1px] h-full bg-slate-900/50" />
            <div className="w-[1px] h-full bg-slate-900/50" />
            <div className="w-8 h-[1px] bg-white/20" /> {/* Detail line */}
        </div>

        {/* Bottom Face */}
        <div className="absolute bottom-0 left-0 w-full h-[24px] bg-slate-900 origin-bottom rotate-x-90" />
        
        {/* Right Cap (Detail) */}
        <div className="absolute top-0 right-0 h-full w-[24px] bg-slate-700 origin-right rotate-y-90 flex items-center justify-center border border-slate-600">
             <div className="w-2 h-2 rounded-full bg-red-500/50 animate-pulse" /> {/* Small status light */}
        </div>

        {/* Left Cap */}
        <div className="absolute top-0 left-0 h-full w-[24px] bg-slate-700 origin-left -rotate-y-90 border border-slate-600" />
        
      </div>
    </div>
  );
}
