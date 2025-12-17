import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import GridCompass from './grid/GridCompass';

export default function ProcessBackground() {
  
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-white">
      {/* 1. Grid Lines Layer (Static) */}
      <div 
        className="absolute inset-0 w-full h-full opacity-[0.1] pointer-events-none z-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, #000 1px, transparent 1px),
            linear-gradient(to bottom, #000 1px, transparent 1px)
          `,
          backgroundSize: '20% 25vh',
          backgroundPosition: 'center',
        }}
      />

      {/* 2. Custom Grid Modules (Compass Needles) */}
      <div className="absolute inset-0 w-full h-full z-10">
         {/* 
            Visible Rows of interest:
            Row 1 (Top Visible): 12.5vh
            Row 2 (Center - Window is at Col 2): 37.5vh
            Row 3 (Bottom Visible): 62.5vh
         */}
         
         {/* --- ROW 1 (12.5vh) --- */}
         <div className="absolute top-[12.5vh] left-[0%] w-[20%] h-[25vh]">
            <GridCompass />
         </div>
         {/* Col 1: Compass */}
         <div className="absolute top-[12.5vh] left-[20%] w-[20%] h-[25vh]">
            <GridCompass />
         </div>

         {/* Col 2 (Center - Above Window): HEADING */}
         <div className="absolute top-[12.5vh] left-[40%] w-[20%] h-[25vh] flex items-center justify-center">
             <span className="text-2xl md:text-4xl lg:text-5xl font-semibold text-black tracking-tight">Process</span>
         </div>

         {/* Col 3: Compass */}
         <div className="absolute top-[12.5vh] left-[60%] w-[20%] h-[25vh]">
            <GridCompass />
         </div>
         <div className="absolute top-[12.5vh] left-[80%] w-[20%] h-[25vh]">
            <GridCompass />
         </div>


         {/* --- ROW 2 (37.5vh) - Center Flanking --- */}
         <div className="absolute top-[37.5vh] left-[0%] w-[20%] h-[25vh]">
            <GridCompass />
         </div>
         <div className="absolute top-[37.5vh] left-[20%] w-[20%] h-[25vh]">
            <GridCompass />
         </div>
         
         {/* Col 2 is CENTER WINDOW -> EMPTY */}

         <div className="absolute top-[37.5vh] left-[60%] w-[20%] h-[25vh]">
            <GridCompass />
         </div>
         <div className="absolute top-[37.5vh] left-[80%] w-[20%] h-[25vh]">
            <GridCompass />
         </div>


         {/* --- ROW 3 (62.5vh) - Bottom Visible --- */}
         <div className="absolute top-[62.5vh] left-[0%] w-[20%] h-[25vh]">
            <GridCompass />
         </div>
         <div className="absolute top-[62.5vh] left-[20%] w-[20%] h-[25vh]">
            <GridCompass />
         </div>
         <div className="absolute top-[62.5vh] left-[60%] w-[20%] h-[25vh]">
            <GridCompass />
         </div>
         <div className="absolute top-[62.5vh] left-[80%] w-[20%] h-[25vh]">
            <GridCompass />
         </div>

      </div>

      {/* 3. Vignette (Optional, kept light) */}
      <div 
        className="absolute inset-0 w-full h-full pointer-events-none z-30"
        style={{
          background: 'radial-gradient(circle at center, transparent 40%, white 100%)',
        }}
      />
    </div>
  );
}
