# شکرپڑیاں اسلام آباد — غیر سرکاری معلوماتی رہنما

Astro + Tailwind CSS + TypeScript پر بنا ایک غیر منافع بخش، اردو، single-attraction visitor guide۔ Cloudflare Workers static assets کے لیے تیار کیا گیا ہے۔

## ٹیکنالوجی
- Astro 7.2.6
- Tailwind CSS 4.3.3 + @tailwindcss/vite 4.3.3
- TypeScript 5.9.3
- @astrojs/check 0.9.10
- @astrojs/sitemap 3.7.3
- Wrangler 4.125.0
- Node.js 24.19.0
- pnpm 11.23.0

تمام versions `package.json` میں exact ہیں۔

## ڈومین
`astro.config.ts` میں `SITE_URL` واحد public-site configuration ہے۔ اسے خالی چھوڑنے پر build چلنا چاہیے، canonical absolute URL omit ہو جاتا ہے اور sitemap integration load نہیں ہوتی۔ حقیقی ڈومین ملنے پر صرف اسی constant کو بھریں۔

## مقامی ترقی
```bash
corepack enable
CI=1 corepack pnpm install --frozen-lockfile
pnpm check
pnpm build
pnpm verify:dist
```

## Cloudflare Workers
```bash
pnpm deploy
```
`wrangler.jsonc` صرف static assets (`dist`) deploy کرتا ہے؛ database، login یا CMS شامل نہیں۔

## تصاویر
وزیٹر تصاویر Wikimedia Commons کی CC BY-SA 4.0 تصاویر ہیں۔ تفصیل `public/images/README.md` میں ہے۔ Logo اور favicon مقامی assets ہیں۔

## اداریاتی اصول
- تجارتی اداروں کی سفارش نہیں کی جاتی۔
- بدلنے والی معلومات (اوقات، فیس، ٹرانسپورٹ) کو روانگی سے پہلے متعلقہ سرکاری/آپریٹنگ ذریعے سے verify کرنے کی ہدایت ہے۔
- بنیادی ماخذ: Capital Development Authority (CDA)، Islamabad Capital Territory Administration (ICTA)، Pakistan Tourism Development Corporation (PTDC)، Department of Archaeology & Museums / Lok Virsa، اور مقام/اوقات کے لیے Google Maps listing۔
