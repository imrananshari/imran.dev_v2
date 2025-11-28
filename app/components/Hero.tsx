"use client";
import React, { useState, useEffect } from 'react';
import { 
    Github, Linkedin, Mail, MessageCircle, Youtube, Download, X,
    Bell, Home, User, Wallet, Activity, ArrowRight, Layout, Star,
    MoreHorizontal, CheckCircle2, Search, Menu, BarChart3, Settings, LogOut,
    Briefcase, Code2, Users, Server, Zap, Shield, Signal, Wifi, Battery
} from 'lucide-react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { SOCIAL_LINKS } from '../Constants';

const resumePdf = "/assets/Imran_Ansari.pdf";

const IMAGES = [
  "/assets/imran dubai3.jpg",
  "/assets/imran dubai2.jpg",
  "/assets/imran.jpg",
  "/assets/Image (3).jpg"
];

const TEAM_AVATARS = [
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&auto=format&fit=crop"
];

const Hero: React.FC = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-48 md:pb-0 overflow-hidden bg-background">
      {/* Background Gradient Spot */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Container - Widened for professional spacing */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20 relative z-10">
        
        {/* Left Side Content - Text */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex flex-col items-start text-left min-w-0 max-w-2xl"
        >
          {/* Status Indicator Chip */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium cursor-default"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Available for new projects
          </motion.div>
          
          {/* Marketing / Value Proposition Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-[1.1] text-white">
            <span className="whitespace-nowrap">Building Scalable</span> <br />
            <span className="whitespace-nowrap bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
              Digital Products
            </span>
          </h1>
          
          {/* Description with Personal Identity & Typewriter */}
          <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 max-w-lg leading-relaxed">
            Hi, I'm <span className="text-white font-bold tracking-tight">Imran</span> <span className="text-gray-400 font-bold tracking-tight">Ansari</span>. 
            I am a <Typewriter words={["Software Developer", "Frontend Architect", "UI/UX Engineer"]} /> specializing in 
            modern frontend architecture. I help startups and agencies craft high-performance, minimalist SaaS and mobile solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 md:gap-4 mb-8 md:mb-12">
             <button 
               type="button"
               onClick={() => setIsResumeOpen(true)}
               className="flex items-center gap-2 px-6 py-2.5 md:px-8 md:py-3.5 bg-white text-black text-sm md:text-base font-bold rounded-full hover:bg-gray-200 transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.2)] whitespace-nowrap"
             >
              <Download size={18} />
              Download CV
             </button>
             <a 
               href="#contact" 
               className="px-6 py-2.5 md:px-8 md:py-3.5 border border-white/20 text-white text-sm md:text-base font-semibold rounded-full hover:bg-white/10 transition-colors backdrop-blur-sm whitespace-nowrap"
             >
              Contact Me
             </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5 md:gap-8 items-center">
            <SocialIcon href={SOCIAL_LINKS.github} icon={<Github size={20} className="md:w-6 md:h-6" />} hoverColor="hover:text-white" />
            <SocialIcon href={SOCIAL_LINKS.linkedin} icon={<Linkedin size={20} className="md:w-6 md:h-6" />} hoverColor="hover:text-[#0077b5]" />
            <SocialIcon href={SOCIAL_LINKS.email} icon={<Mail size={20} className="md:w-6 md:h-6" />} hoverColor="hover:text-[#ea4335]" />
            <SocialIcon href={SOCIAL_LINKS.whatsapp} icon={<MessageCircle size={20} className="md:w-6 md:h-6" />} hoverColor="hover:text-[#25d366]" />
            <SocialIcon href={SOCIAL_LINKS.youtube} icon={<Youtube size={20} className="md:w-6 md:h-6" />} hoverColor="hover:text-[#FF0000]" />
          </div>
        </motion.div>

        {/* Right Side Visual (Website & App UI Presentation) */}
        <div className="flex-1 flex justify-center items-center relative h-[450px] md:h-[650px] min-w-0 md:translate-x-8 perspective-1000 w-full">
           <motion.div
              className="relative w-full max-w-[550px] aspect-square flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
           >
                {/* Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/10 rounded-full blur-[100px]"></div>

                {/* Desktop UI Frame (Website Dashboard Simulation) */}
                <DesktopBrowser />
                
                {/* Mobile UI Frame (App Interface) */}
                <MobileAppFrame />

                {/* Orbiting Decor */}
                <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                    className="absolute w-[130%] h-[130%] border border-dashed border-white/5 rounded-full z-0 pointer-events-none"
                />
           </motion.div>
        </div>
      </div>
      <AnimatePresence>
        {isResumeOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4"
            onClick={() => setIsResumeOpen(false)}
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative w-[92vw] max-w-3xl h-[70vh] md:w-[80vw] md:max-w-4xl md:h-[75vh] lg:w-[70vw] lg:max-w-5xl lg:h-[80vh] bg-[#0f0f10] border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-4 md:px-6 py-3 border-b border-white/10 bg-black/30">
                <div className="flex items-center gap-2 text-sm md:text-base text-gray-300 font-semibold">
                  <span>Resume Preview</span>
                </div>
                <div className="flex items-center gap-2">
                  <a 
                    href={resumePdf} 
                    download 
                    className="flex items-center gap-2 px-3 py-1.5 bg-white text-black text-xs md:text-sm font-bold rounded-full hover:bg-gray-200 transition-colors"
                  >
                    <Download size={16} />
                    <span>Download</span>
                  </a>
                  <button 
                    type="button"
                    onClick={() => setIsResumeOpen(false)}
                    className="p-2 rounded-full border border-white/10 text-gray-300 hover:text-white hover:bg-white/10"
                    aria-label="Close"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>
              <div className="w-full h-full">
                <iframe src={resumePdf} className="w-full h-full bg-black" title="Resume Preview" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

// Component for the Mobile App Frame - Refined Apple Style
const MobileAppFrame: React.FC = () => {
    const scrollControls = useAnimation();

    useEffect(() => {
        const sequence = async () => {
            while(true) {
                // Scroll down
                await scrollControls.start({
                    y: -100,
                    transition: { duration: 4, ease: "linear" }
                });
                await new Promise(resolve => setTimeout(resolve, 1000));
                // Scroll up/reset
                await scrollControls.start({
                    y: 0,
                    transition: { duration: 1, ease: "easeInOut" }
                });
                await new Promise(resolve => setTimeout(resolve, 500));
            }
        };
        sequence();
    }, [scrollControls]);

    return (
        <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ 
                y: [10, -10, 10], 
                x: [0, -5, 0],
                opacity: 1
            }}
            transition={{ 
                duration: 5, 
                repeat: Infinity, 
                ease: "easeInOut", 
                delay: 0.2,
                opacity: { duration: 0.8, delay: 0.4 }
            }}
            // Fixed realistic mobile dimensions and styling - Modified for mobile positioning
            className="absolute right-[5%] md:right-[-30px] bottom-[-80px] md:bottom-[-40px] w-[160px] md:w-[170px] h-[320px] md:h-[340px] bg-[#000000] border-[5px] border-[#1a1a1a] rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-20 overflow-hidden flex flex-col box-border ring-1 ring-white/10"
        >
            {/* Dynamic Island / Notch */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[30%] h-[18px] bg-black rounded-full z-50 flex items-center justify-center gap-1 px-1">
                {/* Hidden internals simulated */}
            </div>
            
            {/* Top Status Bar */}
            <div className="h-8 w-full bg-[#0a0a0a] flex justify-between items-center px-3 pt-2 text-[8px] text-white z-40 relative">
                <span className="font-semibold ml-1">9:41</span>
                <div className="flex gap-0.5 items-center">
                    <Signal size={8} fill="currentColor" />
                    <Wifi size={8} />
                    <Battery size={8} fill="currentColor" />
                </div>
            </div>
            
            {/* App Content */}
            <div className="flex-1 flex flex-col bg-[#0a0a0a] relative overflow-hidden">
                 {/* Sticky Header */}
                <div className="flex items-center justify-between px-3 pb-2 pt-1 shrink-0 relative z-30 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/5">
                    <div>
                       <div className="text-[8px] text-gray-400">Welcome back</div>
                       <div className="text-[10px] font-bold text-white">Imran</div>
                    </div>
                    <div className="w-6 h-6 rounded-full bg-white/10 border border-white/10 flex items-center justify-center">
                       <Bell size={10} className="text-white" />
                    </div>
                </div>

                {/* Scrollable Area */}
                <div className="flex-1 overflow-hidden relative px-3 pt-2">
                    <motion.div 
                        className="flex flex-col gap-3 pb-8"
                        animate={scrollControls}
                    >
                        {/* Credit Card Widget - Scaled for small screens */}
                        <div className="w-full aspect-[1.6/1] rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 p-2.5 text-white shadow-lg shadow-indigo-500/20 relative overflow-hidden shrink-0 group">
                            <div className="absolute -right-4 -bottom-8 w-20 h-20 bg-white/20 rounded-full blur-xl"></div>
                            <div className="flex justify-between items-start mb-2">
                                <div className="p-1 rounded bg-white/20 backdrop-blur-md"><Wallet size={10} /></div>
                                <div className="text-[6px] font-mono opacity-80">**** 4291</div>
                            </div>
                            <div className="mt-auto">
                                <div className="text-[8px] opacity-70">Total Balance</div>
                                <div className="text-sm font-bold font-mono tracking-tight">$24,500</div>
                            </div>
                        </div>

                        {/* Recent Activity List */}
                        <div className="flex-1 space-y-2">
                            <div className="flex justify-between items-center">
                                <div className="text-[8px] font-bold text-gray-500 uppercase">Transactions</div>
                                <div className="text-[8px] text-blue-400 cursor-pointer">See All</div>
                            </div>
                            
                            <div className="w-full p-2 rounded-lg bg-white/5 border border-white/5 flex items-center gap-2">
                                <div className="w-6 h-6 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center shrink-0">
                                   <Activity size={10} />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="text-[8px] font-bold text-gray-200 truncate">Netflix</div>
                                    <div className="text-[6px] text-gray-500">Sub</div>
                                </div>
                                <div className="text-[8px] font-mono text-white">-$15</div>
                            </div>

                            <div className="w-full p-2 rounded-lg bg-white/5 border border-white/5 flex items-center gap-2">
                                <div className="w-6 h-6 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center shrink-0">
                                   <ArrowRight size={10} />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="text-[8px] font-bold text-gray-200 truncate">Freelance</div>
                                    <div className="text-[6px] text-gray-500">Income</div>
                                </div>
                                <div className="text-[8px] font-mono text-green-400">+$850</div>
                            </div>

                            <div className="w-full p-2 rounded-lg bg-white/5 border border-white/5 flex items-center gap-2">
                                <div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                                   <Layout size={10} />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="text-[8px] font-bold text-gray-200 truncate">Uber</div>
                                    <div className="text-[6px] text-gray-500">Ride</div>
                                </div>
                                <div className="text-[8px] font-mono text-white">-$24</div>
                            </div>
                            
                            <div className="w-full p-2 rounded-lg bg-white/5 border border-white/5 flex items-center gap-2">
                                <div className="w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0">
                                   <Star size={10} />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="text-[8px] font-bold text-gray-200 truncate">Spotify</div>
                                    <div className="text-[6px] text-gray-500">Music</div>
                                </div>
                                <div className="text-[8px] font-mono text-white">-$9</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Nav & Home Indicator */}
            <div className="bg-[#0a0a0a]/90 backdrop-blur-md border-t border-white/5 pb-1 z-30 relative">
                <div className="h-10 flex justify-around items-center px-2">
                   <div className="p-1.5 rounded-full text-blue-400 bg-blue-500/10"><Home size={12} /></div>
                   <div className="p-1.5 rounded-full text-gray-500"><Activity size={12} /></div>
                   <div className="p-1.5 rounded-full text-gray-500"><Wallet size={12} /></div>
                   <div className="p-1.5 rounded-full text-gray-500"><User size={12} /></div>
                </div>
                {/* Home Indicator */}
                <div className="w-1/3 h-1 bg-white/20 rounded-full mx-auto mb-1"></div>
            </div>
        </motion.div>
    );
}

// ... existing DesktopBrowser, SocialIcon and Typewriter components ...
const DesktopBrowser: React.FC = () => {
    const [pageIndex, setPageIndex] = useState(0);
    // Priority: Profile -> Dashboard -> Activity
    const pages = ['profile', 'dashboard', 'activity'];
    const scrollControls = useAnimation();
    
    useEffect(() => {
        const cyclePages = async () => {
            while(true) {
                // For each page, reset scroll, show content, then scroll down if needed, then switch
                await scrollControls.start({ y: 0, transition: { duration: 0 } });
                
                // Wait for view time
                await new Promise(resolve => setTimeout(resolve, 1000)); // Initial pause
                
                // Scroll down animation (simulating reading)
                await scrollControls.start({ 
                    y: -150, 
                    transition: { duration: 3, ease: "easeInOut" } 
                });
                
                await new Promise(resolve => setTimeout(resolve, 1000)); // Pause at bottom

                // Switch Page
                setPageIndex((prev) => (prev + 1) % pages.length);
            }
        };
        
        cyclePages();
    }, [scrollControls]);

    const activePage = pages[pageIndex];

    return (
        <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ 
                y: [-10, 10, -10], 
                rotateX: [0, 5, 0], 
                rotateY: [-5, 5, -5],
                opacity: 1 
            }}
            transition={{ 
                y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                rotateX: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                rotateY: { duration: 7, repeat: Infinity, ease: "easeInOut" },
                opacity: { duration: 0.8 }
            }}
            className="absolute w-[85%] md:w-[480px] h-[260px] md:h-[340px] bg-[#0f0f0f]/90 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl z-10 overflow-hidden flex flex-col"
            style={{ transformStyle: 'preserve-3d' }}
        >
            {/* Browser Window Header with Dynamic URL */}
            <div className="h-9 bg-[#1a1a1a] border-b border-white/5 flex items-center px-4 gap-3 shrink-0 z-20 relative">
                <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                </div>
                {/* Fake Address Bar */}
                <div className="ml-2 flex-1 h-5 bg-[#0f0f0f] rounded-md border border-white/5 flex items-center px-3 gap-2 overflow-hidden">
                    <div className="text-[6px] md:text-[8px] text-gray-500">https://</div>
                    <AnimatePresence mode="wait">
                        <motion.div 
                            key={activePage}
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -10, opacity: 0 }}
                            className="text-[8px] md:text-[10px] text-gray-300 font-mono"
                        >
                            imran.dev/app/{activePage}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Dashboard SPA Layout */}
            <div className="flex-1 flex bg-[#050505] overflow-hidden relative">
                
                {/* Persistent Sidebar */}
                <div className="w-12 md:w-16 border-r border-white/5 bg-[#0a0a0a] flex flex-col items-center py-4 gap-4 shrink-0 z-20">
                    <div className="w-6 h-6 rounded-md bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/30 mb-2">
                        <div className="font-bold text-[10px]">I</div>
                    </div>
                    
                    {/* Sidebar Icons with Active State */}
                    <div className={`p-2 rounded-lg transition-colors ${activePage === 'profile' ? 'bg-white/10 text-blue-400' : 'text-gray-500'}`}>
                        <User size={14} />
                    </div>
                    <div className={`p-2 rounded-lg transition-colors ${activePage === 'dashboard' ? 'bg-white/10 text-blue-400' : 'text-gray-500'}`}>
                        <Layout size={14} />
                    </div>
                    <div className={`p-2 rounded-lg transition-colors ${activePage === 'activity' ? 'bg-white/10 text-blue-400' : 'text-gray-500'}`}>
                        <BarChart3 size={14} />
                    </div>
                    
                    <div className="mt-auto text-gray-600">
                        <LogOut size={14} />
                    </div>
                </div>

                {/* Dynamic Main Content Area */}
                <div className="flex-1 flex flex-col relative overflow-hidden">
                    {/* Persistent Inner Header */}
                    <div className="h-10 border-b border-white/5 flex items-center justify-between px-4 bg-[#050505] z-20 relative">
                        <h2 className="text-[10px] font-bold text-white capitalize">{activePage}</h2>
                        <div className="flex items-center gap-3">
                            <div className="w-20 h-4 bg-white/5 rounded-full flex items-center px-2">
                                <Search size={8} className="text-gray-600" />
                            </div>
                            <div className="w-5 h-5 rounded-full bg-gray-800 overflow-hidden border border-white/10">
                                <img src={IMAGES[0]} className="w-full h-full object-cover" alt="User" />
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 relative overflow-hidden">
                        <AnimatePresence mode="wait">
                            {/* PROFILE VIEW - REDESIGNED */}
                            {activePage === 'profile' && (
                                <motion.div
                                    key="profile"
                                    initial={{ opacity: 0, x: 10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -10 }}
                                    transition={{ duration: 0.3 }}
                                    className="flex flex-col w-full bg-[#050505] relative"
                                >
                                    <motion.div animate={scrollControls} className="flex flex-col min-h-full">
                                        {/* Cover Area - Left Aligned Layout */}
                                        <div className="h-20 bg-gradient-to-r from-blue-900/10 via-purple-900/10 to-transparent rounded-lg border border-white/5 mx-4 mt-4 relative overflow-hidden shrink-0">
                                            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:10px_10px]"></div>
                                        </div>

                                        {/* Profile Info - Left Aligned */}
                                        <div className="flex-1 flex flex-col px-4">
                                            
                                            {/* Card Style Image - Left Aligned */}
                                            <div className="w-28 h-36 rounded-xl border-2 border-white/10 shadow-2xl overflow-hidden mb-3 relative group -mt-16 bg-[#111] shrink-0">
                                                <img src={IMAGES[0]} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Profile" />
                                            </div>

                                            {/* Name & Title */}
                                            <div className="mb-4 shrink-0">
                                                <h3 className="text-xl font-bold text-white tracking-tight">Imran Ansari</h3>
                                                <p className="text-[10px] text-blue-400 font-medium">Software Developer</p>
                                            </div>

                                            {/* Stats Chips with Icons - Minimal */}
                                            <div className="flex gap-2 shrink-0">
                                                <div className="flex items-center gap-2 px-3 py-1.5 bg-[#1a1a1a] rounded-full border border-white/5">
                                                    <div className="text-blue-400"><Briefcase size={10} /></div>
                                                    <div className="flex items-baseline gap-1">
                                                        <span className="text-[10px] font-bold text-white">1.6</span>
                                                        <span className="text-[8px] text-gray-500 uppercase">Years</span>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-2 px-3 py-1.5 bg-[#1a1a1a] rounded-full border border-white/5">
                                                    <div className="text-purple-400"><Code2 size={10} /></div>
                                                    <div className="flex items-baseline gap-1">
                                                        <span className="text-[10px] font-bold text-white">12+</span>
                                                        <span className="text-[8px] text-gray-500 uppercase">Projects</span>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            {/* Additional minimalist stat */}
                                            <div className="flex gap-2 mt-2 shrink-0">
                                                <div className="flex items-center gap-2 px-3 py-1.5 bg-[#1a1a1a] rounded-full border border-white/5">
                                                    <div className="text-green-400"><Users size={10} /></div>
                                                    <div className="flex items-baseline gap-1">
                                                        <span className="text-[10px] font-bold text-white">5+</span>
                                                        <span className="text-[8px] text-gray-500 uppercase">Clients</span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* EXTRA SCROLLABLE CONTENT for Profile */}
                                            <div className="mt-6 space-y-3 pb-8">
                                                <div className="text-[9px] font-bold text-gray-500 uppercase tracking-wider">Latest Projects</div>
                                                <div className="p-2 bg-[#1a1a1a] rounded-lg border border-white/5 flex gap-3 items-center">
                                                    <div className="w-8 h-8 bg-blue-500/10 rounded flex items-center justify-center text-blue-400"><Layout size={12} /></div>
                                                    <div>
                                                        <div className="text-[9px] font-bold text-white">SaaS Dashboard</div>
                                                        <div className="text-[7px] text-gray-500">React • Tailwind</div>
                                                    </div>
                                                </div>
                                                <div className="p-2 bg-[#1a1a1a] rounded-lg border border-white/5 flex gap-3 items-center">
                                                    <div className="w-8 h-8 bg-purple-500/10 rounded flex items-center justify-center text-purple-400"><Wallet size={12} /></div>
                                                    <div>
                                                        <div className="text-[9px] font-bold text-white">Fintech App</div>
                                                        <div className="text-[7px] text-gray-500">Flutter • Firebase</div>
                                                    </div>
                                                </div>
                                                <div className="text-[9px] font-bold text-gray-500 uppercase tracking-wider mt-2">Experience</div>
                                                <div className="p-2 bg-[#1a1a1a] rounded-lg border border-white/5 flex gap-3 items-center">
                                                    <div className="w-8 h-8 bg-green-500/10 rounded flex items-center justify-center text-green-400"><Briefcase size={12} /></div>
                                                    <div>
                                                        <div className="text-[9px] font-bold text-white">Senior Dev</div>
                                                        <div className="text-[7px] text-gray-500">Tech Solutions Inc.</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            )}

                            {/* DASHBOARD VIEW - ENRICHED CONTENT */}
                            {activePage === 'dashboard' && (
                                <motion.div
                                    key="dashboard"
                                    initial={{ opacity: 0, x: 10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -10 }}
                                    transition={{ duration: 0.3 }}
                                    className="h-full flex flex-col w-full"
                                >
                                    <motion.div animate={scrollControls} className="p-4 space-y-3 flex flex-col min-h-full">
                                        {/* Stats Grid */}
                                        <div className="grid grid-cols-2 gap-3 shrink-0">
                                            <div className="p-3 bg-[#111] rounded-xl border border-white/5">
                                                <div className="text-[8px] text-gray-500 mb-1">Total Revenue</div>
                                                <div className="text-sm font-bold text-white">$45,231.89</div>
                                                <div className="text-[8px] text-green-400 mt-1 flex items-center gap-1"><ArrowRight size={8} className="-rotate-45" /> +20.1%</div>
                                            </div>
                                            <div className="p-3 bg-[#111] rounded-xl border border-white/5">
                                                <div className="text-[8px] text-gray-500 mb-1">Active Users</div>
                                                <div className="text-sm font-bold text-white">2,350</div>
                                                <div className="text-[8px] text-blue-400 mt-1 flex items-center gap-1"><Users size={8} /> +180 new</div>
                                            </div>
                                        </div>

                                        {/* Chart Area */}
                                        <div className="h-20 bg-[#111] rounded-xl border border-white/5 p-3 flex flex-col justify-end relative overflow-hidden shrink-0">
                                            <div className="absolute top-3 left-3 flex justify-between w-full pr-6">
                                                <span className="text-[8px] text-gray-500 font-bold">Traffic Overview</span>
                                                <span className="text-[8px] text-blue-400">Weekly</span>
                                            </div>
                                            <div className="flex items-end justify-between gap-1 h-10">
                                                {[40, 70, 50, 90, 60, 80, 50, 65, 85].map((h, i) => (
                                                    <div key={i} className="w-full bg-blue-500/20 rounded-t-sm hover:bg-blue-500/40 transition-colors" style={{ height: `${h}%` }}></div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Rich Bottom Content: Team & Server Status */}
                                        <div className="grid grid-cols-2 gap-3 shrink-0">
                                            <div className="bg-[#111] rounded-xl border border-white/5 p-3 overflow-hidden">
                                                <div className="text-[8px] text-gray-500 font-bold mb-2">Team Members</div>
                                                <div className="flex -space-x-2 mb-2">
                                                    {TEAM_AVATARS.map((src, i) => (
                                                        <div key={i} className="w-6 h-6 rounded-full border border-[#111] overflow-hidden">
                                                            <img src={src} className="w-full h-full object-cover" alt="Member" />
                                                        </div>
                                                    ))}
                                                    <div className="w-6 h-6 rounded-full border border-[#111] bg-gray-800 flex items-center justify-center text-[8px] text-white font-medium">+3</div>
                                                </div>
                                                <div className="text-[7px] text-green-400 flex items-center gap-1">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div> Online now
                                                </div>
                                            </div>

                                            <div className="bg-[#111] rounded-xl border border-white/5 p-3 flex flex-col gap-2">
                                                <div className="text-[8px] text-gray-500 font-bold">System Status</div>
                                                <div className="flex items-center gap-2">
                                                    <div className="p-1 rounded bg-green-500/10 text-green-400"><Server size={10} /></div>
                                                    <div className="flex-1">
                                                        <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                                                            <div className="h-full w-[90%] bg-green-500 rounded-full"></div>
                                                        </div>
                                                    </div>
                                                    <span className="text-[7px] text-gray-400">98%</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <div className="p-1 rounded bg-purple-500/10 text-purple-400"><Zap size={10} /></div>
                                                    <div className="flex-1">
                                                        <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                                                            <div className="h-full w-[75%] bg-purple-500 rounded-full"></div>
                                                        </div>
                                                    </div>
                                                    <span className="text-[7px] text-gray-400">75%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            )}

                            {/* ACTIVITY VIEW */}
                            {activePage === 'activity' && (
                                 <motion.div
                                    key="activity"
                                    initial={{ opacity: 0, x: 10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -10 }}
                                    transition={{ duration: 0.3 }}
                                    className="h-full flex flex-col w-full"
                                >
                                    <motion.div animate={scrollControls} className="p-4 space-y-2 flex flex-col min-h-full">
                                        {[1, 2, 3, 4, 5, 6].map(i => (
                                            <div key={i} className="flex items-center gap-3 p-2 bg-[#111] rounded-lg border border-white/5 shrink-0">
                                                <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                                                    i===1 ? 'bg-purple-500/10 text-purple-400' : 
                                                    i===2 ? 'bg-green-500/10 text-green-400' : 
                                                    i===3 ? 'bg-orange-500/10 text-orange-400' :
                                                    'bg-blue-500/10 text-blue-400'
                                                }`}>
                                                    {i===1 ? <Activity size={14} /> : i===2 ? <CheckCircle2 size={14} /> : i===3 ? <Shield size={14} /> : <Zap size={14} />}
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="text-[9px] font-bold text-white truncate">
                                                        {i===1 ? 'Deployment Successful' : i===2 ? 'Task Completed' : i===3 ? 'Security Audit' : 'Performance Optimization'}
                                                    </div>
                                                    <div className="text-[7px] text-gray-500">
                                                        {i===1 ? 'Just now' : i===2 ? '2 mins ago' : i===3 ? '1 hour ago' : '5 hours ago'}
                                                    </div>
                                                </div>
                                                <div className={`w-1.5 h-1.5 rounded-full ${i===1 ? 'bg-blue-500' : 'bg-gray-600'}`}></div>
                                            </div>
                                        ))}
                                    </motion.div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const SocialIcon: React.FC<{ href: string; icon: React.ReactNode; hoverColor: string }> = ({ href, icon, hoverColor }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className={`text-gray-500 transition-all duration-300 hover:scale-110 ${hoverColor}`}
  >
    {icon}
  </a>
);

const Typewriter: React.FC<{ words: string[] }> = ({ words }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000); // Change word every 3 seconds
    return () => clearInterval(interval);
  }, [words]);

  return (
    <span className="inline-block min-w-[180px]">
      <AnimatePresence mode="wait">
        <motion.span 
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="text-blue-400 font-medium inline-block"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

export default Hero;