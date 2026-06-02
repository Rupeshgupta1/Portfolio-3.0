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
      "Architected and delivered 5+ production-grade web applications using React, Next.js, Node.js and MongoDB from scratch to deployment.",
      "Built AI-powered tools integrating OpenAI GPT API, reducing manual effort by automating resume generation and task processing workflows.",
      "Implemented microservices architecture with Docker, Kubernetes and CI/CD pipelines using GitHub Actions and ArgoCD.",
      "Designed fully responsive, mobile-first UIs with Tailwind CSS and Framer Motion, achieving smooth 60fps animations.",
    ],
  },
];

const projects = [
  {
    name: "AI Task Platform",
    description:
      "Production-grade AI task processing platform built with microservices architecture. Features Docker containerization, Kubernetes orchestration, and fully automated CI/CD pipeline using GitHub Actions and ArgoCD for zero-downtime deployments.",
    tags: [
      { name: "next.js", color: "blue-text-gradient" },
      { name: "node.js", color: "green-text-gradient" },
      { name: "mongodb", color: "pink-text-gradient" },
      { name: "docker", color: "blue-text-gradient" },
      { name: "kubernetes", color: "green-text-gradient" },
    ],
    image: ghibliAi,
    source_code_link: "https://github.com/Rupeshgupta1/ai-task-platform",
    live_link: "https://blog-dashboard-wheat.vercel.app",
  },
  {
    name: "AI Resume Builder",
    description:
      "Full-stack AI resume builder powered by OpenAI GPT-4. Users generate professional resumes in seconds via a multi-step form with real-time preview and one-click PDF export. Reduced resume creation time by 90% compared to manual methods.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "node.js", color: "green-text-gradient" },
      { name: "openai-api", color: "pink-text-gradient" },
      { name: "tailwind", color: "blue-text-gradient" },
    ],
    image: ghibliResume,
    source_code_link: "https://github.com/Rupeshgupta1/MakeYOUResume",
    live_link: "https://make-your-resume-theta.vercel.app/",
  },
  {
    name: "Finance Dashboard",
    description:
      "Interactive finance tracker with role-based access control (Admin/Viewer), real-time data search and filtering, Recharts data visualizations, and smooth Framer Motion transitions. Built for financial teams to track and analyze spending patterns.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "tailwind", color: "green-text-gradient" },
      { name: "recharts", color: "pink-text-gradient" },
      { name: "framer-motion", color: "blue-text-gradient" },
    ],
    image: ghibliFinance,
    source_code_link: "https://github.com/Rupeshgupta1/finance-dashboard",
    live_link: "https://finance-dashboard-seven-beta-24.vercel.app/",
  },
  {
    name: "Packers & Movers Landing Page",
    description:
      "High-converting responsive landing page for a logistics brand. Features modern UI/UX design, smooth scroll navigation, optimized for mobile-first experience. Designed to maximize lead generation with clear CTAs and trust-building sections.",
    tags: [
      { name: "html5", color: "blue-text-gradient" },
      { name: "css3", color: "green-text-gradient" },
      { name: "javascript", color: "pink-text-gradient" },
    ],
    image: ghibliPackers,
    source_code_link: "https://github.com/Rupeshgupta1/packers-movers.git",
    live_link: "https://agent-6a1665444af253f111950211--project-cityp.netlify.app/",
  },
  {
    name: "Portfolio 3.0",
    description:
      "Modern developer portfolio featuring Three.js 3D animations, interactive desktop PC model, scroll-based transitions and fully responsive design. Built with React, Vite and Tailwind CSS — optimized for performance with lazy loading and code splitting.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "three.js", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
      { name: "vite", color: "blue-text-gradient" },
    ],
    image: ghibliPortfolio,
    source_code_link: "https://github.com/Rupeshgupta1/Portfolio-3.0.git",
    live_link: "#",
  },
];

const testimonials = [
  {
    testimonial:
      "Rupesh delivered our AI Resume Builder with exceptional UI/UX and clean code architecture. His ability to integrate complex AI APIs while maintaining a smooth user experience is impressive. Delivered on time and beyond expectations.",
    name: "Rahul Sharma",
    designation: "Founder",
    company: "StartupX",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    testimonial:
      "Rupesh built our Finance Dashboard with great attention to detail. The role-based access system and data visualizations were exactly what we needed. His code is clean, well-structured and easy to maintain.",
    name: "Priya Mehta",
    designation: "Product Manager",
    company: "FinTech Solutions",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    testimonial:
      "Rupesh's work on the AI Task Platform demonstrated strong problem-solving skills and deep understanding of modern DevOps practices. The microservices architecture he implemented scaled perfectly under load.",
    name: "Vikas Kumar",
    designation: "Tech Lead",
    company: "Innovate Labs",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
];

export { services, technologies, experiences, projects, testimonials };
