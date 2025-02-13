'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "e45db519c42bcdf62fab787a7a3e979b",
"version.json": "379a63a1c1a840cbde3fa703f8f508a1",
"index.html": "d803ef1fd088337c21f9a68e6b7fc15f",
"/": "d803ef1fd088337c21f9a68e6b7fc15f",
"main.dart.js": "4416a7da68aa46b85cbcaf899b1a6741",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "77d63680487e5c842f41abdd9b6b0590",
".git/config": "5049c4d820473d58f9d84de57026dcdd",
".git/objects/0d/f8df5f6a24cdd7c16d63514b0376ce98dd6151": "65cd8d89bc29a18d519d5a642ca2ccd8",
".git/objects/59/4ffc5832d0cc66924ac5e36fb602682c4da9ef": "5cc170fa7c0927a49cfc7bd3d6f41294",
".git/objects/59/d451246e63ccbf4c92573233a9d297d2d1795b": "b364b62fa9055c6854d6e69b7b2366ae",
".git/objects/66/5a4f1bb5c9cd6ee24c39722311e8a7f10e04c0": "78aa484277f50d6d6248b683c939dc50",
".git/objects/50/11a2db6e5de6332b5e61e40a3d7fa3adb568c8": "597b83d005445e84be677b599278dbf3",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/35/7e6f9cd17aa3c220e450865237225629993eb3": "f283c1229856305cce5113dd2e5b150f",
".git/objects/56/feddb0c5675f3d696a17a14d6caf12d198d34f": "3c0f4f5cecd6ce9fe2a30edd378e5f10",
".git/objects/67/b01245e820fe3d0d39d327c7d01b48e178bbe3": "dca1ea8141772813a141db42e2e78d4c",
".git/objects/5f/28b5e6fec96fda3aed795c86353e875e77fea2": "af71443ada60c090c16588ff300d9b3d",
".git/objects/05/e9db1d1e4337f1097dd9f29d6331fb0aaf89d4": "1d4b4ee9da819d1e3c4f1c1d1a2466aa",
".git/objects/b2/e5a2e76dfa1e484c470e2466ab32eb8f16853e": "a2380ed33aa40443ecd64e5e09781ad7",
".git/objects/b3/b17674702362cedf0b655c5047c6ec7fa9a04d": "1a53ee0e568c8f3b7bbca8a6c36c50e7",
".git/objects/b4/d5de1a339cc980d593ba8590258dea54f961ff": "370da517c5190a7407b5330c09e8cff1",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/a4c048f7974c690289cf10ace7b9bbc682c55e": "20f243152edda4eb2a1fc19b721ec62b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/c0/3c9a23c2266c938b879950d01da2752f596ee7": "294367f4130171d1dac6070d22f9acad",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/fb/bfbb031e5657ecd359fd0b2bc361eb03b878dd": "93f045430496b348aa9c98a739329b7b",
".git/objects/ed/571c2ec694d4d80c165a2f102a02abee3af21c": "27ad2470d6885f35d722f32c93afc24f",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/ec/c58c86d325cf7eb0e4486cf48079bf26408c89": "5385c013b73a9f7384077102411de02d",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/7c/76cffec9a8ea4ef868351b94aca9c7dca0daba": "291ca3859b7aaa7df40ea759ebe0e80f",
".git/objects/16/0f84e511f515125547f1a9885d0bc4e485853b": "3652a3de98660ec8eb52bc7ab7e7619d",
".git/objects/45/fa9948012dfe2e52d4ea014c9b4d4c16a636e4": "3aaaf88085e4b420251ac2abe14b3bd8",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/73/7a0ff86b8cb2a10a0c7454bdb3bc7d0667dc6b": "efacbd1184d8373b6dab1f4495f0901e",
".git/objects/87/c3e7618ca945be30c793fc8aad685d42864711": "863e33c5e2020ab81e367fd8950cdc5c",
".git/objects/28/e235278fdf565ede0e92210afa7a83e80432f1": "6cd5b277dec3526a2e19b1f94a64e504",
".git/objects/8f/c6fa1a7a175ac16fed64b502cef27688e19f5b": "5e640a1ee4641ac43a6d61836d3e2627",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/76a6fb21ba5ad4305b0bf0f4c1497a6394de1d": "7a5801e3095fc5bca71f1c8cfd6275b6",
".git/objects/2a/7f38a3b1710f8d27737e3482cda13a7b4e3b94": "1d56ab7b63f4acb168acde21ebcc9c83",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/38/e6af2120b7cbd9082dc549ea50d4dd35e7b9a1": "785723d5632975c00008d8683edbea58",
".git/objects/5c/188e03762733f8a15104ae334b565ed7819d99": "b39c872762dda912ba3756f1f42930c1",
".git/objects/3a/fd65ee572ab3fbf520d4c28a18b5bbba1997ac": "7145733f9f90b0d3f6cad0b5d92b98c8",
".git/objects/98/bd79447e80eb1d9ddea433c1972e0758a04419": "3d1e0b9cfb2c05fe1f254d7dc0dca175",
".git/objects/3f/c86ff0cc39d30726d379c66c480251b87b9826": "4ef26cd793a33816d3ac54b0f3a3816b",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/39/217f7303f6701991377303da6e6369096a91d1": "82ee2a745d2afd2a09042bd1348f8acc",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/90/6e693946dccfc6fcdb29f493895f28e22624d6": "6634af148a4ad7269caef558e361301e",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/d5/9ff11ecc14e2bfe3de43aff5a07fced7dccdd9": "c81d9427163c69a83f02d5ccbff1a0c4",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/cd/07c971246dd2fc9e6385e5ff48eb52c34657b0": "61a7942c58c48cc093a33ba747a81a4a",
".git/objects/e6/7bacedd475043c5ca663b937c310b83246ded5": "008f278350235964892aee16c2c3b51b",
".git/objects/f7/4bf005c3662c868c28428f6b9eb620b77fc62f": "c4b50a5425bda85fdd4b777c32c9d81b",
".git/objects/e8/da147ac49933ef94847d07b083933cdab59119": "eb503b943dec001d47a2c95c53b4b6b2",
".git/objects/c2/4539a4470d29d152a0d2e4d215ab1a54291096": "e1f5f6fa0135e3fb23f1dc6774c4a0bf",
".git/objects/f1/f3541bd8cdc9e70d5fc9fa05c830715bd99efe": "34f6ce2fbd2274b37cea5595cf3b0aed",
".git/objects/e7/306791463e35840e96d8766833d22a2dcdcb58": "b33fa65edb2bbc9b06e9393a30310559",
".git/objects/f8/0536d35a9fb814d287ac9a6a3ab1adbb4dbc1b": "054ca9219902bbae173e03504993a78b",
".git/objects/ce/aa6381478b4158f1c917c4df6ffe374355ab74": "ce2479f67df51bc62dd58676d658780b",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/e89b0b264e755135a1a7dfc66d6b127401d62c": "ffdcde1d281192df5b50f83daee3310a",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2d/4bb21fb6742af7d01c7e377aba5451c06c6729": "046d38d1cc45dce8c0418ab86ee67550",
".git/objects/2d/fcdbe9f2df0332cee24295b9c0a4cdbf2478b7": "b40637ed7a305a7a7296f4f96b139cc1",
".git/objects/1b/08e6e43d9b019c9b1e0fbbf924e7282e5bfada": "2a6e0b321a1b1610707e2e42b38170f0",
".git/objects/4f/346c3e43f95e778d7cef3cb6ceede9cd2bf1c8": "99981890f1649c8ef95c28d9e5a27d4e",
".git/objects/4f/653fae4b4aed87c1e1a008041a86cfabe9ffc1": "9e65eee727ba88e68eff8ecdd9f16278",
".git/objects/4f/3762926ceb8004a8aa73c3c33ca73b6cf08d1d": "e7e81a5c69ffb7455a5f0eb62bef3762",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/1d/90d5df15addd343fca125b4bf0dcf269745543": "2ef59161d202fd2e5843f0f50d7d8cb8",
".git/objects/82/7129be097f87e2e630757419db6e97912a71b0": "263ac8f6e97234231a2f88dae2d10e54",
".git/objects/7a/57a95bae5edbbc7b01386aec2ab4d6b5c82b82": "c2826786bb72d8e5705e289b030b36bb",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "76f3e69d1db6c3c19d7e8ff57c278639",
".git/logs/refs/heads/master": "7f50e49c31e1875924e0068944c3f700",
".git/logs/refs/remotes/origin/master": "248873e8f5fe968c963107121922cc2f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "ecc70623f3919a3aba4156e928a6a664",
".git/refs/remotes/origin/master": "ecc70623f3919a3aba4156e928a6a664",
".git/index": "e2d3fb55b78c12fba05795737382b998",
".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
"assets/shorebird.yaml": "8d779d2204cb355b65beefb014afc746",
"assets/AssetManifest.json": "071b31d0e69ecac94b64a76aa8ae68af",
"assets/NOTICES": "6c23b3f36396f8bcfbdd12d782885ff0",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "d287004da30010ddb36503776fdf90dd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "8574e2b031e57d57305845e0e171611b",
"assets/fonts/MaterialIcons-Regular.otf": "8ea08ea2444cc58ec5807fd7669e488f",
"assets/assets/cat.jpeg": "e7704ca55da23051ae633d8b21d001f4",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
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
