"use client";

import { useState, useEffect } from "react";
import Footer from "@/components/footer/Footer";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfoCard from "@/components/contact/ContactInfoCard";
import ProfileBar from "@/components/hero/ProfileBar";

export default function ContactPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    // Initial check
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <ProfileBar />
      <div 
        className="min-h-screen w-full bg-[#ffffff] text-[#1C1C1C] px-4 sm:px-8 md:px-12 lg:px-20 flex flex-col items-center"
        style={{ 
          paddingTop: isMobile ? '200px' : '250px', 
          paddingBottom: isMobile ? '5rem' : '10rem',
          paddingLeft: isMobile ? '2rem' : '5rem',
          paddingRight: isMobile ? '2rem' : '5rem' 
        }}
      >
        <div className="max-w-[1600px] w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Column - Heading & Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Right Column - Contact Card */}
          <div className="lg:col-span-5 w-full flex justify-center lg:justify-end lg:pt-32">
            <ContactInfoCard />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

