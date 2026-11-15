import { FormEvent, useState } from 'react';
import { CheckCircle2, ExternalLink, Mail, MapPin, Phone } from 'lucide-react';
import { Language, SITE_INFO } from '../data/siteContent';
import { TRANSLATIONS } from '../data/translations';

interface ContactPageProps {
  language: Language;
}

/**
 * Phase 3 Contact Page:
 * 1. Contact Form (Name, Phone, Email, Message) with validation & confirmation
 * 2. Address, Phone, Email & Office Hours
 * 3. Embedded Google Map for Susaipudayanpatti, Keeranur, Tiruchy
 */
export function ContactPage({ language }: ContactPageProps) {
  const t = TRANSLATIONS[language].pages;

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    const cleanedDigits = phone.replace(/\D/g, '');

    if (name.trim().length < 2) {
      setErrorMsg(
        language === 'ta'
          ? 'தயவுசெய்து உங்கள் பெயரை உள்ளிடவும்.'
          : 'Please enter your full name.',
      );
      return;
    }

    if (cleanedDigits.length < 10) {
      setErrorMsg(
        language === 'ta'
          ? 'செல்லுபடியாகும் 10 இலக்க தொலைபேசி எண்ணை உள்ளிடவும்.'
          : 'Please enter a valid 10-digit phone number.',
      );
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setErrorMsg(
        language === 'ta'
          ? 'செல்லுபடியாகும் மின்னஞ்சல் முகவரியை உள்ளிடவும்.'
          : 'Please enter a valid email address.',
      );
      return;
    }

    if (message.trim().length < 8) {
      setErrorMsg(
        language === 'ta'
          ? 'குறைந்தது 8 எழுத்துகள் கொண்ட தகவலை உள்ளிடவும்.'
          : 'Please share a brief message (at least 8 characters).',
      );
      return;
    }

    setSubmitted(true);
  };

  return (
    <div>
      {/* Page Header */}
      <section className="bg-[#0F2D5C] text-white py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-amber-300">{t.contactKicker}</p>
          <h1 className="mt-2 font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white [text-wrap:balance]">
            {t.contactTitle}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-200 max-w-2xl leading-relaxed">
            {t.contactSubtitle}
          </p>
        </div>
      </section>

      {/* Contact Details + Form */}
      <section aria-labelledby="contact-details-heading" className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Left: Address, Phone, Email & Map */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h2
                id="contact-details-heading"
                className="font-display font-bold text-2xl text-[#0F2D5C]"
              >
                {language === 'ta' ? 'மைய முகவரி' : 'Centre Address'}
              </h2>
              <p className="mt-2 text-base text-slate-600 leading-relaxed">
                {language === 'ta'
                  ? 'திங்கள் முதல் சனி வரை மாணவர் சேர்க்கை மற்றும் நேரில் சந்திக்க திறந்திருக்கும்.'
                  : 'Open Monday to Saturday for student admissions, community meetings, and campus visits.'}
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-slate-200">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#1B4382] mt-1 shrink-0" aria-hidden="true" />
                <address className="not-italic text-base text-slate-700 leading-relaxed">
                  {SITE_INFO.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#1B4382] shrink-0" aria-hidden="true" />
                <a
                  href={SITE_INFO.phoneHref}
                  className="text-base text-slate-700 hover:text-[#0F2D5C] font-medium tabular-nums"
                >
                  {SITE_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#1B4382] shrink-0" aria-hidden="true" />
                <a
                  href={SITE_INFO.emailHref}
                  className="text-base text-slate-700 hover:text-[#0F2D5C] font-medium"
                >
                  {SITE_INFO.email}
                </a>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="pt-2">
              <div className="flex items-center justify-between gap-2 mb-2.5">
                <h3 className="font-display font-semibold text-base text-[#0F2D5C]">
                  {language === 'ta' ? 'வளாக வரைபடம்' : 'Campus Location Map'}
                </h3>
                <a
                  href={SITE_INFO.mapExternalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#1B4382] hover:text-[#0F2D5C] underline underline-offset-2"
                >
                  <span>{language === 'ta' ? 'Google Maps-ல் திறக்க' : 'Open in Google Maps'}</span>
                  <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </div>

              <div className="aspect-[16/10] w-full rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
                <iframe
                  title="Google Map of Don Bosco Youth Village, Susaipudayanpatti, Keeranur, Tiruchy"
                  src={SITE_INFO.mapEmbedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full border-0"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          {/* Right: Validated Contact Form (Name, Phone, Email, Message) */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8">
              <h2 className="font-display font-bold text-xl sm:text-2xl text-[#0F2D5C]">
                {language === 'ta' ? 'செய்தி அனுப்புங்கள்' : 'Send Us a Message'}
              </h2>
              <p className="mt-1.5 text-sm sm:text-base text-slate-600">
                {language === 'ta'
                  ? 'கீழே உள்ள படிவத்தை நிரப்பவும். எங்கள் குழு விரைவில் தொடர்பு கொள்ளும்.'
                  : 'Fill out the form below and our office team in Susaipudayanpatti will respond soon.'}
              </p>

              {submitted ? (
                <div
                  role="status"
                  className="mt-6 p-6 bg-white border border-slate-200 rounded-xl space-y-3"
                >
                  <div className="flex items-center gap-2 text-[#0F2D5C] font-bold text-lg">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" aria-hidden="true" />
                    <span>
                      {language === 'ta'
                        ? `நன்றி, ${name}! உங்கள் தகவல் பெறப்பட்டது.`
                        : `Thank you, ${name}! Your message has been received.`}
                    </span>
                  </div>
                  <p className="text-base text-slate-600">
                    {language === 'ta'
                      ? `நாங்கள் விரைவில் ${phone} அல்லது ${email} வழியாக உங்களைத் தொடர்பு கொள்வோம்.`
                      : `Our team will get back to you via ${phone} or ${email} during office hours.`}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setName('');
                      setPhone('');
                      setEmail('');
                      setMessage('');
                    }}
                    className="min-h-[44px] px-4 py-2 rounded-lg bg-[#0F2D5C] text-white text-sm font-semibold hover:bg-[#1B4382] transition-colors cursor-pointer"
                  >
                    {language === 'ta' ? 'மற்றொரு செய்தி அனுப்ப' : 'Send Another Message'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-5">
                  {errorMsg && (
                    <div
                      role="alert"
                      className="p-3.5 rounded-lg bg-red-50 border border-red-200 text-sm font-medium text-red-800"
                    >
                      {errorMsg}
                    </div>
                  )}

                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-sm font-semibold text-[#0F2D5C] mb-1.5"
                    >
                      {language === 'ta' ? 'உங்கள் பெயர் *' : 'Your Name *'}
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Arul Raj"
                      className="w-full min-h-[44px] px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-900 placeholder:text-slate-400"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="block text-sm font-semibold text-[#0F2D5C] mb-1.5"
                      >
                        {language === 'ta' ? 'தொலைபேசி எண் *' : 'Phone Number *'}
                      </label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full min-h-[44px] px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-900 placeholder:text-slate-400 tabular-nums"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-sm font-semibold text-[#0F2D5C] mb-1.5"
                      >
                        {language === 'ta' ? 'மின்னஞ்சல் *' : 'Email Address *'}
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        className="w-full min-h-[44px] px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-900 placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-sm font-semibold text-[#0F2D5C] mb-1.5"
                    >
                      {language === 'ta' ? 'செய்தி / விவரம் *' : 'Message *'}
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={
                        language === 'ta'
                          ? 'உங்கள் கேள்வி அல்லது தகவலை இங்கே எழுதவும்...'
                          : 'Write your question, visit request, or message here...'
                      }
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-900 placeholder:text-slate-400"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center min-h-[48px] px-6 py-3 rounded-lg bg-amber-400 hover:bg-amber-500 text-[#0B1F42] font-semibold text-base transition-colors cursor-pointer"
                  >
                    {language === 'ta' ? 'செய்தியை அனுப்புக' : 'Submit Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
