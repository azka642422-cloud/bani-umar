import React, { useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls, Stars, Text, Html } from '@react-three/drei';
import * as THREE from 'three';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Compass, Camera, ArrowRight, Play, RotateCcw, ShieldCheck, DoorOpen, Car, BookOpen, Film } from 'lucide-react';

// 3D House, Door, Living Room, Car, and Photo Portal Prototype Component
function ExteriorHouse({ doorOpen, onOpenDoor }: { doorOpen: boolean; onOpenDoor: () => void }) {
  const doorRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (doorRef.current) {
      // Smooth swing open for door
      const targetRotation = doorOpen ? -Math.PI / 2.2 : 0;
      doorRef.current.rotation.y = THREE.MathUtils.lerp(doorRef.current.rotation.y, targetRotation, 0.08);
    }
  });

  return (
    <group position={[0, -1, -3]}>
      {/* Ground / Yard */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry args={[25, 25]} />
        <meshStandardMaterial color="#4a5d4e" roughness={0.9} />
      </mesh>

      {/* House Walls */}
      <mesh position={[0, 2, -2]}>
        <boxGeometry args={[6, 4, 5]} />
        <meshStandardMaterial color="#f4e4c1" roughness={0.8} />
      </mesh>

      {/* House Roof (Prism approximation or sloping box) */}
      <mesh position={[0, 4.5, -2]} rotation={[0, Math.PI / 4, 0]}>
        <coneGeometry args={[4.8, 2, 4]} />
        <meshStandardMaterial color="#8d5b4c" roughness={0.7} />
      </mesh>

      {/* Front Door Frame */}
      <mesh position={[0, 1, 0.5]}>
        <boxGeometry args={[1.4, 2.6, 0.2]} />
        <meshStandardMaterial color="#5c3a21" roughness={0.6} />
      </mesh>

      {/* Swing Door */}
      <group ref={doorRef} position={[-0.6, 0, 0.6]}>
        <mesh position={[0.6, 1, 0]}>
          <boxGeometry args={[1.2, 2.4, 0.1]} />
          <meshStandardMaterial color="#8d5b4c" roughness={0.5} emissive="#ffb703" emissiveIntensity={doorOpen ? 0.4 : 0.0} />
        </mesh>
      </group>

      {/* Interactive Door Trigger HTML */}
      <Html position={[0, 2.2, 1]}>
        <button
          onClick={onOpenDoor}
          className="px-4 py-2 rounded-full bg-[#dd5230] text-white font-bold text-xs shadow-2xl hover:bg-[#c2411e] transition-all flex items-center gap-2 animate-bounce cursor-pointer whitespace-nowrap"
        >
          <DoorOpen className="w-4 h-4" />
          <span>{doorOpen ? "Entering Through Door..." : "Open Front Door"}</span>
        </button>
      </Html>
    </group>
  );
}

function LivingRoomScene({ active }: { active: boolean }) {
  if (!active) return null;

  return (
    <group position={[0, -1, -3]}>
      {/* Room Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="#8d5b4c" roughness={0.5} />
      </mesh>

      {/* Wooden Table */}
      <group position={[0, 0.5, 0]}>
        {/* Table top */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[3, 0.15, 2]} />
          <meshStandardMaterial color="#5c3a21" roughness={0.4} />
        </mesh>
        {/* Photo Album on Table */}
        <mesh position={[0, 0.12, 0]} rotation={[-0.1, 0.2, 0]}>
          <boxGeometry args={[1.2, 0.1, 0.9]} />
          <meshStandardMaterial color="#b5179e" roughness={0.3} emissive="#ffb703" emissiveIntensity={0.2} />
        </mesh>
      </group>

      {/* Warm Room Lighting */}
      <pointLight position={[0, 3, 0]} intensity={2.5} color="#ffeedb" distance={8} />
    </group>
  );
}

function CarInteriorScene({ active }: { active: boolean }) {
  if (!active) return null;

  return (
    <group position={[0, -1.2, -2]}>
      {/* Dashboard */}
      <mesh position={[0, 0.2, 0]}>
        <boxGeometry args={[4, 0.8, 1.5]} />
        <meshStandardMaterial color="#2b2b2b" roughness={0.6} />
      </mesh>

      {/* Rearview Mirror reflecting a memory photo */}
      <group position={[0, 1.8, -0.5]}>
        <mesh>
          <boxGeometry args={[1.2, 0.4, 0.05]} />
          <meshStandardMaterial color="#e9c46a" roughness={0.2} emissive="#ffb703" emissiveIntensity={0.5} />
        </mesh>
      </group>

      <pointLight position={[0, 2, 0]} intensity={1.5} color="#fef3c7" />
    </group>
  );
}

function PrototypeUniverseCanvas({ stage, doorOpen, onOpenDoor }: { stage: string; doorOpen: boolean; onOpenDoor: () => void }) {
  return (
    <div className="absolute inset-0 z-0 pointer-events-auto">
      <Canvas
        camera={{ position: [0, 1, 4], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={stage === 'exterior' ? 1.2 : 0.8} color="#fef3c7" />
        <directionalLight position={[5, 8, 5]} intensity={stage === 'exterior' ? 2 : 1} color="#ffeedb" />

        {stage === 'exterior' && <ExteriorHouse doorOpen={doorOpen} onOpenDoor={onOpenDoor} />}
        {stage === 'livingroom' && <LivingRoomScene active={true} />}
        {stage === 'car' && <CarInteriorScene active={true} />}

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2 + 0.05}
          minPolarAngle={Math.PI / 3}
          rotateSpeed={0.3}
        />
      </Canvas>
    </div>
  );
}

export const HouseOfMemoriesPrototype: React.FC<{ onFullApproval: () => void }> = ({ onFullApproval }) => {
  const [stage, setStage] = useState<'exterior' | 'livingroom' | 'album' | 'car' | 'destination'>('exterior');
  const [doorOpen, setDoorOpen] = useState(false);

  const handleOpenDoor = () => {
    setDoorOpen(true);
    setTimeout(() => {
      setStage('livingroom');
    }, 1200);
  };

  return (
    <div className="relative w-full h-[100dvh] bg-[#141210] text-[#fcfaf7] overflow-hidden flex flex-col justify-between selection:bg-[#dd5230] selection:text-white">
      <PrototypeUniverseCanvas stage={stage} doorOpen={doorOpen} onOpenDoor={handleOpenDoor} />

      {/* Top Bar / Journey Indicator */}
      <div className="relative z-20 p-6 flex items-center justify-between pointer-events-none">
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-xs text-[#fef3c7] pointer-events-auto">
          <Compass className="w-3.5 h-3.5 text-[#dd5230]" />
          <span className="capitalize">Journey Stage: {stage}</span>
        </div>
        <div className="text-xs text-white/50 pointer-events-auto">
          BANI UMAR • The House Where Memories Live
        </div>
      </div>

      {/* Stage Narrative HUD Overlay */}
      <div className="relative z-20 p-6 md:p-12 max-w-2xl mx-auto text-center pointer-events-none my-auto">
        {stage === 'exterior' && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4 pointer-events-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#dd5230]/20 border border-[#dd5230]/30 text-xs uppercase tracking-widest text-[#fef3c7] font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#dd5230]" />
              SCENE 01 — OUTSIDE THE HOUSE
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight font-outfit text-white">
              A Home Full of Stories
            </h1>
            <p className="text-sm md:text-base text-white/80 font-light">
              Golden hour sunlight falls gently on the front door. Click the door to enter the Bani Umar memory world.
            </p>
            {!doorOpen && (
              <div className="pt-4">
                <button
                  onClick={handleOpenDoor}
                  className="px-8 py-4 rounded-full font-bold text-white bg-gradient-to-r from-[#dd5230] to-[#e07a5f] hover:opacity-95 shadow-2xl shadow-[#dd5230]/30 transition-all inline-flex items-center gap-3 text-sm"
                >
                  <DoorOpen className="w-5 h-5" />
                  <span>Open Door & Enter House</span>
                </button>
              </div>
            )}
          </motion.div>
        )}

        {stage === 'livingroom' && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4 pointer-events-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#52796f]/20 border border-[#52796f]/30 text-xs uppercase tracking-widest text-[#fef3c7] font-semibold">
              <BookOpen className="w-3.5 h-3.5 text-[#52796f]" />
              SCENE 02 — LIVING ROOM & PHOTO ALBUM
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-outfit">
              The Living Room of Memories
            </h2>
            <p className="text-sm text-white/80 font-light">
              Warm interior lighting, wooden table, and the family photo album waiting to be opened.
            </p>
            <div className="pt-4">
              <button
                onClick={() => setStage('album')}
                className="px-8 py-4 rounded-full font-bold text-white bg-gradient-to-r from-[#52796f] to-[#3a86ff] hover:opacity-95 shadow-2xl transition-all inline-flex items-center gap-3 text-sm"
              >
                <BookOpen className="w-5 h-5" />
                <span>Open Photo Album</span>
              </button>
            </div>
          </motion.div>
        )}

        {stage === 'album' && (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="space-y-6 pointer-events-auto glass-panel p-8 rounded-3xl border border-white/15">
            <span className="text-xs uppercase tracking-widest text-[#ffb703] font-bold">Photo Portal Transition</span>
            <h3 className="text-2xl font-bold text-white">Surabaya 1960 — Kakek Umar</h3>
            <p className="text-xs md:text-sm text-white/80 leading-relaxed font-light">
              The camera enters the photograph page, transforming the room into the family road trip and car journey.
            </p>
            <div className="pt-2">
              <button
                onClick={() => setStage('car')}
                className="px-8 py-4 rounded-full font-bold text-white bg-gradient-to-r from-[#dd5230] to-[#e07a5f] hover:opacity-95 shadow-xl transition-all inline-flex items-center gap-3 text-sm mx-auto"
              >
                <Car className="w-5 h-5" />
                <span>Enter Family Car Journey →</span>
              </button>
            </div>
          </motion.div>
        )}

        {stage === 'car' && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4 pointer-events-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#3a86ff]/20 border border-[#3a86ff]/30 text-xs uppercase tracking-widest text-[#fef3c7] font-semibold">
              <Car className="w-3.5 h-3.5 text-[#3a86ff]" />
              SCENE 04 — MEMORY ROAD TRIP
            </div>
            <h2 className="text-3xl font-bold text-white font-outfit">
              Through the Rearview Mirror
            </h2>
            <p className="text-sm text-white/80 font-light">
              Traveling across cities and decades. The rearview mirror reflects our next memory destination.
            </p>
            <div className="pt-4">
              <button
                onClick={() => setStage('destination')}
                className="px-8 py-4 rounded-full font-bold text-white bg-gradient-to-r from-[#3a86ff] to-[#b5179e] hover:opacity-95 shadow-2xl transition-all inline-flex items-center gap-3 text-sm"
              >
                <Sparkles className="w-5 h-5" />
                <span>Arrive at Final Celebration Scene →</span>
              </button>
            </div>
          </motion.div>
        )}

        {stage === 'destination' && (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="space-y-6 pointer-events-auto glass-panel p-8 rounded-3xl border border-white/15">
            <Sparkles className="w-8 h-8 text-[#ffb703] mx-auto" />
            <h3 className="text-3xl font-bold text-white font-outfit">The Story Continues</h3>
            <p className="text-sm text-white/80 italic leading-relaxed">
              “We don't just inherit names. We inherit stories. Jokes. Journeys. Traditions. And a place where we belong.”
            </p>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => setStage('exterior')}
                className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-xs text-white transition-all flex items-center gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Replay Journey</span>
              </button>
              <button
                onClick={onFullApproval}
                className="px-8 py-3 rounded-full font-bold text-white bg-gradient-to-r from-[#dd5230] to-[#e07a5f] hover:opacity-95 shadow-xl transition-all flex items-center gap-2 text-sm"
              >
                <ShieldCheck className="w-5 h-5" />
                <span>Animasi Sudah Cocok (Approve New Concept)</span>
              </button>
            </div>
          </motion.div>
        )}
      </div>

      {/* Bottom Navigation / Stage Selectors */}
      <div className="relative z-20 p-6 flex items-center justify-center gap-2 pointer-events-none">
        {(['exterior', 'livingroom', 'car', 'destination'] as const).map((s) => (
          <button
            key={s}
            onClick={() => { setStage(s); if(s==='livingroom') setDoorOpen(true); }}
            className={`px-3 py-1.5 rounded-full text-[10px] font-semibold uppercase tracking-wider transition-all pointer-events-auto ${
              stage === s || (s==='livingroom' && stage==='album') ? 'bg-[#dd5230] text-white' : 'bg-black/40 text-white/50 hover:text-white'
            }`}
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  );
};
