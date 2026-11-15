import { useEffect, useState } from 'react';
import { Globe, Menu, X } from 'lucide-react';
import { Language, NAV_ITEMS, PageId } from '../data/siteContent';
import { TRANSLATIONS } from '../data/translations';

interface NavbarProps {
  currentPage: PageId;
  language: Language;
  onNavigate: (page: PageId) => void;
  onToggleLanguage: (lang: Language) => void;
}

/**
 * Sticky Top Navigation Bar
 * - Zone 1: Single-line Brand Wordmark (with mobile truncation guard for Tamil)
 * - Zone 2: 5 concise single-line text links (Home, About, Programmes, Gallery, Contact)
 * - Zone 3: Language toggle (EN / தமிழ்) + 1 primary CTA ("Get Involved") + mobile menu toggle
 */
export function Navbar({
  currentPage,
  language,
  onNavigate,
  onToggleLanguage,
}: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const t = TRANSLATIONS[language];

  // Close mobile drawer on Escape
  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [mobileOpen]);

  const handleNavClick = (page: PageId) => {
    setMobileOpen(false);
    onNavigate(page);
  };

  const nextLanguage: Language = language === 'en' ? 'ta' : 'en';

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-18 flex items-center justify-between gap-4 lg:gap-8">
        {/* Zone 1: Single-line brand wordmark */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('home');
          }}
          className="font-display font-bold text-base sm:text-lg lg:text-xl tracking-tight text-[#0F2D5C] whitespace-nowrap truncate max-w-[175px] sm:max-w-none shrink-0 hover:text-[#1B4382] transition-colors"
        >
          {t.brandName}
        </a>

        {/* Zone 2: Desktop single-line navigation links */}
        <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-6">
          {NAV_ITEMS.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
                aria-current={isActive ? 'page' : undefined}
                className={`relative py-2 text-sm xl:text-[15px] font-medium whitespace-nowrap shrink-0 transition-colors ${
                  isActive
                    ? 'text-[#0F2D5C] font-semibold'
                    : 'text-slate-600 hover:text-[#0F2D5C]'
                }`}
              >
                {t.nav[item.id]}
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-0.5 bg-amber-500 rounded-full"
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Language Switcher + Get Involved CTA + Mobile Menu Toggle */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            type="button"
            onClick={() => onToggleLanguage(nextLanguage)}
            aria-label={
              language === 'en' ? 'Switch language to Tamil' : 'Switch language to English'
            }
            className="inline-flex items-center gap-1.5 min-h-[40px] px-3 py-1.5 rounded-lg border border-slate-300 bg-slate-50 hover:bg-slate-100 text-xs sm:text-sm font-semibold text-[#0F2D5C] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            <Globe className="w-4 h-4 text-[#1B4382]" aria-hidden="true" />
            <span>{language === 'en' ? 'தமிழ்' : 'English'}</span>
          </button>

          <button
            type="button"
            onClick={() => handleNavClick('get-involved')}
            className="hidden lg:inline-flex items-center justify-center min-h-[40px] px-4 py-2 text-sm font-semibold text-[#0B1F42] bg-amber-400 hover:bg-amber-500 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            {t.nav.getInvolved}
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg text-[#0F2D5C] hover:bg-slate-100 transition-colors cursor-pointer"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Navigation Drawer */}
      {mobileOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="lg:hidden bg-white border-t border-slate-200 px-4 py-4 space-y-1 shadow-lg"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
                aria-current={isActive ? 'page' : undefined}
                className={`flex items-center min-h-[44px] px-3 rounded-lg text-base font-medium transition-colors ${
                  isActive
                    ? 'bg-slate-100 text-[#0F2D5C] font-semibold'
                    : 'text-slate-700 hover:bg-slate-50 hover:text-[#0F2D5C]'
                }`}
              >
                {t.nav[item.id]}
              </a>
            );
          })}

          <a
            href="#news"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('news');
            }}
            aria-current={currentPage === 'news' ? 'page' : undefined}
            className={`flex items-center min-h-[44px] px-3 rounded-lg text-base font-medium transition-colors ${
              currentPage === 'news'
                ? 'bg-slate-100 text-[#0F2D5C] font-semibold'
                : 'text-slate-700 hover:bg-slate-50 hover:text-[#0F2D5C]'
            }`}
          >
            {t.nav.news}
          </a>

          <div className="pt-3 border-t border-slate-100">
            <button
              type="button"
              onClick={() => handleNavClick('get-involved')}
              className="w-full min-h-[44px] flex items-center justify-center px-4 py-2.5 text-base font-semibold text-[#0B1F42] bg-amber-400 hover:bg-amber-500 rounded-lg transition-colors cursor-pointer"
            >
              {t.nav.getInvolved}
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
