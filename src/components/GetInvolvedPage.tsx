import { FormEvent, useState } from 'react';
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  HandHeart,
  HeartHandshake,
} from 'lucide-react';
import {
  DONATION_PLACEHOLDER_DETAILS,
  Language,
  PageId,
  PROGRAMMES_LIST,
  SITE_INFO,
} from '../data/siteContent';
import { TRANSLATIONS } from '../data/translations';

interface GetInvolvedPageProps {
  language: Language;
  onNavigate: (page: PageId) => void;
}

/**
 * Phase 3 Get Involved Page:
 * 1. Volunteer (mentoring, study support, career coaching) + sign-up form
 * 2. Donate (sponsor a trainee, study kits, campus fund) + pledge/bank info
 * 3. Enquire about Programmes + quick programme enquiry form
 */
export function GetInvolvedPage({ language, onNavigate }: GetInvolvedPageProps) {
  const t = TRANSLATIONS[language].pages;

  // Volunteer form state
  const [volName, setVolName] = useState('');
  const [volContact, setVolContact] = useState('');
  const [volArea, setVolArea] = useState('Evening Study Mentoring');
  const [volNote, setVolNote] = useState('');
  const [volError, setVolError] = useState('');
  const [volDone, setVolDone] = useState(false);

  // Donation pledge state
  const [donName, setDonName] = useState('');
  const [donEmail, setDonEmail] = useState('');
  const [donPurpose, setDonPurpose] = useState('Sponsor a Youth Skill Trainee');
  const [donError, setDonError] = useState('');
  const [donDone, setDonDone] = useState(false);

  // Programme enquiry state
  const [progName, setProgName] = useState('');
  const [progPhone, setProgPhone] = useState('');
  const [progSelected, setProgSelected] = useState(PROGRAMMES_LIST[0].title);
  const [progError, setProgError] = useState('');
  const [progDone, setProgDone] = useState(false);

  const handleVolunteerSubmit = (e: FormEvent) => {
    e.preventDefault();
    setVolError('');
    if (volName.trim().length < 2) {
      setVolError('Please enter your name.');
      return;
    }
    if (volContact.trim().length < 6) {
      setVolError('Please enter your phone number or email address.');
      return;
    }
    setVolDone(true);
  };

  const handleDonateSubmit = (e: FormEvent) => {
    e.preventDefault();
    setDonError('');
    if (donName.trim().length < 2) {
      setDonError('Please enter your name.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(donEmail.trim())) {
      setDonError('Please enter a valid email address so we can send receipt details.');
      return;
    }
    setDonDone(true);
  };

  const handleProgrammeSubmit = (e: FormEvent) => {
    e.preventDefault();
    setProgError('');
    if (progName.trim().length < 2) {
      setProgError('Please enter your name.');
      return;
    }
    if (progPhone.replace(/\D/g, '').length < 10) {
      setProgError('Please enter a valid 10-digit phone number.');
      return;
    }
    setProgDone(true);
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      {/* Page Header */}
      <section className="bg-[#0F2D5C] text-white py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-amber-300">{t.getInvolvedKicker}</p>
          <h1 className="mt-2 font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white [text-wrap:balance]">
            {t.getInvolvedTitle}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-200 max-w-2xl leading-relaxed">
            {t.getInvolvedSubtitle}
          </p>

          {/* Quick section jump buttons */}
          <div className="mt-7 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => scrollToSection('volunteer-section')}
              className="inline-flex items-center min-h-[44px] px-4 py-2 rounded-lg bg-amber-400 hover:bg-amber-500 text-[#0B1F42] font-semibold text-sm transition-colors cursor-pointer"
            >
              {language === 'ta' ? 'தன்னார்வப் பணி' : '1. Volunteer'}
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('donate-section')}
              className="inline-flex items-center min-h-[44px] px-4 py-2 rounded-lg border border-white/40 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-colors cursor-pointer"
            >
              {language === 'ta' ? 'நன்கொடை' : '2. Donate'}
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('enquire-section')}
              className="inline-flex items-center min-h-[44px] px-4 py-2 rounded-lg border border-white/40 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-colors cursor-pointer"
            >
              {language === 'ta' ? 'திட்டங்கள் பற்றி கேட்க' : '3. Enquire about Programmes'}
            </button>
          </div>
        </div>
      </section>

      {/* =====================================================================
          1. VOLUNTEER SECTION
          ===================================================================== */}
      <section
        id="volunteer-section"
        aria-labelledby="volunteer-heading"
        className="scroll-mt-20 py-16 sm:py-20 bg-white"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center">
              <HandHeart className="w-6 h-6 text-[#0F2D5C]" aria-hidden="true" />
            </div>
            <p className="text-sm font-semibold text-[#1B4382]">01 · Share Your Time</p>
            <h2
              id="volunteer-heading"
              className="font-display font-bold text-2xl sm:text-3xl text-[#0F2D5C]"
            >
              {language === 'ta' ? 'தன்னார்வலராக இணையுங்கள்' : 'Volunteer with Our Youth'}
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Educators, college graduates, sports coaches, and professionals can share a few
              hours a week or join weekend camps in Susaipudayanpatti.
            </p>
            <ul className="space-y-2 text-sm text-slate-700 pt-2">
              <li>· Evening Study &amp; Spoken English mentoring (5:30 PM – 7:00 PM)</li>
              <li>· Career talks &amp; resume workshops for job-seekers</li>
              <li>· Volleyball, football &amp; athletics coaching</li>
            </ul>
          </div>

          <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8">
            <h3 className="font-display font-bold text-xl text-[#0F2D5C]">
              Volunteer Registration
            </h3>

            {volDone ? (
              <div role="status" className="mt-5 p-5 bg-white border border-slate-200 rounded-xl">
                <div className="flex items-center gap-2 font-bold text-[#0F2D5C]">
                  <CheckCircle2 className="w-5 h-5 text-amber-500" aria-hidden="true" />
                  <span>Thank you for offering to volunteer, {volName}!</span>
                </div>
                <p className="mt-2 text-sm text-slate-600">
                  Our coordinator will reach out at {volContact} regarding {volArea}.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setVolDone(false);
                    setVolName('');
                    setVolContact('');
                    setVolNote('');
                  }}
                  className="mt-4 min-h-[40px] px-4 py-2 rounded-lg bg-[#0F2D5C] text-white text-sm font-semibold cursor-pointer"
                >
                  Submit Another Response
                </button>
              </div>
            ) : (
              <form onSubmit={handleVolunteerSubmit} noValidate className="mt-5 space-y-4">
                {volError && (
                  <div
                    role="alert"
                    className="p-3 rounded-lg bg-red-50 border border-red-200 text-sm text-red-800"
                  >
                    {volError}
                  </div>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="vol-name"
                      className="block text-sm font-semibold text-[#0F2D5C] mb-1"
                    >
                      Full Name *
                    </label>
                    <input
                      id="vol-name"
                      type="text"
                      value={volName}
                      onChange={(e) => setVolName(e.target.value)}
                      placeholder="Your name"
                      className="w-full min-h-[44px] px-3.5 py-2 rounded-lg bg-white border border-slate-300"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="vol-contact"
                      className="block text-sm font-semibold text-[#0F2D5C] mb-1"
                    >
                      Phone or Email *
                    </label>
                    <input
                      id="vol-contact"
                      type="text"
                      value={volContact}
                      onChange={(e) => setVolContact(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full min-h-[44px] px-3.5 py-2 rounded-lg bg-white border border-slate-300"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="vol-area"
                    className="block text-sm font-semibold text-[#0F2D5C] mb-1"
                  >
                    Area of Interest
                  </label>
                  <select
                    id="vol-area"
                    value={volArea}
                    onChange={(e) => setVolArea(e.target.value)}
                    className="w-full min-h-[44px] px-3.5 py-2 rounded-lg bg-white border border-slate-300"
                  >
                    <option value="Evening Study Mentoring">Evening Study Mentoring</option>
                    <option value="Computer & Spoken English Coaching">
                      Computer &amp; Spoken English Coaching
                    </option>
                    <option value="Sports & Youth Clubs">Sports &amp; Youth Clubs</option>
                    <option value="Career Guidance & Job Fairs">
                      Career Guidance &amp; Job Fairs
                    </option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="vol-note"
                    className="block text-sm font-semibold text-[#0F2D5C] mb-1"
                  >
                    Availability (Optional)
                  </label>
                  <input
                    id="vol-note"
                    type="text"
                    value={volNote}
                    onChange={(e) => setVolNote(e.target.value)}
                    placeholder="e.g. Saturdays or weekday evenings"
                    className="w-full min-h-[44px] px-3.5 py-2 rounded-lg bg-white border border-slate-300"
                  />
                </div>
                <button
                  type="submit"
                  className="min-h-[44px] px-6 py-2.5 rounded-lg bg-amber-400 hover:bg-amber-500 text-[#0B1F42] font-semibold text-sm transition-colors cursor-pointer"
                >
                  Offer to Volunteer
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* =====================================================================
          2. DONATE SECTION
          ===================================================================== */}
      <section
        id="donate-section"
        aria-labelledby="donate-heading"
        className="scroll-mt-20 py-16 sm:py-20 bg-slate-50 border-y border-slate-200/80"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center">
              <HeartHandshake className="w-6 h-6 text-[#0F2D5C]" aria-hidden="true" />
            </div>
            <p className="text-sm font-semibold text-[#1B4382]">02 · Support the Mission</p>
            <h2
              id="donate-heading"
              className="font-display font-bold text-2xl sm:text-3xl text-[#0F2D5C]"
            >
              {language === 'ta' ? 'கல்வி மற்றும் பயிற்சிக்கு உதவுங்கள்' : 'Donate & Sponsor a Learner'}
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Your generosity keeps vocational courses, evening study notebooks, and sports
              equipment accessible for rural families at zero or nominal cost.
            </p>

            {/* Placeholder Bank / UPI Details */}
            <div className="bg-white border border-slate-200 rounded-xl p-5 text-sm space-y-1.5">
              <p className="font-display font-bold text-[#0F2D5C]">
                Direct Transfer Details (Placeholder)
              </p>
              <p className="text-slate-600">
                Account Name: {DONATION_PLACEHOLDER_DETAILS.accountName}
              </p>
              <p className="text-slate-600">Bank: {DONATION_PLACEHOLDER_DETAILS.bankName}</p>
              <p className="text-slate-600 tabular-nums">
                A/C No: {DONATION_PLACEHOLDER_DETAILS.accountNumber}
              </p>
              <p className="text-slate-600 tabular-nums">
                IFSC: {DONATION_PLACEHOLDER_DETAILS.ifscCode}
              </p>
              <p className="text-slate-600">UPI: {DONATION_PLACEHOLDER_DETAILS.upiId}</p>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8">
            <h3 className="font-display font-bold text-xl text-[#0F2D5C]">
              Donation &amp; Sponsorship Request
            </h3>
            <p className="mt-1 text-sm text-slate-600">
              Let us know how you wish to support so our office can share official receipt
              details.
            </p>

            {donDone ? (
              <div role="status" className="mt-5 p-5 bg-slate-50 border border-slate-200 rounded-xl">
                <div className="flex items-center gap-2 font-bold text-[#0F2D5C]">
                  <CheckCircle2 className="w-5 h-5 text-amber-500" aria-hidden="true" />
                  <span>Thank you for your generosity, {donName}!</span>
                </div>
                <p className="mt-2 text-sm text-slate-600">
                  We have noted your interest in “{donPurpose}” and will write to {donEmail} with
                  verified trust account details.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setDonDone(false);
                    setDonName('');
                    setDonEmail('');
                  }}
                  className="mt-4 min-h-[40px] px-4 py-2 rounded-lg bg-[#0F2D5C] text-white text-sm font-semibold cursor-pointer"
                >
                  New Pledge
                </button>
              </div>
            ) : (
              <form onSubmit={handleDonateSubmit} noValidate className="mt-5 space-y-4">
                {donError && (
                  <div
                    role="alert"
                    className="p-3 rounded-lg bg-red-50 border border-red-200 text-sm text-red-800"
                  >
                    {donError}
                  </div>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="don-name"
                      className="block text-sm font-semibold text-[#0F2D5C] mb-1"
                    >
                      Your Name *
                    </label>
                    <input
                      id="don-name"
                      type="text"
                      value={donName}
                      onChange={(e) => setDonName(e.target.value)}
                      placeholder="Your name"
                      className="w-full min-h-[44px] px-3.5 py-2 rounded-lg bg-slate-50 border border-slate-300"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="don-email"
                      className="block text-sm font-semibold text-[#0F2D5C] mb-1"
                    >
                      Email for Receipt *
                    </label>
                    <input
                      id="don-email"
                      type="email"
                      value={donEmail}
                      onChange={(e) => setDonEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full min-h-[44px] px-3.5 py-2 rounded-lg bg-slate-50 border border-slate-300"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="don-purpose"
                    className="block text-sm font-semibold text-[#0F2D5C] mb-1"
                  >
                    Support Area
                  </label>
                  <select
                    id="don-purpose"
                    value={donPurpose}
                    onChange={(e) => setDonPurpose(e.target.value)}
                    className="w-full min-h-[44px] px-3.5 py-2 rounded-lg bg-slate-50 border border-slate-300"
                  >
                    <option value="Sponsor a Youth Skill Trainee">
                      Sponsor a Youth Skill Trainee
                    </option>
                    <option value="Evening Study Books & Materials">
                      Evening Study Books &amp; Materials
                    </option>
                    <option value="Women's Tailoring & Self-Help Support">
                      Women’s Tailoring &amp; Self-Help Support
                    </option>
                    <option value="General Youth Village Fund">
                      General Youth Village Fund
                    </option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="min-h-[44px] px-6 py-2.5 rounded-lg bg-[#0F2D5C] hover:bg-[#1B4382] text-white font-semibold text-sm transition-colors cursor-pointer"
                >
                  Request Donation Details
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* =====================================================================
          3. ENQUIRE ABOUT PROGRAMMES SECTION
          ===================================================================== */}
      <section
        id="enquire-section"
        aria-labelledby="enquire-heading"
        className="scroll-mt-20 py-16 sm:py-20 bg-white"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-[#0F2D5C]" aria-hidden="true" />
            </div>
            <p className="text-sm font-semibold text-[#1B4382]">03 · Join a Batch</p>
            <h2
              id="enquire-heading"
              className="font-display font-bold text-2xl sm:text-3xl text-[#0F2D5C]"
            >
              {language === 'ta' ? 'திட்டங்களில் சேர விண்ணப்பிக்க' : 'Enquire About Programmes'}
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Looking for upcoming computer training, tailoring batches, job fair dates, or
              evening study admissions? Send a quick enquiry or call us at{' '}
              <a
                href={SITE_INFO.phoneHref}
                className="font-semibold text-[#0F2D5C] underline decoration-amber-400 tabular-nums"
              >
                {SITE_INFO.phone}
              </a>
              .
            </p>
            <button
              type="button"
              onClick={() => onNavigate('programmes')}
              className="inline-flex items-center gap-2 min-h-[44px] text-sm font-semibold text-[#0F2D5C] hover:text-[#1B4382] underline decoration-amber-400 decoration-2 underline-offset-4 cursor-pointer"
            >
              <span>Browse all programmes</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>

          <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8">
            <h3 className="font-display font-bold text-xl text-[#0F2D5C]">
              Quick Programme Enquiry
            </h3>

            {progDone ? (
              <div role="status" className="mt-5 p-5 bg-white border border-slate-200 rounded-xl">
                <div className="flex items-center gap-2 font-bold text-[#0F2D5C]">
                  <CheckCircle2 className="w-5 h-5 text-amber-500" aria-hidden="true" />
                  <span>Enquiry received for {progSelected}!</span>
                </div>
                <p className="mt-2 text-sm text-slate-600">
                  Thank you, {progName}. Our staff will call {progPhone} with the next batch
                  schedule.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setProgDone(false);
                    setProgName('');
                    setProgPhone('');
                  }}
                  className="mt-4 min-h-[40px] px-4 py-2 rounded-lg bg-[#0F2D5C] text-white text-sm font-semibold cursor-pointer"
                >
                  Enquire About Another Programme
                </button>
              </div>
            ) : (
              <form onSubmit={handleProgrammeSubmit} noValidate className="mt-5 space-y-4">
                {progError && (
                  <div
                    role="alert"
                    className="p-3 rounded-lg bg-red-50 border border-red-200 text-sm text-red-800"
                  >
                    {progError}
                  </div>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="prog-name"
                      className="block text-sm font-semibold text-[#0F2D5C] mb-1"
                    >
                      Applicant / Parent Name *
                    </label>
                    <input
                      id="prog-name"
                      type="text"
                      value={progName}
                      onChange={(e) => setProgName(e.target.value)}
                      placeholder="Your name"
                      className="w-full min-h-[44px] px-3.5 py-2 rounded-lg bg-white border border-slate-300"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="prog-phone"
                      className="block text-sm font-semibold text-[#0F2D5C] mb-1"
                    >
                      Phone Number *
                    </label>
                    <input
                      id="prog-phone"
                      type="tel"
                      value={progPhone}
                      onChange={(e) => setProgPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full min-h-[44px] px-3.5 py-2 rounded-lg bg-white border border-slate-300 tabular-nums"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="prog-select"
                    className="block text-sm font-semibold text-[#0F2D5C] mb-1"
                  >
                    Select Programme
                  </label>
                  <select
                    id="prog-select"
                    value={progSelected}
                    onChange={(e) => setProgSelected(e.target.value)}
                    className="w-full min-h-[44px] px-3.5 py-2 rounded-lg bg-white border border-slate-300"
                  >
                    {PROGRAMMES_LIST.map((item) => (
                      <option key={item.id} value={item.title}>
                        {item.title}
                      </option>
                    ))}
                  </select>
                </div>
                <button
                  type="submit"
                  className="min-h-[44px] px-6 py-2.5 rounded-lg bg-amber-400 hover:bg-amber-500 text-[#0B1F42] font-semibold text-sm transition-colors cursor-pointer"
                >
                  Request Batch Details
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
