'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "3e33bd03dc2ca9be3ee07d3a60bf1cae",
".git/config": "477048910084dad323a0e798c06159d6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "0d803e94bbf003b06161cca1821d0eca",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e53acb968c3738fb08f818c83eecab39",
".git/logs/refs/heads/main": "8000be755941d4eaa2187efbc5081119",
".git/logs/refs/remotes/origin/main": "7c6d794a69121d2da31e9f7762264868",
".git/objects/01/f51cba8adf9f32916d3baaa810a34dcde9d6c5": "693b90913365a40ad8e79cc04c9098bd",
".git/objects/02/b88f93941dda6cb543fa831877a82fb2f628b4": "a5435377903a75db57a3db6b29787012",
".git/objects/02/ff6fff07885b50373c35a6f59819b68e3ca8f3": "5da2ce61fd26311760edfa680b6dd662",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/0a/1454b00f373617209440f0a3a601d76ee2c8b2": "076cb7bcb9b07989c50b2826e15f7d45",
".git/objects/11/f1dfd87ca6a3d6bdee4de37c3799d0c225e4b5": "08e3bdf4ec84fbaf46807aab9c1b3786",
".git/objects/15/d6a1e7bff19e5b7aa5e77d7c02b853a37c66af": "cf7762603eff113650d1fa13b047b198",
".git/objects/19/47b8639039415d3ec2f8b1243b89c0202aeb01": "1dc53e6ff1073021f63fb8c2e2dfecb1",
".git/objects/1e/8cfe97819cc5e78eb1c5ce6c6ed80fea7dd811": "6f93619417ba966c0a0a384ff936ebe4",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/8c623d53d18282b843240c8401afb5e696bfc6": "e7bb3fe347d1c1e70ed15e1446eede79",
".git/objects/1f/8f9891034cb8dd48b5e9c8785c0d8d6a4de83f": "84c3e1f0471fd41be3cda5ae410fba0a",
".git/objects/21/e6d88984804b11926a7a7daad239d9e1d23e57": "e11acdaaccc35f42d7feb322bc64fd99",
".git/objects/25/2426a7e4da03adbbffb944927fa420f2b2c57d": "36a35d797d9c1b7dad7e5a342fde0da1",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/2f/b571137525a5d182b20a39518ebb460b036620": "685e31193f966af41a1a09aad08ed15c",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/36/04b3ae17e148c372b37ff4a7f12ce74e79e68a": "1c4c7af76572f208efbed8f805c84b69",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3b/deb0ce55df16a1719348e648513a5b6dc2d146": "e96c1471f78b43b2ed88339bcd9ced5c",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/46/6d2f9be07a4822ac227ecb58d822d429c841d2": "22b388590e2a5f0ab97ff5c0a0b9a4c5",
".git/objects/47/d1454b475eec1ec010e2591e151d5097b50853": "e0f93f0a2ad789ff87bf2cfbbbde39e8",
".git/objects/48/ba65ed33dff18e74c62b0f08d8165db64a3085": "9aa3a7fdcbc6e5a4b96701d6dc3f541c",
".git/objects/4e/217942a49f4e9d80833a026009d293c2716fb5": "5905156a9d96c4c2ce2a37fca6ec1a70",
".git/objects/4f/9bc14d6371c5c905bd37a76175289e2c1fd1cf": "41d3ef7b04a294fd2f9bf5abd91d7688",
".git/objects/50/dcc9201f510d2367ebd1fd73d3ba7075ac8a47": "da3eb86a1d8eaa1b23f89bf413f23455",
".git/objects/55/f0196cfcc0eed795e184ae8b2921a75b219588": "b51ab476f899283ec77d261665b46d7f",
".git/objects/61/c2cedaa2f51ed11a870ec1cc00173082b43011": "7f326bff623e2acbe63f7f3bbaae9847",
".git/objects/64/919b2eae529dd51f254ee64fb8d6d4d8cac469": "c1f6e3d10392b4e913455aeaeb00e353",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/70/beb7ecbcf4b103a675c0d15650e41344024692": "808535df39620b345b13a69fa1406d01",
".git/objects/78/aab1181162bad02dbd6d8502ab5974aa0eea46": "2caddd5ad09c4c42374d8ac659c411f3",
".git/objects/7e/59876e35c22e011eb380315d8af764f4d8cb5b": "4eff2a1fc1bde79039803d5f75911cf6",
".git/objects/81/d72be70f986d8211c3fdcd0022a3be5ae2d7c1": "472471fc18de8d5e0554ea057d8582b5",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/bcdb39209f4450788e0efbb341e64060803e5f": "db144e354090383147b803bc1ebdbfe1",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/93/9fd878ec72cf6baad5e833690b45f0c9558903": "e20535d0646ee2dfc3942821538e5864",
".git/objects/94/4a81d65c17e5fb991377413e38507aeb08fd48": "c557c2593676a00cb0b9a3d6a34788c2",
".git/objects/95/00882081c9dbc70f9f57cc6f2f2c3250799523": "1922f41198f4d65e191308583f35cfcc",
".git/objects/96/50f4d0c3bdce164b790d6add5c235d3da84ff1": "998bfca16749e61a953d0cdad30acff9",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/99/278965abbff418e04a6288b586084c98ef8459": "4a78862d68ab27db1f380a8ece570a4b",
".git/objects/9c/3aee519ba9e4486762ba53a5c4770eb59511a2": "7ccae8e67017b45f8373fda9a2c68eff",
".git/objects/9f/e9714066fc0d1b64152881d11ccc55c0b43d0c": "0dae0c36fbe4c1c233a13d89aa09c330",
".git/objects/a3/22a6477934d691eb67b26d699811c78a893d83": "110b2aba618d1c783848b5b8cfeae946",
".git/objects/a3/a7a70c81a288d1274026f9c041552c4bfa897b": "f88570d05d2f7f252a72022bf7e2a147",
".git/objects/a7/5c9b73e3c252aabdcd4015dd66854f9e7d9deb": "84e6f7db10dfdb911adad30a527bbd6a",
".git/objects/a9/479ec506092a258a1be002760400a499678f88": "0e85335d09e7a3b8fcb2cdd0ed27ffff",
".git/objects/ab/0e3de5a5516a2d533385e990a9419ebba33926": "bce41a978035f21214c2a8655193fd54",
".git/objects/ac/06913a1ee59a9f5e8367ecb78f174461cef3d3": "4f4278dfb7d4c27eddb65052a990d710",
".git/objects/ad/3767797284e920af09632d14670c82962f9bc4": "8962f223360e5a1e5c571d2924b91074",
".git/objects/ad/8d19152820861424ef5f167302eb5c53a0cc4d": "9067a4268d05a1a87f69ed6c070ddb83",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/b00a9a2d8ee49fd1a9b03d54ac24514f54c909": "e7e9e016a7de699e78f70371301c4883",
".git/objects/ba/0da8713e1f3d547b8f59922bb2b55d5055dc55": "cf1d828820920ca98b2cf1df58d8220f",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bd/4c171c730f5eb9bd4d80635f3b23c07cf463b6": "3fb23b678d05edbb02f2182b4e4abd87",
".git/objects/c0/8c87792d7a68ffd71898fa598b9b983f7e7ef9": "f455d63cfccab304798020f3d589d259",
".git/objects/c5/0c65c13ce523f31b556ee5f3c48789960a80f1": "4ce72dc52fd91da5af6bc82476722ee2",
".git/objects/c5/c34e0eb0a09cda08297e7cc48f3207b36a25e6": "5f3cd05c98476e88549165e147979d85",
".git/objects/c6/40349c75c78993498f62c6bec4752666f91aa5": "20c75e56f29d24eaaa9ab52e56519a69",
".git/objects/cc/8764d5668d06177b87d521afae9a94df411433": "6345ae28807f2c40d2b5b39e72e09bac",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/19ba741c8ddb0bbb90e39d79a90de1eeb7864c": "5a716798f9f6bb2abef5a61b623cf2cc",
".git/objects/d7/82b6de4bece63e891af7314ea3f127d2c04505": "66ec297d4a5924c6850ab5eb0bba6f96",
".git/objects/d8/d4d5b9b9ead3c1491f50b72345589574567274": "84a0ea52e77989179462ef249e659898",
".git/objects/d8/f4792bbeb837063fe9954db84f16c238a78ef6": "95f92dcd9a0fed03b355318960004515",
".git/objects/d9/e5d8c505dc94dbe3cf813d763da8663cd20d64": "4995fb8e0f80ebc78ea244329bbc340c",
".git/objects/da/2b71146481960c7d96bab911b2c28fc29b8d7d": "4d0bc020d7c911109d3bee35f15aa121",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/db/bf0f504d729fb915e2a768538f720034368b71": "3e1b6e7f1b087d090936bc1e0ba12678",
".git/objects/e0/298888e90f1036dd2e20a3910bec84ed0092aa": "4ec7ac17805c19bcaeb7ed46761bbedb",
".git/objects/e2/4dceeca3ca5fd05c8bc67f1724db1a36a23c69": "14be0847d3b2a6f5a109326b4b4a54db",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/6484a9a791a6ff6a19e1ecf721ae6441064e93": "4a409896b9c3add0e49b22ccf2270f70",
".git/objects/f3/4aedae5dbfc5fd23bfffef9b81afc672e48602": "81442647b67b44fa730850b893331bfa",
".git/objects/f3/535a15270e1412b1a98620b4fdd388789bab0a": "ea1967bd5bfb37b2931e711775588751",
".git/objects/f3/c39da9fbdc37f86b198bd8e5ac65b5c7ef6297": "5525522160f0f6a1f21bf4e4d2b60489",
".git/objects/fc/582eaa02a1341223209b6d4480484120ef1995": "9f4b6d06339ccc4eb61eceacba4df63e",
".git/objects/fd/c5a5ab3871b212475a42a0605522b9e0f14441": "59d16e8dbf82cb8508cfb0c38d90ef23",
".git/objects/fe/b2d12022ce290eaddd7246f13c7f3a03d458c3": "8073658348dccfa3c6f5ea10705d6ee2",
".git/objects/ff/0e5ef905037176ad9ee9241dade182dcd4d302": "0f9b5c4fbeaada09315e2f4a3bb53009",
".git/refs/heads/main": "762977a1a590fb8eb2027038435adf4a",
".git/refs/remotes/origin/main": "762977a1a590fb8eb2027038435adf4a",
"assets/AssetManifest.bin": "1a9605dd0b4f0998d5f52ce98e665cea",
"assets/AssetManifest.bin.json": "0d1bdb9a63a9973514590932b9a6c70b",
"assets/AssetManifest.json": "efc5f2d9d5da01d506d510c3687859a1",
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
"assets/assets/svgs/dart.svg": "b5d6359deadb933b7a194131961f4f89",
"assets/assets/svgs/figma.svg": "fd9589e615f681335da7a2c8b6d07075",
"assets/assets/svgs/fitnssapp.png": "f2dd1127ae5d0c5617b00c1eae6f55f1",
"assets/assets/svgs/flutter.svg": "0729a6084a22547bf3506ddce68380cd",
"assets/assets/svgs/github.svg": "1413fa8bfe4e64655eb3464e44d7b8b3",
"assets/assets/svgs/gmail.svg": "4f188c4c8b67f3a8774b2440b6585e32",
"assets/assets/svgs/img.png": "10e309de619cb9ea5e625d4e96760d7f",
"assets/assets/svgs/js.svg": "b4bcb3da1104cf9cfd13fd8dd115d12b",
"assets/assets/svgs/linkdein.svg": "82329cbd76dfca4dbec073240838dbc5",
"assets/assets/svgs/nodejs.svg": "c2929cf89b12a26b05162e028270470e",
"assets/assets/svgs/passgn.png": "d6282ecd94a1aac6aaafc39a49dd9417",
"assets/assets/svgs/postman.svg": "a371c6910e8801de61e5a0469705adf4",
"assets/assets/svgs/prtcttoxic.png": "69a0055c38a6b73fd02a566439c6885b",
"assets/assets/svgs/rdyshp.png": "7d5e081651a3a113923f2d921fc5fa3a",
"assets/assets/svgs/tele.svg": "fd0be737c96c7f91a6f60d9cf429eeb8",
"assets/assets/svgs/trgt.png": "3c3a60992541c35017d0daca5bb960b0",
"assets/assets/svgs/whtsapp.svg": "9c0ec2e16b32b70b4d87c183452879cf",
"assets/FontManifest.json": "ffc86af37a21966bee8ee4ce86cef711",
"assets/fonts/MaterialIcons-Regular.otf": "6c1bfc85391138b4651efdb0ee960bbd",
"assets/NOTICES": "89e3aa3ef4393a81d2a4d3c520c2ca1e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "383f70139ce1b3d5579ecd16129d996c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a7c5cf96d551b1f378288ada0cfb1efe",
"/": "a7c5cf96d551b1f378288ada0cfb1efe",
"main.dart.js": "c231f22655f99b8f3821e206b3ec5aac",
"manifest.json": "75ddf561701309cd388dc71fbe615148",
"version.json": "7804eb643eb875d188221832d4ff86c5"};
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
