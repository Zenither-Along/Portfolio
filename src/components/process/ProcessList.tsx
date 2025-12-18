'use client';

import { processSteps } from './processData';

export default function ProcessList() {
  return (
    <div className="flex flex-col w-full max-w-4xl mx-auto" style={{ paddingLeft: '16px', paddingRight: '16px' }}>
      {processSteps.map((step, index) => (
        <div 
          key={index} 
          className="group grid grid-cols-2 md:flex md:flex-row md:justify-between md:items-center border-t border-gray-200 last:border-b transition-colors duration-300 hover:bg-gray-50/50"
          style={{ padding: '20px 0' }}
        >
          {/* Left Column: Index above Title (mobile), inline (desktop) */}
          <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-12">
            <span className="font-serif text-sm text-gray-400 font-medium">
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3 className="text-xl md:text-2xl font-serif font-medium text-gray-900 group-hover:text-black transition-colors duration-300">
              {step.title}
            </h3>
          </div>

          {/* Right Column: Description */}
          <p className="font-sans text-sm text-gray-500 max-w-xs leading-relaxed text-right group-hover:text-gray-800 transition-colors duration-300">
            {step.description}
          </p>
        </div>
      ))}
    </div>
  );
}
