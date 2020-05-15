'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "66b2bd12bfb61399cdd834e62d8baa03",
"/": "66b2bd12bfb61399cdd834e62d8baa03",
"main.dart.js": "9fc008f8a2aa93fd3f8ced298ca47efe",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "35e32e5b88d346cf3132a8a37b194679",
"assets/LICENSE": "34c097782b46375ed975a7682e9c4740",
"assets/AssetManifest.json": "b62c56cd2772ea7786582e27ca2be031",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/assets/images/belief2.png": "8f0c23d751f9a50935be316ded191762",
"assets/assets/images/belief1.png": "cda253511ed2898d9da7c19808a197bf",
"assets/assets/images/jeju3.png": "83b5fc3018163cc870d9c4b0f5841cc4",
"assets/assets/images/yyk.png": "65e4a4cc018e016537844049527f6133",
"assets/assets/images/jeju2.png": "f57ffb005b36ee976cbae2cbbeca3ec2",
"assets/assets/images/jeju1.png": "99dc54e063c7246b7bd8b7ae7e4c47e4",
"assets/assets/images/secureCoding.png": "f56577706a7f4134a62d2df745cd8214",
"assets/assets/images/shinyc.png": "e67ae1e475c81a2b584b90f9ca0ac73b",
"assets/assets/images/prize.png": "2a21909609dca42b5b7a7c7a165429b2",
"assets/assets/images/shin.png": "f209dfa2c1fb18635f180926ad049be6"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
