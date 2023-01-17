self.addEventListener("install", (event) => {
    event.waitUntill(
        caches.open("static").then(cache => {
            return cache.addAll(["https://sujisundarraj.github.io/Suji-Web-Profilo/",
          "https://sujisundarraj.github.io/Suji-Web-Profilo/about.html",
            "'https://sujisundarraj.github.io/Suji-Web-Profilo/contact.html",
            "'https://sujisundarraj.github.io/Suji-Web-Profilo/experience.html",
            "'https://sujisundarraj.github.io/Suji-Web-Profilo/main/index.html",
            "https://sujisundarraj.github.io/Suji-Web-Profilo/qualification.html",
            "https://sujisundarraj.github.io/Suji-Web-Profilo/skill.html",
            "https://sujisundarraj.github.io/Suji-Web-Profilo/testimonial.html",
                "https://sujisundarraj.github.io/Suji-Web-Profilo/css/style.css",
                "https://sujisundarraj.github.io/Suji-Web-Profilo/animation.css",
                "https://sujisundarraj.github.io/Suji-Web-Profilo/image/about.png",
                "https://sujisundarraj.github.io/Suji-Web-Profilo/image/Basu.png",
                "https://sujisundarraj.github.io/Suji-Web-Profilo/image/currency-converter.png",
                "https://sujisundarraj.github.io/Suji-Web-Profilo/image/dhanya.png",
                "https://sujisundarraj.github.io/Suji-Web-Profilo/image/forecaster.png",
                "https://sujisundarraj.github.io/Suji-Web-Profilo/image/logo_svg.png",
                "https://sujisundarraj.github.io/Suji-Web-Profilo/image/logo_192.png",
                "https://sujisundarraj.github.io/Suji-Web-Profilo/image/logo_512.png",
                "https://sujisundarraj.github.io/Suji-Web-Profilo/image/MG_uni_logo.png",
                "https://sujisundarraj.github.io/Suji-Web-Profilo/image/paru.png",
                   "https://sujisundarraj.github.io/Suji-Web-Profilo/image/staffordshire_university_logo.jpg",                
                  "https://sujisundarraj.github.io/Suji-Web-Profilo/js/test.js",
                  "https://sujisundarraj.github.io/Suji-Web-Profilo/js/script.js",
                 "https://sujisundarraj.github.io/Suji-Web-Profilo/manifest.json",
                "https://sujisundarraj.github.io/Suji-Web-Profilo/profilo-pwa.js",
                "https://sujisundarraj.github.io/Suji-Web-Profilo/profilo-sw.js"
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
