import React, { useState } from 'react';
import { Sparkles, Shuffle, Volume2, VolumeX, Menu, X } from 'lucide-react';

interface NavbarBaniUmarProps {
  onOpenSurprise: () => void;
  onReset: () => void;
}

export const NavbarBaniUmar: React.FC<NavbarBaniUmarProps> = ({ onOpenSurprise, onReset }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 py-4 glass-panel border-b border-white/10 shadow-xl">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <button
          onClick={onReset}
          className="flex items-center gap-2.5 text-left group"
        >
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#ff7a59] via-[#ffb703] to-[#3a86ff] p-[2px] shadow-lg shadow-coral-500/20">
            <div className="w-full h-full bg-[#0b0c16] rounded-[14px] flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-[#ff7a59]" />
            </div>
          </div>
          <div>
            <span className="text-base font-extrabold tracking-tight text-white block font-outfit">
              BANI UMAR
            </span>
            <span className="text-[10px] text-white/50 tracking-widest uppercase block font-medium">
              7 Branches • Countless Stories
            </span>
          </div>
        </button>

        <div className="flex items-center gap-3">
          <button
            onClick={onOpenSurprise}
            className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-[#ff7a59] to-[#ffb703] hover:opacity-90 shadow-md shadow-coral-500/20 transition-all"
          >
            <Shuffle className="w-3.5 h-3.5" />
            Surprise Me!
          </button>
        </div>
      </div>
    </header>
  );
};
