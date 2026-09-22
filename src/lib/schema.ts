import { ATTRACTION, CDA_URL, GOVT_TOURISM_URL, SITE_URL } from '../data/site';

/** نالج گراف میں اس مقام کا مستقل اینکر */
export const ATTRACTION_ID = `${SITE_URL}/#attraction`;

type Faq = readonly [question: string, answer: string];

/**
 * TouristAttraction (+ LocalBusiness) JSON-LD۔
 * مقام کا نام، متبادل نام، پتہ، متناسقات، نقشہ، تصاویر اور سرکاری حوالے ایک ہی نodet میں باندھتا ہے۔
 */
export function buildAttractionSchema(options: { url: string; images: string[] }) {
  const { url, images } = options;
  return {
    '@context': 'https://schema.org',
    '@type': ['TouristAttraction', 'LocalBusiness'],
    '@id': ATTRACTION_ID,
    name: ATTRACTION.fullName,
    alternateName: [
      ATTRACTION.fullNameLatin,
      ATTRACTION.shortName,
      ATTRACTION.shortNameLatin,
      `${ATTRACTION.cityLatin} ${ATTRACTION.fullNameLatin}`,
    ],
    description:
      'اسلام آباد کی شکرپڑیاں پہاڑیوں پر واقع سبز تفریحی علاقہ، جہاں سے شہر کے وسیع مناظر، ریاستی شجرکاری کی روایت اور پاکستان مونومنٹ کے ثقافتی مقامات تک رسائی ملتی ہے۔',
    url,
    image: images,
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${ATTRACTION.streetAddressLatin} / ${ATTRACTION.streetAddress}`,
      addressLocality: ATTRACTION.cityLatin,
      addressRegion: ATTRACTION.regionLatin,
      postalCode: ATTRACTION.postalCode,
      addressCountry: ATTRACTION.countryCode,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: ATTRACTION.latitude,
      longitude: ATTRACTION.longitude,
    },
    hasMap: ATTRACTION.mapsShareUrl,
    sameAs: [ATTRACTION.mapsShareUrl, CDA_URL, GOVT_TOURISM_URL],
    isAccessibleForFree: ATTRACTION.isAccessibleForFree,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: ATTRACTION.ratingValue,
      ratingCount: ATTRACTION.ratingCount,
      bestRating: '5',
    },
    openingHoursSpecification: ATTRACTION.openingHoursSpecification,
  };
}

/** سوالات کے جوابات کا FAQPage JSON-LD */
export function buildFaqSchema(faqs: readonly Faq[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(([name, text]) => ({
      '@type': 'Question',
      name,
      acceptedAnswer: { '@type': 'Answer', text },
    })),
  };
}

/**
 * مقام → شہر → علاقہ → ملک کی درجہ بندی کا BreadcrumbList JSON-LD۔
 * ذیلی صفحات کے لیے اختیاری `terminal` (موجودہ صفحہ کا نام + رومن نام + مکمل یو آر ایل) دیں؛
 * بغیر terminal کے آخری کرما مقام (ہوم) خود موجودہ صفحہ ہوگا۔
 */
export function buildBreadcrumbSchema(terminalUrl: string, terminal?: { name: string; nameLatin: string }) {
  const trail = [
    { name: ATTRACTION.country, nameLatin: ATTRACTION.countryLatin, item: undefined as string | undefined },
    { name: ATTRACTION.region, nameLatin: ATTRACTION.regionLatin, item: undefined as string | undefined },
    { name: ATTRACTION.city, nameLatin: ATTRACTION.cityLatin, item: undefined as string | undefined },
    { name: ATTRACTION.fullName, nameLatin: ATTRACTION.fullNameLatin, item: `${SITE_URL}/` },
  ];
  if (terminal) {
    trail.push({ name: terminal.name, nameLatin: terminal.nameLatin, item: terminalUrl });
  }
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((step, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: `${step.name} (${step.nameLatin})`,
      ...(step.item ? { item: step.item } : {}),
    })),
  };
}
