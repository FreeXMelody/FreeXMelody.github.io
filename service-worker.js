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

var precacheConfig = [["e:/blog/public/2020/08/08/MarkDown grammar/index.html","aea9c9fedfe8cd64ca06edf63b274b3a"],["e:/blog/public/2020/08/08/一些话/index.html","b796d13c48e3a9624de741c9c6e7986c"],["e:/blog/public/2020/08/10/ButterflyTest/index.html","c33fef6661f8c4b961584e3f558c131a"],["e:/blog/public/2020/08/14/Live2dAndHexo/index.html","b0d49ba49dedabd288117e00f4586fb1"],["e:/blog/public/2020/08/15/移动端因Live2d造成的访问卡顿解决方案/index.html","4b259cec5a5001cf6c662b390d5e1f5b"],["e:/blog/public/2020/08/19/PythonNarcissisticNumber/index.html","b7906f3dfe590a59e4b0a27cb33165f2"],["e:/blog/public/404.html","63184639fe48a4818ffa9df1af204b21"],["e:/blog/public/Cssfile/bottomFish.css","128cdaaa5925a7039313764e2b63dc55"],["e:/blog/public/JsFile/Bottomfish.js","7c4b274e9128d5613f112b85a5e57210"],["e:/blog/public/Talk/index.html","8a0660e5b8c4f5ab3eb888efa37eaf24"],["e:/blog/public/about/index.html","90f7e62151aecd1a988e32007b38e9fe"],["e:/blog/public/archives/2020/08/index.html","1216686fd1ec27b1e28a0bc08b299705"],["e:/blog/public/archives/2020/index.html","11c5649ebfca468b919b0f34a6857c78"],["e:/blog/public/archives/index.html","ec853560554e6a67f2e398a77c184b3b"],["e:/blog/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["e:/blog/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["e:/blog/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["e:/blog/public/css/FxCss.css","97afe3ff2ad7159383adac91af5baa45"],["e:/blog/public/css/bottomFish.css","fcb5393858e25c6ca24f723ac1d0e18d"],["e:/blog/public/css/index.css","5f2993934ae3320decad672e5dc20564"],["e:/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["e:/blog/public/img/404.jpg","c3f161aa28c74f5a9a7853eeea9006fa"],["e:/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["e:/blog/public/img/avatar.png","ec60ea5d1ef6ec104e48b45b7b77857a"],["e:/blog/public/img/bannerBG.jpg","1825ea65ac1627c7d891cba57f39210d"],["e:/blog/public/img/favicon.png","39733999e63393aff750e780bd326537"],["e:/blog/public/img/favicon1616.png","a7d34d0b8068d72f826bb29a1e9feacd"],["e:/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["e:/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["e:/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["e:/blog/public/img/valineBG.gif","46cf5c43c83505a06428c1cb9997e9d8"],["e:/blog/public/index.html","2e150ec388b0df3920a6f08adffe7d10"],["e:/blog/public/js/FxStyle.js","4b42ed1ea6b787900d32017838262896"],["e:/blog/public/js/main.js","125fa8cc0f50b559881e6b0be97b3db2"],["e:/blog/public/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["e:/blog/public/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["e:/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["e:/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["e:/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["e:/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["e:/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["e:/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["e:/blog/public/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["e:/blog/public/js/tw_cn.js","0176913a28754a766910352489a24a69"],["e:/blog/public/js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["e:/blog/public/jsInject/FxStyle.js","4b75bd563222e7bc4421b7fea0923cf9"],["e:/blog/public/link/index.html","7d256e44146bf0ecefb8eda078b2e2dc"],["e:/blog/public/live2d/README.html","9acbf0ea5ea7cbb80789a86d1b727a33"],["e:/blog/public/live2d/demo.html","65f272ffb612b7e32012d84cb4908f98"],["e:/blog/public/live2d/live2d/css/live2d.css","b42cd3695b1f138b9b6dbba9e9bd4e9d"],["e:/blog/public/live2d/live2d/js/index.js","795ede23301c47384d524000b541bed0"],["e:/blog/public/live2d/live2d/js/live2d.js","088afe3263d5fadd4dfdf941f58f4785"],["e:/blog/public/live2d/live2d/js/message.js","b9e8eadd4e88c4d0423a4db6081f33cd"],["e:/blog/public/live2d/live2d/model/XueXiaoban/textures/xxb - backup.png","2e6411636e81d3e58e8315bfa586ba8d"],["e:/blog/public/live2d/live2d/model/XueXiaoban/textures/xxb 2.png","3879688fa15e77ef23e50ed933d035bf"],["e:/blog/public/live2d/live2d/model/XueXiaoban/textures/xxb.png","bea1990911f843781bf1d4daaee66abf"],["e:/blog/public/music/index.html","d2b2cd87376537841c0ab19f7f18c971"],["e:/blog/public/tags/Hexo/index.html","087fd1c73c8f515822c755c456b54116"],["e:/blog/public/tags/Live2d/index.html","674810513fc470dcabd481c9c451ee56"],["e:/blog/public/tags/MarkDown/index.html","4cb530cc0d68be8d53b8957d3c8f7421"],["e:/blog/public/tags/Python/index.html","24692e57ce664456dc6b6641d2108a5d"],["e:/blog/public/tags/index.html","847620131926b25c7473c8b6f164df05"],["e:/blog/public/tags/优化/index.html","35aed1d3f5ea08d5feaf4d5be8e6ea30"]];
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







