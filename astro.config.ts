import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// پورے منصوبے میں عوامی ڈومین صرف یہیں مقرر کریں۔
// فرضی یا مقامی ترقیاتی ڈومین مت لکھیں؛ حقیقی ڈومین ملنے تک خالی رہنے دیں۔
const SITE_URL = 'https://shakarparian.com';

export default defineConfig({
  site: SITE_URL || undefined,
  output: 'static',
  integrations: SITE_URL ? [sitemap()] : [],
  vite: {
    plugins: [tailwindcss()],
  },
});
