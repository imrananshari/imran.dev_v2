"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const IMAGES = [
  "/assets/imran dubai3.jpg",
  "/assets/imran dubai2.jpg",
  "/assets/imran.jpg",
  "/assets/Image (3).jpg"
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Horizontal Partition Line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            
            {/* Left Content */}
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex-1 max-w-2xl"
            >
                <div className="flex items-center gap-4 mb-8">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight">About Me</h2>
                    <div className="h-px bg-white/20 flex-1"></div>
                </div>
                
                <div className="text-lg text-gray-400 leading-relaxed space-y-6">
                    <p>
                        I am <span className="text-white font-semibold">Imran Ansari</span>, a passionate Software Developer with a strong foundation in modern web and mobile technologies. 
                        Currently, I specialize in building scalable web applications using <span className="text-blue-400 font-medium">Next.js, TypeScript, and React</span>, 
                        along with cross-platform mobile solutions using <span className="text-blue-400 font-medium">Flutter</span>.
                    </p>
                    <p>
                        My journey involves deep dives into complex SaaS platforms, where I've managed everything from Figma design documentation to 
                        building reusable component libraries and integrating backend services. Whether it's optimizing performance for a Construction CRM 
                        or exploring the frontiers of AR/VR with Three.js, I thrive on solving challenging problems.
                    </p>
                    <p>
                        Beyond coding, I'm constantly learning and contributing to open-source and real-world projects, ensuring that every line of code 
                        adds value to the end-user experience.
                    </p>
                </div>

                {/* Signature / Decorative Element */}
                <div className="mt-10 opacity-60">
                    <span className="font-handwriting text-3xl text-white font-bold italic tracking-wide">Imran Ansari</span>
                    <div className="mt-2">
                        <span className="text-sm text-gray-400">Dubai, UAE</span>
                    </div>
                </div>
            </motion.div>

            {/* Right Side - 3D Card Carousel */}
            <div className="flex-1 w-full max-w-md lg:max-w-full flex justify-center lg:justify-end perspective-1000">
                <ProfileCarousel />
            </div>
        </div>
      </div>
    </section>
  );
};

const ProfileCarousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % IMAGES.length);
        }, 3000); // Change image every 3 seconds
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative w-[300px] h-[400px] md:w-[350px] md:h-[450px]">
             <AnimatePresence mode="popLayout">
                {IMAGES.map((img, index) => {
                     // Calculate relative position to current index
                     // We want to show 3 cards: current, next, and next-next (as background stack)
                     const offset = (index - currentIndex + IMAGES.length) % IMAGES.length;
                     
                     // Only render the active card and the next 2 for performance/visual stack
                     if (offset > 2) return null;

                     return (
                         <motion.div
                            key={img}
                            initial={{ 
                                opacity: 0, 
                                scale: 0.9,
                                z: -100,
                                x: 50,
                                rotateY: -20
                            }}
                            animate={{ 
                                opacity: offset === 0 ? 1 : 1 - (offset * 0.3), // Fade out background cards
                                scale: offset === 0 ? 1 : 1 - (offset * 0.1),   // Scale down background cards
                                zIndex: IMAGES.length - offset,                 // Stack order
                                x: offset * 30,                                 // Horizontal offset for stack effect
                                rotateY: offset === 0 ? 0 : -10 * offset,       // Rotation for 3D effect
                                z: -50 * offset                                 // Depth offset
                            }}
                            exit={{ 
                                opacity: 0, 
                                x: -100, 
                                rotateY: 20,
                                transition: { duration: 0.5 } 
                            }}
                            transition={{ 
                                duration: 0.8,
                                ease: "easeInOut"
                            }}
                            className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-surface"
                            style={{ 
                                transformStyle: 'preserve-3d',
                                perspective: '1000px'
                            }}
                         >
                            <div className="relative w-full h-full">
                                <img 
                                    src={img} 
                                    alt="Profile" 
                                    className="w-full h-full object-cover" 
                                />
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                                
                                {/* Card Content (Optional) */}
                                {offset === 0 && (
                                    <motion.div 
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 }}
                                        className="absolute bottom-6 left-6 right-6"
                                    >
                                        <div className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold text-white w-fit mb-2 border border-white/10">
                                            Developer Life
                                        </div>
                                        <p className="text-sm text-gray-300">Capturing moments of creativity and code.</p>
                                    </motion.div>
                                )}
                            </div>
                         </motion.div>
                     );
                })}
             </AnimatePresence>
        </div>
    );
}

export default About;