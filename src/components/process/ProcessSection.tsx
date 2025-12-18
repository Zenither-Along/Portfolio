'use client';

import ProcessHeadline from './ProcessHeadline';
import ProcessList from './ProcessList';

export default function ProcessSection() {
  return (
    <section className="relative w-full min-h-screen bg-white text-gray-900 py-32 overflow-hidden flex flex-col items-center">
      <div className="container mx-auto px-6 relative flex flex-col items-center gap-16">
        <ProcessHeadline />
        <div className="flex flex-col items-center gap-8 w-full">
          <h2 
            className="text-3xl md:text-3xl font-medium text-gray-900 w-full max-w-4xl"
            style={{ fontFamily: 'var(--font-instrument)', paddingLeft: '16px', paddingRight: '16px' }}
          >
            My Process
          </h2>
          <ProcessList />
        </div>
      </div>
    </section>
  );
}
