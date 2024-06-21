const chooseSlider = new Swiper('.choose__swiper', {
    loop: true,
    speed: 1500,
    // effect: "fade", //вряд ли, тк не будет видно второго слайда
    slidesPerView: 1.2,
    // spaceBetween: 500,
    centeredSlides: true,
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
        }


    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },

}
);

