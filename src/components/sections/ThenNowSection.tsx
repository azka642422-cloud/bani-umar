import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Calendar, User } from 'lucide-react';
import { CousinMember } from '../../types';

export const ThenNowSection: React.FC = () => {
  const sampleCousins: CousinMember[] = [
    {
      id: "c1",
      name: "Rizky Umar",
      branchId: "branch-1",
      branchName: "Keluarga Pak Slamet",
      avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=600",
      funFact: "Professional late arriver at every family gathering.",
      childhoodPhoto: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&q=80&w=600",
      currentPhoto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600",
      dream1999: "Wanted to become an astronaut.",
      reality2026: "Still stays up till 3 AM playing video games."
    },
    {
      id: "c2",
      name: "Nabila Umar",
      branchId: "branch-3",
      branchName: "Keluarga Pak Budi",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600",
      funFact: "The designated family photographer who takes 500 photos per hour.",
      childhoodPhoto: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=600",
      currentPhoto: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600",
      dream1999: "Wanted to open a chocolate factory.",
      reality2026: "Became a graphic designer with a serious coffee addiction."
    }
  ];

  return (
    <section className="py-24 px-6 relative bg-[#0b0c16] overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-white/10 text-xs font-semibold text-[#3a86ff] mb-4">
            <Calendar className="w-3.5 h-3.5" />
            Time Travelers
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Then & Now
          </h2>
          <p className="text-white/60 text-sm md:text-base">
            From childhood dreams to adult realities—how time flies across generations of Bani Umar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sampleCousins.map((cousin) => (
            <div key={cousin.id} className="glass-panel p-8 rounded-3xl border border-white/15 space-y-6 shadow-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white">{cousin.name}</h3>
                  <span className="text-xs text-[#ff7a59] font-semibold">{cousin.branchName}</span>
                </div>
                <span className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70">
                  {cousin.funFact}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2 text-center">
                  <img src={cousin.childhoodPhoto} alt="Childhood" className="w-full h-48 object-cover rounded-2xl border border-white/10" />
                  <span className="text-xs font-semibold text-white/60 block">1999 • Childhood</span>
                  <p className="text-xs text-white/80 italic">“{cousin.dream1999}”</p>
                </div>
                <div className="space-y-2 text-center">
                  <img src={cousin.currentPhoto} alt="Current" className="w-full h-48 object-cover rounded-2xl border border-white/10" />
                  <span className="text-xs font-semibold text-[#ffb703] block">2026 • Today</span>
                  <p className="text-xs text-white/80 italic">“{cousin.reality2026}”</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
