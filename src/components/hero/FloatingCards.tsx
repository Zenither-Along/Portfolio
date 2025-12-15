'use client';

import { motion } from 'framer-motion';

export default function FloatingCards() {
  return (
    <div className="absolute top-1/2 right-[5%] -translate-y-1/2 z-[3] hidden lg:block">
      {/* Card 1 - Creative Design */}
      <motion.div
        className="absolute w-[200px] -top-[150px] right-0 bg-white border border-gray-200 rounded-2xl p-6 shadow-xl backdrop-blur-sm"
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        whileHover={{
          y: -12,
          scale: 1.05,
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.2)',
        }}
      >
        <div className="mb-4">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
          </div>
        </div>
        <div>
          <div className="font-semibold mb-3 text-gray-900">Creative Design</div>
          <div className="h-2 bg-gradient-to-r from-[#667eea] to-[#764ba2] rounded w-4/5" />
        </div>
      </motion.div>

      {/* Card 2 - Clean Code */}
      <motion.div
        className="absolute w-[180px] top-0 right-[100px] bg-white border border-gray-200 rounded-2xl p-6 shadow-xl backdrop-blur-sm"
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
        whileHover={{
          y: -12,
          scale: 1.05,
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.2)',
        }}
      >
        <div className="mb-4">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
          </div>
        </div>
        <div>
          <div className="font-semibold mb-3 text-gray-900">Clean Code</div>
          <div className="flex flex-col gap-1.5">
            <div className="h-1.5 bg-gray-200 rounded" />
            <div className="h-1.5 bg-gray-200 rounded w-3/5" />
            <div className="h-1.5 bg-gray-200 rounded" />
          </div>
        </div>
      </motion.div>

      {/* Card 3 - Pixel Perfect */}
      <motion.div
        className="absolute w-[140px] top-[150px] right-[20px] bg-white border border-gray-200 rounded-2xl p-6 shadow-xl backdrop-blur-sm text-center"
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
        whileHover={{
          y: -12,
          scale: 1.05,
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.2)',
        }}
      >
        <div className="text-4xl mb-2">✨</div>
        <div className="text-sm font-semibold text-gray-900">Pixel Perfect</div>
      </motion.div>
    </div>
  );
}
