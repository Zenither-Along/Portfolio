'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import RotatingWords from './RotatingWords';

export default function HeroContent() {
  const [isImageOpen, setIsImageOpen] = useState(false);

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
    <>
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
          
          {/* Small Image Frame - Clickable */}
          <motion.span 
            className="inline-block rounded-3xl border-2 border-gray-300 bg-gray-100 overflow-hidden relative w-[60px] h-[55px] md:w-[70px] md:h-[70px] cursor-pointer"
            style={{ verticalAlign: 'middle' }}
            onClick={() => setIsImageOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              src="/chibi.jpg"
              alt="Alongbar Brahma"
              fill
              className="object-cover scale-150"
              style={{ objectPosition: 'center 25%' }}
            />
          </motion.span>
          <span 
            style={{ fontFamily: 'var(--font-playfair)' }} 
            className="italic font-normal relative top-[2px] md:top-[4px] text-gray-900"
          >
            Alongbar
            {/* Animated Sparkle */}
            <span className="absolute -top-2 -right-6 w-5 h-5 inline-flex">
               <motion.svg
                 viewBox="0 0 24 24" 
                 fill="none" 
                 xmlns="http://www.w3.org/2000/svg"
                 className="w-full h-full text-purple-500"
                 animate={{ 
                   rotate: 360,
                   scale: [1, 1.2, 1]
                 }}
                 transition={{ 
                   rotate: { duration: 4, repeat: Infinity, ease: "linear" },
                   scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                 }}
               >
                 <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="currentColor" />
               </motion.svg>
            </span>
          </span>
        </span>
        <br />
        <span>
          <span style={{ fontFamily: 'var(--font-instrument)' }} className="font-medium">
            — I build things for the{' '}
          </span>
          <span className="inline-block relative" style={{ width: '6.5ch', height: '1em' }}>
            <RotatingWords 
              words={['web', 'future', 'world']}
              className="italic font-normal text-gray-900 absolute left-0 w-full"
              style={{ fontFamily: 'var(--font-playfair)' }}
            />
          </span>
        </span>
      </motion.h1>

      {/* Image Viewer Modal */}
      <AnimatePresence>
        {isImageOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm cursor-pointer"
            onClick={() => setIsImageOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-3xl overflow-hidden border-4 border-white/20 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src="/chibi.jpg"
                alt="Alongbar Brahma"
                fill
                className="object-cover"
                style={{ objectPosition: 'center 25%' }}
              />
            </motion.div>
            
            {/* Close button */}
            <button
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              onClick={() => setIsImageOpen(false)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
