/**
 * مقام (Entity) سے متعلق تمام حقائق کا واحد ماخذ۔
 * نام، پتہ، متناسقات، نقشہ، درجہ بندی اور سرکاری حوالے صرف یہیں تبدیل کریں؛
 * صفحات اور JSON-LD سب اسی فائل سے پڑھتے ہیں۔
 */

export const DOMAIN_NAME = 'shakarparian.com';
export const SITE_URL = `https://${DOMAIN_NAME}`;

/** SEO کے لیے مستقل سائٹ نام: مقام کا نام + شہر + رہنما */
export const SITE_NAME = 'شکرپڑیاں نیشنل پارک اسلام آباد — سیاحتی رہنما';

/** ذیلی صفحات کے عنوان میں سائٹ نام کا لاحقہ جوڑنے کا معاون فنکشن */
export function withSiteName(suffix: string): string {
  return `${suffix} | ${SITE_NAME}`;
}

/** انگریزی سائٹ نام (hreflang=en صفحات کے لیے) */
export const SITE_NAME_EN = 'Shakarparian National Park, Islamabad — Visitor Guide';
export function withSiteNameEn(suffix: string): string {
  return `${suffix} | ${SITE_NAME_EN}`;
}

export const ATTRACTION = {
  /** سرکاری/مکمل نام — JSON-LD، H1 اور TDK میں استعمال */
  fullName: 'شکرپڑیاں نیشنل پارک',
  fullNameLatin: 'Shakarparian National Park',
  /** عام استعمال کا مختصر نام (ڈومین کا مطلب) */
  shortName: 'شکرپڑیاں',
  shortNameLatin: 'Shakarparian',
  city: 'اسلام آباد',
  cityLatin: 'Islamabad',
  region: 'اسلام آباد کیپیٹل ٹیریٹری',
  regionLatin: 'Islamabad Capital Territory',
  country: 'پاکستان',
  countryLatin: 'Pakistan',
  countryCode: 'PK',
  postalCode: '44000',
  streetAddress: 'اسلام آباد ایکسپریس وے',
  streetAddressLatin: 'Islamabad Expy',
  latitude: 33.6899848,
  longitude: 73.0936709,
  pinReference: '33.6899848, 73.0936709',
  ratingValue: '4.5',
  ratingCount: 45468,
  ratingCountLabel: '45,468',
  mapsShareUrl: 'https://maps.app.goo.gl/hYAhHXWvMuAaiCx17',
  mapsEmbedSrc: 'https://maps.google.com/maps?q=33.6899848,73.0936709&z=14&output=embed',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Thursday', 'Saturday', 'Sunday'],
      opens: '09:30',
      closes: '20:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Wednesday', 'Friday'],
      opens: '09:30',
      closes: '20:30',
    },
  ],
} as const;

/** ارد گرد کے بنیادی نشانات — سیمینٹک کلسٹر اور JSON-LD دونوں میں استعمال */
export const NEARBY_LANDMARKS = [
  {
    name: 'پاکستان مونومنٹ',
    nameLatin: 'Pakistan Monument',
    note: 'شکرپڑیاں کی مغربی پہاڑی پر قومی وحدت کی علامتی یادگار۔',
  },
  {
    name: 'لوک ورثہ میوزیم',
    nameLatin: 'Lok Virsa Museum',
    note: 'پاکستان کی زندہ ثقافتوں، دستکاری اور علاقائی روایتوں کا قریبی مجموعہ۔',
  },
] as const;

/** سرکاری/ادارہ جاتی حوالے — E-E-A-T اور بااختیار آؤٹ باؤنڈ لنکس */
export const OFFICIAL_SOURCES = [
  {
    label: 'کیپیٹل ڈویلپمنٹ اتھارٹی — اسلام آباد کے مقامات / شکرپڑیاں',
    labelEn: 'Capital Development Authority — Islamabad destinations / Shakarparian',
    href: 'https://cda.gov.pk/destination',
  },
  {
    label: 'کیپیٹل ڈویلپمنٹ اتھارٹی — پبلک ٹرانزٹ روٹ نقشہ',
    labelEn: 'Capital Development Authority — public transit route map',
    href: 'https://ftp.cda.gov.pk/cdaTransitMap',
  },
  {
    label: 'لوک ورثہ — ہیریٹیج میوزیم اور پاکستان مونومنٹ میوزیم',
    labelEn: 'Lok Virsa — Heritage Museum and Pakistan Monument Museum',
    href: 'https://lokvirsa.org.pk/',
  },
  {
    label: 'پاکستان ٹورازم ڈویلپمنٹ کارپوریشن — سرکاری سیاحتی پورٹل',
    labelEn: 'Pakistan Tourism Development Corporation — official tourism portal',
    href: 'https://tourism.gov.pk/',
  },
  {
    label: 'گوگل میپس — شکرپڑیاں نیشنل پارک کی عوامی فہرست (مقام، درجہ بندی، اوقات)',
    labelEn: 'Google Maps — public listing of Shakarparian National Park (location, rating, hours)',
    href: 'https://maps.app.goo.gl/hYAhHXWvMuAaiCx17',
  },
] as const;

/** حکومتی/سرکاری سیاحتی لنک — JSON-LD sameAs اور نقشے کے بلاک میں استعمال */
export const GOVT_TOURISM_URL = 'https://tourism.gov.pk/';
export const CDA_URL = 'https://cda.gov.pk/destination';
