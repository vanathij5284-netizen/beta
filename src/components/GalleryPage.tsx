import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem, Language } from '../data/siteContent';
import { TRANSLATIONS } from '../data/translations';
import { ImageWithFallback } from './ImageWithFallback';

interface GalleryPageProps {
  language: Language;
}

/**
 * Gallery Page with Category Filter, Lazy-Loaded Images, and Keyboard-Accessible Lightbox
 */
export function GalleryPage({ language }: GalleryPageProps) {
  const t = TRANSLATIONS[language].pages;
  const [filter, setFilter] = useState<'All' | GalleryItem['category']>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filters: Array<'All' | GalleryItem['category']> = [
    'All',
    'Campus',
    'Training',
    'Sports',
    'Community',
  ];

  const filteredItems =
    filter === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === filter);

  const activePhoto =
    lightboxIndex !== null && filteredItems[lightboxIndex]
      ? filteredItems[lightboxIndex]
      : null;

  const handlePrev = () => {
    if (lightboxIndex === null || filteredItems.length === 0) return;
    setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
  };

  const handleNext = () => {
    if (lightboxIndex === null || filteredItems.length === 0) return;
    setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
  };

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxIndex(null);
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) =>
          prev === null ? null : (prev - 1 + filteredItems.length) % filteredItems.length,
        );
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) =>
          prev === null ? null : (prev + 1) % filteredItems.length,
        );
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredItems.length]);

  return (
    <div>
      {/* Page Header */}
      <section className="bg-[#0F2D5C] text-white py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-amber-300">{t.galleryKicker}</p>
          <h1 className="mt-2 font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white [text-wrap:balance]">
            {t.galleryTitle}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-200 max-w-2xl leading-relaxed">
            {t.gallerySubtitle}
          </p>
        </div>
      </section>

      {/* Filter & Grid */}
      <section aria-labelledby="gallery-grid-heading" className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
            <h2
              id="gallery-grid-heading"
              className="font-display font-bold text-2xl text-[#0F2D5C]"
            >
              {language === 'ta' ? 'புகைப்படத் தொகுப்பு' : 'Photo Collection'}
            </h2>

            <div
              role="tablist"
              aria-label="Filter gallery photos by category"
              className="inline-flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-100 rounded-xl"
            >
              {filters.map((cat) => {
                const active = filter === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => {
                      setFilter(cat);
                      setLightboxIndex(null);
                    }}
                    className={`min-h-[40px] px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      active
                        ? 'bg-[#0F2D5C] text-white'
                        : 'text-slate-700 hover:text-[#0F2D5C] hover:bg-white/80'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredItems.map((item, idx) => (
              <figure
                key={item.id}
                className="group bg-white border border-slate-200 rounded-xl overflow-hidden transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
              >
                <button
                  type="button"
                  onClick={() => setLightboxIndex(idx)}
                  aria-label={`Open full view: ${item.title}`}
                  className="relative block w-full aspect-[4/3] bg-slate-100 overflow-hidden text-left cursor-pointer"
                >
                  <ImageWithFallback
                    src={item.image}
                    alt={item.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                    fallbackTitle={item.title}
                  />
                  <span
                    aria-hidden="true"
                    className="absolute bottom-3 right-3 w-10 h-10 rounded-lg bg-[#0B1F42]/80 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </span>
                </button>

                <figcaption className="p-5">
                  <p className="text-xs font-semibold text-[#1B4382]">{item.category}</p>
                  <h3 className="mt-1 font-display font-bold text-lg text-[#0F2D5C]">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">{item.caption}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {activePhoto && lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="lightbox-photo-title"
          className="fixed inset-0 z-50 bg-[#0B1F42]/92 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
          onClick={() => setLightboxIndex(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#0F2D5C] border border-white/15 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 px-5 py-3.5 border-b border-white/10 text-white">
              <p className="text-sm font-medium text-amber-300 tabular-nums">
                {lightboxIndex + 1} of {filteredItems.length} · {activePhoto.category}
              </p>
              <button
                type="button"
                onClick={() => setLightboxIndex(null)}
                aria-label="Close lightbox"
                className="w-11 h-11 rounded-lg bg-white/10 hover:bg-amber-400 hover:text-[#0B1F42] text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative bg-[#0B1F42] flex items-center justify-center max-h-[68vh]">
              <ImageWithFallback
                src={activePhoto.image}
                alt={activePhoto.imageAlt}
                loading="eager"
                className="max-h-[68vh] w-full object-contain"
                fallbackTitle={activePhoto.title}
              />

              {filteredItems.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={handlePrev}
                    aria-label="Previous photo"
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-lg bg-[#0B1F42]/80 hover:bg-amber-400 text-white hover:text-[#0B1F42] flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    aria-label="Next photo"
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-lg bg-[#0B1F42]/80 hover:bg-amber-400 text-white hover:text-[#0B1F42] flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
            </div>

            <div className="px-6 py-4 bg-[#0F2D5C] text-white border-t border-white/10">
              <h3 id="lightbox-photo-title" className="font-display font-bold text-lg">
                {activePhoto.title}
              </h3>
              <p className="mt-1 text-sm text-slate-200">{activePhoto.caption}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
