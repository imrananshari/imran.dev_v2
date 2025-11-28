"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Loader2, AlertCircle, MapPin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-background relative overflow-hidden">
      {/* Horizontal Partition Line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-24">
            
            {/* Left Side: Big Typography */}
            <div className="max-w-2xl flex-1">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight"
                >
                    Let's create something <span className="text-gray-500">meaningful</span> together.
                </motion.h2>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-gray-400 max-w-lg mb-12"
                >
                    I'm currently available for freelance projects and open to new opportunities. Fill out the form, and I'll get back to you within 24 hours.
                </motion.p>
                <div className="mt-4 flex flex-wrap items-center justify-start gap-3 text-sm">
                    <motion.div 
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-white/20 text-gray-300"
                    >
                        <MapPin size={16} className="text-blue-400" />
                        <span>Dubai, UAE</span>
                    </motion.div>
                    <motion.a 
                        href="tel:+971553959760"
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-white/20 text-gray-300 hover:bg-white/10 hover:text-white transition-colors"
                    >
                        <Phone size={16} className="text-green-400" />
                        <span>+971 55 395 9760</span>
                    </motion.a>
                </div>
            </div>

            {/* Right Side: Contact Form */}
            <div className="w-full lg:w-[500px]">
                <ContactForm />
          </div>
        
        </div>
      </div>
    </section>
  );
};

const ContactForm: React.FC = () => {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            const response = await fetch("https://formspree.io/f/mrbrdggn", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' }); // Reset form
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <div className="relative min-h-[450px] flex items-center justify-center">
            <AnimatePresence mode="wait">
                {status === 'success' ? (
                    <motion.div 
                        key="success"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="text-center w-full flex flex-col items-center justify-center h-full min-h-[400px]"
                    >
                        <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ type: "spring", stiffness: 200, damping: 15 }}
                            className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center text-green-400 mb-6 relative"
                        >
                             {/* Pulsing Ripple Effect */}
                            <motion.div 
                                animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                                className="absolute inset-0 rounded-full bg-green-500/20"
                            />
                            
                            {/* Animated Checkmark SVG */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="40"
                                height="40"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <motion.path
                                    d="M20 6 9 17l-5-5"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
                                />
                            </svg>
                        </motion.div>
                        
                        <motion.h3 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-3xl font-bold text-white mb-2"
                        >
                            Message Sent!
                        </motion.h3>
                        
                        <motion.p 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-gray-400 text-lg max-w-xs mx-auto"
                        >
                            Thanks for reaching out. I'll get back to you shortly.
                        </motion.p>
                        
                        <motion.button 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            onClick={() => setStatus('idle')}
                            className="mt-8 px-6 py-2 bg-white/5 hover:bg-white/10 rounded-full text-sm text-gray-300 transition-colors border border-white/5"
                        >
                            Send another message
                        </motion.button>
                    </motion.div>
                ) : (
                    <motion.form 
                        key="form"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        viewport={{ once: true }}
                        onSubmit={handleSubmit}
                        className="w-full bg-surface/50 backdrop-blur-sm border border-white/5 rounded-3xl p-8 md:p-10 space-y-6 shadow-2xl"
                    >
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium text-gray-400 ml-1">Name</label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                required
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your Name" 
                                className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-gray-400 ml-1">Email</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                required
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="name@example.com" 
                                className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-gray-400 ml-1">Message</label>
                            <textarea 
                                id="message" 
                                name="message" 
                                required
                                value={formData.message}
                                onChange={handleChange}
                                rows={4} 
                                placeholder="Tell me about your project..." 
                                className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all resize-none"
                            ></textarea>
                        </div>

                        {status === 'error' && (
                            <div className="flex items-center gap-2 text-red-400 text-sm bg-red-500/10 p-3 rounded-lg border border-red-500/20">
                                <AlertCircle size={16} />
                                <span>Something went wrong. Please try again.</span>
                            </div>
                        )}

                        <button 
                            type="submit" 
                            disabled={status === 'submitting'}
                            className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-gray-200 transition-all active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
                        >
                            {status === 'submitting' ? (
                                <>
                                    <Loader2 size={20} className="animate-spin" />
                                    <span>Sending...</span>
                                </>
                            ) : (
                                <>
                                    <span>Send Message</span>
                                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </>
                            )}
                        </button>
                    </motion.form>
                )}
            </AnimatePresence>
        </div>
    );
}

export default Contact;