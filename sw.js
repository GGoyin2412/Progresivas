//asignar nombre y version de la cache
const CACHE_NAME = 'v1_cache_GregorioGuerreroPW';
//ficheros a cachear en la aplicacion
var urlsToachache = [
    './',
    '.css/styles.css',
    '.img/favicon.png',
    '.img/.png',
    '.img/1.png',
    '.img/2.png',
    '.img/3.png',
    '.img/facebook.png',
    '.img/Twitter.png',
    '.img/instagram.png',
    '.img/v1.png',
    '.img/v2.png',
    '.img/v3.png',
    '.img/favicon_ggm_16x16.png',
    '.img/favicon_ggm_32x32.png',
    '.img/favicon_ggm_64x64.png',
    '.img/favicon_ggm_128x128.png',
    '.img/favicon_ggm_192x192.png',
    '.img/favicon_ggm_256x256.png',
    '.img/favicon_ggm_284x384.png',
    '.img/favicon_ggm_512x512.png',
    '.img/favicon_ggm_524x524.png',  
];
self.addEventListener('install', e => {
    e.waitUntil(
        cache.open(CACHE_NAME)
        .then(cache => {
            return cache.addAll(urlsToachache)
            .then(() => {
                self.skipWaiting();
            });
        })
    )
})
//Evento activate
// Que la app funcione sin conexión
self.addEventListener('activate', e => {
	const cacheWhitelist =[CACHE_NAME];

	e.waitUntil(
		caches.keys()
			.then(cacheNames => {
				return Promise.all(
					cacheNames.map(cacheName => {

						if(cacheWhitelist.indexOf(cacheName) === -1){
							// Borrar elementos que no se necesitan
							return caches.delete(cacheName);
						}

					})
				);
			})
		.then(() => {
			//Activar cache
			self.clients.claim();
		})
	);
});

//Evento fetch
self.addEventListener('fetch', e => {

	e.respondWith(
		caches.match(e.request)
		.then(res =>{
			if(res){
                return res;
			}
			return fetch(e.request);
		})
	);
});

