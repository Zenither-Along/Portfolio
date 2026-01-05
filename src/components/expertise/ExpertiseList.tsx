'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface ExpertiseItem {
  category: string;
  skills: string[];
  description: string;
  detailedDescription: string;
  image: string;
}

interface ExpertiseListProps {
  data?: ExpertiseItem[];
}

const defaultExpertiseData: ExpertiseItem[] = [
  {
    category: "UI/UX Design",
    skills: ["Figma", "Design Systems", "Prototyping", "User Flow"],
    description: "Structuring visual chaos into intuitive clarity.",
    detailedDescription: "Bridging the gap between user needs and business goals. Employing user-centric design principles to create interfaces that are visually stunning, intuitive, and accessible—ensuring a seamless journey from start to finish.",
    image: "/uiux_image.jpg"
  },
  {
    category: "Web Development",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    description: "Crafting polished, performant web experiences.",
    detailedDescription: "Building modern, scalable web applications that are as beautiful as they are functional. Leveraging the latest technologies to ensure pixel-perfect execution, rapid performance, and seamless user accessibility.",
    image: "/web_image.jpg"
  },
  {
    category: "App Development",
    skills: ["Flutter", "Dart", "iOS", "Android"],
    description: "Constructing seamless, cross-platform mobile experiences.",
    detailedDescription: "Creating high-performance mobile applications that feel truly native. Transforming ideas into intuitive iOS and Android experiences with smooth animations and functional robustness.",
    image: "/app_image.jpg"
  },
  {
    category: "AI Integration",
    skills: ["LLM Workflows", "Cursor", "Generative Art", "Prompt Engineering"],
    description: "Augmenting human creativity with machine intelligence.",
    detailedDescription: "Leveraging artificial intelligence to automate workflows, generate unique assets, and build intelligent interfaces. Integrating bleeding-edge AI solutions to keep products ahead of the curve.",
    image: "/ai_integretion_image.jpg"
  }
];

export default function ExpertiseList({ data = defaultExpertiseData }: ExpertiseListProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col w-full max-w-4xl" style={{ paddingLeft: '16px', paddingRight: '16px' }}>
      {data.map((item, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          className="group border-t border-gray-200 last:border-b overflow-hidden cursor-default"
          style={{ 
            padding: '20px 0',
            backgroundColor: hoveredIndex === index ? 'rgba(249, 250, 251, 0.5)' : 'transparent',
            transition: 'background-color 0.3s ease'
          }}
        >
          {/* Header Row */}
          <motion.div className="grid grid-cols-2 md:flex md:flex-row md:justify-between md:items-baseline">
            <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-12">
              <span className="font-serif text-sm text-gray-400 font-medium">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="text-xl md:text-2xl font-serif font-medium text-gray-900 group-hover:text-black transition-colors duration-300">
                {item.category}
              </h3>
            </div>
            
            {/* Show short description only when NOT hovered */}
            {hoveredIndex !== index && (
              <motion.p 
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="font-sans text-sm text-gray-500 max-w-xs leading-relaxed text-right hidden md:block"
              >
                {item.description}
              </motion.p>
            )}
          </motion.div>

          {/* Expanded Content */}
          <AnimatePresence>
            {hoveredIndex === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <div className="flex flex-col md:flex-row gap-6"
                style={{ paddingTop: '20px' }}>
                  {/* Image Area */}
                  <div className="w-full md:w-5/12 h-44 md:h-44 relative rounded-lg overflow-hidden shadow-sm">
                    <Image
                      src={item.image}
                      alt={item.category}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 40vw"
                    />
                  </div>
                  
                  {/* Details Area */}
                  <div className="w-full md:w-7/12 flex flex-col justify-between">
                    <div>
                      <h4 className="text-lg font-medium text-gray-900 mb-4" style={{ fontFamily: 'var(--font-instrument)' }}>
                        {item.description}
                      </h4>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {item.detailedDescription}
                      </p>
                    </div>
                    
                    {/* Skills Tags */}
                    <div 
                      className="flex flex-wrap gap-3 md:pt-0!"
                      style={{ paddingTop: '20px' }}
                    >
                      {item.skills.map((skill, i) => (
                        <span 
                          key={i} 
                          className="text-sm text-gray-500 font-medium font-sans"
                        >
                          [ {skill} ]
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}
