import React, { useState, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls, Stars, Text, Html } from '@react-three/drei';
import * as THREE from 'three';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Compass, Camera, ArrowRight, ArrowLeft, Play, RotateCcw, ShieldCheck, Smartphone, Monitor, Film } from 'lucide-react';

interface PrototypeMemory {
  id: string;
  title: string;
  year: string;
  location: string;
  story: string;
  imageUrl: string;
  clusterPhotos?: string[];
}

const PROTOTYPE_MEMORIES: PrototypeMemory[] = [
  {
    id: "p1",
    title: "The Beginning in Surabaya",
    year: "1960",
    location: "Surabaya, East Java",
    story: "Where the Bani Umar journey started with a small house and big dreams.",
    imageUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
    clusterPhotos: [
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=400"
    ]
  },
  {
    id: "p2",
    title: "Legendary Bromo Road Trip",
    year: "2015",
    location: "Mount Bromo",
    story: "Three cars packed with 15 family members and bottles of emergency radiator water.",
    imageUrl: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "p3",
    title: "Lebaran Feast & Cauldron",
    year: "2018",
    location: "Grandma's House",
    story: "Opor ayam cooked for 8 hours and the legendary ketupat disappearing in minutes.",
    imageUrl: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800",
    clusterPhotos: [
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400"
    ]
  },
  {
    id: "p4",
    title: "Backyard Camping Chaos",
    year: "2020",
    location: "Malang",
    story: "When a tropical downpour turned our 10-person tent into indoor living room martabak night.",
    imageUrl: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "p5",
    title: "Still Growing & Thriving",
    year: "2026",
    location: "Multiple Cities",
    story: "Spanning generations and cities, yet forever connected by shared roots.",
    imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800"
  }
];

function FloatingMemoryPlane({ memory, isActive, progress }: { memory: PrototypeMemory; isActive: boolean; progress: number }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      const t = state.clock.elapsedTime;
      groupRef.current.position.y = Math.sin(t * 0.6 + Number(memory.id.slice(1))) * 0.08;
      groupRef.current.rotation.y = Math.sin(t * 0.4) * 0.04;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, isActive ? 0 : -3]}>
      {/* 3D Photo Frame Backdrop */}
      <mesh position={[0, 0, -0.05]}>
        <boxGeometry args={[3.2, 3.8, 0.05]} />
        <meshStandardMaterial color="#fcfaf7" roughness={0.8} />
      </mesh>
    </group>
  );
}

function Cinematic3DScene({ currentIndex }: { currentIndex: number }) {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.9} color="#fef3c7" />
        <directionalLight position={[4, 6, 4]} intensity={1.5} color="#ffeedb" />
        <pointLight position={[-3, 2, -2]} intensity={1.0} color="#dd5230" />

        {PROTOTYPE_MEMORIES.map((mem, idx) => (
          <group key={mem.id} visible={idx === currentIndex}>
            <FloatingMemoryPlane memory={mem} isActive={idx === currentIndex} progress={0} />
          </group>
        ))}
      </Canvas>
    </div>
  );
}

export const CinematicMotionPrototype: React.FC<{ onFullApproval: () => void }> = ({ onFullApproval }) => {
  const [stage, setStage] = useState<'opening' | 'story' | 'ending'>('opening');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Auto-advance story for cinematic feel
  useEffect(() => {
    if (stage === 'story' && isAutoPlay) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => {
          if (prev < PROTOTYPE_MEMORIES.length - 1) {
            return prev + 1;
          } else {
            setStage('ending');
            return prev;
          }
        });
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [stage, isAutoPlay]);

  const handleNext = () => {
    if (currentIndex < PROTOTYPE_MEMORIES.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setStage('ending');
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="relative w-full h-[100dvh] bg-[#141210] text-[#fcfaf7] overflow-hidden flex flex-col justify-between selection:bg-[#dd5230] selection:text-white">
      {/* CINEMATIC OPENING STAGE */}
      {stage === 'opening' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 z-30 bg-[#0f0e0c] flex flex-col items-center justify-center p-6 text-center"
        >
          <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#dd5230]/30 via-transparent to-transparent blur-3xl" />
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6 max-w-2xl relative z-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#dd5230]/20 border border-[#dd5230]/30 text-xs uppercase tracking-widest text-[#fef3c7] font-semibold backdrop-blur-md">
              <Film className="w-3.5 h-3.5 text-[#dd5230]" />
              CINEMATIC MOTION SYSTEM • PROTOTYPE
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight font-outfit text-[#fcfaf7]">
              BANI UMAR
            </h1>
            <p className="text-base md:text-xl text-[#fcfaf7]/80 font-light italic">
              “A family is not remembered through names alone. It is remembered through moments.”
            </p>
            <div className="pt-6">
              <button
                onClick={() => setStage('story')}
                className="px-8 py-4 rounded-full font-bold text-white bg-gradient-to-r from-[#dd5230] to-[#e07a5f] hover:opacity-95 shadow-2xl shadow-[#dd5230]/30 transition-all flex items-center gap-3 mx-auto text-sm"
              >
                <Play className="w-4 h-4 fill-white" />
                <span>Enter Cinematic Journey</span>
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* STORY JOURNEY STAGE */}
      {stage === 'story' && (
        <div className="relative w-full h-full flex flex-col justify-between p-6 md:p-12 z-20">
          <Cinematic3DScene currentIndex={currentIndex} />

          {/* Top Navbar / Progress */}
          <div className="relative z-20 flex items-center justify-between">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-xs text-[#fef3c7]">
              <Compass className="w-3.5 h-3.5 text-[#dd5230]" />
              <span>Memory {currentIndex + 1} of {PROTOTYPE_MEMORIES.length}</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsAutoPlay(!isAutoPlay)}
                className="px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-xs text-white/70 hover:text-white"
              >
                {isAutoPlay ? "Auto-Play: On" : "Auto-Play: Paused"}
              </button>
            </div>
          </div>

          {/* Center / Bottom Photo Showcase & Story Overlay */}
          <div className="relative z-20 max-w-4xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-6 items-center my-auto">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.05, y: -20 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="md:col-span-7 relative group"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/15 bg-[#1c1815]">
                <img
                  src={PROTOTYPE_MEMORIES[currentIndex].imageUrl}
                  alt={PROTOTYPE_MEMORIES[currentIndex].title}
                  className="w-full h-72 md:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 md:p-8 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#fef3c7]">
                    <span>{PROTOTYPE_MEMORIES[currentIndex].year}</span>
                    <span>•</span>
                    <span>{PROTOTYPE_MEMORIES[currentIndex].location}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white font-outfit">
                    {PROTOTYPE_MEMORIES[currentIndex].title}
                  </h2>
                  <p className="text-sm text-white/80 font-light leading-relaxed">
                    {PROTOTYPE_MEMORIES[currentIndex].story}
                  </p>
                </div>
              </div>

              {/* Supporting cluster photos if available */}
              {PROTOTYPE_MEMORIES[currentIndex].clusterPhotos && (
                <div className="absolute -bottom-6 -right-6 hidden md:flex items-center gap-3">
                  {PROTOTYPE_MEMORIES[currentIndex].clusterPhotos?.map((cp, idx) => (
                    <img
                      key={idx}
                      src={cp}
                      alt="Supporting memory"
                      className="w-20 h-20 rounded-2xl object-cover border-2 border-white/20 shadow-xl rotate-3 hover:rotate-0 transition-transform"
                    />
                  ))}
                </div>
              )}
            </motion.div>

            <div className="md:col-span-5 space-y-6 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#dd5230]/20 border border-[#dd5230]/30 text-xs font-semibold text-[#fef3c7]">
                <Camera className="w-3.5 h-3.5 text-[#dd5230]" />
                Cinematic Motion Preset Active
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white">
                Spatial Continuity & Camera Travel
              </h3>
              <p className="text-xs md:text-sm text-white/70 leading-relaxed font-light">
                Notice how the camera moves through 3D space with depth and parallax rather than standard page cuts.
              </p>

              <div className="flex items-center justify-center md:justify-start gap-4 pt-4">
                <button
                  onClick={handlePrev}
                  disabled={currentIndex === 0}
                  className="p-3 rounded-full bg-black/50 border border-white/15 text-white disabled:opacity-30 hover:bg-black/80 transition-all"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-[#dd5230] to-[#e07a5f] text-white font-semibold text-xs flex items-center gap-2 shadow-lg shadow-[#dd5230]/25 hover:opacity-95 transition-all"
                >
                  <span>{currentIndex === PROTOTYPE_MEMORIES.length - 1 ? "View Ending" : "Next Memory"}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Pagination Dots */}
          <div className="relative z-20 flex items-center justify-center gap-2 pb-4">
            {PROTOTYPE_MEMORIES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => { setCurrentIndex(idx); setIsAutoPlay(false); }}
                className={`h-2 rounded-full transition-all ${
                  idx === currentIndex ? 'w-8 bg-[#dd5230]' : 'w-2 bg-white/30 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </div>
      )}

      {/* ENDING CONSTELLATION STAGE */}
      {stage === 'ending' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 z-30 bg-gradient-to-b from-[#141210] via-[#1c1815] to-[#0f0e0c] flex flex-col items-center justify-center p-6 text-center"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="max-w-3xl space-y-8 glass-panel p-8 md:p-12 rounded-3xl border border-white/15 shadow-2xl relative"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#dd5230]/20 border border-[#dd5230]/30 text-xs uppercase tracking-widest text-[#fef3c7] font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#dd5230]" />
              BANI UMAR • Memory Landscape Reveal
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold text-white font-outfit">
              The Story Continues
            </h2>

            <p className="text-base md:text-lg text-white/80 font-light italic leading-relaxed">
              “We don't just inherit names. We inherit stories. Jokes. Journeys. Traditions. And a place where we belong.”
            </p>

            <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => { setStage('opening'); setCurrentIndex(0); }}
                className="px-8 py-4 rounded-full font-bold text-white bg-gradient-to-r from-[#dd5230] to-[#e07a5f] hover:opacity-95 shadow-xl shadow-[#dd5230]/30 transition-all flex items-center gap-3 text-sm"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Replay Cinematic Prototype</span>
              </button>

              <button
                onClick={onFullApproval}
                className="px-8 py-4 rounded-full font-bold text-[#141210] bg-[#fcfaf7] hover:bg-[#fef3c7] shadow-xl transition-all flex items-center gap-3 text-sm"
              >
                <ShieldCheck className="w-5 h-5 text-[#dd5230]" />
                <span>Animasi Sudah Cocok (Approve Motion System)</span>
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};
