import React, { useState } from 'react';
import { X, Save, Edit3, Plus, Trash2, Users } from 'lucide-react';
import { FamilyData } from '../types';

interface CustomizerModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: FamilyData;
  onSave: (newData: FamilyData) => void;
}

export const CustomizerModal: React.FC<CustomizerModalProps> = ({
  isOpen,
  onClose,
  data,
  onSave
}) => {
  const [formData, setFormData] = useState<FamilyData>(data);
  const [activeTab, setActiveTab] = useState<'general' | 'members' | 'milestones'>('general');

  if (!isOpen) return null;

  const handleGeneralChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleMemberChange = (index: number, field: string, value: string) => {
    const updatedMembers = [...formData.members];
    updatedMembers[index] = { ...updatedMembers[index], [field]: value };
    setFormData(prev => ({ ...prev, members: updatedMembers }));
  };

  const handleMilestoneChange = (index: number, field: string, value: string) => {
    const updatedMilestones = [...formData.milestones];
    updatedMilestones[index] = { ...updatedMilestones[index], [field]: value };
    setFormData(prev => ({ ...prev, milestones: updatedMilestones }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="bg-[#141628] border border-white/15 rounded-3xl w-full max-w-3xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 bg-[#191b30]">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-coral-500/20 text-coral-400 rounded-xl">
              <Edit3 className="w-5 h-5 text-[#ff7a59]" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Customize Family Universe</h3>
              <p className="text-xs text-white/60">Personalize names, stories, and milestones for your family</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-white/60 hover:text-white rounded-xl hover:bg-white/5 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-white/10 bg-[#121324] px-6 gap-6">
          <button
            onClick={() => setActiveTab('general')}
            className={`py-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'general'
                ? 'border-[#ff7a59] text-[#ff7a59]'
                : 'border-transparent text-white/60 hover:text-white'
            }`}
          >
            General Details
          </button>
          <button
            onClick={() => setActiveTab('members')}
            className={`py-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'members'
                ? 'border-[#ff7a59] text-[#ff7a59]'
                : 'border-transparent text-white/60 hover:text-white'
            }`}
          >
            Family Members ({formData.members.length})
          </button>
          <button
            onClick={() => setActiveTab('milestones')}
            className={`py-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'milestones'
                ? 'border-[#ff7a59] text-[#ff7a59]'
                : 'border-transparent text-white/60 hover:text-white'
            }`}
          >
            Milestones ({formData.milestones.length})
          </button>
        </div>

        {/* Content body */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 space-y-6">
          {activeTab === 'general' && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-white/70 mb-1.5 uppercase tracking-wider">
                  Family Name
                </label>
                <input
                  type="text"
                  name="familyName"
                  value={formData.familyName}
                  onChange={handleGeneralChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#ff7a59] transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-white/70 mb-1.5 uppercase tracking-wider">
                  Established Year / Date
                </label>
                <input
                  type="text"
                  name="estYear"
                  value={formData.estYear}
                  onChange={handleGeneralChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#ff7a59] transition-colors"
                  required
                />
              </div>
            </div>
          )}

          {activeTab === 'members' && (
            <div className="space-y-6">
              {formData.members.map((member, index) => (
                <div key={member.id} className="p-4 bg-white/5 border border-white/10 rounded-2xl space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-[#ffb703]">Member #{index + 1}</span>
                    <span className="text-xs text-white/50">{member.role}</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-white/60 mb-1">Name</label>
                      <input
                        type="text"
                        value={member.name}
                        onChange={e => handleMemberChange(index, 'name', e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-white text-sm focus:outline-none focus:border-[#ff7a59]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-white/60 mb-1">Role / Relation</label>
                      <input
                        type="text"
                        value={member.role}
                        onChange={e => handleMemberChange(index, 'role', e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-white text-sm focus:outline-none focus:border-[#ff7a59]"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs text-white/60 mb-1">Quote / Character Summary</label>
                    <input
                      type="text"
                      value={member.quote}
                      onChange={e => handleMemberChange(index, 'quote', e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-white text-sm focus:outline-none focus:border-[#ff7a59]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-white/60 mb-1">Avatar Image URL</label>
                    <input
                      type="text"
                      value={member.avatar}
                      onChange={e => handleMemberChange(index, 'avatar', e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-white text-sm focus:outline-none focus:border-[#ff7a59]"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'milestones' && (
            <div className="space-y-6">
              {formData.milestones.map((milestone, index) => (
                <div key={index} className="p-4 bg-white/5 border border-white/10 rounded-2xl space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-[#3a86ff]">Milestone {milestone.year}</span>
                    <input
                      type="text"
                      value={milestone.year}
                      onChange={e => handleMilestoneChange(index, 'year', e.target.value)}
                      className="w-24 bg-white/5 border border-white/10 rounded-lg px-2 py-1 text-white text-xs text-center"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-white/60 mb-1">Title</label>
                      <input
                        type="text"
                        value={milestone.title}
                        onChange={e => handleMilestoneChange(index, 'title', e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-white text-sm focus:outline-none focus:border-[#ff7a59]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-white/60 mb-1">Location</label>
                      <input
                        type="text"
                        value={milestone.location}
                        onChange={e => handleMilestoneChange(index, 'location', e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-white text-sm focus:outline-none focus:border-[#ff7a59]"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs text-white/60 mb-1">Story / Description</label>
                    <textarea
                      value={milestone.story}
                      onChange={e => handleMilestoneChange(index, 'story', e.target.value)}
                      rows={2}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-white text-sm focus:outline-none focus:border-[#ff7a59]"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Footer actions */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-end gap-3 sticky bottom-0 bg-[#141628] pb-2">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#ff7a59] to-[#ffb703] hover:opacity-95 shadow-lg shadow-coral-500/20 transition-all"
            >
              <Save className="w-4 h-4" />
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
