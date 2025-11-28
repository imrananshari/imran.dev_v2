"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Calendar } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-background relative overflow-hidden">
      {/* Horizontal Partition Line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        {/* Availability Chip */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-bold">
            <Calendar size={16} />
            <span>Availability</span>
          </div>
        </div>

        {/* Title & Description */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold tracking-tight mb-4 leading-tight text-center whitespace-nowrap"
        >
          Let's create something <span className="text-gray-500">meaningful</span> together.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto text-center mb-8"
        >
          I'm currently available for freelance projects and open to new opportunities. Pick a time in the calendar and I'll confirm promptly.
        </motion.p>

        {/* Location & Phone center */}
        <div className="flex items-center justify-center gap-4 text-sm mb-12">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300"
          >
            <MapPin size={16} className="text-blue-400" />
            <span>Dubai, UAE</span>
          </motion.div>
          <motion.a
            href="tel:+971553959760"
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300"
          >
            <Phone size={16} className="text-green-400" />
            <span>+971 55 395 9760</span>
          </motion.a>
        </div>

        {/* Full-width Cal.com embed */}
        <div className="rounded-2xl border border-white/10 overflow-hidden bg-surface/50 backdrop-blur-sm shadow-2xl">
          <iframe
            src="https://cal.com/imran-ansari/30min?embed=1"
            title="Schedule a 30 min meeting"
            className="w-full h-[600px] md:h-[650px] bg-black"
            // scrolling="no"
            frameBorder="0"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;