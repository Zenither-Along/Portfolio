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
    title: "PrepX - Path architect",
    category: "Corporate / Branding",
    image: "/1project.png",
    tapeColors: { topLeft: '#F97316', topRight: '#F97316' }, // Orange
    pillColor: '#50ff50', // Neon Green
    rotation: 2.2,
    link: "/projects/prepx"
  },
  {
    id: 5,
    title: "Scoozi - Artisan Café",
    category: "Web Development",
    image: "/2project.jpg", 
    tapeColors: { topLeft: '#A855F7', topRight: '#A855F7' }, // Purple - Keeping for now, or match Sage? Let's keep existing and maybe update later if requested.
    pillColor: '#94deff', // Light Blue
    rotation: -3,
    link: "/projects/scoozi"
  },
  {
    id: 6,
    title: "Nexboard",
    category: "Productivity",
    image: "/3project.jpg",
    tapeColors: { topLeft: '#3B82F6', topRight: '#2563EB' }, // Blue
    pillColor: '#e0f2fe', // Light Blue
    rotation: 2.2,
    link: "/projects/nexboard"
  },
  {
    id: 8,
    title: "Protocol V.1.0",
    category: "UI Engineering",
    image: "/4project.jpg",
    tapeColors: { topLeft: '#4d7c0f', topRight: '#a3e635' }, // Earthy Green/Lime for Solarpunk
    pillColor: '#dcfce7', // Light Green
    rotation: -2,
    link: "/projects/protocol"
  }
];
