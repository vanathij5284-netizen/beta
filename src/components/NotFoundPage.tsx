import { ArrowLeft } from 'lucide-react';
import { Language, PageId } from '../data/siteContent';
import { TRANSLATIONS } from '../data/translations';

interface NotFoundPageProps {
  language: Language;
  onNavigate: (page: PageId) => void;
}

/**
 * Simple, accessible 404 Page for unknown routes or invalid news slugs
 */
export function NotFoundPage({ language, onNavigate }: NotFoundPageProps) {
  const t = TRANSLATIONS[language].pages;

  return (
    <section
      aria-labelledby="not-found-heading"
      className="py-20 sm:py-28 bg-slate-50 flex-1 flex items-center"
    >
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <p className="font-display font-extrabold text-5xl sm:text-6xl text-amber-500 tabular-nums">
          404
        </p>

        <h1
          id="not-found-heading"
          className="mt-4 font-display font-bold text-2xl sm:text-3xl text-[#0F2D5C]"
        >
          {t.notFoundTitle}
        </h1>

        <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
          {t.notFoundBody}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => onNavigate('home')}
            className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-3 rounded-lg bg-amber-400 hover:bg-amber-500 text-[#0B1F42] font-semibold text-base transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            <span>{t.backToHome}</span>
          </button>

          <button
            type="button"
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center justify-center min-h-[48px] px-6 py-3 rounded-lg border border-slate-300 bg-white hover:bg-slate-100 text-[#0F2D5C] font-semibold text-base transition-colors cursor-pointer"
          >
            {TRANSLATIONS[language].nav.contact}
          </button>
        </div>
      </div>
    </section>
  );
}
