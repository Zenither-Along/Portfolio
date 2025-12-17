export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  side: 'left' | 'right';
  icon: string;
}

export const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: 'Discovery & Research',
    description: 'Understanding your goals, target audience, and project requirements through in-depth research and analysis.',
    side: 'right',
    icon: '🔍'
  },
  {
    id: 2,
    title: 'Strategy & Planning',
    description: 'Creating a clear roadmap with defined milestones, timelines, and technical architecture decisions.',
    side: 'left',
    icon: '📋'
  },
  {
    id: 3,
    title: 'Design & Prototyping',
    description: 'Crafting intuitive interfaces and interactive prototypes that bring your vision to life.',
    side: 'right',
    icon: '🎨'
  },
  {
    id: 4,
    title: 'Development & Testing',
    description: 'Building robust, scalable solutions with clean code and rigorous quality assurance.',
    side: 'left',
    icon: '💻'
  },
  {
    id: 5,
    title: 'Launch & Iteration',
    description: 'Deploying your project and continuously improving based on real-world feedback and analytics.',
    side: 'right',
    icon: '🚀'
  }
];
