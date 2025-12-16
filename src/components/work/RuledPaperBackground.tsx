'use client';

/**
 * RuledPaperBackground - Creates a notebook/ruled paper effect
 * Can be used as a background for sections
 */
export default function RuledPaperBackground() {
  return (
    <div 
      className="absolute inset-0 pointer-events-none z-0"
      style={{
        backgroundColor: '#fff',
      }}
    >
      {/* Ruled lines pattern */}
      <svg 
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern 
            id="ruled-lines" 
            patternUnits="userSpaceOnUse" 
            width="100%" 
            height="48"
          >
            {/* Horizontal line */}
            <line 
              x1="0" 
              y1="47" 
              x2="100%" 
              y2="47" 
              stroke="rgba(0,0,0,0.06)" 
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#ruled-lines)" />
      </svg>
    </div>
  );
}
