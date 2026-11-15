import { ArrowLeft, ArrowRight, Calendar } from 'lucide-react';
import { Language, NEWS_POSTS, NewsArticle, PageId } from '../data/siteContent';
import { TRANSLATIONS } from '../data/translations';
import { ImageWithFallback } from './ImageWithFallback';

interface NewsPageProps {
  language: Language;
  onOpenArticle: (articleId: string) => void;
}

interface NewsDetailPageProps {
  article: NewsArticle;
  onBack: () => void;
  onOpenArticle: (articleId: string) => void;
  onNavigate: (page: PageId) => void;
}

/**
 * News & Events List Page
 */
export function NewsPage({ language, onOpenArticle }: NewsPageProps) {
  const t = TRANSLATIONS[language].pages;

  return (
    <div>
      <section className="bg-[#0F2D5C] text-white py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-amber-300">{t.newsKicker}</p>
          <h1 className="mt-2 font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white [text-wrap:balance]">
            {t.newsTitle}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-200 max-w-2xl leading-relaxed">
            {t.newsSubtitle}
          </p>
        </div>
      </section>

      <section aria-labelledby="all-news-heading" className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="all-news-heading" className="sr-only">
            All News and Events
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {NEWS_POSTS.map((post) => (
              <article
                key={post.id}
                className="flex flex-col bg-white border border-slate-200 rounded-xl overflow-hidden transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
              >
                <button
                  type="button"
                  onClick={() => onOpenArticle(post.id)}
                  className="aspect-[4/3] w-full bg-slate-100 overflow-hidden text-left cursor-pointer"
                  aria-label={`Read ${post.title}`}
                >
                  <ImageWithFallback
                    src={post.image}
                    alt={post.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.03]"
                    fallbackTitle={post.title}
                  />
                </button>

                <div className="flex flex-col flex-1 p-6 sm:p-7">
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                    <Calendar className="w-3.5 h-3.5 text-[#1B4382]" aria-hidden="true" />
                    <time>{post.date}</time>
                    <span aria-hidden="true">·</span>
                    <span className="text-[#1B4382] font-semibold">{post.category}</span>
                  </div>

                  <h3 className="mt-3 font-display font-bold text-xl sm:text-2xl text-[#0F2D5C] leading-snug [text-wrap:balance]">
                    <button
                      type="button"
                      onClick={() => onOpenArticle(post.id)}
                      className="text-left hover:text-[#1B4382] transition-colors cursor-pointer"
                    >
                      {post.title}
                    </button>
                  </h3>

                  <p className="mt-3 text-base text-slate-600 leading-relaxed flex-1">
                    {post.summary}
                  </p>

                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={() => onOpenArticle(post.id)}
                      className="inline-flex items-center gap-2 min-h-[44px] px-4 py-2 rounded-lg bg-slate-100 hover:bg-amber-400 text-sm font-semibold text-[#0F2D5C] hover:text-[#0B1F42] transition-colors cursor-pointer"
                    >
                      <span>{TRANSLATIONS[language].home.readStory}</span>
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

/**
 * News & Events Detail-Page Template
 */
export function NewsDetailPage({
  article,
  onBack,
  onOpenArticle,
  onNavigate,
}: NewsDetailPageProps) {
  const relatedPosts = NEWS_POSTS.filter((p) => p.id !== article.id).slice(0, 2);

  return (
    <div>
      <section className="bg-slate-50 border-b border-slate-200 py-10 sm:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 min-h-[44px] text-sm font-semibold text-[#0F2D5C] hover:text-[#1B4382] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            <span>Back to News &amp; Events</span>
          </button>

          <div className="mt-6 flex flex-wrap items-center gap-2 text-sm text-slate-600">
            <Calendar className="w-4 h-4 text-[#1B4382]" aria-hidden="true" />
            <time>{article.date}</time>
            <span aria-hidden="true">·</span>
            <span className="font-semibold text-[#1B4382]">{article.category}</span>
            <span aria-hidden="true">·</span>
            <span>By {article.author}</span>
          </div>

          <h1 className="mt-3 font-display font-bold text-3xl sm:text-4xl text-[#0F2D5C] leading-tight [text-wrap:balance]">
            {article.title}
          </h1>

          <p className="mt-4 text-lg text-slate-700 leading-relaxed max-w-2xl">
            {article.summary}
          </p>
        </div>
      </section>

      <article className="py-12 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <figure className="mb-10">
            <div className="aspect-[16/10] w-full rounded-2xl overflow-hidden border border-slate-200 bg-slate-100">
              <ImageWithFallback
                src={article.image}
                alt={article.imageAlt}
                className="w-full h-full object-cover"
                fallbackTitle={article.title}
              />
            </div>
            <figcaption className="mt-3 text-sm text-slate-500">
              {article.imageCaption}
            </figcaption>
          </figure>

          <div className="space-y-5 text-base sm:text-lg text-slate-700 leading-relaxed max-w-prose">
            {article.fullStory.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
            <button
              type="button"
              onClick={onBack}
              className="inline-flex items-center gap-2 min-h-[44px] px-5 py-2.5 rounded-lg border border-slate-300 text-sm font-semibold text-[#0F2D5C] hover:bg-slate-50 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              <span>All News &amp; Events</span>
            </button>

            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 min-h-[44px] px-5 py-2.5 rounded-lg bg-amber-400 hover:bg-amber-500 text-sm font-semibold text-[#0B1F42] transition-colors cursor-pointer"
            >
              <span>Share an Enquiry or Feedback</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </article>

      {relatedPosts.length > 0 && (
        <section
          aria-labelledby="related-news-heading"
          className="py-14 bg-slate-50 border-t border-slate-200"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              id="related-news-heading"
              className="font-display font-bold text-xl sm:text-2xl text-[#0F2D5C] mb-6"
            >
              More from Don Bosco Youth Village
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedPosts.map((related) => (
                <article
                  key={related.id}
                  className="bg-white border border-slate-200 rounded-xl p-5 flex flex-col justify-between transition-transform duration-200 hover:-translate-y-0.5"
                >
                  <div>
                    <p className="text-xs font-medium text-slate-500">
                      {related.date} · {related.category}
                    </p>
                    <h3 className="mt-2 font-display font-bold text-lg text-[#0F2D5C] leading-snug">
                      {related.title}
                    </h3>
                  </div>
                  <div className="mt-4">
                    <button
                      type="button"
                      onClick={() => onOpenArticle(related.id)}
                      className="inline-flex items-center gap-1.5 min-h-[40px] text-sm font-semibold text-[#0F2D5C] hover:text-[#1B4382] cursor-pointer"
                    >
                      <span>Read article</span>
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
