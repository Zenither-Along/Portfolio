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

          <QuestionsList />
        </div>
      </div>
    </section>
  );
}
