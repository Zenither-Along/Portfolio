'use client';

import { forwardRef, ReactNode } from 'react';

interface ProcessWindowProps {
  children: ReactNode;
}

const ProcessWindow = forwardRef<HTMLDivElement, ProcessWindowProps>(({ children }, ref) => {
  return (
    <div 
      ref={ref}
      className="relative flex items-center justify-center overflow-hidden"
      style={{ 
        willChange: 'width, height, borderRadius',
        background: '#0f0f11', 
        border: '1px solid rgba(255,255,255,0.1)',
        boxShadow: '0 0 40px -10px rgba(168, 85, 247, 0.4)', 
      }}
    >
      {/* Decorative Glow Layer behind content */}
      <div className="absolute inset-0 bg-linear-to-br from-purple-500/10 to-transparent pointer-events-none" />  
      
      {children}
    </div>
  );
});

ProcessWindow.displayName = 'ProcessWindow';

export default ProcessWindow;
