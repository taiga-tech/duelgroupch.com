if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,c)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let o={};const r=e=>n(e,a),t={module:{uri:a},exports:o,require:r};s[a]=Promise.all(i.map((e=>t[e]||r(e)))).then((e=>(c(...e),o)))}}define(["./workbox-e53da905"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next//static/media/logo.2b299799.png",revision:"oGI6I_tV3XhVyK2kspWDG"},{url:"/_next/server/middleware-manifest.json",revision:"oGI6I_tV3XhVyK2kspWDG"},{url:"/_next/static/chunks/237-d0d8ae1bc10c1693.js",revision:"oGI6I_tV3XhVyK2kspWDG"},{url:"/_next/static/chunks/252-853e68286c2968e3.js",revision:"oGI6I_tV3XhVyK2kspWDG"},{url:"/_next/static/chunks/523.b960a2ca177459be.js",revision:"oGI6I_tV3XhVyK2kspWDG"},{url:"/_next/static/chunks/600-ec6859ff411c1b3f.js",revision:"oGI6I_tV3XhVyK2kspWDG"},{url:"/_next/static/chunks/817-b8d665a2fb8c1bd2.js",revision:"oGI6I_tV3XhVyK2kspWDG"},{url:"/_next/static/chunks/992-33e4ff00b9426d8e.js",revision:"oGI6I_tV3XhVyK2kspWDG"},{url:"/_next/static/chunks/framework-0bb9d967ec28d4a2.js",revision:"oGI6I_tV3XhVyK2kspWDG"},{url:"/_next/static/chunks/main-8050277d5d32d2ed.js",revision:"oGI6I_tV3XhVyK2kspWDG"},{url:"/_next/static/chunks/pages/404-7e6d7003998f8ae3.js",revision:"oGI6I_tV3XhVyK2kspWDG"},{url:"/_next/static/chunks/pages/_app-ccbd00e91e482c11.js",revision:"oGI6I_tV3XhVyK2kspWDG"},{url:"/_next/static/chunks/pages/_error-5f8df09206ed8ddc.js",revision:"oGI6I_tV3XhVyK2kspWDG"},{url:"/_next/static/chunks/pages/about-25d2f0e740f1cab0.js",revision:"oGI6I_tV3XhVyK2kspWDG"},{url:"/_next/static/chunks/pages/blogs-943a6bf8597c0470.js",revision:"oGI6I_tV3XhVyK2kspWDG"},{url:"/_next/static/chunks/pages/contact-d630183f1be8fff3.js",revision:"oGI6I_tV3XhVyK2kspWDG"},{url:"/_next/static/chunks/pages/events-6fd059fed465fa08.js",revision:"oGI6I_tV3XhVyK2kspWDG"},{url:"/_next/static/chunks/pages/events/%5Bid%5D-efde1a0b89411a3c.js",revision:"oGI6I_tV3XhVyK2kspWDG"},{url:"/_next/static/chunks/pages/index-9a46c7f3eaf9f405.js",revision:"oGI6I_tV3XhVyK2kspWDG"},{url:"/_next/static/chunks/pages/legal/privacy-policy-01930cbabb79d3e8.js",revision:"oGI6I_tV3XhVyK2kspWDG"},{url:"/_next/static/chunks/pages/legal/terms-a2df521cb3dce513.js",revision:"oGI6I_tV3XhVyK2kspWDG"},{url:"/_next/static/chunks/pages/settings-b2a8fbc012c6a821.js",revision:"oGI6I_tV3XhVyK2kspWDG"},{url:"/_next/static/chunks/pages/team-81c54488606665cd.js",revision:"oGI6I_tV3XhVyK2kspWDG"},{url:"/_next/static/chunks/pages/team/%5Bid%5D-7aa858baa2f1545b.js",revision:"oGI6I_tV3XhVyK2kspWDG"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"oGI6I_tV3XhVyK2kspWDG"},{url:"/_next/static/chunks/webpack-164e1b5f19cff703.js",revision:"oGI6I_tV3XhVyK2kspWDG"},{url:"/_next/static/oGI6I_tV3XhVyK2kspWDG/_buildManifest.js",revision:"oGI6I_tV3XhVyK2kspWDG"},{url:"/_next/static/oGI6I_tV3XhVyK2kspWDG/_middlewareManifest.js",revision:"oGI6I_tV3XhVyK2kspWDG"},{url:"/_next/static/oGI6I_tV3XhVyK2kspWDG/_ssgManifest.js",revision:"oGI6I_tV3XhVyK2kspWDG"},{url:"/favicons/android-chrome-128x128.png",revision:"f69c6e881c0899e61ef3a87318ad617b"},{url:"/favicons/android-chrome-144x144.png",revision:"36b24eb7fbcd4d53a96548fe396f0820"},{url:"/favicons/android-chrome-152x152.png",revision:"fa5d74406070c7bd414aa6931c186c11"},{url:"/favicons/android-chrome-192x192.png",revision:"72004b5db849c541ed282a89de87be3d"},{url:"/favicons/android-chrome-256x256.png",revision:"ae55baf48078fb899e635a21138d3bab"},{url:"/favicons/android-chrome-36x36.png",revision:"8922797d73b97f0afb4bd6b2ba1505c1"},{url:"/favicons/android-chrome-384x384.png",revision:"0135a91a1b384f13493f0539ecae5c99"},{url:"/favicons/android-chrome-48x48.png",revision:"65fd804d98a30c5f2e2f25d9ebf3ffb9"},{url:"/favicons/android-chrome-512x512.png",revision:"10e121a3fceeaa4385827e31683c4962"},{url:"/favicons/android-chrome-72x72.png",revision:"dd71fc25871f9fcab1356c79e84f608e"},{url:"/favicons/android-chrome-96x96.png",revision:"0bb161ac4c55d1d8862fefcc3c27d330"},{url:"/favicons/apple-touch-icon-114x114-precomposed.png",revision:"0cedf96c4f9bfd6fbf9b4f63ecb5bbd4"},{url:"/favicons/apple-touch-icon-114x114.png",revision:"0cedf96c4f9bfd6fbf9b4f63ecb5bbd4"},{url:"/favicons/apple-touch-icon-120x120-precomposed.png",revision:"fee1152e18114735e5995e32da329755"},{url:"/favicons/apple-touch-icon-120x120.png",revision:"fee1152e18114735e5995e32da329755"},{url:"/favicons/apple-touch-icon-144x144-precomposed.png",revision:"36b24eb7fbcd4d53a96548fe396f0820"},{url:"/favicons/apple-touch-icon-144x144.png",revision:"36b24eb7fbcd4d53a96548fe396f0820"},{url:"/favicons/apple-touch-icon-152x152-precomposed.png",revision:"fa5d74406070c7bd414aa6931c186c11"},{url:"/favicons/apple-touch-icon-152x152.png",revision:"fa5d74406070c7bd414aa6931c186c11"},{url:"/favicons/apple-touch-icon-180x180-precomposed.png",revision:"229959e4dd8455e6b30fd3176c38bad7"},{url:"/favicons/apple-touch-icon-180x180.png",revision:"229959e4dd8455e6b30fd3176c38bad7"},{url:"/favicons/apple-touch-icon-57x57-precomposed.png",revision:"017b8fdcfb078c23e06df00223d71650"},{url:"/favicons/apple-touch-icon-57x57.png",revision:"017b8fdcfb078c23e06df00223d71650"},{url:"/favicons/apple-touch-icon-60x60-precomposed.png",revision:"4b20f8a5ead7b3e0c70679e4d9043fa1"},{url:"/favicons/apple-touch-icon-60x60.png",revision:"4b20f8a5ead7b3e0c70679e4d9043fa1"},{url:"/favicons/apple-touch-icon-72x72-precomposed.png",revision:"dd71fc25871f9fcab1356c79e84f608e"},{url:"/favicons/apple-touch-icon-72x72.png",revision:"dd71fc25871f9fcab1356c79e84f608e"},{url:"/favicons/apple-touch-icon-76x76-precomposed.png",revision:"f933aa83e6afdf3a33a9d6b5b99bb65e"},{url:"/favicons/apple-touch-icon-76x76.png",revision:"f933aa83e6afdf3a33a9d6b5b99bb65e"},{url:"/favicons/apple-touch-icon-precomposed.png",revision:"229959e4dd8455e6b30fd3176c38bad7"},{url:"/favicons/apple-touch-icon.png",revision:"229959e4dd8455e6b30fd3176c38bad7"},{url:"/favicons/favicon.ico",revision:"f3f53fec173180edfa9c98924585d82f"},{url:"/favicons/icon-128x128.png",revision:"f69c6e881c0899e61ef3a87318ad617b"},{url:"/favicons/icon-144x144.png",revision:"36b24eb7fbcd4d53a96548fe396f0820"},{url:"/favicons/icon-152x152.png",revision:"fa5d74406070c7bd414aa6931c186c11"},{url:"/favicons/icon-160x160.png",revision:"016b3f7c62fa546e005e44075b2bf78f"},{url:"/favicons/icon-16x16.png",revision:"55569bff51bf730c6fef0d89b68b16ca"},{url:"/favicons/icon-192x192.png",revision:"72004b5db849c541ed282a89de87be3d"},{url:"/favicons/icon-196x196.png",revision:"4069ae7a1194b626cb8aeac0a301a139"},{url:"/favicons/icon-24x24.png",revision:"dc3caec6b50ca1ebbb40c0bf34ae6103"},{url:"/favicons/icon-256x256.png",revision:"ae55baf48078fb899e635a21138d3bab"},{url:"/favicons/icon-32x32.png",revision:"4fa0915ab3485c3a907af3aed4f7c9d6"},{url:"/favicons/icon-36x36.png",revision:"8922797d73b97f0afb4bd6b2ba1505c1"},{url:"/favicons/icon-384x384.png",revision:"0135a91a1b384f13493f0539ecae5c99"},{url:"/favicons/icon-48x48.png",revision:"65fd804d98a30c5f2e2f25d9ebf3ffb9"},{url:"/favicons/icon-512x512.png",revision:"10e121a3fceeaa4385827e31683c4962"},{url:"/favicons/icon-72x72.png",revision:"dd71fc25871f9fcab1356c79e84f608e"},{url:"/favicons/icon-96x96.png",revision:"0bb161ac4c55d1d8862fefcc3c27d330"},{url:"/favicons/site-tile-150x150.png",revision:"a17280b7a20b51a0449846f1c727a9b2"},{url:"/favicons/site-tile-310x150.png",revision:"ecdcc314cf289da47a4b54f388d12365"},{url:"/favicons/site-tile-310x310.png",revision:"5799132ee446a2f656b5d16e9ac87193"},{url:"/favicons/site-tile-70x70.png",revision:"d7533ca1888b36ab386e0f6b4383ffa4"},{url:"/images/D-v2.png",revision:"7fbee00358fe4c68f1bd9680e998b8e1"},{url:"/images/logo.png",revision:"bc09d537507ee5a35587e3e219b4e54a"},{url:"/images/logoOutline.png",revision:"6fcef54f626af2ef9783bba431d157af"},{url:"/images/pagetop.png",revision:"efe5aca8c3fac4ef27cc08270062220f"},{url:"/manifest.json",revision:"d8ee011eac6c99b240c3b17443bc6403"},{url:"/robots.txt",revision:"2f07698df7de03d1ff6eb22dcdfaf09b"},{url:"/sitemap.xml",revision:"682b96fe549156943e94b865499b4c35"},{url:"/videos/op.mov",revision:"d48aab219d3374fe0fb82354124a6a1e"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
