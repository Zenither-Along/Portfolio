'use client';

import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const underlineRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const button = buttonRef.current;
    const underline = underlineRef.current;
    if (!section || !button || !underline) return;

    const ctx = gsap.context(() => {
      // Animate button on scroll into view
      gsap.fromTo(button,
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: button,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          }
        }
      );

      // Underline animation on hover
      button.addEventListener('mouseenter', () => {
        gsap.to(underline, {
          scaleX: 1,
          duration: 0.4,
          ease: 'power2.out'
        });
      });

      button.addEventListener('mouseleave', () => {
        gsap.to(underline, {
          scaleX: 0,
          duration: 0.4,
          ease: 'power2.out'
        });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative w-full bg-white flex items-center justify-center"
      style={{ paddingTop: '6rem', paddingBottom: '6rem' }}
    >
      {/* Simple Text Button with Underline Animation */}
      <a
        ref={buttonRef}
        href="mailto:your.email@example.com"
        className="relative inline-block group"
        style={{
          fontSize: 'clamp(2rem, 5vw, 4rem)',
          fontWeight: 500,
          fontFamily: 'var(--font-instrument)',
          color: '#0A0A0A',
          textDecoration: 'none',
          padding: '0.5rem 0',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
        Let's Connect
        
        {/* Sparkle Icon */}
        <svg 
          width="1em" 
          height="1em" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
          strokeLinecap="round" 
          strokeLinejoin="round"
          style={{ 
            width: '0.7em', 
            height: '0.7em',
          }}
        >
          <path d="M12 2v20M2 12h20M6 6l12 12M6 18L18 6" />
        </svg>
        
        Get in Touch
        
        {/* Animated underline */}
        <span
          ref={underlineRef}
          className="absolute bottom-0 left-0 w-full h-0.5 bg-black origin-left"
          style={{
            transform: 'scaleX(0)',
          }}
        />
      </a>
    </section>
  );
}
