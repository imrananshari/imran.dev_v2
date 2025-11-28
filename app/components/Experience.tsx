"use client";

import React from 'react';
import { EXPERIENCES } from '../Constants';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 md:py-32 bg-background relative">
      {/* Horizontal Partition Line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <div className="container mx-auto px-4 md:px-12 max-w-7xl">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-6"
        >
            <div className="max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Professional Journey</h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                    A timeline of my career, building scalable solutions and driving technical innovation.
                </p>
            </div>
        </motion.div>

        <div className="max-w-6xl mx-auto relative">
           {EXPERIENCES.map((exp, index) => (
             <ExperienceCard key={index} experience={exp} index={index} total={EXPERIENCES.length} />
           ))}
        </div>
      </div>
    </section>
  );
};

const ExperienceCard: React.FC<{ experience: typeof EXPERIENCES[0]; index: number; total: number }> = ({ experience, index, total }) => {
  // Responsive Sticky Offset Logic
  // Mobile: Start higher (80px) with minimal increment (5px) to save vertical space
  // Desktop: Start lower (120px) with wider increment (50px) for aesthetic stack
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const topOffset = isMobile ? 80 + index * 10 : 120 + index * 50; 
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className={`
        flex flex-col bg-[#121212] border border-white/10 rounded-2xl md:rounded-3xl 
        p-5 md:p-12 shadow-2xl overflow-hidden relative group
        sticky mb-12 md:mb-24
      `}
      style={{
        top: `${topOffset}px`, 
        zIndex: index + 10,
        boxShadow: '0 -5px 30px rgba(0,0,0,0.5)', 
      }}
    >
        {/* Micro-interaction: Scanning Line Effect */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent -translate-x-full group-hover:animate-scanline opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

        {/* Header Section - Compact on Mobile */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 md:gap-4 mb-4 md:mb-8 pb-4 md:pb-6 border-b border-white/5 relative z-10">
            <div>
                <h3 className="text-lg md:text-3xl font-bold text-white tracking-tight mb-1 md:mb-2">{experience.role}</h3>
                <span className={`text-base md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${getCompanyColor(index)}`}>
                    {experience.company}
                </span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-white/5 rounded-full border border-white/5 text-[10px] md:text-sm font-mono text-gray-400">
                <Calendar size={12} className="md:w-3.5 md:h-3.5" />
                <span>{experience.period}</span>
            </div>
        </div>

        {/* Content Section - Optimized Typography for Mobile */}
        <div className="flex-1 relative z-10">
            <p className="text-gray-300 text-sm md:text-lg leading-relaxed mb-6 md:mb-8 max-w-3xl">
                {experience.description}
            </p>
            
            {experience.achievements && (
                <div className="mb-6 md:mb-8">
                    <h4 className="text-xs md:text-sm font-bold text-gray-500 uppercase tracking-wider mb-3 md:mb-4">Key Achievements</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 md:gap-y-3">
                        {experience.achievements.map((ach, i) => (
                            <li key={i} className="flex items-start gap-2 md:gap-3 text-gray-400 group/item">
                                <span className="mt-1.5 md:mt-2 w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-blue-500/50 group-hover/item:bg-blue-400 transition-colors shrink-0"></span>
                                <span className="leading-relaxed text-xs md:text-base">{ach}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>

        {/* Footer / Tech Stack - Compact Pills */}
        <div className="pt-4 md:pt-6 border-t border-white/5 flex flex-wrap gap-1.5 md:gap-2 relative z-10">
            {experience.techStack.map((tech) => (
                <span 
                    key={tech} 
                    className="px-2 py-1 md:px-3 md:py-1.5 text-[10px] md:text-xs font-medium rounded-lg bg-white/5 text-gray-400 border border-white/5 hover:bg-white/10 hover:text-white transition-colors cursor-default"
                >
                    {tech}
                </span>
            ))}
        </div>
    </motion.div>
  );
};

// Helper for colorful company names
const getCompanyColor = (index: number) => {
    const colors = [
        "from-blue-400 to-indigo-400",
        "from-emerald-400 to-teal-400",
        "from-orange-400 to-pink-400", 
        "from-purple-400 to-fuchsia-400"
    ];
    return colors[index % colors.length];
};

export default Experience;