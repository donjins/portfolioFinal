export interface Project {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  demoLink: string;
  githubLink: string;
}

export const projects: Project[] = [  
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform built with MERN stack, featuring real-time inventory management and secure payment processing.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c',
    techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux'],
    demoLink: 'https://demo.com',
    githubLink: 'https://github.com',
  },
  {
    title: 'Task Management System',
    description: 'A collaborative task management system with real-time updates, drag-and-drop functionality, and team collaboration features.',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0',
    techStack: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    demoLink: 'https://demo.com',
    githubLink: 'https://github.com',
  },
  {
    title: 'Social Media Dashboard',
    description: 'A comprehensive social media analytics dashboard with data visualization and reporting capabilities.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    techStack: ['React', 'D3.js', 'Node.js', 'Express'],
    demoLink: 'https://demo.com',
    githubLink: 'https://github.com',
  },
  {
    title: 'AI-Powered Chat Application',
    description: 'Real-time chat application with AI-powered language translation and sentiment analysis features.',
    image: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624',
    techStack: ['React', 'WebSocket', 'TensorFlow.js', 'Node.js'],
    demoLink: 'https://demo.com',
    githubLink: 'https://github.com',
  },
  {
    title: 'Healthcare Management System',
    description: 'Comprehensive healthcare management platform for patient records, appointments, and medical history tracking.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'GraphQL'],
    demoLink: 'https://demo.com',
    githubLink: 'https://github.com',
  },
  {
    title: 'Smart Home IoT Dashboard',
    description: 'IoT dashboard for monitoring and controlling smart home devices with real-time data visualization.',
    image: 'https://images.unsplash.com/photo-1558002038-876f1d0aa8d6',
    techStack: ['React', 'MQTT', 'Node.js', 'InfluxDB'],
    demoLink: 'https://demo.com',
    githubLink: 'https://github.com',
  }
];

