import { useEffect, useState } from 'react';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';
import { Footer } from './components/Footer';
import { GalleryPage } from './components/GalleryPage';
import { GetInvolvedPage } from './components/GetInvolvedPage';
import { HomePage } from './components/HomePage';
import { Navbar } from './components/Navbar';
import { NewsDetailPage, NewsPage } from './components/NewsPage';
import { NotFoundPage } from './components/NotFoundPage';
import { ProgrammesPage } from './components/ProgrammesPage';
import { Language, NEWS_POSTS, PageId, SITE_INFO } from './data/siteContent';

interface RouteState {
  page: PageId;
  articleId?: string;
}

function parseRouteFromLocation(): RouteState {
  const pathname = window.location.pathname;
  if (pathname !== '/' && pathname !== '/index.html') {
    return { page: '404' };
  }

  const rawHash = window.location.hash.replace(/^#/, '').trim();
  if (!rawHash || rawHash === 'home') {
    return { page: 'home' };
  }

  if (
    rawHash === 'about' ||
    rawHash === 'programmes' ||
    rawHash === 'news' ||
    rawHash === 'gallery' ||
    rawHash === 'get-involved' ||
    rawHash === 'contact'
  ) {
    return { page: rawHash };
  }

  if (rawHash.startsWith('news/')) {
    const slug = rawHash.slice('news/'.length);
    const exists = NEWS_POSTS.some((post) => post.id === slug);
    return exists ? { page: 'news-detail', articleId: slug } : { page: '404' };
  }

  return { page: '404' };
}

function updateSeoMeta(title: string, description: string) {
  document.title = title;

  const setMeta = (selector: string, content: string) => {
    const el = document.querySelector(selector);
    if (el) el.setAttribute('content', content);
  };

  setMeta('meta[name="description"]', description);
  setMeta('meta[property="og:title"]', title);
  setMeta('meta[property="og:description"]', description);
  setMeta('meta[name="twitter:title"]', title);
  setMeta('meta[name="twitter:description"]', description);
}

/**
 * Root Application Component — Don Bosco Youth Village
 * Manages routing, English/Tamil language toggle, and per-page SEO metadata.
 */
export default function App() {
  const [route, setRoute] = useState<RouteState>(() => parseRouteFromLocation());
  const [language, setLanguage] = useState<Language>(() => {
    try {
      const saved = window.localStorage.getItem('dbyv_lang');
      return saved === 'ta' ? 'ta' : 'en';
    } catch {
      return 'en';
    }
  });

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(parseRouteFromLocation());
    };
    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handleHashChange);
    };
  }, []);

  // Sync <html lang="..."> and persist language preference
  useEffect(() => {
    document.documentElement.lang = language === 'ta' ? 'ta' : 'en';
    try {
      window.localStorage.setItem('dbyv_lang', language);
    } catch {
      // Ignore storage errors in restricted environments
    }
  }, [language]);

  // Update SEO title and OpenGraph/meta descriptions per active route
  useEffect(() => {
    const base = SITE_INFO.name;
    switch (route.page) {
      case 'home':
        updateSeoMeta(
          `${base} – Youth & Community Centre, Keeranur`,
          'Don Bosco Youth Village is a Salesian youth and community centre in Susaipudayanpatti, Keeranur, Tiruchy offering youth training, sports, and community programmes.',
        );
        break;
      case 'about':
        updateSeoMeta(
          `About Us | ${base}`,
          'Learn about the history, vision, Salesian preventive system, Don Bosco story, and leadership team at Don Bosco Youth Village, Keeranur.',
        );
        break;
      case 'programmes':
        updateSeoMeta(
          `Programmes | ${base}`,
          'Explore youth skill training, women’s empowerment, job fairs, evening study centres, and sports programmes at Don Bosco Youth Village.',
        );
        break;
      case 'news':
        updateSeoMeta(
          `News & Events | ${base}`,
          'Read recent community celebrations, youth leadership workshops, and campus events at Don Bosco Youth Village, Susaipudayanpatti.',
        );
        break;
      case 'news-detail': {
        const article = NEWS_POSTS.find((p) => p.id === route.articleId);
        updateSeoMeta(
          article ? `${article.title} | ${base}` : `News | ${base}`,
          article
            ? article.summary
            : 'Community news and updates from Don Bosco Youth Village, Keeranur.',
        );
        break;
      }
      case 'gallery':
        updateSeoMeta(
          `Gallery | ${base}`,
          'Browse photos of campus life, vocational training, sports matches, and community gatherings at Don Bosco Youth Village.',
        );
        break;
      case 'get-involved':
        updateSeoMeta(
          `Get Involved | ${base}`,
          'Volunteer as a mentor, support rural youth training, or enquire about joining programmes at Don Bosco Youth Village, Keeranur.',
        );
        break;
      case 'contact':
        updateSeoMeta(
          `Contact Us | ${base}`,
          'Visit Don Bosco Youth Village in Susaipudayanpatti, Keeranur, Tiruchy or contact our office by phone, email, or message.',
        );
        break;
      case '404':
        updateSeoMeta(
          `Page Not Found | ${base}`,
          'The requested page could not be found on the Don Bosco Youth Village website.',
        );
        break;
    }
  }, [route]);

  const handleNavigate = (page: PageId) => {
    const targetHash = page === 'home' ? '#home' : `#${page}`;
    setRoute({ page });
    if (window.location.pathname !== '/') {
      window.history.pushState(null, '', `/${targetHash}`);
    } else if (window.location.hash !== targetHash) {
      window.history.pushState(null, '', targetHash);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenArticle = (articleId: string) => {
    const exists = NEWS_POSTS.some((p) => p.id === articleId);
    if (!exists) {
      handleNavigate('404');
      return;
    }
    const targetHash = `#news/${articleId}`;
    setRoute({ page: 'news-detail', articleId });
    if (window.location.pathname !== '/') {
      window.history.pushState(null, '', `/${targetHash}`);
    } else if (window.location.hash !== targetHash) {
      window.history.pushState(null, '', targetHash);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const activeArticle =
    route.page === 'news-detail'
      ? NEWS_POSTS.find((p) => p.id === route.articleId)
      : undefined;

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <a
        href="#main-content"
        onClick={(e) => {
          e.preventDefault();
          const main = document.getElementById('main-content');
          main?.focus();
          main?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-amber-400 focus:text-[#0B1F42] focus:font-semibold focus:rounded-lg"
      >
        {language === 'ta' ? 'முதன்மை உள்ளடக்கத்திற்குச் செல்ல' : 'Skip to main content'}
      </a>

      <Navbar
        currentPage={route.page}
        language={language}
        onNavigate={handleNavigate}
        onToggleLanguage={setLanguage}
      />

      <main id="main-content" tabIndex={-1} className="flex-1 flex flex-col focus:outline-none">
        {route.page === 'home' && (
          <HomePage
            language={language}
            onNavigate={handleNavigate}
            onOpenArticle={handleOpenArticle}
          />
        )}
        {route.page === 'about' && (
          <AboutPage language={language} onNavigate={handleNavigate} />
        )}
        {route.page === 'programmes' && (
          <ProgrammesPage language={language} onNavigate={handleNavigate} />
        )}
        {route.page === 'news' && (
          <NewsPage language={language} onOpenArticle={handleOpenArticle} />
        )}
        {route.page === 'news-detail' && activeArticle && (
          <NewsDetailPage
            article={activeArticle}
            onBack={() => handleNavigate('news')}
            onOpenArticle={handleOpenArticle}
            onNavigate={handleNavigate}
          />
        )}
        {route.page === 'gallery' && <GalleryPage language={language} />}
        {route.page === 'get-involved' && (
          <GetInvolvedPage language={language} onNavigate={handleNavigate} />
        )}
        {route.page === 'contact' && <ContactPage language={language} />}
        {route.page === '404' && (
          <NotFoundPage language={language} onNavigate={handleNavigate} />
        )}
      </main>

      <Footer language={language} onNavigate={handleNavigate} />
    </div>
  );
}
