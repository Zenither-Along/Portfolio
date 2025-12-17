'use client';

import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProcessBackground from './ProcessBackground';
import ProcessWindow from './ProcessWindow';
import ProcessHallway from './ProcessHallway';

gsap.registerPlugin(ScrollTrigger);

export default function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const windowRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const windowEl = windowRef.current;
    if (!section || !windowEl) return;

    const ctx = gsap.context(() => {
      // Create a master timeline for the entire section sequence
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top', 
          end: '+=400%', // Increased duration for smoother experience
          pin: true,
          scrub: 1,
        }
      });

      // Phase 1: Window Expansion
      // Start with the window scaling UP to fill the screen
      tl.fromTo(windowEl, 
        {
          width: '20%', 
          height: '25vh', 
          borderRadius: '0rem',
          y: 0 
        },
        {
          width: '100%',
          height: '100vh',
          borderRadius: '0rem',
          ease: 'power2.inOut',
          duration: 1
        }
      );

      // Phase 2: Tunnel/Camera Movement
      // We animate the "hallway-scene" Z position to simulate moving forward
      tl.to('.hallway-scene', {
        z: 2500, // Move camera forward past all cards
        ease: 'none', // Linear movement for scrolling
        duration: 4, // Takes longer relative to expansion
      });

      // Animate cards fading in
      const cards = windowEl.querySelectorAll('.process-card-wrapper');
      cards.forEach((card, index) => {
        const progressStart = 1 + (index * 0.5); 
        
        tl.fromTo(card, 
          { opacity: 0, scale: 0.8 }, 
          { 
            opacity: 1, 
            scale: 1, 
            duration: 0.5,
            ease: 'power1.out'
          }, 
          progressStart 
        );
      });
      
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen flex items-center justify-center bg-white overflow-hidden" 
    >
      {/* 1. Background Layer */}
      <ProcessBackground />

      {/* 2. The Expanding Window (Centered) */}
      <ProcessWindow ref={windowRef}>
        <ProcessHallway />
      </ProcessWindow>
    </section>
  );
}
