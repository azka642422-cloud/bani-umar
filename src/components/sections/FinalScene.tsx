import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, RotateCcw, Heart } from 'lucide-react';
import { UniverseCanvas } from '../3d/UniverseCanvas';
import { FamilyMember } from '../../types';

interface FinalSceneProps {
  familyName: string;
  estYear: string;
  members: FamilyMember[];
  onReplay: () => void;
}

export const FinalScene: React.FC<FinalSceneProps> = ({
  familyName,
  estYear,
  members,
  onReplay
}) => {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#0b0c16] via-[#0f1026] to-[#070810]">
      {/* Night 3D Universe Canvas with glowing house and stars */}
      <UniverseCanvas members={members} isNight={true} />

      <div className="relative z-10 text-center max-w-3xl mx-auto px-6 pointer-events-none mt-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-white/15 mb-6 text-xs uppercase tracking-widest text-[#ffb703] font-semibold"
        >
          <Sparkles className="w-3.5 h-3.5" />
          Est. {estYear} — Forever
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 font-outfit"
        >
          Our story is still being written.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base md:text-lg text-white/70 max-w-xl mx-auto mb-10 font-light"
        >
          Thank you for exploring our little universe. May your own family journey be filled with warmth, laughter, and endless love.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="pointer-events-auto inline-block"
        >
          <button
            onClick={onReplay}
            className="group px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-[#ff7a59] via-[#ffb703] to-[#3a86ff] hover:opacity-95 shadow-2xl shadow-coral-500/30 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-3 text-base"
          >
            <RotateCcw className="w-4 h-4 group-hover:-rotate-180 transition-transform duration-500" />
            <span>Replay Our Story</span>
          </button>
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-0 right-0 text-center text-xs text-white/30 z-10 pointer-events-none">
        {familyName} • Built with love in Our Little Universe
      </div>
    </section>
  );
};
