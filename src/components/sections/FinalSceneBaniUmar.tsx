import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, RotateCcw, Heart } from 'lucide-react';
import { BaniUmarUniverse } from '../3d/BaniUmarUniverse';
import { BranchData } from '../../types';

interface FinalSceneBaniUmarProps {
  branches: BranchData[];
  onReplay: () => void;
}

export const FinalSceneBaniUmar: React.FC<FinalSceneBaniUmarProps> = ({ branches, onReplay }) => {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#0b0c16] via-[#0f1026] to-[#070810]">
      <BaniUmarUniverse branches={branches} onSelectBranch={() => {}} isNight={true} />

      <div className="relative z-10 text-center max-w-3xl mx-auto px-6 pointer-events-none mt-16 space-y-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-white/15 text-xs uppercase tracking-widest text-[#ffb703] font-semibold"
        >
          <Sparkles className="w-3.5 h-3.5" />
          Bani Umar • The Story Continues
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-4"
        >
          <p className="text-xl md:text-2xl text-white/80 font-light italic">
            “We don't just inherit names. We inherit stories. Jokes. Memories. Traditions. And a place where we belong.”
          </p>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white font-outfit">
            BANI UMAR
          </h2>
          <p className="text-sm md:text-base text-[#ff7a59] font-medium tracking-widest uppercase">
            One beginning. Seven branches. Countless stories.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="pointer-events-auto pt-6 flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={onReplay}
            className="group px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-[#ff7a59] via-[#ffb703] to-[#3a86ff] hover:opacity-95 shadow-2xl shadow-coral-500/30 transition-all flex items-center gap-3 text-base"
          >
            <RotateCcw className="w-4 h-4 group-hover:-rotate-180 transition-transform duration-500" />
            <span>Explore Again</span>
          </button>
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-0 right-0 text-center text-xs text-white/30 z-10 pointer-events-none">
        BANI UMAR • The best part is, we're still making them.
      </div>
    </section>
  );
};
