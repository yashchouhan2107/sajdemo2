import React from 'react';
import { motion } from 'framer-motion';
import { SafeImage } from './SafeImage';

// Reusable SVG Arched Pouch Artwork with guaranteed photo / SVG rendering
export const ProductPouch = ({ 
  type = 'almonds', 
  title = 'Almonds', 
  subtitle = 'Whole & Raw', 
  imageUrl = null,
  className = '' 
}) => {
  return (
    <div className={`relative w-full aspect-[4/5] flex items-center justify-center p-2 ${className}`}>
      
      {/* Stand-up Pouch Container */}
      <motion.div 
        whileHover={{ scale: 1.03, y: -4 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-4/5 h-[90%] bg-[#FAF6F0] rounded-[24px] shadow-sm border border-[#E5DAC8] p-4 flex flex-col items-center justify-between text-center overflow-hidden transition-all"
      >
        {/* Top zip-seal line */}
        <div className="w-full flex flex-col items-center gap-1 opacity-70">
          <div className="w-full h-[2px] bg-[#D8CEBE]" />
          <div className="w-12 h-[3px] bg-[#C8BCAB] rounded-full" />
        </div>

        {/* SAJ Logo Header on Pouch */}
        <div className="mt-1 flex flex-col items-center z-10">
          <div className="flex items-center gap-1 text-[#8C6D4F]">
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L15 8L21 9L17 14L18 20L12 17L6 20L7 14L3 9L9 8L12 2Z" />
            </svg>
          </div>
          <span className="font-serif text-xl tracking-[0.25em] font-semibold text-[#3D2517] leading-none mt-1">
            SAJ
          </span>
          <span className="text-[8px] tracking-[0.3em] uppercase text-[#7A6248] font-medium">
            ORGANICS
          </span>
          <div className="w-5 h-[1px] bg-[#D8CEBE] mt-1" />
        </div>

        {/* Image / Artwork Area */}
        <div className="my-1 relative w-full h-28 flex items-center justify-center overflow-hidden rounded-xl bg-[#FAF6F0]">
          {imageUrl ? (
            <SafeImage 
              src={imageUrl} 
              categoryKey={type}
              alt={title}
              aspect="aspect-auto"
              className="w-full h-full object-cover rounded-xl shadow-inner border border-[#E8DEC8]/60"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              {type === 'almonds' && (
                <svg className="w-20 h-20 text-[#A66C3B]" viewBox="0 0 100 100" fill="none">
                  <ellipse cx="50" cy="50" rx="36" ry="24" transform="rotate(-30 50 50)" fill="#C88E52" opacity="0.85" />
                  <path d="M30 65 C 20 40, 50 15, 75 35 C 85 55, 60 85, 30 65 Z" fill="#9E5D2A" />
                </svg>
              )}
              {type === 'cashews' && (
                <svg className="w-20 h-20 text-[#D8B47E]" viewBox="0 0 100 100" fill="none">
                  <path d="M35 30 C 55 15, 80 35, 65 60 C 55 75, 35 70, 40 50 C 42 40, 30 35, 35 30 Z" fill="#E2C598" />
                </svg>
              )}
              {type === 'dates' && (
                <svg className="w-20 h-20" viewBox="0 0 100 100" fill="none">
                  <ellipse cx="45" cy="52" rx="22" ry="32" transform="rotate(-15 45 52)" fill="#6B351F" />
                  <ellipse cx="60" cy="45" rx="18" ry="28" transform="rotate(20 60 45)" fill="#4F2414" />
                </svg>
              )}
              {type === 'raisins' && (
                <svg className="w-20 h-20" viewBox="0 0 100 100" fill="none">
                  <circle cx="42" cy="45" r="16" fill="#D99B26" />
                  <circle cx="58" cy="55" r="18" fill="#B87F16" />
                </svg>
              )}
              {type === 'seeds' && (
                <svg className="w-20 h-20" viewBox="0 0 100 100" fill="none">
                  <ellipse cx="45" cy="48" rx="14" ry="26" transform="rotate(-25 45 48)" fill="#4D6B4B" />
                  <ellipse cx="58" cy="52" rx="12" ry="24" transform="rotate(35 58 52)" fill="#3B5439" />
                </svg>
              )}
            </div>
          )}
        </div>

        {/* Title Label & Subtitle on Pouch */}
        <div className="mb-1 flex flex-col items-center z-10">
          <h4 className="font-serif text-lg font-medium text-[#2C1A11] leading-tight">
            {title}
          </h4>
          <p className="text-[10px] text-[#7A6248] tracking-wide mt-0.5">
            {subtitle}
          </p>
        </div>

        {/* Bottom Pouch Fold */}
        <div className="w-full h-1.5 bg-[#EFE5D8] rounded-b-xl opacity-60" />
      </motion.div>
    </div>
  );
};

// Category Arched Visual Cards with SafeImage
export const CategoryVisual = ({ type, image }) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden rounded-t-[100px] rounded-b-2xl">
      {image ? (
        <SafeImage 
          src={image} 
          categoryKey={type}
          alt={type} 
          aspect="aspect-auto"
          className="w-full h-full object-cover rounded-t-[100px] rounded-b-2xl opacity-90 transition-transform duration-700 hover:scale-108"
        />
      ) : (
        <div className="w-28 h-28 relative flex items-center justify-center">
          <div className="w-24 h-20 bg-[#FAF6F0] rounded-md shadow-md border border-[#E5DAC8] relative flex flex-col items-center justify-center">
            <div className="z-10 bg-[#FAF6F0] px-2 py-0.5 rounded border border-[#D8CEBE] text-[8px] font-serif tracking-widest text-[#2C1A11]">
              SAJ
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Brand Story Botanical Branch Artwork
export const BotanicalBranch = ({ image }) => {
  return (
    <div className="relative w-full aspect-[4/5] max-w-sm mx-auto flex items-center justify-center">
      {/* Arched background container */}
      <div className="absolute inset-0 rounded-t-[140px] rounded-b-3xl bg-[#EFE5D8]/70 border border-[#E8DEC8] overflow-hidden">
        {image && (
          <SafeImage 
            src={image} 
            categoryKey="story"
            alt="Botanical background" 
            aspect="aspect-auto"
            className="w-full h-full object-cover opacity-85"
          />
        )}
      </div>

      {!image && (
        <svg className="relative z-10 w-4/5 h-4/5 text-[#3D2517]" viewBox="0 0 200 240" fill="none">
          <path d="M20 220 C 60 180, 80 140, 110 100 C 140 60, 160 40, 180 20" stroke="#5C3A21" strokeWidth="4" strokeLinecap="round" />
        </svg>
      )}
    </div>
  );
};
