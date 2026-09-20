import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

export const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscillatorsRef = useRef<OscillatorNode[]>([]);
  const gainNodeRef = useRef<GainNode | null>(null);

  const toggleAudio = () => {
    if (!isPlaying) {
      try {
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        const ctx = new AudioContextClass();
        audioCtxRef.current = ctx;

        const masterGain = ctx.createGain();
        masterGain.gain.setValueAtTime(0.05, ctx.currentTime);
        masterGain.connect(ctx.destination);
        gainNodeRef.current = masterGain;

        // Gentle relaxing chord frequencies (Pentatonic/Warm cluster: C3, G3, C4, E4, G4)
        const freqs = [130.81, 196.00, 261.63, 329.63, 392.00];
        const oscs: OscillatorNode[] = [];

        freqs.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
          osc.frequency.setValueAtTime(freq, ctx.currentTime);

          const lfo = ctx.createOscillator();
          lfo.frequency.setValueAtTime(0.1 + idx * 0.05, ctx.currentTime);
          const lfoGain = ctx.createGain();
          lfoGain.gain.setValueAtTime(2, ctx.currentTime);
          lfo.connect(lfoGain);
          lfoGain.connect(osc.frequency);
          lfo.start();

          const oscGain = ctx.createGain();
          oscGain.gain.setValueAtTime(0.08 / freqs.length, ctx.currentTime);
          osc.connect(oscGain);
          oscGain.connect(masterGain);

          osc.start();
          oscs.push(osc);
        });

        oscillatorsRef.current = oscs;
        setIsPlaying(true);
      } catch (e) {
        console.error("Audio context error:", e);
      }
    } else {
      if (audioCtxRef.current) {
        oscillatorsRef.current.forEach(osc => {
          try { osc.stop(); } catch {}
        });
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
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-2.5 rounded-full backdrop-blur-md transition-all duration-300 shadow-lg ${
        isPlaying
          ? 'bg-gradient-to-r from-coral-500/85 to-orange-500/85 text-white shadow-coral-500/25 animate-pulse'
          : 'glass-panel text-white/80 hover:text-white hover:border-white/30'
      }`}
      title={isPlaying ? "Mute ambient music" : "Play ambient music"}
      style={{
        background: isPlaying ? 'linear-gradient(135deg, #ff7a59 0%, #ffb703 100%)' : 'rgba(15, 16, 32, 0.8)'
      }}
    >
      {isPlaying ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
      <span className="text-xs font-medium tracking-wide flex items-center gap-1.5">
        <Music className="w-3.5 h-3.5" />
        {isPlaying ? "Ambient Sound On" : "Soundtrack"}
      </span>
    </button>
  );
};
