'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';

export default function GridScanner() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Scanning line moving up and down
      gsap.to('.scan-line', {
        top: '100%',
        duration: 2,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1
      });
      
      // Fade trail opacity
      gsap.to('.scan-trail', {
        opacity: 0.1,
        duration: 0.5,
        yoyo: true,
        repeat: -1
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full relative overflow-hidden bg-gray-50/30 flex flex-col items-center">
      {/* Scanning Line */}
      <div className="scan-line absolute top-0 left-0 w-full h-[2px] bg-violet-500/80 shadow-[0_0_10px_rgba(139,92,246,0.6)]" />
      
      {/* Optional Trail/Gradient */}
      <div className="scan-trail absolute inset-0 bg-gradient-to-b from-violet-500/10 to-transparent pointer-events-none" />
      
      {/* Static Grid Lines for tech feel */}
      <div className="absolute inset-0 flex justify-between px-4 opacity-20">
         <div className="w-[1px] h-full bg-violet-400" />
         <div className="w-[1px] h-full bg-violet-400" />
      </div>
    </div>
  );
}
