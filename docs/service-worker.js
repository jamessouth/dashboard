importScripts("/Vue-Project-9/precache-manifest.9771a589ec46348f6f35551dfd667b0a.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/* eslint-disable no-undef, no-restricted-globals, no-underscore-dangle */

const prefix = 'web-app-dashboard';
// version = 'v9';
const FALLBACK_IMAGE_URL = '/img/face.69232788.jpg';
// workbox.setConfig({ debug: false });
// workbox.core.setLogLevel(workbox.core.LOG_LEVELS.debug);
workbox.core.setCacheNameDetails({ prefix });
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
self.addEventListener('message', (e) => {
  if (!e.data) return;
  if (e.data === 'skipWaiting') self.skipWaiting();
});
workbox.routing.registerRoute(
  /^https:\/\/fonts\.googleapis\.com/,
  workbox.strategies.staleWhileRevalidate({
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
  workbox.strategies.cacheFirst({
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
  workbox.strategies.networkFirst({
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
  workbox.strategies.networkFirst({
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
  workbox.strategies.cacheFirst({
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
  workbox.strategies.cacheFirst({
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
  workbox.strategies.networkOnly(),
);
workbox.routing.registerRoute(
  /nodata\.\w*\.?png$/,
  workbox.strategies.cacheFirst({
    cacheName: `${prefix}-unprecached`,
    plugins: [
      new workbox.expiration.Plugin({
        maxAgeSeconds: 60 * 60 * 24 * 365,
        purgeOnQuotaError: true,
      }),
    ],
  }),
);
workbox.routing.setDefaultHandler(workbox.strategies.staleWhileRevalidate({
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
    return caches.match(FALLBACK_IMAGE_URL);
  }
  return Response.error();
});

