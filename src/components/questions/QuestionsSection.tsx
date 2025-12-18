'use client';

import QuestionsHeadline from './QuestionsHeadline';
import QuestionsList from './QuestionsList';

export default function QuestionsSection() {
  return (
    <section 
      className="relative w-full bg-white text-gray-900 py-32 overflow-hidden flex flex-col items-center"
      style={{ paddingTop: '80px' }}
    >      <div className="container mx-auto px-6 relative flex flex-col items-center gap-16">
        <QuestionsHeadline />
        <div className="flex flex-col items-center gap-8 w-full">
          <h2 
            className="text-3xl md:text-3xl font-medium text-gray-900 w-full max-w-4xl"
            style={{ fontFamily: 'var(--font-instrument)', paddingLeft: '16px', paddingRight: '16px' }}
          >
            Questions You Might Have
          </h2>
          <QuestionsList />
        </div>
      </div>
    </section>
  );
}
