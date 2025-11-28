"use client";


import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../Constants';
import { Play, Square, Terminal as TerminalIcon, FileCode, Search, GitBranch, Settings, Code2, Layers, Cpu, Paintbrush, Database, Wrench, Cloud, X, Eye } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState(SKILL_CATEGORIES[0].id);
  const [isRunning, setIsRunning] = useState(false);
  
  const activeCategory = SKILL_CATEGORIES.find(c => c.id === activeTab) || SKILL_CATEGORIES[0];

  const toggleRun = () => {
    setIsRunning(!isRunning);
  };

  return (
    <section id="skills" className="py-32 bg-background relative overflow-hidden">
      {/* Horizontal Partition Line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent z-50"></div>

      {/* Ambient Background Glow - Reduced saturation for minimal look */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-30">
        
        {/* Header Section - Left Aligned to match other sections */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
        >
            <div className="max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Technical Expertise</h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                   A deep dive into my development environment. Explore the code structure, terminal outputs, and current stack configuration.
                </p>
            </div>
        </motion.div>

        {/* VS Code Window Container - Premium Dark Theme */}
        <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full bg-[#0c0c0c] rounded-xl overflow-hidden shadow-2xl border border-white/5 font-mono text-sm relative flex flex-col h-[650px] md:h-[750px] group z-20"
        >
          
          {/* Title Bar - Sleek Dark */}
          <div className="bg-[#111111] px-4 py-3 flex items-center justify-between border-b border-white/5 shrink-0 select-none">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56] hover:bg-[#ff4036] transition-colors shadow-sm"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e] hover:bg-[#ffad0e] transition-colors shadow-sm"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f] hover:bg-[#1eb733] transition-colors shadow-sm"></div>
            </div>
            <div className="text-gray-500 text-xs hidden md:block font-sans opacity-60">imran-portfolio — Visual Studio Code</div>
            
            {/* Minimal Run Button */}
            <div className="flex items-center">
                <button 
                  onClick={toggleRun}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-md transition-all duration-200 text-xs font-medium border border-transparent ${
                    isRunning 
                    ? 'text-red-400 hover:bg-white/5 hover:border-white/5' 
                    : 'text-green-400 hover:bg-white/5 hover:border-white/5'
                  }`}
                  title={isRunning ? "Close Preview" : "View Visual Skills"}
                >
                   {isRunning ? <X size={14} /> : <Play size={14} fill="currentColor" />}
                   <span>{isRunning ? 'Close Preview' : 'View Skills'}</span>
                </button>
            </div>
          </div>

          <div className="flex flex-1 overflow-hidden">
            
            {/* Sidebar / Activity Bar - Deep Black */}
            <div className="w-12 bg-[#111111] flex flex-col items-center py-4 gap-6 text-gray-500 border-r border-white/5 shrink-0 hidden sm:flex z-10">
              <FileCode className={`cursor-pointer transition-colors ${!isRunning ? 'text-white' : 'text-gray-500 hover:text-gray-300'}`} size={24} />
              <Search className="hover:text-gray-200 cursor-pointer transition-colors" size={24} />
              <GitBranch className="hover:text-gray-200 cursor-pointer transition-colors" size={24} />
              <div className="mt-auto">
                <Settings className="hover:text-gray-200 cursor-pointer transition-colors" size={24} />
              </div>
            </div>

            {/* Explorer (File List) - Only visible when NOT running */}
            <div className={`w-64 bg-[#0a0a0a] border-r border-white/5 flex flex-col transition-all duration-300 shrink-0 ${isRunning ? 'w-0 opacity-0 overflow-hidden' : 'w-64 opacity-100'} hidden md:flex`}>
              <div className="px-4 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider flex justify-between items-center bg-[#0a0a0a]">
                  <span>Explorer</span>
                  <span className="text-[10px] text-gray-600">...</span>
              </div>
              <div className="px-0">
                <div className="flex items-center gap-1 text-gray-300 py-1 px-2 cursor-pointer hover:bg-[#1a1a1a]">
                  <span className="text-xs opacity-50">▼</span>
                  <span className="font-bold text-xs uppercase text-gray-400">Portfolio_V1</span>
                </div>
                <div className="ml-0 mt-0 space-y-0">
                  {SKILL_CATEGORIES.map((cat) => (
                    <div 
                      key={cat.id}
                      onClick={() => { setActiveTab(cat.id); }}
                      className={`flex items-center gap-2 px-4 py-1.5 cursor-pointer border-l-2 transition-colors ${activeTab === cat.id ? 'bg-[#161616] text-white border-blue-500' : 'border-transparent text-gray-500 hover:text-gray-200 hover:bg-[#1a1a1a]'}`}
                    >
                      {getIconForFile(cat.filename)}
                      <span>{cat.filename}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Editor / UI Area - High Contrast Editor */}
            <div className="flex-1 flex flex-col min-w-0 bg-[#050505] relative">
              
              <AnimatePresence mode="wait">
                {isRunning ? (
                    /* UI DASHBOARD VIEW (ALL SKILLS) */
                    <motion.div 
                        key="ui-dashboard"
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                        className="absolute inset-0 bg-[#050505] overflow-y-auto custom-scrollbar font-sans"
                    >
                        {/* Minimal Sleek Header */}
                        <div className="sticky top-0 z-10 bg-[#050505]/80 backdrop-blur-md border-b border-white/5 px-8 py-6 flex justify-between items-center">
                            <div>
                                <h3 className="text-2xl font-bold text-white tracking-tight">Skill Dashboard</h3>
                                <p className="text-gray-500 text-sm mt-1">Overview of technical proficiencies</p>
                            </div>
                            <div className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                        </div>

                        <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6 pb-20">
                            {SKILL_CATEGORIES.map((cat, index) => {
                                const Icon = getCategoryIcon(cat.id);
                                return (
                                    <motion.div
                                        key={cat.id}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                        className="group bg-[#0a0a0a] rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-all hover:shadow-lg hover:shadow-black/20"
                                    >
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="flex items-center gap-3">
                                                <div className="p-2.5 bg-[#141414] rounded-xl text-gray-200 group-hover:bg-blue-500/10 group-hover:text-blue-400 transition-colors border border-white/5">
                                                    <Icon size={22} />
                                                </div>
                                                <h4 className="font-semibold text-gray-200 text-lg">{cat.title}</h4>
                                            </div>
                                        </div>
                                        
                                        <div className="flex flex-wrap gap-2">
                                            {cat.tags.map(tag => (
                                                <span 
                                                    key={tag} 
                                                    className="px-3 py-1.5 bg-[#141414] text-gray-400 text-sm rounded-lg border border-white/5 group-hover:border-white/10 transition-colors"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>
                ) : (
                    /* CODE EDITOR VIEW */
                    <motion.div
                        key="code-editor"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-col h-full"
                    >
                        {/* Tabs */}
                        <div className="flex overflow-x-auto bg-[#0a0a0a] border-b border-white/5 no-scrollbar shrink-0">
                            {SKILL_CATEGORIES.map((cat) => (
                            <div 
                                key={cat.id}
                                onClick={() => setActiveTab(cat.id)}
                                className={`flex items-center gap-2 px-4 py-2.5 text-xs border-r border-white/5 cursor-pointer whitespace-nowrap transition-colors ${activeTab === cat.id ? 'bg-[#050505] text-white border-t-2 border-t-blue-500' : 'text-gray-500 hover:bg-[#161616] hover:text-gray-300'}`}
                            >
                                {getIconForFile(cat.filename)}
                                {cat.filename}
                            </div>
                            ))}
                        </div>

                        {/* Code Content - Ultra Dark Background for Contrast */}
                        <div className="flex-1 p-4 md:p-8 overflow-auto font-mono text-sm leading-relaxed relative custom-scrollbar bg-[#050505]">
                             <div className="text-gray-700 select-none mb-4 absolute right-8 top-8 opacity-10 text-8xl font-black pointer-events-none">
                                 TSX
                             </div>
                            <div className="flex">
                                <div className="flex flex-col text-right pr-4 text-gray-600 select-none border-r border-white/5 mr-4 w-8 font-mono text-xs leading-loose pt-1">
                                    {Array.from({length: 12}).map((_, i) => (
                                        <span key={i} className="hover:text-gray-400 transition-colors">{i + 1}</span>
                                    ))}
                                </div>
                                <div className="text-gray-300 pt-1 w-full">
                                    <AnimatePresence mode="wait">
                                      <motion.div
                                        key={activeCategory.id}
                                        initial={{ opacity: 0, x: 10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -10 }}
                                        transition={{ duration: 0.2 }}
                                      >
                                        {activeCategory.codeSnippet}
                                      </motion.div>
                                    </AnimatePresence>
                                </div>
                            </div>
                        </div>

                        {/* Minimal Terminal Panel */}
                        <div className="h-48 bg-[#050505] border-t border-white/5 p-0 overflow-hidden shrink-0 flex flex-col">
                            <div className="flex items-center gap-6 text-[11px] font-semibold text-gray-500 uppercase tracking-widest px-4 py-2 bg-[#0a0a0a] shrink-0 border-b border-white/5">
                                <span className="text-white cursor-pointer hover:underline underline-offset-4">Terminal</span>
                                <span className="hover:text-gray-300 cursor-pointer transition-colors">Output</span>
                                <span className="hover:text-gray-300 cursor-pointer transition-colors">Problems</span>
                                <span className="hover:text-gray-300 cursor-pointer transition-colors">Debug Console</span>
                            </div>
                            <div className="font-mono text-sm p-4 text-gray-400 font-medium overflow-y-auto custom-scrollbar flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-green-500">➜</span>
                                    <span className="text-blue-400">~/portfolio</span>
                                    <span className="text-gray-500">git:(</span><span className="text-red-400">main</span><span className="text-gray-500">)</span>
                                    <span 
                                        onClick={toggleRun}
                                        className="text-white cursor-pointer hover:text-green-400 hover:underline transition-all duration-200 bg-white/5 px-2 py-0.5 rounded border border-white/5"
                                        title="Click to run project"
                                    >
                                        npm run dev
                                    </span>
                                </div>
                                <div className="space-y-1 text-xs">
                                    <div>
                                        <span className="text-gray-500">&gt; portfolio@0.1.0 dev</span>
                                        <br/>
                                        <span className="text-gray-500">&gt; next dev</span>
                                    </div>
                                    <div className="pt-2">
                                        <span className="text-green-400">ready</span> started server on 0.0.0.0:3000, url: http://localhost:3000
                                    </div>
                                    <div>
                                        <span className="text-purple-400">event</span> compiled client and server successfully in 1420ms (1256 modules)
                                    </div>
                                    <div>
                                        <span className="text-blue-400">wait</span> compiling...
                                    </div>
                                    <div>
                                        <span className="text-purple-400">event</span> compiled successfully in 124ms
                                    </div>
                                     <div className="pt-2 text-gray-500 italic">
                                        <span className="text-yellow-400/80">info</span> Click the command <span className="text-white font-bold cursor-pointer hover:underline" onClick={toggleRun}>npm run dev</span> above to launch the interactive preview...
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>

       {/* Enhanced Bottom Shader / Shadow Effect */}
       {/* 1. Deep fade that creates the foundation - touching the bottom of the card */}
       <div className="absolute bottom-0 left-0 w-full h-[400px] bg-gradient-to-t from-background via-background/95 to-transparent pointer-events-none z-10"></div>
       
       {/* 2. Grey/Black Glow - Anchored to the bottom of the content area */}
       <div className="absolute bottom-[-50px] left-1/2 -translate-x-1/2 w-full max-w-6xl h-[300px] bg-zinc-800/20 blur-[100px] pointer-events-none z-10"></div>
       
       {/* 3. Subtle Neutral Glow for depth */}
       <div className="absolute bottom-[-100px] left-1/3 -translate-x-1/2 w-2/3 h-[250px] bg-neutral-900/40 blur-[80px] pointer-events-none z-10"></div>

    </section>
  );
};

const getIconForFile = (filename: string) => {
    if (filename.endsWith('.tsx') || filename.endsWith('.ts')) return <span className="text-blue-400 text-xs font-bold">TS</span>;
    if (filename.endsWith('.js')) return <span className="text-yellow-400 text-xs font-bold">JS</span>;
    if (filename.endsWith('.css')) return <span className="text-blue-300 text-xs font-bold">#</span>;
    if (filename.endsWith('.sql')) return <Database size={12} className="text-green-400" />;
    return <span className="text-gray-400 text-xs">📄</span>;
}

const getCategoryIcon = (id: string) => {
    switch (id) {
        case 'frontend': return Layers;
        case 'libraries': return Paintbrush;
        case 'backend': return Cpu;
        case 'database': return Database;
        case 'tools': return Wrench;
        default: return Code2;
    }
}

export default Skills;