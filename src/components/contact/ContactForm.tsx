"use client";

import { useState, useEffect } from "react";

export default function ContactForm() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col space-y-12 lg:space-y-16">
      <h1 className="text-[12vw] lg:text-[11rem] leading-[0.85] font-bold tracking-tight font-(family-name:--font-instrument) text-[#1C1C1C]">
        Contact
      </h1>

      <form 
        className="w-full max-w-lg flex flex-col lg:pl-2" 
        style={{ 
          paddingTop: isMobile ? '2rem' : '3rem', 
          gap: isMobile ? '1.5rem' : '2.5rem' 
        }}
      >
        <div className="flex flex-col group" style={{ gap: '1rem' }}>
          <label htmlFor="name" className="text-sm font-medium opacity-60 ml-1 group-focus-within:opacity-100 transition-opacity">
            Full name
          </label>
          <input
            type="text"
            id="name"
            className="w-full bg-transparent border-b border-[#1C1C1C]/20 py-4 text-xl focus:outline-none focus:border-[#1C1C1C] transition-all"
          />
        </div>

        <div className="flex flex-col group" style={{ gap: '1rem' }}>
          <label htmlFor="email" className="text-sm font-medium opacity-60 ml-1 group-focus-within:opacity-100 transition-opacity">
            Email address
          </label>
          <input
            type="email"
            id="email"
            className="w-full bg-transparent border-b border-[#1C1C1C]/20 py-4 text-xl focus:outline-none focus:border-[#1C1C1C] transition-all"
          />
        </div>

        <div className="flex flex-col group" style={{ gap: '1rem' }}>
          <label htmlFor="message" className="text-sm font-medium opacity-60 ml-1 group-focus-within:opacity-100 transition-opacity">
            Messages
          </label>
          <textarea
            id="message"
            rows={4}
            className="w-full bg-transparent border-b border-[#1C1C1C]/20 py-4 text-xl focus:outline-none focus:border-[#1C1C1C] transition-all resize-none"
          ></textarea>
        </div>

        <div style={{ paddingTop: isMobile ? '2rem' : '3rem' }}>
          <button
            type="button"
            className="bg-[#1C1C1C] text-[#DBFF00] hover:bg-[#1C1C1C]/90 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
            style={{ 
              padding: isMobile ? '16px 48px' : '20px 60px', 
              fontSize: isMobile ? '18px' : '20px', 
              borderRadius: '9999px',
              fontWeight: 500,
              border: 'none',
              outline: 'none',
              width: isMobile ? '100%' : 'auto'
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
