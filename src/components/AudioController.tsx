import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

export const AudioController: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscillatorsRef = useRef<OscillatorNode[]>([]);

  const toggleAudio = () => {
    if (!isPlaying) {
      try {
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        const ctx = new AudioContextClass();
        audioCtxRef.current = ctx;

        const masterGain = ctx.createGain();
        masterGain.gain.setValueAtTime(0.04, ctx.currentTime);
        masterGain.connect(ctx.destination);

        // Warm uplifting chord cluster: C3, G3, E4, G4, B4
        const freqs = [130.81, 196.00, 329.63, 392.00, 493.88];
        const oscs: OscillatorNode[] = [];

        freqs.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
          osc.frequency.setValueAtTime(freq, ctx.currentTime);

          const lfo = ctx.createOscillator();
          lfo.frequency.setValueAtTime(0.08 + idx * 0.03, ctx.currentTime);
          const lfoGain = ctx.createGain();
          lfoGain.gain.setValueAtTime(1.5, ctx.currentTime);
          lfo.connect(lfoGain);
          lfoGain.connect(osc.frequency);
          lfo.start();

          const oscGain = ctx.createGain();
          oscGain.gain.setValueAtTime(0.06 / freqs.length, ctx.currentTime);
          osc.connect(oscGain);
          oscGain.connect(masterGain);

          osc.start();
          oscs.push(osc);
        });

        oscillatorsRef.current = oscs;
        setIsPlaying(true);
      } catch (e) {
        console.error(e);
      }
    } else {
      if (audioCtxRef.current) {
        oscillatorsRef.current.forEach(o => { try { o.stop(); } catch {} });
        audioCtxRef.current.close();
        audioCtxRef.current = null;
      }
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    return () => {
      if (audioCtxRef.current) {
        try { audioCtxRef.current.close(); } catch {}
      }
    };
  }, []);

  return (
    <button
      onClick={toggleAudio}
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-2.5 rounded-full backdrop-blur-md transition-all duration-300 shadow-xl ${
        isPlaying
          ? 'bg-gradient-to-r from-coral-500 to-yellow-500 text-white shadow-coral-500/25 animate-pulse'
          : 'bg-[#141628]/80 text-white/80 hover:text-white border border-white/15'
      }`}
      style={{
        background: isPlaying ? 'linear-gradient(135deg, #ff7a59 0%, #ffb703 100%)' : 'rgba(20, 22, 40, 0.85)'
      }}
    >
      {isPlaying ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
      <span className="text-xs font-medium tracking-wide flex items-center gap-1.5">
        <Music className="w-3.5 h-3.5" />
        {isPlaying ? "Soundtrack On" : "Soundtrack"}
      </span>
    </button>
  );
};
