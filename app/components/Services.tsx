"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Globe, Smartphone, Palette, Server, Bot, PlugZap } from 'lucide-react';
import { SERVICES } from '../Constants';

interface ServicesProps {
  onServiceClick?: (service: typeof SERVICES[0]) => void;
}

const Services: React.FC<ServicesProps> = ({ onServiceClick }) => {
  return (
    <section id="services" className="py-32 bg-background relative overflow-hidden">
      {/* Horizontal Partition Line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      {/* Background Decor */}
      <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
        >
            <div className="max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">What I Offer</h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                    Comprehensive digital solutions tailored to your business needs. From concept to deployment, I deliver excellence.
                </p>
            </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, index) => (
                <Link key={service.id} href={`/services?service=${service.id}`} className="block">
                  <ServiceCard 
                      service={service} 
                      index={index}
                  />
                </Link>
            ))}
        </div>
      </div>
    </section>
  );
};

const COLORS_BY_ID: Record<string, { textHover: string; ring: string; glow: string }> = {
  'web-dev': { textHover: 'group-hover:text-blue-400', ring: 'group-hover:ring-1 group-hover:ring-blue-500/40', glow: 'bg-blue-500/25' },
  'mobile-app': { textHover: 'group-hover:text-indigo-400', ring: 'group-hover:ring-1 group-hover:ring-indigo-500/40', glow: 'bg-indigo-500/25' },
  'ui-ux': { textHover: 'group-hover:text-pink-400', ring: 'group-hover:ring-1 group-hover:ring-pink-500/40', glow: 'bg-pink-500/25' },
  'crm-backend': { textHover: 'group-hover:text-cyan-400', ring: 'group-hover:ring-1 group-hover:ring-cyan-500/40', glow: 'bg-cyan-500/25' },
  'ai-integration': { textHover: 'group-hover:text-purple-400', ring: 'group-hover:ring-1 group-hover:ring-purple-500/40', glow: 'bg-purple-500/25' },
  'performance': { textHover: 'group-hover:text-amber-400', ring: 'group-hover:ring-1 group-hover:ring-amber-500/40', glow: 'bg-amber-500/25' },
};

const ServiceCard: React.FC<{ service: typeof SERVICES[0]; index: number; onClick?: () => void }> = ({ service, index, onClick }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4, scale: 1.01 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            onClick={onClick}
            className="group relative bg-[#121212] border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-300 flex flex-col h-full overflow-hidden cursor-pointer hover:shadow-2xl hover:shadow-blue-500/5"
        >
            {/* Hover Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10">
                <div className={`relative w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 mb-6 transition-all ${COLORS_BY_ID[service.id]?.ring ?? ''} group-hover:bg-white/10`}>
                    <span className={`absolute inset-0 rounded-xl blur-md opacity-0 group-hover:opacity-100 ${COLORS_BY_ID[service.id]?.glow ?? 'bg-blue-500/25'}`}></span>
                    <span className={`${COLORS_BY_ID[service.id]?.textHover ?? 'group-hover:text-blue-400'} relative`}>{service.icon}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {service.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed mb-8 text-sm">
                    {service.description}
                </p>

                <div className="mt-auto space-y-3">
                    {service.features.slice(0, 4).map((feature, i) => (
                        <div key={i} className="flex items-center gap-3 text-sm text-gray-500 group-hover:text-gray-300 transition-colors">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500/50 group-hover:bg-blue-400"></div>
                            {feature}
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom arrow icon appearing on hover */}
            <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 translate-x-4">
                <div className="p-2 rounded-full bg-white/10 text-white group-hover:bg-blue-500 group-hover:text-white">
                    <ArrowRight size={16} />
                </div>
            </div>
        </motion.div>
    );
}

export default Services;
