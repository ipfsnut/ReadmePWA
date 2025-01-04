const CACHE_NAME = "books-cache-v1";
const OFFLINE_PAGE = "/offline.html"; // Path to your offline fallback page
const ASSETS_TO_CACHE = [
  "/", // Cache the root page
  "/index.html",
  "/styles.css",
  "/app.js",
  "/offline.html", // Cache the offline fallback page
  "/path/to/book-cover-1.jpg",
  "/path/to/book-cover-2.jpg",
  // Add more static assets here
];

// Install event: Cache static assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Caching static assets");
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// Fetch event: Serve cached assets or fetch from network
self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);

  // Cache and serve the readme-index.json file
  if (url.pathname.endsWith("readme-index.json")) {
    event.respondWith(
      caches.match(event.request).then((response) => {
        // Return cached response if found
        if (response) {
          return response;
        }

        // Fetch from network and cache the response
        return fetch(event.request)
          .then((networkResponse) => {
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, networkResponse.clone());
            });
            return networkResponse;
          })
          .catch(() => {
            // If the network request fails, serve a fallback response
            return new Response(JSON.stringify({ books: [] }), {
              headers: { "Content-Type": "application/json" },
            });
          });
      })
    );
  } else {
    // Default behavior for other requests
    event.respondWith(
      caches.match(event.request).then((response) => {
        // Return cached response if found
        if (response) {
          return response;
        }

        // Fetch from network and cache the response
        return fetch(event.request)
          .then((networkResponse) => {
            // Only cache GET requests
            if (event.request.method === "GET") {
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(event.request, networkResponse.clone());
              });
            }
            return networkResponse;
          })
          .catch(() => {
            // If the network request fails and it's a navigation request, serve the offline page
            if (event.request.mode === "navigate") {
              return caches.match(OFFLINE_PAGE);
            }
            // Otherwise, return a generic error response
            return new Response("Network error", {
              status: 408,
              statusText: "Network error",
            });
          });
      })
    );
  }
});

// Activate event: Clean up old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log("Deleting old cache:", cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});