'use client';

import { motion } from 'framer-motion';

interface HeroSubtitleProps {
  text?: string;
}

export default function HeroSubtitle({ 
  text = "I focus on clean code, thoughtful design, and building experiences that feel both intuitive and delightful."
}: HeroSubtitleProps) {
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
    <motion.p
      variants={itemVariants}
      className="text-lg md:text-xl text-gray-500 max-w-2xl leading-relaxed text-center"
      style={{ 
        fontFamily: 'var(--font-instrument)',
        marginBottom: '44px'
      }}
    >
      {text}
    </motion.p>
  );
}
