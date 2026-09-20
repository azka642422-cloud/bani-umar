import React, { useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls, Stars, Text, Html } from '@react-three/drei';
import * as THREE from 'three';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Compass, Heart, Camera, ArrowRight, Volume2, ShieldCheck, Palette, Sun, Smartphone, Monitor } from 'lucide-react';

// 3D Floating Polaroid / Memory Object Prototype
function FloatingMemoryCard({ position, rotation, color, title, subtitle, imageUrl }: {
  position: [number, number, number];
  rotation: [number, number, number];
  color: string;
  title: string;
  subtitle: string;
  imageUrl: string;
}) {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = rotation[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.8 + position[0]) * 0.1;
    }
  });

  return (
    <group ref={meshRef} position={position} rotation={rotation}>
      <Float speed={2} rotationIntensity={0.3} floatIntensity={0.6}>
        {/* Polaroid Card Frame */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[2.2, 2.7, 0.05]} />
          <meshStandardMaterial color="#fcfaf7" roughness={0.9} />
        </mesh>
        {/* Photo Area */}
        <mesh position={[0, 0.25, 0.03]}>
          <planeGeometry args={[1.8, 1.7]} />
          <meshBasicMaterial color={color} />
        </mesh>
      </Float>
    </group>
  );
}

function PrototypeSceneUniverse() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-auto">
      <Canvas
        camera={{ position: [0, 1.5, 6], fov: 55 }}
        gl={{ antialias: true, alpha: true }}
      >
        {/* Physically Believable Warm Lighting */}
        <ambientLight intensity={0.8} color="#fef3c7" />
        <directionalLight position={[5, 8, 5]} intensity={1.5} color="#ffeedb" />
        <pointLight position={[-4, 3, -2]} intensity={1.2} color="#dd5230" />

        {/* Floating Memory Cards / Polaroids */}
        <FloatingMemoryCard
          position={[-2.2, 0.5, -1]}
          rotation={[0.1, 0.3, -0.05]}
          color="#dd5230"
          title="The Beginning"
          subtitle="Surabaya 1960"
          imageUrl=""
        />
        <FloatingMemoryCard
          position={[2.2, -0.2, -1.5]}
          rotation={[-0.1, -0.4, 0.08]}
          color="#52796f"
          title="Road Trip 2015"
          subtitle="Mount Bromo"
          imageUrl=""
        />
        <FloatingMemoryCard
          position={[0, 1.2, -2.5]}
          rotation={[0, 0, 0]}
          color="#e07a5f"
          title="Lebaran Feast"
          subtitle="Grandma's House"
          imageUrl=""
        />

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

export const CinematicMemoryPrototype: React.FC<{ onApprove: () => void }> = ({ onApprove }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'palette' | 'lighting' | 'mobile'>('overview');

  return (
    <div className="relative w-full min-h-screen bg-[#141210] text-[#fcfaf7] overflow-y-auto selection:bg-[#dd5230] selection:text-white pb-24">
      {/* 3D Visual Prototype Canvas Background */}
      <div className="relative w-full h-[65vh] md:h-[75vh] overflow-hidden bg-gradient-to-b from-[#1c1815] via-[#141210] to-[#0f0e0c]">
        <PrototypeSceneUniverse />

        {/* Overlay Hero Text */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-4 max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#dd5230]/20 border border-[#dd5230]/30 text-xs uppercase tracking-widest text-[#fef3c7] font-semibold backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-[#dd5230]" />
              CREATIVE DIRECTION V2 • VISUAL PROTOTYPE
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight font-outfit text-[#fcfaf7]">
              BANI UMAR <span className="text-[#dd5230] font-light">Cinematic Memory</span>
            </h1>
            <p className="text-sm md:text-lg text-[#fcfaf7]/80 font-light max-w-xl mx-auto">
              “A family is not remembered through names alone. It is remembered through moments.”
            </p>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-6 left-0 right-0 text-center z-10 text-xs text-[#fcfaf7]/50 tracking-widest uppercase animate-bounce pointer-events-none">
          ↓ Scroll down to review Creative Direction & Specifications
        </div>
      </div>

      {/* Review Dashboard & Specification Details */}
      <div className="max-w-6xl mx-auto px-6 -mt-12 relative z-20 space-y-12">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 bg-[#1c1815]/90 backdrop-blur-xl p-2 rounded-2xl border border-white/10 shadow-2xl">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-5 py-2.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'overview' ? 'bg-[#dd5230] text-white shadow-lg' : 'text-[#fcfaf7]/70 hover:text-white'
            }`}
          >
            <Compass className="w-4 h-4" />
            1. Core Vision
          </button>
          <button
            onClick={() => setActiveTab('palette')}
            className={`px-5 py-2.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'palette' ? 'bg-[#dd5230] text-white shadow-lg' : 'text-[#fcfaf7]/70 hover:text-white'
            }`}
          >
            <Palette className="w-4 h-4" />
            2. Warm Palette & Materials
          </button>
          <button
            onClick={() => setActiveTab('lighting')}
            className={`px-5 py-2.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'lighting' ? 'bg-[#dd5230] text-white shadow-lg' : 'text-[#fcfaf7]/70 hover:text-white'
            }`}
          >
            <Sun className="w-4 h-4" />
            3. Lighting & Motion
          </button>
          <button
            onClick={() => setActiveTab('mobile')}
            className={`px-5 py-2.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'mobile' ? 'bg-[#dd5230] text-white shadow-lg' : 'text-[#fcfaf7]/70 hover:text-white'
            }`}
          >
            <Smartphone className="w-4 h-4" />
            4. Mobile Viewport Safeguards
          </button>
        </div>

        {/* Content Box */}
        <div className="bg-[#1c1815] border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl space-y-8">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div className="border-b border-white/10 pb-4">
                <span className="text-xs uppercase tracking-widest text-[#dd5230] font-bold">Chapter 01</span>
                <h2 className="text-3xl font-bold text-[#fcfaf7]">Living Memory Landscape</h2>
              </div>
              <p className="text-base text-[#fcfaf7]/80 leading-relaxed font-light">
                We are transitioning Bani Umar away from generic UI profile cards and cold 3D spheres. The website is now structured as an <strong>Interactive Cinematic Family Memory Story</strong>. 40 authentic family photos are treated as physical polaroids and memory artifacts floating within a tactile 3D world with dust particles, warm wood textures, and cinematic camera movement.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                <div className="p-6 rounded-2xl bg-[#141210] border border-white/10 space-y-2">
                  <h3 className="font-bold text-[#fef3c7]">Tactile Realism</h3>
                  <p className="text-xs text-[#fcfaf7]/70">Physical paper grain, warm wood, soft fabric, and natural depth-of-field blur.</p>
                </div>
                <div className="p-6 rounded-2xl bg-[#141210] border border-white/10 space-y-2">
                  <h3 className="font-bold text-[#fef3c7]">Continuous Journey</h3>
                  <p className="text-xs text-[#fcfaf7]/70">Smooth 3D dolly and camera transitions replacing abrupt page reloads.</p>
                </div>
                <div className="p-6 rounded-2xl bg-[#141210] border border-white/10 space-y-2">
                  <h3 className="font-bold text-[#fef3c7]">Emotional Resonance</h3>
                  <p className="text-xs text-[#fcfaf7]/70">Evoking genuine nostalgia: "We did not realize we were making memories; we were simply living them."</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'palette' && (
            <div className="space-y-6">
              <div className="border-b border-white/10 pb-4">
                <span className="text-xs uppercase tracking-widest text-[#dd5230] font-bold">Chapter 02</span>
                <h2 className="text-3xl font-bold text-[#fcfaf7]">Warm Natural Palette & Materials</h2>
              </div>
              <p className="text-base text-[#fcfaf7]/80 leading-relaxed font-light">
                Banishing cold neon colors and purple-blue AI gradients. We employ a physically believable warm palette inspired by golden hours, vintage photo albums, and cozy family homes.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 pt-4">
                <div className="p-4 rounded-2xl bg-[#fcfaf7] text-[#141210] space-y-1 shadow-md">
                  <div className="w-8 h-8 rounded-full bg-[#fcfaf7] border border-black/20" />
                  <span className="text-xs font-bold block">Warm Ivory</span>
                  <span className="text-[10px] opacity-60">#fcfaf7</span>
                </div>
                <div className="p-4 rounded-2xl bg-[#fef3c7] text-[#141210] space-y-1 shadow-md">
                  <div className="w-8 h-8 rounded-full bg-[#fef3c7]" />
                  <span className="text-xs font-bold block">Sunlight Cream</span>
                  <span className="text-[10px] opacity-60">#fef3c7</span>
                </div>
                <div className="p-4 rounded-2xl bg-[#dd5230] text-white space-y-1 shadow-md">
                  <div className="w-8 h-8 rounded-full bg-[#dd5230]" />
                  <span className="text-xs font-bold block">Terracotta</span>
                  <span className="text-[10px] opacity-60">#dd5230</span>
                </div>
                <div className="p-4 rounded-2xl bg-[#52796f] text-white space-y-1 shadow-md">
                  <div className="w-8 h-8 rounded-full bg-[#52796f]" />
                  <span className="text-xs font-bold block">Muted Olive</span>
                  <span className="text-[10px] opacity-60">#52796f</span>
                </div>
                <div className="p-4 rounded-2xl bg-[#8d5b4c] text-white space-y-1 shadow-md">
                  <div className="w-8 h-8 rounded-full bg-[#8d5b4c]" />
                  <span className="text-xs font-bold block">Warm Wood</span>
                  <span className="text-[10px] opacity-60">#8d5b4c</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'lighting' && (
            <div className="space-y-6">
              <div className="border-b border-white/10 pb-4">
                <span className="text-xs uppercase tracking-widest text-[#dd5230] font-bold">Chapter 03</span>
                <h2 className="text-3xl font-bold text-[#fcfaf7]">Lighting & Constant Subtle Life</h2>
              </div>
              <p className="text-base text-[#fcfaf7]/80 leading-relaxed font-light">
                Physically believable lighting mimicking morning sunlight, golden hour rim lighting, and warm indoor lamp glows. Micro-motion ensures the world never feels frozen: floating dust particles, swaying photo edges, and gentle camera breathing.
              </p>
              <div className="p-6 rounded-2xl bg-[#141210] border border-white/10 space-y-3">
                <h3 className="font-bold text-[#fef3c7]">Atmospheric Rules</h3>
                <ul className="text-xs text-[#fcfaf7]/70 space-y-2 list-disc list-inside">
                  <li>Zero harsh neon or violet-blue glowing drop shadows.</li>
                  <li>Volumetric ambient dust particles reacting softly to lighting.</li>
                  <li>Subtle object rotations and parallax depth layers on scroll.</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'mobile' && (
            <div className="space-y-6">
              <div className="border-b border-white/10 pb-4">
                <span className="text-xs uppercase tracking-widest text-[#dd5230] font-bold">Chapter 04</span>
                <h2 className="text-3xl font-bold text-[#fcfaf7]">Mobile Viewport Safeguards</h2>
              </div>
              <p className="text-base text-[#fcfaf7]/80 leading-relaxed font-light">
                Fixing all previous issues where mobile viewports were clipped at the bottom by address bars or improper sizing.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl bg-[#141210] border border-white/10 space-y-2">
                  <h3 className="font-bold text-[#fef3c7]">Modern Viewport Units</h3>
                  <p className="text-xs text-[#fcfaf7]/70">Using `100dvh`, `100svh`, and safe-area padding (`env(safe-area-inset-bottom)`) so no buttons or text ever get clipped.</p>
                </div>
                <div className="p-6 rounded-2xl bg-[#141210] border border-white/10 space-y-2">
                  <h3 className="font-bold text-[#fef3c7]">Adaptive Scaling</h3>
                  <p className="text-xs text-[#fcfaf7]/70">Tailored camera FOV and responsive card scaling specifically tuned for mobile portrait and landscape orientations.</p>
                </div>
              </div>
            </div>
          )}

          {/* Approval Action CTA */}
          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-xs text-[#fcfaf7]/60">
              ⚡ Please review the 3D prototype above and our Creative Direction V2 specifications.
            </div>
            <button
              onClick={onApprove}
              className="px-8 py-4 rounded-full font-bold text-white bg-gradient-to-r from-[#dd5230] to-[#e07a5f] hover:opacity-95 shadow-2xl shadow-[#dd5230]/30 transition-all flex items-center gap-3 text-sm"
            >
              <ShieldCheck className="w-5 h-5" />
              <span>Setujui Arah Visual Ini (Approve & Proceed)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
