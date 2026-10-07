import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SVG_DATA_URIS } from '../data/imageFallbacks';

export const SafeImage = ({ 
  src, 
  categoryKey = 'almonds',
  alt = 'SAJ Organics Product', 
  className = '',
  aspect = 'aspect-[4/5]',
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Get SVG Data URI fallback based on categoryKey or default to almonds
  const svgFallback = SVG_DATA_URIS[categoryKey] || SVG_DATA_URIS.almonds;
  const currentSrc = hasError ? svgFallback : (src || svgFallback);

  return (
    <div className={`relative overflow-hidden ${aspect} ${className}`}>
      {/* Shimmer Placeholder Skeleton */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-[#EFE5D8] animate-pulse rounded-2xl z-0" />
      )}

      {/* Image Element */}
      <motion.img
        src={currentSrc}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        onError={() => {
          if (!hasError) setHasError(true);
        }}
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 1.05 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`w-full h-full object-cover ${className}`}
        {...props}
      />
    </div>
  );
};
