import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Heart } from 'lucide-react';
import { FamilyValue } from '../../types';

interface FamilyValuesProps {
  values: FamilyValue[];
}

export const FamilyValues: React.FC<FamilyValuesProps> = ({ values }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeValue = values[activeIndex];

  return (
    <section id="values" className="py-24 px-6 relative bg-[#0b0c16] overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-white/10 text-xs font-semibold text-[#ffb703] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Core Pillars
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Family Values
          </h2>
          <p className="text-white/60 text-sm md:text-base">
            The invisible threads and enduring principles that hold our universe together through every season.
          </p>
        </div>

        {/* Values Selector Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {values.map((val, idx) => (
            <button
              key={val.word}
              onClick={() => setActiveIndex(idx)}
              className={`px-6 py-3 rounded-2xl text-sm font-bold tracking-wider transition-all duration-300 ${
                activeIndex === idx
                  ? 'bg-gradient-to-r from-[#ff7a59] to-[#ffb703] text-white shadow-lg shadow-coral-500/30 scale-105'
                  : 'glass-card text-white/70 hover:text-white border border-white/10 hover:border-white/20'
              }`}
            >
              {val.word}
            </button>
          ))}
        </div>

        {/* Active Value Spotlight Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeValue.word}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="glass-panel p-8 md:p-14 rounded-3xl border border-white/15 max-w-4xl mx-auto text-center relative overflow-hidden shadow-2xl"
          >
            <div
              className="absolute -right-20 -bottom-20 w-72 h-72 rounded-full blur-3xl opacity-15 pointer-events-none"
              style={{ backgroundColor: activeValue.color }}
            />

            <span className="text-xs font-extrabold uppercase tracking-widest text-[#ff7a59] block mb-4">
              Value #{activeIndex + 1}
            </span>

            <h3 className="text-4xl md:text-6xl font-extrabold text-white mb-6 font-outfit">
              {activeValue.word}
            </h3>

            <blockquote className="text-xl md:text-2xl font-semibold text-white/90 mb-6 italic max-w-2xl mx-auto">
              “{activeValue.quote}”
            </blockquote>

            <p className="text-sm md:text-base text-white/70 max-w-xl mx-auto leading-relaxed font-light">
              {activeValue.detail}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
