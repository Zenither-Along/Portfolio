'use client';

import ProfileBar from './ProfileBar';
import GradientMesh from './GradientMesh';
import ReviewsBadge from './ReviewsBadge';
import HeroContent from './HeroContent';
import HeroSubtitle from './HeroSubtitle';
import HeroCTA from './HeroCTA';

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 md:px-8 pt-32 md:pt-48 pb-12 text-center"
    >
      {/* Gradient Mesh Background */}
      <GradientMesh />

      {/* Profile Bar (Fixed Header) */}
      <ProfileBar />

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl w-full mx-auto flex flex-col items-center mt-32 md:mt-40">
        <ReviewsBadge />
        <HeroContent />
        <HeroSubtitle />
        <HeroCTA />
      </div>
    </section>
  );
}
