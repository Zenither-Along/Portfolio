'use client';

import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ProcessPathSVG() {
  const pathRef = useRef<SVGPathElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const path = pathRef.current;
    const container = containerRef.current;
    if (!path || !container) return;

    // Get the total length of the path
    const pathLength = path.getTotalLength();

    // Set initial state - path is hidden
    gsap.set(path, {
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength,
    });

    // Animate the path drawing on scroll
    const ctx = gsap.context(() => {
      gsap.to(path, {
        strokeDashoffset: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top 60%',
          end: 'bottom 40%',
          scrub: 1,
        }
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={containerRef}
      className="absolute left-0 top-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    >
      <svg
        className="w-full h-full"
        viewBox="0 0 100 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        {/* Flowing path that connects all 5 steps */}
        <path
          ref={pathRef}
          d="M 10 50 Q 30 80, 50 100 T 50 150 Q 50 180, 30 200 T 50 250 Q 70 280, 50 300 T 50 350 Q 50 380, 70 400 T 50 450"
          stroke="#D1D5DB"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          opacity="0.6"
        />
      </svg>
    </div>
  );
}
