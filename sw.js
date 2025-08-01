self.addEventListener("install", (e) => {
    e.waitUntil(
        caches.open("jam-cache").then((cache) =>
            cache.addAll([
                "index.html",
                "style.css",
                "script.js",
                "manifest.json",
                "icon.png"
            ])
        )
    );
});

self.addEventListener("fetch", (e) => {
    e.respondWith(
        caches.match(e.request).then((res) => res || fetch(e.request))
    );
});
