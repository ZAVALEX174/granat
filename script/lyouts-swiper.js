var swiper = new Swiper(".mySwiper", {
    spaceBetween: 22,
    slidesPerView: 4,

    freeMode: true,
    watchSlidesProgress: true,
    navigation: {
        nextEl: ".mySwiper2__swiper-button-next",
        prevEl: ".mySwiper2__swiper-button-prev",
    },
});

var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    // effect: "fade",
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
    pagination: {
        el: '.mySwiper2__swiper-pagination',
        // dynamicBullets: true,
        clickable: true,
        type: 'progressbar',
    },

    effect: "creative",
    loopedSlides: 2,
    creativeEffect: {
        limitProgress: 2,
        prev: {
            translate: ["-100%", 0, 0],
            opacity: 0.3,
            scale: .75
        },
        next: {
            translate: ["100%", 0, 0],
            opacity: 0.3,
            scale: .75
        }
    },
    speed: 1500,
});