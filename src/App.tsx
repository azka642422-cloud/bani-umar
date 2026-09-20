import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { CinematicMemoryPrototype } from './components/prototype/CinematicMemoryPrototype';

export default function App() {
  const [isApproved, setIsApproved] = useState(false);

  const handleApprove = () => {
    confetti({
      particleCount: 120,
      spread: 100,
      origin: { y: 0.5 },
      colors: ['#dd5230', '#fef3c7', '#52796f', '#8d5b4c']
    });
    setIsApproved(true);
  };

  if (isApproved) {
    return (
      <div className="min-h-screen bg-[#141210] text-[#fcfaf7] flex items-center justify-center p-6 text-center">
        <div className="max-w-md space-y-6 glass-panel p-8 rounded-3xl border border-white/15 shadow-2xl">
          <div className="w-16 h-16 rounded-full bg-[#dd5230]/20 flex items-center justify-center mx-auto text-[#dd5230] text-2xl font-bold">
            ✓
          </div>
          <h2 className="text-2xl font-bold text-[#fcfaf7]">Arah Visual Disetujui!</h2>
          <p className="text-sm text-[#fcfaf7]/80">
            Terima kasih! Visual direction, palette, lighting, dan mobile safeguards telah disetujui. Anda dapat memberikan instruksi selanjutnya untuk melanjutkan pembangunan penuh seluruh website Bani Umar.
          </p>
          <button
            onClick={() => setIsApproved(false)}
            className="px-6 py-3 rounded-full bg-[#1c1815] border border-white/20 text-xs text-[#fcfaf7]/70 hover:text-white"
          >
            Kembali ke Prototype Review
          </button>
        </div>
      </div>
    );
  }

  return (
    <CinematicMemoryPrototype onApprove={handleApprove} />
  );
}

