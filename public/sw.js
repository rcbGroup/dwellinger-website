// Dwellinger Service Worker v1.0
const CACHE_NAME = 'dwellinger-v1'
const STATIC_CACHE = 'dwellinger-static-v1'
const DYNAMIC_CACHE = 'dwellinger-dynamic-v1'

const STATIC_ASSETS = ['/', '/search', '/about', '/contact', '/offline', '/manifest.webmanifest']

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(STATIC_CACHE).then((cache) => cache.addAll(STATIC_ASSETS).catch(() => {})))
  self.skipWaiting()
})

self.addEventListener('activate', (event) => {
  event.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((key) => key !== STATIC_CACHE && key !== DYNAMIC_CACHE).map((key) => caches.delete(key)))))
  self.clients.claim()
})

self.addEventListener('fetch', (event) => {
  const { request } = event
  if (request.method !== 'GET' || !request.url.startsWith('http') || request.url.includes('/api/')) return

  if (request.destination === 'image' || request.destination === 'font' || request.url.includes('/_next/static/')) {
    event.respondWith(caches.match(request).then((cached) => cached || fetch(request).then((response) => { const clone = response.clone(); caches.open(STATIC_CACHE).then((cache) => cache.put(request, clone)); return response })))
    return
  }

  event.respondWith(fetch(request).then((response) => { const clone = response.clone(); caches.open(DYNAMIC_CACHE).then((cache) => { cache.put(request, clone) }); return response }).catch(() => caches.match(request).then((cached) => cached || caches.match('/offline'))))
})

self.addEventListener('sync', (event) => { if (event.tag === 'quote-request') { event.waitUntil(Promise.resolve()) } })

self.addEventListener('push', (event) => {
  if (!event.data) return
  const data = event.data.json()
  event.waitUntil(self.registration.showNotification(data.title || 'Dwellinger', { body: data.body || '', icon: '/icons/icon-192x192.png', data: { url: data.url || '/' } }))
})

self.addEventListener('notificationclick', (event) => { event.notification.close(); event.waitUntil(clients.openWindow(event.notification.data?.url || '/')) })
