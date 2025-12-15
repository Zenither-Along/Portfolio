'use client';

import { motion } from 'framer-motion';

interface HeroSubtitleProps {
  text?: string;
}

export default function HeroSubtitle({ 
  text = "I craft elegant, performant web experiences that delight users and inspire creativity - along___br"
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
      initial="hidden"
      animate="visible"
      variants={itemVariants}
      className="text-base md:text-lg text-gray-500 max-w-2xl leading-relaxed text-center"
      style={{ 
        fontFamily: 'var(--font-instrument)',
        marginBottom: '36px'
      }}
    >
      {text}
    </motion.p>
  );
}
