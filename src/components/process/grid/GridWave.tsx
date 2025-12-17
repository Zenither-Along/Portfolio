'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';

export default function GridWave() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create concentric circles that ripple out
      gsap.to('.ripple-circle', {
        scale: 1.5,
        opacity: 0,
        duration: 2,
        stagger: 0.3,
        repeat: -1,
        ease: 'power1.out',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full relative flex items-center justify-center overflow-hidden bg-white/50">
      <div className="ripple-circle absolute w-8 h-8 rounded-full border border-violet-500/30" />
      <div className="ripple-circle absolute w-8 h-8 rounded-full border border-violet-500/30" />
      <div className="ripple-circle absolute w-8 h-8 rounded-full border border-violet-500/30" />
    </div>
  );
}
