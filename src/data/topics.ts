/**
 * موضوعی صفحات کا رجسٹری (Topic registry)۔
 * 40 آزاد SEO صفحات کا مرکزی ماخذ: ہر موضوع کی اردو اور انگریزی دونوں زبانوں میں مکمل تفصیل۔
 * روٹنگ (src/pages/[topic].astro اور src/pages/en/[topic].astro) صرف اسی فہرست سے صفحات بناتی ہے۔
 *
 * موادی اصول:
 * - غیر تجارتی، غیر جانب دار، اپنی تحقیق پر مبنی۔
 * - قابلِ تبدیل معلومات (اوقات، ٹکٹ، پارکنگ) پر "موقع پر تصدیق کریں" کی صراحت۔
 * - کسی ریستورنٹ/برانڈ کی درجہ بندی نہیں؛ صرف قسم اور محل وقوع۔
 * - † والے موضوعات میں غیر مصدقہ تفصیل نہیں بنائی گئی۔
 */

export type TopicLocale = 'ur' | 'en';

export interface TopicSection {
  heading: string;
  headingEn: string;
  body: string;
  bodyEn: string;
  bullets?: string[];
  bulletsEn?: string[];
}

export interface TopicFaq {
  q: string;
  qEn: string;
  a: string;
  aEn: string;
}

export interface TopicContent {
  /** میٹا ٹائٹل (برانڈ لاحقہ جزوِ روٹنگ لگاتا ہے) */
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  h1: string;
  h1En: string;
  kicker: string;
  kickerEn: string;
  lead: string;
  leadEn: string;
  updated: string;
  updatedEn: string;
  sections: TopicSection[];
  faqs: TopicFaq[];
  /** منسلک موضوعات کے سلگز (موجودہ زبان میں اندرونی روابط) */
  related: string[];
}

export interface Topic {
  slug: string;
  group: TopicGroup;
  ur: TopicContent;
  en: TopicContent;
}

export type TopicGroup = 'attraction' | 'access' | 'museums' | 'food' | 'itineraries';

export const TOPIC_GROUP_LABELS: Record<TopicGroup, { ur: string; en: string }> = {
  attraction: { ur: 'مقام، تاریخ اور خصوصیات', en: 'The place, its history & features' },
  access: { ur: 'آمدورفت، سہولیات اور دورہ کی منصوبہ بندی', en: 'Getting there, facilities & planning' },
  museums: { ur: 'عجائب گھر، ثقافت اور قریبی مقامات', en: 'Museums, culture & nearby sites' },
  food: { ur: 'کھانا، چائے اور آس پاس کا کھانا', en: 'Food, tea & where to eat nearby' },
  itineraries: { ur: 'مختلف مسافروں کے لیے راستے', en: 'Routes for different visitors' },
};

export const TOPIC_GROUP_ORDER: TopicGroup[] = ['attraction', 'access', 'museums', 'food', 'itineraries'];

export const TOPICS: Topic[] = [
  {
    slug: 'viewpoint',
    group: 'attraction',
    ur: {
      title: 'شکرپڑیاں ویو پوائنٹ',
      titleEn: 'Shakarparian View Point',
      description:
        'شکرپڑیاں ویو پوائنٹ سے اسلام آباد–راولپنڈی کا وسیع نظارہ ملتا ہے۔ مقام، روشنی کا بہترین وقت اور سفری مشورے۔',
      descriptionEn:
        'The Shakarparian View Point overlooks the Islamabad–Rawalpindi spread. Where it is, the best light, and practical visiting notes.',
      h1: 'شکرپڑیاں ویو پوائنٹ: شہر کا نظارہ اور بہترین وقت',
      h1En: 'Shakarparian View Point: the city panorama & best time',
      kicker: 'نظارہ اور فوٹوگرافی',
      kickerEn: 'Viewpoint & photography',
      lead: 'شکرپڑیاں کی پہاڑی تقریباً 609 میٹر بلندی پر واقع ہے، جہاں سے اسلام آباد کا پھیلاؤ، مارگلہ کی پس منظر اور راولپنڈی کی جانب کھلی فضا نظر آتی ہے۔ یہاں کا نظارہ دیکھنے والوں کے لیے پارک کا سب سے واضح مقصود ہے۔',
      leadEn:
        'Shakarparian hill sits at about 609 m elevation, giving an open view over Islamabad, the Margalla backdrop, and toward Rawalpindi. The panorama is the clearest reason most visitors come.',
      updated: 'آخری جائزہ: 29 اکتوبر 2026',
      updatedEn: 'Last reviewed: 29 October 2026',
      sections: [
        {
          heading: 'ویو پوائنٹ کہاں ہے',
          headingEn: 'Where the viewpoint is',
          body: 'ویو پوائنٹ شکرپڑیاں کی مرکزی پہاڑی کے اوپری حصے کی طرف ہے، جو پاکستان مونومنٹ کے احاطے کے قریب واقع ہے۔ عین مقام اور متناسقات (33.6899848, 73.0936709) نقشے پر موجود ہیں، مگر پہاڑی پر مختلف رسائی پوائنٹس ہیں۔',
          bodyEn:
            'The viewpoint lies toward the upper part of the main Shakarparian hill, close to the Pakistan Monument complex. The marker and coordinates (33.6899848, 73.0936709) are on the map, but there are several access points on the hill.',
        },
        {
          heading: 'بہترین روشنی کا وقت',
          headingEn: 'Best light',
          body: 'طلوعِ آفتاب کے بعد اور غروبِ آفتاب سے پہلے کا وقت نرم روشنی اور صاف نظارے کے لیے موزوں ہے۔ گرمیوں میں دوپہر کی دھوپ سے بچیں اور پانی ساتھ رکھیں۔',
          bodyEn:
            'Just after sunrise and before sunset give soft light and clear views. In summer avoid midday sun and carry water.',
          bullets: [
            'صبح سویرے: کم ہجوم، نرم روشنی۔',
            'شام: شہر کی روشنیوں کا پینوراما۔',
            'مون سون کے بعد: گہرا سبزہ اور بادلوں کا کنٹراسٹ۔',
          ],
          bulletsEn: [
            'Early morning: fewer crowds, soft light.',
            'Evening: the lit city panorama.',
            'After monsoon: deep greenery and cloud contrast.',
          ],
        },
      ],
      faqs: [
        {
          q: 'شکرپڑیاں ویو پوائنٹ کتنی اونچائی پر ہے؟',
          qEn: 'How high is the Shakarparian View Point?',
          a: 'سرکاری/سی ڈی اے کے بیان کے مطابق پہاڑی کی بلندی تقریباً 609 میٹر ہے، جس سے شہر کا وسیع نظارہ ملتا ہے۔',
          aEn:
            'Per the CDA description the hill is about 609 m high, which is what gives the wide city view.',
        },
        {
          q: 'کیا ویو پوائنٹ تک گاڑی لے جا سکتے ہیں؟',
          qEn: 'Can you drive up to the viewpoint?',
          a: 'پہاڑی پر مختلف رسائی پوائنٹس ہیں۔ گاڑی کی اجازت یافتہ آمد اور پارکنگ کا مقام متعلقہ آپریٹر سے معلوم کریں؛ ہم نے مقام یا پارکنگ کی تصدیق نہیں کی۔',
          aEn:
            'There are different access points on the hill. Ask the relevant operator about authorised arrival and parking; we have not confirmed the exact spot.',
        },
        {
          q: 'کیا ڈرون سے فوٹوگرافی کی اجازت ہے؟',
          qEn: 'Is drone photography allowed?',
          a: 'ڈرون کے لیے مقامی قواعد اور اجازت الگ ہوتی ہے۔ شوٹنگ سے پہلے متعلقہ حکام سے اجازت معلوم کریں۔',
          aEn:
            'Drone rules and permits are separate. Check with the relevant authorities before flying.',
        },
      ],
      related: ['photo-spots', 'photos', 'sunset-photo-route', 'park-vs-monument'],
    },
    en: {
      title: 'Shakarparian View Point',
      titleEn: 'Shakarparian View Point',
      description:
        'The Shakarparian View Point overlooks the Islamabad–Rawalpindi spread. Where it is, the best light, and practical visiting notes.',
      descriptionEn:
        'The Shakarparian View Point overlooks the Islamabad–Rawalpindi spread. Where it is, the best light, and practical visiting notes.',
      h1: 'Shakarparian View Point: the city panorama & best time',
      h1En: 'Shakarparian View Point: the city panorama & best time',
      kicker: 'Viewpoint & photography',
      kickerEn: 'Viewpoint & photography',
      lead: 'Shakarparian hill sits at about 609 m elevation, giving an open view over Islamabad, the Margalla backdrop, and toward Rawalpindi. The panorama is the clearest reason most visitors come.',
      leadEn:
        'Shakarparian hill sits at about 609 m elevation, giving an open view over Islamabad, the Margalla backdrop, and toward Rawalpindi. The panorama is the clearest reason most visitors come.',
      updated: 'Last reviewed: 29 October 2026',
      updatedEn: 'Last reviewed: 29 October 2026',
      sections: [
        {
          heading: 'Where the viewpoint is',
          headingEn: 'Where the viewpoint is',
          body: 'The viewpoint lies toward the upper part of the main Shakarparian hill, close to the Pakistan Monument complex. The marker and coordinates (33.6899848, 73.0936709) are on the map, but there are several access points on the hill.',
          bodyEn:
            'The viewpoint lies toward the upper part of the main Shakarparian hill, close to the Pakistan Monument complex. The marker and coordinates (33.6899848, 73.0936709) are on the map, but there are several access points on the hill.',
        },
        {
          heading: 'Best light',
          headingEn: 'Best light',
          body: 'Just after sunrise and before sunset give soft light and clear views. In summer avoid midday sun and carry water.',
          bodyEn:
            'Just after sunrise and before sunset give soft light and clear views. In summer avoid midday sun and carry water.',
          bullets: [
            'Early morning: fewer crowds, soft light.',
            'Evening: the lit city panorama.',
            'After monsoon: deep greenery and cloud contrast.',
          ],
          bulletsEn: [
            'Early morning: fewer crowds, soft light.',
            'Evening: the lit city panorama.',
            'After monsoon: deep greenery and cloud contrast.',
          ],
        },
      ],
      faqs: [
        {
          q: 'How high is the Shakarparian View Point?',
          qEn: 'How high is the Shakarparian View Point?',
          a: 'Per the CDA description the hill is about 609 m high, which is what gives the wide city view.',
          aEn:
            'Per the CDA description the hill is about 609 m high, which is what gives the wide city view.',
        },
        {
          q: 'Can you drive up to the viewpoint?',
          qEn: 'Can you drive up to the viewpoint?',
          a: 'There are different access points on the hill. Ask the relevant operator about authorised arrival and parking; we have not confirmed the exact spot.',
          aEn:
            'There are different access points on the hill. Ask the relevant operator about authorised arrival and parking; we have not confirmed the exact spot.',
        },
        {
          q: 'Is drone photography allowed?',
          qEn: 'Is drone photography allowed?',
          a: 'Drone rules and permits are separate. Check with the relevant authorities before flying.',
          aEn:
            'Drone rules and permits are separate. Check with the relevant authorities before flying.',
        },
      ],
      related: ['photo-spots', 'photos', 'sunset-photo-route', 'park-vs-monument'],
    },
  },
  {
    slug: 'history',
    group: 'attraction',
    ur: {
      title: 'شکرپڑیاں کی تاریخ',
      titleEn: 'Shakarparian history',
      description:
        'شکرپڑیاں کی تاریخ: منصوبہ بند اسلام آباد کی سبز پہاڑی، دوستی کی شجرکاری اور پاکستان مونومنٹ تک کا سفر۔',
      descriptionEn:
        'The history of Shakarparian: from Islamabad’s planned green hill, through friendship tree planting, to the Pakistan Monument.',
      h1: 'شکرپڑیاں کی تاریخ اور ترقی',
      h1En: 'History & development of Shakarparian',
      kicker: 'مقام کی پہچان',
      kickerEn: 'About the place',
      lead: 'شکرپڑیاں اسلام آباد کی منصوبہ بند شہری شناخت کے ابتدائی سبز مناظر میں شمار ہوتی ہے، اور یہاں ریاستی مہمانوں کی یادگاری شجرکاری نے پہاڑی کو ایک "زندہ آرکائیو" بنا دیا۔',
      leadEn:
        'Shakarparian is among the early green vistas of Islamabad’s planned urban identity, and its memorial tree planting by state guests turned the hill into a living archive.',
      updated: 'آخری جائزہ: 29 اکتوبر 2026',
      updatedEn: 'Last reviewed: 29 October 2026',
      sections: [
        {
          heading: 'منصوبہ بند دارالحکومت کا دور',
          headingEn: 'The planned-capital era',
          body: '1960 کی دہائی کے بعد جیسے جیسے اسلام آباد بسا، شکرپڑیاں کو شہری سبز اور تفریحی منظرنامے میں باقاعدہ جگہ ملی۔ سی ڈی اے اسے تاریخی اہمیت والی پہاڑی تفریح گاہ کے طور پر بیان کرتی ہے۔',
          bodyEn:
            'After the 1960s, as Islamabad was built, Shakarparian was formally placed within the urban green and recreational landscape. The CDA describes it as a hill resort of historical importance.',
        },
        {
          heading: 'دوستی کی شجرکاری',
          headingEn: 'Friendship planting',
          body: 'مختلف ادوار میں پاکستان آنے والے سربراہانِ مملکت اور معزز مہمانوں نے یہاں درخت لگائے۔ یوں سبزہ صرف آرائش نہیں رہا بلکہ سفارتی یادداشت بن گیا۔',
          bodyEn:
            'Over different eras, visiting heads of state and honoured guests planted trees here, turning the greenery into a diplomatic memory.',
        },
      ],
      faqs: [
        {
          q: 'شکرپڑیاں کا نام کہاں سے آیا؟',
          qEn: 'Where does the name Shakarparian come from?',
          a: 'نام مقامی طور پر رائج ہے اور اسی پہاڑی علاقے کو "شکرپڑیاں" کہا جاتا ہے؛ انگریزی فہرستوں میں اسے Shakarparian لکھا جاتا ہے۔',
          aEn:
            'The name is locally used for this hillside area and is written as Shakarparian in English listings.',
        },
        {
          q: 'پاکستان مونومنٹ کب بنا؟',
          qEn: 'When was the Pakistan Monument built?',
          a: 'پاکستان مونومنٹ بعد میں مغربی شکرپڑیاں پر تعمیر ہوا اور قومی وحدت کی علامت بنا؛ عین تعمیراتی سال کی تصدیق عمارت کے سرکاری ذرائع سے کریں۔',
          aEn:
            'The Pakistan Monument was later built on the western Shakarparian as a symbol of national unity; confirm the exact construction year from the monument’s official sources.',
        },
      ],
      related: ['friendship-trees', 'park-vs-monument', 'pakistan-monument', 'cultural-area-map'],
    },
    en: {
      title: 'Shakarparian history',
      titleEn: 'Shakarparian history',
      description:
        'The history of Shakarparian: from Islamabad’s planned green hill, through friendship tree planting, to the Pakistan Monument.',
      descriptionEn:
        'The history of Shakarparian: from Islamabad’s planned green hill, through friendship tree planting, to the Pakistan Monument.',
      h1: 'History & development of Shakarparian',
      h1En: 'History & development of Shakarparian',
      kicker: 'About the place',
      kickerEn: 'About the place',
      lead: 'Shakarparian is among the early green vistas of Islamabad’s planned urban identity, and its memorial tree planting by state guests turned the hill into a living archive.',
      leadEn:
        'Shakarparian is among the early green vistas of Islamabad’s planned urban identity, and its memorial tree planting by state guests turned the hill into a living archive.',
      updated: 'Last reviewed: 29 October 2026',
      updatedEn: 'Last reviewed: 29 October 2026',
      sections: [
        {
          heading: 'The planned-capital era',
          headingEn: 'The planned-capital era',
          body: 'After the 1960s, as Islamabad was built, Shakarparian was formally placed within the urban green and recreational landscape. The CDA describes it as a hill resort of historical importance.',
          bodyEn:
            'After the 1960s, as Islamabad was built, Shakarparian was formally placed within the urban green and recreational landscape. The CDA describes it as a hill resort of historical importance.',
        },
        {
          heading: 'Friendship planting',
          headingEn: 'Friendship planting',
          body: 'Over different eras, visiting heads of state and honoured guests planted trees here, turning the greenery into a diplomatic memory.',
          bodyEn:
            'Over different eras, visiting heads of state and honoured guests planted trees here, turning the greenery into a diplomatic memory.',
        },
      ],
      faqs: [
        {
          q: 'Where does the name Shakarparian come from?',
          qEn: 'Where does the name Shakarparian come from?',
          a: 'The name is locally used for this hillside area and is written as Shakarparian in English listings.',
          aEn:
            'The name is locally used for this hillside area and is written as Shakarparian in English listings.',
        }, {
          q: 'When was the Pakistan Monument built?',
          qEn: 'When was the Pakistan Monument built?',
          a: 'The Pakistan Monument was later built on the western Shakarparian as a symbol of national unity; confirm the exact construction year from the monument’s official sources.',
          aEn:
            'The Pakistan Monument was later built on the western Shakarparian as a symbol of national unity; confirm the exact construction year from the monument’s official sources.',
        },
      ],
      related: ['friendship-trees', 'park-vs-monument', 'pakistan-monument', 'cultural-area-map'],
    },
  },
  {
    slug: 'friendship-trees',
    group: 'attraction',
    ur: {
      title: 'دوستی کے درخت',
      titleEn: 'Friendship trees',
      description:
        'شکرپڑیاں میں دوستی کے درخت: ریاستی مہمانوں کی یادگاری شجرکاری کی تاریخ، مقام اور دیکھنے کا طریقہ۔',
      descriptionEn:
        'The friendship trees of Shakarparian: the history of memorial planting by visiting state guests, where they are, and how to see them.',
      h1: 'دوستی کے درخت: شکرپڑیاں کا "زندہ آرکائیو"',
      h1En: 'Friendship trees: Shakarparian’s living archive',
      kicker: 'مقام کی تاریخ',
      kickerEn: 'Place history',
      lead: 'شکرپڑیاں میں مختلف ادوار میں آنے والے سربراہانِ مملکت اور معزز مہمانوں نے درخت لگائے، جو اس پارک کو ایک منفرد یادگاری مقام بناتے ہیں۔',
      leadEn:
        'At Shakarparian, visiting heads of state and honoured guests planted trees over different eras, making the park a unique memorial place.',
      updated: 'آخری جائزہ: 29 اکتوبر 2026',
      updatedEn: 'Last reviewed: 29 October 2026',
      sections: [
        {
          heading: 'یادگاری شجرکاری کیا ہے',
          headingEn: 'What the memorial planting is',
          body: 'یہ درخت اس بات کی علامت ہیں کہ مختلف اوقات میں پاکستان آنے والے غیر ملکی مہمانوں نے یہاں پودے لگائے۔ یہ عمل شکرپڑیاں کو محض ایک باغ کے بجائے سفارتی یادداشت کا حصہ بناتا ہے۔',
          bodyEn:
            'These trees mark that foreign guests who visited Pakistan at different times planted saplings here. The practice makes Shakarparian part of a diplomatic memory rather than just a garden.',
        },
        {
          heading: 'انہیں کیسے دیکھیں',
          headingEn: 'How to see them',
          body: 'یادگاری درختوں کا علاقہ پیدل چلنے والے راستوں کے قریب ہے۔ عین مقام اور موجودہ رسائی متعلقہ ادارے سے تصدیق کریں، کیونکہ ہم نے مقام کی تصدیق نہیں کی۔',
          bodyEn:
            'The friendship-trees area is near the walking paths. Confirm the exact location and current access with the relevant institution, as we have not verified the spot.',
        },
      ],
      faqs: [
        {
          q: 'کیا دوستی کے درختوں کی فہرست عوامی ہے؟',
          qEn: 'Is there a public list of the friendship trees?',
          a: 'مختلف درختوں پر پلیٹیں یا نشانات ہو سکتے ہیں، مگر مکمل عوامی فہرست کی تصدیق متعلقہ ادارے سے کریں۔',
          aEn:
            'Some trees may carry plaques or markers, but confirm a complete public list with the relevant institution.',
        },
        {
          q: 'کیا یہ علاقہ بچوں کے لیے موزوں ہے؟',
          qEn: 'Is this area suitable for children?',
          a: 'ہاں، یہ پیدل چلنے اور قدرتی ماحول دیکھنے کے لیے خاندانی دورے کا حصہ ہو سکتا ہے، مگر راستے اور سائے کے لیے پیشگی انتظام بہتر ہے۔',
          aEn:
            'Yes, it can be part of a family visit to walk and see the natural setting, but plan ahead for paths and shade.',
        },
      ],
      related: ['history', 'park-vs-monument', 'photo-spots', 'family-half-day'],
    },
    en: {
      title: 'Friendship trees',
      titleEn: 'Friendship trees',
      description:
        'The friendship trees of Shakarparian: the history of memorial planting by visiting state guests, where they are, and how to see them.',
      descriptionEn:
        'The friendship trees of Shakarparian: the history of memorial planting by visiting state guests, where they are, and how to see them.',
      h1: 'Friendship trees: Shakarparian’s living archive',
      h1En: 'Friendship trees: Shakarparian’s living archive',
      kicker: 'Place history',
      kickerEn: 'Place history',
      lead: 'At Shakarparian, visiting heads of state and honoured guests planted trees over different eras, making the park a unique memorial place.',
      leadEn:
        'At Shakarparian, visiting heads of state and honoured guests planted trees over different eras, making the park a unique memorial place.',
      updated: 'Last reviewed: 29 October 2026',
      updatedEn: 'Last reviewed: 29 October 2026',
      sections: [
        {
          heading: 'What the memorial planting is',
          headingEn: 'What the memorial planting is',
          body: 'These trees mark that foreign guests who visited Pakistan at different times planted saplings here. The practice makes Shakarparian part of a diplomatic memory rather than just a garden.',
          bodyEn:
            'These trees mark that foreign guests who visited Pakistan at different times planted saplings here. The practice makes Shakarparian part of a diplomatic memory rather than just a garden.',
        },
        {
          heading: 'How to see them',
          headingEn: 'How to see them',
          body: 'The friendship-trees area is near the walking paths. Confirm the exact location and current access with the relevant institution, as we have not verified the spot.',
          bodyEn:
            'The friendship-trees area is near the walking paths. Confirm the exact location and current access with the relevant institution, as we have not verified the spot.',
        },
      ],
      faqs: [
        {
          q: 'Is there a public list of the friendship trees?',
          qEn: 'Is there a public list of the friendship trees?',
          a: 'Some trees may carry plaques or markers, but confirm a complete public list with the relevant institution.',
          aEn:
            'Some trees may carry plaques or markers, but confirm a complete public list with the relevant institution.',
        }, {
          q: 'Is this area suitable for children?',
          qEn: 'Is this area suitable for children?',
          a: 'Yes, it can be part of a family visit to walk and see the natural setting, but plan ahead for paths and shade.',
          aEn:
            'Yes, it can be part of a family visit to walk and see the natural setting, but plan ahead for paths and shade.',
        },
      ],
      related: ['history', 'park-vs-monument', 'photo-spots', 'family-half-day'],
    },
  },
  {
    slug: 'park-vs-monument',
    group: 'attraction',
    ur: {
      title: 'شکرپڑیاں یا پاکستان مونومنٹ؟',
      titleEn: 'Shakarparian vs Pakistan Monument',
      description:
        'شکرپڑیاں اور پاکستان مونومنٹ میں فرق: ایک کھلا سبز علاقہ، دوسرا قومی یادگار۔ دونوں کو کیسے الگ سمجھیں۔',
      descriptionEn:
        'The difference between Shakarparian and the Pakistan Monument: one is an open green area, the other a national monument. How to tell them apart.',
      h1: 'شکرپڑیاں اور پاکستان مونومنٹ میں فرق',
      h1En: 'Shakarparian vs the Pakistan Monument',
      kicker: 'مقامات کا فرق',
      kickerEn: 'Place differences',
      lead: 'بہت سے زائرین "شکرپڑیاں" اور "پاکستان مونومنٹ" کو ایک سمجھتے ہیں، جبکہ یہ الگ مقامات ہیں: ایک قدرتی پہاڑی علاقہ ہے، دوسرا اس کے مغربی حصے پر بنی یادگار۔',
      leadEn:
        'Many visitors treat "Shakarparian" and the "Pakistan Monument" as one place, but they are separate: one is a natural hillside area, the other a monument built on its western part.',
      updated: 'آخری جائزہ: 29 اکتوبر 2026',
      updatedEn: 'Last reviewed: 29 October 2026',
      sections: [
        {
          heading: 'دونوں کی نوعیت',
          headingEn: 'What each is',
          body: 'شکرپڑیاں ایک کھلا سبز تفریحی علاقہ ہے جہاں چہل قدمی، نظارہ اور درخت ہیں۔ پاکستان مونومنٹ ایک تعمیر شدہ قومی یادگار ہے جس کا الگ احاطہ، عجائب گھر اور اوقات ہو سکتے ہیں۔',
          bodyEn:
            'Shakarparian is an open green recreational area with walks, views, and trees. The Pakistan Monument is a built national monument with its own compound, museum, and hours.',
        },
        {
          heading: 'حکمتِ عملی',
          headingEn: 'Planning tip',
          body: 'اگر آپ نظارے یا چہل قدمی چاہتے ہیں تو شکرپڑیاں کی پہاڑی طرف جائیں؛ اگر تعمیراتی یادگار اور عجائب گھر دیکھنا ہے تو پاکستان مونومنٹ کے احاطے میں جائیں۔ دونوں ایک دوسرے کے قریب ہیں مگر الگ ٹکٹ/اوقات ہو سکتے ہیں۔',
          bodyEn:
            'For views and walks, head to the Shakarparian hill; for the built monument and museum, go to the Pakistan Monument compound. They are close but may have separate tickets and hours.',
        },
      ],
      faqs: [
        {
          q: 'کیا پاکستان مونومنٹ شکرپڑیاں کا ہی حصہ ہے؟',
          qEn: 'Is the Pakistan Monument part of Shakarparian?',
          a: 'پاکستان مونومنٹ شکرپڑیاں کی پہاڑی پر واقع ہے مگر یہ ایک الگ احاطہ اور الگ ادارہ ہے؛ دونوں کو الگ سمجھیں۔',
          aEn:
            'The Pakistan Monument sits on the Shakarparian hill but is a separate compound and institution; treat them as distinct.',
        },
        {
          q: 'کیا دونوں ایک ہی ٹکٹ سے ملتے ہیں؟',
          qEn: 'Do both share one ticket?',
          a: 'نہیں، عجائب گھر یا یادگار کے اندرونی حصوں کے الگ ٹکٹ ہو سکتے ہیں۔ متعلقہ ادارے کا موجودہ قاعدہ روانگی سے پہلے دیکھیں۔',
          aEn:
            'No, the museum or indoor monument areas may have separate tickets. Check the relevant body’s current rule before you go.',
        },
      ],
      related: ['history', 'friendship-trees', 'pakistan-monument-museum', 'cultural-area-map'],
    },
    en: {
      title: 'Shakarparian vs Pakistan Monument',
      titleEn: 'Shakarparian vs Pakistan Monument',
      description:
        'The difference between Shakarparian and the Pakistan Monument: one is an open green area, the other a national monument. How to tell them apart.',
      descriptionEn:
        'The difference between Shakarparian and the Pakistan Monument: one is an open green area, the other a national monument. How to tell them apart.',
      h1: 'Shakarparian vs the Pakistan Monument',
      h1En: 'Shakarparian vs the Pakistan Monument',
      kicker: 'Place differences',
      kickerEn: 'Place differences',
      lead: 'Many visitors treat "Shakarparian" and the "Pakistan Monument" as one place, but they are separate: one is a natural hillside area, the other a monument built on its western part.',
      leadEn:
        'Many visitors treat "Shakarparian" and the "Pakistan Monument" as one place, but they are separate: one is a natural hillside area, the other a monument built on its western part.',
      updated: 'Last reviewed: 29 October 2026',
      updatedEn: 'Last reviewed: 29 October 2026',
      sections: [
        {
          heading: 'What each is',
          headingEn: 'What each is',
          body: 'Shakarparian is an open green recreational area with walks, views, and trees. The Pakistan Monument is a built national monument with its own compound, museum, and hours.',
          bodyEn:
            'Shakarparian is an open green recreational area with walks, views, and trees. The Pakistan Monument is a built national monument with its own compound, museum, and hours.',
        },
        {
          heading: 'Planning tip',
          headingEn: 'Planning tip',
          body: 'For views and walks, head to the Shakarparian hill; for the built monument and museum, go to the Pakistan Monument compound. They are close but may have separate tickets and hours.',
          bodyEn:
            'For views and walks, head to the Shakarparian hill; for the built monument and museum, go to the Pakistan Monument compound. They are close but may have separate tickets and hours.',
        },
      ],
      faqs: [
        {
          q: 'Is the Pakistan Monument part of Shakarparian?',
          qEn: 'Is the Pakistan Monument part of Shakarparian?',
          a: 'The Pakistan Monument sits on the Shakarparian hill but is a separate compound and institution; treat them as distinct.',
          aEn:
            'The Pakistan Monument sits on the Shakarparian hill but is a separate compound and institution; treat them as distinct.',
        }, {
          q: 'Do both share one ticket?',
          qEn: 'Do both share one ticket?',
          a: 'No, the museum or indoor monument areas may have separate tickets. Check the relevant body’s current rule before you go.',
          aEn:
            'No, the museum or indoor monument areas may have separate tickets. Check the relevant body’s current rule before you go.',
        },
      ],
      related: ['history', 'friendship-trees', 'pakistan-monument-museum', 'cultural-area-map'],
    },
  },
  {
    slug: 'photos',
    group: 'attraction',
    ur: {
      title: 'شکرپڑیاں کی تصاویر',
      titleEn: 'Shakarparian photos',
      description:
        'شکرپڑیاں نیشنل پارک کی حقیقی تصاویر: نظارہ، سبزہ، مونومنٹ اور موسم — مقام اور وقت کے ساتھ۔',
      descriptionEn:
        'Real photos of Shakarparian National Park: the view, greenery, monument, and seasons — with location and timing notes.',
      h1: 'شکرپڑیاں نیشنل پارک: حقیقی تصاویر اور نظارہ',
      h1En: 'Shakarparian National Park: real photos & views',
      kicker: 'تصویری جائزہ',
      kickerEn: 'Photo overview',
      lead: 'سائٹ پر موجود تصاویر پاکستان مونومنٹ (2018) کی ہیں اور یہ پارک کا داخلی مقام یا موجودہ سہولیات نہیں دکھاتیں۔ یہ صفحہ شکرپڑیاں کے نظارے، سبزہ اور موسم کا حقیقی خاکہ دینے کے لیے ہے۔',
      leadEn:
        'The photos on this site are of the Pakistan Monument (2018) and do not show the park entrance or current facilities. This page gives a real sense of Shakarparian’s views, greenery, and seasons.',
      updated: 'آخری جائزہ: 29 اکتوبر 2026',
      updatedEn: 'Last reviewed: 29 October 2026',
      sections: [
        {
          heading: 'کس طرح کی تصاویر موجود ہیں',
          headingEn: 'What photos are available',
          body: 'ہمارے پاس پاکستان مونومنٹ کی 2018 کی تصاویر ہیں جن کا لائسنس CC BY-SA 4.0 ہے۔ شکرپڑیاں کے پارک خود کی حقیقی پینوراما، ویو پوائنٹ، لینڈ اسکیپ اور موسم کی تصاویر کا اضافہ مستقبل کے اپ ڈیٹس میں ہو سکتا ہے۔',
          bodyEn:
            'We have 2018 photos of the Pakistan Monument under CC BY-SA 4.0. Real panoramas of the park itself, the viewpoint, the landscape, and seasonal shots may be added in future updates.',
        },
        {
          heading: 'تصویری حقوق',
          headingEn: 'Photo rights',
          body: 'تمام تصاویر کے ماخذ اور لائسنس صفحے کے نیچے درج ہیں۔ ہم تصاویر کی مصنوعی تخلیق یا بغیر اجازت استعمال کی حوصلہ شکنی کرتے ہیں۔',
          bodyEn:
            'All photo sources and licences are listed at the foot of the page. We avoid fabricating images or using them without permission.',
        },
      ],
      faqs: [
        {
          q: 'کیا یہاں پارک کا حقیقی نظارہ ہے؟',
          qEn: 'Are these real views of the park?',
          a: 'موجودہ تصاویر مونومنٹ کی ہیں؛ پارک کے حقیقی نظارے کی تصاویر کا اضافہ مستقبل میں ہو گا۔',
          aEn:
            'Current photos are of the monument; real park-view photos will be added later.',
        },
        {
          q: 'کیا تصویر استعمال کر سکتے ہیں؟',
          qEn: 'Can I use the photos?',
          a: 'ہاں، CC BY-SA 4.0 کے تحت، مناسب انتساب اور لائسنس کے ساتھ۔',
          aEn: 'Yes, under CC BY-SA 4.0, with proper attribution and the same licence.',
        },
      ],
      related: ['photo-spots', 'viewpoint', 'pakistan-monument', 'park-vs-monument'],
    },
    en: {
      title: 'Shakarparian photos',
      titleEn: 'Shakarparian photos',
      description:
        'Real photos of Shakarparian National Park: the view, greenery, monument, and seasons — with location and timing notes.',
      descriptionEn:
        'Real photos of Shakarparian National Park: the view, greenery, monument, and seasons — with location and timing notes.',
      h1: 'Shakarparian National Park: real photos & views',
      h1En: 'Shakarparian National Park: real photos & views',
      kicker: 'Photo overview',
      kickerEn: 'Photo overview',
      lead: 'The photos on this site are of the Pakistan Monument (2018) and do not show the park entrance or current facilities. This page gives a real sense of Shakarparian’s views, greenery, and seasons.',
      leadEn:
        'The photos on this site are of the Pakistan Monument (2018) and do not show the park entrance or current facilities. This page gives a real sense of Shakarparian’s views, greenery, and seasons.',
      updated: 'Last reviewed: 29 October 2026',
      updatedEn: 'Last reviewed: 29 October 2026',
      sections: [
        {
          heading: 'What photos are available',
          headingEn: 'What photos are available',
          body: 'We have 2018 photos of the Pakistan Monument under CC BY-SA 4.0. Real panoramas of the park itself, the viewpoint, the landscape, and seasonal shots may be added in future updates.',
          bodyEn:
            'We have 2018 photos of the Pakistan Monument under CC BY-SA 4.0. Real panoramas of the park itself, the viewpoint, the landscape, and seasonal shots may be added in future updates.',
        },
        {
          heading: 'Photo rights',
          headingEn: 'Photo rights',
          body: 'All photo sources and licences are listed at the foot of the page. We avoid fabricating images or using them without permission.',
          bodyEn:
            'All photo sources and licences are listed at the foot of the page. We avoid fabricating images or using them without permission.',
        },
      ],
      faqs: [
        {
          q: 'Are these real views of the park?',
          qEn: 'Are these real views of the park?',
          a: 'Current photos are of the monument; real park-view photos will be added later.',
          aEn: 'Current photos are of the monument; real park-view photos will be added later.',
        }, {
          q: 'Can I use the photos?',
          qEn: 'Can I use the photos?',
          a: 'Yes, under CC BY-SA 4.0, with proper attribution and the same licence.',
          aEn: 'Yes, under CC BY-SA 4.0, with proper attribution and the same licence.',
        },
      ],
      related: ['photo-spots', 'viewpoint', 'pakistan-monument', 'park-vs-monument'],
    },
  },
  {
    slug: 'photo-spots',
    group: 'attraction',
    ur: {
      title: 'فوٹوگرافی کے مقامات',
      titleEn: 'Photo spots',
      description:
        'شکرپڑیاں میں فوٹوگرافی کے مقامات اور شوٹنگ روٹ: ویو پوائنٹ، مونومنٹ کی محرابیں اور دوستی کے درخت۔',
      descriptionEn:
        'Photography locations and a shooting route at Shakarparian: the viewpoint, the monument petals, and the friendship trees.',
      h1: 'شکرپڑیاں فوٹوگرافی کے مقامات اور شوٹنگ روٹ',
      h1En: 'Shakarparian photo spots & shooting route',
      kicker: 'فوٹوگرافی',
      kickerEn: 'Photography',
      lead: 'فوٹوگرافرز کے لیے شکرپڑیاں میں کئی زاویے ملتے ہیں: شہر کا پینوراما، مونومنٹ کی پتھریلی محرابیں اور دوستی کے درختوں کا علاقہ۔',
      leadEn:
        'For photographers Shakarparian offers several angles: the city panorama, the stone petals of the monument, and the friendship-trees area.',
      updated: 'آخری جائزہ: 29 اکتوبر 2026',
      updatedEn: 'Last reviewed: 29 October 2026',
      sections: [
        {
          heading: 'مشورہ شدہ روٹ',
          headingEn: 'Suggested route',
          body: 'طلوعِ آفتاب یا غروب سے پہلے کے گھنٹے روشنی کے لیے بہترین ہیں۔ پہلے ویو پوائنٹ سے شہر کا نظارہ لیں، پھر مونومنٹ کی محرابوں کو شامل کریں، اور آخر میں دوستی کے درختوں کا علاقہ دیکھیں۔',
          bodyEn:
            'The hours around sunrise or just before sunset are best for light. Start with the city view from the viewpoint, add the monument petals, then finish at the friendship-trees area.',
          bullets: [
            'ویو پوائنٹ: شہر کا پینوراما اور مارگلہ کا پس منظر۔',
            'مونومنٹ: پتھریلی محرابیں اور نمونے۔',
            'دوستی کے درخت: سبزہ اور یادگاری پودے۔',
          ],
          bulletsEn: [
            'Viewpoint: city panorama and Margalla backdrop.',
            'Monument: stone petals and patterns.',
            'Friendship trees: greenery and memorial plants.',
          ],
        },
        {
          heading: 'سازوسامان',
          headingEn: 'Gear',
          body: 'ٹرائی پاڈ، پولارائزنگ فلٹر اور اضافی بیٹری ساتھ رکھیں۔ ڈرون کے لیے مقامی قواعد الگ ہیں — پرواز سے پہلے اجازت معلوم کریں۔',
          bodyEn:
            'Carry a tripod, polarising filter, and spare battery. Drone rules are separate — check permission before flying.',
        },
      ],
      faqs: [
        {
          q: 'کیا مونومنٹ کے اندر فوٹوگرافی کی اجازت ہے؟',
          qEn: 'Is photography allowed inside the monument?',
          a: 'عجائب گھر یا یادگار کے اندرونی حصوں میں فوٹوگرافی کے قواعد الگ ہو سکتے ہیں؛ متعلقہ ادارے کا قاعدہ وہاں پر چیک کریں۔',
          aEn:
            'Inside the museum or monument indoor areas the photography rules may differ; check the relevant body’s rule on site.',
        },
        {
          q: 'سبزہ کب سب سے زیادہ ہوتا ہے؟',
          qEn: 'When is the greenery at its best?',
          a: 'بہار (مارچ–اپریل) اور مون سون کے بعد (اگست–ستمبر) سبزہ عروج پر ہوتا ہے۔',
          aEn:
            'Spring (March–April) and after the monsoon (August–September) are when the greenery peaks.',
        },
      ],
      related: ['viewpoint', 'photos', 'sunset-photo-route', 'pakistan-monument'],
    },
    en: {
      title: 'Photo spots',
      titleEn: 'Photo spots',
      description:
        'Photography locations and a shooting route at Shakarparian: the viewpoint, the monument petals, and the friendship trees.',
      descriptionEn:
        'Photography locations and a shooting route at Shakarparian: the viewpoint, the monument petals, and the friendship trees.',
      h1: 'Shakarparian photo spots & shooting route',
      h1En: 'Shakarparian photo spots & shooting route',
      kicker: 'Photography',
      kickerEn: 'Photography',
      lead: 'For photographers Shakarparian offers several angles: the city panorama, the stone petals of the monument, and the friendship-trees area.',
      leadEn:
        'For photographers Shakarparian offers several angles: the city panorama, the stone petals of the monument, and the friendship-trees area.',
      updated: 'Last reviewed: 29 October 2026',
      updatedEn: 'Last reviewed: 29 October 2026',
      sections: [
        {
          heading: 'Suggested route',
          headingEn: 'Suggested route',
          body: 'The hours around sunrise or just before sunset are best for light. Start with the city view from the viewpoint, add the monument petals, then finish at the friendship-trees area.',
          bodyEn:
            'The hours around sunrise or just before sunset are best for light. Start with the city view from the viewpoint, add the monument petals, then finish at the friendship-trees area.',
          bullets: [
            'Viewpoint: city panorama and Margalla backdrop.',
            'Monument: stone petals and patterns.',
            'Friendship trees: greenery and memorial plants.',
          ],
          bulletsEn: [
            'Viewpoint: city panorama and Margalla backdrop.',
            'Monument: stone petals and patterns.',
            'Friendship trees: greenery and memorial plants.',
          ],
        },
        {
          heading: 'Gear',
          headingEn: 'Gear',
          body: 'Carry a tripod, polarising filter, and spare battery. Drone rules are separate — check permission before flying.',
          bodyEn:
            'Carry a tripod, polarising filter, and spare battery. Drone rules are separate — check permission before flying.',
        },
      ],
      faqs: [
        {
          q: 'Is photography allowed inside the monument?',
          qEn: 'Is photography allowed inside the monument?',
          a: 'Inside the museum or monument indoor areas the photography rules may differ; check the relevant body’s rule on site.',
          aEn:
            'Inside the museum or monument indoor areas the photography rules may differ; check the relevant body’s rule on site.',
        }, {
          q: 'When is the greenery at its best?',
          qEn: 'When is the greenery at its best?',
          a: 'Spring (March–April) and after the monsoon (August–September) are when the greenery peaks.',
          aEn:
            'Spring (March–April) and after the monsoon (August–September) are when the greenery peaks.',
        },
      ],
      related: ['viewpoint', 'photos', 'sunset-photo-route', 'pakistan-monument'],
    },
  },
  {
    slug: 'wildlife-and-plants',
    group: 'attraction',
    ur: {
      title: 'نباتات اور پرندے',
      titleEn: 'Plants & wildlife',
      description:
        'شکرپڑیاں کے پودے، پرندے اور ماحولیاتی مشاہدہ — فیملی کے ساتھ قدرتی علاقے کی دیکھ بھال۔',
      descriptionEn:
        'The plants, birds, and ecology of Shakarparian, plus how to observe nature responsibly with family.',
      h1: 'شکرپڑیاں: نباتات، پرندے اور ماحولیاتی مشاہدہ',
      h1En: 'Shakarparian: plants, birds & ecology',
      kicker: 'قدرتی مشاہدہ',
      kickerEn: 'Nature watching',
      lead: 'شکرپڑیاں کا سبز علاقہ پرندوں، درختوں اور مقامی نباتات کا مسکن ہے۔ یہاں فطرت کا مشاہدہ خاموشی اور احترام سے کریں۔',
      leadEn:
        'Shakarparian’s green area is home to birds, trees, and local plants. Observe nature here quietly and with respect.',
      updated: 'آخری جائزہ: 29 اکتوبر 2026',
      updatedEn: 'Last reviewed: 29 October 2026',
      sections: [
        {
          heading: 'ماحولیاتی نوٹ',
          headingEn: 'Ecology note',
          body: 'ہم نے پودوں یا پرندوں کی مکمل فہرست کی تصدیق نہیں کی۔ یہاں عام سبزہ، چھاؤں دار درخت اور شہری پرندے دیکھے جا سکتے ہیں، مگر پوری تفصیل مقامی ادارے یا ماحولیاتی ماخذ سے تصدیق کریں۔',
          bodyEn:
            'We have not verified a full plant or bird list. You can expect general greenery, shade trees, and city birds, but confirm details with the local body or an ecology source.',
        },
        {
          heading: 'ذمہ داری',
          headingEn: 'Responsibility',
          body: 'پرندوں یا جانوروں کو کھانا نہ دیں، کوڑا واپس لے جائیں اور نشان زدہ راستوں پر رہیں تاکہ مقامی ماحول محفوظ رہے۔',
          bodyEn:
            'Do not feed birds or animals, take litter back, and stay on marked paths so the local environment stays protected.',
        },
      ],
      faqs: [
        {
          q: 'کیا یہاں پرندوں کو دیکھ سکتے ہیں؟',
          qEn: 'Can you see birds here?',
          a: 'ہاں، شہری پرندوں کا مشاہدہ ہو سکتا ہے، مگر ہم نے کوئی فہرست تصدیق نہیں کی۔',
          aEn:
            'Yes, you may observe city birds, but we have not verified any list.',
        },
        {
          q: 'کیا جانوروں کو کھانا دیا جا سکتا ہے؟',
          qEn: 'Can you feed the animals?',
          a: 'نہیں، انسانی کھانا ان کے لیے نقصان دہ ہے۔',
          aEn: 'No, human food is harmful to them.',
        },
      ],
      related: ['photos', 'photo-spots', 'responsibility', 'visiting-with-children'],
    },
    en: {
      title: 'Plants & wildlife',
      titleEn: 'Plants & wildlife',
      description:
        'The plants, birds, and ecology of Shakarparian, plus how to observe nature responsibly with family.',
      descriptionEn:
        'The plants, birds, and ecology of Shakarparian, plus how to observe nature responsibly with family.',
      h1: 'Shakarparian: plants, birds & ecology',
      h1En: 'Shakarparian: plants, birds & ecology',
      kicker: 'Nature watching',
      kickerEn: 'Nature watching',
      lead: 'Shakarparian’s green area is home to birds, trees, and local plants. Observe nature here quietly and with respect.',
      leadEn:
        'Shakarparian’s green area is home to birds, trees, and local plants. Observe nature here quietly and with respect.',
      updated: 'Last reviewed: 29 October 2026',
      updatedEn: 'Last reviewed: 29 October 2026',
      sections: [
        {
          heading: 'Ecology note',
          headingEn: 'Ecology note',
          body: 'We have not verified a full plant or bird list. You can expect general greenery, shade trees, and city birds, but confirm details with the local body or an ecology source.',
          bodyEn:
            'We have not verified a full plant or bird list. You can expect general greenery, shade trees, and city birds, but confirm details with the local body or an ecology source.',
        },
        {
          heading: 'Responsibility',
          headingEn: 'Responsibility',
          body: 'Do not feed birds or animals, take litter back, and stay on marked paths so the local environment stays protected.',
          bodyEn:
            'Do not feed birds or animals, take litter back, and stay on marked paths so the local environment stays protected.',
        },
      ],
      faqs: [
        {
          q: 'Can you see birds here?',
          qEn: 'Can you see birds here?',
          a: 'Yes, you may observe city birds, but we have not verified any list.',
          aEn: 'Yes, you may observe city birds, but we have not verified any list.',
        }, {
          q: 'Can you feed the animals?',
          qEn: 'Can you feed the animals?',
          a: 'No, human food is harmful to them.',
          aEn: 'No, human food is harmful to them.',
        },
      ],
      related: ['photos', 'photo-spots', 'responsibility', 'visiting-with-children'],
    },
  },
  {
    slug: 'location-entrances',
    group: 'access',
    ur: {
      title: 'مقام اور داخلی راستے',
      titleEn: 'Location & entrances',
      description:
        'شکرپڑیاں کا مقام، متناسقات اور داخلی راستے: اسلام آباد ایکسپری وے کے قریب، نقشہ اور رسائی کی معلومات۔',
      descriptionEn:
        'Shakarparian’s location, coordinates and entry points: near the Islamabad Expressway, with a map and access notes.',
      h1: 'شکرپڑیاں: مقام، متناسقات اور داخلی راستے',
      h1En: 'Shakarparian: location, coordinates & entrances',
      kicker: 'مقام اور نقشہ',
      kickerEn: 'Location & map',
      lead: 'شکرپڑیاں اسلام آباد ایکسپری وے کے قریب، گارڈن ایونیو کے اطراف واقع ہے۔ عین داخلی راستے وقت کے ساتھ بدل سکتے ہیں، اس لیے متعلقہ ادارے سے تصدیق کریں۔',
      leadEn:
        'Shakarparian is near the Islamabad Expressway, around Garden Avenue. Exact entry points can change over time, so confirm with the relevant body.',
      updated: 'آخری جائزہ: 29 اکتوبر 2026',
      updatedEn: 'Last reviewed: 29 October 2026',
      sections: [
        {
          heading: 'متناسقات اور پتہ',
          headingEn: 'Coordinates & address',
          body: 'پتہ: Islamabad Expy, Islamabad, 44000, پاکستان۔ متناسقات تقریباً 33.6899848, 73.0936709۔ پلس کوڈ: M3QV+XF اسلام آباد۔ ہم نے مخصوص گیٹ کی تصدیق نہیں کی۔',
          bodyEn:
            'Address: Islamabad Expy, Islamabad, 44000, Pakistan. Coordinates about 33.6899848, 73.0936709. Plus code: M3QV+XF Islamabad. We have not verified a specific gate.',
        },
        {
          heading: 'نقشہ پر رہنمائی',
          headingEn: 'Map guidance',
          body: 'نقشہ مقام کا عمومی خاکہ دیتا ہے۔ گاڑی کی رسائی، پارکنگ اور پیدل راستے کی حتمی تصدیق مقامی بورڈ یا ادارے سے کریں۔',
          bodyEn:
            'The map gives a general location. Confirm vehicle access, parking, and walking routes on local signage or with the institution.',
        },
      ],
      faqs: [
        {
          q: 'کیا گاڑی سیدھے اوپر پہنچ سکتی ہے؟',
          qEn: 'Can a car reach the top directly?',
          a: 'پہاڑی پر مختلف رسائی پوائنٹس ہیں؛ متعلقہ ادارے سے اجازت یافتہ رسائی اور پارکنگ معلوم کریں۔',
          aEn:
            'There are different access points on the hill; ask the relevant institution about authorised access and parking.',
        },
        {
          q: 'کیا پیدل آنے والوں کے لیے راستہ ہے؟',
          qEn: 'Is there a walking route?',
          a: 'ہاں، پیدل چلنے والے راستے موجود ہیں، مگر ان کی دستیابی موسم اور دیکھ بھال سے متاثر ہو سکتی ہے۔',
          aEn:
            'Yes, walking paths exist, but their availability can depend on maintenance and weather.',
        },
      ],
      related: ['parking', 'st02-bus', 'getting-there', 'viewpoint'],
    },
    en: {
      title: 'Location & entrances',
      titleEn: 'Location & entrances',
      description:
        'Shakarparian’s location, coordinates and entry points: near the Islamabad Expressway, with a map and access notes.',
      descriptionEn:
        'Shakarparian’s location, coordinates and entry points: near the Islamabad Expressway, with a map and access notes.',
      h1: 'Shakarparian: location, coordinates & entrances',
      h1En: 'Shakarparian: location, coordinates & entrances',
      kicker: 'Location & map',
      kickerEn: 'Location & map',
      lead: 'Shakarparian is near the Islamabad Expressway, around Garden Avenue. Exact entry points can change over time, so confirm with the relevant body.',
      leadEn:
        'Shakarparian is near the Islamabad Expressway, around Garden Avenue. Exact entry points can change over time, so confirm with the relevant body.',
      updated: 'Last reviewed: 29 October 2026',
      updatedEn: 'Last reviewed: 29 October 2026',
      sections: [
        {
          heading: 'Coordinates & address',
          headingEn: 'Coordinates & address',
          body: 'Address: Islamabad Expy, Islamabad, 44000, Pakistan. Coordinates about 33.6899848, 73.0936709. Plus code: M3QV+XF Islamabad. We have not verified a specific gate.',
          bodyEn:
            'Address: Islamabad Expy, Islamabad, 44000, Pakistan. Coordinates about 33.6899848, 73.0936709. Plus code: M3QV+XF Islamabad. We have not verified a specific gate.',
        },
        {
          heading: 'Map guidance',
          headingEn: 'Map guidance',
          body: 'The map gives a general location. Confirm vehicle access, parking, and walking routes on local signage or with the institution.',
          bodyEn:
            'The map gives a general location. Confirm vehicle access, parking, and walking routes on local signage or with the institution.',
        },
      ],
      faqs: [
        {
          q: 'Can a car reach the top directly?',
          qEn: 'Can a car reach the top directly?',
          a: 'There are different access points on the hill; ask the relevant institution about authorised access and parking.',
          aEn:
            'There are different access points on the hill; ask the relevant institution about authorised access and parking.',
        }, {
          q: 'Is there a walking route?',
          qEn: 'Is there a walking route?',
          a: 'Yes, walking paths exist, but their availability can depend on maintenance and weather.',
          aEn:
            'Yes, walking paths exist, but their availability can depend on maintenance and weather.',
        },
      ],
      related: ['parking', 'st02-bus', 'getting-there', 'viewpoint'],
    },
  },
  {
    slug: 'parking',
    group: 'access',
    ur: {
      title: 'پارکنگ',
      titleEn: 'Parking',
      description:
        'شکرپڑیاں میں پارکنگ: قانونی اترنے کی جگہیں اور پارکنگ کی صورتحال — موقع پر تصدیق کی ضرورت۔',
      descriptionEn:
        'Parking at Shakarparian: legal drop-off points and parking conditions — confirm on site.',
      h1: 'شکرپڑیاں پارکنگ: گاڑی کہاں کھڑی کریں',
      h1En: 'Shakarparian parking: where to leave the car',
      kicker: 'آمدورفت',
      kickerEn: 'Getting there',
      lead: 'ہم نے پارکنگ کی حتمی جگہ یا شرائط کی تصدیق نہیں کی۔ پہاڑی کے مختلف حصوں میں ادارے کی جانب سے پارکنگ یا اترنے کی جگہیں ہو سکتی ہیں — روانگی سے پہلے مقامی بورڈ دیکھیں۔',
      leadEn:
        'We have not verified a final parking spot or terms. Different parts of the hill may have institution-run parking or drop-off points — check local signage before you go.',
      updated: 'آخری جائزہ: 29 اکتوبر 2026',
      updatedEn: 'Last reviewed: 29 October 2026',
      sections: [
        {
          heading: 'پارکنگ کی صورتحال',
          headingEn: 'Parking situation',
          body: 'سماجی نقشے پر مقام کا خاکہ مل سکتا ہے، مگر پارکنگ کی موجودگی، فیس یا گنجائش وقت کے ساتھ بدل سکتی ہے۔ ہم نے کوئی مخصوص پارکنگ کی جگہ تصدیق نہیں کی۔',
          bodyEn:
            'A general location is on the map, but whether parking exists, its fee, or capacity can change. We have not confirmed any specific parking spot.',
        },
        {
          heading: 'مشورہ',
          headingEn: 'Advice',
          body: 'اگر آپ مونومنٹ یا ویو پوائنٹ جا رہے ہیں تو پیدل فاصلے اور ادارے کی پارکنگ کا نوٹ لیں۔ عوامی دنوں میں گنجائش کم ہو سکتی ہے۔',
          bodyEn:
            'If heading to the monument or viewpoint, note the walking distance and any institution parking. Capacity may be lower on public days.',
        },
      ],
      faqs: [
        {
          q: 'کیا پارکنگ مفت ہے؟',
          qEn: 'Is parking free?',
          a: 'ہم نے فیس کی تصدیق نہیں کی؛ مقامی بورڈ یا ادارے سے پتہ کریں۔',
          aEn: 'We have not verified the fee; ask on local signage or with the institution.',
        },
        {
          q: 'کیا اترنے کی جگہ الگ ہے؟',
          qEn: 'Is there a separate drop-off?',
          a: 'ممکن ہے، مگر تصدیق نہیں کی گئی؛ موقع پر چیک کریں۔',
          aEn: 'Possibly, but unverified; check on site.',
        },
      ],
      related: ['location-entrances', 'st02-bus', 'taxi-pickup', 'from-airport'],
    },
    en: {
      title: 'Parking',
      titleEn: 'Parking',
      description:
        'Parking at Shakarparian: legal drop-off points and parking conditions — confirm on site.',
      descriptionEn:
        'Parking at Shakarparian: legal drop-off points and parking conditions — confirm on site.',
      h1: 'Shakarparian parking: where to leave the car',
      h1En: 'Shakarparian parking: where to leave the car',
      kicker: 'Getting there',
      kickerEn: 'Getting there',
      lead: 'We have not verified a final parking spot or terms. Different parts of the hill may have institution-run parking or drop-off points — check local signage before you go.',
      leadEn:
        'We have not verified a final parking spot or terms. Different parts of the hill may have institution-run parking or drop-off points — check local signage before you go.',
      updated: 'Last reviewed: 29 October 2026',
      updatedEn: 'Last reviewed: 29 October 2026',
      sections: [
        {
          heading: 'Parking situation',
          headingEn: 'Parking situation',
          body: 'A general location is on the map, but whether parking exists, its fee, or capacity can change. We have not confirmed any specific parking spot.',
          bodyEn:
            'A general location is on the map, but whether parking exists, its fee, or capacity can change. We have not confirmed any specific parking spot.',
        },
        {
          heading: 'Advice',
          headingEn: 'Advice',
          body: 'If heading to the monument or viewpoint, note the walking distance and any institution parking. Capacity may be lower on public days.',
          bodyEn:
            'If heading to the monument or viewpoint, note the walking distance and any institution parking. Capacity may be lower on public days.',
        },
      ],
      faqs: [
        {
          q: 'Is parking free?',
          qEn: 'Is parking free?',
          a: 'We have not verified the fee; ask on local signage or with the institution.',
          aEn: 'We have not verified the fee; ask on local signage or with the institution.',
        }, {
          q: 'Is there a separate drop-off?',
          qEn: 'Is there a separate drop-off?',
          a: 'Possibly, but unverified; check on site.',
          aEn: 'Possibly, but unverified; check on site.',
        },
      ],
      related: ['location-entrances', 'st02-bus', 'taxi-pickup', 'from-airport'],
    },
  },
  {
    slug: 'st02-bus',
    group: 'access',
    ur: {
      title: 'ایس ٹی-02 بس',
      titleEn: 'ST-02 bus',
      description:
        'سی ڈی اے کی ST-02 بس شکرپڑیاں کے قریب سے گزرتی ہے: روٹ، چلنے کے دن اور اسٹاپس کی معلومات۔',
      descriptionEn:
        'The CDA ST-02 bus passes near Shakarparian: route, running days, and stops.',
      h1: 'ST-02 بس: شکرپڑیاں تک عوامی ٹرانسپورٹ',
      h1En: 'ST-02 bus: public transport to Shakarparian',
      kicker: 'بس روٹ',
      kickerEn: 'Bus route',
      lead: 'سی ڈی اے (CDA) کی لائن میپ میں Shakarparian Park سے گزرنے والی ST-02 درج ہے۔ عوامی پی ڈی ایف کے مطابق یہ ہفتہ اور اتوار کو چلتی ہے اور تقریباً ایک گھنٹے میں ایک بار آتی ہے۔',
      leadEn:
        'The CDA route map lists ST-02 passing Shakarparian Park. Its public PDF notes Saturday and Sunday service at roughly hourly intervals.',
      updated: 'آخری جائزہ: 29 اکتوبر 2026',
      updatedEn: 'Last reviewed: 29 October 2026',
      sections: [
        {
          heading: 'سرکاری معلومات',
          headingEn: 'Official information',
          body: 'سی ڈی اے کی لائن میپ ST-02 کو Shakarparian Park کے قریب دکھاتی ہے۔ عوامی پی ڈی ایف کے مطابق یہ ہفتہ/اتوار کو چلتی ہے، تقریباً ہر گھنٹے بعد۔ یہ موجودہ وقت کی معلومات نہیں؛ روانگی سے پہلے سی ڈی اے سے موجودہ شیڈول تصدیق کریں۔',
          bodyEn:
            'The CDA line map shows ST-02 near Shakarparian Park. Its public PDF states Saturday/Sunday service at roughly hourly headways. This is not current; confirm the live schedule with CDA before travel.',
          bullets: [
            'روٹ: اسلام آباد کی عوامی ٹرانسپورٹ لائن۔',
            'چلنے کے دن: سرکاری پی ڈی ایف کے مطابق ہفتہ و اتوار (موجودہ شیڈول تصدیق کریں)۔',
            'وقفہ: تقریباً ایک گھنٹہ (تصدیق طلب)۔',
          ],
          bulletsEn: [
            'Route: an Islamabad public-transport line.',
            'Running days: Saturday/Sunday per the public PDF (verify the current schedule).',
            'Headway: about an hour (to be confirmed).',
          ],
        },
        {
          heading: 'احتیاط',
          headingEn: 'Caution',
          body: 'ہم نے لائیو شیڈول کی تصدیق نہیں کی۔ عوامی ٹرانسپورٹ پرانے نقشے اور موجودہ حالات میں فرق ہو سکتا ہے، اس لیے ٹریول سے پہلے تصدیق کریں۔',
          bodyEn:
            'We have not verified the live schedule. Public-transport maps can lag reality, so confirm before you travel.',
        },
      ],
      faqs: [
        {
          q: 'کیا یہ ہر روز چلتی ہے؟',
          qEn: 'Does it run every day?',
          a: 'سرکاری پی ڈی ایف کے مطابق ہفتہ/اتوار کو، مگر موجودہ شیڈول کی تصدیق ضروری ہے۔',
          aEn:
            'Per the public PDF, Saturday/Sunday, but verify the current schedule.',
        },
        {
          q: 'کیا یہ سیدھے پارک کے گیٹ تک جاتی ہے؟',
          qEn: 'Does it stop right at the park gate?',
          a: 'ہم نے عین اسٹاپ کی تصدیق نہیں کی؛ قریب ترین اسٹاپ سے پیدل فاصلہ متعلقہ بورڈ سے پتہ کریں۔',
          aEn:
            'We have not verified the exact stop; find the walking distance from the nearest stop on local signage.',
        },
      ],
      related: ['location-entrances', 'parking', 'getting-there', 'from-rawalpindi'],
    },
    en: {
      title: 'ST-02 bus',
      titleEn: 'ST-02 bus',
      description:
        'The CDA ST-02 bus passes near Shakarparian: route, running days, and stops.',
      descriptionEn:
        'The CDA ST-02 bus passes near Shakarparian: route, running days, and stops.',
      h1: 'ST-02 bus: public transport to Shakarparian',
      h1En: 'ST-02 bus: public transport to Shakarparian',
      kicker: 'Bus route',
      kickerEn: 'Bus route',
      lead: 'The CDA route map lists ST-02 passing Shakarparian Park. Its public PDF notes Saturday and Sunday service at roughly hourly intervals.',
      leadEn:
        'The CDA route map lists ST-02 passing Shakarparian Park. Its public PDF notes Saturday and Sunday service at roughly hourly intervals.',
      updated: 'Last reviewed: 29 October 2026',
      updatedEn: 'Last reviewed: 29 October 2026',
      sections: [
        {
          heading: 'Official information',
          headingEn: 'Official information',
          body: 'The CDA line map shows ST-02 near Shakarparian Park. Its public PDF states Saturday/Sunday service at roughly hourly headways. This is not current; confirm the live schedule with CDA before travel.',
          bodyEn:
            'The CDA line map shows ST-02 near Shakarparian Park. Its public PDF states Saturday/Sunday service at roughly hourly headways. This is not current; confirm the live schedule with CDA before travel.',
          bullets: [
            'Route: an Islamabad public-transport line.',
            'Running days: Saturday/Sunday per the public PDF (verify the current schedule).',
            'Headway: about an hour (to be confirmed).',
          ],
          bulletsEn: [
            'Route: an Islamabad public-transport line.',
            'Running days: Saturday/Sunday per the public PDF (verify the current schedule).',
            'Headway: about an hour (to be confirmed).',
          ],
        },
        {
          heading: 'Caution',
          headingEn: 'Caution',
          body: 'We have not verified the live schedule. Public-transport maps can lag reality, so confirm before you travel.',
          bodyEn:
            'We have not verified the live schedule. Public-transport maps can lag reality, so confirm before you travel.',
        },
      ],
      faqs: [
        {
          q: 'Does it run every day?',
          qEn: 'Does it run every day?',
          a: 'Per the public PDF, Saturday/Sunday, but verify the current schedule.',
          aEn:
            'Per the public PDF, Saturday/Sunday, but verify the current schedule.',
        }, {
          q: 'Does it stop right at the park gate?',
          qEn: 'Does it stop right at the park gate?',
          a: 'We have not verified the exact stop; find the walking distance from the nearest stop on local signage.',
          aEn:
            'We have not verified the exact stop; find the walking distance from the nearest stop on local signage.',
        },
      ],
      related: ['location-entrances', 'parking', 'getting-there', 'from-rawalpindi'],
    },
  },
  {
    slug: 'from-airport',
    group: 'access',
    ur: {
      title: 'ائیرپورٹ سے آنے کا طریقہ',
      titleEn: 'From the airport',
      description:
        'اسلام آباد انٹرنیشنل ائیرپورٹ سے شکرپڑیاں تک آنے کا طریقہ: کرائے کی گاڑی، ایپس اور راستہ۔',
      descriptionEn:
        'How to get from Islamabad International Airport to Shakarparian: taxi, ride apps, and the route.',
      h1: 'اسلام آباد ائیرپورٹ سے شکرپڑیاں تک',
      h1En: 'From Islamabad Airport to Shakarparian',
      kicker: 'دور کے سفر',
      kickerEn: 'Longer trip',
      lead: 'اسلام آباد انٹرنیشنل ائیرپورٹ شہر سے کافی فاصلے پر ہے۔ سب سے آسان راستہ کرائے کی گاڑی یا رائیڈ ایپ (جیسے Careem/InDrive) ہے، جو براہ راست ایکسپری وے کے ذریعے لے جاتا ہے۔',
      leadEn:
        'Islamabad International Airport is some distance from the city. The easiest route is a taxi or ride app (such as Careem/InDrive), which takes the expressway directly.',
      updated: 'آخری جائزہ: 29 اکتوبر 2026',
      updatedEn: 'Last reviewed: 29 October 2026',
      sections: [
        {
          heading: 'رائیڈ ایپ یا ٹیکسی',
          headingEn: 'Ride app or taxi',
          body: 'ائیرپورٹ پر رائیڈ ایپ یا ٹیکسی دستیاب ہے۔ منزل "Shakarparian" یا "Pakistan Monument" رکھیں؛ ڈرائیور کو واضح مقام بتائیں کیونکہ ہم نے عین گیٹ کی تصدیق نہیں کی۔',
          bodyEn:
            'Ride apps or taxis are available at the airport. Set the destination to "Shakarparian" or "Pakistan Monument" and tell the driver the specific spot, as we have not verified the exact gate.',
        },
        {
          heading: 'راستہ',
          headingEn: 'Route',
          body: 'عام راستہ Kashmir Highway / Islamabad Expressway کے ذریعے شہر کی جانب ہے۔ ٹریفک کے حالات کے مطابق وقت بدل سکتا ہے۔',
          bodyEn:
            'The usual route goes via the Kashmir Highway / Islamabad Expressway toward the city. Time varies with traffic.',
        },
      ],
      faqs: [
        {
          q: 'کتنا وقت لگتا ہے؟',
          qEn: 'How long does it take?',
          a: 'ٹریفک کے مطابق تقریباً 40–60 منٹ، مگر ہم نے حتمی وقت کی تصدیق نہیں کی۔',
          aEn:
            'Roughly 40–60 minutes by traffic, but we have not verified a final time.',
        },
        {
          q: 'کیا بس سے جا سکتے ہیں؟',
          qEn: 'Can you go by bus?',
          a: 'ہاں، شہر کے بس نظام سے بھی ممکن ہے، مگر ائیرپورٹ سے براہِ راست روٹ کی تصدیق مقامی ٹرانسپورٹ سے کریں۔',
          aEn:
            'Yes, via the city bus network, but confirm a direct route from the airport with local transport.',
        },
      ],
      related: ['taxi-pickup', 'parking', 'st02-bus', 'getting-there'],
    },
    en: {
      title: 'From the airport',
      titleEn: 'From the airport',
      description:
        'How to get from Islamabad International Airport to Shakarparian: taxi, ride apps, and the route.',
      descriptionEn:
        'How to get from Islamabad International Airport to Shakarparian: taxi, ride apps, and the route.',
      h1: 'From Islamabad Airport to Shakarparian',
      h1En: 'From Islamabad Airport to Shakarparian',
      kicker: 'Longer trip',
      kickerEn: 'Longer trip',
      lead: 'Islamabad International Airport is some distance from the city. The easiest route is a taxi or ride app (such as Careem/InDrive), which takes the expressway directly.',
      leadEn:
        'Islamabad International Airport is some distance from the city. The easiest route is a taxi or ride app (such as Careem/InDrive), which takes the expressway directly.',
      updated: 'Last reviewed: 29 October 2026',
      updatedEn: 'Last reviewed: 29 October 2026',
      sections: [
        {
          heading: 'Ride app or taxi',
          headingEn: 'Ride app or taxi',
          body: 'Ride apps or taxis are available at the airport. Set the destination to "Shakarparian" or "Pakistan Monument" and tell the driver the specific spot, as we have not verified the exact gate.',
          bodyEn:
            'Ride apps or taxis are available at the airport. Set the destination to "Shakarparian" or "Pakistan Monument" and tell the driver the specific spot, as we have not verified the exact gate.',
        },
        {
          heading: 'Route',
          headingEn: 'Route',
          body: 'The usual route goes via the Kashmir Highway / Islamabad Expressway toward the city. Time varies with traffic.',
          bodyEn:
            'The usual route goes via the Kashmir Highway / Islamabad Expressway toward the city. Time varies with traffic.',
        },
      ],
      faqs: [
        {
          q: 'How long does it take?',
          qEn: 'How long does it take?',
          a: 'Roughly 40–60 minutes by traffic, but we have not verified a final time.',
          aEn:
            'Roughly 40–60 minutes by traffic, but we have not verified a final time.',
        }, {
          q: 'Can you go by bus?',
          qEn: 'Can you go by bus?',
          a: 'Yes, via the city bus network, but confirm a direct route from the airport with local transport.',
          aEn:
            'Yes, via the city bus network, but confirm a direct route from the airport with local transport.',
        },
      ],
      related: ['taxi-pickup', 'parking', 'st02-bus', 'getting-there'],
    },
  },
  {
    slug: 'from-rawalpindi',
    group: 'access',
    ur: {
      title: 'راولپنڈی سے آنے کا طریقہ',
      titleEn: 'From Rawalpindi',
      description:
        'راولپنڈی سے شکرپڑیاں تک آنے کا طریقہ: ٹیکسی، رائیڈ ایپ اور عوامی ٹرانسپورٹ۔',
      descriptionEn:
        'Getting from Rawalpindi to Shakarparian: taxi, ride apps, and public transport.',
      h1: 'راولپنڈی سے شکرپڑیاں تک',
      h1En: 'From Rawalpindi to Shakarparian',
      kicker: 'قریبی شہر',
      kickerEn: 'Nearby city',
      lead: 'راولپنڈی شکرپڑیاں کے مشرقی جانب واقع ہے۔ کرائے کی گاڑی، رائیڈ ایپ یا عوامی ٹرانسپورٹ کے ذریعے آسانی سے پہنچا جا سکتا ہے۔',
      leadEn:
        'Rawalpindi lies east of Shakarparian. A taxi, ride app, or public transport can get you there fairly easily.',
      updated: 'آخری جائزہ: 29 اکتوبر 2026',
      updatedEn: 'Last reviewed: 29 October 2026',
      sections: [
        {
          heading: 'رائیڈ ایپ یا ٹیکسی',
          headingEn: 'Ride app or taxi',
          body: 'رائیڈ ایپ (Careem/InDrive وغیرہ) یا ٹیکسی سب سے سیدھا راستہ دیتی ہے اور سیدھے منزل تک لے جاتی ہے۔',
          bodyEn:
            'A ride app (Careem/InDrive, etc.) or taxi gives the most direct route and drops you at the destination.',
        },
        {
          heading: 'عوامی ٹرانسپورٹ',
          headingEn: 'Public transport',
          body: 'شہر کی بسیں / شٹلز بھی دستیاب ہیں، مگر راولپنڈی سے براہِ راست روٹ کی تصدیق مقامی ٹرانسپورٹ سے کریں۔',
          bodyEn:
            'City buses / shuttles are also available, but confirm a direct route from Rawalpindi with local transport.',
        },
      ],
      faqs: [
        {
          q: 'کتنا وقت لگتا ہے؟',
          qEn: 'How long does it take?',
          a: 'ٹریفک کے مطابق تقریباً 30–50 منٹ۔',
          aEn: 'Roughly 30–50 minutes depending on traffic.',
        },
        {
          q: 'کیا میٹرو بس استعمال کر سکتے ہیں؟',
          qEn: 'Can you use the metro bus?',
          a: 'راولپنڈی–اسلام آباد میٹرو بس نظام موجود ہے؛ قریب ترین اسٹیشن سے آگے کا حصہ رائیڈ ایپ یا ٹیکسی سے طے کریں۔',
          aEn:
            'The Rawalpindi–Islamabad metro bus system exists; cover the final leg from the nearest station by ride app or taxi.',
        },
      ],
      related: ['st02-bus', 'from-airport', 'taxi-pickup', 'getting-there'],
    },
    en: {
      title: 'From Rawalpindi',
      titleEn: 'From Rawalpindi',
      description:
        'Getting from Rawalpindi to Shakarparian: taxi, ride apps, and public transport.',
      descriptionEn:
        'Getting from Rawalpindi to Shakarparian: taxi, ride apps, and public transport.',
      h1: 'From Rawalpindi to Shakarparian',
      h1En: 'From Rawalpindi to Shakarparian',
      kicker: 'Nearby city',
      kickerEn: 'Nearby city',
      lead: 'Rawalpindi lies east of Shakarparian. A taxi, ride app, or public transport can get you there fairly easily.',
      leadEn:
        'Rawalpindi lies east of Shakarparian. A taxi, ride app, or public transport can get you there fairly easily.',
      updated: 'Last reviewed: 29 October 2026',
      updatedEn: 'Last reviewed: 29 October 2026',
      sections: [
        {
          heading: 'Ride app or taxi',
          headingEn: 'Ride app or taxi',
          body: 'A ride app (Careem/InDrive, etc.) or taxi gives the most direct route and drops you at the destination.',
          bodyEn:
            'A ride app (Careem/InDrive, etc.) or taxi gives the most direct route and drops you at the destination.',
        },
        {
          heading: 'Public transport',
          headingEn: 'Public transport',
          body: 'City buses / shuttles are also available, but confirm a direct route from Rawalpindi with local transport.',
          bodyEn:
            'City buses / shuttles are also available, but confirm a direct route from Rawalpindi with local transport.',
        },
      ],
      faqs: [
        {
          q: 'How long does it take?',
          qEn: 'How long does it take?',
          a: 'Roughly 30–50 minutes depending on traffic.',
          aEn: 'Roughly 30–50 minutes depending on traffic.',
        }, {
          q: 'Can you use the metro bus?',
          qEn: 'Can you use the metro bus?',
          a: 'The Rawalpindi–Islamabad metro bus system exists; cover the final leg from the nearest station by ride app or taxi.',
          aEn:
            'The Rawalpindi–Islamabad metro bus system exists; cover the final leg from the nearest station by ride app or taxi.',
        },
      ],
      related: ['st02-bus', 'from-airport', 'taxi-pickup', 'getting-there'],
    },
  },
  {
    slug: 'taxi-pickup',
    group: 'access',
    ur: {
      title: 'ٹیکسی اور رائیڈ ایپ کی جگہ',
      titleEn: 'Taxi & ride pickup',
      description:
        'شکرپڑیاں کے لیے ٹیکسی اور رائیڈ ایپ اترنے کی جگہ — موقع پر تصدیق ضروری۔',
      descriptionEn:
        'Taxi and ride-app drop-off at Shakarparian — confirm on site.',
      h1: 'ٹیکسی اور رائیڈ ایپ: کہاں اتریں',
      h1En: 'Taxi & ride app: where to be dropped',
      kicker: 'اترنے کی جگہ',
      kickerEn: 'Drop-off',
      lead: 'ہم نے ٹیکسی یا رائیڈ ایپ کے لیے مخصوص اترنے کی جگہ کی تصدیق نہیں کی۔ ڈرائیور کو واضح مقام (مونومنٹ کا احاطہ یا ویو پوائنٹ) بتائیں اور مقامی بورڈ سے فاصلہ پتہ کریں۔',
      leadEn:
        'We have not verified a specific taxi or ride-app drop-off. Tell the driver a clear spot (the monument compound or the viewpoint) and check the walking distance on local signage.',
      updated: 'آخری جائزہ: 29 اکتوبر 2026',
      updatedEn: 'Last reviewed: 29 October 2026',
      sections: [
        {
          heading: 'ڈرائیور کو کیا بتائیں',
          headingEn: 'What to tell the driver',
          body: 'اگر آپ مونومنٹ دیکھنا چاہتے ہیں تو "Pakistan Monument" کہیں، اور اگر نظارہ چاہیے تو "Shakarparian viewpoint"۔ عین گیٹ کی تصدیق متعلقہ بورڈ سے کریں۔',
          bodyEn:
            'If you want the monument, say "Pakistan Monument"; for the view, "Shakarparian viewpoint". Confirm the exact gate on local signage.',
        },
        {
          heading: 'احتیاط',
          headingEn: 'Caution',
          body: 'پہاڑی پر کئی رسائی پوائنٹس ہیں، اس لیے "شکرپڑیاں" اکیلا نام کافی نہیں ہو سکتا۔',
          bodyEn:
            'There are several access points on the hill, so "Shakarparian" alone may be too vague.',
        },
      ],
      faqs: [
        {
          q: 'کیا اوبر/کریم چلتی ہیں؟',
          qEn: 'Do Uber/Careem operate?',
          a: 'علاقے میں رائیڈ ایپس عام ہیں (مثلاً Careem/InDrive)، مگر سروس کی دستیابی وقت کے ساتھ بدل سکتی ہے۔',
          aEn:
            'Ride apps are common in the area (e.g., Careem/InDrive), but availability can change over time.',
        },
        {
          q: 'کیا نقدی ضروری ہے؟',
          qEn: 'Is cash needed?',
          a: 'کچھ ایپس نقدی بھی قبول کرتی ہیں؛ متعلقہ ایپ کی ادائیگی کی صورتحال چیک کریں۔',
          aEn:
            'Some apps also accept cash; check the payment option on the relevant app.',
        },
      ],
      related: ['parking', 'location-entrances', 'from-airport', 'from-rawalpindi'],
    },
    en: {
      title: 'Taxi & ride pickup',
      titleEn: 'Taxi & ride pickup',
      description:
        'Taxi and ride-app drop-off at Shakarparian — confirm on site.',
      descriptionEn:
        'Taxi and ride-app drop-off at Shakarparian — confirm on site.',
      h1: 'Taxi & ride app: where to be dropped',
      h1En: 'Taxi & ride app: where to be dropped',
      kicker: 'Drop-off',
      kickerEn: 'Drop-off',
      lead: 'We have not verified a specific taxi or ride-app drop-off. Tell the driver a clear spot (the monument compound or the viewpoint) and check the walking distance on local signage.',
      leadEn:
        'We have not verified a specific taxi or ride-app drop-off. Tell the driver a clear spot (the monument compound or the viewpoint) and check the walking distance on local signage.',
      updated: 'Last reviewed: 29 October 2026',
      updatedEn: 'Last reviewed: 29 October 2026',
      sections: [
        {
          heading: 'What to tell the driver',
          headingEn: 'What to tell the driver',
          body: 'If you want the monument, say "Pakistan Monument"; for the view, "Shakarparian viewpoint". Confirm the exact gate on local signage.',
          bodyEn:
            'If you want the monument, say "Pakistan Monument"; for the view, "Shakarparian viewpoint". Confirm the exact gate on local signage.',
        },
        {
          heading: 'Caution',
          headingEn: 'Caution',
          body: 'There are several access points on the hill, so "Shakarparian" alone may be too vague.',
          bodyEn:
            'There are several access points on the hill, so "Shakarparian" alone may be too vague.',
        },
      ],
      faqs: [
        {
          q: 'Do Uber/Careem operate?',
          qEn: 'Do Uber/Careem operate?',
          a: 'Ride apps are common in the area (e.g., Careem/InDrive), but availability can change over time.',
          aEn:
            'Ride apps are common in the area (e.g., Careem/InDrive), but availability can change over time.',
        }, {
          q: 'Is cash needed?',
          qEn: 'Is cash needed?',
          a: 'Some apps also accept cash; check the payment option on the relevant app.',
          aEn:
            'Some apps also accept cash; check the payment option on the relevant app.',
        },
      ],
      related: ['parking', 'location-entrances', 'from-airport', 'from-rawalpindi'],
    },
  },
  {
    slug: 'entry-fees',
    group: 'access',
    ur: {
      title: 'داخلی فیس',
      titleEn: 'Entry fees',
      description:
        'شکرپڑیاں، پاکستان مونومنٹ اور عجائب گھروں کی فیس کا فرق: کسے مفت رکھیں اور کہاں ٹکٹ لیں۔',
      descriptionEn:
        'The difference between Shakarparian, the Pakistan Monument, and the museums’ fees: what is free and where tickets apply.',
      h1: 'شکرپڑیاں اور عجائب گھروں کی داخلی فیس',
      h1En: 'Entry fees: park, monument & museums',
      kicker: 'فیس اور ٹکٹ',
      kickerEn: 'Fees & tickets',
      lead: 'پارک کا کھلا سبز علاقہ عام طور پر مفت ہوتا ہے، جبکہ پاکستان مونومنٹ میوزیم یا یادگار کے اندرونی حصوں کی الگ فیس ہو سکتی ہے۔ ہم نے حتمی فیس کی تصدیق نہیں کی۔',
      leadEn:
        'The open green park is generally free, while the Pakistan Monument museum or indoor areas may have a separate fee. We have not verified a final fee.',
      updated: 'آخری جائزہ: 29 اکتوبر 2026',
      updatedEn: 'Last reviewed: 29 October 2026',
      sections: [
        {
          heading: 'فیس کا فرق',
          headingEn: 'Fee differences',
          body: 'پارک میں چہل قدمی اور نظارہ عام طور پر مفت ہے۔ پاکستان مونومنٹ میوزیم کی فیس الگ ہے (مقامی/غیر ملکی الگ) — تفصیل متعلقہ ادارے سے تصدیق کریں۔',
          bodyEn:
            'Walking and the view in the park are generally free. The Pakistan Monument museum has a separate fee (local/foreign differ) — confirm details with the relevant body.',
        },
        {
          heading: 'مشورہ',
          headingEn: 'Advice',
          body: 'ایک ہی دورے میں پارک + مونومنٹ + قریبی عجائب گھروں کا پلان بنائیں تاکہ ٹکٹ اور وقت بچے۔',
          bodyEn:
            'Plan park + monument + nearby museums in one visit to save tickets and time.',
        },
      ],
      faqs: [
        {
          q: 'کیا پارک میں داخلہ مفت ہے؟',
          qEn: 'Is entry to the park free?',
          a: 'کھلا سبز علاقہ عام طور پر مفت ہے، مگر ہم نے حتمی پالیسی کی تصدیق نہیں کی۔',
          aEn:
            'The open green area is generally free, but we have not verified the final policy.',
        },
        {
          q: 'عجائب گھر کی فیس کتنی ہے؟',
          qEn: 'How much is the museum fee?',
          a: 'مونومنٹ میوزیم کی فیس مقامی اور غیر ملکی زائرین کے لیے الگ ہو سکتی ہے؛ متعلقہ ادارے سے پتہ کریں۔',
          aEn:
            'The monument museum fee may differ for local and foreign visitors; ask the relevant body.',
        },
      ],
      related: ['pakistan-monument-museum', 'museum-comparison', 'park-vs-monument', 'cultural-area-map'],
    },
    en: {
      title: 'Entry fees',
      titleEn: 'Entry fees',
      description:
        'The difference between Shakarparian, the Pakistan Monument, and the museums’ fees: what is free and where tickets apply.',
      descriptionEn:
        'The difference between Shakarparian, the Pakistan Monument, and the museums’ fees: what is free and where tickets apply.',
      h1: 'Entry fees: park, monument & museums',
      h1En: 'Entry fees: park, monument & museums',
      kicker: 'Fees & tickets',
      kickerEn: 'Fees & tickets',
      lead: 'The open green park is generally free, while the Pakistan Monument museum or indoor areas may have a separate fee. We have not verified a final fee.',
      leadEn:
        'The open green park is generally free, while the Pakistan Monument museum or indoor areas may have a separate fee. We have not verified a final fee.',
      updated: 'Last reviewed: 29 October 2026',
      updatedEn: 'Last reviewed: 29 October 2026',
      sections: [
        {
          heading: 'Fee differences',
          headingEn: 'Fee differences',
          body: 'Walking and the view in the park are generally free. The Pakistan Monument museum has a separate fee (local/foreign differ) — confirm details with the relevant body.',
          bodyEn:
            'Walking and the view in the park are generally free. The Pakistan Monument museum has a separate fee (local/foreign differ) — confirm details with the relevant body.',
        },
        {
          heading: 'Advice',
          headingEn: 'Advice',
          body: 'Plan park + monument + nearby museums in one visit to save tickets and time.',
          bodyEn:
            'Plan park + monument + nearby museums in one visit to save tickets and time.',
        },
      ],
      faqs: [
        {
          q: 'Is entry to the park free?',
          qEn: 'Is entry to the park free?',
          a: 'The open green area is generally free, but we have not verified the final policy.',
          aEn:
            'The open green area is generally free, but we have not verified the final policy.',
        }, {
          q: 'How much is the museum fee?',
          qEn: 'How much is the museum fee?',
          a: 'The monument museum fee may differ for local and foreign visitors; ask the relevant body.',
          aEn:
            'The monument museum fee may differ for local and foreign visitors; ask the relevant body.',
        },
      ],
      related: ['pakistan-monument-museum', 'museum-comparison', 'park-vs-monument', 'cultural-area-map'],
    },
  },
  {
    slug: 'weather-monsoon',
    group: 'access',
    ur: {
      title: 'موسم اور مون سون',
      titleEn: 'Weather & monsoon',
      description:
        'اسلام آباد کا موسم، مون سون اور گرمی میں شکرپڑیاں کا دورہ کیسے پلان کریں۔',
      descriptionEn:
        'Islamabad’s weather, the monsoon, and how to plan a Shakarparian visit in heat or rain.',
      h1: 'شکرپڑیاں: موسم، مون سون اور گرمی کا پلان',
      h1En: 'Weather, monsoon & heat: visiting Shakarparian',
      kicker: 'موسم',
      kickerEn: 'Weather',
      lead: 'اسلام آباد میں گرمیاں گرم، مون سون (جولائی–اگست) نم اور سردیاں معتدل ہوتی ہیں۔ پہاڑی کھلی ہے، اس لیے موسم کا نوٹ لیں۔',
      leadEn:
        'Islamabad has hot summers, a humid monsoon (July–August), and mild winters. The hill is open, so mind the weather.',
      updated: 'آخری جائزہ: 29 اکتوبر 2026',
      updatedEn: 'Last reviewed: 29 October 2026',
      sections: [
        {
          heading: 'موسمی تقسیم',
          headingEn: 'Seasonal split',
          body: 'بہار (مارچ–اپریل) اور خزاں (اکتوبر–نومبر) سب سے آرام دہ ہیں۔ گرمیوں میں دوپہر کی دھوپ سے بچیں، اور مون سون میں پھسلنے والی سطح اور بارش کا نوٹ رکھیں۔',
          bodyEn:
            'Spring (March–April) and autumn (October–November) are most comfortable. Avoid midday sun in summer, and watch for slippery surfaces and rain in the monsoon.',
          bullets: [
            'بہار/خزاں: چہل قدمی کے لیے بہترین۔',
            'گرمی: صبح سویرے یا شام کو جائیں۔',
            'مون سون: بارش کے بعد سبزہ عروج پر، مگر احتیاط۔',
          ],
          bulletsEn: [
            'Spring/autumn: best for walks.',
            'Summer: go early morning or evening.',
            'Monsoon: greenery peaks after rain, but take care.',
          ],
        },
        {
          heading: 'سامان',
          headingEn: 'Gear',
          body: 'پانی، ٹوپی اور سورج کی کریم ساتھ رکھیں۔ بارش کے موسم میں ہلکی چپل یا بند جوتا بہتر ہے۔',
          bodyEn:
            'Carry water, a hat, and sunscreen. In the rainy season closed shoes or light sandals are better.',
        },
      ],
      faqs: [
        {
          q: 'کون سا مہینہ بہترین ہے؟',
          qEn: 'Which month is best?',
          a: 'اکتوبر–نومبر اور مارچ–اپریل آرام دہ اور صاف نظارے کے لیے بہترین ہیں۔',
          aEn:
            'October–November and March–April are best for comfort and clear views.',
        },
        {
          q: 'کیا بارش میں جا سکتے ہیں؟',
          qEn: 'Can you go in the rain?',
          a: 'ہاں، مگر پھسلنے والی سطح اور بجلی کی چمک سے بچیں اور موسم کی پیشگوئی دیکھیں۔',
          aEn:
            'Yes, but avoid slippery surfaces and lightning, and check the forecast.',
        },
      ],
      related: ['visiting-with-children', 'rainy-day-alternatives', 'sunset-photo-route', 'photo-spots'],
    },
    en: {
      title: 'Weather & monsoon',
      titleEn: 'Weather & monsoon',
      description:
        'Islamabad’s weather, the monsoon, and how to plan a Shakarparian visit in heat or rain.',
      descriptionEn:
        'Islamabad’s weather, the monsoon, and how to plan a Shakarparian visit in heat or rain.',
      h1: 'Weather, monsoon & heat: visiting Shakarparian',
      h1En: 'Weather, monsoon & heat: visiting Shakarparian',
      kicker: 'Weather',
      kickerEn: 'Weather',
      lead: 'Islamabad has hot summers, a humid monsoon (July–August), and mild winters. The hill is open, so mind the weather.',
      leadEn:
        'Islamabad has hot summers, a humid monsoon (July–August), and mild winters. The hill is open, so mind the weather.',
      updated: 'Last reviewed: 29 October 2026',
      updatedEn: 'Last reviewed: 29 October 2026',
      sections: [
        {
          heading: 'Seasonal split',
          headingEn: 'Seasonal split',
          body: 'Spring (March–April) and autumn (October–November) are most comfortable. Avoid midday sun in summer, and watch for slippery surfaces and rain in the monsoon.',
          bodyEn:
            'Spring (March–April) and autumn (October–November) are most comfortable. Avoid midday sun in summer, and watch for slippery surfaces and rain in the monsoon.',
          bullets: [
            'Spring/autumn: best for walks.',
            'Summer: go early morning or evening.',
            'Monsoon: greenery peaks after rain, but take care.',
          ],
          bulletsEn: [
            'Spring/autumn: best for walks.',
            'Summer: go early morning or evening.',
            'Monsoon: greenery peaks after rain, but take care.',
          ],
        },
        {
          heading: 'Gear',
          headingEn: 'Gear',
          body: 'Carry water, a hat, and sunscreen. In the rainy season closed shoes or light sandals are better.',
          bodyEn:
            'Carry water, a hat, and sunscreen. In the rainy season closed shoes or light sandals are better.',
        },
      ],
      faqs: [
        {
          q: 'Which month is best?',
          qEn: 'Which month is best?',
          a: 'October–November and March–April are best for comfort and clear views.',
          aEn:
            'October–November and March–April are best for comfort and clear views.',
        }, {
          q: 'Can you go in the rain?',
          qEn: 'Can you go in the rain?',
          a: 'Yes, but avoid slippery surfaces and lightning, and check the forecast.',
          aEn:
            'Yes, but avoid slippery surfaces and lightning, and check the forecast.',
        },
      ],
      related: ['visiting-with-children', 'rainy-day-alternatives', 'sunset-photo-route', 'photo-spots'],
    },
  },
  {
    slug: 'visiting-with-children',
    group: 'access',
    ur: {
      title: 'بچوں کے ساتھ دورہ',
      titleEn: 'Visiting with children',
      description:
        'بچوں اور اسٹرولر کے ساتھ شکرپڑیاں کا دورہ: سائے، پانی اور محفوظ راستے۔',
      descriptionEn:
        'A Shakarparian visit with children and strollers: shade, water, and safe paths.',
      h1: 'بچوں کے ساتھ شکرپڑیاں: خاندانی دورے کا مشورہ',
      h1En: 'Visiting Shakarparian with children',
      kicker: 'خاندانی دورہ',
      kickerEn: 'Family visit',
      lead: 'شکرپڑیاں کا کھلا سبز علاقہ بچوں کے ساتھ چہل قدمی کے لیے موزوں ہے، مگر پہاڑی ڈھلوان ہو سکتی ہے، اس لیے پیشگی پلان کریں۔',
      leadEn:
        'Shakarparian’s open green area suits a walk with children, but the hill can be sloped, so plan ahead.',
      updated: 'آخری جائزہ: 29 اکتوبر 2026',
      updatedEn: 'Last reviewed: 29 October 2026',
      sections: [
        {
          heading: 'مشورہ',
          headingEn: 'Tips',
          body: 'سائے دار علاقوں کا انتخاب کریں، کافی پانی اور ہلکا سناپ لیں، اور بچوں کو دھوپ کے اوقات میں نہ گھمائیں۔',
          bodyEn:
            'Choose shaded areas, carry enough water and a light snack, and avoid the hottest hours for children.',
          bullets: [
            'صبح سویرے یا شام کو جائیں۔',
            'اسٹرولر کے لیے سیدھے راستے ترجیح دیں۔',
            'قریبی عجائب گھروں کو بچوں کی دلچسپی کے لیے شامل کریں۔',
          ],
          bulletsEn: [
            'Go early morning or evening.',
            'Prefer flat paths for strollers.',
            'Add nearby museums for children’s interest.',
          ],
        },
      ],
      faqs: [
        {
          q: 'کیا اسٹرولر لے جا سکتے ہیں؟',
          qEn: 'Can you bring a stroller?',
          a: 'ہاں، مگر پہاڑی ڈھلوان کے لیے پیشگی راستہ چیک کریں۔',
          aEn: 'Yes, but check the path ahead for the slope.',
        },
        {
          q: 'کیا کھانا کی اجازت ہے؟',
          qEn: 'Can you bring food?',
          a: 'ہلکا سناپ لے جا سکتے ہیں، مگر کوڑا واپس لے جائیں اور نشان زدہ جگہوں پر کھائیں۔',
          aEn:
            'A light snack is fine, but take litter back and eat in marked areas.',
        },
      ],
      related: ['family-half-day', 'natural-history-museum', 'lok-virsa-museum', 'weather-monsoon'],
    },
    en: {
      title: 'Visiting with children',
      titleEn: 'Visiting with children',
      description:
        'A Shakarparian visit with children and strollers: shade, water, and safe paths.',
      descriptionEn:
        'A Shakarparian visit with children and strollers: shade, water, and safe paths.',
      h1: 'Visiting Shakarparian with children',
      h1En: 'Visiting Shakarparian with children',
      kicker: 'Family visit',
      kickerEn: 'Family visit',
      lead: 'Shakarparian’s open green area suits a walk with children, but the hill can be sloped, so plan ahead.',
      leadEn:
        'Shakarparian’s open green area suits a walk with children, but the hill can be sloped, so plan ahead.',
      updated: 'Last reviewed: 29 October 2026',
      updatedEn: 'Last reviewed: 29 October 2026',
      sections: [
        {
          heading: 'Tips',
          headingEn: 'Tips',
          body: 'Choose shaded areas, carry enough water and a light snack, and avoid the hottest hours for children.',
          bodyEn:
            'Choose shaded areas, carry enough water and a light snack, and avoid the hottest hours for children.',
          bullets: [
            'Go early morning or evening.',
            'Prefer flat paths for strollers.',
            'Add nearby museums for children’s interest.',
          ],
          bulletsEn: [
            'Go early morning or evening.',
            'Prefer flat paths for strollers.',
            'Add nearby museums for children’s interest.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Can you bring a stroller?',
          qEn: 'Can you bring a stroller?',
          a: 'Yes, but check the path ahead for the slope.',
          aEn: 'Yes, but check the path ahead for the slope.',
        }, {
          q: 'Can you bring food?',
          qEn: 'Can you bring food?',
          a: 'A light snack is fine, but take litter back and eat in marked areas.',
          aEn:
            'A light snack is fine, but take litter back and eat in marked areas.',
        },
      ],
      related: ['family-half-day', 'natural-history-museum', 'lok-virsa-museum', 'weather-monsoon'],
    },
  },
  {
    slug: 'accessibility',
    group: 'access',
    ur: {
      title: 'رسائی اور وہیل چیئر',
      titleEn: 'Accessibility',
      description:
        'شکرپڑیاں کی رسائی: وہیل چیئر، سیڑھیاں اور ریمپ — موقع پر تصدیق ضروری۔',
      descriptionEn:
        'Accessibility at Shakarparian: wheelchair, steps, and ramps — confirm on site.',
      h1: 'شکرپڑیاں: وہیل چیئر اور رسائی',
      h1En: 'Shakarparian: wheelchair & access',
      kicker: 'رسائی',
      kickerEn: 'Access',
      lead: 'ہم نے وہیل چیئر یا ریمپ کی حتمی دستیابی کی تصدیق نہیں کی۔ پہاڑی ڈھلوان ہو سکتی ہے، اس لیے معذوری والے زائرین متعلقہ ادارے سے پیشگی تصدیق کریں۔',
      leadEn:
        'We have not verified final wheelchair or ramp availability. The hill can be sloped, so visitors with mobility needs should confirm with the institution beforehand.',
      updated: 'آخری جائزہ: 29 اکتوبر 2026',
      updatedEn: 'Last reviewed: 29 October 2026',
      sections: [
        {
          heading: 'رسائی کا نوٹ',
          headingEn: 'Access note',
          body: 'پہاڑی علاقہ ہونے کے باعث کچھ راستے ڈھلوان یا سیڑھی والے ہو سکتے ہیں۔ ریمپ یا لفٹ کی موجودگی کی تصدیق متعلقہ ادارے سے کریں۔',
          bodyEn:
            'Being a hillside, some paths may be sloped or stepped. Confirm any ramp or lift with the relevant institution.',
        },
      ],
      faqs: [
        {
          q: 'کیا وہیل چیئر تک رسائی ہے؟',
          qEn: 'Is there wheelchair access?',
          a: 'ہم نے تصدیق نہیں کی؛ متعلقہ ادارے سے پیشگی پتہ کریں۔',
          aEn: 'We have not verified; ask the relevant institution in advance.',
        },
        {
          q: 'کیا سیڑھیاں ہیں؟',
          qEn: 'Are there steps?',
          a: 'پہاڑی ہونے کے باعث ممکن ہیں، مگر ہم نے عین راستہ نہیں دیکھا۔',
          aEn: 'Likely on a hill, but we have not inspected the exact route.',
        },
      ],
      related: ['senior-friendly-route', 'facilities', 'location-entrances', 'parking'],
    },
    en: {
      title: 'Accessibility',
      titleEn: 'Accessibility',
      description:
        'Shakarparian’s access: wheelchair, steps, and ramps — confirm on site.',
      descriptionEn:
        'Shakarparian’s access: wheelchair, steps, and ramps — confirm on site.',
      h1: 'Shakarparian: wheelchair & access',
      h1En: 'Shakarparian: wheelchair & access',
      kicker: 'Access',
      kickerEn: 'Access',
      lead: 'We have not verified final wheelchair or ramp availability. The hill can be sloped, so visitors with mobility needs should confirm with the institution beforehand.',
      leadEn:
        'We have not verified final wheelchair or ramp availability. The hill can be sloped, so visitors with mobility needs should confirm with the institution beforehand.',
      updated: 'Last reviewed: 29 October 2026',
      updatedEn: 'Last reviewed: 29 October 2026',
      sections: [
        {
          heading: 'Access note',
          headingEn: 'Access note',
          body: 'Being a hillside, some paths may be sloped or stepped. Confirm any ramp or lift with the relevant institution.',
          bodyEn:
            'Being a hillside, some paths may be sloped or stepped. Confirm any ramp or lift with the relevant institution.',
        },
      ],
      faqs: [
        {
          q: 'Is there wheelchair access?',
          qEn: 'Is there wheelchair access?',
          a: 'We have not verified; ask the relevant institution in advance.',
          aEn: 'We have not verified; ask the relevant institution in advance.',
        }, {
          q: 'Are there steps?',
          qEn: 'Are there steps?',
          a: 'Likely on a hill, but we have not inspected the exact route.',
          aEn: 'Likely on a hill, but we have not inspected the exact route.',
        },
      ],
      related: ['senior-friendly-route', 'facilities', 'location-entrances', 'parking'],
    },
  },
  {
    slug: 'facilities',
    group: 'access',
    ur: {
      title: 'سہولیات',
      titleEn: 'Facilities',
      description:
        'شکرپڑیاں کی سہولیات: واش روم، پانی، نشست اور زائرین کی سہولت — موقع پر تصدیق۔',
      descriptionEn:
        'Shakarparian’s facilities: toilets, water, seating, and visitor amenities — confirm on site.',
      h1: 'شکرپڑیاں: واش روم، پانی اور زائرین کی سہولیات',
      h1En: 'Shakarparian: toilets, water & amenities',
      kicker: 'سہولیات',
      kickerEn: 'Facilities',
      lead: 'ہم نے واش روم، پانی یا نشست کی حتمی دستیابی کی تصدیق نہیں کی۔ پہاڑی پر کچھ بنیادی سہولیات ہو سکتی ہیں، مگر مقامی بورڈ سے تصدیق کریں۔',
      leadEn:
        'We have not verified final toilet, water, or seating availability. Some basic facilities may exist on the hill, but confirm on local signage.',
      updated: 'آخری جائزہ: 29 اکتوبر 2026',
      updatedEn: 'Last reviewed: 29 October 2026',
      sections: [
        {
          heading: 'موجود سہولیات',
          headingEn: 'Facilities present',
          body: 'پارک جیسے عوامی مقامات میں عام طور پر واش روم اور نشست ہوتی ہیں، مگر شکرپڑیاں میں ان کی حتمی جگہ اور حالت کی تصدیق نہیں کی۔',
          bodyEn:
            'Public parks usually have toilets and seating, but we have not confirmed their exact location or condition at Shakarparian.',
        },
        {
          heading: 'مشورہ',
          headingEn: 'Advice',
          body: 'خود کافی پانی اور ضروری سامان لائیں، اور دورے سے پہلے قریبی عجائب گھروں کی سہولیات کا بھی نوٹ لیں۔',
          bodyEn:
            'Bring enough of your own water and supplies, and note facilities at nearby museums before your visit.',
        },
      ],
      faqs: [
        {
          q: 'کیا واش روم ہیں؟',
          qEn: 'Are there toilets?',
          a: 'ممکن ہیں، مگر ہم نے تصدیق نہیں کی؛ مقامی بورڈ دیکھیں۔',
          aEn: 'Possibly, but we have not verified; check local signage.',
        },
        {
          q: 'کیا پانی دستیاب ہے؟',
          qEn: 'Is water available?',
          a: 'ہم نے تصدیق نہیں کی؛ اپنا پانی ساتھ لائیں۔',
          aEn: 'We have not verified; bring your own water.',
        },
      ],
      related: ['accessibility', 'visiting-with-children', 'location-entrances', 'parking'],
    },
    en: {
      title: 'Facilities',
      titleEn: 'Facilities',
      description:
        'Shakarparian’s facilities: toilets, water, seating, and visitor amenities — confirm on site.',
      descriptionEn:
        'Shakarparian’s facilities: toilets, water, seating, and visitor amenities — confirm on site.',
      h1: 'Shakarparian: toilets, water & amenities',
      h1En: 'Shakarparian: toilets, water & amenities',
      kicker: 'Facilities',
      kickerEn: 'Facilities',
      lead: 'We have not verified final toilet, water, or seating availability. Some basic facilities may exist on the hill, but confirm on local signage.',
      leadEn:
        'We have not verified final toilet, water, or seating availability. Some basic facilities may exist on the hill, but confirm on local signage.',
      updated: 'Last reviewed: 29 October 2026',
      updatedEn: 'Last reviewed: 29 October 2026',
      sections: [
        {
          heading: 'Facilities present',
          headingEn: 'Facilities present',
          body: 'Public parks usually have toilets and seating, but we have not confirmed their exact location or condition at Shakarparian.',
          bodyEn:
            'Public parks usually have toilets and seating, but we have not confirmed their exact location or condition at Shakarparian.',
        },
        {
          heading: 'Advice',
          headingEn: 'Advice',
          body: 'Bring enough of your own water and supplies, and note facilities at nearby museums before your visit.',
          bodyEn:
            'Bring enough of your own water and supplies, and note facilities at nearby museums before your visit.',
        },
      ],
      faqs: [
        {
          q: 'Are there toilets?',
          qEn: 'Are there toilets?',
          a: 'Possibly, but we have not verified; check local signage.',
          aEn: 'Possibly, but we have not verified; check local signage.',
        }, {
          q: 'Is water available?',
          qEn: 'Is water available?',
          a: 'We have not verified; bring your own water.',
          aEn: 'We have not verified; bring your own water.',
        },
      ],
      related: ['accessibility', 'visiting-with-children', 'location-entrances', 'parking'],
    },
  },
  {
    slug: 'pakistan-monument-museum',
    group: 'museums',
    ur: {
      title: 'پاکستان مونومنٹ میوزیم',
      titleEn: 'Pakistan Monument Museum',
      description:
        'پاکستان مونومنٹ میوزیم: ٹکٹ، اوقات اور نمائش — سرکاری معلومات کے مطابق (روانگی سے پہلے تصدیق کریں)۔',
      descriptionEn:
        'Pakistan Monument Museum: tickets, hours and exhibitions — per official info (verify before travel).',
      h1: 'پاکستان مونومنٹ میوزیم: ٹکٹ، اوقات اور نمائش',
      h1En: 'Pakistan Monument Museum: tickets, hours & exhibitions',
      kicker: 'عجائب گھر',
      kickerEn: 'Museum',
      lead: 'پاکستان مونومنٹ میوزیم شکرپڑیاں کے مغربی حصے میں واقع ہے اور قومی تاریخ و ثقافت کی نمائش پیش کرتا ہے۔ ٹکٹ اور اوقات وقت کے ساتھ بدل سکتے ہیں۔',
      leadEn:
        'The Pakistan Monument Museum sits on the western Shakarparian and shows national history and culture. Tickets and hours can change.',
      updated: 'آخری جائزہ: 29 اکتوبر 2026',
      updatedEn: 'Last reviewed: 29 October 2026',
      sections: [
        {
          heading: 'اوقات (سرکاری ذرائع)',
          headingEn: 'Hours (official sources)',
          body: 'لوک ورثہ کے عجائب گھر کے صفحے کے مطابق: منگل تا اتوار 10:00–20:00، پیر کو بند۔ یہ موجودہ معلومات نہیں ہو سکتیں؛ روانگی سے پہلے سرکاری ذرائع سے تصدیق کریں۔',
          bodyEn:
            'Per the Lok Virsa museum page: Tuesday to Sunday 10:00–20:00, closed Monday. This may not be current; verify with official sources before travel.',
        },
        {
          heading: 'ٹکٹ (سرکاری ذرائع)',
          headingEn: 'Tickets (official sources)',
          body: 'لوک ورثہ کے مطابق: پاکستانی بالغ 200 PKR، طالب علم 100 PKR، غیر ملکی زائرین 2,000 PKR۔ یہ وقتاً فوقتاً بدل سکتے ہیں — متعلقہ ادارے سے تصدیق کریں۔',
          bodyEn:
            'Per Lok Virsa: Pakistani adult 200 PKR, student 100 PKR, foreign visitors 2,000 PKR. These can change — confirm with the institution.',
          bullets: [
            'پاکستانی بالغ: 200 PKR (تصدیق طلب)',
            'طالب علم: 100 PKR (تصدیق طلب)',
            'غیر ملکی: 2,000 PKR (تصدیق طلب)',
          ],
          bulletsEn: [
            'Pakistani adult: 200 PKR (to verify)',
            'Student: 100 PKR (to verify)',
            'Foreign: 2,000 PKR (to verify)',
          ],
        },
      ],
      faqs: [
        {
          q: 'کیا پیر کو بند ہے؟',
          qEn: 'Is it closed on Monday?',
          a: 'سرکاری ذرائع کے مطابق ہاں، پیر کو بند ہے — موجودہ شیڈول تصدیق کریں۔',
          aEn:
            'Per official sources, yes, closed Monday — verify the current schedule.',
        },
        {
          q: 'کیا میوزیم مونومنٹ سے الگ ہے؟',
          qEn: 'Is the museum separate from the monument?',
          a: 'ہاں، یہ مونومنٹ کے احاطے کا حصہ ہے مگر الگ ٹکٹ/اوقات ہو سکتے ہیں۔',
          aEn:
            'Yes, it is part of the monument compound but may have separate tickets/hours.',
        },
      ],
      related: ['lok-virsa-museum', 'natural-history-museum', 'museum-comparison', 'entry-fees'],
    },
    en: {
      title: 'Pakistan Monument Museum',
      titleEn: 'Pakistan Monument Museum',
      description:
        'Pakistan Monument Museum: tickets, hours and exhibitions — per official info (verify before travel).',
      descriptionEn:
        'Pakistan Monument Museum: tickets, hours and exhibitions — per official info (verify before travel).',
      h1: 'Pakistan Monument Museum: tickets, hours & exhibitions',
      h1En: 'Pakistan Monument Museum: tickets, hours & exhibitions',
      kicker: 'Museum',
      kickerEn: 'Museum',
      lead: 'The Pakistan Monument Museum sits on the western Shakarparian and shows national history and culture. Tickets and hours can change.',
      leadEn:
        'The Pakistan Monument Museum sits on the western Shakarparian and shows national history and culture. Tickets and hours can change.',
      updated: 'Last reviewed: 29 October 2026',
      updatedEn: 'Last reviewed: 29 October 2026',
      sections: [
        {
          heading: 'Hours (official sources)',
          headingEn: 'Hours (official sources)',
          body: 'Per the Lok Virsa museum page: Tuesday to Sunday 10:00–20:00, closed Monday. This may not be current; verify with official sources before travel.',
          bodyEn:
            'Per the Lok Virsa museum page: Tuesday to Sunday 10:00–20:00, closed Monday. This may not be current; verify with official sources before travel.',
        },
        {
          heading: 'Tickets (official sources)',
          headingEn: 'Tickets (official sources)',
          body: 'Per Lok Virsa: Pakistani adult 200 PKR, student 100 PKR, foreign visitors 2,000 PKR. These can change — confirm with the institution.',
          bodyEn:
            'Per Lok Virsa: Pakistani adult 200 PKR, student 100 PKR, foreign visitors 2,000 PKR. These can change — confirm with the institution.',
          bullets: [
            'Pakistani adult: 200 PKR (to verify)',
            'Student: 100 PKR (to verify)',
            'Foreign: 2,000 PKR (to verify)',
          ],
          bulletsEn: [
            'Pakistani adult: 200 PKR (to verify)',
            'Student: 100 PKR (to verify)',
            'Foreign: 2,000 PKR (to verify)',
          ],
        },
      ],
      faqs: [
        {
          q: 'Is it closed on Monday?',
          qEn: 'Is it closed on Monday?',
          a: 'Per official sources, yes, closed Monday — verify the current schedule.',
          aEn:
            'Per official sources, yes, closed Monday — verify the current schedule.',
        }, {
          q: 'Is the museum separate from the monument?',
          qEn: 'Is the museum separate from the monument?',
          a: 'Yes, it is part of the monument compound but may have separate tickets/hours.',
          aEn:
            'Yes, it is part of the monument compound but may have separate tickets/hours.',
        },
      ],
      related: ['lok-virsa-museum', 'natural-history-museum', 'museum-comparison', 'entry-fees'],
    },
  },
  {
    slug: 'lok-virsa-museum',
    group: 'museums',
    ur: {
      title: 'لوک ورثہ میوزیم',
      titleEn: 'Lok Virsa Museum',
      description:
        'لوک ورثہ ہیریٹیج میوزیم: پاکستان کے خطوں کے لباس، دستکاری اور لوک ثقافت کا گائیڈ۔',
      descriptionEn:
        'Lok Virsa Heritage Museum: a guide to Pakistan’s regional costumes, crafts, and folk culture.',
      h1: 'لوک ورثہ میوزیم: پاکستان کی لوک ثقافت',
      h1En: 'Lok Virsa Museum: Pakistan’s folk culture',
      kicker: 'ثقافتی عجائب گھر',
      kickerEn: 'Culture museum',
      lead: 'لوک ورثہ میوزیم (شکرپڑیاں کے قریب) مختلف صوبوں کے لباس، روایتی دستکاری اور لوک ورثے کو پیش کرتا ہے — خاندانی اور تعلیمی دورے کے لیے موزوں۔',
      leadEn:
        'The Lok Virsa Museum (near Shakarparian) presents regional costumes, traditional crafts, and folk heritage — good for family and educational visits.',
      updated: 'آخری جائزہ: 29 اکتوبر 2026',
      updatedEn: 'Last reviewed: 29 October 2026',
      sections: [
        {
          heading: 'اوقات اور ٹکٹ',
          headingEn: 'Hours & tickets',
          body: 'لوک ورثہ کے مطابق مقامی بالغ ٹکٹ 150 PKR اور غیر ملکی 1,500 PKR ہے، اور پیر کو بند ہے۔ یہ وقت کے ساتھ بدل سکتا ہے — متعلقہ ادارے سے تصدیق کریں۔',
          bodyEn:
            'Per Lok Virsa the local adult ticket is about 150 PKR and foreign about 1,500 PKR, closed Monday. This can change — confirm with the institution.',
          bullets: [
            'مقامی بالغ: تقریباً 150 PKR (تصدیق طلب)',
            'غیر ملکی: تقریباً 1,500 PKR (تصدیق طلب)',
            'پیر کو بند (تصدیق طلب)',
          ],
          bulletsEn: [
            'Local adult: about 150 PKR (to verify)',
            'Foreign: about 1,500 PKR (to verify)',
            'Closed Monday (to verify)',
          ],
        },
        {
          heading: 'یہاں کیا دیکھیں',
          headingEn: 'What to see',
          body: 'مختلف خطوں کے لباس، مٹی کے برتن، موسیقی کے آلات اور دستکاری کی نمائش۔ یہ شکرپڑیاں کے دورے کو ثقافتی رنگ دیتی ہے۔',
          bodyEn:
            'Exhibits of regional costumes, pottery, musical instruments, and crafts. It adds a cultural layer to a Shakarparian visit.',
        },
      ],
      faqs: [
        {
          q: 'کیا یہ بچوں کے لیے موزوں ہے؟',
          qEn: 'Is it good for children?',
          a: 'ہاں، دستکاری اور لباس کی نمائش بچوں کی دلچسپی کے لیے موزوں ہے۔',
          aEn:
            'Yes, the crafts and costume exhibits suit children’s interest.',
        },
        {
          q: 'کیا یہ مونومنٹ میوزیم سے مختلف ہے؟',
          qEn: 'Is it different from the monument museum?',
          a: 'ہاں، لوک ورثہ ثقافت/لوک ورثے پر ہے جبکہ مونومنٹ میوزیم قومی تاریخ پر۔',
          aEn:
            'Yes, Lok Virsa focuses on culture/folk heritage, while the monument museum focuses on national history.',
        },
      ],
      related: ['pakistan-monument-museum', 'natural-history-museum', 'museum-comparison', 'heritage-half-day'],
    },
    en: {
      title: 'Lok Virsa Museum',
      titleEn: 'Lok Virsa Museum',
      description:
        'Lok Virsa Heritage Museum: a guide to Pakistan’s regional costumes, crafts, and folk culture.',
      descriptionEn:
        'Lok Virsa Heritage Museum: a guide to Pakistan’s regional costumes, crafts, and folk culture.',
      h1: 'Lok Virsa Museum: Pakistan’s folk culture',
      h1En: 'Lok Virsa Museum: Pakistan’s folk culture',
      kicker: 'Culture museum',
      kickerEn: 'Culture museum',
      lead: 'The Lok Virsa Museum (near Shakarparian) presents regional costumes, traditional crafts, and folk heritage — good for family and educational visits.',
      leadEn:
        'The Lok Virsa Museum (near Shakarparian) presents regional costumes, traditional crafts, and folk heritage — good for family and educational visits.',
      updated: 'Last reviewed: 29 October 2026',
      updatedEn: 'Last reviewed: 29 October 2026',
      sections: [
        {
          heading: 'Hours & tickets',
          headingEn: 'Hours & tickets',
          body: 'Per Lok Virsa the local adult ticket is about 150 PKR and foreign about 1,500 PKR, closed Monday. This can change — confirm with the institution.',
          bodyEn:
            'Per Lok Virsa the local adult ticket is about 150 PKR and foreign about 1,500 PKR, closed Monday. This can change — confirm with the institution.',
          bullets: [
            'Local adult: about 150 PKR (to verify)',
            'Foreign: about 1,500 PKR (to verify)',
            'Closed Monday (to verify)',
          ],
          bulletsEn: [
            'Local adult: about 150 PKR (to verify)',
            'Foreign: about 1,500 PKR (to verify)',
            'Closed Monday (to verify)',
          ],
        },
        {
          heading: 'What to see',
          headingEn: 'What to see',
          body: 'Exhibits of regional costumes, pottery, musical instruments, and crafts. It adds a cultural layer to a Shakarparian visit.',
          bodyEn:
            'Exhibits of regional costumes, pottery, musical instruments, and crafts. It adds a cultural layer to a Shakarparian visit.',
        },
      ],
      faqs: [
        {
          q: 'Is it good for children?',
          qEn: 'Is it good for children?',
          a: 'Yes, the crafts and costume exhibits suit children’s interest.',
          aEn:
            'Yes, the crafts and costume exhibits suit children’s interest.',
        }, {
          q: 'Is it different from the monument museum?',
          qEn: 'Is it different from the monument museum?',
          a: 'Yes, Lok Virsa focuses on culture/folk heritage, while the monument museum focuses on national history.',
          aEn:
            'Yes, Lok Virsa focuses on culture/folk heritage, while the monument museum focuses on national history.',
        },
      ],
      related: ['pakistan-monument-museum', 'natural-history-museum', 'museum-comparison', 'heritage-half-day'],
    },
  },
  {
    slug: 'natural-history-museum',
    group: 'museums',
    ur: {
      title: 'نیچرل ہسٹری میوزیم',
      titleEn: 'Natural History Museum',
      description:
        'پاکستان میوزیم آف نیچرل ہسٹری: جانور، جیواشم اور سائنسی نمائش کا خاندانی گائیڈ۔',
      descriptionEn:
        'Pakistan Museum of Natural History: animals, fossils and science exhibits — a family guide.',
      h1: 'نیچرل ہسٹری میوزیم: فطرت اور سائنس',
      h1En: 'Natural History Museum: nature & science',
      kicker: 'سائنس عجائب گھر',
      kickerEn: 'Science museum',
      lead: 'پاکستان میوزیم آف نیچرل ہسٹری (PMNH) شکرپڑیاں کے قریب واقع ہے اور جانوروں، جیواشم اور قدرتی تاریخ کی نمائش پیش کرتا ہے۔',
      leadEn:
        'The Pakistan Museum of Natural History (PMNH) is near Shakarparian and shows animals, fossils, and natural history.',
      updated: 'آخری جائزہ: 29 اکتوبر 2026',
      updatedEn: 'Last reviewed: 29 October 2026',
      sections: [
        {
          heading: 'اوقات (سرکاری ذرائع)',
          headingEn: 'Hours (official sources)',
          body: 'pmnh.gov.pk کے مطابق ہر روز 09:00–17:00، جمعہ کو نماز کے وقفے کے ساتھ۔ یہ موجودہ نہیں ہو سکتا — روانگی سے پہلے تصدیق کریں۔',
          bodyEn:
            'Per pmnh.gov.pk, daily 09:00–17:00 with a Friday prayer break. This may not be current — verify before travel.',
        },
        {
          heading: 'مشورہ',
          headingEn: 'Advice',
          body: 'یہ اسکولوں اور خاندانوں کے لیے موزوں ہے۔ داخلی نمائش کی حالت مقامی بورڈ سے الگ سے تصدیق کریں۔',
          bodyEn:
            'It suits schools and families. Confirm the open indoor galleries separately on local signage.',
        },
      ],
      faqs: [
        {
          q: 'کیا یہ مفت ہے؟',
          qEn: 'Is it free?',
          a: 'ہم نے فیس کی تصدیق نہیں کی؛ متعلقہ ادارے سے پتہ کریں۔',
          aEn: 'We have not verified the fee; ask the institution.',
        },
        {
          q: 'کیا یہ بچوں کے لیے موزوں ہے؟',
          qEn: 'Is it good for children?',
          a: 'ہاں، جیواشم اور جانوروں کی نمائش بچوں کے لیے تعلیمی ہے۔',
          aEn: 'Yes, fossils and animal exhibits are educational for children.',
        },
      ],
      related: ['lok-virsa-museum', 'pakistan-monument-museum', 'museum-comparison', 'rainy-day-alternatives'],
    },
    en: {
      title: 'Natural History Museum',
      titleEn: 'Natural History Museum',
      description:
        'Pakistan Museum of Natural History: animals, fossils and science exhibits — a family guide.',
      descriptionEn:
        'Pakistan Museum of Natural History: animals, fossils and science exhibits — a family guide.',
      h1: 'Natural History Museum: nature & science',
      h1En: 'Natural History Museum: nature & science',
      kicker: 'Science museum',
      kickerEn: 'Science museum',
      lead: 'The Pakistan Museum of Natural History (PMNH) is near Shakarparian and shows animals, fossils, and natural history.',
      leadEn:
        'The Pakistan Museum of Natural History (PMNH) is near Shakarparian and shows animals, fossils, and natural history.',
      updated: 'Last reviewed: 29 October 2026',
      updatedEn: 'Last reviewed: 29 October 2026',
      sections: [
        {
          heading: 'Hours (official sources)',
          headingEn: 'Hours (official sources)',
          body: 'Per pmnh.gov.pk, daily 09:00–17:00 with a Friday prayer break. This may not be current — verify before travel.',
          bodyEn:
            'Per pmnh.gov.pk, daily 09:00–17:00 with a Friday prayer break. This may not be current — verify before travel.',
        },
        {
          heading: 'Advice',
          headingEn: 'Advice',
          body: 'It suits schools and families. Confirm the open indoor galleries separately on local signage.',
          bodyEn:
            'It suits schools and families. Confirm the open indoor galleries separately on local signage.',
        },
      ],
      faqs: [
        {
          q: 'Is it free?',
          qEn: 'Is it free?',
          a: 'We have not verified the fee; ask the institution.',
          aEn: 'We have not verified the fee; ask the institution.',
        }, {
          q: 'Is it good for children?',
          qEn: 'Is it good for children?',
          a: 'Yes, fossils and animal exhibits are educational for children.',
          aEn: 'Yes, fossils and animal exhibits are educational for children.',
        },
      ],
      related: ['lok-virsa-museum', 'pakistan-monument-museum', 'museum-comparison', 'rainy-day-alternatives'],
    },
  },
  {
    slug: 'rose-jasmine-garden',
    group: 'museums',
    ur: {
      title: 'گلِ روز اینڈ جیسمین گارڈن',
      titleEn: 'Rose & Jasmine Garden',
      description:
        'گلِ روز اینڈ جیسمین گارڈن: پھولوں کا موسم، فوٹوگرافی اور شکرپڑیاں کے ساتھ دورہ۔',
      descriptionEn:
        'Rose & Jasmine Garden: flower season, photography, and combining it with Shakarparian.',
      h1: 'گلِ روز اینڈ جیسمین گارڈن: پھولوں کا موسم',
      h1En: 'Rose & Jasmine Garden: the flower season',
      kicker: 'باغ',
      kickerEn: 'Garden',
      lead: 'سی ڈی اے نے شکرپڑیاں کے قریب گلِ روز اینڈ جیسمین گارڈن کو ایک مقامی تفریحی وسیلہ کے طور پر شامل کیا ہے — یہاں پھولوں کا موسم اور فوٹوگرافی مقبول ہے۔',
      leadEn:
        'The CDA lists the Rose & Jasmine Garden near Shakarparian as a local recreation spot — the flower season and photography are popular here.',
      updated: 'آخری جائزہ: 29 اکتوبر 2026',
      updatedEn: 'Last reviewed: 29 October 2026',
      sections: [
        {
          heading: 'پھولوں کا موسم',
          headingEn: 'Flower season',
          body: 'گلِ روز کا موسم عام طور پر بہار (فروری–اپریل) میں عروج پر ہوتا ہے۔ ہم نے حتمی کیلنڈر کی تصدیق نہیں کی، اس لیے مقامی بورڈ سے پتہ کریں۔',
          bodyEn:
            'The rose season usually peaks in spring (February–April). We have not verified a final calendar, so check local signage.',
        },
        {
          heading: 'دورہ کا پلان',
          headingEn: 'Visit plan',
          body: 'اسے شکرپڑیاں کے نظارے یا پاکستان مونومنٹ کے ساتھ ایک ہی دورے میں شامل کریں۔',
          bodyEn:
            'Combine it with the Shakarparian view or the Pakistan Monument in one visit.',
        },
      ],
      faqs: [
        {
          q: 'کیا داخلہ مفت ہے؟',
          qEn: 'Is entry free?',
          a: 'ہم نے تصدیق نہیں کی؛ مقامی بورڈ دیکھیں۔',
          aEn: 'We have not verified; check local signage.',
        },
        {
          q: 'کب جائیں؟',
          qEn: 'When to go?',
          a: 'بہار میں پھول کھلے ہوتے ہیں؛ صبح سویرے روشنی اچھی ہوتی ہے۔',
          aEn: 'Flowers bloom in spring; early morning gives good light.',
        },
      ],
      related: ['photo-spots', 'pakistan-monument', 'cultural-area-map', 'family-half-day'],
    },
    en: {
      title: 'Rose & Jasmine Garden',
      titleEn: 'Rose & Jasmine Garden',
      description:
        'Rose & Jasmine Garden: flower season, photography, and combining it with Shakarparian.',
      descriptionEn:
        'Rose & Jasmine Garden: flower season, photography, and combining it with Shakarparian.',
      h1: 'Rose & Jasmine Garden: the flower season',
      h1En: 'Rose & Jasmine Garden: the flower season',
      kicker: 'Garden',
      kickerEn: 'Garden',
      lead: 'The CDA lists the Rose & Jasmine Garden near Shakarparian as a local recreation spot — the flower season and photography are popular here.',
      leadEn:
        'The CDA lists the Rose & Jasmine Garden near Shakarparian as a local recreation spot — the flower season and photography are popular here.',
      updated: 'Last reviewed: 29 October 2026',
      updatedEn: 'Last reviewed: 29 October 2026',
      sections: [
        {
          heading: 'Flower season',
          headingEn: 'Flower season',
          body: 'The rose season usually peaks in spring (February–April). We have not verified a final calendar, so check local signage.',
          bodyEn:
            'The rose season usually peaks in spring (February–April). We have not verified a final calendar, so check local signage.',
        },
        {
          heading: 'Visit plan',
          headingEn: 'Visit plan',
          body: 'Combine it with the Shakarparian view or the Pakistan Monument in one visit.',
          bodyEn:
            'Combine it with the Shakarparian view or the Pakistan Monument in one visit.',
        },
      ],
      faqs: [
        {
          q: 'Is entry free?',
          qEn: 'Is entry free?',
          a: 'We have not verified; check local signage.',
          aEn: 'We have not verified; check local signage.',
        }, {
          q: 'When to go?',
          qEn: 'When to go?',
          a: 'Flowers bloom in spring; early morning gives good light.',
          aEn: 'Flowers bloom in spring; early morning gives good light.',
        },
      ],
      related: ['photo-spots', 'pakistan-monument', 'cultural-area-map', 'family-half-day'],
    },
  },
  {
    slug: 'museum-comparison',
    group: 'museums',
    ur: {
      title: 'مقابلہ: کون سا عجائب گھر بہتر ہے',
      titleEn: 'Museum comparison',
      description:
        'شکرپڑیاں کے قریب تین عجائب گھروں کا مقابلہ: بچوں، تاریخ دوستوں اور سائنس کے لیے کون سا موزوں ہے۔',
      descriptionEn:
        'A comparison of three museums near Shakarparian: which suits children, history lovers, and science.',
      h1: 'قریبی عجائب گھروں کا مقابلہ: کون سا چنیں؟',
      h1En: 'Comparing nearby museums: which to pick?',
      kicker: 'انتخاب',
      kickerEn: 'Choosing',
      lead: 'شکرپڑیاں کے قریب تین عجائب گھر ہیں: پاکستان مونومنٹ میوزیم، لوک ورثہ، اور نیچرل ہسٹری میوزیم۔ ہر ایک کا رخ مختلف ہے۔',
      leadEn:
        'Three museums sit near Shakarparian: the Pakistan Monument Museum, Lok Virsa, and the Natural History Museum. Each has a different focus.',
      updated: 'آخری جائزہ: 29 اکتوبر 2026',
      updatedEn: 'Last reviewed: 29 October 2026',
      sections: [
        {
          heading: 'کس کے لیے کون سا',
          headingEn: 'Which for whom',
          body: 'بچوں اور خاندان کے لیے نیچرل ہسٹری اور لوک ورثہ بہتر ہیں؛ قومی تاریخ کے لیے مونومنٹ میوزیم۔ لوک ورثہ ثقافت/دستکاری پر ہے، مونومنٹ قومی علامت پر، اور نیچرل ہسٹری فطرت/سائنس پر۔',
          bodyEn:
            'For children and families, Natural History and Lok Virsa are better; for national history, the monument museum. Lok Virsa is culture/crafts, the monument is the national symbol, and Natural History is nature/science.',
          bullets: [
            'تاریخ: پاکستان مونومنٹ میوزیم',
            'ثقافت/دستکاری: لوک ورثہ',
            'فطرت/سائنس: نیچرل ہسٹری',
          ],
          bulletsEn: [
            'History: Pakistan Monument Museum',
            'Culture/crafts: Lok Virsa',
            'Nature/science: Natural History',
          ],
        },
      ],
      faqs: [
        {
          q: 'ایک دن میں تینوں دیکھ سکتے ہیں؟',
          qEn: 'Can you see all three in a day?',
          a: 'ہاں، یہ ایک دوسرے کے قریب ہیں، مگر ہر ایک کے اوقات اور ٹکٹ الگ سے تصدیق کریں۔',
          aEn:
            'Yes, they are close, but verify each one’s hours and tickets separately.',
        },
        {
          q: 'کون سا مفت ہے؟',
          qEn: 'Which is free?',
          a: 'ہم نے فیس کی حتمی تصدیق نہیں کی؛ متعلقہ اداروں سے پتہ کریں۔',
          aEn: 'We have not verified final fees; ask the institutions.',
        },
      ],
      related: ['pakistan-monument-museum', 'lok-virsa-museum', 'natural-history-museum', 'heritage-half-day'],
    },
    en: {
      title: 'Museum comparison',
      titleEn: 'Museum comparison',
      description:
        'A comparison of three museums near Shakarparian: which suits children, history lovers, and science.',
      descriptionEn:
        'A comparison of three museums near Shakarparian: which suits children, history lovers, and science.',
      h1: 'Comparing nearby museums: which to pick?',
      h1En: 'Comparing nearby museums: which to pick?',
      kicker: 'Choosing',
      kickerEn: 'Choosing',
      lead: 'Three museums sit near Shakarparian: the Pakistan Monument Museum, Lok Virsa, and the Natural History Museum. Each has a different focus.',
      leadEn:
        'Three museums sit near Shakarparian: the Pakistan Monument Museum, Lok Virsa, and the Natural History Museum. Each has a different focus.',
      updated: 'Last reviewed: 29 October 2026',
      updatedEn: 'Last reviewed: 29 October 2026',
      sections: [
        {
          heading: 'Which for whom',
          headingEn: 'Which for whom',
          body: 'For children and families, Natural History and Lok Virsa are better; for national history, the monument museum. Lok Virsa is culture/crafts, the monument is the national symbol, and Natural History is nature/science.',
          bodyEn:
            'For children and families, Natural History and Lok Virsa are better; for national history, the monument museum. Lok Virsa is culture/crafts, the monument is the national symbol, and Natural History is nature/science.',
          bullets: [
            'History: Pakistan Monument Museum',
            'Culture/crafts: Lok Virsa',
            'Nature/science: Natural History',
          ],
          bulletsEn: [
            'History: Pakistan Monument Museum',
            'Culture/crafts: Lok Virsa',
            'Nature/science: Natural History',
          ],
        },
      ],
      faqs: [
        {
          q: 'Can you see all three in a day?',
          qEn: 'Can you see all three in a day?',
          a: 'Yes, they are close, but verify each one’s hours and tickets separately.',
          aEn:
            'Yes, they are close, but verify each one’s hours and tickets separately.',
        }, {
          q: 'Which is free?',
          qEn: 'Which is free?',
          a: 'We have not verified final fees; ask the institutions.',
          aEn: 'We have not verified final fees; ask the institutions.',
        },
      ],
      related: ['pakistan-monument-museum', 'lok-virsa-museum', 'natural-history-museum', 'heritage-half-day'],
    },
  },
  {
    slug: 'cultural-area-map',
    group: 'museums',
    ur: {
      title: 'ثقافتی علاقے کا نقشہ',
      titleEn: 'Cultural area map',
      description:
        'شکرپڑیاں کے قریب ثقافتی مقامات کا نقشہ: مونومنٹ، لوک ورثہ، نیچرل ہسٹری اور گلِ روز گارڈن۔',
      descriptionEn:
        'A map of cultural sites near Shakarparian: the monument, Lok Virsa, Natural History, and the Rose & Jasmine Garden.',
      h1: 'شکرپڑیاں کے قریب ثقافتی مقامات کا نقشہ',
      h1En: 'A map of cultural sites near Shakarparian',
      kicker: 'نقشہ',
      kickerEn: 'Map',
      lead: 'سی ڈی اے شکرپڑیاں، پاکستان مونومنٹ، لوک ورثہ اور گلِ روز اینڈ جیسمین گارڈن کو علاقائی سیاحت کے وسائل کے طور پر بیان کرتی ہے۔ یہ صفحہ ان کا ایک خاکہ دیتا ہے۔',
      leadEn:
        'The CDA describes Shakarparian, the Pakistan Monument, Lok Virsa, and the Rose & Jasmine Garden as local tourism resources. This page gives a sketch of them.',
      updated: 'آخری جائزہ: 29 اکتوبر 2026',
      updatedEn: 'Last reviewed: 29 October 2026',
      sections: [
        {
          heading: 'مقامات',
          headingEn: 'Sites',
          body: 'شکرپڑیاں (نظارہ/سبزہ)، پاکستان مونومنٹ (یادگار + میوزیم)، لوک ورثہ (ثقافت)، نیچرل ہسٹری میوزیم (سائنس)، اور گلِ روز گارڈن (پھول)۔ ان کے درمیان محفوظ پیدل راستے کی تصدیق مقامی بورڈ سے کریں۔',
          bodyEn:
            'Shakarparian (view/greenery), Pakistan Monument (monument + museum), Lok Virsa (culture), Natural History Museum (science), and the Rose & Jasmine Garden (flowers). Confirm safe walking links on local signage.',
          bullets: [
            'شکرپڑیاں — نظارہ اور سبزہ',
            'پاکستان مونومنٹ — یادگار + میوزیم',
            'لوک ورثہ — لوک ثقافت',
          ],
          bulletsEn: [
            'Shakarparian — view and greenery',
            'Pakistan Monument — monument + museum',
            'Lok Virsa — folk culture',
          ],
        },
      ],
      faqs: [
        {
          q: 'کیا یہ سب پیدل مل سکتے ہیں؟',
          qEn: 'Can you walk between them?',
          a: 'وہ قریب ہیں، مگر پہاڑی/سڑک کی وجہ سے محفوظ پیدل راستے کی تصدیق ضروری ہے۔',
          aEn:
            'They are close, but confirm safe walking routes given the hill/roads.',
        },
        {
          q: 'کیا ایک دورے میں شامل کریں؟',
          qEn: 'Combine in one visit?',
          a: 'ہاں، ایک "ثقافتی آدھا دن" ان سب کو جوڑ سکتا ہے۔',
          aEn: 'Yes, a "cultural half-day" can link them all.',
        },
      ],
      related: ['museum-comparison', 'heritage-half-day', 'pakistan-monument-museum', 'lok-virsa-museum'],
    },
    en: {
      title: 'Cultural area map',
      titleEn: 'Cultural area map',
      description:
        'A map of cultural sites near Shakarparian: the monument, Lok Virsa, Natural History, and the Rose & Jasmine Garden.',
      descriptionEn:
        'A map of cultural sites near Shakarparian: the monument, Lok Virsa, Natural History, and the Rose & Jasmine Garden.',
      h1: 'A map of cultural sites near Shakarparian',
      h1En: 'A map of cultural sites near Shakarparian',
      kicker: 'Map',
      kickerEn: 'Map',
      lead: 'The CDA describes Shakarparian, the Pakistan Monument, Lok Virsa, and the Rose & Jasmine Garden as local tourism resources. This page gives a sketch of them.',
      leadEn:
        'The CDA describes Shakarparian, the Pakistan Monument, Lok Virsa, and the Rose & Jasmine Garden as local tourism resources. This page gives a sketch of them.',
      updated: 'Last reviewed: 29 October 2026',
      updatedEn: 'Last reviewed: 29 October 2026',
      sections: [
        {
          heading: 'Sites',
          headingEn: 'Sites',
          body: 'Shakarparian (view/greenery), Pakistan Monument (monument + museum), Lok Virsa (culture), Natural History Museum (science), and the Rose & Jasmine Garden (flowers). Confirm safe walking links on local signage.',
          bodyEn:
            'Shakarparian (view/greenery), Pakistan Monument (monument + museum), Lok Virsa (culture), Natural History Museum (science), and the Rose & Jasmine Garden (flowers). Confirm safe walking links on local signage.',
          bullets: [
            'Shakarparian — view and greenery',
            'Pakistan Monument — monument + museum',
            'Lok Virsa — folk culture',
          ],
          bulletsEn: [
            'Shakarparian — view and greenery',
            'Pakistan Monument — monument + museum',
            'Lok Virsa — folk culture',
          ],
        },
      ],
      faqs: [
        {
          q: 'Can you walk between them?',
          qEn: 'Can you walk between them?',
          a: 'They are close, but confirm safe walking routes given the hill/roads.',
          aEn:
            'They are close, but confirm safe walking routes given the hill/roads.',
        }, {
          q: 'Combine in one visit?',
          qEn: 'Combine in one visit?',
          a: 'Yes, a "cultural half-day" can link them all.',
          aEn: 'Yes, a "cultural half-day" can link them all.',
        },
      ],
      related: ['museum-comparison', 'heritage-half-day', 'pakistan-monument-museum', 'lok-virsa-museum'],
    },
  },
  {
    slug: 'shakarparian-vs-daman-e-koh',
    group: 'museums',
    ur: {
      title: 'شکرپڑیاں یا دامنِ کوہ؟',
      titleEn: 'Shakarparian vs Daman-e-Koh',
      description:
        'شکرپڑیاں اور دامنِ کوہ میں فرق: شہر کا نظارہ بمقابلہ مارگلہ کی چوٹی کا نظارہ۔',
      descriptionEn:
        'The difference between Shakarparian and Daman-e-Koh: city view vs Margalla hilltop view.',
      h1: 'شکرپڑیاں اور دامنِ کوہ: دو مختلف نظارے',
      h1En: 'Shakarparian vs Daman-e-Koh: two different views',
      kicker: 'مقامات کا فرق',
      kickerEn: 'Place differences',
      lead: 'دونوں اسلام آباد کے مقبول نظارے ہیں، مگر مختلف نوعیت کے: شکرپڑیاں شہر کے قریب پہاڑی پر ہے، جبکہ دامنِ کوہ مارگلہ کی چوٹیوں کے قریب ہے۔',
      leadEn:
        'Both are popular Islamabad viewpoints but different: Shakarparian is a hill near the city, while Daman-e-Koh is up in the Margalla hills.',
      updated: 'آخری جائزہ: 29 اکتوبر 2026',
      updatedEn: 'Last reviewed: 29 October 2026',
      sections: [
        {
          heading: 'فرق',
          headingEn: 'The difference',
          body: 'شکرپڑیاں سے شہر کا پھیلاؤ اور پاکستان مونومنٹ قریب ہیں؛ دامنِ کوہ سے مارگلہ کا جنگل اور گہرا نظارہ ملتا ہے۔',
          bodyEn:
            'From Shakarparian you get the city spread and the nearby monument; from Daman-e-Koh you get the Margalla forest and a deeper view.',
        },
        {
          heading: 'کون سا چنیں',
          headingEn: 'Which to choose',
          body: 'اگر آپ شہر کے نظارے اور مونومنٹ دیکھنا چاہتے ہیں تو شکرپڑیاں؛ اگر جنگل اور اونچائی چاہیے تو دامنِ کوہ۔',
          bodyEn:
            'For city view and the monument, choose Shakarparian; for forest and height, choose Daman-e-Koh.',
        },
      ],
      faqs: [
        {
          q: 'کیا دونوں ایک ہی دورے میں ہیں؟',
          qEn: 'Are both in one visit?',
          a: 'نہیں، دامنِ کوہ مارگلہ کی طرف ہے اور شکرپڑیاں شہر کی جانب — الگ راستے ہیں۔',
          aEn:
            'No, Daman-e-Koh is toward the Margallas and Shakarparian toward the city — separate routes.',
        },
        {
          q: 'کون زیادہ آسان ہے؟',
          qEn: 'Which is easier?',
          a: 'شکرپڑیاں شہر کے قریب ہے؛ دامنِ کوہ کے لیے پہاڑی راستہ درکار ہے۔',
          aEn:
            'Shakarparian is close to the city; Daman-e-Koh needs a hill road.',
        },
      ],
      related: ['viewpoint', 'daman-e-koh', 'photo-spots', 'sunset-photo-route'],
    },
    en: {
      title: 'Shakarparian vs Daman-e-Koh',
      titleEn: 'Shakarparian vs Daman-e-Koh',
      description:
        'The difference between Shakarparian and Daman-e-Koh: city view vs Margalla hilltop view.',
      descriptionEn:
        'The difference between Shakarparian and Daman-e-Koh: city view vs Margalla hilltop view.',
      h1: 'Shakarparian and Daman-e-Koh: two different views',
      h1En: 'Shakarparian vs Daman-e-Koh: two different views',
      kicker: 'Place differences',
      kickerEn: 'Place differences',
      lead: 'Both are popular Islamabad viewpoints but different: Shakarparian is a hill near the city, while Daman-e-Koh is up in the Margalla hills.',
      leadEn:
        'Both are popular Islamabad viewpoints but different: Shakarparian is a hill near the city, while Daman-e-Koh is up in the Margalla hills.',
      updated: 'Last reviewed: 29 October 2026',
      updatedEn: 'Last reviewed: 29 October 2026',
      sections: [
        {
          heading: 'The difference',
          headingEn: 'The difference',
          body: 'From Shakarparian you get the city spread and the nearby monument; from Daman-e-Koh you get the Margalla forest and a deeper view.',
          bodyEn:
            'From Shakarparian you get the city spread and the nearby monument; from Daman-e-Koh you get the Margalla forest and a deeper view.',
        },
        {
          heading: 'Which to choose',
          headingEn: 'Which to choose',
          body: 'For city view and the monument, choose Shakarparian; for forest and height, choose Daman-e-Koh.',
          bodyEn:
            'For city view and the monument, choose Shakarparian; for forest and height, choose Daman-e-Koh.',
        },
      ],
      faqs: [
        {
          q: 'Are both in one visit?',
          qEn: 'Are both in one visit?',
          a: 'No, Daman-e-Koh is toward the Margallas and Shakarparian toward the city — separate routes.',
          aEn:
            'No, Daman-e-Koh is toward the Margallas and Shakarparian toward the city — separate routes.',
        }, {
          q: 'Which is easier?',
          qEn: 'Which is easier?',
          a: 'Shakarparian is close to the city; Daman-e-Koh needs a hill road.',
          aEn:
            'Shakarparian is close to the city; Daman-e-Koh needs a hill road.',
        },
      ],
      related: ['viewpoint', 'photo-spots', 'sunset-photo-route', 'cultural-area-map'],
    },
  },
  {
    slug: 'pak-china-centre-events',
    group: 'museums',
    ur: {
      title: 'پاک چائنا سینٹر',
      titleEn: 'Pak-China Centre',
      description:
        'پاکستان چائنا فرینڈشپ سنٹر: نمائش اور تقریبات — عوامی داخلے کے قواعد کی تصدیق ضروری۔',
      descriptionEn:
        'Pakistan-China Friendship Centre: exhibitions and events — verify public-access rules.',
      h1: 'پاک چائنا فرینڈشپ سنٹر: نمائش اور تقریبات',
      h1En: 'Pak-China Friendship Centre: exhibitions & events',
      kicker: 'تقریبات',
      kickerEn: 'Events',
      lead: 'پاکستان چائنا فرینڈشپ سنٹر شکرپڑیاں کے قریب واقع ہے اور کانفرنسز و نمائشوں کے لیے استعمال ہوتا ہے۔ عوامی داخلے کے قواعد وقت کے ساتھ بدل سکتے ہیں۔',
      leadEn:
        'The Pakistan-China Friendship Centre is near Shakarparian and used for conferences and exhibitions. Public-access rules can change.',
      updated: 'آخری جائزہ: 29 اکتوبر 2026',
      updatedEn: 'Last reviewed: 29 October 2026',
      sections: [
        {
          heading: 'کیا یہ روزانہ کھلا ہے؟',
          headingEn: 'Is it open daily?',
          body: 'یہ بنیادی طور پر تقریبات/کانفرنسز کا مقام ہے۔ عوامی نمائش یا داخلے کے لیے متعلقہ ادارے سے موجودہ شیڈول اور قواعد تصدیق کریں — ہم نے حتمی معلومات نہیں دیں۔',
          bodyEn:
            'It is mainly an events/conference venue. For public exhibitions or access, confirm the current schedule and rules with the institution — we have not verified final details.',
        },
      ],
      faqs: [
        {
          q: 'کیا یہ سیاحوں کے لیے کھلا ہے؟',
          qEn: 'Is it open to tourists?',
          a: 'یہ اصل میں تقریبات کا مقام ہے؛ عوامی داخلے کی تصدیق ضروری ہے۔',
          aEn:
            'It is mainly an events venue; verify public access before going.',
        },
        {
          q: 'کیا یہ شکرپڑیاں کے ساتھ ہے؟',
          qEn: 'Is it with Shakarparian?',
          a: 'یہ قریب واقع ہے، مگر الگ ادارہ/مقام ہے۔',
          aEn: 'It is nearby but a separate institution/site.',
        },
      ],
      related: ['cultural-area-map', 'lok-virsa-museum', 'pakistan-monument-museum', 'heritage-half-day'],
    },
    en: {
      title: 'Pak-China Centre',
      titleEn: 'Pak-China Centre',
      description:
        'Pakistan-China Friendship Centre: exhibitions and events — verify public-access rules.',
      descriptionEn:
        'Pakistan-China Friendship Centre: exhibitions and events — verify public-access rules.',
      h1: 'Pak-China Friendship Centre: exhibitions & events',
      h1En: 'Pak-China Friendship Centre: exhibitions & events',
      kicker: 'Events',
      kickerEn: 'Events',
      lead: 'The Pakistan-China Friendship Centre is near Shakarparian and used for conferences and exhibitions. Public-access rules can change.',
      leadEn:
        'The Pakistan-China Friendship Centre is near Shakarparian and used for conferences and exhibitions. Public-access rules can change.',
      updated: 'Last reviewed: 29 October 2026',
      updatedEn: 'Last reviewed: 29 October 2026',
      sections: [
        {
          heading: 'Is it open daily?',
          headingEn: 'Is it open daily?',
          body: 'It is mainly an events/conference venue. For public exhibitions or access, confirm the current schedule and rules with the institution — we have not verified final details.',
          bodyEn:
            'It is mainly an events/conference venue. For public exhibitions or access, confirm the current schedule and rules with the institution — we have not verified final details.',
        },
      ],
      faqs: [
        {
          q: 'Is it open to tourists?',
          qEn: 'Is it open to tourists?',
          a: 'It is mainly an events venue; verify public access before going.',
          aEn:
            'It is mainly an events venue; verify public access before going.',
        }, {
          q: 'Is it with Shakarparian?',
          qEn: 'Is it with Shakarparian?',
          a: 'It is nearby but a separate institution/site.',
          aEn: 'It is nearby but a separate institution/site.',
        },
      ],
      related: ['cultural-area-map', 'lok-virsa-museum', 'pakistan-monument-museum', 'heritage-half-day'],
    },
  },
  {
    slug: 'restaurants-nearby',
    group: 'food',
    ur: {
      title: 'قریبی ریستورنٹس',
      titleEn: 'Restaurants nearby',
      description:
        'شکرپڑیاں کے قریب ریستورنٹس: کھانا، مشروبات اور دورے کے اختتام پر آپشنز۔',
      descriptionEn:
        'Restaurants near Shakarparian: food, drinks, and options to end a visit.',
      h1: 'شکرپڑیاں کے قریب کھانا: ریستورنٹس اور آپشنز',
      h1En: 'Food near Shakarparian: restaurants & options',
      kicker: 'کھانا',
      kickerEn: 'Food',
      lead: 'شکرپڑیاں کے ارد گرد کھانے پینے کے کئی آپشنز ہیں، جو پارک کے دورے کو مکمل کرتے ہیں۔ ہم کسی برانڈ کی سفارش نہیں کرتے — صرف قسم اور محل وقوع بتاتے ہیں۔',
      leadEn:
        'Several dining options surround Shakarparian and round off a park visit. We do not recommend any brand — only type and location.',
      updated: 'آخری جائزہ: 29 اکتوبر 2026',
      updatedEn: 'Last reviewed: 29 October 2026',
      sections: [
        {
          heading: 'مقامی آپشنز',
          headingEn: 'Local options',
          body: 'گارڈن ایونیو اور آس پاس کے علاقے میں ریستورنٹس اور کیفے موجود ہیں، جن میں 1969 Restaurant (Garden Avenue کے قریب) شامل ہے۔ دورے کے اختتام پر آب پارہ مارکیٹ کی طرف کھانے کا اختیار بھی ہے۔',
          bodyEn:
            'Around Garden Avenue and the vicinity there are restaurants and cafés, including the 1969 Restaurant (near Garden Avenue). After the visit, Aabpara Market is another dining option.',
        },
        {
          heading: 'منصوبہ بندی',
          headingEn: 'Planning',
          body: 'فاصلہ اور ٹریفک نہ جان کر "چند منٹ" مت لکھیں۔ ریستورنٹ کا عین مقام، مینو اور اوقات روانگی سے پہلے تصدیق کریں۔',
          bodyEn:
            'Do not claim "a few minutes" without knowing distance and traffic. Confirm the exact location, menu, and hours before you go.',
        },
      ],
      faqs: [
        {
          q: 'کیا پارک کے اندر کھانا ہے؟',
          qEn: 'Is food inside the park?',
          a: 'ہم نے پارک کے اندر کھانے کی تصدیق نہیں کی؛ ارد گرد کے علاقے کو ترجیح دیں۔',
          aEn:
            'We have not verified food inside the park; prefer the surrounding area.',
        },
        {
          q: 'کیا آب پارہ جانا بہتر ہے؟',
          qEn: 'Is Aabpara better?',
          a: 'آب پارہ مارکیٹ دورے کے اختتام پر کھانے کا ایک اختیار ہے، مگر شہر کی طرف ہے — سفر کا وقت شامل کریں۔',
          aEn:
            'Aabpara Market is a dining option after the visit, but it is toward the city — add travel time.',
        },
      ],
      related: ['1969-restaurant', 'aabpara-food-stop', 'tea-and-coffee', 'family-half-day'],
    },
    en: {
      title: 'Restaurants nearby',
      titleEn: 'Restaurants nearby',
      description:
        'Restaurants near Shakarparian: food, drinks, and options to end a visit.',
      descriptionEn:
        'Restaurants near Shakarparian: food, drinks, and options to end a visit.',
      h1: 'Food near Shakarparian: restaurants & options',
      h1En: 'Food near Shakarparian: restaurants & options',
      kicker: 'Food',
      kickerEn: 'Food',
      lead: 'Several dining options surround Shakarparian and round off a park visit. We do not recommend any brand — only type and location.',
      leadEn:
        'Several dining options surround Shakarparian and round off a park visit. We do not recommend any brand — only type and location.',
      updated: 'Last reviewed: 29 October 2026',
      updatedEn: 'Last reviewed: 29 October 2026',
      sections: [
        {
          heading: 'Local options',
          headingEn: 'Local options',
          body: 'Around Garden Avenue and the vicinity there are restaurants and cafés, including the 1969 Restaurant (near Garden Avenue). After the visit, Aabpara Market is another dining option.',
          bodyEn:
            'Around Garden Avenue and the vicinity there are restaurants and cafés, including the 1969 Restaurant (near Garden Avenue). After the visit, Aabpara Market is another dining option.',
        },
        {
          heading: 'Planning',
          headingEn: 'Planning',
          body: 'Do not claim "a few minutes" without knowing distance and traffic. Confirm the exact location, menu, and hours before you go.',
          bodyEn:
            'Do not claim "a few minutes" without knowing distance and traffic. Confirm the exact location, menu, and hours before you go.',
        },
      ],
      faqs: [
        {
          q: 'Is food inside the park?',
          qEn: 'Is food inside the park?',
          a: 'We have not verified food inside the park; prefer the surrounding area.',
          aEn:
            'We have not verified food inside the park; prefer the surrounding area.',
        }, {
          q: 'Is Aabpara better?',
          qEn: 'Is Aabpara better?',
          a: 'Aabpara Market is a dining option after the visit, but it is toward the city — add travel time.',
          aEn:
            'Aabpara Market is a dining option after the visit, but it is toward the city — add travel time.',
        },
      ],
      related: ['1969-restaurant', 'aabpara-food-stop', 'tea-and-coffee', 'family-half-day'],
    },
  },
  {
    slug: '1969-restaurant',
    group: 'food',
    ur: {
      title: '1969 ریستورنٹ',
      titleEn: '1969 Restaurant',
      description:
        '1969 Restaurant (Garden Avenue, Shakarparian): محل وقوع، مینو اور آرڈر — غیر جانبدارانہ تعارف۔',
      descriptionEn:
        '1969 Restaurant (Garden Avenue, Shakarparian): location, menu, and booking — an independent overview.',
      h1: '1969 Restaurant: گارڈن ایونیو پر کھانا',
      h1En: '1969 Restaurant: dining on Garden Avenue',
      kicker: 'ریستورنٹ',
      kickerEn: 'Restaurant',
      lead: '1969 Restaurant اپنی ویب سائٹ پر Garden Avenue, Shakarparian کا پتہ اور کھانے/مشروبات کا مینو دیتا ہے۔ یہ ایک غیر جانبدارانہ تعارف ہے اور کوئی ادائیگی والی سفارش نہیں۔',
      leadEn:
        '1969 Restaurant lists a Garden Avenue, Shakarparian address and a food/drinks menu on its website. This is an independent overview, not a paid recommendation.',
      updated: 'آخری جائزہ: 29 اکتوبر 2026',
      updatedEn: 'Last reviewed: 29 October 2026',
      sections: [
        {
          heading: 'محل وقوع',
          headingEn: 'Location',
          body: 'پتہ: Garden Avenue, Shakarparian, اسلام آباد۔ یہ شکرپڑیاں کے قریب ہے، مگر ہم نے عین فاصلہ یا پیدل راستے کی تصدیق نہیں کی۔',
          bodyEn:
            'Address: Garden Avenue, Shakarparian, Islamabad. It is near Shakarparian, but we have not verified the exact distance or walking route.',
        },
        {
          heading: 'مینو اور بکنگ',
          headingEn: 'Menu & booking',
          body: 'ریستورنٹ کا اپنا مینو (کھانا اور مشروبات) دستیاب ہے۔ موجودہ مینو، اوقات اور بکنگ کی تصدیق ان کی سرکاری سائٹ یا فون سے کریں — ہم نے حتمی تفصیل نہیں دی۔',
          bodyEn:
            'The restaurant has its own menu (food and drinks). Confirm the current menu, hours, and booking via its official site or phone — we have not given final details.',
        },
      ],
      faqs: [
        {
          q: 'کیا یہ شکرپڑیاں کے ساتھ ہے؟',
          qEn: 'Is it at Shakarparian?',
          a: 'یہ Garden Avenue پر ہے جو شکرپڑیاں کے قریب ہے، مگر الگ مقام ہے۔',
          aEn:
            'It is on Garden Avenue, near Shakarparian, but a separate spot.',
        },
        {
          q: 'کیا بکنگ ضروری ہے؟',
          qEn: 'Is booking needed?',
          a: 'ہم نے تصدیق نہیں کی؛ ریستورنٹ سے پتہ کریں۔',
          aEn: 'We have not verified; ask the restaurant.',
        },
      ],
      related: ['restaurants-nearby', 'aabpara-food-stop', 'tea-and-coffee', 'family-half-day'],
    },
    en: {
      title: '1969 Restaurant',
      titleEn: '1969 Restaurant',
      description:
        '1969 Restaurant (Garden Avenue, Shakarparian): location, menu, and booking — an independent overview.',
      descriptionEn:
        '1969 Restaurant (Garden Avenue, Shakarparian): location, menu, and booking — an independent overview.',
      h1: '1969 Restaurant: dining on Garden Avenue',
      h1En: '1969 Restaurant: dining on Garden Avenue',
      kicker: 'Restaurant',
      kickerEn: 'Restaurant',
      lead: '1969 Restaurant lists a Garden Avenue, Shakarparian address and a food/drinks menu on its website. This is an independent overview, not a paid recommendation.',
      leadEn:
        '1969 Restaurant lists a Garden Avenue, Shakarparian address and a food/drinks menu on its website. This is an independent overview, not a paid recommendation.',
      updated: 'Last reviewed: 29 October 2026',
      updatedEn: 'Last reviewed: 29 October 2026',
      sections: [
        {
          heading: 'Location',
          headingEn: 'Location',
          body: 'Address: Garden Avenue, Shakarparian, Islamabad. It is near Shakarparian, but we have not verified the exact distance or walking route.',
          bodyEn:
            'Address: Garden Avenue, Shakarparian, Islamabad. It is near Shakarparian, but we have not verified the exact distance or walking route.',
        },
        {
          heading: 'Menu & booking',
          headingEn: 'Menu & booking',
          body: 'The restaurant has its own menu (food and drinks). Confirm the current menu, hours, and booking via its official site or phone — we have not given final details.',
          bodyEn:
            'The restaurant has its own menu (food and drinks). Confirm the current menu, hours, and booking via its official site or phone — we have not given final details.',
        },
      ],
      faqs: [
        {
          q: 'Is it at Shakarparian?',
          qEn: 'Is it at Shakarparian?',
          a: 'It is on Garden Avenue, near Shakarparian, but a separate spot.',
          aEn:
            'It is on Garden Avenue, near Shakarparian, but a separate spot.',
        }, {
          q: 'Is booking needed?',
          qEn: 'Is booking needed?',
          a: 'We have not verified; ask the restaurant.',
          aEn: 'We have not verified; ask the restaurant.',
        },
      ],
      related: ['restaurants-nearby', 'aabpara-food-stop', 'tea-and-coffee', 'family-half-day'],
    },
  },
  {
    slug: 'tea-and-coffee',
    group: 'food',
    ur: {
      title: 'چائے اور کافی',
      titleEn: 'Tea & coffee',
      description:
        'شکرپڑیاں کے قریب چائے اور کافی: کیفے اور آپشنز — موقع پر تصدیق ضروری۔',
      descriptionEn:
        'Tea and coffee near Shakarparian: cafés and options — confirm on site.',
      h1: 'شکرپڑیاں کے قریب چائے اور کافی',
      h1En: 'Tea & coffee near Shakarparian',
      kicker: 'کیفے',
      kickerEn: 'Cafés',
      lead: 'ہم نے شکرپڑیاں کے فوری قریب کسی مخصوص کیفے یا کافی پوائنٹ کی تصدیق نہیں کی۔ گارڈن ایونیو اور آس پاس کے علاقے میں کیفے ہو سکتے ہیں — روانگی سے پہلے مقامی بورڈ یا آن لائن تصدیق کریں۔',
      leadEn:
        'We have not verified a specific café or coffee point right at Shakarparian. Cafés may exist around Garden Avenue and the vicinity — check local signage or online before travel.',
      updated: 'آخری جائزہ: 29 اکتوبر 2026',
      updatedEn: 'Last reviewed: 29 October 2026',
      sections: [
        {
          heading: 'مشورہ',
          headingEn: 'Advice',
          body: 'اگر آپ چائے/کافی چاہتے ہیں تو دورے کے آغاز یا اختتام پر ارد گرد کے علاقے کو شامل کریں، اور عین مقام کی تصدیق آن لائن کریں۔',
          bodyEn:
            'If you want tea/coffee, add the surrounding area at the start or end of the visit, and verify the exact spot online.',
        },
      ],
      faqs: [
        {
          q: 'کیا پارک میں کیفے ہے؟',
          qEn: 'Is there a café in the park?',
          a: 'ہم نے تصدیق نہیں کی؛ قریبی علاقے کا نوٹ لیں۔',
          aEn: 'We have not verified; note the surrounding area.',
        },
        {
          q: 'کیا نقدی لازمی ہے؟',
          qEn: 'Is cash needed?',
          a: 'بیشتر کیفے کارڈ بھی لیتے ہیں، مگر تصدیق کریں۔',
          aEn: 'Most cafés also take cards, but confirm.',
        },
      ],
      related: ['restaurants-nearby', '1969-restaurant', 'aabpara-food-stop', 'family-half-day'],
    },
    en: {
      title: 'Tea & coffee',
      titleEn: 'Tea & coffee',
      description:
        'Tea and coffee near Shakarparian: cafés and options — confirm on site.',
      descriptionEn:
        'Tea and coffee near Shakarparian: cafés and options — confirm on site.',
      h1: 'Tea & coffee near Shakarparian',
      h1En: 'Tea & coffee near Shakarparian',
      kicker: 'Cafés',
      kickerEn: 'Cafés',
      lead: 'We have not verified a specific café or coffee point right at Shakarparian. Cafés may exist around Garden Avenue and the vicinity — check local signage or online before travel.',
      leadEn:
        'We have not verified a specific café or coffee point right at Shakarparian. Cafés may exist around Garden Avenue and the vicinity — check local signage or online before travel.',
      updated: 'Last reviewed: 29 October 2026',
      updatedEn: 'Last reviewed: 29 October 2026',
      sections: [
        {
          heading: 'Advice',
          headingEn: 'Advice',
          body: 'If you want tea/coffee, add the surrounding area at the start or end of the visit, and verify the exact spot online.',
          bodyEn:
            'If you want tea/coffee, add the surrounding area at the start or end of the visit, and verify the exact spot online.',
        },
      ],
      faqs: [
        {
          q: 'Is there a café in the park?',
          qEn: 'Is there a café in the park?',
          a: 'We have not verified; note the surrounding area.',
          aEn: 'We have not verified; note the surrounding area.',
        }, {
          q: 'Is cash needed?',
          qEn: 'Is cash needed?',
          a: 'Most cafés also take cards, but confirm.',
          aEn: 'Most cafés also take cards, but confirm.',
        },
      ],
      related: ['restaurants-nearby', '1969-restaurant', 'aabpara-food-stop', 'family-half-day'],
    },
  },
  {
    slug: 'aabpara-food-stop',
    group: 'food',
    ur: {
      title: 'آب پارہ میں کھانا',
      titleEn: 'Aabpara food stop',
      description:
        'شکرپڑیاں کے دورے کے اختتام پر آب پارہ مارکیٹ کا کھانا اور چائے۔',
      descriptionEn:
        'Food and tea at Aabpara Market after a Shakarparian visit.',
      h1: 'آب پارہ: دورے کے اختتام پر کھانا',
      h1En: 'Aabpara: food after your visit',
      kicker: 'اختتامی کھانا',
      kickerEn: 'End-of-visit meal',
      lead: 'آب پارہ مارکیٹ شکرپڑیاں کے دورے کے بعد کھانے، چائے اور خریداری کے لیے ایک مقامی اختیار ہے۔ یہ پارک کے اندر کا پیدل کھانا نہیں بلکہ شہر کی طرف توسیع ہے۔',
      leadEn:
        'Aabpara Market is a local option for food, tea, and shopping after a Shakarparian visit. It is an extension toward the city, not in-park dining.',
      updated: 'آخری جائزہ: 29 اکتوبر 2026',
      updatedEn: 'Last reviewed: 29 October 2026',
      sections: [
        {
          heading: 'یہاں کیا ملے گا',
          headingEn: 'What to expect',
          body: 'آب پارہ میں مقامی کھانے، چائے کی دکانیں اور روزمرہ کی خریداری ملتی ہے۔ یہ شکرپڑیاں کے بعد کے اختتامی آپشن کے طور پر موزوں ہے۔',
          bodyEn:
            'Aabpara has local food, tea stalls, and everyday shopping. It suits an end-of-visit option after Shakarparian.',
        },
        {
          heading: 'منصوبہ بندی',
          headingEn: 'Planning',
          body: 'آب پارہ شہر کی طرف ہے، اس لیے واپسی کے راستے اور ٹریفک کا وقت شامل کریں۔',
          bodyEn:
            'Aabpara is toward the city, so add return route and traffic time.',
        },
      ],
      faqs: [
        {
          q: 'کیا یہ پیدل مل سکتا ہے؟',
          qEn: 'Can you walk there?',
          a: 'نہیں، آب پارہ شہر کی طرف ہے؛ ٹیکسی یا رائیڈ ایپ سے جائیں۔',
          aEn:
            'No, Aabpara is toward the city; go by taxi or ride app.',
        },
        {
          q: 'کیا یہ خاندانی ہے؟',
          qEn: 'Is it family-friendly?',
          a: 'ہاں، مقامی کھانے اور بازار کا ماحول خاندانوں کے لیے موزوں ہے۔',
          aEn:
            'Yes, the local food and bazaar atmosphere suits families.',
        },
      ],
      related: ['restaurants-nearby', '1969-restaurant', 'tea-and-coffee', 'budget-day-trip'],
    },
    en: {
      title: 'Aabpara food stop',
      titleEn: 'Aabpara food stop',
      description:
        'Food and tea at Aabpara Market after a Shakarparian visit.',
      descriptionEn:
        'Food and tea at Aabpara Market after a Shakarparian visit.',
      h1: 'Aabpara: food after your visit',
      h1En: 'Aabpara: food after your visit',
      kicker: 'End-of-visit meal',
      kickerEn: 'End-of-visit meal',
      lead: 'Aabpara Market is a local option for food, tea, and shopping after a Shakarparian visit. It is an extension toward the city, not in-park dining.',
      leadEn:
        'Aabpara Market is a local option for food, tea, and shopping after a Shakarparian visit. It is an extension toward the city, not in-park dining.',
      updated: 'Last reviewed: 29 October 2026',
      updatedEn: 'Last reviewed: 29 October 2026',
      sections: [
        {
          heading: 'What to expect',
          headingEn: 'What to expect',
          body: 'Aabpara has local food, tea stalls, and everyday shopping. It suits an end-of-visit option after Shakarparian.',
          bodyEn:
            'Aabpara has local food, tea stalls, and everyday shopping. It suits an end-of-visit option after Shakarparian.',
        },
        {
          heading: 'Planning',
          headingEn: 'Planning',
          body: 'Aabpara is toward the city, so add return route and traffic time.',
          bodyEn:
            'Aabpara is toward the city, so add return route and traffic time.',
        },
      ],
      faqs: [
        {
          q: 'Can you walk there?',
          qEn: 'Can you walk there?',
          a: 'No, Aabpara is toward the city; go by taxi or ride app.',
          aEn:
            'No, Aabpara is toward the city; go by taxi or ride app.',
        }, {
          q: 'Is it family-friendly?',
          qEn: 'Is it family-friendly?',
          a: 'Yes, the local food and bazaar atmosphere suits families.',
          aEn:
            'Yes, the local food and bazaar atmosphere suits families.',
        },
      ],
      related: ['restaurants-nearby', '1969-restaurant', 'tea-and-coffee', 'budget-day-trip'],
    },
  },
  {
    slug: 'one-hour-itinerary',
    group: 'itineraries',
    ur: {
      title: 'ایک گھنٹے کا دورہ',
      titleEn: 'One-hour itinerary',
      description:
        'شکرپڑیاں کا ایک گھنٹے کا تیز دورہ: ویو پوائنٹ، مونومنٹ کا احاطہ اور واپسی۔',
      descriptionEn:
        'A one-hour quick visit to Shakarparian: the viewpoint, the monument compound, and back.',
      h1: 'شکرپڑیاں: ایک گھنٹے کا تیز دورہ',
      h1En: 'Shakarparian: a one-hour quick visit',
      kicker: 'تیز دورہ',
      kickerEn: 'Quick visit',
      lead: 'اگر وقت کم ہے تو ویو پوائنٹ سے شہر کا نظارہ لیں، پاکستان مونومنٹ کے احاطے کو باہر سے دیکھیں، اور واپس آئیں۔',
      leadEn:
        'If time is short, take the city view from the viewpoint, see the Pakistan Monument compound from outside, and return.',
      updated: 'آخری جائزہ: 29 اکتوبر 2026',
      updatedEn: 'Last reviewed: 29 October 2026',
      sections: [
        {
          heading: 'ایک گھنٹے کا پلان',
          headingEn: 'The one-hour plan',
          body: '15 منٹ ویو پوائنٹ، 20 منٹ مونومنٹ کے احاطے کے ارد گرد، 15 منٹ چہل قدمی، اور 10 منٹ آرام/تصویر۔ یہ پلان موسم اور ہجوم کے مطابق بدل سکتا ہے۔',
          bodyEn:
            '15 min viewpoint, 20 min around the monument compound, 15 min walk, 10 min rest/photos. Adjust for weather and crowds.',
          bullets: [
            'ویو پوائنٹ: شہر کا نظارہ',
            'مونومنٹ: باہر سے دیکھیں (میوزیم کے بغیر)',
            'چہل قدمی: پیدل راستہ',
          ],
          bulletsEn: [
            'Viewpoint: the city view',
            'Monument: see from outside (no museum)',
            'Walk: the path',
          ],
        },
      ],
      faqs: [
        {
          q: 'کیا ایک گھنٹے میں مونومنٹ میوزیم ہو سکتا ہے؟',
          qEn: 'Can the monument museum fit in one hour?',
          a: 'ممکن ہے مگر تنگ ہوگا؛ جلدی کے لیے صرف باہر کا نظارہ رکھیں۔',
          aEn:
            'Possible but tight; for speed keep it to the outside view only.',
        },
        {
          q: 'کیا صبح یا شام بہتر ہے؟',
          qEn: 'Morning or evening better?',
          a: 'شام کا نظارہ زیادہ مقبول ہے، مگر صبح ہجوم کم ہوتا ہے۔',
          aEn:
            'The evening view is popular, but mornings are less crowded.',
        },
      ],
      related: ['two-to-three-hours', 'viewpoint', 'sunset-photo-route', 'park-vs-monument'],
    },
    en: {
      title: 'One-hour itinerary',
      titleEn: 'One-hour itinerary',
      description:
        'A one-hour quick visit to Shakarparian: the viewpoint, the monument compound, and back.',
      descriptionEn:
        'A one-hour quick visit to Shakarparian: the viewpoint, the monument compound, and back.',
      h1: 'Shakarparian: a one-hour quick visit',
      h1En: 'Shakarparian: a one-hour quick visit',
      kicker: 'Quick visit',
      kickerEn: 'Quick visit',
      lead: 'If time is short, take the city view from the viewpoint, see the Pakistan Monument compound from outside, and return.',
      leadEn:
        'If time is short, take the city view from the viewpoint, see the Pakistan Monument compound from outside, and return.',
      updated: 'Last reviewed: 29 October 2026',
      updatedEn: 'Last reviewed: 29 October 2026',
      sections: [
        {
          heading: 'The one-hour plan',
          headingEn: 'The one-hour plan',
          body: '15 min viewpoint, 20 min around the monument compound, 15 min walk, 10 min rest/photos. Adjust for weather and crowds.',
          bodyEn:
            '15 min viewpoint, 20 min around the monument compound, 15 min walk, 10 min rest/photos. Adjust for weather and crowds.',
          bullets: [
            'Viewpoint: the city view',
            'Monument: see from outside (no museum)',
            'Walk: the path',
          ],
          bulletsEn: [
            'Viewpoint: the city view',
            'Monument: see from outside (no museum)',
            'Walk: the path',
          ],
        },
      ],
      faqs: [
        {
          q: 'Can the monument museum fit in one hour?',
          qEn: 'Can the monument museum fit in one hour?',
          a: 'Possible but tight; for speed keep it to the outside view only.',
          aEn:
            'Possible but tight; for speed keep it to the outside view only.',
        }, {
          q: 'Morning or evening better?',
          qEn: 'Morning or evening better?',
          a: 'The evening view is popular, but mornings are less crowded.',
          aEn:
            'The evening view is popular, but mornings are less crowded.',
        },
      ],
      related: ['two-to-three-hours', 'viewpoint', 'sunset-photo-route', 'park-vs-monument'],
    },
  },
  {
    slug: 'two-to-three-hours',
    group: 'itineraries',
    ur: {
      title: '2 تا 3 گھنٹے کا دورہ',
      titleEn: 'Two to three hours',
      description:
        'شکرپڑیاں کا 2–3 گھنٹے کا دورہ: ویو پوائنٹ، مونومنٹ میوزیم اور چہل قدمی۔',
      descriptionEn:
        'A 2–3 hour Shakarparian visit: viewpoint, monument museum, and a walk.',
      h1: 'شکرپڑیاں: 2 سے 3 گھنٹے کا دورہ',
      h1En: 'Shakarparian: a 2–3 hour visit',
      kicker: 'روایتی دورہ',
      kickerEn: 'Standard visit',
      lead: 'یہ دورہ ویو پوائنٹ، پاکستان مونومنٹ میوزیم، اور پہاڑی پر چہل قدمی کو جوڑتا ہے — زیادہ تر زائرین کے لیے موزوں۔',
      leadEn:
        'This visit links the viewpoint, the Pakistan Monument Museum, and a hill walk — suits most visitors.',
      updated: 'آخری جائزہ: 29 اکتوبر 2026',
      updatedEn: 'Last reviewed: 29 October 2026',
      sections: [
        {
          heading: '2–3 گھنٹے کا پلان',
          headingEn: 'The 2–3 hour plan',
          body: '30 منٹ ویو پوائنٹ، 60 منٹ مونومنٹ میوزیم (اوقات/ٹکٹ کی تصدیق کریں)، 45 منٹ چہل قدمی، اور 15 منٹ آرام۔',
          bodyEn:
            '30 min viewpoint, 60 min monument museum (verify hours/tickets), 45 min walk, 15 min rest.',
          bullets: [
            'ویو پوائنٹ: شہر کا نظارہ',
            'مونومنٹ میوزیم: قومی تاریخ کی نمائش',
            'چہل قدمی: سبزہ اور دوستی کے درخت',
          ],
          bulletsEn: [
            'Viewpoint: the city view',
            'Monument museum: national history exhibits',
            'Walk: greenery and friendship trees',
          ],
        },
      ],
      faqs: [
        {
          q: 'کیا مونومنٹ میوزیم کے لیے الگ ٹکٹ ہے؟',
          qEn: 'Is there a separate ticket for the museum?',
          a: 'ہاں، ممکن ہے؛ متعلقہ ادارے سے تصدیق کریں۔',
          aEn: 'Yes, likely; confirm with the institution.',
        },
        {
          q: 'کیا یہ خاندانی ہے؟',
          qEn: 'Is it family-friendly?',
          a: 'ہاں، مگر بچوں کے لیے سائے اور پانی کا انتظام کریں۔',
          aEn: 'Yes, but plan shade and water for children.',
        },
      ],
      related: ['one-hour-itinerary', 'family-half-day', 'pakistan-monument-museum', 'photo-spots'],
    },
    en: {
      title: 'Two to three hours',
      titleEn: 'Two to three hours',
      description:
        'A 2–3 hour Shakarparian visit: viewpoint, monument museum, and a walk.',
      descriptionEn:
        'A 2–3 hour Shakarparian visit: viewpoint, monument museum, and a walk.',
      h1: 'Shakarparian: a 2–3 hour visit',
      h1En: 'Shakarparian: a 2–3 hour visit',
      kicker: 'Standard visit',
      kickerEn: 'Standard visit',
      lead: 'This visit links the viewpoint, the Pakistan Monument Museum, and a hill walk — suits most visitors.',
      leadEn:
        'This visit links the viewpoint, the Pakistan Monument Museum, and a hill walk — suits most visitors.',
      updated: 'Last reviewed: 29 October 2026',
      updatedEn: 'Last reviewed: 29 October 2026',
      sections: [
        {
          heading: 'The 2–3 hour plan',
          headingEn: 'The 2–3 hour plan',
          body: '30 min viewpoint, 60 min monument museum (verify hours/tickets), 45 min walk, 15 min rest.',
          bodyEn:
            '30 min viewpoint, 60 min monument museum (verify hours/tickets), 45 min walk, 15 min rest.',
          bullets: [
            'Viewpoint: the city view',
            'Monument museum: national history exhibits',
            'Walk: greenery and friendship trees',
          ],
          bulletsEn: [
            'Viewpoint: the city view',
            'Monument museum: national history exhibits',
            'Walk: greenery and friendship trees',
          ],
        },
      ],
      faqs: [
        {
          q: 'Is there a separate ticket for the museum?',
          qEn: 'Is there a separate ticket for the museum?',
          a: 'Yes, likely; confirm with the institution.',
          aEn: 'Yes, likely; confirm with the institution.',
        }, {
          q: 'Is it family-friendly?',
          qEn: 'Is it family-friendly?',
          a: 'Yes, but plan shade and water for children.',
          aEn: 'Yes, but plan shade and water for children.',
        },
      ],
      related: ['one-hour-itinerary', 'family-half-day', 'pakistan-monument-museum', 'photo-spots'],
    },
  },
  {
    slug: 'family-half-day',
    group: 'itineraries',
    ur: {
      title: 'خاندانی آدھا دن',
      titleEn: 'Family half-day',
      description:
        'بچوں کے ساتھ شکرپڑیاں کا آدھا دن: نظارہ، کھلی جگہ اور قریبی عجائب گھر۔',
      descriptionEn:
        'A family half-day at Shakarparian: the view, open space, and a nearby museum.',
      h1: 'خاندانی آدھا دن: شکرپڑیاں اور قریبی عجائب گھر',
      h1En: 'Family half-day: Shakarparian & a nearby museum',
      kicker: 'خاندانی',
      kickerEn: 'Family',
      lead: 'بچوں کے ساتھ آدھا دن: نظارہ، کھلی چہل قدمی، اور پھر قریبی نیچرل ہسٹری یا لوک ورثہ میوزیم۔',
      leadEn:
        'A half-day with children: the view, open walk, then a nearby Natural History or Lok Virsa museum.',
      updated: 'آخری جائزہ: 29 اکتوبر 2026',
      updatedEn: 'Last reviewed: 29 October 2026',
      sections: [
        {
          heading: 'آدھے دن کا پلان',
          headingEn: 'The half-day plan',
          body: '45 منٹ ویو پوائنٹ/کھلی جگہ، 45 منٹ پیدل چہل قدمی (سائے میں رکیں)، 1.5 گھنٹے قریبی عجائب گھر، اور کھانے کا وقفہ۔',
          bodyEn:
            '45 min viewpoint/open area, 45 min walk (stay in shade), 1.5 hrs nearby museum, and a food break.',
          bullets: [
            'صبح سویرے یا شام کو جائیں۔',
            'بچوں کے لیے پانی اور ہلکا سناپ۔',
            'عجائب گھر کا انتخاب بچوں کی دلچسپی کے مطابق۔',
          ],
          bulletsEn: [
            'Go early morning or evening.',
            'Water and a light snack for children.',
            'Pick the museum by the children’s interest.',
          ],
        },
      ],
      faqs: [
        {
          q: 'کون سا عجائب گھر بچوں کے لیے بہتر ہے؟',
          qEn: 'Which museum is better for kids?',
          a: 'نیچرل ہسٹری (جیواشم/جانور) یا لوک ورثہ (دستکاری) دونوں موزوں ہیں۔',
          aEn:
            'Natural History (fossils/animals) or Lok Virsa (crafts) both work.',
        },
        {
          q: 'کیا اسٹرولر لے جا سکتے ہیں؟',
          qEn: 'Can you bring a stroller?',
          a: 'ہاں، مگر پہاڑی ڈھلوان کے لیے راستہ چیک کریں۔',
          aEn: 'Yes, but check the path for the slope.',
        },
      ],
      related: ['visiting-with-children', 'natural-history-museum', 'lok-virsa-museum', 'two-to-three-hours'],
    },
    en: {
      title: 'Family half-day',
      titleEn: 'Family half-day',
      description:
        'A family half-day at Shakarparian: the view, open space, and a nearby museum.',
      descriptionEn:
        'A family half-day at Shakarparian: the view, open space, and a nearby museum.',
      h1: 'Family half-day: Shakarparian & a nearby museum',
      h1En: 'Family half-day: Shakarparian & a nearby museum',
      kicker: 'Family',
      kickerEn: 'Family',
      lead: 'A half-day with children: the view, open walk, then a nearby Natural History or Lok Virsa museum.',
      leadEn:
        'A half-day with children: the view, open walk, then a nearby Natural History or Lok Virsa museum.',
      updated: 'Last reviewed: 29 October 2026',
      updatedEn: 'Last reviewed: 29 October 2026',
      sections: [
        {
          heading: 'The half-day plan',
          headingEn: 'The half-day plan',
          body: '45 min viewpoint/open area, 45 min walk (stay in shade), 1.5 hrs nearby museum, and a food break.',
          bodyEn:
            '45 min viewpoint/open area, 45 min walk (stay in shade), 1.5 hrs nearby museum, and a food break.',
          bullets: [
            'Go early morning or evening.',
            'Water and a light snack for children.',
            'Pick the museum by the children’s interest.',
          ],
          bulletsEn: [
            'Go early morning or evening.',
            'Water and a light snack for children.',
            'Pick the museum by the children’s interest.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Which museum is better for kids?',
          qEn: 'Which museum is better for kids?',
          a: 'Natural History (fossils/animals) or Lok Virsa (crafts) both work.',
          aEn:
            'Natural History (fossils/animals) or Lok Virsa (crafts) both work.',
        }, {
          q: 'Can you bring a stroller?',
          qEn: 'Can you bring a stroller?',
          a: 'Yes, but check the path for the slope.',
          aEn: 'Yes, but check the path for the slope.',
        },
      ],
      related: ['visiting-with-children', 'natural-history-museum', 'lok-virsa-museum', 'two-to-three-hours'],
    },
  },
  {
    slug: 'heritage-half-day',
    group: 'itineraries',
    ur: {
      title: 'ثقافتی آدھا دن',
      titleEn: 'Heritage half-day',
      description:
        'پاکستان مونومنٹ + لوک ورثہ: تاریخ و ثقافت کا آدھا دن شکرپڑیاں کے ساتھ۔',
      descriptionEn:
        'Pakistan Monument + Lok Virsa: a history & culture half-day with Shakarparian.',
      h1: 'ثقافتی آدھا دن: مونومنٹ + لوک ورثہ',
      h1En: 'Heritage half-day: monument + Lok Virsa',
      kicker: 'تاریخ و ثقافت',
      kickerEn: 'History & culture',
      lead: 'یہ روٹ تاریخ اور ثقافت پر مرکوز ہے: پہلے پاکستان مونومنٹ/میوزیم، پھر لوک ورثہ، اور بیچ میں شکرپڑیاں کا نظارہ۔',
      leadEn:
        'This route focuses on history and culture: first the Pakistan Monument/museum, then Lok Virsa, with the Shakarparian view in between.',
      updated: 'آخری جائزہ: 29 اکتوبر 2026',
      updatedEn: 'Last reviewed: 29 October 2026',
      sections: [
        {
          heading: 'آدھے دن کا پلان',
          headingEn: 'The half-day plan',
          body: '60 منٹ پاکستان مونومنٹ میوزیم، 30 منٹ شکرپڑیاں کا نظارہ، 90 منٹ لوک ورثہ میوزیم، اور سفر کا وقفہ۔',
          bodyEn:
            '60 min Pakistan Monument Museum, 30 min Shakarparian view, 90 min Lok Virsa Museum, plus travel time.',
          bullets: [
            'مونومنٹ: قومی علامت و تاریخ',
            'شکرپڑیاں: شہر کا نظارہ',
            'لوک ورثہ: خطوں کے لباس و دستکاری',
          ],
          bulletsEn: [
            'Monument: national symbol & history',
            'Shakarparian: the city view',
            'Lok Virsa: regional costumes & crafts',
          ],
        },
      ],
      faqs: [
        {
          q: 'کیا دونوں میوزیم ایک ہی دورے میں ہیں؟',
          qEn: 'Are both museums in one visit?',
          a: 'ہاں، وہ قریب ہیں، مگر ہر ایک کے اوقات و ٹکٹ الگ سے تصدیق کریں۔',
          aEn:
            'Yes, they are close, but verify each one’s hours and tickets separately.',
        },
        {
          q: 'کیا یہ روایتی سے مختلف ہے؟',
          qEn: 'Is it different from the standard visit?',
          a: 'ہاں، یہ میوزیم/تاریخ پر زیادہ زور دیتا ہے، نہ کہ صرف نظارے پر۔',
          aEn:
            'Yes, it emphasises museums/history rather than just the view.',
        },
      ],
      related: ['museum-comparison', 'pakistan-monument-museum', 'lok-virsa-museum', 'cultural-area-map'],
    },
    en: {
      title: 'Heritage half-day',
      titleEn: 'Heritage half-day',
      description:
        'Pakistan Monument + Lok Virsa: a history & culture half-day with Shakarparian.',
      descriptionEn:
        'Pakistan Monument + Lok Virsa: a history & culture half-day with Shakarparian.',
      h1: 'Heritage half-day: monument + Lok Virsa',
      h1En: 'Heritage half-day: monument + Lok Virsa',
      kicker: 'History & culture',
      kickerEn: 'History & culture',
      lead: 'This route focuses on history and culture: first the Pakistan Monument/museum, then Lok Virsa, with the Shakarparian view in between.',
      leadEn:
        'This route focuses on history and culture: first the Pakistan Monument/museum, then Lok Virsa, with the Shakarparian view in between.',
      updated: 'Last reviewed: 29 October 2026',
      updatedEn: 'Last reviewed: 29 October 2026',
      sections: [
        {
          heading: 'The half-day plan',
          headingEn: 'The half-day plan',
          body: '60 min Pakistan Monument Museum, 30 min Shakarparian view, 90 min Lok Virsa Museum, plus travel time.',
          bodyEn:
            '60 min Pakistan Monument Museum, 30 min Shakarparian view, 90 min Lok Virsa Museum, plus travel time.',
          bullets: [
            'Monument: national symbol & history',
            'Shakarparian: the city view',
            'Lok Virsa: regional costumes & crafts',
          ],
          bulletsEn: [
            'Monument: national symbol & history',
            'Shakarparian: the city view',
            'Lok Virsa: regional costumes & crafts',
          ],
        },
      ],
      faqs: [
        {
          q: 'Are both museums in one visit?',
          qEn: 'Are both museums in one visit?',
          a: 'Yes, they are close, but verify each one’s hours and tickets separately.',
          aEn:
            'Yes, they are close, but verify each one’s hours and tickets separately.',
        }, {
          q: 'Is it different from the standard visit?',
          qEn: 'Is it different from the standard visit?',
          a: 'Yes, it emphasises museums/history rather than just the view.',
          aEn:
            'Yes, it emphasises museums/history rather than just the view.',
        },
      ],
      related: ['museum-comparison', 'pakistan-monument-museum', 'lok-virsa-museum', 'cultural-area-map'],
    },
  },
  {
    slug: 'islamabad-day-trip',
    group: 'itineraries',
    ur: {
      title: 'اسلام آباد کا ایک دن',
      titleEn: 'Islamabad day trip',
      description:
        'شکرپڑیاں کو مرکز بناتے ہوئے اسلام آباد کا ایک دن: نظارہ، عجائب گھر اور شہر۔',
      descriptionEn:
        'An Islamabad day trip starting from Shakarparian: view, museums, and the city.',
      h1: 'شکرپڑیاں سے شروع: اسلام آباد کا ایک دن',
      h1En: 'Islamabad day trip from Shakarparian',
      kicker: 'پورا دن',
      kickerEn: 'Full day',
      lead: 'ایک دن میں شکرپڑیاں کو بیس بنا کر نظارہ، دو عجائب گھر، اور شام کو شہر/آب پارہ شامل کریں۔',
      leadEn:
        'In one day, use Shakarparian as a base for the view, two museums, and an evening in the city/Aabpara.',
      updated: 'آخری جائزہ: 29 اکتوبر 2026',
      updatedEn: 'Last reviewed: 29 October 2026',
      sections: [
        {
          heading: 'ایک دن کا پلان',
          headingEn: 'The day plan',
          body: 'صبح ویو پوائنٹ + مونومنٹ میوزیم، دوپہر لوک ورثہ یا نیچرل ہسٹری، اور شام کو آب پارہ یا قریبی ریستورنٹ۔',
          bodyEn:
            'Morning viewpoint + monument museum, afternoon Lok Virsa or Natural History, evening Aabpara or a nearby restaurant.',
          bullets: [
            'صبح: نظارہ + مونومنٹ',
            'دوپہر: ایک عجائب گھر',
            'شام: شہر/کھانا',
          ],
          bulletsEn: [
            'Morning: view + monument',
            'Afternoon: one museum',
            'Evening: city/food',
          ],
        },
      ],
      faqs: [
        {
          q: 'کیا یہ تھکا دینے والا ہے؟',
          qEn: 'Is it exhausting?',
          a: 'موسم اور سفر کے وقفوں کا نوٹ رکھیں؛ گرمیوں میں دوپہر ہلکی رکھیں۔',
          aEn:
            'Mind the weather and travel breaks; keep afternoons light in summer.',
        },
        {
          q: 'کیا عجائب گھروں کے اوقات ملتے ہیں؟',
          qEn: 'Do museum hours align?',
          a: 'ہر ادارے کے اوقات الگ ہیں؛ پلان بناتے وقت تصدیق کریں۔',
          aEn:
            'Each institution has different hours; verify when planning.',
        },
      ],
      related: ['heritage-half-day', 'family-half-day', 'aabpara-food-stop', 'budget-day-trip'],
    },
    en: {
      title: 'Islamabad day trip',
      titleEn: 'Islamabad day trip',
      description:
        'An Islamabad day trip starting from Shakarparian: view, museums, and the city.',
      descriptionEn:
        'An Islamabad day trip starting from Shakarparian: view, museums, and the city.',
      h1: 'Islamabad day trip from Shakarparian',
      h1En: 'Islamabad day trip from Shakarparian',
      kicker: 'Full day',
      kickerEn: 'Full day',
      lead: 'In one day, use Shakarparian as a base for the view, two museums, and an evening in the city/Aabpara.',
      leadEn:
        'In one day, use Shakarparian as a base for the view, two museums, and an evening in the city/Aabpara.',
      updated: 'Last reviewed: 29 October 2026',
      updatedEn: 'Last reviewed: 29 October 2026',
      sections: [
        {
          heading: 'The day plan',
          headingEn: 'The day plan',
          body: 'Morning viewpoint + monument museum, afternoon Lok Virsa or Natural History, evening Aabpara or a nearby restaurant.',
          bodyEn:
            'Morning viewpoint + monument museum, afternoon Lok Virsa or Natural History, evening Aabpara or a nearby restaurant.',
          bullets: [
            'Morning: view + monument',
            'Afternoon: one museum',
            'Evening: city/food',
          ],
          bulletsEn: [
            'Morning: view + monument',
            'Afternoon: one museum',
            'Evening: city/food',
          ],
        },
      ],
      faqs: [
        {
          q: 'Is it exhausting?',
          qEn: 'Is it exhausting?',
          a: 'Mind the weather and travel breaks; keep afternoons light in summer.',
          aEn:
            'Mind the weather and travel breaks; keep afternoons light in summer.',
        }, {
          q: 'Do museum hours align?',
          qEn: 'Do museum hours align?',
          a: 'Each institution has different hours; verify when planning.',
          aEn:
            'Each institution has different hours; verify when planning.',
        },
      ],
      related: ['heritage-half-day', 'family-half-day', 'aabpara-food-stop', 'budget-day-trip'],
    },
  },
  {
    slug: 'rainy-day-alternatives',
    group: 'itineraries',
    ur: {
      title: 'بارش کے دن متبادل',
      titleEn: 'Rainy-day alternatives',
      description:
        'بارش یا گرمی میں شکرپڑیاں کے بجائے قریبی انڈور عجائب گھر۔',
      descriptionEn:
        'Instead of Shakarparian in rain or heat, nearby indoor museums.',
      h1: 'بارش کے دن: انڈور متبادل',
      h1En: 'Rainy-day alternatives: indoor options',
      kicker: 'موسمی متبادل',
      kickerEn: 'Weather backup',
      lead: 'بارش یا شدید گرمی میں کھلی پہاڑی کے بجائے قریبی انڈور عجائب گھروں کو ترجیح دیں۔',
      leadEn:
        'In rain or extreme heat, prefer nearby indoor museums instead of the open hill.',
      updated: 'آخری جائزہ: 29 اکتوبر 2026',
      updatedEn: 'Last reviewed: 29 October 2026',
      sections: [
        {
          heading: 'انڈور آپشنز',
          headingEn: 'Indoor options',
          body: 'نیچرل ہسٹری میوزیم، لوک ورثہ، اور پاکستان مونومنٹ میوزیم سب قریب ہیں اور بارش کے دن موزوں ہیں — ہر ایک کے اوقات کی تصدیق کریں۔',
          bodyEn:
            'The Natural History Museum, Lok Virsa, and the Pakistan Monument Museum are all nearby and suit rainy days — verify each one’s hours.',
          bullets: [
            'نیچرل ہسٹری: سائنس و جیواشم',
            'لوک ورثہ: ثقافت',
            'مونومنٹ میوزیم: تاریخ',
          ],
          bulletsEn: [
            'Natural History: science & fossils',
            'Lok Virsa: culture',
            'Monument museum: history',
          ],
        },
      ],
      faqs: [
        {
          q: 'کیا پارک بارش میں بند ہوتا ہے؟',
          qEn: 'Does the park close in rain?',
          a: 'ہم نے تصدیق نہیں کی؛ محفوظ رہنے کے لیے انڈور آپشن چنیں۔',
          aEn:
            'We have not verified; for safety choose the indoor option.',
        },
        {
          q: 'کیا یہ بچوں کے لیے موزوں ہے؟',
          qEn: 'Is it good for children?',
          a: 'ہاں، انڈور عجائب گھر بارش کے دن بچوں کے لیے موزوں ہیں۔',
          aEn:
            'Yes, indoor museums suit children on rainy days.',
        },
      ],
      related: ['natural-history-museum', 'lok-virsa-museum', 'pakistan-monument-museum', 'weather-monsoon'],
    },
    en: {
      title: 'Rainy-day alternatives',
      titleEn: 'Rainy-day alternatives',
      description:
        'Instead of Shakarparian in rain or heat, nearby indoor museums.',
      descriptionEn:
        'Instead of Shakarparian in rain or heat, nearby indoor museums.',
      h1: 'Rainy-day alternatives: indoor options',
      h1En: 'Rainy-day alternatives: indoor options',
      kicker: 'Weather backup',
      kickerEn: 'Weather backup',
      lead: 'In rain or extreme heat, prefer nearby indoor museums instead of the open hill.',
      leadEn:
        'In rain or extreme heat, prefer nearby indoor museums instead of the open hill.',
      updated: 'Last reviewed: 29 October 2026',
      updatedEn: 'Last reviewed: 29 October 2026',
      sections: [
        {
          heading: 'Indoor options',
          headingEn: 'Indoor options',
          body: 'The Natural History Museum, Lok Virsa, and the Pakistan Monument Museum are all nearby and suit rainy days — verify each one’s hours.',
          bodyEn:
            'The Natural History Museum, Lok Virsa, and the Pakistan Monument Museum are all nearby and suit rainy days — verify each one’s hours.',
          bullets: [
            'Natural History: science & fossils',
            'Lok Virsa: culture',
            'Monument museum: history',
          ],
          bulletsEn: [
            'Natural History: science & fossils',
            'Lok Virsa: culture',
            'Monument museum: history',
          ],
        },
      ],
      faqs: [
        {
          q: 'Does the park close in rain?',
          qEn: 'Does the park close in rain?',
          a: 'We have not verified; for safety choose the indoor option.',
          aEn:
            'We have not verified; for safety choose the indoor option.',
        }, {
          q: 'Is it good for children?',
          qEn: 'Is it good for children?',
          a: 'Yes, indoor museums suit children on rainy days.',
          aEn:
            'Yes, indoor museums suit children on rainy days.',
        },
      ],
      related: ['natural-history-museum', 'lok-virsa-museum', 'pakistan-monument-museum', 'weather-monsoon'],
    },
  },
  {
    slug: 'senior-friendly-route',
    group: 'itineraries',
    ur: {
      title: 'سینئر فرینڈلی روٹ',
      titleEn: 'Senior-friendly route',
      description:
        'اقدام پذیر اور کم چلنے والے زائرین کے لیے شکرپڑیاں کا روٹ — تصدیق ضروری۔',
      descriptionEn:
        'A low-walking route at Shakarparian for seniors and limited mobility — verify on site.',
      h1: 'کم چلنے والوں کے لیے شکرپڑیاں',
      h1En: 'Shakarparian for limited walking',
      kicker: 'آرام دہ روٹ',
      kickerEn: 'Easy route',
      lead: 'ہم نے وہیل چیئر یا ریمپ کی تصدیق نہیں کی۔ اقدام پذیر زائرین کے لیے پہاڑی ڈھلوان اور رسائی کی سہولت متعلقہ ادارے سے پیشگی تصدیق کریں۔',
      leadEn:
        'We have not verified wheelchair or ramp access. Seniors should confirm the slope and access with the institution beforehand.',
      updated: 'آخری جائزہ: 29 اکتوبر 2026',
      updatedEn: 'Last reviewed: 29 October 2026',
      sections: [
        {
          heading: 'مشورہ',
          headingEn: 'Advice',
          body: 'گاڑی کے قریب ترین رسائی پوائنٹ تلاش کریں، زیادہ چہل قدمی سے گریز کریں، اور سائے والا وقت چنیں۔',
          bodyEn:
            'Find the nearest access point to the car, avoid long walks, and pick a shaded time.',
        },
      ],
      faqs: [
        {
          q: 'کیا وہیل چیئر تک رسائی ہے؟',
          qEn: 'Is there wheelchair access?',
          a: 'ہم نے تصدیق نہیں کی؛ متعلقہ ادارے سے پتہ کریں۔',
          aEn: 'We have not verified; ask the institution.',
        },
        {
          q: 'کیا سیڑھیاں ہیں؟',
          qEn: 'Are there steps?',
          a: 'پہاڑی ہونے کے باعث ممکن ہیں؛ عین راستہ چیک کریں۔',
          aEn: 'Likely on a hill; check the exact route.',
        },
      ],
      related: ['accessibility', 'location-entrances', 'parking', 'visiting-with-children'],
    },
    en: {
      title: 'Senior-friendly route',
      titleEn: 'Senior-friendly route',
      description:
        'A low-walking route at Shakarparian for seniors and limited mobility — verify on site.',
      descriptionEn:
        'A low-walking route at Shakarparian for seniors and limited mobility — verify on site.',
      h1: 'Shakarparian for limited walking',
      h1En: 'Shakarparian for limited walking',
      kicker: 'Easy route',
      kickerEn: 'Easy route',
      lead: 'We have not verified wheelchair or ramp access. Seniors should confirm the slope and access with the institution beforehand.',
      leadEn:
        'We have not verified wheelchair or ramp access. Seniors should confirm the slope and access with the institution beforehand.',
      updated: 'Last reviewed: 29 October 2026',
      updatedEn: 'Last reviewed: 29 October 2026',
      sections: [
        {
          heading: 'Advice',
          headingEn: 'Advice',
          body: 'Find the nearest access point to the car, avoid long walks, and pick a shaded time.',
          bodyEn:
            'Find the nearest access point to the car, avoid long walks, and pick a shaded time.',
        },
      ],
      faqs: [
        {
          q: 'Is there wheelchair access?',
          qEn: 'Is there wheelchair access?',
          a: 'We have not verified; ask the institution.',
          aEn: 'We have not verified; ask the institution.',
        }, {
          q: 'Are there steps?',
          qEn: 'Are there steps?',
          a: 'Likely on a hill; check the exact route.',
          aEn: 'Likely on a hill; check the exact route.',
        },
      ],
      related: ['accessibility', 'location-entrances', 'parking', 'visiting-with-children'],
    },
  },
  {
    slug: 'budget-day-trip',
    group: 'itineraries',
    ur: {
      title: 'بجٹ دورہ',
      titleEn: 'Budget day trip',
      description:
        'کم خرچ خاندانی دورہ: مفت نظارہ، سستا کھانا اور عجائب گھر کی ترجیح۔',
      descriptionEn:
        'A low-cost family trip: free view, cheap food, and museum priorities.',
      h1: 'کم خرچ: شکرپڑیاں کا بجٹ دورہ',
      h1En: 'Budget: a low-cost Shakarparian trip',
      kicker: 'بجٹ',
      kickerEn: 'Budget',
      lead: 'پارک کا کھلا نظارہ عام طور پر مفت ہوتا ہے۔ بجٹ میں رکھیں: مفت نظارہ پہلے، پھر صرف ایک عجائب گھر، اور کھانا قریبی مقامی آپشن سے۔',
      leadEn:
        'The open park view is generally free. To keep a budget: free view first, then only one museum, and local food nearby.',
      updated: 'آخری جائزہ: 29 اکتوبر 2026',
      updatedEn: 'Last reviewed: 29 October 2026',
      sections: [
        {
          heading: 'بجٹ کا پلان',
          headingEn: 'The budget plan',
          body: 'ویو پوائنٹ (مفت)، ایک عجائب گھر (ٹکٹ کی تصدیق کریں)، اور مقامی کھانا۔ غیر ضروری ٹکٹ اور ٹریفک سے بچیں۔',
          bodyEn:
            'Viewpoint (free), one museum (verify ticket), and local food. Avoid extra tickets and traffic.',
          bullets: [
            'نظارہ: مفت',
            'ایک عجائب گھر: منتخب',
            'کھانا: مقامی',
          ],
          bulletsEn: [
            'View: free',
            'One museum: chosen',
            'Food: local',
          ],
        },
      ],
      faqs: [
        {
          q: 'کیا پارک مفت ہے؟',
          qEn: 'Is the park free?',
          a: 'کھلا سبز علاقہ عام طور پر مفت ہے، مگر حتمی پالیسی کی تصدیق کریں۔',
          aEn:
            'The open green area is generally free, but verify the final policy.',
        },
        {
          q: 'کیا ایک دن میں سب مفت ہے؟',
          qEn: 'Is everything free in a day?',
          a: 'نظارہ مفت ہے؛ عجائب گھر کی فیس الگ ہو سکتی ہے۔',
          aEn:
            'The view is free; museum fees may be separate.',
        },
      ],
      related: ['entry-fees', 'aabpara-food-stop', 'islamabad-day-trip', 'one-hour-itinerary'],
    },
    en: {
      title: 'Budget day trip',
      titleEn: 'Budget day trip',
      description:
        'A low-cost family trip: free view, cheap food, and museum priorities.',
      descriptionEn:
        'A low-cost family trip: free view, cheap food, and museum priorities.',
      h1: 'Budget: a low-cost Shakarparian trip',
      h1En: 'Budget: a low-cost Shakarparian trip',
      kicker: 'Budget',
      kickerEn: 'Budget',
      lead: 'The open park view is generally free. To keep a budget: free view first, then only one museum, and local food nearby.',
      leadEn:
        'The open park view is generally free. To keep a budget: free view first, then only one museum, and local food nearby.',
      updated: 'Last reviewed: 29 October 2026',
      updatedEn: 'Last reviewed: 29 October 2026',
      sections: [
        {
          heading: 'The budget plan',
          headingEn: 'The budget plan',
          body: 'Viewpoint (free), one museum (verify ticket), and local food. Avoid extra tickets and traffic.',
          bodyEn:
            'Viewpoint (free), one museum (verify ticket), and local food. Avoid extra tickets and traffic.',
          bullets: [
            'View: free',
            'One museum: chosen',
            'Food: local',
          ],
          bulletsEn: [
            'View: free',
            'One museum: chosen',
            'Food: local',
          ],
        },
      ],
      faqs: [
        {
          q: 'Is the park free?',
          qEn: 'Is the park free?',
          a: 'The open green area is generally free, but verify the final policy.',
          aEn:
            'The open green area is generally free, but verify the final policy.',
        }, {
          q: 'Is everything free in a day?',
          qEn: 'Is everything free in a day?',
          a: 'The view is free; museum fees may be separate.',
          aEn:
            'The view is free; museum fees may be separate.',
        },
      ],
      related: ['entry-fees', 'aabpara-food-stop', 'islamabad-day-trip', 'one-hour-itinerary'],
    },
  },
  {
    slug: 'sunset-photo-route',
    group: 'itineraries',
    ur: {
      title: 'غروب کا فوٹو روٹ',
      titleEn: 'Sunset photo route',
      description:
        'شکرپڑیاں میں غروب اور فوٹوگرافی کا روٹ: بہترین وقت اور زاویے۔',
      descriptionEn:
        'A sunset and photography route at Shakarparian: best time and angles.',
      h1: 'غروب اور فوٹوگرافی: شکرپڑیاں کا روٹ',
      h1En: 'Sunset & photography route at Shakarparian',
      kicker: 'شام کا نظارہ',
      kickerEn: 'Evening view',
      lead: 'غروب کے وقت شہر کی روشنیاں اور مارگلہ کا پس منظر فوٹوگرافرز کے لیے موزوں ہوتا ہے۔',
      leadEn:
        'At sunset the city lights and Margalla backdrop suit photographers.',
      updated: 'آخری جائزہ: 29 اکتوبر 2026',
      updatedEn: 'Last reviewed: 29 October 2026',
      sections: [
        {
          heading: 'روٹ',
          headingEn: 'Route',
          body: 'ویو پوائنٹ پر غروب سے 30 منٹ پہلے پہنچیں، پھر مونومنٹ کی محرابوں کو شامل کریں۔',
          bodyEn:
            'Arrive at the viewpoint 30 min before sunset, then add the monument petals.',
          bullets: [
            'غروب سے پہلے پہنچیں',
            'شہر کا پینوراما',
            'مونومنٹ کی محرابیں',
          ],
          bulletsEn: [
            'Arrive before sunset',
            'City panorama',
            'Monument petals',
          ],
        },
      ],
      faqs: [
        {
          q: 'کیا شام کو بند ہوتا ہے؟',
          qEn: 'Does it close in the evening?',
          a: 'ہم نے اوقات کی تصدیق نہیں کی؛ غروب سے پہلے پہنچیں اور مقامی بورڈ چیک کریں۔',
          aEn:
            'We have not verified hours; arrive before sunset and check local signage.',
        },
        {
          q: 'کیا ٹرائی پاڈ کی اجازت ہے؟',
          qEn: 'Is a tripod allowed?',
          a: 'عام طور پر ہاں، مگر ڈرون کے لیے الگ اجازت درکار ہے۔',
          aEn:
            'Usually yes, but drones need separate permission.',
        },
      ],
      related: ['photo-spots', 'viewpoint', 'one-hour-itinerary', 'two-to-three-hours'],
    },
    en: {
      title: 'Sunset photo route',
      titleEn: 'Sunset photo route',
      description:
        'A sunset and photography route at Shakarparian: best time and angles.',
      descriptionEn:
        'A sunset and photography route at Shakarparian: best time and angles.',
      h1: 'Sunset & photography route at Shakarparian',
      h1En: 'Sunset & photography route at Shakarparian',
      kicker: 'Evening view',
      kickerEn: 'Evening view',
      lead: 'At sunset the city lights and Margalla backdrop suit photographers.',
      leadEn:
        'At sunset the city lights and Margalla backdrop suit photographers.',
      updated: 'Last reviewed: 29 October 2026',
      updatedEn: 'Last reviewed: 29 October 2026',
      sections: [
        {
          heading: 'Route',
          headingEn: 'Route',
          body: 'Arrive at the viewpoint 30 min before sunset, then add the monument petals.',
          bodyEn:
            'Arrive at the viewpoint 30 min before sunset, then add the monument petals.',
          bullets: [
            'Arrive before sunset',
            'City panorama',
            'Monument petals',
          ],
          bulletsEn: [
            'Arrive before sunset',
            'City panorama',
            'Monument petals',
          ],
        },
      ],
      faqs: [
        {
          q: 'Does it close in the evening?',
          qEn: 'Does it close in the evening?',
          a: 'We have not verified hours; arrive before sunset and check local signage.',
          aEn:
            'We have not verified hours; arrive before sunset and check local signage.',
        }, {
          q: 'Is a tripod allowed?',
          qEn: 'Is a tripod allowed?',
          a: 'Usually yes, but drones need separate permission.',
          aEn:
            'Usually yes, but drones need separate permission.',
        },
      ],
      related: ['photo-spots', 'viewpoint', 'one-hour-itinerary', 'two-to-three-hours'],
    },
  },
  {
    slug: 'school-group-guide',
    group: 'itineraries',
    ur: {
      title: 'سکول گروپ گائیڈ',
      titleEn: 'School group guide',
      description:
        'سکول یا تعلیمی گروپ کے لیے شکرپڑیاں: منصوبہ بندی، حفاظت اور عجائب گھر۔',
      descriptionEn:
        'Shakarparian for school or educational groups: planning, safety, and museums.',
      h1: 'سکول گروپ: شکرپڑیاں کا تعلیمی دورہ',
      h1En: 'School groups: an educational Shakarparian visit',
      kicker: 'تعلیمی دورہ',
      kickerEn: 'Educational visit',
      lead: 'سکول گروپس کے لیے پیشگی بکنگ، نگرانی اور محفوظ راستوں کی منصوبہ بندی ضروری ہے۔ ہم نے گروپ کے لیے مخصوص قواعد کی تصدیق نہیں کی۔',
      leadEn:
        'School groups need advance booking, supervision, and safe-route planning. We have not verified group-specific rules.',
      updated: 'آخری جائزہ: 29 اکتوبر 2026',
      updatedEn: 'Last reviewed: 29 October 2026',
      sections: [
        {
          heading: 'منصوبہ بندی',
          headingEn: 'Planning',
          body: 'مقامی ادارے سے گروپ بکنگ اور حفاظتی رہنمائی معلوم کریں۔ نیچرل ہسٹری یا لوک ورثہ کو تعلیمی دورے میں شامل کرنا موزوں ہے۔',
          bodyEn:
            'Ask the local institution about group booking and safety guidance. Adding Natural History or Lok Virsa suits an educational trip.',
        },
        {
          heading: 'حفاظت',
          headingEn: 'Safety',
          body: 'بچوں کے لیے نگرانی، پانی اور سائے کا انتظام کریں، اور پہاڑی ڈھلوان سے بچیں۔',
          bodyEn:
            'Arrange supervision, water, and shade for children, and avoid the sloped hill sections.',
        },
      ],
      faqs: [
        {
          q: 'کیا گروپ بکنگ ضروری ہے؟',
          qEn: 'Is group booking needed?',
          a: 'ممکن ہے؛ متعلقہ ادارے سے پتہ کریں۔',
          aEn: 'Likely; ask the institution.',
        },
        {
          q: 'کون سا عجائب گھر موزوں ہے؟',
          qEn: 'Which museum is suitable?',
          a: 'نیچرل ہسٹری یا لوک ورثہ تعلیمی دورے کے لیے موزوں ہیں۔',
          aEn:
            'Natural History or Lok Virsa suit an educational trip.',
        },
      ],
      related: ['natural-history-museum', 'lok-virsa-museum', 'visiting-with-children', 'family-half-day'],
    },
    en: {
      title: 'School group guide',
      titleEn: 'School group guide',
      description:
        'Shakarparian for school or educational groups: planning, safety, and museums.',
      descriptionEn:
        'Shakarparian for school or educational groups: planning, safety, and museums.',
      h1: 'School groups: an educational Shakarparian visit',
      h1En: 'School groups: an educational Shakarparian visit',
      kicker: 'Educational visit',
      kickerEn: 'Educational visit',
      lead: 'School groups need advance booking, supervision, and safe-route planning. We have not verified group-specific rules.',
      leadEn:
        'School groups need advance booking, supervision, and safe-route planning. We have not verified group-specific rules.',
      updated: 'Last reviewed: 29 October 2026',
      updatedEn: 'Last reviewed: 29 October 2026',
      sections: [
        {
          heading: 'Planning',
          headingEn: 'Planning',
          body: 'Ask the local institution about group booking and safety guidance. Adding Natural History or Lok Virsa suits an educational trip.',
          bodyEn:
            'Ask the local institution about group booking and safety guidance. Adding Natural History or Lok Virsa suits an educational trip.',
        },
        {
          heading: 'Safety',
          headingEn: 'Safety',
          body: 'Arrange supervision, water, and shade for children, and avoid the sloped hill sections.',
          bodyEn:
            'Arrange supervision, water, and shade for children, and avoid the sloped hill sections.',
        },
      ],
      faqs: [
        {
          q: 'Is group booking needed?',
          qEn: 'Is group booking needed?',
          a: 'Likely; ask the institution.',
          aEn: 'Likely; ask the institution.',
        }, {
          q: 'Which museum is suitable?',
          qEn: 'Which museum is suitable?',
          a: 'Natural History or Lok Virsa suit an educational trip.',
          aEn:
            'Natural History or Lok Virsa suit an educational trip.',
        },
      ],
      related: ['natural-history-museum', 'lok-virsa-museum', 'visiting-with-children', 'family-half-day'],
    },
  },
];

/** موضوع تلاش کریں */
export function getTopic(slug: string): Topic | undefined {
  return TOPICS.find((t) => t.slug === slug);
}

/** تمام سلگز */
export function topicSlugs(): string[] {
  return TOPICS.map((t) => t.slug);
}

/** ایک زبان کے لیے گروپ وار موضوعات */
export function topicsByGroup(locale: TopicLocale): { group: TopicGroup; label: string; items: { slug: string; title: string }[] }[] {
  return TOPIC_GROUP_ORDER.map((group) => ({
    group,
    label: TOPIC_GROUP_LABELS[group][locale],
    items: TOPICS.filter((t) => t.group === group).map((t) => ({
      slug: t.slug,
      title: locale === 'en' ? t.en.title : t.ur.title,
    })),
  }));
}
