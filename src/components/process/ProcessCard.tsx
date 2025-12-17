'use client';

import { ProcessStep } from './processData';

interface ProcessCardProps {
  step: ProcessStep;
}

export default function ProcessCard({ step }: ProcessCardProps) {
  return (
    <div
      className="process-card relative bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
      style={{
        width: '380px',
        maxWidth: '90vw',
      }}
    >
      {/* Icon */}
      <div
        className="text-6xl mb-4"
        style={{ lineHeight: 1 }}
      >
        {step.icon}
      </div>

      {/* Step Number */}
      <div
        className="text-sm font-medium text-gray-400 mb-2"
        style={{ fontFamily: 'var(--font-sans)', letterSpacing: '0.05em' }}
      >
        STEP {String(step.id).padStart(2, '0')}
      </div>

      {/* Title */}
      <h3
        className="text-2xl md:text-3xl font-medium text-gray-900 mb-3"
        style={{ fontFamily: 'var(--font-instrument)' }}
      >
        {step.title}
      </h3>

      {/* Description */}
      <p
        className="text-base text-gray-600 leading-relaxed"
        style={{ fontFamily: 'var(--font-sans)' }}
      >
        {step.description}
      </p>
    </div>
  );
}
