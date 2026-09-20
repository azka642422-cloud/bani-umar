import React from 'react';
import { motion } from 'motion/react';
import { Compass, Calendar, MapPin, Sparkles } from 'lucide-react';
import { timelineData } from '../../data/timeline';

export const TimelineGatheringSection: React.FC = () => {
  return (
    <section className="py-24 px-6 relative bg-gradient-to-b from-[#0b0c16] via-[#141228] to-[#0b0c16] overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-white/10 text-xs font-semibold text-[#b5179e] mb-4">
            <Compass className="w-3.5 h-3.5" />
            Historic Journey
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Bani Umar Timeline
          </h2>
          <p className="text-white/60 text-sm md:text-base">
            From Kakek Umar's foundation in Surabaya to the bustling multi-branch family of today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {timelineData.map((item, idx) => (
            <div key={idx} className="glass-card p-6 rounded-3xl border border-white/10 space-y-4 shadow-xl">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-[#ffb703] px-3 py-1 rounded-full bg-white/5 border border-white/10">
                  {item.year}
                </span>
                <span className="text-xs text-white/50">{item.category}</span>
              </div>
              <h3 className="text-xl font-bold text-white">{item.title}</h3>
              <p className="text-xs md:text-sm text-white/75 leading-relaxed font-light">
                {item.description}
              </p>
              {item.photos[0] && (
                <img src={item.photos[0]} alt={item.title} className="w-full h-36 object-cover rounded-2xl border border-white/10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
