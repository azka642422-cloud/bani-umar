import React, { useState, useEffect } from 'react';
import { Sparkles, Edit, Compass, Heart, Menu, X } from 'lucide-react';

interface NavbarProps {
  familyName: string;
  onOpenCustomizer: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  familyName,
  onOpenCustomizer,
  onNavigate
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Universe', id: 'hero' },
    { label: 'Family', id: 'family' },
    { label: 'Journey', id: 'journey' },
    { label: 'Rooms', id: 'rooms' },
    { label: 'Values', id: 'values' },
    { label: 'Gallery', id: 'gallery' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
      scrolled ? 'py-3.5 glass-panel border-b border-white/10 shadow-xl' : 'py-6 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand */}
        <button
          onClick={() => onNavigate('hero')}
          className="flex items-center gap-2.5 text-left group"
        >
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#ff7a59] via-[#ffb703] to-[#3a86ff] p-[2px] shadow-lg shadow-coral-500/20 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#0b0c16] rounded-[14px] flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-[#ff7a59]" />
            </div>
          </div>
          <div>
            <span className="text-base font-bold tracking-tight text-white block">
              {familyName}
            </span>
            <span className="text-[10px] text-white/50 tracking-wider uppercase block font-medium">
              Our Little Universe
            </span>
          </div>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 glass-card px-3 py-1.5 rounded-full border border-white/10">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => onNavigate(link.id)}
              className="px-4 py-1.5 text-xs font-medium text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenCustomizer}
            className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/15 transition-all shadow-sm hover:border-coral-500/50"
          >
            <Edit className="w-3.5 h-3.5 text-[#ff7a59]" />
            Customize Story
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2.5 text-white/80 hover:text-white glass-card rounded-xl border border-white/10"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass-panel border-b border-white/10 px-6 py-4 space-y-3 animate-fadeIn">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                onNavigate(link.id);
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left py-2 text-sm font-medium text-white/80 hover:text-white"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2 border-t border-white/10">
            <button
              onClick={() => {
                onOpenCustomizer();
                setMobileMenuOpen(false);
              }}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-coral-500 to-orange-500"
            >
              <Edit className="w-4 h-4" />
              Customize Story
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
