'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FooterHeadingProps {
  line1?: string;
  line2?: string;
}

export default function FooterHeading({ 
  line1 = "Let's build",
  line2 = "incredible work together."
}: FooterHeadingProps) {
  const [index, setIndex] = useState(0);
  const words = ['build', 'create', 'design'];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className="flex flex-col gap-2"
      style={{ paddingLeft: '20px', paddingTop: '40px' }}
    >
      <h2 
        className="text-white flex items-center gap-3"
        style={{ 
          fontFamily: 'var(--font-instrument)',
          fontSize: 'clamp(2.5rem, 8vw, 6rem)',
          lineHeight: '1.1',
          fontWeight: 400,
        }}
      >
        <span>Let's</span>
        <div className="relative h-[1.1em] overflow-hidden min-w-[7ch]">
          <AnimatePresence mode="wait">
            <motion.span
              key={words[index]}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="absolute left-0 top-0"
            >
              {words[index]}
            </motion.span>
          </AnimatePresence>
        </div>
      </h2>
      <h2 
        className="text-gray-500"
        style={{ 
          fontFamily: 'var(--font-instrument)',
          fontSize: 'clamp(2.5rem, 8vw, 6rem)',
          lineHeight: '1.1',
          fontWeight: 400,
        }}
      >
        {line2}
      </h2>
    </div>
  );
}
