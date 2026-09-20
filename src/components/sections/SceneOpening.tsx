import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowRight, Compass } from 'lucide-react';
import { BaniUmarUniverse } from '../3d/BaniUmarUniverse';
import { BranchData } from '../../types';

interface SceneOpeningProps {
  branches: BranchData[];
  onStartStory: () => void;
  onSelectBranch: (branch: BranchData) => void;
}

export const SceneOpening: React.FC<SceneOpeningProps> = ({
  branches,
  onStartStory,
  onSelectBranch
}) => {
  const [step, setStep] = useState<number>(1);

  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#0b0c16] via-[#14162c] to-[#1e1430]">
      {/* 3D Bani Umar Universe Tree */}
      <BaniUmarUniverse branches={branches} onSelectBranch={onSelectBranch} />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 pointer-events-none mt-12">
        {step === 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-white/15 text-xs uppercase tracking-widest text-[#ff7a59] font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              Bani Umar Family Story
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white font-outfit">
              “Every big family… started somewhere.”
            </h1>
            <p className="text-white/70 text-base md:text-lg max-w-lg mx-auto">
              One man. One beginning. Seven branches. Countless stories.
            </p>
            <div className="pointer-events-auto pt-4">
              <button
                onClick={() => setStep(2)}
                className="px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-[#ff7a59] via-[#ffb703] to-[#3a86ff] hover:opacity-95 shadow-xl shadow-coral-500/25 transition-all flex items-center gap-2 mx-auto text-base"
              >
                <span>Reveal The Tree</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-white/15 text-xs uppercase tracking-widest text-[#ffb703] font-semibold">
              <Compass className="w-3.5 h-3.5" />
              UMAR • 7 Branches
            </div>
            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight text-white font-outfit">
              BANI UMAR
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-xl mx-auto font-light">
              One beginning. Seven branches. Countless stories. And a lot of us happened!
            </p>
            <div className="pointer-events-auto pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onStartStory}
                className="px-8 py-4 rounded-full font-bold text-white bg-gradient-to-r from-[#ff7a59] via-[#ffb703] to-[#3a86ff] hover:opacity-95 shadow-2xl shadow-coral-500/30 transition-all flex items-center gap-3 text-base"
              >
                <span>START THE STORY</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};
