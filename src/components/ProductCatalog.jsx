import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PRODUCTS } from '../data/products';
import { ProductPouch } from './ProductVisuals';
import { TextReveal, FadeIn, ImageRevealMask } from './AnimatedComponents';

export const ProductCatalog = ({ selectedCategory = 'All', onAddToCart, onCategoryChange }) => {
  const [selectedWeights, setSelectedWeights] = useState({
    'almonds-raw': '250g',
    'whole-cashews': '250g',
    'medjool-dates': '250g',
    'golden-raisins': '250g',
    'pumpkin-seeds': '250g',
  });

  const categories = ['All', 'Nuts', 'Dried fruit', 'Seeds'];

  const filteredProducts = selectedCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === selectedCategory);

  const handleWeightChange = (productId, weight) => {
    setSelectedWeights(prev => ({
      ...prev,
      [productId]: weight
    }));
  };

  return (
    <section id="shop" className="py-16 px-4 sm:px-6 bg-[#FAF6F0]">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-left max-w-xl mb-8">
          <TextReveal
            text="Shop the collection"
            as="h2"
            className="font-serif text-4xl sm:text-6xl font-normal text-[#2C1A11] tracking-tight leading-tight"
          />
          <FadeIn delay={0.2}>
            <p className="mt-4 text-base text-[#6E5C52] font-normal">
              Pick a pack size and add it to your bag. Free delivery on orders over ₹999.
            </p>
          </FadeIn>
        </div>

        {/* Filter Category Tabs */}
        <FadeIn delay={0.25} className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-6">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              whileTap={{ scale: 0.95 }}
              onClick={() => onCategoryChange(cat)}
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

        {/* Product Cards Grid with Layout Animations */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-4"
        >
          <AnimatePresence>
            {filteredProducts.map((product, idx) => {
              const currentWeight = selectedWeights[product.id] || '250g';
              const currentPrice = product.prices[currentWeight];

              return (
                <motion.div 
                  layout
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="bg-white/70 rounded-3xl p-5 border border-[#E8DEC8] flex flex-col justify-between hover:shadow-lg transition-all duration-300 relative group"
                >
                  {/* Bestseller Badge */}
                  {product.bestseller && (
                    <span className="absolute top-4 left-4 z-20 bg-[#EFE7DA] text-[#7A6248] text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full shadow-xs">
                      Bestseller
                    </span>
                  )}

                  {/* Arched Pouch Frame with Demo Photo Overlay & Mask Reveal */}
                  <div className="w-full aspect-[4/5] rounded-t-[100px] rounded-b-2xl bg-[#EFE5D8]/80 p-2 flex items-center justify-center overflow-hidden border border-[#E8DEC8]">
                    <ProductPouch 
                      type={product.id.includes('cashew') ? 'cashews' : product.id.includes('date') ? 'dates' : product.id.includes('raisin') ? 'raisins' : product.id.includes('seed') ? 'seeds' : 'almonds'} 
                      title={product.name}
                      subtitle={product.subtitle}
                      imageUrl={product.image}
                      className="scale-95 group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="mt-4 flex flex-col gap-2">
                    <div className="flex items-baseline justify-between">
                      <h3 className="font-serif text-2xl font-medium text-[#2C1A11]">
                        {product.name}
                      </h3>
                      <motion.span 
                        key={currentPrice}
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="font-serif text-xl font-semibold text-[#2C1A11]"
                      >
                        ₹{currentPrice}
                      </motion.span>
                    </div>

                    <p className="text-xs text-[#6E5C52] line-clamp-2">
                      {product.description}
                    </p>

                    {/* Weight Selector Pills */}
                    <div className="flex items-center gap-2 mt-2">
                      {Object.keys(product.prices).map((weight) => (
                        <button
                          key={weight}
                          onClick={() => handleWeightChange(product.id, weight)}
                          className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                            currentWeight === weight
                              ? 'bg-[#2C1A11] text-[#FAF6F0]'
                              : 'bg-[#EFE7DA] text-[#7A6248] hover:bg-[#E2D6C3]'
                          }`}
                        >
                          {weight}
                        </button>
                      ))}
                    </div>

                    {/* Add to bag Button */}
                    <motion.button
                      whileTap={{ scale: 0.96 }}
                      onClick={() => onAddToCart(product, currentWeight)}
                      className="w-full mt-3 py-3 bg-[#8C5238] hover:bg-[#6E3E28] text-[#FAF6F0] font-medium text-sm rounded-full transition-all shadow-sm flex items-center justify-center gap-2"
                    >
                      Add to bag
                    </motion.button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
