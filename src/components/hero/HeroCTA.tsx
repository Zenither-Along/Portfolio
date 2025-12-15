'use client';

import { motion } from 'framer-motion';

interface HeroCTAProps {
  text?: string;
  href?: string;
}

export default function HeroCTA({ 
  text = "Get in touch",
  href = "#contact"
}: HeroCTAProps) {
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
    <motion.a
      href={href}
      initial="hidden"
      animate="visible"
      variants={itemVariants}
      className="group inline-flex items-center gap-2 bg-gray-900 text-white border-2 border-gray-900 rounded-full font-medium text-lg transition-all duration-300 hover:bg-white hover:text-gray-900"
      style={{ 
        fontFamily: 'var(--font-instrument)',
        padding: '10px 20px',
        gap: '12px'
      }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {text}
      {/* Arrow Icon */}
      <svg 
        className="transition-transform duration-300 group-hover:-rotate-45" 
        style={{ width: '20px', height: '20px' }}
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M7 17L17 7M17 7H7M17 7V17" 
        />
      </svg>
    </motion.a>
  );
}
