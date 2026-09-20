import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Smile, Sparkles, X, Camera, Car, Compass } from 'lucide-react';
import { FunFactItem } from '../../types';

interface FunnyMemoriesSectionProps {
  funFacts: FunFactItem[];
}

export const FunnyMemoriesSection: React.FC<FunnyMemoriesSectionProps> = ({ funFacts }) => {
  const [selectedFact, setSelectedFact] = useState<FunFactItem | null>(null);

  return (
    <section className="py-24 px-6 relative bg-gradient-to-b from-[#0b0c16] via-[#121326] to-[#0b0c16] overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-white/10 text-xs font-semibold text-[#ffb703] mb-4">
            <Smile className="w-3.5 h-3.5 text-[#ffb703]" />
            Laughter & Joy
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            “The Things We Still Laugh About”
          </h2>
          <p className="text-white/60 text-sm md:text-base">
            Click on any object to uncover the hilarious family inside jokes and legendary mishaps.
          </p>
        </div>

        {/* Fun Facts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {funFacts.map((fact, idx) => (
            <motion.div
              key={fact.id}
              onClick={() => setSelectedFact(fact)}
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="cursor-pointer glass-card p-8 rounded-3xl border border-white/10 relative overflow-hidden flex flex-col justify-between group shadow-xl"
            >
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-15 group-hover:opacity-30 transition-opacity"
                style={{ backgroundColor: fact.color }}
              />

              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#ff7a59] font-bold block mb-2">
                  {fact.category}
                </span>
                <h3 className="text-xl font-bold text-white mb-3">{fact.title}</h3>
                <p className="text-xs md:text-sm text-white/70 leading-relaxed font-light italic">
                  “{fact.quote}”
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs text-white/40">
                <span>Click to inspect</span>
                <span className="font-semibold" style={{ color: fact.color }}>#{fact.id}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal for detail */}
      <AnimatePresence>
        {selectedFact && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedFact(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={e => e.stopPropagation()}
              className="bg-[#141628] border border-white/20 rounded-3xl max-w-lg w-full p-8 relative shadow-2xl space-y-6"
            >
              <button
                onClick={() => setSelectedFact(null)}
                className="absolute top-4 right-4 p-2 text-white/60 hover:text-white rounded-full bg-white/5"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-2">
                <span className="text-xs font-bold text-[#ffb703] uppercase tracking-wider">{selectedFact.category}</span>
                <h3 className="text-2xl font-bold text-white">{selectedFact.title}</h3>
              </div>

              <blockquote className="text-base text-white/90 italic p-4 rounded-2xl bg-white/5 border border-white/10">
                “{selectedFact.quote}”
              </blockquote>

              <p className="text-xs text-white/60">
                This is one of those timeless Bani Umar stories told at every single reunion dinner without fail.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
