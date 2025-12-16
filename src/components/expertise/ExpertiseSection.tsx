'use client';

import ExpertiseHeadline from './ExpertiseHeadline';
import ExpertiseList from './ExpertiseList';
import Marquee3D from './Marquee3D';

export default function ExpertiseSection() {
  return (
    <section 
      id="expertise-section"
      className="relative w-full min-h-screen bg-white text-gray-900 z-20 py-32 overflow-hidden flex flex-col items-center"
    >
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center gap-16">
        <ExpertiseHeadline />
        <ExpertiseList />
        <Marquee3D />
      </div>
    </section>
  );
}

