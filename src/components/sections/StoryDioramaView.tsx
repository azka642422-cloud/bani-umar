import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Sparkles, MapPin, Calendar, Users, Heart, Camera } from 'lucide-react';
import { BranchData, MemoryItem } from '../../types';

interface StoryDioramaViewProps {
  branch: BranchData;
  memories: MemoryItem[];
  onBack: () => void;
}

export const StoryDioramaView: React.FC<StoryDioramaViewProps> = ({ branch, memories, onBack }) => {
  const [activeTab, setActiveTab] = useState<'diorama' | 'memories'>('diorama');
  const branchMemories = memories.filter(m => m.branchId === branch.id);

  return (
    <section className="py-24 px-6 relative bg-[#0b0c16] min-h-screen">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Back button & Branch Header */}
        <div className="flex items-center justify-between mb-12">
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full glass-card border border-white/15 text-white/80 hover:text-white transition-colors text-xs font-semibold"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Branches
          </button>

          <div className="flex items-center gap-3">
            <span
              className="px-4 py-1 rounded-full text-xs font-bold text-white shadow-md"
              style={{ backgroundColor: branch.color }}
            >
              Branch 0{branch.branchNumber}
            </span>
          </div>
        </div>

        {/* Diorama Hero Showcase */}
        <div className="glass-panel p-8 md:p-12 rounded-3xl border border-white/15 relative overflow-hidden mb-12 shadow-2xl">
          <div
            className="absolute -right-20 -top-20 w-80 h-80 rounded-full blur-3xl opacity-20 pointer-events-none"
            style={{ backgroundColor: branch.color }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 relative">
              <img
                src={branch.avatar}
                alt={branch.name}
                className="w-full h-72 rounded-3xl object-cover shadow-2xl border-4 border-white/15"
              />
              <div className="absolute bottom-4 left-4 right-4 glass-card p-4 rounded-2xl backdrop-blur-md border border-white/15">
                <span className="text-[10px] uppercase tracking-widest text-white/50 block">World Type</span>
                <span className="text-base font-bold text-white capitalize">{branch.worldType} Diorama Universe</span>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#ffb703]">
                <Sparkles className="w-3.5 h-3.5" />
                {branch.leader}
              </div>

              <h1 className="text-4xl md:text-5xl font-extrabold text-white font-outfit">
                {branch.name}
              </h1>

              <p className="text-lg text-white/80 font-light leading-relaxed">
                “{branch.description}”
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs text-white/70">
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-card border border-white/10">
                  <Users className="w-3.5 h-3.5 text-[#ff7a59]" />
                  {branch.memberCount} Members
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-card border border-white/10">
                  <MapPin className="w-3.5 h-3.5 text-[#3a86ff]" />
                  {branch.cities.join(', ')}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Stories & Memories Section */}
        <div className="space-y-8">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
              <Camera className="w-6 h-6 text-[#ff7a59]" />
              Story Journey & Memories
            </h3>
            <span className="text-xs text-white/50">{branchMemories.length} captured moments</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {branchMemories.map((memory) => (
              <div key={memory.id} className="glass-card p-6 rounded-3xl border border-white/10 space-y-4 shadow-xl">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/5 text-[#ffb703] border border-white/10">
                    {memory.year} • {memory.location}
                  </span>
                  <span className="text-xs text-white/50 capitalize">{memory.type}</span>
                </div>

                <h4 className="text-xl font-bold text-white">{memory.title}</h4>
                <p className="text-xs md:text-sm text-white/80 leading-relaxed font-light">
                  {memory.story}
                </p>

                {memory.funFact && (
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-xs text-[#ffb703] italic">
                    💡 Fun fact: {memory.funFact}
                  </div>
                )}

                {memory.photos.length > 0 && (
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    {memory.photos.map((p, i) => (
                      <img key={i} src={p} alt={memory.title} className="w-full h-32 object-cover rounded-xl border border-white/10" />
                    ))}
                  </div>
                )}
              </div>
            ))}

            {branchMemories.length === 0 && (
              <div className="col-span-2 text-center py-16 text-white/50 glass-card rounded-3xl border border-white/10">
                <p>More stories for this branch are currently being written by the family!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
