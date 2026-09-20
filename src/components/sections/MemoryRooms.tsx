import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Home, Sparkles, Image as ImageIcon, Compass } from 'lucide-react';
import { MemoryRoom } from '../../types';

interface MemoryRoomsProps {
  rooms: MemoryRoom[];
}

export const MemoryRooms: React.FC<MemoryRoomsProps> = ({ rooms }) => {
  const [activeRoomIndex, setActiveRoomIndex] = useState(0);
  const activeRoom = rooms[activeRoomIndex];

  return (
    <section id="rooms" className="py-24 px-6 relative bg-[#0b0c16] overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-white/10 text-xs font-semibold text-[#b5179e] mb-4">
            <Home className="w-3.5 h-3.5" />
            Spatial Sanctuaries
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Memory Rooms
          </h2>
          <p className="text-white/60 text-sm md:text-base">
            Step through the rooms of our home where every corner holds a laugh, a secret, or a warm embrace.
          </p>
        </div>

        {/* Room Navigation Tabs */}
        <div className="flex items-center justify-start md:justify-center gap-3 overflow-x-auto pb-4 mb-12 scrollbar-none">
          {rooms.map((room, idx) => (
            <button
              key={room.id}
              onClick={() => setActiveRoomIndex(idx)}
              className={`px-5 py-3 rounded-2xl text-sm font-bold transition-all duration-300 whitespace-nowrap flex items-center gap-2 ${
                activeRoomIndex === idx
                  ? 'bg-gradient-to-r from-[#b5179e] to-[#3a86ff] text-white shadow-lg shadow-purple-500/25 scale-105'
                  : 'glass-card text-white/70 hover:text-white border border-white/10 hover:border-white/20'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>{room.title}</span>
            </button>
          ))}
        </div>

        {/* Active Room Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeRoom.id}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.4 }}
            className="space-y-12"
          >
            {/* Room Banner Description */}
            <div className="glass-panel p-8 md:p-10 rounded-3xl border border-white/15 text-center max-w-3xl mx-auto relative overflow-hidden">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#ffb703] block mb-2">
                {activeRoom.subtitle}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                {activeRoom.title}
              </h3>
              <p className="text-white/80 text-sm md:text-base leading-relaxed font-light mb-4">
                {activeRoom.description}
              </p>
              <span className="inline-block text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/60">
                Atmosphere: {activeRoom.atmosphere}
              </span>
            </div>

            {/* Spatial Items Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {activeRoom.items.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="glass-card rounded-3xl overflow-hidden border border-white/10 group hover:border-white/25 transition-all shadow-xl"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                      <div>
                        <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
                        <p className="text-xs text-white/70">{item.caption}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
