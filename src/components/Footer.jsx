import React from 'react';
import { Logo } from './Logo';

export const Footer = ({ onNavigate }) => {
  return (
    <footer className="bg-[#2C1A11] text-[#FAF6F0] py-16 px-4 sm:px-6 border-t border-[#3D2517]">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Brand Column */}
        <div className="md:col-span-1 flex flex-col items-start gap-4">
          <Logo variant="light" size="medium" />

          <p className="text-xs text-[#D5C5B5] font-normal leading-relaxed max-w-xs mt-1">
            Premium dry fruits, nuts and seeds, chosen with care and packed in small batches.
          </p>
        </div>

        {/* Column 1: Shop */}
        <div className="flex flex-col gap-3">
          <h4 className="font-serif text-xl font-medium text-[#FAF6F0]">Shop</h4>
          <ul className="space-y-2 text-xs text-[#D5C5B5]">
            <li><button onClick={() => onNavigate('shop')} className="hover:text-white transition-colors">Nuts</button></li>
            <li><button onClick={() => onNavigate('shop')} className="hover:text-white transition-colors">Dried fruit</button></li>
            <li><button onClick={() => onNavigate('shop')} className="hover:text-white transition-colors">Seeds</button></li>
            <li><button onClick={() => onNavigate('gifting')} className="hover:text-white transition-colors">Gift hampers</button></li>
          </ul>
        </div>

        {/* Column 2: Company */}
        <div className="flex flex-col gap-3">
          <h4 className="font-serif text-xl font-medium text-[#FAF6F0]">Company</h4>
          <ul className="space-y-2 text-xs text-[#D5C5B5]">
            <li><button onClick={() => onNavigate('story')} className="hover:text-white transition-colors">Our story</button></li>
            <li><button onClick={() => onNavigate('quality')} className="hover:text-white transition-colors">Quality</button></li>
            <li><button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors">Contact</button></li>
          </ul>
        </div>

        {/* Column 3: Help */}
        <div className="flex flex-col gap-3">
          <h4 className="font-serif text-xl font-medium text-[#FAF6F0]">Help</h4>
          <ul className="space-y-2 text-xs text-[#D5C5B5]">
            <li><a href="#" className="hover:text-white transition-colors">Shipping</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
          </ul>
        </div>

      </div>

      {/* Copyright & Email bottom bar */}
      <div className="max-w-5xl mx-auto mt-12 pt-8 border-t border-[#3D2517] flex flex-col sm:flex-row items-center justify-between text-xs text-[#D5C5B5] gap-4">
        <p>© 2026 SAJ Organics. All rights reserved.</p>
        <a href="mailto:hello@sajorganics.com" className="hover:underline text-[#FAF6F0]">
          hello@sajorganics.com
        </a>
      </div>
    </footer>
  );
};
