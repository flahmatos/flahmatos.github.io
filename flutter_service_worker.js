'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "0fa78d5738504becd4bae08a30ff44a4",
"version.json": "744eca05fd9731591bc7be69c1760f14",
"index.html": "81bc48dfbb56983b200c5b241082c7ed",
"/": "81bc48dfbb56983b200c5b241082c7ed",
"main.dart.js": "21df2902425bad2bf230cf4696d225f0",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "badc60ba34d52f98468f5b089e19692f",
"assets/AssetManifest.json": "fc7092ba014f27073674a4b07f5712cd",
"assets/NOTICES": "9db7def2becdee81dd1021a9ced7fc15",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "4cfda003141d6f8bd98d1bfb5dff7e0a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "ae4f65e943ee996694eb1d2567f0a8ba",
"assets/fonts/MaterialIcons-Regular.otf": "753c198f09a3eb6b9c4fdd83d4cb94ab",
"assets/assets/Gato%2520celebrando.png": "b8961b8a4bb6af540ddce72e7d4c59cd",
"assets/assets/Gato%2520vacina.png": "7d06ae8d821f0eb2da2f00194c6752f0",
"assets/assets/Gato%2520sa%25C3%25BAde.png": "b5d57e6d1049ed3d39003c9cdb2823bf",
"assets/assets/paw_3.png.png": "50fadf14bd3e8b38aa18420ac6090d28",
"assets/assets/Gato%2520comendo.png": "bc3ff1a1557d4b6ca5d761354a73c039",
"assets/assets/Gato%2520dormindo.png": "5db0792277199b97cd37ad3deb6211d4",
"assets/assets/Shiba%2520brincando.png": "69fc663ce5ded26bc5c3b5cc3eddf8a9",
"assets/assets/Gato%2520brincando.png": "f76f514e50334d869ce06a8fdbdeeb3d",
"assets/assets/Gato%2520peso.png": "c61061e8553ce117ac305ec5f52403e8",
"assets/assets/Gato%2520feliz.png": "1b117e907eea99161b4e85794ec3c9b2",
"assets/assets/Shiba%2520sa%25C3%25BAde.png": "ae58a9e3312adc68df46b7059091a89f",
"assets/assets/paw_1.png": "e28ef196836e27335726acf337567ffe",
"assets/assets/Shiba%2520peso.png": "e59ffb04e47405c83582d533dfd45171",
"assets/assets/register-pet-2.1.png": "e18ba0dd5cdefe5bee4f77f8314e70cb",
"assets/assets/paw_2.png": "a179c9861463a9be33c52d33529626fa",
"assets/assets/register-pet-2.2.png": "c64e62f4a09b593a26841226916278e7",
"assets/assets/Shiba%2520celebrando.png": "79594fc016ba5df2baffd7e944f5c598",
"assets/assets/Shiba%2520Feliz.png": "58212b0b773e684435b51e8204d0a80f",
"assets/assets/Shiba%2520Dormindo%25202.png": "d3759dda687ed9703321688606a7bc0f",
"assets/assets/Shiba%2520Vacina.png": "e151afe545a18e794517cc05248f3f14",
"assets/assets/icons/ra%25C3%25A7%25C3%25A3o%2520seca.png": "bc979e7c5bda09dca22085ef5d83abf0",
"assets/assets/icons/banho.png": "aed1f9f633564bff7b9de656b6cdba79",
"assets/assets/icons/vomito.png": "cef2d89e67c6acb11f2c4b8249e6b2be",
"assets/assets/icons/esconder.png": "ba419cc1994313339f3062be8dae52e3",
"assets/assets/icons/bowl.png": "4da5d329b41c202e1d990e72795a7c1c",
"assets/assets/icons/demarcacao.png": "01766a18430953e2836d0f7f2304eac7",
"assets/assets/icons/ball.png": "8d7cb34a6919387f200ddd16e372a334",
"assets/assets/icons/destruicao.png": "c24ab777139a0c91e3e67747a95a9789",
"assets/assets/icons/Gato%2520comendo.png": "bc3ff1a1557d4b6ca5d761354a73c039",
"assets/assets/icons/medo.png": "7a12f5bf5680e4b79520f1cfede03c3a",
"assets/assets/icons/maze-2.png": "00e75f46c5f99cb45d5855d4db986c52",
"assets/assets/icons/arranhadura.png": "0c5a1d3898546a5b815d19ea6943faa1",
"assets/assets/icons/Gato%2520dormindo.png": "5db0792277199b97cd37ad3deb6211d4",
"assets/assets/icons/agressividade.png": "bbf5abad5710665bb2869a6471f024b2",
"assets/assets/icons/Shiba%2520brincando.png": "69fc663ce5ded26bc5c3b5cc3eddf8a9",
"assets/assets/icons/Gato%2520brincando.png": "f76f514e50334d869ce06a8fdbdeeb3d",
"assets/assets/icons/estetoscopio.png": "ea7160aca00fd44c9463ebb6ff471622",
"assets/assets/icons/Gato%2520peso.png": "c61061e8553ce117ac305ec5f52403e8",
"assets/assets/icons/paw.png": "8ecaf7a1907a440fd645614aa8433cbd",
"assets/assets/icons/Gato%2520feliz.png": "1b117e907eea99161b4e85794ec3c9b2",
"assets/assets/icons/lambedura.png": "c8ebd706b930da2340947d72dd6f9b3b",
"assets/assets/icons/tosa.png": "ac44e160e25e505fd189e57ec1eb1621",
"assets/assets/icons/rac%25CC%25A7a%25CC%2583o%2520u%25CC%2581mida.png": "9e84b25a638ffd67940e6ebe48f04660",
"assets/assets/icons/unha.png": "1633b433801903aa2bba1df5efb83e34",
"assets/assets/icons/shower.png": "8606afaee295783248e04e2b4e01d498",
"assets/assets/icons/ra%25C3%25A7%25C3%25A3o%2520natural.png": "616d1afbc92bfe7b86c917e2f2a2d2a3",
"assets/assets/icons/home.png": "55e265e26dde2cf90f7b8747ab226c18",
"assets/assets/icons/paw_1.png": "e28ef196836e27335726acf337567ffe",
"assets/assets/icons/Shiba%2520peso.png": "e59ffb04e47405c83582d533dfd45171",
"assets/assets/icons/rac%25CC%25A7a%25CC%2583o%2520seca.png": "bc979e7c5bda09dca22085ef5d83abf0",
"assets/assets/icons/escova.png": "f013a6720a0a2dd02f42cf005d79980e",
"assets/assets/icons/paw_2.png": "a179c9861463a9be33c52d33529626fa",
"assets/assets/icons/paw_3.png": "50fadf14bd3e8b38aa18420ac6090d28",
"assets/assets/icons/journal.png": "f704c3e5bfa732248551e3139dc669f5",
"assets/assets/icons/growth_chart.png": "e7e8f145d766b7d0fbc63d294095c800",
"assets/assets/icons/Shiba%2520Feliz.png": "58212b0b773e684435b51e8204d0a80f",
"assets/assets/icons/apetite.png": "1613fdb9f95d246aaa1c5d59d31feabb",
"assets/assets/icons/dente.png": "7a06e0382adcbeb9f2dce39c65a0d499",
"assets/assets/icons/mole.png": "6fd0af23d28dc53e73ef91eeb8f68839",
"assets/assets/icons/diarreia.png": "4d12d1ae7208643cbd96ccb80dc8f995",
"assets/assets/icons/rac%25CC%25A7a%25CC%2583o%2520natural.png": "616d1afbc92bfe7b86c917e2f2a2d2a3",
"assets/assets/icons/maze.png": "85956bf6db57027866023e60d284eb91",
"assets/assets/icons/Gato%2520sau%25CC%2581de.png": "b5d57e6d1049ed3d39003c9cdb2823bf",
"assets/assets/icons/vacina.png": "231f361c0f09fbb6c347fe65ab46b897",
"assets/assets/icons/Shiba%2520sau%25CC%2581de.png": "ae58a9e3312adc68df46b7059091a89f",
"assets/assets/icons/areia.png": "a4d7167ce8bcc8b9704438355cbc60b0",
"assets/assets/icons/star.png": "65d5ab16463000baea7ecaf42a381a6b",
"assets/assets/icons/Shiba%2520Comendo.png": "902ed6720aabbe858f55a59453cc8bb8",
"assets/assets/icons/ansiedade.png": "76cc2d75be15f21352a5bb9d68caa1ff",
"assets/assets/icons/sono.png": "e36b5e85eb342e3e9721f80b19e6cce4",
"assets/assets/icons/tapete.png": "b06f50941202bcb0b96577c8cfe3a93b",
"assets/assets/icons/stethoscope.png": "5a5b127c1b0343874409bdaf561a2b5b",
"assets/assets/icons/pastosa.png": "e8599a1da4c7c67e83d4afb4a27b1e9b",
"assets/assets/icons/liquida.png": "184c7227f0307dc02bcdd0bbffa51e59",
"assets/assets/icons/ra%25C3%25A7%25C3%25A3o%2520%25C3%25BAmida.png": "9e84b25a638ffd67940e6ebe48f04660",
"assets/assets/Gato%2520sau%25CC%2581de.png": "b5d57e6d1049ed3d39003c9cdb2823bf",
"assets/assets/Shiba%2520sau%25CC%2581de.png": "ae58a9e3312adc68df46b7059091a89f",
"assets/assets/Miau-au%2520logo.png": "a9020ba0cd35a2100a94f670cbd8b04b",
"assets/assets/Shiba%2520Comendo.png": "902ed6720aabbe858f55a59453cc8bb8",
"assets/assets/login_google.png": "14335149ccf9b967fd15881d6d204d16",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93"};
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
