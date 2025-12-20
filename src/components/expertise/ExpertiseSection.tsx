'use client';

import { useRef, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ExpertiseHeadline from './ExpertiseHeadline';
import ExpertiseList from './ExpertiseList';
import Marquee3D from './Marquee3D';

gsap.registerPlugin(ScrollTrigger);

export default function ExpertiseSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Removed ScrollTrigger pinning to allow natural scroll
  // useLayoutEffect(() => { ... }, []);

  return (
    <section 
      ref={containerRef}
      id="expertise-section"
      className="relative w-full min-h-screen bg-white text-gray-900 z-20 py-32 overflow-hidden flex flex-col items-center"
    >
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center gap-16">
        <ExpertiseHeadline />
        <div className="flex flex-col items-center gap-8 w-full">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-3xl font-medium text-gray-900 w-full max-w-4xl"
            style={{ fontFamily: 'var(--font-instrument)', paddingLeft: '16px', paddingRight: '16px' }}
          >
            My Expertise
          </motion.h2>
          <ExpertiseList />
        </div>
        <div className="w-full py-12">
          <Marquee3D />
        </div>
      </div>
    </section>
  );
}

