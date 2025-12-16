'use client';

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ProjectAnnotations() {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Connecting Lines (Zig-Zag)
      // Target the MASK path (.draw-path) so we reveal the static dashed line
      const lines = gsap.utils.toArray('.connector-line .draw-path');
      lines.forEach((line: any) => {
        const length = line.getTotalLength();
        gsap.set(line, { strokeDasharray: length, strokeDashoffset: length });

        const svgContainer = line.closest('.connector-line');

        gsap.to(line, {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
            trigger: svgContainer, // Trigger based on the visible SVG wrapper
            start: "top 80%",
            end: "bottom 30%",
            scrub: 0.5, // slightly smoother scrub
          }
        });
      });

      // 2. Doodles (Scale/Draw in)
      const doodles = gsap.utils.toArray('.doodle-entry');
      doodles.forEach((doodle: any) => {
        gsap.from(doodle, {
          scale: 0,
          rotation: -10,
          opacity: 0,
          duration: 1,
          ease: "elastic.out(1, 0.5)",
          scrollTrigger: {
            trigger: doodle,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        });
      });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 pointer-events-none z-0 hidden md:block overflow-visible"
    >
      {/* 
        Grid Assumption: 
        - Max Width ~1100px content
        - Card width ~500px
        - Left column ~0-500px, Right column ~600-1100px
        - Vertical separation ~500px per row
      */}

      {/* --- Connecting Line 1: Card 1 (Left) to Card 2 (Right) --- */}
      <svg 
        className="connector-line absolute top-[350px] left-[450px] w-[300px] h-[250px]"
        viewBox="0 0 300 250"
        fill="none"
      >
        <defs>
          <mask id="mask-line-1">
            <path 
              className="draw-path"
              d="M10,10 C100,10 50,150 280,220" 
              stroke="white" 
              strokeWidth="4"
              fill="none"
            />
          </mask>
        </defs>
        {/* Visible Dashed Line */}
        <path 
          d="M10,10 C100,10 50,150 280,220" 
          stroke="#94a3b8" 
          strokeWidth="3" 
          strokeDasharray="10 6"
          strokeLinecap="round"
          mask="url(#mask-line-1)"
        />
      </svg>

      {/* --- Doodle 1: IDEA (Lightbulb & 01) - Right Side --- */}
      <div className="doodle-entry absolute top-[100px] right-[5%] w-[180px] h-[180px] rotate-6 opacity-30">
        <svg viewBox="0 0 150 150" fill="none" stroke="currentColor" className="text-yellow-500">
           {/* Lightbulb */}
           <path d="M75,20 C50,20 30,40 30,65 C30,80 40,90 50,110 L100,110 C110,90 120,80 120,65 C120,40 100,20 75,20" strokeWidth="2" strokeLinecap="round" />
           <path d="M55,110 L55,125 C55,130 60,135 75,135 C90,135 95,130 95,125 L95,110" strokeWidth="2" strokeLinecap="round" />
           <path d="M60,118 L90,118 M60,126 L90,126" strokeWidth="2" />
           {/* Rays */}
           <path d="M20,20 L35,35 M130,20 L115,35 M75,5 L75,15" strokeWidth="2" />
           {/* Number 01 */}
           <text x="100" y="100" fontFamily="cursive" fontSize="40" fill="currentColor" opacity="0.5">01</text>
        </svg>
      </div>

       {/* --- Connecting Line 2: Card 2 (Right) to Card 3 (Left) --- */}
       <svg 
        className="connector-line absolute top-[850px] left-[350px] w-[400px] h-[200px]"
        viewBox="0 0 400 200"
        fill="none"
      >
        <defs>
          <mask id="mask-line-2">
            <path 
              className="draw-path"
              d="M380,10 C300,50 300,150 20,180" 
              stroke="white" 
              strokeWidth="4"
              fill="none"
            />
          </mask>
        </defs>
        <path 
          d="M380,10 C300,50 300,150 20,180" 
          stroke="#94a3b8" 
          strokeWidth="3" 
          strokeDasharray="10 6"
          strokeLinecap="round"
          mask="url(#mask-line-2)"
        />
      </svg>

      {/* --- Doodle 2: DESIGN (Pencil & 02) - Left Side --- */}
      <div className="doodle-entry absolute top-[650px] left-[5%] w-[200px] h-[200px] -rotate-12 opacity-80">
        <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" className="text-blue-400">
           {/* Pencil */}
           <path d="M50,150 L30,170 L20,160 L40,140 L120,60 L140,80 Z" strokeWidth="2" strokeLinecap="round" />
           <path d="M30,170 L20,180 L30,190 L40,180 L20,160" strokeWidth="2" strokeLinecap="round" />
           {/* Ruler Lines */}
           <path d="M150,50 L50,150" strokeWidth="1" strokeDasharray="5 5" />
           {/* Number 02 */}
           <text x="120" y="80" fontFamily="cursive" fontSize="50" fill="currentColor" opacity="0.5">02</text>
           <text x="130" y="120" fontFamily="cursive" fontSize="20" fill="currentColor" transform="rotate(-15)">Design</text>
        </svg>
      </div>

       {/* --- Connecting Line 3: Card 3 (Left) to Card 4 (Right) --- */}
       <svg 
        className="connector-line absolute top-[1350px] left-[450px] w-[300px] h-[200px]"
        viewBox="0 0 300 200"
        fill="none"
      >
        <defs>
          <mask id="mask-line-3">
             <path 
              className="draw-path"
              d="M10,10 C150,50 100,150 290,190" 
              stroke="white" 
              strokeWidth="4"
              fill="none"
            />
          </mask>
        </defs>
         <path 
          d="M10,10 C150,50 100,150 290,190" 
          stroke="#94a3b8" 
          strokeWidth="3" 
          strokeDasharray="10 6"
          strokeLinecap="round"
          mask="url(#mask-line-3)"
        />
      </svg>

      {/* --- Doodle 3: BUILD (Code & 03) - Right Side --- */}
      <div className="doodle-entry absolute top-[1150px] right-[10%] w-[160px] h-[160px] rotate-3 opacity-70">
         <svg viewBox="0 0 160 160" fill="none" className="text-indigo-500">
            {/* Brackets */}
            <path d="M60,40 L40,80 L60,120" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M100,40 L120,80 L100,120" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M70,110 L90,50" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            {/* Number 03 */}
            <text x="100" y="40" fontFamily="cursive" fontSize="40" fill="currentColor" opacity="0.5">03</text>
         </svg>
      </div>

      {/* --- Doodle 4: LAUNCH (Rocket & 04) - Left Side (End) --- */}
      <div className="doodle-entry absolute top-[1650px] left-[5%] w-[180px] h-[180px] -rotate-6 opacity-80">
         <svg viewBox="0 0 180 180" fill="none" className="text-orange-500">
            {/* Rocket */}
            <path d="M90,30 C90,30 60,60 60,90 C60,100 65,110 70,120 L50,130 L60,140 L80,130 C85,132 90,130 90,130 C90,130 95,132 100,130 L120,140 L130,130 L110,120 C115,110 120,100 120,90 C120,60 90,30 90,30" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
            <path d="M90,40 L90,90" stroke="currentColor" strokeWidth="1" />
            {/* Number 04 */}
            <text x="20" y="50" fontFamily="cursive" fontSize="50" fill="currentColor" opacity="0.5">04</text>
            <text x="30" y="90" fontFamily="cursive" fontSize="20" fill="currentColor" transform="rotate(10)">Launch!</text>
         </svg>
      </div>

    </div>
  );
}
