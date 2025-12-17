'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';

export default function GridCompass() {
  const containerRef = useRef<HTMLDivElement>(null);
  const needleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Mouse Move Handler
    const handleMouseMove = (e: MouseEvent) => {
      if (!needleRef.current || !containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Calculate angle to mouse
      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;
      const angleRad = Math.atan2(deltaY, deltaX);
      const angleDeg = angleRad * (180 / Math.PI);

      // Rotate the needle (Assume needle default points RIGHT at 0deg)
      // We use physics-like ease for a magnetic feel
      gsap.to(needleRef.current, {
        rotation: angleDeg,
        duration: 0.8,
        ease: 'elastic.out(1, 0.5)', 
        overwrite: 'auto'
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full relative flex items-center justify-center">
      {/* Compass Circular Frame (Optional, keeping it subtle) */}
      <div className="absolute w-20 h-20 rounded-full border border-slate-200/50 flex items-center justify-center">
          <div className="w-1 h-1 bg-slate-300 rounded-full" />
      </div>

      {/* The 3D-ish Needle */}
      <div 
        ref={needleRef}
        className="relative w-16 h-4 flex items-center"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Needle Shape constructed with two clipped divs for distinct colors */}
        <div className="relative w-full h-full drop-shadow-lg">
            {/* North (Red Tip) - Points Right by default */}
            <div 
                className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-r from-red-500 to-red-600"
                style={{ clipPath: 'polygon(0% 50%, 0% 0%, 100% 50%, 0% 100%)' }}
            />
            {/* West/Tail (White) - Points Left */}
            <div 
                className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-l from-slate-100 to-slate-200"
                style={{ clipPath: 'polygon(100% 50%, 100% 0%, 0% 50%, 100% 100%)' }}
            />
            
            {/* Central Pivot Cap */}
            <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-slate-800 rounded-full -translate-x-1/2 -translate-y-1/2 border-2 border-slate-100 shadow-sm" />
        </div>
      </div>
    </div>
  );
}
