import React, { useState } from 'react';
import { Search, X } from 'lucide-react';
import { PRODUCTS } from '../data/products';

export const SearchModal = ({ isOpen, onClose, onSelectProduct }) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const results = query.trim() === '' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.name.toLowerCase().includes(query.toLowerCase()) || p.category.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4">
      {/* Backdrop */}
      <div 
        onClick={onClose} 
        className="fixed inset-0 bg-[#2C1A11]/50 backdrop-blur-md transition-opacity duration-300"
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-xl bg-[#FAF6F0] rounded-3xl shadow-2xl border border-[#E8DEC8] overflow-hidden z-10 p-6 flex flex-col gap-4">
        
        {/* Search Input Bar */}
        <div className="relative flex items-center">
          <Search className="w-5 h-5 text-[#7A6248] absolute left-4" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search dry fruits, nuts, seeds, hampers..."
            className="w-full pl-12 pr-10 py-3.5 bg-white border border-[#E8DEC8] rounded-full text-base text-[#2C1A11] placeholder-[#7A6248] focus:outline-none focus:ring-2 focus:ring-[#2C1A11]"
          />
          {query && (
            <button 
              onClick={() => setQuery('')}
              className="absolute right-4 p-1 text-[#7A6248] hover:text-[#2C1A11]"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto space-y-2 pt-2">
          <p className="text-xs text-[#7A6248] font-medium px-2 uppercase tracking-wider">
            {query ? 'Search Results' : 'Suggested Products'}
          </p>
          {results.length === 0 ? (
            <p className="text-sm text-[#7A6248] p-4 text-center">No products found matching "{query}"</p>
          ) : (
            results.map((product) => (
              <div
                key={product.id}
                onClick={() => {
                  onSelectProduct(product);
                  onClose();
                }}
                className="flex items-center justify-between p-3 hover:bg-[#EFE5D8]/70 rounded-2xl cursor-pointer transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#EFE5D8] flex items-center justify-center font-serif font-bold text-[#8C5238]">
                    {product.name[0]}
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-medium text-[#2C1A11]">{product.name}</h4>
                    <span className="text-xs text-[#7A6248]">{product.category}</span>
                  </div>
                </div>
                <span className="font-serif text-base font-semibold text-[#2C1A11]">From ₹{product.prices['250g']}</span>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
};
