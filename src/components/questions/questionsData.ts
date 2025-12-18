export interface Question {
  id: number;
  question: string;
  answer: string;
}

export const questions: Question[] = [
  {
    id: 1,
    question: "How do we get started?",
    answer: "Just reach out via email or LinkedIn"
  },
  {
    id: 2,
    question: "Do you work remotely?",
    answer: "Yes, comfortable with remote collaboration"
  },
  {
    id: 3,
    question: "What's your typical response time?",
    answer: "Within 24 hours"
  },
  {
    id: 4,
    question: "Are you still learning?",
    answer: "Always! Currently exploring new technologies"
  },
  {
    id: 5,
    question: "What size projects do you take on?",
    answer: "From small features to full websites"
  },
  {
    id: 6,
    question: "How long does a project take?",
    answer: "Depends on scope, let's discuss"
  },
  {
    id: 7,
    question: "Why should I work with you?",
    answer: "Fresh perspective, modern tech stack, eager to deliver quality"
  }
];
