"use client";

import { FaArrowRight } from "react-icons/fa6";

const plans = [
  {
    name: "Basic",
    price: "₹4,999",
    description: "Essential web presence for individuals.",
    features: ["Landing Page / One Page Website", "Mobile Responsive Design", "Contact Form Integration", "Fast Delivery (2-3 Days)"],
  },
  {
    name: "Custom",
    price: "Let's Talk",
    description: "Tailored solutions for complex requirements.",
    features: ["Full Stack Web Applications", "E-commerce & SaaS Platforms", "AI Chatbot & Automation", "Cross-Platform Mobile Apps", "Scalable Backend Architecture"],
    highlight: true,
  },
];

export default function PricingSection() {
  return (
    <div 
      className="w-full max-w-5xl mx-auto flex flex-col items-center"
      style={{ 
        marginTop: 'clamp(8rem, 15vh, 12rem)', 
        marginBottom: 'clamp(6rem, 10vh, 10rem)',
        paddingLeft: 'clamp(1.5rem, 5vw, 2rem)',
        paddingRight: 'clamp(1.5rem, 5vw, 2rem)'
      }}
    >
      <h2 
        className="font-normal text-[#1C1C1C] text-center font-(family-name:--font-instrument)"
        style={{ 
          fontSize: 'clamp(2rem, 5vw, 3rem)',
          marginBottom: 'clamp(4rem, 10vh, 6rem)'
        }}
      >
        Pricing
      </h2>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        {plans.map((plan, index) => (
          <div 
            key={index} 
            className={`
              flex flex-col justify-between rounded-2xl border transition-all duration-300 relative overflow-hidden group
              ${plan.highlight 
                ? 'bg-[#1C1C1C] text-white border-[#1C1C1C]' 
                : 'bg-white text-[#1C1C1C] border-[#1C1C1C]/10 hover:border-[#1C1C1C]/30'
              }
            `}
            style={{ 
              minHeight: '400px',
              padding: 'clamp(2rem, 3vw, 2.5rem)' 
            }}
          >
            <div>
              <h3 className="text-lg font-medium mb-2 opacity-80 font-(family-name:--font-instrument)">{plan.name}</h3>
              <div 
                className="font-bold mb-4 font-(family-name:--font-instrument)"
                style={{ fontSize: 'clamp(2rem, 3vw, 2.5rem)' }}
              >
                {plan.price}
              </div>
              <p 
                className={`text-sm mb-8 leading-relaxed ${plan.highlight ? 'opacity-70' : 'opacity-60'}`}
                style={{ paddingBottom: '10px' }}
              >
                {plan.description}
              </p>

              <ul className="flex flex-col gap-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="text-sm flex items-start gap-2">
                    <span className={`mt-1 text-xs ${plan.highlight ? 'text-[#DBFF00]' : 'text-[#1C1C1C]'}`}>●</span>
                    <span className={plan.highlight ? 'opacity-90' : 'opacity-70'}>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button 
              onClick={() => window.location.href = '/contact'}
              className={`
                w-full flex items-center justify-center gap-2 font-medium transition-all duration-300 cursor-pointer
                ${plan.highlight 
                  ? 'bg-white text-black hover:scale-[1.02] active:scale-95' 
                  : 'bg-[#1C1C1C] text-[#DBFF00] hover:bg-[#1C1C1C]/90 hover:scale-[1.02] active:scale-95'
                }
              `}
              style={{
                padding: 'clamp(1rem, 2vh, 1.25rem)',
                borderRadius: '9999px',
                fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                marginTop: 'clamp(1.5rem, 3vh, 5rem)'
              }}
            >
              Get Started <FaArrowRight className="text-xs" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
