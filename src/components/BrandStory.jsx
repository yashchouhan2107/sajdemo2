import React from 'react';
import { motion } from 'framer-motion';
import { BotanicalBranch } from './ProductVisuals';
import { TextReveal, FadeIn } from './AnimatedComponents';
import { AnimatedCounter } from './AnimatedCounter';

export const BrandStory = ({ onBestsellersClick }) => {
  const storyImg = 'https://images.unsplash.com/photo-1522383225653-ed111181a951?auto=format&fit=crop&w=800&q=80';

  return (
    <section id="story" className="py-20 px-4 sm:px-6 bg-[#FAF6F0] overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        
        {/* Botanical Blossom Branch Artwork with Demo Photo Overlay */}
        <FadeIn delay={0.1} className="w-full max-w-sm mb-12">
          <BotanicalBranch image={storyImg} />
        </FadeIn>

        {/* Story Paragraphs */}
        <div className="max-w-2xl space-y-6 text-left sm:text-center">
          <TextReveal
            text="SAJ Organics began with a simple belief: dry fruits should taste the way you remember them, and look as good on the table as they taste. So we choose with care, pack in small batches, and wrap every order as if it were a gift."
            as="h2"
            className="font-serif text-3xl sm:text-4xl font-normal text-[#2C1A11] leading-relaxed justify-center"
          />

          <FadeIn delay={0.3}>
            <p className="text-base sm:text-lg text-[#6E5C52] font-normal leading-relaxed">
              From the first almond to the last date, every pouch is meant to feel like something you are proud to open, share and give.
            </p>
          </FadeIn>

          <FadeIn delay={0.4} className="pt-2">
            <motion.button
              whileHover={{ x: 4 }}
              onClick={onBestsellersClick}
              className="inline-flex items-center gap-2 font-serif text-xl text-[#2C1A11] hover:text-[#8C5238] border-b border-[#2C1A11] hover:border-[#8C5238] pb-1 transition-all"
            >
              Start with our bestsellers →
            </motion.button>
          </FadeIn>
        </div>

        {/* Animated Counter Stat Callouts */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-3xl pt-12 border-t border-[#EFE5D8]">
          <FadeIn delay={0.2} className="flex flex-col items-center text-center p-4">
            <AnimatedCounter
              to={8}
              duration={2}
              className="font-serif text-6xl sm:text-7xl font-normal text-[#2C1A11]"
            />
            <span className="text-sm text-[#7A6248] font-normal mt-2 max-w-[160px]">
              varieties to start with
            </span>
          </FadeIn>

          <FadeIn delay={0.3} className="flex flex-col items-center text-center p-4">
            <AnimatedCounter
              to={3}
              duration={2}
              className="font-serif text-6xl sm:text-7xl font-normal text-[#2C1A11]"
            />
            <span className="text-sm text-[#7A6248] font-normal mt-2 max-w-[160px]">
              pack sizes, from 250g to 1kg
            </span>
          </FadeIn>

          <FadeIn delay={0.4} className="flex flex-col items-center text-center p-4">
            <AnimatedCounter
              to={999}
              prefix="₹"
              duration={2.5}
              className="font-serif text-6xl sm:text-7xl font-normal text-[#2C1A11]"
            />
            <span className="text-sm text-[#7A6248] font-normal mt-2 max-w-[160px]">
              and above ships free
            </span>
          </FadeIn>
        </div>

      </div>
    </section>
  );
};
