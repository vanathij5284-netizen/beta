import { ArrowRight, Calendar } from 'lucide-react';
import {
  HERO_CONTENT,
  KEY_ACTIVITIES,
  Language,
  PageId,
  RECENT_NEWS,
} from '../data/siteContent';
import { TRANSLATIONS } from '../data/translations';
import { ImageWithFallback } from './ImageWithFallback';

interface HomePageProps {
  language: Language;
  onNavigate: (page: PageId) => void;
  onOpenArticle: (articleId: string) => void;
}

/**
 * Home Page (Bilingual English / Tamil support):
 * 1. Hero (eager-loaded LCP image, headline, mission, "Our Programmes" & "Contact Us")
 * 2. Short "Who we are" intro
 * 3. Highlights row (3 cards for key activities)
 * 4. Recent news (2 placeholder items linking to News Detail Page)
 * 5. Call-to-action banner linking to Get Involved
 */
export function HomePage({ language, onNavigate, onOpenArticle }: HomePageProps) {
  const t = TRANSLATIONS[language].home;

  return (
    <div>
      {/* =====================================================================
          1. HERO SECTION
          ===================================================================== */}
      <section className="relative bg-[#0B1F42] text-white overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={HERO_CONTENT.heroImage}
            alt={HERO_CONTENT.heroImageAlt}
            loading="eager"
            fetchPriority="high"
            className="w-full h-full object-cover object-center"
            fallbackTitle="Don Bosco Youth Village Campus"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-[#0B1F42]/92 via-[#0F2D5C]/80 to-[#0F2D5C]/40"
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
          <div className="max-w-2xl">
            <p className="text-sm sm:text-base font-medium text-amber-300 tracking-wide">
              {t.locationLine}
            </p>

            <h1
              className="mt-4 font-display font-extrabold text-white tracking-tight leading-[1.14] [text-wrap:balance]"
              style={{ fontSize: 'clamp(2.15rem, 4.2vw, 3.5rem)' }}
            >
              {t.heroHeadline}
            </h1>

            <p className="mt-5 text-lg sm:text-xl text-slate-100 leading-relaxed max-w-xl">
              {t.heroMission}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => onNavigate('programmes')}
                className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-3 rounded-lg bg-amber-400 hover:bg-amber-500 text-[#0B1F42] font-semibold text-base transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>{t.primaryCta}</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center justify-center min-h-[48px] px-6 py-3 rounded-lg border border-white/60 bg-white/10 hover:bg-white/20 text-white font-semibold text-base transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                {t.secondaryCta}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          2. WHO WE ARE INTRO
          ===================================================================== */}
      <section aria-labelledby="who-we-are-heading" className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-5">
              <p className="text-sm font-semibold text-[#1B4382]">{t.whoKicker}</p>
              <h2
                id="who-we-are-heading"
                className="mt-2 font-display font-bold text-2xl sm:text-3xl text-[#0F2D5C] leading-snug [text-wrap:balance]"
              >
                {t.whoHeading}
              </h2>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-prose">
                {t.whoPara1}
              </p>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-prose">
                {t.whoPara2}
              </p>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-2 min-h-[44px] text-base font-semibold text-[#0F2D5C] hover:text-[#1B4382] underline decoration-amber-400 decoration-2 underline-offset-4 transition-colors cursor-pointer"
                >
                  <span>{t.whoLink}</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          3. HIGHLIGHTS ROW (3 KEY ACTIVITIES)
          ===================================================================== */}
      <section
        aria-labelledby="highlights-heading"
        className="py-16 sm:py-20 bg-slate-50 border-y border-slate-200/80"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <p className="text-sm font-semibold text-[#1B4382]">{t.highlightsKicker}</p>
              <h2
                id="highlights-heading"
                className="mt-2 font-display font-bold text-2xl sm:text-3xl text-[#0F2D5C] [text-wrap:balance]"
              >
                {t.highlightsHeading}
              </h2>
            </div>

            <button
              type="button"
              onClick={() => onNavigate('programmes')}
              className="inline-flex items-center gap-2 min-h-[44px] text-sm sm:text-base font-semibold text-[#0F2D5C] hover:text-[#1B4382] transition-colors whitespace-nowrap shrink-0 cursor-pointer self-start sm:self-auto"
            >
              <span>{t.viewAllProgrammes}</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {KEY_ACTIVITIES.map((activity, idx) => {
              const localized = t.activities[idx];
              return (
                <article
                  key={activity.id}
                  className="flex flex-col bg-white border border-slate-200 rounded-xl overflow-hidden transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="aspect-[4/3] w-full bg-slate-100 overflow-hidden">
                    <ImageWithFallback
                      src={activity.image}
                      alt={activity.imageAlt}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.03]"
                      fallbackTitle={localized.title}
                    />
                  </div>

                  <div className="flex flex-col flex-1 p-6">
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#1B4382] tabular-nums">
                      <span>{activity.indexLabel}</span>
                      <span aria-hidden="true">·</span>
                      <span>{localized.category}</span>
                    </div>

                    <h3 className="mt-2 font-display font-bold text-xl text-[#0F2D5C]">
                      {localized.title}
                    </h3>

                    <p className="mt-3 text-base text-slate-600 leading-relaxed flex-1">
                      {localized.description}
                    </p>

                    <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                      <span className="text-xs text-slate-500">{localized.schedule}</span>
                      <button
                        type="button"
                        onClick={() => onNavigate('programmes')}
                        className="inline-flex items-center gap-1 min-h-[40px] text-sm font-semibold text-[#0F2D5C] hover:text-[#1B4382] whitespace-nowrap shrink-0 cursor-pointer"
                      >
                        <span>{t.activityDetails}</span>
                        <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================================
          4. RECENT NEWS SECTION (2 PLACEHOLDER ITEMS)
          ===================================================================== */}
      <section aria-labelledby="recent-news-heading" className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <p className="text-sm font-semibold text-[#1B4382]">{t.newsKicker}</p>
              <h2
                id="recent-news-heading"
                className="mt-2 font-display font-bold text-2xl sm:text-3xl text-[#0F2D5C]"
              >
                {t.newsHeading}
              </h2>
            </div>

            <button
              type="button"
              onClick={() => onNavigate('news')}
              className="inline-flex items-center gap-2 min-h-[44px] text-sm sm:text-base font-semibold text-[#0F2D5C] hover:text-[#1B4382] transition-colors whitespace-nowrap shrink-0 cursor-pointer self-start sm:self-auto"
            >
              <span>{t.viewAllNews}</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {RECENT_NEWS.map((item, idx) => {
              const localized = t.newsItems[idx];
              return (
                <article
                  key={item.id}
                  className="flex flex-col bg-white border border-slate-200 rounded-xl overflow-hidden transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="aspect-[4/3] w-full bg-slate-100 overflow-hidden">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.imageAlt}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.03]"
                      fallbackTitle={localized.title}
                    />
                  </div>

                  <div className="flex flex-col flex-1 p-6 sm:p-7">
                    <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                      <Calendar className="w-3.5 h-3.5 text-[#1B4382]" aria-hidden="true" />
                      <time>{localized.date}</time>
                      <span aria-hidden="true">·</span>
                      <span className="text-[#1B4382] font-semibold">{localized.category}</span>
                    </div>

                    <h3 className="mt-3 font-display font-bold text-xl sm:text-2xl text-[#0F2D5C] leading-snug [text-wrap:balance]">
                      {localized.title}
                    </h3>

                    <p className="mt-3 text-base text-slate-600 leading-relaxed flex-1">
                      {localized.summary}
                    </p>

                    <div className="mt-6">
                      <button
                        type="button"
                        onClick={() => onOpenArticle(item.id)}
                        className="inline-flex items-center gap-2 min-h-[44px] px-4 py-2 rounded-lg bg-slate-100 hover:bg-amber-400 text-sm font-semibold text-[#0F2D5C] hover:text-[#0B1F42] transition-colors cursor-pointer"
                      >
                        <span>{t.readStory}</span>
                        <ArrowRight className="w-4 h-4" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================================
          5. CALL-TO-ACTION BANNER
          ===================================================================== */}
      <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0F2D5C] rounded-2xl px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white leading-snug [text-wrap:balance]">
                {t.ctaHeading}
              </h2>
              <p className="mt-3 text-base sm:text-lg text-slate-200 leading-relaxed">
                {t.ctaDescription}
              </p>
            </div>

            <div className="shrink-0">
              <button
                type="button"
                onClick={() => onNavigate('get-involved')}
                className="inline-flex items-center justify-center gap-2 min-h-[48px] px-7 py-3.5 rounded-lg bg-amber-400 hover:bg-amber-500 text-[#0B1F42] font-semibold text-base transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>{t.ctaButton}</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
