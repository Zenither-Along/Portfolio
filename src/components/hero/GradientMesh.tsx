'use client';

import { useEffect, useRef, useState } from 'react';

export default function GradientMesh() {
  const meshRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!meshRef.current) return;
      
      const rect = meshRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      ref={meshRef}
      className="absolute inset-0 overflow-hidden"
      style={{
        background: '#F3F4F6',
      }}
    >
      {/* Gradient Orbs */}
      <div
        className="absolute w-[800px] h-[800px] rounded-full blur-3xl opacity-30 animate-float-slow"
        style={{
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.4) 0%, transparent 70%)',
          top: '10%',
          left: '10%',
          animation: 'float-slow 20s ease-in-out infinite',
        }}
      />
      
      <div
        className="absolute w-[600px] h-[600px] rounded-full blur-3xl opacity-25 animate-float-medium"
        style={{
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, transparent 70%)',
          top: '40%',
          right: '10%',
          animation: 'float-medium 15s ease-in-out infinite',
        }}
      />
      
      <div
        className="absolute w-[700px] h-[700px] rounded-full blur-3xl opacity-20 animate-float-fast"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
          bottom: '10%',
          left: '30%',
          animation: 'float-fast 12s ease-in-out infinite',
        }}
      />

      {/* Mouse-following spotlight */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full blur-3xl opacity-20 transition-all duration-300 ease-out pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(236, 72, 153, 0.4) 0%, transparent 70%)',
          left: `calc(${mousePos.x}% - 250px)`,
          top: `calc(${mousePos.y}% - 250px)`,
        }}
      />

      {/* Noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
        }}
      />

      <style jsx>{`
        @keyframes float-slow {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        @keyframes float-medium {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(-40px, 40px) scale(1.15);
          }
        }

        @keyframes float-fast {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(20px, -20px) scale(0.95);
          }
          50% {
            transform: translate(-30px, 30px) scale(1.1);
          }
          75% {
            transform: translate(10px, 10px) scale(1.05);
          }
        }
      `}</style>
    </div>
  );
}
