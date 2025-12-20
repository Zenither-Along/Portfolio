"use client";

const services = [
  {
    id: "(01)",
    title: "UI/UX Design",
    tags: ["Landing Page Design", "Mobile App Interfaces", "SaaS Dashboards", "Design Systems"],
  },
  {
    id: "(02)",
    title: "Web Development",
    tags: ["High-Performance Websites", "E-commerce Solutions", "Web Applications (SPA)", "CMS Integration"],
  },
  {
    id: "(03)",
    title: "App Development",
    tags: ["Cross-Platform Apps", "MVP for Startups", "iOS & Android Deployment", "App Maintenance"],
  },
  {
    id: "(04)",
    title: "AI Integration",
    tags: ["Custom AI Chatbots", "Workflow Automation", "Smart Data Analysis", "AI-Powered Features"],
  },
];

export default function ServicesList() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 lg:px-8 flex flex-col">
      {services.map((service, index) => (
        <div 
          key={service.id} 
          className="group w-full border-t border-[#1C1C1C]/20 hover:border-[#1C1C1C] transition-colors duration-500"
        >
          <div 
            className="flex flex-col md:flex-row items-baseline w-full"
            style={{ 
              paddingTop: 'clamp(2rem, 4vh, 3rem)',
              paddingBottom: 'clamp(3rem, 6vh, 4rem)',
              paddingLeft: 'clamp(1rem, 3vw, 0px)',
              paddingRight: 'clamp(1rem, 3vw, 0px)' 
            }}
          >
            
            {/* Left: ID - Fixed Width 25% */}
            <div className="w-full md:w-1/4 mb-2 md:mb-0 shrink-0">
               <span className="text-sm lg:text-base text-[#1C1C1C]/40 font-normal font-(family-name:--font-instrument)">
                {service.id}
              </span>
            </div>

            {/* Center: Title - Fixed Width 50% Centered */}
            <div className="w-full md:w-2/4 flex justify-start md:justify-center mb-4 md:mb-0 shrink-0">
              <h2 
                className="font-normal text-[#1C1C1C] tracking-tight text-center"
                style={{ fontSize: 'clamp(1.5rem, 3.5vw, 1.7rem)' }}
              >
                {service.title}
              </h2>
            </div>

            {/* Right: Tags - Fixed Width 25% Right Aligned */}
            <div className="w-full md:w-1/4 flex flex-col items-start md:items-end gap-1 shrink-0">
              {service.tags.map((tag, i) => (
                <span 
                  key={i} 
                  className="text-[#1C1C1C]/60 text-right font-(family-name:--font-instrument)"
                  style={{ fontSize: 'clamp(1rem, 2vw, 1rem)' , paddingTop: '2px'}}
                >
                  {tag}
                </span>
              ))}
            </div>

          </div>
        </div>
      ))}
      <div className="w-full border-t border-[#1C1C1C]/20"></div>
    </div>
  );
}
