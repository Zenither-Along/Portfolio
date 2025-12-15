'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = ['Home', 'Projects', 'Expertise', 'Contact'];

export default function ProfileBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20, borderRadius: '50px' }}
      animate={{ 
        opacity: 1, 
        y: 0,
        borderRadius: isOpen ? '24px' : '35px'
      }}
      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }} // Smooth spring-like easing
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-white/60 backdrop-blur-md border border-white/40 shadow-sm overflow-hidden"
      style={{
        width: 'calc(100% - 32px)',
        maxWidth: '48rem',
      }}
    >
      <div className="flex flex-col w-full">
        {/* Top Row: Profile + Hamburger */}
        <div 
          className="flex items-center justify-between w-full"
          style={{ padding: '12px 20px' }}
        >
          {/* Profile Info */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden relative shrink-0">
              {/* Avatar placeholder */}
              <div className="absolute inset-0 bg-linear-to-tr from-gray-400 to-gray-200" />
            </div>
            <div className="text-left">
              <h3 className="text-sm font-bold text-gray-900 leading-tight">
                Alongbar Brahma
              </h3>
              <p className="text-xs text-gray-500">Web Developer, Student</p>
            </div>
          </div>

          {/* Navigation (Desktop) */}
          <nav className="hidden md:flex items-center gap-8" style={{ paddingRight: '0.5rem' }}>
            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 transition-all group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button - Functional */}
          <button 
            className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <motion.span 
                animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 9 : 0 }}
                className="w-full h-0.5 bg-current rounded-full origin-center transition-transform"
              />
              <motion.span 
                animate={{ opacity: isOpen ? 0 : 1 }}
                className="w-full h-0.5 bg-current rounded-full transition-opacity"
              />
              <motion.span 
                animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -9 : 0 }}
                className="w-full h-0.5 bg-current rounded-full origin-center transition-transform"
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu Dropdown (Inside Flow) */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="md:hidden w-full border-t border-gray-100/50"
            >
              <nav 
                className="flex flex-col"
                style={{
                  gap: '16px',
                  padding: '10px',
                  paddingBottom: '30px' // Extra space at bottom
                }}
              >
                {navLinks.map((item, index) => (
                  <motion.a
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                    href={`#${item.toLowerCase()}`}
                    className="px-4 py-4 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-white/50 rounded-xl transition-all text-center"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </motion.a>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
