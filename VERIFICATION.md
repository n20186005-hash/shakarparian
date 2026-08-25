# انجینئرنگ تصدیق کی حالت

## مکمل شدہ جامد جانچ
- `package.json` میں تمام براہِ راست dependency versions exact ہیں؛ floating range، `latest` یا `*` نہیں۔
- `packageManager` = `pnpm@11.23.0` اور `.node-version` / `engines.node` = `24.19.0`۔
- single-package project ہے؛ `pnpm-workspace.yaml` جان بوجھ کر موجود نہیں۔
- سائٹ کا public URL صرف `astro.config.ts` کے `SITE_URL` میں مقرر ہوتا ہے؛ خالی حالت supported ہے۔
- sitemap integration صرف حقیقی `SITE_URL` ہونے پر فعال ہوتی ہے؛ handwritten sitemap یا `lastmod` نہیں۔
- source scan میں فرضی domain strings، browser-extension scheme، غیر متعلقہ شہر/placeholder متن یا غیر اردو UI متن نہیں ملا۔
- Google Maps embed کو `ur` + `PK` locale پر تبدیل کیا گیا ہے۔
- GA4 شناخت `G-HXM22WWPKP` صرف user consent کے بعد load ہونے والے code میں موجود ہے۔
- Privacy، Terms اور Cookie Settings الگ URLs ہیں؛ modal نہیں۔

## اس runtime میں نہ چل سکنے والی clean-install جانچ
مطلوبہ command واقعی چلائی گئی:

```bash
rm -rf node_modules dist .astro
CI=1 corepack pnpm install --frozen-lockfile
```

موجودہ sandbox میں DNS/outbound package-registry access بند ہے۔ Corepack، `pnpm@11.23.0` حاصل کرتے وقت `getaddrinfo EAI_AGAIN registry.npmjs.org` پر رک گیا؛ dependency installation شروع ہی نہیں ہو سکی۔ اس کے بعد `pnpm check` اور `pnpm build` کو معتبر طور پر چلانا ممکن نہیں تھا۔

یہ فائل اس لیے شامل ہے تاکہ کوئی جھوٹا “build passed” دعویٰ نہ ہو۔ نیٹ ورک والے Node 24.19.0 ماحول میں lockfile کو مکمل resolve کر کے دوبارہ `--frozen-lockfile` clean run کرنا ضروری ہے۔ موجودہ `pnpm-lock.yaml` importer/version pin محفوظ کرتا ہے، مگر sandbox network restriction کی وجہ سے transitive package snapshots generate نہیں ہو سکے۔

## نیٹ ورک والے ماحول میں لازمی آخری run
```bash
corepack enable
rm -rf node_modules
corepack pnpm install --no-frozen-lockfile
rm -rf node_modules
CI=1 corepack pnpm install --frozen-lockfile
pnpm check
pnpm build
pnpm verify:dist
```

پہلی non-frozen install صرف مکمل transitive lockfile تیار کرنے کے لیے ہے؛ اس کے بعد اسی lockfile کے ساتھ frozen install لازماً کامیاب ہونا چاہیے۔
