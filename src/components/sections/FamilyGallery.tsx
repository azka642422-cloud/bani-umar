import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Image as ImageIcon, Sparkles, X, Calendar, MapPin } from 'lucide-react';
import { GalleryPhoto } from '../../types';

interface FamilyGalleryProps {
  photos: GalleryPhoto[];
}

export const FamilyGallery: React.FC<FamilyGalleryProps> = ({ photos }) => {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);

  return (
    <section id="gallery" className="py-24 px-6 relative bg-gradient-to-b from-[#0b0c16] via-[#141228] to-[#0b0c16] overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-white/10 text-xs font-semibold text-[#3a86ff] mb-4">
            <ImageIcon className="w-3.5 h-3.5" />
            Visual Archive
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Family Gallery
          </h2>
          <p className="text-white/60 text-sm md:text-base">
            Snapshots across time and space. Click any photo to step closer into the memory.
          </p>
        </div>

        {/* Spatial Floating Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, idx) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              onClick={() => setSelectedPhoto(photo)}
              className="cursor-pointer glass-card rounded-3xl overflow-hidden border border-white/10 group shadow-2xl relative"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90 group-hover:opacity-95 transition-opacity flex flex-col justify-end p-6">
                  <div className="flex items-center gap-2 text-xs text-[#ffb703] font-medium mb-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {photo.date} • {photo.location}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">{photo.title}</h3>
                  <p className="text-xs text-white/70 line-clamp-1">{photo.caption}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={e => e.stopPropagation()}
              className="bg-[#141628] border border-white/20 rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl relative"
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-10 p-2.5 bg-black/60 hover:bg-black text-white rounded-full transition-colors backdrop-blur-md"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-video max-h-[60vh] overflow-hidden bg-black">
                <img
                  src={selectedPhoto.url}
                  alt={selectedPhoto.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="p-6 md:p-8 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#ffb703] font-medium">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {selectedPhoto.date}
                  </span>
                  <span className="flex items-center gap-1.5 text-white/60">
                    <MapPin className="w-3.5 h-3.5 text-[#3a86ff]" />
                    {selectedPhoto.location}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white">{selectedPhoto.title}</h3>
                <p className="text-sm text-white/80 leading-relaxed font-light">{selectedPhoto.caption}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
