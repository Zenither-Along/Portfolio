"use client";

export default function ServicesHeader() {
  return (
    <div 
      className="w-full flex flex-col items-center text-center px-4"
      style={{ 
        maxWidth: '896px', 
        margin: '0 auto', 
        marginBottom: 'clamp(2rem, 10vh, 8rem)', 
        paddingTop: 'clamp(180px, 15vh, 160px)' 
      }}
    >
      <h1 
        className="leading-[0.9] font-medium tracking-tighter font-(family-name:--font-instrument) text-[#1C1C1C]"
        style={{ fontSize: 'clamp(3.5rem, 12vw, 6rem)' }}
      >
        Services
      </h1>
      <p 
        className="max-w-2xl text-[#1C1C1C]/70 leading-relaxed"
        style={{ 
          marginTop: 'clamp(2rem, 5vh, 1rem)',
          fontSize: 'clamp(1.125rem, 3vw, 1.5rem)'
        }}
      >
        We offer a comprehensive suite of digital services designed to elevate your brand and drive results.
      </p>
    </div>
  );
}
