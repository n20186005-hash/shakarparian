/* Shakarparian guide — PWA service worker
   - صفحات: network-first (تازہ معلومات ترجیح)، آف لائن پر کیش شدہ صفحہ
   - جامد اثاثے: cache-first */

const CACHE_NAME = 'shakarparian-v1';
const PRECACHE = [
  '/',
  '/site.webmanifest',
  '/brand/favicon.svg',
  '/brand/apple-touch-icon.png',
  '/brand/icon-192.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE))
      .catch(() => undefined)
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches
            .open(CACHE_NAME)
            .then((cache) => cache.put(request, copy))
            .catch(() => undefined);
          return response;
        })
        .catch(() =>
          caches
            .match(request)
            .then((cached) => cached || caches.match('/'))
            .then((fallback) => fallback || Response.error())
        )
    );
    return;
  }

  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached;
      return fetch(request).then((response) => {
        if (response && response.ok && response.type === 'basic') {
          const copy = response.clone();
          caches
            .open(CACHE_NAME)
            .then((cache) => cache.put(request, copy))
            .catch(() => undefined);
        }
        return response;
      });
    })
  );
});
