const coreAssets = [
    'style.css',
    'place.js',
    'home.js',
    'imgs/placeholder.jpeg',
];

self.addEventListener('install', function (event) {
    
    self.skipWaiting();

    event.waitUntil(caches.open('core').then(function (cache) {
        for (let asset of coreAssets) {
            cache.add(new Request(asset));
        }
        return cache;
    }));

    event.waitUntil(caches.open('pages').then(function (cache) {
        cache.add(new Request('offline.html'));
        return cache;
    }));
});

self.addEventListener('fetch', function (event) {
    let request = event.request;

    // Bug fix
	// https://stackoverflow.com/a/49719964
    if (event.request.cache === 'only-if-cached' && event.request.mode !== 'same-origin') return;
    
    //network first
    if (request.headers.get('Accept').includes('text/html')) {
        event.respondWith(
            fetch(request).then(function (response) {
                let copy = response.clone();
                event.waitUntil(caches.open('pages').then(function (cache) {
                    return cache.put(request, copy);
                }));
                return response;
            }).catch(function (error) {
                return caches.match(request).then(function (response) {
                    return response || caches.match('offline.html');
                });
            })
        )
    }

    // Offline first
    if (request.headers.get('Accept').includes('image')) {
        event.respondWith(
            caches.match(request).then(function (response) {
                return response || fetch(request).then(function (response) {

                    let copy = response.clone();
                    event.waitUntil(caches.open('img').then(function (cache) {
                        return cache.put(request, copy);
                    }));

                    return response;

                });
            })
        );
    }
    // Offline first
    if (request.headers.get('Accept').includes('text/css') || 
    request.headers.get('Accept').includes('text/javascript')) {
        event.respondWith(
            caches.match(request).then(function (response) {
                return response || fetch(request).then(function (response) {
                    return response;
                });
            })
        );
    }
});