'use client';

import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ExpertiseHeadlineProps {
  text?: string;
}

export default function ExpertiseHeadline({ 
  text = "Where design sensibility meets code to craft experiences that feel naturally right." 
}: ExpertiseHeadlineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const chars = textRef.current?.querySelectorAll('.reveal-text');
      
      if (chars) {
        // Set initial state
        gsap.set(chars, { y: 20, opacity: 0 });

        gsap.to(chars, {
          y: 0,
          opacity: 1,
          color: '#1a1a1a',
          stagger: 0.05,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            end: "center 45%",
            scrub: 1,
          }
        });
      }
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col items-start">
      <div 
        ref={textRef}
        className="flex flex-wrap gap-x-4 gap-y-2 text-3xl md:text-4xl lg:text-5xl max-w-5xl leading-relaxed font-semibold"
        style={{ 
          fontFamily: 'var(--font-instrument)', 
          paddingLeft: '20px', 
          paddingRight: '20px',
          paddingTop: '20px'
        }}
      >
        {text.split(" ").map((word, i) => (
          <span key={i} className="whitespace-nowrap">
            {word.split("").map((char, j) => (
              <span 
                key={j} 
                className="reveal-text inline-block"
                style={{ color: '#d1d5db' }}
              >
                {char}
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}
