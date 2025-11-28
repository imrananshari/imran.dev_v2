import React from 'react';
import { ExperienceItem, ProjectItem, SkillCategory } from '../app/types';

export const SOCIAL_LINKS = {
  github: "https://github.com/imrananshari",
  linkedin: "https://linkedin.com/in/imrann-ansari",
  email: "askimranansari@gmail.com", // Placeholder
  whatsapp: "https://wa.me/919931953334", // Placeholder
  instagram: "https://instagram.com/imrananshari",
  youtube: "https://www.youtube.com/@imranansar-zyx"
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    period: "Jul 2025 - Nov 2025",
    role: "Frontend Developer",
    company: "AAS Information Technology",
    description: "Focused on a Construction CRM SaaS: Figma design, documentation, and a reusable component library; built Budgzyx (PWA) expense tracker; supported HRMS sales in the Dubai market with scalable web and Flutter solutions.",
    achievements: [
      "Designed and documented the Construction CRM SaaS in Figma",
      "Built a reusable component library for the CRM platform",
      "Shipped Budgzyx (PWA) expense tracker with budgets and PDF export",
      "Supported HRMS sales outreach in the Dubai market",
      "Integrated Next.js and Flutter across web and mobile"
    ],
    techStack: ["Next.js", "Figma", "Flutter", "TypeScript", "Tailwind CSS"]
  },
  {
    period: "Apr 2025 - June 2025",
    role: "Frontend Developer",
    company: "AAS Information Technology",
    description: "Worked on AR/VR research and development, gaining hands-on experience with Three.js and YOLO v8 for advanced visualization and object detection. Led and contributed to projects such as a CRM built with Next.js and implemented SEO best practices. Enhanced UI/UX using modern component libraries and design systems.",
    achievements: [
      "Developed AR/VR prototypes using Three.js and YOLO v8",
      "Built and deployed a CRM platform with Next.js",
      "Improved website SEO and accessibility scores",
      "Integrated and customized UI libraries (Accertinity UI, React Bits UI)",
      "Collaborated with cross-functional teams on innovative projects"
    ],
    techStack: ["three.js", "SEO", "Accertinity UI", "React Bits UI Library", "Next.js", "YOLO v8"]
  },
  {
    period: "Dec 2024 - Mar 2025",
    role: "Tech Support Staff",
    company: "AAS Information Technology",
    description: "Worked as an intern, learned industry-level work and projects, and improved skills in TypeScript, Next.js, shadcn, and contributed to projects like HRMS and AAS Website.",
    achievements: [
      "Contributed to the development of HRMS and AAS Website",
      "Gained hands-on experience with Next.js and shadcn",
      "Enhanced TypeScript and UI/UX skills",
      "Learned industry-level project workflows as an intern"
    ],
    techStack: ["Next.js", "shadcn", "TypeScript", "Figma UI/UX"]
  },
  {
    period: "Feb 2024 - May 2024",
    role: "Frontend Developer Intern",
    company: "CodeAlpha",
    description: "Completed internship at CodeAlpha, where I built multiple real-world projects including a Todo List, Music Application, Social Media Dashboard, and Weather Application. Gained hands-on experience in modern frontend development and UI/UX best practices.",
    achievements: [
      "Developed and deployed 4+ full-stack projects",
      "Implemented responsive UIs with Tailwind CSS",
      "Integrated APIs for real-time data (weather, music)",
      "Collaborated in an agile team environment",
      "Enhanced skills in React.js and modern JavaScript"
    ],
    techStack: ["React.js", "JavaScript", "Tailwind CSS"]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    title: "Budgzyx",
    description: "Expense tracker (Support PWA) with category-wise budgets, bank-wise splits, add expenses, track used vs left amounts, and export as PDF.",
    liveLink: "https://budgzyx.vercel.app/",
    imageUrl: "/assets/bwhite.png",
    techStack: ["Supabase", "Next.js", "Tailwind CSS"],
    githubLink: "https://github.com/imrananshari/expenses_tracker",
  },
  {
    title: "AAS Website",
    description: "Modern agency website with smooth animations and integrated contact forms.",
    liveLink: "https://aasint.com/",
    imageUrl: "/assets/office.png",
    techStack: ["Next.js", "React", "Tailwind CSS"],
    githubLink: null,
  },
   {
    title: "Weather App",
    description: "Real-time weather application with location-based forecasts and a clean UI.",
    imageUrl: "https://img.freepik.com/premium-photo/rainy-weather-forecast-mobile-application-smartphone-trees-background_101969-2831.jpg?uid=R200150673&ga=GA1.1.392802497.1747224335&semt=ais_hybrid&w=740",
    liveLink: "https://weather-iota-wheat.vercel.app/",
    techStack: ["React", "OpenWeatherMap API", "CSS3"],
    githubLink: "https://github.com/imranansari/weather-app",
  },
  {
    title: "AAS HRMS System",
    description: "Human Resource Management System with employee tracking and payroll features.",
    notes: null,
    imageUrl: "/assets/hrms.png",
    techStack: ["React", "Node.js", "MongoDB"],
    githubLink: null,
    liveLink: "https://hrms.aasint.com",
  },
 
  {
    title: "UI/UX Design",
    description: "A collection of modern UI/UX designs for various platforms.",
    imageUrl: "https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?q=80&w=800&auto=format&fit=crop",
    notes: null,
    techStack: ["Figma", "Adobe XD"],
    githubLink: "https://github.com/imranansari/ui-ux-designs",
    liveLink: null,
  },
  {
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform with payment gateway integration and order management.",
    imageUrl: "https://images.unsplash.com/photo-1556741533-411cf82e4e2d?q=80&w=800&auto=format&fit=crop",
    liveLink: null,
    notes: null,
    techStack: ["React", "Node.js", "Stripe", "MongoDB"],
    githubLink: "https://github.com/imranansari/ecommerce-platform",
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "frontend",
    filename: "Frontend.tsx",
    title: "Frontend Development",
    codeSnippet: (
      <>
        <span className="text-gray-500">// Core Technologies</span>
        <br />
        <span className="text-pink-400">import</span> <span className="text-yellow-300">{`{`}</span> HTML, CSS, JavaScript, TypeScript <span className="text-yellow-300">{`}`}</span> <span className="text-pink-400">from</span> <span className="text-green-300">"web-standards"</span>;
        <br />
        <br />
        <span className="text-gray-500">// Frameworks & Mobile</span>
        <br />
        <span className="text-pink-400">import</span> React, <span className="text-yellow-300">{`{`}</span> NextJS <span className="text-yellow-300">{`}`}</span> <span className="text-pink-400">from</span> <span className="text-green-300">"react"</span>;
        <br />
        <span className="text-pink-400">import</span> <span className="text-yellow-300">{`{`}</span> ReactNative <span className="text-yellow-300">{`}`}</span> <span className="text-pink-400">from</span> <span className="text-green-300">"react-native"</span>;
        <br />
        <br />
        <span className="text-gray-500">// 3D & Animation</span>
        <br />
        <span className="text-pink-400">import</span> <span className="text-yellow-300">ThreeJS</span> <span className="text-pink-400">from</span> <span className="text-green-300">"three"</span>;
        <br />
        <span className="text-pink-400">import</span> <span className="text-yellow-300">GSAP</span> <span className="text-pink-400">from</span> <span className="text-green-300">"gsap"</span>;
        <br />
        <br />
        <span className="text-gray-500">// UI Libraries</span>
        <br />
        <span className="text-pink-400">import</span> <span className="text-yellow-300">{`{`}</span> TailwindCSS, Shadcn <span className="text-yellow-300">{`}`}</span> <span className="text-pink-400">from</span> <span className="text-green-300">"ui-kit"</span>;
        <br />
        <br />
        <span className="text-pink-400">export default</span> <span className="text-blue-300">function</span> <span className="text-yellow-300">App</span>() <span className="text-yellow-300">{`{`}</span>
        <br />
        &nbsp;&nbsp;<span className="text-pink-400">return</span> <span className="text-gray-400">&lt;</span><span className="text-green-400">NextJS</span> <span className="text-blue-300">className</span>=<span className="text-green-300">"tailwind shadcn"</span> /<span className="text-gray-400">&gt;</span>;
        <br />
        <span className="text-yellow-300">{`}`}</span>
      </>
    ),
    tags: ["JavaScript", "TypeScript", "React.js", "Next.js", "Three.js", "React Native", "HTML", "CSS", "shadcn", "Tailwind CSS", "GSAP"]
  },
  {
    id: "backend",
    filename: "Server.js",
    title: "Backend Development",
    codeSnippet: (
      <>
        <span className="text-gray-500">// Runtime & Frameworks</span>
        <br />
        <span className="text-pink-400">const</span> <span className="text-blue-300">Node</span> <span className="text-white">=</span> <span className="text-blue-300">require</span>(<span className="text-green-300">'node.js'</span>);
        <br />
        <span className="text-pink-400">const</span> <span className="text-blue-300">Express</span> <span className="text-white">=</span> <span className="text-blue-300">require</span>(<span className="text-green-300">'express.js'</span>);
        <br />
        <br />
        <span className="text-gray-500">// Enterprise Logic</span>
        <br />
        <span className="text-pink-400">import</span> <span className="text-yellow-300">{`{`}</span> Java <span className="text-yellow-300">{`}`}</span> <span className="text-pink-400">from</span> <span className="text-green-300">"jdk"</span>;
        <br />
        <br />
        <span className="text-pink-400">const</span> <span className="text-blue-300">app</span> <span className="text-white">=</span> <span className="text-blue-300">Express</span>();
        <br />
        <br />
        <span className="text-blue-300">app</span>.<span className="text-blue-300">listen</span>(<span className="text-purple-400">8080</span>, () <span className="text-pink-400">=&gt;</span> <span className="text-yellow-300">{`{`}</span>
        <br />
        &nbsp;&nbsp;<span className="text-blue-300">console</span>.<span className="text-blue-300">log</span>(<span className="text-green-300">"Running on Node Environment"</span>);
        <br />
        <span className="text-yellow-300">{`}`}</span>);
      </>
    ),
    tags: ["Node.js", "Express.js", "Java"]
  },
  {
    id: "database",
    filename: "Database.tsx",
    title: "Database Management",
    codeSnippet: (
      <>
        <span className="text-pink-400">import</span> <span className="text-yellow-300">{`{`}</span> MongoClient <span className="text-yellow-300">{`}`}</span> <span className="text-pink-400">from</span> <span className="text-green-300">'mongodb'</span>;
        <br />
        <span className="text-pink-400">import</span> <span className="text-yellow-300">{`{`}</span> createClient <span className="text-yellow-300">{`}`}</span> <span className="text-pink-400">from</span> <span className="text-green-300">'@supabase/supabase-js'</span>;
        <br />
        <br />
        <span className="text-gray-500">// Database Connections</span>
        <br />
        <span className="text-pink-400">const</span> <span className="text-blue-300">config</span> <span className="text-white">=</span> <span className="text-yellow-300">{`{`}</span>
        <br />
        &nbsp;&nbsp;nosql: <span className="text-green-300">"MongoDB Atlas"</span>,
        <br />
        &nbsp;&nbsp;relational: <span className="text-green-300">"SQL / PostgreSQL"</span>,
        <br />
        &nbsp;&nbsp;baas: <span className="text-green-300">"Supabase"</span>
        <br />
        <span className="text-yellow-300">{`}`}</span>;
        <br />
        <br />
        <span className="text-pink-400">export const</span> <span className="text-blue-300">db</span> <span className="text-white">=</span> <span className="text-blue-300">connect</span>(config);
      </>
    ),
    tags: ["MongoDB", "SQL", "Supabase"]
  },
  {
    id: "tools",
    filename: "Tools.config.js",
    title: "Development Tools",
    codeSnippet: (
      <>
        <span className="text-pink-400">module</span>.<span className="text-blue-300">exports</span> <span className="text-white">=</span> <span className="text-yellow-300">{`{`}</span>
        <br />
        &nbsp;&nbsp;editor: <span className="text-green-300">"VS Code"</span>,
        <br />
        &nbsp;&nbsp;versionControl: <span className="text-green-300">"Git & GitHub"</span>,
        <br />
        &nbsp;&nbsp;bundler: <span className="text-green-300">"Vite"</span>,
        <br />
        &nbsp;&nbsp;deployment: <span className="text-blue-400">[</span><span className="text-green-300">"Vercel"</span>, <span className="text-green-300">"Netlify"</span><span className="text-blue-400">]</span>,
        <br />
        &nbsp;&nbsp;design: <span className="text-green-300">"Figma"</span>
        <br />
        <span className="text-yellow-300">{`}`}</span>;
      </>
    ),
    tags: ["Git", "GitHub", "Vite", "Figma", "Vercel"]
  }
];