import { SITE_URL } from './data/site';

export type Locale = 'ur' | 'en';
export const locales: Locale[] = ['ur', 'en'];
export const defaultLocale: Locale = 'ur';

/** صفحے کے یو آر ایل سے زبان کا تعین کریں (انگریزی صفحات /en/ سے شروع ہوتے ہیں) */
export function localeFromUrl(url: URL): Locale {
  return url.pathname.replace(/\/$/, '').startsWith('/en') ? 'en' : 'ur';
}

/** موجودہ مقامی راستے کو دوسری زبان میں تبدیل کریں (زبان سوئچر کے لیے) */
export function localizedPath(pathname: string, locale: Locale): string {
  const clean = pathname.replace(/\/$/, '') || '/';
  const neutral = clean.replace(/^\/en/, '') || '/';
  if (locale === 'en') return neutral === '/' ? '/en/' : `/en${neutral}/`;
  return neutral === '/' ? '/' : `${neutral}/`;
}

/** hreflang کے متبادل لنکس (ur, en, x-default) — اردو کو x-default بنایا گیا ہے */
export function hreflangAlternates(pathname: string): { hreflang: string; href: string }[] {
  const clean = pathname.replace(/\/$/, '') || '/';
  const neutral = clean.replace(/^\/en/, '') || '/';
  const ur = neutral === '/' ? `${SITE_URL}/` : `${SITE_URL}${neutral}/`;
  const en = neutral === '/' ? `${SITE_URL}/en/` : `${SITE_URL}/en${neutral}/`;
  return [
    { hreflang: 'ur', href: ur },
    { hreflang: 'en', href: en },
    { hreflang: 'x-default', href: ur },
  ];
}
