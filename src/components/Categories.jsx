import React from 'react';
import { motion } from 'framer-motion';
import { CATEGORIES } from '../data/products';
import { TextReveal, FadeIn, ImageRevealMask } from './AnimatedComponents';

export const Categories = ({ onSelectCategory }) => {
  return (
    <section className="py-16 px-4 sm:px-6 bg-[#FAF6F0]">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-10 text-left max-w-xl">
          <TextReveal
            text="A pantry worth opening."
            as="h2"
            className="font-serif text-4xl sm:text-6xl font-normal text-[#2C1A11] tracking-tight leading-tight"
          />
          <FadeIn delay={0.2}>
            <p className="mt-4 text-base text-[#6E5C52] font-normal">
              Four collections, each chosen for flavour first and finished with care.
            </p>
          </FadeIn>
        </div>

        {/* 4 Arched Category Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {CATEGORIES.map((cat, idx) => (
            <div
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className="group cursor-pointer flex flex-col items-start"
            >
              {/* Arched Top Image Frame with Clip-Path Curtain Mask */}
              <div className="w-full rounded-t-[100px] rounded-b-2xl p-1 bg-[#EFE5D8] shadow-sm border border-[#E8DEC8]/80 relative overflow-hidden transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-md">
                <ImageRevealMask
                  src={cat.image}
                  alt={cat.title}
                  delay={idx * 0.12}
                  className="rounded-t-[100px] rounded-b-2xl"
                  imgClassName="rounded-t-[100px] rounded-b-2xl"
                />
              </div>

              {/* Title & Count Badge */}
              <div className="mt-3 w-full flex items-baseline justify-between px-1">
                <h3 className="font-serif text-2xl font-medium text-[#2C1A11] group-hover:text-[#8C5238] transition-colors">
                  {cat.title}
                </h3>
                <span className="text-xs text-[#7A6248] font-normal">
                  {cat.count}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
