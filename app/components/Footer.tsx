"use client";
import React, { useRef, useState } from 'react';
import { SOCIAL_LINKS } from '../Constants';
import { Github, Linkedin, MessageCircle, Instagram, Mail, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] pt-12 pb-12 relative overflow-hidden">
      {/* Subtle Background Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-blue-900/5 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col relative">
            
            {/* Top Row: Social Icons (Right Aligned) */}
            <div className="flex justify-end mb-6 md:mb-0 md:absolute md:top-0 md:right-0 z-20">
                <div className="flex gap-3">
                    <MagneticIcon href={SOCIAL_LINKS.github} icon={<Github size={18} />} label="GitHub" />
                    <MagneticIcon href={SOCIAL_LINKS.linkedin} icon={<Linkedin size={18} />} label="LinkedIn" />
                    <MagneticIcon href={SOCIAL_LINKS.email} icon={<Mail size={18} />} label="Email" />
                    <MagneticIcon href={SOCIAL_LINKS.whatsapp} icon={<MessageCircle size={18} />} label="WhatsApp" />
                    <MagneticIcon href={SOCIAL_LINKS.instagram} icon={<Instagram size={18} />} label="Instagram" />
                </div>
            </div>

            {/* Big Name Display - Clean & Bold (Centered) */}
            <div className="text-center mt-12 md:mt-12">
                <h1 className="text-[12vw] md:text-[15vw] font-black leading-none tracking-tighter text-white/5 select-none transition-colors duration-500 hover:text-white/10 cursor-default">
                    IMRAN<span className="text-blue-500/20">.</span>DEV
                </h1>
            </div>

            {/* Bottom Bar */}
            <div className="w-full mt-12 md:mt-24 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-white/5 pt-8">
                <p className="text-xs text-gray-600">
                    © {new Date().getFullYear()} Imran Ansari. <span className="hidden md:inline">All rights reserved.</span>
                </p>

                {/* Scroll to Top Button */}
                <button 
                    onClick={scrollToTop}
                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all group"
                    title="Scroll to top"
                >
                    <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
                </button>
            </div>
        </div>
      </div>
    </footer>
  );
};

const MagneticIcon: React.FC<{ href: string; icon: React.ReactNode; label: string }> = ({ href, icon, label }) => {
    const ref = useRef<HTMLAnchorElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current!.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        setPosition({ x: x * 0.3, y: y * 0.3 });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <motion.a
            ref={ref}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group p-3 rounded-full bg-white/5 border border-white/5 text-gray-400 hover:text-white transition-colors"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            title={label}
        >
            {icon}
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-30">
                {label}
            </span>
        </motion.a>
    );
};

export default Footer;