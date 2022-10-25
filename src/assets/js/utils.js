$(".owl-carousel").owlCarousel({
    loop: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: false,
            stagePadding: 30,
            margin: 15,
            loop: false,
        },
        767: {
            items: 1,
            nav: true,
            stagePadding: 62,
            loop: false,
        },
        1024: {
            items: 2,
            nav: true,
            stagePadding: 70,
            loop: false,
        },
    },
})

// change icon next prev in owl carousel
$(".owl-prev").html('<i class="bi bi-arrow-left"></i>')
$(".owl-next").html('<i class="bi bi-arrow-right"></i>')

// Scroll Reveal
window.sr = ScrollReveal()
sr.reveal(".home__hero", {
    origin: "top",
    duration: 2000,
    distance: "1000px",
    opacity: 0,
})

sr.reveal(".home__hero-img", {
    origin: "bottom",
    duration: 3000,
    distance: "500px",
})
sr.reveal("#video__hero", {
    origin: "left",
    duration: 5000,
    distance: "500px",
})

sr.reveal(".hello", {
    delay: 1000,
    origin: "bottom",
    duration: 2000,
    distance: "300px",
})

sr.reveal("#gallery", {
    origin: "bottom",
    duration: 2000,
    distance: "1000px",
})
sr.reveal("#imbibe", {
    desktop: true,
    origin: "bottom",
    duration: 2000,
    distance: "200px",
})

sr.reveal("#relax-banner", {
    origin: "bottom",
    duration: 2000,
    distance: "300px",
})
