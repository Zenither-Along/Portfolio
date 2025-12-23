'use client';

import { useLayoutEffect, useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import RuledPaperBackground from '@/components/work/RuledPaperBackground';
import EdgeFade from '@/components/work/EdgeFade';
import ProjectCard from '@/components/work/ProjectCard';
import AllProjectsAnnotations from '@/components/projects/AllProjectsAnnotations';

import { projects } from './projectsData';

gsap.registerPlugin(ScrollTrigger);

export default function AllProjects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    
    // Initial check
    checkMobile();
    
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useLayoutEffect(() => {
    // Force scroll to top ONLY on initial mount
    window.scrollTo(0, 0);
  }, []);

  useLayoutEffect(() => {
    // Animations restored to match SelectedWorks
    const ctx = gsap.context(() => {
        const cards = gsap.utils.toArray('.project-item-wrapper');
        cards.forEach((card: any) => {
          gsap.from(card, {
            y: isMobile ? 50 : 60, 
            rotation: 0, 
            // Set opacity to 0 for ALL devices so it fades in
            opacity: 0, 
            duration: isMobile ? 1 : 1, 
            ease: "power3.out", 
            scrollTrigger: {
              trigger: card,
              start: isMobile ? "top 75%" : "top 55%", 
              end: "top 40%", 
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
      ref={containerRef}
      className="min-h-screen bg-white relative w-full pb-24 overflow-hidden projects-section"
    >
      <style jsx global>{`
        .projects-section {
          padding-top: 150px;
          padding-bottom: 150px;
          transition: padding 0.1s ease;
        }
        .projects-header {
          margin-bottom: 40px;
          transition: margin-bottom 0.3s ease;
        }
        .projects-grid {
          gap: 64px;
          transition: gap 0.1s ease;
        }
        /* Opacity rule removed */
        @media (min-width: 768px) {
          .projects-section {
            padding-top: 240px;
            padding-bottom: 250px;
          }
          .projects-header {
            margin-bottom: 120px;
          }
          .projects-grid {
            gap: 110px;
          }
        }
      `}</style>
      
      {/* Backgrounds */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <RuledPaperBackground />
        <EdgeFade />
      </div>

      <div 
        className="max-w-7xl mx-auto relative z-10 flex flex-col items-center"
        style={{ width: '100%', maxWidth: '1100px', margin: '0 auto' }}
      >
        {/* Annotations */}
        <div className="absolute inset-0 pointer-events-none z-0">
             <AllProjectsAnnotations />
        </div>

        {/* Page Header */}
        <div 
          className="w-full flex flex-col items-center text-center px-6 relative z-10 projects-header"
        >
          <h1 className="text-4xl md:text-6xl font-serif text-gray-900 mb-6">All Projects</h1>
          <p className="text-gray-600 text-lg md:text-xl font-sans max-w-2xl">
            A comprehensive archive of design, development, and experiments.
          </p>
        </div>

        {/* Projects Grid/List */}
        <div 
          className="w-full flex flex-col px-4 md:px-12 projects-grid"
        >
          {projects.map((project, index) => (
             <div 
               key={project.id}
               className={`project-item-wrapper relative w-full md:w-auto ${index % 2 === 0 ? 'md:self-start' : 'md:self-end'}`}
               style={{
                 marginTop: index !== 0 ? '-40px' : '0px',
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

        {/* Footer/Bottom Note */}
        <div className=" text-center text-gray-400 font-handwriting text-xl rotate-[-2deg]"
             style={{
               marginTop: isMobile ? '80px' : '120px',
               transition: 'margin-top 0.3s ease'
             }} >
          More coming soon...
        </div>
      </div>
    </section>
  );
}
