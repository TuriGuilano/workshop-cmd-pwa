//minder functioneel maar het werkt wel....
//hiermee sla je dus het skipWaiting over.
// self.addEventListener('install', event => event.waitUntil(
//   caches.open('bv-v1-core')
//     .then(cache => cache.add('/offline/'))
//     .then(self.skipWaiting())
// ));

// self.addEventListener('fetch', function(event) {
//   console.log(event.request.url);
//   event.respondWith(
//    fetch(event.request)
//      .catch(err => fetchOfflinePage())
//    )
// });


//add on self or this
//je hebt response en request objects, die kan je aanroepen.
self.addEventListener('fetch', function(event) {
  console.log(event.request.url);
  event.respondWith(new Response('hijacked!'));
});

//cache on fetch pattern, sla de cache op
