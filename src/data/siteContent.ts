/**
 * ============================================================================
 * DON BOSCO YOUTH VILLAGE — CENTRALIZED CONTENT & PLACEHOLDERS (PHASE 1–3)
 * ============================================================================
 * Replace any placeholder copy, phone numbers, email addresses, team bios,
 * bank details, or dates below with your verified details.
 */

import heroCampusImg from '../assets/images/hero_youth_village_1794738358938.jpg';
import activitySkillImg from '../assets/images/activity_skill_training_1794738358790.jpg';
import activitySportsImg from '../assets/images/activity_youth_sports_1794738359917.jpg';
import activityCommunityImg from '../assets/images/activity_community_care_1794738360808.jpg';
import newsWomensDayImg from '../assets/images/news_womens_day_1794738360205.jpg';
import newsYouthMeetImg from '../assets/images/news_youth_meet_1794738360273.jpg';
import newsJobFairImg from '../assets/images/news_job_fair_1794738569116.jpg';
import teamDirectorImg from '../assets/images/team_director_portrait_1794738567263.jpg';
import teamCoordinatorImg from '../assets/images/team_coordinator_woman_1794738567095.jpg';
import teamTrainerImg from '../assets/images/team_trainer_man_1794738568461.jpg';
import aboutStoryImg from '../assets/images/about_story_mentoring_1794738568562.jpg';

export type Language = 'en' | 'ta';

export type PageId =
  | 'home'
  | 'about'
  | 'programmes'
  | 'news'
  | 'news-detail'
  | 'gallery'
  | 'get-involved'
  | 'contact'
  | '404';

export interface NavItem {
  id: 'home' | 'about' | 'programmes' | 'gallery' | 'contact';
  label: string;
}

export interface ActivityHighlight {
  id: string;
  indexLabel: string;
  category: string;
  title: string;
  description: string;
  schedule: string;
  image: string;
  imageAlt: string;
}

export type ProgrammeIconKey =
  | 'laptop'
  | 'heart'
  | 'briefcase'
  | 'users'
  | 'trophy'
  | 'book';

export interface ProgrammeItem {
  id: string;
  category: 'Training' | 'Women & Families' | 'Employment' | 'Community & Sports';
  icon: ProgrammeIconKey;
  title: string;
  shortDescription: string;
  fullDetails: string[];
  schedule: string;
  audience: string;
  image: string;
  imageAlt: string;
}

export interface NewsArticle {
  id: string;
  date: string;
  category: string;
  author: string;
  title: string;
  summary: string;
  fullStory: string[];
  image: string;
  imageAlt: string;
  imageCaption: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  photo: string;
  photoAlt: string;
}

export interface GalleryItem {
  id: string;
  category: 'Campus' | 'Training' | 'Sports' | 'Community';
  title: string;
  caption: string;
  image: string;
  imageAlt: string;
}

/**
 * Sticky navbar items (Kept consistent with Phase 1)
 */
export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'programmes', label: 'Programmes' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'contact', label: 'Contact' },
];

/**
 * Organization & Contact Details (Replace placeholders before launch)
 */
export const SITE_INFO = {
  name: 'Don Bosco Youth Village',
  shortLocation: 'Susaipudayanpatti, Keeranur, Tiruchy',
  addressLines: [
    'Don Bosco Youth Village',
    'Susaipudayanpatti, Keeranur',
    'Tiruchy District, Tamil Nadu 622502, India', // Placeholder PIN — verify exact postal code
  ],
  phone: '+91 4339 240 000', // Placeholder landline/mobile number
  phoneHref: 'tel:+914339240000',
  email: 'contact@dbyvkeeranur.org', // Placeholder email address
  emailHref: 'mailto:contact@dbyvkeeranur.org',
  officeHours: 'Monday – Saturday · 9:00 AM – 5:30 PM',
  mapEmbedUrl:
    'https://www.google.com/maps?q=Keeranur,+Tamil+Nadu+622502,+India&output=embed',
  mapExternalUrl:
    'https://www.google.com/maps/search/?api=1&query=Susaipudayanpatti+Keeranur+Tamil+Nadu',
  socials: [
    { label: 'Facebook', href: '#contact' }, // Replace with real social URL
    { label: 'Instagram', href: '#contact' }, // Replace with real social URL
    { label: 'YouTube', href: '#contact' }, // Replace with real social URL
  ],
};

/**
 * HOME PAGE SECTION 1: HERO
 */
export const HERO_CONTENT = {
  locationLine: 'Susaipudayanpatti · Keeranur · Tiruchy, Tamil Nadu',
  headline: 'A welcoming home where rural youth learn, grow, and lead.',
  missionLine:
    'Guided by the Salesian spirit of Don Bosco, we walk alongside young people and families in Keeranur through education, practical skills, and community life.',
  primaryCta: 'Our Programmes',
  secondaryCta: 'Contact Us',
  heroImage: heroCampusImg,
  heroImageAlt:
    'Young people walking and smiling together across the sunlit courtyard of Don Bosco Youth Village in Tamil Nadu',
};

/**
 * HOME PAGE SECTION 2: WHO WE ARE
 */
export const WHO_WE_ARE_CONTENT = {
  kicker: 'Who We Are',
  heading: 'Rooted in Salesian hospitality for young people and families',
  paragraphs: [
    'Don Bosco Youth Village is a Salesian youth and community centre nestled in Susaipudayanpatti near Keeranur in Tiruchy District. Inspired by St. John Bosco’s preventive system of reason, faith, and loving-kindness, our campus offers a safe and joyful space where young people discover their strengths.',
    'Whether through evening study circles, vocational training, sports, or village outreach, we partner closely with parents, local schools, and women’s groups to build confident, compassionate communities across surrounding villages.',
  ],
  linkLabel: 'Read our story and mission',
};

/**
 * HOME PAGE SECTION 3: HIGHLIGHTS ROW (3 KEY ACTIVITIES)
 */
export const KEY_ACTIVITIES: ActivityHighlight[] = [
  {
    id: 'skills',
    indexLabel: '01',
    category: 'Vocational & Digital',
    title: 'Skill & Computer Training',
    description:
      'Hands-on courses in basic computing, office tools, tailoring, and spoken English that prepare rural youth for dignified local employment.',
    schedule: 'Weekdays · Morning & Afternoon Batches',
    image: activitySkillImg,
    imageAlt:
      'Young students and an instructor collaborating around laptops in a bright training classroom',
  },
  {
    id: 'sports',
    indexLabel: '02',
    category: 'Sports & Formation',
    title: 'Youth Sports & Leadership',
    description:
      'Daily volleyball, football, and youth club gatherings that nurture teamwork, discipline, and peer leadership across neighbouring panchayats.',
    schedule: 'Daily · 4:30 PM – 6:30 PM',
    image: activitySportsImg,
    imageAlt:
      'Tamil Nadu youth playing an energetic volleyball match on an outdoor village sports court at golden hour',
  },
  {
    id: 'community',
    indexLabel: '03',
    category: 'Education & Outreach',
    title: 'Evening Study & Family Support',
    description:
      'Guided homework support for school students alongside community mentoring, health awareness, and women’s self-help group initiatives.',
    schedule: 'Mon – Sat · Evening Study & Village Visits',
    image: activityCommunityImg,
    imageAlt:
      'Students and a mentor sitting on woven mats reading books together under a shaded open-air pavilion',
  },
];

/**
 * ABOUT PAGE DATA
 */
export const ABOUT_PAGE_CONTENT = {
  historyTitle: 'Our History & Local Roots',
  historyParagraphs: [
    'Placeholder History: Don Bosco Youth Village was established in Susaipudayanpatti to respond to the educational and livelihood aspirations of rural youth and families across the Keeranur belt of Tiruchy District.',
    'What began as a modest evening study and youth gathering space has grown into a welcoming campus where teenagers, first-generation college learners, and village women find practical training, accompaniment, and community.',
  ],
  visionTitle: 'Our Vision',
  visionStatement:
    'A thriving rural community around Keeranur where every young person has access to holistic education, dignified work, and joyful belonging.',
  missionPillars: [
    {
      index: '01',
      title: 'Reason',
      description:
        'Encouraging young people through patient dialogue, critical thinking, and practical skills rather than fear or rigid rules.',
    },
    {
      index: '02',
      title: 'Faith & Values',
      description:
        'Rooting daily life in gratitude, integrity, respect for every neighbour, and care for creation.',
    },
    {
      index: '03',
      title: 'Loving-Kindness',
      description:
        'Building a family-like atmosphere where students feel genuinely known, trusted, and welcomed just as they are.',
    },
  ],
  donBoscoStory: {
    kicker: 'Our Inspiration',
    title: 'The Story of Don Bosco & One Whistle in Turin',
    paragraphs: [
      'On 8 December 1841, a young priest named John Bosco met sixteen-year-old Bartholomew Garelli, a lonely bricklayer’s apprentice, inside a church sacristy in Turin, Italy. Instead of scolding the boy, Don Bosco asked gently: "Can you whistle?" That simple question made Bartholomew smile.',
      'From that friendly conversation grew the first Salesian "Oratory" — a home that welcomes, a school that prepares for life, a parish that nurtures spirit, and a playground where friends meet in joy. That same spirit guides every greeting at Don Bosco Youth Village in Susaipudayanpatti today.',
    ],
    image: aboutStoryImg,
    imageAlt:
      'A Salesian educator listening attentively to smiling teenagers seated on stone steps with books in a sunlit courtyard',
  },
  teamMembers: [
    {
      id: 'director',
      name: 'Fr. Antony Xavier, SDB', // Placeholder name — replace with current Director
      role: 'Director, Don Bosco Youth Village',
      bio: 'Leads the Salesian community and oversees youth formation, village partnerships, and campus hospitality.',
      photo: teamDirectorImg,
      photoAlt:
        'Portrait of Fr. Antony Xavier, Director of Don Bosco Youth Village, smiling in the campus courtyard',
    },
    {
      id: 'coordinator',
      name: 'Mrs. Selvi Arumugam', // Placeholder name — replace with staff name
      role: 'Women’s & Community Coordinator',
      bio: 'Coordinates self-help groups, tailoring batches, and family outreach programmes across neighbouring villages.',
      photo: teamCoordinatorImg,
      photoAlt:
        'Portrait of Mrs. Selvi Arumugam, Women and Community Coordinator, holding programme files in the centre office',
    },
    {
      id: 'trainer',
      name: 'Mr. Karthik Raja', // Placeholder name — replace with staff name
      role: 'Youth Training & Sports Facilitator',
      bio: 'Guides computer literacy workshops, career readiness coaching, and evening youth sports leagues.',
      photo: teamTrainerImg,
      photoAlt:
        'Portrait of Mr. Karthik Raja, Youth Training and Sports Facilitator, standing beside the campus sports field',
    },
  ] as TeamMember[],
};

/**
 * PROGRAMMES PAGE DATA
 */
export const PROGRAMMES_LIST: ProgrammeItem[] = [
  {
    id: 'youth-training',
    category: 'Training',
    icon: 'laptop',
    title: 'Youth Training',
    shortDescription:
      'Certified short-term courses in computer applications, spoken English, tally basics, and practical trades for rural youth.',
    fullDetails: [
      'Designed for Class 10, Class 12, and college students seeking practical workplace readiness without travelling far from Keeranur.',
      'Placeholder detail: Batches run for 3 months with hands-on lab hours, resume writing practice, and mock interviews.',
    ],
    schedule: 'Mon – Fri · 9:30 AM – 1:00 PM & 2:00 PM – 4:30 PM',
    audience: 'Youth aged 16–25 from Susaipudayanpatti & nearby villages',
    image: activitySkillImg,
    imageAlt: 'Young trainees learning computer skills together around laptops',
  },
  {
    id: 'womens-empowerment',
    category: 'Women & Families',
    icon: 'heart',
    title: 'Women’s Empowerment',
    shortDescription:
      'Self-help group leadership, garment tailoring, micro-enterprise mentoring, and community savings workshops for village women.',
    fullDetails: [
      'Walks alongside women’s sangams in Susaipudayanpatti and surrounding hamlets to strengthen household livelihoods and collective voice.',
      'Placeholder detail: Includes monthly leadership meetings, tailoring machine practice, and linkage to local cooperative schemes.',
    ],
    schedule: 'Tuesdays & Thursdays · 10:30 AM – 3:30 PM',
    audience: 'Rural women & self-help group members',
    image: newsWomensDayImg,
    imageAlt: 'Local women smiling together during a community gathering at the centre',
  },
  {
    id: 'job-fairs',
    category: 'Employment',
    icon: 'briefcase',
    title: 'Job Fairs & Career Guidance',
    shortDescription:
      'Campus placement drives, employer networking, and one-on-one career counselling connecting rural youth with regional employers.',
    fullDetails: [
      'Twice a year, Don Bosco Youth Village invites regional employers from Tiruchy, Pudukkottai, and nearby industrial hubs directly to our campus.',
      'Placeholder detail: Pre-fair preparation covers CV formatting, interview etiquette, and apprenticeship matching.',
    ],
    schedule: 'Bi-annual Job Fairs · Monthly Career Clinics',
    audience: 'Graduates, ITI holders & job-seeking youth',
    image: newsJobFairImg,
    imageAlt: 'Young job-seekers speaking with local recruiters at a rural job fair',
  },
  {
    id: 'community-events',
    category: 'Community & Sports',
    icon: 'users',
    title: 'Community Events',
    shortDescription:
      'Cultural festivals, International Women’s Day, youth leadership camps, and village health awareness gatherings open to all.',
    fullDetails: [
      'Our open courtyard serves as a welcoming gathering place for celebrations that honour local culture and unite neighbouring villages.',
      'Placeholder detail: Includes annual Youth Day, Pongal cultural games, and seasonal community health camps.',
    ],
    schedule: 'Year-round · Seasonal & Monthly Gatherings',
    audience: 'Families, elders, youth & local schools',
    image: newsYouthMeetImg,
    imageAlt: 'Participants seated in a sunlit circle during a community leadership gathering',
  },
  {
    id: 'sports-academy',
    category: 'Community & Sports',
    icon: 'trophy',
    title: 'Evening Sports & Youth Clubs',
    shortDescription:
      'Structured volleyball, football, and athletics coaching every evening to build teamwork, fitness, and peer leadership.',
    fullDetails: [
      'True to Don Bosco’s love of the playground, our sports ground comes alive each afternoon with neighbourhood teams.',
      'Placeholder detail: Inter-village friendly tournaments are hosted every quarter with fair-play trophies.',
    ],
    schedule: 'Daily · 4:30 PM – 6:30 PM',
    audience: 'School & college youth (boys and girls batches)',
    image: activitySportsImg,
    imageAlt: 'Youth playing an energetic volleyball match on the outdoor court',
  },
  {
    id: 'evening-study',
    category: 'Training',
    icon: 'book',
    title: 'Evening Study Centres',
    shortDescription:
      'Calm, supervised study circles helping village schoolchildren complete homework, build reading habits, and prepare for exams.',
    fullDetails: [
      'Mentors assist students in Tamil, English, Mathematics, and Science in small, encouraging groups.',
      'Placeholder detail: Includes library book borrowing and quarterly parent-mentor check-ins.',
    ],
    schedule: 'Mon – Sat · 5:30 PM – 7:30 PM',
    audience: 'School students (Classes 4 – 10)',
    image: activityCommunityImg,
    imageAlt: 'Children and a mentor reading together under a shaded pavilion',
  },
];

/**
 * NEWS & EVENTS POSTS
 */
export const NEWS_POSTS: NewsArticle[] = [
  {
    id: 'womens-day-2026',
    date: '8 March 2026',
    category: 'Community Celebration',
    author: 'Don Bosco Youth Village Desk',
    title: 'International Women’s Day Celebrated with Local Self-Help Groups',
    summary:
      'Over 140 women from Susaipudayanpatti and surrounding hamlets gathered at the Youth Village courtyard for traditional lamp lighting, storytelling, and livelihood recognition.',
    fullStory: [
      'Placeholder article body: On 8 March 2026, Don Bosco Youth Village welcomed women leaders, mothers, and young trainees from neighbouring villages around Keeranur to celebrate International Women’s Day.',
      'The morning began with the lighting of the traditional kuthuvilakku, followed by cultural songs, peer reflections on household financial resilience, and small-business skill demonstrations led by tailoring and digital literacy graduates.',
      'Guest speakers shared practical guidance on savings groups, children’s schooling, and community health. The gathering concluded with a shared community meal and certificates recognising twenty women who completed the winter tailoring programme.',
      'Replace this placeholder text with your final event report, guest names, and participant counts from your centre chronicle.',
    ],
    image: newsWomensDayImg,
    imageAlt:
      'Women from rural Tamil Nadu smiling around a marigold-decorated brass lamp during an International Women’s Day gathering',
    imageCaption:
      'Members of local women’s self-help groups lighting the ceremonial lamp in Susaipudayanpatti.',
  },
  {
    id: 'youth-leadership-2026',
    date: '19 February 2026',
    category: 'Youth Formation',
    author: 'Youth Formation Team',
    title: 'Keeranur Rural Youth Leadership & Career Orientation Workshop',
    summary:
      'College students and recent school leavers joined a full-day interactive workshop focused on career pathways, communication skills, and community service.',
    fullStory: [
      'Placeholder article body: Forty-five young men and women from Keeranur and nearby parishes participated in our one-day Youth Leadership & Career Orientation Workshop held in the main seminar hall.',
      'Facilitators guided small-group discussions on higher education scholarships, vocational apprenticeships, and planning summer reading camps for younger children in their home villages.',
      'Participants worked in teams to map community needs around Susaipudayanpatti and committed to leading weekend reading and sports sessions for school students.',
      'Replace this placeholder text with upcoming camp dates, coordinator quotes, or registration details for the next youth seminar.',
    ],
    image: newsYouthMeetImg,
    imageAlt:
      'Young participants seated in a sunlit circle taking notes and sharing ideas during a leadership workshop',
    imageCaption:
      'Youth participants collaborating during the February career orientation circle.',
  },
  {
    id: 'rural-job-fair-2026',
    date: '24 January 2026',
    category: 'Employment',
    author: 'Placement & Training Cell',
    title: 'Rural Job Fair Connects Youth with Tiruchy & Regional Employers',
    summary:
      'Twelve regional companies and training partners visited the Youth Village hall to conduct interviews and offer apprenticeships to local youth.',
    fullStory: [
      'Placeholder article body: More than 80 young job-seekers from Keeranur, Kulathur, and neighbouring panchayats attended our January Rural Job Fair held at the Youth Village campus.',
      'Prior to the interviews, staff and volunteers ran a resume review desk and mock interview corner so first-time applicants felt confident speaking with hiring managers.',
      'Replace this placeholder text with the exact number of job offers, participating employers, and dates for the next campus placement drive.',
    ],
    image: newsJobFairImg,
    imageAlt:
      'Young Indian job-seekers speaking with recruiters at cloth-draped tables during a rural job fair',
    imageCaption:
      'Applicants presenting their resumes at employer desks during the January job fair.',
  },
  {
    id: 'study-sports-kickoff-2026',
    date: '12 January 2026',
    category: 'Sports & Education',
    author: 'Sports & Study Circle Coordinators',
    title: 'Pongal Inter-Village Volleyball & Evening Study Term Opens',
    summary:
      'Eight neighbourhood youth teams took part in friendly volleyball matches alongside the reopening of evening study centres for the new school term.',
    fullStory: [
      'Placeholder article body: Ahead of the Pongal harvest celebrations, Don Bosco Youth Village hosted an energetic inter-village volleyball tournament celebrating teamwork and neighbourhood friendship.',
      'Alongside the sports festivities, evening study mentors welcomed returning school students with new notebooks and reading materials for the spring term.',
      'Replace this placeholder text with tournament winners, team names, and evening study enrolment updates.',
    ],
    image: activitySportsImg,
    imageAlt:
      'South Indian youth playing a spirited volleyball match on the outdoor village court at sunset',
    imageCaption:
      'Neighbourhood teams competing in the January friendly volleyball tournament.',
  },
];

export const RECENT_NEWS: NewsArticle[] = NEWS_POSTS.slice(0, 2);

/**
 * HOME PAGE SECTION 5: CALL-TO-ACTION BANNER
 */
export const CTA_BANNER_CONTENT = {
  heading: 'Walk with the young people of Keeranur',
  description:
    'Whether you wish to volunteer your time as a mentor, support a vocational trainee, or partner with our community outreach, there is a place for you at Don Bosco Youth Village.',
  buttonLabel: 'Get Involved',
};

/**
 * GALLERY ITEMS
 */
export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    category: 'Campus',
    title: 'Main Courtyard at Sunset',
    caption: 'Students walking together after afternoon sessions in Susaipudayanpatti.',
    image: heroCampusImg,
    imageAlt: 'Campus courtyard at golden hour with youth walking together',
  },
  {
    id: 'gal-2',
    category: 'Training',
    title: 'Computer & Office Skills Batch',
    caption: 'Small-group digital literacy instruction for local youth.',
    image: activitySkillImg,
    imageAlt: 'Youth learning computer skills around laptops in the classroom',
  },
  {
    id: 'gal-3',
    category: 'Sports',
    title: 'Evening Volleyball Match',
    caption: 'Friendly inter-village match on the Youth Village sports court.',
    image: activitySportsImg,
    imageAlt: 'Youth playing volleyball on the outdoor red-earth court at sunset',
  },
  {
    id: 'gal-4',
    category: 'Community',
    title: 'Open-Air Evening Study',
    caption: 'Schoolchildren completing homework with community mentors.',
    image: activityCommunityImg,
    imageAlt: 'Evening study circle with students and mentor under a shaded pavilion',
  },
  {
    id: 'gal-5',
    category: 'Community',
    title: 'International Women’s Day Gathering',
    caption: 'Women’s self-help groups celebrating together in the village.',
    image: newsWomensDayImg,
    imageAlt: 'Women gathered around a brass lamp for International Women’s Day',
  },
  {
    id: 'gal-6',
    category: 'Training',
    title: 'Youth Leadership Circle',
    caption: 'Peer discussion during the February orientation workshop.',
    image: newsYouthMeetImg,
    imageAlt: 'Youth leadership discussion in a bright community hall',
  },
  {
    id: 'gal-7',
    category: 'Training',
    title: 'Rural Job Fair Desks',
    caption: 'Local graduates speaking with visiting employers during the placement drive.',
    image: newsJobFairImg,
    imageAlt: 'Young applicants conversing with recruiters at the rural job fair',
  },
  {
    id: 'gal-8',
    category: 'Campus',
    title: 'Salesian Mentorship Outdoors',
    caption: 'Informal conversations and study guidance on the campus steps.',
    image: aboutStoryImg,
    imageAlt: 'Educator listening warmly to teenagers seated on stone steps with books',
  },
];

/**
 * GET INVOLVED PAGE SUPPORT OPTIONS & PLACEHOLDER BANK INFO
 */
export const DONATION_PLACEHOLDER_DETAILS = {
  accountName: 'Don Bosco Youth Village Trust (Placeholder)',
  bankName: 'State Bank of India – Keeranur Branch (Placeholder)',
  accountNumber: '0000 1234 5678 90 (Placeholder)',
  ifscCode: 'SBIN0000000 (Placeholder)',
  upiId: 'dbyvkeeranur@sbi (Placeholder)',
};
