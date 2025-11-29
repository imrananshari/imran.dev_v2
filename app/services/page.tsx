"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import { SERVICES } from "../Constants";
import Services from "../components/Services";
import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    ArrowLeft, CheckCircle2, ArrowRight, Zap, Shield, Repeat, Layers, 
    Layout, Gauge, Search, Lock, Code, BarChart, MessageSquare, 
    MousePointer2, Move, Type, Image as ImageIcon, Bell, Menu, User,
    CreditCard, TrendingUp, Globe, ShoppingCart, MoreHorizontal, Database, Cpu,
    FileText, PenTool, Smartphone, Code2, Monitor, GitBranch, Terminal,
    Target, Users, Bot, Sparkles, Send, Activity, Server
} from 'lucide-react';


interface ServiceDetailProps {
  service: typeof SERVICES[0];
  onBack: () => void;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ service, onBack }) => {
  const [activeProcessStep, setActiveProcessStep] = useState(0);
  const [showGreeting, setShowGreeting] = useState(false);
  const [pathPoints, setPathPoints] = useState<{ sx: number; sy: number; ex: number; ey: number } | null>(null);
  const startBtnRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
      const interval = setInterval(() => {
          setActiveProcessStep((prev) => (prev + 1) % 4);
      }, 2500); // Cycle every 2.5 seconds
      return () => clearInterval(interval);
  }, []);

  if (!service) return null;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-24 pb-20 overflow-x-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        
        {/* Navigation */}
        <motion.button
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={onBack}
            className="flex items-center gap-2 text-gray-400 hover:text-white mb-16 transition-colors group text-sm font-medium"
        >
            <div className="p-2 rounded-full bg-white/5 group-hover:bg-white/10 border border-white/5 group-hover:-translate-x-1 transition-all">
                <ArrowLeft size={16} />
            </div>
            <span>Back to Services</span>
        </motion.button>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="w-20 h-20 bg-blue-500/10 rounded-3xl flex items-center justify-center text-blue-400 mb-8 border border-blue-500/20 shadow-lg shadow-blue-500/10">
                    {React.cloneElement(service.icon as React.ReactElement, { size: 32 })}
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
                    {service.title}
                </h1>
                <p className="text-xl text-gray-400 leading-relaxed">
                    {service.longDescription}
                </p>
            </motion.div>

            {/* Visual Abstract Representation */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative h-[400px] md:h-[450px] bg-gradient-to-br from-[#121212] to-[#0a0a0a] rounded-3xl border border-white/10 overflow-hidden flex items-center justify-center group"
            >
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/10 rounded-full blur-[120px] group-hover:bg-blue-500/20 transition-colors duration-700"></div>
                
                {/* Dynamic Visual Based on Service ID */}
                <div className="relative z-10 w-full h-full flex items-center justify-center p-8">
                    <ServiceVisual id={service.id} />
                </div>
            </motion.div>
        </div>

        {/* Benefits Section */}
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24"
        >
            <h2 className="text-3xl font-bold mb-10 text-center">Why Partner With Me?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {(service.benefits || [
                    "High Performance", "Secure by Design", "Scalable Architecture", "24/7 Support"
                ]).map((benefit, i) => (
                    <div key={i} className="bg-[#121212] p-6 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-colors group">
                        <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400 mb-4 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                            {i === 0 ? <Zap size={20}/> : i === 1 ? <Shield size={20}/> : i === 2 ? <Layers size={20}/> : <Repeat size={20}/>}
                        </div>
                        <h3 className="font-bold text-white mb-2">{benefit}</h3>
                        <p className="text-sm text-gray-500">Optimized for maximum impact and long-term growth.</p>
                    </div>
                ))}
            </div>
        </motion.div>

        {/* Features & Deliverables */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-24">
            <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                    <span className="w-8 h-1 bg-blue-500 rounded-full"></span>
                    What's Included
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {service.features.map((feature, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.05 }}
                            viewport={{ once: true }}
                            className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors"
                        >
                            <div className="mt-1 text-green-400 bg-green-400/10 p-1 rounded-full">
                                <CheckCircle2 size={16} />
                            </div>
                            <div>
                                <span className="text-white font-medium block mb-1">{feature}</span>
                                <span className="text-xs text-gray-500">Professional implementation with best practices.</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Process / CTA Sidebar */}
            <div className="bg-gradient-to-b from-[#1a1a1a] to-[#121212] border border-white/10 rounded-3xl p-8 h-fit sticky top-24">
                <h3 className="text-xl font-bold text-white mb-6">Development Process</h3>
                <div className="space-y-8 relative pl-4">
                    <div className="absolute left-8 top-4 bottom-4 w-0.5 bg-white/10 rounded-full">
                        <motion.div 
                            className="w-full bg-blue-500 rounded-full"
                            animate={{ height: `${(activeProcessStep / 3) * 100}%` }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            style={{ maxHeight: '100%', width: '100%' }}
                        />
                    </div>

                    {[
                        { title: "Discovery", desc: "Understanding your goals and requirements." },
                        { title: "Strategy", desc: "Planning the architecture and design." },
                        { title: "Development", desc: "Agile coding with regular updates." },
                        { title: "Launch", desc: "Testing, deployment, and handover." }
                    ].map((step, i) => (
                        <div key={i} className="flex gap-4 relative z-10">
                            <motion.div 
                                animate={{ 
                                    backgroundColor: i <= activeProcessStep ? "#3b82f6" : "#252525",
                                    borderColor: i <= activeProcessStep ? "#3b82f6" : "rgba(255,255,255,0.1)",
                                    scale: i === activeProcessStep ? 1.1 : 1
                                }}
                                className="w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-bold text-white shrink-0 shadow-xl"
                            >
                                {i <= activeProcessStep ? <CheckCircle2 size={14} /> : i + 1}
                            </motion.div>
                            <motion.div
                                animate={{ opacity: i <= activeProcessStep ? 1 : 0.5 }}
                            >
                                <h4 className={`text-sm font-bold ${i <= activeProcessStep ? "text-white" : "text-gray-400"}`}>{step.title}</h4>
                                <p className="text-xs text-gray-500">{step.desc}</p>
                            </motion.div>
                        </div>
                    ))}
                </div>
                
                <div className="mt-8 pt-8 border-t border-white/10">
                    <a 
                        ref={startBtnRef}
                        href="#contact" 
                        onClick={async (e) => {
                            e.preventDefault();
                            const btn = startBtnRef.current;
                            const target = document.getElementById('contact');
                            if (!btn || !target) return;
                            const br = btn.getBoundingClientRect();
                            const tr = target.getBoundingClientRect();
                            const sx = br.left + br.width / 2;
                            const sy = br.top + br.height;
                            const ex = tr.left + tr.width / 2;
                            const ey = tr.top + 24;
                            setPathPoints({ sx, sy, ex, ey });
                            setShowGreeting(true);
                            await new Promise(r => setTimeout(r, 900));
                            setShowGreeting(false);
                            target.scrollIntoView({ behavior: 'smooth' });
                            await new Promise(r => setTimeout(r, 1800));
                            setPathPoints(null);
                        }}
                        className="w-full flex items-center justify-center gap-2 bg-white text-black font-bold py-3 px-6 rounded-xl hover:bg-gray-200 transition-all hover:scale-[1.02] active:scale-[0.98]"
                    >
                        Start Project <ArrowRight size={18} />
                    </a>
                </div>
            </div>
        </div>

      </div>
        {pathPoints && (
            <motion.svg
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 pointer-events-none z-[60]"
            >
                <defs>
                    <linearGradient id="routeGrad" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#60a5fa" />
                        <stop offset="100%" stopColor="#a78bfa" />
                    </linearGradient>
                </defs>
                {(() => {
                    const { sx, sy, ex, ey } = pathPoints;
                    const midY = (sy + ey) / 2;
                    const dx = (ex - sx) * 0.25;
                    const d = `M ${sx} ${sy} C ${sx + dx} ${sy + 60}, ${ex - dx} ${midY - 20}, ${ex} ${midY} S ${ex - dx} ${ey - 20}, ${ex} ${ey}`;
                    return (
                        <motion.path
                            d={d}
                            stroke="url(#routeGrad)"
                            strokeWidth="3"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1.2, ease: 'easeInOut' }}
                            style={{ filter: 'drop-shadow(0 0 8px rgba(99,102,241,0.35))' }}
                        />
                    );
                })()}
            </motion.svg>
        )}

        {showGreeting && pathPoints && (
            <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="fixed z-[70] px-3 py-2 rounded-full bg-white text-black text-xs shadow-xl"
                style={{ left: pathPoints.sx - 80, top: pathPoints.sy - 40 }}
            >
                Let’s schedule on Cal.com ✨
            </motion.div>
        )}
    </div>
  );
};

// --- Custom Animated Visuals for Each Service ---

const ServiceVisual: React.FC<{ id: string }> = ({ id }) => {
    switch (id) {
        case 'web-dev':
            return <WebDevVisual />;
        case 'mobile-app':
            return <MobileAppVisual />;
        case 'ui-ux':
            return <UiUxVisual />;
        case 'crm-backend':
            return <BackendVisual />;
        case 'ai-integration':
            return <AiVisual />;
        case 'performance':
            return <PerformanceVisual />;
        default:
            return <WebDevVisual />;
    }
};

// 1. WEB DEV VISUAL 
const WebDevVisual = () => {
    const [step, setStep] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setStep((prev) => (prev + 1) % 4);
        }, 3500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full h-full flex items-center justify-center relative">
            <AnimatePresence mode="wait">
                {/* STEP 1: RESEARCH & DISCOVERY */}
                {step === 0 && (
                    <motion.div
                        key="research"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        className="w-[340px] aspect-[4/3] bg-[#1a1a1a] rounded-xl border border-white/10 p-6 relative flex flex-col justify-center items-center gap-6"
                    >
                        <div className="absolute top-4 left-4 flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                            <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Phase 1: Discovery</span>
                        </div>
                        
                        <div className="flex gap-8 items-center">
                            <div className="flex flex-col items-center gap-2">
                                <div className="w-12 h-12 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center border border-blue-500/30">
                                    <Search size={20} />
                                </div>
                                <span className="text-[10px] text-gray-400">Analysis</span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <div className="w-12 h-12 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center border border-purple-500/30">
                                    <Target size={20} />
                                </div>
                                <span className="text-[10px] text-gray-400">Goals</span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <div className="w-12 h-12 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center border border-green-500/30">
                                    <Users size={20} />
                                </div>
                                <span className="text-[10px] text-gray-400">Audience</span>
                            </div>
                        </div>
                        
                        <div className="w-full bg-white/5 rounded-lg p-3 border border-white/5">
                            <div className="flex items-center gap-2 mb-2">
                                <FileText size={12} className="text-gray-500"/>
                                <span className="text-[10px] font-bold text-gray-300">Project Requirements.pdf</span>
                            </div>
                            <div className="space-y-1">
                                <div className="h-1.5 w-full bg-white/10 rounded"></div>
                                <div className="h-1.5 w-2/3 bg-white/10 rounded"></div>
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* STEP 2: BLUEPRINT / WIREFRAME */}
                {step === 1 && (
                    <motion.div
                        key="blueprint"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        className="w-[340px] aspect-[4/3] bg-[#0d1117] border-2 border-blue-500/20 border-dashed rounded-xl p-4 relative"
                    >
                        <div className="absolute top-4 left-4 flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                            <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Phase 2: Blueprint</span>
                        </div>

                        <div className="mt-8 flex flex-col gap-3 opacity-80">
                            <div className="w-full h-8 bg-blue-500/10 border border-blue-500/30 rounded flex items-center px-2 justify-between">
                                <div className="w-4 h-4 bg-blue-500/30 rounded-full"></div>
                                <div className="flex gap-2">
                                    <div className="w-8 h-2 bg-blue-500/30 rounded"></div>
                                    <div className="w-8 h-2 bg-blue-500/30 rounded"></div>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-3 h-24">
                                <div className="bg-blue-500/5 border border-blue-500/20 rounded p-2">
                                    <div className="w-8 h-8 bg-blue-500/20 rounded mb-2"></div>
                                    <div className="w-16 h-2 bg-blue-500/20 rounded mb-1"></div>
                                    <div className="w-10 h-2 bg-blue-500/10 rounded"></div>
                                </div>
                                <div className="bg-blue-500/5 border border-blue-500/20 rounded p-2">
                                    <div className="w-8 h-8 bg-blue-500/20 rounded mb-2"></div>
                                    <div className="w-16 h-2 bg-blue-500/20 rounded mb-1"></div>
                                    <div className="w-10 h-2 bg-blue-500/10 rounded"></div>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <div className="flex-1 h-12 bg-blue-500/5 border border-blue-500/20 rounded"></div>
                                <div className="flex-1 h-12 bg-blue-500/5 border border-blue-500/20 rounded"></div>
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* STEP 3: DEVELOPMENT (VS CODE) */}
                {step === 2 && (
                    <motion.div
                        key="code"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        className="w-[360px] aspect-[4/3] bg-[#0c0c0c] rounded-xl border border-white/10 shadow-2xl overflow-hidden flex flex-col"
                    >
                        <div className="bg-[#111] px-3 py-2 border-b border-white/5 flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Phase 3: Development</span>
                            </div>
                            <div className="flex gap-1.5">
                                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                            </div>
                        </div>
                        
                        <div className="flex flex-1">
                            <div className="w-10 border-r border-white/5 flex flex-col items-center py-3 gap-3 bg-[#0a0a0a]">
                                <FileText size={14} className="text-blue-400"/>
                                <Search size={14} className="text-gray-600"/>
                                <GitBranch size={14} className="text-gray-600"/>
                            </div>
                            <div className="flex-1 p-4 font-mono text-[10px] leading-relaxed">
                                <div className="text-gray-500 mb-2">// core/PageLayout.tsx</div>
                                <div><span className="text-pink-400">import</span> <span className="text-yellow-300">React</span> <span className="text-pink-400">from</span> <span className="text-green-300">'react'</span>;</div>
                                <br/>
                                <div><span className="text-pink-400">export default</span> <span className="text-blue-400">function</span> <span className="text-yellow-300">App</span>() {'{'}</div>
                                <div className="pl-4 text-pink-400">return (</div>
                                <div className="pl-8 text-blue-300">&lt;Layout&gt;</div>
                                <div className="pl-12 text-blue-300">&lt;HeroSection /&gt;</div>
                                <div className="pl-12 text-blue-300">&lt;Features grid=<span className="text-green-300">true</span> /&gt;</div>
                                <div className="pl-12 text-blue-300">&lt;CTA /&gt;</div>
                                <div className="pl-8 text-blue-300">&lt;/Layout&gt;</div>
                                <div className="pl-4 text-pink-400">);</div>
                                <div>{'}'}</div>
                                <motion.div 
                                    className="h-3 w-1.5 bg-blue-400 mt-1 inline-block"
                                    animate={{ opacity: [0, 1, 0] }}
                                    transition={{ duration: 0.8, repeat: Infinity }}
                                />
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* STEP 4: LAUNCH */}
                {step === 3 && (
                    <motion.div
                        key="launch"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        className="w-[360px] aspect-[4/3] bg-[#0a0a0a] rounded-xl border border-white/10 shadow-2xl overflow-hidden flex flex-col relative"
                    >
                        {/* Status Label */}
                        <div className="absolute top-3 left-4 flex items-center gap-2 z-20">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                            <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Phase 4: Live</span>
                        </div>

                        {/* Simulated Browser */}
                        <div className="h-8 bg-[#151515] border-b border-white/5 flex items-center px-3 gap-2">
                            <div className="flex gap-1 opacity-50">
                                <div className="w-2 h-2 rounded-full bg-gray-500"></div>
                                <div className="w-2 h-2 rounded-full bg-gray-500"></div>
                            </div>
                            <div className="flex-1 h-5 bg-[#0a0a0a] rounded border border-white/5 flex items-center px-2 justify-center">
                                <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                                <div className="h-1 w-20 bg-white/20 rounded-full"></div>
                            </div>
                        </div>
                        
                        <div className="flex-1 p-6 relative overflow-hidden bg-[#0a0a0a]">
                            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:16px_16px]"></div>
                            <div className="relative z-10 flex flex-col items-center text-center mt-4">
                                <div className="px-2 py-0.5 rounded-full border border-white/10 text-[8px] text-gray-400 mb-2 bg-white/5">v1.0 Released</div>
                                <h3 className="text-xl font-bold text-white mb-1">Scale Faster</h3>
                                <p className="text-[9px] text-gray-500 mb-4 max-w-[200px]">Enterprise infrastructure ready for your customers.</p>
                                <div className="flex gap-2">
                                    <div className="h-6 px-3 bg-white text-black text-[9px] font-bold rounded flex items-center">Get Started</div>
                                    <div className="h-6 px-3 border border-white/20 text-[9px] rounded flex items-center">Docs</div>
                                </div>
                            </div>
                            {/* Floating decorative cards */}
                            <motion.div 
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="absolute bottom-4 left-4 right-4 h-16 bg-[#151515] rounded-lg border border-white/10 p-2 flex items-center gap-3"
                            >
                                <div className="w-10 h-10 bg-blue-500/10 rounded flex items-center justify-center text-blue-400"><TrendingUp size={16}/></div>
                                <div className="flex-1 space-y-1">
                                    <div className="h-1.5 w-16 bg-white/20 rounded"></div>
                                    <div className="h-1.5 w-10 bg-white/10 rounded"></div>
                                </div>
                                <div className="text-[10px] text-green-400 font-bold">+24%</div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

// 2. MOBILE APP VISUAL
const MobileAppVisual = () => {
    const [step, setStep] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setStep((prev) => (prev + 1) % 4);
        }, 3500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full h-full flex items-center justify-center relative">
            <AnimatePresence mode="wait">
                {/* STEP 1: USER FLOW */}
                {step === 0 && (
                    <motion.div
                        key="research"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.1 }}
                        className="w-[200px] h-[300px] flex flex-col items-center justify-center gap-4"
                    >
                        <div className="absolute top-0 bg-blue-500 text-white text-[10px] px-2 py-0.5 rounded">User Flow</div>
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-12 h-12 rounded-full border-2 border-blue-500/30 flex items-center justify-center text-blue-400 bg-blue-500/10">
                                <User size={20} />
                            </div>
                            <div className="h-8 w-0.5 bg-gradient-to-b from-blue-500/50 to-purple-500/50"></div>
                            <div className="w-12 h-12 rounded-lg border-2 border-purple-500/30 flex items-center justify-center text-purple-400 bg-purple-500/10">
                                <Layout size={20} />
                            </div>
                            <div className="h-8 w-0.5 bg-gradient-to-b from-purple-500/50 to-green-500/50"></div>
                            <div className="w-12 h-12 rounded-lg border-2 border-green-500/30 flex items-center justify-center text-green-400 bg-green-500/10">
                                <CheckCircle2 size={20} />
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* STEP 2: WIREFRAME */}
                {step === 1 && (
                    <motion.div
                        key="wireframe"
                        initial={{ opacity: 0, rotateY: 90 }}
                        animate={{ opacity: 1, rotateY: 0 }}
                        exit={{ opacity: 0, rotateY: -90 }}
                        className="w-[160px] h-[320px] bg-blue-900/10 border-2 border-blue-500/30 border-dashed rounded-[2rem] flex flex-col p-4 gap-4 relative"
                    >
                        <div className="absolute -left-12 top-10 bg-blue-500 text-white text-[10px] px-2 py-0.5 rounded rotate-0">Blueprint</div>
                        <div className="w-full aspect-video bg-blue-500/10 rounded mb-2"></div>
                        <div className="space-y-2">
                            <div className="h-2 w-full bg-blue-500/10 rounded"></div>
                            <div className="h-2 w-2/3 bg-blue-500/10 rounded"></div>
                        </div>
                        <div className="mt-auto flex justify-between">
                            <div className="w-8 h-8 rounded-full bg-blue-500/10"></div>
                            <div className="w-8 h-8 rounded-full bg-blue-500/10"></div>
                            <div className="w-8 h-8 rounded-full bg-blue-500/10"></div>
                        </div>
                    </motion.div>
                )}

                {/* STEP 3: CODE */}
                {step === 2 && (
                    <motion.div
                        key="code"
                        initial={{ opacity: 0, rotateY: 90 }}
                        animate={{ opacity: 1, rotateY: 0 }}
                        exit={{ opacity: 0, rotateY: -90 }}
                        className="w-[220px] h-[300px] bg-[#1e1e1e] rounded-xl border border-white/10 shadow-2xl p-4 font-mono text-[9px] relative overflow-hidden"
                    >
                        <div className="absolute top-2 right-2 flex gap-1">
                            <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                            <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                        </div>
                        <div className="absolute -left-10 top-10 bg-purple-500 text-white text-[10px] px-2 py-0.5 rounded">Flutter</div>
                        
                        <div className="mt-4">
                            <span className="text-blue-400">import</span> <span className="text-green-300">'package:flutter/material.dart'</span>;
                            <br/><br/>
                            <span className="text-purple-400">class</span> <span className="text-yellow-300">WalletApp</span> <span className="text-purple-400">extends</span> <span className="text-yellow-300">StatelessWidget</span> {'{'}
                            <br/>
                            &nbsp;&nbsp;<span className="text-purple-400">@override</span>
                            <br/>
                            &nbsp;&nbsp;<span className="text-purple-400">Widget</span> <span className="text-blue-300">build</span>(<span className="text-yellow-300">context</span>) {'{'}
                            <br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">return</span> <span className="text-blue-300">Scaffold</span>(
                            <br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;backgroundColor: <span className="text-blue-300">Colors</span>.black,
                            <br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;body: <span className="text-blue-300">Dashboard</span>(),
                            <br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;);
                            <br/>
                            &nbsp;&nbsp;{'}'}
                            <br/>
                            {'}'}
                        </div>
                    </motion.div>
                )}

                {/* STEP 4: PREVIEW */}
                {step === 3 && (
                    <motion.div
                        key="preview"
                        initial={{ opacity: 0, rotateY: 90 }}
                        animate={{ opacity: 1, rotateY: 0 }}
                        exit={{ opacity: 0, rotateY: -90 }}
                        className="w-[160px] h-[320px] bg-[#000] border-[4px] border-[#1a1a1a] rounded-[2rem] shadow-2xl relative overflow-hidden flex flex-col ring-1 ring-white/10"
                    >
                        <div className="absolute -left-8 top-10 bg-green-500 text-white text-[10px] px-2 py-0.5 rounded z-30">Live</div>
                        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-black rounded-full z-20"></div>
                        <div className="pt-8 px-3 pb-3 bg-[#0a0a0a] flex-1 flex flex-col">
                            <div className="flex justify-between items-center mb-4">
                                <div>
                                    <div className="text-[8px] text-gray-400">Balance</div>
                                    <div className="text-sm font-bold text-white">$12k</div>
                                </div>
                                <div className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center"><Bell size={10}/></div>
                            </div>
                            <div className="w-full aspect-[1.6/1] bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl mb-4 p-2 relative overflow-hidden">
                                <CreditCard size={12} className="text-white/50 mb-4"/>
                                <div className="text-[8px] font-mono text-white">**** 8842</div>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 p-1.5 bg-white/5 rounded-lg">
                                    <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center"><ShoppingCart size={10} className="text-blue-400"/></div>
                                    <div className="flex-1 text-[8px] font-bold">Shopping</div>
                                    <div className="text-[8px]">-$42</div>
                                </div>
                                <div className="flex items-center gap-2 p-1.5 bg-white/5 rounded-lg">
                                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center"><TrendingUp size={10} className="text-green-400"/></div>
                                    <div className="flex-1 text-[8px] font-bold">Income</div>
                                    <div className="text-[8px]">+$850</div>
                                </div>
                            </div>
                        </div>
                        {/* Bottom Nav */}
                        <div className="h-10 border-t border-white/5 flex justify-around items-center px-1">
                            <div className="w-8 h-1 bg-white/20 rounded-full"></div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const UiUxVisual = () => (
    <div className="w-full max-w-[450px] h-[320px] bg-[#1e1e1e] rounded-xl border border-white/10 shadow-2xl flex overflow-hidden relative">
        {/* Left Toolbar */}
        <div className="w-10 bg-[#2c2c2c] border-r border-white/5 flex flex-col items-center py-4 gap-4">
            <Menu size={16} className="text-gray-400" />
            <div className="w-full h-px bg-white/10"></div>
            <MousePointer2 size={16} className="text-blue-500 fill-blue-500" />
            <Layout size={16} className="text-gray-400" />
            <Type size={16} className="text-gray-400" />
            <ImageIcon size={16} className="text-gray-400" />
        </div>

        {/* Canvas */}
        <div className="flex-1 bg-[#1e1e1e] relative overflow-hidden flex items-center justify-center">
            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:20px_20px]"></div>
            
            {/* Designing Element */}
            <div className="relative group">
                {/* Selection Box */}
                <div className="absolute -inset-1 border border-blue-500 hidden group-hover:block pointer-events-none">
                    <div className="absolute -top-1 -left-1 w-1.5 h-1.5 bg-white border border-blue-500"></div>
                    <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-white border border-blue-500"></div>
                    <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-white border border-blue-500"></div>
                    <div className="absolute -bottom-1 -right-1 w-1.5 h-1.5 bg-white border border-blue-500"></div>
                    <div className="absolute -top-5 left-0 bg-blue-500 text-white text-[8px] px-1 rounded-sm">Card Component</div>
                </div>

                <motion.div 
                    animate={{ 
                        borderRadius: ["0px", "16px", "16px"],
                        backgroundColor: ["#2a2a2a", "#2a2a2a", "#1a1a1a"]
                    }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                    className="w-48 h-64 bg-[#2a2a2a] border border-white/10 p-4 shadow-lg overflow-hidden"
                >
                    <motion.div 
                        animate={{ width: ["100%", "40%", "40%"] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                        className="h-24 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg mb-4"
                    ></motion.div>
                    <div className="h-3 w-3/4 bg-white/20 rounded mb-2"></div>
                    <div className="h-2 w-full bg-white/10 rounded mb-1"></div>
                    <div className="h-2 w-5/6 bg-white/10 rounded mb-4"></div>
                    <motion.div 
                        animate={{ backgroundColor: ["#333", "#3b82f6", "#3b82f6"] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                        className="h-8 w-full bg-[#333] rounded flex items-center justify-center text-[10px] font-bold text-white"
                    >
                        Button
                    </motion.div>
                </motion.div>
            </div>

            {/* Simulated Cursor */}
            <motion.div
                animate={{ x: [100, 0, 100], y: [100, 0, 100] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                className="absolute z-20 pointer-events-none"
            >
                <MousePointer2 size={24} className="text-black fill-white drop-shadow-md" />
                <div className="bg-red-500 text-white text-[8px] px-1 rounded ml-4 mt-1">You</div>
            </motion.div>
        </div>

        {/* Right Properties Panel */}
        <div className="w-48 bg-[#2c2c2c] border-l border-white/5 p-3 hidden md:block">
            <div className="text-[10px] font-bold text-gray-400 mb-2 uppercase">Design</div>
            <div className="space-y-3">
                <div className="bg-[#1e1e1e] p-2 rounded border border-white/5">
                    <div className="flex justify-between text-[10px] text-gray-400 mb-1"><span>X</span><span>240</span></div>
                    <div className="flex justify-between text-[10px] text-gray-400"><span>Y</span><span>320</span></div>
                </div>
                <div>
                    <div className="text-[10px] text-gray-500 mb-1">Fill</div>
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-[#2a2a2a] border border-white/20 rounded"></div>
                        <div className="text-[10px] text-gray-300">#2A2A2A</div>
                    </div>
                </div>
                <div>
                    <div className="text-[10px] text-gray-500 mb-1">Stroke</div>
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border border-white/20 rounded"></div>
                        <div className="text-[10px] text-gray-300">Inside</div>
                    </div>
                </div>
                <div>
                    <div className="text-[10px] text-gray-500 mb-1">Effects</div>
                    <div className="flex justify-between items-center bg-[#1e1e1e] p-1.5 rounded">
                        <span className="text-[10px]">Drop Shadow</span>
                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const BackendVisual = () => (
    <div className="flex flex-col items-center gap-2">
        <motion.div 
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-32 h-10 bg-[#1a1a1a] border border-white/10 rounded-lg flex items-center justify-center gap-2"
        >
            <Globe size={14} className="text-blue-400"/> <span className="text-xs text-gray-400">Client</span>
        </motion.div>
        <div className="h-8 w-px bg-gradient-to-b from-blue-500 to-green-500 relative">
            <motion.div 
                animate={{ y: [0, 32] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-white rounded-full"
            ></motion.div>
        </div>
        <motion.div 
            className="w-32 h-16 bg-[#1a1a1a] border border-green-500/20 rounded-lg flex flex-col items-center justify-center gap-1 shadow-[0_0_15px_rgba(34,197,94,0.1)]"
        >
            <div className="text-xs font-bold text-green-400">API Gateway</div>
            <div className="flex gap-1">
                <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse"></div>
                <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse delay-75"></div>
                <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse delay-150"></div>
            </div>
        </motion.div>
        <div className="h-8 w-px bg-gradient-to-b from-green-500 to-purple-500 relative">
             <motion.div 
                animate={{ y: [0, 32] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.7 }}
                className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-white rounded-full"
            ></motion.div>
        </div>
        <div className="flex gap-2">
            <Database size={24} className="text-purple-400" />
            <Database size={24} className="text-purple-400 opacity-70" />
            <Database size={24} className="text-purple-400 opacity-40" />
        </div>
    </div>
);

// 1. AI & LLM VISUAL - Realistic Chat Interface (Redesigned)
const AiVisual = () => {
    const [messages, setMessages] = useState<{role: 'user' | 'ai', text: string}[]>([]);
    const [isTyping, setIsTyping] = useState(false);
    const [inputValue, setInputValue] = useState('');
    
    // Simulation sequence
    useEffect(() => {
        const sequence = async () => {
            // Wait initial
            await new Promise(r => setTimeout(r, 1000));
            
            // User types
            const prompt = "Analyze Q3 sales trends";
            for (let i = 0; i <= prompt.length; i++) {
                setInputValue(prompt.slice(0, i));
                await new Promise(r => setTimeout(r, 50));
            }
            
            // User sends
            await new Promise(r => setTimeout(r, 500));
            setMessages(prev => [...prev, { role: 'user', text: prompt }]);
            setInputValue('');
            setIsTyping(true);
            
            // AI thinks
            await new Promise(r => setTimeout(r, 1500));
            
            // AI responds
            setIsTyping(false);
            const response = "Revenue increased by 40% driven by Enterprise adoption. Churn reduced by 5%.";
            setMessages(prev => [...prev, { role: 'ai', text: '' }]);
            
            for (let i = 0; i <= response.length; i++) {
                setMessages(prev => {
                    const newMsgs = [...prev];
                    const last = newMsgs[newMsgs.length - 1];
                    if (!last || last.role !== 'ai') return prev;
                    newMsgs[newMsgs.length - 1] = { ...last, text: response.slice(0, i) };
                    return newMsgs;
                });
                await new Promise(r => setTimeout(r, 30));
            }

            // Reset
            await new Promise(r => setTimeout(r, 3000));
            setMessages([]);
        };
        
        const interval = setInterval(() => {
            setMessages([]);
            setInputValue('');
            sequence();
        }, 9000); // Total cycle time

        sequence();
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full max-w-[350px] bg-[#0f0f0f] rounded-2xl border border-white/10 shadow-2xl flex flex-col overflow-hidden h-[320px]">
            {/* Header */}
            <div className="h-12 bg-[#1a1a1a] border-b border-white/5 flex items-center px-4 justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs font-bold text-white">AI Assistant</span>
                    <span className="text-[10px] text-gray-500 bg-white/5 px-2 py-0.5 rounded">GPT-4o</span>
                </div>
                <Sparkles size={14} className="text-purple-400" />
            </div>

            {/* Chat Area */}
            <div className="flex-1 p-4 space-y-4 overflow-hidden flex flex-col justify-end">
                {messages.map((msg, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                    >
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'user' ? 'bg-blue-600' : 'bg-purple-600'}`}>
                            {msg.role === 'user' ? <User size={14}/> : <Bot size={14}/>}
                        </div>
                        <div className={`p-3 rounded-2xl text-xs max-w-[80%] leading-relaxed ${
                            msg.role === 'user' 
                            ? 'bg-blue-500/10 text-blue-100 rounded-tr-none border border-blue-500/20' 
                            : 'bg-purple-500/10 text-purple-100 rounded-tl-none border border-purple-500/20'
                        }`}>
                            {msg.text}
                            {msg.role === 'ai' && msg.text.length < 10 && <span className="inline-block w-1 h-3 bg-purple-400 ml-1 animate-pulse"/>}
                        </div>
                    </motion.div>
                ))}
                
                {isTyping && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex gap-3"
                    >
                         <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center shrink-0">
                            <Bot size={14}/>
                        </div>
                        <div className="bg-purple-500/10 border border-purple-500/20 px-3 py-2 rounded-2xl rounded-tl-none flex items-center gap-1">
                            <div className="w-1 h-1 bg-purple-400 rounded-full animate-bounce"></div>
                            <div className="w-1 h-1 bg-purple-400 rounded-full animate-bounce delay-75"></div>
                            <div className="w-1 h-1 bg-purple-400 rounded-full animate-bounce delay-150"></div>
                        </div>
                    </motion.div>
                )}
            </div>

            {/* Input Area */}
            <div className="p-3 bg-[#1a1a1a] border-t border-white/5">
                <div className="bg-[#0f0f0f] border border-white/10 rounded-xl px-3 py-2 flex items-center gap-2">
                    <span className="flex-1 text-xs text-gray-300 font-mono h-4 overflow-hidden">{inputValue}</span>
                    <div className={`p-1.5 rounded-lg ${inputValue ? 'bg-blue-600 text-white' : 'bg-white/5 text-gray-500'}`}>
                        <Send size={12} />
                    </div>
                </div>
            </div>
        </div>
    );
};

const PerformanceVisual = () => {
    return (
        <div className="w-full max-w-[420px] h-[340px] bg-[#0f0f0f] rounded-xl border border-white/10 shadow-2xl flex flex-col overflow-hidden relative p-6">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 via-emerald-400 to-green-600"></div>
            
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2">
                    <Activity size={16} className="text-green-400" />
                    <span className="text-sm font-bold text-white">System Performance</span>
                </div>
                <div className="px-2 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-[10px] text-green-400">
                    Optimized
                </div>
            </div>

            {/* Score Circle */}
            <div className="flex justify-center mb-8 relative">
                 {/* SVG for Circular Progress */}
                 <svg className="w-32 h-32 transform -rotate-90">
                    <circle cx="64" cy="64" r="56" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-gray-800" />
                    <motion.circle 
                        cx="64" cy="64" r="56" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-green-500"
                        initial={{ strokeDasharray: 351, strokeDashoffset: 351 }}
                        animate={{ strokeDashoffset: 351 - (351 * 0.98) }} // 98%
                        transition={{ duration: 2, ease: "easeOut" }}
                        strokeLinecap="round"
                    />
                 </svg>
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1 }}
                        className="text-4xl font-bold text-white"
                    >
                        98
                    </motion.div>
                    <div className="text-[10px] text-gray-400 uppercase tracking-wider">Score</div>
                 </div>
            </div>

            {/* Core Vitals Grid */}
            <div className="grid grid-cols-3 gap-3 mb-6">
                <VitalCard label="LCP" value="0.8s" delay={0.5} />
                <VitalCard label="TBT" value="10ms" delay={0.7} />
                <VitalCard label="CLS" value="0.01" delay={0.9} />
            </div>

            {/* Comparison/Timeline */}
            <div className="space-y-2">
                <div className="flex justify-between text-[10px] text-gray-400">
                    <span>Load Time Reduction</span>
                    <span className="text-green-400">-75%</span>
                </div>
                <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden relative">
                     {/* Before */}
                     <div className="absolute top-0 left-0 h-full w-full bg-red-500/30"></div>
                     {/* After (Optimized) */}
                     <motion.div 
                        initial={{ width: "100%" }}
                        animate={{ width: "25%" }}
                        transition={{ duration: 2, ease: "easeInOut", delay: 1.5 }}
                        className="absolute top-0 left-0 h-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"
                     ></motion.div>
                </div>
                <div className="flex justify-between text-[8px] text-gray-600 font-mono mt-1">
                    <span>Before: 3.2s</span>
                    <span>After: 0.8s</span>
                </div>
            </div>
        </div>
    );
}

const VitalCard = ({ label, value, delay }: any) => (
    <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay }}
        className="bg-[#151515] rounded-lg border border-white/5 p-2 text-center"
    >
        <div className="text-[10px] text-gray-500 mb-1">{label}</div>
        <div className="text-sm font-bold text-green-400">{value}</div>
    </motion.div>
);

const ServicesPage: React.FC = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const id = searchParams.get('service') ?? '';
  const service = SERVICES.find((s) => s.id === id);

  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      {!service ? (
        <section className="py-24">
          <div className="container mx-auto px-6 md:px-12 max-w-7xl">
            <Services />
          </div>
        </section>
      ) : (
        <ServiceDetail service={service} onBack={() => router.push('/#services')} />
      )}
      <Contact />
      <Footer />
    </main>
  );
};

export default ServicesPage;
