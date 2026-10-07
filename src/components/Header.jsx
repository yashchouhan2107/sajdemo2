import React from 'react';
import { Search, User, ShoppingBag, Menu } from 'lucide-react';
import { Logo } from './Logo';

export const Header = ({ 
  cartCount = 0, 
  onOpenCart, 
  onOpenNav, 
  onOpenSearch,
  onOpenAccount 
}) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#FAF6F0]/90 backdrop-blur-md border-b border-[#EFE5D8]/80 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        
        {/* Brand Logo (Left) */}
        <a href="#" className="flex items-center gap-2 group">
          <Logo size="medium" />
        </a>

        {/* Action Controls (Right) */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Search Icon */}
          <button 
            onClick={onOpenSearch}
            aria-label="Search" 
            className="p-2 text-[#2C1A11] hover:text-[#7A6248] transition-colors rounded-full hover:bg-[#EFE5D8]/50"
          >
            <Search className="w-5 h-5 stroke-[1.75]" />
          </button>

          {/* Account Icon */}
          <button 
            onClick={onOpenAccount}
            aria-label="Account" 
            className="p-2 text-[#2C1A11] hover:text-[#7A6248] transition-colors rounded-full hover:bg-[#EFE5D8]/50 hidden sm:flex"
          >
            <User className="w-5 h-5 stroke-[1.75]" />
          </button>

          {/* Cart Icon with badge count */}
          <button 
            onClick={onOpenCart}
            aria-label="Bag" 
            className="relative p-2 text-[#2C1A11] hover:text-[#7A6248] transition-colors rounded-full hover:bg-[#EFE5D8]/50"
          >
            <ShoppingBag className="w-5 h-5 stroke-[1.75]" />
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 w-4.5 h-4.5 rounded-full bg-[#8C5238] text-white text-[10px] font-bold flex items-center justify-center animate-pulse">
                {cartCount}
              </span>
            )}
          </button>

          {/* Navigation Hamburger Menu Icon */}
          <button 
            onClick={onOpenNav}
            aria-label="Open navigation menu" 
            className="p-2 text-[#2C1A11] hover:text-[#7A6248] transition-colors rounded-full hover:bg-[#EFE5D8]/50 ml-1"
          >
            <Menu className="w-6 h-6 stroke-[1.75]" />
          </button>
        </div>

      </div>
    </header>
  );
};
