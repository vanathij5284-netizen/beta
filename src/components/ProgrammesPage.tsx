import { useEffect, useState } from 'react';
import {
  ArrowRight,
  BookOpen,
  Briefcase,
  Calendar,
  HeartHandshake,
  Laptop,
  Trophy,
  Users,
  X,
} from 'lucide-react';
import {
  Language,
  PageId,
  ProgrammeIconKey,
  ProgrammeItem,
  PROGRAMMES_LIST,
} from '../data/siteContent';
import { TRANSLATIONS } from '../data/translations';
import { ImageWithFallback } from './ImageWithFallback';

interface ProgrammesPageProps {
  language: Language;
  onNavigate: (page: PageId) => void;
}

function ProgrammeIcon({ icon }: { icon: ProgrammeIconKey }) {
  const cls = 'w-6 h-6 text-[#0F2D5C]';
  switch (icon) {
    case 'laptop':
      return <Laptop className={cls} aria-hidden="true" />;
    case 'heart':
      return <HeartHandshake className={cls} aria-hidden="true" />;
    case 'briefcase':
      return <Briefcase className={cls} aria-hidden="true" />;
    case 'users':
      return <Users className={cls} aria-hidden="true" />;
    case 'trophy':
      return <Trophy className={cls} aria-hidden="true" />;
    case 'book':
      return <BookOpen className={cls} aria-hidden="true" />;
  }
}

/**
 * Programmes Page with Category Filter and Detail Modal
 */
export function ProgrammesPage({ language, onNavigate }: ProgrammesPageProps) {
  const t = TRANSLATIONS[language].pages;
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [activeProgramme, setActiveProgramme] = useState<ProgrammeItem | null>(null);

  const categories = [
    'All',
    'Training',
    'Women & Families',
    'Employment',
    'Community & Sports',
  ];

  const filteredProgrammes =
    selectedFilter === 'All'
      ? PROGRAMMES_LIST
      : PROGRAMMES_LIST.filter((item) => item.category === selectedFilter);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveProgramme(null);
      }
    };
    if (activeProgramme) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeProgramme]);

  return (
    <div>
      {/* Page Header */}
      <section className="bg-[#0F2D5C] text-white py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-amber-300">{t.programmesKicker}</p>
          <h1 className="mt-2 font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white [text-wrap:balance]">
            {t.programmesTitle}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-200 max-w-2xl leading-relaxed">
            {t.programmesSubtitle}
          </p>
        </div>
      </section>

      {/* Filter & Card Grid */}
      <section aria-labelledby="programmes-grid-heading" className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
            <h2
              id="programmes-grid-heading"
              className="font-display font-bold text-2xl text-[#0F2D5C]"
            >
              {language === 'ta' ? 'திட்டங்களின் பட்டியல்' : 'Explore Our Initiatives'}
            </h2>

            <div
              role="tablist"
              aria-label="Filter programmes by category"
              className="inline-flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-100 rounded-xl"
            >
              {categories.map((cat) => {
                const active = selectedFilter === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setSelectedFilter(cat)}
                    className={`min-h-[40px] px-3.5 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProgrammes.map((programme) => (
              <article
                key={programme.id}
                className="flex flex-col bg-white border border-slate-200 rounded-xl p-6 sm:p-7 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#1B4382]/40 hover:shadow-md"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
                    <ProgrammeIcon icon={programme.icon} />
                  </div>
                  <span className="text-xs font-semibold text-[#1B4382]">
                    {programme.category}
                  </span>
                </div>

                <h3 className="mt-5 font-display font-bold text-xl text-[#0F2D5C]">
                  {programme.title}
                </h3>

                <p className="mt-3 text-base text-slate-600 leading-relaxed flex-1">
                  {programme.shortDescription}
                </p>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setActiveProgramme(programme)}
                    className="inline-flex items-center gap-2 min-h-[44px] px-4 py-2 rounded-lg bg-slate-100 hover:bg-amber-400 text-sm font-semibold text-[#0F2D5C] hover:text-[#0B1F42] transition-colors cursor-pointer"
                  >
                    <span>{language === 'ta' ? 'மேலும் அறிய' : 'Learn more'}</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <h3 className="font-display font-bold text-xl text-[#0F2D5C]">
                Need batch dates or admissions guidance?
              </h3>
              <p className="mt-2 text-base text-slate-600 max-w-xl">
                Speak directly with our centre office in Susaipudayanpatti for upcoming course
                registrations or volunteer opportunities.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('get-involved')}
              className="min-h-[44px] px-5 py-2.5 rounded-lg bg-amber-400 hover:bg-amber-500 text-[#0B1F42] font-semibold text-sm whitespace-nowrap shrink-0 cursor-pointer"
            >
              Enquire Now
            </button>
          </div>
        </div>
      </section>

      {/* Programme Detail Modal */}
      {activeProgramme && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="programme-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B1F42]/75 backdrop-blur-xs"
          onClick={() => setActiveProgramme(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-[16/9] w-full bg-slate-100 relative">
              <ImageWithFallback
                src={activeProgramme.image}
                alt={activeProgramme.imageAlt}
                className="w-full h-full object-cover"
                fallbackTitle={activeProgramme.title}
              />
              <button
                type="button"
                onClick={() => setActiveProgramme(null)}
                aria-label="Close programme details"
                className="absolute top-3 right-3 w-11 h-11 rounded-lg bg-white/95 text-[#0F2D5C] hover:bg-amber-400 flex items-center justify-center shadow-md transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center shrink-0">
                  <ProgrammeIcon icon={activeProgramme.icon} />
                </div>
                <span className="text-sm font-semibold text-[#1B4382]">
                  {activeProgramme.category}
                </span>
              </div>

              <h3
                id="programme-modal-title"
                className="mt-4 font-display font-bold text-2xl text-[#0F2D5C]"
              >
                {activeProgramme.title}
              </h3>

              <div className="mt-4 space-y-3 text-base text-slate-700 leading-relaxed">
                <p>{activeProgramme.shortDescription}</p>
                {activeProgramme.fullDetails.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>

              <dl className="mt-6 pt-5 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <dt className="font-semibold text-[#0F2D5C] flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-[#1B4382]" aria-hidden="true" />
                    <span>Schedule</span>
                  </dt>
                  <dd className="mt-1 text-slate-600">{activeProgramme.schedule}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-[#0F2D5C] flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-[#1B4382]" aria-hidden="true" />
                    <span>Who Can Join</span>
                  </dt>
                  <dd className="mt-1 text-slate-600">{activeProgramme.audience}</dd>
                </div>
              </dl>

              <div className="mt-8 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setActiveProgramme(null)}
                  className="min-h-[44px] px-4 py-2 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50 text-sm font-semibold transition-colors cursor-pointer"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setActiveProgramme(null);
                    onNavigate('get-involved');
                  }}
                  className="inline-flex items-center gap-2 min-h-[44px] px-5 py-2.5 rounded-lg bg-amber-400 hover:bg-amber-500 text-[#0B1F42] text-sm font-semibold transition-colors cursor-pointer"
                >
                  <span>Enquire About This Programme</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
