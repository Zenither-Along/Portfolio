'use client';

import { useState, useLayoutEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';

const projects = [
  {
    id: 1,
    title: "Revitalizing Customer Engagement for FluxCRM",
    category: "CRM / UX Redesign",
    image: "/project-1.jpg", 
    color: "bg-orange-500",
    link: "#"
  },
  {
    id: 2,
    title: "Streamlining E-Commerce for ZenithCart",
    category: "E-Commerce / Platform",
    image: "/project-2.jpg", 
    color: "bg-zinc-800",
    link: "#"
  },
  {
    id: 3,
    title: "Designing a Seamless User Experience for TaskFlow",
    category: "Productivity / SaaS",
    image: "/project-3.jpg",
    color: "bg-amber-600",
    link: "#"
  },
  {
    id: 4,
    title: "Revamping the Digital Experience for NexaTech",
    category: "Corporate / Branding",
    image: "/project-4.jpg",
    color: "bg-slate-700",
    link: "#"
  }
];

export default function SelectedWorks() {
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Ensure any previous animations are killed
      gsap.killTweensOf(".project-card");
      
      // Animate from hidden state to natural state
      // This is safer than .set() + .to() as it respects the element's layout
      gsap.from(".project-card", {
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        clearProps: "all" 
      });
    }, containerRef);

    return () => ctx.revert();
  }, [view]);

  return (
    <section 
      className="py-2 px-4 md:px-8 bg-white relative z-10 w-full rounded-t-[3rem]"
      style={{ paddingTop: '25px' }}
    >
      <div 
        className="max-w-7xl mx-auto"
        style={{ width: '100%', maxWidth: '1100px', margin: '0 auto' }}
      >
        {/* Header Row */}
        <div 
          className="flex justify-between items-end mb-12"
          style={{ marginBottom: '35px' }}
        >
          <h3 className="text-3xl md:text-4xl font-serif text-gray-900">Featured Projects</h3>
          
          {/* View Toggle */}
          <div className="hidden md:flex gap-2 bg-gray-100 p-1.5 rounded-xl items-center">
             <button 
               onClick={() => setView('grid')}
               className={`p-2.5 rounded-lg transition-all duration-300 ${view === 'grid' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}
               aria-label="Grid View"
             >
                {/* Custom Filled Grid Icon */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 3H3V10H10V3Z" />
                  <path d="M21 3H14V10H21V3Z" />
                  <path d="M21 14H14V21H21V14Z" />
                  <path d="M10 14H3V21H10V14Z" />
                </svg>
             </button>
             <button 
               onClick={() => setView('list')}
               className={`p-2.5 rounded-lg transition-all duration-300 ${view === 'list' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}
               aria-label="List View"
             >
                {/* Custom List with Bullets Icon */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="8" y1="6" x2="21" y2="6"/>
                  <line x1="8" y1="12" x2="21" y2="12"/>
                  <line x1="8" y1="18" x2="21" y2="18"/>
                  <path d="M3 6h.01M3 12h.01M3 18h.01" strokeWidth="3.5" />
                </svg>
             </button>
          </div>
        </div>

        {/* Dynamic Grid/List Container */}
        <div 
          ref={containerRef}
          className={`grid gap-6 w-full ${view === 'grid' ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}`}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="w-full project-card" // Removed opacity-0 to prevent permanent invisibility
            >
              <Link href={project.link} className="block group w-full h-full">
                <div 
                  className={`relative w-full overflow-hidden ${project.color} shadow-sm transition-all duration-500 hover:shadow-xl group-hover:scale-[1.01] rounded-2xl ${view === 'list' ? 'aspect-[21/9]' : 'aspect-[4/3]'}`}
                >
                  
                  {/* Image / Mockup Placeholder */}
                  <div className="absolute inset-0">
                     <Image 
                       src={project.image} 
                       alt={project.title}
                       fill
                       className="object-cover transition-transform duration-700 group-hover:scale-105"
                     />
                     {/* Overlay Gradient (Bottom) */}
                     <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  </div>

                  {/* Text Content (Bottom Overlay) */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h4 className={`font-medium text-white leading-tight mb-2 font-sans tracking-tight ${view === 'list' ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'}`}>
                      {project.title}
                    </h4>
                    {/* Optional hover reveal details */}
                    <div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-300 opacity-0 group-hover:opacity-100">
                       <p className="text-white/70 text-sm mt-2">{project.category}</p>
                    </div>
                  </div>

                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
