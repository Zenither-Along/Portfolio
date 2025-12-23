export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  tapeColors: {
    topLeft: string;
    topRight: string;
  };
  pillColor: string;
  rotation: number;
  link: string;
}

export const projects: Project[] = [
  {
    id: 4,
    title: "The Silent Witch",
    category: "Corporate / Branding",
    image: "/test-image.jpg",
    tapeColors: { topLeft: '#F97316', topRight: '#F97316' }, // Orange
    pillColor: '#50ff50', // Neon Green
    rotation: 2.2,
    link: "#"
  },
  {
    id: 5,
    title: "Kotion Perfume",
    category: "Product Design",
    image: "/test-image.jpg", 
    tapeColors: { topLeft: '#A855F7', topRight: '#A855F7' }, // Purple
    pillColor: '#94deff', // Light Blue
    rotation: -3,
    link: "#"
  },
  {
    id: 6,
    title: "Urban Architecture",
    category: "Photography",
    image: "/test-image.jpg",
    tapeColors: { topLeft: '#3B82F6', topRight: '#3B82F6' }, // Blue
    pillColor: '#ffd9b6', // Peach
    rotation: 2.2,
    link: "#"
  },
  {
    id: 7,
    title: "Geometric Shapes",
    category: "3D Art",
    image: "/test-image.jpg",
    tapeColors: { topLeft: '#EF4444', topRight: '#EF4444' }, // Red
    pillColor: '#e0e0e0', // Gray
    rotation: -2.3,
    link: "#"
  }
];
