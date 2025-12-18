'use client';

import { useState } from 'react';
import { questions } from './questionsData';

export default function QuestionsList() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col w-full max-w-4xl mx-auto gap-8" style={{ paddingLeft: '16px', paddingRight: '16px' }}>
      {questions.map((item, index) => (
        <div 
          key={index} 
          className="group overflow-hidden transition-all duration-300"
        >
          {/* Question - Clickable */}
          <button
            onClick={() => toggleQuestion(index)}
            className="w-full text-left p-6 md:p-8 flex items-center justify-between gap-4 transition-colors duration-200"
          >
            <h3 className="text-lg md:text-xl font-serif font-medium text-gray-900">
              {item.question}
            </h3>
            
            {/* Arrow Icon */}
            <svg
              className={`w-5 h-5 text-gray-400 transition-transform duration-300 flex-shrink-0 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Answer - Collapsible */}
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <p className="font-sans text-base text-gray-600 leading-relaxed px-6 md:px-8 pb-6 md:pb-8">
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
