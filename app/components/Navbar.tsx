"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ContactForm from '../components/ContactForms';
import { SERVICES } from '../Constants';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    handleResize();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/#projects" },
    { name: "Skills", href: "/#skills" },
    { name: "Experience", href: "/#experience" },
    { name: "Blogs", href: "/blogs" },
    { name: "About", href: "/#about" },
  ];

  const COLOR_BY_ID: Record<string, { textHover: string } > = {
    'web-dev': { textHover: 'group-hover:text-blue-400' },
    'mobile-app': { textHover: 'group-hover:text-indigo-400' },
    'ui-ux': { textHover: 'group-hover:text-pink-400' },
    'crm-backend': { textHover: 'group-hover:text-cyan-400' },
    'ai-integration': { textHover: 'group-hover:text-purple-400' },
    'performance': { textHover: 'group-hover:text-amber-400' },
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 pointer-events-none">
        <motion.header
          layout
          initial={{ width: "100%", borderRadius: "0px", backgroundColor: "rgba(0,0,0,0)" }}
          animate={{
            // On desktop (not mobile) and scrolled: shrink to fit. On mobile: always 100%.
            width: (scrolled && !isMobile) ? "fit-content" : "100%",
            
            // On desktop and scrolled: pill shape (9999px). On mobile and scrolled: slight rounded (16px) or 0px.
            borderRadius: (scrolled && !isMobile) ? "9999px" : (scrolled ? "16px" : "0px"),
            
            backgroundColor: scrolled ? "rgba(20, 20, 20, 0.7)" : "rgba(0,0,0,0)",
            
            // Add padding when scrolled to prevent content touching edges of the background
            padding: scrolled ? "0.75rem 1.5rem" : "0px 0px",
            
            y: 0,
            backdropFilter: scrolled ? "blur(16px)" : "blur(0px)",
          }}
          transition={{ duration: 0.4, type: "spring", stiffness: 120, damping: 20 }}
          className="pointer-events-auto flex items-center justify-center overflow-visible border border-transparent"
          style={{
             // Restrict max width only on desktop scroll
             maxWidth: (scrolled && !isMobile) ? "90%" : "100%",
             borderColor: scrolled ? "rgba(255,255,255,0.08)" : "transparent",
             boxShadow: scrolled ? "0 8px 32px 0 rgba(0, 0, 0, 0.3)" : "none",
          }}
        >
          {/* Inner Container to manage content width and spacing */}
          <motion.div 
            layout
            className={`flex items-center justify-between w-full ${!scrolled ? 'max-w-7xl px-6' : ''}`}
            style={{ gap: (scrolled && !isMobile) ? '2rem' : '0rem' }}
          >
            
            {/* Logo */}
            <motion.a 
                layout
                href="/#hero" 
                className="text-xl font-bold tracking-tighter hover:text-gray-300 transition-colors whitespace-nowrap z-50"
            >
              imran<span className="text-gray-400">.dev</span>
            </motion.a>

            <motion.nav layout className="hidden md:flex items-center gap-8">
              <div 
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button 
                  onClick={() => setIsServicesOpen((v) => !v)}
                  className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group inline-flex items-center gap-1"
                >
                  Services <ChevronDown size={14} className={`transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </button>

                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-0 mt-3 w-64 rounded-2xl border border-white/10 bg-[#0d0d0d]/95 backdrop-blur-xl shadow-2xl p-2 z-50"
                    >
                      <div className="flex flex-col">
                        {SERVICES.map((s) => (
                          <Link
                            key={s.id}
                            href={`/services?service=${s.id}`}
                            className="group flex items-center gap-3 px-3 py-2 rounded-xl text-gray-300 hover:bg-white/5"
                            onClick={() => setIsServicesOpen(false)}
                          >
                            <span className={`w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center ${COLOR_BY_ID[s.id]?.textHover ?? ''}`}>
                              {s.icon}
                            </span>
                            <span className="text-sm font-medium">{s.title}</span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navLinks.filter(l => l.name !== 'Services').map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </motion.nav>

            {/* Right CTA */}
            <motion.div layout className="hidden md:flex items-center">
                <button 
                    onClick={() => setIsContactModalOpen(true)}
                    className={`flex items-center gap-2 px-5 py-2 bg-white text-black text-sm font-bold rounded-full hover:bg-gray-200 transition-all hover:scale-105 active:scale-95 whitespace-nowrap`}
                >
                    Let's Talk
                </button>
            </motion.div>

            {/* Mobile Toggle */}
            <motion.button 
              layout
              className="md:hidden text-white z-50 ml-auto pl-4"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </motion.div>
        </motion.header>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-background/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center space-y-8 md:hidden"
          >
            <nav className="flex flex-col items-center gap-6">
              {navLinks.map((link) => (
                link.name === 'Services' ? (
                  <div key={link.name} className="w-full max-w-sm mx-auto">
                    <button
                      className="w-full text-2xl font-medium text-gray-200 hover:text-blue-400 transition-colors inline-flex items-center justify-between"
                      onClick={() => setIsMobileServicesOpen((v) => !v)}
                    >
                      <span>Services</span>
                      <ChevronDown size={20} className={`transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {isMobileServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -6 }}
                          className="mt-2 grid grid-cols-1 gap-2"
                        >
                          {SERVICES.map((s) => (
                            <Link
                              key={s.id}
                              href={`/services?service=${s.id}`}
                              className="group flex items-center gap-3 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300"
                              onClick={() => {
                                setIsMobileServicesOpen(false);
                                setIsMobileMenuOpen(false);
                              }}
                            >
                              <span className={`w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center ${COLOR_BY_ID[s.id]?.textHover ?? ''}`}>{s.icon}</span>
                              <span className="text-base">{s.title}</span>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    className="text-2xl font-medium text-gray-200 hover:text-blue-400 transition-colors"
                    onClick={() => {
                      setIsMobileServicesOpen(false);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    {link.name}
                  </a>
                )
              ))}
              <button 
                className="mt-4 px-8 py-3 bg-white text-black font-bold rounded-full"
                onClick={() => {
                    setIsMobileServicesOpen(false);
                    setIsMobileMenuOpen(false);
                    setIsContactModalOpen(true);
                }}
              >
                Let's Talk
              </button>
            </nav>
            
            {/* Close Button specific for overlay */}
            <button 
                className="absolute top-6 right-6 text-white p-2"
                onClick={() => {
                  setIsMobileServicesOpen(false);
                  setIsMobileMenuOpen(false);
                }}
            >
                <X size={24} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Modal Overlay */}
      <AnimatePresence>
        {isContactModalOpen && (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
                onClick={() => setIsContactModalOpen(false)}
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 20 }}
                    onClick={(e) => e.stopPropagation()}
                    className="bg-[#121212] border border-white/10 rounded-3xl w-full max-w-lg relative overflow-hidden shadow-2xl"
                >
                     {/* Close Button */}
                    <button 
                        onClick={() => setIsContactModalOpen(false)}
                        className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-colors z-20"
                    >
                        <X size={20} />
                    </button>

                    <div className="p-8 md:p-10">
                        <div className="mb-6 text-center">
                            <h3 className="text-2xl font-bold text-white">Get in touch</h3>
                            <p className="text-gray-400 text-sm mt-2">Have a project in mind? Let's talk about it.</p>
                        </div>
                        <ContactForm />
                    </div>
                </motion.div>
            </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
