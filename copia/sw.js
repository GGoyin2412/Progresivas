//asiganar nombre y version de la cache 
const CACHE_NAME='v1_cache_Odalis';

//ficheros para cachear en la aplicacion 

var urlsToCache= [
    './',
    './css/styles.css',
    './img/favicon.png',
    './img/imagen1.png',
    './img/imagen2.png',
    './img/imagen3.png',
    './img/favicon_16x16.png',
    './img/favicon_32x32.png',
    './img/favicon_64x64.png',
    './img/favicon_128x128.png',
    './img/favicon_192x192.png',
    './img/favicon_256x256.png',
    './img/favicon_384x384.png',
    './img/favicon_512x512.png',
    './img/favicon_1024x1024.png',
    './img/face.png',
    './img/insta.png',
    './img/x.png',
    './videos/video1.mp4',
    './videos/video2.mp4',
    './videos/video3.mp4',
]

//Evento install
//Instalacion del service worker y guarda en cache los recursos 

//self.addEventListener('install', e=> {
  //  e.waitUntil(
    //    caches.open(CACHE_NAME)
      //  .then(cache=> {
        //    return cache.addAll(urlsToCache).then(()=>{
          //      self.skipWaitting();
            //});
        //})
        //.catch(err=>console.log)
    //)
//})

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