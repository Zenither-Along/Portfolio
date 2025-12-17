'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';

export default function GridSignal() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Randomly blink dots
      gsap.to('.signal-dot', {
        opacity: 0.2,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        repeatDelay: Math.random() * 2,
        stagger: {
          amount: 1,
          from: 'random'
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full relative grid grid-cols-3 grid-rows-3 gap-2 p-4 bg-white/40">
       {[...Array(9)].map((_, i) => (
         <div key={i} className="signal-dot w-2 h-2 rounded-full bg-violet-400/60" />
       ))}
    </div>
  );
}
