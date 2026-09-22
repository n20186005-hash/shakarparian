const fs = require('fs');
const path = require('path');
const dist = 'dist';

function read(p) {
  try { return fs.readFileSync(path.join(dist, p), 'utf8'); } catch { return null; }
}

const pages = [
  'index.html', 'pakistan-monument/index.html', 'opening-hours/index.html', 'things-to-do/index.html', 'getting-there/index.html',
  'privacy/index.html', 'terms/index.html', 'cookies/index.html',
  'en/index.html', 'en/pakistan-monument/index.html', 'en/opening-hours/index.html', 'en/things-to-do/index.html', 'en/getting-there/index.html',
  'en/privacy/index.html', 'en/terms/index.html', 'en/cookies/index.html',
];

console.log('=== Built pages present ===');
for (const p of pages) console.log((read(p) ? 'OK   ' : 'MISS ') + p);

function analyze(p) {
  const h = read(p);
  if (!h) return;
  const htmlLang = (h.match(/<html lang="([^"]*)" dir="([^"]*)"/) || [])[1] || '?';
  const htmlDir = (h.match(/<html lang="[^"]*" dir="([^"]*)"/) || [])[1] || '?';
  const canonical = (h.match(/rel="canonical" href="([^"]*)"/) || [])[1] || '?';
  const hreflangs = [...h.matchAll(/rel="alternate" hreflang="([^"]*)" href="([^"]*)"/g)].map(m => `${m[1]}->${m[2]}`);
  const ogLocale = (h.match(/property="og:locale" content="([^"]*)"/) || [])[1] || '?';
  console.log(`\n--- ${p} ---`);
  console.log('html lang/dir:', htmlLang, htmlDir);
  console.log('canonical   :', canonical);
  console.log('og:locale   :', ogLocale);
  console.log('hreflangs   :', hreflangs.join(' | '));
}

console.log('\n=== Sample page analysis ===');
analyze('index.html');
analyze('en/index.html');
analyze('pakistan-monument/index.html');
analyze('en/pakistan-monument/index.html');

console.log('\n=== Sitemap en coverage ===');
const sm0 = read('sitemap-0.xml') || '';
const hasEn = (sm0.match(/\/en\//g) || []).length;
console.log('en URLs in sitemap-0:', hasEn);
