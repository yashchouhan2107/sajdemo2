import React from 'react';

export const Logo = ({ variant = 'dark', className = '', showSubtitle = true, size = 'medium' }) => {
  const isLight = variant === 'light';
  const textColor = isLight ? 'text-[#FAF6F0]' : 'text-[#2C1A11]';
  const subColor = isLight ? 'text-[#D5C5B5]' : 'text-[#7A6248]';
  const crownColor = isLight ? '#FAF6F0' : '#8C5238';

  const sizeClasses = {
    small: { title: 'text-xl tracking-[0.2em]', sub: 'text-[8px] tracking-[0.3em]', icon: 'w-3 h-3' },
    medium: { title: 'text-2xl sm:text-3xl tracking-[0.22em]', sub: 'text-[9px] tracking-[0.35em]', icon: 'w-4 h-4' },
    large: { title: 'text-4xl sm:text-5xl tracking-[0.25em]', sub: 'text-[11px] tracking-[0.4em]', icon: 'w-6 h-6' }
  }[size] || { title: 'text-2xl sm:text-3xl tracking-[0.22em]', sub: 'text-[9px] tracking-[0.35em]', icon: 'w-4 h-4' };

  return (
    <div className={`flex flex-col items-center select-none group cursor-pointer ${className}`}>
      {/* Crown & Botanical Leaf Crown Vector Mark */}
      <div className="flex items-center gap-1 mb-0.5">
        <svg className={`${sizeClasses.icon} transition-transform duration-500 group-hover:scale-110`} viewBox="0 0 32 32" fill="none">
          {/* Organic Crown / Leaves */}
          <path d="M16 2L19.5 9.5L27 6.5L23.5 14L30 19L21.5 20L22 28L16 23.5L10 28L10.5 20L2 19L8.5 14L5 6.5L12.5 9.5L16 2Z" fill={crownColor} />
          <path d="M16 8L18 13L23 11L20.5 16L24.5 19L19.5 20L19.8 24.5L16 21.5L12.2 24.5L12.5 20L7.5 19L11.5 16L9 11L14 13L16 8Z" fill="#C88E52" />
        </svg>
      </div>

      {/* Brand Text */}
      <span className={`font-serif font-semibold leading-none ${sizeClasses.title} ${textColor}`}>
        SAJ
      </span>

      {/* Subtitle */}
      {showSubtitle && (
        <span className={`font-semibold uppercase -mt-0.5 ${sizeClasses.sub} ${subColor}`}>
          ORGANICS
        </span>
      )}
    </div>
  );
};
