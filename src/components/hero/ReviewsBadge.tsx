'use client';

import { motion } from 'framer-motion';

export default function StatusBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2, ease: 'circOut' }}
      className="inline-flex items-center gap-3 bg-white border border-gray-200 rounded-full mb-10 shadow-sm"
      style={{ 
        padding: '6px 18px',
        marginBottom: '26px' // Increased spacing
      }}
    >
      {/* Status indicator */}
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        <span className="text-sm font-medium text-gray-700">
          Available for Projects
        </span>
      </div>
      
      {/* Divider */}
      <span className="text-gray-300">•</span>
      
      {/* Role */}
      <span className="text-sm font-medium text-gray-700">
        Next.js Developer
      </span>
    </motion.div>
  );
}
