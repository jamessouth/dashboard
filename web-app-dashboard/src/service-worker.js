const prefix = 'web-app-dashboard';
const suffix = 'v1';

workbox.setConfig({ debug: false });
workbox.core.setLogLevel(workbox.core.LOG_LEVELS.debug);

workbox.core.setCacheNameDetails({ prefix, suffix });

self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings(false);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

// self.addEventListener('message', (msg) => {
//   if (msg.data.action === 'skipWaiting') self.skipWaiting();
// });

workbox.routing.registerRoute(
  /^https:\/\/fonts\.googleapis\.com/,
  workbox.strategies.cacheFirst({
    cacheName: `${prefix}-google-fonts-css`,
    plugins: [
      // new workbox.cacheableResponse.Plugin({
      //   statuses: [0, 200],
      // }),
      new workbox.expiration.Plugin({
        maxAgeSeconds: 60 * 60 * 24 * 365,
      }),
    ],
  }),
);

workbox.routing.registerRoute(
  /^https:\/\/fonts\.gstatic\.com/,
  workbox.strategies.cacheFirst({
    cacheName: `${prefix}-google-fonts-webfonts`,
    plugins: [
      new workbox.cacheableResponse.Plugin({
        statuses: [0, 200],
      }),
      new workbox.expiration.Plugin({
        maxAgeSeconds: 60 * 60 * 24 * 365,
      }),
    ],
  }),
);

workbox.routing.registerRoute(
  /^https:\/\/eonet\.sci\.gsfc\.nasa\.gov\/api\/v2\.1\/events\?days=60/,
  workbox.strategies.staleWhileRevalidate({
    cacheName: `${prefix}-natural-events-data`,
  }),
);

workbox.routing.registerRoute(
  /^https:\/\/randomuser\.me\/api\/\?results=10&inc=name,email,picture&noinfo/,
  workbox.strategies.networkFirst({
    cacheName: `${prefix}-randomuser-data`,
  }),
);

workbox.routing.registerRoute(
  /^https:\/\/en\.wikipedia\.org\/w\/api\.php\?action=parse&page=Time_zone&prop=text&section=11&format=json&origin=\*/,
  workbox.strategies.cacheFirst({
    cacheName: `${prefix}-wikipedia-timezones`,
    plugins: [
      // new workbox.cacheableResponse.Plugin({
      //   statuses: [0, 200],
      // }),
      new workbox.expiration.Plugin({
        maxAgeSeconds: 60 * 60 * 24 * 365,
      }),
    ],
  }),
);

workbox.routing.registerRoute(
  /^https:\/\/api\.worldbank\.org\/v2\/countries/,
  workbox.strategies.cacheFirst({
    cacheName: `${prefix}-worldbank-data`,
    plugins: [
      // new workbox.cacheableResponse.Plugin({
      //   statuses: [0, 200],
      // }),
      new workbox.expiration.Plugin({
        maxAgeSeconds: 60 * 60 * 24 * 30,
      }),
    ],
  }),
);

workbox.routing.registerRoute(
  /^https:\/\/randomuser\.me\/api\/portraits/,
  workbox.strategies.cacheFirst({
    cacheName: `${prefix}-randomuser-pics`,
    plugins: [
      // new workbox.cacheableResponse.Plugin({
      //   statuses: [0, 200],
      // }),
      new workbox.expiration.Plugin({
        maxAgeSeconds: 60 * 60 * 24 * 365,
      }),
    ],
  }),
);






// workbox.routing.registerRoute(
//   /\.(?:js|css)$/,
//   workbox.strategies.staleWhileRevalidate(),
// );
//
// workbox.routing.registerRoute(
//   /\.(?:png|gif|jpg|jpeg|svg)$/,
//   workbox.strategies.cacheFirst({
//     cacheName: 'images',
//     plugins: [
//       new workbox.expiration.Plugin({
//         maxEntries: 60,
//         maxAgeSeconds: 60 * 60 * 24 * 30,
//       }),
//     ],
//   }),
// );
