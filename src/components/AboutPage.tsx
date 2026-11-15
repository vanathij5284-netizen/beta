import { ArrowRight } from 'lucide-react';
import { ABOUT_PAGE_CONTENT, Language, PageId } from '../data/siteContent';
import { TRANSLATIONS } from '../data/translations';
import { ImageWithFallback } from './ImageWithFallback';

interface AboutPageProps {
  language: Language;
  onNavigate: (page: PageId) => void;
}

/**
 * About Page with History, Vision, Salesian Mission, Don Bosco Story, and Team Cards
 */
export function AboutPage({ language, onNavigate }: AboutPageProps) {
  const t = TRANSLATIONS[language].pages;

  return (
    <div>
      {/* Page Hero Header */}
      <section className="bg-[#0F2D5C] text-white py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-amber-300">{t.aboutKicker}</p>
          <h1 className="mt-2 font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white [text-wrap:balance]">
            {t.aboutTitle}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-200 max-w-2xl leading-relaxed">
            {t.aboutSubtitle}
          </p>
        </div>
      </section>

      {/* 1. History & Vision */}
      <section aria-labelledby="history-vision-heading" className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-7 space-y-4">
            <p className="text-sm font-semibold text-[#1B4382]">Our Roots</p>
            <h2
              id="history-vision-heading"
              className="font-display font-bold text-2xl sm:text-3xl text-[#0F2D5C]"
            >
              {ABOUT_PAGE_CONTENT.historyTitle}
            </h2>
            {ABOUT_PAGE_CONTENT.historyParagraphs.map((paragraph, idx) => (
              <p key={idx} className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-prose">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="lg:col-span-5">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8">
              <p className="text-sm font-semibold text-[#1B4382]">
                {ABOUT_PAGE_CONTENT.visionTitle}
              </p>
              <p className="mt-3 font-display font-bold text-xl sm:text-2xl text-[#0F2D5C] leading-snug">
                “{ABOUT_PAGE_CONTENT.visionStatement}”
              </p>
              <div className="mt-6 pt-5 border-t border-slate-200">
                <button
                  type="button"
                  onClick={() => onNavigate('programmes')}
                  className="inline-flex items-center gap-2 min-h-[44px] text-sm font-semibold text-[#0F2D5C] hover:text-[#1B4382] underline decoration-amber-400 decoration-2 underline-offset-4 transition-colors cursor-pointer"
                >
                  <span>See how we live this vision</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. The Salesian / Don Bosco Mission */}
      <section
        aria-labelledby="salesian-mission-heading"
        className="py-16 sm:py-20 bg-slate-50 border-y border-slate-200/80"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <p className="text-sm font-semibold text-[#1B4382]">The Preventive System</p>
            <h2
              id="salesian-mission-heading"
              className="mt-2 font-display font-bold text-2xl sm:text-3xl text-[#0F2D5C]"
            >
              The Salesian &amp; Don Bosco Mission
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
              Every classroom, workshop, and playground activity at Don Bosco Youth Village
              rests on three timeless pillars taught by St. John Bosco.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {ABOUT_PAGE_CONTENT.missionPillars.map((pillar) => (
              <div
                key={pillar.index}
                className="bg-white border border-slate-200 rounded-xl p-6 sm:p-7 transition-transform duration-200 hover:-translate-y-0.5"
              >
                <p className="text-xs font-semibold text-[#1B4382] tabular-nums">
                  {pillar.index} · Salesian Pillar
                </p>
                <h3 className="mt-2 font-display font-bold text-xl text-[#0F2D5C]">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-base text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Short Don Bosco Story */}
      <section aria-labelledby="don-bosco-story-heading" className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-6">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 bg-slate-100">
              <ImageWithFallback
                src={ABOUT_PAGE_CONTENT.donBoscoStory.image}
                alt={ABOUT_PAGE_CONTENT.donBoscoStory.imageAlt}
                className="w-full h-full object-cover"
                fallbackTitle="Don Bosco Story"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <p className="text-sm font-semibold text-[#1B4382]">
              {ABOUT_PAGE_CONTENT.donBoscoStory.kicker}
            </p>
            <h2
              id="don-bosco-story-heading"
              className="font-display font-bold text-2xl sm:text-3xl text-[#0F2D5C] leading-snug [text-wrap:balance]"
            >
              {ABOUT_PAGE_CONTENT.donBoscoStory.title}
            </h2>

            {ABOUT_PAGE_CONTENT.donBoscoStory.paragraphs.map((para, idx) => (
              <p key={idx} className="text-base sm:text-lg text-slate-700 leading-relaxed">
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Team Section */}
      <section
        aria-labelledby="team-heading"
        className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200/80"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <p className="text-sm font-semibold text-[#1B4382]">People Behind the Mission</p>
            <h2
              id="team-heading"
              className="mt-2 font-display font-bold text-2xl sm:text-3xl text-[#0F2D5C]"
            >
              Our Director &amp; Campus Team
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {ABOUT_PAGE_CONTENT.teamMembers.map((member) => (
              <article
                key={member.id}
                className="bg-white border border-slate-200 rounded-xl overflow-hidden flex flex-col transition-transform duration-200 hover:-translate-y-0.5"
              >
                <div className="aspect-square w-full bg-slate-100 overflow-hidden">
                  <ImageWithFallback
                    src={member.photo}
                    alt={member.photoAlt}
                    className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-[1.03]"
                    fallbackTitle={member.name}
                  />
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <p className="text-xs font-semibold text-[#1B4382]">{member.role}</p>
                  <h3 className="mt-1 font-display font-bold text-xl text-[#0F2D5C]">
                    {member.name}
                  </h3>
                  <p className="mt-3 text-base text-slate-600 leading-relaxed flex-1">
                    {member.bio}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 bg-[#0F2D5C] text-white rounded-2xl p-6 sm:p-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <h3 className="font-display font-bold text-xl sm:text-2xl">
                Visit our campus in Susaipudayanpatti
              </h3>
              <p className="mt-2 text-base text-slate-200 max-w-xl">
                We welcome parents, educators, and community partners to meet our team in person.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-3 rounded-lg bg-amber-400 hover:bg-amber-500 text-[#0B1F42] font-semibold text-base transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>{TRANSLATIONS[language].nav.contact}</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
