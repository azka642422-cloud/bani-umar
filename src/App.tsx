import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { branchesData } from './data/branches';
import { memoriesData } from './data/memories';
import { funFactsData } from './data/funFacts';
import { BranchData } from './types';
import { NavbarBaniUmar } from './components/NavbarBaniUmar';
import { AudioController } from './components/AudioController';
import { SceneOpening } from './components/sections/SceneOpening';
import { BranchExplorer } from './components/sections/BranchExplorer';
import { StoryDioramaView } from './components/sections/StoryDioramaView';
import { FunnyMemoriesSection } from './components/sections/FunnyMemoriesSection';
import { ThenNowSection } from './components/sections/ThenNowSection';
import { TimelineGatheringSection } from './components/sections/TimelineGatheringSection';
import { SurpriseMeModal } from './components/sections/SurpriseMeModal';
import { FinalSceneBaniUmar } from './components/sections/FinalSceneBaniUmar';

export default function App() {
  const [currentView, setCurrentView] = useState<'opening' | 'branches' | 'diorama' | 'funfacts' | 'thennow' | 'timeline' | 'final'>('opening');
  const [selectedBranch, setSelectedBranch] = useState<BranchData | null>(null);
  const [isSurpriseOpen, setIsSurpriseOpen] = useState(false);

  const handleStartStory = () => {
    confetti({
      particleCount: 90,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#ff7a59', '#ffb703', '#3a86ff', '#b5179e', '#4cc9f0']
    });
    setCurrentView('branches');
  };

  const handleSelectBranch = (branch: BranchData) => {
    setSelectedBranch(branch);
    setCurrentView('diorama');
  };

  const handleReplay = () => {
    confetti({
      particleCount: 100,
      spread: 90,
      origin: { y: 0.5 },
      colors: ['#ff7a59', '#ffb703', '#3a86ff']
    });
    setCurrentView('opening');
    setSelectedBranch(null);
  };

  return (
    <div className="min-h-screen bg-[#0b0c16] text-white selection:bg-[#ff7a59] selection:text-white relative">
      <NavbarBaniUmar
        onOpenSurprise={() => setIsSurpriseOpen(true)}
        onReset={() => setCurrentView('opening')}
      />

      <AudioController />

      <main className="pt-16">
        {currentView === 'opening' && (
          <SceneOpening
            branches={branchesData}
            onStartStory={handleStartStory}
            onSelectBranch={handleSelectBranch}
          />
        )}

        {currentView === 'branches' && (
          <div className="space-y-0">
            <BranchExplorer
              branches={branchesData}
              onSelectBranch={handleSelectBranch}
            />
            <FunnyMemoriesSection funFacts={funFactsData} />
            <ThenNowSection />
            <TimelineGatheringSection />
            <div className="py-16 text-center">
              <button
                onClick={() => setCurrentView('final')}
                className="px-8 py-4 rounded-full font-bold text-white bg-gradient-to-r from-[#ff7a59] via-[#ffb703] to-[#3a86ff] shadow-xl hover:opacity-90 transition-all"
              >
                Enter Final Sanctuary →
              </button>
            </div>
          </div>
        )}

        {currentView === 'diorama' && selectedBranch && (
          <StoryDioramaView
            branch={selectedBranch}
            memories={memoriesData}
            onBack={() => setCurrentView('branches')}
          />
        )}

        {currentView === 'final' && (
          <FinalSceneBaniUmar
            branches={branchesData}
            onReplay={handleReplay}
          />
        )}
      </main>

      <SurpriseMeModal
        isOpen={isSurpriseOpen}
        onClose={() => setIsSurpriseOpen(false)}
      />
    </div>
  );
}
