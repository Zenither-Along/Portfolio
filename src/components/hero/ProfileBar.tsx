import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineAcademicCap, HiOutlineLocationMarker, HiOutlineSparkles } from 'react-icons/hi';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const navLinks = ['Home', 'Sanctuary', 'Services', 'Contact'];

export default function ProfileBar() {
  const [expandedType, setExpandedType] = useState<'menu' | 'about' | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
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

    // Create scroll trigger to hide navbar when footer is visible
    const footerTrigger = ScrollTrigger.create({
      trigger: '#main-footer',
      start: 'top bottom', // When top of footer hits bottom of viewport
      onEnter: () => setIsVisible(false),
      onLeaveBack: () => setIsVisible(true),
    });

    return () => {
      window.removeEventListener('resize', checkDesktop);
      trigger.kill();
      footerTrigger.kill();
    };
  }, []);

  // Handle click outside to close expanded bar
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setExpandedType(null);
      }
    };

    if (expandedType) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [expandedType]);

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

  const toggleExpanded = (type: 'menu' | 'about') => {
    setExpandedType(expandedType === type ? null : type);
  };

  return (
    <motion.header
      ref={headerRef}
      initial={{ opacity: 0, y: -20 }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        y: isVisible ? 0 : -100,
        borderRadius: expandedType ? '24px' : '35px',
        pointerEvents: isVisible ? 'auto' : 'none'
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
          {/* Profile Info - Clickable */}
          <button 
            onClick={() => toggleExpanded('about')}
            className="flex items-center gap-3 shrink-0 group/profile text-left focus:outline-hidden cursor-pointer"
          >
            <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden relative shrink-0 ring-2 ring-transparent group-hover/profile:ring-gray-200 transition-all">
              <div className="absolute inset-0 bg-linear-to-tr from-gray-400 to-gray-200" />
            </div>
            <div className="text-left whitespace-nowrap">
              <h3 className="text-sm font-bold text-gray-900 leading-tight group-hover/profile:text-black transition-colors">
                Alongbar Brahma
              </h3>
              <p className="text-xs text-gray-500">Designer, Developer, Student</p>
            </div>
          </button>

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
                  href={
                    item === 'Home' ? '/' :
                    item === 'Contact' ? '/contact' : 
                    item === 'Sanctuary' ? '/sanctuary' : 
                    item === 'Services' ? '/services' : 
                    `#${item.toLowerCase()}`
                  }
                  className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors relative group whitespace-nowrap"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 transition-all group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Hamburger Menu Button - Fades in with scroll on desktop, always visible on mobile */}
            <button 
              className="p-2 text-gray-600 hover:text-gray-900 transition-colors focus:outline-hidden cursor-pointer"
              style={{ 
                opacity: isDesktop ? hamburgerOpacity : 1,
                display: isDesktop && hamburgerOpacity < 0.05 ? 'none' : 'block'
              }}
              onClick={() => toggleExpanded('menu')}
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <motion.span 
                  animate={{ rotate: expandedType === 'menu' ? 45 : 0, y: expandedType === 'menu' ? 9 : 0 }}
                  className="w-full h-0.5 bg-current rounded-full origin-center transition-transform"
                />
                <motion.span 
                  animate={{ opacity: expandedType === 'menu' ? 0 : 1 }}
                  className="w-full h-0.5 bg-current rounded-full transition-opacity"
                />
                <motion.span 
                  animate={{ rotate: expandedType === 'menu' ? -45 : 0, y: expandedType === 'menu' ? -9 : 0 }}
                  className="w-full h-0.5 bg-current rounded-full origin-center transition-transform"
                />
              </div>
            </button>
          </div>
        </div>

        {/* Expanded View (Menu or About) */}
        <AnimatePresence mode="wait">
          {expandedType && (
            <motion.div
              key={expandedType}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="w-full border-t border-gray-100/50"
            >
              {expandedType === 'menu' ? (
                <nav 
                  className="flex flex-col"
                  style={{
                    gap: '12px',
                    padding: '16px',
                    paddingBottom: '32px'
                  }}
                >
                  {navLinks.map((item, index) => (
                    <motion.a
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.05 }}
                      href={
                        item === 'Home' ? '/' :
                        item === 'Contact' ? '/contact' : 
                        item === 'Sanctuary' ? '/sanctuary' : 
                        item === 'Services' ? '/services' : 
                        `#${item.toLowerCase()}`
                      }
                      className="px-4 py-3 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-white/50 rounded-xl transition-all text-center"
                      onClick={() => setExpandedType(null)}
                    >
                      {item}
                    </motion.a>
                  ))}
                </nav>
              ) : (
                <div 
                  className="flex flex-col gap-6 text-left"
                  style={{ padding: '24px 24px 40px' }}
                >
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-sm font-sans">
                    I'm Alongbar Brahma, a web developer and student focused on creating clean, interactive experiences. I love blending design and code to build products that feel alive and intuitive.
                  </p>
                  
                  {/* Quick Points */}
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3 text-gray-700">
                      <HiOutlineAcademicCap className="w-5 h-5 text-gray-400" />
                      <span className="text-sm font-medium">Pursuing BCA (Bachelor of Computer Applications)</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                      <HiOutlineLocationMarker className="w-5 h-5 text-gray-400" />
                      <span className="text-sm font-medium">Based in North East India</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                      <HiOutlineSparkles className="w-5 h-5 text-gray-400" />
                      <span className="text-sm font-medium">Focused on interactive UI & GSAP animations</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-start gap-4 mt-2">
                    <a 
                      href="/contact" 
                      onClick={() => setExpandedType(null)}
                      className="text-xs font-bold text-gray-900 hover:underline tracking-tight"
                    >
                      LET'S CONNECT
                    </a>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
