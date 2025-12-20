'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Marquee item content component
  const MarqueeItem = () => (
    <a
      href="/contact"
      className="inline-flex items-center gap-4 mx-8 group hover:opacity-70 transition-opacity"
      style={{
        fontSize: 'clamp(2rem, 5vw, 4rem)',
        fontWeight: 500,
        fontFamily: 'var(--font-instrument)',
        color: '#0A0A0A',
        textDecoration: 'none',
      }}
    >
      Let's Connect
      
      {/* Sparkle Icon */}
      <svg 
        width="1em" 
        height="1em" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2"
        strokeLinecap="round" 
        strokeLinejoin="round"
        style={{ 
          width: '0.7em', 
          height: '0.7em',
        }}
      >
        <path d="M12 2v20M2 12h20M6 6l12 12M6 18L18 6" />
      </svg>
      
      Get in Touch
      
      {/* Arrow Icon */}
      <svg 
        width="1em" 
        height="1em" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        style={{ 
          width: '0.7em', 
          height: '0.7em',
        }}
      >
        <path d="M7 17L17 7" />
        <path d="M7 7h10v10" />
      </svg>
    </a>
  );

  return (
    <section 
      ref={sectionRef}
      className="relative w-full bg-white flex items-center overflow-hidden"
      style={{ paddingTop: '6rem', paddingBottom: '6rem' }}
    >
      {/* Marquee Track */}
      <motion.div 
        className="flex whitespace-nowrap"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {/* First set of items */}
        <div className="flex">
          {[...Array(4)].map((_, i) => (
            <MarqueeItem key={`Item-1-${i}`} />
          ))}
        </div>
        {/* Duplicate set for seamless loop */}
        <div className="flex">
          {[...Array(4)].map((_, i) => (
            <MarqueeItem key={`Item-2-${i}`} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
