self.addEventListener('install', function (event) {
    
    self.skipWaiting();

    event.waitUntil(caches.open('app').then(function (cache) {
        cache.add(new Request('offline.html'));
        return cache;
    }));
});