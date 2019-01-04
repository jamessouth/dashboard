/* eslint-disable no-console, no-alert */

import { register } from 'register-service-worker';

const notifyUserOfNewContent = (worker) => {
  alert('This site has new content!');
  worker.
};

if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready(registration) {
      console.log('App is being served from cache by a service worker.\n' +
        'For more details, visit https://goo.gl/AFskqB');
    },
    registered(registration) {
      console.log('Service worker has been registered.', registration);
    },
    cached(registration) {
      console.log('Content has been cached for offline use.');
    },
    updatefound(registration) {
      console.log('New content is downloading.', registration);
    },
    updated(registration) {
      console.log('New content is available; please refresh.');
      notifyUserOfNewContent(registration.waiting);
    },
    offline() {
      console.log('No internet connection found. App is running in offline mode.');
    },
    error(error) {
      console.error('Error during service worker registration:', error);
    },
  });

  let refreshing;
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    if (refreshing) return;
    window.location.reload();
    refreshing = true;
  });
}
