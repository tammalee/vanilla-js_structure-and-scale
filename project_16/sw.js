const coreAssets = [
    'style.css',
    'place.js',
    'home.js',
    'imgs/placeholder.jpeg',
    'index.html'
];

self.addEventListener('install', function (event) {
    
    self.skipWaiting();

    event.waitUntil(caches.open('app').then(function (cache) {
        cache.add(new Request('offline.html'));
        for (let asset of coreAssets) {
            cache.add(new Request(asset));
        }
        return cache;
    }));
});

self.addEventListener('fetch', function (event) {
    let request = event.request;

    // Bug fix
    // https://stackoverflow.com/a/49719964
    if (event.request.cache === 'only-if-cached' && event.request.mode !== 'same-origin') return;
    
    // Network first
    if (request.headers.get('Accept').includes('text/html') ||
        request.headers.get('Accept').includes('text/css')) {
        event.respondWith(
            fetch(request).then(function (response) {
                return response;
            }).catch(function (error) {
                return caches.match(request).then(function (response) {
                    return response;
                });
            })
        )
    }

    // Offline first
    // Serves up a kitten if the image isn't cached
    if (request.headers.get('Accept').includes('image')) {
        event.respondWith(
            caches.match(request).then(function (response) {
                return response || fetch(request).then(function (response) {
                    return response;
                }).catch(function (error) {
                    return caches.match('imgs/placeholder.jpeg');
                });
            })
        );
    }
});