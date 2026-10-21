import { ATTRACTION, SITE_URL } from '../data/site';

/** نالج گراف میں اس مقام کا مستقل اینکر */
export const ATTRACTION_ID = `${SITE_URL}/#attraction`;

type Faq = readonly [question: string, answer: string];

/**
 * TouristAttraction JSON-LD۔
 * مقام کا نام، متبادل نام، پتہ، متناسقات، نقشہ، تصاویر اور سرکاری حوالے ایک ہی نodet میں باندھتا ہے۔
 */
export function buildAttractionSchema(options: { url: string; images: string[] }) {
  const { url, images } = options;
  const en = new URL(url).pathname.startsWith('/en/');
  return {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    '@id': ATTRACTION_ID,
    name: en ? ATTRACTION.fullNameLatin : ATTRACTION.fullName,
    alternateName: [
      ATTRACTION.fullNameLatin,
      ATTRACTION.shortName,
      ATTRACTION.shortNameLatin,
      `${ATTRACTION.cityLatin} ${ATTRACTION.fullNameLatin}`,
    ],
    description:
      'اسلام آباد کی شکرپڑیاں پہاڑیوں پر واقع سبز تفریحی علاقہ، جہاں سے شہر کے وسیع مناظر، ریاستی شجرکاری کی روایت اور پاکستان مونومنٹ کے ثقافتی مقامات تک رسائی ملتی ہے۔',
    url,
    image: images.map((image) => new URL(image, SITE_URL).href),
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
    sameAs: [ATTRACTION.mapsShareUrl],
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
  const trail: { name: string; nameLatin: string; item: string | undefined }[] = [
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
