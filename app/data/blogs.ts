export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  author: string;
  image: string;
  tags: string[];
}

export const BLOGS: BlogPost[] = [
  {
    id: 1,
    title: "The Future of Frontend: What to Expect in 2025",
    excerpt:
      "Exploring the rise of AI-driven development, Server Components, and the next generation of build tools that will define the web.",
    content:
      "AI-driven tooling is redefining frontend workflows. From code generation to intelligent refactoring, developers spend more time on product thinking than boilerplate.\n\nServer Components continue to shift rendering back to the server, simplifying data fetching and reducing client bundle sizes. Expect hybrid apps that mix SSR, RSC, and selective client islands.\n\nBuild tools are converging on DX-first designs: instant HMR, stable source maps, and granular code-splitting by default.",
    date: "Oct 24, 2024",
    readTime: "5 min read",
    category: "Technology",
    author: "Imran Ansari",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop",
    tags: ["React", "AI", "Web"],
  },
  {
    id: 2,
    title: "Building Scalable HRMS Systems with Next.js",
    excerpt:
      "A deep dive into the architecture behind high-performance enterprise applications, focusing on database design and real-time updates.",
    content:
      "Scalability starts with a clear domain model. Separate identity, payroll, attendance, and reporting into bounded contexts.\n\nUse event-driven updates and WebSockets for real-time dashboards. Favor incremental static regeneration for high-traffic read views, and server actions for secure mutations.\n\nObservability (logs, traces, metrics) must be first-class to keep the system reliable.",
    date: "Oct 10, 2024",
    readTime: "8 min read",
    category: "Engineering",
    author: "Imran Ansari",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    tags: ["SaaS", "Architecture", "Next.js"],
  },
  {
    id: 3,
    title: "Mastering Framer Motion for React",
    excerpt:
      "Learn how to create fluid, complex animations that enhance user experience without sacrificing performance.",
    content:
      "Start with layout-aware motion to avoid jank during reflow. Use variants to orchestrate complex sequences across components.\n\nPrefer transform animations over layout changes for GPU acceleration.\n\nMeasure and cap animation duration; microinteractions should feel crisp, not slow.",
    date: "Sep 28, 2024",
    readTime: "6 min read",
    category: "Design",
    author: "Imran Ansari",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop",
    tags: ["Animation", "UI/UX", "React"],
  },
  {
    id: 4,
    title: "Optimizing Web Performance: A Practical Guide",
    excerpt:
      "Practical strategies to improve Core Web Vitals, reduce LCP, and ensure your site ranks high on Google.",
    content:
      "Optimize LCP by preloading hero images and using responsive formats (AVIF/WebP).\n\nReduce TBT with code-splitting and deferring non-critical work.\n\nShip fewer bytes: compress images, purge CSS, and cache aggressively at the edge.",
    date: "Sep 15, 2024",
    readTime: "7 min read",
    category: "Performance",
    author: "Imran Ansari",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    tags: ["SEO", "Speed", "Optimization"],
  },
  {
    id: 5,
    title: "The Role of AI in Modern UI Design",
    excerpt:
      "How generative AI tools are changing the way we prototype, design, and iterate on user interfaces.",
    content:
      "AI accelerates ideation—generate variants, compare heuristics, and quickly converge.\n\nUse AI for accessibility audits and content tone checks.\n\nDesigners remain in control; AI is a multiplier, not a replacement.",
    date: "Aug 30, 2024",
    readTime: "4 min read",
    category: "Design",
    author: "Imran Ansari",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
    tags: ["AI", "Design", "Future"],
  },
  {
    id: 6,
    title: "Effective State Management in 2024",
    excerpt:
      "Comparing Redux Toolkit, Zustand, and React Context to help you choose the right tool for your next project.",
    content:
      "RTK excels at large teams and predictable workflows. Zustand is ideal for local, ergonomic stores without boilerplate. Context is best for stable, small-scale global values.\n\nPick based on scale, team, and performance constraints—avoid over-engineering.",
    date: "Aug 12, 2024",
    readTime: "10 min read",
    category: "Engineering",
    author: "Imran Ansari",
    image:
      "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=800&auto=format&fit=crop",
    tags: ["State", "React", "JavaScript"],
  },
];

