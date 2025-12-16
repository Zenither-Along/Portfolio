'use client';

/**
 * EdgeFade - Creates a fading effect on left and right edges
 * Sits above the ruled paper background to soften the line edges
 */
export default function EdgeFade() {
  return (
    <div className="absolute inset-0 pointer-events-none z-1">
      {/* Left fade - white gradient from left */}
      <div 
        className="absolute left-0 top-0 bottom-0 w-32 md:w-48"
        style={{
          background: 'linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0.8) 40%, rgba(255,255,255,0) 100%)',
        }}
      />
      
      {/* Right fade - white gradient from right */}
      <div 
        className="absolute right-0 top-0 bottom-0 w-32 md:w-48"
        style={{
          background: 'linear-gradient(to left, rgba(255,255,255,1) 0%, rgba(255,255,255,0.8) 40%, rgba(255,255,255,0) 100%)',
        }}
      />
    </div>
  );
}
