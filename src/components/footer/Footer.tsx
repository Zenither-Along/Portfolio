'use client';

import FooterHeading from './FooterHeading';
import FooterContact from './FooterContact';
import FooterBackground from './FooterBackground';

export default function Footer() {
  return (
    <footer id="main-footer" className="relative w-full min-h-screen bg-black py-24 md:py-32">
      <div className="container mx-auto px-6 relative flex flex-col gap-16">
        {/* Main Heading */}
        <FooterHeading />
        
        {/* Contact Info */}
        <FooterContact />

        {/* Copyright */}
        <div className="w-full text-left pt-8" style={{ paddingLeft: '20px' }}>
          <div className="text-gray-600 text-sm" style={{ fontFamily: 'var(--font-sans)' }}>
            © 2024 Alongbar
          </div>
        </div>
      </div>

      {/* Large Background Text */}
      <FooterBackground />
    </footer>
  );
}
