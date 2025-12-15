'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const navLinks = ['Home', 'Projects', 'Expertise', 'Contact'];

export default function ProfileBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if desktop viewport
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    checkDesktop();
    window.addEventListener('resize', checkDesktop);

    // Create scroll trigger that updates progress from 0 to 1
    const trigger = ScrollTrigger.create({
      start: 'top top',
      end: '+=300', // Over 300px of scroll
      onUpdate: (self) => {
        setScrollProgress(self.progress);
      }
    });

    return () => {
      window.removeEventListener('resize', checkDesktop);
      trigger.kill();
    };
  }, []);

  // Calculate values based on scroll progress (only on desktop)
  const progress = isDesktop ? scrollProgress : 0;
  
  // Width: 768px -> 280px (interpolate) - min width fits profile + hamburger
  const maxWidth = 768 - (488 * progress); // 768 to 280
  const width = `min(calc(100% - 32px), ${maxWidth}px)`;
  
  // Gap between nav items: 32px -> 8px
  const navGap = 32 - (24 * progress);
  
  // Nav items opacity: 1 -> 0 (fade out between 30% and 70% progress)
  const navOpacity = progress < 0.3 ? 1 : progress > 0.7 ? 0 : 1 - ((progress - 0.3) * 2.5);
  
  // Hamburger opacity: 0 -> 1 (fade in between 30% and 70% progress)
  const hamburgerOpacity = progress < 0.3 ? 0 : progress > 0.7 ? 1 : (progress - 0.3) * 2.5;
  
  // Padding: 12px 20px -> 10px 16px
  const paddingY = 12 - (2 * progress);
  const paddingX = 20 - (4 * progress);

  return (
    <motion.header
      ref={headerRef}
      initial={{ opacity: 0, y: -20 }}
      animate={{ 
        opacity: 1, 
        y: 0,
        borderRadius: isOpen ? '24px' : '35px'
      }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-white/60 backdrop-blur-md border border-white/40 shadow-sm overflow-hidden"
      style={{ width, maxWidth: `${maxWidth}px` }}
    >
      <div className="flex flex-col w-full">
        {/* Top Row: Profile + Navigation/Hamburger */}
        <div 
          className="flex items-center justify-between w-full"
          style={{ padding: `${paddingY}px ${paddingX}px` }}
        >
          {/* Profile Info */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden relative shrink-0">
              {/* Avatar placeholder */}
              <div className="absolute inset-0 bg-linear-to-tr from-gray-400 to-gray-200" />
            </div>
            <div className="text-left whitespace-nowrap">
              <h3 className="text-sm font-bold text-gray-900 leading-tight">
                Alongbar Brahma
              </h3>
              <p className="text-xs text-gray-500">Web Developer, Student</p>
            </div>
          </div>

          {/* Navigation / Hamburger Container */}
          <div className="flex items-center">
            {/* Navigation (Desktop) - Fades out with scroll */}
            <nav 
              ref={navRef}
              className="hidden md:flex items-center transition-opacity"
              style={{ 
                gap: `${navGap}px`,
                paddingRight: '0.5rem',
                opacity: navOpacity,
                pointerEvents: navOpacity < 0.3 ? 'none' : 'auto',
                display: navOpacity < 0.05 ? 'none' : undefined
              }}
            >
              {navLinks.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors relative group whitespace-nowrap"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 transition-all group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Hamburger Menu Button - Fades in with scroll on desktop, always visible on mobile */}
            <button 
              className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
              style={{ 
                opacity: isDesktop ? hamburgerOpacity : 1,
                display: isDesktop && hamburgerOpacity < 0.05 ? 'none' : 'block'
              }}
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
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="w-full border-t border-gray-100/50"
            >
              <nav 
                className="flex flex-col"
                style={{
                  gap: '16px',
                  padding: '10px',
                  paddingBottom: '30px'
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
