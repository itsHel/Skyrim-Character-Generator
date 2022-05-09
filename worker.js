const cacheName = 'Generator-v1';
const appShellFiles = [
    "./",
    "./index.html",
    "./manifest.json",
    "./style.css",
    "./script.js",
    "./worker.js",
    "./averiaseriflibre.woff2",
    "./img/icon.png",
    "./img/info.png",
    "./img/refresh.png",
    "./img/races/Altmer.png",
    "./img/races/Argonian.png",
    "./img/races/Bosmer.png",
    "./img/races/Breton.png",
    "./img/races/Dunmer.png",
    "./img/races/Imperial.png",
    "./img/races/Khajiit.png",
    "./img/races/Nord.png",
    "./img/races/Orsimer.png",
    "./img/races/Redguard.png",
];

// Add cache only on install ?
self.addEventListener('install', (e) => {
    e.waitUntil(async () => {
        const cache = await caches.open(cacheName);

        await cache.addAll(appShellFiles);
    });
});

self.addEventListener('fetch', (e) => {
    e.respondWith((async () => {
        // if(e.request.url.startsWith('chrome-extension'))
        //     return;

        const cachedResponse = await caches.match(e.request);
        
        if(cachedResponse) 
            return cachedResponse;

        const response = await fetch(e.request);
        const cache = await caches.open(cacheName);
        cache.put(e.request, response.clone());
        
        return response;
    })());
});
