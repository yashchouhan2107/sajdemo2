import React from 'react';
import { motion } from 'framer-motion';

export const Marquee = ({ 
  items = [
    '100% ORGANIC & FRESH',
    'HAND-PICKED SMALL BATCHES',
    'RESEALABLE ECO POUCHES',
    'NO ADDED PRESERVATIVES',
    'EXPRESS NATIONWIDE SHIPPING',
    'SUSTAINABLE PACKAGING',
    'PREMIUM SINGLE ORIGIN'
  ],
  bgColor = 'bg-[#2C1A11]',
  textColor = 'text-[#FAF6F0]'
}) => {
  // Duplicate array for seamless infinite marquee loop
  const repeatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className={`w-full overflow-hidden py-4 ${bgColor} ${textColor} border-y border-[#3D2517] shadow-inner select-none relative z-20`}>
      <motion.div
        className="flex whitespace-nowrap items-center gap-8 text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase font-sans"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: 28,
        }}
      >
        {repeatedItems.map((item, idx) => (
          <div key={idx} className="flex items-center gap-8 flex-shrink-0">
            <span>{item}</span>
            <span className="text-[#C88E52] text-lg">✦</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
