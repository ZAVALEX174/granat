const chooseSlider = new Swiper('.choose__swiper', {
    loop: true,
        speed: 1500,
        spaceBetween: 10,
    // effect: "fade", //вряд ли, тк не будет видно второго слайда
        slidesPerView: 1.25,
        autoHeight: true,
        centeredSlides: true,
        centeredSlidesBounds: true,

    pagination: {
        el: '.choose__swiper-pagination',
        // dynamicBullets: true,
        clickable: true,
        type: 'progressbar',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
        effect: "creative",
        loopedSlides:2,
        creativeEffect: {
            limitProgress: 2,
            prev: {
                translate: ["-100vw", 0, 0],
                opacity: 0,
                scale: 0
            },
            next: {
                translate: ["65%", 0, 0],
                opacity: 1, //0.4
                scale: .75
            }
        }
}
);

