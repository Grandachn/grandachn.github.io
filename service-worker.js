/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "1.jpg",
    "revision": "a85334d6facf88b14fbea27e37c8f8c1"
  },
  {
    "url": "404.html",
    "revision": "c590ec75bd80bbb799987b276e2c07d5"
  },
  {
    "url": "assets/css/0.styles.f4c277a0.css",
    "revision": "520102af7858901e76a7659a240c14e2"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.061b3904.js",
    "revision": "a7a88c4d75437d7cdb8eaa1367668d72"
  },
  {
    "url": "assets/js/3.e3640347.js",
    "revision": "1e3cbb62b000aa0a09ee259458217e4b"
  },
  {
    "url": "assets/js/4.a2443e30.js",
    "revision": "f4e29a00c9a937b8b322815a5b6b9c74"
  },
  {
    "url": "assets/js/5.b1880396.js",
    "revision": "cf30e3acd5c0b757c55c98ee0e523e8b"
  },
  {
    "url": "assets/js/6.bb61b8db.js",
    "revision": "dc33d3cc837d4cec980232a59a1eca6b"
  },
  {
    "url": "assets/js/app.2e751b41.js",
    "revision": "1115fefb4daa98283b76e752488a82d5"
  },
  {
    "url": "index.html",
    "revision": "8e29d97b7b4e6584eeba4e788ce625de"
  },
  {
    "url": "java/index.html",
    "revision": "1a1d5611395c6148a9711b80ec71ddce"
  },
  {
    "url": "java/Java枚举类.html",
    "revision": "7a75005ef3ad31c43190be14b78311b9"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
