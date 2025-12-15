'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;
  color: string;
  size: number;
  trail: { x: number; y: number; alpha: number }[];
}

export default function Fireworks() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationId: number;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const colors = ['#FFD700', '#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#F7DC6F', '#BB8FCE'];

    const createExplosion = (x: number, y: number) => {
      const particleCount = 50; 
      for (let i = 0; i < particleCount; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 5 + 2; 
        particles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          alpha: 1,
          color: colors[Math.floor(Math.random() * colors.length)],
          size: Math.random() * 3 + 1,
          trail: []
        });
      }
    };

    const drawStar = (cx: number, cy: number, size: number, color: string, alpha: number) => {
      const spikes = 4;
      const outerRadius = size;
      const innerRadius = size * 0.4;

      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.fillStyle = color;
      ctx.shadowColor = color;
      ctx.shadowBlur = size * 4;
      
      ctx.beginPath();
      for (let i = 0; i < spikes * 2; i++) {
        const radius = i % 2 === 0 ? outerRadius : innerRadius;
        const angle = (i * Math.PI) / spikes;
        const x = cx + Math.cos(angle) * radius;
        const y = cy + Math.sin(angle) * radius;
        
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    };

    const animate = () => {
      // Clear with semi-transparent background for trail effect
      ctx.fillStyle = 'rgba(250, 250, 250, 0.15)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((p) => {
        p.vy += 0.15; // Gravity
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= 0.015; // Fade out

        // Add to trail
        p.trail.push({ x: p.x, y: p.y, alpha: p.alpha });
        if (p.trail.length > 8) p.trail.shift();

        if (p.alpha > 0) {
          // Draw trail
          p.trail.forEach((point, index) => {
            const trailAlpha = (index / p.trail.length) * point.alpha * 0.5;
            if (trailAlpha > 0) {
              ctx.globalAlpha = trailAlpha;
              ctx.fillStyle = p.color;
              ctx.fillRect(point.x, point.y, p.size * 0.5, p.size * 0.5);
            }
          });

          // Draw star
          drawStar(p.x, p.y, p.size, p.color, p.alpha);
        }
      });

      // Reset
      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;

      // Remove dead particles
      particles = particles.filter(p => p.alpha > 0);

      animationId = requestAnimationFrame(animate);
    };

    animate();

    // Rate limiting - 1 click per second
    let lastClickTime = 0;
    const CLICK_COOLDOWN = 500; // second

    const handleClick = (e: MouseEvent | TouchEvent) => {
      // Check rate limit
      const now = Date.now();
      if (now - lastClickTime < CLICK_COOLDOWN) return;
      lastClickTime = now;

      // Only trigger fireworks if click is within the hero section
      const heroSection = document.getElementById('home');
      if (!heroSection) return;

      const target = e.target as HTMLElement;
      if (!heroSection.contains(target)) return;

      let clientX, clientY;
      if ('touches' in e) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else {
        clientX = (e as MouseEvent).clientX;
        clientY = (e as MouseEvent).clientY;
      }
      createExplosion(clientX, clientY);
    };

    window.addEventListener('click', handleClick);
    window.addEventListener('touchstart', handleClick);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('click', handleClick);
      window.removeEventListener('touchstart', handleClick);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ touchAction: 'none' }}
    />
  );
}
