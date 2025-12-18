'use client';

import { ProcessStep } from './processData';

interface ProcessCardProps {
  step: ProcessStep;
}

export default function ProcessCard({ step }: ProcessCardProps) {
  return (
    <div
      className="group grid grid-cols-2 md:flex md:flex-row md:justify-between md:items-start border-t border-gray-200 last:border-b transition-colors duration-300 hover:bg-gray-50/50"
      style={{ padding: '32px 0' }}
    >
      {/* Left: Number + Title */}
      <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-12">
        <span className="font-serif text-sm text-gray-400 font-medium">
          {String(step.id).padStart(2, '0')}
        </span>
        <h3 className="text-xl md:text-2xl font-serif font-medium text-gray-900 group-hover:text-black transition-colors duration-300">
          {step.title}
        </h3>
      </div>

      {/* Right: Description */}
      <p className="font-sans text-sm text-gray-500 max-w-md leading-relaxed text-right md:text-left group-hover:text-gray-800 transition-colors duration-300 col-span-2 md:col-span-1 mt-4 md:mt-0">
        {step.description}
      </p>
    </div>
  );
}
