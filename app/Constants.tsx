import React from 'react';
import { ExperienceItem, ProjectItem, SkillCategory, ServiceItem } from './types';
import { Globe, Smartphone, Palette, Database, Cpu, Rocket } from 'lucide-react';

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

export const BLOGS = [
  {
    id: 1,
    title: "The Future of Frontend: What to Expect in 2025",
    excerpt: "Exploring the rise of AI-driven development, Server Components, and the next generation of build tools that will define the web.",
    content: "AI-driven tooling is redefining frontend workflows. From code generation to intelligent refactoring, developers spend more time on product thinking than boilerplate.\n\nServer Components continue to shift rendering back to the server, simplifying data fetching and reducing client bundle sizes. Expect hybrid apps that mix SSR, RSC, and selective client islands.\n\nBuild tools are converging on DX-first designs: instant HMR, stable source maps, and granular code-splitting by default.",
    date: "Oct 24, 2024",
    readTime: "5 min read",
    category: "Technology",
    author: "Imran Ansari",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop",
    tags: ["React", "AI", "Web"],
  },
  {
    id: 2,
    title: "Building Scalable HRMS Systems with Next.js",
    excerpt: "A deep dive into the architecture behind high-performance enterprise applications, focusing on database design and real-time updates.",
    content: "Scalability starts with a clear domain model. Separate identity, payroll, attendance, and reporting into bounded contexts.\n\nUse event-driven updates and WebSockets for real-time dashboards. Favor incremental static regeneration for high-traffic read views, and server actions for secure mutations.\n\nObservability (logs, traces, metrics) must be first-class to keep the system reliable.",
    date: "Oct 10, 2024",
    readTime: "8 min read",
    category: "Engineering",
    author: "Imran Ansari",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    tags: ["SaaS", "Architecture", "Next.js"],
  },
  {
    id: 3,
    title: "Mastering Framer Motion for React",
    excerpt: "Learn how to create fluid, complex animations that enhance user experience without sacrificing performance.",
    content: "Start with layout-aware motion to avoid jank during reflow. Use variants to orchestrate complex sequences across components.\n\nPrefer transform animations over layout changes for GPU acceleration.\n\nMeasure and cap animation duration; microinteractions should feel crisp, not slow.",
    date: "Sep 28, 2024",
    readTime: "6 min read",
    category: "Design",
    author: "Imran Ansari",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop",
    tags: ["Animation", "UI/UX", "React"],
  },
  {
    id: 4,
    title: "Optimizing Web Performance: A Practical Guide",
    excerpt: "Practical strategies to improve Core Web Vitals, reduce LCP, and ensure your site ranks high on Google.",
    content: "Optimize LCP by preloading hero images and using responsive formats (AVIF/WebP).\n\nReduce TBT with code-splitting and deferring non-critical work.\n\nShip fewer bytes: compress images, purge CSS, and cache aggressively at the edge.",
    date: "Sep 15, 2024",
    readTime: "7 min read",
    category: "Performance",
    author: "Imran Ansari",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    tags: ["SEO", "Speed", "Optimization"],
  },
  {
    id: 5,
    title: "The Role of AI in Modern UI Design",
    excerpt: "How generative AI tools are changing the way we prototype, design, and iterate on user interfaces.",
    content: "AI accelerates ideation—generate variants, compare heuristics, and quickly converge.\n\nUse AI for accessibility audits and content tone checks.\n\nDesigners remain in control; AI is a multiplier, not a replacement.",
    date: "Aug 30, 2024",
    readTime: "4 min read",
    category: "Design",
    author: "Imran Ansari",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
    tags: ["AI", "Design", "Future"],
  },
  {
    id: 6,
    title: "Effective State Management in 2024",
    excerpt: "Comparing Redux Toolkit, Zustand, and React Context to help you choose the right tool for your next project.",
    content: "RTK excels at large teams and predictable workflows. Zustand is ideal for local, ergonomic stores without boilerplate. Context is best for stable, small-scale global values.\n\nPick based on scale, team, and performance constraints—avoid over-engineering.",
    date: "Aug 12, 2024",
    readTime: "10 min read",
    category: "Engineering",
    author: "Imran Ansari",
    image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=800&auto=format&fit=crop",
    tags: ["State", "React", "JavaScript"],
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

export const SERVICES: ServiceItem[] = [
  {
    id: "web-dev",
    title: "Enterprise Web Development",
    description: "High-performance, scalable web applications built with Next.js and React for modern businesses.",
    longDescription:
      "I engineer robust, scalable, and high-performance web solutions tailored to enterprise needs. By leveraging Next.js and modern React patterns, I deliver pixel-perfect interfaces backed by secure, optimized infrastructure. Whether you need a complex SaaS platform, a dynamic marketing site, or an internal dashboard, I ensure your web presence is fast, accessible, and future-proof.",
    icon: <Globe size={24} />,
    features: [
      "Custom SaaS Platform Architecture",
      "Progressive Web Apps (PWA)",
      "Headless CMS Integration",
      "SSR & Static Generation for SEO",
      "Real-time Data Synchronization",
      "Secure Payment Gateway Integration",
    ],
    benefits: [
      "99.9% Uptime Architecture",
      "Lightning Fast Page Loads (<1s)",
      "SEO-First Development",
      "Bank-Grade Security Standards",
    ],
  },
  {
    id: "mobile-app",
    title: "Cross-Platform Mobile Apps",
    description: "Native-quality iOS and Android applications using Flutter for rapid deployment and seamless UX.",
    longDescription:
      "Reach your customers on every device with a unified code base. Using Flutter, I build stunning, natively compiled applications for mobile, web, and desktop from a single codebase. This approach reduces development time by 40% without compromising on performance or user experience.",
    icon: <Smartphone size={24} />,
    features: [
      "iOS & Android Deployment",
      "Native Performance Compilation",
      "Hardware Integration (Camera, GPS, Biometrics)",
      "Offline-First Architecture",
      "Automated Push Notifications",
      "App Store & Play Store Optimization",
    ],
    benefits: [
      "Single Codebase efficiency",
      "Native 60fps Performance",
      "Rapid Prototyping & MVP",
      "Seamless Cloud Sync",
    ],
  },
  {
    id: "ui-ux",
    title: "Product Design (UI/UX)",
    description: "User-centric design systems and interactive prototypes that drive engagement and retention.",
    longDescription:
      "Great software starts with empathy. I design intuitive, accessible, and aesthetically pleasing interfaces that solve real user problems. From wireframing complex workflows to crafting high-fidelity design systems, I ensure your product is not just usable, but delightful.",
    icon: <Palette size={24} />,
    features: [
      "User Journey Mapping",
      "High-Fidelity Prototyping in Figma",
      "Design System Creation",
      "Accessibility (WCAG) Compliance",
      "Micro-interaction Design",
      "Usability Testing & Research",
    ],
    benefits: [
      "Higher User Retention",
      "Reduced Development Friction",
      "Brand Consistency",
      "Accessible to All Users",
    ],
  },
  {
    id: "crm-backend",
    title: "Backend & CRM Solutions",
    description: "Scalable APIs, database architecture, and custom CRM systems to streamline operations.",
    longDescription:
      "Power your business with a robust backend. I architect secure, scalable APIs and manage complex database relationships to support your business logic. Additionally, I build custom CRM and ERP solutions that automate workflows and provide actionable insights.",
    icon: <Database size={24} />,
    features: [
      "RESTful & GraphQL API Development",
      "Microservices Architecture",
      "Database Design (SQL/NoSQL)",
      "Authentication (OAuth, JWT)",
      "Third-party API Integrations (Stripe, Twilio)",
      "Automated Cron Jobs & Workflows",
    ],
    benefits: [
      "Secure Data Handling",
      "Infinite Scalability",
      "Automated Business Logic",
      "Real-time Analytics",
    ],
  },
  {
    id: "ai-integration",
    title: "AI & LLM Integration",
    description: "Infusing applications with Artificial Intelligence for smart automation and predictive insights.",
    longDescription:
      "Stay ahead of the curve by integrating AI into your workflow. I implement Large Language Models (LLMs) like GPT-4 and Claude to build smart chatbots, content generators, and data analysis tools that transform how your users interact with your software.",
    icon: <Cpu size={24} />,
    features: [
      "Custom Chatbot Development",
      "Semantic Search & Embeddings",
      "Automated Content Generation",
      "Predictive Analytics Models",
      "Voice-to-Text Integration",
      "AI Agent Workflows",
    ],
    benefits: [
      "24/7 Automated Support",
      "Personalized User Experiences",
      "Data-Driven Decisions",
      "Operational Efficiency",
    ],
  },
  {
    id: "performance",
    title: "Performance Optimization",
    description: "Auditing and refining applications for maximum speed, SEO ranking, and accessibility scores.",
    longDescription:
      "Speed is a feature. I conduct comprehensive audits of your web infrastructure to identify bottlenecks. By optimizing assets, code splitting, and server configurations, I help you achieve perfect Lighthouse scores, improving both SEO rankings and user conversion rates.",
    icon: <Rocket size={24} />,
    features: [
      "Core Web Vitals Optimization",
      "Server Response Time Reduction",
      "Advanced Caching Strategies",
      "Image & Asset Compression",
      "Technical SEO Audits",
      "Bundle Size Reduction",
    ],
    benefits: [
      "Higher Google Rankings",
      "Lower Bounce Rates",
      "Improved Mobile Experience",
      "Reduced Hosting Costs",
    ],
  },
];
