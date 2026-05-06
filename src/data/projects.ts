export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  imageUrl?: string;
  link?: string;
  github?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Dashboard",
    description: "A modern admin dashboard for an e-commerce platform with real-time analytics.",
    techStack: ["Next.js", "Tailwind CSS", "TypeScript"],
    link: "https://example.com",
    github: "https://github.com",
  },
  {
    id: "2",
    title: "Social Media App",
    description: "A full-stack social media application with real-time messaging and notifications.",
    techStack: ["React", "Node.js", "Socket.io"],
    link: "https://example.com",
    github: "https://github.com",
  },
  {
    id: "3",
    title: "Portfolio Website",
    description: "This very website! A beautifully designed portfolio built with modern web technologies.",
    techStack: ["Next.js", "Framer Motion", "Tailwind CSS"],
    link: "https://example.com",
    github: "https://github.com",
  }
];