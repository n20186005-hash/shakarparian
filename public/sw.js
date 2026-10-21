// Retire the previous cache so old consent and visitor pages are not retained.
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith('shakarparian-')).map(key=>caches.delete(key)))).then(()=>self.registration.unregister())));
