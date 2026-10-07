import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Editorial Line/Word Text Reveal Animation
export const TextReveal = ({ text, className = '', delay = 0, as = 'h2' }) => {
  const words = text.split(' ');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: delay,
      }
    }
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 35, rotateX: -20 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] // Luxurious cubic-bezier
      }
    }
  };

  const Component = motion[as] || motion.div;

  return (
    <Component
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className={`flex flex-wrap gap-x-[0.25em] gap-y-[0.1em] ${className}`}
    >
      {words.map((word, idx) => (
        <span key={idx} className="inline-block overflow-hidden py-1">
          <motion.span variants={wordVariants} className="inline-block">
            {word}
          </motion.span>
        </span>
      ))}
    </Component>
  );
};

// Scroll Triggered Fade In Up
export const FadeIn = ({ children, delay = 0, yOffset = 30, duration = 0.8, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Advanced Clip-Path Mask Reveal for High-Res Images
export const ImageRevealMask = ({ 
  src, 
  alt = 'SAJ Organics', 
  className = '', 
  imgClassName = '',
  aspect = 'aspect-[4/5]',
  delay = 0 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`relative overflow-hidden ${aspect} ${className}`}
    >
      {/* Shimmer Placeholder skeleton */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-[#EFE5D8] animate-pulse rounded-t-[100px] rounded-b-2xl" />
      )}

      {/* Clip-path curtain wipe reveal */}
      <motion.div
        initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
        whileInView={{ clipPath: 'inset(0% 0% 0% 0%)' }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 1.1, delay: delay + 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="w-full h-full"
      >
        <motion.img
          src={src}
          alt={alt}
          onLoad={() => setIsLoaded(true)}
          initial={{ scale: 1.15 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className={`w-full h-full object-cover transition-transform duration-700 hover:scale-105 ${imgClassName}`}
        />
      </motion.div>
    </motion.div>
  );
};
