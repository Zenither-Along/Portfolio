'use client';

import ProcessCard from './ProcessCard';
import { processSteps } from './processData';

export default function ProcessHallway() {
  return (
    <div 
      className="hallway-viewport w-full h-full relative"
      style={{ 
        perspective: '1000px', 
        perspectiveOrigin: '50% 50%' 
      }}
    >
      <div 
        className="hallway-scene absolute inset-0 w-full h-full"
        style={{ 
          transformStyle: 'preserve-3d',
          transform: 'translateZ(-500px)', // Initial camera position
        }}
      >
        {/* Hallway Walls - Ambient Fill */}
        <div className="absolute inset-0 bg-gray-50 opacity-10" /> 
        
        {/* Process Cards */}
        {processSteps.map((step, index) => (
          <div
            key={step.id}
            className="process-card-wrapper absolute top-1/2 left-1/2"
            style={{
              width: '380px',
              height: 'auto',
              transform: `
                translate(-50%, -50%)
                translateX(${step.side === 'left' ? '-400px' : '400px'}) 
                translateZ(${-index * 800}px)
                rotateY(${step.side === 'left' ? '15deg' : '-15deg'})
              `,
              transformStyle: 'preserve-3d',
            }}
          >
            <ProcessCard step={step} />
          </div>
        ))}
      </div>
    </div>
  );
}
