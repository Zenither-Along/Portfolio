'use client';

interface TapeProps {
  color: string;
  position: 'top-left' | 'top-right';
  className?: string;
}

/**
 * Tape component with jagged/sawtooth edges using SVG
 * Jagged edges are on the short vertical sides (left/right) to mimic torn tape
 */
export default function Tape({ color, position, className = '' }: TapeProps) {
  // Styles for rotation and positioning
  const positionStyles = position === 'top-left' 
    ? "top-[-10px] -left-[35px] -rotate-[35deg]" 
    : "top-[-5px] -right-[40px] rotate-[45deg]";
    
  return (
    <div 
      className={`absolute w-32 h-10 z-20 drop-shadow-md opacity-90 ${positionStyles} ${className}`}
    >
      <svg 
        viewBox="0 0 100 30" 
        preserveAspectRatio="none" 
        className="w-full h-full"
      >
        <path
          d="M0,0 
             l2,5 l-2,5 l2,5 l-2,5 l2,5 l-2,5 
             h100
             l-2,-5 l2,-5 l-2,-5 l2,-5 l-2,-5 l2,-5
             z"
          fill={color}
        />
      </svg>
    </div>
  );
}
