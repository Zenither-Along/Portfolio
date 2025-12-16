'use client';

import { useEffect, useRef, ReactNode } from 'react';
import Image from 'next/image';
import { 
  SiFigma, 
  SiCanva, 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiJavascript, 
  SiTailwindcss, 
  SiGreensock, 
  SiFramer, 
  SiSupabase, 
  SiClerk,
  SiClaude,
  SiGooglegemini,
} from 'react-icons/si';

interface Tool {
  name: string;
  icon: ReactNode;
}

const tools: Tool[] = [
  { name: 'Figma', icon: <SiFigma size={32} /> },
  { name: 'Canva', icon: <SiCanva size={32} /> },
  { name: 'React', icon: <SiReact size={32} /> },
  { name: 'Next.js', icon: <SiNextdotjs size={32} /> },
  { name: 'TypeScript', icon: <SiTypescript size={32} /> },
  { name: 'JavaScript', icon: <SiJavascript size={32} /> },
  { name: 'Tailwind', icon: <SiTailwindcss size={32} /> },
  { name: 'GSAP', icon: <SiGreensock size={32} /> },
  { name: 'Framer Motion', icon: <SiFramer size={32} /> },
  { name: 'Supabase', icon: <SiSupabase size={32} /> },
  { name: 'Clerk', icon: <SiClerk size={32} /> },
  { name: 'Claude', icon: <SiClaude size={32} /> },
  { name: 'Gemini', icon: <SiGooglegemini size={32} /> },
  { name: 'Antigravity', icon: <Image src="/google-antigravity-logo.png" alt="Antigravity" width={32} height={32} style={{ filter: 'grayscale(100%)' }} /> },
];

function ToolCard({ name, icon }: Tool) {
  return (
    <div 
      className="flex-shrink-0 flex flex-col items-center justify-center group cursor-pointer"
      style={{ 
        width: '100px',
        padding: '16px 0',
      }}
    >
      {/* Icon Container */}
      <div 
        className="flex items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110"
        style={{
          width: '64px',
          height: '64px',
          backgroundColor: '#f5f5f5',
          border: '1px solid #e5e5e5',
          color: '#6b7280', // Grayscale color
          filter: 'grayscale(100%)',
        }}
      >
        {icon}
      </div>
      
      {/* Tool Name */}
      <span 
        className="text-xs font-medium text-gray-500 group-hover:text-gray-800 transition-colors duration-300 text-center"
        style={{ marginTop: '8px' }}
      >
        {name}
      </span>
    </div>
  );
}

export default function Marquee3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    
    // Get the width of one set of items
    const items = track.children;
    const halfLength = items.length / 2;
    let totalWidth = 0;
    
    for (let i = 0; i < halfLength; i++) {
      totalWidth += (items[i] as HTMLElement).offsetWidth;
    }
    
    // Animation variables
    let position = 0;
    const speed = 0.5; // pixels per frame
    
    const animate = () => {
      position -= speed;
      
      // Reset position seamlessly when we've scrolled one full set
      if (Math.abs(position) >= totalWidth) {
        position = 0;
      }
      
      track.style.transform = `translateX(${position}px)`;
      requestAnimationFrame(animate);
    };
    
    const animationId = requestAnimationFrame(animate);
    
    return () => cancelAnimationFrame(animationId);
  }, []);
  
  return (
    <div className="w-full mt-20 overflow-hidden">
      {/* Title */}
      <h3 
        className="text-center text-xl md:text-2xl font-serif font-medium text-gray-800"
        style={{ marginBottom: '20px' }}
      >
        Tools & Technologies
      </h3>
      
      {/* 3D Marquee Container */}
      <div 
        ref={containerRef}
        className="relative"
        style={{
          perspective: '1000px',
          perspectiveOrigin: 'center center',
        }}
      >
        {/* Fade edges */}
        <div 
          className="absolute left-0 top-0 bottom-0 z-10 pointer-events-none"
          style={{
            width: '120px',
            background: 'linear-gradient(to right, white 0%, transparent 100%)',
          }}
        />
        <div 
          className="absolute right-0 top-0 bottom-0 z-10 pointer-events-none"
          style={{
            width: '120px',
            background: 'linear-gradient(to left, white 0%, transparent 100%)',
          }}
        />
        
        {/* Scrolling Track with 3D effect */}
        <div
          className="relative"
          style={{
            transform: 'rotateX(10deg)',
            transformStyle: 'preserve-3d',
          }}
        >
          <div 
            ref={trackRef}
            className="flex"
            style={{ willChange: 'transform' }}
          >
            {/* First set of tools */}
            {tools.map((tool, index) => (
              <ToolCard key={`first-${index}`} {...tool} />
            ))}
            {/* Duplicate for seamless loop */}
            {tools.map((tool, index) => (
              <ToolCard key={`second-${index}`} {...tool} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

