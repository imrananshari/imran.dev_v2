"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Play, Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "CTO, TechFlow",
    content: "Imran transformed our legacy system into a high-performance PWA. His understanding of modern frontend architecture is world-class.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Founder, StartScale",
    content: "We hired Imran for a 3-month contract and ended up retaining him for a year. He brings not just code, but product strategy to the table.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Davis",
    role: "Product Manager, CreativeAgency",
    content: "The animations he built for our landing page won us a design award. Fast, reliable, and incredibly talented.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
    rating: 5
  },
  {
    id: 4,
    name: "David Ross",
    role: "Director, FinCorp",
    content: "Security and scalability were our top concerns. Imran architected a solution that exceeded all our compliance requirements.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    rating: 5
  },
   {
    id: 5,
    name: "Lisa Ray",
    role: "VP Engineering",
    content: "Exceptional code quality and communication. Delivered the project two weeks ahead of schedule.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    rating: 5
  }
];

const VIDEO_TESTIMONIALS = [
    {
        id: 1,
        thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
        name: "Alex & Team",
        role: "Co-Founders, SaaS Co.",
        duration: "0:45"
    }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-background relative overflow-hidden">
      {/* Horizontal Partition Line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column: Sticky Header & Video */}
            <div className="flex flex-col gap-8 lg:sticky lg:top-32 h-fit">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="flex items-center gap-2 text-blue-400 mb-4 text-sm font-medium uppercase tracking-widest">
                        <Star size={16} fill="currentColor" />
                        <span>Client Feedback</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                        Trusted by Industry Leaders
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                        Delivering high-impact solutions that drive growth and efficiency for startups and enterprises alike.
                    </p>
                </motion.div>

                {/* Featured Video Card */}
                {VIDEO_TESTIMONIALS.map((video) => (
                    <motion.div
                        key={video.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 group cursor-pointer shadow-2xl"
                    >
                        <img src={video.thumbnail} alt={video.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                        
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform">
                                <Play size={20} className="text-white fill-white ml-1" />
                            </div>
                        </div>

                        <div className="absolute bottom-0 left-0 w-full p-6">
                            <h4 className="text-white font-bold">{video.name}</h4>
                            <p className="text-gray-400 text-xs">{video.role}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Right Column: Auto-scrolling List */}
            <div className="relative h-[600px] overflow-hidden mask-linear-fade">
                {/* Gradient Masks for Scroll Fade */}
                <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none"></div>

                <motion.div 
                    className="flex flex-col gap-6"
                    animate={{ y: [0, -1000] }}
                    transition={{ 
                        repeat: Infinity, 
                        duration: 40, 
                        ease: "linear",
                        repeatType: "loop"
                    }}
                >
                    {/* Duplicate list for seamless loop */}
                    {[...TESTIMONIALS, ...TESTIMONIALS].map((testimonial, index) => (
                        <div
                            key={`${testimonial.id}-${index}`}
                            className="bg-[#121212] border border-white/5 p-6 rounded-2xl hover:border-white/10 transition-colors"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div className="flex gap-3 items-center">
                                    <div className="w-10 h-10 rounded-full bg-white/5 overflow-hidden border border-white/10">
                                        <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-sm">{testimonial.name}</h4>
                                        <p className="text-gray-500 text-xs">{testimonial.role}</p>
                                    </div>
                                </div>
                                <Quote size={16} className="text-blue-500/40" />
                            </div>

                            <p className="text-gray-300 text-sm leading-relaxed">
                                "{testimonial.content}"
                            </p>
                            
                            <div className="flex gap-0.5 mt-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} size={12} className="text-yellow-500 fill-yellow-500" />
                                ))}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;