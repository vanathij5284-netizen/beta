import { Mail, MapPin, Phone } from 'lucide-react';
import { Language, PageId, SITE_INFO } from '../data/siteContent';
import { TRANSLATIONS } from '../data/translations';

interface FooterProps {
  language: Language;
  onNavigate: (page: PageId) => void;
}

/**
 * Institutional Footer with Bilingual Support, Address, Phone, Email, Social Links, and Site Links.
 */
export function Footer({ language, onNavigate }: FooterProps) {
  const t = TRANSLATIONS[language];

  const footerLinks: Array<{ id: PageId; label: string }> = [
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'programmes', label: t.nav.programmes },
    { id: 'news', label: t.nav.news },
    { id: 'gallery', label: t.nav.gallery },
    { id: 'get-involved', label: t.nav.getInvolved },
    { id: 'contact', label: t.nav.contact },
  ];

  return (
    <footer className="bg-[#0B1F42] text-slate-200 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Column 1: Identity & Mission */}
          <div className="lg:col-span-5">
            <h2 className="font-display font-bold text-xl text-white tracking-tight">
              {t.brandName}
            </h2>
            <p className="mt-3 text-base text-slate-300 leading-relaxed max-w-md">
              {t.footer.missionSummary}
            </p>
            <p className="mt-4 text-sm text-amber-300 font-medium">{t.footer.officeHours}</p>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="lg:col-span-3">
            <h3 className="font-display font-semibold text-base text-white">
              {t.footer.exploreHeading}
            </h3>
            <ul className="mt-4 space-y-1.5">
              {footerLinks.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(item.id);
                    }}
                    className="inline-flex items-center min-h-[36px] text-sm text-slate-300 hover:text-amber-300 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Address, Phone, Email & Social Links */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="font-display font-semibold text-base text-white">
              {t.footer.contactHeading}
            </h3>

            <div className="flex items-start gap-3 text-sm text-slate-300">
              <MapPin className="w-4 h-4 mt-1 text-amber-400 shrink-0" aria-hidden="true" />
              <address className="not-italic leading-relaxed">
                {SITE_INFO.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            </div>

            <div className="flex items-center gap-3 text-sm">
              <Phone className="w-4 h-4 text-amber-400 shrink-0" aria-hidden="true" />
              <a
                href={SITE_INFO.phoneHref}
                className="text-slate-300 hover:text-amber-300 transition-colors tabular-nums"
              >
                {SITE_INFO.phone}
              </a>
            </div>

            <div className="flex items-center gap-3 text-sm">
              <Mail className="w-4 h-4 text-amber-400 shrink-0" aria-hidden="true" />
              <a
                href={SITE_INFO.emailHref}
                className="text-slate-300 hover:text-amber-300 transition-colors"
              >
                {SITE_INFO.email}
              </a>
            </div>

            <div className="pt-2">
              <p className="text-xs font-medium text-slate-400 mb-2.5">
                {t.footer.connectLabel}
              </p>
              <div className="flex flex-wrap items-center gap-2.5">
                {SITE_INFO.socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    onClick={(e) => {
                      if (social.href === '#contact') {
                        e.preventDefault();
                        onNavigate('contact');
                      }
                    }}
                    aria-label={`${SITE_INFO.name} on ${social.label}`}
                    className="inline-flex items-center justify-center min-h-[40px] px-3.5 rounded-lg border border-white/15 text-sm font-medium text-white hover:border-amber-400 hover:text-amber-300 transition-colors"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} {t.brandName} · {SITE_INFO.shortLocation}.
          </p>
          <p>{t.footer.rightsNote}</p>
        </div>
      </div>
    </footer>
  );
}
