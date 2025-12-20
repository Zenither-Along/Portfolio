'use client';

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import RuledPaperBackground from '@/components/work/RuledPaperBackground';
import EdgeFade from '@/components/work/EdgeFade';
import ProjectCard from '@/components/work/ProjectCard';
import ProjectAnnotations from '@/components/work/ProjectAnnotations';

const projects = [
  {
    id: 4,
    title: "The Silent Witch",
    category: "Corporate / Branding",
    image: "/test-image.jpg",
    tapeColors: { topLeft: '#F97316', topRight: '#F97316' }, // Orange
    pillColor: '#50ff50', // Neon Green from reference
    rotation: 2.2, // No rotation for focused editing? Or keep a slight one? Let's keep 0 for clarity now, or reference had 2.5. Let's do 0 to start perfectly straight.
    link: "#"
  },
  {
    id: 5,
    title: "Kotion Perfume",
    category: "Product Design",
    image: "/test-image.jpg", // Using same test image for now
    tapeColors: { topLeft: '#A855F7', topRight: '#A855F7' }, // Purple
    pillColor: '#94deff', // Light Blue
    rotation: -3,
    link: "#"
  },
  {
    id: 6,
    title: "Urban Architecture",
    category: "Photography",
    image: "/test-image.jpg",
    tapeColors: { topLeft: '#3B82F6', topRight: '#3B82F6' }, // Blue
    pillColor: '#ffd9b6', // Peach
    rotation: 2.2,
    link: "#"
  },
  {
    id: 7,
    title: "Geometric Shapes",
    category: "3D Art",
    image: "/test-image.jpg",
    tapeColors: { topLeft: '#EF4444', topRight: '#EF4444' }, // Red
    pillColor: '#e0e0e0', // Gray
    rotation: -2.3,
    link: "#"
  }
];

export default function SelectedWorks() {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animate each card individually based on scroll
      const cards = gsap.utils.toArray('.project-card');
      cards.forEach((card: any) => {
        gsap.from(card, {
          y: 80,
          scale: 0.9,
          opacity: 0,
          rotation: 0, // Start straight, rotate to final CSS angle on scroll
          duration: 1, // Logic handled by scrub
          ease: "none", // Linear scrub
          scrollTrigger: {
            trigger: card,
            start: "top 95%", // Start animating when card just enters view
            end: "top 60%", // Finish when it's well inside
            scrub: 1,
            toggleActions: "play reverse play reverse"
          },
          clearProps: "transform, opacity, scale, y"
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

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
          className="w-full flex flex-col gap-12 md:gap-20 px-4 md:px-12"
          style={{ paddingTop: '50px' }}
        >
          {projects.map((project, index) => (
             <div 
               key={project.id}
               className={`project-card relative w-full md:w-auto ${index % 2 === 0 ? 'md:self-start' : 'md:self-end'}`}
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



