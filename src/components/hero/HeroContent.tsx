'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HeroContent() {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'circOut' as const,
      },
    },
  };

  return (
    <motion.h1
      initial="hidden"
      animate="visible"
      variants={itemVariants}
      className="text-4xl md:text-6xl lg:text-7xl leading-tight md:leading-tight tracking-tight text-gray-900 mb-12 md:mb-16 max-w-4xl text-center"
    >
      <span 
        className="inline-flex items-center flex-wrap justify-center gap-x-3 gap-y-2"
        style={{ verticalAlign: 'middle' }}
      >
        <span style={{ fontFamily: 'var(--font-instrument)' }} className="font-medium relative top-[2px] md:top-[4px]">
          Hi, I'm
        </span>
        
        {/* Small Image Frame */}
        <span 
          className="inline-block rounded-3xl border-2 border-gray-300 bg-gray-100 overflow-hidden relative w-[60px] h-[55px] md:w-[70px] md:h-[70px]"
          style={{ verticalAlign: 'middle' }}
        >
          <Image
            src="/chibi.jpg"
            alt="Alongbar Brahma"
            fill
            className="object-cover scale-150"
            style={{ objectPosition: 'center 25%' }}
          />
        </span>
        <span style={{ fontFamily: 'var(--font-playfair)' }} className="italic font-normal relative top-[2px] md:top-[4px]">
          Alongbar
        </span>
      </span>
      <br />
      <span style={{ fontFamily: 'var(--font-instrument)' }} className="font-medium">
        — I build things for the{' '}
      </span>
      <span style={{ fontFamily: 'var(--font-playfair)' }} className="italic font-normal">
        web
      </span>
    </motion.h1>
  );
}
