'use client';

interface ExpertiseItem {
  category: string;
  skills: string[];
  description: string;
}

interface ExpertiseListProps {
  data?: ExpertiseItem[];
}

const defaultExpertiseData: ExpertiseItem[] = [
  {
    category: "UI/UX Design",
    skills: ["Figma", "Design Systems", "Prototyping", "User Flow"],
    description: "Structuring visual chaos into intuitive clarity."
  },
  {
    category: "Web Development",
    skills: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    description: "Crafting polished, performant web experiences."
  },
  {
    category: "App Development",
    skills: ["React", "Next.js", "TypeScript", "Node.js"],
    description: "Constructing seamless, functional digital reality."
  },
  {
    category: "AI Integration",
    skills: ["LLM Workflows", "Cursor", "Generative Art", "Prompt Engineering"],
    description: "Augmenting human creativity with machine intelligence."
  }
];

export default function ExpertiseList({ data = defaultExpertiseData }: ExpertiseListProps) {
  return (
    <div className="flex flex-col w-full max-w-4xl" style={{ paddingLeft: '16px', paddingRight: '16px' }}>
      {data.map((item, index) => (
        <div 
          key={index} 
          className="group grid grid-cols-2 md:flex md:flex-row md:justify-between md:items-center border-t border-gray-200 last:border-b transition-colors duration-300 hover:bg-gray-50/50"
          style={{ padding: '20px 0' }}
        >
          {/* Left Column: Index above Category (mobile), inline (desktop) */}
          <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-12">
            <span className="font-serif text-sm text-gray-400 font-medium">
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3 className="text-xl md:text-2xl font-serif font-medium text-gray-900 group-hover:text-black transition-colors duration-300">
              {item.category}
            </h3>
          </div>

          {/* Right Column: Description */}
          <p className="font-sans text-sm text-gray-500 max-w-xs leading-relaxed text-right group-hover:text-gray-800 transition-colors duration-300">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}
