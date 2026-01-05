'use client';

import { useLayoutEffect, useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import RuledPaperBackground from '@/components/work/RuledPaperBackground';
import EdgeFade from '@/components/work/EdgeFade';
import ProjectCard from '@/components/work/ProjectCard';
import ProjectAnnotations from '@/components/work/ProjectAnnotations';

import { projects } from '@/components/projects/projectsData';

export default function SelectedWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animate Header
      if (headerRef.current) {
        gsap.from(headerRef.current.children, {
          y: 30,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        });
      }

      // Animate each card individually based on scroll
      const cards = gsap.utils.toArray('.project-item-wrapper');
      cards.forEach((card: any) => {
        gsap.from(card, {
          y: isMobile ? 50 : 60, 
          rotation: 0, 
          // Set opacity to 0 for ALL devices so it fades in
          opacity: 0, 
          duration: isMobile ? 0.8 : 1, 
          ease: "power3.out", 
          scrollTrigger: {
            trigger: card,
            start: isMobile ? "top 85%" : "top 85%", 
            end: "top 60%", 
            toggleActions: "play none none reverse" 
          },
          clearProps: "transform, opacity, scale, y"
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, [isMobile]);

  return (
    <section 
      className="py-2 px-8 md:px-12 bg-white relative z-10 w-full rounded-t-[3rem] overflow-hidden"
      style={{ 
        paddingTop: '40px',
        paddingBottom: '100px',
        minHeight: '800px', 
      }}
    >
      {/* Ruled paper background */}
      <RuledPaperBackground />
      {/* Edge fade overlay for soft side transitions */}
      <EdgeFade />
      <div 
        className="max-w-7xl mx-auto relative z-10 flex flex-col items-center" 
        style={{ width: '100%', maxWidth: '1100px', margin: '0 auto' }}
      >
        {/* Decorative Annotations (Lines & Doodles) */}
        <ProjectAnnotations />

        {/* Header Row */}
        <div 
          ref={headerRef}
          className="w-full flex flex-col items-start mb-12"
          style={{ paddingLeft: '20px', paddingRight: '20px' }}
        >
          <h3 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6">Selected Entries</h3>
          <p className="text-gray-600 text-lg md:text-xl font-sans max-w-2xl">
            A chronicle of creative explorations and architectural builds, documented for the record.
          </p>
        </div>

        {/* Projects List - Vertical Stack with Staggered Alignment */}
        <div 
          ref={containerRef}
          className="w-full flex flex-col gap-16 md:gap-20 px-4 md:px-12"
          style={{ paddingTop: '50px' }}
        >
          {projects.map((project, index) => (
             <div 
               key={project.id}
               className={`project-item-wrapper relative w-full md:w-auto ${index % 2 === 0 ? 'md:self-start' : 'md:self-end'}`}
               style={{
                 marginTop: index !== 0 ? '-40px' : '0px', // Slight overlap or closer spacing if needed, but gap handles it mostly. Let's rely on gap. removed negative margin for now. 
               }}
             >
               <ProjectCard
                  {...project}
                  className="w-full"
                  style={{
                    '--card-rotation': `${project.rotation}deg`,
                  } as React.CSSProperties}
                />
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}



