'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "b19051dba15f7105bde9e20015dac643",
"assets/AssetManifest.bin.json": "5676df344636c2d47308c134af6db740",
"assets/assets/fonts/Montserrat-Bold.ttf": "354dc625a35bef1b6ec00a79c6cfc0c8",
"assets/assets/fonts/Montserrat-Regular.ttf": "38712903602f88435ddddec98862f8b8",
"assets/assets/fonts/Montserrat-SemiBold.ttf": "6e7bd3eacb1d1088e5063e375fc467aa",
"assets/assets/lottie/downarrow.json": "b47b23a184022d8dc83bff2168fe2e9d",
"assets/assets/lottie/email.json": "603fd9bb8d54e6e956112f07407363ef",
"assets/assets/lottie/github.json": "6f81eb2d774d125cfb8ce5a16ff0d0f4",
"assets/assets/lottie/linkedin.json": "fb907199a696b2f52d1bcb7c61ae586b",
"assets/assets/lottie/resumee.json": "804b870621b03e37aaf665633311e974",
"assets/assets/lottie/telegram.json": "d437303cb559579f9fcfba0555d83b62",
"assets/assets/lottie/whatsapp.json": "0de396b9f86d697404b18e9fd2d76524",
"assets/assets/svgs/C.svg": "7984f1f99e00b58e6402c5624e1dc298",
"assets/assets/svgs/Cpp.svg": "e5b135b00998f9cd69a38eed9b1eee81",
"assets/assets/svgs/Dart.svg": "11b770f163584b0e8cbba1f7bc626f55",
"assets/assets/svgs/Figma.svg": "c7ef676648d0a63907b26420105ed20d",
"assets/assets/svgs/Firebase.svg": "3ced6c61938442b659f67eb57247fbfa",
"assets/assets/svgs/fitnssapp.png": "f2dd1127ae5d0c5617b00c1eae6f55f1",
"assets/assets/svgs/Flutter.svg": "5ff1722cbed36fdb869cba0c95788d42",
"assets/assets/svgs/Gazebo.svg": "05c2cdcc372ff2373710fdb89874ae98",
"assets/assets/svgs/Git.svg": "fef8e95112e6ab6f2169430ee510db5e",
"assets/assets/svgs/gmail.svg": "4f188c4c8b67f3a8774b2440b6585e32",
"assets/assets/svgs/img.png": "10e309de619cb9ea5e625d4e96760d7f",
"assets/assets/svgs/JavaScript.svg": "0c1f700da144243c526f252e59362138",
"assets/assets/svgs/LinkedIn.svg": "15b4281ebd93cc246c81200bc3c1fd94",
"assets/assets/svgs/Linux.svg": "17eb8f433d72c073ec12417f3ca5d157",
"assets/assets/svgs/Node.svg": "d5e1cd8cbfe460c028711921565399d6",
"assets/assets/svgs/passgn.png": "d6282ecd94a1aac6aaafc39a49dd9417",
"assets/assets/svgs/Postman.svg": "39894ce0d6c55afd644a854bff6b03b3",
"assets/assets/svgs/prtcttoxic.png": "69a0055c38a6b73fd02a566439c6885b",
"assets/assets/svgs/Python.svg": "71374043d9b3d9ea7fa09976a747d475",
"assets/assets/svgs/rdyshp.png": "7d5e081651a3a113923f2d921fc5fa3a",
"assets/assets/svgs/tele.svg": "fd0be737c96c7f91a6f60d9cf429eeb8",
"assets/assets/svgs/trgt.png": "3c3a60992541c35017d0daca5bb960b0",
"assets/assets/svgs/whtsapp.svg": "9c0ec2e16b32b70b4d87c183452879cf",
"assets/FontManifest.json": "ffc86af37a21966bee8ee4ce86cef711",
"assets/fonts/MaterialIcons-Regular.otf": "a1c8415fca3c3ef84862cc233cb7c4e3",
"assets/NOTICES": "092f94df49ccef7c57f9bedd0e5533bf",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "c122c6012a6da28f523802db8bd20460",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "55389ca2f3c459481676f2f95bd72c8c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "02262feb0ecbec0788bee91392b8c40e",
"/": "02262feb0ecbec0788bee91392b8c40e",
"main.dart.js": "7f1070bcd2bab9c01ef7655f5918beb3",
"manifest.json": "62d6add94f587ddfa6e26a150943312a",
"version.json": "bbf9c291e60a8ce634b88628747d1691"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
