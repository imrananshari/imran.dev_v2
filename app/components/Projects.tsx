"use client";
import React from 'react';
import { PROJECTS } from '../Constants';
import { motion } from 'framer-motion';
import { Github, Lock, Globe, ArrowUpRight } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-background relative overflow-hidden">
      {/* Subtle Background Elements for depth */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
        >
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Selected Work</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              A curated selection of projects demonstrating expertise in frontend architecture, 
              interactive design, and scalable web solutions.
            </p>
          </div>
          <div className="hidden md:block pb-2">
              <span className="text-sm font-mono text-gray-500">01 — 06</span>
          </div>
        </motion.div>

        {/* Bento Grid Layout: Top 4 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROJECTS.slice(0,4).map((project, index) => (
            <ProjectCard 
              key={index} 
              project={project} 
              index={index} 
              spanClass={index === 0 ? 'md:col-span-2' : index === 1 ? 'md:col-span-1' : index === 2 ? 'md:col-span-1' : 'md:col-span-2'}
            />
          ))}
        </div>

        {/* Bento Grid Layout: Bottom 2 */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROJECTS.slice(4).map((project, index) => (
            <ProjectCard 
              key={`bottom-${index}`} 
              project={project} 
              index={index} 
              spanClass={index === 0 ? 'md:col-span-2' : 'md:col-span-1'}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard: React.FC<{ project: any; index: number; spanClass?: string }> = ({ project, index, spanClass }) => {
  // Balanced Bento Grid Logic for 6 items in 3 columns:
  // Row 1: [2 cols] [1 col]
  // Row 2: [1 col] [2 cols]
  // Row 3: [2 cols] [1 col]
  const getSpanClass = (i: number) => {
    if (i === 0) return "md:col-span-2";
    if (i === 1) return "md:col-span-1";
    if (i === 2) return "md:col-span-1";
    if (i === 3) return "md:col-span-2";
    if (i === 4) return "md:col-span-2";
    if (i === 5) return "md:col-span-1";
    return "md:col-span-1";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true, margin: "-50px" }}
      className={`group relative rounded-3xl overflow-hidden bg-surface border border-white/5 h-[360px] md:h-[360px] ${spanClass ?? getSpanClass(index)}`}
    >
      {/* Background Image - Zoom effect */}
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
        />
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent opacity-60 transition-opacity duration-300"></div>
      
      {/* Dark tint on hover for better text contrast */}
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>

      {/* Bottom-region blur and tint for text legibility */}
      <div className="absolute inset-x-0 bottom-0 h-[55%]  bg-black/0.5 backdrop-blur-sm  "></div>

      {/* Hover Border Effect */}
      <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/10 rounded-3xl transition-all duration-300 pointer-events-none z-20"></div>

      {/* Content Container */}
      <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
        
        {/* Header (Top) */}
        <div className="flex justify-between items-start translate-y-[-10px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <div className="flex gap-2">
             {/* Left side spacer */}
          </div>
          
          {/* Action Buttons */}
          <div className="flex gap-3">
             {project.liveLink && (
               <a 
                 href={project.liveLink} 
                 target="_blank" 
                 rel="noreferrer"
                 className="w-10 h-10 flex items-center justify-center bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-black transition-all duration-300 border border-white/10"
                 title="View Live"
               >
                 <ArrowUpRight size={18} />
               </a>
            )}
            {project.githubLink && (
              <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-black transition-all duration-300 border border-white/10"
                  title="View Code"
              >
                  <Github size={18} />
              </a>
            )}
            {project.notes && (
                 <div className="w-10 h-10 flex items-center justify-center bg-red-500/10 backdrop-blur-md rounded-full text-red-400 border border-red-500/20" title="Private Project">
                    <Lock size={16} />
                 </div>
            )}
          </div>
        </div>

        <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          <div className="mb-4 p-4">
             <h3 className="text-3xl font-bold text-white mb-2 leading-tight">{project.title}</h3>
             <p className="text-gray-200 text-sm md:text-base leading-relaxed max-w-xl transition-colors mb-4">
               {project.description}
             </p>
             <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech: string) => (
                  <span key={tech} className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-white/10 backdrop-blur-md rounded-md text-gray-100 border border-white/10">
                      {tech}
                  </span>
                ))}
             </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;