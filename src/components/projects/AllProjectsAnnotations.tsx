'use client';

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AllProjectsAnnotations() {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Connecting Lines (Zig-Zag)
      const lines = gsap.utils.toArray('.connector-line .draw-path');
      lines.forEach((line: any) => {
        const length = line.getTotalLength();
        gsap.set(line, { strokeDasharray: length, strokeDashoffset: length });

        const svgContainer = line.closest('.connector-line');

        gsap.to(line, {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
            trigger: svgContainer,
            start: "top 80%",
            end: "bottom 30%",
            scrub: 0.5,
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

  /* 
    Systematic Layout Calculation:
    - Container Relative Top: 0 (Starts at bottom of Header padding)
    - Header Content Height: ~300px (Title + Subtitle + Margin)
    - Card Flow Start: ~300px
    - Card Approximate Height: ~450px
    - Card Gap: ~100px
    
    Grid Slots (Y-Positions):
    - Slot 0 (Right of Card 1): Y ~350px
    - Gap 1 (Card 1 -> Card 2): Y ~750px
    - Slot 1 (Left of Card 2): Y ~850px
    - Gap 2 (Card 2 -> Card 3): Y ~1250px
    - Slot 2 (Right of Card 3): Y ~1350px
    - Gap 3 (Card 3 -> Card 4): Y ~1750px
    - Slot 3 (Left of Card 4): Y ~1850px
  */

  return (
    <div 
      ref={containerRef}
      className="absolute top-[-30px] left-0 w-full h-full pointer-events-none z-0 hidden md:block overflow-visible"
    >
      
      {/* === DOODLE 01: Top Right (Negative Space of Card 1) === */}
      <div className="doodle-entry absolute top-[230px] right-[15%] w-[160px] h-[160px] rotate-12 opacity-40">
        <svg viewBox="0 0 150 150" fill="none" stroke="currentColor" className="text-yellow-500">
           {/* Lightbulb Simple */}
           <path d="M75,20 C50,20 30,40 30,65 C30,80 40,90 50,110 L100,110 C110,90 120,80 120,65 C120,40 100,20 75,20" strokeWidth="2" strokeLinecap="round" />
           <path d="M55,110 L55,125 C55,130 60,135 75,135 C90,135 95,130 95,125 L95,110" strokeWidth="2" strokeLinecap="round" />
           <path d="M60,118 L90,118 M60,126 L90,126" strokeWidth="2" />
           {/* Glow Rays */}
           <path d="M20,20 L35,35 M130,20 L115,35 M75,5 L75,15" strokeWidth="2" />
           <text x="100" y="100" fontFamily="cursive" fontSize="40" fill="currentColor" opacity="0.6">01</text>
        </svg>
      </div>

      {/* === CONNECTOR 1: Card 1 (Left) -> Card 2 (Right) === 
          Starts from ~580px
      */}
      <svg 
        className="connector-line absolute top-[580px] left-[400px] w-[400px] h-[200px]"
        viewBox="0 0 400 200"
        fill="none"
      >
        <defs>
          <mask id="mask-line-1">
            <path className="draw-path" d="M20,20 C100,20 100,180 380,180" stroke="white" strokeWidth="4" fill="none" />
          </mask>
        </defs>
        <path d="M20,20 C100,20 100,180 380,180" stroke="#cbd5e1" strokeWidth="3" strokeDasharray="8 8" strokeLinecap="round" mask="url(#mask-line-1)" />
      </svg>

      {/* === DOODLE 02: Middle Left (Negative Space of Card 2) === */}
      <div className="doodle-entry absolute top-[780px] left-[10%] w-[180px] h-[180px] -rotate-12 opacity-80">
        <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" className="text-blue-400">
           {/* Pencil Icon */}
           <path d="M50,150 L30,170 L20,160 L40,140 L120,60 L140,80 Z" strokeWidth="2" strokeLinecap="round" />
           <path d="M30,170 L20,180 L30,190 L40,180 L20,160" strokeWidth="2" strokeLinecap="round" />
           {/* Measurement Line */}
           <path d="M150,50 L50,150" strokeWidth="1" strokeDasharray="5 5" />
           <text x="130" y="80" fontFamily="cursive" fontSize="50" fill="currentColor" opacity="0.5">02</text>
           <text x="120" y="120" fontFamily="cursive" fontSize="18" fill="currentColor" transform="rotate(-15)">Design</text>
        </svg>
      </div>

      {/* === CONNECTOR 2: Card 2 (Right) -> Card 3 (Left) === 
          Starts from ~1080px
      */}
      <svg 
        className="connector-line absolute top-[1080px] left-[350px] w-[400px] h-[200px]"
        viewBox="0 0 400 200"
        fill="none"
      >
        <defs>
          <mask id="mask-line-2">
            <path className="draw-path" d="M380,20 C300,20 300,180 20,180" stroke="white" strokeWidth="4" fill="none" />
          </mask>
        </defs>
        <path d="M380,20 C300,20 300,180 20,180" stroke="#cbd5e1" strokeWidth="3" strokeDasharray="8 8" strokeLinecap="round" mask="url(#mask-line-2)" />
      </svg>

      {/* === DOODLE 03: Middle Right (Negative Space of Card 3) === */}
      <div className="doodle-entry absolute top-[1280px] right-[10%] w-[160px] h-[160px] rotate-6 opacity-70">
         <svg viewBox="0 0 160 160" fill="none" className="text-indigo-500">
            {/* Code Brackets */}
            <path d="M50,40 L30,80 L50,120" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M110,40 L130,80 L110,120" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M70,110 L90,50" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            <text x="90" y="40" fontFamily="cursive" fontSize="40" fill="currentColor" opacity="0.6">03</text>
         </svg>
      </div>

      {/* === CONNECTOR 3: Card 3 (Left) -> Card 4 (Right) === 
          Starts from ~1580px
      */}
      <svg 
        className="connector-line absolute top-[1530px] left-[400px] w-[400px] h-[200px]"
        viewBox="0 0 400 200"
        fill="none"
      >
        <defs>
          <mask id="mask-line-3">
             <path className="draw-path" d="M20,20 C100,20 100,180 380,180" stroke="white" strokeWidth="4" fill="none" />
          </mask>
        </defs>
         <path d="M20,20 C100,20 100,180 380,180" stroke="#cbd5e1" strokeWidth="3" strokeDasharray="8 8" strokeLinecap="round" mask="url(#mask-line-3)" />
      </svg>

      {/* === DOODLE 04: Bottom Left (Negative Space of Card 4) === */}
      <div className="doodle-entry absolute top-[1780px] left-[10%] w-[180px] h-[180px] -rotate-6 opacity-80">
         <svg viewBox="0 0 180 180" fill="none" className="text-orange-500">
            {/* Rocket Simple */}
            <path d="M90,30 C90,30 60,60 60,90 C60,100 65,110 70,120 L50,130 L60,140 L80,130 C85,132 90,130 90,130 C90,130 95,132 100,130 L120,140 L130,130 L110,120 C115,110 120,100 120,90 C120,60 90,30 90,30" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
            <path d="M90,40 L90,90" stroke="currentColor" strokeWidth="1" />
            <text x="20" y="50" fontFamily="cursive" fontSize="50" fill="currentColor" opacity="0.5">04</text>
            <text x="30" y="90" fontFamily="cursive" fontSize="20" fill="currentColor" transform="rotate(10)">Launch!</text>
         </svg>
      </div>

    </div>
  );
}
