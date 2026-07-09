const CACHE_VERSION = "dx-video-cache-v1";
const VIDEO_HOSTS = ["d8j0ntlcm91z4.cloudfront.net", "stream.mux.com"];

self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(Promise.resolve());
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key.startsWith("dx-video-cache-") && key !== CACHE_VERSION)
          .map((key) => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

function isVideoRequest(requestUrl) {
  const isKnownHost = VIDEO_HOSTS.includes(requestUrl.hostname);
  const path = requestUrl.pathname.toLowerCase();
  const isVideoPath =
    path.endsWith(".mp4") ||
    path.endsWith(".webm") ||
    path.endsWith(".m3u8") ||
    path.endsWith(".m4s") ||
    path.endsWith(".ts");
  return isKnownHost && isVideoPath;
}

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  const requestUrl = new URL(event.request.url);
  if (!isVideoRequest(requestUrl)) return;

  event.respondWith(
    caches.open(CACHE_VERSION).then(async (cache) => {
      const cached = await cache.match(event.request);
      const networkFetch = fetch(event.request)
        .then((response) => {
          if (response && response.ok && response.type !== "opaque") {
            cache.put(event.request, response.clone()).catch(() => {});
          }
          return response;
        })
        .catch(() => cached);

      return cached || networkFetch;
    })
  );
});
