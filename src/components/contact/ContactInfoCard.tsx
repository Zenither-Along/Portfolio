"use client";

import { FaPhone, FaInstagram, FaYoutube } from "react-icons/fa6";

export default function ContactInfoCard() {
  return (
    <div className="w-full max-w-[420px] bg-white rounded-[2.5rem] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.05)] border border-gray-100">
      {/* Card Header */}
      <div className="bg-[#1C1C1C] p-12 min-h-[260px] relative flex flex-col justify-center items-center text-center">
         {/* Decorative dots */}
         <div className="absolute top-6 left-6 w-2 h-2 rounded-full bg-[#DBFF00]"></div>
         <div className="absolute top-6 right-6 w-2 h-2 rounded-full bg-[#DBFF00]"></div>
         <div className="absolute bottom-6 left-6 w-2 h-2 rounded-full bg-[#DBFF00]"></div>
         <div className="absolute bottom-6 right-6 w-2 h-2 rounded-full bg-[#DBFF00]"></div>

        <h3 className="text-white text-2xl font-light leading-relaxed">
          Get in touch!
          <br />
          <span className="font-normal mt-1 block">Lets talk!</span>
        </h3>
      </div>

      {/* Card Body */}
      <div className="p-10 flex flex-col gap-2 bg-white "
            style={{paddingTop: "1rem", paddingBottom: "1rem"}}>
        <div className="flex items-center gap-4 group hover:translate-x-2 transition-transform duration-300">
          <div className="w-12 h-12 rounded-full bg-[#1C1C1C] flex items-center justify-center shrink-0">
            <span className="text-[#DBFF00] text-xl font-bold pb-1">@</span>
          </div>
          <span className="text-[#1C1C1C] text-lg font-medium tracking-wide">info@miros.com</span>
        </div>

        <div className="flex items-center gap-4 group hover:translate-x-2 transition-transform duration-300">
           <div className="w-12 h-12 rounded-full bg-[#1C1C1C] flex items-center justify-center shrink-0">
            <FaPhone className="text-[#DBFF00] text-lg" />
          </div>
           <span className="text-[#1C1C1C] text-lg font-medium tracking-wide">+139183783</span>
        </div>

         <div className="flex items-center gap-4 group hover:translate-x-2 transition-transform duration-300">
           <div className="w-12 h-12 rounded-full bg-[#1C1C1C] flex items-center justify-center shrink-0">
            <FaInstagram className="text-[#DBFF00] text-xl" />
          </div>
           <span className="text-[#1C1C1C] text-lg font-medium tracking-wide">@miros</span>
        </div>

         <div className="flex items-center gap-4 group hover:translate-x-2 transition-transform duration-300">
           <div className="w-12 h-12 rounded-full bg-[#1C1C1C] flex items-center justify-center shrink-0">
            <FaYoutube className="text-[#DBFF00] text-xl" />
          </div>
           <span className="text-[#1C1C1C] text-lg font-medium tracking-wide">@miros</span>
        </div>
      </div>
    </div>
  );
}
