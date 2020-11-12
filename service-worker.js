/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["C:/Users/28366/OneDrive/blog/public/2020/08/10/ButterflyTest/index.html","62ffe5f868e5991d5b3f227f30c93147"],["C:/Users/28366/OneDrive/blog/public/2020/08/14/Live2dAndHexo/index.html","d645d03f7704e597f8d583adce8f4bd5"],["C:/Users/28366/OneDrive/blog/public/2020/08/15/移动端因Live2d造成的访问卡顿解决方案/index.html","2d2f7083fffcdabb37da4057382f5087"],["C:/Users/28366/OneDrive/blog/public/2020/08/19/PythonNarcissisticNumber/index.html","d6a784743ec153fcd7d5c2f0d1339e60"],["C:/Users/28366/OneDrive/blog/public/2020/09/10/PCSDK-link/index.html","90e0a032bcb8d020730c66a95dc28b01"],["C:/Users/28366/OneDrive/blog/public/2020/10/26/MarkDown grammar/index.html","9bdbbefc693abdd44f596f684d058316"],["C:/Users/28366/OneDrive/blog/public/2020/10/26/一些话/index.html","23e39be49986f2bf8b74b1afffe5ace1"],["C:/Users/28366/OneDrive/blog/public/404.html","fde10c67051d6396ae5c41ff211b7a22"],["C:/Users/28366/OneDrive/blog/public/JsFile/Bottomfish.js","7c4b274e9128d5613f112b85a5e57210"],["C:/Users/28366/OneDrive/blog/public/Talk/index.html","a88656364b0104c3b3c63a9b0793d4d3"],["C:/Users/28366/OneDrive/blog/public/about/index.html","9237f8ff6008c854cd540ad8334c1d18"],["C:/Users/28366/OneDrive/blog/public/archives/2020/08/index.html","3c43115a909ca5b944e039c2ad593bca"],["C:/Users/28366/OneDrive/blog/public/archives/2020/09/index.html","8330d2985bc0ff39db9739fb64a5f9dc"],["C:/Users/28366/OneDrive/blog/public/archives/2020/10/index.html","fc9bb1ecbe9508ade40ec9f190915937"],["C:/Users/28366/OneDrive/blog/public/archives/2020/index.html","af22a48d6930a57d0c1370823289898b"],["C:/Users/28366/OneDrive/blog/public/archives/index.html","cf4e19aa326213556b5daafc90412487"],["C:/Users/28366/OneDrive/blog/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["C:/Users/28366/OneDrive/blog/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["C:/Users/28366/OneDrive/blog/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["C:/Users/28366/OneDrive/blog/public/css/FxCss.css","8694069abbb8ae54dfcff2def33cdc47"],["C:/Users/28366/OneDrive/blog/public/css/bottomFish.css","e2d4604c0a896ef5e4bc933bb4c07790"],["C:/Users/28366/OneDrive/blog/public/css/fontStyle.css","ceedda7da39b976ba0434a7493e3660d"],["C:/Users/28366/OneDrive/blog/public/css/index.css","84612c5de11f5d5588d3e9d2e75fdb69"],["C:/Users/28366/OneDrive/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/Users/28366/OneDrive/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["C:/Users/28366/OneDrive/blog/public/img/Basic_UI_Elements_-_2.3_-_Black_Fill-42-512.png","62ddb68c1ee84e7a5668a2b2da9de722"],["C:/Users/28366/OneDrive/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/Users/28366/OneDrive/blog/public/img/avatar.jpg","8b8eb3b88c3d7513bbc89fd45870620b"],["C:/Users/28366/OneDrive/blog/public/img/bannerBG.jpg","1825ea65ac1627c7d891cba57f39210d"],["C:/Users/28366/OneDrive/blog/public/img/favicon.png","b6cc7b0dd17784b17e4da110bc1a4b60"],["C:/Users/28366/OneDrive/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["C:/Users/28366/OneDrive/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["C:/Users/28366/OneDrive/blog/public/img/loading.gif","8c9c85483c515551b264ed6eecc22be9"],["C:/Users/28366/OneDrive/blog/public/img/logo.png","93071e2ea6e8baec40c923901fa481a5"],["C:/Users/28366/OneDrive/blog/public/img/personal.png","cac94a65ead4ff08c4ec151e98b51ec4"],["C:/Users/28366/OneDrive/blog/public/img/pwa/icons/icons36.png","9626b702e9743b1e350ec43f7331095d"],["C:/Users/28366/OneDrive/blog/public/img/pwa/icons/icons48.png","c22efc79f634a5e92374dc21d094c35d"],["C:/Users/28366/OneDrive/blog/public/img/pwa/icons/icons72.png","8ba5756a87d3efc9666575a57783ef10"],["C:/Users/28366/OneDrive/blog/public/img/pwa/icons/icons96.png","e84fd0fcfa6900e58f7cfa7c38e5bcca"],["C:/Users/28366/OneDrive/blog/public/img/valineBG.gif","46cf5c43c83505a06428c1cb9997e9d8"],["C:/Users/28366/OneDrive/blog/public/index.html","354842178d4398f1e95506b901844ec9"],["C:/Users/28366/OneDrive/blog/public/js/FxStyle.js","4b75bd563222e7bc4421b7fea0923cf9"],["C:/Users/28366/OneDrive/blog/public/js/main.js","d95e6f39385c50c361e6383360ee3250"],["C:/Users/28366/OneDrive/blog/public/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["C:/Users/28366/OneDrive/blog/public/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["C:/Users/28366/OneDrive/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["C:/Users/28366/OneDrive/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["C:/Users/28366/OneDrive/blog/public/js/third-party/canvas-nest.js","6bebed368a1bbcb630dd146cefb103b7"],["C:/Users/28366/OneDrive/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["C:/Users/28366/OneDrive/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["C:/Users/28366/OneDrive/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["C:/Users/28366/OneDrive/blog/public/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["C:/Users/28366/OneDrive/blog/public/js/tw_cn.js","5b26f58076202394a66cde8b885f3225"],["C:/Users/28366/OneDrive/blog/public/js/utils.js","e57c4c90806ca839dfe2b70b3cc6b6b8"],["C:/Users/28366/OneDrive/blog/public/jsInject/FxStyle.js","4b75bd563222e7bc4421b7fea0923cf9"],["C:/Users/28366/OneDrive/blog/public/link/index.html","345278f460de8c3d38d58419437b3700"],["C:/Users/28366/OneDrive/blog/public/live2d/README.html","9acbf0ea5ea7cbb80789a86d1b727a33"],["C:/Users/28366/OneDrive/blog/public/live2d/demo.html","65f272ffb612b7e32012d84cb4908f98"],["C:/Users/28366/OneDrive/blog/public/live2d/live2d/css/live2d.css","97adedecf4cf13d2e09d8e48fa17b60d"],["C:/Users/28366/OneDrive/blog/public/live2d/live2d/js/index.js","795ede23301c47384d524000b541bed0"],["C:/Users/28366/OneDrive/blog/public/live2d/live2d/js/live2d.js","088afe3263d5fadd4dfdf941f58f4785"],["C:/Users/28366/OneDrive/blog/public/live2d/live2d/js/message.js","89b50040562b10ef38475a7ba4aec84c"],["C:/Users/28366/OneDrive/blog/public/live2d/live2d/model/XueXiaoban/textures/xxb - backup.png","2e6411636e81d3e58e8315bfa586ba8d"],["C:/Users/28366/OneDrive/blog/public/live2d/live2d/model/XueXiaoban/textures/xxb 2.png","3879688fa15e77ef23e50ed933d035bf"],["C:/Users/28366/OneDrive/blog/public/live2d/live2d/model/XueXiaoban/textures/xxb.png","bea1990911f843781bf1d4daaee66abf"],["C:/Users/28366/OneDrive/blog/public/music/index.html","bb0973eaf9e25e732b643b292ced9b80"],["C:/Users/28366/OneDrive/blog/public/tags/ABB-RAPID/index.html","774dc791b6544ef51b343f2df617776c"],["C:/Users/28366/OneDrive/blog/public/tags/C/index.html","96a455066ef1561d317f385b09e329f8"],["C:/Users/28366/OneDrive/blog/public/tags/Hexo/index.html","3ed785a7e64659aea2267b575337f8a9"],["C:/Users/28366/OneDrive/blog/public/tags/Live2d/index.html","a8ace68e4a8ccf0233a017a5ee4e2272"],["C:/Users/28366/OneDrive/blog/public/tags/MarkDown/index.html","1abdc6eb4479ee953a400a500cf742c4"],["C:/Users/28366/OneDrive/blog/public/tags/Python/index.html","67186a5a4c5807cc24b4c92efbdfef63"],["C:/Users/28366/OneDrive/blog/public/tags/index.html","c20326e60904e12c53f71f806737c862"],["C:/Users/28366/OneDrive/blog/public/tags/优化/index.html","f88e0f7893546f151abd5952d2373d01"],["C:/Users/28366/OneDrive/blog/public/timeline/index.html","c4db0e38a39e4f1b0c1525e1ead5f8ea"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







