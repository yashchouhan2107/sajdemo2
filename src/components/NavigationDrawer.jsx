import React from 'react';
import { X } from 'lucide-react';
import { Logo } from './Logo';

export const NavigationDrawer = ({ 
  isOpen, 
  onClose, 
  cartCount,
  onNavigate 
}) => {
  if (!isOpen) return null;

  const links = [
    { label: 'Home', target: 'hero' },
    { label: 'Shop', target: 'shop' },
    { label: 'Our Story', target: 'story' },
    { label: 'Quality', target: 'quality' },
    { label: 'Gift Hampers', target: 'gifting' },
    { label: 'Account', target: 'account' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Dark overlay backdrop */}
      <div 
        onClick={onClose} 
        className="fixed inset-0 bg-[#2C1A11]/40 backdrop-blur-sm transition-opacity duration-300"
      />

      {/* Menu Container */}
      <div className="relative w-full max-w-md bg-[#FAF6F0] h-full shadow-2xl flex flex-col justify-between p-6 sm:p-10 z-10 overflow-y-auto">
        
        {/* Top Header Row with Logo & Close Button */}
        <div className="flex items-center justify-between">
          <Logo size="small" />

          <button 
            onClick={onClose}
            aria-label="Close menu"
            className="p-2 rounded-full hover:bg-[#EFE5D8] transition-colors text-[#2C1A11]"
          >
            <X className="w-6 h-6 stroke-[1.75]" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="my-auto py-8 flex flex-col gap-6">
          {links.map((link) => (
            <button
              key={link.label}
              onClick={() => {
                onNavigate(link.target);
                onClose();
              }}
              className="text-left font-serif text-4xl sm:text-5xl font-normal text-[#2C1A11] hover:text-[#8C5238] transition-all hover:translate-x-2 transform duration-200"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Drawer Footer Info */}
        <div className="pt-6 border-t border-[#EFE5D8] flex flex-col gap-2 text-sm text-[#7A6248]">
          <p className="font-medium text-[#2C1A11]">
            Free delivery on orders over ₹999
          </p>
          <a 
            href="mailto:hello@sajorganics.com"
            className="hover:underline text-[#8C5238] font-medium"
          >
            hello@sajorganics.com
          </a>
        </div>

      </div>
    </div>
  );
};
