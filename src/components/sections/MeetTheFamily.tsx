import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Users, Heart, Sparkles, Star } from 'lucide-react';
import { FamilyMember } from '../../types';

interface MeetTheFamilyProps {
  members: FamilyMember[];
}

export const MeetTheFamily: React.FC<MeetTheFamilyProps> = ({ members }) => {
  const [selectedMember, setSelectedMember] = useState<FamilyMember>(members[0]);

  return (
    <section id="family" className="py-24 px-6 relative bg-[#0b0c16] overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-coral-500/10 via-orange-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-white/10 text-xs font-semibold text-[#ffb703] mb-4">
            <Users className="w-3.5 h-3.5" />
            Constellation of Us
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Meet the Family
          </h2>
          <p className="text-white/60 text-sm md:text-base">
            Four unique orbits, one shared gravity. Click or hover on each family member to discover their heart in our universe.
          </p>
        </div>

        {/* Interactive Constellation Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Member Selection Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {members.map((member) => {
              const isSelected = selectedMember.id === member.id;
              return (
                <motion.div
                  key={member.id}
                  onClick={() => setSelectedMember(member)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className={`cursor-pointer p-5 rounded-3xl transition-all duration-300 relative overflow-hidden ${
                    isSelected
                      ? 'glass-panel border-2 border-[#ff7a59] shadow-lg shadow-coral-500/20'
                      : 'glass-card border border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center gap-4 mb-3">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-14 h-14 rounded-2xl object-cover border-2 border-white/20 shadow-md"
                    />
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#ff7a59] block">
                        {member.role}
                      </span>
                      <h3 className="text-lg font-bold text-white">{member.name}</h3>
                    </div>
                  </div>
                  <p className="text-xs text-white/70 line-clamp-2 leading-relaxed">
                    “{member.quote}”
                  </p>
                  {isSelected && (
                    <div
                      className="absolute top-0 right-0 w-2 h-full"
                      style={{ backgroundColor: member.color }}
                    />
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Active Member Cinematic Spotlight */}
          <div className="lg:col-span-7">
            <motion.div
              key={selectedMember.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="glass-panel p-8 md:p-10 rounded-3xl border border-white/15 relative overflow-hidden shadow-2xl"
            >
              <div
                className="absolute -right-20 -top-20 w-64 h-64 rounded-full blur-3xl opacity-20 pointer-events-none"
                style={{ backgroundColor: selectedMember.color }}
              />

              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="relative">
                  <img
                    src={selectedMember.avatar}
                    alt={selectedMember.name}
                    className="w-40 h-40 md:w-48 md:h-48 rounded-3xl object-cover shadow-2xl border-4 border-white/15"
                  />
                  <div
                    className="absolute -bottom-3 -right-3 px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg"
                    style={{ backgroundColor: selectedMember.color }}
                  >
                    {selectedMember.role}
                  </div>
                </div>

                <div className="flex-1 text-center md:text-left space-y-4">
                  <div className="inline-flex items-center gap-1.5 text-xs text-[#ffb703] font-medium bg-white/5 px-3 py-1 rounded-full border border-white/10">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    Character Spotlight
                  </div>

                  <h3 className="text-3xl font-extrabold text-white">
                    {selectedMember.name}
                  </h3>

                  <blockquote className="text-base font-medium text-white/90 italic">
                    “{selectedMember.quote}”
                  </blockquote>

                  <p className="text-sm text-white/70 leading-relaxed">
                    {selectedMember.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
