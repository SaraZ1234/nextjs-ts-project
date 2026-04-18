export interface Experience {
  id: string;
  company: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  technologies: string[];
  location?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  link?: string;
  repository?: string;
  featured?: boolean;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  graduationYear: string;
  details?: string;
}

export const portfolioData = {
  name: "Sarah Javaid",
  title: "Junior Full-Stack Developer",
  subtitle: "Front-End & QA Integration Specialist",
  bio: "I'm a passionate junior full-stack developer specializing in building responsive web applications and integrating front-end solutions with QA processes. I have hands-on experience with Node.js, MongoDB, and Flutter, with a focus on creating seamless user experiences.",
  email: "sarahjavaid111@email.com",
  phone: "+92 300 0000000",
  location: "Pakistan",
  linkedin: "https://www.linkedin.com/in/sarah-javaid-b24505338/",
  github: "https://github.com/SaraZ1234/",

  experiences: [
    {
      id: "1",
      company: "Indus BPO.",
      title: "JavaScript Developer",
      description:
        "Developed and maintained backend services using Node.js and MySQL. Designed APIs, optimized database operations, and collaborated with the QA team to ensure reliable and high-quality application performance.",
      startDate: "Jan 2026",
      endDate: "Present",
      technologies: ["Node.js", "MongoDB", "React", "Express", "TypeScript"],
      location: "Remote",
    },
    {
      id: "2",
      company: "Erudite Coaching Center",
      title: "QA & Tester",
      description:
  "QA tested the EduNavigator AI chatbot across university data, designed end-to-end test cases, identified and resolved 30+ critical bugs with developers, improving reliability by 50%, and supported fuzzy matching and fallback logic for better query handling.",
      startDate: "Aug 2025",
      endDate: "Dec 2025",
      technologies: ["React", "Tailwind CSS", "JavaScript", "REST APIs"],
      location: "Remote",
    },
    {
      id: "3",
      company: "Mobile Dev Studio",
      title: "Flutter Developer (Intern)",
      description:
        "Developed cross-platform mobile applications using Flutter. Assisted in app development lifecycle from design to deployment on iOS and Android platforms.",
      startDate: "Mar 2023",
      endDate: "Jun 2023",
      technologies: ["Flutter", "Dart", "Firebase"],
      location: "Hybrid",
    },
  ] as Experience[],

  projects: [
    {
      id: "1",
      title: "Airbnb Home Rental Website",
      description:
        "A home rental platform inspired by Airbnb that allows users to browse properties, view details, and book accommodations with a smooth and responsive interface.",
      technologies: ["Node.js", "MongoDB", "CSS3", "Bootstrap"],
      featured: true,
    },
    {
      id: "2",
      title: "Coffee App",
      description:
        "A coffee ordering application that allows users to browse different coffee items, place orders, and manage their selections through a simple and user-friendly interface.",
      technologies: ["Flutter", "Firebase"],
      featured: true,
    },
    {
      id: "3",
      title: "Fitness Tracker Web App",
      description:
        "A fitness tracker web application that helps users monitor workouts, track daily activity, and view progress through an interactive dashboard.",
      technologies: ["CSS3", "REST API", "Geolocation API", "NodeJS", "MongoDB"],
      featured: false,
    },
    {
      id: "4",
      title: "Portfolio Website",
      description:
        "Personal portfolio website showcasing projects and skills with smooth animations and responsive design.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      featured: false,
    },
  ] as Project[],

  skills: [
    {
      category: "Frontend",
      items: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "HTML5",
        "CSS3",
        "JavaScript",
      ],
    },
    {
      category: "Backend",
      items: [
        "Node.js",
        "Express",
        "MongoDB",
        "REST APIs",
        "Authentication",
        "Database Design",
      ],
    },
    {
      category: "Mobile",
      items: ["Flutter", "Dart", "Firebase", "Cross-platform Development"],
    },
    {
      category: "Tools & Platforms",
      items: [
        "Git",
        "GitHub",
        "VS Code",
        "Postman",
        "npm/pnpm",
        "Docker Basics",
      ],
    },
    {
      category: "QA & Testing",
      items: [
        "Unit Testing",
        "Integration Testing",
        "Manual Testing",
        "Test Cases",
        "Bug Reporting",
      ],
    },
  ] as Skill[],

  education: [
    {
      id: "1",
      institution: "Pakistan Global Institute",
      degree: "Bachelor of Computer Science",
      field: "Computer Science",
      graduationYear: "2027",
      details: "Focused on web development and software engineering principles",
    },
    {
      id: "2",
      institution: "Tech Academy",
      degree: "Full-Stack Development Bootcamp",
      field: "Web Development",
      graduationYear: "2023",
      details:
        "Intensive bootcamp covering MERN stack and modern web technologies",
    },
  ] as Education[],
};
