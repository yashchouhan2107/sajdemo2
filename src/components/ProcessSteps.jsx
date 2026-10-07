import React, { useState, useRef } from 'react';
import { motion, useScroll, useSpring, useMotionValueEvent } from 'framer-motion';
import { PROCESS_STEPS } from '../data/products';
import { Leaf, Sparkles, Lock, Package, CheckCircle2 } from 'lucide-react';
import { TextReveal, FadeIn } from './AnimatedComponents';

export const ProcessSteps = () => {
  const [activeStep, setActiveStep] = useState('sourced');
  const containerRef = useRef(null);

  // Track scroll progress across the process section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 60%", "end 75%"]
  });

  // Smooth progress line spring physics
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 24,
    restDelta: 0.001
  });

  // Dynamically highlight active step as line moves down on scroll
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.28) {
      setActiveStep('sourced');
    } else if (latest >= 0.28 && latest < 0.58) {
      setActiveStep('sorted');
    } else if (latest >= 0.58 && latest < 0.85) {
      setActiveStep('sealed');
    } else {
      setActiveStep('delivered');
    }
  });

  const getIcon = (id) => {
    switch (id) {
      case 'sourced': return <Leaf className="w-5 h-5" />;
      case 'sorted': return <Sparkles className="w-5 h-5" />;
      case 'sealed': return <Lock className="w-5 h-5" />;
      case 'delivered': return <Package className="w-5 h-5" />;
      default: return <Leaf className="w-5 h-5" />;
    }
  };

  return (
    <section id="quality" className="py-24 px-4 sm:px-6 bg-[#2C1A11] text-[#FAF6F0] relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-left max-w-xl mb-16">
          <TextReveal
            text="Careful at every step."
            as="h2"
            className="font-serif text-4xl sm:text-6xl font-normal text-[#FAF6F0] tracking-tight leading-tight"
          />
          <FadeIn delay={0.2}>
            <p className="mt-4 text-base sm:text-lg text-[#D5C5B5] font-normal leading-relaxed">
              Freshness is not a claim on the label. It is a habit, from the first look to the last seal.
            </p>
          </FadeIn>
        </div>

        {/* Timeline Container */}
        <div ref={containerRef} className="relative pl-8 sm:pl-12 space-y-12 sm:space-y-16">
          
          {/* Track Line Container spanning center of first dot (24px) to center of last dot */}
          <div className="absolute left-[14px] -translate-x-1/2 top-[24px] bottom-[48px] w-[3px]">
            {/* Dark Track Line */}
            <div className="w-full h-full bg-[#4D3628] rounded-full" />

            {/* Animated Solid Bright Gold Scroll Progress Line */}
            <motion.div 
              style={{ scaleY, originY: 0 }}
              className="absolute inset-0 w-full bg-[#C88E52] rounded-full shadow-[0_0_14px_rgba(200,142,82,1)]"
            />
          </div>

          {PROCESS_STEPS.map((step) => {
            const isActive = activeStep === step.id;

            return (
              <div 
                key={step.id} 
                onClick={() => setActiveStep(step.id)}
                className="relative cursor-pointer group"
              >
                {/* Glowing Node Circle Marker on Timeline */}
                <motion.div 
                  animate={{
                    scale: isActive ? 1.25 : 1,
                    backgroundColor: isActive ? '#C88E52' : '#4D3628',
                    color: isActive ? '#2C1A11' : '#D5C5B5',
                    boxShadow: isActive ? '0 0 18px rgba(200, 142, 82, 0.8)' : 'none'
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute -left-[32px] sm:-left-[48px] top-2.5 w-7 h-7 rounded-full flex items-center justify-center z-20 border-2 border-[#2C1A11]"
                >
                  {isActive ? (
                    <CheckCircle2 className="w-4 h-4 stroke-[2.5]" />
                  ) : (
                    <div className="w-2 h-2 rounded-full bg-[#D5C5B5]" />
                  )}
                </motion.div>

                {/* Content Box */}
                <motion.div 
                  animate={{
                    backgroundColor: isActive ? '#3D2517' : '#2C1A11',
                    borderColor: isActive ? 'rgba(200, 142, 82, 0.5)' : 'rgba(77, 54, 40, 0.4)',
                    x: isActive ? 6 : 0
                  }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="p-6 sm:p-8 rounded-3xl border shadow-sm hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-3 text-[#C88E52] mb-2">
                    {getIcon(step.id)}
                    <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#FAF6F0]">
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-[#D5C5B5] font-normal leading-relaxed max-w-xl mt-3">
                    {step.text}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
