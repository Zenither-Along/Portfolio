'use client';

import Image from 'next/image';
import Link from 'next/link';
import Tape from '@/components/work/Tape';

export interface ProjectCardProps {
  id: number;
  title: string;
  category: string;
  image: string;
  link: string;
  tapeColors: {
    topLeft: string;
    topRight: string;
  };
  pillColor: string; // New prop for specific pill color
  rotation?: number;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * ProjectCard - Individual project card with taped paper effect
 * Matches the reference design with a white container and floating pill title bar
 */
export default function ProjectCard({
  title,
  category,
  image,
  link,
  tapeColors,
  pillColor,
  rotation = 0,
  className = '',
  style = {},
}: ProjectCardProps) {
  return (
    <div
      className={`project-card transition-transform duration-500 hover:z-20 md:transform-[rotate(var(--card-rotation))] ${className}`}
      style={{
        '--card-rotation': `${rotation}deg`,
        ...style,
      } as React.CSSProperties}
    >
      <Link href={link} className="block group relative">
        {/* Tape pieces - Outside the overflow hidden container */}
        <Tape color={tapeColors.topLeft} position="top-left" className="hidden md:block" />
        <Tape color={tapeColors.topRight} position="top-right" className="hidden md:block" />

        {/* Card Content Container - White, rounded, shadow - "Polaroid" style */}
        <div 
          className="relative bg-white rounded-[14px] overflow-hidden transition-all duration-500 block w-full md:w-[500px] h-[320px] md:h-[390px]"
          style={{
            boxShadow: '4px 4px 5px rgba(0,0,0,0.1)', 
          }}
        >
          {/* Image Container - Expands on hover */}
          <div 
            className="absolute top-[12px] left-[12px] right-[12px] bottom-[95px] rounded-[9px] overflow-hidden bg-gray-100 z-0 transition-all duration-500 ease-out"
          >
            <Image 
              src={image} 
              alt={title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          
          {/* Title Bar - Floating Pill near bottom, centered horizontally */}
          <div 
            className="absolute bottom-[20px] left-[20px] right-[20px] h-[60px] flex items-center justify-between rounded-[30px] overflow-hidden shadow-sm z-10 transition-all duration-300"
            style={{
              backgroundColor: pillColor,
              paddingLeft: '20px',
              paddingRight: '20px', 
            }}
          >
           {/* Project Icon - Collapses on hover */}
           <div className="relative w-[44px] h-[44px] rounded-full overflow-hidden shrink-0 border-2 border-white/20 transition-all duration-300 group-hover:w-0 group-hover:opacity-0 group-hover:border-0">
              <Image 
                src={image} 
                alt="icon" 
                width={44} 
                height={44} 
                className="object-cover"
              />
           </div>

            {/* Project Name - Slides left as icon disappears */}
            <span className="font-sans font-bold text-black text-lg md:text-xl tracking-tight truncate flex-1 ml-3 group-hover:ml-4 transition-all duration-300 text-left">
              {title}
            </span>

            {/* Arrow Button - Appears on right on hover */}
            <div className="w-0 opacity-0 group-hover:w-[44px] group-hover:opacity-100 transition-all duration-300 relative shrink-0">
              <div className="w-[44px] h-[44px] bg-white rounded-full flex items-center justify-center shadow-sm">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            
          </div>
        </div>
      </Link>
    </div>
  );
}
