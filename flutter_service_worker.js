'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "60bb1b3c8e74252787e57d919227d9f3",
"assets/assets/Eventi/85192717_1762573427207162_4328287703821975552_n.jpg": "c1f540780388df1c7df8acb5363a40a1",
"assets/assets/Eventi/85200383_1762579150539923_8730568618888134656_n.jpg": "70766d9612835ffc4cd9372abe11dde8",
"assets/assets/Eventi/87175982_1762578453873326_6749816099535060992_n.jpg": "4dbd4df524a6932ff824b47cfaa42b42",
"assets/assets/Eventi/87187504_1762578503873321_1890932224774111232_n.jpg": "e1840f6397867e91e5ac2dfcb6b6cfd8",
"assets/assets/Eventi/87201159_1762578720539966_8489264153469386752_n.jpg": "06de24ebf72c6482b820474ce522f81c",
"assets/assets/Eventi/87203335_1762578233873348_3085851465789472768_n.jpg": "3f5f27450c965dbf4624fa1ecc2f169e",
"assets/assets/Eventi/87212462_1762575860540252_8345212565269250048_n.jpg": "b2900d81b0ae39ba2aa4c30ea7b6c1d0",
"assets/assets/Eventi/87247604_1762578780539960_268250274190065664_n.jpg": "5c3dc4742daba01c85454ff800998414",
"assets/assets/Eventi/87258511_1762578917206613_4245532901027872768_n.jpg": "ea2fce448f83e575ef98840f80a46be8",
"assets/assets/Eventi/87283091_1762574217207083_1952789026670903296_n.jpg": "9646421ddbe3e038cf921d1a1d2d56cb",
"assets/assets/Eventi/87943276_1762578003873371_6211845577123037184_n.jpg": "2824d56ad33d65d6929d441ade065c35",
"assets/assets/Eventi/87949217_1762578947206610_9084738300790439936_n.jpg": "a3c19436acf0fc47a1d5d47a02417783",
"assets/assets/images/estive.jpg": "4f9f006db124befd7acdecf4b24a8699",
"assets/assets/images/eventi.jpg": "306a2b1e046044ebb834a98f257fa37d",
"assets/assets/images/invernali.jpg": "abf83be341f9c6b5128ff0ff89e958b6",
"assets/assets/images/lezione.jpg": "8524c85c3c214d56dca1ff52cfffb262",
"assets/assets/images/maestri.jpg": "3601c9d9de46feb6e0defa3844c22b43",
"assets/assets/images/rueda.jpg": "13395009d047356c8a0852eb97999201",
"assets/assets/images/spettacolo.jpg": "151a6bee9349a72e03716ce78d879aa2",
"assets/assets/images/stage.jpg": "8c2ecd7dda1faddb539e0c7ea05b3ff1",
"assets/assets/images/style.jpg": "eda8448883360cb4ca0dbdf7436bc22c",
"assets/assets/Rueda/34446793_1230071223790721_1498081461813641216_n.jpg": "93624dd642f08116c362f6c12a79af2d",
"assets/assets/Rueda/44167158_1347123185418857_4958668325962907648_n.jpg": "13395009d047356c8a0852eb97999201",
"assets/assets/Rueda/53241749_1444674348997073_6008613256594194432_n.jpg": "239ef055831c51ad042632429496451c",
"assets/assets/Rueda/54257444_1444674422330399_7627109044288749568_n.jpg": "afbd79b66afdcf0936c7fd6e8b69f9c6",
"assets/assets/Rueda/60235173_1494858447311996_6846340799408373760_n.jpg": "f8130c7826c45a2de33500670780ee38",
"assets/assets/Rueda/82027318_1716873815110457_2531208670608359424_n.jpg": "2ee75406634c2f4deedfcf0de708a5b8",
"assets/assets/Rueda/85192717_1762573427207162_4328287703821975552_n.jpg": "c1f540780388df1c7df8acb5363a40a1",
"assets/assets/Serate_Estive/69863484_1598143593650147_7465254284070748160_n.jpg": "d508d93b6156a2e5da6867fa32c17599",
"assets/assets/Serate_Estive/70325372_1598143503650156_943550627840000000_n.jpg": "a947a395994e25cc4f7fa86fc68e98dd",
"assets/assets/Serate_Estive/70391490_1598143536983486_3233795707404025856_n.jpg": "fb3d5db0b4ecc4e68c0920496c1a0a34",
"assets/assets/Serate_Estive/70563553_1598143340316839_2466342191853731840_n.jpg": "320ebaf8d513f051682700cbd603b8dd",
"assets/assets/Serate_Estive/70576891_1598143570316816_7227174084960845824_n.jpg": "512e96be223657f998e7a1ddcff82401",
"assets/assets/Serate_Estive/70606332_1598143403650166_1919151255125491712_n.jpg": "d1a173c045b4926e86ce6b6dc69f107a",
"assets/assets/Serate_Estive/70619658_1598143486983491_6164070104679055360_n.jpg": "47c28802f843dc251567dbbd19d8b1cd",
"assets/assets/Serate_Estive/70644738_1598143470316826_7210270790195871744_n.jpg": "bde1ef70f940066b920b8ee7b1a40b52",
"assets/assets/Serate_Estive/70646356_1598143380316835_6261986038948823040_n.jpg": "ccb1577d95539878e84126e89af53691",
"assets/assets/Serate_Estive/70904955_1598142666983573_9030952498357075968_n.jpg": "b2a347908c80faa4fb84fdd1e56fd0eb",
"assets/assets/Serate_Estive/70982155_1598143393650167_5423249496647663616_n.jpg": "ee40a66bde052ec2bee64dda637efac9",
"assets/assets/Serate_Estive/71217419_1598141620317011_338726083312484352_n.jpg": "d1815699e20f65da51cd4897caf3800e",
"assets/assets/Serate_Estive/71489983_1598143580316815_4622405500883959808_n.jpg": "de14cd0087e53ed9ee6ceafebb2da41b",
"assets/assets/Serate_Invernali/74382530_1667791380018701_7710811806494621696_n.jpg": "cb800518d477091f2870c3b9fbc3266e",
"assets/assets/Serate_Invernali/76726003_1667791170018722_7519013449116942336_n.jpg": "70c37b1148a3f1a5d62da145704625ed",
"assets/assets/Serate_Invernali/76776572_1667791910018648_3348717594747076608_n.jpg": "4acb353a84533a0c5ce0b630b19326a5",
"assets/assets/Serate_Invernali/76912032_1667791883351984_6935705140259192832_n.jpg": "c7175cf1282a39673bcc34bcfcb0761d",
"assets/assets/Serate_Invernali/78676800_1667791793351993_8124741379885629440_n.jpg": "5618a1840855814cd2f7390c9a4849d6",
"assets/assets/Serate_Invernali/78784117_1667791786685327_3970289561086459904_n.jpg": "b324dedac72ec75804c3171742124177",
"assets/assets/Serate_Invernali/80699612_1705319142932591_1561758844512632832_n.jpg": "2f264262b64332945923e3a2181af07a",
"assets/assets/Serate_Invernali/81016903_1705319069599265_4205466585642565632_n.jpg": "7d65a5ead35377a6dd9b112cbc9415e8",
"assets/assets/Serate_Invernali/81898560_1705319169599255_5296808206369030144_n.jpg": "7fb5f61d8d3018978d0067e1f4f696f8",
"assets/assets/Spettacoli/180446385_2161572607307240_4709612394966189328_n.jpg": "25c5e399127098f772f2ac509cd305bc",
"assets/assets/Spettacoli/30704105_1202251196572724_7578347677767758330_n.jpg": "f11ba2d1bba19a2ff7885f5e97afa3c5",
"assets/assets/Spettacoli/30704616_1202250076572836_1417586076283316280_n.jpg": "f08d8301c037cd2a688c1422cb81c87f",
"assets/assets/Spettacoli/30704967_1202250723239438_4140054836850606953_n.jpg": "f7a15eabc2a3e2f17511bd34784c6ed1",
"assets/assets/Spettacoli/30705896_1202250619906115_4537730462576434906_n.jpg": "968313806e0ad0c47759b651ac1c753c",
"assets/assets/Spettacoli/30708132_1202251746572669_1117448864288947566_n.jpg": "28119e7d28a740d9cdd6cd59c2e13e06",
"assets/assets/Spettacoli/30708329_1202251959905981_9076075157413313639_n.jpg": "7236b29f571eb881c947a556c6176a9c",
"assets/assets/Spettacoli/30710803_1202250176572826_5706225406986593151_n.jpg": "5a7720de70807875dd55f194c14391f2",
"assets/assets/Spettacoli/30713787_1202250879906089_8985868533330239230_n.jpg": "006d3b5cf22c74eaaba43cc8edcffeb5",
"assets/assets/Spettacoli/30714129_1202251346572709_3584851600492354527_n.jpg": "53d1efa98caa52ba398edd9a77a820c8",
"assets/assets/Spettacoli/30714310_1202251053239405_1628021037794889553_n.jpg": "c2048b043e9d3df8155f91cbf90d3767",
"assets/assets/Spettacoli/30716632_1202251673239343_846597586639237014_n.jpg": "9763f7b75ea6723e7a8b6cc69fcb7494",
"assets/assets/Spettacoli/30724226_1202411536556690_928584338858631078_n.jpg": "bd3ea6dd194046f808f57a4ac688143c",
"assets/assets/Spettacoli/30725398_1202250139906163_2698972386088107914_n.jpg": "5999fecc428688ed723cfcde4a1eeb9b",
"assets/assets/Spettacoli/30726671_1202250949906082_7604432259878236192_n.jpg": "1271698c881cf543b5fbe157946bc6ae",
"assets/assets/Spettacoli/30727668_1202250683239442_963407339014171080_n.jpg": "afa7cf81b9d182132a5972ba6601834e",
"assets/assets/Spettacoli/30742429_1202411956556648_7633825249279260624_n.jpg": "8865355d109ec3480a8453fea11827f9",
"assets/assets/Stage/74788296_1660211950776644_6659429251525115904_n.jpg": "06957456c4cdc8b29a93c783d65764ee",
"assets/assets/Stage/75305220_1660211940776645_7381401996873433088_n.jpg": "99f4095e607e1d513a04d408adb0db1d",
"assets/assets/Stage/75534268_1660211934109979_3782645201588191232_n.jpg": "dc74a3b81de124c61df23b8035ecc3fa",
"assets/assets/Stage/75550440_1660212030776636_6254924751936946176_n.jpg": "30163c4243eaadf5585aaa7d349fb237",
"assets/assets/Stage/75550511_1660211870776652_5339036599701209088_n.jpg": "c0886f10e1edaef07cf942b1efc62c5d",
"assets/assets/Stage/76693216_1660211927443313_2400058979481812992_n.jpg": "9703408046d2ebeac78fbc81ec98ce80",
"assets/assets/Stage/76765628_1660212014109971_1933153789108289536_n.jpg": "ad9da8c326cd329351109de3c250b9c4",
"assets/assets/Stage/76767454_1660211877443318_6210143932555198464_n.jpg": "eb117744edf06c7b6792103f4fa5c352",
"assets/assets/Stage/78394684_1660212060776633_1370677390191099904_n.jpg": "5456c4c02a0f0127ae2e574e78ee094b",
"assets/assets/video/bachata.mp4": "cbbcfc14ebbc1e4a1729e09c03b3c42c",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "7f4ae6e206d00e1c41c9c274045c827a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3241d1d9c15448a4da96df05f3292ffe",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "eaed33dc9678381a55cb5c13edaf241d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ffed6899ceb84c60a1efa51c809a57e4",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "c5a75f03f7c4a6b9af8bb027fd1c5d2b",
"/": "c5a75f03f7c4a6b9af8bb027fd1c5d2b",
"main.dart.js": "72ab183b28d287a6091287b3f9054061",
"manifest.json": "869ac77525f952659a99a7af951d0199",
"version.json": "ef1f39cc45b4bd1051fc280f7f45c147"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
