const cacheName = 'Generator-v1';
const appShellFiles = [
    "/_old/g/index.html",
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

self.addEventListener('activate', (e) => {
    // e.waitUntil(caches.keys().then(keys => {
    //     return Promise.all(keys.map(key => {
    //         if(key == cacheName)
    //             return; 
            
    //         return caches.delete(key);
    //     }));
    // }));
});

self.addEventListener('fetch', (e) => {
    e.respondWith((async () => {
        try{
            let response = await fetch(e.request);

            return response;
        } catch(error){
            // Return cached data on error
            const cache = await caches.open(cacheName);
            let cacheResponse = await cache.match(e.request, {ignoreSearch: true});
console.log(e.request);
            console.log(`[Service Worker] Fetching catched resource: ${e.request.url}`);
            console.log(cacheResponse);
    
            return cacheResponse;
        }
    })());
});