import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HAMPERS } from '../data/products';
import { TextReveal, FadeIn } from './AnimatedComponents';

export const GiftingSection = ({ onAddHamperToBag, onOrderInBulk }) => {
  const [selectedCategory, setSelectedCategory] = useState('Festive');

  const categories = ['Festive', 'Weddings', 'Corporate'];

  const activeHamper = HAMPERS.find(h => h.category === selectedCategory) || HAMPERS[0];

  return (
    <section id="gifting" className="py-20 px-4 sm:px-6 bg-[#FAF6F0]">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        
        {/* Arched Gift Hamper Showcase Image Container */}
        <FadeIn delay={0.1} className="w-full max-w-sm mb-8">
          <div className="aspect-[4/5] rounded-t-[140px] rounded-b-3xl bg-[#EFE5D8] p-2 shadow-md border border-[#E8DEC8] flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeHamper.id}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6 }}
                src={activeHamper.image}
                alt={activeHamper.name}
                className="w-full h-full object-cover rounded-t-[140px] rounded-b-3xl shadow-inner"
              />
            </AnimatePresence>
          </div>
        </FadeIn>

        {/* Section Header */}
        <div className="max-w-xl text-center mb-8">
          <TextReveal
            text="Gifting, considered."
            as="h2"
            className="font-serif text-4xl sm:text-6xl font-normal text-[#2C1A11] tracking-tight leading-tight justify-center"
          />
          <FadeIn delay={0.2}>
            <p className="mt-4 text-base text-[#6E5C52] font-normal leading-relaxed">
              Curated hampers of premium dry fruits, wrapped and ready for festivals, weddings and thank-yous.
            </p>
          </FadeIn>
        </div>

        {/* Category Filter Pills */}
        <FadeIn delay={0.25} className="flex items-center gap-2 overflow-x-auto no-scrollbar mb-8">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-[#2C1A11] text-[#FAF6F0] shadow-sm'
                  : 'bg-[#EFE7DA] text-[#7A6248] hover:bg-[#E2D6C3]'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </FadeIn>

        {/* Active Hamper Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeHamper.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-lg bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-[#E8DEC8] text-left flex flex-col gap-4 shadow-sm"
          >
            <div className="flex items-baseline justify-between">
              <h3 className="font-serif text-3xl font-medium text-[#2C1A11]">
                {activeHamper.name}
              </h3>
              <span className="font-serif text-xl font-semibold text-[#8C5238]">
                {activeHamper.formattedPrice}
              </span>
            </div>

            <p className="text-sm text-[#6E5C52] font-normal leading-relaxed">
              {activeHamper.description}
            </p>

            <div className="mt-4 flex flex-col sm:flex-row items-center gap-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => onAddHamperToBag(activeHamper)}
                className="w-full sm:flex-1 py-3.5 bg-[#2C1A11] hover:bg-[#3D2517] text-[#FAF6F0] font-medium text-sm rounded-full transition-all shadow-md"
              >
                Add hamper to bag
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => onOrderInBulk(activeHamper)}
                className="w-full sm:w-auto px-6 py-3.5 border border-[#2C1A11]/30 hover:border-[#2C1A11] text-[#2C1A11] font-medium text-sm rounded-full transition-all hover:bg-[#EFE5D8]/40 whitespace-nowrap"
              >
                Order in bulk
              </motion.button>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
