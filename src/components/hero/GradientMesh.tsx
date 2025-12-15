'use client';

export default function GradientMesh() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none bg-gray-50">
      {/* Left Side Windmill with Stand */}
      <div className="hidden md:block absolute left-[15%] bottom-[5%] opacity-90">
        <div className="relative">
          {/* The Stand (Pole) */}
          <div className="w-1.5 h-[350px] bg-linear-to-t from-gray-200 to-gray-400 rounded-full mx-auto" />
          
          {/* The Rotating Head */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] animate-spin-smooth-reverse">
             <div className="absolute inset-0">
               {/* Blade 1 */}
               <div className="absolute top-1/2 left-1/2 w-full h-[30px] -translate-y-1/2 -translate-x-1/2 rotate-0">
                  <div className="w-1/2 h-full bg-linear-to-r from-transparent to-cyan-400 rounded-r-full ml-auto opacity-80" />
               </div>
               {/* Blade 2 */}
               <div className="absolute top-1/2 left-1/2 w-full h-[30px] -translate-y-1/2 -translate-x-1/2 rotate-90">
                  <div className="w-1/2 h-full bg-linear-to-r from-transparent to-purple-400 rounded-r-full ml-auto opacity-80" />
               </div>
               {/* Blade 3 */}
               <div className="absolute top-1/2 left-1/2 w-full h-[30px] -translate-y-1/2 -translate-x-1/2 rotate-180">
                   <div className="w-1/2 h-full bg-linear-to-r from-transparent to-pink-400 rounded-r-full ml-auto opacity-80" />
               </div>
               {/* Blade 4 */}
               <div className="absolute top-1/2 left-1/2 w-full h-[30px] -translate-y-1/2 -translate-x-1/2 rotate-270">
                   <div className="w-1/2 h-full bg-linear-to-r from-transparent to-indigo-400 rounded-r-full ml-auto opacity-80" />
               </div>
               
               {/* Center Cap */}
               <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 shadow-sm z-10" />
             </div>
          </div>
        </div>
      </div>

      {/* GSAP-style Gradient Pinwheel (Right Side) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:translate-x-0 md:translate-y-0 md:right-[5%] md:top-[10%] md:bottom-auto md:left-auto opacity-90">
        <div className="relative w-[300px] h-[300px] animate-spin-smooth">
          {/* Petal Container */}
          <div className="absolute inset-0">
             {/* Petal 1 - Top Left (Sharp SE corner at center) */}
             <div className="absolute top-0 left-0 w-[150px] h-[150px] bg-gradient-to-br from-pink-300 to-purple-400 rounded-tr-[100px] rounded-bl-[100px] shadow-lg" />
             
             {/* Petal 2 - Top Right (Sharp SW corner at center) */}
             <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-gradient-to-bl from-purple-400 to-indigo-400 rounded-tl-[100px] rounded-br-[100px] shadow-lg" />
             
             {/* Petal 3 - Bottom Left (Sharp NE corner at center) */}
             <div className="absolute bottom-0 left-0 w-[150px] h-[150px] bg-gradient-to-tr from-cyan-400 to-blue-400 rounded-tl-[100px] rounded-br-[100px] shadow-lg" />
             
             {/* Petal 4 - Bottom Right (Sharp NW corner at center) */}
             <div className="absolute bottom-0 right-0 w-[150px] h-[150px] bg-gradient-to-tl from-indigo-400 to-cyan-300 rounded-tr-[100px] rounded-bl-[100px] shadow-lg" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-smooth {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        .animate-spin-smooth {
          animation: spin-smooth 30s linear infinite;
        }
        
        @keyframes spin-smooth-reverse {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(-360deg);
          }
        }
        .animate-spin-smooth-reverse {
          animation: spin-smooth-reverse 25s linear infinite;
        }
      `}</style>
    </div>
  );
}
