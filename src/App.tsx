import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { HouseOfMemoriesPrototype } from './components/prototype/HouseOfMemoriesPrototype';

export default function App() {
  const [isFullyApproved, setIsFullyApproved] = useState(false);

  const handleFullApproval = () => {
    confetti({
      particleCount: 160,
      spread: 120,
      origin: { y: 0.5 },
      colors: ['#dd5230', '#fef3c7', '#52796f', '#8d5b4c', '#3a86ff']
    });
    setIsFullyApproved(true);
  };

  if (isFullyApproved) {
    return (
      <div className="min-h-screen bg-[#141210] text-[#fcfaf7] flex items-center justify-center p-6 text-center">
        <div className="max-w-md space-y-6 glass-panel p-8 rounded-3xl border border-white/15 shadow-2xl">
          <div className="w-16 h-16 rounded-full bg-[#dd5230]/20 flex items-center justify-center mx-auto text-[#dd5230] text-2xl font-bold">
            ✓
          </div>
          <h2 className="text-2xl font-bold text-[#fcfaf7]">"The House Where Memories Live" Disetujui!</h2>
          <p className="text-sm text-[#fcfaf7]/80">
            Konsep baru perjalanan kamera kontinu melalui rumah, ruang keluarga, album foto, mobil, dan destinasi kenangan telah disetujui sepenuhnya!
          </p>
          <button
            onClick={() => setIsFullyApproved(false)}
            className="px-6 py-3 rounded-full bg-[#1c1815] border border-white/20 text-xs text-[#fcfaf7]/70 hover:text-white"
          >
            Kembali ke House Journey
          </button>
        </div>
      </div>
    );
  }

  return (
    <HouseOfMemoriesPrototype onFullApproval={handleFullApproval} />
  );
}



