// غیر تجارتی، قسم کے لحاظ سے غیر جانب دار معلومات — کسی خاص برانڈ یا کاروبار کی سفارش نہیں۔

export type FacilityGroup = {
  icon: string;
  title: string;
  titleEn: string;
  body: string;
  bodyEn: string;
};

export const FACILITY_GROUPS: FacilityGroup[] = [
  {
    icon: '🚻',
    title: 'بیت الخلا اور دستشوی',
    titleEn: 'Toilets & washrooms',
    body: 'عوامی سبز علاقوں اور وزیٹر زونز میں بنیادی بیت الخلا کی سہولتیں موجود ہوتی ہیں، مگر ان کی دستیابی اور حالت مختلف پوائنٹس پر مختلف ہو سکتی ہے۔ خواتین، بچوں اور سینئر شہریوں کے لیے علیحدہ انتظام کا پوچھنا بہتر رہتا ہے۔ عجائب گھر یا یادگاری کمپلیکس کے اندرونی حصوں میں زیادہ منظم سہولتیں ہو سکتی ہیں۔',
    bodyEn: 'Basic toilet facilities are available in public green areas and visitor zones, but availability and condition can vary across points. It is better to ask about separate arrangements for women, children, and senior citizens. Indoor sections of museums or the monument complex may have more organised facilities.',
  },
  {
    icon: '🅿️',
    title: 'پارکنگ',
    titleEn: 'Parking',
    body: 'پارک اور پاکستان مونومنٹ کے وزیٹر زون کے قریب مخصوص پارکنگ علاقے ہیں۔ اختتامِ ہفتہ، تعطیلات اور بڑے پروگراموں کے دن جگہ محدود ہو سکتی ہے، اس لیے جلد پہنچنا یا پبلک ٹرانسپورٹ استعمال کرنا زیادہ آسان رہتا ہے۔ مقامی سطح پر پارکنگ فیس یا رہنمائی کی علامتوں پر عمل کریں۔',
    bodyEn: 'There are designated parking areas near the park and the Pakistan Monument visitor zone. Space can be limited on weekends, holidays, and event days, so arriving early or using public transport is easier. Follow any on-site parking fee or guidance signs.',
  },
  {
    icon: '🍵',
    title: 'کھانا اور پانی',
    titleEn: 'Food & water',
    body: 'بڑے وزیٹر زونز کے آس پاس ہلکی ریفریشمنٹ، چائے یا پیک شدہ اشیاء کی دکانیں مل سکتی ہیں، مگر یہ مستقل نہیں سمجھی جانی چاہئیں۔ دورے کے لیے اپنا پانی ساتھ رکھنا زیادہ محفوظ ہے۔ مکمل کھانے کے لیے شہر کے بیٹھنے والے ریستوران اور فوڈ زون قریبی علاقوں میں دستیاب ہیں؛ ہم کسی ایک کی درجہ بندی نہیں کرتے۔',
    bodyEn: 'Light refreshments, tea, or packaged items may be available near larger visitor zones, but availability should not be assumed. Carrying your own water is safer for the visit. For a full meal, sit-down restaurants and food zones in nearby city sectors are available; we do not rank any of them.',
  },
  {
    icon: '🏨',
    title: 'قیام (رہائش)',
    titleEn: 'Staying overnight',
    body: 'پارک کے اندر رہائش کی سہولت نہیں ہوتی۔ اسلام آباد کا مرکزی سیکٹرز، بلیو ایریا اور ڈپلومیٹک زون کے گرد مختلف بجٹ کی ہوٹل اور گیسٹ ہاؤس کی اقسام موجود ہیں۔ ایک دن کے دورے کے لیے شکرپڑیاں شہر کے اندرونی رہائش گاہوں سے آسانی سے قابلِ رسائی ہے۔',
    bodyEn: 'There is no lodging inside the park. Around Islamabad’s central sectors, the Blue Area, and the diplomatic zone you will find hotels and guest houses across budgets. For a day visit, Shakarparian is easily reached from within-city accommodation.',
  },
  {
    icon: '🛒',
    title: 'عوامی سہولت اور دکانیں',
    titleEn: 'Amenities & shops',
    body: 'ضروری اشیاء، سوvenier یا کتابوں کے لیے عوامی/ثقافتی اداروں کے احاطوں میں چھوٹی دکانیں ہو سکتی ہیں۔ بڑی گروسری یا مارکیٹ کے لیے شہری سیکٹرز کی طرف جانا پڑتا ہے۔ قدرتی علاقے میں پلاسٹک اور کچرا کم رکھنے کے لیے ساتھ بندھی بوتل اور تھیلی مفید رہتی ہے۔',
    bodyEn: 'Small kiosks for essentials, souvenirs, or books may exist within public/cultural institution compounds. For a large grocery or market you would head to the city sectors. A refillable bottle and bag help keep plastic and litter low in the natural area.',
  },
  {
    icon: '⛽',
    title: 'ایندھن اور چارجنگ',
    titleEn: 'Fuel & charging',
    body: 'گاڑی کے ایندھن یا بجلی سے چلنے والی گاڑی (EV) کی چارجنگ کی سہولت پارک کے اندر عام طور پر نہیں ہوتی۔ شہر کے مرکزی فلنگ اسٹیشنز اور چارجنگ پوائنٹس پارک سے باہر، مرکزی سڑکوں کے قریب موجود ہیں۔ دورے سے پہلے ایندھن یا چارج کی سطح پوری کر لینا زیادہ بہتر رہتا ہے۔',
    bodyEn: 'Fuel or electric-vehicle (EV) charging is generally not available inside the park. The city’s main filling stations and charging points are outside the park, near the main roads. It is better to top up fuel or charge before the visit.',
  },
];

export type SeasonRow = {
  season: string;
  seasonEn: string;
  months: string;
  monthsEn: string;
  condition: string;
  conditionEn: string;
  tempTrend: string;
  tempTrendEn: string;
  advice: string;
  adviceEn: string;
  rating: 'بہترین' | 'اچھا' | 'معمولی' | 'محتاط رہیں';
};

export const SEASON_ROWS: SeasonRow[] = [
  {
    season: 'بہار',
    seasonEn: 'Spring',
    months: 'مارچ – اپریل',
    monthsEn: 'March – April',
    condition: 'سبزہ، پھول اور نرم ہوا',
    conditionEn: 'Greenery, blossoms, gentle breeze',
    tempTrend: 'دن 18–30°C، رات ٹھنڈی',
    tempTrendEn: 'Day 18–30°C, cool nights',
    advice: 'سال کا سب سے متوازن وقت: چہل قدمی، تصویر کشی اور خاندانی دورے سب سے آسان۔',
    adviceEn: 'The most balanced time of year: walking, photography, and family visits are easiest.',
    rating: 'بہترین',
  },
  {
    season: 'گرمیاں',
    seasonEn: 'Summer',
    months: 'مئی – جون',
    monthsEn: 'May – June',
    condition: 'گرم اور خشک',
    conditionEn: 'Hot and dry',
    tempTrend: 'دن 30–40°C',
    tempTrendEn: 'Day 30–40°C',
    advice: 'صبح سویرے یا شام کے بعد جائیں؛ دوپہر کی دھوپ سے پرہیز کریں اور پانی ساتھ رکھیں۔',
    adviceEn: 'Go early morning or after sunset; avoid midday sun and carry water.',
    rating: 'اچھا',
  },
  {
    season: 'برسات',
    seasonEn: 'Monsoon',
    months: 'جولائی – اگست',
    monthsEn: 'July – August',
    condition: 'مون سون بارش، گہری ہریالی',
    conditionEn: 'Monsoon rain, deep greenery',
    tempTrend: 'دن 28–35°C، رات نم',
    tempTrendEn: 'Day 28–35°C, humid nights',
    advice: 'سبزہ عروج پر ہوتا ہے مگر اچانک بارش ہو سکتی ہے؛ چھتری اور پگڈنڈیوں پر چلیں۔',
    adviceEn: 'Foliage is at its peak but sudden rain is possible; bring an umbrella and use paved paths.',
    rating: 'اچھا',
  },
  {
    season: 'خزاں',
    seasonEn: 'Autumn',
    months: 'ستمبر – اکتوبر',
    monthsEn: 'September – October',
    condition: 'نرم، صاف اور کم ہجوم',
    conditionEn: 'Mild, clear, less crowded',
    tempTrend: 'دن 22–32°C',
    tempTrendEn: 'Day 22–32°C',
    advice: 'دوسرا بہترین ونڈو: نرم روشنی، صاف نظارے اور آرام دہ چہل قدمی۔',
    adviceEn: 'A second-best window: soft light, clear views, and comfortable walks.',
    rating: 'بہترین',
  },
  {
    season: 'سردیاں',
    seasonEn: 'Winter',
    months: 'نومبر – فروری',
    monthsEn: 'November – February',
    condition: 'ٹھنڈ، کبھی کہری یا دھند',
    conditionEn: 'Cold, sometimes fog or haze',
    tempTrend: 'دن 10–22°C، رات 2–10°C',
    tempTrendEn: 'Day 10–22°C, night 2–10°C',
    advice: 'دوپہر کے اوقات گرم ترین ہوتے ہیں؛ گرم کپڑے اور دھند کے دن احتیاط کریں۔',
    adviceEn: 'Midday hours are warmest; bring warm clothes and take care on foggy days.',
    rating: 'اچھا',
  },
];

export type AudienceRoute = {
  icon: string;
  title: string;
  titleEn: string;
  audience: string;
  audienceEn: string;
  steps: string[];
  stepsEn: string[];
  tips: string;
  tipsEn: string;
};

export const AUDIENCE_ROUTES: AudienceRoute[] = [
  {
    icon: '👨‍👩‍👧‍👦',
    title: 'روٹ اے — خاندانی اور بچوں کے ساتھ',
    titleEn: 'Route A — With family & children',
    audience: 'چھوٹے بچوں یا سینئر شہریوں کے ساتھ',
    audienceEn: 'With small children or senior citizens',
    steps: [
      'پARK کا مرکزی/پختہ راستہ چنیں جہاں رکاوٹیں کم ہوں۔',
      'سبز میدان اور کھلی جگہوں پر مختصر بیٹھک رکھیں، نہ کہ لمبی چڑھائی۔',
      'پاکستان مونومنٹ کا باہری حصہ دیکھیں اور بچوں کو قومی علامت کی سادہ کہانی سنائیں۔',
      'پانی، ہلکا کھانا اور چھوٹا فرسٹ ایڈ ساتھ رکھیں۔',
    ],
    stepsEn: [
      'Choose the main/paved route where obstacles are fewer.',
      'Take short rests on green lawns and open areas, rather than a long climb.',
      'See the outer part of the Pakistan Monument and tell children its simple national story.',
      'Keep water, light food, and a small first-aid kit with you.',
    ],
    tips: 'ہجوم والے دنوں میں صبح کو ترجیح دیں اور بچوں کو پکی سڑکوں سے دور رکھیں۔',
    tipsEn: 'Prefer mornings on crowded days and keep children away from paved roads.',
  },
  {
    icon: '📷',
    title: 'روٹ بی — فوٹوگرافی اور نature',
    titleEn: 'Route B — Photography & nature',
    audience: 'فوٹوگرافر اور قدرت کے شوقین',
    audienceEn: 'Photographers and nature lovers',
    steps: [
      'طلوعِ آفتاب یا سورج ڈوبنے سے پہلے کے گھنٹے روشنی کے لیے بہترین ہیں۔',
      'مارگلہ کی پس منظر والے زاویوں اور پاکستان مونومنٹ کی محرابوں کو شامل کریں۔',
      'لوک ورثہ اور دوستی کے درختوں کے علاقے میں تفصیلی شاٹس لیں۔',
      'مون سون کے بعد سبزے کی گہرائی اور بادلوں کا کنٹراسٹ زبردست ہوتا ہے۔',
    ],
    stepsEn: [
      'The hours around sunrise or just before sunset are best for light.',
      'Include Margalla-backdrop angles and the arches of the Pakistan Monument.',
      'Take detailed shots in the Lok Virsa and friendship-trees areas.',
      'After the monsoon, the depth of green and cloud contrast are excellent.',
    ],
    tips: 'ٹرائی پاڈ، پولارائزنگ فلٹر اور اضافی بیٹری ساتھ رکھیں؛ ڈرون کے لیے مقامی قواعد چیک کریں۔',
    tipsEn: 'Carry a tripod, polarising filter, and spare battery; check local rules for drones.',
  },
  {
    icon: '♿',
    title: 'روٹ سی — کم نقل و حرکت / رسائی',
    titleEn: 'Route C — Limited mobility / access',
    audience: 'وہیل چیئر یا محدود چہل قدمی والے',
    audienceEn: 'Wheelchair or limited-walking visitors',
    steps: [
      'مرکزی یادگاری اور وزیٹر ڈیک تک پختہ اور نسبتاً ہموار راستے ترجیح دیں۔',
      'گاڑی کو پارکنگ کے نشان زدہ رسائی پوائنٹ کے قریب کھڑا کریں۔',
      'بڑی سیڑھیاں یا ڈھلوان والے راستوں سے گریز کریں اور احاطے کے نقشے سے راہ لیں۔',
      'ضرورت ہو تو رسائی کی تصدیق اسی دن متعلقہ مقام سے کر لیں۔',
    ],
    stepsEn: [
      'Prefer paved and relatively even paths to the main monument and visitor deck.',
      'Park the vehicle near the marked accessible parking point.',
      'Avoid large staircases or steep paths and follow the site map.',
      'If needed, confirm accessibility with the site on the day of your visit.',
    ],
    tips: 'ایک ساتھی کے ساتھ جائیں اور دورے کا دورانیہ مختصر (1–1.5 گھنٹے) رکھیں۔',
    tipsEn: 'Go with a companion and keep the visit short (1–1.5 hours).',
  },
];

export type Itinerary = {
  icon: string;
  title: string;
  titleEn: string;
  duration: string;
  durationEn: string;
  pace: string;
  paceEn: string;
  spots: string[];
  spotsEn: string[];
  notes: string;
  notesEn: string;
};

export const ITINERARIES: Itinerary[] = [
  {
    icon: '🌿',
    title: 'نصف دن — سبزہ اور یادگار',
    titleEn: 'Half day — greenery & monument',
    duration: 'تقریباً 3 گھنٹے',
    durationEn: 'About 3 hours',
    pace: 'آرام دہ',
    paceEn: 'Relaxed',
    spots: [
      'شکرپڑیاں کا کھلا سبز حصہ اور نظارہ ڈیک',
      'پاکستان مونومنٹ (باہری محرابیں اور علامتی ڈھانچہ)',
      'دوستی کے درختوں کا علاقہ',
      'قریبی چائے/ریفریشمنٹ پوائنٹ پر مختصر آرام',
    ],
    spotsEn: [
      'Shakarparian’s open green area and viewpoint deck',
      'Pakistan Monument (outer petals and symbolic structure)',
      'The friendship-trees area',
      'A short rest at a nearby tea/refreshment point',
    ],
    notes: 'صبح یا شام کے آغاز کے لیے موزوں؛ ہجوم سے پہلے بنیادی نظارے دیکھ لیں۔',
    notesEn: 'Good for a morning or early-evening start; see the main views before crowds.',
  },
  {
    icon: '🗺️',
    title: 'پورا دن — قدرت + ثقافت',
    titleEn: 'Full day — nature + culture',
            duration: 'تقریباً 6–7 گھنٹے',
    durationEn: 'About 6–7 hours',
    pace: 'معمولی',
    paceEn: 'Moderate',
    spots: [
      'سبز پہاڑی علاقہ اور نظارہ ڈیک',
      'پاکستان مونومنٹ میوزیم (اندرونی نمائش)',
      'لوک ورثہ میوزیم (پاکستان کی زندہ ثقافتیں)',
      'پاکستان میوزیم آف نیچرل ہسٹری',
      'شام کو دوبارہ پہاڑی سے شہر کا پینوراما',
    ],
    spotsEn: [
      'Green hill area and viewpoint deck',
      'Pakistan Monument Museum (indoor exhibition)',
      'Lok Virsa Museum (living cultures of Pakistan)',
      'Pakistan Museum of Natural History',
      'Return to the hill at dusk for the city panorama',
    ],
    notes: 'عجائب گھروں کے الگ اوقات اور ٹکٹ کا دن میں ہی حساب رکھیں؛ دوپہر کا کھانا شہر کے قریبی علاقے میں طے کریں۔',
    notesEn: 'Account for museums’ separate hours and tickets within the day; plan lunch in a nearby city area.',
  },
];

export type ResponsibilityGroup = {
  icon: string;
  title: string;
  titleEn: string;
  body: string;
  bodyEn: string;
};

export const RESPONSIBILITY_GROUPS: ResponsibilityGroup[] = [
  {
    icon: '🗑️',
    title: 'کچرا واپس لے جائیں',
    titleEn: 'Take litter back',
    body: 'سبز علاقے میں پلاسٹک، کاغذ یا کھانے کے ٹکڑے نہ چھوڑیں۔ استعمال شدہ اشیاء اپنے ساتھ واپس لے جائیں یا نشان زدہ ڈرم میں ڈالیں۔',
    bodyEn: 'Do not leave plastic, paper, or food scraps in the green area. Take used items back with you or place them in marked bins.',
  },
  {
    icon: '🌱',
    title: 'سبزہ اور درختوں کا تحفظ',
    titleEn: 'Protect greenery & trees',
    body: 'گھاس پر گاڑی نہ چلائیں، پودوں کو نہ توڑیں اور نشان زدہ راستوں سے باہر نہ جائیں تاکہ مقامی ماحول محفوظ رہے۔',
    bodyEn: 'Do not drive on grass, do not break plants, and stay on marked paths so the local environment stays protected.',
  },
  {
    icon: '🦜',
    title: 'جنگلی حیات کو مت کھلائیں',
    titleEn: 'Do not feed wildlife',
    body: 'پرندوں یا چھوٹے جانوروں کو انسانی کھانا نہ دیں؛ یہ ان کے صحت اور رویے کے لیے نقصان دہ ہے۔',
    bodyEn: 'Do not feed birds or small animals human food; it is harmful to their health and behaviour.',
  },
  {
    icon: '🔥',
    title: 'آگ اور کھلی شعلہ سے پرہیز',
    titleEn: 'Avoid fire & open flame',
    body: 'خشک گھاس اور درختوں کے درمیان باربی کیو یا کھلی آگ سے گریز کریں؛ آگ بجھانے کا سامان ساتھ رکھنا احتیاط ہے۔',
    bodyEn: 'Avoid barbecues or open fire among dry grass and trees; keeping firefighting gear nearby is a precaution.',
  },
  {
    icon: '🤝',
    title: 'ثقافتی اداروں کا احترام',
    titleEn: 'Respect cultural institutions',
    body: 'عجائب گھروں اور یادگاروں کے اندرونی حصوں میں تصویر کشی کے قواعد، خاموشی اور رہنمائی پر عمل کریں۔',
    bodyEn: 'Follow photography rules, quiet, and guidance inside museums and monuments.',
  },
  {
    icon: '👮',
    title: 'سکیورٹی اور رہنمائی',
    titleEn: 'Security & guidance',
    body: 'نشان زدہ عوامی علاقوں تک محدود رہیں، سکیورٹی ہدایات پر عمل کریں اور اندھیرے کے بعد سنسان راستوں سے گریز کریں۔',
    bodyEn: 'Stay within marked public areas, follow security instructions, and avoid deserted paths after dark.',
  },
];
