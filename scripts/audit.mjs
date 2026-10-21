import {readFileSync,readdirSync,existsSync,statSync} from 'node:fs';
import assert from 'node:assert/strict';
import {join} from 'node:path';
const walk=p=>readdirSync(p).flatMap(n=>statSync(join(p,n)).isDirectory()?walk(join(p,n)):[join(p,n)]);
const pages=walk('dist').filter(p=>p.endsWith('.html'));
const plain=s=>s.replace(/<[^>]*>/g,' ').replace(/&amp;/g,'&').replace(/&#39;/g,"'").replace(/&quot;/g,'"').replace(/\s+/g,' ').trim();
let faqCount=0;
for(const p of pages){
 const s=readFileSync(p,'utf8');
 assert.equal((s.match(/<h1(?:\s|>)/g)||[]).length,1,p+' H1');
 assert.match(s,/<title>[^<]+<\/title>/,p+' title');
 assert.match(s,/<meta name="description" content="[^"]+"/,p+' description');
 assert.match(s,/<link rel="canonical" href="https:\/\/shakarparian.com\//,p+' canonical');
 assert(!s.includes('/undefined/'),p+' undefined links');
 assert(!/Shakar_Parian|Irfa9mahmood|doam.gov.pk|api.open-meteo|\/Users\//.test(s),p+' stale or private references');
 if(!p.endsWith('404.html'))for(const lang of ['ur','en','x-default'])assert(s.includes(`hreflang="${lang}"`),p+' hreflang');
 else assert(s.includes('noindex'),p+' noindex');
 for(const match of s.matchAll(/(?:href|src)="(\/[^"#?]*)(?:[^\"]*)"/g)){
  const target='dist'+match[1];assert(existsSync(target)||existsSync(target+'/index.html'),p+' missing '+match[1]);
 }
 for(const image of ['03','05'])assert(s.includes('https://commons.wikimedia.org/wiki/File:Pakistan_Islamabad_monument_'+image+'.jpg'),p+' photo source');
 assert(s.includes('https://creativecommons.org/licenses/by-sa/4.0/'),p+' licence');
 for(const m of s.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)){
  const schema=JSON.parse(m[1]);assert(!schema.aggregateRating&&!schema.openingHoursSpecification&&schema.isAccessibleForFree===undefined,p+' unsupported schema');
  if(schema['@type']==='FAQPage'){
   const details=[...s.matchAll(/<details[^>]*>\s*<summary[^>]*>([\s\S]*?)<\/summary>\s*<p[^>]*>([\s\S]*?)<\/p>\s*<\/details>/g)].map(m=>[plain(m[1]),plain(m[2])]);
   assert.deepEqual(details,schema.mainEntity.map(x=>[plain(x.name),plain(x.acceptedAnswer.text)]),p+' FAQ text');faqCount+=details.length;
  }
 }
}
const map=readFileSync('dist/sitemap-0.xml','utf8');assert.equal((map.match(/<loc>/g)||[]).length,16);assert(!map.includes('404'));assert.equal(pages.length,17);
console.log(`PASS ${pages.length} pages;16 original sitemap routes; metadata, local references, photo credits, structured facts and ${faqCount} exact FAQ pairs.`);
