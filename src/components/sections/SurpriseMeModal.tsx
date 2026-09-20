import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Shuffle, X, Calendar, MapPin } from 'lucide-react';
import { memoriesData } from '../../data/memories';
import { MemoryItem } from '../../types';

interface SurpriseMeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SurpriseMeModal: React.FC<SurpriseMeModalProps> = ({ isOpen, onClose }) => {
  const [randomMemory, setRandomMemory] = useState<MemoryItem>(memoriesData[0]);

  const rollRandom = () => {
    const idx = Math.floor(Math.random() * memoriesData.length);
    setRandomMemory(memoriesData[idx]);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-[#141628] border border-white/20 rounded-3xl max-w-lg w-full p-8 relative shadow-2xl space-y-6"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-white/60 hover:text-white rounded-full bg-white/5"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-xs font-semibold text-[#ffb703]">
          <Sparkles className="w-4 h-4" />
          Random Memory Unlocked!
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs text-white/50">
            <Calendar className="w-3.5 h-3.5" />
            <span>{randomMemory.year}</span>
            <span>•</span>
            <MapPin className="w-3.5 h-3.5 text-[#3a86ff]" />
            <span>{randomMemory.location}</span>
          </div>
          <h3 className="text-2xl font-bold text-white">{randomMemory.title}</h3>
          <p className="text-sm text-white/80 leading-relaxed font-light">{randomMemory.story}</p>

          {randomMemory.photos[0] && (
            <img src={randomMemory.photos[0]} alt={randomMemory.title} className="w-full h-48 object-cover rounded-2xl border border-white/10" />
          )}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          <button
            onClick={rollRandom}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-[#ff7a59] to-[#ffb703] hover:opacity-90 shadow-lg shadow-coral-500/20"
          >
            <Shuffle className="w-4 h-4" />
            Spin Another Memory
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-full text-xs font-medium text-white/60 hover:text-white"
          >
            Close
          </button>
        </div>
      </motion.div>
    </div>
  );
};
