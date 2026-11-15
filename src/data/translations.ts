import { Language } from './siteContent';

/**
 * Bilingual Dictionary (English & Tamil) for Navigation and Key Site Text.
 * Replace or refine Tamil wording as needed for your parish/centre dialect.
 */
export const TRANSLATIONS: Record<
  Language,
  {
    brandName: string;
    nav: {
      home: string;
      about: string;
      programmes: string;
      gallery: string;
      contact: string;
      news: string;
      getInvolved: string;
    };
    home: {
      locationLine: string;
      heroHeadline: string;
      heroMission: string;
      primaryCta: string;
      secondaryCta: string;
      whoKicker: string;
      whoHeading: string;
      whoPara1: string;
      whoPara2: string;
      whoLink: string;
      highlightsKicker: string;
      highlightsHeading: string;
      viewAllProgrammes: string;
      activityDetails: string;
      activities: Array<{
        title: string;
        category: string;
        description: string;
        schedule: string;
      }>;
      newsKicker: string;
      newsHeading: string;
      viewAllNews: string;
      readStory: string;
      newsItems: Array<{
        title: string;
        summary: string;
        category: string;
        date: string;
      }>;
      ctaHeading: string;
      ctaDescription: string;
      ctaButton: string;
    };
    pages: {
      aboutKicker: string;
      aboutTitle: string;
      aboutSubtitle: string;
      programmesKicker: string;
      programmesTitle: string;
      programmesSubtitle: string;
      newsKicker: string;
      newsTitle: string;
      newsSubtitle: string;
      galleryKicker: string;
      galleryTitle: string;
      gallerySubtitle: string;
      contactKicker: string;
      contactTitle: string;
      contactSubtitle: string;
      getInvolvedKicker: string;
      getInvolvedTitle: string;
      getInvolvedSubtitle: string;
      notFoundTitle: string;
      notFoundBody: string;
      backToHome: string;
    };
    footer: {
      missionSummary: string;
      exploreHeading: string;
      contactHeading: string;
      connectLabel: string;
      officeHours: string;
      rightsNote: string;
    };
  }
> = {
  en: {
    brandName: 'Don Bosco Youth Village',
    nav: {
      home: 'Home',
      about: 'About',
      programmes: 'Programmes',
      gallery: 'Gallery',
      contact: 'Contact',
      news: 'News & Events',
      getInvolved: 'Get Involved',
    },
    home: {
      locationLine: 'Susaipudayanpatti · Keeranur · Tiruchy, Tamil Nadu',
      heroHeadline: 'A welcoming home where rural youth learn, grow, and lead.',
      heroMission:
        'Guided by the Salesian spirit of Don Bosco, we walk alongside young people and families in Keeranur through education, practical skills, and community life.',
      primaryCta: 'Our Programmes',
      secondaryCta: 'Contact Us',
      whoKicker: 'Who We Are',
      whoHeading: 'Rooted in Salesian hospitality for young people and families',
      whoPara1:
        'Don Bosco Youth Village is a Salesian youth and community centre nestled in Susaipudayanpatti near Keeranur in Tiruchy District. Inspired by St. John Bosco’s preventive system of reason, faith, and loving-kindness, our campus offers a safe and joyful space where young people discover their strengths.',
      whoPara2:
        'Whether through evening study circles, vocational training, sports, or village outreach, we partner closely with parents, local schools, and women’s groups to build confident, compassionate communities across surrounding villages.',
      whoLink: 'Read our story and mission',
      highlightsKicker: 'What We Do',
      highlightsHeading: 'Key Activities at the Youth Village',
      viewAllProgrammes: 'View all programmes',
      activityDetails: 'Details',
      activities: [
        {
          category: 'Vocational & Digital',
          title: 'Skill & Computer Training',
          description:
            'Hands-on courses in basic computing, office tools, tailoring, and spoken English that prepare rural youth for dignified local employment.',
          schedule: 'Weekdays · Morning & Afternoon Batches',
        },
        {
          category: 'Sports & Formation',
          title: 'Youth Sports & Leadership',
          description:
            'Daily volleyball, football, and youth club gatherings that nurture teamwork, discipline, and peer leadership across neighbouring panchayats.',
          schedule: 'Daily · 4:30 PM – 6:30 PM',
        },
        {
          category: 'Education & Outreach',
          title: 'Evening Study & Family Support',
          description:
            'Guided homework support for school students alongside community mentoring, health awareness, and women’s self-help group initiatives.',
          schedule: 'Mon – Sat · Evening Study & Village Visits',
        },
      ],
      newsKicker: 'Campus Chronicle',
      newsHeading: 'Recent News & Gatherings',
      viewAllNews: 'View all news & events',
      readStory: 'Read story',
      newsItems: [
        {
          date: '8 March 2026',
          category: 'Community Celebration',
          title: 'International Women’s Day Celebrated with Local Self-Help Groups',
          summary:
            'Over 140 women from Susaipudayanpatti and surrounding hamlets gathered at the Youth Village courtyard for traditional lamp lighting, storytelling, and livelihood recognition.',
        },
        {
          date: '19 February 2026',
          category: 'Youth Formation',
          title: 'Keeranur Rural Youth Leadership & Career Orientation Workshop',
          summary:
            'College students and recent school leavers joined a full-day interactive workshop focused on career pathways, communication skills, and community service.',
        },
      ],
      ctaHeading: 'Walk with the young people of Keeranur',
      ctaDescription:
        'Whether you wish to volunteer your time as a mentor, support a vocational trainee, or partner with our community outreach, there is a place for you at Don Bosco Youth Village.',
      ctaButton: 'Get Involved',
    },
    pages: {
      aboutKicker: 'About Us',
      aboutTitle: 'Salesian Presence in Susaipudayanpatti',
      aboutSubtitle:
        'Walking with rural youth, schoolchildren, and families across Keeranur, Tiruchy District through education, practical skills, and joyful community life.',
      programmesKicker: 'Programmes',
      programmesTitle: 'Learning, Livelihoods & Community Life',
      programmesSubtitle:
        'Practical programmes serving youth, women, and schoolchildren in Susaipudayanpatti, Keeranur, and neighbouring villages.',
      newsKicker: 'Campus Chronicle',
      newsTitle: 'News & Community Events',
      newsSubtitle:
        'Stories, workshops, celebrations, and gatherings across Don Bosco Youth Village in Susaipudayanpatti and Keeranur.',
      galleryKicker: 'Gallery',
      galleryTitle: 'Moments from the Youth Village',
      gallerySubtitle:
        'Photographs highlighting daily campus life, skill classrooms, evening sports, and community celebrations in Susaipudayanpatti.',
      contactKicker: 'Contact Us',
      contactTitle: 'Visit or Write to Us',
      contactSubtitle:
        'We welcome enquiries from students, parents, volunteers, and community partners in Tiruchy and beyond.',
      getInvolvedKicker: 'Get Involved',
      getInvolvedTitle: 'Volunteer, Support & Enquire',
      getInvolvedSubtitle:
        'Join hands with Don Bosco Youth Village to mentor rural students, sponsor skill training, or enquire about joining our programmes.',
      notFoundTitle: 'Page Not Found',
      notFoundBody:
        'Sorry, the page you are looking for could not be found or may have moved. Please return to the home page or contact our centre office.',
      backToHome: 'Back to Home',
    },
    footer: {
      missionSummary:
        'A Salesian youth and community centre dedicated to education, skill formation, sports, and family outreach in Keeranur and neighbouring villages.',
      exploreHeading: 'Explore',
      contactHeading: 'Contact & Visit',
      connectLabel: 'Connect with us',
      officeHours: 'Monday – Saturday · 9:00 AM – 5:30 PM',
      rightsNote: 'Salesian Youth & Community Centre',
    },
  },
  ta: {
    brandName: 'டான் போஸ்கோ இளைஞர் கிராமம்',
    nav: {
      home: 'முகப்பு',
      about: 'எங்களைப் பற்றி',
      programmes: 'திட்டங்கள்',
      gallery: 'படத்தொகுப்பு',
      contact: 'தொடர்பு',
      news: 'செய்திகள் & நிகழ்வுகள்',
      getInvolved: 'இணைந்திடுங்கள்',
    },
    home: {
      locationLine: 'சூசைப்புடையான்பட்டி · கீரனூர் · திருச்சி, தமிழ்நாடு',
      heroHeadline: 'கிராமப்புற இளைஞர்கள் கற்று, வளர்ந்து, வழிநடத்தும் அன்பின் இல்லம்.',
      heroMission:
        'புனித டான் போஸ்கோவின் சலேசிய வழிகாட்டுதலில், கல்வி, தொழிற்பயிற்சி மற்றும் சமூக ஒற்றுமையின் மூலம் கீரனூர் பகுதி இளைஞர்கள் மற்றும் குடும்பங்களுடன் இணைந்து பயணிக்கிறோம்.',
      primaryCta: 'எங்கள் திட்டங்கள்',
      secondaryCta: 'தொடர்பு கொள்ள',
      whoKicker: 'நாம் யார்',
      whoHeading: 'இளைஞர்கள் மற்றும் குடும்பங்களுக்கான சலேசிய அன்பு இல்லம்',
      whoPara1:
        'திருச்சி மாவட்டம் கீரனூர் அருகே உள்ள சூசைப்புடையான்பட்டியில் அமைந்துள்ள சலேசிய இளைஞர் மற்றும் சமூக மையம் டான் போஸ்கோ இளைஞர் கிராமம். புனித ஜான் போஸ்கோவின் பகுத்தறிவு, நம்பிக்கை மற்றும் அன்பு ஆகிய மூன்று தூண்களின் அடிப்படையில் இளைஞர்கள் தங்கள் திறமைகளை வளர்க்க பாதுகாப்பான சூழலை வழங்குகிறோம்.',
      whoPara2:
        'மாலை நேர கல்வி மையங்கள், கணினி மற்றும் தொழிற்பயிற்சிகள், விளையாட்டு மற்றும் மகளிர் சுயஉதவிக் குழுக்களுடன் இணைந்து சுற்றுவட்டார கிராமங்களில் தன்னம்பிக்கை கொண்ட சமூகத்தை உருவாக்கி வருகிறோம்.',
      whoLink: 'எங்கள் வரலாறு மற்றும் நோக்கத்தை அறிய',
      highlightsKicker: 'எங்கள் பணிகள்',
      highlightsHeading: 'இளைஞர் கிராமத்தின் முக்கிய செயல்பாடுகள்',
      viewAllProgrammes: 'அனைத்து திட்டங்களையும் காண',
      activityDetails: 'மேலும் அறிய',
      activities: [
        {
          category: 'தொழில் & கணினி',
          title: 'திறன் மற்றும் கணினி பயிற்சி',
          description:
            'கிராமப்புற இளைஞர்கள் கண்ணியமான வேலைவாய்ப்பு பெற கணினி அடிப்படை, அலுவலக மென்பொருள், தையல் மற்றும் ஆங்கில உரையாடல் பயிற்சிகள்.',
          schedule: 'திங்கள் – வெள்ளி · காலை & மதியம்',
        },
        {
          category: 'விளையாட்டு & தலைமை',
          title: 'இளைஞர் விளையாட்டு & தலைமைப் பண்பு',
          description:
            'கூட்டுணர்வு, ஒழுக்கம் மற்றும் தலைமைத் திறனை வளர்க்கும் தினசரி கைப்பந்து, கால்பந்து மற்றும் இளைஞர் மன்ற நிகழ்வுகள்.',
          schedule: 'தினமும் · மாலை 4:30 – 6:30',
        },
        {
          category: 'கல்வி & சமூகம்',
          title: 'மாலை கல்வி & குடும்ப நலன்',
          description:
            'பள்ளி மாணவர்களுக்கான மாலை நேர படிப்பு உதவி, சமூக வழிகாட்டுதல், சுகாதார விழிப்புணர்வு மற்றும் மகளிர் குழு செயல்பாடுகள்.',
          schedule: 'திங்கள் – சனி · மாலை நேர வகுப்புகள்',
        },
      ],
      newsKicker: 'வளாக நிகழ்வுகள்',
      newsHeading: 'சமீபத்திய செய்திகள் & கொண்டாட்டங்கள்',
      viewAllNews: 'அனைத்து செய்திகளையும் காண',
      readStory: 'முழுமையாக படிக்க',
      newsItems: [
        {
          date: '8 மார்ச் 2026',
          category: 'சமூக விழா',
          title: 'சர்வதேச மகளிர் தினம் – சுயஉதவிக் குழுக்களுடன் சிறப்பு கொண்டாட்டம்',
          summary:
            'சூசைப்புடையான்பட்டி மற்றும் சுற்றுப்புற கிராமங்களைச் சேர்ந்த 140-க்கும் மேற்பட்ட பெண்கள் குத்துவிளக்கேற்றல், கலை நிகழ்ச்சிகள் மற்றும் வாழ்வாதாரப் பகிர்வில் பங்கேற்றனர்.',
        },
        {
          date: '19 பிப்ரவரி 2026',
          category: 'இளைஞர் பயிற்சி',
          title: 'கீரனூர் கிராமப்புற இளைஞர் தலைமைத்துவம் & வேலைவாய்ப்பு வழிகாட்டுதல்',
          summary:
            'கல்லூரி மாணவர்கள் மற்றும் பள்ளி முடித்த இளைஞர்கள் உயர்கல்வி, தொழிற்பயிற்சி மற்றும் சமூக சேவை குறித்து ஒருநாள் பயிற்சிப் பட்டறையில் கலந்துகொண்டனர்.',
        },
      ],
      ctaHeading: 'கீரனூர் இளைஞர்களின் வளர்ச்சியில் நீங்களும் இணையுங்கள்',
      ctaDescription:
        'வழிகாட்டியாக தன்னார்வத் தொண்டு செய்யவோ, மாணவர்களின் பயிற்சிக்கு உதவவோ அல்லது எங்கள் சமூகப் பணிகளில் இணையவோ அன்புடன் அழைக்கிறோம்.',
      ctaButton: 'இணைந்திடுங்கள்',
    },
    pages: {
      aboutKicker: 'எங்களைப் பற்றி',
      aboutTitle: 'சூசைப்புடையான்பட்டியில் சலேசியப் பணி',
      aboutSubtitle:
        'திருச்சி மாவட்டம் கீரனூர் பகுதி கிராமப்புற இளைஞர்கள், மாணவர்கள் மற்றும் குடும்பங்களுடன் கல்வி மற்றும் வாழ்வாதாரப் பணியில் இணைந்துள்ளோம்.',
      programmesKicker: 'திட்டங்கள்',
      programmesTitle: 'கற்றல், வாழ்வாதாரம் & சமூக வாழ்வு',
      programmesSubtitle:
        'சூசைப்புடையான்பட்டி, கீரனூர் மற்றும் சுற்றுவட்டார கிராம இளைஞர்கள், பெண்கள் மற்றும் மாணவர்களுக்கான பயனுள்ள திட்டங்கள்.',
      newsKicker: 'வளாகச் செய்திகள்',
      newsTitle: 'செய்திகள் & சமூக நிகழ்வுகள்',
      newsSubtitle:
        'டான் போஸ்கோ இளைஞர் கிராமத்தில் நடைபெறும் பயிற்சிகள், கொண்டாட்டங்கள் மற்றும் சமூக நிகழ்வுகளின் தொகுப்பு.',
      galleryKicker: 'படத்தொகுப்பு',
      galleryTitle: 'இளைஞர் கிராமத்தின் இனிய தருணங்கள்',
      gallerySubtitle:
        'வளாக வாழ்வு, கணினி வகுப்புகள், மாலை விளையாட்டு மற்றும் கிராமிய விழாக்களின் புகைப்படத் தொகுப்பு.',
      contactKicker: 'தொடர்பு கொள்ள',
      contactTitle: 'எங்களைத் தொடர்பு கொள்ள & நேரில் சந்திக்க',
      contactSubtitle:
        'மாணவர்கள், பெற்றோர்கள், தன்னார்வலர்கள் மற்றும் நலன் விரும்பிகளின் கேள்விகளையும் கருத்துகளையும் வரவேற்கிறோம்.',
      getInvolvedKicker: 'இணைந்திடுங்கள்',
      getInvolvedTitle: 'தன்னார்வப் பணி, நன்கொடை & திட்ட விவரம்',
      getInvolvedSubtitle:
        'கிராமப்புற இளைஞர்களுக்கு வழிகாட்டியாகவோ, கல்வி உதவி வழங்கவோ அல்லது எங்கள் திட்டங்களில் சேரவோ இங்கே இணையலாம்.',
      notFoundTitle: 'பக்கம் கிடைக்கவில்லை',
      notFoundBody:
        'மன்னிக்கவும், நீங்கள் தேடும் பக்கம் கிடைக்கவில்லை. முகப்புப் பக்கத்திற்குச் செல்லவும் அல்லது எங்களைத் தொடர்பு கொள்ளவும்.',
      backToHome: 'முகப்புக்குத் திரும்புக',
    },
    footer: {
      missionSummary:
        'கீரனூர் மற்றும் சுற்றுப்புற கிராமங்களில் கல்வி, திறன் பயிற்சி, விளையாட்டு மற்றும் குடும்ப நலனுக்காக அர்ப்பணிக்கப்பட்ட சலேசிய இளைஞர் மற்றும் சமூக மையம்.',
      exploreHeading: 'பக்கங்கள்',
      contactHeading: 'முகவரி & தொடர்பு',
      connectLabel: 'சமூக வலைத்தளங்கள்',
      officeHours: 'திங்கள் – சனி · காலை 9:00 – மாலை 5:30',
      rightsNote: 'சலேசிய இளைஞர் & சமூக மையம்',
    },
  },
};
