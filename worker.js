const cacheName = 'Generator-v1';
const appShellFiles = [
    "/Skyrim-Character-Generator/",
    "/Skyrim-Character-Generator/index.html",
    "/Skyrim-Character-Generator/manifest.json",
    "/Skyrim-Character-Generator/style.css",
    "/Skyrim-Character-Generator/script.js",
    "/Skyrim-Character-Generator/worker.js",
    "/Skyrim-Character-Generator/averiaseriflibre.woff2",
    "/Skyrim-Character-Generator/img/icon.png",
    "/Skyrim-Character-Generator/img/info.png",
    "/Skyrim-Character-Generator/img/refresh.png",
    "/Skyrim-Character-Generator/img/races/Altmer.png",
    "/Skyrim-Character-Generator/img/races/Argonian.png",
    "/Skyrim-Character-Generator/img/races/Bosmer.png",
    "/Skyrim-Character-Generator/img/races/Breton.png",
    "/Skyrim-Character-Generator/img/races/Dunmer.png",
    "/Skyrim-Character-Generator/img/races/Imperial.png",
    "/Skyrim-Character-Generator/img/races/Khajiit.png",
    "/Skyrim-Character-Generator/img/races/Nord.png",
    "/Skyrim-Character-Generator/img/races/Orsimer.png",
    "/Skyrim-Character-Generator/img/races/Redguard.png",
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
        if(e.request.url.startsWith('chrome-extension'))
            return;

        const cachedResponse = await caches.match(e.request);
        
        if(cachedResponse) 
            return cachedResponse;

        const response = await fetch(e.request);
        const cache = await caches.open(cacheName);
        cache.put(e.request, response.clone());
        
        return response;
    })());
});
