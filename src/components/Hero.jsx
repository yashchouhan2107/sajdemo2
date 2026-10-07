import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProductPouch } from './ProductVisuals';
import { TextReveal, FadeIn } from './AnimatedComponents';
import { PRODUCTS } from '../data/products';

export const Hero = ({ onShopClick, onExploreClick }) => {
  const [selectedTag, setSelectedTag] = useState('Almonds');

  const tags = ['Almonds', 'Cashews', 'Medjool', 'Raisins', 'Seeds'];

  // Map tag to product
  const getProductForTag = (tag) => {
    switch (tag) {
      case 'Cashews': return PRODUCTS.find(p => p.id === 'whole-cashews');
      case 'Medjool': return PRODUCTS.find(p => p.id === 'medjool-dates');
      case 'Raisins': return PRODUCTS.find(p => p.id === 'golden-raisins');
      case 'Seeds': return PRODUCTS.find(p => p.id === 'pumpkin-seeds');
      default: return PRODUCTS.find(p => p.id === 'almonds-raw');
    }
  };

  const activeProduct = getProductForTag(selectedTag);

  return (
    <section id="hero" className="relative pt-8 pb-16 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        
        {/* Main Headline with Editorial Text Reveal */}
        <TextReveal
          text="Nature's finest, made beautiful."
          as="h1"
          className="font-serif text-5xl sm:text-7xl lg:text-8xl font-normal text-[#2C1A11] tracking-tight leading-[1.05] mb-8 max-w-3xl justify-center"
        />

        {/* Arched Featured Showcase Card */}
        <FadeIn delay={0.2} className="relative w-full max-w-sm sm:max-w-md my-4">
          
          {/* Horizontal Pill Tags Overlay */}
          <div className="flex items-center justify-center gap-2 overflow-x-auto no-scrollbar py-2 px-4 mb-4">
            {tags.map((tag) => (
              <motion.button
                key={tag}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all whitespace-nowrap ${
                  selectedTag === tag
                    ? 'bg-[#2C1A11] text-[#FAF6F0] shadow-sm'
                    : 'bg-[#EFE7DA] text-[#7A6248] hover:bg-[#E2D6C3]'
                }`}
              >
                {tag}
              </motion.button>
            ))}
          </div>

          {/* Arched Product Frame Container with AnimatePresence */}
          <div className="relative aspect-[4/5] rounded-t-[140px] rounded-b-3xl bg-[#EFE5D8] p-6 shadow-md border border-[#E8DEC8] flex items-center justify-center overflow-hidden">
            
            {/* Subtle background glow */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#FAF6F0]/60 rounded-full blur-2xl pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={selectedTag}
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full flex items-center justify-center"
              >
                <ProductPouch 
                  type={selectedTag.toLowerCase()} 
                  title={activeProduct?.name || selectedTag} 
                  subtitle={activeProduct?.subtitle || "Whole & Raw"}
                  imageUrl={activeProduct?.pouchImage}
                  className="scale-105"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </FadeIn>

        {/* Narrative Subtitle */}
        <FadeIn delay={0.35}>
          <p className="mt-8 text-base sm:text-lg text-[#6E5C52] max-w-xl font-normal leading-relaxed">
            Almonds, cashews, dates and seeds, chosen with care and packed in small batches, so every handful tastes as fresh as it should.
          </p>
        </FadeIn>

        {/* CTA Buttons */}
        <FadeIn delay={0.45} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={onShopClick}
            className="w-full sm:w-auto px-8 py-3.5 bg-[#2C1A11] text-[#FAF6F0] hover:bg-[#3D2517] font-medium text-base rounded-full shadow-md transition-colors"
          >
            Shop collection
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={onExploreClick}
            className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-[#2C1A11]/30 text-[#2C1A11] hover:border-[#2C1A11] font-medium text-base rounded-full transition-colors hover:bg-[#EFE5D8]/40"
          >
            Explore SAJ
          </motion.button>
        </FadeIn>

        {/* Trust Feature Badges */}
        <FadeIn delay={0.55} className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-2xl text-left">
          <motion.div whileHover={{ y: -2 }} className="flex items-center gap-3 p-3 rounded-2xl bg-[#EFE5D8]/60 border border-[#E8DEC8]/80">
            <span className="text-xl p-2 rounded-xl bg-[#FAF6F0] text-[#2C1A11]">📦</span>
            <span className="text-xs sm:text-sm font-medium text-[#2C1A11]">
              Packed in small batches
            </span>
          </motion.div>

          <motion.div whileHover={{ y: -2 }} className="flex items-center gap-3 p-3 rounded-2xl bg-[#EFE5D8]/60 border border-[#E8DEC8]/80">
            <span className="text-xl p-2 rounded-xl bg-[#FAF6F0] text-[#2C1A11]">🔄</span>
            <span className="text-xs sm:text-sm font-medium text-[#2C1A11]">
              Resealable pouches
            </span>
          </motion.div>

          <motion.div whileHover={{ y: -2 }} className="flex items-center gap-3 p-3 rounded-2xl bg-[#EFE5D8]/60 border border-[#E8DEC8]/80">
            <span className="text-xl p-2 rounded-xl bg-[#FAF6F0] text-[#2C1A11]">🚚</span>
            <span className="text-xs sm:text-sm font-medium text-[#2C1A11]">
              Free delivery over ₹999
            </span>
          </motion.div>
        </FadeIn>

      </div>
    </section>
  );
};
