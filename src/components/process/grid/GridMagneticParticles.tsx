'use client';

import { useRef, useEffect, useMemo } from 'react';
import gsap from 'gsap';

export default function GridMagneticParticles() {
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement[]>([]);

  // Configuration
  const PARTICLE_COUNT = 60; // Increased density
  const ARROW_SHAPE = useMemo(() => {
    // Define relative positions (x, y) for an arrow pointing RIGHT (0 degrees)
    const points: {x: number, y: number}[] = [];
    
    // Shaft (Denser)
    for(let i=0; i<35; i++) {
        // Spread along X (-25 to +5)
        // Spread Randomly in Y (-3 to +3)
        points.push({ 
            x: -25 + (i * 0.8), 
            y: (Math.random() - 0.5) * 6 
        }); 
    }
    // Head (Denser)
    for(let i=0; i<25; i++) {
        // Triangle shape logic roughly
        // x from 5 to 25
        const prog = i / 25;
        const x = 5 + (prog * 20);
        // y narrows as x increases? No, arrow head widens then closes? 
        // Simple V shape:
        // Top edge: y = -2 to -12
        // Bottom edge: y = 2 to 12
        
        // Randomly fill the triangle cone
        const yRange = (1 - prog) * 12; // Wide at back of head, narrow at tip? 
        // Arrow head: Starts wide at x=5, goes to point at x=25?
        // Let's do: Point at x=25, y=0. Back of head at x=5, y=+-10.
        
        const spread = (1 - (i/25)) * 12; 
        points.push({ 
            x: 5 + (i * 0.8), 
            y: (Math.random() - 0.5) * spread * 2 
        });
    }
    
    return points.slice(0, PARTICLE_COUNT);
  }, []);

  useEffect(() => {
    // Mouse Move Handler
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Angle to mouse
      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;
      const angleRad = Math.atan2(deltaY, deltaX);
      
      // Animate particles to their new target positions
      particlesRef.current.forEach((particle, i) => {
        if(!particle) return;
        
        // Base shape position (unrotated)
        const base = ARROW_SHAPE[i] || {x:0, y:0};
        
        // Rotate this point by angleRad
        const rotX = base.x * Math.cos(angleRad) - base.y * Math.sin(angleRad);
        const rotY = base.x * Math.sin(angleRad) + base.y * Math.cos(angleRad);
        
        // Add dynamic noise (jitter)
        const jitterX = (Math.random() - 0.5) * 10; // More spread
        const jitterY = (Math.random() - 0.5) * 10;

        // Randomize physics per sphere
        const duration = 0.3 + Math.random() * 0.4;

        gsap.to(particle, {
          x: rotX + jitterX,
          y: rotY + jitterY,
          // No rotation needed for a sphere, but maybe scale pop?
          scale: 0.8 + Math.random() * 0.5,
          duration: duration,
          ease: 'power2.out',
          overwrite: 'auto'
        });
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [ARROW_SHAPE]);

  return (
    <div ref={containerRef} className="w-full h-full relative flex items-center justify-center overflow-hidden">
      {/* Container for the cloud */}
      <div className="relative w-0 h-0 flex items-center justify-center">
          {[...Array(PARTICLE_COUNT)].map((_, i) => (
             <div 
               key={i}
               ref={el => { if(el) particlesRef.current[i] = el; }}
               className="absolute w-1.5 h-1.5 rounded-full bg-slate-400 shadow-[1px_1px_2px_rgba(0,0,0,0.3)]"
               style={{
                   background: 'radial-gradient(circle at 30% 30%, #e2e8f0, #64748b)'
               }} 
             />
          ))}
      </div>
    </div>
  );
}
