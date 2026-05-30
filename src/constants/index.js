import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
} from "../assets";

// Ghibli-style project images
import ghibliAi from "../assets/ghibli-ai.png";
import ghibliResume from "../assets/ghibli-resume.png";
import ghibliFinance from "../assets/ghibli-finance.png";
import ghibliPackers from "../assets/ghibli-packers.png";
import ghibliPortfolio from "../assets/ghibli-portfolio.png";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
];

const services = [
  { title: "Frontend Developer", icon: web },
  { title: "MERN Stack Developer", icon: backend },
  { title: "React Developer", icon: mobile },
];

const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
  { name: "figma", icon: figma },
  { name: "docker", icon: docker },
];

const experiences = [
  {
    title: "MERN Stack & Frontend Developer",
    company_name: "Freelance / Personal Projects",
    icon: web,
    iconBg: "#383E56",
    date: "2024 - Present",
    points: [
      "Building modern, responsive, and scalable web applications using React, Next.js, and Tailwind CSS.",
      "Developing full-stack solutions with Node.js, Express, MongoDB, and REST APIs.",
      "Implementing advanced features like AI integration and microservices.",
    ],
  },
];

const projects = [
  {
    name: "AI Task Platform",
    description:
      "Scalable AI task processing platform with microservices, Docker, Kubernetes & automated CI/CD pipeline using GitHub Actions and ArgoCD.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "nodejs", color: "green-text-gradient" },
      { name: "mongodb", color: "pink-text-gradient" },
    ],
    image: ghibliAi,
    source_code_link: "https://github.com/Rupeshgupta1/ai-task-platform",
    live_link: "https://blog-dashboard-wheat.vercel.app",
  },
  {
    name: "AI Resume Builder",
    description:
      "Full-stack AI resume builder using OpenAI GPT with real-time preview, multi-step form, and one-click PDF export.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "nodejs", color: "green-text-gradient" },
      { name: "openai-api", color: "pink-text-gradient" },
    ],
    image: ghibliResume,
    source_code_link: "https://github.com/Rupeshgupta1/MakeYOUResume",
    live_link: "https://make-your-resume-theta.vercel.app/",
  },
  {
    name: "Finance Dashboard",
    description:
      "Interactive finance tracker with role-based access (Admin/Viewer), live search, Recharts visualizations, and Framer Motion transitions.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "tailwind", color: "green-text-gradient" },
      { name: "framer-motion", color: "pink-text-gradient" },
    ],
    image: ghibliFinance,
    source_code_link: "https://github.com/Rupeshgupta1/finance-dashboard",
    live_link: "https://finance-dashboard-seven-beta-24.vercel.app/",
  },
  {
    name: "Packers & Movers Landing Page",
    description:
      "Responsive landing page for a logistics brand with modern UI/UX, smooth scroll navigation, and mobile-first design.",
    tags: [
      { name: "html", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
      { name: "javascript", color: "pink-text-gradient" },
    ],
    image: ghibliPackers,
    source_code_link: "https://github.com/Rupeshgupta1/packers-movers.git",
    live_link: "https://agent-6a1665444af253f111950211--project-cityp.netlify.app/",
  },
  {
    name: "Portfolio 3.0",
    description:
      "Modern developer portfolio with Three.js 3D animations, scroll-based transitions, and responsive design. Deployed on Vercel.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "threejs", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: ghibliPortfolio,
    source_code_link: "https://github.com/Rupeshgupta1/Portfolio-3.0.git",
    live_link: "#",
  },
];

const testimonials = [
  {
    testimonial:
      "Rupesh is a highly motivated and talented developer. He built our AI Resume Builder with excellent UI/UX and delivered it on time.",
    name: "Rahul Sharma",
    designation: "Founder",
    company: "StartupX",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    testimonial:
      "Working with Rupesh on the Finance Dashboard was great. His attention to detail and clean code is impressive.",
    name: "Priya Mehta",
    designation: "Product Manager",
    company: "FinTech Solutions",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    testimonial:
      "Rupesh's work on the AI Task Platform showed strong problem-solving skills and understanding of modern tech stack.",
    name: "Vikas Kumar",
    designation: "Tech Lead",
    company: "Innovate Labs",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
];

export { services, technologies, experiences, projects, testimonials };