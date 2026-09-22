import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../dist/', import.meta.url));
const forbidden = ['example' + '.com', 'local' + 'host', 'chrome-' + 'extension://'];
let failures = [];

async function walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) await walk(full);
    else if (/\.(html|xml|js|css|json|txt)$/i.test(entry.name)) {
      const text = await readFile(full, 'utf8');
      for (const needle of forbidden) {
        if (text.includes(needle)) failures.push(`${full}: ${needle}`);
      }
      if (entry.name.includes('sitemap') && /<lastmod>/i.test(text)) {
        failures.push(`${full}: unexpected <lastmod>`);
      }
    }
  }
}

try {
  await walk(root);
} catch (error) {
  console.error('dist ڈائریکٹری دستیاب نہیں۔ پہلے pnpm build چلائیں۔');
  process.exit(1);
}

if (failures.length) {
  console.error('تصدیقی جانچ ناکام:');
  console.error(failures.join('\n'));
  process.exit(1);
}
console.log('dist جانچ کامیاب: ممنوع placeholder، chrome-extension یا مصنوعی lastmod نہیں ملا۔');
