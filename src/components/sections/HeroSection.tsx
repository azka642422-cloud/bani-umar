import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Sparkles } from 'lucide-react';
import { UniverseCanvas } from '../3d/UniverseCanvas';
import { FamilyMember } from '../../types';

interface HeroSectionProps {
  familyName: string;
  estYear: string;
  members: FamilyMember[];
  onEnter: () => void;
  onSelectMember: (member: FamilyMember) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  familyName,
  estYear,
  members,
  onEnter,
  onSelectMember
}) => {
  return (
    <section id="hero" className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#0b0c16] via-[#14162c] to-[#1e1430]">
      {/* 3D Universe Background */}
      <UniverseCanvas members={members} onSelectMember={onSelectMember} />

      {/* Hero Content Overlay */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 pointer-events-none mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-white/15 mb-6 text-xs uppercase tracking-widest text-[#ff7a59] font-semibold"
        >
          <Sparkles className="w-3.5 h-3.5" />
          Est. {estYear} — {familyName}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white mb-6 font-outfit drop-shadow-md"
        >
          Our Little Universe
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="text-lg md:text-xl text-white/75 max-w-2xl mx-auto mb-10 font-light leading-relaxed"
        >
          Different stories. Different dreams. One place we always call home.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="pointer-events-auto inline-block"
        >
          <button
            onClick={onEnter}
            className="group relative px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-[#ff7a59] via-[#ffb703] to-[#3a86ff] hover:opacity-95 shadow-2xl shadow-coral-500/30 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-3 text-base"
          >
            <span>Enter Our Story</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/40 pointer-events-none animate-bounce">
        <span className="text-[10px] tracking-widest uppercase">Scroll to explore</span>
        <ArrowDown className="w-4 h-4" />
      </div>
    </section>
  );
};
