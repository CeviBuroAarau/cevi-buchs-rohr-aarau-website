// Kill switch for the service worker of the former PWA build (Vue CLI and
// vite-plugin-pwa). Browsers that still have it installed keep serving the old
// app from its cache. They fetch this script as an update, which removes all
// caches, unregisters the service worker and reloads the open tabs.
// Keep this file until no visitor can have the old service worker anymore.

self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.map((key) => caches.delete(key)));
      await self.registration.unregister();
      const windows = await self.clients.matchAll({ type: "window" });
      windows.forEach((client) => client.navigate(client.url));
    })(),
  );
});
