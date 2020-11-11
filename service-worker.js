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

var precacheConfig = [["C:/users/28366/onedrive/blog/public/2020/08/10/ButterflyTest/index.html","ff5d81ec56b6482543b70df86448e3d1"],["C:/users/28366/onedrive/blog/public/2020/08/14/Live2dAndHexo/index.html","0427bbb7228059b95b6ea43b163aaffb"],["C:/users/28366/onedrive/blog/public/2020/08/15/移动端因Live2d造成的访问卡顿解决方案/index.html","5d89466e027e91470e80265fab4d1eed"],["C:/users/28366/onedrive/blog/public/2020/08/19/PythonNarcissisticNumber/index.html","3ea3756678ee35ece94f1a6d5f5ed81a"],["C:/users/28366/onedrive/blog/public/2020/09/10/PCSDK-link/index.html","dd4af6ca941c6200b310b82dd6a35d31"],["C:/users/28366/onedrive/blog/public/2020/10/26/MarkDown grammar/index.html","a58f38467ec784d529ab0e0e501f7131"],["C:/users/28366/onedrive/blog/public/2020/10/26/一些话/index.html","952c2a35a7ec261035dc7f763302b01d"],["C:/users/28366/onedrive/blog/public/404.html","519894dc3648cea7b5fb2df1384c48f8"],["C:/users/28366/onedrive/blog/public/JsFile/Bottomfish.js","7c4b274e9128d5613f112b85a5e57210"],["C:/users/28366/onedrive/blog/public/Talk/index.html","8f8aa7cf2043dca514e66f547abb3df7"],["C:/users/28366/onedrive/blog/public/about/index.html","fc7fea43f18fd0899193cf8852ad5553"],["C:/users/28366/onedrive/blog/public/archives/2020/08/index.html","e95ca27b8cec296f92794424bd249b9e"],["C:/users/28366/onedrive/blog/public/archives/2020/09/index.html","ef450cbb2161d216f5951b092259e7af"],["C:/users/28366/onedrive/blog/public/archives/2020/10/index.html","7c565f4a1e7f26f2bb2b137daf7cfe67"],["C:/users/28366/onedrive/blog/public/archives/2020/index.html","18494b1f142e49c02b503cce7c0361f4"],["C:/users/28366/onedrive/blog/public/archives/index.html","fe4d4bc4528cb2f45dc861a63fe0d240"],["C:/users/28366/onedrive/blog/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["C:/users/28366/onedrive/blog/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["C:/users/28366/onedrive/blog/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["C:/users/28366/onedrive/blog/public/css/FxCss.css","8694069abbb8ae54dfcff2def33cdc47"],["C:/users/28366/onedrive/blog/public/css/bottomFish.css","e2d4604c0a896ef5e4bc933bb4c07790"],["C:/users/28366/onedrive/blog/public/css/fontStyle.css","ceedda7da39b976ba0434a7493e3660d"],["C:/users/28366/onedrive/blog/public/css/index.css","bf938827d95566a5c38ab2089db805e3"],["C:/users/28366/onedrive/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/users/28366/onedrive/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["C:/users/28366/onedrive/blog/public/img/MarkdownPic.png","90376d8325fd0bea23f5666c82bb6889"],["C:/users/28366/onedrive/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/users/28366/onedrive/blog/public/img/avatar.jpg","8b8eb3b88c3d7513bbc89fd45870620b"],["C:/users/28366/onedrive/blog/public/img/bannerBG.jpg","1825ea65ac1627c7d891cba57f39210d"],["C:/users/28366/onedrive/blog/public/img/favicon.png","b6cc7b0dd17784b17e4da110bc1a4b60"],["C:/users/28366/onedrive/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["C:/users/28366/onedrive/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["C:/users/28366/onedrive/blog/public/img/loading.gif","8c9c85483c515551b264ed6eecc22be9"],["C:/users/28366/onedrive/blog/public/img/logo.png","93071e2ea6e8baec40c923901fa481a5"],["C:/users/28366/onedrive/blog/public/img/personal.png","cac94a65ead4ff08c4ec151e98b51ec4"],["C:/users/28366/onedrive/blog/public/img/pwa/icons/icons36.png","9626b702e9743b1e350ec43f7331095d"],["C:/users/28366/onedrive/blog/public/img/pwa/icons/icons48.png","c22efc79f634a5e92374dc21d094c35d"],["C:/users/28366/onedrive/blog/public/img/pwa/icons/icons72.png","8ba5756a87d3efc9666575a57783ef10"],["C:/users/28366/onedrive/blog/public/img/pwa/icons/icons96.png","e84fd0fcfa6900e58f7cfa7c38e5bcca"],["C:/users/28366/onedrive/blog/public/img/valineBG.gif","46cf5c43c83505a06428c1cb9997e9d8"],["C:/users/28366/onedrive/blog/public/index.html","8ad2a365098a5fe3f056422ed6b87a3c"],["C:/users/28366/onedrive/blog/public/js/FxStyle.js","4b75bd563222e7bc4421b7fea0923cf9"],["C:/users/28366/onedrive/blog/public/js/main.js","d95e6f39385c50c361e6383360ee3250"],["C:/users/28366/onedrive/blog/public/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["C:/users/28366/onedrive/blog/public/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["C:/users/28366/onedrive/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["C:/users/28366/onedrive/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["C:/users/28366/onedrive/blog/public/js/third-party/canvas-nest.js","6bebed368a1bbcb630dd146cefb103b7"],["C:/users/28366/onedrive/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["C:/users/28366/onedrive/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["C:/users/28366/onedrive/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["C:/users/28366/onedrive/blog/public/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["C:/users/28366/onedrive/blog/public/js/tw_cn.js","5b26f58076202394a66cde8b885f3225"],["C:/users/28366/onedrive/blog/public/js/utils.js","e57c4c90806ca839dfe2b70b3cc6b6b8"],["C:/users/28366/onedrive/blog/public/jsInject/FxStyle.js","4b75bd563222e7bc4421b7fea0923cf9"],["C:/users/28366/onedrive/blog/public/link/index.html","38e318869bfd715f514c610a089f8b36"],["C:/users/28366/onedrive/blog/public/live2d/README.html","9acbf0ea5ea7cbb80789a86d1b727a33"],["C:/users/28366/onedrive/blog/public/live2d/demo.html","65f272ffb612b7e32012d84cb4908f98"],["C:/users/28366/onedrive/blog/public/live2d/live2d/css/live2d.css","97adedecf4cf13d2e09d8e48fa17b60d"],["C:/users/28366/onedrive/blog/public/live2d/live2d/js/index.js","795ede23301c47384d524000b541bed0"],["C:/users/28366/onedrive/blog/public/live2d/live2d/js/live2d.js","088afe3263d5fadd4dfdf941f58f4785"],["C:/users/28366/onedrive/blog/public/live2d/live2d/js/message.js","89b50040562b10ef38475a7ba4aec84c"],["C:/users/28366/onedrive/blog/public/live2d/live2d/model/XueXiaoban/textures/xxb - backup.png","2e6411636e81d3e58e8315bfa586ba8d"],["C:/users/28366/onedrive/blog/public/live2d/live2d/model/XueXiaoban/textures/xxb 2.png","3879688fa15e77ef23e50ed933d035bf"],["C:/users/28366/onedrive/blog/public/live2d/live2d/model/XueXiaoban/textures/xxb.png","bea1990911f843781bf1d4daaee66abf"],["C:/users/28366/onedrive/blog/public/music/index.html","1b884010e598139edc902a58a569312f"],["C:/users/28366/onedrive/blog/public/tags/ABB-RAPID/index.html","d17b4f64487f5caa2071d1ec384cfdbc"],["C:/users/28366/onedrive/blog/public/tags/C/index.html","a33edc48ff6013ea32731e8f7d5de827"],["C:/users/28366/onedrive/blog/public/tags/Hexo/index.html","88361946c6e470b4902913133eff89a4"],["C:/users/28366/onedrive/blog/public/tags/Live2d/index.html","8d65de9d0a8e8ddc068d38dd31b3b698"],["C:/users/28366/onedrive/blog/public/tags/MarkDown/index.html","076f83278b8d712215292db7697b50a7"],["C:/users/28366/onedrive/blog/public/tags/Python/index.html","a92766aa1f828369651761350a309f28"],["C:/users/28366/onedrive/blog/public/tags/index.html","b33777e6cbe9f8db2c4b7c1434d05b89"],["C:/users/28366/onedrive/blog/public/tags/优化/index.html","4e34eaf92fb3fcde7f35bc6731da682e"],["C:/users/28366/onedrive/blog/public/timeline/index.html","509c74d3cad5d6d6c626703aa00a7439"]];
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







