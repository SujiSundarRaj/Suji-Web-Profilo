self.addEventListener("install", (event) => {
    event.waitUntill(
        caches.open("static").then(cache => {
            return cache.addAll(["./",
            "https://github.com/SujiSundarRaj/Suji-Web-Profilo/blob/main/about.html",
            "https://github.com/SujiSundarRaj/Suji-Web-Profilo/blob/main/contact.html",
            "https://github.com/SujiSundarRaj/Suji-Web-Profilo/blob/main/experience.html",
            "https://github.com/SujiSundarRaj/Suji-Web-Profilo/blob/main/index.html",
            "https://github.com/SujiSundarRaj/Suji-Web-Profilo/blob/main/qualification.html",
            "https://github.com/SujiSundarRaj/Suji-Web-Profilo/blob/main/skill.html",
            "https://github.com/SujiSundarRaj/Suji-Web-Profilo/blob/main/testimonial.html",
                "https://github.com/SujiSundarRaj/Suji-Web-Profilo/blob/main/css/style.css",
                "https://github.com/SujiSundarRaj/Suji-Web-Profilo/blob/main/animation.css",
                "https://github.com/SujiSundarRaj/Suji-Web-Profilo/blob/main/image/about.png",
                "https://github.com/SujiSundarRaj/Suji-Web-Profilo/blob/main/image/Basu.png",
                "https://github.com/SujiSundarRaj/Suji-Web-Profilo/blob/main/image/currency-converter.png",
                "https://github.com/SujiSundarRaj/Suji-Web-Profilo/blob/main/image/dhanya.png",
                "https://github.com/SujiSundarRaj/Suji-Web-Profilo/blob/main/image/forecaster.png",
                "https://github.com/SujiSundarRaj/Suji-Web-Profilo/blob/main/image/logo_svg.png",
                "https://github.com/SujiSundarRaj/Suji-Web-Profilo/blob/main/image/logo_192.png",
                "https://github.com/SujiSundarRaj/Suji-Web-Profilo/blob/main/image/logo_512.png",
                "https://github.com/SujiSundarRaj/Suji-Web-Profilo/blob/main/image/MG_uni_logo.png",
                "https://github.com/SujiSundarRaj/Suji-Web-Profilo/blob/main/image/paru.png",
                   "https://github.com/SujiSundarRaj/Suji-Web-Profilo/blob/main/image/staffordshire_university_logo.jpg",                
                  "https://github.com/SujiSundarRaj/Suji-Web-Profilo/blob/main/js/test.js",
                  "https://github.com/SujiSundarRaj/Suji-Web-Profilo/blob/main/js/script.js",
                 "https://github.com/SujiSundarRaj/Suji-Web-Profilo/blob/main/manifest.json",
                "https://github.com/SujiSundarRaj/Suji-Web-Profilo/blob/main/profilo-pwa.js",
                "https://github.com/SujiSundarRaj/Suji-Web-Profilo/blob/main/profilo-sw.js"
            ]);
        })
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
