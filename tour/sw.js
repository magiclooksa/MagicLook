const C='ml-tour-d97ada0d';
const CORE=['./','index.html','app.js?v=d97ada0d','aframe.min.js?v=d97ada0d','manifest.webmanifest','icon-192.png','icon-512.png','icon-180.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k.startsWith('ml-tour-')&&k!==C).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;const u=new URL(e.request.url);if(u.origin!==location.origin)return;
  if(e.request.mode==='navigate'){e.respondWith(fetch(e.request).catch(()=>caches.match('index.html')));return}
  if(u.pathname.endsWith('tour.json')){e.respondWith(fetch(e.request).then(r=>{const cp=r.clone();caches.open(C).then(c=>c.put(e.request,cp));return r}).catch(()=>caches.match(e.request)));return}
  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(r2=>{if(r2.ok&&/\.(jpg|jpeg|png|webp)$/i.test(u.pathname)){const cp=r2.clone();caches.open(C).then(c=>c.put(e.request,cp));}return r2})));
});