import React from 'react';
import { motion } from 'motion/react';
import { Utensils, Smile, Sun, Camera, Heart } from 'lucide-react';
import { LittleThing } from '../../types';

interface LittleThingsProps {
  things: LittleThing[];
}

export const LittleThings: React.FC<LittleThingsProps> = ({ things }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Utensils': return <Utensils className="w-6 h-6 text-[#ff7a59]" />;
      case 'Smile': return <Smile className="w-6 h-6 text-[#ffb703]" />;
      case 'Sun': return <Sun className="w-6 h-6 text-[#3a86ff]" />;
      default: return <Camera className="w-6 h-6 text-[#b5179e]" />;
    }
  };

  return (
    <section className="py-24 px-6 relative bg-gradient-to-b from-[#0b0c16] via-[#121326] to-[#0b0c16] overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-white/10 text-xs font-semibold text-[#ff7a59] mb-4">
            <Heart className="w-3.5 h-3.5 text-[#ff7a59]" />
            Magic in the Mundane
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            The Little Things
          </h2>
          <p className="text-white/60 text-sm md:text-base">
            It was never about the grand events. It was the random dinners, terrible jokes, and knowing someone was always waiting.
          </p>
        </div>

        {/* Grid of Little Things */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {things.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card p-8 rounded-3xl border border-white/10 relative overflow-hidden flex flex-col justify-between group hover:border-white/25 transition-all shadow-xl"
            >
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-10 group-hover:opacity-25 transition-opacity"
                style={{ backgroundColor: item.color }}
              />

              <div>
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 shadow-md border border-white/10"
                  style={{ backgroundColor: `${item.color}15` }}
                >
                  {getIcon(item.iconName)}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-xs md:text-sm text-white/70 leading-relaxed font-light italic">
                  “{item.quote}”
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs text-white/40">
                <span>Everyday memory</span>
                <span className="font-semibold" style={{ color: item.color }}>#{item.id}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
