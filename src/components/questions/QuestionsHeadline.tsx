'use client';

import { useRef, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface QuestionsHeadlineProps {
  text?: string;
}

export default function QuestionsHeadline({ 
  text = "Questions you might have about working together and what to expect." 
}: QuestionsHeadlineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const chars = textRef.current?.querySelectorAll('.reveal-text');
      
      if (chars) {
        gsap.to(chars, {
          color: '#1a1a1a',
          stagger: 0.1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "center 30%",
            scrub: 0.5,
          }
        });
      }
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <motion.div 
      ref={containerRef} 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col items-start"
    >
      <div 
        ref={textRef}
        className="flex flex-wrap gap-x-4 gap-y-2 text-3xl md:text-4xl lg:text-5xl max-w-5xl leading-relaxed font-semibold"
        style={{ 
          fontFamily: 'var(--font-instrument)', 
          paddingLeft: '20px', 
          paddingRight: '20px' 
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
    </motion.div>
  );
}
