const staticTrickyui = "trickyui-site";
const assets = [
    "/",
    "/index.html",
    "/assets/css/main.css",
    "/assets/css/font-awesome.min.css",
    "/assets/font/fontawesome-webfont.eot",
    "/assets/font/fontawesome-webfont.svg",
    "/assets/font/fontawesome-webfont.ttf",
    "/assets/font/fontawesome-webfont.woff",
    "/assets/font/fontawesome-webfont.woff2",
    "/assets/font/fontawesome-webfont.otf",
    "/images/banner.jpg",
    "/images/trickyui.png",
    "/images/arrow.svg",
    "/images/pic_01.jpg",
    "/images/pic_02.jpg",
    "/images/pic_03.jpg",
    "/images/pic_04.jpg",
    "/images/pic_05.jpg",
    "/images/pic_06.jpg",
]

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticTrickyui).then(cache => {
            cache.addAll(assets)
        })
    )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request)
        })
    )
})