import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Users, Sparkles, Compass, ArrowRight, MapPin } from 'lucide-react';
import { BranchData } from '../../types';

interface BranchExplorerProps {
  branches: BranchData[];
  onSelectBranch: (branch: BranchData) => void;
}

export const BranchExplorer: React.FC<BranchExplorerProps> = ({ branches, onSelectBranch }) => {
  const [hoveredBranch, setHoveredBranch] = useState<BranchData | null>(branches[0]);

  return (
    <section id="branches" className="py-24 px-6 relative bg-[#0b0c16] overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-coral-500/10 via-yellow-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-white/10 text-xs font-semibold text-[#ff7a59] mb-4">
            <Users className="w-3.5 h-3.5" />
            Meet The 7 Branches
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            “Every branch has its own story.”
          </h2>
          <p className="text-white/60 text-sm md:text-base">
            So… where should we go first? Explore the seven wonderful families of Bani Umar.
          </p>
        </div>

        {/* 7 Branches Grid / Portals */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {branches.map((branch) => (
            <motion.div
              key={branch.id}
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onHoverStart={() => setHoveredBranch(branch)}
              onClick={() => onSelectBranch(branch)}
              className="cursor-pointer glass-card p-6 rounded-3xl border border-white/10 hover:border-white/30 transition-all duration-300 relative overflow-hidden group shadow-xl flex flex-col justify-between"
            >
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-15 group-hover:opacity-30 transition-opacity"
                style={{ backgroundColor: branch.color }}
              />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="text-xs font-bold px-3 py-1 rounded-full text-white shadow-sm"
                    style={{ backgroundColor: branch.color }}
                  >
                    Branch 0{branch.branchNumber}
                  </span>
                  <span className="text-xs text-white/50 flex items-center gap-1">
                    <Users className="w-3.5 h-3.5" />
                    {branch.memberCount} people
                  </span>
                </div>

                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={branch.avatar}
                    alt={branch.name}
                    className="w-14 h-14 rounded-2xl object-cover border-2 border-white/20 shadow-md"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#ffb703] transition-colors">
                      {branch.name}
                    </h3>
                    <p className="text-xs text-white/60">{branch.leader}</p>
                  </div>
                </div>

                <p className="text-xs md:text-sm text-white/75 leading-relaxed mb-6 font-light">
                  “{branch.description}”
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-white/50 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#3a86ff]" />
                  {branch.cities.join(', ')}
                </span>
                <span className="text-xs font-semibold text-[#ff7a59] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Explore World <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
