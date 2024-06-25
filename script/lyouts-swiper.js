var swiper = new Swiper(".mySwiper", {
    spaceBetween: 0,
    slidesPerView: 4,
    // centeredSlides: true,
    // centeredSlidesBounds: true,
    // centerInsufficientSlides: true,
    // touchAngle: 15,
    grabCursor: true,
    shortSwipes: false,
    // centeredSlides: true,
    slidesPerGroup: 1,
    // autoplay: {
    //     delay: 5000,
    // },



    breakpoints: {
        // when window width is >= 999px
        320: {
            // slidesPerView: 1,
            slidesPerView: "auto",
            freeMode: false,
        },
        1000: {
            slidesPerView: 4,
        },

    },
    // loop: true,

    // freeMode: true,
    freeMode: false,
    watchSlidesProgress: true,
    navigation: {
        nextEl: ".mySwiper2__swiper-button-next",
        prevEl: ".mySwiper2__swiper-button-prev",
    },
});

var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 0,
    slidesPerView: 1,
    grabCursor: true,
    freeMode: false,
    // loop: true,
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