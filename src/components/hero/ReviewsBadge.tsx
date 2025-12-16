'use client';

import { motion } from 'framer-motion';
import { BorderBeam } from '../ui/BorderBeam';

export default function StatusBadge() {
  return (
    <div className="relative inline-block" style={{ marginBottom: '26px' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: 'circOut' }}
        className="relative inline-flex items-center gap-3 bg-white border border-gray-200 rounded-full shadow-sm"
        style={{ 
          padding: '2px 18px'
        }}
      >
        {/* Border beam effect */}
        <BorderBeam 
          size={140}
          duration={8}
          colorFrom="#60A5FA"
          colorTo="#3B82F6"
          borderThickness={2}
        />
        
        {/* Status indicator with pulse ring */}
        <div className="flex items-center gap-2">
          <div className="relative">
            <span className="absolute inset-0 w-2 h-2 rounded-full bg-green-500 animate-ping opacity-75" />
            <span className="relative block w-2 h-2 rounded-full bg-green-500" />
          </div>
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
    </div>
  );
}
