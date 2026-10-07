import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from './Logo';

export const Preloader = ({ onLoaded }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsComplete(true);
            if (onLoaded) onLoaded();
          }, 400);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 8;
      });
    }, 120);

    return () => clearInterval(interval);
  }, [onLoaded]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.03 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 bg-[#FAF6F0] flex flex-col items-center justify-between p-8 sm:p-12 select-none"
        >
          {/* Top tag */}
          <div className="text-xs text-[#7A6248] tracking-[0.3em] uppercase font-medium">
            SAJ Organics • Est. 2026
          </div>

          {/* Center Brand Logo & Animated Leaf */}
          <div className="flex flex-col items-center gap-6">
            <Logo size="large" />

            {/* Subtitle */}
            <p className="font-serif italic text-lg text-[#6E5C52] text-center max-w-xs">
              Nature's finest, made beautiful.
            </p>

            {/* Progress Bar Container */}
            <div className="w-48 sm:w-64 h-1 bg-[#EFE5D8] rounded-full overflow-hidden mt-4 relative">
              <motion.div
                className="h-full bg-[#8C5238] rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.2 }}
              />
            </div>

            {/* Percentage Counter */}
            <span className="font-serif text-sm font-semibold text-[#2C1A11] tracking-widest">
              {progress}%
            </span>
          </div>

          {/* Bottom quote */}
          <div className="text-[11px] text-[#7A6248] tracking-widest uppercase text-center">
            Hand-picked • Small Batches • Resealable Pouches
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
