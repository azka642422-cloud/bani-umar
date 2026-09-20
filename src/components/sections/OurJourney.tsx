import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, Calendar, MapPin, ArrowRight, Sparkles } from 'lucide-react';
import { Milestone } from '../../types';

interface OurJourneyProps {
  milestones: Milestone[];
}

export const OurJourney: React.FC<OurJourneyProps> = ({ milestones }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeMilestone = milestones[activeIndex];

  return (
    <section id="journey" className="py-24 px-6 relative bg-gradient-to-b from-[#0b0c16] via-[#141226] to-[#0b0c16] overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-white/10 text-xs font-semibold text-[#3a86ff] mb-4">
            <Compass className="w-3.5 h-3.5" />
            Path of Time
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Our Journey
          </h2>
          <p className="text-white/60 text-sm md:text-base">
            Every road we walked, every milestone we crossed, and every chapter that built our home.
          </p>
        </div>

        {/* Milestone selector ribbon */}
        <div className="flex items-center justify-start md:justify-center gap-3 overflow-x-auto pb-4 mb-12 scrollbar-none">
          {milestones.map((m, idx) => (
            <button
              key={m.year}
              onClick={() => setActiveIndex(idx)}
              className={`px-5 py-3 rounded-2xl text-sm font-bold transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${
                activeIndex === idx
                  ? 'bg-gradient-to-r from-[#ff7a59] to-[#ffb703] text-white shadow-lg shadow-coral-500/25 scale-105'
                  : 'glass-card text-white/70 hover:text-white border border-white/10 hover:border-white/20'
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>{m.year}</span>
              <span className="text-xs font-normal opacity-85 hidden sm:inline">— {m.tag}</span>
            </button>
          ))}
        </div>

        {/* Active Milestone Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeMilestone.year}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center glass-panel p-8 md:p-12 rounded-3xl border border-white/15 shadow-2xl"
          >
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#ff7a59]">
                <Sparkles className="w-3.5 h-3.5" />
                Chapter {activeMilestone.year}
              </div>

              <h3 className="text-3xl md:text-4xl font-extrabold text-white">
                {activeMilestone.title}
              </h3>

              <div className="flex items-center gap-2 text-white/60 text-sm font-medium">
                <MapPin className="w-4 h-4 text-[#3a86ff]" />
                {activeMilestone.location}
              </div>

              <p className="text-white/80 text-base md:text-lg leading-relaxed font-light">
                {activeMilestone.story}
              </p>

              <div className="pt-4 flex items-center gap-4">
                <span className="text-xs text-white/40 uppercase tracking-widest">Milestone {activeIndex + 1} of {milestones.length}</span>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/15 group aspect-video">
                <img
                  src={activeMilestone.image}
                  alt={activeMilestone.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-white/90 border border-white/15">
                    {activeMilestone.year} — {activeMilestone.location}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
