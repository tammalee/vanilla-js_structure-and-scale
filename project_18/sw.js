// Version
import { coreId, pageId, imgId } from './config.js';

// Cache Ids

const cacheIds = [coreId, pageId, imgId];

const coreAssets = [
    'style.css',
    'place.js',
    'home.js',
    'imgs/placeholder.jpeg',
];

const limits = {
    pages: 3,
    imgs: 2
};

/**
 * Removed cached items over the number set in limits
 * @param {String} key The cache key
 * @param {Integer} max The max number of items allowed
 */
function trimCache (key, max) {
	caches.open(key).then(function (cache) {
		cache.keys().then(function (keys) {
			if (keys.length <= max) return;
			cache.delete(keys[0]).then(function () {
				trimCache(key, max);
			});
		});
	});
}

self.addEventListener('install', function (event) {
    
    self.skipWaiting();

    event.waitUntil(caches.open(coreId).then(function (cache) {
        for (let asset of coreAssets) {
            cache.add(new Request(asset));
        }
        return cache;
    }));

    event.waitUntil(caches.open(pageId).then(function (cache) {
        cache.add(new Request('offline.html'));
        return cache;
    }));
});

self.addEventListener('activate', function (event) {
    event.waitUntil(caches.keys().then(function (keys) {

        // Get the keys of the caches to remove
        const keysToRemove = keys.filter(function (key) {
            return !cacheIds.includes(key);
        });

        // Delete each cache not in cacheIds
        const removed = keysToRemove.map(function (key) {
            return caches.delete(key);
        });

        return Promise.all(removed);

    }).then(function () {
        return self.clients.claim();
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
                event.waitUntil(caches.open(pageId).then(function (cache) {
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
                    if (request.headers.get('Accept').includes('image')) {
                        let copy = response.clone();
                        event.waitUntil(caches.open(imgId).then(function (cache) {
                            return cache.put(request, copy);
                        }));    
                    }
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

// Trim caches over a certain size
self.addEventListener('message', function (event) {

	// Make sure the event was from a trusted site
	// if (event.origin !== 'https://your-awesome-website.com') return;

	// Only run on cleanUp messages
	if (event.data !== 'cleanUp') return;

	// Trim the cache
	trimCache(pageId, limits.pages);
	trimCache(imgId, limits.imgs);

});