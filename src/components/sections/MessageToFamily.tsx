import React from 'react';
import { motion } from 'motion/react';
import { Heart, Sparkles } from 'lucide-react';

export const MessageToFamily: React.FC = () => {
  const verses = [
    "We grew.",
    "We changed.",
    "We went different directions.",
    "But somehow...",
    "We always found our way back."
  ];

  return (
    <section className="py-32 px-6 relative bg-[#0b0c16] text-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#ff7a59]/5 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 space-y-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-white/10 text-xs font-semibold text-[#ff7a59]">
          <Heart className="w-3.5 h-3.5 fill-current" />
          The Eternal Thread
        </div>

        <div className="space-y-6">
          {verses.map((verse, idx) => (
            <motion.p
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className={`font-outfit font-bold tracking-tight ${
                idx === 4
                  ? 'text-3xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#ff7a59] via-[#ffb703] to-[#3a86ff]'
                  : 'text-2xl md:text-4xl text-white/80'
              }`}
            >
              {verse}
            </motion.p>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="pt-12 max-w-2xl mx-auto glass-panel p-8 md:p-10 rounded-3xl border border-white/15 shadow-2xl"
        >
          <p className="text-xl md:text-2xl font-medium text-white italic">
            “Because wherever life takes us… Family will always be home.”
          </p>
        </motion.div>
      </div>
    </section>
  );
};
