'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';

export default function GridCube() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Rotate the entire cube container
      gsap.to('.cube-container', {
        rotationX: 360,
        rotationY: 360,
        duration: 10,
        ease: 'none',
        repeat: -1
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Cube faces styles
  const faceStyle = "absolute w-12 h-12 border border-violet-500/40 bg-violet-500/5 backdrop-blur-[1px] flex items-center justify-center text-[8px] text-violet-300/50 font-mono";

  return (
    <div ref={containerRef} className="w-full h-full relative overflow-hidden flex items-center justify-center perspective-[500px]">
      <div className="cube-container relative w-12 h-12 transform-style-3d preserve-3d">
        {/* Front */}
        <div className={`${faceStyle} translate-z-[24px]`}>FRONT</div>
        {/* Back */}
        <div className={`${faceStyle} -translate-z-[24px] rotate-y-180`}>BACK</div>
        {/* Right */}
        <div className={`${faceStyle} translate-x-[24px] rotate-y-90`}>RIGHT</div>
        {/* Left */}
        <div className={`${faceStyle} -translate-x-[24px] -rotate-y-90`}>LEFT</div>
        {/* Top */}
        <div className={`${faceStyle} -translate-y-[24px] rotate-x-90`}>TOP</div>
        {/* Bottom */}
        <div className={`${faceStyle} translate-y-[24px] -rotate-x-90`}>BTM</div>
      </div>
    </div>
  );
}
