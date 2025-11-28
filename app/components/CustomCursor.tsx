"use client";

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  // Mouse position values
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Spring physics for the trailing circle
  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
      
      // Check if hovering over clickable elements
      const target = e.target as HTMLElement;
      const clickable = target.closest('a, button, input, textarea, [role="button"], .cursor-pointer');
      setIsHovered(!!clickable);
    };

    const handleMouseDown = () => setIsHovered(true);
    const handleMouseUp = () => setIsHovered(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    document.body.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  return (
    <div className="hidden md:block pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Main Precision Dot - Always follows mouse instantly */}
      <motion.div 
        className="absolute top-0 left-0 w-2.5 h-2.5 bg-white rounded-full mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
        }}
      />
      
      {/* Trailing Ring / Spotlight Effect */}
      <motion.div 
        className="absolute top-0 left-0 rounded-full border border-white/30"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          width: isHovered ? 64 : 32,
          height: isHovered ? 64 : 32,
          backgroundColor: isHovered ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0)",
          borderColor: isHovered ? "rgba(255, 255, 255, 0)" : "rgba(255, 255, 255, 0.3)",
          backdropFilter: isHovered ? "blur(2px)" : "blur(0px)",
        }}
        transition={{
          type: "tween",
          ease: "backOut",
          duration: 0.3
        }}
      />
    </div>
  );
};

export default CustomCursor;