importScripts("/dashboard/precache-manifest.301c8aaf25fe72363b74667387cb8910.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

/* eslint-disable no-undef, no-restricted-globals, no-underscore-dangle */

// version = 'v7';

const prefix = 'web-app-dashboard';
const imageFallbackCacheKey = workbox.precaching.getCacheKeyForURL('/dashboard/img/face.69232788.jpg');
// public path dashboard apparently no longer automatically added so manually prepending

workbox.core.setCacheNameDetails({ prefix });
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
workbox.precaching.cleanupOutdatedCaches();
self.addEventListener('message', (e) => {
  if (!e.data) return;
  if (e.data === 'skipWaiting') self.skipWaiting();
});
workbox.routing.registerRoute(
  /^https:\/\/fonts\.googleapis\.com/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: `${prefix}-google-fonts-css`,
    plugins: [
      new workbox.expiration.Plugin({
        maxAgeSeconds: 60 * 60 * 24 * 30,
        purgeOnQuotaError: true,
      }),
    ],
  }),
);
workbox.routing.registerRoute(
  /^https:\/\/fonts\.gstatic\.com/,
  new workbox.strategies.CacheFirst({
    cacheName: `${prefix}-google-fonts-webfonts`,
    plugins: [
      new workbox.expiration.Plugin({
        maxAgeSeconds: 60 * 60 * 24 * 365,
        purgeOnQuotaError: true,
      }),
    ],
  }),
);
workbox.routing.registerRoute(
  /^https:\/\/eonet\.sci\.gsfc\.nasa\.gov\/api\/v2\.1\/events\?days=60/,
  new workbox.strategies.NetworkFirst({
    cacheName: `${prefix}-natural-events-data`,
    plugins: [
      new workbox.expiration.Plugin({
        maxAgeSeconds: 60 * 60 * 24 * 30,
        purgeOnQuotaError: true,
      }),
    ],
  }),
);
workbox.routing.registerRoute(
  /^https:\/\/randomuser\.me\/api\/\?results=10&inc=name,email,picture&noinfo/,
  new workbox.strategies.NetworkFirst({
    cacheName: `${prefix}-randomuser-data`,
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 50,
        maxAgeSeconds: 60 * 60 * 24 * 365,
        purgeOnQuotaError: true,
      }),
    ],
  }),
);
workbox.routing.registerRoute(
  /^https:\/\/en\.wikipedia\.org\/w\/api\.php\?action=parse&page=Time_zone&prop=text&section=11&format=json&origin=\*/,
  new workbox.strategies.CacheFirst({
    cacheName: `${prefix}-wikipedia-timezones`,
    plugins: [
      new workbox.expiration.Plugin({
        maxAgeSeconds: 60 * 60 * 24 * 365,
        purgeOnQuotaError: true,
      }),
    ],
  }),
);
workbox.routing.registerRoute(
  /^https:\/\/api\.worldbank\.org\/v2\/countries/,
  new workbox.strategies.CacheFirst({
    cacheName: `${prefix}-worldbank-data`,
    plugins: [
      new workbox.expiration.Plugin({
        maxAgeSeconds: 60 * 60 * 24 * 30,
        purgeOnQuotaError: true,
      }),
    ],
  }),
);
workbox.routing.registerRoute(
  /^https:\/\/randomuser\.me\/api\/portraits/,
  new workbox.strategies.NetworkOnly(),
);
workbox.routing.registerRoute(
  /nodata\.\w*\.?png$/,
  new workbox.strategies.CacheFirst({
    cacheName: `${prefix}-unprecached`,
    plugins: [
      new workbox.expiration.Plugin({
        maxAgeSeconds: 60 * 60 * 24 * 365,
        purgeOnQuotaError: true,
      }),
    ],
  }),
);
workbox.routing.setDefaultHandler(new workbox.strategies.StaleWhileRevalidate({
  cacheName: `${prefix}-default-handler`,
  plugins: [
    new workbox.expiration.Plugin({
      maxAgeSeconds: 60 * 60 * 24 * 365,
      purgeOnQuotaError: true,
    }),
  ],
}));
workbox.routing.setCatchHandler(({ event }) => {
  if (event.request.destination === 'image' && /^https:\/\/randomuser\.me\/api\/portraits/.test(event.request.url)) {
    return caches.match(imageFallbackCacheKey);
  }
  return Response.error();
});

